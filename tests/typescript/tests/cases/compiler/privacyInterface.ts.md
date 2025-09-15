__ESTREE_TEST__:PASS:
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
