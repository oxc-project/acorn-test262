__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 12,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 19,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 35,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "decorators": [],
              "name": "COFFEE",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 34,
              "end": 35,
              "raw": "0",
              "value": 0
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
      "start": 37,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 57,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "decorators": [],
              "name": "TEA",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
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
  "end": 66,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 26,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Drink",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 20,
          "end": 25,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 20,
              "end": 21,
              "literal": {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "TSLiteralType",
              "start": 24,
              "end": 25,
              "literal": {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "raw": "1",
                "value": 1
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportAllDeclaration",
      "start": 27,
      "end": 64,
      "attributes": [],
      "exported": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "decorators": [],
        "name": "Drink",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 63,
        "raw": "\"./constants\"",
        "value": "./constants"
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
  "end": 128,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "raw": "\"./drink\"",
        "value": "./drink"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Drink",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Drink",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 115,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 115,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 115,
                  "decorators": [],
                  "name": "Drink",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 118,
            "end": 127,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "decorators": [],
              "name": "Drink",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "decorators": [],
              "name": "TEA",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
