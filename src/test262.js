import { Parser as AcornParser } from 'acorn';
import { parse as meriyahParse } from 'meriyah';
import YAML from 'yaml';
import { transformerAcorn } from './utils/json.js';
import { run } from './utils/run.js';

await run({
  submodule: 'test262',
  subDirectory: 'test',
  filter(path) {
    return path.endsWith('.js') && !path.includes('_FIXTURE') && !path.includes('staging');
  },
  transform: transformerAcorn,
  async process(path, code) {
    const start = code.indexOf('/*---');
    const end = code.indexOf('---*/');
    const yaml = code.substring(start + 5, end);

    let preamble;
    try {
      preamble = YAML.parse(yaml);
    } catch (err) {
      // console.log('Cannot parse YAML config');
      return;
    }

    const cannotParse = preamble.negative?.phase === 'parse' &&
      preamble.negative?.type === 'SyntaxError';
    if (cannotParse) return;

    const isModule = preamble.flags?.includes('module');

    let ast;
    try {
      ast = AcornParser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: isModule ? 'module' : 'script',
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
        // Note: Do not specify `allowAwaitOutsideFunction` option.
        // It defaults to `true` for modules, `false` for scripts, which is what we want.
      });
    } catch (acornErr) {
      try {
        ast = meriyahParse(code, {
          module: isModule,
          impliedStrict: isModule,
          ranges: true,
          raw: true,
          preserveParens: true,
          globalReturn: true,
          webcompat: true, // I think this enables support for Annex B
          next: true, // Enable parsing decorators and import attributes
        });
      } catch (meriyahErr) {
        // console.log(meriyahErr.message);
        return;
      }

      fixMeriyahValue(ast, code);
    }

    return [
      {
        path: `${path.slice(0, -3)}.json`, // Replace `.js` with `.json`
        ast,
      },
    ];
  },
});

// Alter Meriyah's AST to fix mistakes and to match Acorn's
function fixMeriyahValue(value, code) {
  if (value === null || typeof value !== 'object') return;

  if (Array.isArray(value)) {
    for (const element of value) {
      fixMeriyahValue(element, code);
    }
    return;
  }

  if (Object.hasOwn(value, 'type')) fixMeriyahNode(value, code);

  for (const prop of Object.values(value)) {
    fixMeriyahValue(prop, code);
  }
}

