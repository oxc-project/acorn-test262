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
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 15,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 52
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
                    "start": 53,
                    "end": 54
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 53,
                  "end": 54
                }
              ],
              "start": 52,
              "end": 55
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 70,
                          "end": 76
                        },
                        "start": 68,
                        "end": 76
                      },
                      "start": 67,
                      "end": 76
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 79,
                        "end": 80
                      },
                      "typeArguments": null,
                      "start": 79,
                      "end": 80
                    },
                    "start": 77,
                    "end": 80
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 66,
                  "end": 81
                }
              ],
              "start": 56,
              "end": 87
            },
            "declare": false,
            "start": 32,
            "end": 87
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 123
            },
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
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 140
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
                        "start": 141,
                        "end": 142
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 142
                    }
                  ],
                  "start": 140,
                  "end": 143
                },
                "start": 130,
                "end": 143
              },
              "start": 128,
              "end": 143
            },
            "body": null,
            "expression": false,
            "start": 92,
            "end": 144
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 169
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
                    "start": 170,
                    "end": 171
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 170,
                  "end": 171
                }
              ],
              "start": 169,
              "end": 172
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 193
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 197,
                        "end": 203
                      },
                      "start": 197,
                      "end": 205
                    },
                    "start": 195,
                    "end": 205
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 183,
                  "end": 206
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 218
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 224,
                          "end": 230
                        },
                        "start": 222,
                        "end": 230
                      },
                      "start": 219,
                      "end": 230
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 238,
                            "end": 239
                          },
                          "typeArguments": null,
                          "start": 238,
                          "end": 239
                        },
                        "start": 236,
                        "end": 239
                      },
                      "start": 232,
                      "end": 239
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 242,
                      "end": 249
                    },
                    "start": 240,
                    "end": 249
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 215,
                  "end": 250
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 270
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 276,
                          "end": 282
                        },
                        "start": 274,
                        "end": 282
                      },
                      "start": 271,
                      "end": 282
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                      "start": 284,
                      "end": 291
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 294,
                      "end": 301
                    },
                    "start": 292,
                    "end": 301
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 259,
                  "end": 302
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 314
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 323,
                                  "end": 329
                                },
                                "start": 321,
                                "end": 329
                              },
                              "start": 320,
                              "end": 329
                            },
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
                                    "start": 338,
                                    "end": 339
                                  },
                                  "typeArguments": null,
                                  "start": 338,
                                  "end": 339
                                },
                                "start": 336,
                                "end": 339
                              },
                              "start": 331,
                              "end": 339
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 350,
                                  "end": 353
                                },
                                "start": 348,
                                "end": 353
                              },
                              "start": 341,
                              "end": 353
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 358,
                              "end": 362
                            },
                            "start": 355,
                            "end": 362
                          },
                          "start": 319,
                          "end": 362
                        },
                        "start": 317,
                        "end": 362
                      },
                      "start": 315,
                      "end": 362
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 373,
                          "end": 376
                        },
                        "start": 371,
                        "end": 376
                      },
                      "start": 364,
                      "end": 376
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 379,
                      "end": 383
                    },
                    "start": 377,
                    "end": 383
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 311,
                  "end": 384
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 398
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 407,
                                  "end": 413
                                },
                                "start": 405,
                                "end": 413
                              },
                              "start": 404,
                              "end": 413
                            },
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
                                    "start": 422,
                                    "end": 423
                                  },
                                  "typeArguments": null,
                                  "start": 422,
                                  "end": 423
                                },
                                "start": 420,
                                "end": 423
                              },
                              "start": 415,
                              "end": 423
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 434,
                                  "end": 437
                                },
                                "start": 432,
                                "end": 437
                              },
                              "start": 425,
                              "end": 437
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 442,
                              "end": 446
                            },
                            "start": 439,
                            "end": 446
                          },
                          "start": 403,
                          "end": 446
                        },
                        "start": 401,
                        "end": 446
                      },
                      "start": 399,
                      "end": 446
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 457,
                          "end": 460
                        },
                        "start": 455,
                        "end": 460
                      },
                      "start": 448,
                      "end": 460
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 463,
                      "end": 470
                    },
                    "start": 461,
                    "end": 470
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 393,
                  "end": 471
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 484
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 493,
                                  "end": 499
                                },
                                "start": 491,
                                "end": 499
                              },
                              "start": 490,
                              "end": 499
                            },
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
                                    "start": 508,
                                    "end": 509
                                  },
                                  "typeArguments": null,
                                  "start": 508,
                                  "end": 509
                                },
                                "start": 506,
                                "end": 509
                              },
                              "start": 501,
                              "end": 509
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 520,
                                  "end": 523
                                },
                                "start": 518,
                                "end": 523
                              },
                              "start": 511,
                              "end": 523
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 528,
                              "end": 532
                            },
                            "start": 525,
                            "end": 532
                          },
                          "start": 489,
                          "end": 532
                        },
                        "start": 487,
                        "end": 532
                      },
                      "start": 485,
                      "end": 532
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 543,
                          "end": 546
                        },
                        "start": 541,
                        "end": 546
                      },
                      "start": 534,
                      "end": 546
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 549,
                      "end": 556
                    },
                    "start": 547,
                    "end": 556
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 480,
                  "end": 557
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 571
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 575,
                      "end": 581
                    },
                    "start": 573,
                    "end": 581
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 566,
                  "end": 582
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 591,
                    "end": 597
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 603,
                          "end": 609
                        },
                        "start": 601,
                        "end": 609
                      },
                      "start": 598,
                      "end": 609
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
                        "start": 612,
                        "end": 613
                      },
                      "typeArguments": null,
                      "start": 612,
                      "end": 613
                    },
                    "start": 610,
                    "end": 613
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 591,
                  "end": 614
                }
              ],
              "start": 173,
              "end": 620
            },
            "declare": false,
            "start": 149,
            "end": 620
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 631,
              "end": 646
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
                    "start": 647,
                    "end": 648
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 647,
                  "end": 648
                }
              ],
              "start": 646,
              "end": 649
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 671
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
                        "start": 672,
                        "end": 673
                      },
                      "typeArguments": null,
                      "start": 672,
                      "end": 673
                    }
                  ],
                  "start": 671,
                  "end": 674
                },
                "start": 661,
                "end": 674
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 693,
                    "end": 702
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 685,
                  "end": 703
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 720,
                    "end": 725
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 712,
                  "end": 726
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 742,
                    "end": 752
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 756,
                          "end": 762
                        },
                        "start": 756,
                        "end": 764
                      },
                      "start": 754,
                      "end": 764
                    },
                    "body": null,
                    "expression": false,
                    "start": 752,
                    "end": 765
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 735,
                  "end": 765
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 781,
                    "end": 784
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 790,
                            "end": 796
                          },
                          "start": 788,
                          "end": 796
                        },
                        "start": 785,
                        "end": 796
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 804,
                              "end": 805
                            },
                            "typeArguments": null,
                            "start": 804,
                            "end": 805
                          },
                          "start": 802,
                          "end": 805
                        },
                        "start": 798,
                        "end": 805
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 808,
                        "end": 815
                      },
                      "start": 806,
                      "end": 815
                    },
                    "body": null,
                    "expression": false,
                    "start": 784,
                    "end": 816
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 774,
                  "end": 816
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 843
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 849,
                            "end": 855
                          },
                          "start": 847,
                          "end": 855
                        },
                        "start": 844,
                        "end": 855
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 863,
                              "end": 864
                            },
                            "typeArguments": null,
                            "start": 863,
                            "end": 864
                          },
                          "start": 861,
                          "end": 864
                        },
                        "start": 857,
                        "end": 864
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 867,
                        "end": 874
                      },
                      "start": 865,
                      "end": 874
                    },
                    "body": null,
                    "expression": false,
                    "start": 843,
                    "end": 875
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 825,
                  "end": 875
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
                    "start": 891,
                    "end": 894
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 903,
                                    "end": 909
                                  },
                                  "start": 901,
                                  "end": 909
                                },
                                "start": 900,
                                "end": 909
                              },
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
                                      "start": 918,
                                      "end": 919
                                    },
                                    "typeArguments": null,
                                    "start": 918,
                                    "end": 919
                                  },
                                  "start": 916,
                                  "end": 919
                                },
                                "start": 911,
                                "end": 919
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 930,
                                    "end": 933
                                  },
                                  "start": 928,
                                  "end": 933
                                },
                                "start": 921,
                                "end": 933
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 938,
                                "end": 942
                              },
                              "start": 935,
                              "end": 942
                            },
                            "start": 899,
                            "end": 942
                          },
                          "start": 897,
                          "end": 942
                        },
                        "start": 895,
                        "end": 942
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 953,
                            "end": 956
                          },
                          "start": 951,
                          "end": 956
                        },
                        "start": 944,
                        "end": 956
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 959,
                        "end": 963
                      },
                      "start": 957,
                      "end": 963
                    },
                    "body": null,
                    "expression": false,
                    "start": 894,
                    "end": 964
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 884,
                  "end": 964
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 980,
                    "end": 985
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 994,
                                    "end": 1000
                                  },
                                  "start": 992,
                                  "end": 1000
                                },
                                "start": 991,
                                "end": 1000
                              },
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
                                      "start": 1009,
                                      "end": 1010
                                    },
                                    "typeArguments": null,
                                    "start": 1009,
                                    "end": 1010
                                  },
                                  "start": 1007,
                                  "end": 1010
                                },
                                "start": 1002,
                                "end": 1010
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1021,
                                    "end": 1024
                                  },
                                  "start": 1019,
                                  "end": 1024
                                },
                                "start": 1012,
                                "end": 1024
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1029,
                                "end": 1033
                              },
                              "start": 1026,
                              "end": 1033
                            },
                            "start": 990,
                            "end": 1033
                          },
                          "start": 988,
                          "end": 1033
                        },
                        "start": 986,
                        "end": 1033
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1044,
                            "end": 1047
                          },
                          "start": 1042,
                          "end": 1047
                        },
                        "start": 1035,
                        "end": 1047
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1050,
                        "end": 1057
                      },
                      "start": 1048,
                      "end": 1057
                    },
                    "body": null,
                    "expression": false,
                    "start": 985,
                    "end": 1058
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 973,
                  "end": 1058
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1074,
                    "end": 1078
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1087,
                                    "end": 1093
                                  },
                                  "start": 1085,
                                  "end": 1093
                                },
                                "start": 1084,
                                "end": 1093
                              },
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
                                      "start": 1102,
                                      "end": 1103
                                    },
                                    "typeArguments": null,
                                    "start": 1102,
                                    "end": 1103
                                  },
                                  "start": 1100,
                                  "end": 1103
                                },
                                "start": 1095,
                                "end": 1103
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1114,
                                    "end": 1117
                                  },
                                  "start": 1112,
                                  "end": 1117
                                },
                                "start": 1105,
                                "end": 1117
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1122,
                                "end": 1126
                              },
                              "start": 1119,
                              "end": 1126
                            },
                            "start": 1083,
                            "end": 1126
                          },
                          "start": 1081,
                          "end": 1126
                        },
                        "start": 1079,
                        "end": 1126
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1137,
                            "end": 1140
                          },
                          "start": 1135,
                          "end": 1140
                        },
                        "start": 1128,
                        "end": 1140
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1143,
                        "end": 1150
                      },
                      "start": 1141,
                      "end": 1150
                    },
                    "body": null,
                    "expression": false,
                    "start": 1078,
                    "end": 1151
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1067,
                  "end": 1151
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1167,
                    "end": 1172
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1176,
                        "end": 1182
                      },
                      "start": 1174,
                      "end": 1182
                    },
                    "body": null,
                    "expression": false,
                    "start": 1172,
                    "end": 1183
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1160,
                  "end": 1183
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1199,
                    "end": 1205
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1211,
                            "end": 1217
                          },
                          "start": 1209,
                          "end": 1217
                        },
                        "start": 1206,
                        "end": 1217
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
                          "start": 1220,
                          "end": 1221
                        },
                        "typeArguments": null,
                        "start": 1220,
                        "end": 1221
                      },
                      "start": 1218,
                      "end": 1221
                    },
                    "body": null,
                    "expression": false,
                    "start": 1205,
                    "end": 1222
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1192,
                  "end": 1222
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1238,
                    "end": 1244
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1250,
                            "end": 1256
                          },
                          "start": 1248,
                          "end": 1256
                        },
                        "start": 1245,
                        "end": 1256
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1259,
                        "end": 1263
                      },
                      "start": 1257,
                      "end": 1263
                    },
                    "body": null,
                    "expression": false,
                    "start": 1244,
                    "end": 1264
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1231,
                  "end": 1264
                }
              ],
              "start": 675,
              "end": 1270
            },
            "abstract": false,
            "declare": false,
            "start": 625,
            "end": 1270
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1281,
              "end": 1304
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
                    "start": 1305,
                    "end": 1306
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1305,
                  "end": 1306
                }
              ],
              "start": 1304,
              "end": 1307
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1316,
              "end": 1331
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
                    "start": 1332,
                    "end": 1333
                  },
                  "typeArguments": null,
                  "start": 1332,
                  "end": 1333
                }
              ],
              "start": 1331,
              "end": 1334
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1352,
                    "end": 1362
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 1366,
                          "end": 1372
                        },
                        "start": 1366,
                        "end": 1374
                      },
                      "start": 1364,
                      "end": 1374
                    },
                    "body": null,
                    "expression": false,
                    "start": 1362,
                    "end": 1375
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1345,
                  "end": 1375
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1391,
                    "end": 1394
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1400,
                            "end": 1406
                          },
                          "start": 1398,
                          "end": 1406
                        },
                        "start": 1395,
                        "end": 1406
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 1414,
                              "end": 1415
                            },
                            "typeArguments": null,
                            "start": 1414,
                            "end": 1415
                          },
                          "start": 1412,
                          "end": 1415
                        },
                        "start": 1408,
                        "end": 1415
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1418,
                        "end": 1425
                      },
                      "start": 1416,
                      "end": 1425
                    },
                    "body": null,
                    "expression": false,
                    "start": 1394,
                    "end": 1426
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1384,
                  "end": 1426
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1453
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1459,
                            "end": 1465
                          },
                          "start": 1457,
                          "end": 1465
                        },
                        "start": 1454,
                        "end": 1465
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                        "start": 1467,
                        "end": 1474
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1477,
                        "end": 1484
                      },
                      "start": 1475,
                      "end": 1484
                    },
                    "body": null,
                    "expression": false,
                    "start": 1453,
                    "end": 1485
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1435,
                  "end": 1485
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
                    "start": 1501,
                    "end": 1504
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1513,
                                    "end": 1519
                                  },
                                  "start": 1511,
                                  "end": 1519
                                },
                                "start": 1510,
                                "end": 1519
                              },
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
                                      "start": 1528,
                                      "end": 1529
                                    },
                                    "typeArguments": null,
                                    "start": 1528,
                                    "end": 1529
                                  },
                                  "start": 1526,
                                  "end": 1529
                                },
                                "start": 1521,
                                "end": 1529
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1540,
                                    "end": 1543
                                  },
                                  "start": 1538,
                                  "end": 1543
                                },
                                "start": 1531,
                                "end": 1543
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1548,
                                "end": 1552
                              },
                              "start": 1545,
                              "end": 1552
                            },
                            "start": 1509,
                            "end": 1552
                          },
                          "start": 1507,
                          "end": 1552
                        },
                        "start": 1505,
                        "end": 1552
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1563,
                            "end": 1566
                          },
                          "start": 1561,
                          "end": 1566
                        },
                        "start": 1554,
                        "end": 1566
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1569,
                        "end": 1573
                      },
                      "start": 1567,
                      "end": 1573
                    },
                    "body": null,
                    "expression": false,
                    "start": 1504,
                    "end": 1574
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1494,
                  "end": 1574
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1590,
                    "end": 1595
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1604,
                                    "end": 1610
                                  },
                                  "start": 1602,
                                  "end": 1610
                                },
                                "start": 1601,
                                "end": 1610
                              },
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
                                      "start": 1619,
                                      "end": 1620
                                    },
                                    "typeArguments": null,
                                    "start": 1619,
                                    "end": 1620
                                  },
                                  "start": 1617,
                                  "end": 1620
                                },
                                "start": 1612,
                                "end": 1620
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1631,
                                    "end": 1634
                                  },
                                  "start": 1629,
                                  "end": 1634
                                },
                                "start": 1622,
                                "end": 1634
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1639,
                                "end": 1643
                              },
                              "start": 1636,
                              "end": 1643
                            },
                            "start": 1600,
                            "end": 1643
                          },
                          "start": 1598,
                          "end": 1643
                        },
                        "start": 1596,
                        "end": 1643
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1654,
                            "end": 1657
                          },
                          "start": 1652,
                          "end": 1657
                        },
                        "start": 1645,
                        "end": 1657
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1660,
                        "end": 1667
                      },
                      "start": 1658,
                      "end": 1667
                    },
                    "body": null,
                    "expression": false,
                    "start": 1595,
                    "end": 1668
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1583,
                  "end": 1668
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1684,
                    "end": 1688
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1697,
                                    "end": 1703
                                  },
                                  "start": 1695,
                                  "end": 1703
                                },
                                "start": 1694,
                                "end": 1703
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1712,
                                    "end": 1715
                                  },
                                  "start": 1710,
                                  "end": 1715
                                },
                                "start": 1705,
                                "end": 1715
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 1726,
                                    "end": 1729
                                  },
                                  "start": 1724,
                                  "end": 1729
                                },
                                "start": 1717,
                                "end": 1729
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 1734,
                                "end": 1738
                              },
                              "start": 1731,
                              "end": 1738
                            },
                            "start": 1693,
                            "end": 1738
                          },
                          "start": 1691,
                          "end": 1738
                        },
                        "start": 1689,
                        "end": 1738
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1749,
                            "end": 1752
                          },
                          "start": 1747,
                          "end": 1752
                        },
                        "start": 1740,
                        "end": 1752
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1755,
                        "end": 1762
                      },
                      "start": 1753,
                      "end": 1762
                    },
                    "body": null,
                    "expression": false,
                    "start": 1688,
                    "end": 1763
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1677,
                  "end": 1763
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1779,
                    "end": 1785
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1791,
                            "end": 1797
                          },
                          "start": 1789,
                          "end": 1797
                        },
                        "start": 1786,
                        "end": 1797
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
                          "start": 1800,
                          "end": 1801
                        },
                        "typeArguments": null,
                        "start": 1800,
                        "end": 1801
                      },
                      "start": 1798,
                      "end": 1801
                    },
                    "body": null,
                    "expression": false,
                    "start": 1785,
                    "end": 1802
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 1772,
                  "end": 1802
                }
              ],
              "start": 1335,
              "end": 1808
            },
            "abstract": false,
            "declare": false,
            "start": 1275,
            "end": 1808
          }
        ],
        "start": 26,
        "end": 1810
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 1810
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TypeScript",
        "optional": false,
        "typeAnnotation": null,
        "start": 1827,
        "end": 1837
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IIndexable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1854,
              "end": 1864
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
                    "start": 1865,
                    "end": 1866
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1865,
                  "end": 1866
                }
              ],
              "start": 1864,
              "end": 1867
            },
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1882,
                          "end": 1888
                        },
                        "start": 1880,
                        "end": 1888
                      },
                      "start": 1879,
                      "end": 1888
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1891,
                        "end": 1892
                      },
                      "typeArguments": null,
                      "start": 1891,
                      "end": 1892
                    },
                    "start": 1889,
                    "end": 1892
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1878,
                  "end": 1893
                }
              ],
              "start": 1868,
              "end": 1899
            },
            "declare": false,
            "start": 1844,
            "end": 1899
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "createIntrinsicsObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 1913,
              "end": 1935
            },
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1936,
                    "end": 1937
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1936,
                  "end": 1937
                }
              ],
              "start": 1935,
              "end": 1938
            },
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IIndexable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1942,
                  "end": 1952
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
                        "start": 1953,
                        "end": 1954
                      },
                      "typeArguments": null,
                      "start": 1953,
                      "end": 1954
                    }
                  ],
                  "start": 1952,
                  "end": 1955
                },
                "start": 1942,
                "end": 1955
              },
              "start": 1940,
              "end": 1955
            },
            "body": null,
            "expression": false,
            "start": 1904,
            "end": 1956
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1971,
              "end": 1981
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
                    "start": 1982,
                    "end": 1983
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1982,
                  "end": 1983
                }
              ],
              "start": 1981,
              "end": 1984
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
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1995,
                    "end": 2005
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2009,
                        "end": 2015
                      },
                      "start": 2009,
                      "end": 2017
                    },
                    "start": 2007,
                    "end": 2017
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1995,
                  "end": 2018
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2027,
                    "end": 2030
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2036,
                          "end": 2042
                        },
                        "start": 2034,
                        "end": 2042
                      },
                      "start": 2031,
                      "end": 2042
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 2050,
                            "end": 2051
                          },
                          "typeArguments": null,
                          "start": 2050,
                          "end": 2051
                        },
                        "start": 2048,
                        "end": 2051
                      },
                      "start": 2044,
                      "end": 2051
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2054,
                      "end": 2061
                    },
                    "start": 2052,
                    "end": 2061
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2027,
                  "end": 2062
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2071,
                    "end": 2082
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2088,
                          "end": 2094
                        },
                        "start": 2086,
                        "end": 2094
                      },
                      "start": 2083,
                      "end": 2094
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
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
                            "start": 2102,
                            "end": 2103
                          },
                          "typeArguments": null,
                          "start": 2102,
                          "end": 2103
                        },
                        "start": 2100,
                        "end": 2103
                      },
                      "start": 2096,
                      "end": 2103
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2106,
                      "end": 2113
                    },
                    "start": 2104,
                    "end": 2113
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2071,
                  "end": 2114
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2123,
                    "end": 2126
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2135,
                                  "end": 2141
                                },
                                "start": 2133,
                                "end": 2141
                              },
                              "start": 2132,
                              "end": 2141
                            },
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
                                    "start": 2150,
                                    "end": 2151
                                  },
                                  "typeArguments": null,
                                  "start": 2150,
                                  "end": 2151
                                },
                                "start": 2148,
                                "end": 2151
                              },
                              "start": 2143,
                              "end": 2151
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2162,
                                  "end": 2165
                                },
                                "start": 2160,
                                "end": 2165
                              },
                              "start": 2153,
                              "end": 2165
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2170,
                              "end": 2174
                            },
                            "start": 2167,
                            "end": 2174
                          },
                          "start": 2131,
                          "end": 2174
                        },
                        "start": 2129,
                        "end": 2174
                      },
                      "start": 2127,
                      "end": 2174
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2185,
                          "end": 2188
                        },
                        "start": 2183,
                        "end": 2188
                      },
                      "start": 2176,
                      "end": 2188
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 2191,
                      "end": 2195
                    },
                    "start": 2189,
                    "end": 2195
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2123,
                  "end": 2196
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2205,
                    "end": 2210
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2219,
                                  "end": 2225
                                },
                                "start": 2217,
                                "end": 2225
                              },
                              "start": 2216,
                              "end": 2225
                            },
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
                                    "start": 2234,
                                    "end": 2235
                                  },
                                  "typeArguments": null,
                                  "start": 2234,
                                  "end": 2235
                                },
                                "start": 2232,
                                "end": 2235
                              },
                              "start": 2227,
                              "end": 2235
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2246,
                                  "end": 2249
                                },
                                "start": 2244,
                                "end": 2249
                              },
                              "start": 2237,
                              "end": 2249
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2254,
                              "end": 2258
                            },
                            "start": 2251,
                            "end": 2258
                          },
                          "start": 2215,
                          "end": 2258
                        },
                        "start": 2213,
                        "end": 2258
                      },
                      "start": 2211,
                      "end": 2258
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2269,
                          "end": 2272
                        },
                        "start": 2267,
                        "end": 2272
                      },
                      "start": 2260,
                      "end": 2272
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2275,
                      "end": 2282
                    },
                    "start": 2273,
                    "end": 2282
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2205,
                  "end": 2283
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2292,
                    "end": 2296
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fn",
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
                              "name": "k",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 2305,
                                  "end": 2311
                                },
                                "start": 2303,
                                "end": 2311
                              },
                              "start": 2302,
                              "end": 2311
                            },
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
                                    "start": 2320,
                                    "end": 2321
                                  },
                                  "typeArguments": null,
                                  "start": 2320,
                                  "end": 2321
                                },
                                "start": 2318,
                                "end": 2321
                              },
                              "start": 2313,
                              "end": 2321
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "context",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 2332,
                                  "end": 2335
                                },
                                "start": 2330,
                                "end": 2335
                              },
                              "start": 2323,
                              "end": 2335
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 2340,
                              "end": 2344
                            },
                            "start": 2337,
                            "end": 2344
                          },
                          "start": 2301,
                          "end": 2344
                        },
                        "start": 2299,
                        "end": 2344
                      },
                      "start": 2297,
                      "end": 2344
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2355,
                          "end": 2358
                        },
                        "start": 2353,
                        "end": 2358
                      },
                      "start": 2346,
                      "end": 2358
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2361,
                      "end": 2368
                    },
                    "start": 2359,
                    "end": 2368
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2292,
                  "end": 2369
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2378,
                    "end": 2383
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2387,
                      "end": 2393
                    },
                    "start": 2385,
                    "end": 2393
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2378,
                  "end": 2394
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2403,
                    "end": 2409
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2415,
                          "end": 2421
                        },
                        "start": 2413,
                        "end": 2421
                      },
                      "start": 2410,
                      "end": 2421
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
                        "start": 2424,
                        "end": 2425
                      },
                      "typeArguments": null,
                      "start": 2424,
                      "end": 2425
                    },
                    "start": 2422,
                    "end": 2425
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2403,
                  "end": 2426
                }
              ],
              "start": 1985,
              "end": 2432
            },
            "declare": false,
            "start": 1961,
            "end": 2432
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 2443,
              "end": 2458
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
                    "start": 2459,
                    "end": 2460
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 2459,
                  "end": 2460
                }
              ],
              "start": 2458,
              "end": 2461
            },
            "superClass": null,
            "superTypeArguments": null,
            "implements": [
              {
                "type": "TSClassImplements",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IHashTable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2473,
                  "end": 2483
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
                        "start": 2484,
                        "end": 2485
                      },
                      "typeArguments": null,
                      "start": 2484,
                      "end": 2485
                    }
                  ],
                  "start": 2483,
                  "end": 2486
                },
                "start": 2473,
                "end": 2486
              }
            ],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "itemCount",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2505,
                    "end": 2514
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 2497,
                  "end": 2515
                },
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "table",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2532,
                    "end": 2537
                  },
                  "typeAnnotation": null,
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 2524,
                  "end": 2538
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2554,
                    "end": 2564
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 2568,
                          "end": 2574
                        },
                        "start": 2568,
                        "end": 2576
                      },
                      "start": 2566,
                      "end": 2576
                    },
                    "body": null,
                    "expression": false,
                    "start": 2564,
                    "end": 2577
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2547,
                  "end": 2577
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2593,
                    "end": 2596
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2602,
                            "end": 2608
                          },
                          "start": 2600,
                          "end": 2608
                        },
                        "start": 2597,
                        "end": 2608
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 2616,
                              "end": 2617
                            },
                            "typeArguments": null,
                            "start": 2616,
                            "end": 2617
                          },
                          "start": 2614,
                          "end": 2617
                        },
                        "start": 2610,
                        "end": 2617
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2620,
                        "end": 2627
                      },
                      "start": 2618,
                      "end": 2627
                    },
                    "body": null,
                    "expression": false,
                    "start": 2596,
                    "end": 2628
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2586,
                  "end": 2628
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2644,
                    "end": 2655
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2661,
                            "end": 2667
                          },
                          "start": 2659,
                          "end": 2667
                        },
                        "start": 2656,
                        "end": 2667
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 2675,
                              "end": 2676
                            },
                            "typeArguments": null,
                            "start": 2675,
                            "end": 2676
                          },
                          "start": 2673,
                          "end": 2676
                        },
                        "start": 2669,
                        "end": 2676
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2679,
                        "end": 2686
                      },
                      "start": 2677,
                      "end": 2686
                    },
                    "body": null,
                    "expression": false,
                    "start": 2655,
                    "end": 2687
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2637,
                  "end": 2687
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
                    "start": 2703,
                    "end": 2706
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2715,
                                    "end": 2721
                                  },
                                  "start": 2713,
                                  "end": 2721
                                },
                                "start": 2712,
                                "end": 2721
                              },
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
                                      "start": 2730,
                                      "end": 2731
                                    },
                                    "typeArguments": null,
                                    "start": 2730,
                                    "end": 2731
                                  },
                                  "start": 2728,
                                  "end": 2731
                                },
                                "start": 2723,
                                "end": 2731
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2742,
                                    "end": 2745
                                  },
                                  "start": 2740,
                                  "end": 2745
                                },
                                "start": 2733,
                                "end": 2745
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2750,
                                "end": 2754
                              },
                              "start": 2747,
                              "end": 2754
                            },
                            "start": 2711,
                            "end": 2754
                          },
                          "start": 2709,
                          "end": 2754
                        },
                        "start": 2707,
                        "end": 2754
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2765,
                            "end": 2768
                          },
                          "start": 2763,
                          "end": 2768
                        },
                        "start": 2756,
                        "end": 2768
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 2771,
                        "end": 2775
                      },
                      "start": 2769,
                      "end": 2775
                    },
                    "body": null,
                    "expression": false,
                    "start": 2706,
                    "end": 2776
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2696,
                  "end": 2776
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2792,
                    "end": 2797
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2806,
                                    "end": 2812
                                  },
                                  "start": 2804,
                                  "end": 2812
                                },
                                "start": 2803,
                                "end": 2812
                              },
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
                                      "start": 2821,
                                      "end": 2822
                                    },
                                    "typeArguments": null,
                                    "start": 2821,
                                    "end": 2822
                                  },
                                  "start": 2819,
                                  "end": 2822
                                },
                                "start": 2814,
                                "end": 2822
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2833,
                                    "end": 2836
                                  },
                                  "start": 2831,
                                  "end": 2836
                                },
                                "start": 2824,
                                "end": 2836
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2841,
                                "end": 2845
                              },
                              "start": 2838,
                              "end": 2845
                            },
                            "start": 2802,
                            "end": 2845
                          },
                          "start": 2800,
                          "end": 2845
                        },
                        "start": 2798,
                        "end": 2845
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2856,
                            "end": 2859
                          },
                          "start": 2854,
                          "end": 2859
                        },
                        "start": 2847,
                        "end": 2859
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2862,
                        "end": 2869
                      },
                      "start": 2860,
                      "end": 2869
                    },
                    "body": null,
                    "expression": false,
                    "start": 2797,
                    "end": 2870
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2785,
                  "end": 2870
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2886,
                    "end": 2890
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 2899,
                                    "end": 2905
                                  },
                                  "start": 2897,
                                  "end": 2905
                                },
                                "start": 2896,
                                "end": 2905
                              },
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
                                "start": 2907,
                                "end": 2915
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 2926,
                                    "end": 2929
                                  },
                                  "start": 2924,
                                  "end": 2929
                                },
                                "start": 2917,
                                "end": 2929
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 2934,
                                "end": 2938
                              },
                              "start": 2931,
                              "end": 2938
                            },
                            "start": 2895,
                            "end": 2938
                          },
                          "start": 2893,
                          "end": 2938
                        },
                        "start": 2891,
                        "end": 2938
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2949,
                            "end": 2952
                          },
                          "start": 2947,
                          "end": 2952
                        },
                        "start": 2940,
                        "end": 2952
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 2955,
                        "end": 2962
                      },
                      "start": 2953,
                      "end": 2962
                    },
                    "body": null,
                    "expression": false,
                    "start": 2890,
                    "end": 2963
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2879,
                  "end": 2963
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2979,
                    "end": 2984
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2988,
                        "end": 2994
                      },
                      "start": 2986,
                      "end": 2994
                    },
                    "body": null,
                    "expression": false,
                    "start": 2984,
                    "end": 2995
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 2972,
                  "end": 2995
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3011,
                    "end": 3017
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3023,
                            "end": 3029
                          },
                          "start": 3021,
                          "end": 3029
                        },
                        "start": 3018,
                        "end": 3029
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
                          "start": 3032,
                          "end": 3033
                        },
                        "typeArguments": null,
                        "start": 3032,
                        "end": 3033
                      },
                      "start": 3030,
                      "end": 3033
                    },
                    "body": null,
                    "expression": false,
                    "start": 3017,
                    "end": 3034
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3004,
                  "end": 3034
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "remove",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3050,
                    "end": 3056
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3062,
                            "end": 3068
                          },
                          "start": 3060,
                          "end": 3068
                        },
                        "start": 3057,
                        "end": 3068
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3071,
                        "end": 3075
                      },
                      "start": 3069,
                      "end": 3075
                    },
                    "body": null,
                    "expression": false,
                    "start": 3056,
                    "end": 3076
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3043,
                  "end": 3076
                }
              ],
              "start": 2487,
              "end": 3082
            },
            "abstract": false,
            "declare": false,
            "start": 2437,
            "end": 3082
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IdentifierNameHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3093,
              "end": 3116
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
                    "start": 3117,
                    "end": 3118
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 3117,
                  "end": 3118
                }
              ],
              "start": 3116,
              "end": 3119
            },
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringHashTable",
              "optional": false,
              "typeAnnotation": null,
              "start": 3128,
              "end": 3143
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
                    "start": 3144,
                    "end": 3145
                  },
                  "typeArguments": null,
                  "start": 3144,
                  "end": 3145
                }
              ],
              "start": 3143,
              "end": 3146
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getAllKeys",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3164,
                    "end": 3174
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3178,
                          "end": 3184
                        },
                        "start": 3178,
                        "end": 3186
                      },
                      "start": 3176,
                      "end": 3186
                    },
                    "body": null,
                    "expression": false,
                    "start": 3174,
                    "end": 3187
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3157,
                  "end": 3187
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3203,
                    "end": 3206
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3212,
                            "end": 3218
                          },
                          "start": 3210,
                          "end": 3218
                        },
                        "start": 3207,
                        "end": 3218
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 3226,
                              "end": 3227
                            },
                            "typeArguments": null,
                            "start": 3226,
                            "end": 3227
                          },
                          "start": 3224,
                          "end": 3227
                        },
                        "start": 3220,
                        "end": 3227
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3230,
                        "end": 3237
                      },
                      "start": 3228,
                      "end": 3237
                    },
                    "body": null,
                    "expression": false,
                    "start": 3206,
                    "end": 3238
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3196,
                  "end": 3238
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addOrUpdate",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3254,
                    "end": 3265
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3271,
                            "end": 3277
                          },
                          "start": 3269,
                          "end": 3277
                        },
                        "start": 3266,
                        "end": 3277
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
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
                              "start": 3285,
                              "end": 3286
                            },
                            "typeArguments": null,
                            "start": 3285,
                            "end": 3286
                          },
                          "start": 3283,
                          "end": 3286
                        },
                        "start": 3279,
                        "end": 3286
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3289,
                        "end": 3296
                      },
                      "start": 3287,
                      "end": 3296
                    },
                    "body": null,
                    "expression": false,
                    "start": 3265,
                    "end": 3297
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3247,
                  "end": 3297
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
                    "start": 3313,
                    "end": 3316
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3325,
                                    "end": 3331
                                  },
                                  "start": 3323,
                                  "end": 3331
                                },
                                "start": 3322,
                                "end": 3331
                              },
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
                                      "start": 3340,
                                      "end": 3341
                                    },
                                    "typeArguments": null,
                                    "start": 3340,
                                    "end": 3341
                                  },
                                  "start": 3338,
                                  "end": 3341
                                },
                                "start": 3333,
                                "end": 3341
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3352,
                                    "end": 3355
                                  },
                                  "start": 3350,
                                  "end": 3355
                                },
                                "start": 3343,
                                "end": 3355
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3360,
                                "end": 3364
                              },
                              "start": 3357,
                              "end": 3364
                            },
                            "start": 3321,
                            "end": 3364
                          },
                          "start": 3319,
                          "end": 3364
                        },
                        "start": 3317,
                        "end": 3364
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3375,
                            "end": 3378
                          },
                          "start": 3373,
                          "end": 3378
                        },
                        "start": 3366,
                        "end": 3378
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3381,
                        "end": 3385
                      },
                      "start": 3379,
                      "end": 3385
                    },
                    "body": null,
                    "expression": false,
                    "start": 3316,
                    "end": 3386
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3306,
                  "end": 3386
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "every",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3402,
                    "end": 3407
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3416,
                                    "end": 3422
                                  },
                                  "start": 3414,
                                  "end": 3422
                                },
                                "start": 3413,
                                "end": 3422
                              },
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
                                      "start": 3431,
                                      "end": 3432
                                    },
                                    "typeArguments": null,
                                    "start": 3431,
                                    "end": 3432
                                  },
                                  "start": 3429,
                                  "end": 3432
                                },
                                "start": 3424,
                                "end": 3432
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3443,
                                    "end": 3446
                                  },
                                  "start": 3441,
                                  "end": 3446
                                },
                                "start": 3434,
                                "end": 3446
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3451,
                                "end": 3455
                              },
                              "start": 3448,
                              "end": 3455
                            },
                            "start": 3412,
                            "end": 3455
                          },
                          "start": 3410,
                          "end": 3455
                        },
                        "start": 3408,
                        "end": 3455
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3466,
                            "end": 3469
                          },
                          "start": 3464,
                          "end": 3469
                        },
                        "start": 3457,
                        "end": 3469
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3472,
                        "end": 3479
                      },
                      "start": 3470,
                      "end": 3479
                    },
                    "body": null,
                    "expression": false,
                    "start": 3407,
                    "end": 3480
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3395,
                  "end": 3480
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "some",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3496,
                    "end": 3500
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fn",
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
                                "name": "k",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 3509,
                                    "end": 3515
                                  },
                                  "start": 3507,
                                  "end": 3515
                                },
                                "start": 3506,
                                "end": 3515
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3524,
                                    "end": 3527
                                  },
                                  "start": 3522,
                                  "end": 3527
                                },
                                "start": 3517,
                                "end": 3527
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "context",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSAnyKeyword",
                                    "start": 3538,
                                    "end": 3541
                                  },
                                  "start": 3536,
                                  "end": 3541
                                },
                                "start": 3529,
                                "end": 3541
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSVoidKeyword",
                                "start": 3546,
                                "end": 3550
                              },
                              "start": 3543,
                              "end": 3550
                            },
                            "start": 3505,
                            "end": 3550
                          },
                          "start": 3503,
                          "end": 3550
                        },
                        "start": 3501,
                        "end": 3550
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 3561,
                            "end": 3564
                          },
                          "start": 3559,
                          "end": 3564
                        },
                        "start": 3552,
                        "end": 3564
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3567,
                        "end": 3574
                      },
                      "start": 3565,
                      "end": 3574
                    },
                    "body": null,
                    "expression": false,
                    "start": 3500,
                    "end": 3575
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3489,
                  "end": 3575
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "lookup",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3591,
                    "end": 3597
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3603,
                            "end": 3609
                          },
                          "start": 3601,
                          "end": 3609
                        },
                        "start": 3598,
                        "end": 3609
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
                          "start": 3612,
                          "end": 3613
                        },
                        "typeArguments": null,
                        "start": 3612,
                        "end": 3613
                      },
                      "start": 3610,
                      "end": 3613
                    },
                    "body": null,
                    "expression": false,
                    "start": 3597,
                    "end": 3614
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 3584,
                  "end": 3614
                }
              ],
              "start": 3147,
              "end": 3620
            },
            "abstract": false,
            "declare": false,
            "start": 3087,
            "end": 3620
          }
        ],
        "start": 1838,
        "end": 3622
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 1812,
      "end": 3622
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 3622
}
```
