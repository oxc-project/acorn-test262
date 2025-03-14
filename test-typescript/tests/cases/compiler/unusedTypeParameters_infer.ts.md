__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 64,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 63,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Length",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 17,
        "end": 62,
        "checkType": {
          "type": "TSTypeReference",
          "start": 17,
          "end": 18,
          "typeName": {
            "type": "Identifier",
            "start": 17,
            "end": 18,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 45,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 36,
            "end": 45,
            "params": [
              {
                "type": "TSInferType",
                "start": 37,
                "end": 44,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 43,
                  "end": 44,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  },
                  "out": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 36,
            "decorators": [],
            "name": "ArrayLike",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 57,
          "end": 62
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 48,
          "end": 54
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
