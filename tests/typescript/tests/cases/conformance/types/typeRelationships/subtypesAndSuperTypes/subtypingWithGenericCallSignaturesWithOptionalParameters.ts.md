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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 167,
                            "end": 168
                          },
                          "typeArguments": null,
                          "start": 167,
                          "end": 168
                        },
                        "start": 164,
                        "end": 168
                      },
                      "start": 161,
                      "end": 168
                    },
                    "start": 159,
                    "end": 168
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 158,
                  "end": 169
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
                    "start": 178,
                    "end": 180
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
                                "start": 187,
                                "end": 188
                              },
                              "typeArguments": null,
                              "start": 187,
                              "end": 188
                            },
                            "start": 185,
                            "end": 188
                          },
                          "start": 183,
                          "end": 188
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
                            "start": 193,
                            "end": 194
                          },
                          "typeArguments": null,
                          "start": 193,
                          "end": 194
                        },
                        "start": 190,
                        "end": 194
                      },
                      "start": 182,
                      "end": 194
                    },
                    "start": 180,
                    "end": 194
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 178,
                  "end": 195
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
                    "start": 204,
                    "end": 206
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
                                "start": 212,
                                "end": 213
                              },
                              "typeArguments": null,
                              "start": 212,
                              "end": 213
                            },
                            "start": 210,
                            "end": 213
                          },
                          "start": 209,
                          "end": 213
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
                            "start": 218,
                            "end": 219
                          },
                          "typeArguments": null,
                          "start": 218,
                          "end": 219
                        },
                        "start": 215,
                        "end": 219
                      },
                      "start": 208,
                      "end": 219
                    },
                    "start": 206,
                    "end": 219
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 204,
                  "end": 220
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
                    "start": 229,
                    "end": 231
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
                                "start": 237,
                                "end": 238
                              },
                              "typeArguments": null,
                              "start": 237,
                              "end": 238
                            },
                            "start": 235,
                            "end": 238
                          },
                          "start": 234,
                          "end": 238
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
                                "start": 244,
                                "end": 245
                              },
                              "typeArguments": null,
                              "start": 244,
                              "end": 245
                            },
                            "start": 242,
                            "end": 245
                          },
                          "start": 240,
                          "end": 245
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
                            "start": 250,
                            "end": 251
                          },
                          "typeArguments": null,
                          "start": 250,
                          "end": 251
                        },
                        "start": 247,
                        "end": 251
                      },
                      "start": 233,
                      "end": 251
                    },
                    "start": 231,
                    "end": 251
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 229,
                  "end": 252
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
                    "start": 261,
                    "end": 263
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
                                "start": 270,
                                "end": 271
                              },
                              "typeArguments": null,
                              "start": 270,
                              "end": 271
                            },
                            "start": 268,
                            "end": 271
                          },
                          "start": 266,
                          "end": 271
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
                                "start": 277,
                                "end": 278
                              },
                              "typeArguments": null,
                              "start": 277,
                              "end": 278
                            },
                            "start": 275,
                            "end": 278
                          },
                          "start": 273,
                          "end": 278
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
                            "start": 283,
                            "end": 284
                          },
                          "typeArguments": null,
                          "start": 283,
                          "end": 284
                        },
                        "start": 280,
                        "end": 284
                      },
                      "start": 265,
                      "end": 284
                    },
                    "start": 263,
                    "end": 284
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 261,
                  "end": 285
                }
              ],
              "start": 148,
              "end": 291
            },
            "declare": false,
            "start": 130,
            "end": 291
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 309
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
                    "start": 310,
                    "end": 311
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 310,
                  "end": 311
                }
              ],
              "start": 309,
              "end": 312
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
                  "start": 321,
                  "end": 325
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
                        "start": 326,
                        "end": 327
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 327
                    }
                  ],
                  "start": 325,
                  "end": 328
                },
                "start": 321,
                "end": 328
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
                    "start": 339,
                    "end": 340
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 349
                          },
                          "typeArguments": null,
                          "start": 348,
                          "end": 349
                        },
                        "start": 345,
                        "end": 349
                      },
                      "start": 342,
                      "end": 349
                    },
                    "start": 340,
                    "end": 349
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 339,
                  "end": 350
                }
              ],
              "start": 329,
              "end": 389
            },
            "declare": false,
            "start": 297,
            "end": 389
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 405,
              "end": 407
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
                    "start": 408,
                    "end": 409
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 408,
                  "end": 409
                }
              ],
              "start": 407,
              "end": 410
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
                  "start": 419,
                  "end": 423
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
                        "start": 424,
                        "end": 425
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 425
                    }
                  ],
                  "start": 423,
                  "end": 426
                },
                "start": 419,
                "end": 426
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
                    "start": 437,
                    "end": 438
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
                                "start": 445,
                                "end": 446
                              },
                              "typeArguments": null,
                              "start": 445,
                              "end": 446
                            },
                            "start": 443,
                            "end": 446
                          },
                          "start": 441,
                          "end": 446
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
                            "start": 451,
                            "end": 452
                          },
                          "typeArguments": null,
                          "start": 451,
                          "end": 452
                        },
                        "start": 448,
                        "end": 452
                      },
                      "start": 440,
                      "end": 452
                    },
                    "start": 438,
                    "end": 452
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 437,
                  "end": 453
                }
              ],
              "start": 427,
              "end": 492
            },
            "declare": false,
            "start": 395,
            "end": 492
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 508,
              "end": 510
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
                    "start": 511,
                    "end": 512
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 511,
                  "end": 512
                }
              ],
              "start": 510,
              "end": 513
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
                  "start": 522,
                  "end": 526
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
                        "start": 527,
                        "end": 528
                      },
                      "typeArguments": null,
                      "start": 527,
                      "end": 528
                    }
                  ],
                  "start": 526,
                  "end": 529
                },
                "start": 522,
                "end": 529
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
                    "start": 540,
                    "end": 541
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
                                "start": 547,
                                "end": 548
                              },
                              "typeArguments": null,
                              "start": 547,
                              "end": 548
                            },
                            "start": 545,
                            "end": 548
                          },
                          "start": 544,
                          "end": 548
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
                            "start": 553,
                            "end": 554
                          },
                          "typeArguments": null,
                          "start": 553,
                          "end": 554
                        },
                        "start": 550,
                        "end": 554
                      },
                      "start": 543,
                      "end": 554
                    },
                    "start": 541,
                    "end": 554
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 540,
                  "end": 555
                }
              ],
              "start": 530,
              "end": 596
            },
            "declare": false,
            "start": 498,
            "end": 596
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 613,
              "end": 615
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
                    "start": 616,
                    "end": 617
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 616,
                  "end": 617
                }
              ],
              "start": 615,
              "end": 618
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
                  "start": 627,
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
                "start": 627,
                "end": 634
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
                    "start": 645,
                    "end": 647
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 655,
                            "end": 656
                          },
                          "typeArguments": null,
                          "start": 655,
                          "end": 656
                        },
                        "start": 652,
                        "end": 656
                      },
                      "start": 649,
                      "end": 656
                    },
                    "start": 647,
                    "end": 656
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 645,
                  "end": 657
                }
              ],
              "start": 635,
              "end": 696
            },
            "declare": false,
            "start": 603,
            "end": 696
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 714
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
                    "start": 715,
                    "end": 716
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 715,
                  "end": 716
                }
              ],
              "start": 714,
              "end": 717
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
                  "start": 726,
                  "end": 730
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
                        "start": 731,
                        "end": 732
                      },
                      "typeArguments": null,
                      "start": 731,
                      "end": 732
                    }
                  ],
                  "start": 730,
                  "end": 733
                },
                "start": 726,
                "end": 733
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
                    "start": 744,
                    "end": 746
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
                                "start": 753,
                                "end": 754
                              },
                              "typeArguments": null,
                              "start": 753,
                              "end": 754
                            },
                            "start": 751,
                            "end": 754
                          },
                          "start": 749,
                          "end": 754
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
                            "start": 759,
                            "end": 760
                          },
                          "typeArguments": null,
                          "start": 759,
                          "end": 760
                        },
                        "start": 756,
                        "end": 760
                      },
                      "start": 748,
                      "end": 760
                    },
                    "start": 746,
                    "end": 760
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 744,
                  "end": 761
                }
              ],
              "start": 734,
              "end": 800
            },
            "declare": false,
            "start": 702,
            "end": 800
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 818
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
                    "start": 819,
                    "end": 820
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 819,
                  "end": 820
                }
              ],
              "start": 818,
              "end": 821
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
                  "start": 830,
                  "end": 834
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
                        "start": 835,
                        "end": 836
                      },
                      "typeArguments": null,
                      "start": 835,
                      "end": 836
                    }
                  ],
                  "start": 834,
                  "end": 837
                },
                "start": 830,
                "end": 837
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
                    "start": 848,
                    "end": 850
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
                                "start": 856,
                                "end": 857
                              },
                              "typeArguments": null,
                              "start": 856,
                              "end": 857
                            },
                            "start": 854,
                            "end": 857
                          },
                          "start": 853,
                          "end": 857
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
                            "start": 862,
                            "end": 863
                          },
                          "typeArguments": null,
                          "start": 862,
                          "end": 863
                        },
                        "start": 859,
                        "end": 863
                      },
                      "start": 852,
                      "end": 863
                    },
                    "start": 850,
                    "end": 863
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 848,
                  "end": 864
                }
              ],
              "start": 838,
              "end": 899
            },
            "declare": false,
            "start": 806,
            "end": 899
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 916,
              "end": 918
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
                    "start": 919,
                    "end": 920
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 919,
                  "end": 920
                }
              ],
              "start": 918,
              "end": 921
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
                  "start": 930,
                  "end": 934
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
                        "start": 935,
                        "end": 936
                      },
                      "typeArguments": null,
                      "start": 935,
                      "end": 936
                    }
                  ],
                  "start": 934,
                  "end": 937
                },
                "start": 930,
                "end": 937
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
                    "start": 948,
                    "end": 950
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 958,
                            "end": 959
                          },
                          "typeArguments": null,
                          "start": 958,
                          "end": 959
                        },
                        "start": 955,
                        "end": 959
                      },
                      "start": 952,
                      "end": 959
                    },
                    "start": 950,
                    "end": 959
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 948,
                  "end": 960
                }
              ],
              "start": 938,
              "end": 995
            },
            "declare": false,
            "start": 906,
            "end": 995
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1013
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
                    "start": 1014,
                    "end": 1015
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1014,
                  "end": 1015
                }
              ],
              "start": 1013,
              "end": 1016
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
                  "start": 1025,
                  "end": 1029
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
                        "start": 1030,
                        "end": 1031
                      },
                      "typeArguments": null,
                      "start": 1030,
                      "end": 1031
                    }
                  ],
                  "start": 1029,
                  "end": 1032
                },
                "start": 1025,
                "end": 1032
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
                    "start": 1043,
                    "end": 1045
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
                                "start": 1052,
                                "end": 1053
                              },
                              "typeArguments": null,
                              "start": 1052,
                              "end": 1053
                            },
                            "start": 1050,
                            "end": 1053
                          },
                          "start": 1048,
                          "end": 1053
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
                            "start": 1058,
                            "end": 1059
                          },
                          "typeArguments": null,
                          "start": 1058,
                          "end": 1059
                        },
                        "start": 1055,
                        "end": 1059
                      },
                      "start": 1047,
                      "end": 1059
                    },
                    "start": 1045,
                    "end": 1059
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1043,
                  "end": 1060
                }
              ],
              "start": 1033,
              "end": 1095
            },
            "declare": false,
            "start": 1001,
            "end": 1095
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1111,
              "end": 1113
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
                    "start": 1114,
                    "end": 1115
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1114,
                  "end": 1115
                }
              ],
              "start": 1113,
              "end": 1116
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
                  "start": 1125,
                  "end": 1129
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
                        "start": 1130,
                        "end": 1131
                      },
                      "typeArguments": null,
                      "start": 1130,
                      "end": 1131
                    }
                  ],
                  "start": 1129,
                  "end": 1132
                },
                "start": 1125,
                "end": 1132
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
                    "start": 1143,
                    "end": 1145
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
                                "start": 1151,
                                "end": 1152
                              },
                              "typeArguments": null,
                              "start": 1151,
                              "end": 1152
                            },
                            "start": 1149,
                            "end": 1152
                          },
                          "start": 1148,
                          "end": 1152
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
                            "start": 1157,
                            "end": 1158
                          },
                          "typeArguments": null,
                          "start": 1157,
                          "end": 1158
                        },
                        "start": 1154,
                        "end": 1158
                      },
                      "start": 1147,
                      "end": 1158
                    },
                    "start": 1145,
                    "end": 1158
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1143,
                  "end": 1159
                }
              ],
              "start": 1133,
              "end": 1198
            },
            "declare": false,
            "start": 1101,
            "end": 1198
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1214,
              "end": 1217
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
                    "start": 1218,
                    "end": 1219
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1218,
                  "end": 1219
                }
              ],
              "start": 1217,
              "end": 1220
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
                  "start": 1229,
                  "end": 1233
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
                        "start": 1234,
                        "end": 1235
                      },
                      "typeArguments": null,
                      "start": 1234,
                      "end": 1235
                    }
                  ],
                  "start": 1233,
                  "end": 1236
                },
                "start": 1229,
                "end": 1236
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
                    "start": 1247,
                    "end": 1249
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
                                "start": 1255,
                                "end": 1256
                              },
                              "typeArguments": null,
                              "start": 1255,
                              "end": 1256
                            },
                            "start": 1253,
                            "end": 1256
                          },
                          "start": 1252,
                          "end": 1256
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
                                "start": 1261,
                                "end": 1262
                              },
                              "typeArguments": null,
                              "start": 1261,
                              "end": 1262
                            },
                            "start": 1259,
                            "end": 1262
                          },
                          "start": 1258,
                          "end": 1262
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
                            "start": 1267,
                            "end": 1268
                          },
                          "typeArguments": null,
                          "start": 1267,
                          "end": 1268
                        },
                        "start": 1264,
                        "end": 1268
                      },
                      "start": 1251,
                      "end": 1268
                    },
                    "start": 1249,
                    "end": 1268
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1247,
                  "end": 1269
                }
              ],
              "start": 1237,
              "end": 1311
            },
            "declare": false,
            "start": 1204,
            "end": 1311
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1328,
              "end": 1331
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
                    "start": 1332,
                    "end": 1333
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1332,
                  "end": 1333
                }
              ],
              "start": 1331,
              "end": 1334
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
                  "start": 1343,
                  "end": 1347
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
                        "start": 1348,
                        "end": 1349
                      },
                      "typeArguments": null,
                      "start": 1348,
                      "end": 1349
                    }
                  ],
                  "start": 1347,
                  "end": 1350
                },
                "start": 1343,
                "end": 1350
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
                    "start": 1361,
                    "end": 1363
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1371,
                            "end": 1372
                          },
                          "typeArguments": null,
                          "start": 1371,
                          "end": 1372
                        },
                        "start": 1368,
                        "end": 1372
                      },
                      "start": 1365,
                      "end": 1372
                    },
                    "start": 1363,
                    "end": 1372
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1361,
                  "end": 1373
                }
              ],
              "start": 1351,
              "end": 1408
            },
            "declare": false,
            "start": 1318,
            "end": 1408
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1427
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
                    "start": 1428,
                    "end": 1429
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1428,
                  "end": 1429
                }
              ],
              "start": 1427,
              "end": 1430
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
                  "start": 1439,
                  "end": 1443
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
                        "start": 1444,
                        "end": 1445
                      },
                      "typeArguments": null,
                      "start": 1444,
                      "end": 1445
                    }
                  ],
                  "start": 1443,
                  "end": 1446
                },
                "start": 1439,
                "end": 1446
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
                    "start": 1457,
                    "end": 1459
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
                                "start": 1466,
                                "end": 1467
                              },
                              "typeArguments": null,
                              "start": 1466,
                              "end": 1467
                            },
                            "start": 1464,
                            "end": 1467
                          },
                          "start": 1462,
                          "end": 1467
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
                                "start": 1473,
                                "end": 1474
                              },
                              "typeArguments": null,
                              "start": 1473,
                              "end": 1474
                            },
                            "start": 1471,
                            "end": 1474
                          },
                          "start": 1469,
                          "end": 1474
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
                            "start": 1479,
                            "end": 1480
                          },
                          "typeArguments": null,
                          "start": 1479,
                          "end": 1480
                        },
                        "start": 1476,
                        "end": 1480
                      },
                      "start": 1461,
                      "end": 1480
                    },
                    "start": 1459,
                    "end": 1480
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1457,
                  "end": 1481
                }
              ],
              "start": 1447,
              "end": 1516
            },
            "declare": false,
            "start": 1414,
            "end": 1516
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1532,
              "end": 1535
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
                    "start": 1536,
                    "end": 1537
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1536,
                  "end": 1537
                }
              ],
              "start": 1535,
              "end": 1538
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
                  "start": 1547,
                  "end": 1551
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
                        "start": 1552,
                        "end": 1553
                      },
                      "typeArguments": null,
                      "start": 1552,
                      "end": 1553
                    }
                  ],
                  "start": 1551,
                  "end": 1554
                },
                "start": 1547,
                "end": 1554
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
                    "start": 1565,
                    "end": 1567
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
                                "start": 1573,
                                "end": 1574
                              },
                              "typeArguments": null,
                              "start": 1573,
                              "end": 1574
                            },
                            "start": 1571,
                            "end": 1574
                          },
                          "start": 1570,
                          "end": 1574
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
                            "start": 1579,
                            "end": 1580
                          },
                          "typeArguments": null,
                          "start": 1579,
                          "end": 1580
                        },
                        "start": 1576,
                        "end": 1580
                      },
                      "start": 1569,
                      "end": 1580
                    },
                    "start": 1567,
                    "end": 1580
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1565,
                  "end": 1581
                }
              ],
              "start": 1555,
              "end": 1620
            },
            "declare": false,
            "start": 1522,
            "end": 1620
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1636,
              "end": 1639
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
                    "start": 1640,
                    "end": 1641
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1640,
                  "end": 1641
                }
              ],
              "start": 1639,
              "end": 1642
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
                  "start": 1651,
                  "end": 1655
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
                        "start": 1656,
                        "end": 1657
                      },
                      "typeArguments": null,
                      "start": 1656,
                      "end": 1657
                    }
                  ],
                  "start": 1655,
                  "end": 1658
                },
                "start": 1651,
                "end": 1658
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
                    "start": 1669,
                    "end": 1671
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
                                "start": 1677,
                                "end": 1678
                              },
                              "typeArguments": null,
                              "start": 1677,
                              "end": 1678
                            },
                            "start": 1675,
                            "end": 1678
                          },
                          "start": 1674,
                          "end": 1678
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
                                "start": 1683,
                                "end": 1684
                              },
                              "typeArguments": null,
                              "start": 1683,
                              "end": 1684
                            },
                            "start": 1681,
                            "end": 1684
                          },
                          "start": 1680,
                          "end": 1684
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
                            "start": 1689,
                            "end": 1690
                          },
                          "typeArguments": null,
                          "start": 1689,
                          "end": 1690
                        },
                        "start": 1686,
                        "end": 1690
                      },
                      "start": 1673,
                      "end": 1690
                    },
                    "start": 1671,
                    "end": 1690
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1669,
                  "end": 1691
                }
              ],
              "start": 1659,
              "end": 1727
            },
            "declare": false,
            "start": 1626,
            "end": 1727
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1747
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
                    "start": 1748,
                    "end": 1749
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1748,
                  "end": 1749
                }
              ],
              "start": 1747,
              "end": 1750
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
                  "start": 1759,
                  "end": 1763
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
                        "start": 1764,
                        "end": 1765
                      },
                      "typeArguments": null,
                      "start": 1764,
                      "end": 1765
                    }
                  ],
                  "start": 1763,
                  "end": 1766
                },
                "start": 1759,
                "end": 1766
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
                    "start": 1777,
                    "end": 1779
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1787,
                            "end": 1788
                          },
                          "typeArguments": null,
                          "start": 1787,
                          "end": 1788
                        },
                        "start": 1784,
                        "end": 1788
                      },
                      "start": 1781,
                      "end": 1788
                    },
                    "start": 1779,
                    "end": 1788
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1777,
                  "end": 1789
                }
              ],
              "start": 1767,
              "end": 1824
            },
            "declare": false,
            "start": 1734,
            "end": 1824
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1840,
              "end": 1843
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
                    "start": 1844,
                    "end": 1845
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1844,
                  "end": 1845
                }
              ],
              "start": 1843,
              "end": 1846
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
                  "start": 1855,
                  "end": 1859
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
                        "start": 1860,
                        "end": 1861
                      },
                      "typeArguments": null,
                      "start": 1860,
                      "end": 1861
                    }
                  ],
                  "start": 1859,
                  "end": 1862
                },
                "start": 1855,
                "end": 1862
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
                    "start": 1873,
                    "end": 1875
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
                                "start": 1882,
                                "end": 1883
                              },
                              "typeArguments": null,
                              "start": 1882,
                              "end": 1883
                            },
                            "start": 1880,
                            "end": 1883
                          },
                          "start": 1878,
                          "end": 1883
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
                                "start": 1889,
                                "end": 1890
                              },
                              "typeArguments": null,
                              "start": 1889,
                              "end": 1890
                            },
                            "start": 1887,
                            "end": 1890
                          },
                          "start": 1885,
                          "end": 1890
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
                            "start": 1895,
                            "end": 1896
                          },
                          "typeArguments": null,
                          "start": 1895,
                          "end": 1896
                        },
                        "start": 1892,
                        "end": 1896
                      },
                      "start": 1877,
                      "end": 1896
                    },
                    "start": 1875,
                    "end": 1896
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1873,
                  "end": 1897
                }
              ],
              "start": 1863,
              "end": 1932
            },
            "declare": false,
            "start": 1830,
            "end": 1932
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1948,
              "end": 1951
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
                    "start": 1952,
                    "end": 1953
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1952,
                  "end": 1953
                }
              ],
              "start": 1951,
              "end": 1954
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
                  "start": 1963,
                  "end": 1967
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
                        "start": 1968,
                        "end": 1969
                      },
                      "typeArguments": null,
                      "start": 1968,
                      "end": 1969
                    }
                  ],
                  "start": 1967,
                  "end": 1970
                },
                "start": 1963,
                "end": 1970
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
                    "start": 1981,
                    "end": 1983
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
                                "start": 1989,
                                "end": 1990
                              },
                              "typeArguments": null,
                              "start": 1989,
                              "end": 1990
                            },
                            "start": 1987,
                            "end": 1990
                          },
                          "start": 1986,
                          "end": 1990
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
                            "start": 1995,
                            "end": 1996
                          },
                          "typeArguments": null,
                          "start": 1995,
                          "end": 1996
                        },
                        "start": 1992,
                        "end": 1996
                      },
                      "start": 1985,
                      "end": 1996
                    },
                    "start": 1983,
                    "end": 1996
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1981,
                  "end": 1997
                }
              ],
              "start": 1971,
              "end": 2035
            },
            "declare": false,
            "start": 1938,
            "end": 2035
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2051,
              "end": 2054
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
                    "start": 2055,
                    "end": 2056
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2055,
                  "end": 2056
                }
              ],
              "start": 2054,
              "end": 2057
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
                  "start": 2066,
                  "end": 2070
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
                        "start": 2071,
                        "end": 2072
                      },
                      "typeArguments": null,
                      "start": 2071,
                      "end": 2072
                    }
                  ],
                  "start": 2070,
                  "end": 2073
                },
                "start": 2066,
                "end": 2073
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
                    "start": 2084,
                    "end": 2086
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
                                "start": 2092,
                                "end": 2093
                              },
                              "typeArguments": null,
                              "start": 2092,
                              "end": 2093
                            },
                            "start": 2090,
                            "end": 2093
                          },
                          "start": 2089,
                          "end": 2093
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
                                "start": 2098,
                                "end": 2099
                              },
                              "typeArguments": null,
                              "start": 2098,
                              "end": 2099
                            },
                            "start": 2096,
                            "end": 2099
                          },
                          "start": 2095,
                          "end": 2099
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
                            "start": 2104,
                            "end": 2105
                          },
                          "typeArguments": null,
                          "start": 2104,
                          "end": 2105
                        },
                        "start": 2101,
                        "end": 2105
                      },
                      "start": 2088,
                      "end": 2105
                    },
                    "start": 2086,
                    "end": 2105
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2084,
                  "end": 2106
                }
              ],
              "start": 2074,
              "end": 2142
            },
            "declare": false,
            "start": 2041,
            "end": 2142
          }
        ],
        "start": 124,
        "end": 2144
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 102,
      "end": 2144
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2153,
        "end": 2177
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
              "start": 2226,
              "end": 2231
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
                    "start": 2242,
                    "end": 2243
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2246,
                              "end": 2247
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2246,
                            "end": 2247
                          }
                        ],
                        "start": 2245,
                        "end": 2248
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
                            "start": 2254,
                            "end": 2255
                          },
                          "typeArguments": null,
                          "start": 2254,
                          "end": 2255
                        },
                        "start": 2251,
                        "end": 2255
                      },
                      "start": 2245,
                      "end": 2255
                    },
                    "start": 2243,
                    "end": 2255
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2242,
                  "end": 2256
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
                    "start": 2265,
                    "end": 2267
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2270,
                              "end": 2271
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2270,
                            "end": 2271
                          }
                        ],
                        "start": 2269,
                        "end": 2272
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
                                "start": 2277,
                                "end": 2278
                              },
                              "typeArguments": null,
                              "start": 2277,
                              "end": 2278
                            },
                            "start": 2275,
                            "end": 2278
                          },
                          "start": 2273,
                          "end": 2278
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
                            "start": 2283,
                            "end": 2284
                          },
                          "typeArguments": null,
                          "start": 2283,
                          "end": 2284
                        },
                        "start": 2280,
                        "end": 2284
                      },
                      "start": 2269,
                      "end": 2284
                    },
                    "start": 2267,
                    "end": 2284
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2265,
                  "end": 2285
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
                    "start": 2294,
                    "end": 2296
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2299,
                              "end": 2300
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2299,
                            "end": 2300
                          }
                        ],
                        "start": 2298,
                        "end": 2301
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
                                "start": 2305,
                                "end": 2306
                              },
                              "typeArguments": null,
                              "start": 2305,
                              "end": 2306
                            },
                            "start": 2303,
                            "end": 2306
                          },
                          "start": 2302,
                          "end": 2306
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
                            "start": 2311,
                            "end": 2312
                          },
                          "typeArguments": null,
                          "start": 2311,
                          "end": 2312
                        },
                        "start": 2308,
                        "end": 2312
                      },
                      "start": 2298,
                      "end": 2312
                    },
                    "start": 2296,
                    "end": 2312
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2294,
                  "end": 2313
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
                    "start": 2322,
                    "end": 2324
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2327,
                              "end": 2328
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2327,
                            "end": 2328
                          }
                        ],
                        "start": 2326,
                        "end": 2329
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
                                "start": 2333,
                                "end": 2334
                              },
                              "typeArguments": null,
                              "start": 2333,
                              "end": 2334
                            },
                            "start": 2331,
                            "end": 2334
                          },
                          "start": 2330,
                          "end": 2334
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
                                "start": 2340,
                                "end": 2341
                              },
                              "typeArguments": null,
                              "start": 2340,
                              "end": 2341
                            },
                            "start": 2338,
                            "end": 2341
                          },
                          "start": 2336,
                          "end": 2341
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
                            "start": 2346,
                            "end": 2347
                          },
                          "typeArguments": null,
                          "start": 2346,
                          "end": 2347
                        },
                        "start": 2343,
                        "end": 2347
                      },
                      "start": 2326,
                      "end": 2347
                    },
                    "start": 2324,
                    "end": 2347
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2322,
                  "end": 2348
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
                    "start": 2357,
                    "end": 2359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 2362,
                              "end": 2363
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2362,
                            "end": 2363
                          }
                        ],
                        "start": 2361,
                        "end": 2364
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
                                "start": 2369,
                                "end": 2370
                              },
                              "typeArguments": null,
                              "start": 2369,
                              "end": 2370
                            },
                            "start": 2367,
                            "end": 2370
                          },
                          "start": 2365,
                          "end": 2370
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
                                "start": 2376,
                                "end": 2377
                              },
                              "typeArguments": null,
                              "start": 2376,
                              "end": 2377
                            },
                            "start": 2374,
                            "end": 2377
                          },
                          "start": 2372,
                          "end": 2377
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
                            "start": 2382,
                            "end": 2383
                          },
                          "typeArguments": null,
                          "start": 2382,
                          "end": 2383
                        },
                        "start": 2379,
                        "end": 2383
                      },
                      "start": 2361,
                      "end": 2383
                    },
                    "start": 2359,
                    "end": 2383
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2357,
                  "end": 2384
                }
              ],
              "start": 2232,
              "end": 2390
            },
            "declare": false,
            "start": 2216,
            "end": 2390
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2406,
              "end": 2408
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
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2420,
                  "end": 2425
                },
                "typeArguments": null,
                "start": 2420,
                "end": 2425
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
                    "start": 2436,
                    "end": 2437
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2445,
                            "end": 2446
                          },
                          "typeArguments": null,
                          "start": 2445,
                          "end": 2446
                        },
                        "start": 2442,
                        "end": 2446
                      },
                      "start": 2439,
                      "end": 2446
                    },
                    "start": 2437,
                    "end": 2446
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2436,
                  "end": 2447
                }
              ],
              "start": 2426,
              "end": 2454
            },
            "declare": false,
            "start": 2396,
            "end": 2454
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2470,
              "end": 2472
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
                    "start": 2473,
                    "end": 2474
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2473,
                  "end": 2474
                }
              ],
              "start": 2472,
              "end": 2475
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
                  "start": 2484,
                  "end": 2489
                },
                "typeArguments": null,
                "start": 2484,
                "end": 2489
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
                    "start": 2500,
                    "end": 2501
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
                                "start": 2508,
                                "end": 2509
                              },
                              "typeArguments": null,
                              "start": 2508,
                              "end": 2509
                            },
                            "start": 2506,
                            "end": 2509
                          },
                          "start": 2504,
                          "end": 2509
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
                            "start": 2514,
                            "end": 2515
                          },
                          "typeArguments": null,
                          "start": 2514,
                          "end": 2515
                        },
                        "start": 2511,
                        "end": 2515
                      },
                      "start": 2503,
                      "end": 2515
                    },
                    "start": 2501,
                    "end": 2515
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2500,
                  "end": 2516
                }
              ],
              "start": 2490,
              "end": 2522
            },
            "declare": false,
            "start": 2460,
            "end": 2522
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2538,
              "end": 2540
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
                    "start": 2541,
                    "end": 2542
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2541,
                  "end": 2542
                }
              ],
              "start": 2540,
              "end": 2543
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
                  "start": 2552,
                  "end": 2557
                },
                "typeArguments": null,
                "start": 2552,
                "end": 2557
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
                    "start": 2568,
                    "end": 2569
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
                                "start": 2575,
                                "end": 2576
                              },
                              "typeArguments": null,
                              "start": 2575,
                              "end": 2576
                            },
                            "start": 2573,
                            "end": 2576
                          },
                          "start": 2572,
                          "end": 2576
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
                            "start": 2581,
                            "end": 2582
                          },
                          "typeArguments": null,
                          "start": 2581,
                          "end": 2582
                        },
                        "start": 2578,
                        "end": 2582
                      },
                      "start": 2571,
                      "end": 2582
                    },
                    "start": 2569,
                    "end": 2582
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2568,
                  "end": 2583
                }
              ],
              "start": 2558,
              "end": 2590
            },
            "declare": false,
            "start": 2528,
            "end": 2590
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2607,
              "end": 2609
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
                    "start": 2610,
                    "end": 2611
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2610,
                  "end": 2611
                }
              ],
              "start": 2609,
              "end": 2612
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
                  "start": 2621,
                  "end": 2626
                },
                "typeArguments": null,
                "start": 2621,
                "end": 2626
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
                    "start": 2637,
                    "end": 2639
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2647,
                            "end": 2648
                          },
                          "typeArguments": null,
                          "start": 2647,
                          "end": 2648
                        },
                        "start": 2644,
                        "end": 2648
                      },
                      "start": 2641,
                      "end": 2648
                    },
                    "start": 2639,
                    "end": 2648
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2637,
                  "end": 2649
                }
              ],
              "start": 2627,
              "end": 2656
            },
            "declare": false,
            "start": 2597,
            "end": 2656
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2672,
              "end": 2674
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
                    "start": 2675,
                    "end": 2676
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2675,
                  "end": 2676
                }
              ],
              "start": 2674,
              "end": 2677
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
                  "start": 2686,
                  "end": 2691
                },
                "typeArguments": null,
                "start": 2686,
                "end": 2691
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
                    "start": 2702,
                    "end": 2704
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
                                "start": 2711,
                                "end": 2712
                              },
                              "typeArguments": null,
                              "start": 2711,
                              "end": 2712
                            },
                            "start": 2709,
                            "end": 2712
                          },
                          "start": 2707,
                          "end": 2712
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
                            "start": 2717,
                            "end": 2718
                          },
                          "typeArguments": null,
                          "start": 2717,
                          "end": 2718
                        },
                        "start": 2714,
                        "end": 2718
                      },
                      "start": 2706,
                      "end": 2718
                    },
                    "start": 2704,
                    "end": 2718
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2702,
                  "end": 2718
                }
              ],
              "start": 2692,
              "end": 2724
            },
            "declare": false,
            "start": 2662,
            "end": 2724
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2740,
              "end": 2742
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
                    "start": 2743,
                    "end": 2744
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2743,
                  "end": 2744
                }
              ],
              "start": 2742,
              "end": 2745
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
                  "start": 2754,
                  "end": 2759
                },
                "typeArguments": null,
                "start": 2754,
                "end": 2759
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
                    "start": 2770,
                    "end": 2772
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
                                "start": 2778,
                                "end": 2779
                              },
                              "typeArguments": null,
                              "start": 2778,
                              "end": 2779
                            },
                            "start": 2776,
                            "end": 2779
                          },
                          "start": 2775,
                          "end": 2779
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
                            "start": 2784,
                            "end": 2785
                          },
                          "typeArguments": null,
                          "start": 2784,
                          "end": 2785
                        },
                        "start": 2781,
                        "end": 2785
                      },
                      "start": 2774,
                      "end": 2785
                    },
                    "start": 2772,
                    "end": 2785
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2770,
                  "end": 2786
                }
              ],
              "start": 2760,
              "end": 2792
            },
            "declare": false,
            "start": 2730,
            "end": 2792
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2809,
              "end": 2811
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
                    "start": 2812,
                    "end": 2813
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2812,
                  "end": 2813
                }
              ],
              "start": 2811,
              "end": 2814
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
                  "start": 2823,
                  "end": 2828
                },
                "typeArguments": null,
                "start": 2823,
                "end": 2828
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
                    "start": 2839,
                    "end": 2841
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
                      "start": 2843,
                      "end": 2850
                    },
                    "start": 2841,
                    "end": 2850
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2839,
                  "end": 2851
                }
              ],
              "start": 2829,
              "end": 2857
            },
            "declare": false,
            "start": 2799,
            "end": 2857
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2873,
              "end": 2875
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
                    "start": 2876,
                    "end": 2877
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2876,
                  "end": 2877
                }
              ],
              "start": 2875,
              "end": 2878
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
                  "start": 2887,
                  "end": 2892
                },
                "typeArguments": null,
                "start": 2887,
                "end": 2892
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
                    "start": 2903,
                    "end": 2905
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
                                "start": 2912,
                                "end": 2913
                              },
                              "typeArguments": null,
                              "start": 2912,
                              "end": 2913
                            },
                            "start": 2910,
                            "end": 2913
                          },
                          "start": 2908,
                          "end": 2913
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
                            "start": 2918,
                            "end": 2919
                          },
                          "typeArguments": null,
                          "start": 2918,
                          "end": 2919
                        },
                        "start": 2915,
                        "end": 2919
                      },
                      "start": 2907,
                      "end": 2919
                    },
                    "start": 2905,
                    "end": 2919
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2903,
                  "end": 2920
                }
              ],
              "start": 2893,
              "end": 2927
            },
            "declare": false,
            "start": 2863,
            "end": 2927
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2943,
              "end": 2945
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
                    "start": 2946,
                    "end": 2947
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2946,
                  "end": 2947
                }
              ],
              "start": 2945,
              "end": 2948
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
                  "start": 2957,
                  "end": 2962
                },
                "typeArguments": null,
                "start": 2957,
                "end": 2962
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
                    "start": 2973,
                    "end": 2975
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
                                "start": 2981,
                                "end": 2982
                              },
                              "typeArguments": null,
                              "start": 2981,
                              "end": 2982
                            },
                            "start": 2979,
                            "end": 2982
                          },
                          "start": 2978,
                          "end": 2982
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
                            "start": 2987,
                            "end": 2988
                          },
                          "typeArguments": null,
                          "start": 2987,
                          "end": 2988
                        },
                        "start": 2984,
                        "end": 2988
                      },
                      "start": 2977,
                      "end": 2988
                    },
                    "start": 2975,
                    "end": 2988
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2973,
                  "end": 2989
                }
              ],
              "start": 2963,
              "end": 2996
            },
            "declare": false,
            "start": 2933,
            "end": 2996
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 3012,
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
                      "type": "TSFunctionType",
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
                                "start": 3051,
                                "end": 3052
                              },
                              "typeArguments": null,
                              "start": 3051,
                              "end": 3052
                            },
                            "start": 3049,
                            "end": 3052
                          },
                          "start": 3048,
                          "end": 3052
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
                                "start": 3057,
                                "end": 3058
                              },
                              "typeArguments": null,
                              "start": 3057,
                              "end": 3058
                            },
                            "start": 3055,
                            "end": 3058
                          },
                          "start": 3054,
                          "end": 3058
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
                            "start": 3063,
                            "end": 3064
                          },
                          "typeArguments": null,
                          "start": 3063,
                          "end": 3064
                        },
                        "start": 3060,
                        "end": 3064
                      },
                      "start": 3047,
                      "end": 3064
                    },
                    "start": 3045,
                    "end": 3064
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3043,
                  "end": 3065
                }
              ],
              "start": 3033,
              "end": 3073
            },
            "declare": false,
            "start": 3002,
            "end": 3073
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 3090,
              "end": 3093
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
                    "start": 3094,
                    "end": 3095
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3094,
                  "end": 3095
                }
              ],
              "start": 3093,
              "end": 3096
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
                  "start": 3105,
                  "end": 3110
                },
                "typeArguments": null,
                "start": 3105,
                "end": 3110
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
                    "start": 3121,
                    "end": 3123
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3131,
                            "end": 3132
                          },
                          "typeArguments": null,
                          "start": 3131,
                          "end": 3132
                        },
                        "start": 3128,
                        "end": 3132
                      },
                      "start": 3125,
                      "end": 3132
                    },
                    "start": 3123,
                    "end": 3132
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3121,
                  "end": 3133
                }
              ],
              "start": 3111,
              "end": 3140
            },
            "declare": false,
            "start": 3080,
            "end": 3140
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3156,
              "end": 3159
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
                    "start": 3160,
                    "end": 3161
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3160,
                  "end": 3161
                }
              ],
              "start": 3159,
              "end": 3162
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
                  "start": 3171,
                  "end": 3176
                },
                "typeArguments": null,
                "start": 3171,
                "end": 3176
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
                    "start": 3187,
                    "end": 3189
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
                                "start": 3196,
                                "end": 3197
                              },
                              "typeArguments": null,
                              "start": 3196,
                              "end": 3197
                            },
                            "start": 3194,
                            "end": 3197
                          },
                          "start": 3192,
                          "end": 3197
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
                          "start": 3199,
                          "end": 3204
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
                            "start": 3209,
                            "end": 3210
                          },
                          "typeArguments": null,
                          "start": 3209,
                          "end": 3210
                        },
                        "start": 3206,
                        "end": 3210
                      },
                      "start": 3191,
                      "end": 3210
                    },
                    "start": 3189,
                    "end": 3210
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3187,
                  "end": 3211
                }
              ],
              "start": 3177,
              "end": 3218
            },
            "declare": false,
            "start": 3146,
            "end": 3218
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 3234,
              "end": 3237
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
                    "start": 3238,
                    "end": 3239
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3238,
                  "end": 3239
                }
              ],
              "start": 3237,
              "end": 3240
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
                  "start": 3249,
                  "end": 3254
                },
                "typeArguments": null,
                "start": 3249,
                "end": 3254
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
                    "start": 3265,
                    "end": 3267
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
                                "start": 3273,
                                "end": 3274
                              },
                              "typeArguments": null,
                              "start": 3273,
                              "end": 3274
                            },
                            "start": 3271,
                            "end": 3274
                          },
                          "start": 3270,
                          "end": 3274
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
                            "start": 3279,
                            "end": 3280
                          },
                          "typeArguments": null,
                          "start": 3279,
                          "end": 3280
                        },
                        "start": 3276,
                        "end": 3280
                      },
                      "start": 3269,
                      "end": 3280
                    },
                    "start": 3267,
                    "end": 3280
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3265,
                  "end": 3281
                }
              ],
              "start": 3255,
              "end": 3288
            },
            "declare": false,
            "start": 3224,
            "end": 3288
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 3304,
              "end": 3307
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
                    "start": 3308,
                    "end": 3309
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3308,
                  "end": 3309
                }
              ],
              "start": 3307,
              "end": 3310
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
                  "start": 3319,
                  "end": 3324
                },
                "typeArguments": null,
                "start": 3319,
                "end": 3324
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
                    "start": 3335,
                    "end": 3337
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
                                "start": 3343,
                                "end": 3344
                              },
                              "typeArguments": null,
                              "start": 3343,
                              "end": 3344
                            },
                            "start": 3341,
                            "end": 3344
                          },
                          "start": 3340,
                          "end": 3344
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
                                "start": 3349,
                                "end": 3350
                              },
                              "typeArguments": null,
                              "start": 3349,
                              "end": 3350
                            },
                            "start": 3347,
                            "end": 3350
                          },
                          "start": 3346,
                          "end": 3350
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
                            "start": 3355,
                            "end": 3356
                          },
                          "typeArguments": null,
                          "start": 3355,
                          "end": 3356
                        },
                        "start": 3352,
                        "end": 3356
                      },
                      "start": 3339,
                      "end": 3356
                    },
                    "start": 3337,
                    "end": 3356
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3335,
                  "end": 3357
                }
              ],
              "start": 3325,
              "end": 3364
            },
            "declare": false,
            "start": 3294,
            "end": 3364
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3381,
              "end": 3384
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
                    "start": 3385,
                    "end": 3386
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3385,
                  "end": 3386
                }
              ],
              "start": 3384,
              "end": 3387
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
                  "start": 3396,
                  "end": 3401
                },
                "typeArguments": null,
                "start": 3396,
                "end": 3401
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
                    "start": 3412,
                    "end": 3414
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3422,
                            "end": 3423
                          },
                          "typeArguments": null,
                          "start": 3422,
                          "end": 3423
                        },
                        "start": 3419,
                        "end": 3423
                      },
                      "start": 3416,
                      "end": 3423
                    },
                    "start": 3414,
                    "end": 3423
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3412,
                  "end": 3424
                }
              ],
              "start": 3402,
              "end": 3431
            },
            "declare": false,
            "start": 3371,
            "end": 3431
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3447,
              "end": 3450
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
                    "start": 3451,
                    "end": 3452
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3451,
                  "end": 3452
                }
              ],
              "start": 3450,
              "end": 3453
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
                  "start": 3462,
                  "end": 3467
                },
                "typeArguments": null,
                "start": 3462,
                "end": 3467
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
                    "start": 3478,
                    "end": 3480
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
                                "start": 3487,
                                "end": 3488
                              },
                              "typeArguments": null,
                              "start": 3487,
                              "end": 3488
                            },
                            "start": 3485,
                            "end": 3488
                          },
                          "start": 3483,
                          "end": 3488
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
                                "start": 3494,
                                "end": 3495
                              },
                              "typeArguments": null,
                              "start": 3494,
                              "end": 3495
                            },
                            "start": 3492,
                            "end": 3495
                          },
                          "start": 3490,
                          "end": 3495
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
                            "start": 3500,
                            "end": 3501
                          },
                          "typeArguments": null,
                          "start": 3500,
                          "end": 3501
                        },
                        "start": 3497,
                        "end": 3501
                      },
                      "start": 3482,
                      "end": 3501
                    },
                    "start": 3480,
                    "end": 3501
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3478,
                  "end": 3502
                }
              ],
              "start": 3468,
              "end": 3509
            },
            "declare": false,
            "start": 3437,
            "end": 3509
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3525,
              "end": 3528
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
                    "start": 3529,
                    "end": 3530
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3529,
                  "end": 3530
                }
              ],
              "start": 3528,
              "end": 3531
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
                  "start": 3540,
                  "end": 3545
                },
                "typeArguments": null,
                "start": 3540,
                "end": 3545
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
                    "start": 3556,
                    "end": 3558
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
                                "start": 3564,
                                "end": 3565
                              },
                              "typeArguments": null,
                              "start": 3564,
                              "end": 3565
                            },
                            "start": 3562,
                            "end": 3565
                          },
                          "start": 3561,
                          "end": 3565
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
                            "start": 3570,
                            "end": 3571
                          },
                          "typeArguments": null,
                          "start": 3570,
                          "end": 3571
                        },
                        "start": 3567,
                        "end": 3571
                      },
                      "start": 3560,
                      "end": 3571
                    },
                    "start": 3558,
                    "end": 3571
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3556,
                  "end": 3572
                }
              ],
              "start": 3546,
              "end": 3578
            },
            "declare": false,
            "start": 3515,
            "end": 3578
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3594,
              "end": 3597
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
                    "start": 3598,
                    "end": 3599
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3598,
                  "end": 3599
                }
              ],
              "start": 3597,
              "end": 3600
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
                  "start": 3609,
                  "end": 3614
                },
                "typeArguments": null,
                "start": 3609,
                "end": 3614
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
                    "start": 3625,
                    "end": 3627
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
                                "start": 3633,
                                "end": 3634
                              },
                              "typeArguments": null,
                              "start": 3633,
                              "end": 3634
                            },
                            "start": 3631,
                            "end": 3634
                          },
                          "start": 3630,
                          "end": 3634
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
                                "start": 3639,
                                "end": 3640
                              },
                              "typeArguments": null,
                              "start": 3639,
                              "end": 3640
                            },
                            "start": 3637,
                            "end": 3640
                          },
                          "start": 3636,
                          "end": 3640
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
                            "start": 3645,
                            "end": 3646
                          },
                          "typeArguments": null,
                          "start": 3645,
                          "end": 3646
                        },
                        "start": 3642,
                        "end": 3646
                      },
                      "start": 3629,
                      "end": 3646
                    },
                    "start": 3627,
                    "end": 3646
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3625,
                  "end": 3647
                }
              ],
              "start": 3615,
              "end": 3654
            },
            "declare": false,
            "start": 3584,
            "end": 3654
          }
        ],
        "start": 2178,
        "end": 3656
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2146,
      "end": 3656
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 3665,
        "end": 3687
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
              "start": 3705,
              "end": 3710
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
                    "start": 3721,
                    "end": 3722
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 3725,
                              "end": 3726
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3725,
                            "end": 3726
                          }
                        ],
                        "start": 3724,
                        "end": 3727
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
                            "start": 3733,
                            "end": 3734
                          },
                          "typeArguments": null,
                          "start": 3733,
                          "end": 3734
                        },
                        "start": 3730,
                        "end": 3734
                      },
                      "start": 3724,
                      "end": 3734
                    },
                    "start": 3722,
                    "end": 3734
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3721,
                  "end": 3735
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
                    "start": 3744,
                    "end": 3746
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 3749,
                              "end": 3750
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3749,
                            "end": 3750
                          }
                        ],
                        "start": 3748,
                        "end": 3751
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
                                "start": 3756,
                                "end": 3757
                              },
                              "typeArguments": null,
                              "start": 3756,
                              "end": 3757
                            },
                            "start": 3754,
                            "end": 3757
                          },
                          "start": 3752,
                          "end": 3757
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
                            "start": 3762,
                            "end": 3763
                          },
                          "typeArguments": null,
                          "start": 3762,
                          "end": 3763
                        },
                        "start": 3759,
                        "end": 3763
                      },
                      "start": 3748,
                      "end": 3763
                    },
                    "start": 3746,
                    "end": 3763
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3744,
                  "end": 3764
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
                    "start": 3773,
                    "end": 3775
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "start": 3784,
                                "end": 3785
                              },
                              "typeArguments": null,
                              "start": 3784,
                              "end": 3785
                            },
                            "start": 3782,
                            "end": 3785
                          },
                          "start": 3781,
                          "end": 3785
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
                            "start": 3790,
                            "end": 3791
                          },
                          "typeArguments": null,
                          "start": 3790,
                          "end": 3791
                        },
                        "start": 3787,
                        "end": 3791
                      },
                      "start": 3777,
                      "end": 3791
                    },
                    "start": 3775,
                    "end": 3791
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3773,
                  "end": 3792
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
                    "start": 3801,
                    "end": 3803
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 3806,
                              "end": 3807
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3806,
                            "end": 3807
                          }
                        ],
                        "start": 3805,
                        "end": 3808
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
                                "start": 3812,
                                "end": 3813
                              },
                              "typeArguments": null,
                              "start": 3812,
                              "end": 3813
                            },
                            "start": 3810,
                            "end": 3813
                          },
                          "start": 3809,
                          "end": 3813
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
                                "start": 3819,
                                "end": 3820
                              },
                              "typeArguments": null,
                              "start": 3819,
                              "end": 3820
                            },
                            "start": 3817,
                            "end": 3820
                          },
                          "start": 3815,
                          "end": 3820
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
                            "start": 3825,
                            "end": 3826
                          },
                          "typeArguments": null,
                          "start": 3825,
                          "end": 3826
                        },
                        "start": 3822,
                        "end": 3826
                      },
                      "start": 3805,
                      "end": 3826
                    },
                    "start": 3803,
                    "end": 3826
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3801,
                  "end": 3827
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
                    "start": 3836,
                    "end": 3838
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 3841,
                              "end": 3842
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3841,
                            "end": 3842
                          }
                        ],
                        "start": 3840,
                        "end": 3843
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
                                "start": 3848,
                                "end": 3849
                              },
                              "typeArguments": null,
                              "start": 3848,
                              "end": 3849
                            },
                            "start": 3846,
                            "end": 3849
                          },
                          "start": 3844,
                          "end": 3849
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
                                "start": 3855,
                                "end": 3856
                              },
                              "typeArguments": null,
                              "start": 3855,
                              "end": 3856
                            },
                            "start": 3853,
                            "end": 3856
                          },
                          "start": 3851,
                          "end": 3856
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
                            "start": 3861,
                            "end": 3862
                          },
                          "typeArguments": null,
                          "start": 3861,
                          "end": 3862
                        },
                        "start": 3858,
                        "end": 3862
                      },
                      "start": 3840,
                      "end": 3862
                    },
                    "start": 3838,
                    "end": 3862
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3836,
                  "end": 3863
                }
              ],
              "start": 3711,
              "end": 3869
            },
            "declare": false,
            "start": 3695,
            "end": 3869
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3903,
              "end": 3905
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
                  "start": 3914,
                  "end": 3919
                },
                "typeArguments": null,
                "start": 3914,
                "end": 3919
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
                    "start": 3930,
                    "end": 3931
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 3934,
                              "end": 3935
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3934,
                            "end": 3935
                          }
                        ],
                        "start": 3933,
                        "end": 3936
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
                            "start": 3942,
                            "end": 3943
                          },
                          "typeArguments": null,
                          "start": 3942,
                          "end": 3943
                        },
                        "start": 3939,
                        "end": 3943
                      },
                      "start": 3933,
                      "end": 3943
                    },
                    "start": 3931,
                    "end": 3943
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3930,
                  "end": 3944
                }
              ],
              "start": 3920,
              "end": 3988
            },
            "declare": false,
            "start": 3893,
            "end": 3988
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4004,
              "end": 4006
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
                  "start": 4015,
                  "end": 4020
                },
                "typeArguments": null,
                "start": 4015,
                "end": 4020
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
                    "start": 4031,
                    "end": 4032
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4035,
                              "end": 4036
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4035,
                            "end": 4036
                          }
                        ],
                        "start": 4034,
                        "end": 4037
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
                                "start": 4042,
                                "end": 4043
                              },
                              "typeArguments": null,
                              "start": 4042,
                              "end": 4043
                            },
                            "start": 4040,
                            "end": 4043
                          },
                          "start": 4038,
                          "end": 4043
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
                            "start": 4048,
                            "end": 4049
                          },
                          "typeArguments": null,
                          "start": 4048,
                          "end": 4049
                        },
                        "start": 4045,
                        "end": 4049
                      },
                      "start": 4034,
                      "end": 4049
                    },
                    "start": 4032,
                    "end": 4049
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4031,
                  "end": 4050
                }
              ],
              "start": 4021,
              "end": 4151
            },
            "declare": false,
            "start": 3994,
            "end": 4151
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4167,
              "end": 4169
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
                  "start": 4178,
                  "end": 4183
                },
                "typeArguments": null,
                "start": 4178,
                "end": 4183
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
                    "start": 4194,
                    "end": 4195
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4198,
                              "end": 4199
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4198,
                            "end": 4199
                          }
                        ],
                        "start": 4197,
                        "end": 4200
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
                                "start": 4204,
                                "end": 4205
                              },
                              "typeArguments": null,
                              "start": 4204,
                              "end": 4205
                            },
                            "start": 4202,
                            "end": 4205
                          },
                          "start": 4201,
                          "end": 4205
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
                            "start": 4210,
                            "end": 4211
                          },
                          "typeArguments": null,
                          "start": 4210,
                          "end": 4211
                        },
                        "start": 4207,
                        "end": 4211
                      },
                      "start": 4197,
                      "end": 4211
                    },
                    "start": 4195,
                    "end": 4211
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4194,
                  "end": 4212
                }
              ],
              "start": 4184,
              "end": 4313
            },
            "declare": false,
            "start": 4157,
            "end": 4313
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4330,
              "end": 4332
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
                  "start": 4341,
                  "end": 4346
                },
                "typeArguments": null,
                "start": 4341,
                "end": 4346
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
                    "start": 4357,
                    "end": 4359
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4362,
                              "end": 4363
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4362,
                            "end": 4363
                          }
                        ],
                        "start": 4361,
                        "end": 4364
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
                            "start": 4370,
                            "end": 4371
                          },
                          "typeArguments": null,
                          "start": 4370,
                          "end": 4371
                        },
                        "start": 4367,
                        "end": 4371
                      },
                      "start": 4361,
                      "end": 4371
                    },
                    "start": 4359,
                    "end": 4371
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4357,
                  "end": 4372
                }
              ],
              "start": 4347,
              "end": 4473
            },
            "declare": false,
            "start": 4320,
            "end": 4473
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 4489,
              "end": 4491
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
                  "start": 4500,
                  "end": 4505
                },
                "typeArguments": null,
                "start": 4500,
                "end": 4505
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
                    "start": 4516,
                    "end": 4518
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4521,
                              "end": 4522
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4521,
                            "end": 4522
                          }
                        ],
                        "start": 4520,
                        "end": 4523
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
                                "start": 4528,
                                "end": 4529
                              },
                              "typeArguments": null,
                              "start": 4528,
                              "end": 4529
                            },
                            "start": 4526,
                            "end": 4529
                          },
                          "start": 4524,
                          "end": 4529
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
                            "start": 4534,
                            "end": 4535
                          },
                          "typeArguments": null,
                          "start": 4534,
                          "end": 4535
                        },
                        "start": 4531,
                        "end": 4535
                      },
                      "start": 4520,
                      "end": 4535
                    },
                    "start": 4518,
                    "end": 4535
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4516,
                  "end": 4536
                }
              ],
              "start": 4506,
              "end": 4559
            },
            "declare": false,
            "start": 4479,
            "end": 4559
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 4575,
              "end": 4577
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
                  "start": 4586,
                  "end": 4591
                },
                "typeArguments": null,
                "start": 4586,
                "end": 4591
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
                    "start": 4602,
                    "end": 4604
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4607,
                              "end": 4608
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4607,
                            "end": 4608
                          }
                        ],
                        "start": 4606,
                        "end": 4609
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
                                "start": 4613,
                                "end": 4614
                              },
                              "typeArguments": null,
                              "start": 4613,
                              "end": 4614
                            },
                            "start": 4611,
                            "end": 4614
                          },
                          "start": 4610,
                          "end": 4614
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
                            "start": 4619,
                            "end": 4620
                          },
                          "typeArguments": null,
                          "start": 4619,
                          "end": 4620
                        },
                        "start": 4616,
                        "end": 4620
                      },
                      "start": 4606,
                      "end": 4620
                    },
                    "start": 4604,
                    "end": 4620
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4602,
                  "end": 4621
                }
              ],
              "start": 4592,
              "end": 4656
            },
            "declare": false,
            "start": 4565,
            "end": 4656
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 4673,
              "end": 4675
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
                  "start": 4684,
                  "end": 4689
                },
                "typeArguments": null,
                "start": 4684,
                "end": 4689
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
                    "start": 4700,
                    "end": 4702
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4705,
                              "end": 4706
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4705,
                            "end": 4706
                          }
                        ],
                        "start": 4704,
                        "end": 4707
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
                            "start": 4713,
                            "end": 4714
                          },
                          "typeArguments": null,
                          "start": 4713,
                          "end": 4714
                        },
                        "start": 4710,
                        "end": 4714
                      },
                      "start": 4704,
                      "end": 4714
                    },
                    "start": 4702,
                    "end": 4714
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4700,
                  "end": 4715
                }
              ],
              "start": 4690,
              "end": 4793
            },
            "declare": false,
            "start": 4663,
            "end": 4793
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 4809,
              "end": 4811
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
                  "start": 4820,
                  "end": 4825
                },
                "typeArguments": null,
                "start": 4820,
                "end": 4825
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
                    "start": 4836,
                    "end": 4838
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4841,
                              "end": 4842
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4841,
                            "end": 4842
                          }
                        ],
                        "start": 4840,
                        "end": 4843
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
                                "start": 4848,
                                "end": 4849
                              },
                              "typeArguments": null,
                              "start": 4848,
                              "end": 4849
                            },
                            "start": 4846,
                            "end": 4849
                          },
                          "start": 4844,
                          "end": 4849
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
                            "start": 4854,
                            "end": 4855
                          },
                          "typeArguments": null,
                          "start": 4854,
                          "end": 4855
                        },
                        "start": 4851,
                        "end": 4855
                      },
                      "start": 4840,
                      "end": 4855
                    },
                    "start": 4838,
                    "end": 4855
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4836,
                  "end": 4856
                }
              ],
              "start": 4826,
              "end": 4891
            },
            "declare": false,
            "start": 4799,
            "end": 4891
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4907,
              "end": 4909
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
                  "start": 4918,
                  "end": 4923
                },
                "typeArguments": null,
                "start": 4918,
                "end": 4923
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
                    "start": 4934,
                    "end": 4936
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 4939,
                              "end": 4940
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4939,
                            "end": 4940
                          }
                        ],
                        "start": 4938,
                        "end": 4941
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
                                "start": 4945,
                                "end": 4946
                              },
                              "typeArguments": null,
                              "start": 4945,
                              "end": 4946
                            },
                            "start": 4943,
                            "end": 4946
                          },
                          "start": 4942,
                          "end": 4946
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
                            "start": 4951,
                            "end": 4952
                          },
                          "typeArguments": null,
                          "start": 4951,
                          "end": 4952
                        },
                        "start": 4948,
                        "end": 4952
                      },
                      "start": 4938,
                      "end": 4952
                    },
                    "start": 4936,
                    "end": 4952
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4934,
                  "end": 4953
                }
              ],
              "start": 4924,
              "end": 5008
            },
            "declare": false,
            "start": 4897,
            "end": 5008
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 5024,
              "end": 5027
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
                  "start": 5036,
                  "end": 5041
                },
                "typeArguments": null,
                "start": 5036,
                "end": 5041
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
                    "start": 5052,
                    "end": 5054
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5057,
                              "end": 5058
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5057,
                            "end": 5058
                          }
                        ],
                        "start": 5056,
                        "end": 5059
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
                                "start": 5063,
                                "end": 5064
                              },
                              "typeArguments": null,
                              "start": 5063,
                              "end": 5064
                            },
                            "start": 5061,
                            "end": 5064
                          },
                          "start": 5060,
                          "end": 5064
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
                                "start": 5069,
                                "end": 5070
                              },
                              "typeArguments": null,
                              "start": 5069,
                              "end": 5070
                            },
                            "start": 5067,
                            "end": 5070
                          },
                          "start": 5066,
                          "end": 5070
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
                            "start": 5075,
                            "end": 5076
                          },
                          "typeArguments": null,
                          "start": 5075,
                          "end": 5076
                        },
                        "start": 5072,
                        "end": 5076
                      },
                      "start": 5056,
                      "end": 5076
                    },
                    "start": 5054,
                    "end": 5076
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5052,
                  "end": 5077
                }
              ],
              "start": 5042,
              "end": 5119
            },
            "declare": false,
            "start": 5014,
            "end": 5119
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5136,
              "end": 5139
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
                  "start": 5148,
                  "end": 5153
                },
                "typeArguments": null,
                "start": 5148,
                "end": 5153
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
                    "start": 5164,
                    "end": 5166
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5169,
                              "end": 5170
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5169,
                            "end": 5170
                          }
                        ],
                        "start": 5168,
                        "end": 5171
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
                            "start": 5177,
                            "end": 5178
                          },
                          "typeArguments": null,
                          "start": 5177,
                          "end": 5178
                        },
                        "start": 5174,
                        "end": 5178
                      },
                      "start": 5168,
                      "end": 5178
                    },
                    "start": 5166,
                    "end": 5178
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5164,
                  "end": 5179
                }
              ],
              "start": 5154,
              "end": 5280
            },
            "declare": false,
            "start": 5126,
            "end": 5280
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5296,
              "end": 5299
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
                  "start": 5308,
                  "end": 5313
                },
                "typeArguments": null,
                "start": 5308,
                "end": 5313
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
                    "start": 5324,
                    "end": 5326
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5329,
                              "end": 5330
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5329,
                            "end": 5330
                          }
                        ],
                        "start": 5328,
                        "end": 5331
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
                                "start": 5336,
                                "end": 5337
                              },
                              "typeArguments": null,
                              "start": 5336,
                              "end": 5337
                            },
                            "start": 5334,
                            "end": 5337
                          },
                          "start": 5332,
                          "end": 5337
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
                                "start": 5343,
                                "end": 5344
                              },
                              "typeArguments": null,
                              "start": 5343,
                              "end": 5344
                            },
                            "start": 5341,
                            "end": 5344
                          },
                          "start": 5339,
                          "end": 5344
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
                            "start": 5349,
                            "end": 5350
                          },
                          "typeArguments": null,
                          "start": 5349,
                          "end": 5350
                        },
                        "start": 5346,
                        "end": 5350
                      },
                      "start": 5328,
                      "end": 5350
                    },
                    "start": 5326,
                    "end": 5350
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5324,
                  "end": 5351
                }
              ],
              "start": 5314,
              "end": 5386
            },
            "declare": false,
            "start": 5286,
            "end": 5386
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5402,
              "end": 5405
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
                  "start": 5414,
                  "end": 5419
                },
                "typeArguments": null,
                "start": 5414,
                "end": 5419
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
                    "start": 5430,
                    "end": 5432
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5435,
                              "end": 5436
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5435,
                            "end": 5436
                          }
                        ],
                        "start": 5434,
                        "end": 5437
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
                                "start": 5441,
                                "end": 5442
                              },
                              "typeArguments": null,
                              "start": 5441,
                              "end": 5442
                            },
                            "start": 5439,
                            "end": 5442
                          },
                          "start": 5438,
                          "end": 5442
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
                            "start": 5447,
                            "end": 5448
                          },
                          "typeArguments": null,
                          "start": 5447,
                          "end": 5448
                        },
                        "start": 5444,
                        "end": 5448
                      },
                      "start": 5434,
                      "end": 5448
                    },
                    "start": 5432,
                    "end": 5448
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5430,
                  "end": 5449
                }
              ],
              "start": 5420,
              "end": 5488
            },
            "declare": false,
            "start": 5392,
            "end": 5488
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5504,
              "end": 5507
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
                  "start": 5516,
                  "end": 5521
                },
                "typeArguments": null,
                "start": 5516,
                "end": 5521
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
                    "start": 5532,
                    "end": 5534
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5537,
                              "end": 5538
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5537,
                            "end": 5538
                          }
                        ],
                        "start": 5536,
                        "end": 5539
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
                                "start": 5543,
                                "end": 5544
                              },
                              "typeArguments": null,
                              "start": 5543,
                              "end": 5544
                            },
                            "start": 5541,
                            "end": 5544
                          },
                          "start": 5540,
                          "end": 5544
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
                                "start": 5549,
                                "end": 5550
                              },
                              "typeArguments": null,
                              "start": 5549,
                              "end": 5550
                            },
                            "start": 5547,
                            "end": 5550
                          },
                          "start": 5546,
                          "end": 5550
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
                            "start": 5555,
                            "end": 5556
                          },
                          "typeArguments": null,
                          "start": 5555,
                          "end": 5556
                        },
                        "start": 5552,
                        "end": 5556
                      },
                      "start": 5536,
                      "end": 5556
                    },
                    "start": 5534,
                    "end": 5556
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5532,
                  "end": 5557
                }
              ],
              "start": 5522,
              "end": 5599
            },
            "declare": false,
            "start": 5494,
            "end": 5599
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5616,
              "end": 5619
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
                  "start": 5628,
                  "end": 5633
                },
                "typeArguments": null,
                "start": 5628,
                "end": 5633
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
                    "start": 5644,
                    "end": 5646
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5649,
                              "end": 5650
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5649,
                            "end": 5650
                          }
                        ],
                        "start": 5648,
                        "end": 5651
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
                            "start": 5657,
                            "end": 5658
                          },
                          "typeArguments": null,
                          "start": 5657,
                          "end": 5658
                        },
                        "start": 5654,
                        "end": 5658
                      },
                      "start": 5648,
                      "end": 5658
                    },
                    "start": 5646,
                    "end": 5658
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5644,
                  "end": 5659
                }
              ],
              "start": 5634,
              "end": 5760
            },
            "declare": false,
            "start": 5606,
            "end": 5760
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 5776,
              "end": 5779
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
                  "start": 5788,
                  "end": 5793
                },
                "typeArguments": null,
                "start": 5788,
                "end": 5793
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
                    "start": 5804,
                    "end": 5806
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5809,
                              "end": 5810
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5809,
                            "end": 5810
                          }
                        ],
                        "start": 5808,
                        "end": 5811
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
                                "start": 5816,
                                "end": 5817
                              },
                              "typeArguments": null,
                              "start": 5816,
                              "end": 5817
                            },
                            "start": 5814,
                            "end": 5817
                          },
                          "start": 5812,
                          "end": 5817
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
                                "start": 5823,
                                "end": 5824
                              },
                              "typeArguments": null,
                              "start": 5823,
                              "end": 5824
                            },
                            "start": 5821,
                            "end": 5824
                          },
                          "start": 5819,
                          "end": 5824
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
                            "start": 5829,
                            "end": 5830
                          },
                          "typeArguments": null,
                          "start": 5829,
                          "end": 5830
                        },
                        "start": 5826,
                        "end": 5830
                      },
                      "start": 5808,
                      "end": 5830
                    },
                    "start": 5806,
                    "end": 5830
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5804,
                  "end": 5831
                }
              ],
              "start": 5794,
              "end": 5866
            },
            "declare": false,
            "start": 5766,
            "end": 5866
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 5882,
              "end": 5885
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
                  "start": 5894,
                  "end": 5899
                },
                "typeArguments": null,
                "start": 5894,
                "end": 5899
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
                    "start": 5910,
                    "end": 5912
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 5915,
                              "end": 5916
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5915,
                            "end": 5916
                          }
                        ],
                        "start": 5914,
                        "end": 5917
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
                                "start": 5921,
                                "end": 5922
                              },
                              "typeArguments": null,
                              "start": 5921,
                              "end": 5922
                            },
                            "start": 5919,
                            "end": 5922
                          },
                          "start": 5918,
                          "end": 5922
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
                            "start": 5927,
                            "end": 5928
                          },
                          "typeArguments": null,
                          "start": 5927,
                          "end": 5928
                        },
                        "start": 5924,
                        "end": 5928
                      },
                      "start": 5914,
                      "end": 5928
                    },
                    "start": 5912,
                    "end": 5928
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5910,
                  "end": 5929
                }
              ],
              "start": 5900,
              "end": 5967
            },
            "declare": false,
            "start": 5872,
            "end": 5967
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 5983,
              "end": 5986
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
                  "start": 5995,
                  "end": 6000
                },
                "typeArguments": null,
                "start": 5995,
                "end": 6000
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
                    "start": 6011,
                    "end": 6013
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "start": 6016,
                              "end": 6017
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6016,
                            "end": 6017
                          }
                        ],
                        "start": 6015,
                        "end": 6018
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
                                "start": 6022,
                                "end": 6023
                              },
                              "typeArguments": null,
                              "start": 6022,
                              "end": 6023
                            },
                            "start": 6020,
                            "end": 6023
                          },
                          "start": 6019,
                          "end": 6023
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
                                "start": 6028,
                                "end": 6029
                              },
                              "typeArguments": null,
                              "start": 6028,
                              "end": 6029
                            },
                            "start": 6026,
                            "end": 6029
                          },
                          "start": 6025,
                          "end": 6029
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
                            "start": 6034,
                            "end": 6035
                          },
                          "typeArguments": null,
                          "start": 6034,
                          "end": 6035
                        },
                        "start": 6031,
                        "end": 6035
                      },
                      "start": 6015,
                      "end": 6035
                    },
                    "start": 6013,
                    "end": 6035
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6011,
                  "end": 6036
                }
              ],
              "start": 6001,
              "end": 6072
            },
            "declare": false,
            "start": 5973,
            "end": 6072
          }
        ],
        "start": 3688,
        "end": 6074
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3658,
      "end": 6074
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6074
}
```
