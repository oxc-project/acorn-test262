__ESTREE_TEST__:PASS:
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
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 354
              },
              "typeArguments": null,
              "start": 353,
              "end": 354
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 354
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 356,
              "end": 357
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 371
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 372,
                    "end": 378
                  }
                ],
                "start": 371,
                "end": 379
              },
              "start": 366,
              "end": 379
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 356,
            "end": 379
          }
        ],
        "start": 342,
        "end": 380
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
              "start": 387,
              "end": 398
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
                        "start": 402,
                        "end": 403
                      },
                      "typeArguments": null,
                      "start": 402,
                      "end": 403
                    },
                    "start": 400,
                    "end": 403
                  },
                  "start": 399,
                  "end": 403
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 408,
                        "end": 409
                      },
                      "typeArguments": null,
                      "start": 408,
                      "end": 409
                    },
                    "start": 406,
                    "end": 409
                  },
                  "start": 405,
                  "end": 409
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
                      "start": 420,
                      "end": 424
                    },
                    "start": 413,
                    "end": 425
                  }
                ],
                "start": 411,
                "end": 427
              },
              "expression": false,
              "start": 398,
              "end": 427
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 387,
            "end": 427
          }
        ],
        "start": 381,
        "end": 429
      },
      "abstract": false,
      "declare": false,
      "start": 335,
      "end": 429
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
        "start": 437,
        "end": 438
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
              "start": 439,
              "end": 440
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "typeArguments": null,
              "start": 449,
              "end": 450
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 439,
            "end": 450
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 452,
              "end": 453
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 468
              },
              "typeArguments": null,
              "start": 462,
              "end": 468
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 452,
            "end": 468
          }
        ],
        "start": 438,
        "end": 469
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
              "start": 476,
              "end": 487
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
                        "start": 491,
                        "end": 492
                      },
                      "typeArguments": null,
                      "start": 491,
                      "end": 492
                    },
                    "start": 489,
                    "end": 492
                  },
                  "start": 488,
                  "end": 492
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 498
                      },
                      "typeArguments": null,
                      "start": 497,
                      "end": 498
                    },
                    "start": 495,
                    "end": 498
                  },
                  "start": 494,
                  "end": 498
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
                      "start": 509,
                      "end": 513
                    },
                    "start": 502,
                    "end": 514
                  }
                ],
                "start": 500,
                "end": 516
              },
              "expression": false,
              "start": 487,
              "end": 516
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 476,
            "end": 516
          }
        ],
        "start": 470,
        "end": 518
      },
      "abstract": false,
      "declare": false,
      "start": 431,
      "end": 518
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 527
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
              "start": 528,
              "end": 529
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 538,
                "end": 539
              },
              "typeArguments": null,
              "start": 538,
              "end": 539
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 539
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 542
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 557
              },
              "typeArguments": null,
              "start": 551,
              "end": 557
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 541,
            "end": 557
          }
        ],
        "start": 527,
        "end": 558
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
              "start": 565,
              "end": 576
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 587
                      },
                      "typeArguments": null,
                      "start": 586,
                      "end": 587
                    },
                    "start": 584,
                    "end": 587
                  },
                  "start": 583,
                  "end": 587
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
                      "start": 598,
                      "end": 602
                    },
                    "start": 591,
                    "end": 603
                  }
                ],
                "start": 589,
                "end": 605
              },
              "expression": false,
              "start": 576,
              "end": 605
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 565,
            "end": 605
          }
        ],
        "start": 559,
        "end": 607
      },
      "abstract": false,
      "declare": false,
      "start": 520,
      "end": 607
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 619,
        "end": 620
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
              "start": 621,
              "end": 622
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 631,
                "end": 632
              },
              "typeArguments": null,
              "start": 631,
              "end": 632
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 632
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 634,
              "end": 635
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null,
                "start": 644,
                "end": 650
              },
              "typeArguments": null,
              "start": 644,
              "end": 650
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 634,
            "end": 650
          }
        ],
        "start": 620,
        "end": 651
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
                      "start": 665,
                      "end": 666
                    },
                    "typeArguments": null,
                    "start": 665,
                    "end": 666
                  },
                  "start": 663,
                  "end": 666
                },
                "start": 662,
                "end": 666
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 671,
                      "end": 672
                    },
                    "typeArguments": null,
                    "start": 671,
                    "end": 672
                  },
                  "start": 669,
                  "end": 672
                },
                "start": 668,
                "end": 672
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 675,
                "end": 681
              },
              "start": 673,
              "end": 681
            },
            "start": 658,
            "end": 682
          }
        ],
        "start": 652,
        "end": 684
      },
      "declare": false,
      "start": 609,
      "end": 684
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 696,
        "end": 698
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
                    "start": 709,
                    "end": 710
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
                    },
                    "typeArguments": null,
                    "start": 719,
                    "end": 720
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 709,
                  "end": 720
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 722,
                    "end": 723
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Boolean",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 732,
                      "end": 739
                    },
                    "typeArguments": null,
                    "start": 732,
                    "end": 739
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 722,
                  "end": 739
                }
              ],
              "start": 708,
              "end": 740
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
                      "start": 744,
                      "end": 745
                    },
                    "typeArguments": null,
                    "start": 744,
                    "end": 745
                  },
                  "start": 742,
                  "end": 745
                },
                "start": 741,
                "end": 745
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
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 750,
                      "end": 751
                    },
                    "typeArguments": null,
                    "start": 750,
                    "end": 751
                  },
                  "start": 748,
                  "end": 751
                },
                "start": 747,
                "end": 751
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 754,
                "end": 760
              },
              "start": 752,
              "end": 760
            },
            "start": 705,
            "end": 761
          }
        ],
        "start": 699,
        "end": 763
      },
      "declare": false,
      "start": 686,
      "end": 763
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
                            "start": 778,
                            "end": 779
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 788,
                              "end": 789
                            },
                            "typeArguments": null,
                            "start": 788,
                            "end": 789
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 778,
                          "end": 789
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 791,
                            "end": 792
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Array",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 801,
                              "end": 806
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 807,
                                  "end": 813
                                }
                              ],
                              "start": 806,
                              "end": 814
                            },
                            "start": 801,
                            "end": 814
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 791,
                          "end": 814
                        }
                      ],
                      "start": 777,
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
                              "start": 819,
                              "end": 820
                            },
                            "typeArguments": null,
                            "start": 819,
                            "end": 820
                          },
                          "start": 817,
                          "end": 820
                        },
                        "start": 816,
                        "end": 820
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 825,
                              "end": 826
                            },
                            "typeArguments": null,
                            "start": 825,
                            "end": 826
                          },
                          "start": 823,
                          "end": 826
                        },
                        "start": 822,
                        "end": 826
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 829,
                        "end": 835
                      },
                      "start": 827,
                      "end": 835
                    },
                    "start": 774,
                    "end": 835
                  }
                ],
                "start": 772,
                "end": 837
              },
              "start": 770,
              "end": 837
            },
            "start": 769,
            "end": 837
          },
          "init": null,
          "definite": false,
          "start": 769,
          "end": 837
        }
      ],
      "declare": false,
      "start": 765,
      "end": 837
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
            "start": 842,
            "end": 843
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
                  "start": 848,
                  "end": 851
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
                          "start": 852,
                          "end": 853
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 862,
                            "end": 863
                          },
                          "typeArguments": null,
                          "start": 862,
                          "end": 863
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 852,
                        "end": 863
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 865,
                          "end": 866
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 875,
                            "end": 881
                          },
                          "typeArguments": null,
                          "start": 875,
                          "end": 881
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 865,
                        "end": 881
                      }
                    ],
                    "start": 851,
                    "end": 882
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
                            "start": 886,
                            "end": 887
                          },
                          "typeArguments": null,
                          "start": 886,
                          "end": 887
                        },
                        "start": 884,
                        "end": 887
                      },
                      "start": 883,
                      "end": 887
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 892,
                            "end": 893
                          },
                          "typeArguments": null,
                          "start": 892,
                          "end": 893
                        },
                        "start": 890,
                        "end": 893
                      },
                      "start": 889,
                      "end": 893
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
                          "start": 904,
                          "end": 906
                        },
                        "start": 897,
                        "end": 907
                      }
                    ],
                    "start": 895,
                    "end": 909
                  },
                  "expression": false,
                  "start": 851,
                  "end": 909
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 848,
                "end": 909
              }
            ],
            "start": 846,
            "end": 911
          },
          "definite": false,
          "start": 842,
          "end": 911
        }
      ],
      "declare": false,
      "start": 838,
      "end": 912
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 978
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
                "start": 982,
                "end": 983
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
                      "start": 984,
                      "end": 989
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 990,
                          "end": 996
                        }
                      ],
                      "start": 989,
                      "end": 997
                    },
                    "start": 984,
                    "end": 997
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 999,
                      "end": 1004
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1005,
                          "end": 1011
                        }
                      ],
                      "start": 1004,
                      "end": 1012
                    },
                    "start": 999,
                    "end": 1012
                  }
                ],
                "start": 983,
                "end": 1013
              },
              "start": 982,
              "end": 1013
            },
            "start": 980,
            "end": 1013
          },
          "start": 979,
          "end": 1013
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 964,
      "end": 1015
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1030
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
                "start": 1034,
                "end": 1035
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
                      "start": 1036,
                      "end": 1041
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1042,
                          "end": 1048
                        }
                      ],
                      "start": 1041,
                      "end": 1049
                    },
                    "start": 1036,
                    "end": 1049
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1051,
                      "end": 1056
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1057,
                          "end": 1063
                        }
                      ],
                      "start": 1056,
                      "end": 1064
                    },
                    "start": 1051,
                    "end": 1064
                  }
                ],
                "start": 1035,
                "end": 1065
              },
              "start": 1034,
              "end": 1065
            },
            "start": 1032,
            "end": 1065
          },
          "start": 1031,
          "end": 1065
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1016,
      "end": 1067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1086,
        "end": 1091
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
              "start": 1095,
              "end": 1098
            },
            "start": 1093,
            "end": 1098
          },
          "start": 1092,
          "end": 1098
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1100,
        "end": 1103
      },
      "expression": false,
      "start": 1077,
      "end": 1103
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1119
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
                "start": 1123,
                "end": 1124
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
                      "start": 1125,
                      "end": 1131
                    },
                    "typeArguments": null,
                    "start": 1125,
                    "end": 1131
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1133,
                      "end": 1139
                    },
                    "typeArguments": null,
                    "start": 1133,
                    "end": 1139
                  }
                ],
                "start": 1124,
                "end": 1140
              },
              "start": 1123,
              "end": 1140
            },
            "start": 1121,
            "end": 1140
          },
          "start": 1120,
          "end": 1140
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1105,
      "end": 1142
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1157
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
                "start": 1161,
                "end": 1162
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
                      "start": 1163,
                      "end": 1169
                    },
                    "typeArguments": null,
                    "start": 1163,
                    "end": 1169
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1171,
                      "end": 1177
                    },
                    "typeArguments": null,
                    "start": 1171,
                    "end": 1177
                  }
                ],
                "start": 1162,
                "end": 1178
              },
              "start": 1161,
              "end": 1178
            },
            "start": 1159,
            "end": 1178
          },
          "start": 1158,
          "end": 1178
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1143,
      "end": 1180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1199,
        "end": 1204
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
              "start": 1208,
              "end": 1211
            },
            "start": 1206,
            "end": 1211
          },
          "start": 1205,
          "end": 1211
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1213,
        "end": 1216
      },
      "expression": false,
      "start": 1190,
      "end": 1216
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1227,
        "end": 1231
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
                "start": 1235,
                "end": 1236
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
                      "start": 1237,
                      "end": 1243
                    },
                    "typeArguments": null,
                    "start": 1237,
                    "end": 1243
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1245,
                      "end": 1251
                    },
                    "typeArguments": null,
                    "start": 1245,
                    "end": 1251
                  }
                ],
                "start": 1236,
                "end": 1252
              },
              "start": 1235,
              "end": 1252
            },
            "start": 1233,
            "end": 1252
          },
          "start": 1232,
          "end": 1252
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1218,
      "end": 1254
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1264,
        "end": 1268
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
                "start": 1272,
                "end": 1273
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
                      "start": 1274,
                      "end": 1280
                    },
                    "typeArguments": null,
                    "start": 1274,
                    "end": 1280
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1282,
                      "end": 1288
                    },
                    "typeArguments": null,
                    "start": 1282,
                    "end": 1288
                  }
                ],
                "start": 1273,
                "end": 1289
              },
              "start": 1272,
              "end": 1289
            },
            "start": 1270,
            "end": 1289
          },
          "start": 1269,
          "end": 1289
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1255,
      "end": 1291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1314
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
              "start": 1318,
              "end": 1321
            },
            "start": 1316,
            "end": 1321
          },
          "start": 1315,
          "end": 1321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1323,
        "end": 1326
      },
      "expression": false,
      "start": 1301,
      "end": 1326
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1341
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
                "start": 1352,
                "end": 1353
              },
              "typeArguments": null,
              "start": 1345,
              "end": 1353
            },
            "start": 1343,
            "end": 1353
          },
          "start": 1342,
          "end": 1353
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1328,
      "end": 1355
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1365,
        "end": 1369
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
                "start": 1380,
                "end": 1381
              },
              "typeArguments": null,
              "start": 1373,
              "end": 1381
            },
            "start": 1371,
            "end": 1381
          },
          "start": 1370,
          "end": 1381
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1356,
      "end": 1383
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1402,
        "end": 1406
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
              "start": 1410,
              "end": 1413
            },
            "start": 1408,
            "end": 1413
          },
          "start": 1407,
          "end": 1413
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1415,
        "end": 1418
      },
      "expression": false,
      "start": 1393,
      "end": 1418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1429,
        "end": 1433
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
                "start": 1444,
                "end": 1445
              },
              "typeArguments": null,
              "start": 1437,
              "end": 1445
            },
            "start": 1435,
            "end": 1445
          },
          "start": 1434,
          "end": 1445
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1420,
      "end": 1447
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1457,
        "end": 1461
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
                "start": 1472,
                "end": 1473
              },
              "typeArguments": null,
              "start": 1465,
              "end": 1473
            },
            "start": 1463,
            "end": 1473
          },
          "start": 1462,
          "end": 1473
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1448,
      "end": 1475
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1494,
        "end": 1498
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
              "start": 1502,
              "end": 1505
            },
            "start": 1500,
            "end": 1505
          },
          "start": 1499,
          "end": 1505
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1507,
        "end": 1510
      },
      "expression": false,
      "start": 1485,
      "end": 1510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1521,
        "end": 1526
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
                "start": 1530,
                "end": 1531
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
                      "start": 1532,
                      "end": 1538
                    },
                    "typeArguments": null,
                    "start": 1532,
                    "end": 1538
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1540,
                      "end": 1546
                    },
                    "typeArguments": null,
                    "start": 1540,
                    "end": 1546
                  }
                ],
                "start": 1531,
                "end": 1547
              },
              "start": 1530,
              "end": 1547
            },
            "start": 1528,
            "end": 1547
          },
          "start": 1527,
          "end": 1547
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1512,
      "end": 1549
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1559,
        "end": 1564
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1568,
                "end": 1569
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
                      "start": 1570,
                      "end": 1576
                    },
                    "typeArguments": null,
                    "start": 1570,
                    "end": 1576
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1578,
                      "end": 1584
                    },
                    "typeArguments": null,
                    "start": 1578,
                    "end": 1584
                  }
                ],
                "start": 1569,
                "end": 1585
              },
              "start": 1568,
              "end": 1585
            },
            "start": 1566,
            "end": 1585
          },
          "start": 1565,
          "end": 1585
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1550,
      "end": 1587
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1603,
        "end": 1608
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
              "start": 1612,
              "end": 1615
            },
            "start": 1610,
            "end": 1615
          },
          "start": 1609,
          "end": 1615
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1617,
        "end": 1620
      },
      "expression": false,
      "start": 1594,
      "end": 1620
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1631,
        "end": 1636
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
                "start": 1640,
                "end": 1641
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
                      "start": 1642,
                      "end": 1648
                    },
                    "typeArguments": null,
                    "start": 1642,
                    "end": 1648
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1650,
                      "end": 1656
                    },
                    "typeArguments": null,
                    "start": 1650,
                    "end": 1656
                  }
                ],
                "start": 1641,
                "end": 1657
              },
              "start": 1640,
              "end": 1657
            },
            "start": 1638,
            "end": 1657
          },
          "start": 1637,
          "end": 1657
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1622,
      "end": 1659
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1669,
        "end": 1674
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
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1678,
                "end": 1679
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 1680,
                    "end": 1683
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1685,
                      "end": 1691
                    },
                    "typeArguments": null,
                    "start": 1685,
                    "end": 1691
                  }
                ],
                "start": 1679,
                "end": 1692
              },
              "start": 1678,
              "end": 1692
            },
            "start": 1676,
            "end": 1692
          },
          "start": 1675,
          "end": 1692
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1660,
      "end": 1694
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1710,
        "end": 1715
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
              "start": 1719,
              "end": 1722
            },
            "start": 1717,
            "end": 1722
          },
          "start": 1716,
          "end": 1722
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1724,
        "end": 1727
      },
      "expression": false,
      "start": 1701,
      "end": 1727
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1738,
        "end": 1742
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
                "start": 1746,
                "end": 1747
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
                      "start": 1748,
                      "end": 1753
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1754,
                          "end": 1760
                        }
                      ],
                      "start": 1753,
                      "end": 1761
                    },
                    "start": 1748,
                    "end": 1761
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1763,
                      "end": 1768
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1769,
                          "end": 1775
                        }
                      ],
                      "start": 1768,
                      "end": 1776
                    },
                    "start": 1763,
                    "end": 1776
                  }
                ],
                "start": 1747,
                "end": 1777
              },
              "start": 1746,
              "end": 1777
            },
            "start": 1744,
            "end": 1777
          },
          "start": 1743,
          "end": 1777
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1729,
      "end": 1779
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1789,
        "end": 1793
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
                "start": 1797,
                "end": 1798
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
                      "start": 1799,
                      "end": 1805
                    },
                    "typeArguments": null,
                    "start": 1799,
                    "end": 1805
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1807,
                      "end": 1813
                    },
                    "typeArguments": null,
                    "start": 1807,
                    "end": 1813
                  }
                ],
                "start": 1798,
                "end": 1814
              },
              "start": 1797,
              "end": 1814
            },
            "start": 1795,
            "end": 1814
          },
          "start": 1794,
          "end": 1814
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1780,
      "end": 1816
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1832,
        "end": 1836
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
              "start": 1840,
              "end": 1843
            },
            "start": 1838,
            "end": 1843
          },
          "start": 1837,
          "end": 1843
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1845,
        "end": 1848
      },
      "expression": false,
      "start": 1823,
      "end": 1848
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1859,
        "end": 1863
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
                "start": 1867,
                "end": 1868
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
                      "start": 1869,
                      "end": 1874
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1875,
                          "end": 1881
                        }
                      ],
                      "start": 1874,
                      "end": 1882
                    },
                    "start": 1869,
                    "end": 1882
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1884,
                      "end": 1889
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1890,
                          "end": 1896
                        }
                      ],
                      "start": 1889,
                      "end": 1897
                    },
                    "start": 1884,
                    "end": 1897
                  }
                ],
                "start": 1868,
                "end": 1898
              },
              "start": 1867,
              "end": 1898
            },
            "start": 1865,
            "end": 1898
          },
          "start": 1864,
          "end": 1898
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1850,
      "end": 1900
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1910,
        "end": 1914
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
                "start": 1918,
                "end": 1919
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
                      "start": 1920,
                      "end": 1926
                    },
                    "typeArguments": null,
                    "start": 1920,
                    "end": 1926
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1928,
                      "end": 1934
                    },
                    "typeArguments": null,
                    "start": 1928,
                    "end": 1934
                  }
                ],
                "start": 1919,
                "end": 1935
              },
              "start": 1918,
              "end": 1935
            },
            "start": 1916,
            "end": 1935
          },
          "start": 1915,
          "end": 1935
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1901,
      "end": 1937
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1986,
        "end": 1990
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
              "start": 1994,
              "end": 1997
            },
            "start": 1992,
            "end": 1997
          },
          "start": 1991,
          "end": 1997
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1999,
        "end": 2002
      },
      "expression": false,
      "start": 1977,
      "end": 2002
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2013,
        "end": 2018
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
                "start": 2022,
                "end": 2023
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
                      "start": 2024,
                      "end": 2029
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2030,
                          "end": 2036
                        }
                      ],
                      "start": 2029,
                      "end": 2037
                    },
                    "start": 2024,
                    "end": 2037
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2039,
                      "end": 2044
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2045,
                          "end": 2051
                        }
                      ],
                      "start": 2044,
                      "end": 2052
                    },
                    "start": 2039,
                    "end": 2052
                  }
                ],
                "start": 2023,
                "end": 2053
              },
              "start": 2022,
              "end": 2053
            },
            "start": 2020,
            "end": 2053
          },
          "start": 2019,
          "end": 2053
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2004,
      "end": 2055
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2065,
        "end": 2070
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
                "start": 2081,
                "end": 2082
              },
              "typeArguments": null,
              "start": 2074,
              "end": 2082
            },
            "start": 2072,
            "end": 2082
          },
          "start": 2071,
          "end": 2082
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2056,
      "end": 2084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2100,
        "end": 2105
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
              "start": 2109,
              "end": 2112
            },
            "start": 2107,
            "end": 2112
          },
          "start": 2106,
          "end": 2112
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2114,
        "end": 2117
      },
      "expression": false,
      "start": 2091,
      "end": 2117
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2128,
        "end": 2133
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
                "start": 2137,
                "end": 2138
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
                      "start": 2139,
                      "end": 2144
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2145,
                          "end": 2151
                        }
                      ],
                      "start": 2144,
                      "end": 2152
                    },
                    "start": 2139,
                    "end": 2152
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2154,
                      "end": 2159
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2160,
                          "end": 2166
                        }
                      ],
                      "start": 2159,
                      "end": 2167
                    },
                    "start": 2154,
                    "end": 2167
                  }
                ],
                "start": 2138,
                "end": 2168
              },
              "start": 2137,
              "end": 2168
            },
            "start": 2135,
            "end": 2168
          },
          "start": 2134,
          "end": 2168
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2119,
      "end": 2170
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2180,
        "end": 2185
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
                "start": 2196,
                "end": 2197
              },
              "typeArguments": null,
              "start": 2189,
              "end": 2197
            },
            "start": 2187,
            "end": 2197
          },
          "start": 2186,
          "end": 2197
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2171,
      "end": 2199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2215,
        "end": 2220
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
              "start": 2224,
              "end": 2227
            },
            "start": 2222,
            "end": 2227
          },
          "start": 2221,
          "end": 2227
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2229,
        "end": 2232
      },
      "expression": false,
      "start": 2206,
      "end": 2232
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2243,
        "end": 2248
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
                "start": 2252,
                "end": 2253
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
                      "start": 2254,
                      "end": 2260
                    },
                    "typeArguments": null,
                    "start": 2254,
                    "end": 2260
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2262,
                      "end": 2268
                    },
                    "typeArguments": null,
                    "start": 2262,
                    "end": 2268
                  }
                ],
                "start": 2253,
                "end": 2269
              },
              "start": 2252,
              "end": 2269
            },
            "start": 2250,
            "end": 2269
          },
          "start": 2249,
          "end": 2269
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2234,
      "end": 2271
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2281,
        "end": 2286
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
                "start": 2290,
                "end": 2291
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
                      "start": 2292,
                      "end": 2298
                    },
                    "typeArguments": null,
                    "start": 2292,
                    "end": 2298
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2300,
                      "end": 2306
                    },
                    "typeArguments": null,
                    "start": 2300,
                    "end": 2306
                  }
                ],
                "start": 2291,
                "end": 2307
              },
              "start": 2290,
              "end": 2307
            },
            "start": 2288,
            "end": 2307
          },
          "start": 2287,
          "end": 2307
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2272,
      "end": 2309
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2325,
        "end": 2330
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
              "start": 2334,
              "end": 2337
            },
            "start": 2332,
            "end": 2337
          },
          "start": 2331,
          "end": 2337
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2339,
        "end": 2342
      },
      "expression": false,
      "start": 2316,
      "end": 2342
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2353,
        "end": 2359
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
                "start": 2363,
                "end": 2365
              },
              "typeArguments": null,
              "start": 2363,
              "end": 2365
            },
            "start": 2361,
            "end": 2365
          },
          "start": 2360,
          "end": 2365
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2344,
      "end": 2367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2377,
        "end": 2383
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
                "start": 2387,
                "end": 2388
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
                      "start": 2389,
                      "end": 2395
                    },
                    "typeArguments": null,
                    "start": 2389,
                    "end": 2395
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2397,
                      "end": 2403
                    },
                    "typeArguments": null,
                    "start": 2397,
                    "end": 2403
                  }
                ],
                "start": 2388,
                "end": 2404
              },
              "start": 2387,
              "end": 2404
            },
            "start": 2385,
            "end": 2404
          },
          "start": 2384,
          "end": 2404
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2368,
      "end": 2406
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 2422,
        "end": 2428
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
              "start": 2432,
              "end": 2435
            },
            "start": 2430,
            "end": 2435
          },
          "start": 2429,
          "end": 2435
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2437,
        "end": 2440
      },
      "expression": false,
      "start": 2413,
      "end": 2440
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2451,
        "end": 2456
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
                "start": 2460,
                "end": 2461
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
                      "start": 2462,
                      "end": 2468
                    },
                    "typeArguments": null,
                    "start": 2462,
                    "end": 2468
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2470,
                      "end": 2476
                    },
                    "typeArguments": null,
                    "start": 2470,
                    "end": 2476
                  }
                ],
                "start": 2461,
                "end": 2477
              },
              "start": 2460,
              "end": 2477
            },
            "start": 2458,
            "end": 2477
          },
          "start": 2457,
          "end": 2477
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2442,
      "end": 2479
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2489,
        "end": 2494
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
                "start": 2505,
                "end": 2506
              },
              "typeArguments": null,
              "start": 2498,
              "end": 2506
            },
            "start": 2496,
            "end": 2506
          },
          "start": 2495,
          "end": 2506
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2480,
      "end": 2508
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 2524,
        "end": 2529
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
              "start": 2533,
              "end": 2536
            },
            "start": 2531,
            "end": 2536
          },
          "start": 2530,
          "end": 2536
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2538,
        "end": 2541
      },
      "expression": false,
      "start": 2515,
      "end": 2541
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2552,
        "end": 2557
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
                "start": 2561,
                "end": 2562
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
                      "start": 2563,
                      "end": 2569
                    },
                    "typeArguments": null,
                    "start": 2563,
                    "end": 2569
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2571,
                      "end": 2577
                    },
                    "typeArguments": null,
                    "start": 2571,
                    "end": 2577
                  }
                ],
                "start": 2562,
                "end": 2578
              },
              "start": 2561,
              "end": 2578
            },
            "start": 2559,
            "end": 2578
          },
          "start": 2558,
          "end": 2578
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2543,
      "end": 2580
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2590,
        "end": 2595
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
                "start": 2606,
                "end": 2607
              },
              "typeArguments": null,
              "start": 2599,
              "end": 2607
            },
            "start": 2597,
            "end": 2607
          },
          "start": 2596,
          "end": 2607
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2581,
      "end": 2609
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2625,
        "end": 2630
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
              "start": 2634,
              "end": 2637
            },
            "start": 2632,
            "end": 2637
          },
          "start": 2631,
          "end": 2637
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2639,
        "end": 2642
      },
      "expression": false,
      "start": 2616,
      "end": 2642
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 335,
  "end": 2642
}
```
