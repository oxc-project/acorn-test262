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
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 359
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 360,
                        "end": 364
                      }
                    ],
                    "start": 353,
                    "end": 365
                  },
                  "start": 346,
                  "end": 366
                }
              ],
              "start": 336,
              "end": 372
            },
            "expression": false,
            "start": 308,
            "end": 372
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
                  "start": 382,
                  "end": 383
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 386,
                    "end": 390
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 391,
                      "end": 392
                    }
                  ],
                  "optional": false,
                  "start": 386,
                  "end": 393
                },
                "definite": false,
                "start": 382,
                "end": 393
              }
            ],
            "declare": false,
            "start": 378,
            "end": 394
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
                                  "start": 413,
                                  "end": 414
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 413,
                                "end": 414
                              }
                            ],
                            "start": 412,
                            "end": 415
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
                                    "start": 419,
                                    "end": 420
                                  },
                                  "typeArguments": null,
                                  "start": 419,
                                  "end": 420
                                },
                                "start": 417,
                                "end": 420
                              },
                              "start": 416,
                              "end": 420
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
                                "start": 423,
                                "end": 424
                              },
                              "typeArguments": null,
                              "start": 423,
                              "end": 424
                            },
                            "start": 421,
                            "end": 424
                          },
                          "start": 408,
                          "end": 424
                        }
                      ],
                      "start": 406,
                      "end": 426
                    },
                    "start": 404,
                    "end": 426
                  },
                  "start": 403,
                  "end": 426
                },
                "init": null,
                "definite": false,
                "start": 403,
                "end": 426
              }
            ],
            "declare": false,
            "start": 399,
            "end": 427
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
                  "start": 436,
                  "end": 438
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 441,
                    "end": 445
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 446,
                      "end": 447
                    }
                  ],
                  "optional": false,
                  "start": 441,
                  "end": 448
                },
                "definite": false,
                "start": 436,
                "end": 448
              }
            ],
            "declare": false,
            "start": 432,
            "end": 449
          }
        ],
        "start": 216,
        "end": 451
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 186,
      "end": 451
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 463,
        "end": 479
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
              "start": 495,
              "end": 499
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
                    "start": 500,
                    "end": 501
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 500,
                  "end": 501
                }
              ],
              "start": 499,
              "end": 502
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
                                  "start": 516,
                                  "end": 517
                                },
                                "typeArguments": null,
                                "start": 516,
                                "end": 517
                              },
                              "start": 514,
                              "end": 517
                            },
                            "start": 513,
                            "end": 517
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 520,
                            "end": 526
                          },
                          "start": 518,
                          "end": 526
                        },
                        "start": 509,
                        "end": 527
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
                                "start": 535,
                                "end": 541
                              },
                              "start": 533,
                              "end": 541
                            },
                            "start": 532,
                            "end": 541
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
                              "start": 544,
                              "end": 545
                            },
                            "typeArguments": null,
                            "start": 544,
                            "end": 545
                          },
                          "start": 542,
                          "end": 545
                        },
                        "start": 528,
                        "end": 545
                      }
                    ],
                    "start": 507,
                    "end": 547
                  },
                  "start": 505,
                  "end": 547
                },
                "start": 503,
                "end": 547
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
                    "start": 566,
                    "end": 568
                  },
                  "start": 559,
                  "end": 569
                }
              ],
              "start": 549,
              "end": 575
            },
            "expression": false,
            "start": 486,
            "end": 575
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
                                  "start": 606,
                                  "end": 613
                                },
                                "start": 604,
                                "end": 613
                              },
                              "start": 603,
                              "end": 613
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 616,
                              "end": 622
                            },
                            "start": 614,
                            "end": 622
                          },
                          "start": 598,
                          "end": 623
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
                                  "start": 640,
                                  "end": 646
                                },
                                "start": 638,
                                "end": 646
                              },
                              "start": 637,
                              "end": 646
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 649,
                              "end": 656
                            },
                            "start": 647,
                            "end": 656
                          },
                          "start": 632,
                          "end": 657
                        }
                      ],
                      "start": 588,
                      "end": 663
                    },
                    "start": 586,
                    "end": 663
                  },
                  "start": 585,
                  "end": 663
                },
                "init": null,
                "definite": false,
                "start": 585,
                "end": 663
              }
            ],
            "declare": false,
            "start": 581,
            "end": 663
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
                  "start": 672,
                  "end": 674
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 677,
                    "end": 681
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 682,
                      "end": 683
                    }
                  ],
                  "optional": false,
                  "start": 677,
                  "end": 684
                },
                "definite": false,
                "start": 672,
                "end": 684
              }
            ],
            "declare": false,
            "start": 668,
            "end": 685
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
                                  "start": 743,
                                  "end": 744
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 743,
                                "end": 744
                              }
                            ],
                            "start": 742,
                            "end": 745
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
                                    "start": 749,
                                    "end": 750
                                  },
                                  "typeArguments": null,
                                  "start": 749,
                                  "end": 750
                                },
                                "start": 747,
                                "end": 750
                              },
                              "start": 746,
                              "end": 750
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 753,
                              "end": 759
                            },
                            "start": 751,
                            "end": 759
                          },
                          "start": 739,
                          "end": 760
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
                                  "start": 765,
                                  "end": 766
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 765,
                                "end": 766
                              }
                            ],
                            "start": 764,
                            "end": 767
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
                                  "start": 771,
                                  "end": 777
                                },
                                "start": 769,
                                "end": 777
                              },
                              "start": 768,
                              "end": 777
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
                                "start": 780,
                                "end": 781
                              },
                              "typeArguments": null,
                              "start": 780,
                              "end": 781
                            },
                            "start": 778,
                            "end": 781
                          },
                          "start": 761,
                          "end": 782
                        }
                      ],
                      "start": 737,
                      "end": 784
                    },
                    "start": 735,
                    "end": 784
                  },
                  "start": 734,
                  "end": 784
                },
                "init": null,
                "definite": false,
                "start": 734,
                "end": 784
              }
            ],
            "declare": false,
            "start": 730,
            "end": 784
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
                  "start": 793,
                  "end": 795
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 798,
                    "end": 802
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 803,
                      "end": 804
                    }
                  ],
                  "optional": false,
                  "start": 798,
                  "end": 805
                },
                "definite": false,
                "start": 793,
                "end": 805
              }
            ],
            "declare": false,
            "start": 789,
            "end": 806
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null,
              "start": 864,
              "end": 868
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
                    "start": 869,
                    "end": 870
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 869,
                  "end": 870
                }
              ],
              "start": 868,
              "end": 871
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
                                  "start": 885,
                                  "end": 886
                                },
                                "typeArguments": null,
                                "start": 885,
                                "end": 886
                              },
                              "start": 883,
                              "end": 886
                            },
                            "start": 882,
                            "end": 886
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 889,
                            "end": 895
                          },
                          "start": 887,
                          "end": 895
                        },
                        "start": 878,
                        "end": 896
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
                                  "start": 904,
                                  "end": 905
                                },
                                "typeArguments": null,
                                "start": 904,
                                "end": 905
                              },
                              "start": 902,
                              "end": 905
                            },
                            "start": 901,
                            "end": 905
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
                                  "start": 911,
                                  "end": 912
                                },
                                "typeArguments": null,
                                "start": 911,
                                "end": 912
                              },
                              "start": 909,
                              "end": 912
                            },
                            "start": 907,
                            "end": 912
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 915,
                            "end": 921
                          },
                          "start": 913,
                          "end": 921
                        },
                        "start": 897,
                        "end": 921
                      }
                    ],
                    "start": 876,
                    "end": 923
                  },
                  "start": 874,
                  "end": 923
                },
                "start": 872,
                "end": 923
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
                    "start": 942,
                    "end": 944
                  },
                  "start": 935,
                  "end": 945
                }
              ],
              "start": 925,
              "end": 951
            },
            "expression": false,
            "start": 855,
            "end": 951
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
                  "start": 961,
                  "end": 963
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 970
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 971,
                      "end": 972
                    }
                  ],
                  "optional": false,
                  "start": 966,
                  "end": 973
                },
                "definite": false,
                "start": 961,
                "end": 973
              }
            ],
            "declare": false,
            "start": 957,
            "end": 974
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
                  "start": 992,
                  "end": 994
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 997,
                    "end": 1001
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1002,
                      "end": 1003
                    }
                  ],
                  "optional": false,
                  "start": 997,
                  "end": 1004
                },
                "definite": false,
                "start": 992,
                "end": 1004
              }
            ],
            "declare": false,
            "start": 988,
            "end": 1005
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null,
              "start": 1071,
              "end": 1075
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
                    "start": 1076,
                    "end": 1077
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1076,
                  "end": 1077
                }
              ],
              "start": 1075,
              "end": 1078
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
                      "start": 1081,
                      "end": 1082
                    },
                    "typeArguments": null,
                    "start": 1081,
                    "end": 1082
                  },
                  "start": 1080,
                  "end": 1082
                },
                "start": 1079,
                "end": 1082
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
                                  "start": 1097,
                                  "end": 1098
                                },
                                "typeArguments": null,
                                "start": 1097,
                                "end": 1098
                              },
                              "start": 1095,
                              "end": 1098
                            },
                            "start": 1094,
                            "end": 1098
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1101,
                            "end": 1107
                          },
                          "start": 1099,
                          "end": 1107
                        },
                        "start": 1090,
                        "end": 1108
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
                                  "start": 1116,
                                  "end": 1117
                                },
                                "typeArguments": null,
                                "start": 1116,
                                "end": 1117
                              },
                              "start": 1114,
                              "end": 1117
                            },
                            "start": 1113,
                            "end": 1117
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
                                  "start": 1123,
                                  "end": 1124
                                },
                                "typeArguments": null,
                                "start": 1123,
                                "end": 1124
                              },
                              "start": 1121,
                              "end": 1124
                            },
                            "start": 1119,
                            "end": 1124
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1127,
                            "end": 1133
                          },
                          "start": 1125,
                          "end": 1133
                        },
                        "start": 1109,
                        "end": 1133
                      }
                    ],
                    "start": 1088,
                    "end": 1135
                  },
                  "start": 1086,
                  "end": 1135
                },
                "start": 1084,
                "end": 1135
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
                    "start": 1154,
                    "end": 1156
                  },
                  "start": 1147,
                  "end": 1157
                }
              ],
              "start": 1137,
              "end": 1163
            },
            "expression": false,
            "start": 1062,
            "end": 1163
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
                  "start": 1173,
                  "end": 1176
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1179,
                    "end": 1183
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1184,
                      "end": 1185
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1187,
                      "end": 1188
                    }
                  ],
                  "optional": false,
                  "start": 1179,
                  "end": 1189
                },
                "definite": false,
                "start": 1173,
                "end": 1189
              }
            ],
            "declare": false,
            "start": 1169,
            "end": 1190
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
                                  "start": 1260,
                                  "end": 1261
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1260,
                                "end": 1261
                              }
                            ],
                            "start": 1259,
                            "end": 1262
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
                                    "start": 1266,
                                    "end": 1267
                                  },
                                  "typeArguments": null,
                                  "start": 1266,
                                  "end": 1267
                                },
                                "start": 1264,
                                "end": 1267
                              },
                              "start": 1263,
                              "end": 1267
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1270,
                              "end": 1276
                            },
                            "start": 1268,
                            "end": 1276
                          },
                          "start": 1255,
                          "end": 1277
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
                                  "start": 1279,
                                  "end": 1280
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1279,
                                "end": 1280
                              }
                            ],
                            "start": 1278,
                            "end": 1281
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
                                  "start": 1285,
                                  "end": 1291
                                },
                                "start": 1283,
                                "end": 1291
                              },
                              "start": 1282,
                              "end": 1291
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
                                "start": 1294,
                                "end": 1295
                              },
                              "typeArguments": null,
                              "start": 1294,
                              "end": 1295
                            },
                            "start": 1292,
                            "end": 1295
                          },
                          "start": 1278,
                          "end": 1296
                        }
                      ],
                      "start": 1253,
                      "end": 1298
                    },
                    "start": 1251,
                    "end": 1298
                  },
                  "start": 1250,
                  "end": 1298
                },
                "init": null,
                "definite": false,
                "start": 1250,
                "end": 1298
              }
            ],
            "declare": false,
            "start": 1246,
            "end": 1298
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
                                  "start": 1318,
                                  "end": 1319
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1318,
                                "end": 1319
                              }
                            ],
                            "start": 1317,
                            "end": 1320
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
                              "type": "TSStringKeyword",
                              "start": 1328,
                              "end": 1334
                            },
                            "start": 1326,
                            "end": 1334
                          },
                          "start": 1313,
                          "end": 1335
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
                                  "start": 1340,
                                  "end": 1341
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 1340,
                                "end": 1341
                              }
                            ],
                            "start": 1339,
                            "end": 1342
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
                                  "start": 1346,
                                  "end": 1352
                                },
                                "start": 1344,
                                "end": 1352
                              },
                              "start": 1343,
                              "end": 1352
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
                                "start": 1355,
                                "end": 1356
                              },
                              "typeArguments": null,
                              "start": 1355,
                              "end": 1356
                            },
                            "start": 1353,
                            "end": 1356
                          },
                          "start": 1336,
                          "end": 1357
                        }
                      ],
                      "start": 1311,
                      "end": 1359
                    },
                    "start": 1309,
                    "end": 1359
                  },
                  "start": 1307,
                  "end": 1359
                },
                "init": null,
                "definite": false,
                "start": 1307,
                "end": 1359
              }
            ],
            "declare": false,
            "start": 1303,
            "end": 1359
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
                  "start": 1368,
                  "end": 1371
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1374,
                    "end": 1378
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1379,
                      "end": 1380
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1382,
                      "end": 1383
                    }
                  ],
                  "optional": false,
                  "start": 1374,
                  "end": 1384
                },
                "definite": false,
                "start": 1368,
                "end": 1384
              }
            ],
            "declare": false,
            "start": 1364,
            "end": 1385
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
                  "start": 1445,
                  "end": 1448
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1451,
                    "end": 1455
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1456,
                      "end": 1457
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1459,
                      "end": 1461
                    }
                  ],
                  "optional": false,
                  "start": 1451,
                  "end": 1462
                },
                "definite": false,
                "start": 1445,
                "end": 1462
              }
            ],
            "declare": false,
            "start": 1441,
            "end": 1463
          }
        ],
        "start": 480,
        "end": 1516
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 453,
      "end": 1516
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 186,
  "end": 1516
}
```
