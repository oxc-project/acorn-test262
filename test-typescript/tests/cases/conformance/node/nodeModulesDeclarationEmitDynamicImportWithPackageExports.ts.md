__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 29,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 29,
      "declaration": null,
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
  "start": 19,
  "end": 192,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 64,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "AwaitExpression",
              "start": 36,
              "end": 63,
              "argument": {
                "type": "ImportExpression",
                "start": 42,
                "end": 63,
                "source": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "value": "package/cjs",
                  "raw": "\"package/cjs\""
                },
                "options": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 110,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 72,
        "end": 110,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 78,
            "end": 109,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "AwaitExpression",
              "start": 82,
              "end": 109,
              "argument": {
                "type": "ImportExpression",
                "start": 88,
                "end": 109,
                "source": {
                  "type": "Literal",
                  "start": 95,
                  "end": 108,
                  "value": "package/mjs",
                  "raw": "\"package/mjs\""
                },
                "options": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 152,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 118,
        "end": 152,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 151,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "AwaitExpression",
              "start": 128,
              "end": 151,
              "argument": {
                "type": "ImportExpression",
                "start": 134,
                "end": 151,
                "source": {
                  "type": "Literal",
                  "start": 141,
                  "end": 150,
                  "value": "package",
                  "raw": "\"package\""
                },
                "options": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 192,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 160,
        "end": 192,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 166,
            "end": 191,
            "id": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "AwaitExpression",
              "start": 170,
              "end": 191,
              "argument": {
                "type": "ImportExpression",
                "start": 176,
                "end": 191,
                "source": {
                  "type": "Literal",
                  "start": 183,
                  "end": 190,
                  "value": "inner",
                  "raw": "\"inner\""
                },
                "options": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 106,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 62,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 62,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 61,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "AwaitExpression",
              "start": 36,
              "end": 61,
              "argument": {
                "type": "ImportExpression",
                "start": 42,
                "end": 61,
                "source": {
                  "type": "Literal",
                  "start": 49,
                  "end": 60,
                  "value": "inner/cjs",
                  "raw": "\"inner/cjs\""
                },
                "options": null
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
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 106,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 70,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 76,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "name": "e",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "AwaitExpression",
              "start": 80,
              "end": 105,
              "argument": {
                "type": "ImportExpression",
                "start": 86,
                "end": 105,
                "source": {
                  "type": "Literal",
                  "start": 93,
                  "end": 104,
                  "value": "inner/mjs",
                  "raw": "\"inner/mjs\""
                },
                "options": null
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 47,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 46,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "name": "cjsMain",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 42,
              "end": 46,
              "value": true,
              "raw": "true"
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
