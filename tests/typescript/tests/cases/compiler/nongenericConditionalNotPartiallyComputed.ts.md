__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 87,
  "end": 187,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 187,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 93,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 96,
        "end": 187,
        "checkType": {
          "type": "TSTypeReference",
          "start": 96,
          "end": 109,
          "typeName": {
            "type": "Identifier",
            "start": 96,
            "end": 101,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 101,
            "end": 109,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 102,
                "end": 108
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 118,
          "end": 128,
          "typeName": {
            "type": "Identifier",
            "start": 118,
            "end": 123,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 123,
            "end": 128,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 124,
                "end": 127
              }
            ]
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 131,
          "end": 179,
          "checkType": {
            "type": "TSTypeReference",
            "start": 131,
            "end": 144,
            "typeName": {
              "type": "Identifier",
              "start": 131,
              "end": 136,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 136,
              "end": 144,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 137,
                  "end": 143
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 153,
            "end": 167,
            "typeName": {
              "type": "Identifier",
              "start": 153,
              "end": 158,
              "decorators": [],
              "name": "Array",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 158,
              "end": 167,
              "params": [
                {
                  "type": "TSInferType",
                  "start": 159,
                  "end": 166,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 165,
                    "end": 166,
                    "name": {
                      "type": "Identifier",
                      "start": 165,
                      "end": 166,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
            "type": "TSTypeReference",
            "start": 170,
            "end": 171,
            "typeName": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 174,
            "end": 179
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 182,
          "end": 187
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
