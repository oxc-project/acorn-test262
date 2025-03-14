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
      "attributes": [],
      "declaration": null,
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
  "start": 19,
  "end": 192,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 64,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 64,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 63,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "a",
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
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "raw": "\"package/cjs\"",
                  "value": "package/cjs"
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 65,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 72,
        "end": 110,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 78,
            "end": 109,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "b",
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
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 95,
                  "end": 108,
                  "raw": "\"package/mjs\"",
                  "value": "package/mjs"
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 111,
      "end": 152,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 118,
        "end": 152,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 124,
            "end": 151,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "c",
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
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 141,
                  "end": 150,
                  "raw": "\"package\"",
                  "value": "package"
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 192,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 160,
        "end": 192,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 166,
            "end": 191,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 166,
              "end": 167,
              "decorators": [],
              "name": "f",
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
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 183,
                  "end": 190,
                  "raw": "\"inner\"",
                  "value": "inner"
                }
              }
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
  "start": 19,
  "end": 106,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 62,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 62,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 61,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "d",
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
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 49,
                  "end": 60,
                  "raw": "\"inner/cjs\"",
                  "value": "inner/cjs"
                }
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 63,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 70,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 76,
            "end": 105,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "e",
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
                "options": null,
                "source": {
                  "type": "Literal",
                  "start": 93,
                  "end": 104,
                  "raw": "\"inner/mjs\"",
                  "value": "inner/mjs"
                }
              }
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
  "start": 19,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 47,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 46,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 39,
              "decorators": [],
              "name": "cjsMain",
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 42,
              "end": 46,
              "raw": "true",
              "value": true
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
