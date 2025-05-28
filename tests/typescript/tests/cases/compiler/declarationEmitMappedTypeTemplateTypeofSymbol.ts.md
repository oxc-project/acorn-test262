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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 21,
            "end": 51,
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
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 54,
      "end": 134,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 61,
        "end": 134,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 75,
            "end": 133,
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
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 97,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "optional": false,
                  "readonly": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": true
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "decorators": [],
          "name": "now",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
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
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 39,
            "end": 58,
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
              "callee": {
                "type": "MemberExpression",
                "start": 51,
                "end": 56,
                "object": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 56,
                  "decorators": [],
                  "name": "now",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "now",
            "optional": false,
            "typeAnnotation": null
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
      "phase": null,
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 41,
            "end": 58,
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
              "callee": {
                "type": "Identifier",
                "start": 53,
                "end": 56,
                "decorators": [],
                "name": "now",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
