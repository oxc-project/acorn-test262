import * as parser from "@typescript-eslint/parser";
import { walk } from "estree-walker";
import fs from "node:fs";
import path from "node:path";
import { jsonStringifyTs } from "./utils/json.js";
import { makeUnitsFromTest } from "./utils/typescript-make-units-from-test.cjs";

const EXIT = {};

async function main() {
  const srcDir = "typescript";
  const srcFiles = fs.globSync([
    "tests/cases/compiler/**/*",
    "tests/cases/conformance/**/*",
  ], {
    cwd: srcDir,
    withFileTypes: true,
  }).filter(e => !e.isDirectory()).map(e => path.join(e.parentPath, e.name));

  const destDir = "test-typescript";
  fs.rmSync(destDir, { recursive: true, force: true });

  for (let i = 0; i < srcFiles.length; i++) {
    // progress
    process.stdout.write(`\r${i + 1} / ${srcFiles.length}`);

    const srcFile = srcFiles[i];
    const code = fs.readFileSync(srcFile, "utf-8");
    const { tests } = makeUnitsFromTest(srcFile, code);
    if (tests.length === 0) {
      continue;
    }
    let output = ``;
    let hasError = false;
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

        // TS-ESLint parser has no `unambiguous` option, so emulate it here
        if (program.sourceType === "script") {
          for (const { type } of program.body) {
            if (
              [
                "ImportDeclaration",
                "ExportAllDeclaration",
                "ExportDefaultDeclaration",
                "ExportNamedDeclaration",
                "TSExportAssignment",
                "TSNamespaceExportDeclaration",
              ].includes(type)
            ) {
              program.sourceType = "module";
              break;
            }
          }

          if (program.sourceType === "script") {
            // Didn't find any module declarations. Need to walk whole AST to search for `import.meta`.
            try {
              walk(program, {
                enter(node) {
                  if (
                    node.type === "MetaProperty" && node.meta.type === "Identifier" && node.meta.name === "import" &&
                    node.property.type === "Identifier" && node.property.name === "meta"
                  ) {
                    program.sourceType = "module";
                    throw EXIT; // Stop walking
                  }
                },
              });
            } catch (err) {
              if (err !== EXIT) throw err;
            }
          }
        }

        const astJson = jsonStringifyTs(program);
        output += `__ESTREE_TEST__:PASS:` + "\n```json\n" + astJson + "\n```\n";
      } catch (e) {
        output += `__ESTREE_TEST__:FAIL:` + "\n```json\n" + e.message + "\n```\n";
        hasError = true;
        break;
      }
    }
    if (hasError) {
      continue;
    }
    const destFile = path.join(destDir, path.relative(srcDir, srcFile) + ".md");
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.writeFileSync(destFile, output);
  }
}

main();
