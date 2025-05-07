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
  "end": 58,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 28,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 27,
        "raw": "\"zone.js\"",
        "value": "zone.js",
        "regex": null,
        "bigint": null
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
      "start": 29,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 47,
        "end": 57,
        "raw": "\"zone.tsx\"",
        "value": "zone.tsx",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 38,
          "end": 39,
          "imported": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 38,
            "end": 39,
            "decorators": [],
            "name": "y",
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
