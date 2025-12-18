__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 341,
        "end": 342
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
              "start": 343,
              "end": 344
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 358
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 359,
                    "end": 365
                  }
                ],
                "start": 358,
                "end": 366
              },
              "start": 353,
              "end": 366
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 366
          }
        ],
        "start": 342,
        "end": 367
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 385
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 389,
                        "end": 390
                      },
                      "typeArguments": null,
                      "start": 389,
                      "end": 390
                    },
                    "start": 387,
                    "end": 390
                  },
                  "start": 386,
                  "end": 390
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 401,
                      "end": 405
                    },
                    "start": 394,
                    "end": 406
                  }
                ],
                "start": 392,
                "end": 408
              },
              "expression": false,
              "start": 385,
              "end": 408
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 374,
            "end": 408
          }
        ],
        "start": 368,
        "end": 410
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 410
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 418,
        "end": 419
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
              "start": 420,
              "end": 421
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 430,
                "end": 436
              },
              "typeArguments": null,
              "start": 430,
              "end": 436
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 420,
            "end": 436
          }
        ],
        "start": 419,
        "end": 437
      },
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 444,
              "end": 455
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
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
                        "start": 459,
                        "end": 460
                      },
                      "typeArguments": null,
                      "start": 459,
                      "end": 460
                    },
                    "start": 457,
                    "end": 460
                  },
                  "start": 456,
                  "end": 460
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 471,
                      "end": 475
                    },
                    "start": 464,
                    "end": 476
                  }
                ],
                "start": 462,
                "end": 478
              },
              "expression": false,
              "start": 455,
              "end": 478
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 444,
            "end": 478
          }
        ],
        "start": 438,
        "end": 480
      },
      "abstract": false,
      "declare": false,
      "start": 412,
      "end": 480
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 492,
        "end": 493
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
              "start": 494,
              "end": 495
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 504,
                "end": 510
              },
              "typeArguments": null,
              "start": 504,
              "end": 510
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 494,
            "end": 510
          }
        ],
        "start": 493,
        "end": 511
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                      "start": 525,
                      "end": 526
                    },
                    "typeArguments": null,
                    "start": 525,
                    "end": 526
                  },
                  "start": 523,
                  "end": 526
                },
                "start": 522,
                "end": 526
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 529,
                "end": 535
              },
              "start": 527,
              "end": 535
            },
            "start": 518,
            "end": 536
          }
        ],
        "start": 512,
        "end": 538
      },
      "declare": false,
      "start": 482,
      "end": 538
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 552
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                    "start": 563,
                    "end": 564
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 573,
                      "end": 580
                    },
                    "typeArguments": null,
                    "start": 573,
                    "end": 580
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 563,
                  "end": 580
                }
              ],
              "start": 562,
              "end": 581
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
                      "start": 585,
                      "end": 586
                    },
                    "typeArguments": null,
                    "start": 585,
                    "end": 586
                  },
                  "start": 583,
                  "end": 586
                },
                "start": 582,
                "end": 586
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 589,
                "end": 595
              },
              "start": 587,
              "end": 595
            },
            "start": 559,
            "end": 596
          }
        ],
        "start": 553,
        "end": 598
      },
      "declare": false,
      "start": 540,
      "end": 598
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
                            "start": 613,
                            "end": 614
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 623,
                              "end": 628
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 629,
                                  "end": 635
                                }
                              ],
                              "start": 628,
                              "end": 636
                            },
                            "start": 623,
                            "end": 636
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 613,
                          "end": 636
                        }
                      ],
                      "start": 612,
                      "end": 637
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
                              "start": 641,
                              "end": 642
                            },
                            "typeArguments": null,
                            "start": 641,
                            "end": 642
                          },
                          "start": 639,
                          "end": 642
                        },
                        "start": 638,
                        "end": 642
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 645,
                        "end": 651
                      },
                      "start": 643,
                      "end": 651
                    },
                    "start": 609,
                    "end": 651
                  }
                ],
                "start": 607,
                "end": 653
              },
              "start": 605,
              "end": 653
            },
            "start": 604,
            "end": 653
          },
          "init": null,
          "definite": false,
          "start": 604,
          "end": 653
        }
      ],
      "declare": false,
      "start": 600,
      "end": 653
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
            "start": 658,
            "end": 659
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
                  "name": "new",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 667
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "start": 668,
                          "end": 669
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 678,
                            "end": 684
                          },
                          "typeArguments": null,
                          "start": 678,
                          "end": 684
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 668,
                        "end": 684
                      }
                    ],
                    "start": 667,
                    "end": 685
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
                            "start": 689,
                            "end": 690
                          },
                          "typeArguments": null,
                          "start": 689,
                          "end": 690
                        },
                        "start": 687,
                        "end": 690
                      },
                      "start": 686,
                      "end": 690
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 701,
                          "end": 703
                        },
                        "start": 694,
                        "end": 704
                      }
                    ],
                    "start": 692,
                    "end": 706
                  },
                  "expression": false,
                  "start": 667,
                  "end": 706
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 664,
                "end": 706
              }
            ],
            "start": 662,
            "end": 708
          },
          "definite": false,
          "start": 658,
          "end": 708
        }
      ],
      "declare": false,
      "start": 654,
      "end": 709
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 775
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 786
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 787,
                          "end": 793
                        }
                      ],
                      "start": 786,
                      "end": 794
                    },
                    "start": 781,
                    "end": 794
                  }
                ],
                "start": 780,
                "end": 795
              },
              "start": 779,
              "end": 795
            },
            "start": 777,
            "end": 795
          },
          "start": 776,
          "end": 795
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 761,
      "end": 797
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 807,
        "end": 812
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 816,
                "end": 817
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 818,
                      "end": 823
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 824,
                          "end": 830
                        }
                      ],
                      "start": 823,
                      "end": 831
                    },
                    "start": 818,
                    "end": 831
                  }
                ],
                "start": 817,
                "end": 832
              },
              "start": 816,
              "end": 832
            },
            "start": 814,
            "end": 832
          },
          "start": 813,
          "end": 832
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 798,
      "end": 834
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 853,
        "end": 858
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 862,
              "end": 865
            },
            "start": 860,
            "end": 865
          },
          "start": 859,
          "end": 865
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 867,
        "end": 870
      },
      "expression": false,
      "start": 844,
      "end": 870
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 881,
        "end": 886
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 891
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 892,
                      "end": 898
                    },
                    "typeArguments": null,
                    "start": 892,
                    "end": 898
                  }
                ],
                "start": 891,
                "end": 899
              },
              "start": 890,
              "end": 899
            },
            "start": 888,
            "end": 899
          },
          "start": 887,
          "end": 899
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 872,
      "end": 901
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 911,
        "end": 916
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 920,
                "end": 921
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 928
                    },
                    "typeArguments": null,
                    "start": 922,
                    "end": 928
                  }
                ],
                "start": 921,
                "end": 929
              },
              "start": 920,
              "end": 929
            },
            "start": 918,
            "end": 929
          },
          "start": 917,
          "end": 929
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 902,
      "end": 931
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 950,
        "end": 955
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 959,
              "end": 962
            },
            "start": 957,
            "end": 962
          },
          "start": 956,
          "end": 962
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 964,
        "end": 967
      },
      "expression": false,
      "start": 941,
      "end": 967
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 978,
        "end": 982
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 986,
                "end": 987
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 988,
                      "end": 994
                    },
                    "typeArguments": null,
                    "start": 988,
                    "end": 994
                  }
                ],
                "start": 987,
                "end": 995
              },
              "start": 986,
              "end": 995
            },
            "start": 984,
            "end": 995
          },
          "start": 983,
          "end": 995
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 969,
      "end": 997
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1011
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1015,
                "end": 1016
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1017,
                      "end": 1023
                    },
                    "typeArguments": null,
                    "start": 1017,
                    "end": 1023
                  }
                ],
                "start": 1016,
                "end": 1024
              },
              "start": 1015,
              "end": 1024
            },
            "start": 1013,
            "end": 1024
          },
          "start": 1012,
          "end": 1024
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 998,
      "end": 1026
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1045,
        "end": 1049
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1053,
              "end": 1056
            },
            "start": 1051,
            "end": 1056
          },
          "start": 1050,
          "end": 1056
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1058,
        "end": 1061
      },
      "expression": false,
      "start": 1036,
      "end": 1061
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1072,
        "end": 1076
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1087,
                "end": 1088
              },
              "typeArguments": null,
              "start": 1080,
              "end": 1088
            },
            "start": 1078,
            "end": 1088
          },
          "start": 1077,
          "end": 1088
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1063,
      "end": 1090
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1100,
        "end": 1104
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1115,
                "end": 1116
              },
              "typeArguments": null,
              "start": 1108,
              "end": 1116
            },
            "start": 1106,
            "end": 1116
          },
          "start": 1105,
          "end": 1116
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1091,
      "end": 1118
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1141
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1145,
              "end": 1148
            },
            "start": 1143,
            "end": 1148
          },
          "start": 1142,
          "end": 1148
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1150,
        "end": 1153
      },
      "expression": false,
      "start": 1128,
      "end": 1153
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1164,
        "end": 1168
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1179,
                "end": 1180
              },
              "typeArguments": null,
              "start": 1172,
              "end": 1180
            },
            "start": 1170,
            "end": 1180
          },
          "start": 1169,
          "end": 1180
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1155,
      "end": 1182
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1192,
        "end": 1196
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1207,
                "end": 1208
              },
              "typeArguments": null,
              "start": 1200,
              "end": 1208
            },
            "start": 1198,
            "end": 1208
          },
          "start": 1197,
          "end": 1208
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1183,
      "end": 1210
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1233
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1237,
              "end": 1240
            },
            "start": 1235,
            "end": 1240
          },
          "start": 1234,
          "end": 1240
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1242,
        "end": 1245
      },
      "expression": false,
      "start": 1220,
      "end": 1245
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1256,
        "end": 1260
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1264,
                "end": 1265
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1266,
                      "end": 1271
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1272,
                          "end": 1278
                        }
                      ],
                      "start": 1271,
                      "end": 1279
                    },
                    "start": 1266,
                    "end": 1279
                  }
                ],
                "start": 1265,
                "end": 1280
              },
              "start": 1264,
              "end": 1280
            },
            "start": 1262,
            "end": 1280
          },
          "start": 1261,
          "end": 1280
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1247,
      "end": 1282
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1292,
        "end": 1296
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1301
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1302,
                      "end": 1308
                    },
                    "typeArguments": null,
                    "start": 1302,
                    "end": 1308
                  }
                ],
                "start": 1301,
                "end": 1309
              },
              "start": 1300,
              "end": 1309
            },
            "start": 1298,
            "end": 1309
          },
          "start": 1297,
          "end": 1309
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1283,
      "end": 1311
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1327,
        "end": 1331
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1335,
              "end": 1338
            },
            "start": 1333,
            "end": 1338
          },
          "start": 1332,
          "end": 1338
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1340,
        "end": 1343
      },
      "expression": false,
      "start": 1318,
      "end": 1343
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1354,
        "end": 1358
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1362,
                "end": 1363
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1364,
                      "end": 1369
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1370,
                          "end": 1376
                        }
                      ],
                      "start": 1369,
                      "end": 1377
                    },
                    "start": 1364,
                    "end": 1377
                  }
                ],
                "start": 1363,
                "end": 1378
              },
              "start": 1362,
              "end": 1378
            },
            "start": 1360,
            "end": 1378
          },
          "start": 1359,
          "end": 1378
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1345,
      "end": 1380
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1390,
        "end": 1394
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1398,
                "end": 1399
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1400,
                      "end": 1406
                    },
                    "typeArguments": null,
                    "start": 1400,
                    "end": 1406
                  }
                ],
                "start": 1399,
                "end": 1407
              },
              "start": 1398,
              "end": 1407
            },
            "start": 1396,
            "end": 1407
          },
          "start": 1395,
          "end": 1407
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1381,
      "end": 1409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1458,
        "end": 1462
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1466,
              "end": 1469
            },
            "start": 1464,
            "end": 1469
          },
          "start": 1463,
          "end": 1469
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1471,
        "end": 1474
      },
      "expression": false,
      "start": 1449,
      "end": 1474
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1485,
        "end": 1490
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1494,
                "end": 1495
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1496,
                      "end": 1501
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1502,
                          "end": 1508
                        }
                      ],
                      "start": 1501,
                      "end": 1509
                    },
                    "start": 1496,
                    "end": 1509
                  }
                ],
                "start": 1495,
                "end": 1510
              },
              "start": 1494,
              "end": 1510
            },
            "start": 1492,
            "end": 1510
          },
          "start": 1491,
          "end": 1510
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1476,
      "end": 1512
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1522,
        "end": 1527
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1538,
                "end": 1539
              },
              "typeArguments": null,
              "start": 1531,
              "end": 1539
            },
            "start": 1529,
            "end": 1539
          },
          "start": 1528,
          "end": 1539
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1513,
      "end": 1541
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1557,
        "end": 1562
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1566,
              "end": 1569
            },
            "start": 1564,
            "end": 1569
          },
          "start": 1563,
          "end": 1569
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1571,
        "end": 1574
      },
      "expression": false,
      "start": 1548,
      "end": 1574
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1585,
        "end": 1590
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1594,
                "end": 1595
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1596,
                      "end": 1601
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1602,
                          "end": 1608
                        }
                      ],
                      "start": 1601,
                      "end": 1609
                    },
                    "start": 1596,
                    "end": 1609
                  }
                ],
                "start": 1595,
                "end": 1610
              },
              "start": 1594,
              "end": 1610
            },
            "start": 1592,
            "end": 1610
          },
          "start": 1591,
          "end": 1610
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1576,
      "end": 1612
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1622,
        "end": 1627
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1638,
                "end": 1639
              },
              "typeArguments": null,
              "start": 1631,
              "end": 1639
            },
            "start": 1629,
            "end": 1639
          },
          "start": 1628,
          "end": 1639
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1613,
      "end": 1641
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1657,
        "end": 1662
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1666,
              "end": 1669
            },
            "start": 1664,
            "end": 1669
          },
          "start": 1663,
          "end": 1669
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1671,
        "end": 1674
      },
      "expression": false,
      "start": 1648,
      "end": 1674
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1685,
        "end": 1690
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1695
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1696,
                      "end": 1702
                    },
                    "typeArguments": null,
                    "start": 1696,
                    "end": 1702
                  }
                ],
                "start": 1695,
                "end": 1703
              },
              "start": 1694,
              "end": 1703
            },
            "start": 1692,
            "end": 1703
          },
          "start": 1691,
          "end": 1703
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1676,
      "end": 1705
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1715,
        "end": 1720
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1724,
                "end": 1725
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1726,
                      "end": 1732
                    },
                    "typeArguments": null,
                    "start": 1726,
                    "end": 1732
                  }
                ],
                "start": 1725,
                "end": 1733
              },
              "start": 1724,
              "end": 1733
            },
            "start": 1722,
            "end": 1733
          },
          "start": 1721,
          "end": 1733
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1706,
      "end": 1735
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1751,
        "end": 1756
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1760,
              "end": 1763
            },
            "start": 1758,
            "end": 1763
          },
          "start": 1757,
          "end": 1763
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1765,
        "end": 1768
      },
      "expression": false,
      "start": 1742,
      "end": 1768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1779,
        "end": 1785
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1789,
                "end": 1791
              },
              "typeArguments": null,
              "start": 1789,
              "end": 1791
            },
            "start": 1787,
            "end": 1791
          },
          "start": 1786,
          "end": 1791
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1770,
      "end": 1793
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1803,
        "end": 1809
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1813,
                "end": 1814
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1815,
                      "end": 1821
                    },
                    "typeArguments": null,
                    "start": 1815,
                    "end": 1821
                  }
                ],
                "start": 1814,
                "end": 1822
              },
              "start": 1813,
              "end": 1822
            },
            "start": 1811,
            "end": 1822
          },
          "start": 1810,
          "end": 1822
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1794,
      "end": 1824
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1840,
        "end": 1846
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1850,
              "end": 1853
            },
            "start": 1848,
            "end": 1853
          },
          "start": 1847,
          "end": 1853
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1855,
        "end": 1858
      },
      "expression": false,
      "start": 1831,
      "end": 1858
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1869,
        "end": 1874
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1878,
                "end": 1879
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1880,
                      "end": 1886
                    },
                    "typeArguments": null,
                    "start": 1880,
                    "end": 1886
                  }
                ],
                "start": 1879,
                "end": 1887
              },
              "start": 1878,
              "end": 1887
            },
            "start": 1876,
            "end": 1887
          },
          "start": 1875,
          "end": 1887
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1860,
      "end": 1889
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1899,
        "end": 1904
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 1915,
                "end": 1916
              },
              "typeArguments": null,
              "start": 1908,
              "end": 1916
            },
            "start": 1906,
            "end": 1916
          },
          "start": 1905,
          "end": 1916
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1890,
      "end": 1918
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1934,
        "end": 1939
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 1943,
              "end": 1946
            },
            "start": 1941,
            "end": 1946
          },
          "start": 1940,
          "end": 1946
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1948,
        "end": 1951
      },
      "expression": false,
      "start": 1925,
      "end": 1951
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1962,
        "end": 1967
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 1971,
                "end": 1972
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1973,
                      "end": 1979
                    },
                    "typeArguments": null,
                    "start": 1973,
                    "end": 1979
                  }
                ],
                "start": 1972,
                "end": 1980
              },
              "start": 1971,
              "end": 1980
            },
            "start": 1969,
            "end": 1980
          },
          "start": 1968,
          "end": 1980
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1953,
      "end": 1982
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1992,
        "end": 1997
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "start": 2008,
                "end": 2009
              },
              "typeArguments": null,
              "start": 2001,
              "end": 2009
            },
            "start": 1999,
            "end": 2009
          },
          "start": 1998,
          "end": 2009
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1983,
      "end": 2011
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2027,
        "end": 2032
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSAnyKeyword",
              "start": 2036,
              "end": 2039
            },
            "start": 2034,
            "end": 2039
          },
          "start": 2033,
          "end": 2039
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2041,
        "end": 2044
      },
      "expression": false,
      "start": 2018,
      "end": 2044
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2044
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 335,
    "end": 340,
    "range": [
      335,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 345,
    "end": 352,
    "range": [
      345,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 353,
    "end": 358,
    "range": [
      353,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 359,
    "end": 365,
    "range": [
      359,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 374,
    "end": 385,
    "range": [
      374,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 394,
    "end": 400,
    "range": [
      394,
      400
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 401,
    "end": 405,
    "range": [
      401,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 412,
    "end": 417,
    "range": [
      412,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 422,
    "end": 429,
    "range": [
      422,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 444,
    "end": 455,
    "range": [
      444,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 471,
    "end": 475,
    "range": [
      471,
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
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 482,
    "end": 491,
    "range": [
      482,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 496,
    "end": 503,
    "range": [
      496,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 504,
    "end": 510,
    "range": [
      504,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 529,
    "end": 535,
    "range": [
      529,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
      538
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 540,
    "end": 549,
    "range": [
      540,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 550,
    "end": 552,
    "range": [
      550,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 559,
    "end": 562,
    "range": [
      559,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 565,
    "end": 572,
    "range": [
      565,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "Boolean",
    "start": 573,
    "end": 580,
    "range": [
      573,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 589,
    "end": 595,
    "range": [
      589,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596,
    "range": [
      595,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 600,
    "end": 603,
    "range": [
      600,
      603
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 609,
    "end": 612,
    "range": [
      609,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 615,
    "end": 622,
    "range": [
      615,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 623,
    "end": 628,
    "range": [
      623,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 645,
    "end": 651,
    "range": [
      645,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "new",
    "start": 664,
    "end": 667,
    "range": [
      664,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 670,
    "end": 677,
    "range": [
      670,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "RegExp",
    "start": 678,
    "end": 684,
    "range": [
      678,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 694,
    "end": 700,
    "range": [
      694,
      700
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 701,
    "end": 703,
    "range": [
      701,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 761,
    "end": 769,
    "range": [
      761,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 770,
    "end": 775,
    "range": [
      770,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 781,
    "end": 786,
    "range": [
      781,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 787,
    "end": 793,
    "range": [
      787,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796,
    "range": [
      795,
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
    "value": "function",
    "start": 798,
    "end": 806,
    "range": [
      798,
      806
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 807,
    "end": 812,
    "range": [
      807,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 813,
    "end": 814,
    "range": [
      813,
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
    "value": "B",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 818,
    "end": 823,
    "range": [
      818,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 824,
    "end": 830,
    "range": [
      824,
      830
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 844,
    "end": 852,
    "range": [
      844,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 853,
    "end": 858,
    "range": [
      853,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 862,
    "end": 865,
    "range": [
      862,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 872,
    "end": 880,
    "range": [
      872,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 881,
    "end": 886,
    "range": [
      881,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 892,
    "end": 898,
    "range": [
      892,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 902,
    "end": 910,
    "range": [
      902,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 911,
    "end": 916,
    "range": [
      911,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 922,
    "end": 928,
    "range": [
      922,
      928
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 941,
    "end": 949,
    "range": [
      941,
      949
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 950,
    "end": 955,
    "range": [
      950,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 959,
    "end": 962,
    "range": [
      959,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 969,
    "end": 977,
    "range": [
      969,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 978,
    "end": 982,
    "range": [
      978,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 983,
    "end": 984,
    "range": [
      983,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 988,
    "end": 994,
    "range": [
      988,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 995,
    "end": 996,
    "range": [
      995,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 998,
    "end": 1006,
    "range": [
      998,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1007,
    "end": 1011,
    "range": [
      1007,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1017,
    "end": 1023,
    "range": [
      1017,
      1023
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1036,
    "end": 1044,
    "range": [
      1036,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1045,
    "end": 1049,
    "range": [
      1045,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1053,
    "end": 1056,
    "range": [
      1053,
      1056
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1063,
    "end": 1071,
    "range": [
      1063,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1072,
    "end": 1076,
    "range": [
      1072,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1077,
    "end": 1078,
    "range": [
      1077,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1080,
    "end": 1086,
    "range": [
      1080,
      1086
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1091,
    "end": 1099,
    "range": [
      1091,
      1099
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1100,
    "end": 1104,
    "range": [
      1100,
      1104
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1104,
    "end": 1105,
    "range": [
      1104,
      1105
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1108,
    "end": 1114,
    "range": [
      1108,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1128,
    "end": 1136,
    "range": [
      1128,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1145,
    "end": 1148,
    "range": [
      1145,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1155,
    "end": 1163,
    "range": [
      1155,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1164,
    "end": 1168,
    "range": [
      1164,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1172,
    "end": 1178,
    "range": [
      1172,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1180,
    "end": 1181,
    "range": [
      1180,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1183,
    "end": 1191,
    "range": [
      1183,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1192,
    "end": 1196,
    "range": [
      1192,
      1196
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1196,
    "end": 1197,
    "range": [
      1196,
      1197
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1197,
    "end": 1198,
    "range": [
      1197,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1200,
    "end": 1206,
    "range": [
      1200,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1208,
    "end": 1209,
    "range": [
      1208,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1220,
    "end": 1228,
    "range": [
      1220,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 1229,
    "end": 1233,
    "range": [
      1229,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1237,
    "end": 1240,
    "range": [
      1237,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1247,
    "end": 1255,
    "range": [
      1247,
      1255
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1256,
    "end": 1260,
    "range": [
      1256,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1266,
    "end": 1271,
    "range": [
      1266,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1272,
    "end": 1278,
    "range": [
      1272,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1279,
    "end": 1280,
    "range": [
      1279,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1283,
    "end": 1291,
    "range": [
      1283,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1292,
    "end": 1296,
    "range": [
      1292,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1302,
    "end": 1308,
    "range": [
      1302,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1308,
    "end": 1309,
    "range": [
      1308,
      1309
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1310,
    "end": 1311,
    "range": [
      1310,
      1311
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1318,
    "end": 1326,
    "range": [
      1318,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1327,
    "end": 1331,
    "range": [
      1327,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1335,
    "end": 1338,
    "range": [
      1335,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1345,
    "end": 1353,
    "range": [
      1345,
      1353
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1354,
    "end": 1358,
    "range": [
      1354,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
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
    "value": "B",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1364,
    "end": 1369,
    "range": [
      1364,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1369,
    "end": 1370,
    "range": [
      1369,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1370,
    "end": 1376,
    "range": [
      1370,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1381,
    "end": 1389,
    "range": [
      1381,
      1389
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1390,
    "end": 1394,
    "range": [
      1390,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1396,
    "end": 1397,
    "range": [
      1396,
      1397
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1400,
    "end": 1406,
    "range": [
      1400,
      1406
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1449,
    "end": 1457,
    "range": [
      1449,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1458,
    "end": 1462,
    "range": [
      1458,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1466,
    "end": 1469,
    "range": [
      1466,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1476,
    "end": 1484,
    "range": [
      1476,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1485,
    "end": 1490,
    "range": [
      1485,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1490,
    "end": 1491,
    "range": [
      1490,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1496,
    "end": 1501,
    "range": [
      1496,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1502,
    "end": 1508,
    "range": [
      1502,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1513,
    "end": 1521,
    "range": [
      1513,
      1521
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1522,
    "end": 1527,
    "range": [
      1522,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1531,
    "end": 1537,
    "range": [
      1531,
      1537
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1548,
    "end": 1556,
    "range": [
      1548,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1557,
    "end": 1562,
    "range": [
      1557,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1566,
    "end": 1569,
    "range": [
      1566,
      1569
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1569,
    "end": 1570,
    "range": [
      1569,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1576,
    "end": 1584,
    "range": [
      1576,
      1584
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1585,
    "end": 1590,
    "range": [
      1585,
      1590
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1594,
    "end": 1595,
    "range": [
      1594,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 1596,
    "end": 1601,
    "range": [
      1596,
      1601
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1602,
    "end": 1608,
    "range": [
      1602,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1611,
    "end": 1612,
    "range": [
      1611,
      1612
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1613,
    "end": 1621,
    "range": [
      1613,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1622,
    "end": 1627,
    "range": [
      1622,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1631,
    "end": 1637,
    "range": [
      1631,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1648,
    "end": 1656,
    "range": [
      1648,
      1656
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1657,
    "end": 1662,
    "range": [
      1657,
      1662
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1662,
    "end": 1663,
    "range": [
      1662,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1666,
    "end": 1669,
    "range": [
      1666,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1676,
    "end": 1684,
    "range": [
      1676,
      1684
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1685,
    "end": 1690,
    "range": [
      1685,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1691,
    "end": 1692,
    "range": [
      1691,
      1692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1696,
    "end": 1702,
    "range": [
      1696,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1704,
    "end": 1705,
    "range": [
      1704,
      1705
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1706,
    "end": 1714,
    "range": [
      1706,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1715,
    "end": 1720,
    "range": [
      1715,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1726,
    "end": 1732,
    "range": [
      1726,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1742,
    "end": 1750,
    "range": [
      1742,
      1750
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1751,
    "end": 1756,
    "range": [
      1751,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1760,
    "end": 1763,
    "range": [
      1760,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1770,
    "end": 1778,
    "range": [
      1770,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1779,
    "end": 1785,
    "range": [
      1779,
      1785
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1785,
    "end": 1786,
    "range": [
      1785,
      1786
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1789,
    "end": 1791,
    "range": [
      1789,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1792,
    "end": 1793,
    "range": [
      1792,
      1793
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1794,
    "end": 1802,
    "range": [
      1794,
      1802
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1803,
    "end": 1809,
    "range": [
      1803,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1814,
    "end": 1815,
    "range": [
      1814,
      1815
    ]
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 1815,
    "end": 1821,
    "range": [
      1815,
      1821
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1831,
    "end": 1839,
    "range": [
      1831,
      1839
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1840,
    "end": 1846,
    "range": [
      1840,
      1846
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1846,
    "end": 1847,
    "range": [
      1846,
      1847
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1850,
    "end": 1853,
    "range": [
      1850,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1860,
    "end": 1868,
    "range": [
      1860,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1869,
    "end": 1874,
    "range": [
      1869,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1880,
    "end": 1886,
    "range": [
      1880,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1890,
    "end": 1898,
    "range": [
      1890,
      1898
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1899,
    "end": 1904,
    "range": [
      1899,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1908,
    "end": 1914,
    "range": [
      1908,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1915,
    "end": 1916,
    "range": [
      1915,
      1916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1917,
    "end": 1918,
    "range": [
      1917,
      1918
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1925,
    "end": 1933,
    "range": [
      1925,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1934,
    "end": 1939,
    "range": [
      1934,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1943,
    "end": 1946,
    "range": [
      1943,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1946,
    "end": 1947,
    "range": [
      1946,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1953,
    "end": 1961,
    "range": [
      1953,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1962,
    "end": 1967,
    "range": [
      1962,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
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
    "value": "I",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 1973,
    "end": 1979,
    "range": [
      1973,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1981,
    "end": 1982,
    "range": [
      1981,
      1982
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1983,
    "end": 1991,
    "range": [
      1983,
      1991
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1992,
    "end": 1997,
    "range": [
      1992,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2001,
    "end": 2007,
    "range": [
      2001,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2018,
    "end": 2026,
    "range": [
      2018,
      2026
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2027,
    "end": 2032,
    "range": [
      2027,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2036,
    "end": 2039,
    "range": [
      2036,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  }
]
```
