__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 39,
  "end": 251,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 127,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 65,
        "decorators": [],
        "name": "HomomorphicMappedType",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 71,
        "end": 127,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 79,
          "end": 86,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 85,
            "end": 86,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 74,
          "end": 75,
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
          "start": 89,
          "end": 125,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 89,
            "end": 93,
            "indexType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 92,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 89,
              "end": 90,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "extendsType": {
            "type": "TSStringKeyword",
            "start": 102,
            "end": 108
          },
          "falseType": {
            "type": "TSNullKeyword",
            "start": 121,
            "end": 125
          },
          "trueType": {
            "type": "TSBooleanKeyword",
            "start": 111,
            "end": 118
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 129,
      "end": 251,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 150,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 185,
          "end": 192,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 189,
            "end": 192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 191,
              "end": 192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 196,
          "end": 243,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 198,
            "end": 243,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 200,
              "end": 243,
              "params": [
                {
                  "type": "RestElement",
                  "start": 201,
                  "end": 234,
                  "argument": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 208,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
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
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 231,
                        "end": 234,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 232,
                            "end": 233,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 232,
                              "end": 233,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 231,
                        "decorators": [],
                        "name": "HomomorphicMappedType",
                        "optional": false,
                        "typeAnnotation": null
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 245,
        "end": 251,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 247,
          "end": 251
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 150,
        "end": 181,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 151,
            "end": 180,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 151,
              "end": 152,
              "decorators": [],
              "name": "T",
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
