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
        "start": 109,
        "end": 123
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
              "start": 140,
              "end": 144
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
                    "start": 145,
                    "end": 146
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 145,
                  "end": 146
                }
              ],
              "start": 144,
              "end": 147
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
                    "start": 158,
                    "end": 159
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
                            "start": 171,
                            "end": 172
                          },
                          "typeArguments": null,
                          "start": 171,
                          "end": 172
                        },
                        "start": 168,
                        "end": 172
                      },
                      "start": 161,
                      "end": 172
                    },
                    "start": 159,
                    "end": 172
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 158,
                  "end": 173
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
                    "start": 182,
                    "end": 184
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
                                "start": 195,
                                "end": 196
                              },
                              "typeArguments": null,
                              "start": 195,
                              "end": 196
                            },
                            "start": 193,
                            "end": 196
                          },
                          "start": 191,
                          "end": 196
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
                            "start": 201,
                            "end": 202
                          },
                          "typeArguments": null,
                          "start": 201,
                          "end": 202
                        },
                        "start": 198,
                        "end": 202
                      },
                      "start": 186,
                      "end": 202
                    },
                    "start": 184,
                    "end": 202
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 182,
                  "end": 203
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
                    "start": 212,
                    "end": 214
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
                                "start": 224,
                                "end": 225
                              },
                              "typeArguments": null,
                              "start": 224,
                              "end": 225
                            },
                            "start": 222,
                            "end": 225
                          },
                          "start": 221,
                          "end": 225
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
                            "start": 230,
                            "end": 231
                          },
                          "typeArguments": null,
                          "start": 230,
                          "end": 231
                        },
                        "start": 227,
                        "end": 231
                      },
                      "start": 216,
                      "end": 231
                    },
                    "start": 214,
                    "end": 231
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 212,
                  "end": 232
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
                    "start": 241,
                    "end": 243
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
                                "start": 253,
                                "end": 254
                              },
                              "typeArguments": null,
                              "start": 253,
                              "end": 254
                            },
                            "start": 251,
                            "end": 254
                          },
                          "start": 250,
                          "end": 254
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
                                "start": 260,
                                "end": 261
                              },
                              "typeArguments": null,
                              "start": 260,
                              "end": 261
                            },
                            "start": 258,
                            "end": 261
                          },
                          "start": 256,
                          "end": 261
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
                            "start": 266,
                            "end": 267
                          },
                          "typeArguments": null,
                          "start": 266,
                          "end": 267
                        },
                        "start": 263,
                        "end": 267
                      },
                      "start": 245,
                      "end": 267
                    },
                    "start": 243,
                    "end": 267
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 241,
                  "end": 268
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
                    "start": 277,
                    "end": 279
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
                                "start": 290,
                                "end": 291
                              },
                              "typeArguments": null,
                              "start": 290,
                              "end": 291
                            },
                            "start": 288,
                            "end": 291
                          },
                          "start": 286,
                          "end": 291
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
                                "start": 297,
                                "end": 298
                              },
                              "typeArguments": null,
                              "start": 297,
                              "end": 298
                            },
                            "start": 295,
                            "end": 298
                          },
                          "start": 293,
                          "end": 298
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
                            "start": 303,
                            "end": 304
                          },
                          "typeArguments": null,
                          "start": 303,
                          "end": 304
                        },
                        "start": 300,
                        "end": 304
                      },
                      "start": 281,
                      "end": 304
                    },
                    "start": 279,
                    "end": 304
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 277,
                  "end": 305
                }
              ],
              "start": 148,
              "end": 311
            },
            "declare": false,
            "start": 130,
            "end": 311
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 329
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
                    "start": 330,
                    "end": 331
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 330,
                  "end": 331
                }
              ],
              "start": 329,
              "end": 332
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
                  "start": 341,
                  "end": 345
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
                        "start": 346,
                        "end": 347
                      },
                      "typeArguments": null,
                      "start": 346,
                      "end": 347
                    }
                  ],
                  "start": 345,
                  "end": 348
                },
                "start": 341,
                "end": 348
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
                    "start": 359,
                    "end": 360
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
                            "start": 372,
                            "end": 373
                          },
                          "typeArguments": null,
                          "start": 372,
                          "end": 373
                        },
                        "start": 369,
                        "end": 373
                      },
                      "start": 362,
                      "end": 373
                    },
                    "start": 360,
                    "end": 373
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 359,
                  "end": 374
                }
              ],
              "start": 349,
              "end": 413
            },
            "declare": false,
            "start": 317,
            "end": 413
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 429,
              "end": 431
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
                    "start": 432,
                    "end": 433
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 432,
                  "end": 433
                }
              ],
              "start": 431,
              "end": 434
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
                  "start": 443,
                  "end": 447
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
                        "start": 448,
                        "end": 449
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 449
                    }
                  ],
                  "start": 447,
                  "end": 450
                },
                "start": 443,
                "end": 450
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
                    "start": 461,
                    "end": 462
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
                                "start": 473,
                                "end": 474
                              },
                              "typeArguments": null,
                              "start": 473,
                              "end": 474
                            },
                            "start": 471,
                            "end": 474
                          },
                          "start": 469,
                          "end": 474
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
                            "start": 479,
                            "end": 480
                          },
                          "typeArguments": null,
                          "start": 479,
                          "end": 480
                        },
                        "start": 476,
                        "end": 480
                      },
                      "start": 464,
                      "end": 480
                    },
                    "start": 462,
                    "end": 480
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 461,
                  "end": 481
                }
              ],
              "start": 451,
              "end": 520
            },
            "declare": false,
            "start": 419,
            "end": 520
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 538
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
                    "start": 539,
                    "end": 540
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 539,
                  "end": 540
                }
              ],
              "start": 538,
              "end": 541
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
                  "start": 550,
                  "end": 554
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
                        "start": 555,
                        "end": 556
                      },
                      "typeArguments": null,
                      "start": 555,
                      "end": 556
                    }
                  ],
                  "start": 554,
                  "end": 557
                },
                "start": 550,
                "end": 557
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
                    "start": 568,
                    "end": 569
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
                                "start": 579,
                                "end": 580
                              },
                              "typeArguments": null,
                              "start": 579,
                              "end": 580
                            },
                            "start": 577,
                            "end": 580
                          },
                          "start": 576,
                          "end": 580
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
                            "start": 585,
                            "end": 586
                          },
                          "typeArguments": null,
                          "start": 585,
                          "end": 586
                        },
                        "start": 582,
                        "end": 586
                      },
                      "start": 571,
                      "end": 586
                    },
                    "start": 569,
                    "end": 586
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 568,
                  "end": 587
                }
              ],
              "start": 558,
              "end": 628
            },
            "declare": false,
            "start": 526,
            "end": 628
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 647
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
                    "start": 648,
                    "end": 649
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 648,
                  "end": 649
                }
              ],
              "start": 647,
              "end": 650
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
                  "start": 659,
                  "end": 663
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
                        "start": 664,
                        "end": 665
                      },
                      "typeArguments": null,
                      "start": 664,
                      "end": 665
                    }
                  ],
                  "start": 663,
                  "end": 666
                },
                "start": 659,
                "end": 666
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
                    "start": 677,
                    "end": 679
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
                            "start": 691,
                            "end": 692
                          },
                          "typeArguments": null,
                          "start": 691,
                          "end": 692
                        },
                        "start": 688,
                        "end": 692
                      },
                      "start": 681,
                      "end": 692
                    },
                    "start": 679,
                    "end": 692
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 677,
                  "end": 693
                }
              ],
              "start": 667,
              "end": 732
            },
            "declare": false,
            "start": 635,
            "end": 732
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 748,
              "end": 750
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
                    "start": 751,
                    "end": 752
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 751,
                  "end": 752
                }
              ],
              "start": 750,
              "end": 753
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
                  "start": 762,
                  "end": 766
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
                        "start": 767,
                        "end": 768
                      },
                      "typeArguments": null,
                      "start": 767,
                      "end": 768
                    }
                  ],
                  "start": 766,
                  "end": 769
                },
                "start": 762,
                "end": 769
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
                    "start": 780,
                    "end": 782
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
                                "start": 793,
                                "end": 794
                              },
                              "typeArguments": null,
                              "start": 793,
                              "end": 794
                            },
                            "start": 791,
                            "end": 794
                          },
                          "start": 789,
                          "end": 794
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
                            "start": 799,
                            "end": 800
                          },
                          "typeArguments": null,
                          "start": 799,
                          "end": 800
                        },
                        "start": 796,
                        "end": 800
                      },
                      "start": 784,
                      "end": 800
                    },
                    "start": 782,
                    "end": 800
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 780,
                  "end": 801
                }
              ],
              "start": 770,
              "end": 840
            },
            "declare": false,
            "start": 738,
            "end": 840
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 856,
              "end": 858
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
                    "start": 859,
                    "end": 860
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 859,
                  "end": 860
                }
              ],
              "start": 858,
              "end": 861
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
                  "start": 870,
                  "end": 874
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
                        "start": 875,
                        "end": 876
                      },
                      "typeArguments": null,
                      "start": 875,
                      "end": 876
                    }
                  ],
                  "start": 874,
                  "end": 877
                },
                "start": 870,
                "end": 877
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
                    "start": 888,
                    "end": 890
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
                                "start": 900,
                                "end": 901
                              },
                              "typeArguments": null,
                              "start": 900,
                              "end": 901
                            },
                            "start": 898,
                            "end": 901
                          },
                          "start": 897,
                          "end": 901
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
                            "start": 906,
                            "end": 907
                          },
                          "typeArguments": null,
                          "start": 906,
                          "end": 907
                        },
                        "start": 903,
                        "end": 907
                      },
                      "start": 892,
                      "end": 907
                    },
                    "start": 890,
                    "end": 907
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 888,
                  "end": 908
                }
              ],
              "start": 878,
              "end": 943
            },
            "declare": false,
            "start": 846,
            "end": 943
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 960,
              "end": 962
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
                    "start": 963,
                    "end": 964
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 963,
                  "end": 964
                }
              ],
              "start": 962,
              "end": 965
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
                  "start": 974,
                  "end": 978
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
                        "start": 979,
                        "end": 980
                      },
                      "typeArguments": null,
                      "start": 979,
                      "end": 980
                    }
                  ],
                  "start": 978,
                  "end": 981
                },
                "start": 974,
                "end": 981
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
                    "start": 992,
                    "end": 994
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
                            "start": 1006,
                            "end": 1007
                          },
                          "typeArguments": null,
                          "start": 1006,
                          "end": 1007
                        },
                        "start": 1003,
                        "end": 1007
                      },
                      "start": 996,
                      "end": 1007
                    },
                    "start": 994,
                    "end": 1007
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 992,
                  "end": 1008
                }
              ],
              "start": 982,
              "end": 1043
            },
            "declare": false,
            "start": 950,
            "end": 1043
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1061
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
                    "start": 1062,
                    "end": 1063
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1062,
                  "end": 1063
                }
              ],
              "start": 1061,
              "end": 1064
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
                  "start": 1073,
                  "end": 1077
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
                        "start": 1078,
                        "end": 1079
                      },
                      "typeArguments": null,
                      "start": 1078,
                      "end": 1079
                    }
                  ],
                  "start": 1077,
                  "end": 1080
                },
                "start": 1073,
                "end": 1080
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
                    "start": 1091,
                    "end": 1093
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
                                "start": 1104,
                                "end": 1105
                              },
                              "typeArguments": null,
                              "start": 1104,
                              "end": 1105
                            },
                            "start": 1102,
                            "end": 1105
                          },
                          "start": 1100,
                          "end": 1105
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
                            "start": 1110,
                            "end": 1111
                          },
                          "typeArguments": null,
                          "start": 1110,
                          "end": 1111
                        },
                        "start": 1107,
                        "end": 1111
                      },
                      "start": 1095,
                      "end": 1111
                    },
                    "start": 1093,
                    "end": 1111
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1091,
                  "end": 1112
                }
              ],
              "start": 1081,
              "end": 1147
            },
            "declare": false,
            "start": 1049,
            "end": 1147
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1163,
              "end": 1165
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
                    "start": 1166,
                    "end": 1167
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1166,
                  "end": 1167
                }
              ],
              "start": 1165,
              "end": 1168
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
                  "start": 1177,
                  "end": 1181
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
                        "start": 1182,
                        "end": 1183
                      },
                      "typeArguments": null,
                      "start": 1182,
                      "end": 1183
                    }
                  ],
                  "start": 1181,
                  "end": 1184
                },
                "start": 1177,
                "end": 1184
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
                    "start": 1195,
                    "end": 1197
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
                                "start": 1207,
                                "end": 1208
                              },
                              "typeArguments": null,
                              "start": 1207,
                              "end": 1208
                            },
                            "start": 1205,
                            "end": 1208
                          },
                          "start": 1204,
                          "end": 1208
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
                            "start": 1213,
                            "end": 1214
                          },
                          "typeArguments": null,
                          "start": 1213,
                          "end": 1214
                        },
                        "start": 1210,
                        "end": 1214
                      },
                      "start": 1199,
                      "end": 1214
                    },
                    "start": 1197,
                    "end": 1214
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1195,
                  "end": 1215
                }
              ],
              "start": 1185,
              "end": 1254
            },
            "declare": false,
            "start": 1153,
            "end": 1254
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1270,
              "end": 1273
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
                    "start": 1274,
                    "end": 1275
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1274,
                  "end": 1275
                }
              ],
              "start": 1273,
              "end": 1276
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
                  "start": 1285,
                  "end": 1289
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
                        "start": 1290,
                        "end": 1291
                      },
                      "typeArguments": null,
                      "start": 1290,
                      "end": 1291
                    }
                  ],
                  "start": 1289,
                  "end": 1292
                },
                "start": 1285,
                "end": 1292
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
                    "start": 1303,
                    "end": 1305
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
                                "start": 1315,
                                "end": 1316
                              },
                              "typeArguments": null,
                              "start": 1315,
                              "end": 1316
                            },
                            "start": 1313,
                            "end": 1316
                          },
                          "start": 1312,
                          "end": 1316
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
                                "start": 1321,
                                "end": 1322
                              },
                              "typeArguments": null,
                              "start": 1321,
                              "end": 1322
                            },
                            "start": 1319,
                            "end": 1322
                          },
                          "start": 1318,
                          "end": 1322
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
                            "start": 1327,
                            "end": 1328
                          },
                          "typeArguments": null,
                          "start": 1327,
                          "end": 1328
                        },
                        "start": 1324,
                        "end": 1328
                      },
                      "start": 1307,
                      "end": 1328
                    },
                    "start": 1305,
                    "end": 1328
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1303,
                  "end": 1329
                }
              ],
              "start": 1293,
              "end": 1371
            },
            "declare": false,
            "start": 1260,
            "end": 1371
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1388,
              "end": 1391
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
                    "start": 1392,
                    "end": 1393
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1392,
                  "end": 1393
                }
              ],
              "start": 1391,
              "end": 1394
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
                  "start": 1403,
                  "end": 1407
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
                        "start": 1408,
                        "end": 1409
                      },
                      "typeArguments": null,
                      "start": 1408,
                      "end": 1409
                    }
                  ],
                  "start": 1407,
                  "end": 1410
                },
                "start": 1403,
                "end": 1410
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
                    "start": 1421,
                    "end": 1423
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
                            "start": 1435,
                            "end": 1436
                          },
                          "typeArguments": null,
                          "start": 1435,
                          "end": 1436
                        },
                        "start": 1432,
                        "end": 1436
                      },
                      "start": 1425,
                      "end": 1436
                    },
                    "start": 1423,
                    "end": 1436
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1421,
                  "end": 1437
                }
              ],
              "start": 1411,
              "end": 1472
            },
            "declare": false,
            "start": 1378,
            "end": 1472
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1488,
              "end": 1491
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
                    "start": 1492,
                    "end": 1493
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1492,
                  "end": 1493
                }
              ],
              "start": 1491,
              "end": 1494
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
                  "start": 1503,
                  "end": 1507
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
                        "start": 1508,
                        "end": 1509
                      },
                      "typeArguments": null,
                      "start": 1508,
                      "end": 1509
                    }
                  ],
                  "start": 1507,
                  "end": 1510
                },
                "start": 1503,
                "end": 1510
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
                    "start": 1521,
                    "end": 1523
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
                                "start": 1534,
                                "end": 1535
                              },
                              "typeArguments": null,
                              "start": 1534,
                              "end": 1535
                            },
                            "start": 1532,
                            "end": 1535
                          },
                          "start": 1530,
                          "end": 1535
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
                                "start": 1541,
                                "end": 1542
                              },
                              "typeArguments": null,
                              "start": 1541,
                              "end": 1542
                            },
                            "start": 1539,
                            "end": 1542
                          },
                          "start": 1537,
                          "end": 1542
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
                            "start": 1547,
                            "end": 1548
                          },
                          "typeArguments": null,
                          "start": 1547,
                          "end": 1548
                        },
                        "start": 1544,
                        "end": 1548
                      },
                      "start": 1525,
                      "end": 1548
                    },
                    "start": 1523,
                    "end": 1548
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1521,
                  "end": 1549
                }
              ],
              "start": 1511,
              "end": 1584
            },
            "declare": false,
            "start": 1478,
            "end": 1584
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1600,
              "end": 1603
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
                    "start": 1604,
                    "end": 1605
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1604,
                  "end": 1605
                }
              ],
              "start": 1603,
              "end": 1606
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
                  "start": 1615,
                  "end": 1619
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
                        "start": 1620,
                        "end": 1621
                      },
                      "typeArguments": null,
                      "start": 1620,
                      "end": 1621
                    }
                  ],
                  "start": 1619,
                  "end": 1622
                },
                "start": 1615,
                "end": 1622
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
                    "start": 1633,
                    "end": 1635
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
                                "start": 1645,
                                "end": 1646
                              },
                              "typeArguments": null,
                              "start": 1645,
                              "end": 1646
                            },
                            "start": 1643,
                            "end": 1646
                          },
                          "start": 1642,
                          "end": 1646
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
                            "start": 1651,
                            "end": 1652
                          },
                          "typeArguments": null,
                          "start": 1651,
                          "end": 1652
                        },
                        "start": 1648,
                        "end": 1652
                      },
                      "start": 1637,
                      "end": 1652
                    },
                    "start": 1635,
                    "end": 1652
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1633,
                  "end": 1653
                }
              ],
              "start": 1623,
              "end": 1692
            },
            "declare": false,
            "start": 1590,
            "end": 1692
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1708,
              "end": 1711
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
                    "start": 1712,
                    "end": 1713
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1712,
                  "end": 1713
                }
              ],
              "start": 1711,
              "end": 1714
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
                  "start": 1723,
                  "end": 1727
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
                        "start": 1728,
                        "end": 1729
                      },
                      "typeArguments": null,
                      "start": 1728,
                      "end": 1729
                    }
                  ],
                  "start": 1727,
                  "end": 1730
                },
                "start": 1723,
                "end": 1730
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
                    "start": 1741,
                    "end": 1743
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
                                "start": 1753,
                                "end": 1754
                              },
                              "typeArguments": null,
                              "start": 1753,
                              "end": 1754
                            },
                            "start": 1751,
                            "end": 1754
                          },
                          "start": 1750,
                          "end": 1754
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
                                "start": 1759,
                                "end": 1760
                              },
                              "typeArguments": null,
                              "start": 1759,
                              "end": 1760
                            },
                            "start": 1757,
                            "end": 1760
                          },
                          "start": 1756,
                          "end": 1760
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
                            "start": 1765,
                            "end": 1766
                          },
                          "typeArguments": null,
                          "start": 1765,
                          "end": 1766
                        },
                        "start": 1762,
                        "end": 1766
                      },
                      "start": 1745,
                      "end": 1766
                    },
                    "start": 1743,
                    "end": 1766
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1741,
                  "end": 1767
                }
              ],
              "start": 1731,
              "end": 1803
            },
            "declare": false,
            "start": 1698,
            "end": 1803
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1820,
              "end": 1823
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
                    "start": 1824,
                    "end": 1825
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1824,
                  "end": 1825
                }
              ],
              "start": 1823,
              "end": 1826
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
                  "start": 1835,
                  "end": 1839
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
                        "start": 1840,
                        "end": 1841
                      },
                      "typeArguments": null,
                      "start": 1840,
                      "end": 1841
                    }
                  ],
                  "start": 1839,
                  "end": 1842
                },
                "start": 1835,
                "end": 1842
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
                    "start": 1853,
                    "end": 1855
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
                            "start": 1867,
                            "end": 1868
                          },
                          "typeArguments": null,
                          "start": 1867,
                          "end": 1868
                        },
                        "start": 1864,
                        "end": 1868
                      },
                      "start": 1857,
                      "end": 1868
                    },
                    "start": 1855,
                    "end": 1868
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1853,
                  "end": 1869
                }
              ],
              "start": 1843,
              "end": 1904
            },
            "declare": false,
            "start": 1810,
            "end": 1904
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1920,
              "end": 1923
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
                    "start": 1924,
                    "end": 1925
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1924,
                  "end": 1925
                }
              ],
              "start": 1923,
              "end": 1926
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
                  "start": 1935,
                  "end": 1939
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
                        "start": 1940,
                        "end": 1941
                      },
                      "typeArguments": null,
                      "start": 1940,
                      "end": 1941
                    }
                  ],
                  "start": 1939,
                  "end": 1942
                },
                "start": 1935,
                "end": 1942
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
                    "start": 1953,
                    "end": 1955
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
                                "start": 1966,
                                "end": 1967
                              },
                              "typeArguments": null,
                              "start": 1966,
                              "end": 1967
                            },
                            "start": 1964,
                            "end": 1967
                          },
                          "start": 1962,
                          "end": 1967
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
                                "start": 1973,
                                "end": 1974
                              },
                              "typeArguments": null,
                              "start": 1973,
                              "end": 1974
                            },
                            "start": 1971,
                            "end": 1974
                          },
                          "start": 1969,
                          "end": 1974
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
                            "start": 1979,
                            "end": 1980
                          },
                          "typeArguments": null,
                          "start": 1979,
                          "end": 1980
                        },
                        "start": 1976,
                        "end": 1980
                      },
                      "start": 1957,
                      "end": 1980
                    },
                    "start": 1955,
                    "end": 1980
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1953,
                  "end": 1981
                }
              ],
              "start": 1943,
              "end": 2016
            },
            "declare": false,
            "start": 1910,
            "end": 2016
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 2032,
              "end": 2035
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
                    "start": 2036,
                    "end": 2037
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2036,
                  "end": 2037
                }
              ],
              "start": 2035,
              "end": 2038
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
                  "start": 2047,
                  "end": 2051
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
                        "start": 2052,
                        "end": 2053
                      },
                      "typeArguments": null,
                      "start": 2052,
                      "end": 2053
                    }
                  ],
                  "start": 2051,
                  "end": 2054
                },
                "start": 2047,
                "end": 2054
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
                    "start": 2065,
                    "end": 2067
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
                                "start": 2077,
                                "end": 2078
                              },
                              "typeArguments": null,
                              "start": 2077,
                              "end": 2078
                            },
                            "start": 2075,
                            "end": 2078
                          },
                          "start": 2074,
                          "end": 2078
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
                            "start": 2083,
                            "end": 2084
                          },
                          "typeArguments": null,
                          "start": 2083,
                          "end": 2084
                        },
                        "start": 2080,
                        "end": 2084
                      },
                      "start": 2069,
                      "end": 2084
                    },
                    "start": 2067,
                    "end": 2084
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2065,
                  "end": 2085
                }
              ],
              "start": 2055,
              "end": 2123
            },
            "declare": false,
            "start": 2022,
            "end": 2123
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2139,
              "end": 2142
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
                    "start": 2143,
                    "end": 2144
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2143,
                  "end": 2144
                }
              ],
              "start": 2142,
              "end": 2145
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
                  "start": 2154,
                  "end": 2158
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
                        "start": 2159,
                        "end": 2160
                      },
                      "typeArguments": null,
                      "start": 2159,
                      "end": 2160
                    }
                  ],
                  "start": 2158,
                  "end": 2161
                },
                "start": 2154,
                "end": 2161
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
                    "start": 2172,
                    "end": 2174
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
                                "start": 2184,
                                "end": 2185
                              },
                              "typeArguments": null,
                              "start": 2184,
                              "end": 2185
                            },
                            "start": 2182,
                            "end": 2185
                          },
                          "start": 2181,
                          "end": 2185
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
                                "start": 2190,
                                "end": 2191
                              },
                              "typeArguments": null,
                              "start": 2190,
                              "end": 2191
                            },
                            "start": 2188,
                            "end": 2191
                          },
                          "start": 2187,
                          "end": 2191
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
                            "start": 2196,
                            "end": 2197
                          },
                          "typeArguments": null,
                          "start": 2196,
                          "end": 2197
                        },
                        "start": 2193,
                        "end": 2197
                      },
                      "start": 2176,
                      "end": 2197
                    },
                    "start": 2174,
                    "end": 2197
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2172,
                  "end": 2198
                }
              ],
              "start": 2162,
              "end": 2234
            },
            "declare": false,
            "start": 2129,
            "end": 2234
          }
        ],
        "start": 124,
        "end": 2236
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 102,
      "end": 2236
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2245,
        "end": 2269
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
              "start": 2318,
              "end": 2323
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
                    "start": 2334,
                    "end": 2335
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
                              "start": 2342,
                              "end": 2343
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2342,
                            "end": 2343
                          }
                        ],
                        "start": 2341,
                        "end": 2344
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
                            "start": 2350,
                            "end": 2351
                          },
                          "typeArguments": null,
                          "start": 2350,
                          "end": 2351
                        },
                        "start": 2347,
                        "end": 2351
                      },
                      "start": 2337,
                      "end": 2351
                    },
                    "start": 2335,
                    "end": 2351
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2334,
                  "end": 2352
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
                    "start": 2361,
                    "end": 2363
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
                              "start": 2370,
                              "end": 2371
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2370,
                            "end": 2371
                          }
                        ],
                        "start": 2369,
                        "end": 2372
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
                                "start": 2377,
                                "end": 2378
                              },
                              "typeArguments": null,
                              "start": 2377,
                              "end": 2378
                            },
                            "start": 2375,
                            "end": 2378
                          },
                          "start": 2373,
                          "end": 2378
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
                            "start": 2383,
                            "end": 2384
                          },
                          "typeArguments": null,
                          "start": 2383,
                          "end": 2384
                        },
                        "start": 2380,
                        "end": 2384
                      },
                      "start": 2365,
                      "end": 2384
                    },
                    "start": 2363,
                    "end": 2384
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2361,
                  "end": 2385
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
                    "start": 2394,
                    "end": 2396
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
                              "start": 2403,
                              "end": 2404
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2403,
                            "end": 2404
                          }
                        ],
                        "start": 2402,
                        "end": 2405
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
                                "start": 2409,
                                "end": 2410
                              },
                              "typeArguments": null,
                              "start": 2409,
                              "end": 2410
                            },
                            "start": 2407,
                            "end": 2410
                          },
                          "start": 2406,
                          "end": 2410
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
                            "start": 2415,
                            "end": 2416
                          },
                          "typeArguments": null,
                          "start": 2415,
                          "end": 2416
                        },
                        "start": 2412,
                        "end": 2416
                      },
                      "start": 2398,
                      "end": 2416
                    },
                    "start": 2396,
                    "end": 2416
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2394,
                  "end": 2417
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
                    "start": 2426,
                    "end": 2428
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
                              "start": 2435,
                              "end": 2436
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2435,
                            "end": 2436
                          }
                        ],
                        "start": 2434,
                        "end": 2437
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
                                "start": 2441,
                                "end": 2442
                              },
                              "typeArguments": null,
                              "start": 2441,
                              "end": 2442
                            },
                            "start": 2439,
                            "end": 2442
                          },
                          "start": 2438,
                          "end": 2442
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
                                "start": 2448,
                                "end": 2449
                              },
                              "typeArguments": null,
                              "start": 2448,
                              "end": 2449
                            },
                            "start": 2446,
                            "end": 2449
                          },
                          "start": 2444,
                          "end": 2449
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
                            "start": 2454,
                            "end": 2455
                          },
                          "typeArguments": null,
                          "start": 2454,
                          "end": 2455
                        },
                        "start": 2451,
                        "end": 2455
                      },
                      "start": 2430,
                      "end": 2455
                    },
                    "start": 2428,
                    "end": 2455
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2426,
                  "end": 2456
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
                    "start": 2465,
                    "end": 2467
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
                              "start": 2474,
                              "end": 2475
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2474,
                            "end": 2475
                          }
                        ],
                        "start": 2473,
                        "end": 2476
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
                                "start": 2481,
                                "end": 2482
                              },
                              "typeArguments": null,
                              "start": 2481,
                              "end": 2482
                            },
                            "start": 2479,
                            "end": 2482
                          },
                          "start": 2477,
                          "end": 2482
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
                                "start": 2488,
                                "end": 2489
                              },
                              "typeArguments": null,
                              "start": 2488,
                              "end": 2489
                            },
                            "start": 2486,
                            "end": 2489
                          },
                          "start": 2484,
                          "end": 2489
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
                            "start": 2494,
                            "end": 2495
                          },
                          "typeArguments": null,
                          "start": 2494,
                          "end": 2495
                        },
                        "start": 2491,
                        "end": 2495
                      },
                      "start": 2469,
                      "end": 2495
                    },
                    "start": 2467,
                    "end": 2495
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2465,
                  "end": 2496
                }
              ],
              "start": 2324,
              "end": 2502
            },
            "declare": false,
            "start": 2308,
            "end": 2502
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2518,
              "end": 2520
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
                    "start": 2521,
                    "end": 2522
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2521,
                  "end": 2522
                }
              ],
              "start": 2520,
              "end": 2523
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
                  "start": 2532,
                  "end": 2537
                },
                "typeArguments": null,
                "start": 2532,
                "end": 2537
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
                    "start": 2548,
                    "end": 2549
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
                            "start": 2561,
                            "end": 2562
                          },
                          "typeArguments": null,
                          "start": 2561,
                          "end": 2562
                        },
                        "start": 2558,
                        "end": 2562
                      },
                      "start": 2551,
                      "end": 2562
                    },
                    "start": 2549,
                    "end": 2562
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2548,
                  "end": 2563
                }
              ],
              "start": 2538,
              "end": 2570
            },
            "declare": false,
            "start": 2508,
            "end": 2570
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2586,
              "end": 2588
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
                    "start": 2589,
                    "end": 2590
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2589,
                  "end": 2590
                }
              ],
              "start": 2588,
              "end": 2591
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
                  "start": 2600,
                  "end": 2605
                },
                "typeArguments": null,
                "start": 2600,
                "end": 2605
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
                    "start": 2616,
                    "end": 2617
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
                                "start": 2628,
                                "end": 2629
                              },
                              "typeArguments": null,
                              "start": 2628,
                              "end": 2629
                            },
                            "start": 2626,
                            "end": 2629
                          },
                          "start": 2624,
                          "end": 2629
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
                            "start": 2634,
                            "end": 2635
                          },
                          "typeArguments": null,
                          "start": 2634,
                          "end": 2635
                        },
                        "start": 2631,
                        "end": 2635
                      },
                      "start": 2619,
                      "end": 2635
                    },
                    "start": 2617,
                    "end": 2635
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2616,
                  "end": 2636
                }
              ],
              "start": 2606,
              "end": 2642
            },
            "declare": false,
            "start": 2576,
            "end": 2642
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2658,
              "end": 2660
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
                    "start": 2661,
                    "end": 2662
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2661,
                  "end": 2662
                }
              ],
              "start": 2660,
              "end": 2663
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
                  "start": 2672,
                  "end": 2677
                },
                "typeArguments": null,
                "start": 2672,
                "end": 2677
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
                    "start": 2688,
                    "end": 2689
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
                                "start": 2699,
                                "end": 2700
                              },
                              "typeArguments": null,
                              "start": 2699,
                              "end": 2700
                            },
                            "start": 2697,
                            "end": 2700
                          },
                          "start": 2696,
                          "end": 2700
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
                            "start": 2705,
                            "end": 2706
                          },
                          "typeArguments": null,
                          "start": 2705,
                          "end": 2706
                        },
                        "start": 2702,
                        "end": 2706
                      },
                      "start": 2691,
                      "end": 2706
                    },
                    "start": 2689,
                    "end": 2706
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2688,
                  "end": 2707
                }
              ],
              "start": 2678,
              "end": 2714
            },
            "declare": false,
            "start": 2648,
            "end": 2714
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2731,
              "end": 2733
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
                    "start": 2734,
                    "end": 2735
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2734,
                  "end": 2735
                }
              ],
              "start": 2733,
              "end": 2736
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
                  "start": 2745,
                  "end": 2750
                },
                "typeArguments": null,
                "start": 2745,
                "end": 2750
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
                    "start": 2761,
                    "end": 2763
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
                            "start": 2775,
                            "end": 2776
                          },
                          "typeArguments": null,
                          "start": 2775,
                          "end": 2776
                        },
                        "start": 2772,
                        "end": 2776
                      },
                      "start": 2765,
                      "end": 2776
                    },
                    "start": 2763,
                    "end": 2776
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2761,
                  "end": 2777
                }
              ],
              "start": 2751,
              "end": 2784
            },
            "declare": false,
            "start": 2721,
            "end": 2784
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2800,
              "end": 2802
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
                    "start": 2803,
                    "end": 2804
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2803,
                  "end": 2804
                }
              ],
              "start": 2802,
              "end": 2805
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
                  "start": 2814,
                  "end": 2819
                },
                "typeArguments": null,
                "start": 2814,
                "end": 2819
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
                    "start": 2830,
                    "end": 2832
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
                                "start": 2843,
                                "end": 2844
                              },
                              "typeArguments": null,
                              "start": 2843,
                              "end": 2844
                            },
                            "start": 2841,
                            "end": 2844
                          },
                          "start": 2839,
                          "end": 2844
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
                            "start": 2849,
                            "end": 2850
                          },
                          "typeArguments": null,
                          "start": 2849,
                          "end": 2850
                        },
                        "start": 2846,
                        "end": 2850
                      },
                      "start": 2834,
                      "end": 2850
                    },
                    "start": 2832,
                    "end": 2850
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2830,
                  "end": 2850
                }
              ],
              "start": 2820,
              "end": 2856
            },
            "declare": false,
            "start": 2790,
            "end": 2856
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2872,
              "end": 2874
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
                    "start": 2875,
                    "end": 2876
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2875,
                  "end": 2876
                }
              ],
              "start": 2874,
              "end": 2877
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
                  "start": 2886,
                  "end": 2891
                },
                "typeArguments": null,
                "start": 2886,
                "end": 2891
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
                    "start": 2902,
                    "end": 2904
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
                                "start": 2914,
                                "end": 2915
                              },
                              "typeArguments": null,
                              "start": 2914,
                              "end": 2915
                            },
                            "start": 2912,
                            "end": 2915
                          },
                          "start": 2911,
                          "end": 2915
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
                            "start": 2920,
                            "end": 2921
                          },
                          "typeArguments": null,
                          "start": 2920,
                          "end": 2921
                        },
                        "start": 2917,
                        "end": 2921
                      },
                      "start": 2906,
                      "end": 2921
                    },
                    "start": 2904,
                    "end": 2921
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2902,
                  "end": 2922
                }
              ],
              "start": 2892,
              "end": 2928
            },
            "declare": false,
            "start": 2862,
            "end": 2928
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2945,
              "end": 2947
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
                    "start": 2948,
                    "end": 2949
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2948,
                  "end": 2949
                }
              ],
              "start": 2947,
              "end": 2950
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
                  "start": 2959,
                  "end": 2964
                },
                "typeArguments": null,
                "start": 2959,
                "end": 2964
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
                    "start": 2975,
                    "end": 2977
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
                            "start": 2989,
                            "end": 2990
                          },
                          "typeArguments": null,
                          "start": 2989,
                          "end": 2990
                        },
                        "start": 2986,
                        "end": 2990
                      },
                      "start": 2979,
                      "end": 2990
                    },
                    "start": 2977,
                    "end": 2990
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2975,
                  "end": 2991
                }
              ],
              "start": 2965,
              "end": 2997
            },
            "declare": false,
            "start": 2935,
            "end": 2997
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 3013,
              "end": 3015
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
                    "start": 3016,
                    "end": 3017
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3016,
                  "end": 3017
                }
              ],
              "start": 3015,
              "end": 3018
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
                  "start": 3027,
                  "end": 3032
                },
                "typeArguments": null,
                "start": 3027,
                "end": 3032
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
                    "start": 3043,
                    "end": 3045
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
                                "start": 3056,
                                "end": 3057
                              },
                              "typeArguments": null,
                              "start": 3056,
                              "end": 3057
                            },
                            "start": 3054,
                            "end": 3057
                          },
                          "start": 3052,
                          "end": 3057
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
                            "start": 3062,
                            "end": 3063
                          },
                          "typeArguments": null,
                          "start": 3062,
                          "end": 3063
                        },
                        "start": 3059,
                        "end": 3063
                      },
                      "start": 3047,
                      "end": 3063
                    },
                    "start": 3045,
                    "end": 3063
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3043,
                  "end": 3064
                }
              ],
              "start": 3033,
              "end": 3071
            },
            "declare": false,
            "start": 3003,
            "end": 3071
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 3087,
              "end": 3089
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
                    "start": 3090,
                    "end": 3091
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3090,
                  "end": 3091
                }
              ],
              "start": 3089,
              "end": 3092
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
                  "start": 3101,
                  "end": 3106
                },
                "typeArguments": null,
                "start": 3101,
                "end": 3106
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
                    "start": 3117,
                    "end": 3119
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
                                "start": 3129,
                                "end": 3130
                              },
                              "typeArguments": null,
                              "start": 3129,
                              "end": 3130
                            },
                            "start": 3127,
                            "end": 3130
                          },
                          "start": 3126,
                          "end": 3130
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
                            "start": 3135,
                            "end": 3136
                          },
                          "typeArguments": null,
                          "start": 3135,
                          "end": 3136
                        },
                        "start": 3132,
                        "end": 3136
                      },
                      "start": 3121,
                      "end": 3136
                    },
                    "start": 3119,
                    "end": 3136
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3117,
                  "end": 3137
                }
              ],
              "start": 3107,
              "end": 3144
            },
            "declare": false,
            "start": 3077,
            "end": 3144
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 3160,
              "end": 3163
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
                    "start": 3164,
                    "end": 3165
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3164,
                  "end": 3165
                }
              ],
              "start": 3163,
              "end": 3166
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
                  "start": 3175,
                  "end": 3180
                },
                "typeArguments": null,
                "start": 3175,
                "end": 3180
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
                    "start": 3191,
                    "end": 3193
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
                                "start": 3203,
                                "end": 3204
                              },
                              "typeArguments": null,
                              "start": 3203,
                              "end": 3204
                            },
                            "start": 3201,
                            "end": 3204
                          },
                          "start": 3200,
                          "end": 3204
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
                            "start": 3215,
                            "end": 3216
                          },
                          "typeArguments": null,
                          "start": 3215,
                          "end": 3216
                        },
                        "start": 3212,
                        "end": 3216
                      },
                      "start": 3195,
                      "end": 3216
                    },
                    "start": 3193,
                    "end": 3216
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3191,
                  "end": 3217
                }
              ],
              "start": 3181,
              "end": 3225
            },
            "declare": false,
            "start": 3150,
            "end": 3225
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 3242,
              "end": 3245
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
                    "start": 3246,
                    "end": 3247
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3246,
                  "end": 3247
                }
              ],
              "start": 3245,
              "end": 3248
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
                  "start": 3257,
                  "end": 3262
                },
                "typeArguments": null,
                "start": 3257,
                "end": 3262
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
                    "start": 3273,
                    "end": 3275
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
                            "start": 3287,
                            "end": 3288
                          },
                          "typeArguments": null,
                          "start": 3287,
                          "end": 3288
                        },
                        "start": 3284,
                        "end": 3288
                      },
                      "start": 3277,
                      "end": 3288
                    },
                    "start": 3275,
                    "end": 3288
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3273,
                  "end": 3289
                }
              ],
              "start": 3263,
              "end": 3296
            },
            "declare": false,
            "start": 3232,
            "end": 3296
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3312,
              "end": 3315
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
                    "start": 3316,
                    "end": 3317
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3316,
                  "end": 3317
                }
              ],
              "start": 3315,
              "end": 3318
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
                  "start": 3327,
                  "end": 3332
                },
                "typeArguments": null,
                "start": 3327,
                "end": 3332
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
                    "start": 3343,
                    "end": 3345
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
                                "start": 3356,
                                "end": 3357
                              },
                              "typeArguments": null,
                              "start": 3356,
                              "end": 3357
                            },
                            "start": 3354,
                            "end": 3357
                          },
                          "start": 3352,
                          "end": 3357
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
                                "start": 3363,
                                "end": 3364
                              },
                              "typeArguments": null,
                              "start": 3363,
                              "end": 3364
                            },
                            "start": 3361,
                            "end": 3364
                          },
                          "start": 3359,
                          "end": 3364
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
                            "start": 3369,
                            "end": 3370
                          },
                          "typeArguments": null,
                          "start": 3369,
                          "end": 3370
                        },
                        "start": 3366,
                        "end": 3370
                      },
                      "start": 3347,
                      "end": 3370
                    },
                    "start": 3345,
                    "end": 3370
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3343,
                  "end": 3371
                }
              ],
              "start": 3333,
              "end": 3378
            },
            "declare": false,
            "start": 3302,
            "end": 3378
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 3394,
              "end": 3397
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
                    "start": 3398,
                    "end": 3399
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3398,
                  "end": 3399
                }
              ],
              "start": 3397,
              "end": 3400
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
                  "start": 3409,
                  "end": 3414
                },
                "typeArguments": null,
                "start": 3409,
                "end": 3414
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
                    "start": 3425,
                    "end": 3427
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
                                "start": 3437,
                                "end": 3438
                              },
                              "typeArguments": null,
                              "start": 3437,
                              "end": 3438
                            },
                            "start": 3435,
                            "end": 3438
                          },
                          "start": 3434,
                          "end": 3438
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
                            "start": 3443,
                            "end": 3444
                          },
                          "typeArguments": null,
                          "start": 3443,
                          "end": 3444
                        },
                        "start": 3440,
                        "end": 3444
                      },
                      "start": 3429,
                      "end": 3444
                    },
                    "start": 3427,
                    "end": 3444
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3425,
                  "end": 3445
                }
              ],
              "start": 3415,
              "end": 3452
            },
            "declare": false,
            "start": 3384,
            "end": 3452
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 3468,
              "end": 3471
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
                    "start": 3472,
                    "end": 3473
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3472,
                  "end": 3473
                }
              ],
              "start": 3471,
              "end": 3474
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
                  "start": 3483,
                  "end": 3488
                },
                "typeArguments": null,
                "start": 3483,
                "end": 3488
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
                    "start": 3499,
                    "end": 3501
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
                                "start": 3511,
                                "end": 3512
                              },
                              "typeArguments": null,
                              "start": 3511,
                              "end": 3512
                            },
                            "start": 3509,
                            "end": 3512
                          },
                          "start": 3508,
                          "end": 3512
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
                            "start": 3523,
                            "end": 3524
                          },
                          "typeArguments": null,
                          "start": 3523,
                          "end": 3524
                        },
                        "start": 3520,
                        "end": 3524
                      },
                      "start": 3503,
                      "end": 3524
                    },
                    "start": 3501,
                    "end": 3524
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3499,
                  "end": 3525
                }
              ],
              "start": 3489,
              "end": 3532
            },
            "declare": false,
            "start": 3458,
            "end": 3532
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3549,
              "end": 3552
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
                    "start": 3553,
                    "end": 3554
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3553,
                  "end": 3554
                }
              ],
              "start": 3552,
              "end": 3555
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
                  "start": 3564,
                  "end": 3569
                },
                "typeArguments": null,
                "start": 3564,
                "end": 3569
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
                    "start": 3580,
                    "end": 3582
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
                            "start": 3594,
                            "end": 3595
                          },
                          "typeArguments": null,
                          "start": 3594,
                          "end": 3595
                        },
                        "start": 3591,
                        "end": 3595
                      },
                      "start": 3584,
                      "end": 3595
                    },
                    "start": 3582,
                    "end": 3595
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3580,
                  "end": 3596
                }
              ],
              "start": 3570,
              "end": 3603
            },
            "declare": false,
            "start": 3539,
            "end": 3603
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3619,
              "end": 3622
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
                    "start": 3623,
                    "end": 3624
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3623,
                  "end": 3624
                }
              ],
              "start": 3622,
              "end": 3625
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
                  "start": 3634,
                  "end": 3639
                },
                "typeArguments": null,
                "start": 3634,
                "end": 3639
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
                    "start": 3650,
                    "end": 3652
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
                                "start": 3663,
                                "end": 3664
                              },
                              "typeArguments": null,
                              "start": 3663,
                              "end": 3664
                            },
                            "start": 3661,
                            "end": 3664
                          },
                          "start": 3659,
                          "end": 3664
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
                                "start": 3670,
                                "end": 3671
                              },
                              "typeArguments": null,
                              "start": 3670,
                              "end": 3671
                            },
                            "start": 3668,
                            "end": 3671
                          },
                          "start": 3666,
                          "end": 3671
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
                            "start": 3676,
                            "end": 3677
                          },
                          "typeArguments": null,
                          "start": 3676,
                          "end": 3677
                        },
                        "start": 3673,
                        "end": 3677
                      },
                      "start": 3654,
                      "end": 3677
                    },
                    "start": 3652,
                    "end": 3677
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3650,
                  "end": 3678
                }
              ],
              "start": 3640,
              "end": 3685
            },
            "declare": false,
            "start": 3609,
            "end": 3685
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3701,
              "end": 3704
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
                    "start": 3705,
                    "end": 3706
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3705,
                  "end": 3706
                }
              ],
              "start": 3704,
              "end": 3707
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
                  "start": 3716,
                  "end": 3721
                },
                "typeArguments": null,
                "start": 3716,
                "end": 3721
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
                    "start": 3732,
                    "end": 3734
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
                                "start": 3744,
                                "end": 3745
                              },
                              "typeArguments": null,
                              "start": 3744,
                              "end": 3745
                            },
                            "start": 3742,
                            "end": 3745
                          },
                          "start": 3741,
                          "end": 3745
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
                            "start": 3750,
                            "end": 3751
                          },
                          "typeArguments": null,
                          "start": 3750,
                          "end": 3751
                        },
                        "start": 3747,
                        "end": 3751
                      },
                      "start": 3736,
                      "end": 3751
                    },
                    "start": 3734,
                    "end": 3751
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3732,
                  "end": 3752
                }
              ],
              "start": 3722,
              "end": 3758
            },
            "declare": false,
            "start": 3691,
            "end": 3758
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3774,
              "end": 3777
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
                    "start": 3778,
                    "end": 3779
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3778,
                  "end": 3779
                }
              ],
              "start": 3777,
              "end": 3780
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
                  "start": 3789,
                  "end": 3794
                },
                "typeArguments": null,
                "start": 3789,
                "end": 3794
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
                    "start": 3805,
                    "end": 3807
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
                                "start": 3817,
                                "end": 3818
                              },
                              "typeArguments": null,
                              "start": 3817,
                              "end": 3818
                            },
                            "start": 3815,
                            "end": 3818
                          },
                          "start": 3814,
                          "end": 3818
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
                            "start": 3829,
                            "end": 3830
                          },
                          "typeArguments": null,
                          "start": 3829,
                          "end": 3830
                        },
                        "start": 3826,
                        "end": 3830
                      },
                      "start": 3809,
                      "end": 3830
                    },
                    "start": 3807,
                    "end": 3830
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3805,
                  "end": 3831
                }
              ],
              "start": 3795,
              "end": 3838
            },
            "declare": false,
            "start": 3764,
            "end": 3838
          }
        ],
        "start": 2270,
        "end": 3840
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2238,
      "end": 3840
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 3849,
        "end": 3871
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
              "start": 3889,
              "end": 3894
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
                    "start": 3905,
                    "end": 3906
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
                              "start": 3913,
                              "end": 3914
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3913,
                            "end": 3914
                          }
                        ],
                        "start": 3912,
                        "end": 3915
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
                            "start": 3921,
                            "end": 3922
                          },
                          "typeArguments": null,
                          "start": 3921,
                          "end": 3922
                        },
                        "start": 3918,
                        "end": 3922
                      },
                      "start": 3908,
                      "end": 3922
                    },
                    "start": 3906,
                    "end": 3922
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3905,
                  "end": 3923
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
                    "start": 3932,
                    "end": 3934
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
                              "start": 3941,
                              "end": 3942
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3941,
                            "end": 3942
                          }
                        ],
                        "start": 3940,
                        "end": 3943
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
                                "start": 3948,
                                "end": 3949
                              },
                              "typeArguments": null,
                              "start": 3948,
                              "end": 3949
                            },
                            "start": 3946,
                            "end": 3949
                          },
                          "start": 3944,
                          "end": 3949
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
                            "start": 3954,
                            "end": 3955
                          },
                          "typeArguments": null,
                          "start": 3954,
                          "end": 3955
                        },
                        "start": 3951,
                        "end": 3955
                      },
                      "start": 3936,
                      "end": 3955
                    },
                    "start": 3934,
                    "end": 3955
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3932,
                  "end": 3956
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
                    "start": 3965,
                    "end": 3967
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
                              "start": 3974,
                              "end": 3975
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3974,
                            "end": 3975
                          }
                        ],
                        "start": 3973,
                        "end": 3976
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
                                "start": 3980,
                                "end": 3981
                              },
                              "typeArguments": null,
                              "start": 3980,
                              "end": 3981
                            },
                            "start": 3978,
                            "end": 3981
                          },
                          "start": 3977,
                          "end": 3981
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
                            "start": 3986,
                            "end": 3987
                          },
                          "typeArguments": null,
                          "start": 3986,
                          "end": 3987
                        },
                        "start": 3983,
                        "end": 3987
                      },
                      "start": 3969,
                      "end": 3987
                    },
                    "start": 3967,
                    "end": 3987
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3965,
                  "end": 3988
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
                    "start": 3997,
                    "end": 3999
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
                              "start": 4006,
                              "end": 4007
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4006,
                            "end": 4007
                          }
                        ],
                        "start": 4005,
                        "end": 4008
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
                                "start": 4012,
                                "end": 4013
                              },
                              "typeArguments": null,
                              "start": 4012,
                              "end": 4013
                            },
                            "start": 4010,
                            "end": 4013
                          },
                          "start": 4009,
                          "end": 4013
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
                                "start": 4019,
                                "end": 4020
                              },
                              "typeArguments": null,
                              "start": 4019,
                              "end": 4020
                            },
                            "start": 4017,
                            "end": 4020
                          },
                          "start": 4015,
                          "end": 4020
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
                            "start": 4025,
                            "end": 4026
                          },
                          "typeArguments": null,
                          "start": 4025,
                          "end": 4026
                        },
                        "start": 4022,
                        "end": 4026
                      },
                      "start": 4001,
                      "end": 4026
                    },
                    "start": 3999,
                    "end": 4026
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3997,
                  "end": 4027
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
                    "start": 4036,
                    "end": 4038
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
                              "start": 4045,
                              "end": 4046
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4045,
                            "end": 4046
                          }
                        ],
                        "start": 4044,
                        "end": 4047
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
                                "start": 4052,
                                "end": 4053
                              },
                              "typeArguments": null,
                              "start": 4052,
                              "end": 4053
                            },
                            "start": 4050,
                            "end": 4053
                          },
                          "start": 4048,
                          "end": 4053
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
                                "start": 4059,
                                "end": 4060
                              },
                              "typeArguments": null,
                              "start": 4059,
                              "end": 4060
                            },
                            "start": 4057,
                            "end": 4060
                          },
                          "start": 4055,
                          "end": 4060
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
                            "start": 4065,
                            "end": 4066
                          },
                          "typeArguments": null,
                          "start": 4065,
                          "end": 4066
                        },
                        "start": 4062,
                        "end": 4066
                      },
                      "start": 4040,
                      "end": 4066
                    },
                    "start": 4038,
                    "end": 4066
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4036,
                  "end": 4067
                }
              ],
              "start": 3895,
              "end": 4073
            },
            "declare": false,
            "start": 3879,
            "end": 4073
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4107,
              "end": 4109
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
                  "start": 4118,
                  "end": 4123
                },
                "typeArguments": null,
                "start": 4118,
                "end": 4123
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
                    "start": 4134,
                    "end": 4135
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
                              "start": 4142,
                              "end": 4143
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4142,
                            "end": 4143
                          }
                        ],
                        "start": 4141,
                        "end": 4144
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
                            "start": 4150,
                            "end": 4151
                          },
                          "typeArguments": null,
                          "start": 4150,
                          "end": 4151
                        },
                        "start": 4147,
                        "end": 4151
                      },
                      "start": 4137,
                      "end": 4151
                    },
                    "start": 4135,
                    "end": 4151
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4134,
                  "end": 4152
                }
              ],
              "start": 4124,
              "end": 4196
            },
            "declare": false,
            "start": 4097,
            "end": 4196
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4212,
              "end": 4214
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
                  "start": 4223,
                  "end": 4228
                },
                "typeArguments": null,
                "start": 4223,
                "end": 4228
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
                    "start": 4239,
                    "end": 4240
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
                              "start": 4247,
                              "end": 4248
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4247,
                            "end": 4248
                          }
                        ],
                        "start": 4246,
                        "end": 4249
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
                                "start": 4254,
                                "end": 4255
                              },
                              "typeArguments": null,
                              "start": 4254,
                              "end": 4255
                            },
                            "start": 4252,
                            "end": 4255
                          },
                          "start": 4250,
                          "end": 4255
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
                            "start": 4260,
                            "end": 4261
                          },
                          "typeArguments": null,
                          "start": 4260,
                          "end": 4261
                        },
                        "start": 4257,
                        "end": 4261
                      },
                      "start": 4242,
                      "end": 4261
                    },
                    "start": 4240,
                    "end": 4261
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4239,
                  "end": 4262
                }
              ],
              "start": 4229,
              "end": 4363
            },
            "declare": false,
            "start": 4202,
            "end": 4363
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4379,
              "end": 4381
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
                  "start": 4390,
                  "end": 4395
                },
                "typeArguments": null,
                "start": 4390,
                "end": 4395
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
                    "start": 4406,
                    "end": 4407
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
                              "start": 4414,
                              "end": 4415
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4414,
                            "end": 4415
                          }
                        ],
                        "start": 4413,
                        "end": 4416
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
                                "start": 4420,
                                "end": 4421
                              },
                              "typeArguments": null,
                              "start": 4420,
                              "end": 4421
                            },
                            "start": 4418,
                            "end": 4421
                          },
                          "start": 4417,
                          "end": 4421
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
                            "start": 4426,
                            "end": 4427
                          },
                          "typeArguments": null,
                          "start": 4426,
                          "end": 4427
                        },
                        "start": 4423,
                        "end": 4427
                      },
                      "start": 4409,
                      "end": 4427
                    },
                    "start": 4407,
                    "end": 4427
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4406,
                  "end": 4428
                }
              ],
              "start": 4396,
              "end": 4529
            },
            "declare": false,
            "start": 4369,
            "end": 4529
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4546,
              "end": 4548
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
                  "start": 4557,
                  "end": 4562
                },
                "typeArguments": null,
                "start": 4557,
                "end": 4562
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
                    "start": 4573,
                    "end": 4575
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
                              "start": 4582,
                              "end": 4583
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4582,
                            "end": 4583
                          }
                        ],
                        "start": 4581,
                        "end": 4584
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
                            "start": 4590,
                            "end": 4591
                          },
                          "typeArguments": null,
                          "start": 4590,
                          "end": 4591
                        },
                        "start": 4587,
                        "end": 4591
                      },
                      "start": 4577,
                      "end": 4591
                    },
                    "start": 4575,
                    "end": 4591
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4573,
                  "end": 4592
                }
              ],
              "start": 4563,
              "end": 4693
            },
            "declare": false,
            "start": 4536,
            "end": 4693
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 4709,
              "end": 4711
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
                  "start": 4720,
                  "end": 4725
                },
                "typeArguments": null,
                "start": 4720,
                "end": 4725
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
                    "start": 4736,
                    "end": 4738
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
                              "start": 4745,
                              "end": 4746
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4745,
                            "end": 4746
                          }
                        ],
                        "start": 4744,
                        "end": 4747
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
                                "start": 4752,
                                "end": 4753
                              },
                              "typeArguments": null,
                              "start": 4752,
                              "end": 4753
                            },
                            "start": 4750,
                            "end": 4753
                          },
                          "start": 4748,
                          "end": 4753
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
                            "start": 4758,
                            "end": 4759
                          },
                          "typeArguments": null,
                          "start": 4758,
                          "end": 4759
                        },
                        "start": 4755,
                        "end": 4759
                      },
                      "start": 4740,
                      "end": 4759
                    },
                    "start": 4738,
                    "end": 4759
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4736,
                  "end": 4760
                }
              ],
              "start": 4726,
              "end": 4783
            },
            "declare": false,
            "start": 4699,
            "end": 4783
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 4799,
              "end": 4801
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
                  "start": 4810,
                  "end": 4815
                },
                "typeArguments": null,
                "start": 4810,
                "end": 4815
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
                    "start": 4826,
                    "end": 4828
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
                              "start": 4835,
                              "end": 4836
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4835,
                            "end": 4836
                          }
                        ],
                        "start": 4834,
                        "end": 4837
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
                                "start": 4841,
                                "end": 4842
                              },
                              "typeArguments": null,
                              "start": 4841,
                              "end": 4842
                            },
                            "start": 4839,
                            "end": 4842
                          },
                          "start": 4838,
                          "end": 4842
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
                            "start": 4847,
                            "end": 4848
                          },
                          "typeArguments": null,
                          "start": 4847,
                          "end": 4848
                        },
                        "start": 4844,
                        "end": 4848
                      },
                      "start": 4830,
                      "end": 4848
                    },
                    "start": 4828,
                    "end": 4848
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4826,
                  "end": 4849
                }
              ],
              "start": 4816,
              "end": 4884
            },
            "declare": false,
            "start": 4789,
            "end": 4884
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 4901,
              "end": 4903
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
                  "start": 4912,
                  "end": 4917
                },
                "typeArguments": null,
                "start": 4912,
                "end": 4917
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
                    "start": 4928,
                    "end": 4930
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
                              "start": 4937,
                              "end": 4938
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4937,
                            "end": 4938
                          }
                        ],
                        "start": 4936,
                        "end": 4939
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
                            "start": 4945,
                            "end": 4946
                          },
                          "typeArguments": null,
                          "start": 4945,
                          "end": 4946
                        },
                        "start": 4942,
                        "end": 4946
                      },
                      "start": 4932,
                      "end": 4946
                    },
                    "start": 4930,
                    "end": 4946
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4928,
                  "end": 4947
                }
              ],
              "start": 4918,
              "end": 4982
            },
            "declare": false,
            "start": 4891,
            "end": 4982
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 4998,
              "end": 5000
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
                  "start": 5009,
                  "end": 5014
                },
                "typeArguments": null,
                "start": 5009,
                "end": 5014
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
                    "start": 5025,
                    "end": 5027
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
                              "start": 5034,
                              "end": 5035
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5034,
                            "end": 5035
                          }
                        ],
                        "start": 5033,
                        "end": 5036
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
                                "start": 5041,
                                "end": 5042
                              },
                              "typeArguments": null,
                              "start": 5041,
                              "end": 5042
                            },
                            "start": 5039,
                            "end": 5042
                          },
                          "start": 5037,
                          "end": 5042
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
                            "start": 5047,
                            "end": 5048
                          },
                          "typeArguments": null,
                          "start": 5047,
                          "end": 5048
                        },
                        "start": 5044,
                        "end": 5048
                      },
                      "start": 5029,
                      "end": 5048
                    },
                    "start": 5027,
                    "end": 5048
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5025,
                  "end": 5049
                }
              ],
              "start": 5015,
              "end": 5127
            },
            "declare": false,
            "start": 4988,
            "end": 5127
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 5143,
              "end": 5145
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
                  "start": 5154,
                  "end": 5159
                },
                "typeArguments": null,
                "start": 5154,
                "end": 5159
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
                    "start": 5170,
                    "end": 5172
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
                              "start": 5179,
                              "end": 5180
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5179,
                            "end": 5180
                          }
                        ],
                        "start": 5178,
                        "end": 5181
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
                                "start": 5185,
                                "end": 5186
                              },
                              "typeArguments": null,
                              "start": 5185,
                              "end": 5186
                            },
                            "start": 5183,
                            "end": 5186
                          },
                          "start": 5182,
                          "end": 5186
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
                            "start": 5191,
                            "end": 5192
                          },
                          "typeArguments": null,
                          "start": 5191,
                          "end": 5192
                        },
                        "start": 5188,
                        "end": 5192
                      },
                      "start": 5174,
                      "end": 5192
                    },
                    "start": 5172,
                    "end": 5192
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5170,
                  "end": 5193
                }
              ],
              "start": 5160,
              "end": 5248
            },
            "declare": false,
            "start": 5133,
            "end": 5248
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 5264,
              "end": 5267
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
                  "start": 5276,
                  "end": 5281
                },
                "typeArguments": null,
                "start": 5276,
                "end": 5281
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
                    "start": 5292,
                    "end": 5294
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
                              "start": 5301,
                              "end": 5302
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5301,
                            "end": 5302
                          }
                        ],
                        "start": 5300,
                        "end": 5303
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
                                "start": 5307,
                                "end": 5308
                              },
                              "typeArguments": null,
                              "start": 5307,
                              "end": 5308
                            },
                            "start": 5305,
                            "end": 5308
                          },
                          "start": 5304,
                          "end": 5308
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
                                "start": 5313,
                                "end": 5314
                              },
                              "typeArguments": null,
                              "start": 5313,
                              "end": 5314
                            },
                            "start": 5311,
                            "end": 5314
                          },
                          "start": 5310,
                          "end": 5314
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
                            "start": 5319,
                            "end": 5320
                          },
                          "typeArguments": null,
                          "start": 5319,
                          "end": 5320
                        },
                        "start": 5316,
                        "end": 5320
                      },
                      "start": 5296,
                      "end": 5320
                    },
                    "start": 5294,
                    "end": 5320
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5292,
                  "end": 5321
                }
              ],
              "start": 5282,
              "end": 5363
            },
            "declare": false,
            "start": 5254,
            "end": 5363
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5380,
              "end": 5383
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
                  "start": 5392,
                  "end": 5397
                },
                "typeArguments": null,
                "start": 5392,
                "end": 5397
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
                    "start": 5408,
                    "end": 5410
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
                              "start": 5417,
                              "end": 5418
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5417,
                            "end": 5418
                          }
                        ],
                        "start": 5416,
                        "end": 5419
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
                            "start": 5425,
                            "end": 5426
                          },
                          "typeArguments": null,
                          "start": 5425,
                          "end": 5426
                        },
                        "start": 5422,
                        "end": 5426
                      },
                      "start": 5412,
                      "end": 5426
                    },
                    "start": 5410,
                    "end": 5426
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5408,
                  "end": 5427
                }
              ],
              "start": 5398,
              "end": 5528
            },
            "declare": false,
            "start": 5370,
            "end": 5528
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5544,
              "end": 5547
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
                  "start": 5556,
                  "end": 5561
                },
                "typeArguments": null,
                "start": 5556,
                "end": 5561
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
                    "start": 5572,
                    "end": 5574
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
                              "start": 5581,
                              "end": 5582
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5581,
                            "end": 5582
                          }
                        ],
                        "start": 5580,
                        "end": 5583
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
                                "start": 5588,
                                "end": 5589
                              },
                              "typeArguments": null,
                              "start": 5588,
                              "end": 5589
                            },
                            "start": 5586,
                            "end": 5589
                          },
                          "start": 5584,
                          "end": 5589
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
                                "start": 5595,
                                "end": 5596
                              },
                              "typeArguments": null,
                              "start": 5595,
                              "end": 5596
                            },
                            "start": 5593,
                            "end": 5596
                          },
                          "start": 5591,
                          "end": 5596
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
                            "start": 5601,
                            "end": 5602
                          },
                          "typeArguments": null,
                          "start": 5601,
                          "end": 5602
                        },
                        "start": 5598,
                        "end": 5602
                      },
                      "start": 5576,
                      "end": 5602
                    },
                    "start": 5574,
                    "end": 5602
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5572,
                  "end": 5603
                }
              ],
              "start": 5562,
              "end": 5638
            },
            "declare": false,
            "start": 5534,
            "end": 5638
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5654,
              "end": 5657
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
                  "start": 5666,
                  "end": 5671
                },
                "typeArguments": null,
                "start": 5666,
                "end": 5671
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
                    "start": 5682,
                    "end": 5684
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
                              "start": 5691,
                              "end": 5692
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5691,
                            "end": 5692
                          }
                        ],
                        "start": 5690,
                        "end": 5693
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
                                "start": 5697,
                                "end": 5698
                              },
                              "typeArguments": null,
                              "start": 5697,
                              "end": 5698
                            },
                            "start": 5695,
                            "end": 5698
                          },
                          "start": 5694,
                          "end": 5698
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
                            "start": 5703,
                            "end": 5704
                          },
                          "typeArguments": null,
                          "start": 5703,
                          "end": 5704
                        },
                        "start": 5700,
                        "end": 5704
                      },
                      "start": 5686,
                      "end": 5704
                    },
                    "start": 5684,
                    "end": 5704
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5682,
                  "end": 5705
                }
              ],
              "start": 5672,
              "end": 5744
            },
            "declare": false,
            "start": 5644,
            "end": 5744
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5760,
              "end": 5763
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
                  "start": 5772,
                  "end": 5777
                },
                "typeArguments": null,
                "start": 5772,
                "end": 5777
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
                    "start": 5788,
                    "end": 5790
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
                              "start": 5797,
                              "end": 5798
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5797,
                            "end": 5798
                          }
                        ],
                        "start": 5796,
                        "end": 5799
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
                                "start": 5803,
                                "end": 5804
                              },
                              "typeArguments": null,
                              "start": 5803,
                              "end": 5804
                            },
                            "start": 5801,
                            "end": 5804
                          },
                          "start": 5800,
                          "end": 5804
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
                                "start": 5809,
                                "end": 5810
                              },
                              "typeArguments": null,
                              "start": 5809,
                              "end": 5810
                            },
                            "start": 5807,
                            "end": 5810
                          },
                          "start": 5806,
                          "end": 5810
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
                            "start": 5815,
                            "end": 5816
                          },
                          "typeArguments": null,
                          "start": 5815,
                          "end": 5816
                        },
                        "start": 5812,
                        "end": 5816
                      },
                      "start": 5792,
                      "end": 5816
                    },
                    "start": 5790,
                    "end": 5816
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5788,
                  "end": 5817
                }
              ],
              "start": 5778,
              "end": 5853
            },
            "declare": false,
            "start": 5750,
            "end": 5853
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5870,
              "end": 5873
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
                  "start": 5882,
                  "end": 5887
                },
                "typeArguments": null,
                "start": 5882,
                "end": 5887
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
                    "start": 5898,
                    "end": 5900
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
                              "start": 5907,
                              "end": 5908
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5907,
                            "end": 5908
                          }
                        ],
                        "start": 5906,
                        "end": 5909
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
                            "start": 5915,
                            "end": 5916
                          },
                          "typeArguments": null,
                          "start": 5915,
                          "end": 5916
                        },
                        "start": 5912,
                        "end": 5916
                      },
                      "start": 5902,
                      "end": 5916
                    },
                    "start": 5900,
                    "end": 5916
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5898,
                  "end": 5917
                }
              ],
              "start": 5888,
              "end": 6018
            },
            "declare": false,
            "start": 5860,
            "end": 6018
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 6034,
              "end": 6037
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
                  "start": 6046,
                  "end": 6051
                },
                "typeArguments": null,
                "start": 6046,
                "end": 6051
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
                    "start": 6062,
                    "end": 6064
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
                              "start": 6071,
                              "end": 6072
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6071,
                            "end": 6072
                          }
                        ],
                        "start": 6070,
                        "end": 6073
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
                                "start": 6078,
                                "end": 6079
                              },
                              "typeArguments": null,
                              "start": 6078,
                              "end": 6079
                            },
                            "start": 6076,
                            "end": 6079
                          },
                          "start": 6074,
                          "end": 6079
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
                                "start": 6085,
                                "end": 6086
                              },
                              "typeArguments": null,
                              "start": 6085,
                              "end": 6086
                            },
                            "start": 6083,
                            "end": 6086
                          },
                          "start": 6081,
                          "end": 6086
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
                            "start": 6091,
                            "end": 6092
                          },
                          "typeArguments": null,
                          "start": 6091,
                          "end": 6092
                        },
                        "start": 6088,
                        "end": 6092
                      },
                      "start": 6066,
                      "end": 6092
                    },
                    "start": 6064,
                    "end": 6092
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6062,
                  "end": 6093
                }
              ],
              "start": 6052,
              "end": 6128
            },
            "declare": false,
            "start": 6024,
            "end": 6128
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 6144,
              "end": 6147
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
                  "start": 6156,
                  "end": 6161
                },
                "typeArguments": null,
                "start": 6156,
                "end": 6161
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
                    "start": 6172,
                    "end": 6174
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
                              "start": 6181,
                              "end": 6182
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6181,
                            "end": 6182
                          }
                        ],
                        "start": 6180,
                        "end": 6183
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
                                "start": 6187,
                                "end": 6188
                              },
                              "typeArguments": null,
                              "start": 6187,
                              "end": 6188
                            },
                            "start": 6185,
                            "end": 6188
                          },
                          "start": 6184,
                          "end": 6188
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
                            "start": 6193,
                            "end": 6194
                          },
                          "typeArguments": null,
                          "start": 6193,
                          "end": 6194
                        },
                        "start": 6190,
                        "end": 6194
                      },
                      "start": 6176,
                      "end": 6194
                    },
                    "start": 6174,
                    "end": 6194
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6172,
                  "end": 6195
                }
              ],
              "start": 6162,
              "end": 6233
            },
            "declare": false,
            "start": 6134,
            "end": 6233
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 6249,
              "end": 6252
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
                  "start": 6261,
                  "end": 6266
                },
                "typeArguments": null,
                "start": 6261,
                "end": 6266
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
                    "start": 6277,
                    "end": 6279
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
                              "start": 6286,
                              "end": 6287
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6286,
                            "end": 6287
                          }
                        ],
                        "start": 6285,
                        "end": 6288
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
                                "start": 6292,
                                "end": 6293
                              },
                              "typeArguments": null,
                              "start": 6292,
                              "end": 6293
                            },
                            "start": 6290,
                            "end": 6293
                          },
                          "start": 6289,
                          "end": 6293
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
                                "start": 6298,
                                "end": 6299
                              },
                              "typeArguments": null,
                              "start": 6298,
                              "end": 6299
                            },
                            "start": 6296,
                            "end": 6299
                          },
                          "start": 6295,
                          "end": 6299
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
                            "start": 6304,
                            "end": 6305
                          },
                          "typeArguments": null,
                          "start": 6304,
                          "end": 6305
                        },
                        "start": 6301,
                        "end": 6305
                      },
                      "start": 6281,
                      "end": 6305
                    },
                    "start": 6279,
                    "end": 6305
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6277,
                  "end": 6306
                }
              ],
              "start": 6267,
              "end": 6342
            },
            "declare": false,
            "start": 6239,
            "end": 6342
          }
        ],
        "start": 3872,
        "end": 6344
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3842,
      "end": 6344
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6344
}
```
