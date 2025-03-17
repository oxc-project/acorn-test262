__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
