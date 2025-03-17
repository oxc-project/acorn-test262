__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 36,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "ios",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 29,
          "end": 35,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 31,
            "end": 35
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 38,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 37,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 37,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "decorators": [],
          "name": "base",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 30,
          "end": 36,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 32,
            "end": 36
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 139,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 34,
        "raw": "\"some-library\"",
        "value": "some-library"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 12,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 85,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 64,
        "end": 84,
        "raw": "\"some-library/index\"",
        "value": "some-library/index"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 45,
          "end": 56,
          "imported": {
            "type": "Identifier",
            "start": 45,
            "end": 48,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "decorators": [],
            "name": "ios2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 86,
      "end": 138,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 114,
        "end": 137,
        "raw": "\"some-library/index.js\"",
        "value": "some-library/index.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 95,
          "end": 106,
          "imported": {
            "type": "Identifier",
            "start": 95,
            "end": 98,
            "decorators": [],
            "name": "ios",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 102,
            "end": 106,
            "decorators": [],
            "name": "ios3",
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
