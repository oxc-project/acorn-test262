import { Parser } from "acorn";
import fs from "fs/promises";
import path from "path";
import traverse from "traverse";
import YAML from "yaml";

async function* walk(dir) {
  for await (const d of await fs.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

await fs.rm("./test", { recursive: true, force: true });

for await (const p of walk("./test262/test")) {
  if (p.includes("_FIXTURE") || p.includes("staging")) {
    continue;
  }

  const code = await fs.readFile(path.join("./", p), "utf8");
  const start = code.indexOf("/*---");
  const end = code.indexOf("---*/");
  const yaml = code.substring(start + 5, end);

  let preamble;
  try {
    preamble = YAML.parse(yaml);
  } catch (err) {
    console.log(p);
    console.log("Cannot parse YAML config");
    continue;
  }

  const negative = preamble.negative?.phase === "parse" &&
    preamble.negative?.type === "SyntaxError";
  if (negative) continue;

  const module = preamble.flags?.includes("module");
  const writePath = path.parse(path.join("./", p.replace(/^test262\//, "")));
  const writeFile = writePath.dir + "/" + writePath.name + ".json";

  await fs.mkdir(writePath.dir, { recursive: true });

  try {
    let ast = Parser.parse(code, {
      ecmaVersion: "latest",
      sourceType: module ? "module" : "script",
      preserveParens: true,
      allowHashBang: true,
      allowReturnOutsideFunction: true,
      // Note: Do not specify `allowAwaitOutsideFunction` option.
      // It defaults to `true` for modules, `false` for scripts, which is what we want.
    });

    // Replace `RegExp`s and `BigInt`s with `null`
    const transformer = (_key, value) =>
      (typeof value === "bigint" || (typeof value === "object" && value instanceof RegExp)) ? null : value;
    ast = JSON.parse(JSON.stringify(ast, transformer));

    await fs.writeFile(writeFile, JSON.stringify(ast, null, 2));
  } catch (err) {
    console.log(p);
    console.log(err.message);
  }
}

console.log("Done.");
