genericCallWithOverloadedConstructorTypedArguments.ts
```json
{
  "type": "Program",
  "start": 186,
  "end": 1510,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 186,
      "end": 448,
      "body": {
        "type": "TSModuleBlock",
        "start": 213,
        "end": 448,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 299,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 299,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 299,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 226,
                      "end": 299,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 236,
                          "end": 261,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 240,
                              "end": 250,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 241,
                                "end": 250,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 243,
                                  "end": 250
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 251,
                            "end": 260,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 253,
                              "end": 260
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 270,
                          "end": 293,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 274,
                              "end": 283,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 275,
                                "end": 283,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 277,
                                  "end": 283
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 284,
                            "end": 292,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 286,
                              "end": 292
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
            "start": 305,
            "end": 369,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 333,
              "end": 369,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 343,
                  "end": 363,
                  "argument": {
                    "type": "NewExpression",
                    "start": 350,
                    "end": 362,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 357,
                        "end": 361,
                        "raw": "null",
                        "value": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 356,
                      "decorators": [],
                      "name": "cb",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 318,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 319,
                "end": 331,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 321,
                  "end": 331,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 323,
                    "end": 331,
                    "exprName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
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
            "start": 375,
            "end": 391,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 379,
                "end": 390,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "r",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 383,
                  "end": 390,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 388,
                      "end": 389,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 383,
                    "end": 387,
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
            "start": 396,
            "end": 424,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 400,
                "end": 423,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 400,
                  "end": 423,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 401,
                    "end": 423,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 403,
                      "end": 423,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 405,
                          "end": 421,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 413,
                              "end": 417,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 414,
                                "end": 417,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 416,
                                  "end": 417,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 416,
                                    "end": 417,
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
                            "start": 418,
                            "end": 421,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 420,
                              "end": 421,
                              "typeName": {
                                "type": "Identifier",
                                "start": 420,
                                "end": 421,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 409,
                            "end": 412,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 410,
                                "end": 411,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 410,
                                  "end": 411,
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
            "start": 429,
            "end": 446,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 433,
                "end": 445,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 435,
                  "decorators": [],
                  "name": "r2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 438,
                  "end": 445,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 442,
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
      "start": 450,
      "end": 1510,
      "body": {
        "type": "TSModuleBlock",
        "start": 474,
        "end": 1510,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 480,
            "end": 569,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 543,
              "end": 569,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 553,
                  "end": 563,
                  "argument": {
                    "type": "Identifier",
                    "start": 560,
                    "end": 562,
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
              "start": 489,
              "end": 493,
              "decorators": [],
              "name": "foo5",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 497,
                "end": 541,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 499,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 501,
                    "end": 541,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 503,
                        "end": 521,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 507,
                            "end": 511,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 508,
                              "end": 511,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 510,
                                "end": 511,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 510,
                                  "end": 511,
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
                          "start": 512,
                          "end": 520,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 514,
                            "end": 520
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 522,
                        "end": 539,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 526,
                            "end": 535,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 527,
                              "end": 535,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 529,
                                "end": 535
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 536,
                          "end": 539,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 538,
                            "end": 539,
                            "typeName": {
                              "type": "Identifier",
                              "start": 538,
                              "end": 539,
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
              "start": 493,
              "end": 496,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 494,
                  "end": 495,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 495,
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
            "start": 575,
            "end": 657,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 579,
                "end": 657,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 657,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 580,
                    "end": 657,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 582,
                      "end": 657,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 592,
                          "end": 617,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 597,
                              "end": 607,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 598,
                                "end": 607,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 600,
                                  "end": 607
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 608,
                            "end": 616,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 610,
                              "end": 616
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 626,
                          "end": 651,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 631,
                              "end": 640,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 632,
                                "end": 640,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 634,
                                  "end": 640
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 641,
                            "end": 650,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 643,
                              "end": 650
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
            "type": "VariableDeclaration",
            "start": 662,
            "end": 679,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 666,
                "end": 678,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 666,
                  "end": 668,
                  "decorators": [],
                  "name": "r5",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 671,
                  "end": 678,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 676,
                      "end": 677,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 671,
                    "end": 675,
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
            "start": 724,
            "end": 778,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 728,
                "end": 778,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 778,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 729,
                    "end": 778,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 731,
                      "end": 778,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 733,
                          "end": 754,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 740,
                              "end": 744,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 741,
                                "end": 744,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 743,
                                  "end": 744,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 743,
                                    "end": 744,
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
                            "start": 745,
                            "end": 753,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 747,
                              "end": 753
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 736,
                            "end": 739,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 737,
                                "end": 738,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 737,
                                  "end": 738,
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
                          "type": "TSConstructSignatureDeclaration",
                          "start": 755,
                          "end": 776,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 762,
                              "end": 771,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 763,
                                "end": 771,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 765,
                                  "end": 771
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 772,
                            "end": 775,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 774,
                              "end": 775,
                              "typeName": {
                                "type": "Identifier",
                                "start": 774,
                                "end": 775,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 758,
                            "end": 761,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 759,
                                "end": 760,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 759,
                                  "end": 760,
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
            "start": 783,
            "end": 800,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 787,
                "end": 799,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 789,
                  "decorators": [],
                  "name": "r7",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 792,
                  "end": 799,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 797,
                      "end": 798,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 792,
                    "end": 796,
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
            "start": 849,
            "end": 945,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 919,
              "end": 945,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 929,
                  "end": 939,
                  "argument": {
                    "type": "Identifier",
                    "start": 936,
                    "end": 938,
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
              "start": 858,
              "end": 862,
              "decorators": [],
              "name": "foo6",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 866,
                "end": 917,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 868,
                  "end": 917,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 870,
                    "end": 917,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 872,
                        "end": 890,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 876,
                            "end": 880,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 877,
                              "end": 880,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 879,
                                "end": 880,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 879,
                                  "end": 880,
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
                          "start": 881,
                          "end": 889,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 883,
                            "end": 889
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 891,
                        "end": 915,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 895,
                            "end": 899,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 896,
                              "end": 899,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 898,
                                "end": 899,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 898,
                                  "end": 899,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 901,
                            "end": 906,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "optional": false
                                }
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 907,
                          "end": 915,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 909,
                            "end": 915
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
              "start": 862,
              "end": 865,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 863,
                  "end": 864,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 863,
                    "end": 864,
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
            "start": 951,
            "end": 968,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 955,
                "end": 967,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 957,
                  "decorators": [],
                  "name": "r8",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 960,
                  "end": 967,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 965,
                      "end": 966,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 964,
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
            "start": 982,
            "end": 999,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 986,
                "end": 998,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 986,
                  "end": 988,
                  "decorators": [],
                  "name": "r9",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 991,
                  "end": 998,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 996,
                      "end": 997,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 991,
                    "end": 995,
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
            "start": 1056,
            "end": 1157,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1131,
              "end": 1157,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1141,
                  "end": 1151,
                  "argument": {
                    "type": "Identifier",
                    "start": 1148,
                    "end": 1150,
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
              "start": 1065,
              "end": 1069,
              "decorators": [],
              "name": "foo7",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 1073,
                "end": 1076,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1074,
                  "end": 1076,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1075,
                    "end": 1076,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1075,
                      "end": 1076,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 1078,
                "end": 1129,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1080,
                  "end": 1129,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 1082,
                    "end": 1129,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1084,
                        "end": 1102,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1088,
                            "end": 1092,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1089,
                              "end": 1092,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1091,
                                "end": 1092,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1091,
                                  "end": 1092,
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
                          "start": 1093,
                          "end": 1101,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1095,
                            "end": 1101
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 1103,
                        "end": 1127,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 1107,
                            "end": 1111,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1108,
                              "end": 1111,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1110,
                                "end": 1111,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1110,
                                  "end": 1111,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 1113,
                            "end": 1118,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1115,
                              "end": 1118,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1117,
                                "end": 1118,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1117,
                                  "end": 1118,
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
                          "start": 1119,
                          "end": 1127,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1121,
                            "end": 1127
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
              "start": 1069,
              "end": 1072,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1070,
                  "end": 1071,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1071,
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
            "start": 1163,
            "end": 1184,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1167,
                "end": 1183,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1167,
                  "end": 1170,
                  "decorators": [],
                  "name": "r13",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1173,
                  "end": 1183,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1178,
                      "end": 1179,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Identifier",
                      "start": 1181,
                      "end": 1182,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1173,
                    "end": 1177,
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
            "start": 1240,
            "end": 1292,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1244,
                "end": 1292,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1244,
                  "end": 1292,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1245,
                    "end": 1292,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1247,
                      "end": 1292,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1249,
                          "end": 1271,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1257,
                              "end": 1261,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1258,
                                "end": 1261,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1260,
                                  "end": 1261,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1260,
                                    "end": 1261,
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
                            "start": 1262,
                            "end": 1270,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1264,
                              "end": 1270
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1253,
                            "end": 1256,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1254,
                                "end": 1255,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1254,
                                  "end": 1255,
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
                          "start": 1272,
                          "end": 1290,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1276,
                              "end": 1285,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1277,
                                "end": 1285,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1279,
                                  "end": 1285
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1286,
                            "end": 1289,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1288,
                              "end": 1289,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1288,
                                "end": 1289,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1272,
                            "end": 1275,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1273,
                                "end": 1274,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1273,
                                  "end": 1274,
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
            "start": 1297,
            "end": 1353,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1301,
                "end": 1353,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1301,
                  "end": 1353,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1303,
                    "end": 1353,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1305,
                      "end": 1353,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1307,
                          "end": 1329,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1315,
                              "end": 1319,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1316,
                                "end": 1319,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1318,
                                  "end": 1319,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1318,
                                    "end": 1319,
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
                            "start": 1320,
                            "end": 1328,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1322,
                              "end": 1328
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1311,
                            "end": 1314,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1312,
                                "end": 1313,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1312,
                                  "end": 1313,
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
                          "type": "TSConstructSignatureDeclaration",
                          "start": 1330,
                          "end": 1351,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1337,
                              "end": 1346,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1338,
                                "end": 1346,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1340,
                                  "end": 1346
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1347,
                            "end": 1350,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1349,
                              "end": 1350,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1349,
                                "end": 1350,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 1333,
                            "end": 1336,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 1334,
                                "end": 1335,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 1334,
                                  "end": 1335,
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
            "start": 1358,
            "end": 1379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1362,
                "end": 1378,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1365,
                  "decorators": [],
                  "name": "r14",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1368,
                  "end": 1378,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1373,
                      "end": 1374,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Identifier",
                      "start": 1376,
                      "end": 1377,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1368,
                    "end": 1372,
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
            "start": 1435,
            "end": 1457,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1439,
                "end": 1456,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1442,
                  "decorators": [],
                  "name": "r15",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1445,
                  "end": 1456,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1450,
                      "end": 1451,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1455,
                      "decorators": [],
                      "name": "c2",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1445,
                    "end": 1449,
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
        "start": 457,
        "end": 473,
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
