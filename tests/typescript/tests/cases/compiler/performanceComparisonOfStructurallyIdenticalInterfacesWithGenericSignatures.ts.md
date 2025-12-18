__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ThenArg",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 27
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
                "start": 28,
                "end": 29
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 28,
              "end": 29
            }
          ],
          "start": 27,
          "end": 30
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "typeArguments": null,
            "start": 33,
            "end": 34
          },
          "extendsType": {
            "type": "TSAnyKeyword",
            "start": 43,
            "end": 46
          },
          "trueType": {
            "type": "TSAnyKeyword",
            "start": 49,
            "end": 52
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "typeArguments": null,
              "start": 55,
              "end": 56
            },
            "extendsType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PromiseLike",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 76
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSInferType",
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 84
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 83,
                      "end": 84
                    },
                    "start": 77,
                    "end": 84
                  }
                ],
                "start": 76,
                "end": 85
              },
              "start": 65,
              "end": 85
            },
            "trueType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 89
              },
              "typeArguments": null,
              "start": 88,
              "end": 89
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 92,
                "end": 93
              },
              "typeArguments": null,
              "start": 92,
              "end": 93
            },
            "start": 55,
            "end": 93
          },
          "start": 33,
          "end": 93
        },
        "declare": true,
        "start": 7,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 94
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InterfaceA",
          "optional": false,
          "typeAnnotation": null,
          "start": 113,
          "end": 123
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
                "start": 124,
                "end": 125
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 124,
              "end": 125
            }
          ],
          "start": 123,
          "end": 126
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
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 139
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                          "name": "newValue",
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
                                "start": 161,
                                "end": 162
                              },
                              "typeArguments": null,
                              "start": 161,
                              "end": 162
                            },
                            "start": 159,
                            "end": 162
                          },
                          "start": 151,
                          "end": 162
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "oldValue",
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
                                "start": 174,
                                "end": 175
                              },
                              "typeArguments": null,
                              "start": 174,
                              "end": 175
                            },
                            "start": 172,
                            "end": 175
                          },
                          "start": 164,
                          "end": 175
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 180,
                          "end": 187
                        },
                        "start": 177,
                        "end": 187
                      },
                      "start": 150,
                      "end": 187
                    },
                    "start": 148,
                    "end": 187
                  },
                  "start": 140,
                  "end": 187
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 200
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
                          "start": 201,
                          "end": 202
                        },
                        "typeArguments": null,
                        "start": 201,
                        "end": 202
                      }
                    ],
                    "start": 200,
                    "end": 203
                  },
                  "start": 190,
                  "end": 203
                },
                "start": 188,
                "end": 203
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 133,
              "end": 204
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 209,
                "end": 212
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 214
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 213,
                    "end": 214
                  }
                ],
                "start": 212,
                "end": 215
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                                "start": 234,
                                "end": 235
                              },
                              "typeArguments": null,
                              "start": 234,
                              "end": 235
                            },
                            "start": 232,
                            "end": 235
                          },
                          "start": 227,
                          "end": 235
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 240,
                            "end": 241
                          },
                          "typeArguments": null,
                          "start": 240,
                          "end": 241
                        },
                        "start": 237,
                        "end": 241
                      },
                      "start": 226,
                      "end": 241
                    },
                    "start": 224,
                    "end": 241
                  },
                  "start": 216,
                  "end": 241
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 254
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 255,
                          "end": 256
                        },
                        "typeArguments": null,
                        "start": 255,
                        "end": 256
                      }
                    ],
                    "start": 254,
                    "end": 257
                  },
                  "start": 244,
                  "end": 257
                },
                "start": 242,
                "end": 257
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 209,
              "end": 258
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 268
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 269,
                      "end": 270
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 279,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 287,
                              "end": 288
                            },
                            "typeArguments": null,
                            "start": 287,
                            "end": 288
                          }
                        ],
                        "start": 286,
                        "end": 289
                      },
                      "start": 279,
                      "end": 289
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 269,
                    "end": 289
                  }
                ],
                "start": 268,
                "end": 290
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 304
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 305,
                          "end": 306
                        },
                        "typeArguments": null,
                        "start": 305,
                        "end": 306
                      }
                    ],
                    "start": 304,
                    "end": 307
                  },
                  "start": 294,
                  "end": 307
                },
                "start": 292,
                "end": 307
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 263,
              "end": 308
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitLatest",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 324
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 326
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 335,
                        "end": 342
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
                              "start": 343,
                              "end": 344
                            },
                            "typeArguments": null,
                            "start": 343,
                            "end": 344
                          }
                        ],
                        "start": 342,
                        "end": 345
                      },
                      "start": 335,
                      "end": 345
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 325,
                    "end": 345
                  }
                ],
                "start": 324,
                "end": 346
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 360
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 361,
                          "end": 362
                        },
                        "typeArguments": null,
                        "start": 361,
                        "end": 362
                      }
                    ],
                    "start": 360,
                    "end": 363
                  },
                  "start": 350,
                  "end": 363
                },
                "start": 348,
                "end": 363
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 313,
              "end": 364
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered",
                "optional": false,
                "typeAnnotation": null,
                "start": 369,
                "end": 381
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 382,
                      "end": 383
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 392,
                        "end": 399
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
                              "start": 400,
                              "end": 401
                            },
                            "typeArguments": null,
                            "start": 400,
                            "end": 401
                          }
                        ],
                        "start": 399,
                        "end": 402
                      },
                      "start": 392,
                      "end": 402
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 382,
                    "end": 402
                  }
                ],
                "start": 381,
                "end": 403
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 417
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 419
                        },
                        "typeArguments": null,
                        "start": 418,
                        "end": 419
                      }
                    ],
                    "start": 417,
                    "end": 420
                  },
                  "start": 407,
                  "end": 420
                },
                "start": 405,
                "end": 420
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 369,
              "end": 421
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered2",
                "optional": false,
                "typeAnnotation": null,
                "start": 426,
                "end": 439
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 440,
                      "end": 441
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 450,
                        "end": 457
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
                              "start": 458,
                              "end": 459
                            },
                            "typeArguments": null,
                            "start": 458,
                            "end": 459
                          }
                        ],
                        "start": 457,
                        "end": 460
                      },
                      "start": 450,
                      "end": 460
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 440,
                    "end": 460
                  }
                ],
                "start": 439,
                "end": 461
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 475
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 476,
                          "end": 477
                        },
                        "typeArguments": null,
                        "start": 476,
                        "end": 477
                      }
                    ],
                    "start": 475,
                    "end": 478
                  },
                  "start": 465,
                  "end": 478
                },
                "start": 463,
                "end": 478
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 426,
              "end": 479
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered3",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 497
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 498,
                      "end": 499
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 508,
                        "end": 515
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
                              "start": 516,
                              "end": 517
                            },
                            "typeArguments": null,
                            "start": 516,
                            "end": 517
                          }
                        ],
                        "start": 515,
                        "end": 518
                      },
                      "start": 508,
                      "end": 518
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 498,
                    "end": 518
                  }
                ],
                "start": 497,
                "end": 519
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 523,
                    "end": 533
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 535
                        },
                        "typeArguments": null,
                        "start": 534,
                        "end": 535
                      }
                    ],
                    "start": 533,
                    "end": 536
                  },
                  "start": 523,
                  "end": 536
                },
                "start": 521,
                "end": 536
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 484,
              "end": 537
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered4",
                "optional": false,
                "typeAnnotation": null,
                "start": 542,
                "end": 555
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 556,
                      "end": 557
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 566,
                        "end": 573
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
                              "start": 574,
                              "end": 575
                            },
                            "typeArguments": null,
                            "start": 574,
                            "end": 575
                          }
                        ],
                        "start": 573,
                        "end": 576
                      },
                      "start": 566,
                      "end": 576
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 556,
                    "end": 576
                  }
                ],
                "start": 555,
                "end": 577
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 591
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 592,
                          "end": 593
                        },
                        "typeArguments": null,
                        "start": 592,
                        "end": 593
                      }
                    ],
                    "start": 591,
                    "end": 594
                  },
                  "start": 581,
                  "end": 594
                },
                "start": 579,
                "end": 594
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 542,
              "end": 595
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered5",
                "optional": false,
                "typeAnnotation": null,
                "start": 600,
                "end": 613
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 614,
                      "end": 615
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 624,
                        "end": 631
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
                              "start": 632,
                              "end": 633
                            },
                            "typeArguments": null,
                            "start": 632,
                            "end": 633
                          }
                        ],
                        "start": 631,
                        "end": 634
                      },
                      "start": 624,
                      "end": 634
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 614,
                    "end": 634
                  }
                ],
                "start": 613,
                "end": 635
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 649
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 651
                        },
                        "typeArguments": null,
                        "start": 650,
                        "end": 651
                      }
                    ],
                    "start": 649,
                    "end": 652
                  },
                  "start": 639,
                  "end": 652
                },
                "start": 637,
                "end": 652
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 600,
              "end": 653
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered6",
                "optional": false,
                "typeAnnotation": null,
                "start": 658,
                "end": 671
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 682,
                        "end": 689
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
                              "start": 690,
                              "end": 691
                            },
                            "typeArguments": null,
                            "start": 690,
                            "end": 691
                          }
                        ],
                        "start": 689,
                        "end": 692
                      },
                      "start": 682,
                      "end": 692
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 672,
                    "end": 692
                  }
                ],
                "start": 671,
                "end": 693
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 697,
                    "end": 707
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 708,
                          "end": 709
                        },
                        "typeArguments": null,
                        "start": 708,
                        "end": 709
                      }
                    ],
                    "start": 707,
                    "end": 710
                  },
                  "start": 697,
                  "end": 710
                },
                "start": 695,
                "end": 710
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 658,
              "end": 711
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered7",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 729
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 731
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 740,
                        "end": 747
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
                              "start": 748,
                              "end": 749
                            },
                            "typeArguments": null,
                            "start": 748,
                            "end": 749
                          }
                        ],
                        "start": 747,
                        "end": 750
                      },
                      "start": 740,
                      "end": 750
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 730,
                    "end": 750
                  }
                ],
                "start": 729,
                "end": 751
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 755,
                    "end": 765
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 766,
                          "end": 767
                        },
                        "typeArguments": null,
                        "start": 766,
                        "end": 767
                      }
                    ],
                    "start": 765,
                    "end": 768
                  },
                  "start": 755,
                  "end": 768
                },
                "start": 753,
                "end": 768
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 716,
              "end": 769
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered8",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 787
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 788,
                      "end": 789
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 798,
                        "end": 805
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
                              "start": 806,
                              "end": 807
                            },
                            "typeArguments": null,
                            "start": 806,
                            "end": 807
                          }
                        ],
                        "start": 805,
                        "end": 808
                      },
                      "start": 798,
                      "end": 808
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 788,
                    "end": 808
                  }
                ],
                "start": 787,
                "end": 809
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 813,
                    "end": 823
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 824,
                          "end": 825
                        },
                        "typeArguments": null,
                        "start": 824,
                        "end": 825
                      }
                    ],
                    "start": 823,
                    "end": 826
                  },
                  "start": 813,
                  "end": 826
                },
                "start": 811,
                "end": 826
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 774,
              "end": 827
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered9",
                "optional": false,
                "typeAnnotation": null,
                "start": 832,
                "end": 845
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 846,
                      "end": 847
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 856,
                        "end": 863
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
                              "start": 864,
                              "end": 865
                            },
                            "typeArguments": null,
                            "start": 864,
                            "end": 865
                          }
                        ],
                        "start": 863,
                        "end": 866
                      },
                      "start": 856,
                      "end": 866
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 846,
                    "end": 866
                  }
                ],
                "start": 845,
                "end": 867
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 881
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 882,
                          "end": 883
                        },
                        "typeArguments": null,
                        "start": 882,
                        "end": 883
                      }
                    ],
                    "start": 881,
                    "end": 884
                  },
                  "start": 871,
                  "end": 884
                },
                "start": 869,
                "end": 884
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 832,
              "end": 885
            }
          ],
          "start": 127,
          "end": 887
        },
        "declare": false,
        "start": 103,
        "end": 887
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 96,
      "end": 887
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "InterfaceB",
          "optional": false,
          "typeAnnotation": null,
          "start": 906,
          "end": 916
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
                "start": 917,
                "end": 918
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 917,
              "end": 918
            }
          ],
          "start": 916,
          "end": 919
        },
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "InterfaceA",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 938
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
                    "start": 939,
                    "end": 940
                  },
                  "typeArguments": null,
                  "start": 939,
                  "end": 940
                }
              ],
              "start": 938,
              "end": 941
            },
            "start": 928,
            "end": 941
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 951
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
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 952,
                      "end": 953
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 952,
                    "end": 953
                  }
                ],
                "start": 951,
                "end": 954
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "callback",
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
                                "start": 973,
                                "end": 974
                              },
                              "typeArguments": null,
                              "start": 973,
                              "end": 974
                            },
                            "start": 971,
                            "end": 974
                          },
                          "start": 966,
                          "end": 974
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 979,
                            "end": 980
                          },
                          "typeArguments": null,
                          "start": 979,
                          "end": 980
                        },
                        "start": 976,
                        "end": 980
                      },
                      "start": 965,
                      "end": 980
                    },
                    "start": 963,
                    "end": 980
                  },
                  "start": 955,
                  "end": 980
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 983,
                    "end": 993
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "D",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 994,
                          "end": 995
                        },
                        "typeArguments": null,
                        "start": 994,
                        "end": 995
                      }
                    ],
                    "start": 993,
                    "end": 996
                  },
                  "start": 983,
                  "end": 996
                },
                "start": 981,
                "end": 996
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 948,
              "end": 997
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1007
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1009
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1018,
                        "end": 1025
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
                              "start": 1026,
                              "end": 1027
                            },
                            "typeArguments": null,
                            "start": 1026,
                            "end": 1027
                          }
                        ],
                        "start": 1025,
                        "end": 1028
                      },
                      "start": 1018,
                      "end": 1028
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1008,
                    "end": 1028
                  }
                ],
                "start": 1007,
                "end": 1029
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1033,
                    "end": 1043
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1044,
                          "end": 1045
                        },
                        "typeArguments": null,
                        "start": 1044,
                        "end": 1045
                      }
                    ],
                    "start": 1043,
                    "end": 1046
                  },
                  "start": 1033,
                  "end": 1046
                },
                "start": 1031,
                "end": 1046
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1002,
              "end": 1047
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitLatest",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1063
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1064,
                      "end": 1065
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1074,
                        "end": 1081
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
                              "start": 1082,
                              "end": 1083
                            },
                            "typeArguments": null,
                            "start": 1082,
                            "end": 1083
                          }
                        ],
                        "start": 1081,
                        "end": 1084
                      },
                      "start": 1074,
                      "end": 1084
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1064,
                    "end": 1084
                  }
                ],
                "start": 1063,
                "end": 1085
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1089,
                    "end": 1099
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1100,
                          "end": 1101
                        },
                        "typeArguments": null,
                        "start": 1100,
                        "end": 1101
                      }
                    ],
                    "start": 1099,
                    "end": 1102
                  },
                  "start": 1089,
                  "end": 1102
                },
                "start": 1087,
                "end": 1102
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1052,
              "end": 1103
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1108,
                "end": 1120
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1122
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1131,
                        "end": 1138
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
                              "start": 1139,
                              "end": 1140
                            },
                            "typeArguments": null,
                            "start": 1139,
                            "end": 1140
                          }
                        ],
                        "start": 1138,
                        "end": 1141
                      },
                      "start": 1131,
                      "end": 1141
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1121,
                    "end": 1141
                  }
                ],
                "start": 1120,
                "end": 1142
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1146,
                    "end": 1156
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1157,
                          "end": 1158
                        },
                        "typeArguments": null,
                        "start": 1157,
                        "end": 1158
                      }
                    ],
                    "start": 1156,
                    "end": 1159
                  },
                  "start": 1146,
                  "end": 1159
                },
                "start": 1144,
                "end": 1159
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1108,
              "end": 1160
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1165,
                "end": 1178
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1189,
                        "end": 1196
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
                              "start": 1197,
                              "end": 1198
                            },
                            "typeArguments": null,
                            "start": 1197,
                            "end": 1198
                          }
                        ],
                        "start": 1196,
                        "end": 1199
                      },
                      "start": 1189,
                      "end": 1199
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1179,
                    "end": 1199
                  }
                ],
                "start": 1178,
                "end": 1200
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1214
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1215,
                          "end": 1216
                        },
                        "typeArguments": null,
                        "start": 1215,
                        "end": 1216
                      }
                    ],
                    "start": 1214,
                    "end": 1217
                  },
                  "start": 1204,
                  "end": 1217
                },
                "start": 1202,
                "end": 1217
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1165,
              "end": 1218
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1236
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1237,
                      "end": 1238
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1247,
                        "end": 1254
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
                              "start": 1255,
                              "end": 1256
                            },
                            "typeArguments": null,
                            "start": 1255,
                            "end": 1256
                          }
                        ],
                        "start": 1254,
                        "end": 1257
                      },
                      "start": 1247,
                      "end": 1257
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1237,
                    "end": 1257
                  }
                ],
                "start": 1236,
                "end": 1258
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1262,
                    "end": 1272
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1273,
                          "end": 1274
                        },
                        "typeArguments": null,
                        "start": 1273,
                        "end": 1274
                      }
                    ],
                    "start": 1272,
                    "end": 1275
                  },
                  "start": 1262,
                  "end": 1275
                },
                "start": 1260,
                "end": 1275
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1223,
              "end": 1276
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered4",
                "optional": false,
                "typeAnnotation": null,
                "start": 1281,
                "end": 1294
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1295,
                      "end": 1296
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1305,
                        "end": 1312
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
                              "start": 1313,
                              "end": 1314
                            },
                            "typeArguments": null,
                            "start": 1313,
                            "end": 1314
                          }
                        ],
                        "start": 1312,
                        "end": 1315
                      },
                      "start": 1305,
                      "end": 1315
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1295,
                    "end": 1315
                  }
                ],
                "start": 1294,
                "end": 1316
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1320,
                    "end": 1330
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1331,
                          "end": 1332
                        },
                        "typeArguments": null,
                        "start": 1331,
                        "end": 1332
                      }
                    ],
                    "start": 1330,
                    "end": 1333
                  },
                  "start": 1320,
                  "end": 1333
                },
                "start": 1318,
                "end": 1333
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1281,
              "end": 1334
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1339,
                "end": 1352
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1353,
                      "end": 1354
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1363,
                        "end": 1370
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
                              "start": 1371,
                              "end": 1372
                            },
                            "typeArguments": null,
                            "start": 1371,
                            "end": 1372
                          }
                        ],
                        "start": 1370,
                        "end": 1373
                      },
                      "start": 1363,
                      "end": 1373
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1353,
                    "end": 1373
                  }
                ],
                "start": 1352,
                "end": 1374
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1378,
                    "end": 1388
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1389,
                          "end": 1390
                        },
                        "typeArguments": null,
                        "start": 1389,
                        "end": 1390
                      }
                    ],
                    "start": 1388,
                    "end": 1391
                  },
                  "start": 1378,
                  "end": 1391
                },
                "start": 1376,
                "end": 1391
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1339,
              "end": 1392
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered6",
                "optional": false,
                "typeAnnotation": null,
                "start": 1397,
                "end": 1410
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1411,
                      "end": 1412
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1421,
                        "end": 1428
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
                              "start": 1429,
                              "end": 1430
                            },
                            "typeArguments": null,
                            "start": 1429,
                            "end": 1430
                          }
                        ],
                        "start": 1428,
                        "end": 1431
                      },
                      "start": 1421,
                      "end": 1431
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1411,
                    "end": 1431
                  }
                ],
                "start": 1410,
                "end": 1432
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1436,
                    "end": 1446
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1447,
                          "end": 1448
                        },
                        "typeArguments": null,
                        "start": 1447,
                        "end": 1448
                      }
                    ],
                    "start": 1446,
                    "end": 1449
                  },
                  "start": 1436,
                  "end": 1449
                },
                "start": 1434,
                "end": 1449
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1397,
              "end": 1450
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered7",
                "optional": false,
                "typeAnnotation": null,
                "start": 1455,
                "end": 1468
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1469,
                      "end": 1470
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1479,
                        "end": 1486
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
                              "start": 1487,
                              "end": 1488
                            },
                            "typeArguments": null,
                            "start": 1487,
                            "end": 1488
                          }
                        ],
                        "start": 1486,
                        "end": 1489
                      },
                      "start": 1479,
                      "end": 1489
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1469,
                    "end": 1489
                  }
                ],
                "start": 1468,
                "end": 1490
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1494,
                    "end": 1504
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1505,
                          "end": 1506
                        },
                        "typeArguments": null,
                        "start": 1505,
                        "end": 1506
                      }
                    ],
                    "start": 1504,
                    "end": 1507
                  },
                  "start": 1494,
                  "end": 1507
                },
                "start": 1492,
                "end": 1507
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1455,
              "end": 1508
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered8",
                "optional": false,
                "typeAnnotation": null,
                "start": 1513,
                "end": 1526
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1527,
                      "end": 1528
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1537,
                        "end": 1544
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
                              "start": 1545,
                              "end": 1546
                            },
                            "typeArguments": null,
                            "start": 1545,
                            "end": 1546
                          }
                        ],
                        "start": 1544,
                        "end": 1547
                      },
                      "start": 1537,
                      "end": 1547
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1527,
                    "end": 1547
                  }
                ],
                "start": 1526,
                "end": 1548
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1552,
                    "end": 1562
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1563,
                          "end": 1564
                        },
                        "typeArguments": null,
                        "start": 1563,
                        "end": 1564
                      }
                    ],
                    "start": 1562,
                    "end": 1565
                  },
                  "start": 1552,
                  "end": 1565
                },
                "start": 1550,
                "end": 1565
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1513,
              "end": 1566
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered9",
                "optional": false,
                "typeAnnotation": null,
                "start": 1571,
                "end": 1584
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
                      "name": "R",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1585,
                      "end": 1586
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ThenArg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1595,
                        "end": 1602
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
                              "start": 1603,
                              "end": 1604
                            },
                            "typeArguments": null,
                            "start": 1603,
                            "end": 1604
                          }
                        ],
                        "start": 1602,
                        "end": 1605
                      },
                      "start": 1595,
                      "end": 1605
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1585,
                    "end": 1605
                  }
                ],
                "start": 1584,
                "end": 1606
              },
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "InterfaceB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1610,
                    "end": 1620
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1621,
                          "end": 1622
                        },
                        "typeArguments": null,
                        "start": 1621,
                        "end": 1622
                      }
                    ],
                    "start": 1620,
                    "end": 1623
                  },
                  "start": 1610,
                  "end": 1623
                },
                "start": 1608,
                "end": 1623
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 1571,
              "end": 1624
            }
          ],
          "start": 942,
          "end": 1626
        },
        "declare": false,
        "start": 896,
        "end": 1626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 889,
      "end": 1626
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 1641,
          "end": 1642
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
                "start": 1643,
                "end": 1644
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1643,
              "end": 1644
            }
          ],
          "start": 1642,
          "end": 1645
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "InterfaceB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1657,
              "end": 1667
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
                    "start": 1668,
                    "end": 1669
                  },
                  "typeArguments": null,
                  "start": 1668,
                  "end": 1669
                }
              ],
              "start": 1667,
              "end": 1670
            },
            "start": 1657,
            "end": 1670
          }
        ],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 1684,
                "end": 1690
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
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
                            "name": "newValue",
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
                                  "start": 1712,
                                  "end": 1713
                                },
                                "typeArguments": null,
                                "start": 1712,
                                "end": 1713
                              },
                              "start": 1710,
                              "end": 1713
                            },
                            "start": 1702,
                            "end": 1713
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "oldValue",
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
                                  "start": 1725,
                                  "end": 1726
                                },
                                "typeArguments": null,
                                "start": 1725,
                                "end": 1726
                              },
                              "start": 1723,
                              "end": 1726
                            },
                            "start": 1715,
                            "end": 1726
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1731,
                            "end": 1738
                          },
                          "start": 1728,
                          "end": 1738
                        },
                        "start": 1701,
                        "end": 1738
                      },
                      "start": 1699,
                      "end": 1738
                    },
                    "start": 1691,
                    "end": 1738
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1741,
                      "end": 1742
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
                            "start": 1743,
                            "end": 1744
                          },
                          "typeArguments": null,
                          "start": 1743,
                          "end": 1744
                        }
                      ],
                      "start": 1742,
                      "end": 1745
                    },
                    "start": 1741,
                    "end": 1745
                  },
                  "start": 1739,
                  "end": 1745
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1763,
                          "end": 1772
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1776,
                          "end": 1779
                        },
                        "start": 1763,
                        "end": 1779
                      },
                      "start": 1756,
                      "end": 1780
                    }
                  ],
                  "start": 1746,
                  "end": 1786
                },
                "expression": false,
                "start": 1690,
                "end": 1786
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 1677,
              "end": 1786
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 1799,
                "end": 1802
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1803,
                        "end": 1804
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1803,
                      "end": 1804
                    }
                  ],
                  "start": 1802,
                  "end": 1805
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
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
                                  "start": 1824,
                                  "end": 1825
                                },
                                "typeArguments": null,
                                "start": 1824,
                                "end": 1825
                              },
                              "start": 1822,
                              "end": 1825
                            },
                            "start": 1817,
                            "end": 1825
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "D",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1830,
                              "end": 1831
                            },
                            "typeArguments": null,
                            "start": 1830,
                            "end": 1831
                          },
                          "start": 1827,
                          "end": 1831
                        },
                        "start": 1816,
                        "end": 1831
                      },
                      "start": 1814,
                      "end": 1831
                    },
                    "start": 1806,
                    "end": 1831
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1834,
                      "end": 1835
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "D",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1836,
                            "end": 1837
                          },
                          "typeArguments": null,
                          "start": 1836,
                          "end": 1837
                        }
                      ],
                      "start": 1835,
                      "end": 1838
                    },
                    "start": 1834,
                    "end": 1838
                  },
                  "start": 1832,
                  "end": 1838
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1856,
                          "end": 1865
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1869,
                          "end": 1872
                        },
                        "start": 1856,
                        "end": 1872
                      },
                      "start": 1849,
                      "end": 1873
                    }
                  ],
                  "start": 1839,
                  "end": 1879
                },
                "expression": false,
                "start": 1802,
                "end": 1879
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 1792,
              "end": 1879
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "await",
                "optional": false,
                "typeAnnotation": null,
                "start": 1892,
                "end": 1897
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1898,
                        "end": 1899
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1908,
                          "end": 1915
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
                                "start": 1916,
                                "end": 1917
                              },
                              "typeArguments": null,
                              "start": 1916,
                              "end": 1917
                            }
                          ],
                          "start": 1915,
                          "end": 1918
                        },
                        "start": 1908,
                        "end": 1918
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1898,
                      "end": 1918
                    }
                  ],
                  "start": 1897,
                  "end": 1919
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1923,
                      "end": 1924
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1925,
                            "end": 1926
                          },
                          "typeArguments": null,
                          "start": 1925,
                          "end": 1926
                        }
                      ],
                      "start": 1924,
                      "end": 1927
                    },
                    "start": 1923,
                    "end": 1927
                  },
                  "start": 1921,
                  "end": 1927
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1945,
                          "end": 1954
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1958,
                          "end": 1961
                        },
                        "start": 1945,
                        "end": 1961
                      },
                      "start": 1938,
                      "end": 1962
                    }
                  ],
                  "start": 1928,
                  "end": 1968
                },
                "expression": false,
                "start": 1897,
                "end": 1968
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 1885,
              "end": 1968
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered",
                "optional": false,
                "typeAnnotation": null,
                "start": 1981,
                "end": 1993
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 1994,
                        "end": 1995
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2004,
                          "end": 2011
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
                                "start": 2012,
                                "end": 2013
                              },
                              "typeArguments": null,
                              "start": 2012,
                              "end": 2013
                            }
                          ],
                          "start": 2011,
                          "end": 2014
                        },
                        "start": 2004,
                        "end": 2014
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1994,
                      "end": 2014
                    }
                  ],
                  "start": 1993,
                  "end": 2015
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2019,
                      "end": 2020
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2021,
                            "end": 2022
                          },
                          "typeArguments": null,
                          "start": 2021,
                          "end": 2022
                        }
                      ],
                      "start": 2020,
                      "end": 2023
                    },
                    "start": 2019,
                    "end": 2023
                  },
                  "start": 2017,
                  "end": 2023
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2041,
                          "end": 2050
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2054,
                          "end": 2057
                        },
                        "start": 2041,
                        "end": 2057
                      },
                      "start": 2034,
                      "end": 2058
                    }
                  ],
                  "start": 2024,
                  "end": 2064
                },
                "expression": false,
                "start": 1993,
                "end": 2064
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 1974,
              "end": 2064
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2077,
                "end": 2090
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2091,
                        "end": 2092
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2101,
                          "end": 2108
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
                                "start": 2109,
                                "end": 2110
                              },
                              "typeArguments": null,
                              "start": 2109,
                              "end": 2110
                            }
                          ],
                          "start": 2108,
                          "end": 2111
                        },
                        "start": 2101,
                        "end": 2111
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2091,
                      "end": 2111
                    }
                  ],
                  "start": 2090,
                  "end": 2112
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2116,
                      "end": 2117
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2118,
                            "end": 2119
                          },
                          "typeArguments": null,
                          "start": 2118,
                          "end": 2119
                        }
                      ],
                      "start": 2117,
                      "end": 2120
                    },
                    "start": 2116,
                    "end": 2120
                  },
                  "start": 2114,
                  "end": 2120
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2138,
                          "end": 2147
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2151,
                          "end": 2154
                        },
                        "start": 2138,
                        "end": 2154
                      },
                      "start": 2131,
                      "end": 2155
                    }
                  ],
                  "start": 2121,
                  "end": 2161
                },
                "expression": false,
                "start": 2090,
                "end": 2161
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2070,
              "end": 2161
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2174,
                "end": 2187
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2188,
                        "end": 2189
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2198,
                          "end": 2205
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
                                "start": 2206,
                                "end": 2207
                              },
                              "typeArguments": null,
                              "start": 2206,
                              "end": 2207
                            }
                          ],
                          "start": 2205,
                          "end": 2208
                        },
                        "start": 2198,
                        "end": 2208
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2188,
                      "end": 2208
                    }
                  ],
                  "start": 2187,
                  "end": 2209
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2213,
                      "end": 2214
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2215,
                            "end": 2216
                          },
                          "typeArguments": null,
                          "start": 2215,
                          "end": 2216
                        }
                      ],
                      "start": 2214,
                      "end": 2217
                    },
                    "start": 2213,
                    "end": 2217
                  },
                  "start": 2211,
                  "end": 2217
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2235,
                          "end": 2244
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2248,
                          "end": 2251
                        },
                        "start": 2235,
                        "end": 2251
                      },
                      "start": 2228,
                      "end": 2252
                    }
                  ],
                  "start": 2218,
                  "end": 2258
                },
                "expression": false,
                "start": 2187,
                "end": 2258
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2167,
              "end": 2258
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2271,
                "end": 2284
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2285,
                        "end": 2286
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2295,
                          "end": 2302
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
                                "start": 2303,
                                "end": 2304
                              },
                              "typeArguments": null,
                              "start": 2303,
                              "end": 2304
                            }
                          ],
                          "start": 2302,
                          "end": 2305
                        },
                        "start": 2295,
                        "end": 2305
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2285,
                      "end": 2305
                    }
                  ],
                  "start": 2284,
                  "end": 2306
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2310,
                      "end": 2311
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2312,
                            "end": 2313
                          },
                          "typeArguments": null,
                          "start": 2312,
                          "end": 2313
                        }
                      ],
                      "start": 2311,
                      "end": 2314
                    },
                    "start": 2310,
                    "end": 2314
                  },
                  "start": 2308,
                  "end": 2314
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2332,
                          "end": 2341
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2345,
                          "end": 2348
                        },
                        "start": 2332,
                        "end": 2348
                      },
                      "start": 2325,
                      "end": 2349
                    }
                  ],
                  "start": 2315,
                  "end": 2355
                },
                "expression": false,
                "start": 2284,
                "end": 2355
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2264,
              "end": 2355
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered5",
                "optional": false,
                "typeAnnotation": null,
                "start": 2368,
                "end": 2381
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2382,
                        "end": 2383
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2392,
                          "end": 2399
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
                                "start": 2400,
                                "end": 2401
                              },
                              "typeArguments": null,
                              "start": 2400,
                              "end": 2401
                            }
                          ],
                          "start": 2399,
                          "end": 2402
                        },
                        "start": 2392,
                        "end": 2402
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2382,
                      "end": 2402
                    }
                  ],
                  "start": 2381,
                  "end": 2403
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2407,
                      "end": 2408
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2409,
                            "end": 2410
                          },
                          "typeArguments": null,
                          "start": 2409,
                          "end": 2410
                        }
                      ],
                      "start": 2408,
                      "end": 2411
                    },
                    "start": 2407,
                    "end": 2411
                  },
                  "start": 2405,
                  "end": 2411
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2429,
                          "end": 2438
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2442,
                          "end": 2445
                        },
                        "start": 2429,
                        "end": 2445
                      },
                      "start": 2422,
                      "end": 2446
                    }
                  ],
                  "start": 2412,
                  "end": 2452
                },
                "expression": false,
                "start": 2381,
                "end": 2452
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2361,
              "end": 2452
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered6",
                "optional": false,
                "typeAnnotation": null,
                "start": 2465,
                "end": 2478
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2479,
                        "end": 2480
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2489,
                          "end": 2496
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
                                "start": 2497,
                                "end": 2498
                              },
                              "typeArguments": null,
                              "start": 2497,
                              "end": 2498
                            }
                          ],
                          "start": 2496,
                          "end": 2499
                        },
                        "start": 2489,
                        "end": 2499
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2479,
                      "end": 2499
                    }
                  ],
                  "start": 2478,
                  "end": 2500
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2504,
                      "end": 2505
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2506,
                            "end": 2507
                          },
                          "typeArguments": null,
                          "start": 2506,
                          "end": 2507
                        }
                      ],
                      "start": 2505,
                      "end": 2508
                    },
                    "start": 2504,
                    "end": 2508
                  },
                  "start": 2502,
                  "end": 2508
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2526,
                          "end": 2535
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2539,
                          "end": 2542
                        },
                        "start": 2526,
                        "end": 2542
                      },
                      "start": 2519,
                      "end": 2543
                    }
                  ],
                  "start": 2509,
                  "end": 2549
                },
                "expression": false,
                "start": 2478,
                "end": 2549
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2458,
              "end": 2549
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered7",
                "optional": false,
                "typeAnnotation": null,
                "start": 2562,
                "end": 2575
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2576,
                        "end": 2577
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2586,
                          "end": 2593
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
                                "start": 2594,
                                "end": 2595
                              },
                              "typeArguments": null,
                              "start": 2594,
                              "end": 2595
                            }
                          ],
                          "start": 2593,
                          "end": 2596
                        },
                        "start": 2586,
                        "end": 2596
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2576,
                      "end": 2596
                    }
                  ],
                  "start": 2575,
                  "end": 2597
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2601,
                      "end": 2602
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2603,
                            "end": 2604
                          },
                          "typeArguments": null,
                          "start": 2603,
                          "end": 2604
                        }
                      ],
                      "start": 2602,
                      "end": 2605
                    },
                    "start": 2601,
                    "end": 2605
                  },
                  "start": 2599,
                  "end": 2605
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2623,
                          "end": 2632
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2636,
                          "end": 2639
                        },
                        "start": 2623,
                        "end": 2639
                      },
                      "start": 2616,
                      "end": 2640
                    }
                  ],
                  "start": 2606,
                  "end": 2646
                },
                "expression": false,
                "start": 2575,
                "end": 2646
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2555,
              "end": 2646
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered8",
                "optional": false,
                "typeAnnotation": null,
                "start": 2659,
                "end": 2672
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2673,
                        "end": 2674
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2683,
                          "end": 2690
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
                                "start": 2691,
                                "end": 2692
                              },
                              "typeArguments": null,
                              "start": 2691,
                              "end": 2692
                            }
                          ],
                          "start": 2690,
                          "end": 2693
                        },
                        "start": 2683,
                        "end": 2693
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2673,
                      "end": 2693
                    }
                  ],
                  "start": 2672,
                  "end": 2694
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2698,
                      "end": 2699
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2700,
                            "end": 2701
                          },
                          "typeArguments": null,
                          "start": 2700,
                          "end": 2701
                        }
                      ],
                      "start": 2699,
                      "end": 2702
                    },
                    "start": 2698,
                    "end": 2702
                  },
                  "start": 2696,
                  "end": 2702
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2720,
                          "end": 2729
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2733,
                          "end": 2736
                        },
                        "start": 2720,
                        "end": 2736
                      },
                      "start": 2713,
                      "end": 2737
                    }
                  ],
                  "start": 2703,
                  "end": 2743
                },
                "expression": false,
                "start": 2672,
                "end": 2743
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2652,
              "end": 2743
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitOrdered9",
                "optional": false,
                "typeAnnotation": null,
                "start": 2756,
                "end": 2769
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2770,
                        "end": 2771
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2780,
                          "end": 2787
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
                                "start": 2788,
                                "end": 2789
                              },
                              "typeArguments": null,
                              "start": 2788,
                              "end": 2789
                            }
                          ],
                          "start": 2787,
                          "end": 2790
                        },
                        "start": 2780,
                        "end": 2790
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2770,
                      "end": 2790
                    }
                  ],
                  "start": 2769,
                  "end": 2791
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2795,
                      "end": 2796
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2797,
                            "end": 2798
                          },
                          "typeArguments": null,
                          "start": 2797,
                          "end": 2798
                        }
                      ],
                      "start": 2796,
                      "end": 2799
                    },
                    "start": 2795,
                    "end": 2799
                  },
                  "start": 2793,
                  "end": 2799
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2817,
                          "end": 2826
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2830,
                          "end": 2833
                        },
                        "start": 2817,
                        "end": 2833
                      },
                      "start": 2810,
                      "end": 2834
                    }
                  ],
                  "start": 2800,
                  "end": 2840
                },
                "expression": false,
                "start": 2769,
                "end": 2840
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2749,
              "end": 2840
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "awaitLatest",
                "optional": false,
                "typeAnnotation": null,
                "start": 2853,
                "end": 2864
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
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
                        "start": 2865,
                        "end": 2866
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ThenArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2875,
                          "end": 2882
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
                                "start": 2883,
                                "end": 2884
                              },
                              "typeArguments": null,
                              "start": 2883,
                              "end": 2884
                            }
                          ],
                          "start": 2882,
                          "end": 2885
                        },
                        "start": 2875,
                        "end": 2885
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2865,
                      "end": 2885
                    }
                  ],
                  "start": 2864,
                  "end": 2886
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2890,
                      "end": 2891
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2892,
                            "end": 2893
                          },
                          "typeArguments": null,
                          "start": 2892,
                          "end": 2893
                        }
                      ],
                      "start": 2891,
                      "end": 2894
                    },
                    "start": 2890,
                    "end": 2894
                  },
                  "start": 2888,
                  "end": 2894
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2912,
                          "end": 2921
                        },
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2925,
                          "end": 2928
                        },
                        "start": 2912,
                        "end": 2928
                      },
                      "start": 2905,
                      "end": 2929
                    }
                  ],
                  "start": 2895,
                  "end": 2935
                },
                "expression": false,
                "start": 2864,
                "end": 2935
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 2846,
              "end": 2935
            }
          ],
          "start": 1671,
          "end": 2937
        },
        "abstract": false,
        "declare": false,
        "start": 1635,
        "end": 2937
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1628,
      "end": 2937
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 2952,
          "end": 2953
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
                "start": 2954,
                "end": 2955
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2954,
              "end": 2955
            }
          ],
          "start": 2953,
          "end": 2956
        },
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 2965,
          "end": 2966
        },
        "superTypeArguments": {
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
                "start": 2967,
                "end": 2968
              },
              "typeArguments": null,
              "start": 2967,
              "end": 2968
            }
          ],
          "start": 2966,
          "end": 2969
        },
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 2970,
          "end": 2973
        },
        "abstract": false,
        "declare": false,
        "start": 2946,
        "end": 2973
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2939,
      "end": 2973
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2973
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19,
    "range": [
      15,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 20,
    "end": 27,
    "range": [
      20,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 35,
    "end": 42,
    "range": [
      35,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46,
    "range": [
      43,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 49,
    "end": 52,
    "range": [
      49,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 57,
    "end": 64,
    "range": [
      57,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "PromiseLike",
    "start": 65,
    "end": 76,
    "range": [
      65,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 103,
    "end": 112,
    "range": [
      103,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 113,
    "end": 123,
    "range": [
      113,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 140,
    "end": 148,
    "range": [
      140,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 151,
    "end": 159,
    "range": [
      151,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 164,
    "end": 172,
    "range": [
      164,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179,
    "range": [
      177,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 180,
    "end": 187,
    "range": [
      180,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 190,
    "end": 200,
    "range": [
      190,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 209,
    "end": 212,
    "range": [
      209,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 216,
    "end": 224,
    "range": [
      216,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 227,
    "end": 232,
    "range": [
      227,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 237,
    "end": 239,
    "range": [
      237,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 244,
    "end": 254,
    "range": [
      244,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 263,
    "end": 268,
    "range": [
      263,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 271,
    "end": 278,
    "range": [
      271,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 279,
    "end": 286,
    "range": [
      279,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 294,
    "end": 304,
    "range": [
      294,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitLatest",
    "start": 313,
    "end": 324,
    "range": [
      313,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 327,
    "end": 334,
    "range": [
      327,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 335,
    "end": 342,
    "range": [
      335,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 350,
    "end": 360,
    "range": [
      350,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered",
    "start": 369,
    "end": 381,
    "range": [
      369,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 384,
    "end": 391,
    "range": [
      384,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 392,
    "end": 399,
    "range": [
      392,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 407,
    "end": 417,
    "range": [
      407,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered2",
    "start": 426,
    "end": 439,
    "range": [
      426,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 442,
    "end": 449,
    "range": [
      442,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 450,
    "end": 457,
    "range": [
      450,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 465,
    "end": 475,
    "range": [
      465,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered3",
    "start": 484,
    "end": 497,
    "range": [
      484,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 500,
    "end": 507,
    "range": [
      500,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 508,
    "end": 515,
    "range": [
      508,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 523,
    "end": 533,
    "range": [
      523,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered4",
    "start": 542,
    "end": 555,
    "range": [
      542,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 558,
    "end": 565,
    "range": [
      558,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 566,
    "end": 573,
    "range": [
      566,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 581,
    "end": 591,
    "range": [
      581,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered5",
    "start": 600,
    "end": 613,
    "range": [
      600,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 616,
    "end": 623,
    "range": [
      616,
      623
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 624,
    "end": 631,
    "range": [
      624,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 633,
    "end": 634,
    "range": [
      633,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 639,
    "end": 649,
    "range": [
      639,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered6",
    "start": 658,
    "end": 671,
    "range": [
      658,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 674,
    "end": 681,
    "range": [
      674,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 682,
    "end": 689,
    "range": [
      682,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 697,
    "end": 707,
    "range": [
      697,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered7",
    "start": 716,
    "end": 729,
    "range": [
      716,
      729
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 732,
    "end": 739,
    "range": [
      732,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 740,
    "end": 747,
    "range": [
      740,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 755,
    "end": 765,
    "range": [
      755,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered8",
    "start": 774,
    "end": 787,
    "range": [
      774,
      787
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 790,
    "end": 797,
    "range": [
      790,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 798,
    "end": 805,
    "range": [
      798,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 813,
    "end": 823,
    "range": [
      813,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered9",
    "start": 832,
    "end": 845,
    "range": [
      832,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 848,
    "end": 855,
    "range": [
      848,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 856,
    "end": 863,
    "range": [
      856,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 871,
    "end": 881,
    "range": [
      871,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 889,
    "end": 895,
    "range": [
      889,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 896,
    "end": 905,
    "range": [
      896,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 906,
    "end": 916,
    "range": [
      906,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 920,
    "end": 927,
    "range": [
      920,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceA",
    "start": 928,
    "end": 938,
    "range": [
      928,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 948,
    "end": 951,
    "range": [
      948,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 955,
    "end": 963,
    "range": [
      955,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 966,
    "end": 971,
    "range": [
      966,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 976,
    "end": 978,
    "range": [
      976,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 983,
    "end": 993,
    "range": [
      983,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1002,
    "end": 1007,
    "range": [
      1002,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1008,
    "end": 1009,
    "range": [
      1008,
      1009
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1010,
    "end": 1017,
    "range": [
      1010,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1018,
    "end": 1025,
    "range": [
      1018,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1033,
    "end": 1043,
    "range": [
      1033,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitLatest",
    "start": 1052,
    "end": 1063,
    "range": [
      1052,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1066,
    "end": 1073,
    "range": [
      1066,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1074,
    "end": 1081,
    "range": [
      1074,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1089,
    "end": 1099,
    "range": [
      1089,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1102,
    "end": 1103,
    "range": [
      1102,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered",
    "start": 1108,
    "end": 1120,
    "range": [
      1108,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1123,
    "end": 1130,
    "range": [
      1123,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1131,
    "end": 1138,
    "range": [
      1131,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1139,
    "end": 1140,
    "range": [
      1139,
      1140
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1146,
    "end": 1156,
    "range": [
      1146,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1156,
    "end": 1157,
    "range": [
      1156,
      1157
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered2",
    "start": 1165,
    "end": 1178,
    "range": [
      1165,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1181,
    "end": 1188,
    "range": [
      1181,
      1188
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1189,
    "end": 1196,
    "range": [
      1189,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1204,
    "end": 1214,
    "range": [
      1204,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered3",
    "start": 1223,
    "end": 1236,
    "range": [
      1223,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1239,
    "end": 1246,
    "range": [
      1239,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1247,
    "end": 1254,
    "range": [
      1247,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1262,
    "end": 1272,
    "range": [
      1262,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered4",
    "start": 1281,
    "end": 1294,
    "range": [
      1281,
      1294
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1294,
    "end": 1295,
    "range": [
      1294,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1297,
    "end": 1304,
    "range": [
      1297,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1305,
    "end": 1312,
    "range": [
      1305,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1320,
    "end": 1330,
    "range": [
      1320,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered5",
    "start": 1339,
    "end": 1352,
    "range": [
      1339,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1355,
    "end": 1362,
    "range": [
      1355,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1363,
    "end": 1370,
    "range": [
      1363,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1374,
    "end": 1375,
    "range": [
      1374,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1378,
    "end": 1388,
    "range": [
      1378,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered6",
    "start": 1397,
    "end": 1410,
    "range": [
      1397,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1413,
    "end": 1420,
    "range": [
      1413,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1421,
    "end": 1428,
    "range": [
      1421,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1436,
    "end": 1446,
    "range": [
      1436,
      1446
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered7",
    "start": 1455,
    "end": 1468,
    "range": [
      1455,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1471,
    "end": 1478,
    "range": [
      1471,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1479,
    "end": 1486,
    "range": [
      1479,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1494,
    "end": 1504,
    "range": [
      1494,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered8",
    "start": 1513,
    "end": 1526,
    "range": [
      1513,
      1526
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1529,
    "end": 1536,
    "range": [
      1529,
      1536
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1537,
    "end": 1544,
    "range": [
      1537,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1545,
    "end": 1546,
    "range": [
      1545,
      1546
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1546,
    "end": 1547,
    "range": [
      1546,
      1547
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1547,
    "end": 1548,
    "range": [
      1547,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1552,
    "end": 1562,
    "range": [
      1552,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered9",
    "start": 1571,
    "end": 1584,
    "range": [
      1571,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1587,
    "end": 1594,
    "range": [
      1587,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1595,
    "end": 1602,
    "range": [
      1595,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1610,
    "end": 1620,
    "range": [
      1610,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1628,
    "end": 1634,
    "range": [
      1628,
      1634
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1635,
    "end": 1640,
    "range": [
      1635,
      1640
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1646,
    "end": 1656,
    "range": [
      1646,
      1656
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceB",
    "start": 1657,
    "end": 1667,
    "range": [
      1657,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1677,
    "end": 1683,
    "range": [
      1677,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "filter",
    "start": 1684,
    "end": 1690,
    "range": [
      1684,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1691,
    "end": 1699,
    "range": [
      1691,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 1702,
    "end": 1710,
    "range": [
      1702,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "oldValue",
    "start": 1715,
    "end": 1723,
    "range": [
      1715,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1728,
    "end": 1730,
    "range": [
      1728,
      1730
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1731,
    "end": 1738,
    "range": [
      1731,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1756,
    "end": 1762,
    "range": [
      1756,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1763,
    "end": 1772,
    "range": [
      1763,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1773,
    "end": 1775,
    "range": [
      1773,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1776,
    "end": 1779,
    "range": [
      1776,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1792,
    "end": 1798,
    "range": [
      1792,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 1799,
    "end": 1802,
    "range": [
      1799,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 1806,
    "end": 1814,
    "range": [
      1806,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1817,
    "end": 1822,
    "range": [
      1817,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1827,
    "end": 1829,
    "range": [
      1827,
      1829
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1836,
    "end": 1837,
    "range": [
      1836,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1849,
    "end": 1855,
    "range": [
      1849,
      1855
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1856,
    "end": 1865,
    "range": [
      1856,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1866,
    "end": 1868,
    "range": [
      1866,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1869,
    "end": 1872,
    "range": [
      1869,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1885,
    "end": 1891,
    "range": [
      1885,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 1892,
    "end": 1897,
    "range": [
      1892,
      1897
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1898,
    "end": 1899,
    "range": [
      1898,
      1899
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1900,
    "end": 1907,
    "range": [
      1900,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 1908,
    "end": 1915,
    "range": [
      1908,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1926,
    "end": 1927,
    "range": [
      1926,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1938,
    "end": 1944,
    "range": [
      1938,
      1944
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1945,
    "end": 1954,
    "range": [
      1945,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1955,
    "end": 1957,
    "range": [
      1955,
      1957
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1958,
    "end": 1961,
    "range": [
      1958,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1974,
    "end": 1980,
    "range": [
      1974,
      1980
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered",
    "start": 1981,
    "end": 1993,
    "range": [
      1981,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1993,
    "end": 1994,
    "range": [
      1993,
      1994
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1996,
    "end": 2003,
    "range": [
      1996,
      2003
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2004,
    "end": 2011,
    "range": [
      2004,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2014,
    "end": 2015,
    "range": [
      2014,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2034,
    "end": 2040,
    "range": [
      2034,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2041,
    "end": 2050,
    "range": [
      2041,
      2050
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2051,
    "end": 2053,
    "range": [
      2051,
      2053
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2054,
    "end": 2057,
    "range": [
      2054,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058,
    "range": [
      2057,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2063,
    "end": 2064,
    "range": [
      2063,
      2064
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2070,
    "end": 2076,
    "range": [
      2070,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered2",
    "start": 2077,
    "end": 2090,
    "range": [
      2077,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2090,
    "end": 2091,
    "range": [
      2090,
      2091
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2093,
    "end": 2100,
    "range": [
      2093,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2101,
    "end": 2108,
    "range": [
      2101,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2109,
    "end": 2110,
    "range": [
      2109,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2114,
    "end": 2115,
    "range": [
      2114,
      2115
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2118,
    "end": 2119,
    "range": [
      2118,
      2119
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2119,
    "end": 2120,
    "range": [
      2119,
      2120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2121,
    "end": 2122,
    "range": [
      2121,
      2122
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2131,
    "end": 2137,
    "range": [
      2131,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2138,
    "end": 2147,
    "range": [
      2138,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2148,
    "end": 2150,
    "range": [
      2148,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2151,
    "end": 2154,
    "range": [
      2151,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2167,
    "end": 2173,
    "range": [
      2167,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered3",
    "start": 2174,
    "end": 2187,
    "range": [
      2174,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2190,
    "end": 2197,
    "range": [
      2190,
      2197
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2198,
    "end": 2205,
    "range": [
      2198,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2211,
    "end": 2212,
    "range": [
      2211,
      2212
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2216,
    "end": 2217,
    "range": [
      2216,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2228,
    "end": 2234,
    "range": [
      2228,
      2234
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2235,
    "end": 2244,
    "range": [
      2235,
      2244
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2245,
    "end": 2247,
    "range": [
      2245,
      2247
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2248,
    "end": 2251,
    "range": [
      2248,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2257,
    "end": 2258,
    "range": [
      2257,
      2258
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2264,
    "end": 2270,
    "range": [
      2264,
      2270
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered4",
    "start": 2271,
    "end": 2284,
    "range": [
      2271,
      2284
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2284,
    "end": 2285,
    "range": [
      2284,
      2285
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2287,
    "end": 2294,
    "range": [
      2287,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2295,
    "end": 2302,
    "range": [
      2295,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2304,
    "end": 2305,
    "range": [
      2304,
      2305
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2305,
    "end": 2306,
    "range": [
      2305,
      2306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2306,
    "end": 2307,
    "range": [
      2306,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2308,
    "end": 2309,
    "range": [
      2308,
      2309
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2310,
    "end": 2311,
    "range": [
      2310,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2325,
    "end": 2331,
    "range": [
      2325,
      2331
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2332,
    "end": 2341,
    "range": [
      2332,
      2341
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2342,
    "end": 2344,
    "range": [
      2342,
      2344
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2345,
    "end": 2348,
    "range": [
      2345,
      2348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2348,
    "end": 2349,
    "range": [
      2348,
      2349
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2354,
    "end": 2355,
    "range": [
      2354,
      2355
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2361,
    "end": 2367,
    "range": [
      2361,
      2367
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered5",
    "start": 2368,
    "end": 2381,
    "range": [
      2368,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2384,
    "end": 2391,
    "range": [
      2384,
      2391
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2392,
    "end": 2399,
    "range": [
      2392,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2399,
    "end": 2400,
    "range": [
      2399,
      2400
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2401,
    "end": 2402,
    "range": [
      2401,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2404,
    "end": 2405,
    "range": [
      2404,
      2405
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2410,
    "end": 2411,
    "range": [
      2410,
      2411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2412,
    "end": 2413,
    "range": [
      2412,
      2413
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2422,
    "end": 2428,
    "range": [
      2422,
      2428
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2429,
    "end": 2438,
    "range": [
      2429,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2439,
    "end": 2441,
    "range": [
      2439,
      2441
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2442,
    "end": 2445,
    "range": [
      2442,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2445,
    "end": 2446,
    "range": [
      2445,
      2446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2458,
    "end": 2464,
    "range": [
      2458,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered6",
    "start": 2465,
    "end": 2478,
    "range": [
      2465,
      2478
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2478,
    "end": 2479,
    "range": [
      2478,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2481,
    "end": 2488,
    "range": [
      2481,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2489,
    "end": 2496,
    "range": [
      2489,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2496,
    "end": 2497,
    "range": [
      2496,
      2497
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2498,
    "end": 2499,
    "range": [
      2498,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2499,
    "end": 2500,
    "range": [
      2499,
      2500
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2505,
    "end": 2506,
    "range": [
      2505,
      2506
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2519,
    "end": 2525,
    "range": [
      2519,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2526,
    "end": 2535,
    "range": [
      2526,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2536,
    "end": 2538,
    "range": [
      2536,
      2538
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2539,
    "end": 2542,
    "range": [
      2539,
      2542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2542,
    "end": 2543,
    "range": [
      2542,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2555,
    "end": 2561,
    "range": [
      2555,
      2561
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered7",
    "start": 2562,
    "end": 2575,
    "range": [
      2562,
      2575
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2575,
    "end": 2576,
    "range": [
      2575,
      2576
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2578,
    "end": 2585,
    "range": [
      2578,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2586,
    "end": 2593,
    "range": [
      2586,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2593,
    "end": 2594,
    "range": [
      2593,
      2594
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2595,
    "end": 2596,
    "range": [
      2595,
      2596
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2596,
    "end": 2597,
    "range": [
      2596,
      2597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2597,
    "end": 2598,
    "range": [
      2597,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2598,
    "end": 2599,
    "range": [
      2598,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2604,
    "end": 2605,
    "range": [
      2604,
      2605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2616,
    "end": 2622,
    "range": [
      2616,
      2622
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2623,
    "end": 2632,
    "range": [
      2623,
      2632
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2633,
    "end": 2635,
    "range": [
      2633,
      2635
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2636,
    "end": 2639,
    "range": [
      2636,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2652,
    "end": 2658,
    "range": [
      2652,
      2658
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered8",
    "start": 2659,
    "end": 2672,
    "range": [
      2659,
      2672
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2672,
    "end": 2673,
    "range": [
      2672,
      2673
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2675,
    "end": 2682,
    "range": [
      2675,
      2682
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2683,
    "end": 2690,
    "range": [
      2683,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2692,
    "end": 2693,
    "range": [
      2692,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2693,
    "end": 2694,
    "range": [
      2693,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2695,
    "end": 2696,
    "range": [
      2695,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2713,
    "end": 2719,
    "range": [
      2713,
      2719
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2720,
    "end": 2729,
    "range": [
      2720,
      2729
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2730,
    "end": 2732,
    "range": [
      2730,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2733,
    "end": 2736,
    "range": [
      2733,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2736,
    "end": 2737,
    "range": [
      2736,
      2737
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2749,
    "end": 2755,
    "range": [
      2749,
      2755
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitOrdered9",
    "start": 2756,
    "end": 2769,
    "range": [
      2756,
      2769
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2769,
    "end": 2770,
    "range": [
      2769,
      2770
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2770,
    "end": 2771,
    "range": [
      2770,
      2771
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2772,
    "end": 2779,
    "range": [
      2772,
      2779
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2780,
    "end": 2787,
    "range": [
      2780,
      2787
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2787,
    "end": 2788,
    "range": [
      2787,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2788,
    "end": 2789,
    "range": [
      2788,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2793,
    "end": 2794,
    "range": [
      2793,
      2794
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2810,
    "end": 2816,
    "range": [
      2810,
      2816
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2817,
    "end": 2826,
    "range": [
      2817,
      2826
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2827,
    "end": 2829,
    "range": [
      2827,
      2829
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2830,
    "end": 2833,
    "range": [
      2830,
      2833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2833,
    "end": 2834,
    "range": [
      2833,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2839,
    "end": 2840,
    "range": [
      2839,
      2840
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 2846,
    "end": 2852,
    "range": [
      2846,
      2852
    ]
  },
  {
    "type": "Identifier",
    "value": "awaitLatest",
    "start": 2853,
    "end": 2864,
    "range": [
      2853,
      2864
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2864,
    "end": 2865,
    "range": [
      2864,
      2865
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2865,
    "end": 2866,
    "range": [
      2865,
      2866
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2867,
    "end": 2874,
    "range": [
      2867,
      2874
    ]
  },
  {
    "type": "Identifier",
    "value": "ThenArg",
    "start": 2875,
    "end": 2882,
    "range": [
      2875,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2883,
    "end": 2884,
    "range": [
      2883,
      2884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2885,
    "end": 2886,
    "range": [
      2885,
      2886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2886,
    "end": 2887,
    "range": [
      2886,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2895,
    "end": 2896,
    "range": [
      2895,
      2896
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2905,
    "end": 2911,
    "range": [
      2905,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2912,
    "end": 2921,
    "range": [
      2912,
      2921
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2922,
    "end": 2924,
    "range": [
      2922,
      2924
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2925,
    "end": 2928,
    "range": [
      2925,
      2928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2939,
    "end": 2945,
    "range": [
      2939,
      2945
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2946,
    "end": 2951,
    "range": [
      2946,
      2951
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2954,
    "end": 2955,
    "range": [
      2954,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2957,
    "end": 2964,
    "range": [
      2957,
      2964
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2968,
    "end": 2969,
    "range": [
      2968,
      2969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2970,
    "end": 2971,
    "range": [
      2970,
      2971
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  }
]
```
