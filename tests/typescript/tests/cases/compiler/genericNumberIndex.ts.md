__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 7,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 7,
              "end": 8,
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 17,
              "end": 23
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 27,
        "end": 35,
        "objectType": {
          "type": "TSTupleType",
          "start": 27,
          "end": 32,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 28,
              "end": 31,
              "literal": {
                "type": "Literal",
                "start": 28,
                "end": 31,
                "value": "a",
                "raw": "'a'"
              }
            }
          ]
        },
        "indexType": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
