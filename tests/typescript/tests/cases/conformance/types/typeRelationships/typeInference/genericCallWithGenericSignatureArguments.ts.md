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
                        "start": 328,
                        "end": 329
                      },
                      "typeArguments": null,
                      "start": 328,
                      "end": 329
                    },
                    "start": 326,
                    "end": 329
                  },
                  "start": 325,
                  "end": 329
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
                    "start": 334,
                    "end": 335
                  },
                  "typeArguments": null,
                  "start": 334,
                  "end": 335
                },
                "start": 331,
                "end": 335
              },
              "start": 324,
              "end": 335
            },
            "start": 322,
            "end": 335
          },
          "start": 321,
          "end": 335
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
                        "start": 344,
                        "end": 345
                      },
                      "typeArguments": null,
                      "start": 344,
                      "end": 345
                    },
                    "start": 342,
                    "end": 345
                  },
                  "start": 341,
                  "end": 345
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
                    "start": 350,
                    "end": 351
                  },
                  "typeArguments": null,
                  "start": 350,
                  "end": 351
                },
                "start": 347,
                "end": 351
              },
              "start": 340,
              "end": 351
            },
            "start": 338,
            "end": 351
          },
          "start": 337,
          "end": 351
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
                                "start": 370,
                                "end": 371
                              },
                              "typeArguments": null,
                              "start": 370,
                              "end": 371
                            },
                            "start": 368,
                            "end": 371
                          },
                          "start": 367,
                          "end": 371
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
                            "start": 376,
                            "end": 377
                          },
                          "typeArguments": null,
                          "start": 376,
                          "end": 377
                        },
                        "start": 373,
                        "end": 377
                      },
                      "start": 366,
                      "end": 377
                    },
                    "start": 364,
                    "end": 377
                  },
                  "start": 363,
                  "end": 377
                },
                "init": null,
                "definite": false,
                "start": 363,
                "end": 377
              }
            ],
            "declare": false,
            "start": 359,
            "end": 378
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "start": 383,
            "end": 392
          }
        ],
        "start": 353,
        "end": 394
      },
      "expression": false,
      "start": 305,
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
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 465
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 468,
              "end": 471
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
                    "typeAnnotation": null,
                    "start": 473,
                    "end": 474
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 479,
                  "end": 480
                },
                "id": null,
                "generator": false,
                "start": 472,
                "end": 480
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
                    "start": 483,
                    "end": 484
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 489,
                  "end": 491
                },
                "id": null,
                "generator": false,
                "start": 482,
                "end": 491
              }
            ],
            "optional": false,
            "start": 468,
            "end": 492
          },
          "definite": false,
          "start": 462,
          "end": 492
        }
      ],
      "declare": false,
      "start": 458,
      "end": 493
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
            "start": 510,
            "end": 512
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 518
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
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 523,
                          "end": 529
                        },
                        "typeArguments": null,
                        "start": 523,
                        "end": 529
                      },
                      "start": 521,
                      "end": 529
                    },
                    "start": 520,
                    "end": 529
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 534,
                  "end": 538
                },
                "id": null,
                "generator": false,
                "start": 519,
                "end": 538
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
                        "start": 544,
                        "end": 550
                      },
                      "start": 542,
                      "end": 550
                    },
                    "start": 541,
                    "end": 550
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 555,
                  "end": 557
                },
                "id": null,
                "generator": false,
                "start": 540,
                "end": 557
              }
            ],
            "optional": false,
            "start": 515,
            "end": 558
          },
          "definite": false,
          "start": 510,
          "end": 558
        }
      ],
      "declare": false,
      "start": 506,
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 584,
            "end": 586
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 592
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
                        "start": 597,
                        "end": 603
                      },
                      "start": 595,
                      "end": 603
                    },
                    "start": 594,
                    "end": 603
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 608,
                  "end": 609
                },
                "id": null,
                "generator": false,
                "start": 593,
                "end": 609
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
                          "start": 615,
                          "end": 621
                        },
                        "typeArguments": null,
                        "start": 615,
                        "end": 621
                      },
                      "start": 613,
                      "end": 621
                    },
                    "start": 612,
                    "end": 621
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 626,
                  "end": 630
                },
                "id": null,
                "generator": false,
                "start": 611,
                "end": 630
              }
            ],
            "optional": false,
            "start": 589,
            "end": 631
          },
          "definite": false,
          "start": 584,
          "end": 631
        }
      ],
      "declare": false,
      "start": 580,
      "end": 632
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
            "name": "r3ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 657,
            "end": 661
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 667
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
                        "start": 672,
                        "end": 678
                      },
                      "start": 670,
                      "end": 678
                    },
                    "start": 669,
                    "end": 678
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 683,
                  "end": 684
                },
                "id": null,
                "generator": false,
                "start": 668,
                "end": 684
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
                        "start": 690,
                        "end": 696
                      },
                      "start": 688,
                      "end": 696
                    },
                    "start": 687,
                    "end": 696
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 701,
                  "end": 702
                },
                "id": null,
                "generator": false,
                "start": 686,
                "end": 702
              }
            ],
            "optional": false,
            "start": 664,
            "end": 703
          },
          "definite": false,
          "start": 657,
          "end": 703
        }
      ],
      "declare": false,
      "start": 653,
      "end": 704
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
                      "start": 735,
                      "end": 736
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 738,
                        "end": 744
                      },
                      "start": 736,
                      "end": 744
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 735,
                    "end": 745
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 750,
                        "end": 756
                      },
                      "start": 748,
                      "end": 756
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 746,
                    "end": 757
                  }
                ],
                "start": 733,
                "end": 759
              },
              "start": 731,
              "end": 759
            },
            "start": 730,
            "end": 759
          },
          "init": null,
          "definite": false,
          "start": 730,
          "end": 759
        }
      ],
      "declare": false,
      "start": 726,
      "end": 760
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
                      "start": 770,
                      "end": 771
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 773,
                        "end": 779
                      },
                      "start": 771,
                      "end": 779
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 770,
                    "end": 780
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 785,
                        "end": 791
                      },
                      "start": 783,
                      "end": 791
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 781,
                    "end": 792
                  }
                ],
                "start": 768,
                "end": 794
              },
              "start": 766,
              "end": 794
            },
            "start": 765,
            "end": 794
          },
          "init": null,
          "definite": false,
          "start": 765,
          "end": 794
        }
      ],
      "declare": false,
      "start": 761,
      "end": 795
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
            "start": 801,
            "end": 803
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 809
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 821,
                          "end": 822
                        },
                        "typeArguments": null,
                        "start": 814,
                        "end": 822
                      },
                      "start": 812,
                      "end": 822
                    },
                    "start": 811,
                    "end": 822
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 827,
                  "end": 828
                },
                "id": null,
                "generator": false,
                "start": 810,
                "end": 828
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 841,
                          "end": 842
                        },
                        "typeArguments": null,
                        "start": 834,
                        "end": 842
                      },
                      "start": 832,
                      "end": 842
                    },
                    "start": 831,
                    "end": 842
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 847,
                  "end": 848
                },
                "id": null,
                "generator": false,
                "start": 830,
                "end": 848
              }
            ],
            "optional": false,
            "start": 806,
            "end": 849
          },
          "definite": false,
          "start": 801,
          "end": 849
        }
      ],
      "declare": false,
      "start": 797,
      "end": 850
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
            "start": 879,
            "end": 881
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 887
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 900
                        },
                        "typeArguments": null,
                        "start": 892,
                        "end": 900
                      },
                      "start": 890,
                      "end": 900
                    },
                    "start": 889,
                    "end": 900
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 905,
                  "end": 906
                },
                "id": null,
                "generator": false,
                "start": 888,
                "end": 906
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
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 919,
                          "end": 920
                        },
                        "typeArguments": null,
                        "start": 912,
                        "end": 920
                      },
                      "start": 910,
                      "end": 920
                    },
                    "start": 909,
                    "end": 920
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 925,
                  "end": 926
                },
                "id": null,
                "generator": false,
                "start": 908,
                "end": 926
              }
            ],
            "optional": false,
            "start": 884,
            "end": 927
          },
          "definite": false,
          "start": 879,
          "end": 927
        }
      ],
      "declare": false,
      "start": 875,
      "end": 928
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other",
        "optional": false,
        "typeAnnotation": null,
        "start": 963,
        "end": 968
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
              "start": 969,
              "end": 970
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 969,
            "end": 970
          }
        ],
        "start": 968,
        "end": 971
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
                "start": 975,
                "end": 976
              },
              "typeArguments": null,
              "start": 975,
              "end": 976
            },
            "start": 973,
            "end": 976
          },
          "start": 972,
          "end": 976
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
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 990
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 993,
                    "end": 996
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
                                "start": 1001,
                                "end": 1002
                              },
                              "typeArguments": null,
                              "start": 1001,
                              "end": 1002
                            },
                            "start": 999,
                            "end": 1002
                          },
                          "start": 998,
                          "end": 1002
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1007,
                        "end": 1008
                      },
                      "id": null,
                      "generator": false,
                      "start": 997,
                      "end": 1008
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
                                "start": 1014,
                                "end": 1015
                              },
                              "typeArguments": null,
                              "start": 1014,
                              "end": 1015
                            },
                            "start": 1012,
                            "end": 1015
                          },
                          "start": 1011,
                          "end": 1015
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1020,
                        "end": 1021
                      },
                      "id": null,
                      "generator": false,
                      "start": 1010,
                      "end": 1021
                    }
                  ],
                  "optional": false,
                  "start": 993,
                  "end": 1022
                },
                "definite": false,
                "start": 988,
                "end": 1022
              }
            ],
            "declare": false,
            "start": 984,
            "end": 1023
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
                  "name": "r6b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1042,
                  "end": 1045
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1048,
                    "end": 1051
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
                          "start": 1053,
                          "end": 1054
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1059,
                        "end": 1060
                      },
                      "id": null,
                      "generator": false,
                      "start": 1052,
                      "end": 1060
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
                          "start": 1063,
                          "end": 1064
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1069,
                        "end": 1070
                      },
                      "id": null,
                      "generator": false,
                      "start": 1062,
                      "end": 1070
                    }
                  ],
                  "optional": false,
                  "start": 1048,
                  "end": 1071
                },
                "definite": false,
                "start": 1042,
                "end": 1071
              }
            ],
            "declare": false,
            "start": 1038,
            "end": 1072
          }
        ],
        "start": 978,
        "end": 1086
      },
      "expression": false,
      "start": 954,
      "end": 1086
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1097,
        "end": 1103
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
              "start": 1104,
              "end": 1105
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1114,
                "end": 1118
              },
              "typeArguments": null,
              "start": 1114,
              "end": 1118
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1104,
            "end": 1118
          }
        ],
        "start": 1103,
        "end": 1119
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
          "start": 1120,
          "end": 1124
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
                  "start": 1136,
                  "end": 1138
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1141,
                    "end": 1144
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
                                "start": 1149,
                                "end": 1150
                              },
                              "typeArguments": null,
                              "start": 1149,
                              "end": 1150
                            },
                            "start": 1147,
                            "end": 1150
                          },
                          "start": 1146,
                          "end": 1150
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1155,
                        "end": 1156
                      },
                      "id": null,
                      "generator": false,
                      "start": 1145,
                      "end": 1156
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
                                "start": 1162,
                                "end": 1163
                              },
                              "typeArguments": null,
                              "start": 1162,
                              "end": 1163
                            },
                            "start": 1160,
                            "end": 1163
                          },
                          "start": 1159,
                          "end": 1163
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1168,
                        "end": 1169
                      },
                      "id": null,
                      "generator": false,
                      "start": 1158,
                      "end": 1169
                    }
                  ],
                  "optional": false,
                  "start": 1141,
                  "end": 1170
                },
                "definite": false,
                "start": 1136,
                "end": 1170
              }
            ],
            "declare": false,
            "start": 1132,
            "end": 1171
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
                  "start": 1190,
                  "end": 1193
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1199
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
                          "start": 1201,
                          "end": 1202
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1207,
                        "end": 1208
                      },
                      "id": null,
                      "generator": false,
                      "start": 1200,
                      "end": 1208
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
                          "start": 1211,
                          "end": 1212
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "id": null,
                      "generator": false,
                      "start": 1210,
                      "end": 1218
                    }
                  ],
                  "optional": false,
                  "start": 1196,
                  "end": 1219
                },
                "definite": false,
                "start": 1190,
                "end": 1219
              }
            ],
            "declare": false,
            "start": 1186,
            "end": 1220
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
                  "start": 1241,
                  "end": 1243
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1246,
                    "end": 1248
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1249,
                      "end": 1253
                    }
                  ],
                  "optional": false,
                  "start": 1246,
                  "end": 1254
                },
                "definite": false,
                "start": 1241,
                "end": 1254
              }
            ],
            "declare": false,
            "start": 1237,
            "end": 1255
          }
        ],
        "start": 1126,
        "end": 1306
      },
      "expression": false,
      "start": 1088,
      "end": 1306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1318,
        "end": 1322
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
              "start": 1323,
              "end": 1324
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1337
              },
              "typeArguments": null,
              "start": 1333,
              "end": 1337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1323,
            "end": 1337
          }
        ],
        "start": 1322,
        "end": 1338
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
                        "start": 1346,
                        "end": 1347
                      },
                      "typeArguments": null,
                      "start": 1346,
                      "end": 1347
                    },
                    "start": 1344,
                    "end": 1347
                  },
                  "start": 1343,
                  "end": 1347
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
                    "start": 1352,
                    "end": 1353
                  },
                  "typeArguments": null,
                  "start": 1352,
                  "end": 1353
                },
                "start": 1349,
                "end": 1353
              },
              "start": 1342,
              "end": 1353
            },
            "start": 1340,
            "end": 1353
          },
          "start": 1339,
          "end": 1353
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
                        "start": 1362,
                        "end": 1363
                      },
                      "typeArguments": null,
                      "start": 1362,
                      "end": 1363
                    },
                    "start": 1360,
                    "end": 1363
                  },
                  "start": 1359,
                  "end": 1363
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
                    "start": 1368,
                    "end": 1369
                  },
                  "typeArguments": null,
                  "start": 1368,
                  "end": 1369
                },
                "start": 1365,
                "end": 1369
              },
              "start": 1358,
              "end": 1369
            },
            "start": 1356,
            "end": 1369
          },
          "start": 1355,
          "end": 1369
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
                                "start": 1388,
                                "end": 1389
                              },
                              "typeArguments": null,
                              "start": 1388,
                              "end": 1389
                            },
                            "start": 1386,
                            "end": 1389
                          },
                          "start": 1385,
                          "end": 1389
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
                            "start": 1394,
                            "end": 1395
                          },
                          "typeArguments": null,
                          "start": 1394,
                          "end": 1395
                        },
                        "start": 1391,
                        "end": 1395
                      },
                      "start": 1384,
                      "end": 1395
                    },
                    "start": 1382,
                    "end": 1395
                  },
                  "start": 1381,
                  "end": 1395
                },
                "init": null,
                "definite": false,
                "start": 1381,
                "end": 1395
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1396
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1409
            },
            "start": 1401,
            "end": 1410
          }
        ],
        "start": 1371,
        "end": 1412
      },
      "expression": false,
      "start": 1309,
      "end": 1412
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "other3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1423,
        "end": 1429
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
              "start": 1430,
              "end": 1431
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "RegExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 1440,
                "end": 1446
              },
              "typeArguments": null,
              "start": 1440,
              "end": 1446
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1430,
            "end": 1446
          }
        ],
        "start": 1429,
        "end": 1447
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
                "start": 1451,
                "end": 1452
              },
              "typeArguments": null,
              "start": 1451,
              "end": 1452
            },
            "start": 1449,
            "end": 1452
          },
          "start": 1448,
          "end": 1452
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
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1464,
                  "end": 1466
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1469,
                    "end": 1473
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
                                "name": "Date",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1478,
                                "end": 1482
                              },
                              "typeArguments": null,
                              "start": 1478,
                              "end": 1482
                            },
                            "start": 1476,
                            "end": 1482
                          },
                          "start": 1475,
                          "end": 1482
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1487,
                        "end": 1488
                      },
                      "id": null,
                      "generator": false,
                      "start": 1474,
                      "end": 1488
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
                                "name": "Date",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1494,
                                "end": 1498
                              },
                              "typeArguments": null,
                              "start": 1494,
                              "end": 1498
                            },
                            "start": 1492,
                            "end": 1498
                          },
                          "start": 1491,
                          "end": 1498
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1503,
                        "end": 1504
                      },
                      "id": null,
                      "generator": false,
                      "start": 1490,
                      "end": 1504
                    }
                  ],
                  "optional": false,
                  "start": 1469,
                  "end": 1505
                },
                "definite": false,
                "start": 1464,
                "end": 1505
              }
            ],
            "declare": false,
            "start": 1460,
            "end": 1506
          }
        ],
        "start": 1454,
        "end": 1524
      },
      "expression": false,
      "start": 1414,
      "end": 1524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 1524
}
```
