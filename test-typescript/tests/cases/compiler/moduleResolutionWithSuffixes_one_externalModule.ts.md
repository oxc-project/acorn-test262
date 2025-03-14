/node_modules/some-library/index.ios.d.ts
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
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 27,
          "decorators": [],
          "name": "ios",
          "optional": false
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
/node_modules/some-library/index.d.ts
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
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 24,
          "end": 28,
          "decorators": [],
          "name": "base",
          "optional": false
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
  "end": 36,
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "ios",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
