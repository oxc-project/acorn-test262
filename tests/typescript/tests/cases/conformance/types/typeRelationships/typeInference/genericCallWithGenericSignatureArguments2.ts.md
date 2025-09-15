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
        "start": 315,
        "end": 320
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
              "start": 336,
              "end": 339
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
                    "start": 340,
                    "end": 341
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 340,
                  "end": 341
                }
              ],
              "start": 339,
              "end": 342
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
                              "start": 366,
                              "end": 367
                            },
                            "typeArguments": null,
                            "start": 366,
                            "end": 367
                          },
                          "start": 364,
                          "end": 367
                        },
                        "start": 363,
                        "end": 367
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
                          "start": 372,
                          "end": 373
                        },
                        "typeArguments": null,
                        "start": 372,
                        "end": 373
                      },
                      "start": 369,
                      "end": 373
                    },
                    "start": 362,
                    "end": 373
                  },
                  "start": 360,
                  "end": 373
                },
                "start": 359,
                "end": 373
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
                                      "start": 396,
                                      "end": 397
                                    },
                                    "typeArguments": null,
                                    "start": 396,
                                    "end": 397
                                  },
                                  "start": 394,
                                  "end": 397
                                },
                                "start": 393,
                                "end": 397
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
                                  "start": 402,
                                  "end": 403
                                },
                                "typeArguments": null,
                                "start": 402,
                                "end": 403
                              },
                              "start": 399,
                              "end": 403
                            },
                            "start": 392,
                            "end": 403
                          },
                          "start": 390,
                          "end": 403
                        },
                        "start": 389,
                        "end": 403
                      },
                      "init": null,
                      "definite": false,
                      "start": 389,
                      "end": 403
                    }
                  ],
                  "declare": false,
                  "start": 385,
                  "end": 404
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 420,
                    "end": 421
                  },
                  "start": 413,
                  "end": 422
                }
              ],
              "start": 375,
              "end": 428
            },
            "expression": false,
            "start": 327,
            "end": 428
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
                              "start": 446,
                              "end": 448
                            },
                            "start": 444,
                            "end": 448
                          },
                          "start": 443,
                          "end": 448
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 453,
                          "end": 455
                        },
                        "start": 450,
                        "end": 455
                      },
                      "start": 442,
                      "end": 455
                    },
                    "start": 440,
                    "end": 455
                  },
                  "start": 438,
                  "end": 455
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 458,
                    "end": 461
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
                              "start": 466,
                              "end": 472
                            },
                            "start": 464,
                            "end": 472
                          },
                          "start": 463,
                          "end": 472
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 477,
                        "end": 478
                      },
                      "id": null,
                      "generator": false,
                      "start": 462,
                      "end": 478
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
                              "start": 484,
                              "end": 490
                            },
                            "start": 482,
                            "end": 490
                          },
                          "start": 481,
                          "end": 490
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 495,
                        "end": 497
                      },
                      "id": null,
                      "generator": false,
                      "start": 480,
                      "end": 497
                    }
                  ],
                  "optional": false,
                  "start": 458,
                  "end": 498
                },
                "definite": false,
                "start": 438,
                "end": 498
              }
            ],
            "declare": false,
            "start": 434,
            "end": 499
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null,
              "start": 514,
              "end": 520
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
                    "start": 521,
                    "end": 522
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 531,
                      "end": 535
                    },
                    "typeArguments": null,
                    "start": 531,
                    "end": 535
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 521,
                  "end": 535
                }
              ],
              "start": 520,
              "end": 536
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
                      "start": 540,
                      "end": 541
                    },
                    "typeArguments": null,
                    "start": 540,
                    "end": 541
                  },
                  "start": 538,
                  "end": 541
                },
                "start": 537,
                "end": 541
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
                        "start": 557,
                        "end": 559
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 562,
                          "end": 565
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
                                      "start": 570,
                                      "end": 571
                                    },
                                    "typeArguments": null,
                                    "start": 570,
                                    "end": 571
                                  },
                                  "start": 568,
                                  "end": 571
                                },
                                "start": 567,
                                "end": 571
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 576,
                              "end": 577
                            },
                            "id": null,
                            "generator": false,
                            "start": 566,
                            "end": 577
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
                                      "start": 583,
                                      "end": 584
                                    },
                                    "typeArguments": null,
                                    "start": 583,
                                    "end": 584
                                  },
                                  "start": 581,
                                  "end": 584
                                },
                                "start": 580,
                                "end": 584
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 589,
                              "end": 590
                            },
                            "id": null,
                            "generator": false,
                            "start": 579,
                            "end": 590
                          }
                        ],
                        "optional": false,
                        "start": 562,
                        "end": 591
                      },
                      "definite": false,
                      "start": 557,
                      "end": 591
                    }
                  ],
                  "declare": false,
                  "start": 553,
                  "end": 592
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
                        "start": 637,
                        "end": 639
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 642,
                          "end": 644
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
                              "start": 649,
                              "end": 653
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 645,
                            "end": 655
                          }
                        ],
                        "optional": false,
                        "start": 642,
                        "end": 656
                      },
                      "definite": false,
                      "start": 637,
                      "end": 656
                    }
                  ],
                  "declare": false,
                  "start": 633,
                  "end": 657
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
                        "start": 686,
                        "end": 689
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 692,
                          "end": 694
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 695,
                            "end": 696
                          }
                        ],
                        "optional": false,
                        "start": 692,
                        "end": 697
                      },
                      "definite": false,
                      "start": 686,
                      "end": 697
                    }
                  ],
                  "declare": false,
                  "start": 682,
                  "end": 698
                }
              ],
              "start": 543,
              "end": 713
            },
            "expression": false,
            "start": 505,
            "end": 713
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 728,
              "end": 732
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
                    "start": 733,
                    "end": 734
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 747
                    },
                    "typeArguments": null,
                    "start": 743,
                    "end": 747
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 733,
                  "end": 747
                }
              ],
              "start": 732,
              "end": 748
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
                              "start": 756,
                              "end": 757
                            },
                            "typeArguments": null,
                            "start": 756,
                            "end": 757
                          },
                          "start": 754,
                          "end": 757
                        },
                        "start": 753,
                        "end": 757
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
                          "start": 762,
                          "end": 763
                        },
                        "typeArguments": null,
                        "start": 762,
                        "end": 763
                      },
                      "start": 759,
                      "end": 763
                    },
                    "start": 752,
                    "end": 763
                  },
                  "start": 750,
                  "end": 763
                },
                "start": 749,
                "end": 763
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
                              "start": 772,
                              "end": 773
                            },
                            "typeArguments": null,
                            "start": 772,
                            "end": 773
                          },
                          "start": 770,
                          "end": 773
                        },
                        "start": 769,
                        "end": 773
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
                          "start": 778,
                          "end": 779
                        },
                        "typeArguments": null,
                        "start": 778,
                        "end": 779
                      },
                      "start": 775,
                      "end": 779
                    },
                    "start": 768,
                    "end": 779
                  },
                  "start": 766,
                  "end": 779
                },
                "start": 765,
                "end": 779
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
                                      "start": 802,
                                      "end": 803
                                    },
                                    "typeArguments": null,
                                    "start": 802,
                                    "end": 803
                                  },
                                  "start": 800,
                                  "end": 803
                                },
                                "start": 799,
                                "end": 803
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
                                  "start": 808,
                                  "end": 809
                                },
                                "typeArguments": null,
                                "start": 808,
                                "end": 809
                              },
                              "start": 805,
                              "end": 809
                            },
                            "start": 798,
                            "end": 809
                          },
                          "start": 796,
                          "end": 809
                        },
                        "start": 795,
                        "end": 809
                      },
                      "init": null,
                      "definite": false,
                      "start": 795,
                      "end": 809
                    }
                  ],
                  "declare": false,
                  "start": 791,
                  "end": 810
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 826,
                    "end": 827
                  },
                  "start": 819,
                  "end": 828
                }
              ],
              "start": 781,
              "end": 834
            },
            "expression": false,
            "start": 719,
            "end": 834
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null,
              "start": 849,
              "end": 855
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
                    "start": 856,
                    "end": 857
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 872
                    },
                    "typeArguments": null,
                    "start": 866,
                    "end": 872
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 856,
                  "end": 872
                }
              ],
              "start": 855,
              "end": 873
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
                      "start": 877,
                      "end": 878
                    },
                    "typeArguments": null,
                    "start": 877,
                    "end": 878
                  },
                  "start": 875,
                  "end": 878
                },
                "start": 874,
                "end": 878
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
                        "start": 894,
                        "end": 896
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 899,
                          "end": 903
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
                                      "start": 908,
                                      "end": 909
                                    },
                                    "typeArguments": null,
                                    "start": 908,
                                    "end": 909
                                  },
                                  "start": 906,
                                  "end": 909
                                },
                                "start": 905,
                                "end": 909
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 914,
                              "end": 915
                            },
                            "id": null,
                            "generator": false,
                            "start": 904,
                            "end": 915
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
                                      "start": 921,
                                      "end": 922
                                    },
                                    "typeArguments": null,
                                    "start": 921,
                                    "end": 922
                                  },
                                  "start": 919,
                                  "end": 922
                                },
                                "start": 918,
                                "end": 922
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 927,
                              "end": 928
                            },
                            "id": null,
                            "generator": false,
                            "start": 917,
                            "end": 928
                          }
                        ],
                        "optional": false,
                        "start": 899,
                        "end": 929
                      },
                      "definite": false,
                      "start": 894,
                      "end": 929
                    }
                  ],
                  "declare": false,
                  "start": 890,
                  "end": 930
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
                        "start": 952,
                        "end": 955
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 958,
                          "end": 962
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
                                "start": 964,
                                "end": 965
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 970,
                              "end": 971
                            },
                            "id": null,
                            "generator": false,
                            "start": 963,
                            "end": 971
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
                                "start": 974,
                                "end": 975
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 980,
                              "end": 981
                            },
                            "id": null,
                            "generator": false,
                            "start": 973,
                            "end": 981
                          }
                        ],
                        "optional": false,
                        "start": 958,
                        "end": 982
                      },
                      "definite": false,
                      "start": 952,
                      "end": 982
                    }
                  ],
                  "declare": false,
                  "start": 948,
                  "end": 983
                }
              ],
              "start": 880,
              "end": 1024
            },
            "expression": false,
            "start": 840,
            "end": 1024
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1036
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
                    "start": 1039,
                    "end": 1040
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1039,
                  "end": 1040
                }
              ],
              "start": 1037,
              "end": 1042
            },
            "const": false,
            "declare": false,
            "start": 1030,
            "end": 1042
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1052,
              "end": 1053
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
                    "start": 1056,
                    "end": 1057
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1056,
                  "end": 1057
                }
              ],
              "start": 1054,
              "end": 1059
            },
            "const": false,
            "declare": false,
            "start": 1047,
            "end": 1059
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1074,
              "end": 1078
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
                    "start": 1079,
                    "end": 1080
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1079,
                  "end": 1080
                }
              ],
              "start": 1078,
              "end": 1081
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
                      "start": 1085,
                      "end": 1086
                    },
                    "typeArguments": null,
                    "start": 1085,
                    "end": 1086
                  },
                  "start": 1083,
                  "end": 1086
                },
                "start": 1082,
                "end": 1086
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
                              "start": 1095,
                              "end": 1096
                            },
                            "typeArguments": null,
                            "start": 1095,
                            "end": 1096
                          },
                          "start": 1093,
                          "end": 1096
                        },
                        "start": 1092,
                        "end": 1096
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
                          "start": 1101,
                          "end": 1102
                        },
                        "typeArguments": null,
                        "start": 1101,
                        "end": 1102
                      },
                      "start": 1098,
                      "end": 1102
                    },
                    "start": 1091,
                    "end": 1102
                  },
                  "start": 1089,
                  "end": 1102
                },
                "start": 1088,
                "end": 1102
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
                              "start": 1111,
                              "end": 1112
                            },
                            "typeArguments": null,
                            "start": 1111,
                            "end": 1112
                          },
                          "start": 1109,
                          "end": 1112
                        },
                        "start": 1108,
                        "end": 1112
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
                          "start": 1117,
                          "end": 1118
                        },
                        "typeArguments": null,
                        "start": 1117,
                        "end": 1118
                      },
                      "start": 1114,
                      "end": 1118
                    },
                    "start": 1107,
                    "end": 1118
                  },
                  "start": 1105,
                  "end": 1118
                },
                "start": 1104,
                "end": 1118
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
                                      "start": 1141,
                                      "end": 1142
                                    },
                                    "typeArguments": null,
                                    "start": 1141,
                                    "end": 1142
                                  },
                                  "start": 1139,
                                  "end": 1142
                                },
                                "start": 1138,
                                "end": 1142
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
                                  "start": 1147,
                                  "end": 1148
                                },
                                "typeArguments": null,
                                "start": 1147,
                                "end": 1148
                              },
                              "start": 1144,
                              "end": 1148
                            },
                            "start": 1137,
                            "end": 1148
                          },
                          "start": 1135,
                          "end": 1148
                        },
                        "start": 1134,
                        "end": 1148
                      },
                      "init": null,
                      "definite": false,
                      "start": 1134,
                      "end": 1148
                    }
                  ],
                  "declare": false,
                  "start": 1130,
                  "end": 1149
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1165,
                    "end": 1166
                  },
                  "start": 1158,
                  "end": 1167
                }
              ],
              "start": 1120,
              "end": 1173
            },
            "expression": false,
            "start": 1065,
            "end": 1173
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
                  "start": 1183,
                  "end": 1185
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1188,
                    "end": 1192
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
                        "start": 1193,
                        "end": 1194
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1195,
                        "end": 1196
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1193,
                      "end": 1196
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
                          "start": 1199,
                          "end": 1200
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
                          "start": 1205,
                          "end": 1206
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1207,
                          "end": 1208
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1205,
                        "end": 1208
                      },
                      "id": null,
                      "generator": false,
                      "start": 1198,
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1211,
                          "end": 1212
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
                          "start": 1217,
                          "end": 1218
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1219,
                          "end": 1220
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1217,
                        "end": 1220
                      },
                      "id": null,
                      "generator": false,
                      "start": 1210,
                      "end": 1220
                    }
                  ],
                  "optional": false,
                  "start": 1188,
                  "end": 1221
                },
                "definite": false,
                "start": 1183,
                "end": 1221
              }
            ],
            "declare": false,
            "start": 1179,
            "end": 1222
          }
        ],
        "start": 321,
        "end": 1233
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 305,
      "end": 1233
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TU",
        "optional": false,
        "typeAnnotation": null,
        "start": 1245,
        "end": 1247
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
              "start": 1263,
              "end": 1266
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
                    "start": 1267,
                    "end": 1268
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1267,
                  "end": 1268
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1270,
                    "end": 1271
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1270,
                  "end": 1271
                }
              ],
              "start": 1266,
              "end": 1272
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
                              "start": 1280,
                              "end": 1281
                            },
                            "typeArguments": null,
                            "start": 1280,
                            "end": 1281
                          },
                          "start": 1278,
                          "end": 1281
                        },
                        "start": 1277,
                        "end": 1281
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
                          "start": 1286,
                          "end": 1287
                        },
                        "typeArguments": null,
                        "start": 1286,
                        "end": 1287
                      },
                      "start": 1283,
                      "end": 1287
                    },
                    "start": 1276,
                    "end": 1287
                  },
                  "start": 1274,
                  "end": 1287
                },
                "start": 1273,
                "end": 1287
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
                              "start": 1296,
                              "end": 1297
                            },
                            "typeArguments": null,
                            "start": 1296,
                            "end": 1297
                          },
                          "start": 1294,
                          "end": 1297
                        },
                        "start": 1293,
                        "end": 1297
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
                          "start": 1302,
                          "end": 1303
                        },
                        "typeArguments": null,
                        "start": 1302,
                        "end": 1303
                      },
                      "start": 1299,
                      "end": 1303
                    },
                    "start": 1292,
                    "end": 1303
                  },
                  "start": 1290,
                  "end": 1303
                },
                "start": 1289,
                "end": 1303
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
                                      "start": 1326,
                                      "end": 1327
                                    },
                                    "typeArguments": null,
                                    "start": 1326,
                                    "end": 1327
                                  },
                                  "start": 1324,
                                  "end": 1327
                                },
                                "start": 1323,
                                "end": 1327
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
                                  "start": 1332,
                                  "end": 1333
                                },
                                "typeArguments": null,
                                "start": 1332,
                                "end": 1333
                              },
                              "start": 1329,
                              "end": 1333
                            },
                            "start": 1322,
                            "end": 1333
                          },
                          "start": 1320,
                          "end": 1333
                        },
                        "start": 1319,
                        "end": 1333
                      },
                      "init": null,
                      "definite": false,
                      "start": 1319,
                      "end": 1333
                    }
                  ],
                  "declare": false,
                  "start": 1315,
                  "end": 1334
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1350,
                    "end": 1351
                  },
                  "start": 1343,
                  "end": 1352
                }
              ],
              "start": 1305,
              "end": 1358
            },
            "expression": false,
            "start": 1254,
            "end": 1358
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
                              "start": 1376,
                              "end": 1378
                            },
                            "start": 1374,
                            "end": 1378
                          },
                          "start": 1373,
                          "end": 1378
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 1383,
                          "end": 1385
                        },
                        "start": 1380,
                        "end": 1385
                      },
                      "start": 1372,
                      "end": 1385
                    },
                    "start": 1370,
                    "end": 1385
                  },
                  "start": 1368,
                  "end": 1385
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1388,
                    "end": 1391
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
                              "start": 1396,
                              "end": 1402
                            },
                            "start": 1394,
                            "end": 1402
                          },
                          "start": 1393,
                          "end": 1402
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1407,
                        "end": 1408
                      },
                      "id": null,
                      "generator": false,
                      "start": 1392,
                      "end": 1408
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
                              "start": 1414,
                              "end": 1420
                            },
                            "start": 1412,
                            "end": 1420
                          },
                          "start": 1411,
                          "end": 1420
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1425,
                        "end": 1427
                      },
                      "id": null,
                      "generator": false,
                      "start": 1410,
                      "end": 1427
                    }
                  ],
                  "optional": false,
                  "start": 1388,
                  "end": 1428
                },
                "definite": false,
                "start": 1368,
                "end": 1428
              }
            ],
            "declare": false,
            "start": 1364,
            "end": 1429
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1444,
              "end": 1450
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
                    "start": 1451,
                    "end": 1452
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1461,
                      "end": 1465
                    },
                    "typeArguments": null,
                    "start": 1461,
                    "end": 1465
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1451,
                  "end": 1465
                }
              ],
              "start": 1450,
              "end": 1466
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
                      "start": 1470,
                      "end": 1471
                    },
                    "typeArguments": null,
                    "start": 1470,
                    "end": 1471
                  },
                  "start": 1468,
                  "end": 1471
                },
                "start": 1467,
                "end": 1471
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
                        "start": 1487,
                        "end": 1489
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1492,
                          "end": 1495
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
                                      "start": 1500,
                                      "end": 1501
                                    },
                                    "typeArguments": null,
                                    "start": 1500,
                                    "end": 1501
                                  },
                                  "start": 1498,
                                  "end": 1501
                                },
                                "start": 1497,
                                "end": 1501
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1506,
                              "end": 1507
                            },
                            "id": null,
                            "generator": false,
                            "start": 1496,
                            "end": 1507
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
                                      "start": 1513,
                                      "end": 1514
                                    },
                                    "typeArguments": null,
                                    "start": 1513,
                                    "end": 1514
                                  },
                                  "start": 1511,
                                  "end": 1514
                                },
                                "start": 1510,
                                "end": 1514
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1519,
                              "end": 1520
                            },
                            "id": null,
                            "generator": false,
                            "start": 1509,
                            "end": 1520
                          }
                        ],
                        "optional": false,
                        "start": 1492,
                        "end": 1521
                      },
                      "definite": false,
                      "start": 1487,
                      "end": 1521
                    }
                  ],
                  "declare": false,
                  "start": 1483,
                  "end": 1522
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
                        "start": 1536,
                        "end": 1538
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1541,
                          "end": 1543
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
                              "start": 1548,
                              "end": 1552
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "start": 1544,
                            "end": 1554
                          }
                        ],
                        "optional": false,
                        "start": 1541,
                        "end": 1555
                      },
                      "definite": false,
                      "start": 1536,
                      "end": 1555
                    }
                  ],
                  "declare": false,
                  "start": 1532,
                  "end": 1556
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
                        "start": 1570,
                        "end": 1573
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "r7",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1576,
                          "end": 1578
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1579,
                            "end": 1580
                          }
                        ],
                        "optional": false,
                        "start": 1576,
                        "end": 1581
                      },
                      "definite": false,
                      "start": 1570,
                      "end": 1581
                    }
                  ],
                  "declare": false,
                  "start": 1566,
                  "end": 1582
                }
              ],
              "start": 1473,
              "end": 1589
            },
            "expression": false,
            "start": 1435,
            "end": 1589
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1604,
              "end": 1608
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
                    "start": 1609,
                    "end": 1610
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1619,
                      "end": 1623
                    },
                    "typeArguments": null,
                    "start": 1619,
                    "end": 1623
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1609,
                  "end": 1623
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1625,
                    "end": 1626
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Date",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1635,
                      "end": 1639
                    },
                    "typeArguments": null,
                    "start": 1635,
                    "end": 1639
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1625,
                  "end": 1639
                }
              ],
              "start": 1608,
              "end": 1640
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
                              "start": 1648,
                              "end": 1649
                            },
                            "typeArguments": null,
                            "start": 1648,
                            "end": 1649
                          },
                          "start": 1646,
                          "end": 1649
                        },
                        "start": 1645,
                        "end": 1649
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
                          "start": 1654,
                          "end": 1655
                        },
                        "typeArguments": null,
                        "start": 1654,
                        "end": 1655
                      },
                      "start": 1651,
                      "end": 1655
                    },
                    "start": 1644,
                    "end": 1655
                  },
                  "start": 1642,
                  "end": 1655
                },
                "start": 1641,
                "end": 1655
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
                              "start": 1664,
                              "end": 1665
                            },
                            "typeArguments": null,
                            "start": 1664,
                            "end": 1665
                          },
                          "start": 1662,
                          "end": 1665
                        },
                        "start": 1661,
                        "end": 1665
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
                          "start": 1670,
                          "end": 1671
                        },
                        "typeArguments": null,
                        "start": 1670,
                        "end": 1671
                      },
                      "start": 1667,
                      "end": 1671
                    },
                    "start": 1660,
                    "end": 1671
                  },
                  "start": 1658,
                  "end": 1671
                },
                "start": 1657,
                "end": 1671
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
                                      "start": 1694,
                                      "end": 1695
                                    },
                                    "typeArguments": null,
                                    "start": 1694,
                                    "end": 1695
                                  },
                                  "start": 1692,
                                  "end": 1695
                                },
                                "start": 1691,
                                "end": 1695
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
                                  "start": 1700,
                                  "end": 1701
                                },
                                "typeArguments": null,
                                "start": 1700,
                                "end": 1701
                              },
                              "start": 1697,
                              "end": 1701
                            },
                            "start": 1690,
                            "end": 1701
                          },
                          "start": 1688,
                          "end": 1701
                        },
                        "start": 1687,
                        "end": 1701
                      },
                      "init": null,
                      "definite": false,
                      "start": 1687,
                      "end": 1701
                    }
                  ],
                  "declare": false,
                  "start": 1683,
                  "end": 1702
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1718,
                    "end": 1719
                  },
                  "start": 1711,
                  "end": 1720
                }
              ],
              "start": 1673,
              "end": 1726
            },
            "expression": false,
            "start": 1595,
            "end": 1726
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "other3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1741,
              "end": 1747
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
                    "start": 1748,
                    "end": 1749
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "RegExp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1758,
                      "end": 1764
                    },
                    "typeArguments": null,
                    "start": 1758,
                    "end": 1764
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1748,
                  "end": 1764
                }
              ],
              "start": 1747,
              "end": 1765
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
                      "start": 1769,
                      "end": 1770
                    },
                    "typeArguments": null,
                    "start": 1769,
                    "end": 1770
                  },
                  "start": 1767,
                  "end": 1770
                },
                "start": 1766,
                "end": 1770
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
                        "start": 1786,
                        "end": 1788
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1791,
                          "end": 1795
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
                                      "start": 1800,
                                      "end": 1801
                                    },
                                    "typeArguments": null,
                                    "start": 1800,
                                    "end": 1801
                                  },
                                  "start": 1798,
                                  "end": 1801
                                },
                                "start": 1797,
                                "end": 1801
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1806,
                              "end": 1807
                            },
                            "id": null,
                            "generator": false,
                            "start": 1796,
                            "end": 1807
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
                                      "start": 1813,
                                      "end": 1814
                                    },
                                    "typeArguments": null,
                                    "start": 1813,
                                    "end": 1814
                                  },
                                  "start": 1811,
                                  "end": 1814
                                },
                                "start": 1810,
                                "end": 1814
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1819,
                              "end": 1820
                            },
                            "id": null,
                            "generator": false,
                            "start": 1809,
                            "end": 1820
                          }
                        ],
                        "optional": false,
                        "start": 1791,
                        "end": 1821
                      },
                      "definite": false,
                      "start": 1786,
                      "end": 1821
                    }
                  ],
                  "declare": false,
                  "start": 1782,
                  "end": 1822
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
                        "start": 1836,
                        "end": 1839
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1842,
                          "end": 1846
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
                                "start": 1848,
                                "end": 1849
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1854,
                              "end": 1855
                            },
                            "id": null,
                            "generator": false,
                            "start": 1847,
                            "end": 1855
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
                                "start": 1858,
                                "end": 1859
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1864,
                              "end": 1865
                            },
                            "id": null,
                            "generator": false,
                            "start": 1857,
                            "end": 1865
                          }
                        ],
                        "optional": false,
                        "start": 1842,
                        "end": 1866
                      },
                      "definite": false,
                      "start": 1836,
                      "end": 1866
                    }
                  ],
                  "declare": false,
                  "start": 1832,
                  "end": 1867
                }
              ],
              "start": 1772,
              "end": 1874
            },
            "expression": false,
            "start": 1732,
            "end": 1874
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1886
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
                    "start": 1889,
                    "end": 1890
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1889,
                  "end": 1890
                }
              ],
              "start": 1887,
              "end": 1892
            },
            "const": false,
            "declare": false,
            "start": 1880,
            "end": 1892
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1902,
              "end": 1903
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
                    "start": 1906,
                    "end": 1907
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 1906,
                  "end": 1907
                }
              ],
              "start": 1904,
              "end": 1909
            },
            "const": false,
            "declare": false,
            "start": 1897,
            "end": 1909
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1924,
              "end": 1928
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
                    "start": 1929,
                    "end": 1930
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1929,
                  "end": 1930
                }
              ],
              "start": 1928,
              "end": 1931
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
                      "start": 1935,
                      "end": 1936
                    },
                    "typeArguments": null,
                    "start": 1935,
                    "end": 1936
                  },
                  "start": 1933,
                  "end": 1936
                },
                "start": 1932,
                "end": 1936
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
                              "start": 1945,
                              "end": 1946
                            },
                            "typeArguments": null,
                            "start": 1945,
                            "end": 1946
                          },
                          "start": 1943,
                          "end": 1946
                        },
                        "start": 1942,
                        "end": 1946
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
                          "start": 1951,
                          "end": 1952
                        },
                        "typeArguments": null,
                        "start": 1951,
                        "end": 1952
                      },
                      "start": 1948,
                      "end": 1952
                    },
                    "start": 1941,
                    "end": 1952
                  },
                  "start": 1939,
                  "end": 1952
                },
                "start": 1938,
                "end": 1952
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
                              "start": 1961,
                              "end": 1962
                            },
                            "typeArguments": null,
                            "start": 1961,
                            "end": 1962
                          },
                          "start": 1959,
                          "end": 1962
                        },
                        "start": 1958,
                        "end": 1962
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
                          "start": 1967,
                          "end": 1968
                        },
                        "typeArguments": null,
                        "start": 1967,
                        "end": 1968
                      },
                      "start": 1964,
                      "end": 1968
                    },
                    "start": 1957,
                    "end": 1968
                  },
                  "start": 1955,
                  "end": 1968
                },
                "start": 1954,
                "end": 1968
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
                                      "start": 1991,
                                      "end": 1992
                                    },
                                    "typeArguments": null,
                                    "start": 1991,
                                    "end": 1992
                                  },
                                  "start": 1989,
                                  "end": 1992
                                },
                                "start": 1988,
                                "end": 1992
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
                                  "start": 1997,
                                  "end": 1998
                                },
                                "typeArguments": null,
                                "start": 1997,
                                "end": 1998
                              },
                              "start": 1994,
                              "end": 1998
                            },
                            "start": 1987,
                            "end": 1998
                          },
                          "start": 1985,
                          "end": 1998
                        },
                        "start": 1984,
                        "end": 1998
                      },
                      "init": null,
                      "definite": false,
                      "start": 1984,
                      "end": 1998
                    }
                  ],
                  "declare": false,
                  "start": 1980,
                  "end": 1999
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2015,
                    "end": 2016
                  },
                  "start": 2008,
                  "end": 2017
                }
              ],
              "start": 1970,
              "end": 2023
            },
            "expression": false,
            "start": 1915,
            "end": 2023
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
                  "start": 2033,
                  "end": 2035
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2038,
                    "end": 2042
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
                        "start": 2043,
                        "end": 2044
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2045,
                        "end": 2046
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2043,
                      "end": 2046
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
                          "start": 2049,
                          "end": 2050
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
                          "start": 2055,
                          "end": 2056
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2057,
                          "end": 2058
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2055,
                        "end": 2058
                      },
                      "id": null,
                      "generator": false,
                      "start": 2048,
                      "end": 2058
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
                          "start": 2061,
                          "end": 2062
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
                          "start": 2067,
                          "end": 2068
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2069,
                          "end": 2070
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2067,
                        "end": 2070
                      },
                      "id": null,
                      "generator": false,
                      "start": 2060,
                      "end": 2070
                    }
                  ],
                  "optional": false,
                  "start": 2038,
                  "end": 2071
                },
                "definite": false,
                "start": 2033,
                "end": 2071
              }
            ],
            "declare": false,
            "start": 2029,
            "end": 2072
          }
        ],
        "start": 1248,
        "end": 2074
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1235,
      "end": 2074
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 305,
  "end": 2074
}
```
