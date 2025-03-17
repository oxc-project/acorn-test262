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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 19,
        "end": 36,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 25,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "COFFEE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 34,
              "end": 35,
              "value": 0,
              "raw": "0"
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
      "start": 37,
      "end": 58,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 58,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 57,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 53,
              "name": "TEA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 56,
              "end": 57,
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 26,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "name": "Drink",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
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
                "value": 0,
                "raw": "0"
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
                "value": 1,
                "raw": "1"
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportAllDeclaration",
      "start": 27,
      "end": 64,
      "exported": {
        "type": "Identifier",
        "start": 39,
        "end": 44,
        "name": "Drink",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "source": {
        "type": "Literal",
        "start": 50,
        "end": 63,
        "value": "./constants",
        "raw": "\"./constants\""
      },
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
  "end": 129,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 32,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Drink",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "name": "Drink",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 31,
        "value": "./drink",
        "raw": "\"./drink\""
      },
      "attributes": [],
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 115,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 115,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 110,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 110,
                  "end": 115,
                  "name": "Drink",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 118,
            "end": 127,
            "object": {
              "type": "Identifier",
              "start": 118,
              "end": 123,
              "name": "Drink",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 124,
              "end": 127,
              "name": "TEA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
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
