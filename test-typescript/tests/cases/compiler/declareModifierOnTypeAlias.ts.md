declareModifierOnTypeAlias.ts
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
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 17,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSStringKeyword",
        "start": 20,
        "end": 26
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 28,
      "end": 46,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 36,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 39,
        "end": 45
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 47,
      "end": 70,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 63,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 66,
        "end": 69,
        "typeName": {
          "type": "Identifier",
          "start": 66,
          "end": 69,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
