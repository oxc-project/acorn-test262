__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 305,
  "end": 2068,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 305,
      "end": 1230,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 317,
        "decorators": [],
        "name": "onlyT",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 318,
        "end": 1230,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 324,
            "end": 425,
            "id": {
              "type": "Identifier",
              "start": 333,
              "end": 336,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 336,
              "end": 339,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 337,
                  "end": 338,
                  "name": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 340,
                "end": 354,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 341,
                  "end": 354,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 343,
                    "end": 354,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 344,
                        "end": 348,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 345,
                          "end": 348,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 347,
                            "end": 348,
                            "typeName": {
                              "type": "Identifier",
                              "start": 347,
                              "end": 348,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 350,
                      "end": 354,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 353,
                        "end": 354,
                        "typeName": {
                          "type": "Identifier",
                          "start": 353,
                          "end": 354,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 356,
                "end": 370,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 357,
                  "end": 370,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 359,
                    "end": 370,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 360,
                        "end": 364,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 361,
                          "end": 364,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 363,
                            "end": 364,
                            "typeName": {
                              "type": "Identifier",
                              "start": 363,
                              "end": 364,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 366,
                      "end": 370,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 369,
                        "end": 370,
                        "typeName": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 370,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 372,
              "end": 425,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 382,
                  "end": 401,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 386,
                      "end": 400,
                      "id": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 400,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 387,
                          "end": 400,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 389,
                            "end": 400,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 390,
                                "end": 394,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 391,
                                  "end": 394,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 393,
                                    "end": 394,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 393,
                                      "end": 394,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 396,
                              "end": 400,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 399,
                                "end": 400,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 399,
                                  "end": 400,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 410,
                  "end": 419,
                  "argument": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 431,
            "end": 496,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 435,
                "end": 495,
                "id": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 452,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 452,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 439,
                      "end": 452,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 440,
                          "end": 445,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 441,
                            "end": 445,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 443,
                              "end": 445,
                              "members": []
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 447,
                        "end": 452,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 450,
                          "end": 452,
                          "members": []
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 455,
                  "end": 495,
                  "callee": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 458,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 459,
                      "end": 475,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 460,
                          "end": 469,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 461,
                            "end": 469,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 463,
                              "end": 469
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 474,
                        "end": 475,
                        "value": 1,
                        "raw": "1"
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 477,
                      "end": 494,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 478,
                          "end": 487,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 479,
                            "end": 487,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 481,
                              "end": 487
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 492,
                        "end": 494,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 502,
            "end": 710,
            "id": {
              "type": "Identifier",
              "start": 511,
              "end": 517,
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 517,
              "end": 533,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 518,
                  "end": 532,
                  "name": {
                    "type": "Identifier",
                    "start": 518,
                    "end": 519,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 528,
                    "end": 532,
                    "typeName": {
                      "type": "Identifier",
                      "start": 528,
                      "end": 532,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 534,
                "end": 538,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 535,
                  "end": 538,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 537,
                    "end": 538,
                    "typeName": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 538,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 540,
              "end": 710,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 550,
                  "end": 589,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 554,
                      "end": 588,
                      "id": {
                        "type": "Identifier",
                        "start": 554,
                        "end": 556,
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 559,
                        "end": 588,
                        "callee": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 562,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 563,
                            "end": 574,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 564,
                                "end": 568,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 565,
                                  "end": 568,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 567,
                                    "end": 568,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 567,
                                      "end": 568,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 573,
                              "end": 574,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 576,
                            "end": 587,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 577,
                                "end": 581,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 578,
                                  "end": 581,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 580,
                                    "end": 581,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 580,
                                      "end": 581,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 586,
                              "end": 587,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 630,
                  "end": 654,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 634,
                      "end": 653,
                      "id": {
                        "type": "Identifier",
                        "start": 634,
                        "end": 636,
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 639,
                        "end": 653,
                        "callee": {
                          "type": "Identifier",
                          "start": 639,
                          "end": 641,
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 642,
                            "end": 652,
                            "callee": {
                              "type": "Identifier",
                              "start": 646,
                              "end": 650,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 679,
                  "end": 695,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 683,
                      "end": 694,
                      "id": {
                        "type": "Identifier",
                        "start": 683,
                        "end": 686,
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 689,
                        "end": 694,
                        "callee": {
                          "type": "Identifier",
                          "start": 689,
                          "end": 691,
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 692,
                            "end": 693,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 716,
            "end": 831,
            "id": {
              "type": "Identifier",
              "start": 725,
              "end": 729,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 729,
              "end": 745,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 730,
                  "end": 744,
                  "name": {
                    "type": "Identifier",
                    "start": 730,
                    "end": 731,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 740,
                    "end": 744,
                    "typeName": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 744,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 746,
                "end": 760,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 747,
                  "end": 760,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 749,
                    "end": 760,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 750,
                        "end": 754,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 751,
                          "end": 754,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 753,
                            "end": 754,
                            "typeName": {
                              "type": "Identifier",
                              "start": 753,
                              "end": 754,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 756,
                      "end": 760,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 759,
                        "end": 760,
                        "typeName": {
                          "type": "Identifier",
                          "start": 759,
                          "end": 760,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 762,
                "end": 776,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 763,
                  "end": 776,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 765,
                    "end": 776,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 766,
                        "end": 770,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 767,
                          "end": 770,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 769,
                            "end": 770,
                            "typeName": {
                              "type": "Identifier",
                              "start": 769,
                              "end": 770,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 772,
                      "end": 776,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 775,
                        "end": 776,
                        "typeName": {
                          "type": "Identifier",
                          "start": 775,
                          "end": 776,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 778,
              "end": 831,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 788,
                  "end": 807,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 792,
                      "end": 806,
                      "id": {
                        "type": "Identifier",
                        "start": 792,
                        "end": 806,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 793,
                          "end": 806,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 795,
                            "end": 806,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 796,
                                "end": 800,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 797,
                                  "end": 800,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 799,
                                    "end": 800,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 799,
                                      "end": 800,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 802,
                              "end": 806,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 805,
                                "end": 806,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 805,
                                  "end": 806,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 816,
                  "end": 825,
                  "argument": {
                    "type": "Identifier",
                    "start": 823,
                    "end": 824,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 837,
            "end": 1021,
            "id": {
              "type": "Identifier",
              "start": 846,
              "end": 852,
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 852,
              "end": 870,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 853,
                  "end": 869,
                  "name": {
                    "type": "Identifier",
                    "start": 853,
                    "end": 854,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 863,
                    "end": 869,
                    "typeName": {
                      "type": "Identifier",
                      "start": 863,
                      "end": 869,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 871,
                "end": 875,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 872,
                  "end": 875,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 874,
                    "end": 875,
                    "typeName": {
                      "type": "Identifier",
                      "start": 874,
                      "end": 875,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 877,
              "end": 1021,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 887,
                  "end": 927,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 891,
                      "end": 926,
                      "id": {
                        "type": "Identifier",
                        "start": 891,
                        "end": 893,
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 896,
                        "end": 926,
                        "callee": {
                          "type": "Identifier",
                          "start": 896,
                          "end": 900,
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 901,
                            "end": 912,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 902,
                                "end": 906,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 903,
                                  "end": 906,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 905,
                                    "end": 906,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 905,
                                      "end": 906,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 911,
                              "end": 912,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 914,
                            "end": 925,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 915,
                                "end": 919,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 916,
                                  "end": 919,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 918,
                                    "end": 919,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 918,
                                      "end": 919,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 924,
                              "end": 925,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 945,
                  "end": 980,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 949,
                      "end": 979,
                      "id": {
                        "type": "Identifier",
                        "start": 949,
                        "end": 952,
                        "decorators": [],
                        "name": "r7b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 955,
                        "end": 979,
                        "callee": {
                          "type": "Identifier",
                          "start": 955,
                          "end": 959,
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 960,
                            "end": 968,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 961,
                                "end": 962,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 967,
                              "end": 968,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 970,
                            "end": 978,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 971,
                                "end": 972,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 977,
                              "end": 978,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1027,
            "end": 1039,
            "id": {
              "type": "Identifier",
              "start": 1032,
              "end": 1033,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 1034,
              "end": 1039,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1036,
                  "end": 1037,
                  "id": {
                    "type": "Identifier",
                    "start": 1036,
                    "end": 1037,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1044,
            "end": 1056,
            "id": {
              "type": "Identifier",
              "start": 1049,
              "end": 1050,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 1051,
              "end": 1056,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1053,
                  "end": 1054,
                  "id": {
                    "type": "Identifier",
                    "start": 1053,
                    "end": 1054,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1062,
            "end": 1170,
            "id": {
              "type": "Identifier",
              "start": 1071,
              "end": 1075,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1075,
              "end": 1078,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1076,
                  "end": 1077,
                  "name": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 1079,
                "end": 1083,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1080,
                  "end": 1083,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1082,
                    "end": 1083,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1082,
                      "end": 1083,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1085,
                "end": 1099,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1086,
                  "end": 1099,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1088,
                    "end": 1099,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1089,
                        "end": 1093,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1090,
                          "end": 1093,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1092,
                            "end": 1093,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1092,
                              "end": 1093,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1095,
                      "end": 1099,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1098,
                        "end": 1099,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1098,
                          "end": 1099,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1101,
                "end": 1115,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1102,
                  "end": 1115,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1104,
                    "end": 1115,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1105,
                        "end": 1109,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1106,
                          "end": 1109,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1108,
                            "end": 1109,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1108,
                              "end": 1109,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1111,
                      "end": 1115,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1114,
                        "end": 1115,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1114,
                          "end": 1115,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1117,
              "end": 1170,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1127,
                  "end": 1146,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1131,
                      "end": 1145,
                      "id": {
                        "type": "Identifier",
                        "start": 1131,
                        "end": 1145,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1132,
                          "end": 1145,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1134,
                            "end": 1145,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1135,
                                "end": 1139,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1136,
                                  "end": 1139,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1138,
                                    "end": 1139,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1138,
                                      "end": 1139,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1141,
                              "end": 1145,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1144,
                                "end": 1145,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1144,
                                  "end": 1145,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 1155,
                  "end": 1164,
                  "argument": {
                    "type": "Identifier",
                    "start": 1162,
                    "end": 1163,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1176,
            "end": 1219,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1180,
                "end": 1218,
                "id": {
                  "type": "Identifier",
                  "start": 1180,
                  "end": 1182,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1185,
                  "end": 1218,
                  "callee": {
                    "type": "Identifier",
                    "start": 1185,
                    "end": 1189,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 1190,
                      "end": 1193,
                      "object": {
                        "type": "Identifier",
                        "start": 1190,
                        "end": 1191,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1192,
                        "end": 1193,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1195,
                      "end": 1205,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1196,
                          "end": 1197,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "start": 1202,
                        "end": 1205,
                        "object": {
                          "type": "Identifier",
                          "start": 1202,
                          "end": 1203,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1204,
                          "end": 1205,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1207,
                      "end": 1217,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1208,
                          "end": 1209,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "start": 1214,
                        "end": 1217,
                        "object": {
                          "type": "Identifier",
                          "start": 1214,
                          "end": 1215,
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1216,
                          "end": 1217,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1232,
      "end": 2068,
      "id": {
        "type": "Identifier",
        "start": 1239,
        "end": 1241,
        "decorators": [],
        "name": "TU",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1242,
        "end": 2068,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 1248,
            "end": 1352,
            "id": {
              "type": "Identifier",
              "start": 1257,
              "end": 1260,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1260,
              "end": 1266,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1261,
                  "end": 1262,
                  "name": {
                    "type": "Identifier",
                    "start": 1261,
                    "end": 1262,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1264,
                  "end": 1265,
                  "name": {
                    "type": "Identifier",
                    "start": 1264,
                    "end": 1265,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 1267,
                "end": 1281,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1268,
                  "end": 1281,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1270,
                    "end": 1281,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1271,
                        "end": 1275,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1272,
                          "end": 1275,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1274,
                            "end": 1275,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1274,
                              "end": 1275,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1277,
                      "end": 1281,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1280,
                        "end": 1281,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1280,
                          "end": 1281,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1283,
                "end": 1297,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1284,
                  "end": 1297,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1286,
                    "end": 1297,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1287,
                        "end": 1291,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1288,
                          "end": 1291,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1290,
                            "end": 1291,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1291,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1293,
                      "end": 1297,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1296,
                        "end": 1297,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1296,
                          "end": 1297,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1299,
              "end": 1352,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1309,
                  "end": 1328,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1313,
                      "end": 1327,
                      "id": {
                        "type": "Identifier",
                        "start": 1313,
                        "end": 1327,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1314,
                          "end": 1327,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1316,
                            "end": 1327,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1317,
                                "end": 1321,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1318,
                                  "end": 1321,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1320,
                                    "end": 1321,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1320,
                                      "end": 1321,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1323,
                              "end": 1327,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1326,
                                "end": 1327,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1326,
                                  "end": 1327,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 1337,
                  "end": 1346,
                  "argument": {
                    "type": "Identifier",
                    "start": 1344,
                    "end": 1345,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1358,
            "end": 1423,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1362,
                "end": 1422,
                "id": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1379,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1364,
                    "end": 1379,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 1366,
                      "end": 1379,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1367,
                          "end": 1372,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1368,
                            "end": 1372,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 1370,
                              "end": 1372,
                              "members": []
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1374,
                        "end": 1379,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1377,
                          "end": 1379,
                          "members": []
                        }
                      }
                    }
                  }
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1382,
                  "end": 1422,
                  "callee": {
                    "type": "Identifier",
                    "start": 1382,
                    "end": 1385,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1386,
                      "end": 1402,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1387,
                          "end": 1396,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1388,
                            "end": 1396,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 1390,
                              "end": 1396
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 1401,
                        "end": 1402,
                        "value": 1,
                        "raw": "1"
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 1404,
                      "end": 1421,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1405,
                          "end": 1414,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1406,
                            "end": 1414,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1408,
                              "end": 1414
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 1419,
                        "end": 1421,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1429,
            "end": 1583,
            "id": {
              "type": "Identifier",
              "start": 1438,
              "end": 1444,
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1444,
              "end": 1460,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1445,
                  "end": 1459,
                  "name": {
                    "type": "Identifier",
                    "start": 1445,
                    "end": 1446,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1455,
                    "end": 1459,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1455,
                      "end": 1459,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 1461,
                "end": 1465,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1462,
                  "end": 1465,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1464,
                    "end": 1465,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1464,
                      "end": 1465,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1467,
              "end": 1583,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1477,
                  "end": 1516,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1481,
                      "end": 1515,
                      "id": {
                        "type": "Identifier",
                        "start": 1481,
                        "end": 1483,
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1486,
                        "end": 1515,
                        "callee": {
                          "type": "Identifier",
                          "start": 1486,
                          "end": 1489,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1490,
                            "end": 1501,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1491,
                                "end": 1495,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1492,
                                  "end": 1495,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1494,
                                    "end": 1495,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1494,
                                      "end": 1495,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1500,
                              "end": 1501,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1503,
                            "end": 1514,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1504,
                                "end": 1508,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1505,
                                  "end": 1508,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1507,
                                    "end": 1508,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1507,
                                      "end": 1508,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1513,
                              "end": 1514,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1526,
                  "end": 1550,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1530,
                      "end": 1549,
                      "id": {
                        "type": "Identifier",
                        "start": 1530,
                        "end": 1532,
                        "decorators": [],
                        "name": "r9",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1535,
                        "end": 1549,
                        "callee": {
                          "type": "Identifier",
                          "start": 1535,
                          "end": 1537,
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "NewExpression",
                            "start": 1538,
                            "end": 1548,
                            "callee": {
                              "type": "Identifier",
                              "start": 1542,
                              "end": 1546,
                              "decorators": [],
                              "name": "Date",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1560,
                  "end": 1576,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1564,
                      "end": 1575,
                      "id": {
                        "type": "Identifier",
                        "start": 1564,
                        "end": 1567,
                        "decorators": [],
                        "name": "r10",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1570,
                        "end": 1575,
                        "callee": {
                          "type": "Identifier",
                          "start": 1570,
                          "end": 1572,
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1573,
                            "end": 1574,
                            "value": 1,
                            "raw": "1"
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1589,
            "end": 1720,
            "id": {
              "type": "Identifier",
              "start": 1598,
              "end": 1602,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1602,
              "end": 1634,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1603,
                  "end": 1617,
                  "name": {
                    "type": "Identifier",
                    "start": 1603,
                    "end": 1604,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1613,
                    "end": 1617,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1613,
                      "end": 1617,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 1619,
                  "end": 1633,
                  "name": {
                    "type": "Identifier",
                    "start": 1619,
                    "end": 1620,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1629,
                    "end": 1633,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1629,
                      "end": 1633,
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 1635,
                "end": 1649,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1636,
                  "end": 1649,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1638,
                    "end": 1649,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1639,
                        "end": 1643,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1640,
                          "end": 1643,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1642,
                            "end": 1643,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1642,
                              "end": 1643,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1645,
                      "end": 1649,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1648,
                        "end": 1649,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1648,
                          "end": 1649,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1651,
                "end": 1665,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1652,
                  "end": 1665,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1654,
                    "end": 1665,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1655,
                        "end": 1659,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1656,
                          "end": 1659,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1658,
                            "end": 1659,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1658,
                              "end": 1659,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1661,
                      "end": 1665,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1664,
                        "end": 1665,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1664,
                          "end": 1665,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1667,
              "end": 1720,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1677,
                  "end": 1696,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1681,
                      "end": 1695,
                      "id": {
                        "type": "Identifier",
                        "start": 1681,
                        "end": 1695,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1682,
                          "end": 1695,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1684,
                            "end": 1695,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1685,
                                "end": 1689,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1686,
                                  "end": 1689,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1688,
                                    "end": 1689,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1688,
                                      "end": 1689,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1691,
                              "end": 1695,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1694,
                                "end": 1695,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1694,
                                  "end": 1695,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 1705,
                  "end": 1714,
                  "argument": {
                    "type": "Identifier",
                    "start": 1712,
                    "end": 1713,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1726,
            "end": 1868,
            "id": {
              "type": "Identifier",
              "start": 1735,
              "end": 1741,
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1741,
              "end": 1759,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1742,
                  "end": 1758,
                  "name": {
                    "type": "Identifier",
                    "start": 1742,
                    "end": 1743,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1752,
                    "end": 1758,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1752,
                      "end": 1758,
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 1760,
                "end": 1764,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1761,
                  "end": 1764,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1763,
                    "end": 1764,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1763,
                      "end": 1764,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1766,
              "end": 1868,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1776,
                  "end": 1816,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1780,
                      "end": 1815,
                      "id": {
                        "type": "Identifier",
                        "start": 1780,
                        "end": 1782,
                        "decorators": [],
                        "name": "r7",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1785,
                        "end": 1815,
                        "callee": {
                          "type": "Identifier",
                          "start": 1785,
                          "end": 1789,
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1790,
                            "end": 1801,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1791,
                                "end": 1795,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1792,
                                  "end": 1795,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1794,
                                    "end": 1795,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1794,
                                      "end": 1795,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1800,
                              "end": 1801,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1803,
                            "end": 1814,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1804,
                                "end": 1808,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1805,
                                  "end": 1808,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1807,
                                    "end": 1808,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1807,
                                      "end": 1808,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1813,
                              "end": 1814,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 1826,
                  "end": 1861,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1830,
                      "end": 1860,
                      "id": {
                        "type": "Identifier",
                        "start": 1830,
                        "end": 1833,
                        "decorators": [],
                        "name": "r7b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "CallExpression",
                        "start": 1836,
                        "end": 1860,
                        "callee": {
                          "type": "Identifier",
                          "start": 1836,
                          "end": 1840,
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1841,
                            "end": 1849,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1842,
                                "end": 1843,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1848,
                              "end": 1849,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          },
                          {
                            "type": "ArrowFunctionExpression",
                            "start": 1851,
                            "end": 1859,
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1852,
                                "end": 1853,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "start": 1858,
                              "end": 1859,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "id": null,
                            "generator": false
                          }
                        ],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1874,
            "end": 1886,
            "id": {
              "type": "Identifier",
              "start": 1879,
              "end": 1880,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 1881,
              "end": 1886,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1883,
                  "end": 1884,
                  "id": {
                    "type": "Identifier",
                    "start": 1883,
                    "end": 1884,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 1891,
            "end": 1903,
            "id": {
              "type": "Identifier",
              "start": 1896,
              "end": 1897,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 1898,
              "end": 1903,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1900,
                  "end": 1901,
                  "id": {
                    "type": "Identifier",
                    "start": 1900,
                    "end": 1901,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": null,
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1909,
            "end": 2017,
            "id": {
              "type": "Identifier",
              "start": 1918,
              "end": 1922,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1922,
              "end": 1925,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1923,
                  "end": 1924,
                  "name": {
                    "type": "Identifier",
                    "start": 1923,
                    "end": 1924,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 1926,
                "end": 1930,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1927,
                  "end": 1930,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1929,
                    "end": 1930,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1929,
                      "end": 1930,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1932,
                "end": 1946,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1933,
                  "end": 1946,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1935,
                    "end": 1946,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1936,
                        "end": 1940,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1937,
                          "end": 1940,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1939,
                            "end": 1940,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1939,
                              "end": 1940,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1942,
                      "end": 1946,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1945,
                        "end": 1946,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1945,
                          "end": 1946,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1948,
                "end": 1962,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1949,
                  "end": 1962,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 1951,
                    "end": 1962,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1952,
                        "end": 1956,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1953,
                          "end": 1956,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 1955,
                            "end": 1956,
                            "typeName": {
                              "type": "Identifier",
                              "start": 1955,
                              "end": 1956,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1958,
                      "end": 1962,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1961,
                        "end": 1962,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1961,
                          "end": 1962,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1964,
              "end": 2017,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1974,
                  "end": 1993,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1978,
                      "end": 1992,
                      "id": {
                        "type": "Identifier",
                        "start": 1978,
                        "end": 1992,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1979,
                          "end": 1992,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 1981,
                            "end": 1992,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1982,
                                "end": 1986,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1983,
                                  "end": 1986,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1985,
                                    "end": 1986,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1985,
                                      "end": 1986,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 1988,
                              "end": 1992,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1991,
                                "end": 1992,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1991,
                                  "end": 1992,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ReturnStatement",
                  "start": 2002,
                  "end": 2011,
                  "argument": {
                    "type": "Identifier",
                    "start": 2009,
                    "end": 2010,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2023,
            "end": 2066,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2027,
                "end": 2065,
                "id": {
                  "type": "Identifier",
                  "start": 2027,
                  "end": 2029,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2032,
                  "end": 2065,
                  "callee": {
                    "type": "Identifier",
                    "start": 2032,
                    "end": 2036,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "start": 2037,
                      "end": 2040,
                      "object": {
                        "type": "Identifier",
                        "start": 2037,
                        "end": 2038,
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2039,
                        "end": 2040,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2042,
                      "end": 2052,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2043,
                          "end": 2044,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "start": 2049,
                        "end": 2052,
                        "object": {
                          "type": "Identifier",
                          "start": 2049,
                          "end": 2050,
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2051,
                          "end": 2052,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 2054,
                      "end": 2064,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 2055,
                          "end": 2056,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "MemberExpression",
                        "start": 2061,
                        "end": 2064,
                        "object": {
                          "type": "Identifier",
                          "start": 2061,
                          "end": 2062,
                          "decorators": [],
                          "name": "F",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2063,
                          "end": 2064,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
