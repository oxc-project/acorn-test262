import { Parser as AcornParser } from 'acorn';
import { expect } from 'expect';
import { parse as meriyahParse } from 'meriyah';
import fs from 'node:fs/promises';
import { dirname, join as pathJoin } from 'node:path';
import YAML from 'yaml';
import { stringifyWith, transformerAcorn } from './utils/json.js';
import { run } from './utils/run.js';

const TICKS = '```';
const MERIYAH_MISMATCHES_DIR_PATH = pathJoin(import.meta.dirname, '../meriyah_mismatches');

await fs.mkdir(MERIYAH_MISMATCHES_DIR_PATH, { recursive: true });
await fs.rm(pathJoin(MERIYAH_MISMATCHES_DIR_PATH, 'test'), { recursive: true, force: true });

let meriyahParseFails = 0, meriyahMismatches = 0;

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
        preserveParens: false, // TODO: Should be `true`
        allowHashBang: true,
        allowReturnOutsideFunction: true,
        // Note: Do not specify `allowAwaitOutsideFunction` option.
        // It defaults to `true` for modules, `false` for scripts, which is what we want.
      });
    } catch (acornErr) {
      // console.log(acornErr.message);
      return;
    }

    try {
      const meriyahAst = meriyahParse(code, {
        module: isModule,
        impliedStrict: isModule,
        ranges: true,
        raw: true,
        preserveParens: false, // TODO: Should be `true`
        globalReturn: true,
        webcompat: true, // I think this enables support for Annex B
        next: true, // Enable parsing decorators and import attributes
      });

      fixMeriyahValue(meriyahAst);

      const acornJson = stringifyWith(ast, transformerAcorn);
      const meriyahJson = stringifyWith(meriyahAst, transformerAcorn);

      if (meriyahJson !== acornJson) {
        let diff = '', shortDiff = '';
        try {
          expect(meriyahJson).toEqual(acornJson);
        } catch (err) {
          diff = err.message.replace(/\[\d+m/g, '');
          const lines = diff.split('\n').slice(5); // Trim off preamble
          diff = lines.join('\n');
          shortDiff = lines.filter(line => line.startsWith('+ ') || line.startsWith('- ')).join('\n');
        }
        await writeMeriyahFailReport(
          path,
          code,
          `\n# Mismatched lines\n\n${TICKS}diff\n${shortDiff}\n${TICKS}\n\n` +
            `# Full diff\n\n${TICKS}diff\n${diff}\n${TICKS}\n`,
        );
        meriyahMismatches++;
      }
    } catch (err) {
      await writeMeriyahFailReport(
        path, code,
        `\n# Error\n\n${TICKS}\n${err?.message}\n${err?.stack}\n${TICKS}\n`,
      );
      meriyahParseFails++;
    }

    return [
      {
        path: `${path.slice(0, -3)}.json`, // Replace `.js` with `.json`
        ast,
      },
    ];
  },
});

console.log('Meriyah parse failures:', meriyahParseFails);
console.log('Meriyah mismatches:', meriyahMismatches);

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
  } else if (type === 'PropertyDefinition') {
    // Property's span should encompass decorators.
    // What is correct has been a matter of some debate on Babel and TS-ESLint. This matches TS-ESLint.
    // https://github.com/meriyah/meriyah/issues/416
    if (node.decorators && node.decorators.length > 0) node.start = node.decorators[0].start;
  } else if (type === 'MethodDefinition') {
    // Method's span should encompass decorators.
    // What is correct has been a matter of some debate on Babel and TS-ESLint. This matches TS-ESLint.
    // https://github.com/meriyah/meriyah/issues/417
    if (node.decorators && node.decorators.length > 0) node.start = node.decorators[0].start;
  } else if (type === 'Decorator') {
    // Wrong `start` for `CallExpression` as decorator.
    // e.g. `@dec() class C {}` - `CallExpression`'s start should be 1 not 0.
    // https://github.com/meriyah/meriyah/issues/420
    if (node.expression.type === 'CallExpression') node.expression.start = node.expression.callee.start;
    // Wrong `start` for `MemberExpression` as decorator.
    // e.g. `@x.y() class C {}` - `MemberExpression`'s start should be 1 not 0.
    // https://github.com/meriyah/meriyah/issues/420
    if (node.expression.type === 'MemberExpression') node.expression.start = node.expression.object.start;
  }
}

async function writeMeriyahFailReport(path, code, report) {
  report = `# Fixture path\n\nsubmodules/test262/${path}\n\n# Source code\n\n${TICKS}js\n${code}${TICKS}\n${report}`;
  const reportPath = pathJoin(MERIYAH_MISMATCHES_DIR_PATH, `${path}.md`);
  await fs.mkdir(dirname(reportPath), { recursive: true });
  await fs.writeFile(reportPath, report);
}
