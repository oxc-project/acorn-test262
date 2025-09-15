__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassTypeParam",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 126
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 143,
              "end": 147
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
                    "start": 148,
                    "end": 149
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 148,
                  "end": 149
                }
              ],
              "start": 147,
              "end": 150
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
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
                        "start": 171,
                        "end": 175
                      },
                      "start": 164,
                      "end": 175
                    },
                    "start": 162,
                    "end": 175
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 176
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 187
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 198,
                                "end": 199
                              },
                              "typeArguments": null,
                              "start": 198,
                              "end": 199
                            },
                            "start": 196,
                            "end": 199
                          },
                          "start": 194,
                          "end": 199
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 204,
                            "end": 205
                          },
                          "typeArguments": null,
                          "start": 204,
                          "end": 205
                        },
                        "start": 201,
                        "end": 205
                      },
                      "start": 189,
                      "end": 205
                    },
                    "start": 187,
                    "end": 205
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 185,
                  "end": 206
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 217
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 227,
                                "end": 228
                              },
                              "typeArguments": null,
                              "start": 227,
                              "end": 228
                            },
                            "start": 225,
                            "end": 228
                          },
                          "start": 224,
                          "end": 228
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 233,
                            "end": 234
                          },
                          "typeArguments": null,
                          "start": 233,
                          "end": 234
                        },
                        "start": 230,
                        "end": 234
                      },
                      "start": 219,
                      "end": 234
                    },
                    "start": 217,
                    "end": 234
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 215,
                  "end": 235
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 246
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 256,
                                "end": 257
                              },
                              "typeArguments": null,
                              "start": 256,
                              "end": 257
                            },
                            "start": 254,
                            "end": 257
                          },
                          "start": 253,
                          "end": 257
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 263,
                                "end": 264
                              },
                              "typeArguments": null,
                              "start": 263,
                              "end": 264
                            },
                            "start": 261,
                            "end": 264
                          },
                          "start": 259,
                          "end": 264
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
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
                      "start": 248,
                      "end": 270
                    },
                    "start": 246,
                    "end": 270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 244,
                  "end": 271
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 280,
                    "end": 282
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 293,
                                "end": 294
                              },
                              "typeArguments": null,
                              "start": 293,
                              "end": 294
                            },
                            "start": 291,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 300,
                                "end": 301
                              },
                              "typeArguments": null,
                              "start": 300,
                              "end": 301
                            },
                            "start": 298,
                            "end": 301
                          },
                          "start": 296,
                          "end": 301
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 306,
                            "end": 307
                          },
                          "typeArguments": null,
                          "start": 306,
                          "end": 307
                        },
                        "start": 303,
                        "end": 307
                      },
                      "start": 284,
                      "end": 307
                    },
                    "start": 282,
                    "end": 307
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 280,
                  "end": 308
                }
              ],
              "start": 151,
              "end": 314
            },
            "declare": false,
            "start": 133,
            "end": 314
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
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
                    "start": 333,
                    "end": 334
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 333,
                  "end": 334
                }
              ],
              "start": 332,
              "end": 335
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 348
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
                        "start": 349,
                        "end": 350
                      },
                      "typeArguments": null,
                      "start": 349,
                      "end": 350
                    }
                  ],
                  "start": 348,
                  "end": 351
                },
                "start": 344,
                "end": 351
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 362,
                    "end": 363
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 375,
                            "end": 376
                          },
                          "typeArguments": null,
                          "start": 375,
                          "end": 376
                        },
                        "start": 372,
                        "end": 376
                      },
                      "start": 365,
                      "end": 376
                    },
                    "start": 363,
                    "end": 376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 362,
                  "end": 377
                }
              ],
              "start": 352,
              "end": 416
            },
            "declare": false,
            "start": 320,
            "end": 416
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 432,
              "end": 434
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
                    "start": 435,
                    "end": 436
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 435,
                  "end": 436
                }
              ],
              "start": 434,
              "end": 437
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 450
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
                        "start": 451,
                        "end": 452
                      },
                      "typeArguments": null,
                      "start": 451,
                      "end": 452
                    }
                  ],
                  "start": 450,
                  "end": 453
                },
                "start": 446,
                "end": 453
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 465
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 476,
                                "end": 477
                              },
                              "typeArguments": null,
                              "start": 476,
                              "end": 477
                            },
                            "start": 474,
                            "end": 477
                          },
                          "start": 472,
                          "end": 477
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 483
                          },
                          "typeArguments": null,
                          "start": 482,
                          "end": 483
                        },
                        "start": 479,
                        "end": 483
                      },
                      "start": 467,
                      "end": 483
                    },
                    "start": 465,
                    "end": 483
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 464,
                  "end": 484
                }
              ],
              "start": 454,
              "end": 523
            },
            "declare": false,
            "start": 422,
            "end": 523
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 539,
              "end": 541
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
                    "start": 542,
                    "end": 543
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 542,
                  "end": 543
                }
              ],
              "start": 541,
              "end": 544
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 557
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
                        "start": 558,
                        "end": 559
                      },
                      "typeArguments": null,
                      "start": 558,
                      "end": 559
                    }
                  ],
                  "start": 557,
                  "end": 560
                },
                "start": 553,
                "end": 560
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 582,
                                "end": 583
                              },
                              "typeArguments": null,
                              "start": 582,
                              "end": 583
                            },
                            "start": 580,
                            "end": 583
                          },
                          "start": 579,
                          "end": 583
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 588,
                            "end": 589
                          },
                          "typeArguments": null,
                          "start": 588,
                          "end": 589
                        },
                        "start": 585,
                        "end": 589
                      },
                      "start": 574,
                      "end": 589
                    },
                    "start": 572,
                    "end": 589
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 571,
                  "end": 590
                }
              ],
              "start": 561,
              "end": 631
            },
            "declare": false,
            "start": 529,
            "end": 631
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 648,
              "end": 650
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
                    "start": 651,
                    "end": 652
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 651,
                  "end": 652
                }
              ],
              "start": 650,
              "end": 653
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 662,
                  "end": 666
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
                        "start": 667,
                        "end": 668
                      },
                      "typeArguments": null,
                      "start": 667,
                      "end": 668
                    }
                  ],
                  "start": 666,
                  "end": 669
                },
                "start": 662,
                "end": 669
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 680,
                    "end": 682
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 694,
                            "end": 695
                          },
                          "typeArguments": null,
                          "start": 694,
                          "end": 695
                        },
                        "start": 691,
                        "end": 695
                      },
                      "start": 684,
                      "end": 695
                    },
                    "start": 682,
                    "end": 695
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 680,
                  "end": 696
                }
              ],
              "start": 670,
              "end": 735
            },
            "declare": false,
            "start": 638,
            "end": 735
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 751,
              "end": 753
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
                    "start": 754,
                    "end": 755
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 754,
                  "end": 755
                }
              ],
              "start": 753,
              "end": 756
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 769
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
                        "start": 770,
                        "end": 771
                      },
                      "typeArguments": null,
                      "start": 770,
                      "end": 771
                    }
                  ],
                  "start": 769,
                  "end": 772
                },
                "start": 765,
                "end": 772
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 783,
                    "end": 785
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 796,
                                "end": 797
                              },
                              "typeArguments": null,
                              "start": 796,
                              "end": 797
                            },
                            "start": 794,
                            "end": 797
                          },
                          "start": 792,
                          "end": 797
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 802,
                            "end": 803
                          },
                          "typeArguments": null,
                          "start": 802,
                          "end": 803
                        },
                        "start": 799,
                        "end": 803
                      },
                      "start": 787,
                      "end": 803
                    },
                    "start": 785,
                    "end": 803
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 783,
                  "end": 804
                }
              ],
              "start": 773,
              "end": 843
            },
            "declare": false,
            "start": 741,
            "end": 843
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 861
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
                    "start": 862,
                    "end": 863
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 862,
                  "end": 863
                }
              ],
              "start": 861,
              "end": 864
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 873,
                  "end": 877
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
                        "start": 878,
                        "end": 879
                      },
                      "typeArguments": null,
                      "start": 878,
                      "end": 879
                    }
                  ],
                  "start": 877,
                  "end": 880
                },
                "start": 873,
                "end": 880
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 893
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 903,
                                "end": 904
                              },
                              "typeArguments": null,
                              "start": 903,
                              "end": 904
                            },
                            "start": 901,
                            "end": 904
                          },
                          "start": 900,
                          "end": 904
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 909,
                            "end": 910
                          },
                          "typeArguments": null,
                          "start": 909,
                          "end": 910
                        },
                        "start": 906,
                        "end": 910
                      },
                      "start": 895,
                      "end": 910
                    },
                    "start": 893,
                    "end": 910
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 891,
                  "end": 911
                }
              ],
              "start": 881,
              "end": 946
            },
            "declare": false,
            "start": 849,
            "end": 946
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 965
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
                    "start": 966,
                    "end": 967
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 966,
                  "end": 967
                }
              ],
              "start": 965,
              "end": 968
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 977,
                  "end": 981
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
                        "start": 982,
                        "end": 983
                      },
                      "typeArguments": null,
                      "start": 982,
                      "end": 983
                    }
                  ],
                  "start": 981,
                  "end": 984
                },
                "start": 977,
                "end": 984
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 995,
                    "end": 997
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1009,
                            "end": 1010
                          },
                          "typeArguments": null,
                          "start": 1009,
                          "end": 1010
                        },
                        "start": 1006,
                        "end": 1010
                      },
                      "start": 999,
                      "end": 1010
                    },
                    "start": 997,
                    "end": 1010
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 995,
                  "end": 1011
                }
              ],
              "start": 985,
              "end": 1046
            },
            "declare": false,
            "start": 953,
            "end": 1046
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1062,
              "end": 1064
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
                    "start": 1065,
                    "end": 1066
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1065,
                  "end": 1066
                }
              ],
              "start": 1064,
              "end": 1067
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1076,
                  "end": 1080
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
                        "start": 1081,
                        "end": 1082
                      },
                      "typeArguments": null,
                      "start": 1081,
                      "end": 1082
                    }
                  ],
                  "start": 1080,
                  "end": 1083
                },
                "start": 1076,
                "end": 1083
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1094,
                    "end": 1096
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1107,
                                "end": 1108
                              },
                              "typeArguments": null,
                              "start": 1107,
                              "end": 1108
                            },
                            "start": 1105,
                            "end": 1108
                          },
                          "start": 1103,
                          "end": 1108
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1113,
                            "end": 1114
                          },
                          "typeArguments": null,
                          "start": 1113,
                          "end": 1114
                        },
                        "start": 1110,
                        "end": 1114
                      },
                      "start": 1098,
                      "end": 1114
                    },
                    "start": 1096,
                    "end": 1114
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1094,
                  "end": 1115
                }
              ],
              "start": 1084,
              "end": 1150
            },
            "declare": false,
            "start": 1052,
            "end": 1150
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1166,
              "end": 1168
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
                    "start": 1169,
                    "end": 1170
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1169,
                  "end": 1170
                }
              ],
              "start": 1168,
              "end": 1171
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1180,
                  "end": 1184
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
                        "start": 1185,
                        "end": 1186
                      },
                      "typeArguments": null,
                      "start": 1185,
                      "end": 1186
                    }
                  ],
                  "start": 1184,
                  "end": 1187
                },
                "start": 1180,
                "end": 1187
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1198,
                    "end": 1200
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1210,
                                "end": 1211
                              },
                              "typeArguments": null,
                              "start": 1210,
                              "end": 1211
                            },
                            "start": 1208,
                            "end": 1211
                          },
                          "start": 1207,
                          "end": 1211
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1216,
                            "end": 1217
                          },
                          "typeArguments": null,
                          "start": 1216,
                          "end": 1217
                        },
                        "start": 1213,
                        "end": 1217
                      },
                      "start": 1202,
                      "end": 1217
                    },
                    "start": 1200,
                    "end": 1217
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1198,
                  "end": 1218
                }
              ],
              "start": 1188,
              "end": 1257
            },
            "declare": false,
            "start": 1156,
            "end": 1257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1273,
              "end": 1276
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
                    "start": 1277,
                    "end": 1278
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1277,
                  "end": 1278
                }
              ],
              "start": 1276,
              "end": 1279
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1288,
                  "end": 1292
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
                        "start": 1293,
                        "end": 1294
                      },
                      "typeArguments": null,
                      "start": 1293,
                      "end": 1294
                    }
                  ],
                  "start": 1292,
                  "end": 1295
                },
                "start": 1288,
                "end": 1295
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1306,
                    "end": 1308
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1318,
                                "end": 1319
                              },
                              "typeArguments": null,
                              "start": 1318,
                              "end": 1319
                            },
                            "start": 1316,
                            "end": 1319
                          },
                          "start": 1315,
                          "end": 1319
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 1324,
                                "end": 1325
                              },
                              "typeArguments": null,
                              "start": 1324,
                              "end": 1325
                            },
                            "start": 1322,
                            "end": 1325
                          },
                          "start": 1321,
                          "end": 1325
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1330,
                            "end": 1331
                          },
                          "typeArguments": null,
                          "start": 1330,
                          "end": 1331
                        },
                        "start": 1327,
                        "end": 1331
                      },
                      "start": 1310,
                      "end": 1331
                    },
                    "start": 1308,
                    "end": 1331
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1306,
                  "end": 1332
                }
              ],
              "start": 1296,
              "end": 1374
            },
            "declare": false,
            "start": 1263,
            "end": 1374
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1394
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
                    "start": 1395,
                    "end": 1396
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1395,
                  "end": 1396
                }
              ],
              "start": 1394,
              "end": 1397
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1410
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
                        "start": 1411,
                        "end": 1412
                      },
                      "typeArguments": null,
                      "start": 1411,
                      "end": 1412
                    }
                  ],
                  "start": 1410,
                  "end": 1413
                },
                "start": 1406,
                "end": 1413
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1424,
                    "end": 1426
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1438,
                            "end": 1439
                          },
                          "typeArguments": null,
                          "start": 1438,
                          "end": 1439
                        },
                        "start": 1435,
                        "end": 1439
                      },
                      "start": 1428,
                      "end": 1439
                    },
                    "start": 1426,
                    "end": 1439
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1424,
                  "end": 1440
                }
              ],
              "start": 1414,
              "end": 1475
            },
            "declare": false,
            "start": 1381,
            "end": 1475
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1491,
              "end": 1494
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
                    "start": 1495,
                    "end": 1496
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1495,
                  "end": 1496
                }
              ],
              "start": 1494,
              "end": 1497
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1506,
                  "end": 1510
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
                        "start": 1511,
                        "end": 1512
                      },
                      "typeArguments": null,
                      "start": 1511,
                      "end": 1512
                    }
                  ],
                  "start": 1510,
                  "end": 1513
                },
                "start": 1506,
                "end": 1513
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1524,
                    "end": 1526
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1537,
                                "end": 1538
                              },
                              "typeArguments": null,
                              "start": 1537,
                              "end": 1538
                            },
                            "start": 1535,
                            "end": 1538
                          },
                          "start": 1533,
                          "end": 1538
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1544,
                                "end": 1545
                              },
                              "typeArguments": null,
                              "start": 1544,
                              "end": 1545
                            },
                            "start": 1542,
                            "end": 1545
                          },
                          "start": 1540,
                          "end": 1545
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1550,
                            "end": 1551
                          },
                          "typeArguments": null,
                          "start": 1550,
                          "end": 1551
                        },
                        "start": 1547,
                        "end": 1551
                      },
                      "start": 1528,
                      "end": 1551
                    },
                    "start": 1526,
                    "end": 1551
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1524,
                  "end": 1552
                }
              ],
              "start": 1514,
              "end": 1587
            },
            "declare": false,
            "start": 1481,
            "end": 1587
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1603,
              "end": 1606
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
                    "start": 1607,
                    "end": 1608
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1607,
                  "end": 1608
                }
              ],
              "start": 1606,
              "end": 1609
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1618,
                  "end": 1622
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
                        "start": 1623,
                        "end": 1624
                      },
                      "typeArguments": null,
                      "start": 1623,
                      "end": 1624
                    }
                  ],
                  "start": 1622,
                  "end": 1625
                },
                "start": 1618,
                "end": 1625
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1636,
                    "end": 1638
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1648,
                                "end": 1649
                              },
                              "typeArguments": null,
                              "start": 1648,
                              "end": 1649
                            },
                            "start": 1646,
                            "end": 1649
                          },
                          "start": 1645,
                          "end": 1649
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1654,
                            "end": 1655
                          },
                          "typeArguments": null,
                          "start": 1654,
                          "end": 1655
                        },
                        "start": 1651,
                        "end": 1655
                      },
                      "start": 1640,
                      "end": 1655
                    },
                    "start": 1638,
                    "end": 1655
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1636,
                  "end": 1656
                }
              ],
              "start": 1626,
              "end": 1695
            },
            "declare": false,
            "start": 1593,
            "end": 1695
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1711,
              "end": 1714
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
                    "start": 1715,
                    "end": 1716
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1715,
                  "end": 1716
                }
              ],
              "start": 1714,
              "end": 1717
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1726,
                  "end": 1730
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
                        "start": 1731,
                        "end": 1732
                      },
                      "typeArguments": null,
                      "start": 1731,
                      "end": 1732
                    }
                  ],
                  "start": 1730,
                  "end": 1733
                },
                "start": 1726,
                "end": 1733
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1744,
                    "end": 1746
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 1756,
                                "end": 1757
                              },
                              "typeArguments": null,
                              "start": 1756,
                              "end": 1757
                            },
                            "start": 1754,
                            "end": 1757
                          },
                          "start": 1753,
                          "end": 1757
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 1762,
                                "end": 1763
                              },
                              "typeArguments": null,
                              "start": 1762,
                              "end": 1763
                            },
                            "start": 1760,
                            "end": 1763
                          },
                          "start": 1759,
                          "end": 1763
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1768,
                            "end": 1769
                          },
                          "typeArguments": null,
                          "start": 1768,
                          "end": 1769
                        },
                        "start": 1765,
                        "end": 1769
                      },
                      "start": 1748,
                      "end": 1769
                    },
                    "start": 1746,
                    "end": 1769
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1744,
                  "end": 1770
                }
              ],
              "start": 1734,
              "end": 1806
            },
            "declare": false,
            "start": 1701,
            "end": 1806
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1823,
              "end": 1826
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
                    "start": 1827,
                    "end": 1828
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1827,
                  "end": 1828
                }
              ],
              "start": 1826,
              "end": 1829
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1838,
                  "end": 1842
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
                        "start": 1843,
                        "end": 1844
                      },
                      "typeArguments": null,
                      "start": 1843,
                      "end": 1844
                    }
                  ],
                  "start": 1842,
                  "end": 1845
                },
                "start": 1838,
                "end": 1845
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1856,
                    "end": 1858
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1870,
                            "end": 1871
                          },
                          "typeArguments": null,
                          "start": 1870,
                          "end": 1871
                        },
                        "start": 1867,
                        "end": 1871
                      },
                      "start": 1860,
                      "end": 1871
                    },
                    "start": 1858,
                    "end": 1871
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1856,
                  "end": 1872
                }
              ],
              "start": 1846,
              "end": 1907
            },
            "declare": false,
            "start": 1813,
            "end": 1907
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1926
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
                    "start": 1927,
                    "end": 1928
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1927,
                  "end": 1928
                }
              ],
              "start": 1926,
              "end": 1929
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1938,
                  "end": 1942
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
                        "start": 1943,
                        "end": 1944
                      },
                      "typeArguments": null,
                      "start": 1943,
                      "end": 1944
                    }
                  ],
                  "start": 1942,
                  "end": 1945
                },
                "start": 1938,
                "end": 1945
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1956,
                    "end": 1958
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 1969,
                                "end": 1970
                              },
                              "typeArguments": null,
                              "start": 1969,
                              "end": 1970
                            },
                            "start": 1967,
                            "end": 1970
                          },
                          "start": 1965,
                          "end": 1970
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 1976,
                                "end": 1977
                              },
                              "typeArguments": null,
                              "start": 1976,
                              "end": 1977
                            },
                            "start": 1974,
                            "end": 1977
                          },
                          "start": 1972,
                          "end": 1977
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1982,
                            "end": 1983
                          },
                          "typeArguments": null,
                          "start": 1982,
                          "end": 1983
                        },
                        "start": 1979,
                        "end": 1983
                      },
                      "start": 1960,
                      "end": 1983
                    },
                    "start": 1958,
                    "end": 1983
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1956,
                  "end": 1984
                }
              ],
              "start": 1946,
              "end": 2019
            },
            "declare": false,
            "start": 1913,
            "end": 2019
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2035,
              "end": 2038
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
                    "start": 2039,
                    "end": 2040
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2039,
                  "end": 2040
                }
              ],
              "start": 2038,
              "end": 2041
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2050,
                  "end": 2054
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
                        "start": 2055,
                        "end": 2056
                      },
                      "typeArguments": null,
                      "start": 2055,
                      "end": 2056
                    }
                  ],
                  "start": 2054,
                  "end": 2057
                },
                "start": 2050,
                "end": 2057
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2068,
                    "end": 2070
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2080,
                                "end": 2081
                              },
                              "typeArguments": null,
                              "start": 2080,
                              "end": 2081
                            },
                            "start": 2078,
                            "end": 2081
                          },
                          "start": 2077,
                          "end": 2081
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2086,
                            "end": 2087
                          },
                          "typeArguments": null,
                          "start": 2086,
                          "end": 2087
                        },
                        "start": 2083,
                        "end": 2087
                      },
                      "start": 2072,
                      "end": 2087
                    },
                    "start": 2070,
                    "end": 2087
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2068,
                  "end": 2088
                }
              ],
              "start": 2058,
              "end": 2126
            },
            "declare": false,
            "start": 2025,
            "end": 2126
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2142,
              "end": 2145
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
                    "start": 2146,
                    "end": 2147
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2146,
                  "end": 2147
                }
              ],
              "start": 2145,
              "end": 2148
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2157,
                  "end": 2161
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
                        "start": 2162,
                        "end": 2163
                      },
                      "typeArguments": null,
                      "start": 2162,
                      "end": 2163
                    }
                  ],
                  "start": 2161,
                  "end": 2164
                },
                "start": 2157,
                "end": 2164
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2175,
                    "end": 2177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2187,
                                "end": 2188
                              },
                              "typeArguments": null,
                              "start": 2187,
                              "end": 2188
                            },
                            "start": 2185,
                            "end": 2188
                          },
                          "start": 2184,
                          "end": 2188
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 2193,
                                "end": 2194
                              },
                              "typeArguments": null,
                              "start": 2193,
                              "end": 2194
                            },
                            "start": 2191,
                            "end": 2194
                          },
                          "start": 2190,
                          "end": 2194
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2199,
                            "end": 2200
                          },
                          "typeArguments": null,
                          "start": 2199,
                          "end": 2200
                        },
                        "start": 2196,
                        "end": 2200
                      },
                      "start": 2179,
                      "end": 2200
                    },
                    "start": 2177,
                    "end": 2200
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2175,
                  "end": 2201
                }
              ],
              "start": 2165,
              "end": 2237
            },
            "declare": false,
            "start": 2132,
            "end": 2237
          }
        ],
        "start": 127,
        "end": 2239
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 102,
      "end": 2239
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2251,
        "end": 2275
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2324,
              "end": 2329
            },
            "typeParameters": null,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2340,
                    "end": 2341
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2348,
                              "end": 2349
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2348,
                            "end": 2349
                          }
                        ],
                        "start": 2347,
                        "end": 2350
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2356,
                            "end": 2357
                          },
                          "typeArguments": null,
                          "start": 2356,
                          "end": 2357
                        },
                        "start": 2353,
                        "end": 2357
                      },
                      "start": 2343,
                      "end": 2357
                    },
                    "start": 2341,
                    "end": 2357
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2340,
                  "end": 2358
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2367,
                    "end": 2369
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2376,
                              "end": 2377
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2376,
                            "end": 2377
                          }
                        ],
                        "start": 2375,
                        "end": 2378
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2383,
                                "end": 2384
                              },
                              "typeArguments": null,
                              "start": 2383,
                              "end": 2384
                            },
                            "start": 2381,
                            "end": 2384
                          },
                          "start": 2379,
                          "end": 2384
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2389,
                            "end": 2390
                          },
                          "typeArguments": null,
                          "start": 2389,
                          "end": 2390
                        },
                        "start": 2386,
                        "end": 2390
                      },
                      "start": 2371,
                      "end": 2390
                    },
                    "start": 2369,
                    "end": 2390
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2367,
                  "end": 2391
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2400,
                    "end": 2402
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2409,
                              "end": 2410
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2409,
                            "end": 2410
                          }
                        ],
                        "start": 2408,
                        "end": 2411
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2415,
                                "end": 2416
                              },
                              "typeArguments": null,
                              "start": 2415,
                              "end": 2416
                            },
                            "start": 2413,
                            "end": 2416
                          },
                          "start": 2412,
                          "end": 2416
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2421,
                            "end": 2422
                          },
                          "typeArguments": null,
                          "start": 2421,
                          "end": 2422
                        },
                        "start": 2418,
                        "end": 2422
                      },
                      "start": 2404,
                      "end": 2422
                    },
                    "start": 2402,
                    "end": 2422
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2400,
                  "end": 2423
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2432,
                    "end": 2434
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2441,
                              "end": 2442
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2441,
                            "end": 2442
                          }
                        ],
                        "start": 2440,
                        "end": 2443
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2447,
                                "end": 2448
                              },
                              "typeArguments": null,
                              "start": 2447,
                              "end": 2448
                            },
                            "start": 2445,
                            "end": 2448
                          },
                          "start": 2444,
                          "end": 2448
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2454,
                                "end": 2455
                              },
                              "typeArguments": null,
                              "start": 2454,
                              "end": 2455
                            },
                            "start": 2452,
                            "end": 2455
                          },
                          "start": 2450,
                          "end": 2455
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2460,
                            "end": 2461
                          },
                          "typeArguments": null,
                          "start": 2460,
                          "end": 2461
                        },
                        "start": 2457,
                        "end": 2461
                      },
                      "start": 2436,
                      "end": 2461
                    },
                    "start": 2434,
                    "end": 2461
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2432,
                  "end": 2462
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2471,
                    "end": 2473
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 2480,
                              "end": 2481
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2480,
                            "end": 2481
                          }
                        ],
                        "start": 2479,
                        "end": 2482
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2487,
                                "end": 2488
                              },
                              "typeArguments": null,
                              "start": 2487,
                              "end": 2488
                            },
                            "start": 2485,
                            "end": 2488
                          },
                          "start": 2483,
                          "end": 2488
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 2494,
                                "end": 2495
                              },
                              "typeArguments": null,
                              "start": 2494,
                              "end": 2495
                            },
                            "start": 2492,
                            "end": 2495
                          },
                          "start": 2490,
                          "end": 2495
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2500,
                            "end": 2501
                          },
                          "typeArguments": null,
                          "start": 2500,
                          "end": 2501
                        },
                        "start": 2497,
                        "end": 2501
                      },
                      "start": 2475,
                      "end": 2501
                    },
                    "start": 2473,
                    "end": 2501
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2471,
                  "end": 2502
                }
              ],
              "start": 2330,
              "end": 2508
            },
            "declare": false,
            "start": 2314,
            "end": 2508
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2524,
              "end": 2526
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
                    "start": 2527,
                    "end": 2528
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2527,
                  "end": 2528
                }
              ],
              "start": 2526,
              "end": 2529
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2538,
                  "end": 2543
                },
                "typeArguments": null,
                "start": 2538,
                "end": 2543
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2554,
                    "end": 2555
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2567,
                            "end": 2568
                          },
                          "typeArguments": null,
                          "start": 2567,
                          "end": 2568
                        },
                        "start": 2564,
                        "end": 2568
                      },
                      "start": 2557,
                      "end": 2568
                    },
                    "start": 2555,
                    "end": 2568
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2554,
                  "end": 2569
                }
              ],
              "start": 2544,
              "end": 2576
            },
            "declare": false,
            "start": 2514,
            "end": 2576
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2592,
              "end": 2594
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
                    "start": 2595,
                    "end": 2596
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2595,
                  "end": 2596
                }
              ],
              "start": 2594,
              "end": 2597
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2606,
                  "end": 2611
                },
                "typeArguments": null,
                "start": 2606,
                "end": 2611
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2622,
                    "end": 2623
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2634,
                                "end": 2635
                              },
                              "typeArguments": null,
                              "start": 2634,
                              "end": 2635
                            },
                            "start": 2632,
                            "end": 2635
                          },
                          "start": 2630,
                          "end": 2635
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2640,
                            "end": 2641
                          },
                          "typeArguments": null,
                          "start": 2640,
                          "end": 2641
                        },
                        "start": 2637,
                        "end": 2641
                      },
                      "start": 2625,
                      "end": 2641
                    },
                    "start": 2623,
                    "end": 2641
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2622,
                  "end": 2642
                }
              ],
              "start": 2612,
              "end": 2648
            },
            "declare": false,
            "start": 2582,
            "end": 2648
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2664,
              "end": 2666
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
                    "start": 2667,
                    "end": 2668
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2667,
                  "end": 2668
                }
              ],
              "start": 2666,
              "end": 2669
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2678,
                  "end": 2683
                },
                "typeArguments": null,
                "start": 2678,
                "end": 2683
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2694,
                    "end": 2695
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2705,
                                "end": 2706
                              },
                              "typeArguments": null,
                              "start": 2705,
                              "end": 2706
                            },
                            "start": 2703,
                            "end": 2706
                          },
                          "start": 2702,
                          "end": 2706
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2711,
                            "end": 2712
                          },
                          "typeArguments": null,
                          "start": 2711,
                          "end": 2712
                        },
                        "start": 2708,
                        "end": 2712
                      },
                      "start": 2697,
                      "end": 2712
                    },
                    "start": 2695,
                    "end": 2712
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2694,
                  "end": 2713
                }
              ],
              "start": 2684,
              "end": 2720
            },
            "declare": false,
            "start": 2654,
            "end": 2720
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2737,
              "end": 2739
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
                    "start": 2740,
                    "end": 2741
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2740,
                  "end": 2741
                }
              ],
              "start": 2739,
              "end": 2742
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2751,
                  "end": 2756
                },
                "typeArguments": null,
                "start": 2751,
                "end": 2756
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2767,
                    "end": 2769
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2781,
                            "end": 2782
                          },
                          "typeArguments": null,
                          "start": 2781,
                          "end": 2782
                        },
                        "start": 2778,
                        "end": 2782
                      },
                      "start": 2771,
                      "end": 2782
                    },
                    "start": 2769,
                    "end": 2782
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2767,
                  "end": 2783
                }
              ],
              "start": 2757,
              "end": 2790
            },
            "declare": false,
            "start": 2727,
            "end": 2790
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2806,
              "end": 2808
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
                    "start": 2809,
                    "end": 2810
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2809,
                  "end": 2810
                }
              ],
              "start": 2808,
              "end": 2811
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2820,
                  "end": 2825
                },
                "typeArguments": null,
                "start": 2820,
                "end": 2825
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2836,
                    "end": 2838
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 2849,
                                "end": 2850
                              },
                              "typeArguments": null,
                              "start": 2849,
                              "end": 2850
                            },
                            "start": 2847,
                            "end": 2850
                          },
                          "start": 2845,
                          "end": 2850
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2855,
                            "end": 2856
                          },
                          "typeArguments": null,
                          "start": 2855,
                          "end": 2856
                        },
                        "start": 2852,
                        "end": 2856
                      },
                      "start": 2840,
                      "end": 2856
                    },
                    "start": 2838,
                    "end": 2856
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2836,
                  "end": 2856
                }
              ],
              "start": 2826,
              "end": 2862
            },
            "declare": false,
            "start": 2796,
            "end": 2862
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2878,
              "end": 2880
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
                    "start": 2881,
                    "end": 2882
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2881,
                  "end": 2882
                }
              ],
              "start": 2880,
              "end": 2883
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2892,
                  "end": 2897
                },
                "typeArguments": null,
                "start": 2892,
                "end": 2897
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2908,
                    "end": 2910
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 2920,
                                "end": 2921
                              },
                              "typeArguments": null,
                              "start": 2920,
                              "end": 2921
                            },
                            "start": 2918,
                            "end": 2921
                          },
                          "start": 2917,
                          "end": 2921
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2926,
                            "end": 2927
                          },
                          "typeArguments": null,
                          "start": 2926,
                          "end": 2927
                        },
                        "start": 2923,
                        "end": 2927
                      },
                      "start": 2912,
                      "end": 2927
                    },
                    "start": 2910,
                    "end": 2927
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2908,
                  "end": 2928
                }
              ],
              "start": 2898,
              "end": 2934
            },
            "declare": false,
            "start": 2868,
            "end": 2934
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2951,
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
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2965,
                  "end": 2970
                },
                "typeArguments": null,
                "start": 2965,
                "end": 2970
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2981,
                    "end": 2983
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2995,
                            "end": 2996
                          },
                          "typeArguments": null,
                          "start": 2995,
                          "end": 2996
                        },
                        "start": 2992,
                        "end": 2996
                      },
                      "start": 2985,
                      "end": 2996
                    },
                    "start": 2983,
                    "end": 2996
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2981,
                  "end": 2997
                }
              ],
              "start": 2971,
              "end": 3003
            },
            "declare": false,
            "start": 2941,
            "end": 3003
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3019,
              "end": 3021
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
                    "start": 3022,
                    "end": 3023
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3022,
                  "end": 3023
                }
              ],
              "start": 3021,
              "end": 3024
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3033,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3033,
                "end": 3038
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3049,
                    "end": 3051
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3062,
                                "end": 3063
                              },
                              "typeArguments": null,
                              "start": 3062,
                              "end": 3063
                            },
                            "start": 3060,
                            "end": 3063
                          },
                          "start": 3058,
                          "end": 3063
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3068,
                            "end": 3069
                          },
                          "typeArguments": null,
                          "start": 3068,
                          "end": 3069
                        },
                        "start": 3065,
                        "end": 3069
                      },
                      "start": 3053,
                      "end": 3069
                    },
                    "start": 3051,
                    "end": 3069
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3049,
                  "end": 3070
                }
              ],
              "start": 3039,
              "end": 3077
            },
            "declare": false,
            "start": 3009,
            "end": 3077
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3093,
              "end": 3095
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
                    "start": 3096,
                    "end": 3097
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3096,
                  "end": 3097
                }
              ],
              "start": 3095,
              "end": 3098
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3107,
                  "end": 3112
                },
                "typeArguments": null,
                "start": 3107,
                "end": 3112
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3123,
                    "end": 3125
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3135,
                                "end": 3136
                              },
                              "typeArguments": null,
                              "start": 3135,
                              "end": 3136
                            },
                            "start": 3133,
                            "end": 3136
                          },
                          "start": 3132,
                          "end": 3136
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3141,
                            "end": 3142
                          },
                          "typeArguments": null,
                          "start": 3141,
                          "end": 3142
                        },
                        "start": 3138,
                        "end": 3142
                      },
                      "start": 3127,
                      "end": 3142
                    },
                    "start": 3125,
                    "end": 3142
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3123,
                  "end": 3143
                }
              ],
              "start": 3113,
              "end": 3150
            },
            "declare": false,
            "start": 3083,
            "end": 3150
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 3166,
              "end": 3169
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
                    "start": 3170,
                    "end": 3171
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3170,
                  "end": 3171
                }
              ],
              "start": 3169,
              "end": 3172
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3181,
                  "end": 3186
                },
                "typeArguments": null,
                "start": 3181,
                "end": 3186
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3197,
                    "end": 3199
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3209,
                                "end": 3210
                              },
                              "typeArguments": null,
                              "start": 3209,
                              "end": 3210
                            },
                            "start": 3207,
                            "end": 3210
                          },
                          "start": 3206,
                          "end": 3210
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 3215,
                                "end": 3216
                              },
                              "typeArguments": null,
                              "start": 3215,
                              "end": 3216
                            },
                            "start": 3213,
                            "end": 3216
                          },
                          "start": 3212,
                          "end": 3216
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3221,
                            "end": 3222
                          },
                          "typeArguments": null,
                          "start": 3221,
                          "end": 3222
                        },
                        "start": 3218,
                        "end": 3222
                      },
                      "start": 3201,
                      "end": 3222
                    },
                    "start": 3199,
                    "end": 3222
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3197,
                  "end": 3223
                }
              ],
              "start": 3187,
              "end": 3231
            },
            "declare": false,
            "start": 3156,
            "end": 3231
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 3248,
              "end": 3251
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
                    "start": 3252,
                    "end": 3253
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3252,
                  "end": 3253
                }
              ],
              "start": 3251,
              "end": 3254
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3263,
                  "end": 3268
                },
                "typeArguments": null,
                "start": 3263,
                "end": 3268
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3279,
                    "end": 3281
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3293,
                            "end": 3294
                          },
                          "typeArguments": null,
                          "start": 3293,
                          "end": 3294
                        },
                        "start": 3290,
                        "end": 3294
                      },
                      "start": 3283,
                      "end": 3294
                    },
                    "start": 3281,
                    "end": 3294
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3279,
                  "end": 3295
                }
              ],
              "start": 3269,
              "end": 3302
            },
            "declare": false,
            "start": 3238,
            "end": 3302
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3318,
              "end": 3321
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
                    "start": 3322,
                    "end": 3323
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3322,
                  "end": 3323
                }
              ],
              "start": 3321,
              "end": 3324
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3333,
                  "end": 3338
                },
                "typeArguments": null,
                "start": 3333,
                "end": 3338
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3349,
                    "end": 3351
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3362,
                                "end": 3363
                              },
                              "typeArguments": null,
                              "start": 3362,
                              "end": 3363
                            },
                            "start": 3360,
                            "end": 3363
                          },
                          "start": 3358,
                          "end": 3363
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 3369,
                                "end": 3370
                              },
                              "typeArguments": null,
                              "start": 3369,
                              "end": 3370
                            },
                            "start": 3367,
                            "end": 3370
                          },
                          "start": 3365,
                          "end": 3370
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3375,
                            "end": 3376
                          },
                          "typeArguments": null,
                          "start": 3375,
                          "end": 3376
                        },
                        "start": 3372,
                        "end": 3376
                      },
                      "start": 3353,
                      "end": 3376
                    },
                    "start": 3351,
                    "end": 3376
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3349,
                  "end": 3377
                }
              ],
              "start": 3339,
              "end": 3384
            },
            "declare": false,
            "start": 3308,
            "end": 3384
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 3400,
              "end": 3403
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
                    "start": 3404,
                    "end": 3405
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3404,
                  "end": 3405
                }
              ],
              "start": 3403,
              "end": 3406
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3415,
                  "end": 3420
                },
                "typeArguments": null,
                "start": 3415,
                "end": 3420
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3431,
                    "end": 3433
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3443,
                                "end": 3444
                              },
                              "typeArguments": null,
                              "start": 3443,
                              "end": 3444
                            },
                            "start": 3441,
                            "end": 3444
                          },
                          "start": 3440,
                          "end": 3444
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3449,
                            "end": 3450
                          },
                          "typeArguments": null,
                          "start": 3449,
                          "end": 3450
                        },
                        "start": 3446,
                        "end": 3450
                      },
                      "start": 3435,
                      "end": 3450
                    },
                    "start": 3433,
                    "end": 3450
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3431,
                  "end": 3451
                }
              ],
              "start": 3421,
              "end": 3458
            },
            "declare": false,
            "start": 3390,
            "end": 3458
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 3474,
              "end": 3477
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
                    "start": 3478,
                    "end": 3479
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3478,
                  "end": 3479
                }
              ],
              "start": 3477,
              "end": 3480
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3489,
                  "end": 3494
                },
                "typeArguments": null,
                "start": 3489,
                "end": 3494
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3505,
                    "end": 3507
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3517,
                                "end": 3518
                              },
                              "typeArguments": null,
                              "start": 3517,
                              "end": 3518
                            },
                            "start": 3515,
                            "end": 3518
                          },
                          "start": 3514,
                          "end": 3518
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 3523,
                                "end": 3524
                              },
                              "typeArguments": null,
                              "start": 3523,
                              "end": 3524
                            },
                            "start": 3521,
                            "end": 3524
                          },
                          "start": 3520,
                          "end": 3524
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3529,
                            "end": 3530
                          },
                          "typeArguments": null,
                          "start": 3529,
                          "end": 3530
                        },
                        "start": 3526,
                        "end": 3530
                      },
                      "start": 3509,
                      "end": 3530
                    },
                    "start": 3507,
                    "end": 3530
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3505,
                  "end": 3531
                }
              ],
              "start": 3495,
              "end": 3538
            },
            "declare": false,
            "start": 3464,
            "end": 3538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3555,
              "end": 3558
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
                    "start": 3559,
                    "end": 3560
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3559,
                  "end": 3560
                }
              ],
              "start": 3558,
              "end": 3561
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3570,
                  "end": 3575
                },
                "typeArguments": null,
                "start": 3570,
                "end": 3575
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3586,
                    "end": 3588
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3600,
                            "end": 3601
                          },
                          "typeArguments": null,
                          "start": 3600,
                          "end": 3601
                        },
                        "start": 3597,
                        "end": 3601
                      },
                      "start": 3590,
                      "end": 3601
                    },
                    "start": 3588,
                    "end": 3601
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3586,
                  "end": 3602
                }
              ],
              "start": 3576,
              "end": 3609
            },
            "declare": false,
            "start": 3545,
            "end": 3609
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3625,
              "end": 3628
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
                    "start": 3629,
                    "end": 3630
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3629,
                  "end": 3630
                }
              ],
              "start": 3628,
              "end": 3631
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3640,
                  "end": 3645
                },
                "typeArguments": null,
                "start": 3640,
                "end": 3645
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3656,
                    "end": 3658
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3669,
                                "end": 3670
                              },
                              "typeArguments": null,
                              "start": 3669,
                              "end": 3670
                            },
                            "start": 3667,
                            "end": 3670
                          },
                          "start": 3665,
                          "end": 3670
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 3676,
                                "end": 3677
                              },
                              "typeArguments": null,
                              "start": 3676,
                              "end": 3677
                            },
                            "start": 3674,
                            "end": 3677
                          },
                          "start": 3672,
                          "end": 3677
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3682,
                            "end": 3683
                          },
                          "typeArguments": null,
                          "start": 3682,
                          "end": 3683
                        },
                        "start": 3679,
                        "end": 3683
                      },
                      "start": 3660,
                      "end": 3683
                    },
                    "start": 3658,
                    "end": 3683
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3656,
                  "end": 3684
                }
              ],
              "start": 3646,
              "end": 3691
            },
            "declare": false,
            "start": 3615,
            "end": 3691
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3707,
              "end": 3710
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
                    "start": 3711,
                    "end": 3712
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3711,
                  "end": 3712
                }
              ],
              "start": 3710,
              "end": 3713
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3722,
                  "end": 3727
                },
                "typeArguments": null,
                "start": 3722,
                "end": 3727
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3738,
                    "end": 3740
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3750,
                                "end": 3751
                              },
                              "typeArguments": null,
                              "start": 3750,
                              "end": 3751
                            },
                            "start": 3748,
                            "end": 3751
                          },
                          "start": 3747,
                          "end": 3751
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3756,
                            "end": 3757
                          },
                          "typeArguments": null,
                          "start": 3756,
                          "end": 3757
                        },
                        "start": 3753,
                        "end": 3757
                      },
                      "start": 3742,
                      "end": 3757
                    },
                    "start": 3740,
                    "end": 3757
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3738,
                  "end": 3758
                }
              ],
              "start": 3728,
              "end": 3764
            },
            "declare": false,
            "start": 3697,
            "end": 3764
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3780,
              "end": 3783
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
                    "start": 3784,
                    "end": 3785
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3784,
                  "end": 3785
                }
              ],
              "start": 3783,
              "end": 3786
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3795,
                  "end": 3800
                },
                "typeArguments": null,
                "start": 3795,
                "end": 3800
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3811,
                    "end": 3813
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3823,
                                "end": 3824
                              },
                              "typeArguments": null,
                              "start": 3823,
                              "end": 3824
                            },
                            "start": 3821,
                            "end": 3824
                          },
                          "start": 3820,
                          "end": 3824
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 3829,
                                "end": 3830
                              },
                              "typeArguments": null,
                              "start": 3829,
                              "end": 3830
                            },
                            "start": 3827,
                            "end": 3830
                          },
                          "start": 3826,
                          "end": 3830
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3835,
                            "end": 3836
                          },
                          "typeArguments": null,
                          "start": 3835,
                          "end": 3836
                        },
                        "start": 3832,
                        "end": 3836
                      },
                      "start": 3815,
                      "end": 3836
                    },
                    "start": 3813,
                    "end": 3836
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3811,
                  "end": 3837
                }
              ],
              "start": 3801,
              "end": 3844
            },
            "declare": false,
            "start": 3770,
            "end": 3844
          }
        ],
        "start": 2276,
        "end": 3846
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2241,
      "end": 3846
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 3858,
        "end": 3880
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3898,
              "end": 3903
            },
            "typeParameters": null,
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3914,
                    "end": 3915
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 3922,
                              "end": 3923
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3922,
                            "end": 3923
                          }
                        ],
                        "start": 3921,
                        "end": 3924
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3930,
                            "end": 3931
                          },
                          "typeArguments": null,
                          "start": 3930,
                          "end": 3931
                        },
                        "start": 3927,
                        "end": 3931
                      },
                      "start": 3917,
                      "end": 3931
                    },
                    "start": 3915,
                    "end": 3931
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3914,
                  "end": 3932
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3941,
                    "end": 3943
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 3950,
                              "end": 3951
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3950,
                            "end": 3951
                          }
                        ],
                        "start": 3949,
                        "end": 3952
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 3957,
                                "end": 3958
                              },
                              "typeArguments": null,
                              "start": 3957,
                              "end": 3958
                            },
                            "start": 3955,
                            "end": 3958
                          },
                          "start": 3953,
                          "end": 3958
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3963,
                            "end": 3964
                          },
                          "typeArguments": null,
                          "start": 3963,
                          "end": 3964
                        },
                        "start": 3960,
                        "end": 3964
                      },
                      "start": 3945,
                      "end": 3964
                    },
                    "start": 3943,
                    "end": 3964
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3941,
                  "end": 3965
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3974,
                    "end": 3976
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 3983,
                              "end": 3984
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3983,
                            "end": 3984
                          }
                        ],
                        "start": 3982,
                        "end": 3985
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 3989,
                                "end": 3990
                              },
                              "typeArguments": null,
                              "start": 3989,
                              "end": 3990
                            },
                            "start": 3987,
                            "end": 3990
                          },
                          "start": 3986,
                          "end": 3990
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3995,
                            "end": 3996
                          },
                          "typeArguments": null,
                          "start": 3995,
                          "end": 3996
                        },
                        "start": 3992,
                        "end": 3996
                      },
                      "start": 3978,
                      "end": 3996
                    },
                    "start": 3976,
                    "end": 3996
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3974,
                  "end": 3997
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4006,
                    "end": 4008
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4015,
                              "end": 4016
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4015,
                            "end": 4016
                          }
                        ],
                        "start": 4014,
                        "end": 4017
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 4021,
                                "end": 4022
                              },
                              "typeArguments": null,
                              "start": 4021,
                              "end": 4022
                            },
                            "start": 4019,
                            "end": 4022
                          },
                          "start": 4018,
                          "end": 4022
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 4028,
                                "end": 4029
                              },
                              "typeArguments": null,
                              "start": 4028,
                              "end": 4029
                            },
                            "start": 4026,
                            "end": 4029
                          },
                          "start": 4024,
                          "end": 4029
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4034,
                            "end": 4035
                          },
                          "typeArguments": null,
                          "start": 4034,
                          "end": 4035
                        },
                        "start": 4031,
                        "end": 4035
                      },
                      "start": 4010,
                      "end": 4035
                    },
                    "start": 4008,
                    "end": 4035
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4006,
                  "end": 4036
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4045,
                    "end": 4047
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4054,
                              "end": 4055
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4054,
                            "end": 4055
                          }
                        ],
                        "start": 4053,
                        "end": 4056
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 4061,
                                "end": 4062
                              },
                              "typeArguments": null,
                              "start": 4061,
                              "end": 4062
                            },
                            "start": 4059,
                            "end": 4062
                          },
                          "start": 4057,
                          "end": 4062
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 4068,
                                "end": 4069
                              },
                              "typeArguments": null,
                              "start": 4068,
                              "end": 4069
                            },
                            "start": 4066,
                            "end": 4069
                          },
                          "start": 4064,
                          "end": 4069
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4074,
                            "end": 4075
                          },
                          "typeArguments": null,
                          "start": 4074,
                          "end": 4075
                        },
                        "start": 4071,
                        "end": 4075
                      },
                      "start": 4049,
                      "end": 4075
                    },
                    "start": 4047,
                    "end": 4075
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4045,
                  "end": 4076
                }
              ],
              "start": 3904,
              "end": 4082
            },
            "declare": false,
            "start": 3888,
            "end": 4082
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4116,
              "end": 4118
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4127,
                  "end": 4132
                },
                "typeArguments": null,
                "start": 4127,
                "end": 4132
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4143,
                    "end": 4144
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4151,
                              "end": 4152
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4151,
                            "end": 4152
                          }
                        ],
                        "start": 4150,
                        "end": 4153
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4159,
                            "end": 4160
                          },
                          "typeArguments": null,
                          "start": 4159,
                          "end": 4160
                        },
                        "start": 4156,
                        "end": 4160
                      },
                      "start": 4146,
                      "end": 4160
                    },
                    "start": 4144,
                    "end": 4160
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4143,
                  "end": 4161
                }
              ],
              "start": 4133,
              "end": 4205
            },
            "declare": false,
            "start": 4106,
            "end": 4205
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4221,
              "end": 4223
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4232,
                  "end": 4237
                },
                "typeArguments": null,
                "start": 4232,
                "end": 4237
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4248,
                    "end": 4249
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4256,
                              "end": 4257
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4256,
                            "end": 4257
                          }
                        ],
                        "start": 4255,
                        "end": 4258
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 4263,
                                "end": 4264
                              },
                              "typeArguments": null,
                              "start": 4263,
                              "end": 4264
                            },
                            "start": 4261,
                            "end": 4264
                          },
                          "start": 4259,
                          "end": 4264
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4269,
                            "end": 4270
                          },
                          "typeArguments": null,
                          "start": 4269,
                          "end": 4270
                        },
                        "start": 4266,
                        "end": 4270
                      },
                      "start": 4251,
                      "end": 4270
                    },
                    "start": 4249,
                    "end": 4270
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4248,
                  "end": 4271
                }
              ],
              "start": 4238,
              "end": 4372
            },
            "declare": false,
            "start": 4211,
            "end": 4372
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4388,
              "end": 4390
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4399,
                  "end": 4404
                },
                "typeArguments": null,
                "start": 4399,
                "end": 4404
              }
            ],
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4415,
                    "end": 4416
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4423,
                              "end": 4424
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4423,
                            "end": 4424
                          }
                        ],
                        "start": 4422,
                        "end": 4425
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 4429,
                                "end": 4430
                              },
                              "typeArguments": null,
                              "start": 4429,
                              "end": 4430
                            },
                            "start": 4427,
                            "end": 4430
                          },
                          "start": 4426,
                          "end": 4430
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4435,
                            "end": 4436
                          },
                          "typeArguments": null,
                          "start": 4435,
                          "end": 4436
                        },
                        "start": 4432,
                        "end": 4436
                      },
                      "start": 4418,
                      "end": 4436
                    },
                    "start": 4416,
                    "end": 4436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4415,
                  "end": 4437
                }
              ],
              "start": 4405,
              "end": 4538
            },
            "declare": false,
            "start": 4378,
            "end": 4538
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4555,
              "end": 4557
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4566,
                  "end": 4571
                },
                "typeArguments": null,
                "start": 4566,
                "end": 4571
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4582,
                    "end": 4584
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4591,
                              "end": 4592
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4591,
                            "end": 4592
                          }
                        ],
                        "start": 4590,
                        "end": 4593
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4599,
                            "end": 4600
                          },
                          "typeArguments": null,
                          "start": 4599,
                          "end": 4600
                        },
                        "start": 4596,
                        "end": 4600
                      },
                      "start": 4586,
                      "end": 4600
                    },
                    "start": 4584,
                    "end": 4600
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4582,
                  "end": 4601
                }
              ],
              "start": 4572,
              "end": 4702
            },
            "declare": false,
            "start": 4545,
            "end": 4702
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 4718,
              "end": 4720
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4729,
                  "end": 4734
                },
                "typeArguments": null,
                "start": 4729,
                "end": 4734
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4745,
                    "end": 4747
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4754,
                              "end": 4755
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4754,
                            "end": 4755
                          }
                        ],
                        "start": 4753,
                        "end": 4756
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 4761,
                                "end": 4762
                              },
                              "typeArguments": null,
                              "start": 4761,
                              "end": 4762
                            },
                            "start": 4759,
                            "end": 4762
                          },
                          "start": 4757,
                          "end": 4762
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4767,
                            "end": 4768
                          },
                          "typeArguments": null,
                          "start": 4767,
                          "end": 4768
                        },
                        "start": 4764,
                        "end": 4768
                      },
                      "start": 4749,
                      "end": 4768
                    },
                    "start": 4747,
                    "end": 4768
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4745,
                  "end": 4769
                }
              ],
              "start": 4735,
              "end": 4792
            },
            "declare": false,
            "start": 4708,
            "end": 4792
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 4808,
              "end": 4810
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4819,
                  "end": 4824
                },
                "typeArguments": null,
                "start": 4819,
                "end": 4824
              }
            ],
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
                    "name": "a2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4835,
                    "end": 4837
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4844,
                              "end": 4845
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4844,
                            "end": 4845
                          }
                        ],
                        "start": 4843,
                        "end": 4846
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 4850,
                                "end": 4851
                              },
                              "typeArguments": null,
                              "start": 4850,
                              "end": 4851
                            },
                            "start": 4848,
                            "end": 4851
                          },
                          "start": 4847,
                          "end": 4851
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4856,
                            "end": 4857
                          },
                          "typeArguments": null,
                          "start": 4856,
                          "end": 4857
                        },
                        "start": 4853,
                        "end": 4857
                      },
                      "start": 4839,
                      "end": 4857
                    },
                    "start": 4837,
                    "end": 4857
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4835,
                  "end": 4858
                }
              ],
              "start": 4825,
              "end": 4893
            },
            "declare": false,
            "start": 4798,
            "end": 4893
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 4910,
              "end": 4912
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4921,
                  "end": 4926
                },
                "typeArguments": null,
                "start": 4921,
                "end": 4926
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4937,
                    "end": 4939
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 4946,
                              "end": 4947
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4946,
                            "end": 4947
                          }
                        ],
                        "start": 4945,
                        "end": 4948
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4954,
                            "end": 4955
                          },
                          "typeArguments": null,
                          "start": 4954,
                          "end": 4955
                        },
                        "start": 4951,
                        "end": 4955
                      },
                      "start": 4941,
                      "end": 4955
                    },
                    "start": 4939,
                    "end": 4955
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4937,
                  "end": 4956
                }
              ],
              "start": 4927,
              "end": 4991
            },
            "declare": false,
            "start": 4900,
            "end": 4991
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 5007,
              "end": 5009
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5018,
                  "end": 5023
                },
                "typeArguments": null,
                "start": 5018,
                "end": 5023
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5034,
                    "end": 5036
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5043,
                              "end": 5044
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5043,
                            "end": 5044
                          }
                        ],
                        "start": 5042,
                        "end": 5045
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 5050,
                                "end": 5051
                              },
                              "typeArguments": null,
                              "start": 5050,
                              "end": 5051
                            },
                            "start": 5048,
                            "end": 5051
                          },
                          "start": 5046,
                          "end": 5051
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5056,
                            "end": 5057
                          },
                          "typeArguments": null,
                          "start": 5056,
                          "end": 5057
                        },
                        "start": 5053,
                        "end": 5057
                      },
                      "start": 5038,
                      "end": 5057
                    },
                    "start": 5036,
                    "end": 5057
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5034,
                  "end": 5058
                }
              ],
              "start": 5024,
              "end": 5136
            },
            "declare": false,
            "start": 4997,
            "end": 5136
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 5152,
              "end": 5154
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5163,
                  "end": 5168
                },
                "typeArguments": null,
                "start": 5163,
                "end": 5168
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5179,
                    "end": 5181
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5188,
                              "end": 5189
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5188,
                            "end": 5189
                          }
                        ],
                        "start": 5187,
                        "end": 5190
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5194,
                                "end": 5195
                              },
                              "typeArguments": null,
                              "start": 5194,
                              "end": 5195
                            },
                            "start": 5192,
                            "end": 5195
                          },
                          "start": 5191,
                          "end": 5195
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5200,
                            "end": 5201
                          },
                          "typeArguments": null,
                          "start": 5200,
                          "end": 5201
                        },
                        "start": 5197,
                        "end": 5201
                      },
                      "start": 5183,
                      "end": 5201
                    },
                    "start": 5181,
                    "end": 5201
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5179,
                  "end": 5202
                }
              ],
              "start": 5169,
              "end": 5257
            },
            "declare": false,
            "start": 5142,
            "end": 5257
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 5273,
              "end": 5276
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5285,
                  "end": 5290
                },
                "typeArguments": null,
                "start": 5285,
                "end": 5290
              }
            ],
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
                    "name": "a3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5301,
                    "end": 5303
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5310,
                              "end": 5311
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5310,
                            "end": 5311
                          }
                        ],
                        "start": 5309,
                        "end": 5312
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5316,
                                "end": 5317
                              },
                              "typeArguments": null,
                              "start": 5316,
                              "end": 5317
                            },
                            "start": 5314,
                            "end": 5317
                          },
                          "start": 5313,
                          "end": 5317
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 5322,
                                "end": 5323
                              },
                              "typeArguments": null,
                              "start": 5322,
                              "end": 5323
                            },
                            "start": 5320,
                            "end": 5323
                          },
                          "start": 5319,
                          "end": 5323
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5328,
                            "end": 5329
                          },
                          "typeArguments": null,
                          "start": 5328,
                          "end": 5329
                        },
                        "start": 5325,
                        "end": 5329
                      },
                      "start": 5305,
                      "end": 5329
                    },
                    "start": 5303,
                    "end": 5329
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5301,
                  "end": 5330
                }
              ],
              "start": 5291,
              "end": 5372
            },
            "declare": false,
            "start": 5263,
            "end": 5372
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5389,
              "end": 5392
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5401,
                  "end": 5406
                },
                "typeArguments": null,
                "start": 5401,
                "end": 5406
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5417,
                    "end": 5419
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5426,
                              "end": 5427
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5426,
                            "end": 5427
                          }
                        ],
                        "start": 5425,
                        "end": 5428
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5434,
                            "end": 5435
                          },
                          "typeArguments": null,
                          "start": 5434,
                          "end": 5435
                        },
                        "start": 5431,
                        "end": 5435
                      },
                      "start": 5421,
                      "end": 5435
                    },
                    "start": 5419,
                    "end": 5435
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5417,
                  "end": 5436
                }
              ],
              "start": 5407,
              "end": 5537
            },
            "declare": false,
            "start": 5379,
            "end": 5537
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5553,
              "end": 5556
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5565,
                  "end": 5570
                },
                "typeArguments": null,
                "start": 5565,
                "end": 5570
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5581,
                    "end": 5583
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5590,
                              "end": 5591
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5590,
                            "end": 5591
                          }
                        ],
                        "start": 5589,
                        "end": 5592
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 5597,
                                "end": 5598
                              },
                              "typeArguments": null,
                              "start": 5597,
                              "end": 5598
                            },
                            "start": 5595,
                            "end": 5598
                          },
                          "start": 5593,
                          "end": 5598
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 5604,
                                "end": 5605
                              },
                              "typeArguments": null,
                              "start": 5604,
                              "end": 5605
                            },
                            "start": 5602,
                            "end": 5605
                          },
                          "start": 5600,
                          "end": 5605
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5610,
                            "end": 5611
                          },
                          "typeArguments": null,
                          "start": 5610,
                          "end": 5611
                        },
                        "start": 5607,
                        "end": 5611
                      },
                      "start": 5585,
                      "end": 5611
                    },
                    "start": 5583,
                    "end": 5611
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5581,
                  "end": 5612
                }
              ],
              "start": 5571,
              "end": 5647
            },
            "declare": false,
            "start": 5543,
            "end": 5647
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5663,
              "end": 5666
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5675,
                  "end": 5680
                },
                "typeArguments": null,
                "start": 5675,
                "end": 5680
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5691,
                    "end": 5693
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5700,
                              "end": 5701
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5700,
                            "end": 5701
                          }
                        ],
                        "start": 5699,
                        "end": 5702
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5706,
                                "end": 5707
                              },
                              "typeArguments": null,
                              "start": 5706,
                              "end": 5707
                            },
                            "start": 5704,
                            "end": 5707
                          },
                          "start": 5703,
                          "end": 5707
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5712,
                            "end": 5713
                          },
                          "typeArguments": null,
                          "start": 5712,
                          "end": 5713
                        },
                        "start": 5709,
                        "end": 5713
                      },
                      "start": 5695,
                      "end": 5713
                    },
                    "start": 5693,
                    "end": 5713
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5691,
                  "end": 5714
                }
              ],
              "start": 5681,
              "end": 5753
            },
            "declare": false,
            "start": 5653,
            "end": 5753
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5769,
              "end": 5772
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5781,
                  "end": 5786
                },
                "typeArguments": null,
                "start": 5781,
                "end": 5786
              }
            ],
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
                    "name": "a4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5797,
                    "end": 5799
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5806,
                              "end": 5807
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5806,
                            "end": 5807
                          }
                        ],
                        "start": 5805,
                        "end": 5808
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 5812,
                                "end": 5813
                              },
                              "typeArguments": null,
                              "start": 5812,
                              "end": 5813
                            },
                            "start": 5810,
                            "end": 5813
                          },
                          "start": 5809,
                          "end": 5813
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 5818,
                                "end": 5819
                              },
                              "typeArguments": null,
                              "start": 5818,
                              "end": 5819
                            },
                            "start": 5816,
                            "end": 5819
                          },
                          "start": 5815,
                          "end": 5819
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5824,
                            "end": 5825
                          },
                          "typeArguments": null,
                          "start": 5824,
                          "end": 5825
                        },
                        "start": 5821,
                        "end": 5825
                      },
                      "start": 5801,
                      "end": 5825
                    },
                    "start": 5799,
                    "end": 5825
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5797,
                  "end": 5826
                }
              ],
              "start": 5787,
              "end": 5862
            },
            "declare": false,
            "start": 5759,
            "end": 5862
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5879,
              "end": 5882
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5891,
                  "end": 5896
                },
                "typeArguments": null,
                "start": 5891,
                "end": 5896
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5907,
                    "end": 5909
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 5916,
                              "end": 5917
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5916,
                            "end": 5917
                          }
                        ],
                        "start": 5915,
                        "end": 5918
                      },
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5924,
                            "end": 5925
                          },
                          "typeArguments": null,
                          "start": 5924,
                          "end": 5925
                        },
                        "start": 5921,
                        "end": 5925
                      },
                      "start": 5911,
                      "end": 5925
                    },
                    "start": 5909,
                    "end": 5925
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5907,
                  "end": 5926
                }
              ],
              "start": 5897,
              "end": 6027
            },
            "declare": false,
            "start": 5869,
            "end": 6027
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 6043,
              "end": 6046
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6055,
                  "end": 6060
                },
                "typeArguments": null,
                "start": 6055,
                "end": 6060
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6071,
                    "end": 6073
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 6080,
                              "end": 6081
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6080,
                            "end": 6081
                          }
                        ],
                        "start": 6079,
                        "end": 6082
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": true,
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
                                "start": 6087,
                                "end": 6088
                              },
                              "typeArguments": null,
                              "start": 6087,
                              "end": 6088
                            },
                            "start": 6085,
                            "end": 6088
                          },
                          "start": 6083,
                          "end": 6088
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": true,
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
                                "start": 6094,
                                "end": 6095
                              },
                              "typeArguments": null,
                              "start": 6094,
                              "end": 6095
                            },
                            "start": 6092,
                            "end": 6095
                          },
                          "start": 6090,
                          "end": 6095
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6100,
                            "end": 6101
                          },
                          "typeArguments": null,
                          "start": 6100,
                          "end": 6101
                        },
                        "start": 6097,
                        "end": 6101
                      },
                      "start": 6075,
                      "end": 6101
                    },
                    "start": 6073,
                    "end": 6101
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6071,
                  "end": 6102
                }
              ],
              "start": 6061,
              "end": 6137
            },
            "declare": false,
            "start": 6033,
            "end": 6137
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 6153,
              "end": 6156
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6165,
                  "end": 6170
                },
                "typeArguments": null,
                "start": 6165,
                "end": 6170
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6181,
                    "end": 6183
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 6190,
                              "end": 6191
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6190,
                            "end": 6191
                          }
                        ],
                        "start": 6189,
                        "end": 6192
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 6196,
                                "end": 6197
                              },
                              "typeArguments": null,
                              "start": 6196,
                              "end": 6197
                            },
                            "start": 6194,
                            "end": 6197
                          },
                          "start": 6193,
                          "end": 6197
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6202,
                            "end": 6203
                          },
                          "typeArguments": null,
                          "start": 6202,
                          "end": 6203
                        },
                        "start": 6199,
                        "end": 6203
                      },
                      "start": 6185,
                      "end": 6203
                    },
                    "start": 6183,
                    "end": 6203
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6181,
                  "end": 6204
                }
              ],
              "start": 6171,
              "end": 6242
            },
            "declare": false,
            "start": 6143,
            "end": 6242
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 6258,
              "end": 6261
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6270,
                  "end": 6275
                },
                "typeArguments": null,
                "start": 6270,
                "end": 6275
              }
            ],
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
                    "name": "a5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6286,
                    "end": 6288
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "abstract": false,
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
                              "start": 6295,
                              "end": 6296
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6295,
                            "end": 6296
                          }
                        ],
                        "start": 6294,
                        "end": 6297
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
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
                                "start": 6301,
                                "end": 6302
                              },
                              "typeArguments": null,
                              "start": 6301,
                              "end": 6302
                            },
                            "start": 6299,
                            "end": 6302
                          },
                          "start": 6298,
                          "end": 6302
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
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
                                "start": 6307,
                                "end": 6308
                              },
                              "typeArguments": null,
                              "start": 6307,
                              "end": 6308
                            },
                            "start": 6305,
                            "end": 6308
                          },
                          "start": 6304,
                          "end": 6308
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6313,
                            "end": 6314
                          },
                          "typeArguments": null,
                          "start": 6313,
                          "end": 6314
                        },
                        "start": 6310,
                        "end": 6314
                      },
                      "start": 6290,
                      "end": 6314
                    },
                    "start": 6288,
                    "end": 6314
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6286,
                  "end": 6315
                }
              ],
              "start": 6276,
              "end": 6351
            },
            "declare": false,
            "start": 6248,
            "end": 6351
          }
        ],
        "start": 3881,
        "end": 6353
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3848,
      "end": 6353
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6353
}
```
