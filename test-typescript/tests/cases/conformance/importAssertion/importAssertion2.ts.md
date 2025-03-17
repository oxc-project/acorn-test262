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
              "value": 1
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
              "value": 2
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
  "end": 190,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 44,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 30,
          "end": 42,
          "key": {
            "type": "Identifier",
            "start": 30,
            "end": 34,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 36,
            "end": 42,
            "raw": "\"json\"",
            "value": "json"
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
        "value": "./0"
      },
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 95,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 81,
          "end": 93,
          "key": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 87,
            "end": 93,
            "raw": "\"json\"",
            "value": "json"
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
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 54,
          "end": 55,
          "exported": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 57,
          "end": 58,
          "exported": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
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
      "start": 96,
      "end": 139,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 125,
          "end": 137,
          "key": {
            "type": "Identifier",
            "start": 125,
            "end": 129,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 131,
            "end": 137,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 110,
        "end": 115,
        "raw": "'./0'",
        "value": "./0"
      }
    },
    {
      "type": "ExportAllDeclaration",
      "start": 140,
      "end": 189,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 175,
          "end": 187,
          "key": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "decorators": [],
            "name": "type",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 181,
            "end": 187,
            "raw": "\"json\"",
            "value": "json"
          }
        }
      ],
      "exported": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 160,
        "end": 165,
        "raw": "'./0'",
        "value": "./0"
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
  "end": 108,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "raw": "'./0'",
        "value": "./0"
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
      "start": 37,
      "end": 107,
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 83,
          "end": 89,
          "key": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 86,
            "end": 89,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 91,
          "end": 97,
          "key": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 94,
            "end": 97,
            "raw": "\"b\"",
            "value": "b"
          }
        },
        {
          "type": "ImportAttribute",
          "start": 99,
          "end": 105,
          "key": {
            "type": "Identifier",
            "start": 99,
            "end": 100,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "value": {
            "type": "Literal",
            "start": 102,
            "end": 105,
            "raw": "\"c\"",
            "value": "c"
          }
        }
      ],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 73,
        "raw": "'./0'",
        "value": "./0"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 46,
          "end": 52,
          "exported": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 54,
          "end": 60,
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
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
