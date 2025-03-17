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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Length",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 45,
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 36,
            "name": "ArrayLike",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": {
                    "type": "Identifier",
                    "start": 43,
                    "end": 44,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 48,
          "end": 54
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 57,
          "end": 62
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
