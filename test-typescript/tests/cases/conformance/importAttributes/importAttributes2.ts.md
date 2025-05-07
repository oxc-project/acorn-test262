__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
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
  "end": 182,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 28,
          "end": 40,
          "key": {
            "type": "Identifier",
            "start": 28,
            "end": 32,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 34,
            "end": 40,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      },
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 91,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 77,
          "end": 89,
          "key": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 83,
            "end": 89,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 69,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 52,
          "end": 53,
          "exported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 55,
          "end": 56,
          "exported": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 92,
      "end": 133,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 119,
          "end": 131,
          "key": {
            "type": "Identifier",
            "start": 119,
            "end": 123,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 125,
            "end": 131,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 111,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 134,
      "end": 181,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 167,
          "end": 179,
          "key": {
            "type": "Identifier",
            "start": 167,
            "end": 171,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 173,
            "end": 179,
            "raw": "\"json\"",
            "value": "json",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "exported": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 154,
        "end": 159,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      }
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
  "end": 103,
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
        "start": 21,
        "end": 26,
        "raw": "'./0'",
        "value": "./0",
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
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 103,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 79,
          "end": 85,
          "key": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 82,
            "end": 85,
            "raw": "\"a\"",
            "value": "a",
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "ImportAttribute",
          "start": 87,
          "end": 93,
          "key": {
            "type": "Identifier",
            "start": 87,
            "end": 88,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 93,
            "raw": "\"b\"",
            "value": "b",
            "regex": null,
            "bigint": null
          }
        },
        {
          "type": "ImportAttribute",
          "start": 95,
          "end": 101,
          "key": {
            "type": "Identifier",
            "start": 95,
            "end": 96,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 98,
            "end": 101,
            "raw": "\"c\"",
            "value": "c",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 71,
        "raw": "'./0'",
        "value": "./0",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 50,
          "exported": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 52,
          "end": 58,
          "exported": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "b",
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
