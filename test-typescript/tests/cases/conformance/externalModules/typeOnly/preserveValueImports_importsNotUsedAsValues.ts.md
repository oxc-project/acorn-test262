/mod.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 24,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 24,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "A",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 16,
          "end": 23
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 47,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 32,
        "end": 47,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "decorators": [],
          "name": "B",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 41,
          "end": 46
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 68,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 55,
        "end": 68,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "decorators": [],
          "name": "C",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 64,
          "end": 67
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
/index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 49,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 25,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "importKind": "type",
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
/reexport.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 49,
        "raw": "\"./mod.js\"",
        "value": "./mod.js"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 15,
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 17,
          "end": 23,
          "exported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "B",
            "optional": false
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        },
        {
          "type": "ExportSpecifier",
          "start": 25,
          "end": 31,
          "exported": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "C",
            "optional": false
          },
          "exportKind": "type",
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "C",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
