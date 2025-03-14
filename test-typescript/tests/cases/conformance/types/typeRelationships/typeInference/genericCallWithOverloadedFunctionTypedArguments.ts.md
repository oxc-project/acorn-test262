genericCallWithOverloadedFunctionTypedArguments.ts
```json
{
  "type": "Program",
  "start": 186,
  "end": 1704,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 186,
      "end": 443,
      "body": {
        "type": "TSModuleBlock",
        "start": 213,
        "end": 443,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 293,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 293,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 293,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 226,
                      "end": 293,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 236,
                          "end": 258,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 237,
                              "end": 247,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 238,
                                "end": 247,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 240,
                                  "end": 247
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 248,
                            "end": 257,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 250,
                              "end": 257
                            }
                          }
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 267,
                          "end": 287,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 268,
                              "end": 277,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 269,
                                "end": 277,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 271,
                                  "end": 277
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 278,
                            "end": 286,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 280,
                              "end": 286
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 299,
            "end": 353,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 327,
              "end": 353,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 337,
                  "end": 347,
                  "argument": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 346,
                    "decorators": [],
                    "name": "cb",
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
              "start": 308,
              "end": 312,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 325,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 315,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 317,
                    "end": 325,
                    "exprName": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 325,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "VariableDeclaration",
            "start": 359,
            "end": 375,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 363,
                "end": 374,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 374,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 372,
                      "end": 373,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 371,
                    "decorators": [],
                    "name": "foo4",
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
            "start": 380,
            "end": 410,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 384,
                "end": 409,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 386,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 389,
                  "end": 409,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 394,
                      "end": 408,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 407,
                        "end": 408,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 398,
                          "end": 402,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 399,
                            "end": 402,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 401,
                              "end": 402,
                              "typeName": {
                                "type": "Identifier",
                                "start": 401,
                                "end": 402,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 394,
                        "end": 397,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 395,
                            "end": 396,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 395,
                              "end": 396,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 389,
                    "end": 393,
                    "decorators": [],
                    "name": "foo4",
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
            "start": 415,
            "end": 437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 419,
                "end": 436,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 419,
                  "end": 421,
                  "decorators": [],
                  "name": "r4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 424,
                  "end": 436,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 429,
                      "end": 435,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 435,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 429,
                          "end": 430,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 428,
                    "decorators": [],
                    "name": "foo4",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 212,
        "decorators": [],
        "name": "NonGenericParameter",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 445,
      "end": 1704,
      "body": {
        "type": "TSModuleBlock",
        "start": 469,
        "end": 1704,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 475,
            "end": 558,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 532,
              "end": 558,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 542,
                  "end": 552,
                  "argument": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 551,
                    "decorators": [],
                    "name": "cb",
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
              "start": 484,
              "end": 488,
              "decorators": [],
              "name": "foo5",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 492,
                "end": 530,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 494,
                  "end": 530,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 496,
                    "end": 530,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 498,
                        "end": 513,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 499,
                            "end": 503,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 500,
                              "end": 503,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 502,
                                "end": 503,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 502,
                                  "end": 503,
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
                          "start": 504,
                          "end": 512,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 506,
                            "end": 512
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 514,
                        "end": 528,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 515,
                            "end": 524,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 516,
                              "end": 524,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 518,
                                "end": 524
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 525,
                          "end": 528,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 527,
                            "end": 528,
                            "typeName": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 528,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 488,
              "end": 491,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 489,
                  "end": 490,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
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
            "start": 564,
            "end": 586,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 568,
                "end": 585,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 570,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 573,
                  "end": 585,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 578,
                      "end": 584,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 583,
                        "end": 584,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 578,
                          "end": 579,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 577,
                    "decorators": [],
                    "name": "foo5",
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
            "start": 695,
            "end": 743,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 699,
                "end": 743,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 743,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 700,
                    "end": 743,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 702,
                      "end": 743,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 704,
                          "end": 722,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 708,
                              "end": 712,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 709,
                                "end": 712,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 711,
                                  "end": 712,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 711,
                                    "end": 712,
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
                            "start": 713,
                            "end": 721,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 715,
                              "end": 721
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 704,
                            "end": 707,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 705,
                                "end": 706,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 705,
                                  "end": 706,
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
                          "type": "TSCallSignatureDeclaration",
                          "start": 723,
                          "end": 741,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 727,
                              "end": 736,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 728,
                                "end": 736,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 730,
                                  "end": 736
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 737,
                            "end": 740,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 739,
                              "end": 740,
                              "typeName": {
                                "type": "Identifier",
                                "start": 739,
                                "end": 740,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 723,
                            "end": 726,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 724,
                                "end": 725,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 724,
                                  "end": 725,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 748,
            "end": 765,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 752,
                "end": 764,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 757,
                  "end": 764,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 762,
                      "end": 763,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 757,
                    "end": 761,
                    "decorators": [],
                    "name": "foo5",
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
            "type": "FunctionDeclaration",
            "start": 802,
            "end": 892,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 866,
              "end": 892,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 876,
                  "end": 886,
                  "argument": {
                    "type": "Identifier",
                    "start": 883,
                    "end": 885,
                    "decorators": [],
                    "name": "cb",
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
              "start": 811,
              "end": 815,
              "decorators": [],
              "name": "foo6",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 819,
                "end": 864,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 821,
                  "end": 864,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 823,
                    "end": 864,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 825,
                        "end": 840,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 826,
                            "end": 830,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 827,
                              "end": 830,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 829,
                                "end": 830,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 829,
                                  "end": 830,
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
                          "start": 831,
                          "end": 839,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 833,
                            "end": 839
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 841,
                        "end": 862,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 842,
                            "end": 846,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 843,
                              "end": 846,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 845,
                                "end": 846,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 845,
                                  "end": 846,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 848,
                            "end": 853,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 850,
                              "end": 853,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 852,
                                "end": 853,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 852,
                                  "end": 853,
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
                          "start": 854,
                          "end": 862,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 856,
                            "end": 862
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 815,
              "end": 818,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 816,
                  "end": 817,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 817,
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
            "start": 898,
            "end": 920,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 902,
                "end": 919,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 902,
                  "end": 904,
                  "decorators": [],
                  "name": "r8",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 907,
                  "end": 919,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 912,
                      "end": 918,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 917,
                        "end": 918,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 912,
                          "end": 913,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ]
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 911,
                    "decorators": [],
                    "name": "foo6",
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
            "start": 1029,
            "end": 1060,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1033,
                "end": 1059,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1033,
                  "end": 1035,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1038,
                  "end": 1059,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1043,
                      "end": 1058,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 1056,
                        "end": 1058,
                        "raw": "''",
                        "value": ""
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1047,
                          "end": 1051,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1048,
                            "end": 1051,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1050,
                              "end": 1051,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1050,
                                "end": 1051,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1043,
                        "end": 1046,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1044,
                            "end": 1045,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 1044,
                              "end": 1045,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1038,
                    "end": 1042,
                    "decorators": [],
                    "name": "foo6",
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
            "start": 1096,
            "end": 1135,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1100,
                "end": 1134,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1100,
                  "end": 1103,
                  "decorators": [],
                  "name": "r11",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1106,
                  "end": 1134,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1111,
                      "end": 1133,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 1131,
                        "end": 1133,
                        "raw": "''",
                        "value": ""
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1115,
                          "end": 1119,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1116,
                            "end": 1119,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1118,
                              "end": 1119,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1118,
                                "end": 1119,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 1121,
                          "end": 1126,
                          "decorators": [],
                          "name": "y",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1123,
                            "end": 1126,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1125,
                              "end": 1126,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1125,
                                "end": 1126,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1111,
                        "end": 1114,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1112,
                            "end": 1113,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 1112,
                              "end": 1113,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1106,
                    "end": 1110,
                    "decorators": [],
                    "name": "foo6",
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
            "type": "FunctionDeclaration",
            "start": 1172,
            "end": 1267,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1241,
              "end": 1267,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1251,
                  "end": 1261,
                  "argument": {
                    "type": "Identifier",
                    "start": 1258,
                    "end": 1260,
                    "decorators": [],
                    "name": "cb",
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
              "start": 1181,
              "end": 1185,
              "decorators": [],
              "name": "foo7",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1189,
                "end": 1192,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1190,
                  "end": 1192,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1191,
                    "end": 1192,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1191,
                      "end": 1192,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1194,
                "end": 1239,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1196,
                  "end": 1239,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1198,
                    "end": 1239,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1200,
                        "end": 1215,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1201,
                            "end": 1205,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1202,
                              "end": 1205,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1204,
                                "end": 1205,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1204,
                                  "end": 1205,
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
                          "start": 1206,
                          "end": 1214,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1208,
                            "end": 1214
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 1216,
                        "end": 1237,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1217,
                            "end": 1221,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1218,
                              "end": 1221,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1220,
                                "end": 1221,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1220,
                                  "end": 1221,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1223,
                            "end": 1228,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1225,
                              "end": 1228,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1227,
                                "end": 1228,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1227,
                                  "end": 1228,
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
                          "start": 1229,
                          "end": 1237,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1231,
                            "end": 1237
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1185,
              "end": 1188,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1186,
                  "end": 1187,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1186,
                    "end": 1187,
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
            "start": 1273,
            "end": 1301,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1277,
                "end": 1300,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1277,
                  "end": 1280,
                  "decorators": [],
                  "name": "r12",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1283,
                  "end": 1300,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1288,
                      "end": 1289,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1291,
                      "end": 1299,
                      "async": false,
                      "body": {
                        "type": "Identifier",
                        "start": 1298,
                        "end": 1299,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "expression": true,
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
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1283,
                    "end": 1287,
                    "decorators": [],
                    "name": "foo7",
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
            "start": 1400,
            "end": 1435,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1404,
                "end": 1434,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1404,
                  "end": 1407,
                  "decorators": [],
                  "name": "r13",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1410,
                  "end": 1434,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1415,
                      "end": 1416,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1418,
                      "end": 1433,
                      "async": false,
                      "body": {
                        "type": "Literal",
                        "start": 1431,
                        "end": 1433,
                        "raw": "''",
                        "value": ""
                      },
                      "expression": true,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1422,
                          "end": 1426,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1423,
                            "end": 1426,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1425,
                              "end": 1426,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1425,
                                "end": 1426,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          }
                        }
                      ],
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 1418,
                        "end": 1421,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 1419,
                            "end": 1420,
                            "const": false,
                            "in": false,
                            "name": {
                              "type": "Identifier",
                              "start": 1419,
                              "end": 1420,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            },
                            "out": false
                          }
                        ]
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1410,
                    "end": 1414,
                    "decorators": [],
                    "name": "foo7",
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
            "start": 1534,
            "end": 1582,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1538,
                "end": 1582,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1538,
                  "end": 1582,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1539,
                    "end": 1582,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1541,
                      "end": 1582,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 1543,
                          "end": 1561,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1547,
                              "end": 1551,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1548,
                                "end": 1551,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1550,
                                  "end": 1551,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1550,
                                    "end": 1551,
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
                            "start": 1552,
                            "end": 1560,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1554,
                              "end": 1560
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1543,
                            "end": 1546,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1544,
                                "end": 1545,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1544,
                                  "end": 1545,
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
                          "type": "TSCallSignatureDeclaration",
                          "start": 1562,
                          "end": 1580,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1566,
                              "end": 1575,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1567,
                                "end": 1575,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1569,
                                  "end": 1575
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1576,
                            "end": 1579,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1578,
                              "end": 1579,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1578,
                                "end": 1579,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1562,
                            "end": 1565,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1563,
                                "end": 1564,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1563,
                                  "end": 1564,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 1587,
            "end": 1608,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1591,
                "end": 1607,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1591,
                  "end": 1594,
                  "decorators": [],
                  "name": "r14",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1597,
                  "end": 1607,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1602,
                      "end": 1603,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Identifier",
                      "start": 1605,
                      "end": 1606,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1597,
                    "end": 1601,
                    "decorators": [],
                    "name": "foo7",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 468,
        "decorators": [],
        "name": "GenericParameter",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
