import * as acorn from 'acorn';
import fs from 'node:fs/promises';
import { join as pathJoin } from 'node:path';
import acornJsx from '../submodules/acorn-jsx/index.js';
import { transformerAcorn } from './utils/json.js';
import { run } from './utils/run.js';

const Parser = acorn.Parser.extend(acornJsx());

const FIXTURES_DIR_PATH = pathJoin(import.meta.dirname, '../submodules/acorn-jsx/fixtures/pass');
const TEST_FILE_PATH = pathJoin(import.meta.dirname, '../submodules/acorn-jsx/test/tests-jsx.js');

await fs.rm(FIXTURES_DIR_PATH, { recursive: true, force: true });
await fs.mkdir(FIXTURES_DIR_PATH, { recursive: true });

const fixtures = await collectFixtures();
for (const [index, code] of fixtures.entries()) {
  const filename = `${String(index).padStart(3, '0')}.jsx`;
  await fs.writeFile(pathJoin(FIXTURES_DIR_PATH, filename), code);
}

async function collectFixtures() {
  // evaluate tester and collect tests
  const testCode = await fs.readFile(TEST_FILE_PATH, 'utf8');
  const testCodeFn = `
var __tests = [];
var test = code => __tests.push(code);
var testFail = test;
var jsxTokens = {};
var acornTokens = {};
${testCode};
return __tests;
`;
  const tests = new Function(testCodeFn)();
  return tests;
}

await run({
  submodule: 'acorn-jsx',
  subDirectory: 'fixtures/pass',
  transform: transformerAcorn,
  async process(path, code) {
    try {
      const ast = Parser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
      });
      ast.hashbang = null;

      path = path.slice('fixtures/'.length);
      return [
        {
          path,
          content: code,
        },
        {
          path: `${path.slice(0, -4)}.json`, // Replace `.jsx` with `.json`
          ast,
        },
      ];
    } catch {}
  },
});
