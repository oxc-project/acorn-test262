__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 134,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 28,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "name": "Thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "name": "Thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 54,
        "value": "inner/other",
        "raw": "\"inner/other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 101,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 101,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 100,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 73,
              "end": 100,
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 98,
                "object": {
                  "type": "AwaitExpression",
                  "start": 74,
                  "end": 95,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 80,
                    "end": 95,
                    "source": {
                      "type": "Literal",
                      "start": 87,
                      "end": 94,
                      "value": "inner",
                      "raw": "\"inner\""
                    },
                    "options": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 98,
                  "name": "x",
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
    },
    {
      "type": "ImportDeclaration",
      "start": 102,
      "end": 134,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 110,
          "end": 117,
          "imported": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 115,
            "end": 117,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 124,
        "end": 133,
        "value": "package",
        "raw": "\"package\""
      },
      "attributes": [],
      "importKind": "value"
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
  "start": 19,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 50,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 28,
          "end": 29,
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 49,
        "value": "./other.js",
        "raw": "\"./other.js\""
      },
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
  "start": 19,
  "end": 87,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 44,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 26,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 41,
          "name": "Thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 42,
          "end": 44,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 87,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 87,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 72,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 61,
                  "end": 72,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 72,
                        "name": "Thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "TSAsExpression",
              "start": 75,
              "end": 86,
              "expression": {
                "type": "Literal",
                "start": 75,
                "end": 79,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 83,
                "end": 86
              }
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
