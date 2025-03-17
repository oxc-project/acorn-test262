__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 22,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16,
                  "end": 22
                }
              }
            },
            "init": null
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
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 22,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16,
                  "end": 22
                }
              }
            },
            "init": null
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
  "end": 24,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 23,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 23,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 22,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 22,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 14,
                "end": 22,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 16,
                  "end": 22
                }
              }
            },
            "init": null
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
  "end": 92,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 28,
        "raw": "\"@cow/boy\"",
        "value": "@cow/boy"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 10,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 30,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 48,
        "end": 57,
        "raw": "\"@be/bop\"",
        "value": "@be/bop"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 39,
          "end": 40,
          "imported": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 39,
            "end": 40,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 59,
      "end": 91,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 77,
        "end": 90,
        "raw": "\"@be/bop/e/z\"",
        "value": "@be/bop/e/z"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 68,
          "end": 69,
          "imported": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 69,
            "decorators": [],
            "name": "z",
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
