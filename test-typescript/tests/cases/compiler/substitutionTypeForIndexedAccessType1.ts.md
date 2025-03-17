__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 161,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 161,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 20,
        "name": "AddPropToObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 61,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "name": "Obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 33,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "name": "Prop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 64,
        "end": 161,
        "checkType": {
          "type": "TSTypeReference",
          "start": 64,
          "end": 68,
          "typeName": {
            "type": "Identifier",
            "start": 64,
            "end": 68,
            "name": "Prop",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 77,
          "end": 86,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 83,
            "end": 86,
            "typeName": {
              "type": "Identifier",
              "start": 83,
              "end": 86,
              "name": "Obj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 91,
          "end": 151,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 91,
            "end": 100,
            "objectType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 94,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 94,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 95,
              "end": 99,
              "typeName": {
                "type": "Identifier",
                "start": 95,
                "end": 99,
                "name": "Prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSArrayType",
            "start": 109,
            "end": 118,
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 109,
              "end": 116
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 125,
            "end": 139,
            "elementTypes": [
              {
                "type": "TSRestType",
                "start": 126,
                "end": 138,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 129,
                  "end": 138,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 129,
                    "end": 132,
                    "typeName": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 132,
                      "name": "Obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 133,
                    "end": 137,
                    "typeName": {
                      "type": "Identifier",
                      "start": 133,
                      "end": 137,
                      "name": "Prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 146,
            "end": 151
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 156,
          "end": 161
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
