__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 101,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Loop",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 37,
        "end": 100,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 49,
          "end": 56,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 55,
            "end": 56,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 59,
          "end": 97,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 59,
            "end": 63,
            "indexType": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 62,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 59,
              "end": 60,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSBooleanKeyword",
            "start": 72,
            "end": 79
          },
          "falseType": {
            "type": "TSStringKeyword",
            "start": 91,
            "end": 97
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 82,
            "end": 88
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 34,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 33,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 33,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 27,
                "end": 33,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 28,
                    "end": 29,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 27,
                "decorators": [],
                "name": "Loop",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
