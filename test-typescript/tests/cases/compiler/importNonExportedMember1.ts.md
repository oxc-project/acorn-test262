a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 73,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 27,
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
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 27,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 24,
          "end": 27
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 28,
      "end": 56,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 45,
        "end": 48,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 50,
        "end": 55,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 52,
          "end": 55
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 72,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 66,
          "end": 69,
          "exported": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 66,
            "end": 69,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 27,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 20,
        "end": 25,
        "raw": "\"./a\"",
        "value": "./a"
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
            "name": "bar",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 12,
            "decorators": [],
            "name": "bar",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
