import fs from 'node:fs/promises';
import { join as pathJoin } from 'node:path';

const INFINITY_PLACEHOLDER = '__INFINITY__INFINITY__INFINITY__';
const INFINITY_REGEXP = new RegExp(`"${INFINITY_PLACEHOLDER}"`, 'g');

const fieldOrdersJson = await fs.readFile(pathJoin(import.meta.dirname, '../field-orders.json'), 'utf8');
const fieldOrders = JSON.parse(fieldOrdersJson);

// Transformer for Acorn AST.
//
// * Re-order fields as specified in `field-orders.json`.
// * Replace `RegExp`s and `BigInt`s with `null`.
// * Replace `Infinity` with `"__INFINITY__INFINITY__INFINITY__"` placeholder
//   which will be replaced in JSON with `1e+400`.
// * Sort RegExp `Literal`s' `regex.flags` property in alphabetical order, the way V8 does.
// * Add `phase` field to `ImportDeclaration` and `ImportExpression`.
// * Add `decorators` field to classes, class methods, and class properties.
export function transformerAcorn(_key, value) {
  if (typeof value === 'bigint') return null;
  if (value === Infinity) return INFINITY_PLACEHOLDER;

  if (typeof value !== 'object' || value === null || !Object.hasOwn(value, 'type')) return value;

  const { type } = value;
  if (type === 'ImportDeclaration' || type === 'ImportExpression') {
    if (!Object.hasOwn(value, 'phase')) value.phase = null;
  } else if (type === 'Literal' && Object.hasOwn(value, 'regex')) {
    value.regex.flags = [...value.regex.flags].sort().join('');
    value.value = null;
  } else if (
    type === 'ClassDeclaration' || type === 'ClassExpression' ||
    type === 'MethodDefinition' || type === 'PropertyDefinition'
  ) {
    if (!Object.hasOwn(value, 'decorators')) value.decorators = [];
  }

  // Re-order fields
  const keys = fieldOrders[type];
  if (!keys) return value;

  const reordered = { type, start: value.start, end: value.end };
  for (const key of keys) {
    if (key === 'type' || key === 'span') continue;
    if (Object.hasOwn(value, key)) reordered[key] = value[key];
  }
  for (const key of Object.keys(value)) {
    // `range` field does not appear in Acorn ASTs, but it does in Meriyah ASTs
    if (['type', 'start', 'end', 'range'].includes(key) || keys.includes(key)) continue;
    reordered[key] = value[key];
  }
  return reordered;
}

// Transformer for TS-ESLint AST.
//
// Makes the same changes as `acornTransformer`, but also:
// * Converts location fields.
// * Replaces `undefined` with `null`.
// * Does not add `decorators` fields, as they already exist.
export function transformerTs(_key, value) {
  if (typeof value === 'bigint') return null;
  if (value === Infinity) return INFINITY_PLACEHOLDER;

  if (typeof value !== 'object' || value === null || !Object.hasOwn(value, 'type')) return value;

  const { type } = value;
  if (type === 'ImportDeclaration' || type === 'ImportExpression') {
    if (!Object.hasOwn(value, 'phase')) value.phase = null;
  } else if (type === 'Literal' && Object.hasOwn(value, 'regex')) {
    value.regex.flags = [...value.regex.flags].sort().join('');
    value.value = null;
  }

  // Replace `undefined` with `null`
  for (const key of Object.keys(value)) {
    if (typeof value[key] === 'undefined') {
      value[key] = null;
    }
  }

  // Convert `range` field to `start` + `end`
  const reordered = { type, start: value.range[0], end: value.range[1] };

  // Re-order fields
  const keys = fieldOrders[type];
  if (keys) {
    for (const key of keys) {
      if (key === 'type' || key === 'span') continue;
      if (Object.hasOwn(value, key)) reordered[key] = value[key];
    }
    for (const key of Object.keys(value)) {
      if (['type', 'start', 'end', 'range', 'loc'].includes(key) || keys.includes(key)) continue;
      reordered[key] = value[key];
    }
  } else {
    const { range, loc, ...fields } = value;
    Object.assign(reordered, fields);
  }

  return reordered;
}

export function stringifyWith(ast, transformer) {
  // Add `hashbang` field
  ast.hashbang = null;
  // Serialize to JSON, with modifications
  let json = JSON.stringify(ast, transformer, 2);
  json = json.replace(INFINITY_REGEXP, '1e+400');
  return json;
}
