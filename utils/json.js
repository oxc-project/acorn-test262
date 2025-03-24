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
// Makes the same changes as `acornTransformer`, but also:
// 1. Converts location fields.
// 2. Re-orders fields.
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

  // Re-order fields. Remove `loc` field. Convert `range` to `start` + `end`.
  const altered = { type: value.type, start: value.range[0], end: value.range[1] };
  const keys = TS_AST_FIELD_ORDERS.get(value.type);
  if (keys) {
    for (const key of keys) {
      if (Object.hasOwn(value, key)) altered[key] = value[key];
    }
    for (const [key, fieldValue] of Object.entries(value)) {
      if (key === "loc" || key === "range" || keys.includes(key)) continue;
      altered[key] = fieldValue;
    }
  } else {
    // No defined order for this type. Just remove `loc` and `range` keys.
    for (const [key, fieldValue] of Object.entries(value)) {
      if (key === "loc" || key === "range") continue;
      altered[key] = fieldValue;
    }
  }

  return altered;
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

const TS_AST_FIELD_ORDERS = new Map([
  ["AccessorProperty", [
    "key",
    "value",
    "computed",
    "static",
    "decorators",
    "definite",
    "typeAnnotation",
    "accessibility",
  ]],
  ["ArrayExpression", ["elements"]],
  ["ArrayPattern", ["elements"]],
  ["ArrowFunctionExpression", [
    "id",
    "expression",
    "generator",
    "async",
    "params",
    "body",
    "typeParameters",
    "returnType",
  ]],
  ["AssignmentExpression", ["operator", "left", "right"]],
  ["AssignmentPattern", ["left", "right"]],
  ["AwaitExpression", ["argument"]],
  ["BinaryExpression", ["left", "operator", "right"]],
  ["BindingPattern", ["kind", "typeAnnotation", "optional"]],
  ["BlockStatement", ["body"]],
  ["BreakStatement", ["label"]],
  ["CallExpression", ["callee", "arguments", "optional", "typeParameters"]],
  ["CatchClause", ["param", "body"]],
  ["CatchParameter", ["pattern"]],
  ["ChainExpression", ["expression"]],
  ["ClassBody", ["body"]],
  ["ClassDeclaration", [
    "id",
    "superClass",
    "body",
    "decorators",
    "typeParameters",
    "superTypeParameters",
    "implements",
    "abstract",
    "declare",
  ]],
  ["ClassExpression", [
    "id",
    "superClass",
    "body",
    "decorators",
    "typeParameters",
    "superTypeParameters",
    "implements",
    "abstract",
    "declare",
  ]],
  ["ConditionalExpression", ["test", "consequent", "alternate"]],
  ["ContinueStatement", ["label"]],
  ["DebuggerStatement", []],
  ["Decorator", ["expression"]],
  ["DoWhileStatement", ["body", "test"]],
  ["Elision", []],
  ["EmptyStatement", []],
  ["ExportAllDeclaration", ["exported", "source", "attributes", "exportKind"]],
  ["ExportDefaultDeclaration", ["declaration"]],
  ["ExportNamedDeclaration", ["declaration", "specifiers", "source", "attributes", "exportKind"]],
  ["ExportSpecifier", ["local", "exported", "exportKind"]],
  ["ExpressionStatement", ["expression", "directive"]],
  ["ForInStatement", ["left", "right", "body"]],
  ["ForOfStatement", ["await", "left", "right", "body"]],
  ["ForStatement", ["init", "test", "update", "body"]],
  ["FormalParameter", ["pattern", "decorators", "accessibility", "readonly", "override"]],
  ["FormalParameters", ["kind", "items"]],
  ["FunctionDeclaration", [
    "id",
    "expression",
    "generator",
    "async",
    "params",
    "body",
    "declare",
    "typeParameters",
    "thisParam",
    "returnType",
  ]],
  ["FunctionExpression", [
    "id",
    "expression",
    "generator",
    "async",
    "params",
    "body",
    "declare",
    "typeParameters",
    "thisParam",
    "returnType",
  ]],
  ["Hashbang", ["value"]],
  ["Identifier", ["name", "typeAnnotation"]],
  ["IfStatement", ["test", "consequent", "alternate"]],
  ["ImportAttribute", ["key", "value"]],
  ["ImportDeclaration", ["specifiers", "source", "attributes", "importKind"]],
  ["ImportDefaultSpecifier", ["local"]],
  ["ImportExpression", ["source", "options"]],
  ["ImportNamespaceSpecifier", ["local"]],
  ["ImportSpecifier", ["imported", "local", "importKind"]],
  ["JSDocNonNullableType", ["typeAnnotation", "postfix"]],
  ["JSDocNullableType", ["typeAnnotation", "postfix"]],
  ["JSDocUnknownType", []],
  ["JSXAttribute", ["name", "value"]],
  ["JSXClosingElement", ["name"]],
  ["JSXClosingFragment", []],
  ["JSXElement", ["openingElement", "closingElement", "children"]],
  ["JSXEmptyExpression", []],
  ["JSXExpressionContainer", ["expression"]],
  ["JSXFragment", ["openingFragment", "closingFragment", "children"]],
  ["JSXIdentifier", ["name"]],
  ["JSXMemberExpression", ["object", "property"]],
  ["JSXNamespacedName", ["namespace", "name"]],
  ["JSXOpeningElement", ["attributes", "name", "selfClosing", "typeParameters"]],
  ["JSXOpeningFragment", ["attributes", "selfClosing"]],
  ["JSXSpreadAttribute", ["argument"]],
  ["JSXSpreadChild", ["expression"]],
  ["JSXText", ["value", "raw"]],
  ["LabeledStatement", ["body", "label"]],
  ["Literal", ["value", "raw", "bigint", "regex"]],
  ["LogicalExpression", ["left", "operator", "right"]],
  ["MemberExpression", ["object", "property", "computed", "optional"]],
  ["MetaProperty", ["meta", "property"]],
  ["MethodDefinition", [
    "static",
    "computed",
    "key",
    "kind",
    "value",
    "decorators",
    "override",
    "optional",
    "accessibility",
  ]],
  ["NewExpression", ["callee", "arguments", "typeParameters"]],
  ["ObjectExpression", ["properties"]],
  ["ObjectPattern", ["properties"]],
  ["ParenthesizedExpression", ["expression"]],
  ["PrivateIdentifier", ["name"]],
  ["Program", ["body", "sourceType", "hashbang"]],
  ["Property", ["method", "shorthand", "computed", "key", "value", "kind"]],
  ["PropertyDefinition", [
    "static",
    "computed",
    "key",
    "value",
    "decorators",
    "declare",
    "override",
    "optional",
    "definite",
    "readonly",
    "typeAnnotation",
    "accessibility",
  ]],
  ["RegExp", ["pattern", "flags"]],
  ["RestElement", ["argument"]],
  ["ReturnStatement", ["argument"]],
  ["SequenceExpression", ["expressions"]],
  ["SpreadElement", ["argument"]],
  ["StaticBlock", ["body"]],
  ["Super", []],
  ["SwitchCase", ["consequent", "test"]],
  ["SwitchStatement", ["discriminant", "cases"]],
  ["TSAbstractAccessorProperty", [
    "key",
    "value",
    "computed",
    "static",
    "decorators",
    "definite",
    "typeAnnotation",
    "accessibility",
  ]],
  ["TSAbstractMethodDefinition", [
    "static",
    "computed",
    "key",
    "kind",
    "value",
    "decorators",
    "override",
    "optional",
    "accessibility",
  ]],
  ["TSAbstractPropertyDefinition", [
    "static",
    "computed",
    "key",
    "value",
    "decorators",
    "declare",
    "override",
    "optional",
    "definite",
    "readonly",
    "typeAnnotation",
    "accessibility",
  ]],
  ["TSAnyKeyword", []],
  ["TSArrayType", ["elementType"]],
  ["TSAsExpression", ["expression", "typeAnnotation"]],
  ["TSBigIntKeyword", []],
  ["TSBooleanKeyword", []],
  ["TSCallSignatureDeclaration", ["typeParameters", "thisParam", "params", "returnType"]],
  ["TSClassImplements", ["expression", "typeParameters"]],
  ["TSConditionalType", ["checkType", "extendsType", "trueType", "falseType"]],
  ["TSConstructSignatureDeclaration", ["typeParameters", "params", "returnType"]],
  ["TSConstructorType", ["abstract", "typeParameters", "params", "returnType"]],
  ["TSDeclareFunction", [
    "id",
    "expression",
    "generator",
    "async",
    "params",
    "body",
    "declare",
    "typeParameters",
    "thisParam",
    "returnType",
  ]],
  ["TSEmptyBodyFunctionExpression", [
    "id",
    "expression",
    "generator",
    "async",
    "params",
    "body",
    "declare",
    "typeParameters",
    "thisParam",
    "returnType",
  ]],
  ["TSEnumDeclaration", ["id", "members", "const", "declare"]],
  ["TSEnumMember", ["id", "initializer"]],
  ["TSExportAssignment", ["expression"]],
  ["TSExternalModuleReference", ["expression"]],
  ["TSFunctionType", ["typeParameters", "thisParam", "params", "returnType"]],
  ["TSImportAttribute", ["name", "value"]],
  ["TSImportAttributes", ["attributesKeyword", "elements"]],
  ["TSImportEqualsDeclaration", ["id", "moduleReference", "importKind"]],
  ["TSImportType", ["argument", "options", "qualifier", "typeArguments", "isTypeOf"]],
  ["TSIndexSignature", ["parameters", "typeAnnotation", "readonly", "static"]],
  ["TSIndexedAccessType", ["objectType", "indexType"]],
  ["TSInferType", ["typeParameter"]],
  ["TSInstantiationExpression", ["expression", "typeParameters"]],
  ["TSInterfaceBody", ["body"]],
  ["TSInterfaceDeclaration", ["id", "extends", "typeParameters", "body", "declare"]],
  ["TSInterfaceHeritage", ["expression", "typeParameters"]],
  ["TSIntersectionType", ["types"]],
  ["TSIntrinsicKeyword", []],
  ["TSLiteralType", ["literal"]],
  ["TSMappedType", ["typeParameter", "nameType", "typeAnnotation", "optional", "readonly"]],
  ["TSMethodSignature", ["key", "computed", "optional", "kind", "typeParameters", "thisParam", "params", "returnType"]],
  ["TSModuleBlock", ["body"]],
  ["TSModuleDeclaration", ["id", "body", "kind", "declare"]],
  ["TSNamedTupleMember", ["elementType", "label", "optional"]],
  ["TSNamespaceExportDeclaration", ["id"]],
  ["TSNeverKeyword", []],
  ["TSNonNullExpression", ["expression"]],
  ["TSNullKeyword", []],
  ["TSNumberKeyword", []],
  ["TSObjectKeyword", []],
  ["TSOptionalType", ["typeAnnotation"]],
  ["TSParenthesizedType", ["typeAnnotation"]],
  ["TSPropertySignature", ["computed", "optional", "readonly", "key", "typeAnnotation"]],
  ["TSQualifiedName", ["left", "right"]],
  ["TSRestType", ["typeAnnotation"]],
  ["TSSatisfiesExpression", ["expression", "typeAnnotation"]],
  ["TSStringKeyword", []],
  ["TSSymbolKeyword", []],
  ["TSTemplateLiteralType", ["quasis", "types"]],
  ["TSThisParameter", ["typeAnnotation"]],
  ["TSThisType", []],
  ["TSTupleType", ["elementTypes"]],
  ["TSTypeAliasDeclaration", ["id", "typeParameters", "typeAnnotation", "declare"]],
  ["TSTypeAnnotation", ["typeAnnotation"]],
  ["TSTypeAssertion", ["expression", "typeAnnotation"]],
  ["TSTypeLiteral", ["members"]],
  ["TSTypeOperator", ["operator", "typeAnnotation"]],
  ["TSTypeParameter", ["name", "constraint", "default", "in", "out", "const"]],
  ["TSTypeParameterDeclaration", ["params"]],
  ["TSTypeParameterInstantiation", ["params"]],
  ["TSTypePredicate", ["parameterName", "asserts", "typeAnnotation"]],
  ["TSTypeQuery", ["exprName", "typeParameters"]],
  ["TSTypeReference", ["typeName", "typeParameters"]],
  ["TSUndefinedKeyword", []],
  ["TSUnionType", ["types"]],
  ["TSUnknownKeyword", []],
  ["TSVoidKeyword", []],
  ["TaggedTemplateExpression", ["tag", "quasi", "typeParameters"]],
  ["TemplateElement", ["value", "tail"]],
  ["TemplateElementValue", ["raw", "cooked"]],
  ["TemplateLiteral", ["expressions", "quasis"]],
  ["ThisExpression", []],
  ["ThrowStatement", ["argument"]],
  ["TryStatement", ["block", "handler", "finalizer"]],
  ["UnaryExpression", ["operator", "prefix", "argument"]],
  ["UpdateExpression", ["operator", "prefix", "argument"]],
  ["V8IntrinsicExpression", ["name", "arguments"]],
  ["VariableDeclaration", ["declarations", "kind", "declare"]],
  ["VariableDeclarator", ["id", "init", "definite"]],
  ["WhileStatement", ["test", "body"]],
  ["WithClause", ["attributesKeyword", "withEntries"]],
  ["WithStatement", ["object", "body"]],
  ["YieldExpression", ["delegate", "argument"]],
]);
