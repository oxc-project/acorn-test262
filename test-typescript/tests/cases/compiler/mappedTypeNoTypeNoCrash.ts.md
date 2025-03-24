__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 7,
        "name": "T0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 7,
        "end": 10,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8,
            "end": 9,
            "name": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
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
        "start": 13,
        "end": 77,
        "checkType": {
          "type": "TSMappedType",
          "start": 14,
          "end": 30,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 21,
              "end": 28,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
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
          "typeAnnotation": null,
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 21,
            "end": 28,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 28,
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
            "start": 16,
            "end": 17,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSMappedType",
          "start": 41,
          "end": 59,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 43,
            "end": 51,
            "name": {
              "type": "Identifier",
              "start": 43,
              "end": 46,
              "name": "key",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 50,
              "end": 51,
              "typeName": {
                "type": "Identifier",
                "start": 50,
                "end": 51,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSIndexedAccessType",
            "start": 54,
            "end": 58,
            "objectType": {
              "type": "TSTypeReference",
              "start": 54,
              "end": 55,
              "typeName": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 56,
              "end": 57,
              "typeName": {
                "type": "Identifier",
                "start": 56,
                "end": 57,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "optional": null,
          "readonly": null,
          "constraint": {
            "type": "TSTypeReference",
            "start": 50,
            "end": 51,
            "typeName": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "key": {
            "type": "Identifier",
            "start": 43,
            "end": 46,
            "name": "key",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "trueType": {
          "type": "TSNumberKeyword",
          "start": 63,
          "end": 69
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 72,
          "end": 77
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
