__ESTREE_TEST__:PASS:
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
