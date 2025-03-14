anyMappedTypesError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 26,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 11,
        "end": 25,
        "constraint": {
          "type": "TSLiteralType",
          "start": 18,
          "end": 23,
          "literal": {
            "type": "Literal",
            "start": 18,
            "end": 23,
            "raw": "\"bar\"",
            "value": "bar"
          }
        },
        "key": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null
      }
    }
  ],
  "sourceType": "script"
}
```
