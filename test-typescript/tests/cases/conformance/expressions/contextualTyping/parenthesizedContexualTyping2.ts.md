parenthesizedContexualTyping2.ts
```json
{
  "type": "Program",
  "start": 358,
  "end": 2114,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 358,
      "end": 406,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 371,
        "decorators": [],
        "name": "FuncType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 374,
        "end": 405,
        "params": [
          {
            "type": "Identifier",
            "start": 375,
            "end": 392,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 392,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 378,
                "end": 392,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 382,
                    "end": 386,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 383,
                      "end": 386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 385,
                        "end": 386,
                        "typeName": {
                          "type": "Identifier",
                          "start": 385,
                          "end": 386,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 388,
                  "end": 392,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 391,
                    "end": 392,
                    "typeName": {
                      "type": "Identifier",
                      "start": 391,
                      "end": 392,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 378,
                  "end": 381,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 379,
                      "end": 380,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 380,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      },
                      "out": false
                    }
                  ]
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 394,
          "end": 405,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 397,
            "end": 405,
            "exprName": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 408,
      "end": 446,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 420,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 424,
          "end": 435,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 425,
            "end": 435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 427,
              "end": 435,
              "typeName": {
                "type": "Identifier",
                "start": 427,
                "end": 435,
                "decorators": [],
                "name": "FuncType",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 437,
          "end": 441,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 441,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 442,
        "end": 445,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 444,
          "end": 445,
          "typeName": {
            "type": "Identifier",
            "start": 444,
            "end": 445,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 422,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 447,
      "end": 498,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 459,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 463,
          "end": 474,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 464,
            "end": 474,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 466,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 466,
                "end": 474,
                "decorators": [],
                "name": "FuncType",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 476,
          "end": 487,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 487,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 479,
              "end": 487,
              "typeName": {
                "type": "Identifier",
                "start": 479,
                "end": 487,
                "decorators": [],
                "name": "FuncType",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 489,
          "end": 493,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 490,
            "end": 493,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 492,
              "end": 493,
              "typeName": {
                "type": "Identifier",
                "start": 492,
                "end": 493,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 494,
        "end": 497,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 496,
          "end": 497,
          "typeName": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 459,
        "end": 462,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 460,
            "end": 461,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 559,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 534,
        "end": 559,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 540,
            "end": 557,
            "argument": {
              "type": "Identifier",
              "start": 547,
              "end": 556,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 511,
        "decorators": [],
        "name": "fun",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 515,
          "end": 529,
          "argument": {
            "type": "Identifier",
            "start": 518,
            "end": 522,
            "decorators": [],
            "name": "rest",
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 522,
            "end": 529,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 524,
              "end": 529,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 524,
                "end": 527
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 530,
        "end": 533,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 532,
          "end": 533,
          "typeName": {
            "type": "Identifier",
            "start": 532,
            "end": 533,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 511,
        "end": 514,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 512,
            "end": 513,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 561,
      "end": 619,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 565,
          "end": 618,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 566,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 569,
            "end": 618,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 573,
                "end": 613,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 578,
                  "end": 613,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 580,
                      "end": 601,
                      "expression": {
                        "type": "CallExpression",
                        "start": 580,
                        "end": 600,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 590,
                            "end": 599,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 580,
                          "end": 581,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 581,
                          "end": 589,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 582,
                              "end": 588
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 602,
                      "end": 611,
                      "argument": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 610,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 615,
                "end": 617,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 569,
              "end": 572,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 620,
      "end": 680,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 679,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 625,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 628,
            "end": 679,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 633,
                "end": 673,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 638,
                  "end": 673,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 640,
                      "end": 661,
                      "expression": {
                        "type": "CallExpression",
                        "start": 640,
                        "end": 660,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 650,
                            "end": 659,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 640,
                          "end": 641,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 641,
                          "end": 649,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 642,
                              "end": 648
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 662,
                      "end": 671,
                      "argument": {
                        "type": "Identifier",
                        "start": 669,
                        "end": 670,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 633,
                    "end": 634,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 676,
                "end": 678,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 628,
              "end": 631,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 681,
      "end": 743,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 742,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 686,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 689,
            "end": 742,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 695,
                "end": 735,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 700,
                  "end": 735,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 702,
                      "end": 723,
                      "expression": {
                        "type": "CallExpression",
                        "start": 702,
                        "end": 722,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 712,
                            "end": 721,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 702,
                          "end": 703,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 703,
                          "end": 711,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 704,
                              "end": 710
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 724,
                      "end": 733,
                      "argument": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 732,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 695,
                    "end": 696,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 739,
                "end": 741,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 689,
              "end": 692,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 744,
      "end": 808,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 748,
          "end": 807,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 748,
            "end": 749,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 752,
            "end": 807,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 759,
                "end": 799,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 764,
                  "end": 799,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 766,
                      "end": 787,
                      "expression": {
                        "type": "CallExpression",
                        "start": 766,
                        "end": 786,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 776,
                            "end": 785,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 766,
                          "end": 767,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 767,
                          "end": 775,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 768,
                              "end": 774
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 788,
                      "end": 797,
                      "argument": {
                        "type": "Identifier",
                        "start": 795,
                        "end": 796,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 759,
                    "end": 760,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 804,
                "end": 806,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 752,
              "end": 755,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 810,
      "end": 910,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 909,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 815,
            "decorators": [],
            "name": "e",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 818,
            "end": 909,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 822,
                "end": 862,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 827,
                  "end": 862,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 829,
                      "end": 850,
                      "expression": {
                        "type": "CallExpression",
                        "start": 829,
                        "end": 849,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 839,
                            "end": 848,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 829,
                          "end": 830,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 830,
                          "end": 838,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 831,
                              "end": 837
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 851,
                      "end": 860,
                      "argument": {
                        "type": "Identifier",
                        "start": 858,
                        "end": 859,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 822,
                    "end": 823,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 864,
                "end": 904,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 869,
                  "end": 904,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 871,
                      "end": 892,
                      "expression": {
                        "type": "CallExpression",
                        "start": 871,
                        "end": 891,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 881,
                            "end": 890,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 872,
                          "end": 880,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 873,
                              "end": 879
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 893,
                      "end": 902,
                      "argument": {
                        "type": "Identifier",
                        "start": 900,
                        "end": 901,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 864,
                    "end": 865,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 906,
                "end": 908,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 818,
              "end": 821,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 911,
      "end": 1014,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 915,
          "end": 1013,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 915,
            "end": 916,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 919,
            "end": 1013,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 924,
                "end": 964,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 929,
                  "end": 964,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 931,
                      "end": 952,
                      "expression": {
                        "type": "CallExpression",
                        "start": 931,
                        "end": 951,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 941,
                            "end": 950,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 931,
                          "end": 932,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 932,
                          "end": 940,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 933,
                              "end": 939
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 953,
                      "end": 962,
                      "argument": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 961,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 924,
                    "end": 925,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 967,
                "end": 1007,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 972,
                  "end": 1007,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 974,
                      "end": 995,
                      "expression": {
                        "type": "CallExpression",
                        "start": 974,
                        "end": 994,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 984,
                            "end": 993,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 974,
                          "end": 975,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 975,
                          "end": 983,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 976,
                              "end": 982
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 996,
                      "end": 1005,
                      "argument": {
                        "type": "Identifier",
                        "start": 1003,
                        "end": 1004,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 967,
                    "end": 968,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1010,
                "end": 1012,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 919,
              "end": 922,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1015,
      "end": 1122,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1019,
          "end": 1121,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1019,
            "end": 1020,
            "decorators": [],
            "name": "g",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1023,
            "end": 1121,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1029,
                "end": 1069,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1034,
                  "end": 1069,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1036,
                      "end": 1057,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1036,
                        "end": 1056,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1046,
                            "end": 1055,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1037,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1037,
                          "end": 1045,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1038,
                              "end": 1044
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1058,
                      "end": 1067,
                      "argument": {
                        "type": "Identifier",
                        "start": 1065,
                        "end": 1066,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1029,
                    "end": 1030,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1074,
                "end": 1114,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1079,
                  "end": 1114,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1081,
                      "end": 1102,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1081,
                        "end": 1101,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1091,
                            "end": 1100,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1082,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1082,
                          "end": 1090,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1083,
                              "end": 1089
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1103,
                      "end": 1112,
                      "argument": {
                        "type": "Identifier",
                        "start": 1110,
                        "end": 1111,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1074,
                    "end": 1075,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1118,
                "end": 1120,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1023,
              "end": 1026,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1123,
      "end": 1232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1127,
          "end": 1231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1128,
            "decorators": [],
            "name": "h",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1131,
            "end": 1231,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1138,
                "end": 1178,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1143,
                  "end": 1178,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1145,
                      "end": 1166,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1145,
                        "end": 1165,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1155,
                            "end": 1164,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1145,
                          "end": 1146,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1146,
                          "end": 1154,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1147,
                              "end": 1153
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1167,
                      "end": 1176,
                      "argument": {
                        "type": "Identifier",
                        "start": 1174,
                        "end": 1175,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1138,
                    "end": 1139,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1184,
                "end": 1224,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1189,
                  "end": 1224,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1191,
                      "end": 1212,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1191,
                        "end": 1211,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1210,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1191,
                          "end": 1192,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1192,
                          "end": 1200,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1193,
                              "end": 1199
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1213,
                      "end": 1222,
                      "argument": {
                        "type": "Identifier",
                        "start": 1220,
                        "end": 1221,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1184,
                    "end": 1185,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1228,
                "end": 1230,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1131,
              "end": 1134,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1257,
      "end": 1356,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1261,
          "end": 1355,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1261,
            "end": 1262,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1265,
            "end": 1355,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1270,
                "end": 1349,
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1335,
                  "end": 1349,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1340,
                    "end": 1349,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1335,
                      "end": 1336,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1292,
                  "end": 1332,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1297,
                    "end": 1332,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1299,
                        "end": 1320,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1299,
                          "end": 1319,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1309,
                              "end": 1318,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1299,
                            "end": 1300,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1300,
                            "end": 1308,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1301,
                                "end": 1307
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1321,
                        "end": 1330,
                        "argument": {
                          "type": "Identifier",
                          "start": 1328,
                          "end": 1329,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1292,
                      "end": 1293,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 1270,
                  "end": 1289,
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "start": 1270,
                    "end": 1283,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1270,
                      "end": 1281,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1274,
                        "decorators": [],
                        "name": "Math",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1281,
                        "decorators": [],
                        "name": "random",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1286,
                    "end": 1289,
                    "raw": "0.5",
                    "value": 0.5
                  }
                }
              },
              {
                "type": "Literal",
                "start": 1352,
                "end": 1354,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1265,
              "end": 1268,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1357,
      "end": 1460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1361,
          "end": 1459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1361,
            "end": 1362,
            "decorators": [],
            "name": "j",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1365,
            "end": 1459,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1370,
                "end": 1453,
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1438,
                  "end": 1452,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1443,
                    "end": 1452,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1438,
                      "end": 1439,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1393,
                  "end": 1433,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1398,
                    "end": 1433,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1400,
                        "end": 1421,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1400,
                          "end": 1420,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1410,
                              "end": 1419,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1400,
                            "end": 1401,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1401,
                            "end": 1409,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1402,
                                "end": 1408
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1422,
                        "end": 1431,
                        "argument": {
                          "type": "Identifier",
                          "start": 1429,
                          "end": 1430,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1393,
                      "end": 1394,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 1370,
                  "end": 1389,
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "start": 1370,
                    "end": 1383,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1370,
                      "end": 1381,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1374,
                        "decorators": [],
                        "name": "Math",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1375,
                        "end": 1381,
                        "decorators": [],
                        "name": "random",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1386,
                    "end": 1389,
                    "raw": "0.5",
                    "value": 0.5
                  }
                }
              },
              {
                "type": "Literal",
                "start": 1456,
                "end": 1458,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1365,
              "end": 1368,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1461,
      "end": 1606,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1465,
          "end": 1605,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1465,
            "end": 1466,
            "decorators": [],
            "name": "k",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1469,
            "end": 1605,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1474,
                "end": 1557,
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1542,
                  "end": 1556,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1556,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1542,
                      "end": 1543,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1497,
                  "end": 1537,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1502,
                    "end": 1537,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1504,
                        "end": 1525,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1504,
                          "end": 1524,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1514,
                              "end": 1523,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1504,
                            "end": 1505,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1505,
                            "end": 1513,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1506,
                                "end": 1512
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1526,
                        "end": 1535,
                        "argument": {
                          "type": "Identifier",
                          "start": 1533,
                          "end": 1534,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1498,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 1474,
                  "end": 1493,
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "start": 1474,
                    "end": 1487,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1474,
                      "end": 1485,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1474,
                        "end": 1478,
                        "decorators": [],
                        "name": "Math",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1479,
                        "end": 1485,
                        "decorators": [],
                        "name": "random",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1490,
                    "end": 1493,
                    "raw": "0.5",
                    "value": 0.5
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1560,
                "end": 1600,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1565,
                  "end": 1600,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1567,
                      "end": 1588,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1567,
                        "end": 1587,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1577,
                            "end": 1586,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1567,
                          "end": 1568,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1568,
                          "end": 1576,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1569,
                              "end": 1575
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1589,
                      "end": 1598,
                      "argument": {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1597,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1560,
                    "end": 1561,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1602,
                "end": 1604,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1469,
              "end": 1472,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1607,
      "end": 1761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1611,
          "end": 1760,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1611,
            "end": 1612,
            "decorators": [],
            "name": "l",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1615,
            "end": 1760,
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1621,
                "end": 1708,
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1692,
                  "end": 1706,
                  "async": false,
                  "body": {
                    "type": "Identifier",
                    "start": 1697,
                    "end": 1706,
                    "decorators": [],
                    "name": "undefined",
                    "optional": false
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1692,
                      "end": 1693,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1645,
                  "end": 1685,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1650,
                    "end": 1685,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1652,
                        "end": 1673,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1652,
                          "end": 1672,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1662,
                              "end": 1671,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 1652,
                            "end": 1653,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          },
                          "optional": false,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 1653,
                            "end": 1661,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 1654,
                                "end": 1660
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1674,
                        "end": 1683,
                        "argument": {
                          "type": "Identifier",
                          "start": 1681,
                          "end": 1682,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1645,
                      "end": 1646,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                },
                "test": {
                  "type": "BinaryExpression",
                  "start": 1621,
                  "end": 1640,
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "start": 1621,
                    "end": 1634,
                    "arguments": [],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1621,
                      "end": 1632,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1621,
                        "end": 1625,
                        "decorators": [],
                        "name": "Math",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1626,
                        "end": 1632,
                        "decorators": [],
                        "name": "random",
                        "optional": false
                      }
                    },
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 1637,
                    "end": 1640,
                    "raw": "0.5",
                    "value": 0.5
                  }
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1713,
                "end": 1753,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1718,
                  "end": 1753,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 1720,
                      "end": 1741,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1720,
                        "end": 1740,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1730,
                            "end": 1739,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1720,
                          "end": 1721,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1721,
                          "end": 1729,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 1722,
                              "end": 1728
                            }
                          ]
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1742,
                      "end": 1751,
                      "argument": {
                        "type": "Identifier",
                        "start": 1749,
                        "end": 1750,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1713,
                    "end": 1714,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 1757,
                "end": 1759,
                "raw": "10",
                "value": 10
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1615,
              "end": 1618,
              "decorators": [],
              "name": "fun",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1763,
      "end": 1828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1767,
          "end": 1827,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1767,
            "end": 1784,
            "decorators": [],
            "name": "lambda1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1774,
              "end": 1784,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1776,
                "end": 1784,
                "typeName": {
                  "type": "Identifier",
                  "start": 1776,
                  "end": 1784,
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1787,
            "end": 1827,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1792,
              "end": 1827,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1794,
                  "end": 1815,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1794,
                    "end": 1814,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1804,
                        "end": 1813,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1794,
                      "end": 1795,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1795,
                      "end": 1803,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1796,
                          "end": 1802
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1816,
                  "end": 1825,
                  "argument": {
                    "type": "Identifier",
                    "start": 1823,
                    "end": 1824,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1787,
                "end": 1788,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1829,
      "end": 1896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1833,
          "end": 1895,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1833,
            "end": 1850,
            "decorators": [],
            "name": "lambda2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1840,
              "end": 1850,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1842,
                "end": 1850,
                "typeName": {
                  "type": "Identifier",
                  "start": 1842,
                  "end": 1850,
                  "decorators": [],
                  "name": "FuncType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1854,
            "end": 1894,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1859,
              "end": 1894,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1861,
                  "end": 1882,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1861,
                    "end": 1881,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1871,
                        "end": 1880,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 1861,
                      "end": 1862,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1862,
                      "end": 1870,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1863,
                          "end": 1869
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 1883,
                  "end": 1892,
                  "argument": {
                    "type": "Identifier",
                    "start": 1890,
                    "end": 1891,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1854,
                "end": 1855,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1898,
      "end": 1968,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1903,
        "end": 1910,
        "decorators": [],
        "name": "ObjType",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1913,
        "end": 1967,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1915,
            "end": 1940,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1915,
              "end": 1916,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1916,
              "end": 1939,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1918,
                "end": 1939,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1919,
                    "end": 1928,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1920,
                      "end": 1928,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1922,
                        "end": 1928
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1930,
                  "end": 1939,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1933,
                    "end": 1939
                  }
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 1941,
            "end": 1965,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1941,
              "end": 1942,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1942,
              "end": 1965,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1944,
                "end": 1965,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1945,
                    "end": 1954,
                    "decorators": [],
                    "name": "p",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1946,
                      "end": 1954,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1948,
                        "end": 1954
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1956,
                  "end": 1965,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1959,
                    "end": 1965
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1969,
      "end": 2040,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1973,
          "end": 2039,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1973,
            "end": 1986,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1977,
              "end": 1986,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1979,
                "end": 1986,
                "typeName": {
                  "type": "Identifier",
                  "start": 1979,
                  "end": 1986,
                  "decorators": [],
                  "name": "ObjType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1989,
            "end": 2039,
            "properties": [
              {
                "type": "Property",
                "start": 1991,
                "end": 2013,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1991,
                  "end": 1992,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1994,
                  "end": 2013,
                  "async": false,
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2000,
                    "end": 2012,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2000,
                        "end": 2001,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2003,
                        "end": 2012,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1994,
                      "end": 1995,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 2015,
                "end": 2037,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2015,
                  "end": 2016,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2018,
                  "end": 2037,
                  "async": false,
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2024,
                    "end": 2036,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2024,
                        "end": 2025,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2027,
                        "end": 2036,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2018,
                      "end": 2019,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2041,
      "end": 2114,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2045,
          "end": 2113,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2045,
            "end": 2058,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2049,
              "end": 2058,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2051,
                "end": 2058,
                "typeName": {
                  "type": "Identifier",
                  "start": 2051,
                  "end": 2058,
                  "decorators": [],
                  "name": "ObjType",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2062,
            "end": 2112,
            "properties": [
              {
                "type": "Property",
                "start": 2064,
                "end": 2086,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2064,
                  "end": 2065,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2067,
                  "end": 2086,
                  "async": false,
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2073,
                    "end": 2085,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2073,
                        "end": 2074,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2076,
                        "end": 2085,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2067,
                      "end": 2068,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 2088,
                "end": 2110,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2089,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2091,
                  "end": 2110,
                  "async": false,
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2097,
                    "end": 2109,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2097,
                        "end": 2098,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2100,
                        "end": 2109,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false
                      }
                    ]
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2091,
                      "end": 2092,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
