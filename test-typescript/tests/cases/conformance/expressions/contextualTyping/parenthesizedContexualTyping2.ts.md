__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 363,
        "end": 371,
        "name": "FuncType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 374,
        "end": 405,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 375,
            "end": 392,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 392,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 378,
                "end": 392,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 378,
                  "end": 381,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 379,
                      "end": 380,
                      "name": {
                        "type": "Identifier",
                        "start": 379,
                        "end": 380,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false
                    }
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 382,
                    "end": 386,
                    "name": "p",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
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
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 408,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 420,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 424,
          "end": 435,
          "name": "f",
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
                "name": "FuncType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 437,
          "end": 441,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 423,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 422,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 422,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 447,
      "end": 498,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 459,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 463,
          "end": 474,
          "name": "f",
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
                "name": "FuncType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 476,
          "end": 487,
          "name": "g",
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
                "name": "FuncType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 489,
          "end": 493,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 459,
        "end": 462,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 460,
            "end": 461,
            "name": {
              "type": "Identifier",
              "start": 460,
              "end": 461,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 511,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 515,
          "end": 529,
          "argument": {
            "type": "Identifier",
            "start": 518,
            "end": 522,
            "name": "rest",
            "typeAnnotation": null,
            "decorators": [],
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
          },
          "value": null
        }
      ],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 511,
        "end": 514,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 512,
            "end": 513,
            "name": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 565,
            "end": 566,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 569,
            "end": 618,
            "callee": {
              "type": "Identifier",
              "start": 569,
              "end": 572,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 573,
                "end": 613,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 580,
                          "end": 581,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 590,
                            "end": 599,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 602,
                      "end": 611,
                      "argument": {
                        "type": "Identifier",
                        "start": 609,
                        "end": 610,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 615,
                "end": 617,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 624,
            "end": 625,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 628,
            "end": 679,
            "callee": {
              "type": "Identifier",
              "start": 628,
              "end": 631,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 633,
                "end": 673,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 633,
                    "end": 634,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 640,
                          "end": 641,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 650,
                            "end": 659,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 662,
                      "end": 671,
                      "argument": {
                        "type": "Identifier",
                        "start": 669,
                        "end": 670,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 676,
                "end": 678,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 686,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 689,
            "end": 742,
            "callee": {
              "type": "Identifier",
              "start": 689,
              "end": 692,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 695,
                "end": 735,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 695,
                    "end": 696,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 702,
                          "end": 703,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 712,
                            "end": 721,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 724,
                      "end": 733,
                      "argument": {
                        "type": "Identifier",
                        "start": 731,
                        "end": 732,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 739,
                "end": 741,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 748,
            "end": 749,
            "name": "d",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 752,
            "end": 807,
            "callee": {
              "type": "Identifier",
              "start": 752,
              "end": 755,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 759,
                "end": 799,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 759,
                    "end": 760,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 766,
                          "end": 767,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 776,
                            "end": 785,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 788,
                      "end": 797,
                      "argument": {
                        "type": "Identifier",
                        "start": 795,
                        "end": 796,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 804,
                "end": 806,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 815,
            "name": "e",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 818,
            "end": 909,
            "callee": {
              "type": "Identifier",
              "start": 818,
              "end": 821,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 822,
                "end": 862,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 822,
                    "end": 823,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 829,
                          "end": 830,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 839,
                            "end": 848,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 851,
                      "end": 860,
                      "argument": {
                        "type": "Identifier",
                        "start": 858,
                        "end": 859,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 864,
                "end": 904,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 864,
                    "end": 865,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 881,
                            "end": 890,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 893,
                      "end": 902,
                      "argument": {
                        "type": "Identifier",
                        "start": 900,
                        "end": 901,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 906,
                "end": 908,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 915,
            "end": 916,
            "name": "f",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 919,
            "end": 1013,
            "callee": {
              "type": "Identifier",
              "start": 919,
              "end": 922,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 924,
                "end": 964,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 924,
                    "end": 925,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 931,
                          "end": 932,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 941,
                            "end": 950,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 953,
                      "end": 962,
                      "argument": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 961,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 967,
                "end": 1007,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 967,
                    "end": 968,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 974,
                          "end": 975,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 984,
                            "end": 993,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 996,
                      "end": 1005,
                      "argument": {
                        "type": "Identifier",
                        "start": 1003,
                        "end": 1004,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 1010,
                "end": 1012,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1019,
            "end": 1020,
            "name": "g",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1023,
            "end": 1121,
            "callee": {
              "type": "Identifier",
              "start": 1023,
              "end": 1026,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1029,
                "end": 1069,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1029,
                    "end": 1030,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1036,
                          "end": 1037,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1046,
                            "end": 1055,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1058,
                      "end": 1067,
                      "argument": {
                        "type": "Identifier",
                        "start": 1065,
                        "end": 1066,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1074,
                "end": 1114,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1074,
                    "end": 1075,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1082,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1091,
                            "end": 1100,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1103,
                      "end": 1112,
                      "argument": {
                        "type": "Identifier",
                        "start": 1110,
                        "end": 1111,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 1118,
                "end": 1120,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1127,
            "end": 1128,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1131,
            "end": 1231,
            "callee": {
              "type": "Identifier",
              "start": 1131,
              "end": 1134,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1138,
                "end": 1178,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1138,
                    "end": 1139,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1145,
                          "end": 1146,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1155,
                            "end": 1164,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1167,
                      "end": 1176,
                      "argument": {
                        "type": "Identifier",
                        "start": 1174,
                        "end": 1175,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1184,
                "end": 1224,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1184,
                    "end": 1185,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1191,
                          "end": 1192,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1210,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1213,
                      "end": 1222,
                      "argument": {
                        "type": "Identifier",
                        "start": 1220,
                        "end": 1221,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 1228,
                "end": 1230,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1261,
            "end": 1262,
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1265,
            "end": 1355,
            "callee": {
              "type": "Identifier",
              "start": 1265,
              "end": 1268,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1270,
                "end": 1349,
                "test": {
                  "type": "BinaryExpression",
                  "start": 1270,
                  "end": 1289,
                  "left": {
                    "type": "CallExpression",
                    "start": 1270,
                    "end": 1283,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1270,
                      "end": 1281,
                      "object": {
                        "type": "Identifier",
                        "start": 1270,
                        "end": 1274,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1275,
                        "end": 1281,
                        "name": "random",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 1286,
                    "end": 1289,
                    "value": 0.5,
                    "raw": "0.5"
                  }
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1292,
                  "end": 1332,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1292,
                      "end": 1293,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "Identifier",
                            "start": 1299,
                            "end": 1300,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1309,
                              "end": 1318,
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1321,
                        "end": 1330,
                        "argument": {
                          "type": "Identifier",
                          "start": 1328,
                          "end": 1329,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1335,
                  "end": 1349,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1335,
                      "end": 1336,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1340,
                    "end": 1349,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              },
              {
                "type": "Literal",
                "start": 1352,
                "end": 1354,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1361,
            "end": 1362,
            "name": "j",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1365,
            "end": 1459,
            "callee": {
              "type": "Identifier",
              "start": 1365,
              "end": 1368,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1370,
                "end": 1453,
                "test": {
                  "type": "BinaryExpression",
                  "start": 1370,
                  "end": 1389,
                  "left": {
                    "type": "CallExpression",
                    "start": 1370,
                    "end": 1383,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1370,
                      "end": 1381,
                      "object": {
                        "type": "Identifier",
                        "start": 1370,
                        "end": 1374,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1375,
                        "end": 1381,
                        "name": "random",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 1386,
                    "end": 1389,
                    "value": 0.5,
                    "raw": "0.5"
                  }
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1393,
                  "end": 1433,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1393,
                      "end": 1394,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "Identifier",
                            "start": 1400,
                            "end": 1401,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1410,
                              "end": 1419,
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1422,
                        "end": 1431,
                        "argument": {
                          "type": "Identifier",
                          "start": 1429,
                          "end": 1430,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1438,
                  "end": 1452,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1438,
                      "end": 1439,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1443,
                    "end": 1452,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              },
              {
                "type": "Literal",
                "start": 1456,
                "end": 1458,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1465,
            "end": 1466,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1469,
            "end": 1605,
            "callee": {
              "type": "Identifier",
              "start": 1469,
              "end": 1472,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1474,
                "end": 1557,
                "test": {
                  "type": "BinaryExpression",
                  "start": 1474,
                  "end": 1493,
                  "left": {
                    "type": "CallExpression",
                    "start": 1474,
                    "end": 1487,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1474,
                      "end": 1485,
                      "object": {
                        "type": "Identifier",
                        "start": 1474,
                        "end": 1478,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1479,
                        "end": 1485,
                        "name": "random",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 1490,
                    "end": 1493,
                    "value": 0.5,
                    "raw": "0.5"
                  }
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1497,
                  "end": 1537,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1498,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "Identifier",
                            "start": 1504,
                            "end": 1505,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1514,
                              "end": 1523,
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1526,
                        "end": 1535,
                        "argument": {
                          "type": "Identifier",
                          "start": 1533,
                          "end": 1534,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1542,
                  "end": 1556,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1542,
                      "end": 1543,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1547,
                    "end": 1556,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1560,
                "end": 1600,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1560,
                    "end": 1561,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1567,
                          "end": 1568,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1577,
                            "end": 1586,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1589,
                      "end": 1598,
                      "argument": {
                        "type": "Identifier",
                        "start": 1596,
                        "end": 1597,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 1602,
                "end": 1604,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1611,
            "end": 1612,
            "name": "l",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1615,
            "end": 1760,
            "callee": {
              "type": "Identifier",
              "start": 1615,
              "end": 1618,
              "name": "fun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ConditionalExpression",
                "start": 1621,
                "end": 1708,
                "test": {
                  "type": "BinaryExpression",
                  "start": 1621,
                  "end": 1640,
                  "left": {
                    "type": "CallExpression",
                    "start": 1621,
                    "end": 1634,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1621,
                      "end": 1632,
                      "object": {
                        "type": "Identifier",
                        "start": 1621,
                        "end": 1625,
                        "name": "Math",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1626,
                        "end": 1632,
                        "name": "random",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "operator": "<",
                  "right": {
                    "type": "Literal",
                    "start": 1637,
                    "end": 1640,
                    "value": 0.5,
                    "raw": "0.5"
                  }
                },
                "consequent": {
                  "type": "ArrowFunctionExpression",
                  "start": 1645,
                  "end": 1685,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1645,
                      "end": 1646,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "callee": {
                            "type": "Identifier",
                            "start": 1652,
                            "end": 1653,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 1662,
                              "end": 1671,
                              "name": "undefined",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                        },
                        "directive": null
                      },
                      {
                        "type": "ReturnStatement",
                        "start": 1674,
                        "end": 1683,
                        "argument": {
                          "type": "Identifier",
                          "start": 1681,
                          "end": 1682,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "alternate": {
                  "type": "ArrowFunctionExpression",
                  "start": 1692,
                  "end": 1706,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1692,
                      "end": 1693,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "Identifier",
                    "start": 1697,
                    "end": 1706,
                    "name": "undefined",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 1713,
                "end": 1753,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1713,
                    "end": 1714,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                        "callee": {
                          "type": "Identifier",
                          "start": 1720,
                          "end": 1721,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1730,
                            "end": 1739,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
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
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1742,
                      "end": 1751,
                      "argument": {
                        "type": "Identifier",
                        "start": 1749,
                        "end": 1750,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 1757,
                "end": 1759,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1767,
            "end": 1784,
            "name": "lambda1",
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
                  "name": "FuncType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1787,
            "end": 1827,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1787,
                "end": 1788,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1794,
                      "end": 1795,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1804,
                        "end": 1813,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1816,
                  "end": 1825,
                  "argument": {
                    "type": "Identifier",
                    "start": 1823,
                    "end": 1824,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1833,
            "end": 1850,
            "name": "lambda2",
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
                  "name": "FuncType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1854,
            "end": 1894,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1854,
                "end": 1855,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                    "callee": {
                      "type": "Identifier",
                      "start": 1861,
                      "end": 1862,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1871,
                        "end": 1880,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 1883,
                  "end": 1892,
                  "argument": {
                    "type": "Identifier",
                    "start": 1890,
                    "end": 1891,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1898,
      "end": 1968,
      "id": {
        "type": "Identifier",
        "start": 1903,
        "end": 1910,
        "name": "ObjType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1915,
              "end": 1916,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1916,
              "end": 1939,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1918,
                "end": 1939,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1919,
                    "end": 1928,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1920,
                      "end": 1928,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1922,
                        "end": 1928
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1941,
            "end": 1965,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1941,
              "end": 1942,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1942,
              "end": 1965,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1944,
                "end": 1965,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1945,
                    "end": 1954,
                    "name": "p",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1946,
                      "end": 1954,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1948,
                        "end": 1954
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1973,
            "end": 1986,
            "name": "obj1",
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
                  "name": "ObjType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1991,
                  "end": 1992,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 1994,
                  "end": 2013,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1994,
                      "end": 1995,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2000,
                    "end": 2012,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2000,
                        "end": 2001,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2003,
                        "end": 2012,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2015,
                "end": 2037,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2015,
                  "end": 2016,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2018,
                  "end": 2037,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2018,
                      "end": 2019,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2024,
                    "end": 2036,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2024,
                        "end": 2025,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2027,
                        "end": 2036,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 2045,
            "end": 2058,
            "name": "obj2",
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
                  "name": "ObjType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2064,
                  "end": 2065,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2067,
                  "end": 2086,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2067,
                      "end": 2068,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2073,
                    "end": 2085,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2073,
                        "end": 2074,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2076,
                        "end": 2085,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2088,
                "end": 2110,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2089,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2091,
                  "end": 2110,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2091,
                      "end": 2092,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "SequenceExpression",
                    "start": 2097,
                    "end": 2109,
                    "expressions": [
                      {
                        "type": "Identifier",
                        "start": 2097,
                        "end": 2098,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 2100,
                        "end": 2109,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
