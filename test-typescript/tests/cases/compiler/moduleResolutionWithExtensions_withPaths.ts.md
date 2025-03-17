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
          "name": "test",
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
  "end": 43,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 7,
        "end": 41,
        "async": false,
        "body": null,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 32,
          "decorators": [],
          "name": "relative",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 40,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 36,
            "end": 40
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
  "end": 174,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 35,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 34,
        "raw": "\"foo/test.js\"",
        "value": "foo/test.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 36,
      "end": 77,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 66,
        "end": 76,
        "raw": "\"foo/test\"",
        "value": "foo/test"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 45,
          "end": 58,
          "imported": {
            "type": "Identifier",
            "start": 45,
            "end": 49,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 53,
            "end": 58,
            "decorators": [],
            "name": "test2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 78,
      "end": 119,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 103,
        "end": 118,
        "raw": "\"./relative.js\"",
        "value": "./relative.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 87,
          "end": 95,
          "imported": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "relative",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 87,
            "end": 95,
            "decorators": [],
            "name": "relative",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 120,
      "end": 171,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 158,
        "end": 170,
        "raw": "\"./relative\"",
        "value": "./relative"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 129,
          "end": 150,
          "imported": {
            "type": "Identifier",
            "start": 129,
            "end": 137,
            "decorators": [],
            "name": "relative",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 141,
            "end": 150,
            "decorators": [],
            "name": "relative2",
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
