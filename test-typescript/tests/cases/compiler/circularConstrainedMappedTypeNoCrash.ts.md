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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Loop",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 33,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 23,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 23,
                "end": 27,
                "name": "Loop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 27,
                "end": 33,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 28,
                    "end": 29,
                    "typeName": {
                      "type": "Identifier",
                      "start": 28,
                      "end": 29,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 31,
                    "end": 32,
                    "typeName": {
                      "type": "Identifier",
                      "start": 31,
                      "end": 32,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 37,
        "end": 100,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 44,
          "end": 56,
          "name": {
            "type": "Identifier",
            "start": 44,
            "end": 45,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 49,
            "end": 56,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 55,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 59,
          "end": 97,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 59,
            "end": 63,
            "objectType": {
              "type": "TSTypeReference",
              "start": 59,
              "end": 60,
              "typeName": {
                "type": "Identifier",
                "start": 59,
                "end": 60,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 62,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 62,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSBooleanKeyword",
            "start": 72,
            "end": 79
          },
          "trueType": {
            "type": "TSNumberKeyword",
            "start": 82,
            "end": 88
          },
          "falseType": {
            "type": "TSStringKeyword",
            "start": 91,
            "end": 97
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 49,
          "end": 56,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 55,
            "end": 56,
            "typeName": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 44,
          "end": 45,
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
