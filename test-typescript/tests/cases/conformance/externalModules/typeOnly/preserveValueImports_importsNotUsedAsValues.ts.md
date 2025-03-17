__ESTREE_TEST__:PASS:
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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 24,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnknownKeyword",
          "start": 16,
          "end": 23
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 25,
      "end": 47,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 32,
        "end": 47,
        "id": {
          "type": "Identifier",
          "start": 37,
          "end": 38,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 41,
          "end": 46
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 48,
      "end": 68,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 55,
        "end": 68,
        "id": {
          "type": "Identifier",
          "start": 60,
          "end": 61,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 64,
          "end": 67
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
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
  "end": 51,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 50,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 15,
          "imported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "type"
        },
        {
          "type": "ImportSpecifier",
          "start": 17,
          "end": 23,
          "imported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "type"
        },
        {
          "type": "ImportSpecifier",
          "start": 25,
          "end": 31,
          "imported": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 49,
        "value": "./mod.js",
        "raw": "\"./mod.js\""
      },
      "attributes": [],
      "importKind": "value"
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
  "end": 51,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 50,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 15,
          "local": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 14,
            "end": 15,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        },
        {
          "type": "ExportSpecifier",
          "start": 17,
          "end": 23,
          "local": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 22,
            "end": 23,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        },
        {
          "type": "ExportSpecifier",
          "start": 25,
          "end": 31,
          "local": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "type"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 39,
        "end": 49,
        "value": "./mod.js",
        "raw": "\"./mod.js\""
      },
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
