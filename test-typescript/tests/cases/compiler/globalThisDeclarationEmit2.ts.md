index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 17,
            "decorators": [],
            "name": "variable",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 39,
      "end": 73,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 70,
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "decorators": [],
            "name": "globalThis",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "decorators": [],
            "name": "variable",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
variable.ts
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
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 24,
              "end": 34,
              "decorators": [],
              "name": "globalThis",
              "optional": false
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
  "sourceType": "module"
}
```
