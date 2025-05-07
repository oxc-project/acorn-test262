__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 23,
        "raw": "\"./foo\"",
        "value": "./foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 45,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 40,
              "end": 45,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
  "end": 81,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 25,
        "raw": "\"B:/baz\"",
        "value": "B:/baz",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "pi",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "decorators": [],
            "name": "pi",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 56,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 55,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 42,
              "end": 55,
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "start": 52,
                  "end": 54,
                  "argument": {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  },
                  "operator": "-",
                  "prefix": true
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 42,
                "end": 51,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 46,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "decorators": [],
                  "name": "sqrt",
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
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 80,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 80,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 79,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 72,
              "end": 79,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "decorators": [],
                "name": "pi",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 77,
                "end": 79,
                "decorators": [],
                "name": "pi",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
  "end": 98,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "raw": "\"A:/bar\"",
        "value": "A:/bar",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 51,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 50,
        "raw": "\"A:/foo\"",
        "value": "A:/foo",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 75,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "decorators": [],
              "name": "pi",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "MemberExpression",
              "start": 68,
              "end": 75,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 72,
                "decorators": [],
                "name": "Math",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 75,
                "decorators": [],
                "name": "PI",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 98,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 98,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 88,
            "end": 97,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "BinaryExpression",
              "start": 92,
              "end": 97,
              "operator": "*",
              "left": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ],
        "declare": false,
        "kind": "var"
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
