__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractSchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 46
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 48
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 50,
            "end": 51
          }
        ],
        "start": 46,
        "end": 52
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 59
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 60,
                    "end": 61
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 60,
                  "end": 61
                }
              ],
              "start": 59,
              "end": 62
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
                    },
                    "typeArguments": null,
                    "start": 67,
                    "end": 68
                  },
                  "start": 65,
                  "end": 68
                },
                "start": 64,
                "end": 68
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SchemaType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 81
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 83
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 83
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Exclude",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 92
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 93,
                              "end": 94
                            },
                            "typeArguments": null,
                            "start": 93,
                            "end": 94
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 96,
                              "end": 97
                            },
                            "typeArguments": null,
                            "start": 96,
                            "end": 97
                          }
                        ],
                        "start": 92,
                        "end": 98
                      },
                      "start": 85,
                      "end": 98
                    }
                  ],
                  "start": 81,
                  "end": 99
                },
                "start": 71,
                "end": 99
              },
              "start": 69,
              "end": 99
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 100
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 105
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 106,
                    "end": 107
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 106,
                  "end": 107
                }
              ],
              "start": 105,
              "end": 108
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "v",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 114
                    },
                    "typeArguments": null,
                    "start": 113,
                    "end": 114
                  },
                  "start": 111,
                  "end": 114
                },
                "start": 110,
                "end": 114
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SchemaType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 127
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 129
                      },
                      "typeArguments": null,
                      "start": 128,
                      "end": 129
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 131,
                        "end": 132
                      },
                      "typeArguments": null,
                      "start": 131,
                      "end": 132
                    }
                  ],
                  "start": 127,
                  "end": 133
                },
                "start": 117,
                "end": 133
              },
              "start": 115,
              "end": 133
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 103,
            "end": 134
          }
        ],
        "start": 53,
        "end": 136
      },
      "declare": false,
      "start": 22,
      "end": 136
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SchemaType",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 153
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 154,
            "end": 155
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 158
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 157,
            "end": 158
          }
        ],
        "start": 153,
        "end": 159
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 163
          },
          "typeArguments": null,
          "start": 162,
          "end": 163
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 172,
          "end": 178
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnySchema",
            "optional": false,
            "typeAnnotation": null,
            "start": 181,
            "end": 190
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 192
                },
                "typeArguments": null,
                "start": 191,
                "end": 192
              }
            ],
            "start": 190,
            "end": 193
          },
          "start": 181,
          "end": 193
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 196,
          "end": 201
        },
        "start": 162,
        "end": 201
      },
      "declare": false,
      "start": 138,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnySchema",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 222
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 224
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 223,
            "end": 224
          }
        ],
        "start": 222,
        "end": 225
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AnySchemaType",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 247
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnySchema",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 248,
                  "end": 257
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 258,
                      "end": 267
                    }
                  ],
                  "start": 257,
                  "end": 268
                },
                "start": 248,
                "end": 268
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 271
                },
                "typeArguments": null,
                "start": 270,
                "end": 271
              }
            ],
            "start": 247,
            "end": 272
          },
          "start": 234,
          "end": 272
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 273,
        "end": 276
      },
      "declare": false,
      "start": 203,
      "end": 276
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnySchemaType",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 300
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 301,
              "end": 302
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 325
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 326,
                    "end": 329
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 331,
                    "end": 334
                  }
                ],
                "start": 325,
                "end": 335
              },
              "start": 311,
              "end": 335
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 301,
            "end": 335
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 338
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 337,
            "end": 338
          }
        ],
        "start": 300,
        "end": 339
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "AbstractSchema",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 362
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 363,
                  "end": 364
                },
                "typeArguments": null,
                "start": 363,
                "end": 364
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "V",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 366,
                  "end": 367
                },
                "typeArguments": null,
                "start": 366,
                "end": 367
              }
            ],
            "start": 362,
            "end": 368
          },
          "start": 348,
          "end": 368
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 369,
        "end": 372
      },
      "declare": false,
      "start": 277,
      "end": 372
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 372
}
```
