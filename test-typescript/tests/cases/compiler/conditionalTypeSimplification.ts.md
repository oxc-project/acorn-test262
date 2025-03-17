__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 373,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 22,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 46,
        "name": "AbstractSchema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 52,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "S",
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
            "start": 50,
            "end": 51,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "name": "V",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 53,
        "end": 136,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 57,
            "end": 100,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 59,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 59,
              "end": 62,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 60,
                  "end": 61,
                  "name": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
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
            "params": [
              {
                "type": "Identifier",
                "start": 64,
                "end": 68,
                "name": "v",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 65,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 67,
                    "end": 68,
                    "typeName": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 99,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 99,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 81,
                  "name": "SchemaType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 81,
                  "end": 99,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 83,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 85,
                      "end": 98,
                      "typeName": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 92,
                        "name": "Exclude",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 92,
                        "end": 98,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 93,
                            "end": 94,
                            "typeName": {
                              "type": "Identifier",
                              "start": 93,
                              "end": 94,
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 96,
                            "end": 97,
                            "typeName": {
                              "type": "Identifier",
                              "start": 96,
                              "end": 97,
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
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 103,
            "end": 134,
            "key": {
              "type": "Identifier",
              "start": 103,
              "end": 105,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 105,
              "end": 108,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 106,
                  "end": 107,
                  "name": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 107,
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
            "params": [
              {
                "type": "Identifier",
                "start": 110,
                "end": 114,
                "name": "v",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 111,
                  "end": 114,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 113,
                    "end": 114,
                    "typeName": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 114,
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
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 117,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 117,
                  "end": 127,
                  "name": "SchemaType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 127,
                  "end": 133,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 128,
                      "end": 129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 128,
                        "end": 129,
                        "name": "S",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 131,
                      "end": 132,
                      "typeName": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
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
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 138,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 143,
        "end": 153,
        "name": "SchemaType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 155,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "name": "S",
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
            "start": 157,
            "end": 158,
            "name": {
              "type": "Identifier",
              "start": 157,
              "end": 158,
              "name": "V",
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
        "start": 162,
        "end": 201,
        "checkType": {
          "type": "TSTypeReference",
          "start": 162,
          "end": 163,
          "typeName": {
            "type": "Identifier",
            "start": 162,
            "end": 163,
            "name": "S",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSObjectKeyword",
          "start": 172,
          "end": 178
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 181,
          "end": 193,
          "typeName": {
            "type": "Identifier",
            "start": 181,
            "end": 190,
            "name": "AnySchema",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 190,
            "end": 193,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 191,
                "end": 192,
                "typeName": {
                  "type": "Identifier",
                  "start": 191,
                  "end": 192,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 196,
          "end": 201
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 203,
      "end": 276,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 222,
        "name": "AnySchema",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 234,
          "end": 272,
          "expression": {
            "type": "Identifier",
            "start": 234,
            "end": 247,
            "name": "AnySchemaType",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 247,
            "end": 272,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 248,
                "end": 268,
                "typeName": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 257,
                  "name": "AnySchema",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 257,
                  "end": 268,
                  "params": [
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 258,
                      "end": 267
                    }
                  ]
                }
              },
              {
                "type": "TSTypeReference",
                "start": 270,
                "end": 271,
                "typeName": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 271,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 222,
        "end": 225,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 224,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "name": "V",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 273,
        "end": 276,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 277,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 300,
        "name": "AnySchemaType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 348,
          "end": 368,
          "expression": {
            "type": "Identifier",
            "start": 348,
            "end": 362,
            "name": "AbstractSchema",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 362,
            "end": 368,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 363,
                "end": 364,
                "typeName": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "name": "S",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 366,
                "end": 367,
                "typeName": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 367,
                  "name": "V",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 300,
        "end": 339,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 301,
            "end": 335,
            "name": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "S",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 311,
              "end": 335,
              "typeName": {
                "type": "Identifier",
                "start": 311,
                "end": 325,
                "name": "AbstractSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 325,
                "end": 335,
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
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 337,
            "end": 338,
            "name": {
              "type": "Identifier",
              "start": 337,
              "end": 338,
              "name": "V",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 369,
        "end": 372,
        "body": []
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
