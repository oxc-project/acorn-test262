__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 11,
        "end": 25,
        "key": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSLiteralType",
          "start": 18,
          "end": 23,
          "literal": {
            "type": "Literal",
            "start": 18,
            "end": 23,
            "value": "bar",
            "raw": "\"bar\""
          }
        },
        "nameType": null,
        "typeAnnotation": null,
        "optional": false,
        "readonly": null
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
