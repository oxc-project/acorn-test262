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
        "name": "NonGenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 196,
        "end": 215
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "type": "TSBooleanKeyword",
                                  "start": 246,
                                  "end": 253
                                },
                                "start": 244,
                                "end": 253
                              },
                              "start": 243,
                              "end": 253
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 256,
                              "end": 263
                            },
                            "start": 254,
                            "end": 263
                          },
                          "start": 239,
                          "end": 264
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
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
                                  "type": "TSStringKeyword",
                                  "start": 280,
                                  "end": 286
                                },
                                "start": 278,
                                "end": 286
                              },
                              "start": 277,
                              "end": 286
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 289,
                              "end": 295
                            },
                            "start": 287,
                            "end": 295
                          },
                          "start": 273,
                          "end": 296
                        }
                      ],
                      "start": 229,
                      "end": 302
                    },
                    "start": 227,
                    "end": 302
                  },
                  "start": 226,
                  "end": 302
                },
                "init": null,
                "definite": false,
                "start": 226,
                "end": 302
              }
            ],
            "declare": false,
            "start": 222,
            "end": 302
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 321
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 334
                    },
                    "typeArguments": null,
                    "start": 326,
                    "end": 334
                  },
                  "start": 324,
                  "end": 334
                },
                "start": 322,
                "end": 334
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 353,
                    "end": 355
                  },
                  "start": 346,
                  "end": 356
                }
              ],
              "start": 336,
              "end": 362
            },
            "expression": false,
            "start": 308,
            "end": 362
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 382,
                                  "end": 383
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 382,
                                "end": 383
                              },
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 385,
                                  "end": 386
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 385,
                                "end": 386
                              }
                            ],
                            "start": 381,
                            "end": 387
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
                                    "start": 391,
                                    "end": 392
                                  },
                                  "typeArguments": null,
                                  "start": 391,
                                  "end": 392
                                },
                                "start": 389,
                                "end": 392
                              },
                              "start": 388,
                              "end": 392
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 395,
                                "end": 396
                              },
                              "typeArguments": null,
                              "start": 395,
                              "end": 396
                            },
                            "start": 393,
                            "end": 396
                          },
                          "start": 377,
                          "end": 396
                        }
                      ],
                      "start": 375,
                      "end": 398
                    },
                    "start": 373,
                    "end": 398
                  },
                  "start": 372,
                  "end": 398
                },
                "init": null,
                "definite": false,
                "start": 372,
                "end": 398
              }
            ],
            "declare": false,
            "start": 368,
            "end": 398
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 409
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 416
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 418
                    }
                  ],
                  "optional": false,
                  "start": 412,
                  "end": 419
                },
                "definite": false,
                "start": 407,
                "end": 419
              }
            ],
            "declare": false,
            "start": 403,
            "end": 420
          }
        ],
        "start": 216,
        "end": 428
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 428
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 440,
        "end": 456
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 476
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
                    "start": 477,
                    "end": 478
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 477,
                  "end": 478
                }
              ],
              "start": 476,
              "end": 479
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                  "start": 493,
                                  "end": 494
                                },
                                "typeArguments": null,
                                "start": 493,
                                "end": 494
                              },
                              "start": 491,
                              "end": 494
                            },
                            "start": 490,
                            "end": 494
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 497,
                            "end": 503
                          },
                          "start": 495,
                          "end": 503
                        },
                        "start": 486,
                        "end": 504
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                "type": "TSNumberKeyword",
                                "start": 512,
                                "end": 518
                              },
                              "start": 510,
                              "end": 518
                            },
                            "start": 509,
                            "end": 518
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
                              "start": 521,
                              "end": 522
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 522
                          },
                          "start": 519,
                          "end": 522
                        },
                        "start": 505,
                        "end": 522
                      }
                    ],
                    "start": 484,
                    "end": 524
                  },
                  "start": 482,
                  "end": 524
                },
                "start": 480,
                "end": 524
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 545
                  },
                  "start": 536,
                  "end": 546
                }
              ],
              "start": 526,
              "end": 552
            },
            "expression": false,
            "start": 463,
            "end": 552
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 572,
                                  "end": 573
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 572,
                                "end": 573
                              }
                            ],
                            "start": 571,
                            "end": 574
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
                                    "start": 578,
                                    "end": 579
                                  },
                                  "typeArguments": null,
                                  "start": 578,
                                  "end": 579
                                },
                                "start": 576,
                                "end": 579
                              },
                              "start": 575,
                              "end": 579
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
                          "start": 567,
                          "end": 583
                        }
                      ],
                      "start": 565,
                      "end": 585
                    },
                    "start": 563,
                    "end": 585
                  },
                  "start": 562,
                  "end": 585
                },
                "init": null,
                "definite": false,
                "start": 562,
                "end": 585
              }
            ],
            "declare": false,
            "start": 558,
            "end": 586
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 595,
                  "end": 597
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 600,
                    "end": 604
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 605,
                      "end": 606
                    }
                  ],
                  "optional": false,
                  "start": 600,
                  "end": 607
                },
                "definite": false,
                "start": 595,
                "end": 607
              }
            ],
            "declare": false,
            "start": 591,
            "end": 608
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 633
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
                    "start": 634,
                    "end": 635
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 634,
                  "end": 635
                }
              ],
              "start": 633,
              "end": 636
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                  "start": 650,
                                  "end": 651
                                },
                                "typeArguments": null,
                                "start": 650,
                                "end": 651
                              },
                              "start": 648,
                              "end": 651
                            },
                            "start": 647,
                            "end": 651
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 654,
                            "end": 660
                          },
                          "start": 652,
                          "end": 660
                        },
                        "start": 643,
                        "end": 661
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                  "start": 669,
                                  "end": 670
                                },
                                "typeArguments": null,
                                "start": 669,
                                "end": 670
                              },
                              "start": 667,
                              "end": 670
                            },
                            "start": 666,
                            "end": 670
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
                                  "start": 676,
                                  "end": 677
                                },
                                "typeArguments": null,
                                "start": 676,
                                "end": 677
                              },
                              "start": 674,
                              "end": 677
                            },
                            "start": 672,
                            "end": 677
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 680,
                            "end": 686
                          },
                          "start": 678,
                          "end": 686
                        },
                        "start": 662,
                        "end": 686
                      }
                    ],
                    "start": 641,
                    "end": 688
                  },
                  "start": 639,
                  "end": 688
                },
                "start": 637,
                "end": 688
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 707,
                    "end": 709
                  },
                  "start": 700,
                  "end": 710
                }
              ],
              "start": 690,
              "end": 716
            },
            "expression": false,
            "start": 620,
            "end": 716
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 736,
                                  "end": 737
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 736,
                                "end": 737
                              }
                            ],
                            "start": 735,
                            "end": 738
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
                                    "start": 742,
                                    "end": 743
                                  },
                                  "typeArguments": null,
                                  "start": 742,
                                  "end": 743
                                },
                                "start": 740,
                                "end": 743
                              },
                              "start": 739,
                              "end": 743
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
                                    "start": 748,
                                    "end": 749
                                  },
                                  "typeArguments": null,
                                  "start": 748,
                                  "end": 749
                                },
                                "start": 746,
                                "end": 749
                              },
                              "start": 745,
                              "end": 749
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 752,
                              "end": 758
                            },
                            "start": 750,
                            "end": 758
                          },
                          "start": 731,
                          "end": 758
                        }
                      ],
                      "start": 729,
                      "end": 760
                    },
                    "start": 727,
                    "end": 760
                  },
                  "start": 726,
                  "end": 760
                },
                "init": null,
                "definite": false,
                "start": 726,
                "end": 760
              }
            ],
            "declare": false,
            "start": 722,
            "end": 761
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 773
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 776,
                    "end": 780
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    }
                  ],
                  "optional": false,
                  "start": 776,
                  "end": 783
                },
                "definite": false,
                "start": 770,
                "end": 783
              }
            ],
            "declare": false,
            "start": 766,
            "end": 784
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 808,
              "end": 812
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
                    "start": 813,
                    "end": 814
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 813,
                  "end": 814
                }
              ],
              "start": 812,
              "end": 815
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
                      "start": 818,
                      "end": 819
                    },
                    "typeArguments": null,
                    "start": 818,
                    "end": 819
                  },
                  "start": 817,
                  "end": 819
                },
                "start": 816,
                "end": 819
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                  "start": 834,
                                  "end": 835
                                },
                                "typeArguments": null,
                                "start": 834,
                                "end": 835
                              },
                              "start": 832,
                              "end": 835
                            },
                            "start": 831,
                            "end": 835
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 838,
                            "end": 844
                          },
                          "start": 836,
                          "end": 844
                        },
                        "start": 827,
                        "end": 845
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
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
                                  "start": 853,
                                  "end": 854
                                },
                                "typeArguments": null,
                                "start": 853,
                                "end": 854
                              },
                              "start": 851,
                              "end": 854
                            },
                            "start": 850,
                            "end": 854
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
                                  "start": 860,
                                  "end": 861
                                },
                                "typeArguments": null,
                                "start": 860,
                                "end": 861
                              },
                              "start": 858,
                              "end": 861
                            },
                            "start": 856,
                            "end": 861
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 864,
                            "end": 870
                          },
                          "start": 862,
                          "end": 870
                        },
                        "start": 846,
                        "end": 870
                      }
                    ],
                    "start": 825,
                    "end": 872
                  },
                  "start": 823,
                  "end": 872
                },
                "start": 821,
                "end": 872
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 893
                  },
                  "start": 884,
                  "end": 894
                }
              ],
              "start": 874,
              "end": 900
            },
            "expression": false,
            "start": 799,
            "end": 900
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 910,
                  "end": 913
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 916,
                    "end": 920
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 921,
                      "end": 922
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 924,
                      "end": 925
                    }
                  ],
                  "optional": false,
                  "start": 916,
                  "end": 926
                },
                "definite": false,
                "start": 910,
                "end": 926
              }
            ],
            "declare": false,
            "start": 906,
            "end": 927
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 951,
                                  "end": 952
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 951,
                                "end": 952
                              }
                            ],
                            "start": 950,
                            "end": 953
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
                                    "start": 957,
                                    "end": 958
                                  },
                                  "typeArguments": null,
                                  "start": 957,
                                  "end": 958
                                },
                                "start": 955,
                                "end": 958
                              },
                              "start": 954,
                              "end": 958
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 961,
                              "end": 967
                            },
                            "start": 959,
                            "end": 967
                          },
                          "start": 947,
                          "end": 968
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 973,
                                  "end": 974
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 973,
                                "end": 974
                              }
                            ],
                            "start": 972,
                            "end": 975
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
                                  "type": "TSNumberKeyword",
                                  "start": 979,
                                  "end": 985
                                },
                                "start": 977,
                                "end": 985
                              },
                              "start": 976,
                              "end": 985
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
                                "start": 988,
                                "end": 989
                              },
                              "typeArguments": null,
                              "start": 988,
                              "end": 989
                            },
                            "start": 986,
                            "end": 989
                          },
                          "start": 969,
                          "end": 990
                        }
                      ],
                      "start": 945,
                      "end": 992
                    },
                    "start": 943,
                    "end": 992
                  },
                  "start": 942,
                  "end": 992
                },
                "init": null,
                "definite": false,
                "start": 942,
                "end": 992
              }
            ],
            "declare": false,
            "start": 938,
            "end": 992
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1001,
                  "end": 1004
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1011
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1012,
                      "end": 1013
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1015,
                      "end": 1016
                    }
                  ],
                  "optional": false,
                  "start": 1007,
                  "end": 1017
                },
                "definite": false,
                "start": 1001,
                "end": 1017
              }
            ],
            "declare": false,
            "start": 997,
            "end": 1018
          }
        ],
        "start": 457,
        "end": 1026
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 430,
      "end": 1026
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 1026
}
```
