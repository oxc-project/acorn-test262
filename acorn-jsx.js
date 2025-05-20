import * as acorn from 'acorn';
import fs from 'node:fs';
import path from 'node:path';
import acornJsx from './acorn-jsx/index.js';

function collectTests() {
  // evaluate tester and collect tests
  const testCode = fs.readFileSync('./acorn-jsx/test/tests-jsx.js', 'utf-8');
  const testCodeFn = `
var __tests = [];
var test = (...args) => __tests.push(args);
var testFail = (...args) => __tests.push(args);
var jsxTokens = {};
var acornTokens = {};
${testCode};
return __tests;
`;
  const tests = new Function(testCodeFn)();
  return tests;
}

async function main() {
  const tests = collectTests();

  // cleanup
  const baseDir = 'test-acorn-jsx/pass';
  fs.rmSync(baseDir, { recursive: true, force: true });
  fs.mkdirSync(baseDir, { recursive: true });

  // save test code and acorn ast
  const Parser = acorn.Parser.extend(acornJsx());

  for (let i = 0; i < tests.length; i++) {
    const [code] = tests[i];
    try {
      const ast = Parser.parse(code, {
        ecmaVersion: 'latest',
        sourceType: 'module',
        preserveParens: true,
        allowHashBang: true,
        allowReturnOutsideFunction: true,
      });
      ast.hashbang = null;
      const json = JSON.stringify(ast, null, 2);

      const name = String(i).padStart(3, '0');
      fs.writeFileSync(path.join(baseDir, name + '.jsx'), code);
      fs.writeFileSync(path.join(baseDir, name + '.json'), json);
    } catch (err) {
      // console.log(err);
    }
  }
}

main();
