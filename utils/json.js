const INFINITY_PLACEHOLDER = "__INFINITY__INFINITY__INFINITY__";
const INFINITY_REGEXP = new RegExp(`"${INFINITY_PLACEHOLDER}"`, "g");

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
  // normalize span property for typescript-eslint parsers
  if (typeof value === "object" && value !== null && typeof value.start === "undefined") {
    if ("loc" in value) {
      value = { ...value, loc: undefined };
    }
    if ("range" in value) {
      value = { type: value.type, start: value.range[0], end: value.range[1], ...value, range: undefined };
    }
  }
  return value;
}

export function jsonStringify(ast) {
  ast.hashbang = null;
  let json = JSON.stringify(ast, transformer, 2);
  json = json.replace(INFINITY_REGEXP, "1e+400");
  return json;
}
