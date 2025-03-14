import * as parser from "@typescript-eslint/parser";
import fs from "node:fs";
import path from "node:path";

async function main() {
  // https://github.com/typescript-eslint/typescript-eslint/blob/53c9d7926e281aa3e26ca13a6a3b8c585d2576b5/packages/ast-spec/tests/fixtures.test.ts#L42-L48
  const srcDir = "typescript-eslint/packages/ast-spec/src";
  const globFiles = fs.globSync("**/fixtures/*/fixture.{ts,tsx}", {
    cwd: srcDir,
  });

  // https://github.com/typescript-eslint/typescript-eslint/blob/53c9d7926e281aa3e26ca13a6a3b8c585d2576b5/packages/ast-spec/tests/util/parsers/typescript-estree.ts#L11-L19
  function parseTSESTree(file, code) {
    const result = parser.parseForESLint(code, {
      sourceType: "module",
      ecmaFeatures: {
        jsx: file.endsWith("x"),
      },
    });
    const { comments, tokens, ...program } = result.ast;
    return program;
  }

  function jsonReplacer(_k, v) {
    if (v && typeof v === "object") {
      if ("loc" in v) {
        v = { ...v, loc: undefined };
      }
      if ("range" in v) {
        v = { ...v, start: v.range[0], end: v.range[1], range: undefined };
      }
    }
    return v;
  }

  const destDir = "typescript-eslint-output";
  for (const globFile of globFiles) {
    const srcFile = path.join(srcDir, globFile);
    const code = fs.readFileSync(srcFile, "utf8");
    const result = parseTSESTree(globFile, code);
    const resultJson = JSON.stringify(result, jsonReplacer, 2);

    const destFile = path.join(destDir, globFile + ".json");
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.writeFileSync(destFile, resultJson);
    fs.cpSync(srcFile, path.join(destDir, globFile));
  }
}

main();
