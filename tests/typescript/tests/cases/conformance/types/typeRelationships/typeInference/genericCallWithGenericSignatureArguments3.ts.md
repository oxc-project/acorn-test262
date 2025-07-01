__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 317
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
              "start": 318,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 318,
            "end": 319
          }
        ],
        "start": 317,
        "end": 320
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
                "start": 324,
                "end": 325
              },
              "typeArguments": null,
              "start": 324,
              "end": 325
            },
            "start": 322,
            "end": 325
          },
          "start": 321,
          "end": 325
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
                        "start": 334,
                        "end": 335
                      },
                      "typeArguments": null,
                      "start": 334,
                      "end": 335
                    },
                    "start": 332,
                    "end": 335
                  },
                  "start": 331,
                  "end": 335
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
                    "start": 340,
                    "end": 341
                  },
                  "typeArguments": null,
                  "start": 340,
                  "end": 341
                },
                "start": 337,
                "end": 341
              },
              "start": 330,
              "end": 341
            },
            "start": 328,
            "end": 341
          },
          "start": 327,
          "end": 341
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
                        "start": 350,
                        "end": 351
                      },
                      "typeArguments": null,
                      "start": 350,
                      "end": 351
                    },
                    "start": 348,
                    "end": 351
                  },
                  "start": 347,
                  "end": 351
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
                    "start": 356,
                    "end": 357
                  },
                  "typeArguments": null,
                  "start": 356,
                  "end": 357
                },
                "start": 353,
                "end": 357
              },
              "start": 346,
              "end": 357
            },
            "start": 344,
            "end": 357
          },
          "start": 343,
          "end": 357
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
                                "start": 376,
                                "end": 377
                              },
                              "typeArguments": null,
                              "start": 376,
                              "end": 377
                            },
                            "start": 374,
                            "end": 377
                          },
                          "start": 373,
                          "end": 377
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
                            "start": 382,
                            "end": 383
                          },
                          "typeArguments": null,
                          "start": 382,
                          "end": 383
                        },
                        "start": 379,
                        "end": 383
                      },
                      "start": 372,
                      "end": 383
                    },
                    "start": 370,
                    "end": 383
                  },
                  "start": 369,
                  "end": 383
                },
                "init": null,
                "definite": false,
                "start": 369,
                "end": 383
              }
            ],
            "declare": false,
            "start": 365,
            "end": 384
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 396,
              "end": 397
            },
            "start": 389,
            "end": 398
          }
        ],
        "start": 359,
        "end": 400
      },
      "expression": false,
      "start": 305,
      "end": 400
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
            "typeAnnotation": null,
            "start": 406,
            "end": 408
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 414
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 415,
                "end": 417
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
                        "start": 423,
                        "end": 429
                      },
                      "start": 421,
                      "end": 429
                    },
                    "start": 420,
                    "end": 429
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 434,
                  "end": 436
                },
                "id": null,
                "generator": false,
                "start": 419,
                "end": 436
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 442,
                          "end": 448
                        },
                        "typeArguments": null,
                        "start": 442,
                        "end": 448
                      },
                      "start": 440,
                      "end": 448
                    },
                    "start": 439,
                    "end": 448
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 453,
                  "end": 457
                },
                "id": null,
                "generator": false,
                "start": 438,
                "end": 457
              }
            ],
            "optional": false,
            "start": 411,
            "end": 458
          },
          "definite": false,
          "start": 406,
          "end": 458
        }
      ],
      "declare": false,
      "start": 402,
      "end": 459
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
            "name": "r1ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 482
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 488
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 489,
                "end": 491
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
                    "start": 494,
                    "end": 495
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 500,
                  "end": 502
                },
                "id": null,
                "generator": false,
                "start": 493,
                "end": 502
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
                    "start": 505,
                    "end": 506
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 511,
                  "end": 515
                },
                "id": null,
                "generator": false,
                "start": 504,
                "end": 515
              }
            ],
            "optional": false,
            "start": 485,
            "end": 516
          },
          "definite": false,
          "start": 478,
          "end": 516
        }
      ],
      "declare": false,
      "start": 474,
      "end": 517
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
            "start": 542,
            "end": 544
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 550
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 551,
                "end": 553
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
                        "start": 559,
                        "end": 565
                      },
                      "start": 557,
                      "end": 565
                    },
                    "start": 556,
                    "end": 565
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 570,
                  "end": 572
                },
                "id": null,
                "generator": false,
                "start": 555,
                "end": 572
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 578,
                          "end": 584
                        },
                        "typeArguments": null,
                        "start": 578,
                        "end": 584
                      },
                      "start": 576,
                      "end": 584
                    },
                    "start": 575,
                    "end": 584
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 589,
                  "end": 591
                },
                "id": null,
                "generator": false,
                "start": 574,
                "end": 591
              }
            ],
            "optional": false,
            "start": 547,
            "end": 592
          },
          "definite": false,
          "start": 542,
          "end": 592
        }
      ],
      "declare": false,
      "start": 538,
      "end": 593
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
            "start": 618,
            "end": 620
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 623,
              "end": 626
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 627,
                "end": 631
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 643
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 643
                      },
                      "start": 635,
                      "end": 643
                    },
                    "start": 634,
                    "end": 643
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 648,
                  "end": 650
                },
                "id": null,
                "generator": false,
                "start": 633,
                "end": 650
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
                        "start": 656,
                        "end": 662
                      },
                      "start": 654,
                      "end": 662
                    },
                    "start": 653,
                    "end": 662
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 667,
                  "end": 669
                },
                "id": null,
                "generator": false,
                "start": 652,
                "end": 669
              }
            ],
            "optional": false,
            "start": 623,
            "end": 670
          },
          "definite": false,
          "start": 618,
          "end": 670
        }
      ],
      "declare": false,
      "start": 614,
      "end": 671
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 696,
            "end": 698
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 704
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 705,
                "end": 709
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
                    "start": 712,
                    "end": 713
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 718,
                  "end": 720
                },
                "id": null,
                "generator": false,
                "start": 711,
                "end": 720
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
                    "start": 723,
                    "end": 724
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 729,
                  "end": 731
                },
                "id": null,
                "generator": false,
                "start": 722,
                "end": 731
              }
            ],
            "optional": false,
            "start": 701,
            "end": 732
          },
          "definite": false,
          "start": 696,
          "end": 732
        }
      ],
      "declare": false,
      "start": 692,
      "end": 733
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
            "start": 752,
            "end": 754
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 757,
              "end": 760
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 765,
                  "end": 771
                },
                "typeArguments": null,
                "arguments": [],
                "start": 761,
                "end": 773
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
                    "start": 776,
                    "end": 777
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 782,
                  "end": 784
                },
                "id": null,
                "generator": false,
                "start": 775,
                "end": 784
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
                    "start": 787,
                    "end": 788
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 793,
                  "end": 795
                },
                "id": null,
                "generator": false,
                "start": 786,
                "end": 795
              }
            ],
            "optional": false,
            "start": 757,
            "end": 796
          },
          "definite": false,
          "start": 752,
          "end": 796
        }
      ],
      "declare": false,
      "start": 748,
      "end": 797
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 824,
        "end": 825
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
              "start": 828,
              "end": 829
            },
            "initializer": null,
            "computed": false,
            "start": 828,
            "end": 829
          }
        ],
        "start": 826,
        "end": 831
      },
      "const": false,
      "declare": false,
      "start": 819,
      "end": 831
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 838
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
              "start": 841,
              "end": 842
            },
            "initializer": null,
            "computed": false,
            "start": 841,
            "end": 842
          }
        ],
        "start": 839,
        "end": 844
      },
      "const": false,
      "declare": false,
      "start": 832,
      "end": 844
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
            "start": 850,
            "end": 852
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 855,
              "end": 858
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
                  "start": 859,
                  "end": 860
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 861,
                  "end": 862
                },
                "optional": false,
                "computed": false,
                "start": 859,
                "end": 862
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
                        "type": "TSNumberKeyword",
                        "start": 868,
                        "end": 874
                      },
                      "start": 866,
                      "end": 874
                    },
                    "start": 865,
                    "end": 874
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
                    "start": 879,
                    "end": 880
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 881,
                    "end": 882
                  },
                  "optional": false,
                  "computed": false,
                  "start": 879,
                  "end": 882
                },
                "id": null,
                "generator": false,
                "start": 864,
                "end": 882
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 888,
                          "end": 889
                        },
                        "typeArguments": null,
                        "start": 888,
                        "end": 889
                      },
                      "start": 886,
                      "end": 889
                    },
                    "start": 885,
                    "end": 889
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
                    "start": 894,
                    "end": 895
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 896,
                    "end": 897
                  },
                  "optional": false,
                  "computed": false,
                  "start": 894,
                  "end": 897
                },
                "id": null,
                "generator": false,
                "start": 884,
                "end": 897
              }
            ],
            "optional": false,
            "start": 855,
            "end": 898
          },
          "definite": false,
          "start": 850,
          "end": 898
        }
      ],
      "declare": false,
      "start": 846,
      "end": 899
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 932,
        "end": 936
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
              "start": 937,
              "end": 938
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 937,
            "end": 938
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 940,
              "end": 941
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 940,
            "end": 941
          }
        ],
        "start": 936,
        "end": 942
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
                "start": 946,
                "end": 947
              },
              "typeArguments": null,
              "start": 946,
              "end": 947
            },
            "start": 944,
            "end": 947
          },
          "start": 943,
          "end": 947
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
                        "start": 956,
                        "end": 957
                      },
                      "typeArguments": null,
                      "start": 956,
                      "end": 957
                    },
                    "start": 954,
                    "end": 957
                  },
                  "start": 953,
                  "end": 957
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
                    "start": 962,
                    "end": 963
                  },
                  "typeArguments": null,
                  "start": 962,
                  "end": 963
                },
                "start": 959,
                "end": 963
              },
              "start": 952,
              "end": 963
            },
            "start": 950,
            "end": 963
          },
          "start": 949,
          "end": 963
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
                        "start": 972,
                        "end": 973
                      },
                      "typeArguments": null,
                      "start": 972,
                      "end": 973
                    },
                    "start": 970,
                    "end": 973
                  },
                  "start": 969,
                  "end": 973
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
                    "start": 978,
                    "end": 979
                  },
                  "typeArguments": null,
                  "start": 978,
                  "end": 979
                },
                "start": 975,
                "end": 979
              },
              "start": 968,
              "end": 979
            },
            "start": 966,
            "end": 979
          },
          "start": 965,
          "end": 979
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
                                "start": 998,
                                "end": 999
                              },
                              "typeArguments": null,
                              "start": 998,
                              "end": 999
                            },
                            "start": 996,
                            "end": 999
                          },
                          "start": 995,
                          "end": 999
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
                            "start": 1004,
                            "end": 1005
                          },
                          "typeArguments": null,
                          "start": 1004,
                          "end": 1005
                        },
                        "start": 1001,
                        "end": 1005
                      },
                      "start": 994,
                      "end": 1005
                    },
                    "start": 992,
                    "end": 1005
                  },
                  "start": 991,
                  "end": 1005
                },
                "init": null,
                "definite": false,
                "start": 991,
                "end": 1005
              }
            ],
            "declare": false,
            "start": 987,
            "end": 1006
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 1018,
              "end": 1019
            },
            "start": 1011,
            "end": 1020
          }
        ],
        "start": 981,
        "end": 1022
      },
      "expression": false,
      "start": 923,
      "end": 1022
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
            "start": 1028,
            "end": 1030
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1033,
              "end": 1037
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1038,
                "end": 1040
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
                    "start": 1043,
                    "end": 1044
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1049,
                  "end": 1051
                },
                "id": null,
                "generator": false,
                "start": 1042,
                "end": 1051
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
                    "start": 1054,
                    "end": 1055
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1060,
                  "end": 1064
                },
                "id": null,
                "generator": false,
                "start": 1053,
                "end": 1064
              }
            ],
            "optional": false,
            "start": 1033,
            "end": 1065
          },
          "definite": false,
          "start": 1028,
          "end": 1065
        }
      ],
      "declare": false,
      "start": 1024,
      "end": 1066
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
            "start": 1091,
            "end": 1093
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1096,
              "end": 1100
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1101,
                "end": 1105
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
                    "start": 1108,
                    "end": 1109
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1114,
                  "end": 1116
                },
                "id": null,
                "generator": false,
                "start": 1107,
                "end": 1116
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
                    "start": 1119,
                    "end": 1120
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1125,
                  "end": 1127
                },
                "id": null,
                "generator": false,
                "start": 1118,
                "end": 1127
              }
            ],
            "optional": false,
            "start": 1096,
            "end": 1128
          },
          "definite": false,
          "start": 1091,
          "end": 1128
        }
      ],
      "declare": false,
      "start": 1087,
      "end": 1129
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
            "start": 1148,
            "end": 1151
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1158
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 1159,
                "end": 1163
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1169,
                          "end": 1175
                        },
                        "typeArguments": null,
                        "start": 1169,
                        "end": 1175
                      },
                      "start": 1167,
                      "end": 1175
                    },
                    "start": 1166,
                    "end": 1175
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1180,
                  "end": 1182
                },
                "id": null,
                "generator": false,
                "start": 1165,
                "end": 1182
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
                        "start": 1188,
                        "end": 1194
                      },
                      "start": 1186,
                      "end": 1194
                    },
                    "start": 1185,
                    "end": 1194
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 1199,
                  "end": 1201
                },
                "id": null,
                "generator": false,
                "start": 1184,
                "end": 1201
              }
            ],
            "optional": false,
            "start": 1154,
            "end": 1202
          },
          "definite": false,
          "start": 1148,
          "end": 1202
        }
      ],
      "declare": false,
      "start": 1144,
      "end": 1203
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
            "name": "x",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1236,
                        "end": 1242
                      },
                      "start": 1234,
                      "end": 1242
                    },
                    "start": 1233,
                    "end": 1242
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1247,
                    "end": 1254
                  },
                  "start": 1244,
                  "end": 1254
                },
                "start": 1232,
                "end": 1254
              },
              "start": 1230,
              "end": 1254
            },
            "start": 1229,
            "end": 1254
          },
          "init": null,
          "definite": false,
          "start": 1229,
          "end": 1254
        }
      ],
      "declare": false,
      "start": 1225,
      "end": 1255
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
            "name": "r11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1260,
            "end": 1263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1266,
              "end": 1270
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1271,
                "end": 1272
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
                    "name": "a1",
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1283,
                                "end": 1289
                              },
                              "start": 1281,
                              "end": 1289
                            },
                            "start": 1280,
                            "end": 1289
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1294,
                            "end": 1300
                          },
                          "start": 1291,
                          "end": 1300
                        },
                        "start": 1279,
                        "end": 1300
                      },
                      "start": 1277,
                      "end": 1300
                    },
                    "start": 1275,
                    "end": 1300
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1309,
                            "end": 1315
                          },
                          "typeArguments": null,
                          "start": 1309,
                          "end": 1315
                        },
                        "start": 1307,
                        "end": 1315
                      },
                      "start": 1306,
                      "end": 1315
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1320,
                    "end": 1321
                  },
                  "id": null,
                  "generator": false,
                  "start": 1305,
                  "end": 1321
                },
                "id": null,
                "generator": false,
                "start": 1274,
                "end": 1321
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
                    "name": "a2",
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
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1332,
                                "end": 1338
                              },
                              "start": 1330,
                              "end": 1338
                            },
                            "start": 1329,
                            "end": 1338
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1343,
                            "end": 1349
                          },
                          "start": 1340,
                          "end": 1349
                        },
                        "start": 1328,
                        "end": 1349
                      },
                      "start": 1326,
                      "end": 1349
                    },
                    "start": 1324,
                    "end": 1349
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1354,
                  "end": 1355
                },
                "id": null,
                "generator": false,
                "start": 1323,
                "end": 1355
              }
            ],
            "optional": false,
            "start": 1266,
            "end": 1356
          },
          "definite": false,
          "start": 1260,
          "end": 1356
        }
      ],
      "declare": false,
      "start": 1256,
      "end": 1357
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
            "name": "r12",
            "optional": false,
            "typeAnnotation": null,
            "start": 1371,
            "end": 1374
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1377,
              "end": 1381
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1382,
                "end": 1383
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
                    "name": "a1",
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
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1394,
                                "end": 1400
                              },
                              "start": 1392,
                              "end": 1400
                            },
                            "start": 1391,
                            "end": 1400
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1405,
                            "end": 1412
                          },
                          "start": 1402,
                          "end": 1412
                        },
                        "start": 1390,
                        "end": 1412
                      },
                      "start": 1388,
                      "end": 1412
                    },
                    "start": 1386,
                    "end": 1412
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1421,
                            "end": 1427
                          },
                          "typeArguments": null,
                          "start": 1421,
                          "end": 1427
                        },
                        "start": 1419,
                        "end": 1427
                      },
                      "start": 1418,
                      "end": 1427
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1432,
                    "end": 1433
                  },
                  "id": null,
                  "generator": false,
                  "start": 1417,
                  "end": 1433
                },
                "id": null,
                "generator": false,
                "start": 1385,
                "end": 1433
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
                    "name": "a2",
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
                            "name": "z",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1444,
                                "end": 1450
                              },
                              "start": 1442,
                              "end": 1450
                            },
                            "start": 1441,
                            "end": 1450
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 1455,
                            "end": 1462
                          },
                          "start": 1452,
                          "end": 1462
                        },
                        "start": 1440,
                        "end": 1462
                      },
                      "start": 1438,
                      "end": 1462
                    },
                    "start": 1436,
                    "end": 1462
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1467,
                  "end": 1468
                },
                "id": null,
                "generator": false,
                "start": 1435,
                "end": 1468
              }
            ],
            "optional": false,
            "start": 1377,
            "end": 1469
          },
          "definite": false,
          "start": 1371,
          "end": 1469
        }
      ],
      "declare": false,
      "start": 1367,
      "end": 1470
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 1479
}
```
