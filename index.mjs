import { Parser } from "acorn";
import fs from "fs";
import path from "path";
import YAML from "yaml";

async function* walk(dir) {
  for await (const d of await fs.promises.opendir(dir)) {
    const entry = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(entry);
    else if (d.isFile()) yield entry;
  }
}

for await (const p of walk("./test262/test")) {
  if (p.includes("_FIXTURE")) {
    continue;
  }

  const code = await fs.promises.readFile(path.join("./", p), "utf8");
  const start = code.indexOf("/*---");
  const end = code.indexOf("---*/");
  const yaml = code.substring(start + 5, end);
  const preamble = YAML.parse(yaml);
  const module = preamble.flags?.includes("module");

  const negative =
    preamble.negative?.phase === "parse" &&
    preamble.negative?.type === "SyntaxError";
  if (negative) {
    continue;
  }

  const writePath = path.parse(path.join("./", p.replace(/^test262\//, "")));
  const writeFile = writePath.dir + "/" + writePath.name + ".json";

  if (!fs.existsSync(writePath.dir)) {
    fs.mkdirSync(writePath.dir, {
      recursive: true,
    });
  }

  try {
    const astJson = Parser.parse(code, {
      ecmaVersion: "latest",
      preserveParens: true,
      sourceType: module ? "module" : "script",
      allowHashBang: true,
    });

    await fs.promises.writeFile(writeFile, JSON.stringify(astJson, null, 2));
  } catch (err) {
    console.log(p);
    console.log(err.message);
  }
}
