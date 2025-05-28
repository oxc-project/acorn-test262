__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 16,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 19,
        "end": 25
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 27,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 35,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 38,
        "end": 44
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 69,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 62,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 65,
        "end": 68,
        "typeName": {
          "type": "Identifier",
          "start": 65,
          "end": 68,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
