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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 17,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "variable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "name": "variable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 25,
        "end": 37,
        "value": "./variable",
        "raw": "\"./variable\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 74,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 46,
        "end": 74,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 52,
            "end": 73,
            "id": {
              "type": "Identifier",
              "start": 52,
              "end": 62,
              "name": "globalThis",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 65,
              "end": 73,
              "name": "variable",
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
  "end": 35,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 35,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 35,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 34,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 21,
              "name": "variable",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 24,
              "end": 34,
              "name": "globalThis",
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
