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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 11,
        "end": 25,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 13,
          "end": 23,
          "name": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": null,
        "optional": null,
        "readonly": null,
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
        "key": {
          "type": "Identifier",
          "start": 13,
          "end": 14,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
