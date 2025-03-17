__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 84,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 38,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "name": "props",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 32,
        "end": 37,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 34,
          "end": 37
        }
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 39,
      "end": 58,
      "declaration": {
        "type": "Identifier",
        "start": 54,
        "end": 57,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "TSNamespaceExportDeclaration",
      "start": 59,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
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
  "start": 36,
  "end": 65,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 36,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 63,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 60,
          "end": 63
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
