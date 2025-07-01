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
        "name": "Sequence",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
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
              "name": "each",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 51,
                              "end": 52
                            },
                            "typeArguments": null,
                            "start": 51,
                            "end": 52
                          },
                          "start": 49,
                          "end": 52
                        },
                        "start": 44,
                        "end": 52
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 57,
                        "end": 61
                      },
                      "start": 54,
                      "end": 61
                    },
                    "start": 43,
                    "end": 61
                  },
                  "start": 41,
                  "end": 61
                },
                "start": 33,
                "end": 61
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 65,
                "end": 69
              },
              "start": 63,
              "end": 69
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 28,
            "end": 70
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 78
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
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 79,
                    "end": 80
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 79,
                  "end": 80
                }
              ],
              "start": 78,
              "end": 81
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 100,
                              "end": 101
                            },
                            "typeArguments": null,
                            "start": 100,
                            "end": 101
                          },
                          "start": 98,
                          "end": 101
                        },
                        "start": 93,
                        "end": 101
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 106,
                          "end": 107
                        },
                        "typeArguments": null,
                        "start": 106,
                        "end": 107
                      },
                      "start": 103,
                      "end": 107
                    },
                    "start": 92,
                    "end": 107
                  },
                  "start": 90,
                  "end": 107
                },
                "start": 82,
                "end": 107
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 118
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 119,
                        "end": 120
                      },
                      "typeArguments": null,
                      "start": 119,
                      "end": 120
                    }
                  ],
                  "start": 118,
                  "end": 121
                },
                "start": 110,
                "end": 121
              },
              "start": 108,
              "end": 121
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 75,
            "end": 122
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "filter",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 133
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 152,
                              "end": 153
                            },
                            "typeArguments": null,
                            "start": 152,
                            "end": 153
                          },
                          "start": 150,
                          "end": 153
                        },
                        "start": 145,
                        "end": 153
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 158,
                        "end": 165
                      },
                      "start": 155,
                      "end": 165
                    },
                    "start": 144,
                    "end": 165
                  },
                  "start": 142,
                  "end": 165
                },
                "start": 134,
                "end": 165
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 176
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 177,
                        "end": 178
                      },
                      "typeArguments": null,
                      "start": 177,
                      "end": 178
                    }
                  ],
                  "start": 176,
                  "end": 179
                },
                "start": 168,
                "end": 179
              },
              "start": 166,
              "end": 179
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 127,
            "end": 180
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 192
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
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 193,
                    "end": 194
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 193,
                  "end": 194
                }
              ],
              "start": 192,
              "end": 195
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 217,
                              "end": 218
                            },
                            "typeArguments": null,
                            "start": 217,
                            "end": 218
                          },
                          "start": 215,
                          "end": 218
                        },
                        "start": 210,
                        "end": 218
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 223,
                          "end": 224
                        },
                        "typeArguments": null,
                        "start": 223,
                        "end": 224
                      },
                      "start": 220,
                      "end": 224
                    },
                    "start": 209,
                    "end": 224
                  },
                  "start": 207,
                  "end": 224
                },
                "start": 196,
                "end": 224
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Sequence",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 235
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 238,
                            "end": 241
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 243,
                                "end": 244
                              },
                              "typeArguments": null,
                              "start": 243,
                              "end": 244
                            },
                            "start": 241,
                            "end": 244
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 238,
                          "end": 245
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "items",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 246,
                            "end": 251
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Sequence",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 253,
                                "end": 261
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 262,
                                      "end": 263
                                    },
                                    "typeArguments": null,
                                    "start": 262,
                                    "end": 263
                                  }
                                ],
                                "start": 261,
                                "end": 264
                              },
                              "start": 253,
                              "end": 264
                            },
                            "start": 251,
                            "end": 264
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 246,
                          "end": 265
                        }
                      ],
                      "start": 236,
                      "end": 267
                    }
                  ],
                  "start": 235,
                  "end": 268
                },
                "start": 227,
                "end": 268
              },
              "start": 225,
              "end": 268
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 185,
            "end": 269
          }
        ],
        "start": 22,
        "end": 271
      },
      "declare": false,
      "start": 0,
      "end": 271
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 271
}
```
