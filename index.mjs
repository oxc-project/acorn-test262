import { Parser } from "acorn";
import fs from "fs";
import path from "path";
import YAML from "yaml";
import traverse from "traverse";

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

for await (const p of walk("./test262/test")) {
  if (p.includes("_FIXTURE") || p.includes("staging")) {
    continue;
  }

  const code = await fs.promises.readFile(path.join("./", p), "utf8");
  const start = code.indexOf("/*---");
  const end = code.indexOf("---*/");
  const yaml = code.substring(start + 5, end);
  let preamble;

  try {
    preamble = YAML.parse(yaml);
  } catch(err) {
    continue
  }

  const negative =
    preamble.negative?.phase === "parse" &&
    preamble.negative?.type === "SyntaxError";

  if (negative) {
    continue;
  }

  const module = preamble.flags?.includes("module");
  const writePath = path.parse(path.join("./", p.replace(/^test262\//, "")));
  const writeFile = writePath.dir + "/" + writePath.name + ".json";

  if (!fs.existsSync(writePath.dir)) {
    fs.mkdirSync(writePath.dir, {
      recursive: true,
    });
  }

  try {
    let astJson = Parser.parse(code, {
      ecmaVersion: "latest",
      sourceType: module ? "module" : "script",
      preserveParens: true,
      allowHashBang: true,
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true,
    });

    const bigIntSerializer = (_key, value) => {
      return typeof value === "bigint" ? value.toString() + "n" : value;
    };

    // remove references
    astJson = JSON.parse(JSON.stringify(astJson, bigIntSerializer));

    // omit the raw field, which is useless for test comparisons
    traverse(astJson).forEach((node) => {
      if (node && node.type === "Literal") {
        if (node.bigint) {
          delete node.bigint;
        }
      }
    });

    await fs.promises.writeFile(writeFile, JSON.stringify(astJson, null, 2));
  } catch (err) {
    if (fs.existsSync(writeFile)) {
      fs.unlinkSync(writeFile);
      console.log("Removed: ", writeFile);
    }
    console.log(p);
    console.log(err.message);
  }
}

console.log("Done.");
