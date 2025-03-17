__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 38,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 37,
        "raw": "\"./variable\"",
        "value": "./variable"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 74,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 73,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 62,
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "decorators": [],
              "name": "variable",
              "optional": false,
              "typeAnnotation": null
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
      "end": 35,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 35,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 34,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 21,
              "decorators": [],
              "name": "variable",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 24,
              "end": 34,
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null
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
