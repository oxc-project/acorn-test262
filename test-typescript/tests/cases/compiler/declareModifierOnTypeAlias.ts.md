__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 70,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1,
      "end": 27,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 20,
        "end": 26
      },
      "declare": true
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "name": "Bar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 39,
        "end": 45
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "name": "Baz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 66,
        "end": 69,
        "typeName": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