function fixMeriyahNode(node, code) {
  const { type } = node;
  if (type === 'Literal') {
    // `bigint` property of a `Literal` which is a `BigInt` should be decimal digits only
    // - no `_`s, and not e.g. `0xFF`.
    // https://github.com/estree/estree/blob/master/es2020.md#bigintliteral
    // https://github.com/meriyah/meriyah/issues/411
    if (Object.hasOwn(node, 'bigint') && typeof node.bigint === 'string') {
      node.bigint = String(BigInt(node.bigint.replace(/_/g, '')));
    }
  } else if (type === 'TemplateElement') {
    if (Object.hasOwn(node, 'value') && node.value && typeof node.value === 'object') {
      // Wrong treatment of `\r` in `cooked` and `raw`.
      // TODO: This correction is incomplete and possibly incorrect too!
      if (typeof node.value.cooked === 'string' && typeof node.value.raw === 'string') {
        node.value.cooked = node.value.cooked.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
        node.value.raw = node.value.raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
      }
      // `cooked` and `raw` in opposite order from Acorn (cosmetic difference only)
      if (Object.hasOwn(node.value, 'raw')) {
        node.value = { raw: undefined, ...node.value };
      }
    }
  } else if (type === 'ExportNamedDeclaration') {
    // `ExportNamedDeclaration` should always have an `attributes` property
    // https://github.com/estree/estree/blob/master/es2025.md#exportnameddeclaration
    // https://github.com/meriyah/meriyah/issues/412
    if (!Object.hasOwn(node, 'attributes')) node.attributes = [];
  } else if (type === 'CallExpression' || type === 'MemberExpression') {
    // `CallExpression` and `MemberExpression` should always have an `optional` property
    // https://github.com/estree/estree/blob/master/es2020.md#chainexpression
    // https://github.com/meriyah/meriyah/issues/413
    if (!Object.hasOwn(node, 'optional')) node.optional = false;
  } else if (type === 'FunctionDeclaration' || type === 'FunctionExpression') {
    // `expression` field is not in ESTree spec. Not sure why Acorn includes it.
    if (!Object.hasOwn(node, 'expression')) node.expression = false;
  } else if (type === 'ArrowFunctionExpression') {
    // `ArrowFunctionExpression` should always have a `generator` property
    // https://github.com/estree/estree/blob/master/es2015.md#arrowfunctionexpression
    // https://github.com/meriyah/meriyah/issues/414
    if (!Object.hasOwn(node, 'generator')) node.generator = false;
    // `id` field is not in ESTree spec. Not sure why Acorn includes it.
    if (!Object.hasOwn(node, 'id')) node.id = null;
  } else if (type === 'StaticBlock') {
    // Static block's span should include `static` keyword e.g. `class C {}`
    // https://github.com/meriyah/meriyah/issues/415
    node.start = code.slice(0, node.start).lastIndexOf('static');
  } else if (type === 'PropertyDefinition') {
    // Static property's span should include `static` keyword e.g. `class C { static x = 1; }`
    // https://github.com/meriyah/meriyah/issues/416
    if (node.static) node.start = code.slice(0, node.start).lastIndexOf('static');
    // Property's span should encompass decorators.
    // What is correct has been a matter of some debate on Babel and TS-ESLint. This matches TS-ESLint.
    if (node.decorators && node.decorators.length > 0) {
      node.start = node.decorators[0].start;
    }
  } else if (type === 'MethodDefinition') {
    // Method key's span should not include `get`, `set`, `async`, or `*` tokens when key is `PrivateIdentifier`.
    // e.g.:
    // * `class C { get #m() {} }`
    // * `class C { set #m(v) {} }`
    // * `class C { async #m() {} }`
    // * `class C { * #m(v) {} }`
    // * `class C { async * #m() {} }`
    // https://github.com/meriyah/meriyah/issues/418
    if (node.key.type === 'PrivateIdentifier') {
      node.key.start += code.slice(node.key.start).indexOf('#');
    }
    // Method's span should encompass decorators.
    // What is correct has been a matter of some debate on Babel and TS-ESLint. This matches TS-ESLint.
    // https://github.com/meriyah/meriyah/issues/417
    if (node.decorators && node.decorators.length > 0) {
      node.start = node.decorators[0].start;
    }
  } else if (type === 'AccessorProperty') {
    // Accessor key's span should not include `accessor` keyword when key is `PrivateIdentifier`
    // e.g. `class C { accessor #x = 1 }`
    // https://github.com/meriyah/meriyah/issues/418
    if (node.key.type === 'PrivateIdentifier') {
      node.key.start += code.slice(node.key.start).indexOf('#');
    }
  } else if (type === 'ForStatement') {
    // Wrong `start` for `MemberExpression` in `for ([x][0];;);`
    // https://github.com/meriyah/meriyah/issues/419
    if (node.init && node.init.type === 'MemberExpression' && node.init.object.type === 'ArrayExpression') {
      node.init.start = node.init.object.start;
    }
  } else if (type === 'ForInStatement' || type === 'ForOfStatement') {
    // Wrong `start` for `MemberExpression` in `for ([x][0] in y);` or `for ([x][0] of y);`
    // https://github.com/meriyah/meriyah/issues/419
    if (node.left.type === 'MemberExpression' && node.left.object.type === 'ArrayExpression') {
      node.left.start = node.left.object.start;
    }
  } else if (type === 'Decorator') {
    // Wrong `start` for `CallExpression` as decorator.
    // e.g. `@dec() class C {}` - `CallExpression`'s start should be 1 not 0.
    // https://github.com/meriyah/meriyah/issues/420
    if (node.expression.type === 'CallExpression') {
      node.expression.start = node.expression.callee.start;
    }
    // Wrong `start` for `MemberExpression` as decorator.
    // e.g. `@x.y() class C {}` - `MemberExpression`'s start should be 1 not 0.
    // https://github.com/meriyah/meriyah/issues/420
    if (node.expression.type === 'MemberExpression') {
      node.expression.start = node.expression.object.start;
    }
  } else if (type === 'ClassDeclaration' || type === 'ClassExpression') {
    // Class's span should encompass decorators.
    // What is correct has been a matter of some debate on Babel and TS-ESLint. This matches TS-ESLint.
    // https://github.com/meriyah/meriyah/issues/421
    if (node.decorators && node.decorators.length > 0) {
      node.start = node.decorators[0].start;
    }
  }
}
