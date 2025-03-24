__ESTREE_TEST__:PASS:
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
      "end": 73,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 48,
          "end": 70,
          "local": {
            "type": "Identifier",
            "start": 48,
            "end": 56,
            "name": "variable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 60,
            "end": 70,
            "name": "globalThis",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
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
        "name": "mod",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 13,
        "end": 23,
        "name": "globalThis",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 52,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 34,
          "end": 49,
          "local": {
            "type": "Identifier",
            "start": 34,
            "end": 37,
            "name": "mod",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 41,
            "end": 49,
            "name": "variable",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
