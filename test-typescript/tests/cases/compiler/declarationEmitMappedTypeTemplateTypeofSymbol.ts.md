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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 52,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 51,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 51,
              "decorators": [],
              "name": "timestampSymbol",
              "optional": false,
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
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 134,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 134,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 133,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 133,
              "decorators": [],
              "name": "Timestamp",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 133,
                "typeAnnotation": {
                  "type": "TSMappedType",
                  "start": 86,
                  "end": 133,
                  "constraint": {
                    "type": "TSTypeQuery",
                    "start": 101,
                    "end": 123,
                    "exprName": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 123,
                      "decorators": [],
                      "name": "timestampSymbol",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "nameType": null,
                  "optional": false,
                  "readonly": null,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 126,
                    "end": 130,
                    "literal": {
                      "type": "Literal",
                      "start": 126,
                      "end": 130,
                      "raw": "true",
                      "value": true,
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": true,
        "kind": "const"
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 136,
      "end": 184,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 143,
        "end": 184,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 160,
          "end": 163,
          "decorators": [],
          "name": "now",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
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
              "decorators": [],
              "name": "Timestamp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 33,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 39,
              "end": 48,
              "decorators": [],
              "name": "timestamp",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 51,
              "end": 58,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 51,
                "end": 56,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "decorators": [],
                  "name": "now",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "\"./a\"",
        "value": "./a",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 28,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 35,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 50,
              "decorators": [],
              "name": "timestamp",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 53,
              "end": 58,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
