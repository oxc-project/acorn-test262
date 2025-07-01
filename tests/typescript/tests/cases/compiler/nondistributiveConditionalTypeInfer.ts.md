__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_R",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 14,
                "end": 15
              },
              "typeArguments": null,
              "start": 14,
              "end": 15
            }
          ],
          "start": 13,
          "end": 16
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                    "name": "_R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 28,
                    "end": 30
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSInferType",
                              "typeParameter": {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 42,
                                  "end": 43
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 42,
                                "end": 43
                              },
                              "start": 36,
                              "end": 43
                            },
                            "start": 34,
                            "end": 43
                          },
                          "start": 33,
                          "end": 43
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 48,
                          "end": 52
                        },
                        "start": 45,
                        "end": 52
                      },
                      "start": 32,
                      "end": 52
                    },
                    "start": 30,
                    "end": 52
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 28,
                  "end": 52
                }
              ],
              "start": 26,
              "end": 54
            }
          ],
          "start": 25,
          "end": 55
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 59
          },
          "typeArguments": null,
          "start": 58,
          "end": 59
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 62,
          "end": 67
        },
        "start": 13,
        "end": 67
      },
      "declare": false,
      "start": 0,
      "end": 68
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_E",
        "optional": false,
        "typeAnnotation": null,
        "start": 74,
        "end": 76
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
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          }
        ],
        "start": 76,
        "end": 79
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 84
              },
              "typeArguments": null,
              "start": 83,
              "end": 84
            }
          ],
          "start": 82,
          "end": 85
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                    "name": "_E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 99
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "E",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 113,
                              "end": 114
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 113,
                            "end": 114
                          },
                          "start": 107,
                          "end": 114
                        },
                        "start": 104,
                        "end": 114
                      },
                      "start": 101,
                      "end": 114
                    },
                    "start": 99,
                    "end": 114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 97,
                  "end": 114
                }
              ],
              "start": 95,
              "end": 116
            }
          ],
          "start": 94,
          "end": 117
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 120,
            "end": 121
          },
          "typeArguments": null,
          "start": 120,
          "end": 121
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 124,
          "end": 129
        },
        "start": 82,
        "end": 129
      },
      "declare": false,
      "start": 69,
      "end": 130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "_A",
        "optional": false,
        "typeAnnotation": null,
        "start": 136,
        "end": 138
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
              "start": 139,
              "end": 140
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 139,
            "end": 140
          }
        ],
        "start": 138,
        "end": 141
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "typeArguments": null,
              "start": 145,
              "end": 146
            }
          ],
          "start": 144,
          "end": 147
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                    "name": "_A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 159,
                    "end": 161
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSInferType",
                          "typeParameter": {
                            "type": "TSTypeParameter",
                            "name": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 175,
                            "end": 176
                          },
                          "start": 169,
                          "end": 176
                        },
                        "start": 166,
                        "end": 176
                      },
                      "start": 163,
                      "end": 176
                    },
                    "start": 161,
                    "end": 176
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 159,
                  "end": 176
                }
              ],
              "start": 157,
              "end": 178
            }
          ],
          "start": 156,
          "end": 179
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 183
          },
          "typeArguments": null,
          "start": 182,
          "end": 183
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 186,
          "end": 191
        },
        "start": 144,
        "end": 191
      },
      "declare": false,
      "start": 131,
      "end": 192
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Sync",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 208
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 209,
            "end": 210
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 212,
            "end": 213
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 216
          }
        ],
        "start": 208,
        "end": 217
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_R",
              "optional": false,
              "typeAnnotation": null,
              "start": 222,
              "end": 224
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 230,
                          "end": 231
                        },
                        "typeArguments": null,
                        "start": 230,
                        "end": 231
                      },
                      "start": 228,
                      "end": 231
                    },
                    "start": 227,
                    "end": 231
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 236,
                    "end": 240
                  },
                  "start": 233,
                  "end": 240
                },
                "start": 226,
                "end": 240
              },
              "start": 224,
              "end": 240
            },
            "accessibility": null,
            "static": false,
            "start": 222,
            "end": 241
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_E",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 246
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 255
                    },
                    "typeArguments": null,
                    "start": 254,
                    "end": 255
                  },
                  "start": 251,
                  "end": 255
                },
                "start": 248,
                "end": 255
              },
              "start": 246,
              "end": 255
            },
            "accessibility": null,
            "static": false,
            "start": 244,
            "end": 256
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "_A",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 261
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 270
                    },
                    "typeArguments": null,
                    "start": 269,
                    "end": 270
                  },
                  "start": 266,
                  "end": 270
                },
                "start": 263,
                "end": 270
              },
              "start": 261,
              "end": 270
            },
            "accessibility": null,
            "static": false,
            "start": 259,
            "end": 271
          }
        ],
        "start": 218,
        "end": 273
      },
      "declare": false,
      "start": 194,
      "end": 273
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 281
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_R",
          "optional": false,
          "typeAnnotation": null,
          "start": 284,
          "end": 286
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sync",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 291
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 292,
                    "end": 298
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 300,
                    "end": 306
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 308,
                    "end": 312
                  }
                ],
                "start": 291,
                "end": 313
              },
              "start": 287,
              "end": 313
            }
          ],
          "start": 286,
          "end": 314
        },
        "start": 284,
        "end": 314
      },
      "declare": false,
      "start": 275,
      "end": 315
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 322
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_E",
          "optional": false,
          "typeAnnotation": null,
          "start": 325,
          "end": 327
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sync",
                "optional": false,
                "typeAnnotation": null,
                "start": 328,
                "end": 332
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 341,
                    "end": 347
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 349,
                    "end": 353
                  }
                ],
                "start": 332,
                "end": 354
              },
              "start": 328,
              "end": 354
            }
          ],
          "start": 327,
          "end": 355
        },
        "start": 325,
        "end": 355
      },
      "declare": false,
      "start": 316,
      "end": 356
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 363
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "_A",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 368
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Sync",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 373
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 374,
                    "end": 380
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 382,
                    "end": 388
                  },
                  {
                    "type": "TSVoidKeyword",
                    "start": 390,
                    "end": 394
                  }
                ],
                "start": 373,
                "end": 395
              },
              "start": 369,
              "end": 395
            }
          ],
          "start": 368,
          "end": 396
        },
        "start": 366,
        "end": 396
      },
      "declare": false,
      "start": 357,
      "end": 397
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 397
}
```
