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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 18,
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
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 20,
      "end": 39,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 27,
        "end": 39,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 33,
            "end": 38,
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
              "value": 2,
              "raw": "2"
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
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
      "declaration": null,
      "specifiers": [],
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 20,
        "value": "./0",
        "raw": "'./0'"
      },
      "exportKind": "value",
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
            "value": "json",
            "raw": "\"json\""
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 45,
      "end": 95,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 54,
          "end": 55,
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 57,
          "end": 58,
          "local": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 57,
            "end": 58,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "value",
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
            "value": "json",
            "raw": "\"json\""
          }
        }
      ]
    },
    {
      "type": "ExportAllDeclaration",
      "start": 96,
      "end": 139,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 110,
        "end": 115,
        "value": "./0",
        "raw": "'./0'"
      },
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
            "value": "json",
            "raw": "\"json\""
          }
        }
      ],
      "exportKind": "value"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 140,
      "end": 189,
      "exported": {
        "type": "Identifier",
        "start": 152,
        "end": 154,
        "decorators": [],
        "name": "ns",
        "optional": false,
        "typeAnnotation": null
      },
      "source": {
        "type": "Literal",
        "start": 160,
        "end": 165,
        "value": "./0",
        "raw": "'./0'"
      },
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
  "end": 107,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 107,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 46,
          "end": 52,
          "local": {
            "type": "Identifier",
            "start": 46,
            "end": 47,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 51,
            "end": 52,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        },
        {
          "type": "ExportSpecifier",
          "start": 54,
          "end": 60,
          "local": {
            "type": "Identifier",
            "start": 54,
            "end": 55,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "exported": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 68,
        "end": 73,
        "value": "./0",
        "raw": "'./0'"
      },
      "exportKind": "value",
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
            "value": "a",
            "raw": "\"a\""
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
            "value": "b",
            "raw": "\"b\""
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
            "value": "c",
            "raw": "\"c\""
          }
        }
      ]
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
