import { mkdir, readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join as pathJoin } from 'node:path';

const SUBMODULES_DIR_PATH = pathJoin(import.meta.dirname, '..');
const OUTPUTS_DIR_PATH = pathJoin(import.meta.dirname, '..');

const { stdout } = process;

// Generate outputs
export async function run({submodule, dir, outputsName, filter, convertPath, process}) {
  console.log('> Generating:', submodule);

  const fixturesRootPath = pathJoin(SUBMODULES_DIR_PATH, submodule, './');
  const outputsDirPath = pathJoin(OUTPUTS_DIR_PATH, outputsName, './');

  // Find all files in fixtures dir
  const files = await readdir(pathJoin(fixturesRootPath, dir), { recursive: true, withFileTypes: true });

  const trimLen = fixturesRootPath.length;
  const fixturePaths = [];
  for (const file of files) {
    if (file.isFile()) {
      const fixturePath = pathJoin(file.parentPath.slice(trimLen), file.name);
      if (filter(fixturePath)) fixturePaths.push(fixturePath);
    }
  }

  // Empty outputs directory
  // await rm(outputsDirPath, { recursive: true });
  // await mkdir(outputsDirPath, { recursive: true });

  // Run all fixtures
  for (const [index, fixturePath] of fixturePaths.entries()) {
    stdout.write(`\r${index + 1} / ${fixturePaths.length}`);

    const code = await readFile(pathJoin(fixturesRootPath, fixturePath), 'utf8');
    const output = await process(code, fixturePath);
    if (output != null) {
      const outputPath = pathJoin(outputsDirPath, convertPath(fixturePath));
      await mkdir(dirname(outputPath), { recursive: true });
      await writeFile(outputPath, output);
    }
  }
  console.log();
}
