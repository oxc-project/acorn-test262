__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 14
        },
        "constraint": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": "bar",
            "raw": "\"bar\"",
            "start": 18,
            "end": 23
          },
          "start": 18,
          "end": 23
        },
        "nameType": null,
        "typeAnnotation": null,
        "optional": false,
        "readonly": null,
        "start": 11,
        "end": 25
      },
      "declare": false,
      "start": 0,
      "end": 26
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 26
}
```
