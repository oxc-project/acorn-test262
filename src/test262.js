import { Parser as AcornParser } from 'acorn';
import { parse as meriyahParse } from 'meriyah';
import YAML from 'yaml';
import { transformerAcorn } from './utils/json.js';
import { run } from './utils/run.js';

const disallow = [
  // Meriyah failed to produce syntax error for the following case.
  'test/annexB/language/expressions/assignmenttargettype/cover-callexpression-and-asyncarrowhead.js',
];

await run({
  submodule: 'test262',
  subDirectory: 'test',
  filter(path) {
    if (disallow.includes(path)) {
      return false;
    }
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
        // console.log(acornErr.message);
        return;
      }

      fixMeriyahValue(ast);
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
function fixMeriyahValue(value) {
  if (value === null || typeof value !== 'object') return;

  if (Array.isArray(value)) {
    for (const element of value) {
      fixMeriyahValue(element);
    }
    return;
  }

  if (Object.hasOwn(value, 'type')) fixMeriyahNode(value);

  for (const prop of Object.values(value)) {
    fixMeriyahValue(prop);
  }
}

function fixMeriyahNode(node) {
  const { type } = node;
  if (type === 'TemplateElement') {
    if (Object.hasOwn(node, 'value') && node.value && typeof node.value === 'object') {
      // `cooked` and `raw` in opposite order from Acorn (cosmetic difference only)
      if (Object.hasOwn(node.value, 'raw')) node.value = { raw: undefined, ...node.value };
    }
  } else if (type === 'FunctionDeclaration' || type === 'FunctionExpression') {
    // `expression` field is not in ESTree spec. Not sure why Acorn includes it.
    if (!Object.hasOwn(node, 'expression')) node.expression = false;
  } else if (type === 'ArrowFunctionExpression') {
    // `id` field is not in ESTree spec. Not sure why Acorn includes it.
    if (!Object.hasOwn(node, 'id')) node.id = null;
  } else if (type === 'Decorator') {
    // Wrong `start` for `CallExpression` or `MemberExpression` as decorator.
    // e.g. `@dec() class C {}` - `CallExpression`'s start should be 1 not 4.
    // e.g. `@x.y class C {}` - `MemberExpression`'s start should be 1 not 2.
    // https://github.com/meriyah/meriyah/issues/420
    if (node.expression.type === 'CallExpression') {
      node.expression.start = node.expression.callee.start;
    } else if (node.expression.type === 'MemberExpression') {
      node.expression.start = node.expression.object.start;
    }
  }
}
