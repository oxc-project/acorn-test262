__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 185,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 52,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 52,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 51,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 51,
              "name": "timestampSymbol",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 51,
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 38,
                  "end": 51,
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 45,
                    "end": 51
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 134,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 134,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 133,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 133,
              "name": "Timestamp",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 86,
                  "end": 133,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 93,
                    "end": 123,
                    "name": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 97,
                      "name": "TKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeQuery",
                      "start": 101,
                      "end": 123,
                      "exprName": {
                        "type": "Identifier",
                        "start": 108,
                        "end": 123,
                        "name": "timestampSymbol",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 126,
                    "end": 130,
                    "literal": {
                      "type": "Literal",
                      "start": 126,
                      "end": 130,
                      "value": true,
                      "raw": "true"
                    }
                  },
                  "optional": null,
                  "readonly": null,
                  "constraint": {
                    "type": "TSTypeQuery",
                    "start": 101,
                    "end": 123,
                    "exprName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 123,
                      "name": "timestampSymbol",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "name": "TKey",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 184,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 143,
        "end": 184,
        "id": {
          "type": "Identifier",
          "start": 160,
          "end": 163,
          "name": "now",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 165,
          "end": 183,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 167,
            "end": 183,
            "exprName": {
              "type": "Identifier",
              "start": 174,
              "end": 183,
              "name": "Timestamp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "name": "timestamp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 51,
              "end": 58,
              "callee": {
                "type": "MemberExpression",
                "start": 51,
                "end": 56,
                "object": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "name": "now",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "now",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "name": "now",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "value": "./a",
        "raw": "\"./a\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 59,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "name": "timestamp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 53,
              "end": 58,
              "callee": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "name": "now",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
