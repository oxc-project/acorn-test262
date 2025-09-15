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
                            "start": 170,
                            "end": 171
                          },
                          "typeArguments": null,
                          "start": 170,
                          "end": 171
                        },
                        "start": 167,
                        "end": 171
                      },
                      "start": 164,
                      "end": 171
                    },
                    "start": 162,
                    "end": 171
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 161,
                  "end": 172
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
                    "start": 181,
                    "end": 183
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
                                "start": 190,
                                "end": 191
                              },
                              "typeArguments": null,
                              "start": 190,
                              "end": 191
                            },
                            "start": 188,
                            "end": 191
                          },
                          "start": 186,
                          "end": 191
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
                            "start": 196,
                            "end": 197
                          },
                          "typeArguments": null,
                          "start": 196,
                          "end": 197
                        },
                        "start": 193,
                        "end": 197
                      },
                      "start": 185,
                      "end": 197
                    },
                    "start": 183,
                    "end": 197
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 181,
                  "end": 198
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
                    "start": 207,
                    "end": 209
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
                                "start": 215,
                                "end": 216
                              },
                              "typeArguments": null,
                              "start": 215,
                              "end": 216
                            },
                            "start": 213,
                            "end": 216
                          },
                          "start": 212,
                          "end": 216
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
                            "start": 221,
                            "end": 222
                          },
                          "typeArguments": null,
                          "start": 221,
                          "end": 222
                        },
                        "start": 218,
                        "end": 222
                      },
                      "start": 211,
                      "end": 222
                    },
                    "start": 209,
                    "end": 222
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 207,
                  "end": 223
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
                    "start": 232,
                    "end": 234
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
                                "start": 240,
                                "end": 241
                              },
                              "typeArguments": null,
                              "start": 240,
                              "end": 241
                            },
                            "start": 238,
                            "end": 241
                          },
                          "start": 237,
                          "end": 241
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
                                "start": 247,
                                "end": 248
                              },
                              "typeArguments": null,
                              "start": 247,
                              "end": 248
                            },
                            "start": 245,
                            "end": 248
                          },
                          "start": 243,
                          "end": 248
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
                            "start": 253,
                            "end": 254
                          },
                          "typeArguments": null,
                          "start": 253,
                          "end": 254
                        },
                        "start": 250,
                        "end": 254
                      },
                      "start": 236,
                      "end": 254
                    },
                    "start": 234,
                    "end": 254
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 232,
                  "end": 255
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
                    "start": 264,
                    "end": 266
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
                                "start": 273,
                                "end": 274
                              },
                              "typeArguments": null,
                              "start": 273,
                              "end": 274
                            },
                            "start": 271,
                            "end": 274
                          },
                          "start": 269,
                          "end": 274
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
                                "start": 280,
                                "end": 281
                              },
                              "typeArguments": null,
                              "start": 280,
                              "end": 281
                            },
                            "start": 278,
                            "end": 281
                          },
                          "start": 276,
                          "end": 281
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
                            "start": 286,
                            "end": 287
                          },
                          "typeArguments": null,
                          "start": 286,
                          "end": 287
                        },
                        "start": 283,
                        "end": 287
                      },
                      "start": 268,
                      "end": 287
                    },
                    "start": 266,
                    "end": 287
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 264,
                  "end": 288
                }
              ],
              "start": 151,
              "end": 294
            },
            "declare": false,
            "start": 133,
            "end": 294
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 312
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
                    "start": 313,
                    "end": 314
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 313,
                  "end": 314
                }
              ],
              "start": 312,
              "end": 315
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
                  "start": 324,
                  "end": 328
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
                        "start": 329,
                        "end": 330
                      },
                      "typeArguments": null,
                      "start": 329,
                      "end": 330
                    }
                  ],
                  "start": 328,
                  "end": 331
                },
                "start": 324,
                "end": 331
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
                    "start": 342,
                    "end": 343
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
                            "start": 351,
                            "end": 352
                          },
                          "typeArguments": null,
                          "start": 351,
                          "end": 352
                        },
                        "start": 348,
                        "end": 352
                      },
                      "start": 345,
                      "end": 352
                    },
                    "start": 343,
                    "end": 352
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 342,
                  "end": 353
                }
              ],
              "start": 332,
              "end": 392
            },
            "declare": false,
            "start": 300,
            "end": 392
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 410
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
                    "start": 411,
                    "end": 412
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 411,
                  "end": 412
                }
              ],
              "start": 410,
              "end": 413
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
                  "start": 422,
                  "end": 426
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
                        "start": 427,
                        "end": 428
                      },
                      "typeArguments": null,
                      "start": 427,
                      "end": 428
                    }
                  ],
                  "start": 426,
                  "end": 429
                },
                "start": 422,
                "end": 429
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
                    "start": 440,
                    "end": 441
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
                                "start": 448,
                                "end": 449
                              },
                              "typeArguments": null,
                              "start": 448,
                              "end": 449
                            },
                            "start": 446,
                            "end": 449
                          },
                          "start": 444,
                          "end": 449
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
                            "start": 454,
                            "end": 455
                          },
                          "typeArguments": null,
                          "start": 454,
                          "end": 455
                        },
                        "start": 451,
                        "end": 455
                      },
                      "start": 443,
                      "end": 455
                    },
                    "start": 441,
                    "end": 455
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 440,
                  "end": 456
                }
              ],
              "start": 430,
              "end": 495
            },
            "declare": false,
            "start": 398,
            "end": 495
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 513
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
                    "start": 514,
                    "end": 515
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 514,
                  "end": 515
                }
              ],
              "start": 513,
              "end": 516
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
                  "start": 525,
                  "end": 529
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
                        "start": 530,
                        "end": 531
                      },
                      "typeArguments": null,
                      "start": 530,
                      "end": 531
                    }
                  ],
                  "start": 529,
                  "end": 532
                },
                "start": 525,
                "end": 532
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
                    "start": 543,
                    "end": 544
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
                                "start": 550,
                                "end": 551
                              },
                              "typeArguments": null,
                              "start": 550,
                              "end": 551
                            },
                            "start": 548,
                            "end": 551
                          },
                          "start": 547,
                          "end": 551
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
                            "start": 556,
                            "end": 557
                          },
                          "typeArguments": null,
                          "start": 556,
                          "end": 557
                        },
                        "start": 553,
                        "end": 557
                      },
                      "start": 546,
                      "end": 557
                    },
                    "start": 544,
                    "end": 557
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 543,
                  "end": 558
                }
              ],
              "start": 533,
              "end": 599
            },
            "declare": false,
            "start": 501,
            "end": 599
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 618
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
                    "start": 619,
                    "end": 620
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 619,
                  "end": 620
                }
              ],
              "start": 618,
              "end": 621
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
                  "start": 630,
                  "end": 634
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
                        "start": 635,
                        "end": 636
                      },
                      "typeArguments": null,
                      "start": 635,
                      "end": 636
                    }
                  ],
                  "start": 634,
                  "end": 637
                },
                "start": 630,
                "end": 637
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
                    "start": 648,
                    "end": 650
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
                            "start": 658,
                            "end": 659
                          },
                          "typeArguments": null,
                          "start": 658,
                          "end": 659
                        },
                        "start": 655,
                        "end": 659
                      },
                      "start": 652,
                      "end": 659
                    },
                    "start": 650,
                    "end": 659
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 648,
                  "end": 660
                }
              ],
              "start": 638,
              "end": 699
            },
            "declare": false,
            "start": 606,
            "end": 699
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 715,
              "end": 717
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
                    "start": 718,
                    "end": 719
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 718,
                  "end": 719
                }
              ],
              "start": 717,
              "end": 720
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
                  "start": 729,
                  "end": 733
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
                        "start": 734,
                        "end": 735
                      },
                      "typeArguments": null,
                      "start": 734,
                      "end": 735
                    }
                  ],
                  "start": 733,
                  "end": 736
                },
                "start": 729,
                "end": 736
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
                    "start": 747,
                    "end": 749
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
                                "start": 756,
                                "end": 757
                              },
                              "typeArguments": null,
                              "start": 756,
                              "end": 757
                            },
                            "start": 754,
                            "end": 757
                          },
                          "start": 752,
                          "end": 757
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
                            "start": 762,
                            "end": 763
                          },
                          "typeArguments": null,
                          "start": 762,
                          "end": 763
                        },
                        "start": 759,
                        "end": 763
                      },
                      "start": 751,
                      "end": 763
                    },
                    "start": 749,
                    "end": 763
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 747,
                  "end": 764
                }
              ],
              "start": 737,
              "end": 803
            },
            "declare": false,
            "start": 705,
            "end": 803
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 819,
              "end": 821
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
                    "start": 822,
                    "end": 823
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 822,
                  "end": 823
                }
              ],
              "start": 821,
              "end": 824
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
                  "start": 833,
                  "end": 837
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
                        "start": 838,
                        "end": 839
                      },
                      "typeArguments": null,
                      "start": 838,
                      "end": 839
                    }
                  ],
                  "start": 837,
                  "end": 840
                },
                "start": 833,
                "end": 840
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
                    "start": 851,
                    "end": 853
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
                                "start": 859,
                                "end": 860
                              },
                              "typeArguments": null,
                              "start": 859,
                              "end": 860
                            },
                            "start": 857,
                            "end": 860
                          },
                          "start": 856,
                          "end": 860
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
                            "start": 865,
                            "end": 866
                          },
                          "typeArguments": null,
                          "start": 865,
                          "end": 866
                        },
                        "start": 862,
                        "end": 866
                      },
                      "start": 855,
                      "end": 866
                    },
                    "start": 853,
                    "end": 866
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 851,
                  "end": 867
                }
              ],
              "start": 841,
              "end": 902
            },
            "declare": false,
            "start": 809,
            "end": 902
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 921
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
                    "start": 922,
                    "end": 923
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 922,
                  "end": 923
                }
              ],
              "start": 921,
              "end": 924
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
                  "start": 933,
                  "end": 937
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
                        "start": 938,
                        "end": 939
                      },
                      "typeArguments": null,
                      "start": 938,
                      "end": 939
                    }
                  ],
                  "start": 937,
                  "end": 940
                },
                "start": 933,
                "end": 940
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
                    "start": 951,
                    "end": 953
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
                            "start": 961,
                            "end": 962
                          },
                          "typeArguments": null,
                          "start": 961,
                          "end": 962
                        },
                        "start": 958,
                        "end": 962
                      },
                      "start": 955,
                      "end": 962
                    },
                    "start": 953,
                    "end": 962
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 951,
                  "end": 963
                }
              ],
              "start": 941,
              "end": 998
            },
            "declare": false,
            "start": 909,
            "end": 998
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1016
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
                    "start": 1017,
                    "end": 1018
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1017,
                  "end": 1018
                }
              ],
              "start": 1016,
              "end": 1019
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
                  "start": 1028,
                  "end": 1032
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
                        "start": 1033,
                        "end": 1034
                      },
                      "typeArguments": null,
                      "start": 1033,
                      "end": 1034
                    }
                  ],
                  "start": 1032,
                  "end": 1035
                },
                "start": 1028,
                "end": 1035
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
                    "start": 1046,
                    "end": 1048
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
                                "start": 1055,
                                "end": 1056
                              },
                              "typeArguments": null,
                              "start": 1055,
                              "end": 1056
                            },
                            "start": 1053,
                            "end": 1056
                          },
                          "start": 1051,
                          "end": 1056
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
                            "start": 1061,
                            "end": 1062
                          },
                          "typeArguments": null,
                          "start": 1061,
                          "end": 1062
                        },
                        "start": 1058,
                        "end": 1062
                      },
                      "start": 1050,
                      "end": 1062
                    },
                    "start": 1048,
                    "end": 1062
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1046,
                  "end": 1063
                }
              ],
              "start": 1036,
              "end": 1098
            },
            "declare": false,
            "start": 1004,
            "end": 1098
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 1114,
              "end": 1116
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
                    "start": 1117,
                    "end": 1118
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1117,
                  "end": 1118
                }
              ],
              "start": 1116,
              "end": 1119
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
                  "start": 1128,
                  "end": 1132
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
                        "start": 1133,
                        "end": 1134
                      },
                      "typeArguments": null,
                      "start": 1133,
                      "end": 1134
                    }
                  ],
                  "start": 1132,
                  "end": 1135
                },
                "start": 1128,
                "end": 1135
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
                    "start": 1146,
                    "end": 1148
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
                                "start": 1154,
                                "end": 1155
                              },
                              "typeArguments": null,
                              "start": 1154,
                              "end": 1155
                            },
                            "start": 1152,
                            "end": 1155
                          },
                          "start": 1151,
                          "end": 1155
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
                            "start": 1160,
                            "end": 1161
                          },
                          "typeArguments": null,
                          "start": 1160,
                          "end": 1161
                        },
                        "start": 1157,
                        "end": 1161
                      },
                      "start": 1150,
                      "end": 1161
                    },
                    "start": 1148,
                    "end": 1161
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1146,
                  "end": 1162
                }
              ],
              "start": 1136,
              "end": 1201
            },
            "declare": false,
            "start": 1104,
            "end": 1201
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 1217,
              "end": 1220
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
                    "start": 1221,
                    "end": 1222
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1221,
                  "end": 1222
                }
              ],
              "start": 1220,
              "end": 1223
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
                  "start": 1232,
                  "end": 1236
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
                        "start": 1237,
                        "end": 1238
                      },
                      "typeArguments": null,
                      "start": 1237,
                      "end": 1238
                    }
                  ],
                  "start": 1236,
                  "end": 1239
                },
                "start": 1232,
                "end": 1239
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
                    "start": 1250,
                    "end": 1252
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
                                "start": 1258,
                                "end": 1259
                              },
                              "typeArguments": null,
                              "start": 1258,
                              "end": 1259
                            },
                            "start": 1256,
                            "end": 1259
                          },
                          "start": 1255,
                          "end": 1259
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
                                "start": 1264,
                                "end": 1265
                              },
                              "typeArguments": null,
                              "start": 1264,
                              "end": 1265
                            },
                            "start": 1262,
                            "end": 1265
                          },
                          "start": 1261,
                          "end": 1265
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
                            "start": 1270,
                            "end": 1271
                          },
                          "typeArguments": null,
                          "start": 1270,
                          "end": 1271
                        },
                        "start": 1267,
                        "end": 1271
                      },
                      "start": 1254,
                      "end": 1271
                    },
                    "start": 1252,
                    "end": 1271
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1250,
                  "end": 1272
                }
              ],
              "start": 1240,
              "end": 1314
            },
            "declare": false,
            "start": 1207,
            "end": 1314
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 1331,
              "end": 1334
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
                    "start": 1335,
                    "end": 1336
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1335,
                  "end": 1336
                }
              ],
              "start": 1334,
              "end": 1337
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
                  "start": 1346,
                  "end": 1350
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
                        "start": 1351,
                        "end": 1352
                      },
                      "typeArguments": null,
                      "start": 1351,
                      "end": 1352
                    }
                  ],
                  "start": 1350,
                  "end": 1353
                },
                "start": 1346,
                "end": 1353
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
                    "start": 1364,
                    "end": 1366
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
                            "start": 1374,
                            "end": 1375
                          },
                          "typeArguments": null,
                          "start": 1374,
                          "end": 1375
                        },
                        "start": 1371,
                        "end": 1375
                      },
                      "start": 1368,
                      "end": 1375
                    },
                    "start": 1366,
                    "end": 1375
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1364,
                  "end": 1376
                }
              ],
              "start": 1354,
              "end": 1411
            },
            "declare": false,
            "start": 1321,
            "end": 1411
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1430
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
                    "start": 1431,
                    "end": 1432
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1431,
                  "end": 1432
                }
              ],
              "start": 1430,
              "end": 1433
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
                  "start": 1442,
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
                        "name": "T",
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
                "start": 1442,
                "end": 1449
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
                    "start": 1460,
                    "end": 1462
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
                                "start": 1469,
                                "end": 1470
                              },
                              "typeArguments": null,
                              "start": 1469,
                              "end": 1470
                            },
                            "start": 1467,
                            "end": 1470
                          },
                          "start": 1465,
                          "end": 1470
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
                                "start": 1476,
                                "end": 1477
                              },
                              "typeArguments": null,
                              "start": 1476,
                              "end": 1477
                            },
                            "start": 1474,
                            "end": 1477
                          },
                          "start": 1472,
                          "end": 1477
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
                            "start": 1482,
                            "end": 1483
                          },
                          "typeArguments": null,
                          "start": 1482,
                          "end": 1483
                        },
                        "start": 1479,
                        "end": 1483
                      },
                      "start": 1464,
                      "end": 1483
                    },
                    "start": 1462,
                    "end": 1483
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1460,
                  "end": 1484
                }
              ],
              "start": 1450,
              "end": 1519
            },
            "declare": false,
            "start": 1417,
            "end": 1519
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 1535,
              "end": 1538
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
                    "start": 1539,
                    "end": 1540
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1539,
                  "end": 1540
                }
              ],
              "start": 1538,
              "end": 1541
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
                  "start": 1550,
                  "end": 1554
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
                        "start": 1555,
                        "end": 1556
                      },
                      "typeArguments": null,
                      "start": 1555,
                      "end": 1556
                    }
                  ],
                  "start": 1554,
                  "end": 1557
                },
                "start": 1550,
                "end": 1557
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
                    "start": 1568,
                    "end": 1570
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
                                "start": 1576,
                                "end": 1577
                              },
                              "typeArguments": null,
                              "start": 1576,
                              "end": 1577
                            },
                            "start": 1574,
                            "end": 1577
                          },
                          "start": 1573,
                          "end": 1577
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
                            "start": 1582,
                            "end": 1583
                          },
                          "typeArguments": null,
                          "start": 1582,
                          "end": 1583
                        },
                        "start": 1579,
                        "end": 1583
                      },
                      "start": 1572,
                      "end": 1583
                    },
                    "start": 1570,
                    "end": 1583
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1568,
                  "end": 1584
                }
              ],
              "start": 1558,
              "end": 1623
            },
            "declare": false,
            "start": 1525,
            "end": 1623
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 1639,
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
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1654,
                  "end": 1658
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
                        "start": 1659,
                        "end": 1660
                      },
                      "typeArguments": null,
                      "start": 1659,
                      "end": 1660
                    }
                  ],
                  "start": 1658,
                  "end": 1661
                },
                "start": 1654,
                "end": 1661
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
                    "start": 1672,
                    "end": 1674
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
                                "start": 1680,
                                "end": 1681
                              },
                              "typeArguments": null,
                              "start": 1680,
                              "end": 1681
                            },
                            "start": 1678,
                            "end": 1681
                          },
                          "start": 1677,
                          "end": 1681
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
                                "start": 1686,
                                "end": 1687
                              },
                              "typeArguments": null,
                              "start": 1686,
                              "end": 1687
                            },
                            "start": 1684,
                            "end": 1687
                          },
                          "start": 1683,
                          "end": 1687
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
                            "start": 1692,
                            "end": 1693
                          },
                          "typeArguments": null,
                          "start": 1692,
                          "end": 1693
                        },
                        "start": 1689,
                        "end": 1693
                      },
                      "start": 1676,
                      "end": 1693
                    },
                    "start": 1674,
                    "end": 1693
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1672,
                  "end": 1694
                }
              ],
              "start": 1662,
              "end": 1730
            },
            "declare": false,
            "start": 1629,
            "end": 1730
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 1747,
              "end": 1750
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
                    "start": 1751,
                    "end": 1752
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1751,
                  "end": 1752
                }
              ],
              "start": 1750,
              "end": 1753
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
                  "start": 1762,
                  "end": 1766
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
                        "start": 1767,
                        "end": 1768
                      },
                      "typeArguments": null,
                      "start": 1767,
                      "end": 1768
                    }
                  ],
                  "start": 1766,
                  "end": 1769
                },
                "start": 1762,
                "end": 1769
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
                    "start": 1780,
                    "end": 1782
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
                            "start": 1790,
                            "end": 1791
                          },
                          "typeArguments": null,
                          "start": 1790,
                          "end": 1791
                        },
                        "start": 1787,
                        "end": 1791
                      },
                      "start": 1784,
                      "end": 1791
                    },
                    "start": 1782,
                    "end": 1791
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1780,
                  "end": 1792
                }
              ],
              "start": 1770,
              "end": 1827
            },
            "declare": false,
            "start": 1737,
            "end": 1827
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 1843,
              "end": 1846
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
                    "start": 1847,
                    "end": 1848
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1847,
                  "end": 1848
                }
              ],
              "start": 1846,
              "end": 1849
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
                  "start": 1858,
                  "end": 1862
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
                        "start": 1863,
                        "end": 1864
                      },
                      "typeArguments": null,
                      "start": 1863,
                      "end": 1864
                    }
                  ],
                  "start": 1862,
                  "end": 1865
                },
                "start": 1858,
                "end": 1865
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
                    "start": 1876,
                    "end": 1878
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
                                "start": 1885,
                                "end": 1886
                              },
                              "typeArguments": null,
                              "start": 1885,
                              "end": 1886
                            },
                            "start": 1883,
                            "end": 1886
                          },
                          "start": 1881,
                          "end": 1886
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
                                "start": 1892,
                                "end": 1893
                              },
                              "typeArguments": null,
                              "start": 1892,
                              "end": 1893
                            },
                            "start": 1890,
                            "end": 1893
                          },
                          "start": 1888,
                          "end": 1893
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
                            "start": 1898,
                            "end": 1899
                          },
                          "typeArguments": null,
                          "start": 1898,
                          "end": 1899
                        },
                        "start": 1895,
                        "end": 1899
                      },
                      "start": 1880,
                      "end": 1899
                    },
                    "start": 1878,
                    "end": 1899
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1876,
                  "end": 1900
                }
              ],
              "start": 1866,
              "end": 1935
            },
            "declare": false,
            "start": 1833,
            "end": 1935
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 1951,
              "end": 1954
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
                    "start": 1955,
                    "end": 1956
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1955,
                  "end": 1956
                }
              ],
              "start": 1954,
              "end": 1957
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
                  "start": 1966,
                  "end": 1970
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
                        "start": 1971,
                        "end": 1972
                      },
                      "typeArguments": null,
                      "start": 1971,
                      "end": 1972
                    }
                  ],
                  "start": 1970,
                  "end": 1973
                },
                "start": 1966,
                "end": 1973
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
                    "start": 1984,
                    "end": 1986
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
                                "start": 1992,
                                "end": 1993
                              },
                              "typeArguments": null,
                              "start": 1992,
                              "end": 1993
                            },
                            "start": 1990,
                            "end": 1993
                          },
                          "start": 1989,
                          "end": 1993
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
                            "start": 1998,
                            "end": 1999
                          },
                          "typeArguments": null,
                          "start": 1998,
                          "end": 1999
                        },
                        "start": 1995,
                        "end": 1999
                      },
                      "start": 1988,
                      "end": 1999
                    },
                    "start": 1986,
                    "end": 1999
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1984,
                  "end": 2000
                }
              ],
              "start": 1974,
              "end": 2038
            },
            "declare": false,
            "start": 1941,
            "end": 2038
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 2054,
              "end": 2057
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
                    "start": 2058,
                    "end": 2059
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2058,
                  "end": 2059
                }
              ],
              "start": 2057,
              "end": 2060
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
                  "start": 2069,
                  "end": 2073
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
                        "start": 2074,
                        "end": 2075
                      },
                      "typeArguments": null,
                      "start": 2074,
                      "end": 2075
                    }
                  ],
                  "start": 2073,
                  "end": 2076
                },
                "start": 2069,
                "end": 2076
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
                    "start": 2087,
                    "end": 2089
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
                                "start": 2095,
                                "end": 2096
                              },
                              "typeArguments": null,
                              "start": 2095,
                              "end": 2096
                            },
                            "start": 2093,
                            "end": 2096
                          },
                          "start": 2092,
                          "end": 2096
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
                                "start": 2101,
                                "end": 2102
                              },
                              "typeArguments": null,
                              "start": 2101,
                              "end": 2102
                            },
                            "start": 2099,
                            "end": 2102
                          },
                          "start": 2098,
                          "end": 2102
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
                            "start": 2107,
                            "end": 2108
                          },
                          "typeArguments": null,
                          "start": 2107,
                          "end": 2108
                        },
                        "start": 2104,
                        "end": 2108
                      },
                      "start": 2091,
                      "end": 2108
                    },
                    "start": 2089,
                    "end": 2108
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2087,
                  "end": 2109
                }
              ],
              "start": 2077,
              "end": 2145
            },
            "declare": false,
            "start": 2044,
            "end": 2145
          }
        ],
        "start": 127,
        "end": 2147
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 102,
      "end": 2147
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesInvalid",
        "optional": false,
        "typeAnnotation": null,
        "start": 2159,
        "end": 2183
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
              "start": 2232,
              "end": 2237
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
                    "start": 2248,
                    "end": 2249
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
                              "start": 2252,
                              "end": 2253
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2252,
                            "end": 2253
                          }
                        ],
                        "start": 2251,
                        "end": 2254
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
                            "start": 2260,
                            "end": 2261
                          },
                          "typeArguments": null,
                          "start": 2260,
                          "end": 2261
                        },
                        "start": 2257,
                        "end": 2261
                      },
                      "start": 2251,
                      "end": 2261
                    },
                    "start": 2249,
                    "end": 2261
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2248,
                  "end": 2262
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
                    "start": 2271,
                    "end": 2273
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
                              "start": 2276,
                              "end": 2277
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2276,
                            "end": 2277
                          }
                        ],
                        "start": 2275,
                        "end": 2278
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
                                "start": 2283,
                                "end": 2284
                              },
                              "typeArguments": null,
                              "start": 2283,
                              "end": 2284
                            },
                            "start": 2281,
                            "end": 2284
                          },
                          "start": 2279,
                          "end": 2284
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
                            "start": 2289,
                            "end": 2290
                          },
                          "typeArguments": null,
                          "start": 2289,
                          "end": 2290
                        },
                        "start": 2286,
                        "end": 2290
                      },
                      "start": 2275,
                      "end": 2290
                    },
                    "start": 2273,
                    "end": 2290
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2271,
                  "end": 2291
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
                    "start": 2300,
                    "end": 2302
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
                              "start": 2305,
                              "end": 2306
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2305,
                            "end": 2306
                          }
                        ],
                        "start": 2304,
                        "end": 2307
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
                                "start": 2311,
                                "end": 2312
                              },
                              "typeArguments": null,
                              "start": 2311,
                              "end": 2312
                            },
                            "start": 2309,
                            "end": 2312
                          },
                          "start": 2308,
                          "end": 2312
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
                            "start": 2317,
                            "end": 2318
                          },
                          "typeArguments": null,
                          "start": 2317,
                          "end": 2318
                        },
                        "start": 2314,
                        "end": 2318
                      },
                      "start": 2304,
                      "end": 2318
                    },
                    "start": 2302,
                    "end": 2318
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2300,
                  "end": 2319
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
                    "start": 2328,
                    "end": 2330
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
                              "start": 2333,
                              "end": 2334
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2333,
                            "end": 2334
                          }
                        ],
                        "start": 2332,
                        "end": 2335
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
                                "start": 2339,
                                "end": 2340
                              },
                              "typeArguments": null,
                              "start": 2339,
                              "end": 2340
                            },
                            "start": 2337,
                            "end": 2340
                          },
                          "start": 2336,
                          "end": 2340
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
                                "start": 2346,
                                "end": 2347
                              },
                              "typeArguments": null,
                              "start": 2346,
                              "end": 2347
                            },
                            "start": 2344,
                            "end": 2347
                          },
                          "start": 2342,
                          "end": 2347
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
                            "start": 2352,
                            "end": 2353
                          },
                          "typeArguments": null,
                          "start": 2352,
                          "end": 2353
                        },
                        "start": 2349,
                        "end": 2353
                      },
                      "start": 2332,
                      "end": 2353
                    },
                    "start": 2330,
                    "end": 2353
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2328,
                  "end": 2354
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
                    "start": 2363,
                    "end": 2365
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
                              "start": 2368,
                              "end": 2369
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2368,
                            "end": 2369
                          }
                        ],
                        "start": 2367,
                        "end": 2370
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
                                "start": 2375,
                                "end": 2376
                              },
                              "typeArguments": null,
                              "start": 2375,
                              "end": 2376
                            },
                            "start": 2373,
                            "end": 2376
                          },
                          "start": 2371,
                          "end": 2376
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
                                "start": 2382,
                                "end": 2383
                              },
                              "typeArguments": null,
                              "start": 2382,
                              "end": 2383
                            },
                            "start": 2380,
                            "end": 2383
                          },
                          "start": 2378,
                          "end": 2383
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
                            "start": 2388,
                            "end": 2389
                          },
                          "typeArguments": null,
                          "start": 2388,
                          "end": 2389
                        },
                        "start": 2385,
                        "end": 2389
                      },
                      "start": 2367,
                      "end": 2389
                    },
                    "start": 2365,
                    "end": 2389
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2363,
                  "end": 2390
                }
              ],
              "start": 2238,
              "end": 2396
            },
            "declare": false,
            "start": 2222,
            "end": 2396
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2412,
              "end": 2414
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
                    "start": 2415,
                    "end": 2416
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2415,
                  "end": 2416
                }
              ],
              "start": 2414,
              "end": 2417
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
                  "start": 2426,
                  "end": 2431
                },
                "typeArguments": null,
                "start": 2426,
                "end": 2431
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
                    "start": 2442,
                    "end": 2443
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
                            "start": 2451,
                            "end": 2452
                          },
                          "typeArguments": null,
                          "start": 2451,
                          "end": 2452
                        },
                        "start": 2448,
                        "end": 2452
                      },
                      "start": 2445,
                      "end": 2452
                    },
                    "start": 2443,
                    "end": 2452
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2442,
                  "end": 2453
                }
              ],
              "start": 2432,
              "end": 2460
            },
            "declare": false,
            "start": 2402,
            "end": 2460
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2476,
              "end": 2478
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
                    "start": 2479,
                    "end": 2480
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2479,
                  "end": 2480
                }
              ],
              "start": 2478,
              "end": 2481
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
                  "start": 2490,
                  "end": 2495
                },
                "typeArguments": null,
                "start": 2490,
                "end": 2495
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
                    "start": 2506,
                    "end": 2507
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
                                "start": 2514,
                                "end": 2515
                              },
                              "typeArguments": null,
                              "start": 2514,
                              "end": 2515
                            },
                            "start": 2512,
                            "end": 2515
                          },
                          "start": 2510,
                          "end": 2515
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
                            "start": 2520,
                            "end": 2521
                          },
                          "typeArguments": null,
                          "start": 2520,
                          "end": 2521
                        },
                        "start": 2517,
                        "end": 2521
                      },
                      "start": 2509,
                      "end": 2521
                    },
                    "start": 2507,
                    "end": 2521
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2506,
                  "end": 2522
                }
              ],
              "start": 2496,
              "end": 2528
            },
            "declare": false,
            "start": 2466,
            "end": 2528
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 2544,
              "end": 2546
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
                    "start": 2547,
                    "end": 2548
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2547,
                  "end": 2548
                }
              ],
              "start": 2546,
              "end": 2549
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
                  "start": 2558,
                  "end": 2563
                },
                "typeArguments": null,
                "start": 2558,
                "end": 2563
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
                    "start": 2574,
                    "end": 2575
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
                                "start": 2581,
                                "end": 2582
                              },
                              "typeArguments": null,
                              "start": 2581,
                              "end": 2582
                            },
                            "start": 2579,
                            "end": 2582
                          },
                          "start": 2578,
                          "end": 2582
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
                            "start": 2587,
                            "end": 2588
                          },
                          "typeArguments": null,
                          "start": 2587,
                          "end": 2588
                        },
                        "start": 2584,
                        "end": 2588
                      },
                      "start": 2577,
                      "end": 2588
                    },
                    "start": 2575,
                    "end": 2588
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2574,
                  "end": 2589
                }
              ],
              "start": 2564,
              "end": 2596
            },
            "declare": false,
            "start": 2534,
            "end": 2596
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 2613,
              "end": 2615
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
                    "start": 2616,
                    "end": 2617
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2616,
                  "end": 2617
                }
              ],
              "start": 2615,
              "end": 2618
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
                  "start": 2627,
                  "end": 2632
                },
                "typeArguments": null,
                "start": 2627,
                "end": 2632
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
                    "start": 2643,
                    "end": 2645
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
                            "start": 2653,
                            "end": 2654
                          },
                          "typeArguments": null,
                          "start": 2653,
                          "end": 2654
                        },
                        "start": 2650,
                        "end": 2654
                      },
                      "start": 2647,
                      "end": 2654
                    },
                    "start": 2645,
                    "end": 2654
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2643,
                  "end": 2655
                }
              ],
              "start": 2633,
              "end": 2662
            },
            "declare": false,
            "start": 2603,
            "end": 2662
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 2678,
              "end": 2680
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
                    "start": 2681,
                    "end": 2682
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2681,
                  "end": 2682
                }
              ],
              "start": 2680,
              "end": 2683
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
                  "start": 2692,
                  "end": 2697
                },
                "typeArguments": null,
                "start": 2692,
                "end": 2697
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
                    "start": 2708,
                    "end": 2710
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
                                "start": 2717,
                                "end": 2718
                              },
                              "typeArguments": null,
                              "start": 2717,
                              "end": 2718
                            },
                            "start": 2715,
                            "end": 2718
                          },
                          "start": 2713,
                          "end": 2718
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
                            "start": 2723,
                            "end": 2724
                          },
                          "typeArguments": null,
                          "start": 2723,
                          "end": 2724
                        },
                        "start": 2720,
                        "end": 2724
                      },
                      "start": 2712,
                      "end": 2724
                    },
                    "start": 2710,
                    "end": 2724
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2708,
                  "end": 2724
                }
              ],
              "start": 2698,
              "end": 2730
            },
            "declare": false,
            "start": 2668,
            "end": 2730
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 2746,
              "end": 2748
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
                    "start": 2749,
                    "end": 2750
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2749,
                  "end": 2750
                }
              ],
              "start": 2748,
              "end": 2751
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
                  "start": 2760,
                  "end": 2765
                },
                "typeArguments": null,
                "start": 2760,
                "end": 2765
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
                    "start": 2776,
                    "end": 2778
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
                                "start": 2784,
                                "end": 2785
                              },
                              "typeArguments": null,
                              "start": 2784,
                              "end": 2785
                            },
                            "start": 2782,
                            "end": 2785
                          },
                          "start": 2781,
                          "end": 2785
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
                            "start": 2790,
                            "end": 2791
                          },
                          "typeArguments": null,
                          "start": 2790,
                          "end": 2791
                        },
                        "start": 2787,
                        "end": 2791
                      },
                      "start": 2780,
                      "end": 2791
                    },
                    "start": 2778,
                    "end": 2791
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2776,
                  "end": 2792
                }
              ],
              "start": 2766,
              "end": 2798
            },
            "declare": false,
            "start": 2736,
            "end": 2798
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 2815,
              "end": 2817
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
                    "start": 2818,
                    "end": 2819
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2818,
                  "end": 2819
                }
              ],
              "start": 2817,
              "end": 2820
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
                  "start": 2829,
                  "end": 2834
                },
                "typeArguments": null,
                "start": 2829,
                "end": 2834
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
                    "start": 2845,
                    "end": 2847
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
                      "start": 2849,
                      "end": 2856
                    },
                    "start": 2847,
                    "end": 2856
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2845,
                  "end": 2857
                }
              ],
              "start": 2835,
              "end": 2863
            },
            "declare": false,
            "start": 2805,
            "end": 2863
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 2879,
              "end": 2881
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
                    "start": 2882,
                    "end": 2883
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2882,
                  "end": 2883
                }
              ],
              "start": 2881,
              "end": 2884
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
                  "start": 2893,
                  "end": 2898
                },
                "typeArguments": null,
                "start": 2893,
                "end": 2898
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
                    "start": 2909,
                    "end": 2911
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
                                "start": 2918,
                                "end": 2919
                              },
                              "typeArguments": null,
                              "start": 2918,
                              "end": 2919
                            },
                            "start": 2916,
                            "end": 2919
                          },
                          "start": 2914,
                          "end": 2919
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
                            "start": 2924,
                            "end": 2925
                          },
                          "typeArguments": null,
                          "start": 2924,
                          "end": 2925
                        },
                        "start": 2921,
                        "end": 2925
                      },
                      "start": 2913,
                      "end": 2925
                    },
                    "start": 2911,
                    "end": 2925
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2909,
                  "end": 2926
                }
              ],
              "start": 2899,
              "end": 2933
            },
            "declare": false,
            "start": 2869,
            "end": 2933
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 2949,
              "end": 2951
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
                    "start": 2952,
                    "end": 2953
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2952,
                  "end": 2953
                }
              ],
              "start": 2951,
              "end": 2954
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
                  "start": 2963,
                  "end": 2968
                },
                "typeArguments": null,
                "start": 2963,
                "end": 2968
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
                    "start": 2979,
                    "end": 2981
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
                                "start": 2987,
                                "end": 2988
                              },
                              "typeArguments": null,
                              "start": 2987,
                              "end": 2988
                            },
                            "start": 2985,
                            "end": 2988
                          },
                          "start": 2984,
                          "end": 2988
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
                            "start": 2993,
                            "end": 2994
                          },
                          "typeArguments": null,
                          "start": 2993,
                          "end": 2994
                        },
                        "start": 2990,
                        "end": 2994
                      },
                      "start": 2983,
                      "end": 2994
                    },
                    "start": 2981,
                    "end": 2994
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2979,
                  "end": 2995
                }
              ],
              "start": 2969,
              "end": 3002
            },
            "declare": false,
            "start": 2939,
            "end": 3002
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 3018,
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
                                "start": 3063,
                                "end": 3064
                              },
                              "typeArguments": null,
                              "start": 3063,
                              "end": 3064
                            },
                            "start": 3061,
                            "end": 3064
                          },
                          "start": 3060,
                          "end": 3064
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
                            "start": 3069,
                            "end": 3070
                          },
                          "typeArguments": null,
                          "start": 3069,
                          "end": 3070
                        },
                        "start": 3066,
                        "end": 3070
                      },
                      "start": 3053,
                      "end": 3070
                    },
                    "start": 3051,
                    "end": 3070
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3049,
                  "end": 3071
                }
              ],
              "start": 3039,
              "end": 3079
            },
            "declare": false,
            "start": 3008,
            "end": 3079
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 3096,
              "end": 3099
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
                    "start": 3100,
                    "end": 3101
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3100,
                  "end": 3101
                }
              ],
              "start": 3099,
              "end": 3102
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
                  "start": 3111,
                  "end": 3116
                },
                "typeArguments": null,
                "start": 3111,
                "end": 3116
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
                    "start": 3127,
                    "end": 3129
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
                            "start": 3137,
                            "end": 3138
                          },
                          "typeArguments": null,
                          "start": 3137,
                          "end": 3138
                        },
                        "start": 3134,
                        "end": 3138
                      },
                      "start": 3131,
                      "end": 3138
                    },
                    "start": 3129,
                    "end": 3138
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3127,
                  "end": 3139
                }
              ],
              "start": 3117,
              "end": 3146
            },
            "declare": false,
            "start": 3086,
            "end": 3146
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 3162,
              "end": 3165
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
                    "start": 3166,
                    "end": 3167
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3166,
                  "end": 3167
                }
              ],
              "start": 3165,
              "end": 3168
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
                  "start": 3177,
                  "end": 3182
                },
                "typeArguments": null,
                "start": 3177,
                "end": 3182
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
                    "start": 3193,
                    "end": 3195
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
                                "start": 3202,
                                "end": 3203
                              },
                              "typeArguments": null,
                              "start": 3202,
                              "end": 3203
                            },
                            "start": 3200,
                            "end": 3203
                          },
                          "start": 3198,
                          "end": 3203
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
                          "start": 3205,
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
                      "start": 3197,
                      "end": 3216
                    },
                    "start": 3195,
                    "end": 3216
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3193,
                  "end": 3217
                }
              ],
              "start": 3183,
              "end": 3224
            },
            "declare": false,
            "start": 3152,
            "end": 3224
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 3240,
              "end": 3243
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
                    "start": 3244,
                    "end": 3245
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3244,
                  "end": 3245
                }
              ],
              "start": 3243,
              "end": 3246
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
                  "start": 3255,
                  "end": 3260
                },
                "typeArguments": null,
                "start": 3255,
                "end": 3260
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
                    "start": 3271,
                    "end": 3273
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
                                "start": 3279,
                                "end": 3280
                              },
                              "typeArguments": null,
                              "start": 3279,
                              "end": 3280
                            },
                            "start": 3277,
                            "end": 3280
                          },
                          "start": 3276,
                          "end": 3280
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
                            "start": 3285,
                            "end": 3286
                          },
                          "typeArguments": null,
                          "start": 3285,
                          "end": 3286
                        },
                        "start": 3282,
                        "end": 3286
                      },
                      "start": 3275,
                      "end": 3286
                    },
                    "start": 3273,
                    "end": 3286
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3271,
                  "end": 3287
                }
              ],
              "start": 3261,
              "end": 3294
            },
            "declare": false,
            "start": 3230,
            "end": 3294
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 3310,
              "end": 3313
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
                    "start": 3314,
                    "end": 3315
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3314,
                  "end": 3315
                }
              ],
              "start": 3313,
              "end": 3316
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
                  "start": 3325,
                  "end": 3330
                },
                "typeArguments": null,
                "start": 3325,
                "end": 3330
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
                    "start": 3341,
                    "end": 3343
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
                                "start": 3355,
                                "end": 3356
                              },
                              "typeArguments": null,
                              "start": 3355,
                              "end": 3356
                            },
                            "start": 3353,
                            "end": 3356
                          },
                          "start": 3352,
                          "end": 3356
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
                            "start": 3361,
                            "end": 3362
                          },
                          "typeArguments": null,
                          "start": 3361,
                          "end": 3362
                        },
                        "start": 3358,
                        "end": 3362
                      },
                      "start": 3345,
                      "end": 3362
                    },
                    "start": 3343,
                    "end": 3362
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3341,
                  "end": 3363
                }
              ],
              "start": 3331,
              "end": 3370
            },
            "declare": false,
            "start": 3300,
            "end": 3370
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 3387,
              "end": 3390
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
                    "start": 3391,
                    "end": 3392
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3391,
                  "end": 3392
                }
              ],
              "start": 3390,
              "end": 3393
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
                  "start": 3402,
                  "end": 3407
                },
                "typeArguments": null,
                "start": 3402,
                "end": 3407
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
                    "start": 3418,
                    "end": 3420
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
                            "start": 3428,
                            "end": 3429
                          },
                          "typeArguments": null,
                          "start": 3428,
                          "end": 3429
                        },
                        "start": 3425,
                        "end": 3429
                      },
                      "start": 3422,
                      "end": 3429
                    },
                    "start": 3420,
                    "end": 3429
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3418,
                  "end": 3430
                }
              ],
              "start": 3408,
              "end": 3437
            },
            "declare": false,
            "start": 3377,
            "end": 3437
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 3453,
              "end": 3456
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
                    "start": 3457,
                    "end": 3458
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3457,
                  "end": 3458
                }
              ],
              "start": 3456,
              "end": 3459
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
                  "start": 3468,
                  "end": 3473
                },
                "typeArguments": null,
                "start": 3468,
                "end": 3473
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
                    "start": 3484,
                    "end": 3486
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
                                "start": 3493,
                                "end": 3494
                              },
                              "typeArguments": null,
                              "start": 3493,
                              "end": 3494
                            },
                            "start": 3491,
                            "end": 3494
                          },
                          "start": 3489,
                          "end": 3494
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
                                "start": 3500,
                                "end": 3501
                              },
                              "typeArguments": null,
                              "start": 3500,
                              "end": 3501
                            },
                            "start": 3498,
                            "end": 3501
                          },
                          "start": 3496,
                          "end": 3501
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
                            "start": 3506,
                            "end": 3507
                          },
                          "typeArguments": null,
                          "start": 3506,
                          "end": 3507
                        },
                        "start": 3503,
                        "end": 3507
                      },
                      "start": 3488,
                      "end": 3507
                    },
                    "start": 3486,
                    "end": 3507
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3484,
                  "end": 3508
                }
              ],
              "start": 3474,
              "end": 3515
            },
            "declare": false,
            "start": 3443,
            "end": 3515
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 3531,
              "end": 3534
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
                    "start": 3535,
                    "end": 3536
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3535,
                  "end": 3536
                }
              ],
              "start": 3534,
              "end": 3537
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
                  "start": 3546,
                  "end": 3551
                },
                "typeArguments": null,
                "start": 3546,
                "end": 3551
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
                    "start": 3562,
                    "end": 3564
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
                                "start": 3570,
                                "end": 3571
                              },
                              "typeArguments": null,
                              "start": 3570,
                              "end": 3571
                            },
                            "start": 3568,
                            "end": 3571
                          },
                          "start": 3567,
                          "end": 3571
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
                            "start": 3576,
                            "end": 3577
                          },
                          "typeArguments": null,
                          "start": 3576,
                          "end": 3577
                        },
                        "start": 3573,
                        "end": 3577
                      },
                      "start": 3566,
                      "end": 3577
                    },
                    "start": 3564,
                    "end": 3577
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3562,
                  "end": 3578
                }
              ],
              "start": 3552,
              "end": 3584
            },
            "declare": false,
            "start": 3521,
            "end": 3584
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 3600,
              "end": 3603
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
                    "start": 3604,
                    "end": 3605
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3604,
                  "end": 3605
                }
              ],
              "start": 3603,
              "end": 3606
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
                  "start": 3615,
                  "end": 3620
                },
                "typeArguments": null,
                "start": 3615,
                "end": 3620
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
                    "start": 3631,
                    "end": 3633
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
                                "start": 3645,
                                "end": 3646
                              },
                              "typeArguments": null,
                              "start": 3645,
                              "end": 3646
                            },
                            "start": 3643,
                            "end": 3646
                          },
                          "start": 3642,
                          "end": 3646
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
                            "start": 3651,
                            "end": 3652
                          },
                          "typeArguments": null,
                          "start": 3651,
                          "end": 3652
                        },
                        "start": 3648,
                        "end": 3652
                      },
                      "start": 3635,
                      "end": 3652
                    },
                    "start": 3633,
                    "end": 3652
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3631,
                  "end": 3653
                }
              ],
              "start": 3621,
              "end": 3660
            },
            "declare": false,
            "start": 3590,
            "end": 3660
          }
        ],
        "start": 2184,
        "end": 3662
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2149,
      "end": 3662
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericSignaturesValid",
        "optional": false,
        "typeAnnotation": null,
        "start": 3674,
        "end": 3696
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
              "start": 3714,
              "end": 3719
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
                    "start": 3730,
                    "end": 3731
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
                              "start": 3734,
                              "end": 3735
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3734,
                            "end": 3735
                          }
                        ],
                        "start": 3733,
                        "end": 3736
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
                            "start": 3742,
                            "end": 3743
                          },
                          "typeArguments": null,
                          "start": 3742,
                          "end": 3743
                        },
                        "start": 3739,
                        "end": 3743
                      },
                      "start": 3733,
                      "end": 3743
                    },
                    "start": 3731,
                    "end": 3743
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3730,
                  "end": 3744
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
                    "start": 3753,
                    "end": 3755
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
                              "start": 3758,
                              "end": 3759
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3758,
                            "end": 3759
                          }
                        ],
                        "start": 3757,
                        "end": 3760
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
                                "start": 3765,
                                "end": 3766
                              },
                              "typeArguments": null,
                              "start": 3765,
                              "end": 3766
                            },
                            "start": 3763,
                            "end": 3766
                          },
                          "start": 3761,
                          "end": 3766
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
                            "start": 3771,
                            "end": 3772
                          },
                          "typeArguments": null,
                          "start": 3771,
                          "end": 3772
                        },
                        "start": 3768,
                        "end": 3772
                      },
                      "start": 3757,
                      "end": 3772
                    },
                    "start": 3755,
                    "end": 3772
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3753,
                  "end": 3773
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
                    "start": 3782,
                    "end": 3784
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
                              "start": 3787,
                              "end": 3788
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3787,
                            "end": 3788
                          }
                        ],
                        "start": 3786,
                        "end": 3789
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
                                "start": 3793,
                                "end": 3794
                              },
                              "typeArguments": null,
                              "start": 3793,
                              "end": 3794
                            },
                            "start": 3791,
                            "end": 3794
                          },
                          "start": 3790,
                          "end": 3794
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
                            "start": 3799,
                            "end": 3800
                          },
                          "typeArguments": null,
                          "start": 3799,
                          "end": 3800
                        },
                        "start": 3796,
                        "end": 3800
                      },
                      "start": 3786,
                      "end": 3800
                    },
                    "start": 3784,
                    "end": 3800
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3782,
                  "end": 3801
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
                    "start": 3810,
                    "end": 3812
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
                              "start": 3815,
                              "end": 3816
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3815,
                            "end": 3816
                          }
                        ],
                        "start": 3814,
                        "end": 3817
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
                                "start": 3821,
                                "end": 3822
                              },
                              "typeArguments": null,
                              "start": 3821,
                              "end": 3822
                            },
                            "start": 3819,
                            "end": 3822
                          },
                          "start": 3818,
                          "end": 3822
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
                                "start": 3828,
                                "end": 3829
                              },
                              "typeArguments": null,
                              "start": 3828,
                              "end": 3829
                            },
                            "start": 3826,
                            "end": 3829
                          },
                          "start": 3824,
                          "end": 3829
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
                            "start": 3834,
                            "end": 3835
                          },
                          "typeArguments": null,
                          "start": 3834,
                          "end": 3835
                        },
                        "start": 3831,
                        "end": 3835
                      },
                      "start": 3814,
                      "end": 3835
                    },
                    "start": 3812,
                    "end": 3835
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3810,
                  "end": 3836
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
                    "start": 3845,
                    "end": 3847
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
                              "start": 3850,
                              "end": 3851
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3850,
                            "end": 3851
                          }
                        ],
                        "start": 3849,
                        "end": 3852
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
                                "start": 3857,
                                "end": 3858
                              },
                              "typeArguments": null,
                              "start": 3857,
                              "end": 3858
                            },
                            "start": 3855,
                            "end": 3858
                          },
                          "start": 3853,
                          "end": 3858
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
                                "start": 3864,
                                "end": 3865
                              },
                              "typeArguments": null,
                              "start": 3864,
                              "end": 3865
                            },
                            "start": 3862,
                            "end": 3865
                          },
                          "start": 3860,
                          "end": 3865
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
                            "start": 3870,
                            "end": 3871
                          },
                          "typeArguments": null,
                          "start": 3870,
                          "end": 3871
                        },
                        "start": 3867,
                        "end": 3871
                      },
                      "start": 3849,
                      "end": 3871
                    },
                    "start": 3847,
                    "end": 3871
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3845,
                  "end": 3872
                }
              ],
              "start": 3720,
              "end": 3878
            },
            "declare": false,
            "start": 3704,
            "end": 3878
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3912,
              "end": 3914
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
                  "start": 3923,
                  "end": 3928
                },
                "typeArguments": null,
                "start": 3923,
                "end": 3928
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
                    "start": 3939,
                    "end": 3940
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
                              "start": 3943,
                              "end": 3944
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 3943,
                            "end": 3944
                          }
                        ],
                        "start": 3942,
                        "end": 3945
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
                            "start": 3951,
                            "end": 3952
                          },
                          "typeArguments": null,
                          "start": 3951,
                          "end": 3952
                        },
                        "start": 3948,
                        "end": 3952
                      },
                      "start": 3942,
                      "end": 3952
                    },
                    "start": 3940,
                    "end": 3952
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3939,
                  "end": 3953
                }
              ],
              "start": 3929,
              "end": 3997
            },
            "declare": false,
            "start": 3902,
            "end": 3997
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4013,
              "end": 4015
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
                  "start": 4024,
                  "end": 4029
                },
                "typeArguments": null,
                "start": 4024,
                "end": 4029
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
                    "start": 4040,
                    "end": 4041
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
                              "start": 4044,
                              "end": 4045
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4044,
                            "end": 4045
                          }
                        ],
                        "start": 4043,
                        "end": 4046
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
                                "start": 4051,
                                "end": 4052
                              },
                              "typeArguments": null,
                              "start": 4051,
                              "end": 4052
                            },
                            "start": 4049,
                            "end": 4052
                          },
                          "start": 4047,
                          "end": 4052
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
                            "start": 4057,
                            "end": 4058
                          },
                          "typeArguments": null,
                          "start": 4057,
                          "end": 4058
                        },
                        "start": 4054,
                        "end": 4058
                      },
                      "start": 4043,
                      "end": 4058
                    },
                    "start": 4041,
                    "end": 4058
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4040,
                  "end": 4059
                }
              ],
              "start": 4030,
              "end": 4160
            },
            "declare": false,
            "start": 4003,
            "end": 4160
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I3",
              "optional": false,
              "typeAnnotation": null,
              "start": 4176,
              "end": 4178
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
                  "start": 4187,
                  "end": 4192
                },
                "typeArguments": null,
                "start": 4187,
                "end": 4192
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
                    "start": 4203,
                    "end": 4204
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
                              "start": 4207,
                              "end": 4208
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4207,
                            "end": 4208
                          }
                        ],
                        "start": 4206,
                        "end": 4209
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
                                "start": 4213,
                                "end": 4214
                              },
                              "typeArguments": null,
                              "start": 4213,
                              "end": 4214
                            },
                            "start": 4211,
                            "end": 4214
                          },
                          "start": 4210,
                          "end": 4214
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
                            "start": 4219,
                            "end": 4220
                          },
                          "typeArguments": null,
                          "start": 4219,
                          "end": 4220
                        },
                        "start": 4216,
                        "end": 4220
                      },
                      "start": 4206,
                      "end": 4220
                    },
                    "start": 4204,
                    "end": 4220
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4203,
                  "end": 4221
                }
              ],
              "start": 4193,
              "end": 4322
            },
            "declare": false,
            "start": 4166,
            "end": 4322
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I4",
              "optional": false,
              "typeAnnotation": null,
              "start": 4339,
              "end": 4341
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
                  "start": 4350,
                  "end": 4355
                },
                "typeArguments": null,
                "start": 4350,
                "end": 4355
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
                    "start": 4366,
                    "end": 4368
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
                              "start": 4371,
                              "end": 4372
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4371,
                            "end": 4372
                          }
                        ],
                        "start": 4370,
                        "end": 4373
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
                            "start": 4379,
                            "end": 4380
                          },
                          "typeArguments": null,
                          "start": 4379,
                          "end": 4380
                        },
                        "start": 4376,
                        "end": 4380
                      },
                      "start": 4370,
                      "end": 4380
                    },
                    "start": 4368,
                    "end": 4380
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4366,
                  "end": 4381
                }
              ],
              "start": 4356,
              "end": 4482
            },
            "declare": false,
            "start": 4329,
            "end": 4482
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I5",
              "optional": false,
              "typeAnnotation": null,
              "start": 4498,
              "end": 4500
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
                  "start": 4509,
                  "end": 4514
                },
                "typeArguments": null,
                "start": 4509,
                "end": 4514
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
                    "start": 4525,
                    "end": 4527
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
                              "start": 4530,
                              "end": 4531
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4530,
                            "end": 4531
                          }
                        ],
                        "start": 4529,
                        "end": 4532
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
                                "start": 4537,
                                "end": 4538
                              },
                              "typeArguments": null,
                              "start": 4537,
                              "end": 4538
                            },
                            "start": 4535,
                            "end": 4538
                          },
                          "start": 4533,
                          "end": 4538
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
                            "start": 4543,
                            "end": 4544
                          },
                          "typeArguments": null,
                          "start": 4543,
                          "end": 4544
                        },
                        "start": 4540,
                        "end": 4544
                      },
                      "start": 4529,
                      "end": 4544
                    },
                    "start": 4527,
                    "end": 4544
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4525,
                  "end": 4545
                }
              ],
              "start": 4515,
              "end": 4568
            },
            "declare": false,
            "start": 4488,
            "end": 4568
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I6",
              "optional": false,
              "typeAnnotation": null,
              "start": 4584,
              "end": 4586
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
                  "start": 4595,
                  "end": 4600
                },
                "typeArguments": null,
                "start": 4595,
                "end": 4600
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
                    "start": 4611,
                    "end": 4613
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
                              "start": 4616,
                              "end": 4617
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4616,
                            "end": 4617
                          }
                        ],
                        "start": 4615,
                        "end": 4618
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
                                "start": 4622,
                                "end": 4623
                              },
                              "typeArguments": null,
                              "start": 4622,
                              "end": 4623
                            },
                            "start": 4620,
                            "end": 4623
                          },
                          "start": 4619,
                          "end": 4623
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
                            "start": 4628,
                            "end": 4629
                          },
                          "typeArguments": null,
                          "start": 4628,
                          "end": 4629
                        },
                        "start": 4625,
                        "end": 4629
                      },
                      "start": 4615,
                      "end": 4629
                    },
                    "start": 4613,
                    "end": 4629
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4611,
                  "end": 4630
                }
              ],
              "start": 4601,
              "end": 4665
            },
            "declare": false,
            "start": 4574,
            "end": 4665
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I7",
              "optional": false,
              "typeAnnotation": null,
              "start": 4682,
              "end": 4684
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
                  "start": 4693,
                  "end": 4698
                },
                "typeArguments": null,
                "start": 4693,
                "end": 4698
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
                    "start": 4709,
                    "end": 4711
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
                              "start": 4714,
                              "end": 4715
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4714,
                            "end": 4715
                          }
                        ],
                        "start": 4713,
                        "end": 4716
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
                            "start": 4722,
                            "end": 4723
                          },
                          "typeArguments": null,
                          "start": 4722,
                          "end": 4723
                        },
                        "start": 4719,
                        "end": 4723
                      },
                      "start": 4713,
                      "end": 4723
                    },
                    "start": 4711,
                    "end": 4723
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4709,
                  "end": 4724
                }
              ],
              "start": 4699,
              "end": 4802
            },
            "declare": false,
            "start": 4672,
            "end": 4802
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I8",
              "optional": false,
              "typeAnnotation": null,
              "start": 4818,
              "end": 4820
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
                  "start": 4829,
                  "end": 4834
                },
                "typeArguments": null,
                "start": 4829,
                "end": 4834
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
                    "start": 4845,
                    "end": 4847
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
                              "start": 4850,
                              "end": 4851
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4850,
                            "end": 4851
                          }
                        ],
                        "start": 4849,
                        "end": 4852
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
                                "start": 4857,
                                "end": 4858
                              },
                              "typeArguments": null,
                              "start": 4857,
                              "end": 4858
                            },
                            "start": 4855,
                            "end": 4858
                          },
                          "start": 4853,
                          "end": 4858
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
                            "start": 4863,
                            "end": 4864
                          },
                          "typeArguments": null,
                          "start": 4863,
                          "end": 4864
                        },
                        "start": 4860,
                        "end": 4864
                      },
                      "start": 4849,
                      "end": 4864
                    },
                    "start": 4847,
                    "end": 4864
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4845,
                  "end": 4865
                }
              ],
              "start": 4835,
              "end": 4900
            },
            "declare": false,
            "start": 4808,
            "end": 4900
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I9",
              "optional": false,
              "typeAnnotation": null,
              "start": 4916,
              "end": 4918
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
                  "start": 4927,
                  "end": 4932
                },
                "typeArguments": null,
                "start": 4927,
                "end": 4932
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
                    "start": 4943,
                    "end": 4945
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
                              "start": 4948,
                              "end": 4949
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 4948,
                            "end": 4949
                          }
                        ],
                        "start": 4947,
                        "end": 4950
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
                                "start": 4954,
                                "end": 4955
                              },
                              "typeArguments": null,
                              "start": 4954,
                              "end": 4955
                            },
                            "start": 4952,
                            "end": 4955
                          },
                          "start": 4951,
                          "end": 4955
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
                            "start": 4960,
                            "end": 4961
                          },
                          "typeArguments": null,
                          "start": 4960,
                          "end": 4961
                        },
                        "start": 4957,
                        "end": 4961
                      },
                      "start": 4947,
                      "end": 4961
                    },
                    "start": 4945,
                    "end": 4961
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4943,
                  "end": 4962
                }
              ],
              "start": 4933,
              "end": 5017
            },
            "declare": false,
            "start": 4906,
            "end": 5017
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I10",
              "optional": false,
              "typeAnnotation": null,
              "start": 5033,
              "end": 5036
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
                  "start": 5045,
                  "end": 5050
                },
                "typeArguments": null,
                "start": 5045,
                "end": 5050
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
                    "start": 5061,
                    "end": 5063
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
                              "start": 5066,
                              "end": 5067
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5066,
                            "end": 5067
                          }
                        ],
                        "start": 5065,
                        "end": 5068
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
                                "start": 5072,
                                "end": 5073
                              },
                              "typeArguments": null,
                              "start": 5072,
                              "end": 5073
                            },
                            "start": 5070,
                            "end": 5073
                          },
                          "start": 5069,
                          "end": 5073
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
                                "start": 5078,
                                "end": 5079
                              },
                              "typeArguments": null,
                              "start": 5078,
                              "end": 5079
                            },
                            "start": 5076,
                            "end": 5079
                          },
                          "start": 5075,
                          "end": 5079
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
                            "start": 5084,
                            "end": 5085
                          },
                          "typeArguments": null,
                          "start": 5084,
                          "end": 5085
                        },
                        "start": 5081,
                        "end": 5085
                      },
                      "start": 5065,
                      "end": 5085
                    },
                    "start": 5063,
                    "end": 5085
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5061,
                  "end": 5086
                }
              ],
              "start": 5051,
              "end": 5128
            },
            "declare": false,
            "start": 5023,
            "end": 5128
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I11",
              "optional": false,
              "typeAnnotation": null,
              "start": 5145,
              "end": 5148
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
                  "start": 5157,
                  "end": 5162
                },
                "typeArguments": null,
                "start": 5157,
                "end": 5162
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
                    "start": 5173,
                    "end": 5175
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
                              "start": 5178,
                              "end": 5179
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5178,
                            "end": 5179
                          }
                        ],
                        "start": 5177,
                        "end": 5180
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
                            "start": 5186,
                            "end": 5187
                          },
                          "typeArguments": null,
                          "start": 5186,
                          "end": 5187
                        },
                        "start": 5183,
                        "end": 5187
                      },
                      "start": 5177,
                      "end": 5187
                    },
                    "start": 5175,
                    "end": 5187
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5173,
                  "end": 5188
                }
              ],
              "start": 5163,
              "end": 5289
            },
            "declare": false,
            "start": 5135,
            "end": 5289
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I12",
              "optional": false,
              "typeAnnotation": null,
              "start": 5305,
              "end": 5308
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
                  "start": 5317,
                  "end": 5322
                },
                "typeArguments": null,
                "start": 5317,
                "end": 5322
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
                    "start": 5333,
                    "end": 5335
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
                              "start": 5338,
                              "end": 5339
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5338,
                            "end": 5339
                          }
                        ],
                        "start": 5337,
                        "end": 5340
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
                                "start": 5345,
                                "end": 5346
                              },
                              "typeArguments": null,
                              "start": 5345,
                              "end": 5346
                            },
                            "start": 5343,
                            "end": 5346
                          },
                          "start": 5341,
                          "end": 5346
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
                                "start": 5352,
                                "end": 5353
                              },
                              "typeArguments": null,
                              "start": 5352,
                              "end": 5353
                            },
                            "start": 5350,
                            "end": 5353
                          },
                          "start": 5348,
                          "end": 5353
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
                            "start": 5358,
                            "end": 5359
                          },
                          "typeArguments": null,
                          "start": 5358,
                          "end": 5359
                        },
                        "start": 5355,
                        "end": 5359
                      },
                      "start": 5337,
                      "end": 5359
                    },
                    "start": 5335,
                    "end": 5359
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5333,
                  "end": 5360
                }
              ],
              "start": 5323,
              "end": 5395
            },
            "declare": false,
            "start": 5295,
            "end": 5395
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I13",
              "optional": false,
              "typeAnnotation": null,
              "start": 5411,
              "end": 5414
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
                  "start": 5423,
                  "end": 5428
                },
                "typeArguments": null,
                "start": 5423,
                "end": 5428
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
                    "start": 5439,
                    "end": 5441
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
                              "start": 5444,
                              "end": 5445
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5444,
                            "end": 5445
                          }
                        ],
                        "start": 5443,
                        "end": 5446
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
                                "start": 5450,
                                "end": 5451
                              },
                              "typeArguments": null,
                              "start": 5450,
                              "end": 5451
                            },
                            "start": 5448,
                            "end": 5451
                          },
                          "start": 5447,
                          "end": 5451
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
                            "start": 5456,
                            "end": 5457
                          },
                          "typeArguments": null,
                          "start": 5456,
                          "end": 5457
                        },
                        "start": 5453,
                        "end": 5457
                      },
                      "start": 5443,
                      "end": 5457
                    },
                    "start": 5441,
                    "end": 5457
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5439,
                  "end": 5458
                }
              ],
              "start": 5429,
              "end": 5497
            },
            "declare": false,
            "start": 5401,
            "end": 5497
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I14",
              "optional": false,
              "typeAnnotation": null,
              "start": 5513,
              "end": 5516
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
                  "start": 5525,
                  "end": 5530
                },
                "typeArguments": null,
                "start": 5525,
                "end": 5530
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
                    "start": 5541,
                    "end": 5543
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
                              "start": 5546,
                              "end": 5547
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5546,
                            "end": 5547
                          }
                        ],
                        "start": 5545,
                        "end": 5548
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
                                "start": 5552,
                                "end": 5553
                              },
                              "typeArguments": null,
                              "start": 5552,
                              "end": 5553
                            },
                            "start": 5550,
                            "end": 5553
                          },
                          "start": 5549,
                          "end": 5553
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
                                "start": 5558,
                                "end": 5559
                              },
                              "typeArguments": null,
                              "start": 5558,
                              "end": 5559
                            },
                            "start": 5556,
                            "end": 5559
                          },
                          "start": 5555,
                          "end": 5559
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
                            "start": 5564,
                            "end": 5565
                          },
                          "typeArguments": null,
                          "start": 5564,
                          "end": 5565
                        },
                        "start": 5561,
                        "end": 5565
                      },
                      "start": 5545,
                      "end": 5565
                    },
                    "start": 5543,
                    "end": 5565
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5541,
                  "end": 5566
                }
              ],
              "start": 5531,
              "end": 5608
            },
            "declare": false,
            "start": 5503,
            "end": 5608
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I15",
              "optional": false,
              "typeAnnotation": null,
              "start": 5625,
              "end": 5628
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
                  "start": 5637,
                  "end": 5642
                },
                "typeArguments": null,
                "start": 5637,
                "end": 5642
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
                    "start": 5653,
                    "end": 5655
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
                              "start": 5658,
                              "end": 5659
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5658,
                            "end": 5659
                          }
                        ],
                        "start": 5657,
                        "end": 5660
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
                            "start": 5666,
                            "end": 5667
                          },
                          "typeArguments": null,
                          "start": 5666,
                          "end": 5667
                        },
                        "start": 5663,
                        "end": 5667
                      },
                      "start": 5657,
                      "end": 5667
                    },
                    "start": 5655,
                    "end": 5667
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5653,
                  "end": 5668
                }
              ],
              "start": 5643,
              "end": 5769
            },
            "declare": false,
            "start": 5615,
            "end": 5769
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I16",
              "optional": false,
              "typeAnnotation": null,
              "start": 5785,
              "end": 5788
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
                  "start": 5797,
                  "end": 5802
                },
                "typeArguments": null,
                "start": 5797,
                "end": 5802
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
                    "start": 5813,
                    "end": 5815
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
                              "start": 5818,
                              "end": 5819
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5818,
                            "end": 5819
                          }
                        ],
                        "start": 5817,
                        "end": 5820
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
                                "start": 5825,
                                "end": 5826
                              },
                              "typeArguments": null,
                              "start": 5825,
                              "end": 5826
                            },
                            "start": 5823,
                            "end": 5826
                          },
                          "start": 5821,
                          "end": 5826
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
                                "start": 5832,
                                "end": 5833
                              },
                              "typeArguments": null,
                              "start": 5832,
                              "end": 5833
                            },
                            "start": 5830,
                            "end": 5833
                          },
                          "start": 5828,
                          "end": 5833
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
                            "start": 5838,
                            "end": 5839
                          },
                          "typeArguments": null,
                          "start": 5838,
                          "end": 5839
                        },
                        "start": 5835,
                        "end": 5839
                      },
                      "start": 5817,
                      "end": 5839
                    },
                    "start": 5815,
                    "end": 5839
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5813,
                  "end": 5840
                }
              ],
              "start": 5803,
              "end": 5875
            },
            "declare": false,
            "start": 5775,
            "end": 5875
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I17",
              "optional": false,
              "typeAnnotation": null,
              "start": 5891,
              "end": 5894
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
                  "start": 5903,
                  "end": 5908
                },
                "typeArguments": null,
                "start": 5903,
                "end": 5908
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
                    "start": 5919,
                    "end": 5921
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
                              "start": 5924,
                              "end": 5925
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 5924,
                            "end": 5925
                          }
                        ],
                        "start": 5923,
                        "end": 5926
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
                                "start": 5930,
                                "end": 5931
                              },
                              "typeArguments": null,
                              "start": 5930,
                              "end": 5931
                            },
                            "start": 5928,
                            "end": 5931
                          },
                          "start": 5927,
                          "end": 5931
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
                            "start": 5936,
                            "end": 5937
                          },
                          "typeArguments": null,
                          "start": 5936,
                          "end": 5937
                        },
                        "start": 5933,
                        "end": 5937
                      },
                      "start": 5923,
                      "end": 5937
                    },
                    "start": 5921,
                    "end": 5937
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5919,
                  "end": 5938
                }
              ],
              "start": 5909,
              "end": 5976
            },
            "declare": false,
            "start": 5881,
            "end": 5976
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I18",
              "optional": false,
              "typeAnnotation": null,
              "start": 5992,
              "end": 5995
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
                  "start": 6004,
                  "end": 6009
                },
                "typeArguments": null,
                "start": 6004,
                "end": 6009
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
                    "start": 6020,
                    "end": 6022
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
                              "start": 6025,
                              "end": 6026
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 6025,
                            "end": 6026
                          }
                        ],
                        "start": 6024,
                        "end": 6027
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
                                "start": 6031,
                                "end": 6032
                              },
                              "typeArguments": null,
                              "start": 6031,
                              "end": 6032
                            },
                            "start": 6029,
                            "end": 6032
                          },
                          "start": 6028,
                          "end": 6032
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
                                "start": 6037,
                                "end": 6038
                              },
                              "typeArguments": null,
                              "start": 6037,
                              "end": 6038
                            },
                            "start": 6035,
                            "end": 6038
                          },
                          "start": 6034,
                          "end": 6038
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
                            "start": 6043,
                            "end": 6044
                          },
                          "typeArguments": null,
                          "start": 6043,
                          "end": 6044
                        },
                        "start": 6040,
                        "end": 6044
                      },
                      "start": 6024,
                      "end": 6044
                    },
                    "start": 6022,
                    "end": 6044
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6020,
                  "end": 6045
                }
              ],
              "start": 6010,
              "end": 6081
            },
            "declare": false,
            "start": 5982,
            "end": 6081
          }
        ],
        "start": 3697,
        "end": 6083
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3664,
      "end": 6083
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 102,
  "end": 6083
}
```
