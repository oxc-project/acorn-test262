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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 23,
        "value": "./foo",
        "raw": "\"./foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 46,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 32,
        "end": 46,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 36,
            "end": 45,
            "id": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 40,
              "end": 45,
              "left": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 44,
                "end": 45,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "definite": false
          }
        ],
        "kind": "var",
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
  "end": 81,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "pi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 10,
            "name": "pi",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 25,
        "value": "B:/baz",
        "raw": "\"B:/baz\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 56,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 34,
        "end": 56,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 38,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 42,
              "end": 55,
              "callee": {
                "type": "MemberExpression",
                "start": 42,
                "end": 51,
                "object": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 46,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 51,
                  "name": "sqrt",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "UnaryExpression",
                  "start": 52,
                  "end": 54,
                  "operator": "-",
                  "prefix": true,
                  "argument": {
                    "type": "Literal",
                    "start": 53,
                    "end": 54,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 80,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 80,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 68,
            "end": 79,
            "id": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 72,
              "end": 79,
              "left": {
                "type": "Identifier",
                "start": 72,
                "end": 74,
                "name": "pi",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 77,
                "end": 79,
                "name": "pi",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "definite": false
          }
        ],
        "kind": "var",
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
  "end": 98,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 24,
        "value": "A:/bar",
        "raw": "\"A:/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 51,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 42,
        "end": 50,
        "value": "A:/foo",
        "raw": "\"A:/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 76,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 65,
              "name": "pi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 68,
              "end": 75,
              "object": {
                "type": "Identifier",
                "start": 68,
                "end": 72,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 73,
                "end": 75,
                "name": "PI",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 77,
      "end": 98,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 84,
        "end": 98,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 88,
            "end": 97,
            "id": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 92,
              "end": 97,
              "left": {
                "type": "Identifier",
                "start": 92,
                "end": 93,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "definite": false
          }
        ],
        "kind": "var",
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
