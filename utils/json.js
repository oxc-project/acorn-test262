const INFINITY_PLACEHOLDER = "__INFINITY__INFINITY__INFINITY__";
const INFINITY_REGEXP = new RegExp(`"${INFINITY_PLACEHOLDER}"`, "g");

// Transformer for Acorn AST.
//
// Replace `RegExp`s and `BigInt`s with `null`.
//
// Replace `Infinity` with `"__INFINITY__INFINITY__INFINITY__"` placeholder
// which will be replaced in JSON with `1e+400`.
//
// Sort RegExp `Literal`s' `regex.flags` property in alphabetical order, the way V8 does.
function transformerAcorn(_key, value) {
  if (typeof value === "bigint") return null;
  if (value === Infinity) return INFINITY_PLACEHOLDER;

  if (typeof value !== "object" || value === null || !Object.hasOwn(value, "type")) return value;

  if (value.type === "Literal" && Object.hasOwn(value, "regex")) {
    value.regex.flags = [...value.regex.flags].sort().join("");
    value.value = null;
  }

  return value;
}

// Transformer for TS-ESLint AST.
//
// Makes the same changes as `acornTransformer`, and also converts location fields.
function transformerTs(_key, value) {
  if (typeof value === "bigint") return null;
  if (value === Infinity) return INFINITY_PLACEHOLDER;

  if (typeof value !== "object" || value === null || !Object.hasOwn(value, "type")) return value;

  if (value.type === "Literal" && Object.hasOwn(value, "regex")) {
    value.regex.flags = [...value.regex.flags].sort().join("");
    value.value = null;
  }

  // Replace `undefined` with `null`
  for (const key of Object.keys(value)) {
    if (typeof value[key] === "undefined") {
      value[key] = null;
    }
  }

  // Remove `loc` field
  if (Object.hasOwn(value, "loc")) value.loc = undefined;

  // Convert `range` field to `start` + `end`
  if (Object.hasOwn(value, "range")) {
    value = { type: value.type, start: value.range[0], end: value.range[1], ...value, range: undefined };
  }

  return value;
}

export function jsonStringifyAcorn(ast) {
  return stringifyWith(ast, transformerAcorn);
}

export function jsonStringifyTs(ast) {
  return stringifyWith(ast, transformerTs);
}

function stringifyWith(ast, transformer) {
  // Add `hashbang` field
  ast.hashbang = null;
  // Serialize to JSON, with modifications
  let json = JSON.stringify(ast, transformer, 2);
  json = json.replace(INFINITY_REGEXP, "1e+400");
  return json;
}
