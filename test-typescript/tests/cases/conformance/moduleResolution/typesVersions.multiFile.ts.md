__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
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
              "end": 28,
              "value": "default a",
              "raw": "\"default a\""
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
  "end": 30,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 28,
              "value": "default b",
              "raw": "\"default b\""
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 26,
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
              "end": 26,
              "value": "ts3.1 a",
              "raw": "\"ts3.1 a\""
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
  "end": 28,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 27,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 27,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 26,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 17,
              "end": 26,
              "value": "ts3.1 b",
              "raw": "\"ts3.1 b\""
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
  "end": 107,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 24,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 23,
        "value": "ext",
        "raw": "\"ext\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 25,
      "end": 55,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 34,
          "end": 35,
          "imported": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 35,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 43,
        "end": 54,
        "value": "ext/other",
        "raw": "\"ext/other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 57,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 80,
          "id": {
            "type": "Identifier",
            "start": 63,
            "end": 76,
            "name": "aa",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 65,
              "end": 76,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 67,
                "end": 76,
                "literal": {
                  "type": "Literal",
                  "start": 67,
                  "end": 76,
                  "value": "ts3.1 a",
                  "raw": "\"ts3.1 a\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 79,
            "end": 80,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 82,
      "end": 106,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 105,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 101,
            "name": "bb",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 101,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 92,
                "end": 101,
                "literal": {
                  "type": "Literal",
                  "start": 92,
                  "end": 101,
                  "value": "ts3.1 b",
                  "raw": "\"ts3.1 b\""
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 104,
            "end": 105,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
