__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FuncType",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 371
      },
      "typeParameters": null,
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
                        "start": 379,
                        "end": 380
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 379,
                      "end": 380
                    }
                  ],
                  "start": 378,
                  "end": 381
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "p",
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
                          "start": 385,
                          "end": 386
                        },
                        "typeArguments": null,
                        "start": 385,
                        "end": 386
                      },
                      "start": 383,
                      "end": 386
                    },
                    "start": 382,
                    "end": 386
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
                      "start": 391,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 388,
                  "end": 392
                },
                "start": 378,
                "end": 392
              },
              "start": 376,
              "end": 392
            },
            "start": 375,
            "end": 392
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "typeArguments": null,
            "start": 397,
            "end": 405
          },
          "start": 394,
          "end": 405
        },
        "start": 374,
        "end": 405
      },
      "declare": false,
      "start": 358,
      "end": 406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 417,
        "end": 420
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
              "start": 421,
              "end": 422
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 421,
            "end": 422
          }
        ],
        "start": 420,
        "end": 423
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null,
                "start": 427,
                "end": 435
              },
              "typeArguments": null,
              "start": 427,
              "end": 435
            },
            "start": 425,
            "end": 435
          },
          "start": 424,
          "end": 435
        },
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
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "start": 440,
              "end": 441
            },
            "start": 438,
            "end": 441
          },
          "start": 437,
          "end": 441
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
            "start": 444,
            "end": 445
          },
          "typeArguments": null,
          "start": 444,
          "end": 445
        },
        "start": 442,
        "end": 445
      },
      "body": null,
      "expression": false,
      "start": 408,
      "end": 446
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 456,
        "end": 459
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
              "start": 460,
              "end": 461
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 460,
            "end": 461
          }
        ],
        "start": 459,
        "end": 462
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null,
                "start": 466,
                "end": 474
              },
              "typeArguments": null,
              "start": 466,
              "end": 474
            },
            "start": 464,
            "end": 474
          },
          "start": 463,
          "end": 474
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FuncType",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 487
              },
              "typeArguments": null,
              "start": 479,
              "end": 487
            },
            "start": 477,
            "end": 487
          },
          "start": 476,
          "end": 487
        },
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
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "start": 492,
              "end": 493
            },
            "start": 490,
            "end": 493
          },
          "start": 489,
          "end": 493
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
            "start": 496,
            "end": 497
          },
          "typeArguments": null,
          "start": 496,
          "end": 497
        },
        "start": 494,
        "end": 497
      },
      "body": null,
      "expression": false,
      "start": 447,
      "end": 498
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null,
        "start": 508,
        "end": 511
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
              "start": 512,
              "end": 513
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 512,
            "end": 513
          }
        ],
        "start": 511,
        "end": 514
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "rest",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 522
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 524,
                "end": 527
              },
              "start": 524,
              "end": 529
            },
            "start": 522,
            "end": 529
          },
          "value": null,
          "start": 515,
          "end": 529
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
            "start": 532,
            "end": 533
          },
          "typeArguments": null,
          "start": 532,
          "end": 533
        },
        "start": 530,
        "end": 533
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 556
            },
            "start": 540,
            "end": 557
          }
        ],
        "start": 534,
        "end": 559
      },
      "expression": false,
      "start": 499,
      "end": 559
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
            "typeAnnotation": null,
            "start": 565,
            "end": 566
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 569,
              "end": 572
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 573,
                    "end": 574
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 580,
                          "end": 581
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 582,
                              "end": 588
                            }
                          ],
                          "start": 581,
                          "end": 589
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 590,
                            "end": 599
                          }
                        ],
                        "optional": false,
                        "start": 580,
                        "end": 600
                      },
                      "directive": null,
                      "start": 580,
                      "end": 601
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 610
                      },
                      "start": 602,
                      "end": 611
                    }
                  ],
                  "start": 578,
                  "end": 613
                },
                "id": null,
                "generator": false,
                "start": 573,
                "end": 613
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 615,
                "end": 617
              }
            ],
            "optional": false,
            "start": 569,
            "end": 618
          },
          "definite": false,
          "start": 565,
          "end": 618
        }
      ],
      "declare": false,
      "start": 561,
      "end": 619
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
            "typeAnnotation": null,
            "start": 624,
            "end": 625
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 628,
              "end": 631
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 633,
                    "end": 634
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 640,
                          "end": 641
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 642,
                              "end": 648
                            }
                          ],
                          "start": 641,
                          "end": 649
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 650,
                            "end": 659
                          }
                        ],
                        "optional": false,
                        "start": 640,
                        "end": 660
                      },
                      "directive": null,
                      "start": 640,
                      "end": 661
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 669,
                        "end": 670
                      },
                      "start": 662,
                      "end": 671
                    }
                  ],
                  "start": 638,
                  "end": 673
                },
                "id": null,
                "generator": false,
                "start": 633,
                "end": 673
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 676,
                "end": 678
              }
            ],
            "optional": false,
            "start": 628,
            "end": 679
          },
          "definite": false,
          "start": 624,
          "end": 679
        }
      ],
      "declare": false,
      "start": 620,
      "end": 680
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
            "typeAnnotation": null,
            "start": 685,
            "end": 686
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 692
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 695,
                    "end": 696
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 702,
                          "end": 703
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 704,
                              "end": 710
                            }
                          ],
                          "start": 703,
                          "end": 711
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 712,
                            "end": 721
                          }
                        ],
                        "optional": false,
                        "start": 702,
                        "end": 722
                      },
                      "directive": null,
                      "start": 702,
                      "end": 723
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 731,
                        "end": 732
                      },
                      "start": 724,
                      "end": 733
                    }
                  ],
                  "start": 700,
                  "end": 735
                },
                "id": null,
                "generator": false,
                "start": 695,
                "end": 735
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 739,
                "end": 741
              }
            ],
            "optional": false,
            "start": 689,
            "end": 742
          },
          "definite": false,
          "start": 685,
          "end": 742
        }
      ],
      "declare": false,
      "start": 681,
      "end": 743
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 748,
            "end": 749
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 752,
              "end": 755
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 760
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 766,
                          "end": 767
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 768,
                              "end": 774
                            }
                          ],
                          "start": 767,
                          "end": 775
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 776,
                            "end": 785
                          }
                        ],
                        "optional": false,
                        "start": 766,
                        "end": 786
                      },
                      "directive": null,
                      "start": 766,
                      "end": 787
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 795,
                        "end": 796
                      },
                      "start": 788,
                      "end": 797
                    }
                  ],
                  "start": 764,
                  "end": 799
                },
                "id": null,
                "generator": false,
                "start": 759,
                "end": 799
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 804,
                "end": 806
              }
            ],
            "optional": false,
            "start": 752,
            "end": 807
          },
          "definite": false,
          "start": 748,
          "end": 807
        }
      ],
      "declare": false,
      "start": 744,
      "end": 808
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 814,
            "end": 815
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 818,
              "end": 821
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 822,
                    "end": 823
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 829,
                          "end": 830
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 831,
                              "end": 837
                            }
                          ],
                          "start": 830,
                          "end": 838
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 839,
                            "end": 848
                          }
                        ],
                        "optional": false,
                        "start": 829,
                        "end": 849
                      },
                      "directive": null,
                      "start": 829,
                      "end": 850
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 858,
                        "end": 859
                      },
                      "start": 851,
                      "end": 860
                    }
                  ],
                  "start": 827,
                  "end": 862
                },
                "id": null,
                "generator": false,
                "start": 822,
                "end": 862
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 865
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 872
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 873,
                              "end": 879
                            }
                          ],
                          "start": 872,
                          "end": 880
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 881,
                            "end": 890
                          }
                        ],
                        "optional": false,
                        "start": 871,
                        "end": 891
                      },
                      "directive": null,
                      "start": 871,
                      "end": 892
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 900,
                        "end": 901
                      },
                      "start": 893,
                      "end": 902
                    }
                  ],
                  "start": 869,
                  "end": 904
                },
                "id": null,
                "generator": false,
                "start": 864,
                "end": 904
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 906,
                "end": 908
              }
            ],
            "optional": false,
            "start": 818,
            "end": 909
          },
          "definite": false,
          "start": 814,
          "end": 909
        }
      ],
      "declare": false,
      "start": 810,
      "end": 910
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 915,
            "end": 916
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 919,
              "end": 922
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 924,
                    "end": 925
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 931,
                          "end": 932
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 933,
                              "end": 939
                            }
                          ],
                          "start": 932,
                          "end": 940
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 941,
                            "end": 950
                          }
                        ],
                        "optional": false,
                        "start": 931,
                        "end": 951
                      },
                      "directive": null,
                      "start": 931,
                      "end": 952
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 960,
                        "end": 961
                      },
                      "start": 953,
                      "end": 962
                    }
                  ],
                  "start": 929,
                  "end": 964
                },
                "id": null,
                "generator": false,
                "start": 924,
                "end": 964
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 967,
                    "end": 968
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 974,
                          "end": 975
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 976,
                              "end": 982
                            }
                          ],
                          "start": 975,
                          "end": 983
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 984,
                            "end": 993
                          }
                        ],
                        "optional": false,
                        "start": 974,
                        "end": 994
                      },
                      "directive": null,
                      "start": 974,
                      "end": 995
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1003,
                        "end": 1004
                      },
                      "start": 996,
                      "end": 1005
                    }
                  ],
                  "start": 972,
                  "end": 1007
                },
                "id": null,
                "generator": false,
                "start": 967,
                "end": 1007
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1010,
                "end": 1012
              }
            ],
            "optional": false,
            "start": 919,
            "end": 1013
          },
          "definite": false,
          "start": 915,
          "end": 1013
        }
      ],
      "declare": false,
      "start": 911,
      "end": 1014
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1019,
            "end": 1020
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1023,
              "end": 1026
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1029,
                    "end": 1030
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1037
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1038,
                              "end": 1044
                            }
                          ],
                          "start": 1037,
                          "end": 1045
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1055
                          }
                        ],
                        "optional": false,
                        "start": 1036,
                        "end": 1056
                      },
                      "directive": null,
                      "start": 1036,
                      "end": 1057
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1065,
                        "end": 1066
                      },
                      "start": 1058,
                      "end": 1067
                    }
                  ],
                  "start": 1034,
                  "end": 1069
                },
                "id": null,
                "generator": false,
                "start": 1029,
                "end": 1069
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1074,
                    "end": 1075
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1081,
                          "end": 1082
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1083,
                              "end": 1089
                            }
                          ],
                          "start": 1082,
                          "end": 1090
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1091,
                            "end": 1100
                          }
                        ],
                        "optional": false,
                        "start": 1081,
                        "end": 1101
                      },
                      "directive": null,
                      "start": 1081,
                      "end": 1102
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1110,
                        "end": 1111
                      },
                      "start": 1103,
                      "end": 1112
                    }
                  ],
                  "start": 1079,
                  "end": 1114
                },
                "id": null,
                "generator": false,
                "start": 1074,
                "end": 1114
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1118,
                "end": 1120
              }
            ],
            "optional": false,
            "start": 1023,
            "end": 1121
          },
          "definite": false,
          "start": 1019,
          "end": 1121
        }
      ],
      "declare": false,
      "start": 1015,
      "end": 1122
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 1127,
            "end": 1128
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1131,
              "end": 1134
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1138,
                    "end": 1139
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1145,
                          "end": 1146
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1147,
                              "end": 1153
                            }
                          ],
                          "start": 1146,
                          "end": 1154
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1155,
                            "end": 1164
                          }
                        ],
                        "optional": false,
                        "start": 1145,
                        "end": 1165
                      },
                      "directive": null,
                      "start": 1145,
                      "end": 1166
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1174,
                        "end": 1175
                      },
                      "start": 1167,
                      "end": 1176
                    }
                  ],
                  "start": 1143,
                  "end": 1178
                },
                "id": null,
                "generator": false,
                "start": 1138,
                "end": 1178
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1184,
                    "end": 1185
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1191,
                          "end": 1192
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1193,
                              "end": 1199
                            }
                          ],
                          "start": 1192,
                          "end": 1200
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1201,
                            "end": 1210
                          }
                        ],
                        "optional": false,
                        "start": 1191,
                        "end": 1211
                      },
                      "directive": null,
                      "start": 1191,
                      "end": 1212
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1220,
                        "end": 1221
                      },
                      "start": 1213,
                      "end": 1222
                    }
                  ],
                  "start": 1189,
                  "end": 1224
                },
                "id": null,
                "generator": false,
                "start": 1184,
                "end": 1224
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1228,
                "end": 1230
              }
            ],
            "optional": false,
            "start": 1131,
            "end": 1231
          },
          "definite": false,
          "start": 1127,
          "end": 1231
        }
      ],
      "declare": false,
      "start": 1123,
      "end": 1232
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1261,
            "end": 1262
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1268
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1270,
                        "end": 1274
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1275,
                        "end": 1281
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1270,
                      "end": 1281
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1270,
                    "end": 1283
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1286,
                    "end": 1289
                  },
                  "start": 1270,
                  "end": 1289
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1293
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1299,
                            "end": 1300
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1301,
                                "end": 1307
                              }
                            ],
                            "start": 1300,
                            "end": 1308
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1309,
                              "end": 1318
                            }
                          ],
                          "optional": false,
                          "start": 1299,
                          "end": 1319
                        },
                        "directive": null,
                        "start": 1299,
                        "end": 1320
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1328,
                          "end": 1329
                        },
                        "start": 1321,
                        "end": 1330
                      }
                    ],
                    "start": 1297,
                    "end": 1332
                  },
                  "id": null,
                  "generator": false,
                  "start": 1292,
                  "end": 1332
                },
                "alternate": {
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
                      "start": 1335,
                      "end": 1336
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1340,
                    "end": 1349
                  },
                  "id": null,
                  "generator": false,
                  "start": 1335,
                  "end": 1349
                },
                "start": 1270,
                "end": 1349
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1352,
                "end": 1354
              }
            ],
            "optional": false,
            "start": 1265,
            "end": 1355
          },
          "definite": false,
          "start": 1261,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1257,
      "end": 1356
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 1361,
            "end": 1362
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1365,
              "end": 1368
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1370,
                        "end": 1374
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1381
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1370,
                      "end": 1381
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1370,
                    "end": 1383
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1386,
                    "end": 1389
                  },
                  "start": 1370,
                  "end": 1389
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1393,
                      "end": 1394
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1400,
                            "end": 1401
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1402,
                                "end": 1408
                              }
                            ],
                            "start": 1401,
                            "end": 1409
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1410,
                              "end": 1419
                            }
                          ],
                          "optional": false,
                          "start": 1400,
                          "end": 1420
                        },
                        "directive": null,
                        "start": 1400,
                        "end": 1421
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1429,
                          "end": 1430
                        },
                        "start": 1422,
                        "end": 1431
                      }
                    ],
                    "start": 1398,
                    "end": 1433
                  },
                  "id": null,
                  "generator": false,
                  "start": 1393,
                  "end": 1433
                },
                "alternate": {
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
                      "start": 1438,
                      "end": 1439
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1443,
                    "end": 1452
                  },
                  "id": null,
                  "generator": false,
                  "start": 1438,
                  "end": 1452
                },
                "start": 1370,
                "end": 1453
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1456,
                "end": 1458
              }
            ],
            "optional": false,
            "start": 1365,
            "end": 1459
          },
          "definite": false,
          "start": 1361,
          "end": 1459
        }
      ],
      "declare": false,
      "start": 1357,
      "end": 1460
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1465,
            "end": 1466
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1469,
              "end": 1472
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1474,
                        "end": 1478
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1479,
                        "end": 1485
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1474,
                      "end": 1485
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1474,
                    "end": 1487
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1490,
                    "end": 1493
                  },
                  "start": 1474,
                  "end": 1493
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1498
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1504,
                            "end": 1505
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1506,
                                "end": 1512
                              }
                            ],
                            "start": 1505,
                            "end": 1513
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1514,
                              "end": 1523
                            }
                          ],
                          "optional": false,
                          "start": 1504,
                          "end": 1524
                        },
                        "directive": null,
                        "start": 1504,
                        "end": 1525
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1533,
                          "end": 1534
                        },
                        "start": 1526,
                        "end": 1535
                      }
                    ],
                    "start": 1502,
                    "end": 1537
                  },
                  "id": null,
                  "generator": false,
                  "start": 1497,
                  "end": 1537
                },
                "alternate": {
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
                      "start": 1542,
                      "end": 1543
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1547,
                    "end": 1556
                  },
                  "id": null,
                  "generator": false,
                  "start": 1542,
                  "end": 1556
                },
                "start": 1474,
                "end": 1557
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1560,
                    "end": 1561
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1567,
                          "end": 1568
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1569,
                              "end": 1575
                            }
                          ],
                          "start": 1568,
                          "end": 1576
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1577,
                            "end": 1586
                          }
                        ],
                        "optional": false,
                        "start": 1567,
                        "end": 1587
                      },
                      "directive": null,
                      "start": 1567,
                      "end": 1588
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1596,
                        "end": 1597
                      },
                      "start": 1589,
                      "end": 1598
                    }
                  ],
                  "start": 1565,
                  "end": 1600
                },
                "id": null,
                "generator": false,
                "start": 1560,
                "end": 1600
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1602,
                "end": 1604
              }
            ],
            "optional": false,
            "start": 1469,
            "end": 1605
          },
          "definite": false,
          "start": 1465,
          "end": 1605
        }
      ],
      "declare": false,
      "start": 1461,
      "end": 1606
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
            "name": "l",
            "optional": false,
            "typeAnnotation": null,
            "start": 1611,
            "end": 1612
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "fun",
              "optional": false,
              "typeAnnotation": null,
              "start": 1615,
              "end": 1618
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1621,
                        "end": 1625
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1626,
                        "end": 1632
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1621,
                      "end": 1632
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1621,
                    "end": 1634
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "value": 0.5,
                    "raw": "0.5",
                    "start": 1637,
                    "end": 1640
                  },
                  "start": 1621,
                  "end": 1640
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1645,
                      "end": 1646
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1652,
                            "end": 1653
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1654,
                                "end": 1660
                              }
                            ],
                            "start": 1653,
                            "end": 1661
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "undefined",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1662,
                              "end": 1671
                            }
                          ],
                          "optional": false,
                          "start": 1652,
                          "end": 1672
                        },
                        "directive": null,
                        "start": 1652,
                        "end": 1673
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1681,
                          "end": 1682
                        },
                        "start": 1674,
                        "end": 1683
                      }
                    ],
                    "start": 1650,
                    "end": 1685
                  },
                  "id": null,
                  "generator": false,
                  "start": 1645,
                  "end": 1685
                },
                "alternate": {
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
                      "start": 1692,
                      "end": 1693
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1697,
                    "end": 1706
                  },
                  "id": null,
                  "generator": false,
                  "start": 1692,
                  "end": 1706
                },
                "start": 1621,
                "end": 1708
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1713,
                    "end": 1714
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1720,
                          "end": 1721
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1722,
                              "end": 1728
                            }
                          ],
                          "start": 1721,
                          "end": 1729
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1730,
                            "end": 1739
                          }
                        ],
                        "optional": false,
                        "start": 1720,
                        "end": 1740
                      },
                      "directive": null,
                      "start": 1720,
                      "end": 1741
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1749,
                        "end": 1750
                      },
                      "start": 1742,
                      "end": 1751
                    }
                  ],
                  "start": 1718,
                  "end": 1753
                },
                "id": null,
                "generator": false,
                "start": 1713,
                "end": 1753
              },
              {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1757,
                "end": 1759
              }
            ],
            "optional": false,
            "start": 1615,
            "end": 1760
          },
          "definite": false,
          "start": 1611,
          "end": 1760
        }
      ],
      "declare": false,
      "start": 1607,
      "end": 1761
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
            "name": "lambda1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1784
                },
                "typeArguments": null,
                "start": 1776,
                "end": 1784
              },
              "start": 1774,
              "end": 1784
            },
            "start": 1767,
            "end": 1784
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1787,
                "end": 1788
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1794,
                      "end": 1795
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1796,
                          "end": 1802
                        }
                      ],
                      "start": 1795,
                      "end": 1803
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1804,
                        "end": 1813
                      }
                    ],
                    "optional": false,
                    "start": 1794,
                    "end": 1814
                  },
                  "directive": null,
                  "start": 1794,
                  "end": 1815
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1823,
                    "end": 1824
                  },
                  "start": 1816,
                  "end": 1825
                }
              ],
              "start": 1792,
              "end": 1827
            },
            "id": null,
            "generator": false,
            "start": 1787,
            "end": 1827
          },
          "definite": false,
          "start": 1767,
          "end": 1827
        }
      ],
      "declare": false,
      "start": 1763,
      "end": 1828
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
            "name": "lambda2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1842,
                  "end": 1850
                },
                "typeArguments": null,
                "start": 1842,
                "end": 1850
              },
              "start": 1840,
              "end": 1850
            },
            "start": 1833,
            "end": 1850
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1854,
                "end": 1855
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1861,
                      "end": 1862
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1863,
                          "end": 1869
                        }
                      ],
                      "start": 1862,
                      "end": 1870
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1871,
                        "end": 1880
                      }
                    ],
                    "optional": false,
                    "start": 1861,
                    "end": 1881
                  },
                  "directive": null,
                  "start": 1861,
                  "end": 1882
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1890,
                    "end": 1891
                  },
                  "start": 1883,
                  "end": 1892
                }
              ],
              "start": 1859,
              "end": 1894
            },
            "id": null,
            "generator": false,
            "start": 1854,
            "end": 1894
          },
          "definite": false,
          "start": 1833,
          "end": 1895
        }
      ],
      "declare": false,
      "start": 1829,
      "end": 1896
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ObjType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1903,
        "end": 1910
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
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
              "start": 1915,
              "end": 1916
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1922,
                        "end": 1928
                      },
                      "start": 1920,
                      "end": 1928
                    },
                    "start": 1919,
                    "end": 1928
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1933,
                    "end": 1939
                  },
                  "start": 1930,
                  "end": 1939
                },
                "start": 1918,
                "end": 1939
              },
              "start": 1916,
              "end": 1939
            },
            "accessibility": null,
            "static": false,
            "start": 1915,
            "end": 1940
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
              "start": 1941,
              "end": 1942
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
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1948,
                        "end": 1954
                      },
                      "start": 1946,
                      "end": 1954
                    },
                    "start": 1945,
                    "end": 1954
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1959,
                    "end": 1965
                  },
                  "start": 1956,
                  "end": 1965
                },
                "start": 1944,
                "end": 1965
              },
              "start": 1942,
              "end": 1965
            },
            "accessibility": null,
            "static": false,
            "start": 1941,
            "end": 1965
          }
        ],
        "start": 1913,
        "end": 1967
      },
      "declare": false,
      "start": 1898,
      "end": 1968
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1979,
                  "end": 1986
                },
                "typeArguments": null,
                "start": 1979,
                "end": 1986
              },
              "start": 1977,
              "end": 1986
            },
            "start": 1973,
            "end": 1986
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1991,
                  "end": 1992
                },
                "value": {
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
                      "start": 1994,
                      "end": 1995
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2000,
                        "end": 2001
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2003,
                        "end": 2012
                      }
                    ],
                    "start": 2000,
                    "end": 2012
                  },
                  "id": null,
                  "generator": false,
                  "start": 1994,
                  "end": 2013
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1991,
                "end": 2013
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2015,
                  "end": 2016
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2018,
                      "end": 2019
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2024,
                        "end": 2025
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2027,
                        "end": 2036
                      }
                    ],
                    "start": 2024,
                    "end": 2036
                  },
                  "id": null,
                  "generator": false,
                  "start": 2018,
                  "end": 2037
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2015,
                "end": 2037
              }
            ],
            "start": 1989,
            "end": 2039
          },
          "definite": false,
          "start": 1973,
          "end": 2039
        }
      ],
      "declare": false,
      "start": 1969,
      "end": 2040
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ObjType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2051,
                  "end": 2058
                },
                "typeArguments": null,
                "start": 2051,
                "end": 2058
              },
              "start": 2049,
              "end": 2058
            },
            "start": 2045,
            "end": 2058
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2064,
                  "end": 2065
                },
                "value": {
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
                      "start": 2067,
                      "end": 2068
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2073,
                        "end": 2074
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2076,
                        "end": 2085
                      }
                    ],
                    "start": 2073,
                    "end": 2085
                  },
                  "id": null,
                  "generator": false,
                  "start": 2067,
                  "end": 2086
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2064,
                "end": 2086
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2088,
                  "end": 2089
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2091,
                      "end": 2092
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2097,
                        "end": 2098
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2100,
                        "end": 2109
                      }
                    ],
                    "start": 2097,
                    "end": 2109
                  },
                  "id": null,
                  "generator": false,
                  "start": 2091,
                  "end": 2110
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2088,
                "end": 2110
              }
            ],
            "start": 2062,
            "end": 2112
          },
          "definite": false,
          "start": 2045,
          "end": 2113
        }
      ],
      "declare": false,
      "start": 2041,
      "end": 2114
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 358,
  "end": 2114
}
```
