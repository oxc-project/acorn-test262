import * as parser from "@typescript-eslint/parser";
import fs from "node:fs";
import path from "node:path";
import { makeUnitsFromTest } from "./utils/typescript-make-units-from-test.cjs";
import { jsonStringify } from "./utils/json.js"

async function main() {
  const srcDir = "typescript";
  const srcFiles = fs.globSync([
    "tests/cases/compiler/**/*",
    "tests/cases/conformance/**/*",
  ], {
    cwd: srcDir,
    withFileTypes: true,
  }).filter(e => !e.isDirectory()).map(e => path.join(e.parentPath, e.name));

  // match acorn-like estree output
  function jsonReplacer(_k, v) {
    if (v && typeof v === "object") {
      if ("loc" in v) {
        v = { ...v, loc: undefined };
      }
      if ("range" in v) {
        v = { type: v.type, start: v.range[0], end: v.range[1], ...v, range: undefined };
      }
    }
    return v;
  }

  const destDir = "test-typescript";
  fs.rmSync(destDir, { recursive: true, force: true });

  for (let i = 0; i < srcFiles.length; i++) {
    // progress
    process.stdout.write(`\r${i + 1} / ${srcFiles.length}`);

    const srcFile = srcFiles[i];
    const code = fs.readFileSync(srcFile, "utf-8");
    const { tests } = makeUnitsFromTest(srcFile, code);
    let output = ``;
    for (const test of tests) {
      try {
        const result = parser.parseForESLint(test.content, {
          filePath: srcFile,
          sourceType: test.sourceType.module ? "module" : "script",
          ecmaFeatures: {
            jsx: test.sourceType.jsx,
          },
        });
        const { comments, tokens, ...program } = result.ast;
        const astJson = jsonStringify(program);
        output += `__ESTREE_TEST__:PASS:` + "\n```json\n" + astJson + "\n```\n";
      } catch (e) {
        output += `__ESTREE_TEST__:FAIL:` + "\n```json\n" + e.message + "\n```\n";
      }
    }
    const destFile = path.join(destDir, path.relative(srcDir, srcFile) + ".md");
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.writeFileSync(destFile, output);
  }
}

main();
