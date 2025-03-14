__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 25,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 18,
          "end": 24
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 26,
      "end": 56,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 33,
        "end": 56,
        "async": false,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 42,
          "end": 45,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 47,
          "end": 55,
          "typeAnnotation": {
            "type": "TSNumberKeyword",
            "start": 49,
            "end": 55
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 86,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 64,
        "end": 86,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 84,
          "end": 86,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 73,
          "end": 76,
          "decorators": [],
          "name": "Foo",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 78,
          "end": 83,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 80,
            "end": 83
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
