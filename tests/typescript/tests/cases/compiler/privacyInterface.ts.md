__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 19
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 48
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
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
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 69
                      },
                      "value": {
                        "type": "FunctionExpression",
                        "id": null,
                        "generator": false,
                        "async": false,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 72,
                          "end": 83
                        },
                        "expression": false,
                        "start": 69,
                        "end": 83
                      },
                      "kind": "method",
                      "computed": false,
                      "static": false,
                      "override": false,
                      "optional": false,
                      "accessibility": "private",
                      "start": 59,
                      "end": 83
                    }
                  ],
                  "start": 49,
                  "end": 89
                },
                "abstract": false,
                "declare": false,
                "start": 33,
                "end": 89
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 26,
              "end": 89
            },
            {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 102,
                "end": 112
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 113,
                "end": 120
              },
              "abstract": false,
              "declare": false,
              "start": 96,
              "end": 120
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C3_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 152
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 168,
                                "end": 177
                              },
                              "typeArguments": null,
                              "start": 168,
                              "end": 177
                            },
                            "start": 166,
                            "end": 177
                          },
                          "start": 164,
                          "end": 177
                        }
                      ],
                      "returnType": null,
                      "start": 163,
                      "end": 179
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 193,
                                "end": 203
                              },
                              "typeArguments": null,
                              "start": 193,
                              "end": 203
                            },
                            "start": 191,
                            "end": 203
                          },
                          "start": 189,
                          "end": 203
                        }
                      ],
                      "returnType": null,
                      "start": 188,
                      "end": 205
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 218,
                            "end": 227
                          },
                          "typeArguments": null,
                          "start": 218,
                          "end": 227
                        },
                        "start": 216,
                        "end": 227
                      },
                      "start": 214,
                      "end": 228
                    },
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 242,
                              "end": 248
                            },
                            "start": 240,
                            "end": 248
                          },
                          "start": 238,
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
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 251,
                            "end": 261
                          },
                          "typeArguments": null,
                          "start": 251,
                          "end": 261
                        },
                        "start": 249,
                        "end": 261
                      },
                      "start": 237,
                      "end": 262
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 281,
                                "end": 290
                              },
                              "typeArguments": null,
                              "start": 281,
                              "end": 290
                            },
                            "start": 279,
                            "end": 290
                          },
                          "start": 277,
                          "end": 290
                        }
                      ],
                      "returnType": null,
                      "start": 272,
                      "end": 292
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 310,
                                "end": 320
                              },
                              "typeArguments": null,
                              "start": 310,
                              "end": 320
                            },
                            "start": 308,
                            "end": 320
                          },
                          "start": 306,
                          "end": 320
                        }
                      ],
                      "returnType": null,
                      "start": 301,
                      "end": 322
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 339,
                            "end": 348
                          },
                          "typeArguments": null,
                          "start": 339,
                          "end": 348
                        },
                        "start": 337,
                        "end": 348
                      },
                      "start": 331,
                      "end": 349
                    },
                    {
                      "type": "TSConstructSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 367,
                              "end": 373
                            },
                            "start": 365,
                            "end": 373
                          },
                          "start": 363,
                          "end": 373
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 376,
                            "end": 386
                          },
                          "typeArguments": null,
                          "start": 376,
                          "end": 386
                        },
                        "start": 374,
                        "end": 386
                      },
                      "start": 358,
                      "end": 387
                    },
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 401,
                              "end": 407
                            },
                            "start": 399,
                            "end": 407
                          },
                          "start": 398,
                          "end": 407
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 410,
                            "end": 419
                          },
                          "typeArguments": null,
                          "start": 410,
                          "end": 419
                        },
                        "start": 408,
                        "end": 419
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 397,
                      "end": 420
                    },
                    {
                      "type": "TSIndexSignature",
                      "parameters": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 433,
                              "end": 439
                            },
                            "start": 431,
                            "end": 439
                          },
                          "start": 430,
                          "end": 439
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 442,
                            "end": 452
                          },
                          "typeArguments": null,
                          "start": 442,
                          "end": 452
                        },
                        "start": 440,
                        "end": 452
                      },
                      "readonly": false,
                      "static": false,
                      "accessibility": null,
                      "start": 429,
                      "end": 453
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 464
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 466,
                            "end": 475
                          },
                          "typeArguments": null,
                          "start": 466,
                          "end": 475
                        },
                        "start": 464,
                        "end": 475
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 463,
                      "end": 476
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 485,
                        "end": 486
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 488,
                            "end": 498
                          },
                          "typeArguments": null,
                          "start": 488,
                          "end": 498
                        },
                        "start": 486,
                        "end": 498
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 485,
                      "end": 499
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 510
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 513,
                            "end": 522
                          },
                          "typeArguments": null,
                          "start": 513,
                          "end": 522
                        },
                        "start": 511,
                        "end": 522
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 509,
                      "end": 523
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 532,
                        "end": 533
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 546
                          },
                          "typeArguments": null,
                          "start": 536,
                          "end": 546
                        },
                        "start": 534,
                        "end": 546
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 532,
                      "end": 547
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 557,
                        "end": 559
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1_public",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 564,
                                "end": 573
                              },
                              "typeArguments": null,
                              "start": 564,
                              "end": 573
                            },
                            "start": 562,
                            "end": 573
                          },
                          "start": 560,
                          "end": 573
                        }
                      ],
                      "returnType": null,
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 557,
                      "end": 575
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 584,
                        "end": 586
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2_private",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 591,
                                "end": 601
                              },
                              "typeArguments": null,
                              "start": 591,
                              "end": 601
                            },
                            "start": 589,
                            "end": 601
                          },
                          "start": 587,
                          "end": 601
                        }
                      ],
                      "returnType": null,
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 584,
                      "end": 603
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 612,
                        "end": 614
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 618,
                            "end": 627
                          },
                          "typeArguments": null,
                          "start": 618,
                          "end": 627
                        },
                        "start": 616,
                        "end": 627
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 612,
                      "end": 628
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 637,
                        "end": 639
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 653
                          },
                          "typeArguments": null,
                          "start": 643,
                          "end": 653
                        },
                        "start": 641,
                        "end": 653
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 637,
                      "end": 654
                    }
                  ],
                  "start": 153,
                  "end": 661
                },
                "declare": false,
                "start": 133,
                "end": 661
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 126,
              "end": 661
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C4_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 677,
                "end": 687
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 703,
                              "end": 712
                            },
                            "typeArguments": null,
                            "start": 703,
                            "end": 712
                          },
                          "start": 701,
                          "end": 712
                        },
                        "start": 699,
                        "end": 712
                      }
                    ],
                    "returnType": null,
                    "start": 698,
                    "end": 714
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 728,
                              "end": 738
                            },
                            "typeArguments": null,
                            "start": 728,
                            "end": 738
                          },
                          "start": 726,
                          "end": 738
                        },
                        "start": 724,
                        "end": 738
                      }
                    ],
                    "returnType": null,
                    "start": 723,
                    "end": 740
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 753,
                          "end": 762
                        },
                        "typeArguments": null,
                        "start": 753,
                        "end": 762
                      },
                      "start": 751,
                      "end": 762
                    },
                    "start": 749,
                    "end": 763
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 777,
                            "end": 783
                          },
                          "start": 775,
                          "end": 783
                        },
                        "start": 773,
                        "end": 783
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 786,
                          "end": 796
                        },
                        "typeArguments": null,
                        "start": 786,
                        "end": 796
                      },
                      "start": 784,
                      "end": 796
                    },
                    "start": 772,
                    "end": 797
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 816,
                              "end": 825
                            },
                            "typeArguments": null,
                            "start": 816,
                            "end": 825
                          },
                          "start": 814,
                          "end": 825
                        },
                        "start": 812,
                        "end": 825
                      }
                    ],
                    "returnType": null,
                    "start": 807,
                    "end": 827
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 845,
                              "end": 855
                            },
                            "typeArguments": null,
                            "start": 845,
                            "end": 855
                          },
                          "start": 843,
                          "end": 855
                        },
                        "start": 841,
                        "end": 855
                      }
                    ],
                    "returnType": null,
                    "start": 836,
                    "end": 857
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 874,
                          "end": 883
                        },
                        "typeArguments": null,
                        "start": 874,
                        "end": 883
                      },
                      "start": 872,
                      "end": 883
                    },
                    "start": 866,
                    "end": 884
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 902,
                            "end": 908
                          },
                          "start": 900,
                          "end": 908
                        },
                        "start": 898,
                        "end": 908
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 911,
                          "end": 921
                        },
                        "typeArguments": null,
                        "start": 911,
                        "end": 921
                      },
                      "start": 909,
                      "end": 921
                    },
                    "start": 893,
                    "end": 922
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 936,
                            "end": 942
                          },
                          "start": 934,
                          "end": 942
                        },
                        "start": 933,
                        "end": 942
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 945,
                          "end": 954
                        },
                        "typeArguments": null,
                        "start": 945,
                        "end": 954
                      },
                      "start": 943,
                      "end": 954
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 932,
                    "end": 955
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 968,
                            "end": 974
                          },
                          "start": 966,
                          "end": 974
                        },
                        "start": 965,
                        "end": 974
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 977,
                          "end": 987
                        },
                        "typeArguments": null,
                        "start": 977,
                        "end": 987
                      },
                      "start": 975,
                      "end": 987
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 964,
                    "end": 988
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 998,
                      "end": 999
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1001,
                          "end": 1010
                        },
                        "typeArguments": null,
                        "start": 1001,
                        "end": 1010
                      },
                      "start": 999,
                      "end": 1010
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 998,
                    "end": 1011
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1020,
                      "end": 1021
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1023,
                          "end": 1033
                        },
                        "typeArguments": null,
                        "start": 1023,
                        "end": 1033
                      },
                      "start": 1021,
                      "end": 1033
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1020,
                    "end": 1034
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1044,
                      "end": 1045
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1048,
                          "end": 1057
                        },
                        "typeArguments": null,
                        "start": 1048,
                        "end": 1057
                      },
                      "start": 1046,
                      "end": 1057
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1044,
                    "end": 1058
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1067,
                      "end": 1068
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1071,
                          "end": 1081
                        },
                        "typeArguments": null,
                        "start": 1071,
                        "end": 1081
                      },
                      "start": 1069,
                      "end": 1081
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1067,
                    "end": 1082
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1092,
                      "end": 1094
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1099,
                              "end": 1108
                            },
                            "typeArguments": null,
                            "start": 1099,
                            "end": 1108
                          },
                          "start": 1097,
                          "end": 1108
                        },
                        "start": 1095,
                        "end": 1108
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1092,
                    "end": 1110
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1119,
                      "end": 1121
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1126,
                              "end": 1136
                            },
                            "typeArguments": null,
                            "start": 1126,
                            "end": 1136
                          },
                          "start": 1124,
                          "end": 1136
                        },
                        "start": 1122,
                        "end": 1136
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1119,
                    "end": 1138
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1147,
                      "end": 1149
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1153,
                          "end": 1162
                        },
                        "typeArguments": null,
                        "start": 1153,
                        "end": 1162
                      },
                      "start": 1151,
                      "end": 1162
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1147,
                    "end": 1163
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1172,
                      "end": 1174
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1178,
                          "end": 1188
                        },
                        "typeArguments": null,
                        "start": 1178,
                        "end": 1188
                      },
                      "start": 1176,
                      "end": 1188
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1172,
                    "end": 1189
                  }
                ],
                "start": 688,
                "end": 1196
              },
              "declare": false,
              "start": 667,
              "end": 1196
            }
          ],
          "start": 20,
          "end": 1198
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 1198
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 1198
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1213
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C1_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1233,
                "end": 1242
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1261,
                      "end": 1263
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1266,
                        "end": 1277
                      },
                      "expression": false,
                      "start": 1263,
                      "end": 1277
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "private",
                    "start": 1253,
                    "end": 1277
                  }
                ],
                "start": 1243,
                "end": 1283
              },
              "abstract": false,
              "declare": false,
              "start": 1227,
              "end": 1283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1220,
            "end": 1283
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1306
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 1307,
              "end": 1314
            },
            "abstract": false,
            "declare": false,
            "start": 1290,
            "end": 1314
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 1337,
                "end": 1346
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1362,
                              "end": 1371
                            },
                            "typeArguments": null,
                            "start": 1362,
                            "end": 1371
                          },
                          "start": 1360,
                          "end": 1371
                        },
                        "start": 1358,
                        "end": 1371
                      }
                    ],
                    "returnType": null,
                    "start": 1357,
                    "end": 1373
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1387,
                              "end": 1397
                            },
                            "typeArguments": null,
                            "start": 1387,
                            "end": 1397
                          },
                          "start": 1385,
                          "end": 1397
                        },
                        "start": 1383,
                        "end": 1397
                      }
                    ],
                    "returnType": null,
                    "start": 1382,
                    "end": 1399
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1421
                        },
                        "typeArguments": null,
                        "start": 1412,
                        "end": 1421
                      },
                      "start": 1410,
                      "end": 1421
                    },
                    "start": 1408,
                    "end": 1422
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1436,
                            "end": 1442
                          },
                          "start": 1434,
                          "end": 1442
                        },
                        "start": 1432,
                        "end": 1442
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1445,
                          "end": 1455
                        },
                        "typeArguments": null,
                        "start": 1445,
                        "end": 1455
                      },
                      "start": 1443,
                      "end": 1455
                    },
                    "start": 1431,
                    "end": 1456
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1475,
                              "end": 1484
                            },
                            "typeArguments": null,
                            "start": 1475,
                            "end": 1484
                          },
                          "start": 1473,
                          "end": 1484
                        },
                        "start": 1471,
                        "end": 1484
                      }
                    ],
                    "returnType": null,
                    "start": 1466,
                    "end": 1486
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1504,
                              "end": 1514
                            },
                            "typeArguments": null,
                            "start": 1504,
                            "end": 1514
                          },
                          "start": 1502,
                          "end": 1514
                        },
                        "start": 1500,
                        "end": 1514
                      }
                    ],
                    "returnType": null,
                    "start": 1495,
                    "end": 1516
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1533,
                          "end": 1542
                        },
                        "typeArguments": null,
                        "start": 1533,
                        "end": 1542
                      },
                      "start": 1531,
                      "end": 1542
                    },
                    "start": 1525,
                    "end": 1543
                  },
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1561,
                            "end": 1567
                          },
                          "start": 1559,
                          "end": 1567
                        },
                        "start": 1557,
                        "end": 1567
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1570,
                          "end": 1580
                        },
                        "typeArguments": null,
                        "start": 1570,
                        "end": 1580
                      },
                      "start": 1568,
                      "end": 1580
                    },
                    "start": 1552,
                    "end": 1581
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1595,
                            "end": 1601
                          },
                          "start": 1593,
                          "end": 1601
                        },
                        "start": 1592,
                        "end": 1601
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1604,
                          "end": 1613
                        },
                        "typeArguments": null,
                        "start": 1604,
                        "end": 1613
                      },
                      "start": 1602,
                      "end": 1613
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1591,
                    "end": 1614
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1627,
                            "end": 1633
                          },
                          "start": 1625,
                          "end": 1633
                        },
                        "start": 1624,
                        "end": 1633
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1636,
                          "end": 1646
                        },
                        "typeArguments": null,
                        "start": 1636,
                        "end": 1646
                      },
                      "start": 1634,
                      "end": 1646
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 1623,
                    "end": 1647
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1657,
                      "end": 1658
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1660,
                          "end": 1669
                        },
                        "typeArguments": null,
                        "start": 1660,
                        "end": 1669
                      },
                      "start": 1658,
                      "end": 1669
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1657,
                    "end": 1670
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1679,
                      "end": 1680
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1682,
                          "end": 1692
                        },
                        "typeArguments": null,
                        "start": 1682,
                        "end": 1692
                      },
                      "start": 1680,
                      "end": 1692
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1679,
                    "end": 1693
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1703,
                      "end": 1704
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1707,
                          "end": 1716
                        },
                        "typeArguments": null,
                        "start": 1707,
                        "end": 1716
                      },
                      "start": 1705,
                      "end": 1716
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1703,
                    "end": 1717
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1726,
                      "end": 1727
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1730,
                          "end": 1740
                        },
                        "typeArguments": null,
                        "start": 1730,
                        "end": 1740
                      },
                      "start": 1728,
                      "end": 1740
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1726,
                    "end": 1741
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1751,
                      "end": 1753
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C1_public",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1758,
                              "end": 1767
                            },
                            "typeArguments": null,
                            "start": 1758,
                            "end": 1767
                          },
                          "start": 1756,
                          "end": 1767
                        },
                        "start": 1754,
                        "end": 1767
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1751,
                    "end": 1769
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1778,
                      "end": 1780
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C2_private",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1785,
                              "end": 1795
                            },
                            "typeArguments": null,
                            "start": 1785,
                            "end": 1795
                          },
                          "start": 1783,
                          "end": 1795
                        },
                        "start": 1781,
                        "end": 1795
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1778,
                    "end": 1797
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1806,
                      "end": 1808
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C1_public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1812,
                          "end": 1821
                        },
                        "typeArguments": null,
                        "start": 1812,
                        "end": 1821
                      },
                      "start": 1810,
                      "end": 1821
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1806,
                    "end": 1822
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1831,
                      "end": 1833
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C2_private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1837,
                          "end": 1847
                        },
                        "typeArguments": null,
                        "start": 1837,
                        "end": 1847
                      },
                      "start": 1835,
                      "end": 1847
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1831,
                    "end": 1848
                  }
                ],
                "start": 1347,
                "end": 1855
              },
              "declare": false,
              "start": 1327,
              "end": 1855
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1320,
            "end": 1855
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 1871,
              "end": 1881
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1897,
                            "end": 1906
                          },
                          "typeArguments": null,
                          "start": 1897,
                          "end": 1906
                        },
                        "start": 1895,
                        "end": 1906
                      },
                      "start": 1893,
                      "end": 1906
                    }
                  ],
                  "returnType": null,
                  "start": 1892,
                  "end": 1908
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1922,
                            "end": 1932
                          },
                          "typeArguments": null,
                          "start": 1922,
                          "end": 1932
                        },
                        "start": 1920,
                        "end": 1932
                      },
                      "start": 1918,
                      "end": 1932
                    }
                  ],
                  "returnType": null,
                  "start": 1917,
                  "end": 1934
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1947,
                        "end": 1956
                      },
                      "typeArguments": null,
                      "start": 1947,
                      "end": 1956
                    },
                    "start": 1945,
                    "end": 1956
                  },
                  "start": 1943,
                  "end": 1957
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 1971,
                          "end": 1977
                        },
                        "start": 1969,
                        "end": 1977
                      },
                      "start": 1967,
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
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1980,
                        "end": 1990
                      },
                      "typeArguments": null,
                      "start": 1980,
                      "end": 1990
                    },
                    "start": 1978,
                    "end": 1990
                  },
                  "start": 1966,
                  "end": 1991
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2010,
                            "end": 2019
                          },
                          "typeArguments": null,
                          "start": 2010,
                          "end": 2019
                        },
                        "start": 2008,
                        "end": 2019
                      },
                      "start": 2006,
                      "end": 2019
                    }
                  ],
                  "returnType": null,
                  "start": 2001,
                  "end": 2021
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2039,
                            "end": 2049
                          },
                          "typeArguments": null,
                          "start": 2039,
                          "end": 2049
                        },
                        "start": 2037,
                        "end": 2049
                      },
                      "start": 2035,
                      "end": 2049
                    }
                  ],
                  "returnType": null,
                  "start": 2030,
                  "end": 2051
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2068,
                        "end": 2077
                      },
                      "typeArguments": null,
                      "start": 2068,
                      "end": 2077
                    },
                    "start": 2066,
                    "end": 2077
                  },
                  "start": 2060,
                  "end": 2078
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2096,
                          "end": 2102
                        },
                        "start": 2094,
                        "end": 2102
                      },
                      "start": 2092,
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
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2105,
                        "end": 2115
                      },
                      "typeArguments": null,
                      "start": 2105,
                      "end": 2115
                    },
                    "start": 2103,
                    "end": 2115
                  },
                  "start": 2087,
                  "end": 2116
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 2130,
                          "end": 2136
                        },
                        "start": 2128,
                        "end": 2136
                      },
                      "start": 2127,
                      "end": 2136
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2139,
                        "end": 2148
                      },
                      "typeArguments": null,
                      "start": 2139,
                      "end": 2148
                    },
                    "start": 2137,
                    "end": 2148
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2126,
                  "end": 2149
                },
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2162,
                          "end": 2168
                        },
                        "start": 2160,
                        "end": 2168
                      },
                      "start": 2159,
                      "end": 2168
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2171,
                        "end": 2181
                      },
                      "typeArguments": null,
                      "start": 2171,
                      "end": 2181
                    },
                    "start": 2169,
                    "end": 2181
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 2158,
                  "end": 2182
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2192,
                    "end": 2193
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2195,
                        "end": 2204
                      },
                      "typeArguments": null,
                      "start": 2195,
                      "end": 2204
                    },
                    "start": 2193,
                    "end": 2204
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2192,
                  "end": 2205
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2214,
                    "end": 2215
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2217,
                        "end": 2227
                      },
                      "typeArguments": null,
                      "start": 2217,
                      "end": 2227
                    },
                    "start": 2215,
                    "end": 2227
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2214,
                  "end": 2228
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2238,
                    "end": 2239
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2242,
                        "end": 2251
                      },
                      "typeArguments": null,
                      "start": 2242,
                      "end": 2251
                    },
                    "start": 2240,
                    "end": 2251
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2238,
                  "end": 2252
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2261,
                    "end": 2262
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2265,
                        "end": 2275
                      },
                      "typeArguments": null,
                      "start": 2265,
                      "end": 2275
                    },
                    "start": 2263,
                    "end": 2275
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2261,
                  "end": 2276
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2286,
                    "end": 2288
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1_public",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2293,
                            "end": 2302
                          },
                          "typeArguments": null,
                          "start": 2293,
                          "end": 2302
                        },
                        "start": 2291,
                        "end": 2302
                      },
                      "start": 2289,
                      "end": 2302
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2286,
                  "end": 2304
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2313,
                    "end": 2315
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C2_private",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2320,
                            "end": 2330
                          },
                          "typeArguments": null,
                          "start": 2320,
                          "end": 2330
                        },
                        "start": 2318,
                        "end": 2330
                      },
                      "start": 2316,
                      "end": 2330
                    }
                  ],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2313,
                  "end": 2332
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2341,
                    "end": 2343
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C1_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2347,
                        "end": 2356
                      },
                      "typeArguments": null,
                      "start": 2347,
                      "end": 2356
                    },
                    "start": 2345,
                    "end": 2356
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2341,
                  "end": 2357
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2366,
                    "end": 2368
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2372,
                        "end": 2382
                      },
                      "typeArguments": null,
                      "start": 2372,
                      "end": 2382
                    },
                    "start": 2370,
                    "end": 2382
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 2366,
                  "end": 2383
                }
              ],
              "start": 1882,
              "end": 2390
            },
            "declare": false,
            "start": 1861,
            "end": 2390
          }
        ],
        "start": 1214,
        "end": 2392
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1201,
      "end": 2392
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C5_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2407,
          "end": 2416
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
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
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2431,
                "end": 2433
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 2436,
                  "end": 2443
                },
                "expression": false,
                "start": 2433,
                "end": 2443
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "private",
              "start": 2423,
              "end": 2443
            }
          ],
          "start": 2417,
          "end": 2445
        },
        "abstract": false,
        "declare": false,
        "start": 2401,
        "end": 2445
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2394,
      "end": 2445
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C6_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2454,
        "end": 2464
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 2465,
        "end": 2468
      },
      "abstract": false,
      "declare": false,
      "start": 2448,
      "end": 2468
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C7_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 2487,
          "end": 2496
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2508,
                        "end": 2517
                      },
                      "typeArguments": null,
                      "start": 2508,
                      "end": 2517
                    },
                    "start": 2506,
                    "end": 2517
                  },
                  "start": 2504,
                  "end": 2517
                }
              ],
              "returnType": null,
              "start": 2503,
              "end": 2519
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2529,
                        "end": 2539
                      },
                      "typeArguments": null,
                      "start": 2529,
                      "end": 2539
                    },
                    "start": 2527,
                    "end": 2539
                  },
                  "start": 2525,
                  "end": 2539
                }
              ],
              "returnType": null,
              "start": 2524,
              "end": 2541
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2550,
                    "end": 2559
                  },
                  "typeArguments": null,
                  "start": 2550,
                  "end": 2559
                },
                "start": 2548,
                "end": 2559
              },
              "start": 2546,
              "end": 2560
            },
            {
              "type": "TSCallSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2570,
                      "end": 2576
                    },
                    "start": 2568,
                    "end": 2576
                  },
                  "start": 2566,
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
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2579,
                    "end": 2589
                  },
                  "typeArguments": null,
                  "start": 2579,
                  "end": 2589
                },
                "start": 2577,
                "end": 2589
              },
              "start": 2565,
              "end": 2590
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2605,
                        "end": 2614
                      },
                      "typeArguments": null,
                      "start": 2605,
                      "end": 2614
                    },
                    "start": 2603,
                    "end": 2614
                  },
                  "start": 2601,
                  "end": 2614
                }
              ],
              "returnType": null,
              "start": 2596,
              "end": 2616
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2630,
                        "end": 2640
                      },
                      "typeArguments": null,
                      "start": 2630,
                      "end": 2640
                    },
                    "start": 2628,
                    "end": 2640
                  },
                  "start": 2626,
                  "end": 2640
                }
              ],
              "returnType": null,
              "start": 2621,
              "end": 2642
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2655,
                    "end": 2664
                  },
                  "typeArguments": null,
                  "start": 2655,
                  "end": 2664
                },
                "start": 2653,
                "end": 2664
              },
              "start": 2647,
              "end": 2665
            },
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2679,
                      "end": 2685
                    },
                    "start": 2677,
                    "end": 2685
                  },
                  "start": 2675,
                  "end": 2685
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2688,
                    "end": 2698
                  },
                  "typeArguments": null,
                  "start": 2688,
                  "end": 2698
                },
                "start": 2686,
                "end": 2698
              },
              "start": 2670,
              "end": 2699
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 2709,
                      "end": 2715
                    },
                    "start": 2707,
                    "end": 2715
                  },
                  "start": 2706,
                  "end": 2715
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2718,
                    "end": 2727
                  },
                  "typeArguments": null,
                  "start": 2718,
                  "end": 2727
                },
                "start": 2716,
                "end": 2727
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 2705,
              "end": 2728
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2737,
                      "end": 2743
                    },
                    "start": 2735,
                    "end": 2743
                  },
                  "start": 2734,
                  "end": 2743
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2746,
                    "end": 2756
                  },
                  "typeArguments": null,
                  "start": 2746,
                  "end": 2756
                },
                "start": 2744,
                "end": 2756
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 2733,
              "end": 2757
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2763,
                "end": 2764
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2766,
                    "end": 2775
                  },
                  "typeArguments": null,
                  "start": 2766,
                  "end": 2775
                },
                "start": 2764,
                "end": 2775
              },
              "accessibility": null,
              "static": false,
              "start": 2763,
              "end": 2776
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2781,
                "end": 2782
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2784,
                    "end": 2794
                  },
                  "typeArguments": null,
                  "start": 2784,
                  "end": 2794
                },
                "start": 2782,
                "end": 2794
              },
              "accessibility": null,
              "static": false,
              "start": 2781,
              "end": 2795
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2801,
                "end": 2802
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2805,
                    "end": 2814
                  },
                  "typeArguments": null,
                  "start": 2805,
                  "end": 2814
                },
                "start": 2803,
                "end": 2814
              },
              "accessibility": null,
              "static": false,
              "start": 2801,
              "end": 2815
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2820,
                "end": 2821
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2824,
                    "end": 2834
                  },
                  "typeArguments": null,
                  "start": 2824,
                  "end": 2834
                },
                "start": 2822,
                "end": 2834
              },
              "accessibility": null,
              "static": false,
              "start": 2820,
              "end": 2835
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2841,
                "end": 2843
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C5_public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2848,
                        "end": 2857
                      },
                      "typeArguments": null,
                      "start": 2848,
                      "end": 2857
                    },
                    "start": 2846,
                    "end": 2857
                  },
                  "start": 2844,
                  "end": 2857
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2841,
              "end": 2859
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 2864,
                "end": 2866
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C6_private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2871,
                        "end": 2881
                      },
                      "typeArguments": null,
                      "start": 2871,
                      "end": 2881
                    },
                    "start": 2869,
                    "end": 2881
                  },
                  "start": 2867,
                  "end": 2881
                }
              ],
              "returnType": null,
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2864,
              "end": 2883
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 2888,
                "end": 2890
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C5_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2894,
                    "end": 2903
                  },
                  "typeArguments": null,
                  "start": 2894,
                  "end": 2903
                },
                "start": 2892,
                "end": 2903
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2888,
              "end": 2904
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f4",
                "optional": false,
                "typeAnnotation": null,
                "start": 2909,
                "end": 2911
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C6_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2915,
                    "end": 2925
                  },
                  "typeArguments": null,
                  "start": 2915,
                  "end": 2925
                },
                "start": 2913,
                "end": 2925
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 2909,
              "end": 2926
            }
          ],
          "start": 2497,
          "end": 2929
        },
        "declare": false,
        "start": 2477,
        "end": 2929
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 2470,
      "end": 2929
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C8_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 2941,
        "end": 2951
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2963,
                      "end": 2972
                    },
                    "typeArguments": null,
                    "start": 2963,
                    "end": 2972
                  },
                  "start": 2961,
                  "end": 2972
                },
                "start": 2959,
                "end": 2972
              }
            ],
            "returnType": null,
            "start": 2958,
            "end": 2974
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C6_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2984,
                      "end": 2994
                    },
                    "typeArguments": null,
                    "start": 2984,
                    "end": 2994
                  },
                  "start": 2982,
                  "end": 2994
                },
                "start": 2980,
                "end": 2994
              }
            ],
            "returnType": null,
            "start": 2979,
            "end": 2996
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3005,
                  "end": 3014
                },
                "typeArguments": null,
                "start": 3005,
                "end": 3014
              },
              "start": 3003,
              "end": 3014
            },
            "start": 3001,
            "end": 3015
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3025,
                    "end": 3031
                  },
                  "start": 3023,
                  "end": 3031
                },
                "start": 3021,
                "end": 3031
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3034,
                  "end": 3044
                },
                "typeArguments": null,
                "start": 3034,
                "end": 3044
              },
              "start": 3032,
              "end": 3044
            },
            "start": 3020,
            "end": 3045
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3060,
                      "end": 3069
                    },
                    "typeArguments": null,
                    "start": 3060,
                    "end": 3069
                  },
                  "start": 3058,
                  "end": 3069
                },
                "start": 3056,
                "end": 3069
              }
            ],
            "returnType": null,
            "start": 3051,
            "end": 3071
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C6_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3085,
                      "end": 3095
                    },
                    "typeArguments": null,
                    "start": 3085,
                    "end": 3095
                  },
                  "start": 3083,
                  "end": 3095
                },
                "start": 3081,
                "end": 3095
              }
            ],
            "returnType": null,
            "start": 3076,
            "end": 3097
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3110,
                  "end": 3119
                },
                "typeArguments": null,
                "start": 3110,
                "end": 3119
              },
              "start": 3108,
              "end": 3119
            },
            "start": 3102,
            "end": 3120
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3134,
                    "end": 3140
                  },
                  "start": 3132,
                  "end": 3140
                },
                "start": 3130,
                "end": 3140
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3143,
                  "end": 3153
                },
                "typeArguments": null,
                "start": 3143,
                "end": 3153
              },
              "start": 3141,
              "end": 3153
            },
            "start": 3125,
            "end": 3154
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3164,
                    "end": 3170
                  },
                  "start": 3162,
                  "end": 3170
                },
                "start": 3161,
                "end": 3170
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3173,
                  "end": 3182
                },
                "typeArguments": null,
                "start": 3173,
                "end": 3182
              },
              "start": 3171,
              "end": 3182
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3160,
            "end": 3183
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 3192,
                    "end": 3198
                  },
                  "start": 3190,
                  "end": 3198
                },
                "start": 3189,
                "end": 3198
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3201,
                  "end": 3211
                },
                "typeArguments": null,
                "start": 3201,
                "end": 3211
              },
              "start": 3199,
              "end": 3211
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 3188,
            "end": 3212
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3218,
              "end": 3219
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3221,
                  "end": 3230
                },
                "typeArguments": null,
                "start": 3221,
                "end": 3230
              },
              "start": 3219,
              "end": 3230
            },
            "accessibility": null,
            "static": false,
            "start": 3218,
            "end": 3231
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3236,
              "end": 3237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3239,
                  "end": 3249
                },
                "typeArguments": null,
                "start": 3239,
                "end": 3249
              },
              "start": 3237,
              "end": 3249
            },
            "accessibility": null,
            "static": false,
            "start": 3236,
            "end": 3250
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 3256,
              "end": 3257
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3260,
                  "end": 3269
                },
                "typeArguments": null,
                "start": 3260,
                "end": 3269
              },
              "start": 3258,
              "end": 3269
            },
            "accessibility": null,
            "static": false,
            "start": 3256,
            "end": 3270
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 3275,
              "end": 3276
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3279,
                  "end": 3289
                },
                "typeArguments": null,
                "start": 3279,
                "end": 3289
              },
              "start": 3277,
              "end": 3289
            },
            "accessibility": null,
            "static": false,
            "start": 3275,
            "end": 3290
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 3296,
              "end": 3298
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C5_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3303,
                      "end": 3312
                    },
                    "typeArguments": null,
                    "start": 3303,
                    "end": 3312
                  },
                  "start": 3301,
                  "end": 3312
                },
                "start": 3299,
                "end": 3312
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3296,
            "end": 3314
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 3319,
              "end": 3321
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C6_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3326,
                      "end": 3336
                    },
                    "typeArguments": null,
                    "start": 3326,
                    "end": 3336
                  },
                  "start": 3324,
                  "end": 3336
                },
                "start": 3322,
                "end": 3336
              }
            ],
            "returnType": null,
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3319,
            "end": 3338
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 3343,
              "end": 3345
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C5_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3349,
                  "end": 3358
                },
                "typeArguments": null,
                "start": 3349,
                "end": 3358
              },
              "start": 3347,
              "end": 3358
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3343,
            "end": 3359
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null,
              "start": 3364,
              "end": 3366
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C6_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3370,
                  "end": 3380
                },
                "typeArguments": null,
                "start": 3370,
                "end": 3380
              },
              "start": 3368,
              "end": 3380
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 3364,
            "end": 3381
          }
        ],
        "start": 2952,
        "end": 3384
      },
      "declare": false,
      "start": 2931,
      "end": 3384
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "m3",
          "optional": false,
          "typeAnnotation": null,
          "start": 3403,
          "end": 3405
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3429,
                  "end": 3440
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3451,
                        "end": 3453
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
                          "start": 3457,
                          "end": 3463
                        },
                        "start": 3455,
                        "end": 3463
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 3451,
                      "end": 3464
                    }
                  ],
                  "start": 3441,
                  "end": 3470
                },
                "declare": false,
                "start": 3419,
                "end": 3470
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3412,
              "end": 3470
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_i_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3486,
                "end": 3498
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3509,
                      "end": 3511
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3515,
                        "end": 3521
                      },
                      "start": 3513,
                      "end": 3521
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3509,
                    "end": 3522
                  }
                ],
                "start": 3499,
                "end": 3528
              },
              "declare": false,
              "start": 3476,
              "end": 3528
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C1_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3544,
                "end": 3557
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3566,
                    "end": 3577
                  },
                  "typeArguments": null,
                  "start": 3566,
                  "end": 3577
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 3578,
                "end": 3585
              },
              "declare": false,
              "start": 3534,
              "end": 3585
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C2_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3600,
                "end": 3613
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3622,
                    "end": 3634
                  },
                  "typeArguments": null,
                  "start": 3622,
                  "end": 3634
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 3635,
                "end": 3642
              },
              "declare": false,
              "start": 3590,
              "end": 3642
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_C3_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3664,
                  "end": 3676
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3685,
                      "end": 3696
                    },
                    "typeArguments": null,
                    "start": 3685,
                    "end": 3696
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 3697,
                  "end": 3704
                },
                "declare": false,
                "start": 3654,
                "end": 3704
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3647,
              "end": 3704
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_C4_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3726,
                  "end": 3738
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3_i_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3747,
                      "end": 3759
                    },
                    "typeArguments": null,
                    "start": 3747,
                    "end": 3759
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 3760,
                  "end": 3767
                },
                "declare": false,
                "start": 3716,
                "end": 3767
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3709,
              "end": 3767
            },
            {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3_C5_private",
                "optional": false,
                "typeAnnotation": null,
                "start": 3783,
                "end": 3796
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3805,
                    "end": 3817
                  },
                  "typeArguments": null,
                  "start": 3805,
                  "end": 3817
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m3_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3819,
                    "end": 3830
                  },
                  "typeArguments": null,
                  "start": 3819,
                  "end": 3830
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 3831,
                "end": 3838
              },
              "declare": false,
              "start": 3773,
              "end": 3838
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m3_C6_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3860,
                  "end": 3872
                },
                "typeParameters": null,
                "extends": [
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3_i_private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3882,
                      "end": 3894
                    },
                    "typeArguments": null,
                    "start": 3882,
                    "end": 3894
                  },
                  {
                    "type": "TSInterfaceHeritage",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m3_i_public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3896,
                      "end": 3907
                    },
                    "typeArguments": null,
                    "start": 3896,
                    "end": 3907
                  }
                ],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 3908,
                  "end": 3915
                },
                "declare": false,
                "start": 3850,
                "end": 3915
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 3843,
              "end": 3915
            }
          ],
          "start": 3406,
          "end": 3917
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 3393,
        "end": 3917
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 3386,
      "end": 3917
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 3930,
        "end": 3932
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_i_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 3956,
                "end": 3967
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3978,
                      "end": 3980
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
                        "start": 3984,
                        "end": 3990
                      },
                      "start": 3982,
                      "end": 3990
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3978,
                    "end": 3991
                  }
                ],
                "start": 3968,
                "end": 3997
              },
              "declare": false,
              "start": 3946,
              "end": 3997
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3939,
            "end": 3997
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4013,
              "end": 4025
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4036,
                    "end": 4038
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4042,
                      "end": 4048
                    },
                    "start": 4040,
                    "end": 4048
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 4036,
                  "end": 4049
                }
              ],
              "start": 4026,
              "end": 4055
            },
            "declare": false,
            "start": 4003,
            "end": 4055
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_C1_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4071,
              "end": 4084
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4093,
                  "end": 4104
                },
                "typeArguments": null,
                "start": 4093,
                "end": 4104
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 4105,
              "end": 4112
            },
            "declare": false,
            "start": 4061,
            "end": 4112
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_C2_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4127,
              "end": 4140
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4149,
                  "end": 4161
                },
                "typeArguments": null,
                "start": 4149,
                "end": 4161
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 4162,
              "end": 4169
            },
            "declare": false,
            "start": 4117,
            "end": 4169
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_C3_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4191,
                "end": 4203
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4212,
                    "end": 4223
                  },
                  "typeArguments": null,
                  "start": 4212,
                  "end": 4223
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4224,
                "end": 4231
              },
              "declare": false,
              "start": 4181,
              "end": 4231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4174,
            "end": 4231
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_C4_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4253,
                "end": 4265
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4274,
                    "end": 4286
                  },
                  "typeArguments": null,
                  "start": 4274,
                  "end": 4286
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4287,
                "end": 4294
              },
              "declare": false,
              "start": 4243,
              "end": 4294
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4236,
            "end": 4294
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m4_C5_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4310,
              "end": 4323
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_private",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4332,
                  "end": 4344
                },
                "typeArguments": null,
                "start": 4332,
                "end": 4344
              },
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m4_i_public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4346,
                  "end": 4357
                },
                "typeArguments": null,
                "start": 4346,
                "end": 4357
              }
            ],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 4358,
              "end": 4365
            },
            "declare": false,
            "start": 4300,
            "end": 4365
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m4_C6_public",
                "optional": false,
                "typeAnnotation": null,
                "start": 4387,
                "end": 4399
              },
              "typeParameters": null,
              "extends": [
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_private",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4409,
                    "end": 4421
                  },
                  "typeArguments": null,
                  "start": 4409,
                  "end": 4421
                },
                {
                  "type": "TSInterfaceHeritage",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m4_i_public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4423,
                    "end": 4434
                  },
                  "typeArguments": null,
                  "start": 4423,
                  "end": 4434
                }
              ],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 4435,
                "end": 4442
              },
              "declare": false,
              "start": 4377,
              "end": 4442
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 4370,
            "end": 4442
          }
        ],
        "start": 3933,
        "end": 4444
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3920,
      "end": 4444
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_i_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4463,
          "end": 4475
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "f1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4482,
                "end": 4484
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
                  "start": 4488,
                  "end": 4494
                },
                "start": 4486,
                "end": 4494
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 4482,
              "end": 4495
            }
          ],
          "start": 4476,
          "end": 4497
        },
        "declare": false,
        "start": 4453,
        "end": 4497
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4446,
      "end": 4497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_i_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4509,
        "end": 4522
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4529,
              "end": 4531
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4535,
                "end": 4541
              },
              "start": 4533,
              "end": 4541
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4529,
            "end": 4542
          }
        ],
        "start": 4523,
        "end": 4544
      },
      "declare": false,
      "start": 4499,
      "end": 4544
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C1_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4556,
        "end": 4570
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 4579,
            "end": 4591
          },
          "typeArguments": null,
          "start": 4579,
          "end": 4591
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4592,
        "end": 4595
      },
      "declare": false,
      "start": 4546,
      "end": 4595
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C2_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4606,
        "end": 4620
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 4629,
            "end": 4642
          },
          "typeArguments": null,
          "start": 4629,
          "end": 4642
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4643,
        "end": 4646
      },
      "declare": false,
      "start": 4596,
      "end": 4646
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C3_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4664,
          "end": 4677
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4686,
              "end": 4698
            },
            "typeArguments": null,
            "start": 4686,
            "end": 4698
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 4699,
          "end": 4702
        },
        "declare": false,
        "start": 4654,
        "end": 4702
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4647,
      "end": 4702
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C4_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4720,
          "end": 4733
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4742,
              "end": 4755
            },
            "typeArguments": null,
            "start": 4742,
            "end": 4755
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 4756,
          "end": 4759
        },
        "declare": false,
        "start": 4710,
        "end": 4759
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4703,
      "end": 4759
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "glo_C5_private",
        "optional": false,
        "typeAnnotation": null,
        "start": 4771,
        "end": 4785
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_private",
            "optional": false,
            "typeAnnotation": null,
            "start": 4794,
            "end": 4807
          },
          "typeArguments": null,
          "start": 4794,
          "end": 4807
        },
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "glo_i_public",
            "optional": false,
            "typeAnnotation": null,
            "start": 4809,
            "end": 4821
          },
          "typeArguments": null,
          "start": 4809,
          "end": 4821
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 4822,
        "end": 4825
      },
      "declare": false,
      "start": 4761,
      "end": 4825
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "glo_C6_public",
          "optional": false,
          "typeAnnotation": null,
          "start": 4843,
          "end": 4856
        },
        "typeParameters": null,
        "extends": [
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_private",
              "optional": false,
              "typeAnnotation": null,
              "start": 4866,
              "end": 4879
            },
            "typeArguments": null,
            "start": 4866,
            "end": 4879
          },
          {
            "type": "TSInterfaceHeritage",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "glo_i_public",
              "optional": false,
              "typeAnnotation": null,
              "start": 4881,
              "end": 4893
            },
            "typeArguments": null,
            "start": 4881,
            "end": 4893
          }
        ],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 4894,
          "end": 4897
        },
        "declare": false,
        "start": 4833,
        "end": 4897
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4826,
      "end": 4897
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4897
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
    "value": "namespace",
    "start": 7,
    "end": 16,
    "range": [
      7,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38,
    "range": [
      33,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 59,
    "end": 66,
    "range": [
      59,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 102,
    "end": 112,
    "range": [
      102,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132,
    "range": [
      126,
      132
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 133,
    "end": 142,
    "range": [
      133,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 143,
    "end": 152,
    "range": [
      143,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 168,
    "end": 177,
    "range": [
      168,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 189,
    "end": 191,
    "range": [
      189,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 193,
    "end": 203,
    "range": [
      193,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 218,
    "end": 227,
    "range": [
      218,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 238,
    "end": 240,
    "range": [
      238,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 242,
    "end": 248,
    "range": [
      242,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 251,
    "end": 261,
    "range": [
      251,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 272,
    "end": 275,
    "range": [
      272,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 277,
    "end": 279,
    "range": [
      277,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 281,
    "end": 290,
    "range": [
      281,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 301,
    "end": 304,
    "range": [
      301,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 306,
    "end": 308,
    "range": [
      306,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 310,
    "end": 320,
    "range": [
      310,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 331,
    "end": 334,
    "range": [
      331,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 339,
    "end": 348,
    "range": [
      339,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 358,
    "end": 361,
    "range": [
      358,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 363,
    "end": 365,
    "range": [
      363,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 367,
    "end": 373,
    "range": [
      367,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 376,
    "end": 386,
    "range": [
      376,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 401,
    "end": 407,
    "range": [
      401,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 410,
    "end": 419,
    "range": [
      410,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 433,
    "end": 439,
    "range": [
      433,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 442,
    "end": 452,
    "range": [
      442,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 466,
    "end": 475,
    "range": [
      466,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 488,
    "end": 498,
    "range": [
      488,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 513,
    "end": 522,
    "range": [
      513,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 536,
    "end": 546,
    "range": [
      536,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 557,
    "end": 559,
    "range": [
      557,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 560,
    "end": 562,
    "range": [
      560,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 564,
    "end": 573,
    "range": [
      564,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 584,
    "end": 586,
    "range": [
      584,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 587,
    "end": 589,
    "range": [
      587,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 591,
    "end": 601,
    "range": [
      591,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 612,
    "end": 614,
    "range": [
      612,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 618,
    "end": 627,
    "range": [
      618,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 637,
    "end": 639,
    "range": [
      637,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 643,
    "end": 653,
    "range": [
      643,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676,
    "range": [
      667,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 677,
    "end": 687,
    "range": [
      677,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 699,
    "end": 701,
    "range": [
      699,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 703,
    "end": 712,
    "range": [
      703,
      712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 723,
    "end": 724,
    "range": [
      723,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 724,
    "end": 726,
    "range": [
      724,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 728,
    "end": 738,
    "range": [
      728,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 753,
    "end": 762,
    "range": [
      753,
      762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 762,
    "end": 763,
    "range": [
      762,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 772,
    "end": 773,
    "range": [
      772,
      773
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 773,
    "end": 775,
    "range": [
      773,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 777,
    "end": 783,
    "range": [
      777,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 786,
    "end": 796,
    "range": [
      786,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 807,
    "end": 810,
    "range": [
      807,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 812,
    "end": 814,
    "range": [
      812,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 816,
    "end": 825,
    "range": [
      816,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Keyword",
    "value": "new",
    "start": 836,
    "end": 839,
    "range": [
      836,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 841,
    "end": 843,
    "range": [
      841,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 845,
    "end": 855,
    "range": [
      845,
      855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 855,
    "end": 856,
    "range": [
      855,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 866,
    "end": 869,
    "range": [
      866,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 874,
    "end": 883,
    "range": [
      874,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 893,
    "end": 896,
    "range": [
      893,
      896
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 898,
    "end": 900,
    "range": [
      898,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 902,
    "end": 908,
    "range": [
      902,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 911,
    "end": 921,
    "range": [
      911,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 936,
    "end": 942,
    "range": [
      936,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 945,
    "end": 954,
    "range": [
      945,
      954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 965,
    "end": 966,
    "range": [
      965,
      966
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 968,
    "end": 974,
    "range": [
      968,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 977,
    "end": 987,
    "range": [
      977,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1001,
    "end": 1010,
    "range": [
      1001,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1020,
    "end": 1021,
    "range": [
      1020,
      1021
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1023,
    "end": 1033,
    "range": [
      1023,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1048,
    "end": 1057,
    "range": [
      1048,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1067,
    "end": 1068,
    "range": [
      1067,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1069,
    "end": 1070,
    "range": [
      1069,
      1070
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1071,
    "end": 1081,
    "range": [
      1071,
      1081
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1081,
    "end": 1082,
    "range": [
      1081,
      1082
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1092,
    "end": 1094,
    "range": [
      1092,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1095,
    "end": 1097,
    "range": [
      1095,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1099,
    "end": 1108,
    "range": [
      1099,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1119,
    "end": 1121,
    "range": [
      1119,
      1121
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1121,
    "end": 1122,
    "range": [
      1121,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1122,
    "end": 1124,
    "range": [
      1122,
      1124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1124,
    "end": 1125,
    "range": [
      1124,
      1125
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1126,
    "end": 1136,
    "range": [
      1126,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1147,
    "end": 1149,
    "range": [
      1147,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1153,
    "end": 1162,
    "range": [
      1153,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1172,
    "end": 1174,
    "range": [
      1172,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1176,
    "end": 1177,
    "range": [
      1176,
      1177
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1178,
    "end": 1188,
    "range": [
      1178,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1201,
    "end": 1210,
    "range": [
      1201,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 1211,
    "end": 1213,
    "range": [
      1211,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1220,
    "end": 1226,
    "range": [
      1220,
      1226
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1227,
    "end": 1232,
    "range": [
      1227,
      1232
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1233,
    "end": 1242,
    "range": [
      1233,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1253,
    "end": 1260,
    "range": [
      1253,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1261,
    "end": 1263,
    "range": [
      1261,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1290,
    "end": 1295,
    "range": [
      1290,
      1295
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1296,
    "end": 1306,
    "range": [
      1296,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1320,
    "end": 1326,
    "range": [
      1320,
      1326
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1327,
    "end": 1336,
    "range": [
      1327,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "C3_public",
    "start": 1337,
    "end": 1346,
    "range": [
      1337,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1358,
    "end": 1360,
    "range": [
      1358,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1362,
    "end": 1371,
    "range": [
      1362,
      1371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1383,
    "end": 1385,
    "range": [
      1383,
      1385
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1387,
    "end": 1397,
    "range": [
      1387,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1412,
    "end": 1421,
    "range": [
      1412,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1432,
    "end": 1434,
    "range": [
      1432,
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
    "value": "number",
    "start": 1436,
    "end": 1442,
    "range": [
      1436,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1445,
    "end": 1455,
    "range": [
      1445,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1466,
    "end": 1469,
    "range": [
      1466,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1471,
    "end": 1473,
    "range": [
      1471,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1475,
    "end": 1484,
    "range": [
      1475,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1495,
    "end": 1498,
    "range": [
      1495,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1500,
    "end": 1502,
    "range": [
      1500,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1504,
    "end": 1514,
    "range": [
      1504,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1525,
    "end": 1528,
    "range": [
      1525,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1533,
    "end": 1542,
    "range": [
      1533,
      1542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1552,
    "end": 1555,
    "range": [
      1552,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1557,
    "end": 1559,
    "range": [
      1557,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1561,
    "end": 1567,
    "range": [
      1561,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1570,
    "end": 1580,
    "range": [
      1570,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1595,
    "end": 1601,
    "range": [
      1595,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1604,
    "end": 1613,
    "range": [
      1604,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1623,
    "end": 1624,
    "range": [
      1623,
      1624
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1627,
    "end": 1633,
    "range": [
      1627,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1636,
    "end": 1646,
    "range": [
      1636,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1660,
    "end": 1669,
    "range": [
      1660,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1682,
    "end": 1692,
    "range": [
      1682,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1707,
    "end": 1716,
    "range": [
      1707,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1730,
    "end": 1740,
    "range": [
      1730,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1751,
    "end": 1753,
    "range": [
      1751,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1754,
    "end": 1756,
    "range": [
      1754,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1758,
    "end": 1767,
    "range": [
      1758,
      1767
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1778,
    "end": 1780,
    "range": [
      1778,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1780,
    "end": 1781,
    "range": [
      1780,
      1781
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 1781,
    "end": 1783,
    "range": [
      1781,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1785,
    "end": 1795,
    "range": [
      1785,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 1806,
    "end": 1808,
    "range": [
      1806,
      1808
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1812,
    "end": 1821,
    "range": [
      1812,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 1831,
    "end": 1833,
    "range": [
      1831,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1837,
    "end": 1847,
    "range": [
      1837,
      1847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1861,
    "end": 1870,
    "range": [
      1861,
      1870
    ]
  },
  {
    "type": "Identifier",
    "value": "C4_private",
    "start": 1871,
    "end": 1881,
    "range": [
      1871,
      1881
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1893,
    "end": 1895,
    "range": [
      1893,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1897,
    "end": 1906,
    "range": [
      1897,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 1918,
    "end": 1920,
    "range": [
      1918,
      1920
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1922,
    "end": 1932,
    "range": [
      1922,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1943,
    "end": 1944,
    "range": [
      1943,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 1947,
    "end": 1956,
    "range": [
      1947,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 1967,
    "end": 1969,
    "range": [
      1967,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1971,
    "end": 1977,
    "range": [
      1971,
      1977
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 1980,
    "end": 1990,
    "range": [
      1980,
      1990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2001,
    "end": 2004,
    "range": [
      2001,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2006,
    "end": 2008,
    "range": [
      2006,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2010,
    "end": 2019,
    "range": [
      2010,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2020,
    "end": 2021,
    "range": [
      2020,
      2021
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2030,
    "end": 2033,
    "range": [
      2030,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2035,
    "end": 2037,
    "range": [
      2035,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2039,
    "end": 2049,
    "range": [
      2039,
      2049
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2049,
    "end": 2050,
    "range": [
      2049,
      2050
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2060,
    "end": 2063,
    "range": [
      2060,
      2063
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2068,
    "end": 2077,
    "range": [
      2068,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2087,
    "end": 2090,
    "range": [
      2087,
      2090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2091,
    "end": 2092,
    "range": [
      2091,
      2092
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2092,
    "end": 2094,
    "range": [
      2092,
      2094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2096,
    "end": 2102,
    "range": [
      2096,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2105,
    "end": 2115,
    "range": [
      2105,
      2115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2130,
    "end": 2136,
    "range": [
      2130,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2137,
    "end": 2138,
    "range": [
      2137,
      2138
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2139,
    "end": 2148,
    "range": [
      2139,
      2148
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2148,
    "end": 2149,
    "range": [
      2148,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2158,
    "end": 2159,
    "range": [
      2158,
      2159
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2159,
    "end": 2160,
    "range": [
      2159,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2162,
    "end": 2168,
    "range": [
      2162,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2171,
    "end": 2181,
    "range": [
      2171,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2192,
    "end": 2193,
    "range": [
      2192,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2195,
    "end": 2204,
    "range": [
      2195,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2214,
    "end": 2215,
    "range": [
      2214,
      2215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2217,
    "end": 2227,
    "range": [
      2217,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2242,
    "end": 2251,
    "range": [
      2242,
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
    "type": "Identifier",
    "value": "b",
    "start": 2261,
    "end": 2262,
    "range": [
      2261,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2263,
    "end": 2264,
    "range": [
      2263,
      2264
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2265,
    "end": 2275,
    "range": [
      2265,
      2275
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2275,
    "end": 2276,
    "range": [
      2275,
      2276
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2286,
    "end": 2288,
    "range": [
      2286,
      2288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2289,
    "end": 2291,
    "range": [
      2289,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2293,
    "end": 2302,
    "range": [
      2293,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2313,
    "end": 2315,
    "range": [
      2313,
      2315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2316,
    "end": 2318,
    "range": [
      2316,
      2318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2318,
    "end": 2319,
    "range": [
      2318,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2320,
    "end": 2330,
    "range": [
      2320,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2331,
    "end": 2332,
    "range": [
      2331,
      2332
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2341,
    "end": 2343,
    "range": [
      2341,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2345,
    "end": 2346,
    "range": [
      2345,
      2346
    ]
  },
  {
    "type": "Identifier",
    "value": "C1_public",
    "start": 2347,
    "end": 2356,
    "range": [
      2347,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2356,
    "end": 2357,
    "range": [
      2356,
      2357
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2366,
    "end": 2368,
    "range": [
      2366,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Identifier",
    "value": "C2_private",
    "start": 2372,
    "end": 2382,
    "range": [
      2372,
      2382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2382,
    "end": 2383,
    "range": [
      2382,
      2383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2394,
    "end": 2400,
    "range": [
      2394,
      2400
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2401,
    "end": 2406,
    "range": [
      2401,
      2406
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2407,
    "end": 2416,
    "range": [
      2407,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 2423,
    "end": 2430,
    "range": [
      2423,
      2430
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2431,
    "end": 2433,
    "range": [
      2431,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2442,
    "end": 2443,
    "range": [
      2442,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2448,
    "end": 2453,
    "range": [
      2448,
      2453
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2454,
    "end": 2464,
    "range": [
      2454,
      2464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2467,
    "end": 2468,
    "range": [
      2467,
      2468
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 2470,
    "end": 2476,
    "range": [
      2470,
      2476
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2477,
    "end": 2486,
    "range": [
      2477,
      2486
    ]
  },
  {
    "type": "Identifier",
    "value": "C7_public",
    "start": 2487,
    "end": 2496,
    "range": [
      2487,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2504,
    "end": 2506,
    "range": [
      2504,
      2506
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2506,
    "end": 2507,
    "range": [
      2506,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2508,
    "end": 2517,
    "range": [
      2508,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2517,
    "end": 2518,
    "range": [
      2517,
      2518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2524,
    "end": 2525,
    "range": [
      2524,
      2525
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2525,
    "end": 2527,
    "range": [
      2525,
      2527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2527,
    "end": 2528,
    "range": [
      2527,
      2528
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2529,
    "end": 2539,
    "range": [
      2529,
      2539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2539,
    "end": 2540,
    "range": [
      2539,
      2540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2550,
    "end": 2559,
    "range": [
      2550,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2566,
    "end": 2568,
    "range": [
      2566,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2570,
    "end": 2576,
    "range": [
      2570,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2579,
    "end": 2589,
    "range": [
      2579,
      2589
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2589,
    "end": 2590,
    "range": [
      2589,
      2590
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2596,
    "end": 2599,
    "range": [
      2596,
      2599
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2601,
    "end": 2603,
    "range": [
      2601,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2605,
    "end": 2614,
    "range": [
      2605,
      2614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2614,
    "end": 2615,
    "range": [
      2614,
      2615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2615,
    "end": 2616,
    "range": [
      2615,
      2616
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2621,
    "end": 2624,
    "range": [
      2621,
      2624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2626,
    "end": 2628,
    "range": [
      2626,
      2628
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2628,
    "end": 2629,
    "range": [
      2628,
      2629
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2630,
    "end": 2640,
    "range": [
      2630,
      2640
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2641,
    "end": 2642,
    "range": [
      2641,
      2642
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2647,
    "end": 2650,
    "range": [
      2647,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2655,
    "end": 2664,
    "range": [
      2655,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 2670,
    "end": 2673,
    "range": [
      2670,
      2673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 2675,
    "end": 2677,
    "range": [
      2675,
      2677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2677,
    "end": 2678,
    "range": [
      2677,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2679,
    "end": 2685,
    "range": [
      2679,
      2685
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2685,
    "end": 2686,
    "range": [
      2685,
      2686
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2686,
    "end": 2687,
    "range": [
      2686,
      2687
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2688,
    "end": 2698,
    "range": [
      2688,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2707,
    "end": 2708,
    "range": [
      2707,
      2708
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2709,
    "end": 2715,
    "range": [
      2709,
      2715
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2716,
    "end": 2717,
    "range": [
      2716,
      2717
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2718,
    "end": 2727,
    "range": [
      2718,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2737,
    "end": 2743,
    "range": [
      2737,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2744,
    "end": 2745,
    "range": [
      2744,
      2745
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2746,
    "end": 2756,
    "range": [
      2746,
      2756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2756,
    "end": 2757,
    "range": [
      2756,
      2757
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2763,
    "end": 2764,
    "range": [
      2763,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2766,
    "end": 2775,
    "range": [
      2766,
      2775
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2782,
    "end": 2783,
    "range": [
      2782,
      2783
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2784,
    "end": 2794,
    "range": [
      2784,
      2794
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2803,
    "end": 2804,
    "range": [
      2803,
      2804
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2805,
    "end": 2814,
    "range": [
      2805,
      2814
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2814,
    "end": 2815,
    "range": [
      2814,
      2815
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2820,
    "end": 2821,
    "range": [
      2820,
      2821
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2822,
    "end": 2823,
    "range": [
      2822,
      2823
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2824,
    "end": 2834,
    "range": [
      2824,
      2834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2834,
    "end": 2835,
    "range": [
      2834,
      2835
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 2841,
    "end": 2843,
    "range": [
      2841,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2844,
    "end": 2846,
    "range": [
      2844,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2848,
    "end": 2857,
    "range": [
      2848,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 2864,
    "end": 2866,
    "range": [
      2864,
      2866
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2866,
    "end": 2867,
    "range": [
      2866,
      2867
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2867,
    "end": 2869,
    "range": [
      2867,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2871,
    "end": 2881,
    "range": [
      2871,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 2888,
    "end": 2890,
    "range": [
      2888,
      2890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2894,
    "end": 2903,
    "range": [
      2894,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2903,
    "end": 2904,
    "range": [
      2903,
      2904
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 2909,
    "end": 2911,
    "range": [
      2909,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2913,
    "end": 2914,
    "range": [
      2913,
      2914
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2915,
    "end": 2925,
    "range": [
      2915,
      2925
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2931,
    "end": 2940,
    "range": [
      2931,
      2940
    ]
  },
  {
    "type": "Identifier",
    "value": "C8_private",
    "start": 2941,
    "end": 2951,
    "range": [
      2941,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2959,
    "end": 2961,
    "range": [
      2959,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 2963,
    "end": 2972,
    "range": [
      2963,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2973,
    "end": 2974,
    "range": [
      2973,
      2974
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 2980,
    "end": 2982,
    "range": [
      2980,
      2982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2982,
    "end": 2983,
    "range": [
      2982,
      2983
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 2984,
    "end": 2994,
    "range": [
      2984,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3001,
    "end": 3002,
    "range": [
      3001,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3005,
    "end": 3014,
    "range": [
      3005,
      3014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 3021,
    "end": 3023,
    "range": [
      3021,
      3023
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3023,
    "end": 3024,
    "range": [
      3023,
      3024
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3025,
    "end": 3031,
    "range": [
      3025,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3032,
    "end": 3033,
    "range": [
      3032,
      3033
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3034,
    "end": 3044,
    "range": [
      3034,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3051,
    "end": 3054,
    "range": [
      3051,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3056,
    "end": 3058,
    "range": [
      3056,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3060,
    "end": 3069,
    "range": [
      3060,
      3069
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3069,
    "end": 3070,
    "range": [
      3069,
      3070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3070,
    "end": 3071,
    "range": [
      3070,
      3071
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3076,
    "end": 3079,
    "range": [
      3076,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 3081,
    "end": 3083,
    "range": [
      3081,
      3083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3083,
    "end": 3084,
    "range": [
      3083,
      3084
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3085,
    "end": 3095,
    "range": [
      3085,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3102,
    "end": 3105,
    "range": [
      3102,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3106,
    "end": 3107,
    "range": [
      3106,
      3107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3108,
    "end": 3109,
    "range": [
      3108,
      3109
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3110,
    "end": 3119,
    "range": [
      3110,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 3125,
    "end": 3128,
    "range": [
      3125,
      3128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3129,
    "end": 3130,
    "range": [
      3129,
      3130
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 3130,
    "end": 3132,
    "range": [
      3130,
      3132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3134,
    "end": 3140,
    "range": [
      3134,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3141,
    "end": 3142,
    "range": [
      3141,
      3142
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3143,
    "end": 3153,
    "range": [
      3143,
      3153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3153,
    "end": 3154,
    "range": [
      3153,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3160,
    "end": 3161,
    "range": [
      3160,
      3161
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3161,
    "end": 3162,
    "range": [
      3161,
      3162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3162,
    "end": 3163,
    "range": [
      3162,
      3163
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3164,
    "end": 3170,
    "range": [
      3164,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3173,
    "end": 3182,
    "range": [
      3173,
      3182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3182,
    "end": 3183,
    "range": [
      3182,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3192,
    "end": 3198,
    "range": [
      3192,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3201,
    "end": 3211,
    "range": [
      3201,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3218,
    "end": 3219,
    "range": [
      3218,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3221,
    "end": 3230,
    "range": [
      3221,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3239,
    "end": 3249,
    "range": [
      3239,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3257,
    "end": 3258,
    "range": [
      3257,
      3258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3258,
    "end": 3259,
    "range": [
      3258,
      3259
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3260,
    "end": 3269,
    "range": [
      3260,
      3269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3269,
    "end": 3270,
    "range": [
      3269,
      3270
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3276,
    "end": 3277,
    "range": [
      3276,
      3277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3277,
    "end": 3278,
    "range": [
      3277,
      3278
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3279,
    "end": 3289,
    "range": [
      3279,
      3289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3289,
    "end": 3290,
    "range": [
      3289,
      3290
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3296,
    "end": 3298,
    "range": [
      3296,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3298,
    "end": 3299,
    "range": [
      3298,
      3299
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3299,
    "end": 3301,
    "range": [
      3299,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3301,
    "end": 3302,
    "range": [
      3301,
      3302
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3303,
    "end": 3312,
    "range": [
      3303,
      3312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3312,
    "end": 3313,
    "range": [
      3312,
      3313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3313,
    "end": 3314,
    "range": [
      3313,
      3314
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 3319,
    "end": 3321,
    "range": [
      3319,
      3321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3321,
    "end": 3322,
    "range": [
      3321,
      3322
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 3322,
    "end": 3324,
    "range": [
      3322,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3324,
    "end": 3325,
    "range": [
      3324,
      3325
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3326,
    "end": 3336,
    "range": [
      3326,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3336,
    "end": 3337,
    "range": [
      3336,
      3337
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 3343,
    "end": 3345,
    "range": [
      3343,
      3345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Identifier",
    "value": "C5_public",
    "start": 3349,
    "end": 3358,
    "range": [
      3349,
      3358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3358,
    "end": 3359,
    "range": [
      3358,
      3359
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 3364,
    "end": 3366,
    "range": [
      3364,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3367,
    "end": 3368,
    "range": [
      3367,
      3368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3368,
    "end": 3369,
    "range": [
      3368,
      3369
    ]
  },
  {
    "type": "Identifier",
    "value": "C6_private",
    "start": 3370,
    "end": 3380,
    "range": [
      3370,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3383,
    "end": 3384,
    "range": [
      3383,
      3384
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3386,
    "end": 3392,
    "range": [
      3386,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3393,
    "end": 3402,
    "range": [
      3393,
      3402
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 3403,
    "end": 3405,
    "range": [
      3403,
      3405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3406,
    "end": 3407,
    "range": [
      3406,
      3407
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3412,
    "end": 3418,
    "range": [
      3412,
      3418
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3419,
    "end": 3428,
    "range": [
      3419,
      3428
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 3429,
    "end": 3440,
    "range": [
      3429,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3451,
    "end": 3453,
    "range": [
      3451,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3454,
    "end": 3455,
    "range": [
      3454,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3457,
    "end": 3463,
    "range": [
      3457,
      3463
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3463,
    "end": 3464,
    "range": [
      3463,
      3464
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3476,
    "end": 3485,
    "range": [
      3476,
      3485
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 3486,
    "end": 3498,
    "range": [
      3486,
      3498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 3509,
    "end": 3511,
    "range": [
      3509,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3512,
    "end": 3513,
    "range": [
      3512,
      3513
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3513,
    "end": 3514,
    "range": [
      3513,
      3514
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3515,
    "end": 3521,
    "range": [
      3515,
      3521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3521,
    "end": 3522,
    "range": [
      3521,
      3522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3534,
    "end": 3543,
    "range": [
      3534,
      3543
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_C1_private",
    "start": 3544,
    "end": 3557,
    "range": [
      3544,
      3557
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3558,
    "end": 3565,
    "range": [
      3558,
      3565
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 3566,
    "end": 3577,
    "range": [
      3566,
      3577
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3578,
    "end": 3579,
    "range": [
      3578,
      3579
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3584,
    "end": 3585,
    "range": [
      3584,
      3585
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3590,
    "end": 3599,
    "range": [
      3590,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_C2_private",
    "start": 3600,
    "end": 3613,
    "range": [
      3600,
      3613
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3614,
    "end": 3621,
    "range": [
      3614,
      3621
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 3622,
    "end": 3634,
    "range": [
      3622,
      3634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3635,
    "end": 3636,
    "range": [
      3635,
      3636
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3647,
    "end": 3653,
    "range": [
      3647,
      3653
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3654,
    "end": 3663,
    "range": [
      3654,
      3663
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_C3_public",
    "start": 3664,
    "end": 3676,
    "range": [
      3664,
      3676
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3677,
    "end": 3684,
    "range": [
      3677,
      3684
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 3685,
    "end": 3696,
    "range": [
      3685,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3697,
    "end": 3698,
    "range": [
      3697,
      3698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3703,
    "end": 3704,
    "range": [
      3703,
      3704
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3709,
    "end": 3715,
    "range": [
      3709,
      3715
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3716,
    "end": 3725,
    "range": [
      3716,
      3725
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_C4_public",
    "start": 3726,
    "end": 3738,
    "range": [
      3726,
      3738
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3739,
    "end": 3746,
    "range": [
      3739,
      3746
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 3747,
    "end": 3759,
    "range": [
      3747,
      3759
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3760,
    "end": 3761,
    "range": [
      3760,
      3761
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3773,
    "end": 3782,
    "range": [
      3773,
      3782
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_C5_private",
    "start": 3783,
    "end": 3796,
    "range": [
      3783,
      3796
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3797,
    "end": 3804,
    "range": [
      3797,
      3804
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 3805,
    "end": 3817,
    "range": [
      3805,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 3819,
    "end": 3830,
    "range": [
      3819,
      3830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3837,
    "end": 3838,
    "range": [
      3837,
      3838
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3843,
    "end": 3849,
    "range": [
      3843,
      3849
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3850,
    "end": 3859,
    "range": [
      3850,
      3859
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_C6_public",
    "start": 3860,
    "end": 3872,
    "range": [
      3860,
      3872
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3873,
    "end": 3880,
    "range": [
      3873,
      3880
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_private",
    "start": 3882,
    "end": 3894,
    "range": [
      3882,
      3894
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3894,
    "end": 3895,
    "range": [
      3894,
      3895
    ]
  },
  {
    "type": "Identifier",
    "value": "m3_i_public",
    "start": 3896,
    "end": 3907,
    "range": [
      3896,
      3907
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3908,
    "end": 3909,
    "range": [
      3908,
      3909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3916,
    "end": 3917,
    "range": [
      3916,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3920,
    "end": 3929,
    "range": [
      3920,
      3929
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 3930,
    "end": 3932,
    "range": [
      3930,
      3932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3933,
    "end": 3934,
    "range": [
      3933,
      3934
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 3939,
    "end": 3945,
    "range": [
      3939,
      3945
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3946,
    "end": 3955,
    "range": [
      3946,
      3955
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_public",
    "start": 3956,
    "end": 3967,
    "range": [
      3956,
      3967
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 3978,
    "end": 3980,
    "range": [
      3978,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3984,
    "end": 3990,
    "range": [
      3984,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4003,
    "end": 4012,
    "range": [
      4003,
      4012
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_private",
    "start": 4013,
    "end": 4025,
    "range": [
      4013,
      4025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 4036,
    "end": 4038,
    "range": [
      4036,
      4038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4038,
    "end": 4039,
    "range": [
      4038,
      4039
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4039,
    "end": 4040,
    "range": [
      4039,
      4040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4040,
    "end": 4041,
    "range": [
      4040,
      4041
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4042,
    "end": 4048,
    "range": [
      4042,
      4048
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4048,
    "end": 4049,
    "range": [
      4048,
      4049
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4054,
    "end": 4055,
    "range": [
      4054,
      4055
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4061,
    "end": 4070,
    "range": [
      4061,
      4070
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_C1_private",
    "start": 4071,
    "end": 4084,
    "range": [
      4071,
      4084
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4085,
    "end": 4092,
    "range": [
      4085,
      4092
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_public",
    "start": 4093,
    "end": 4104,
    "range": [
      4093,
      4104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4105,
    "end": 4106,
    "range": [
      4105,
      4106
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4117,
    "end": 4126,
    "range": [
      4117,
      4126
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_C2_private",
    "start": 4127,
    "end": 4140,
    "range": [
      4127,
      4140
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4141,
    "end": 4148,
    "range": [
      4141,
      4148
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_private",
    "start": 4149,
    "end": 4161,
    "range": [
      4149,
      4161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4162,
    "end": 4163,
    "range": [
      4162,
      4163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4168,
    "end": 4169,
    "range": [
      4168,
      4169
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4174,
    "end": 4180,
    "range": [
      4174,
      4180
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4181,
    "end": 4190,
    "range": [
      4181,
      4190
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_C3_public",
    "start": 4191,
    "end": 4203,
    "range": [
      4191,
      4203
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4204,
    "end": 4211,
    "range": [
      4204,
      4211
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_public",
    "start": 4212,
    "end": 4223,
    "range": [
      4212,
      4223
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4224,
    "end": 4225,
    "range": [
      4224,
      4225
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4236,
    "end": 4242,
    "range": [
      4236,
      4242
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4243,
    "end": 4252,
    "range": [
      4243,
      4252
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_C4_public",
    "start": 4253,
    "end": 4265,
    "range": [
      4253,
      4265
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4266,
    "end": 4273,
    "range": [
      4266,
      4273
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_private",
    "start": 4274,
    "end": 4286,
    "range": [
      4274,
      4286
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4287,
    "end": 4288,
    "range": [
      4287,
      4288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4293,
    "end": 4294,
    "range": [
      4293,
      4294
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4300,
    "end": 4309,
    "range": [
      4300,
      4309
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_C5_private",
    "start": 4310,
    "end": 4323,
    "range": [
      4310,
      4323
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4324,
    "end": 4331,
    "range": [
      4324,
      4331
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_private",
    "start": 4332,
    "end": 4344,
    "range": [
      4332,
      4344
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4344,
    "end": 4345,
    "range": [
      4344,
      4345
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_public",
    "start": 4346,
    "end": 4357,
    "range": [
      4346,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4358,
    "end": 4359,
    "range": [
      4358,
      4359
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4364,
    "end": 4365,
    "range": [
      4364,
      4365
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4370,
    "end": 4376,
    "range": [
      4370,
      4376
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4377,
    "end": 4386,
    "range": [
      4377,
      4386
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_C6_public",
    "start": 4387,
    "end": 4399,
    "range": [
      4387,
      4399
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4400,
    "end": 4407,
    "range": [
      4400,
      4407
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_private",
    "start": 4409,
    "end": 4421,
    "range": [
      4409,
      4421
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4421,
    "end": 4422,
    "range": [
      4421,
      4422
    ]
  },
  {
    "type": "Identifier",
    "value": "m4_i_public",
    "start": 4423,
    "end": 4434,
    "range": [
      4423,
      4434
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4441,
    "end": 4442,
    "range": [
      4441,
      4442
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4443,
    "end": 4444,
    "range": [
      4443,
      4444
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4446,
    "end": 4452,
    "range": [
      4446,
      4452
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4453,
    "end": 4462,
    "range": [
      4453,
      4462
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 4463,
    "end": 4475,
    "range": [
      4463,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4476,
    "end": 4477,
    "range": [
      4476,
      4477
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 4482,
    "end": 4484,
    "range": [
      4482,
      4484
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4484,
    "end": 4485,
    "range": [
      4484,
      4485
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4485,
    "end": 4486,
    "range": [
      4485,
      4486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4486,
    "end": 4487,
    "range": [
      4486,
      4487
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4488,
    "end": 4494,
    "range": [
      4488,
      4494
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4494,
    "end": 4495,
    "range": [
      4494,
      4495
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4496,
    "end": 4497,
    "range": [
      4496,
      4497
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4499,
    "end": 4508,
    "range": [
      4499,
      4508
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 4509,
    "end": 4522,
    "range": [
      4509,
      4522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4523,
    "end": 4524,
    "range": [
      4523,
      4524
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 4529,
    "end": 4531,
    "range": [
      4529,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4532,
    "end": 4533,
    "range": [
      4532,
      4533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4535,
    "end": 4541,
    "range": [
      4535,
      4541
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4543,
    "end": 4544,
    "range": [
      4543,
      4544
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4546,
    "end": 4555,
    "range": [
      4546,
      4555
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C1_private",
    "start": 4556,
    "end": 4570,
    "range": [
      4556,
      4570
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4571,
    "end": 4578,
    "range": [
      4571,
      4578
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 4579,
    "end": 4591,
    "range": [
      4579,
      4591
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4594,
    "end": 4595,
    "range": [
      4594,
      4595
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4596,
    "end": 4605,
    "range": [
      4596,
      4605
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C2_private",
    "start": 4606,
    "end": 4620,
    "range": [
      4606,
      4620
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4621,
    "end": 4628,
    "range": [
      4621,
      4628
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 4629,
    "end": 4642,
    "range": [
      4629,
      4642
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4643,
    "end": 4644,
    "range": [
      4643,
      4644
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4645,
    "end": 4646,
    "range": [
      4645,
      4646
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4647,
    "end": 4653,
    "range": [
      4647,
      4653
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4654,
    "end": 4663,
    "range": [
      4654,
      4663
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C3_public",
    "start": 4664,
    "end": 4677,
    "range": [
      4664,
      4677
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4678,
    "end": 4685,
    "range": [
      4678,
      4685
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 4686,
    "end": 4698,
    "range": [
      4686,
      4698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4699,
    "end": 4700,
    "range": [
      4699,
      4700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4701,
    "end": 4702,
    "range": [
      4701,
      4702
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4703,
    "end": 4709,
    "range": [
      4703,
      4709
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4710,
    "end": 4719,
    "range": [
      4710,
      4719
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C4_public",
    "start": 4720,
    "end": 4733,
    "range": [
      4720,
      4733
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4734,
    "end": 4741,
    "range": [
      4734,
      4741
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 4742,
    "end": 4755,
    "range": [
      4742,
      4755
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4756,
    "end": 4757,
    "range": [
      4756,
      4757
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4758,
    "end": 4759,
    "range": [
      4758,
      4759
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4761,
    "end": 4770,
    "range": [
      4761,
      4770
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C5_private",
    "start": 4771,
    "end": 4785,
    "range": [
      4771,
      4785
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4786,
    "end": 4793,
    "range": [
      4786,
      4793
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 4794,
    "end": 4807,
    "range": [
      4794,
      4807
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4807,
    "end": 4808,
    "range": [
      4807,
      4808
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 4809,
    "end": 4821,
    "range": [
      4809,
      4821
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4822,
    "end": 4823,
    "range": [
      4822,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4824,
    "end": 4825,
    "range": [
      4824,
      4825
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 4826,
    "end": 4832,
    "range": [
      4826,
      4832
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4833,
    "end": 4842,
    "range": [
      4833,
      4842
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_C6_public",
    "start": 4843,
    "end": 4856,
    "range": [
      4843,
      4856
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4857,
    "end": 4864,
    "range": [
      4857,
      4864
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_private",
    "start": 4866,
    "end": 4879,
    "range": [
      4866,
      4879
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4879,
    "end": 4880,
    "range": [
      4879,
      4880
    ]
  },
  {
    "type": "Identifier",
    "value": "glo_i_public",
    "start": 4881,
    "end": 4893,
    "range": [
      4881,
      4893
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4894,
    "end": 4895,
    "range": [
      4894,
      4895
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4896,
    "end": 4897,
    "range": [
      4896,
      4897
    ]
  }
]
```
