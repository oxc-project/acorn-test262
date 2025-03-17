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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 19,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 18,
              "value": 1,
              "raw": "1"
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
      "start": 20,
      "end": 39,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 37,
              "end": 38,
              "value": 2,
              "raw": "2"
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
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 42,
      "declaration": null,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 28,
          "end": 40,
          "key": {
            "type": "Identifier",
            "start": 28,
            "end": 32,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 34,
            "end": 40,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 43,
      "end": 91,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 52,
          "end": 53,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 55,
          "end": 56,
          "local": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 69,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 77,
          "end": 89,
          "key": {
            "type": "Identifier",
            "start": 77,
            "end": 81,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 83,
            "end": 89,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 92,
      "end": 133,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 106,
        "end": 111,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 119,
          "end": 131,
          "key": {
            "type": "Identifier",
            "start": 119,
            "end": 123,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 125,
            "end": 131,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 134,
      "end": 181,
      "exported": {
        "type": "Identifier",
        "start": 146,
        "end": 148,
        "name": "ns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "source": {
        "type": "Literal",
        "start": 154,
        "end": 159,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 167,
          "end": 179,
          "key": {
            "type": "Identifier",
            "start": 167,
            "end": 171,
            "name": "type",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 173,
            "end": 179,
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
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
  "end": 104,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 34,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 12,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 26,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 35,
      "end": 103,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 44,
          "end": 50,
          "local": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 49,
            "end": 50,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 52,
          "end": 58,
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 71,
        "value": "./0",
        "raw": "'./0'"
      },
      "attributes": [
        {
          "type": "ImportAttribute",
          "start": 79,
          "end": 85,
          "key": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 82,
            "end": 85,
            "value": "a",
            "raw": "\"a\""
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 90,
            "end": 93,
            "value": "b",
            "raw": "\"b\""
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "value": {
            "type": "Literal",
            "start": 98,
            "end": 101,
            "value": "c",
            "raw": "\"c\""
          }
        }
      ],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
