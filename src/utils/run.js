import fs from "node:fs/promises";
import { dirname, join as pathJoin } from "node:path";
import { stringifyWith } from "./json.js";

const ROOT_DIR_PATH = pathJoin(import.meta.dirname, "../../");
const SUBMODULES_DIR_PATH = pathJoin(ROOT_DIR_PATH, "submodules");
const OUTPUTS_DIR_PATH = pathJoin(ROOT_DIR_PATH, "tests");

const { stdout } = process;

// Generate outputs
export async function run({ submodule, subDirectory, filter, transform, process }) {
  console.log("> Generating:", submodule);

  const fixturesRootPath = pathJoin(SUBMODULES_DIR_PATH, submodule);
  const outputsDirPath = pathJoin(OUTPUTS_DIR_PATH, submodule);

  // Find all files in fixtures dir
  const files = await fs.readdir(pathJoin(fixturesRootPath, subDirectory), {
    recursive: true,
    withFileTypes: true,
  });

  const trimLen = fixturesRootPath.length + 1;
  const fixturePaths = [];
  for (const file of files) {
    if (file.isFile()) {
      const fixturePath = pathJoin(file.parentPath.slice(trimLen), file.name);
      if (!filter || filter(fixturePath)) fixturePaths.push(fixturePath);
    }
  }

  // Empty outputs directory
  await fs.rm(outputsDirPath, { recursive: true, force: true });
  await fs.mkdir(outputsDirPath, { recursive: true });

  // Run all fixtures
  let parseFailCount = 0;
  for (const [index, fixturePath] of fixturePaths.entries()) {
    stdout.write(`\r${index + 1} / ${fixturePaths.length}`);

    const code = await fs.readFile(pathJoin(fixturesRootPath, fixturePath), "utf8");
    const outputs = await process(fixturePath, code);
    if (!outputs) {
      parseFailCount++;
      continue;
    }

    for (const output of outputs) {
      const outputPath = pathJoin(outputsDirPath, output.path);
      await fs.mkdir(dirname(outputPath), { recursive: true });

      let { content } = output;
      if (content == null) content = stringifyWith(output.ast, transform);

      await fs.writeFile(outputPath, content);
    }
  }
  console.log(`\nFailed to parse: ${parseFailCount}`);
}
