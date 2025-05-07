__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 19,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
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
      "start": 20,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
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
      "start": 40,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 47,
        "end": 59,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 53,
            "end": 58,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 57,
              "end": 58,
              "raw": "3",
              "value": 3,
              "regex": null,
              "bigint": null
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 24,
        "end": 33,
        "raw": "\"./items\"",
        "value": "./items",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 12,
          "end": 13,
          "exported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 15,
          "end": 16,
          "exported": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 61,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"./items\"",
        "value": "./items",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 29,
      "end": 60,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 59,
        "raw": "\"./items\"",
        "value": "./items",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 38,
          "end": 39,
          "exported": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 41,
          "end": 42,
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 42,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "end": 148,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "\"./items\"",
        "value": "./items",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 8,
          "end": 9,
          "exported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 11,
          "end": 12,
          "exported": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 30,
      "end": 60,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 52,
        "end": 59,
        "raw": "\"./two\"",
        "value": "./two",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 38,
          "end": 45,
          "exported": {
            "type": "Identifier",
            "start": 43,
            "end": 45,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 61,
      "end": 91,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 83,
        "end": 90,
        "raw": "\"./two\"",
        "value": "./two",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 69,
          "end": 76,
          "exported": {
            "type": "Identifier",
            "start": 74,
            "end": 76,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 69,
            "end": 70,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 92,
      "end": 115,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 108,
        "end": 115,
        "raw": "\"./two\"",
        "value": "./two",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 100,
          "end": 101,
          "exported": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 116,
      "end": 148,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 138,
        "end": 147,
        "raw": "\"./items\"",
        "value": "./items",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 124,
          "end": 131,
          "exported": {
            "type": "Identifier",
            "start": 129,
            "end": 131,
            "decorators": [],
            "name": "cc",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
