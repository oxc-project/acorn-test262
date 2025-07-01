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
        "name": "onlyT",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 317
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 336
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
                    "start": 337,
                    "end": 338
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 337,
                  "end": 338
                }
              ],
              "start": 336,
              "end": 339
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                              "start": 347,
                              "end": 348
                            },
                            "typeArguments": null,
                            "start": 347,
                            "end": 348
                          },
                          "start": 345,
                          "end": 348
                        },
                        "start": 344,
                        "end": 348
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
                          "start": 353,
                          "end": 354
                        },
                        "typeArguments": null,
                        "start": 353,
                        "end": 354
                      },
                      "start": 350,
                      "end": 354
                    },
                    "start": 343,
                    "end": 354
                  },
                  "start": 341,
                  "end": 354
                },
                "start": 340,
                "end": 354
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                              "start": 363,
                              "end": 364
                            },
                            "typeArguments": null,
                            "start": 363,
                            "end": 364
                          },
                          "start": 361,
                          "end": 364
                        },
                        "start": 360,
                        "end": 364
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
                          "start": 369,
                          "end": 370
                        },
                        "typeArguments": null,
                        "start": 369,
                        "end": 370
                      },
                      "start": 366,
                      "end": 370
                    },
                    "start": 359,
                    "end": 370
                  },
                  "start": 357,
                  "end": 370
                },
                "start": 356,
                "end": 370
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r",
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
                                      "start": 393,
                                      "end": 394
                                    },
                                    "typeArguments": null,
                                    "start": 393,
                                    "end": 394
                                  },
                                  "start": 391,
                                  "end": 394
                                },
                                "start": 390,
                                "end": 394
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
                                  "start": 399,
                                  "end": 400
                                },
                                "typeArguments": null,
                                "start": 399,
                                "end": 400
                              },
                              "start": 396,
                              "end": 400
                            },
                            "start": 389,
                            "end": 400
                          },
                          "start": 387,
                          "end": 400
                        },
                        "start": 386,
                        "end": 400
                      },
                      "init": null,
                      "definite": false,
                      "start": 386,
                      "end": 400
                    }
                  ],
                  "declare": false,
                  "start": 382,
                  "end": 401
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "start": 410,
                  "end": 419
                }
              ],
              "start": 372,
              "end": 425
            },
            "expression": false,
            "start": 324,
            "end": 425
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
                  "name": "r1",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 443,
                              "end": 445
                            },
                            "start": 441,
                            "end": 445
                          },
                          "start": 440,
                          "end": 445
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 450,
                          "end": 452
                        },
                        "start": 447,
                        "end": 452
                      },
                      "start": 439,
                      "end": 452
                    },
                    "start": 437,
                    "end": 452
                  },
                  "start": 435,
                  "end": 452
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 455,
                    "end": 458
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 463,
                              "end": 469
                            },
                            "start": 461,
                            "end": 469
                          },
                          "start": 460,
                          "end": 469
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 474,
                        "end": 475
                      },
                      "id": null,
                      "generator": false,
                      "start": 459,
                      "end": 475
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 481,
                              "end": 487
                            },
                            "start": 479,
                            "end": 487
                          },
                          "start": 478,
                          "end": 487
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 492,
                        "end": 494
                      },
                      "id": null,
                      "generator": false,
                      "start": 477,
                      "end": 494
                    }
                  ],
                  "optional": false,
                  "start": 455,
                  "end": 495
                },
                "definite": false,
                "start": 435,
                "end": 495
              }
            ],
            "declare": false,
            "start": 431,
            "end": 496
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 517
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
                    "start": 518,
                    "end": 519
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 528,
                      "end": 532
                    },
                    "typeArguments": null,
                    "start": 528,
                    "end": 532
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 518,
                  "end": 532
                }
              ],
              "start": 517,
              "end": 533
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
                      "start": 537,
                      "end": 538
                    },
                    "typeArguments": null,
                    "start": 537,
                    "end": 538
                  },
                  "start": 535,
                  "end": 538
                },
                "start": 534,
                "end": 538
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 554,
                        "end": 556
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 559,
                          "end": 562
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 567,
                                      "end": 568
                                    },
                                    "typeArguments": null,
                                    "start": 567,
                                    "end": 568
                                  },
                                  "start": 565,
                                  "end": 568
                                },
                                "start": 564,
                                "end": 568
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 573,
                              "end": 574
                            },
                            "id": null,
                            "generator": false,
                            "start": 563,
                            "end": 574
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
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
                                      "start": 580,
                                      "end": 581
                                    },
                                    "typeArguments": null,
                                    "start": 580,
                                    "end": 581
                                  },
                                  "start": 578,
                                  "end": 581
                                },
                                "start": 577,
                                "end": 581
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 587
                            },
                            "id": null,
                            "generator": false,
                            "start": 576,
                            "end": 587
                          }
                        ],
                        "optional": false,
                        "start": 559,
                        "end": 588
                      },
                      "definite": false,
                      "start": 554,
                      "end": 588
                    }
                  ],
                  "declare": false,
                  "start": 550,
                  "end": 589
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
                        "start": 634,
                        "end": 636
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 639,
                          "end": 641
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 646,
                              "end": 650
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 642,
                            "end": 652
                          }
                        ],
                        "optional": false,
                        "start": 639,
                        "end": 653
                      },
                      "definite": false,
                      "start": 634,
                      "end": 653
                    }
                  ],
                  "declare": false,
                  "start": 630,
                  "end": 654
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
                        "start": 683,
                        "end": 686
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 689,
                          "end": 691
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 692,
                            "end": 693
                          }
                        ],
                        "optional": false,
                        "start": 689,
                        "end": 694
                      },
                      "definite": false,
                      "start": 683,
                      "end": 694
                    }
                  ],
                  "declare": false,
                  "start": 679,
                  "end": 695
                }
              ],
              "start": 540,
              "end": 710
            },
            "expression": false,
            "start": 502,
            "end": 710
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 729
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
                    "start": 730,
                    "end": 731
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 744
                    },
                    "typeArguments": null,
                    "start": 740,
                    "end": 744
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 730,
                  "end": 744
                }
              ],
              "start": 729,
              "end": 745
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                        "start": 750,
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
                    "start": 749,
                    "end": 760
                  },
                  "start": 747,
                  "end": 760
                },
                "start": 746,
                "end": 760
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                              "start": 769,
                              "end": 770
                            },
                            "typeArguments": null,
                            "start": 769,
                            "end": 770
                          },
                          "start": 767,
                          "end": 770
                        },
                        "start": 766,
                        "end": 770
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
                          "start": 775,
                          "end": 776
                        },
                        "typeArguments": null,
                        "start": 775,
                        "end": 776
                      },
                      "start": 772,
                      "end": 776
                    },
                    "start": 765,
                    "end": 776
                  },
                  "start": 763,
                  "end": 776
                },
                "start": 762,
                "end": 776
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r",
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
                                      "start": 799,
                                      "end": 800
                                    },
                                    "typeArguments": null,
                                    "start": 799,
                                    "end": 800
                                  },
                                  "start": 797,
                                  "end": 800
                                },
                                "start": 796,
                                "end": 800
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
                                  "start": 805,
                                  "end": 806
                                },
                                "typeArguments": null,
                                "start": 805,
                                "end": 806
                              },
                              "start": 802,
                              "end": 806
                            },
                            "start": 795,
                            "end": 806
                          },
                          "start": 793,
                          "end": 806
                        },
                        "start": 792,
                        "end": 806
                      },
                      "init": null,
                      "definite": false,
                      "start": 792,
                      "end": 806
                    }
                  ],
                  "declare": false,
                  "start": 788,
                  "end": 807
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 823,
                    "end": 824
                  },
                  "start": 816,
                  "end": 825
                }
              ],
              "start": 778,
              "end": 831
            },
            "expression": false,
            "start": 716,
            "end": 831
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null,
              "start": 846,
              "end": 852
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
                    "start": 853,
                    "end": 854
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 869
                    },
                    "typeArguments": null,
                    "start": 863,
                    "end": 869
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 853,
                  "end": 869
                }
              ],
              "start": 852,
              "end": 870
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
                      "start": 874,
                      "end": 875
                    },
                    "typeArguments": null,
                    "start": 874,
                    "end": 875
                  },
                  "start": 872,
                  "end": 875
                },
                "start": 871,
                "end": 875
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 891,
                        "end": 893
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 896,
                          "end": 900
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                "start": 902,
                                "end": 906
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 911,
                              "end": 912
                            },
                            "id": null,
                            "generator": false,
                            "start": 901,
                            "end": 912
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
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
                                "start": 915,
                                "end": 919
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 924,
                              "end": 925
                            },
                            "id": null,
                            "generator": false,
                            "start": 914,
                            "end": 925
                          }
                        ],
                        "optional": false,
                        "start": 896,
                        "end": 926
                      },
                      "definite": false,
                      "start": 891,
                      "end": 926
                    }
                  ],
                  "declare": false,
                  "start": 887,
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
                        "name": "r7b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 949,
                        "end": 952
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 955,
                          "end": 959
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 961,
                                "end": 962
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 967,
                              "end": 968
                            },
                            "id": null,
                            "generator": false,
                            "start": 960,
                            "end": 968
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 971,
                                "end": 972
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 977,
                              "end": 978
                            },
                            "id": null,
                            "generator": false,
                            "start": 970,
                            "end": 978
                          }
                        ],
                        "optional": false,
                        "start": 955,
                        "end": 979
                      },
                      "definite": false,
                      "start": 949,
                      "end": 979
                    }
                  ],
                  "declare": false,
                  "start": 945,
                  "end": 980
                }
              ],
              "start": 877,
              "end": 1021
            },
            "expression": false,
            "start": 837,
            "end": 1021
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1032,
              "end": 1033
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1036,
                    "end": 1037
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1036,
                  "end": 1037
                }
              ],
              "start": 1034,
              "end": 1039
            },
            "const": false,
            "declare": false,
            "start": 1027,
            "end": 1039
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1049,
              "end": 1050
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1053,
                    "end": 1054
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1053,
                  "end": 1054
                }
              ],
              "start": 1051,
              "end": 1056
            },
            "const": false,
            "declare": false,
            "start": 1044,
            "end": 1056
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
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
                      "start": 1082,
                      "end": 1083
                    },
                    "typeArguments": null,
                    "start": 1082,
                    "end": 1083
                  },
                  "start": 1080,
                  "end": 1083
                },
                "start": 1079,
                "end": 1083
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                              "start": 1092,
                              "end": 1093
                            },
                            "typeArguments": null,
                            "start": 1092,
                            "end": 1093
                          },
                          "start": 1090,
                          "end": 1093
                        },
                        "start": 1089,
                        "end": 1093
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
                          "start": 1098,
                          "end": 1099
                        },
                        "typeArguments": null,
                        "start": 1098,
                        "end": 1099
                      },
                      "start": 1095,
                      "end": 1099
                    },
                    "start": 1088,
                    "end": 1099
                  },
                  "start": 1086,
                  "end": 1099
                },
                "start": 1085,
                "end": 1099
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                              "start": 1108,
                              "end": 1109
                            },
                            "typeArguments": null,
                            "start": 1108,
                            "end": 1109
                          },
                          "start": 1106,
                          "end": 1109
                        },
                        "start": 1105,
                        "end": 1109
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
                          "start": 1114,
                          "end": 1115
                        },
                        "typeArguments": null,
                        "start": 1114,
                        "end": 1115
                      },
                      "start": 1111,
                      "end": 1115
                    },
                    "start": 1104,
                    "end": 1115
                  },
                  "start": 1102,
                  "end": 1115
                },
                "start": 1101,
                "end": 1115
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r",
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
                                      "start": 1138,
                                      "end": 1139
                                    },
                                    "typeArguments": null,
                                    "start": 1138,
                                    "end": 1139
                                  },
                                  "start": 1136,
                                  "end": 1139
                                },
                                "start": 1135,
                                "end": 1139
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
                                  "start": 1144,
                                  "end": 1145
                                },
                                "typeArguments": null,
                                "start": 1144,
                                "end": 1145
                              },
                              "start": 1141,
                              "end": 1145
                            },
                            "start": 1134,
                            "end": 1145
                          },
                          "start": 1132,
                          "end": 1145
                        },
                        "start": 1131,
                        "end": 1145
                      },
                      "init": null,
                      "definite": false,
                      "start": 1131,
                      "end": 1145
                    }
                  ],
                  "declare": false,
                  "start": 1127,
                  "end": 1146
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1163
                  },
                  "start": 1155,
                  "end": 1164
                }
              ],
              "start": 1117,
              "end": 1170
            },
            "expression": false,
            "start": 1062,
            "end": 1170
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
                  "start": 1180,
                  "end": 1182
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1189
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1190,
                        "end": 1191
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1192,
                        "end": 1193
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1190,
                      "end": 1193
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1196,
                          "end": 1197
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1202,
                          "end": 1203
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1204,
                          "end": 1205
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1202,
                        "end": 1205
                      },
                      "id": null,
                      "generator": false,
                      "start": 1195,
                      "end": 1205
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1208,
                          "end": 1209
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1214,
                          "end": 1215
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1216,
                          "end": 1217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1214,
                        "end": 1217
                      },
                      "id": null,
                      "generator": false,
                      "start": 1207,
                      "end": 1217
                    }
                  ],
                  "optional": false,
                  "start": 1185,
                  "end": 1218
                },
                "definite": false,
                "start": 1180,
                "end": 1218
              }
            ],
            "declare": false,
            "start": 1176,
            "end": 1219
          }
        ],
        "start": 318,
        "end": 1230
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 305,
      "end": 1230
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU",
        "optional": false,
        "typeAnnotation": null,
        "start": 1239,
        "end": 1241
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1257,
              "end": 1260
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
                    "start": 1261,
                    "end": 1262
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1261,
                  "end": 1262
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1264,
                    "end": 1265
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1264,
                  "end": 1265
                }
              ],
              "start": 1260,
              "end": 1266
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                              "start": 1274,
                              "end": 1275
                            },
                            "typeArguments": null,
                            "start": 1274,
                            "end": 1275
                          },
                          "start": 1272,
                          "end": 1275
                        },
                        "start": 1271,
                        "end": 1275
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
                          "start": 1280,
                          "end": 1281
                        },
                        "typeArguments": null,
                        "start": 1280,
                        "end": 1281
                      },
                      "start": 1277,
                      "end": 1281
                    },
                    "start": 1270,
                    "end": 1281
                  },
                  "start": 1268,
                  "end": 1281
                },
                "start": 1267,
                "end": 1281
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1290,
                              "end": 1291
                            },
                            "typeArguments": null,
                            "start": 1290,
                            "end": 1291
                          },
                          "start": 1288,
                          "end": 1291
                        },
                        "start": 1287,
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
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1296,
                          "end": 1297
                        },
                        "typeArguments": null,
                        "start": 1296,
                        "end": 1297
                      },
                      "start": 1293,
                      "end": 1297
                    },
                    "start": 1286,
                    "end": 1297
                  },
                  "start": 1284,
                  "end": 1297
                },
                "start": 1283,
                "end": 1297
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r",
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
                                      "start": 1320,
                                      "end": 1321
                                    },
                                    "typeArguments": null,
                                    "start": 1320,
                                    "end": 1321
                                  },
                                  "start": 1318,
                                  "end": 1321
                                },
                                "start": 1317,
                                "end": 1321
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
                                  "start": 1326,
                                  "end": 1327
                                },
                                "typeArguments": null,
                                "start": 1326,
                                "end": 1327
                              },
                              "start": 1323,
                              "end": 1327
                            },
                            "start": 1316,
                            "end": 1327
                          },
                          "start": 1314,
                          "end": 1327
                        },
                        "start": 1313,
                        "end": 1327
                      },
                      "init": null,
                      "definite": false,
                      "start": 1313,
                      "end": 1327
                    }
                  ],
                  "declare": false,
                  "start": 1309,
                  "end": 1328
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1344,
                    "end": 1345
                  },
                  "start": 1337,
                  "end": 1346
                }
              ],
              "start": 1299,
              "end": 1352
            },
            "expression": false,
            "start": 1248,
            "end": 1352
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
                  "name": "r1",
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 1370,
                              "end": 1372
                            },
                            "start": 1368,
                            "end": 1372
                          },
                          "start": 1367,
                          "end": 1372
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1377,
                          "end": 1379
                        },
                        "start": 1374,
                        "end": 1379
                      },
                      "start": 1366,
                      "end": 1379
                    },
                    "start": 1364,
                    "end": 1379
                  },
                  "start": 1362,
                  "end": 1379
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1382,
                    "end": 1385
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 1390,
                              "end": 1396
                            },
                            "start": 1388,
                            "end": 1396
                          },
                          "start": 1387,
                          "end": 1396
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1401,
                        "end": 1402
                      },
                      "id": null,
                      "generator": false,
                      "start": 1386,
                      "end": 1402
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 1408,
                              "end": 1414
                            },
                            "start": 1406,
                            "end": 1414
                          },
                          "start": 1405,
                          "end": 1414
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1419,
                        "end": 1421
                      },
                      "id": null,
                      "generator": false,
                      "start": 1404,
                      "end": 1421
                    }
                  ],
                  "optional": false,
                  "start": 1382,
                  "end": 1422
                },
                "definite": false,
                "start": 1362,
                "end": 1422
              }
            ],
            "declare": false,
            "start": 1358,
            "end": 1423
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1438,
              "end": 1444
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
                    "start": 1445,
                    "end": 1446
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1455,
                      "end": 1459
                    },
                    "typeArguments": null,
                    "start": 1455,
                    "end": 1459
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1445,
                  "end": 1459
                }
              ],
              "start": 1444,
              "end": 1460
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
                      "start": 1464,
                      "end": 1465
                    },
                    "typeArguments": null,
                    "start": 1464,
                    "end": 1465
                  },
                  "start": 1462,
                  "end": 1465
                },
                "start": 1461,
                "end": 1465
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1481,
                        "end": 1483
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1486,
                          "end": 1489
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 1494,
                                      "end": 1495
                                    },
                                    "typeArguments": null,
                                    "start": 1494,
                                    "end": 1495
                                  },
                                  "start": 1492,
                                  "end": 1495
                                },
                                "start": 1491,
                                "end": 1495
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1500,
                              "end": 1501
                            },
                            "id": null,
                            "generator": false,
                            "start": 1490,
                            "end": 1501
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
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
                                      "start": 1507,
                                      "end": 1508
                                    },
                                    "typeArguments": null,
                                    "start": 1507,
                                    "end": 1508
                                  },
                                  "start": 1505,
                                  "end": 1508
                                },
                                "start": 1504,
                                "end": 1508
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1513,
                              "end": 1514
                            },
                            "id": null,
                            "generator": false,
                            "start": 1503,
                            "end": 1514
                          }
                        ],
                        "optional": false,
                        "start": 1486,
                        "end": 1515
                      },
                      "definite": false,
                      "start": 1481,
                      "end": 1515
                    }
                  ],
                  "declare": false,
                  "start": 1477,
                  "end": 1516
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
                        "start": 1530,
                        "end": 1532
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1535,
                          "end": 1537
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1542,
                              "end": 1546
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1538,
                            "end": 1548
                          }
                        ],
                        "optional": false,
                        "start": 1535,
                        "end": 1549
                      },
                      "definite": false,
                      "start": 1530,
                      "end": 1549
                    }
                  ],
                  "declare": false,
                  "start": 1526,
                  "end": 1550
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
                        "start": 1564,
                        "end": 1567
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1570,
                          "end": 1572
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1573,
                            "end": 1574
                          }
                        ],
                        "optional": false,
                        "start": 1570,
                        "end": 1575
                      },
                      "definite": false,
                      "start": 1564,
                      "end": 1575
                    }
                  ],
                  "declare": false,
                  "start": 1560,
                  "end": 1576
                }
              ],
              "start": 1467,
              "end": 1583
            },
            "expression": false,
            "start": 1429,
            "end": 1583
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1598,
              "end": 1602
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
                    "start": 1603,
                    "end": 1604
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1613,
                      "end": 1617
                    },
                    "typeArguments": null,
                    "start": 1613,
                    "end": 1617
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1603,
                  "end": 1617
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1619,
                    "end": 1620
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1629,
                      "end": 1633
                    },
                    "typeArguments": null,
                    "start": 1629,
                    "end": 1633
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1619,
                  "end": 1633
                }
              ],
              "start": 1602,
              "end": 1634
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                              "start": 1642,
                              "end": 1643
                            },
                            "typeArguments": null,
                            "start": 1642,
                            "end": 1643
                          },
                          "start": 1640,
                          "end": 1643
                        },
                        "start": 1639,
                        "end": 1643
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
                          "start": 1648,
                          "end": 1649
                        },
                        "typeArguments": null,
                        "start": 1648,
                        "end": 1649
                      },
                      "start": 1645,
                      "end": 1649
                    },
                    "start": 1638,
                    "end": 1649
                  },
                  "start": 1636,
                  "end": 1649
                },
                "start": 1635,
                "end": 1649
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1658,
                              "end": 1659
                            },
                            "typeArguments": null,
                            "start": 1658,
                            "end": 1659
                          },
                          "start": 1656,
                          "end": 1659
                        },
                        "start": 1655,
                        "end": 1659
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
                          "start": 1664,
                          "end": 1665
                        },
                        "typeArguments": null,
                        "start": 1664,
                        "end": 1665
                      },
                      "start": 1661,
                      "end": 1665
                    },
                    "start": 1654,
                    "end": 1665
                  },
                  "start": 1652,
                  "end": 1665
                },
                "start": 1651,
                "end": 1665
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r",
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
                                      "start": 1688,
                                      "end": 1689
                                    },
                                    "typeArguments": null,
                                    "start": 1688,
                                    "end": 1689
                                  },
                                  "start": 1686,
                                  "end": 1689
                                },
                                "start": 1685,
                                "end": 1689
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
                                  "start": 1694,
                                  "end": 1695
                                },
                                "typeArguments": null,
                                "start": 1694,
                                "end": 1695
                              },
                              "start": 1691,
                              "end": 1695
                            },
                            "start": 1684,
                            "end": 1695
                          },
                          "start": 1682,
                          "end": 1695
                        },
                        "start": 1681,
                        "end": 1695
                      },
                      "init": null,
                      "definite": false,
                      "start": 1681,
                      "end": 1695
                    }
                  ],
                  "declare": false,
                  "start": 1677,
                  "end": 1696
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1712,
                    "end": 1713
                  },
                  "start": 1705,
                  "end": 1714
                }
              ],
              "start": 1667,
              "end": 1720
            },
            "expression": false,
            "start": 1589,
            "end": 1720
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1735,
              "end": 1741
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
                    "start": 1742,
                    "end": 1743
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1752,
                      "end": 1758
                    },
                    "typeArguments": null,
                    "start": 1752,
                    "end": 1758
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1742,
                  "end": 1758
                }
              ],
              "start": 1741,
              "end": 1759
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
                      "start": 1763,
                      "end": 1764
                    },
                    "typeArguments": null,
                    "start": 1763,
                    "end": 1764
                  },
                  "start": 1761,
                  "end": 1764
                },
                "start": 1760,
                "end": 1764
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1780,
                        "end": 1782
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1785,
                          "end": 1789
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
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
                                      "start": 1794,
                                      "end": 1795
                                    },
                                    "typeArguments": null,
                                    "start": 1794,
                                    "end": 1795
                                  },
                                  "start": 1792,
                                  "end": 1795
                                },
                                "start": 1791,
                                "end": 1795
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1800,
                              "end": 1801
                            },
                            "id": null,
                            "generator": false,
                            "start": 1790,
                            "end": 1801
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
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
                                      "start": 1807,
                                      "end": 1808
                                    },
                                    "typeArguments": null,
                                    "start": 1807,
                                    "end": 1808
                                  },
                                  "start": 1805,
                                  "end": 1808
                                },
                                "start": 1804,
                                "end": 1808
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1813,
                              "end": 1814
                            },
                            "id": null,
                            "generator": false,
                            "start": 1803,
                            "end": 1814
                          }
                        ],
                        "optional": false,
                        "start": 1785,
                        "end": 1815
                      },
                      "definite": false,
                      "start": 1780,
                      "end": 1815
                    }
                  ],
                  "declare": false,
                  "start": 1776,
                  "end": 1816
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
                        "name": "r7b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1830,
                        "end": 1833
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1836,
                          "end": 1840
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1842,
                                "end": 1843
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1848,
                              "end": 1849
                            },
                            "id": null,
                            "generator": false,
                            "start": 1841,
                            "end": 1849
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1852,
                                "end": 1853
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1858,
                              "end": 1859
                            },
                            "id": null,
                            "generator": false,
                            "start": 1851,
                            "end": 1859
                          }
                        ],
                        "optional": false,
                        "start": 1836,
                        "end": 1860
                      },
                      "definite": false,
                      "start": 1830,
                      "end": 1860
                    }
                  ],
                  "declare": false,
                  "start": 1826,
                  "end": 1861
                }
              ],
              "start": 1766,
              "end": 1868
            },
            "expression": false,
            "start": 1726,
            "end": 1868
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1879,
              "end": 1880
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1883,
                    "end": 1884
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1883,
                  "end": 1884
                }
              ],
              "start": 1881,
              "end": 1886
            },
            "const": false,
            "declare": false,
            "start": 1874,
            "end": 1886
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1896,
              "end": 1897
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1900,
                    "end": 1901
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1900,
                  "end": 1901
                }
              ],
              "start": 1898,
              "end": 1903
            },
            "const": false,
            "declare": false,
            "start": 1891,
            "end": 1903
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1918,
              "end": 1922
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
                    "start": 1923,
                    "end": 1924
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1923,
                  "end": 1924
                }
              ],
              "start": 1922,
              "end": 1925
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
                      "start": 1929,
                      "end": 1930
                    },
                    "typeArguments": null,
                    "start": 1929,
                    "end": 1930
                  },
                  "start": 1927,
                  "end": 1930
                },
                "start": 1926,
                "end": 1930
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
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
                              "start": 1939,
                              "end": 1940
                            },
                            "typeArguments": null,
                            "start": 1939,
                            "end": 1940
                          },
                          "start": 1937,
                          "end": 1940
                        },
                        "start": 1936,
                        "end": 1940
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
                          "start": 1945,
                          "end": 1946
                        },
                        "typeArguments": null,
                        "start": 1945,
                        "end": 1946
                      },
                      "start": 1942,
                      "end": 1946
                    },
                    "start": 1935,
                    "end": 1946
                  },
                  "start": 1933,
                  "end": 1946
                },
                "start": 1932,
                "end": 1946
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1955,
                              "end": 1956
                            },
                            "typeArguments": null,
                            "start": 1955,
                            "end": 1956
                          },
                          "start": 1953,
                          "end": 1956
                        },
                        "start": 1952,
                        "end": 1956
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
                          "start": 1961,
                          "end": 1962
                        },
                        "typeArguments": null,
                        "start": 1961,
                        "end": 1962
                      },
                      "start": 1958,
                      "end": 1962
                    },
                    "start": 1951,
                    "end": 1962
                  },
                  "start": 1949,
                  "end": 1962
                },
                "start": 1948,
                "end": 1962
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "r",
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
                                      "start": 1985,
                                      "end": 1986
                                    },
                                    "typeArguments": null,
                                    "start": 1985,
                                    "end": 1986
                                  },
                                  "start": 1983,
                                  "end": 1986
                                },
                                "start": 1982,
                                "end": 1986
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
                                  "start": 1991,
                                  "end": 1992
                                },
                                "typeArguments": null,
                                "start": 1991,
                                "end": 1992
                              },
                              "start": 1988,
                              "end": 1992
                            },
                            "start": 1981,
                            "end": 1992
                          },
                          "start": 1979,
                          "end": 1992
                        },
                        "start": 1978,
                        "end": 1992
                      },
                      "init": null,
                      "definite": false,
                      "start": 1978,
                      "end": 1992
                    }
                  ],
                  "declare": false,
                  "start": 1974,
                  "end": 1993
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2009,
                    "end": 2010
                  },
                  "start": 2002,
                  "end": 2011
                }
              ],
              "start": 1964,
              "end": 2017
            },
            "expression": false,
            "start": 1909,
            "end": 2017
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
                  "start": 2027,
                  "end": 2029
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2032,
                    "end": 2036
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2037,
                        "end": 2038
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2039,
                        "end": 2040
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2037,
                      "end": 2040
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2043,
                          "end": 2044
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2049,
                          "end": 2050
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2051,
                          "end": 2052
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2049,
                        "end": 2052
                      },
                      "id": null,
                      "generator": false,
                      "start": 2042,
                      "end": 2052
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2055,
                          "end": 2056
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2061,
                          "end": 2062
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2063,
                          "end": 2064
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2061,
                        "end": 2064
                      },
                      "id": null,
                      "generator": false,
                      "start": 2054,
                      "end": 2064
                    }
                  ],
                  "optional": false,
                  "start": 2032,
                  "end": 2065
                },
                "definite": false,
                "start": 2027,
                "end": 2065
              }
            ],
            "declare": false,
            "start": 2023,
            "end": 2066
          }
        ],
        "start": 1242,
        "end": 2068
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1232,
      "end": 2068
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 2068
}
```
