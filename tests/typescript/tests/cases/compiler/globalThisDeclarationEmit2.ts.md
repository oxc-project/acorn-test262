__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 17
          },
          "importKind": "value",
          "start": 9,
          "end": 17
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./variable",
        "raw": "\"./variable\"",
        "start": 25,
        "end": 37
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "variable",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 56
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "globalThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 70
          },
          "exportKind": "value",
          "start": 48,
          "end": 70
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 39,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 74
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "variable",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 21
            },
            "init": {
              "type": "Identifier",
              "decorators": [],
              "name": "globalThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 34
            },
            "definite": false,
            "start": 13,
            "end": 34
          }
        ],
        "declare": false,
        "start": 7,
        "end": 35
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 35
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 35
}
```
