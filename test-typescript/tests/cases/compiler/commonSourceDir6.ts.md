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
        "value": "../baz",
        "raw": "\"../baz\""
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
  "end": 96,
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
        "end": 23,
        "value": "a/bar",
        "raw": "\"a/bar\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 49,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 33,
          "end": 34,
          "imported": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
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
        "start": 41,
        "end": 48,
        "value": "a/foo",
        "raw": "\"a/foo\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 74,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 61,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 61,
              "end": 63,
              "name": "pi",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "MemberExpression",
              "start": 66,
              "end": 73,
              "object": {
                "type": "Identifier",
                "start": 66,
                "end": 70,
                "name": "Math",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 73,
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
      "start": 75,
      "end": 96,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 82,
        "end": 96,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 86,
            "end": 95,
            "id": {
              "type": "Identifier",
              "start": 86,
              "end": 87,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "BinaryExpression",
              "start": 90,
              "end": 95,
              "left": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 94,
                "end": 95,
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
