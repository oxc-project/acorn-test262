import { Parser } from "acorn";
import fs from "fs/promises";
import path from "path";
import YAML from "yaml";

const INFINITY_PLACEHOLDER = "__INFINITY__INFINITY__INFINITY__";
const INFINITY_REGEXP = new RegExp(`"${INFINITY_PLACEHOLDER}"`, "g");

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

    // Add `hashbang` field
    ast.hashbang = null;

    // Serialize to JSON, with modifications
    let json = JSON.stringify(ast, transformer, 2);
    json = json.replace(INFINITY_REGEXP, "1e+400");

    await fs.writeFile(writeFile, json);
  } catch (err) {
    console.log(p);
    console.log(err.message);
  }
}

console.log("Done.");

// Replace `RegExp`s and `BigInt`s with `null`.
//
// Replace `Infinity` with `"__INFINITY__INFINITY__INFINITY__"` placeholder
// which will be replaced in JSON with `1e+400`.
//
// Sort RegExp `Literal`s' `regex.flags` property in alphabetical order, the way V8 does.
function transformer(_key, value) {
  if (typeof value === "bigint") return null;
  if (value === Infinity) return INFINITY_PLACEHOLDER;
  if (
    typeof value === "object" && value !== null && Object.hasOwn(value, "type") && value.type === "Literal" &&
    Object.hasOwn(value, "regex")
  ) {
    value.regex.flags = [...value.regex.flags].sort().join("");
    value.value = null;
  }
  return value;
}
