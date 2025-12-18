import { parse as espreeParse } from "espree";

/**
 * Parse with Espree to get tokens, and serialize them to JSON.
 *
 * @param {string} code - Source text
 * @param {boolean} isModule - `true` if code is a module, `false` if it's a script
 * @param {boolean} jsx - `true` if file is JSX, `false` otherwise
 * @returns Tokens as JSON string, or `null` if parsing failed
 */
export function parseEspreeTokens(code, isModule, jsx) {
  // Parse with Espree
  let tokens;
  try {
    tokens = espreeParse(code, {
      ecmaVersion: "latest",
      sourceType: isModule ? "module" : "script",
      tokens: true,
      range: true,
      ecmaFeatures: {
        jsx,
        globalReturn: true, // Allow top-level `return`
      },
    }).tokens;
  } catch {
    return null;
  }

  // Re-order fields to move `regex` to before `start`, `end`, and `range`
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.regex) {
      tokens[i] = { type: undefined, value: undefined, regex: undefined, ...token };
    }
  }

  return JSON.stringify(tokens, null, 2);
}
