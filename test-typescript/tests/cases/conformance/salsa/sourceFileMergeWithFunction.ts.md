types.d.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 31,
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 26,
            "end": 31,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 28,
              "end": 31
            }
          }
        }
      ],
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
        "decorators": [],
        "name": "foo",
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
        "decorators": [],
        "name": "foo",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
foo.ts
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 56,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
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
  "sourceType": "module"
}
```
