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
        "start": 193,
        "end": 212
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
                                  "start": 243,
                                  "end": 250
                                },
                                "start": 241,
                                "end": 250
                              },
                              "start": 240,
                              "end": 250
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 253,
                              "end": 260
                            },
                            "start": 251,
                            "end": 260
                          },
                          "start": 236,
                          "end": 261
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
                                  "start": 277,
                                  "end": 283
                                },
                                "start": 275,
                                "end": 283
                              },
                              "start": 274,
                              "end": 283
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 286,
                              "end": 292
                            },
                            "start": 284,
                            "end": 292
                          },
                          "start": 270,
                          "end": 293
                        }
                      ],
                      "start": 226,
                      "end": 299
                    },
                    "start": 224,
                    "end": 299
                  },
                  "start": 223,
                  "end": 299
                },
                "init": null,
                "definite": false,
                "start": 223,
                "end": 299
              }
            ],
            "declare": false,
            "start": 219,
            "end": 299
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 318
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
                      "start": 330,
                      "end": 331
                    },
                    "typeArguments": null,
                    "start": 323,
                    "end": 331
                  },
                  "start": 321,
                  "end": 331
                },
                "start": 319,
                "end": 331
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 356
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 357,
                        "end": 361
                      }
                    ],
                    "start": 350,
                    "end": 362
                  },
                  "start": 343,
                  "end": 363
                }
              ],
              "start": 333,
              "end": 369
            },
            "expression": false,
            "start": 305,
            "end": 369
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
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 379,
                  "end": 380
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 383,
                    "end": 387
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 389
                    }
                  ],
                  "optional": false,
                  "start": 383,
                  "end": 390
                },
                "definite": false,
                "start": 379,
                "end": 390
              }
            ],
            "declare": false,
            "start": 375,
            "end": 391
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
                                  "start": 410,
                                  "end": 411
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 410,
                                "end": 411
                              }
                            ],
                            "start": 409,
                            "end": 412
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
                                    "start": 416,
                                    "end": 417
                                  },
                                  "typeArguments": null,
                                  "start": 416,
                                  "end": 417
                                },
                                "start": 414,
                                "end": 417
                              },
                              "start": 413,
                              "end": 417
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
                                "start": 420,
                                "end": 421
                              },
                              "typeArguments": null,
                              "start": 420,
                              "end": 421
                            },
                            "start": 418,
                            "end": 421
                          },
                          "start": 405,
                          "end": 421
                        }
                      ],
                      "start": 403,
                      "end": 423
                    },
                    "start": 401,
                    "end": 423
                  },
                  "start": 400,
                  "end": 423
                },
                "init": null,
                "definite": false,
                "start": 400,
                "end": 423
              }
            ],
            "declare": false,
            "start": 396,
            "end": 424
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
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 435
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 438,
                    "end": 442
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 444
                    }
                  ],
                  "optional": false,
                  "start": 438,
                  "end": 445
                },
                "definite": false,
                "start": 433,
                "end": 445
              }
            ],
            "declare": false,
            "start": 429,
            "end": 446
          }
        ],
        "start": 213,
        "end": 448
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 448
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 473
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
              "start": 489,
              "end": 493
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
                    "start": 494,
                    "end": 495
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 494,
                  "end": 495
                }
              ],
              "start": 493,
              "end": 496
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
                                  "start": 510,
                                  "end": 511
                                },
                                "typeArguments": null,
                                "start": 510,
                                "end": 511
                              },
                              "start": 508,
                              "end": 511
                            },
                            "start": 507,
                            "end": 511
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 514,
                            "end": 520
                          },
                          "start": 512,
                          "end": 520
                        },
                        "start": 503,
                        "end": 521
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
                                "start": 529,
                                "end": 535
                              },
                              "start": 527,
                              "end": 535
                            },
                            "start": 526,
                            "end": 535
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
                              "start": 538,
                              "end": 539
                            },
                            "typeArguments": null,
                            "start": 538,
                            "end": 539
                          },
                          "start": 536,
                          "end": 539
                        },
                        "start": 522,
                        "end": 539
                      }
                    ],
                    "start": 501,
                    "end": 541
                  },
                  "start": 499,
                  "end": 541
                },
                "start": 497,
                "end": 541
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
                    "start": 560,
                    "end": 562
                  },
                  "start": 553,
                  "end": 563
                }
              ],
              "start": 543,
              "end": 569
            },
            "expression": false,
            "start": 480,
            "end": 569
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
                                  "start": 600,
                                  "end": 607
                                },
                                "start": 598,
                                "end": 607
                              },
                              "start": 597,
                              "end": 607
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 610,
                              "end": 616
                            },
                            "start": 608,
                            "end": 616
                          },
                          "start": 592,
                          "end": 617
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
                                  "start": 634,
                                  "end": 640
                                },
                                "start": 632,
                                "end": 640
                              },
                              "start": 631,
                              "end": 640
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 643,
                              "end": 650
                            },
                            "start": 641,
                            "end": 650
                          },
                          "start": 626,
                          "end": 651
                        }
                      ],
                      "start": 582,
                      "end": 657
                    },
                    "start": 580,
                    "end": 657
                  },
                  "start": 579,
                  "end": 657
                },
                "init": null,
                "definite": false,
                "start": 579,
                "end": 657
              }
            ],
            "declare": false,
            "start": 575,
            "end": 657
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
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 666,
                  "end": 668
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 671,
                    "end": 675
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 676,
                      "end": 677
                    }
                  ],
                  "optional": false,
                  "start": 671,
                  "end": 678
                },
                "definite": false,
                "start": 666,
                "end": 678
              }
            ],
            "declare": false,
            "start": 662,
            "end": 679
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
                                  "start": 737,
                                  "end": 738
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 737,
                                "end": 738
                              }
                            ],
                            "start": 736,
                            "end": 739
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
                                    "start": 743,
                                    "end": 744
                                  },
                                  "typeArguments": null,
                                  "start": 743,
                                  "end": 744
                                },
                                "start": 741,
                                "end": 744
                              },
                              "start": 740,
                              "end": 744
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 747,
                              "end": 753
                            },
                            "start": 745,
                            "end": 753
                          },
                          "start": 733,
                          "end": 754
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
                                  "start": 759,
                                  "end": 760
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 759,
                                "end": 760
                              }
                            ],
                            "start": 758,
                            "end": 761
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
                                  "start": 765,
                                  "end": 771
                                },
                                "start": 763,
                                "end": 771
                              },
                              "start": 762,
                              "end": 771
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
                                "start": 774,
                                "end": 775
                              },
                              "typeArguments": null,
                              "start": 774,
                              "end": 775
                            },
                            "start": 772,
                            "end": 775
                          },
                          "start": 755,
                          "end": 776
                        }
                      ],
                      "start": 731,
                      "end": 778
                    },
                    "start": 729,
                    "end": 778
                  },
                  "start": 728,
                  "end": 778
                },
                "init": null,
                "definite": false,
                "start": 728,
                "end": 778
              }
            ],
            "declare": false,
            "start": 724,
            "end": 778
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
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 787,
                  "end": 789
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 792,
                    "end": 796
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 798
                    }
                  ],
                  "optional": false,
                  "start": 792,
                  "end": 799
                },
                "definite": false,
                "start": 787,
                "end": 799
              }
            ],
            "declare": false,
            "start": 783,
            "end": 800
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 858,
              "end": 862
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
                    "start": 863,
                    "end": 864
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 863,
                  "end": 864
                }
              ],
              "start": 862,
              "end": 865
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
                                  "start": 879,
                                  "end": 880
                                },
                                "typeArguments": null,
                                "start": 879,
                                "end": 880
                              },
                              "start": 877,
                              "end": 880
                            },
                            "start": 876,
                            "end": 880
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 883,
                            "end": 889
                          },
                          "start": 881,
                          "end": 889
                        },
                        "start": 872,
                        "end": 890
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
                                  "start": 898,
                                  "end": 899
                                },
                                "typeArguments": null,
                                "start": 898,
                                "end": 899
                              },
                              "start": 896,
                              "end": 899
                            },
                            "start": 895,
                            "end": 899
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
                                  "start": 905,
                                  "end": 906
                                },
                                "typeArguments": null,
                                "start": 905,
                                "end": 906
                              },
                              "start": 903,
                              "end": 906
                            },
                            "start": 901,
                            "end": 906
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 909,
                            "end": 915
                          },
                          "start": 907,
                          "end": 915
                        },
                        "start": 891,
                        "end": 915
                      }
                    ],
                    "start": 870,
                    "end": 917
                  },
                  "start": 868,
                  "end": 917
                },
                "start": 866,
                "end": 917
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
                    "start": 936,
                    "end": 938
                  },
                  "start": 929,
                  "end": 939
                }
              ],
              "start": 919,
              "end": 945
            },
            "expression": false,
            "start": 849,
            "end": 945
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 955,
                  "end": 957
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 964
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 965,
                      "end": 966
                    }
                  ],
                  "optional": false,
                  "start": 960,
                  "end": 967
                },
                "definite": false,
                "start": 955,
                "end": 967
              }
            ],
            "declare": false,
            "start": 951,
            "end": 968
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
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 986,
                  "end": 988
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 995
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 996,
                      "end": 997
                    }
                  ],
                  "optional": false,
                  "start": 991,
                  "end": 998
                },
                "definite": false,
                "start": 986,
                "end": 998
              }
            ],
            "declare": false,
            "start": 982,
            "end": 999
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1065,
              "end": 1069
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
                    "start": 1070,
                    "end": 1071
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1070,
                  "end": 1071
                }
              ],
              "start": 1069,
              "end": 1072
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
                      "start": 1075,
                      "end": 1076
                    },
                    "typeArguments": null,
                    "start": 1075,
                    "end": 1076
                  },
                  "start": 1074,
                  "end": 1076
                },
                "start": 1073,
                "end": 1076
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
                                  "start": 1091,
                                  "end": 1092
                                },
                                "typeArguments": null,
                                "start": 1091,
                                "end": 1092
                              },
                              "start": 1089,
                              "end": 1092
                            },
                            "start": 1088,
                            "end": 1092
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1095,
                            "end": 1101
                          },
                          "start": 1093,
                          "end": 1101
                        },
                        "start": 1084,
                        "end": 1102
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
                                  "start": 1110,
                                  "end": 1111
                                },
                                "typeArguments": null,
                                "start": 1110,
                                "end": 1111
                              },
                              "start": 1108,
                              "end": 1111
                            },
                            "start": 1107,
                            "end": 1111
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
                                  "start": 1117,
                                  "end": 1118
                                },
                                "typeArguments": null,
                                "start": 1117,
                                "end": 1118
                              },
                              "start": 1115,
                              "end": 1118
                            },
                            "start": 1113,
                            "end": 1118
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1121,
                            "end": 1127
                          },
                          "start": 1119,
                          "end": 1127
                        },
                        "start": 1103,
                        "end": 1127
                      }
                    ],
                    "start": 1082,
                    "end": 1129
                  },
                  "start": 1080,
                  "end": 1129
                },
                "start": 1078,
                "end": 1129
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
                    "start": 1148,
                    "end": 1150
                  },
                  "start": 1141,
                  "end": 1151
                }
              ],
              "start": 1131,
              "end": 1157
            },
            "expression": false,
            "start": 1056,
            "end": 1157
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
                  "start": 1167,
                  "end": 1170
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1173,
                    "end": 1177
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1178,
                      "end": 1179
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1181,
                      "end": 1182
                    }
                  ],
                  "optional": false,
                  "start": 1173,
                  "end": 1183
                },
                "definite": false,
                "start": 1167,
                "end": 1183
              }
            ],
            "declare": false,
            "start": 1163,
            "end": 1184
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
                                  "start": 1254,
                                  "end": 1255
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1254,
                                "end": 1255
                              }
                            ],
                            "start": 1253,
                            "end": 1256
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
                                    "start": 1260,
                                    "end": 1261
                                  },
                                  "typeArguments": null,
                                  "start": 1260,
                                  "end": 1261
                                },
                                "start": 1258,
                                "end": 1261
                              },
                              "start": 1257,
                              "end": 1261
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1264,
                              "end": 1270
                            },
                            "start": 1262,
                            "end": 1270
                          },
                          "start": 1249,
                          "end": 1271
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "name": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1273,
                                  "end": 1274
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1273,
                                "end": 1274
                              }
                            ],
                            "start": 1272,
                            "end": 1275
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
                                  "start": 1279,
                                  "end": 1285
                                },
                                "start": 1277,
                                "end": 1285
                              },
                              "start": 1276,
                              "end": 1285
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
                                "start": 1288,
                                "end": 1289
                              },
                              "typeArguments": null,
                              "start": 1288,
                              "end": 1289
                            },
                            "start": 1286,
                            "end": 1289
                          },
                          "start": 1272,
                          "end": 1290
                        }
                      ],
                      "start": 1247,
                      "end": 1292
                    },
                    "start": 1245,
                    "end": 1292
                  },
                  "start": 1244,
                  "end": 1292
                },
                "init": null,
                "definite": false,
                "start": 1244,
                "end": 1292
              }
            ],
            "declare": false,
            "start": 1240,
            "end": 1292
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
                  "name": "c2",
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
                                  "start": 1312,
                                  "end": 1313
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1312,
                                "end": 1313
                              }
                            ],
                            "start": 1311,
                            "end": 1314
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
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1322,
                              "end": 1328
                            },
                            "start": 1320,
                            "end": 1328
                          },
                          "start": 1307,
                          "end": 1329
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
                                  "start": 1334,
                                  "end": 1335
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1334,
                                "end": 1335
                              }
                            ],
                            "start": 1333,
                            "end": 1336
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
                                  "start": 1340,
                                  "end": 1346
                                },
                                "start": 1338,
                                "end": 1346
                              },
                              "start": 1337,
                              "end": 1346
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
                                "start": 1349,
                                "end": 1350
                              },
                              "typeArguments": null,
                              "start": 1349,
                              "end": 1350
                            },
                            "start": 1347,
                            "end": 1350
                          },
                          "start": 1330,
                          "end": 1351
                        }
                      ],
                      "start": 1305,
                      "end": 1353
                    },
                    "start": 1303,
                    "end": 1353
                  },
                  "start": 1301,
                  "end": 1353
                },
                "init": null,
                "definite": false,
                "start": 1301,
                "end": 1353
              }
            ],
            "declare": false,
            "start": 1297,
            "end": 1353
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
                  "start": 1362,
                  "end": 1365
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1368,
                    "end": 1372
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1373,
                      "end": 1374
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1376,
                      "end": 1377
                    }
                  ],
                  "optional": false,
                  "start": 1368,
                  "end": 1378
                },
                "definite": false,
                "start": 1362,
                "end": 1378
              }
            ],
            "declare": false,
            "start": 1358,
            "end": 1379
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
                  "name": "r15",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1442
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1445,
                    "end": 1449
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1450,
                      "end": 1451
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1453,
                      "end": 1455
                    }
                  ],
                  "optional": false,
                  "start": 1445,
                  "end": 1456
                },
                "definite": false,
                "start": 1439,
                "end": 1456
              }
            ],
            "declare": false,
            "start": 1435,
            "end": 1457
          }
        ],
        "start": 474,
        "end": 1510
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 450,
      "end": 1510
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 1510
}
```
