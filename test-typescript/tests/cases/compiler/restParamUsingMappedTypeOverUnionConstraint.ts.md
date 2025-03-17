__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 252,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 65,
        "name": "HomomorphicMappedType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 65,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 66,
            "end": 67,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
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
        "type": "TSMappedType",
        "start": 71,
        "end": 127,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 74,
          "end": 86,
          "name": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 79,
            "end": 86,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
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
          "start": 89,
          "end": 125,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 89,
            "end": 93,
            "objectType": {
              "type": "TSTypeReference",
              "start": 89,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 92,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "P",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 102,
            "end": 108
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 111,
            "end": 118
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 121,
            "end": 125
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 79,
          "end": 86,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 85,
            "end": 86,
            "typeName": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
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
          "start": 74,
          "end": 75,
          "name": "P",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 129,
      "end": 251,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 150,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 192,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 192,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 196,
          "end": 243,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 243,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 200,
              "end": 243,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 201,
                  "end": 234,
                  "argument": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 208,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 208,
                    "end": 234,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 210,
                      "end": 234,
                      "typeName": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 231,
                        "name": "HomomorphicMappedType",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 231,
                        "end": 234,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 232,
                            "end": 233,
                            "typeName": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 233,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 236,
                "end": 243,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 239,
                  "end": 243
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 150,
        "end": 181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 180,
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 161,
              "end": 180,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 161,
                  "end": 169,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 162,
                      "end": 168
                    }
                  ]
                },
                {
                  "type": "TSTupleType",
                  "start": 172,
                  "end": 180,
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 173,
                      "end": 179
                    }
                  ]
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 245,
        "end": 251,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 247,
          "end": 251
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
