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
  "end": 52,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 24,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "mod",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 13,
        "end": 23,
        "decorators": [],
        "name": "globalThis",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 52,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 49,
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "decorators": [],
            "name": "variable",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 37,
            "decorators": [],
            "name": "mod",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
