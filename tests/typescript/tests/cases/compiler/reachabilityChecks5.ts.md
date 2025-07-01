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
        "name": "f0",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
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
          "typeAnnotation": null,
          "start": 12,
          "end": 13
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 16,
          "end": 22
        },
        "start": 14,
        "end": 22
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 36,
              "end": 40
            },
            "body": {
              "type": "EmptyStatement",
              "start": 41,
              "end": 42
            },
            "start": 29,
            "end": 42
          }
        ],
        "start": 23,
        "end": 44
      },
      "expression": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 57
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
          "typeAnnotation": null,
          "start": 58,
          "end": 59
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 62,
          "end": 68
        },
        "start": 60,
        "end": 68
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 99,
                    "end": 100
                  },
                  "start": 92,
                  "end": 100
                }
              ],
              "start": 82,
              "end": 106
            },
            "alternate": null,
            "start": 75,
            "end": 106
          }
        ],
        "start": 69,
        "end": 108
      },
      "expression": false,
      "start": 46,
      "end": 108
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 121
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
          "typeAnnotation": null,
          "start": 122,
          "end": 123
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 126,
          "end": 132
        },
        "start": 124,
        "end": 132
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 147
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 169,
                      "end": 174
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 165,
                    "end": 176
                  },
                  "start": 159,
                  "end": 177
                }
              ],
              "start": 149,
              "end": 183
            },
            "start": 139,
            "end": 183
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 195,
              "end": 196
            },
            "start": 188,
            "end": 197
          }
        ],
        "start": 133,
        "end": 199
      },
      "expression": false,
      "start": 110,
      "end": 199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 210,
        "end": 212
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
          "typeAnnotation": null,
          "start": 213,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 217,
          "end": 223
        },
        "start": 215,
        "end": 223
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 238
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ThrowStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 260,
                      "end": 265
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 256,
                    "end": 267
                  },
                  "start": 250,
                  "end": 268
                }
              ],
              "start": 240,
              "end": 274
            },
            "start": 230,
            "end": 274
          }
        ],
        "start": 224,
        "end": 276
      },
      "expression": false,
      "start": 201,
      "end": 276
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 287,
        "end": 291
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
          "typeAnnotation": null,
          "start": 293,
          "end": 294
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 297,
          "end": 303
        },
        "start": 295,
        "end": 303
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 318
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 320,
              "end": 327
            },
            "start": 310,
            "end": 327
          },
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 347
              },
              "typeArguments": null,
              "arguments": [],
              "start": 338,
              "end": 349
            },
            "start": 332,
            "end": 350
          }
        ],
        "start": 304,
        "end": 352
      },
      "expression": false,
      "start": 278,
      "end": 352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 365
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
          "typeAnnotation": null,
          "start": 366,
          "end": 367
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 370,
          "end": 376
        },
        "start": 368,
        "end": 376
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 401,
                    "end": 402
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 425,
                          "end": 426
                        },
                        "start": 418,
                        "end": 427
                      }
                    ],
                    "start": 404,
                    "end": 437
                  },
                  "alternate": null,
                  "start": 397,
                  "end": 437
                }
              ],
              "start": 387,
              "end": 443
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 456
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 458,
                "end": 465
              },
              "start": 448,
              "end": 465
            },
            "finalizer": null,
            "start": 383,
            "end": 465
          }
        ],
        "start": 377,
        "end": 467
      },
      "expression": false,
      "start": 354,
      "end": 467
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 480
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
          "typeAnnotation": null,
          "start": 481,
          "end": 482
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 485,
          "end": 491
        },
        "start": 483,
        "end": 491
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 516,
                    "end": 517
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 540,
                          "end": 541
                        },
                        "start": 533,
                        "end": 542
                      }
                    ],
                    "start": 519,
                    "end": 552
                  },
                  "alternate": null,
                  "start": 512,
                  "end": 552
                }
              ],
              "start": 502,
              "end": 558
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 571
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 590,
                      "end": 591
                    },
                    "start": 583,
                    "end": 592
                  }
                ],
                "start": 573,
                "end": 598
              },
              "start": 563,
              "end": 598
            },
            "finalizer": null,
            "start": 498,
            "end": 598
          }
        ],
        "start": 492,
        "end": 600
      },
      "expression": false,
      "start": 469,
      "end": 600
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 613
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
          "typeAnnotation": null,
          "start": 614,
          "end": 615
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 618,
          "end": 624
        },
        "start": 616,
        "end": 624
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 649,
                    "end": 650
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 673,
                          "end": 674
                        },
                        "start": 666,
                        "end": 675
                      }
                    ],
                    "start": 652,
                    "end": 685
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 732,
                            "end": 737
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 728,
                          "end": 739
                        },
                        "start": 722,
                        "end": 740
                      }
                    ],
                    "start": 708,
                    "end": 750
                  },
                  "start": 645,
                  "end": 750
                }
              ],
              "start": 635,
              "end": 756
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 769
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 771,
                "end": 778
              },
              "start": 761,
              "end": 778
            },
            "finalizer": null,
            "start": 631,
            "end": 778
          }
        ],
        "start": 625,
        "end": 780
      },
      "expression": false,
      "start": 602,
      "end": 780
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 793
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
          "typeAnnotation": null,
          "start": 794,
          "end": 795
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 798,
          "end": 804
        },
        "start": 796,
        "end": 804
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 829,
                    "end": 830
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 853,
                          "end": 854
                        },
                        "start": 846,
                        "end": 855
                      }
                    ],
                    "start": 832,
                    "end": 865
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 903,
                            "end": 908
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 899,
                          "end": 910
                        },
                        "start": 893,
                        "end": 911
                      }
                    ],
                    "start": 879,
                    "end": 921
                  },
                  "start": 825,
                  "end": 921
                }
              ],
              "start": 815,
              "end": 927
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 940
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 959,
                      "end": 960
                    },
                    "start": 952,
                    "end": 961
                  }
                ],
                "start": 942,
                "end": 967
              },
              "start": 932,
              "end": 967
            },
            "finalizer": null,
            "start": 811,
            "end": 967
          }
        ],
        "start": 805,
        "end": 969
      },
      "expression": false,
      "start": 782,
      "end": 969
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
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
          "typeAnnotation": null,
          "start": 983,
          "end": 984
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 987,
          "end": 993
        },
        "start": 985,
        "end": 993
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1018,
                    "end": 1022
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1038,
                            "end": 1039
                          },
                          "start": 1038,
                          "end": 1041
                        },
                        "directive": null,
                        "start": 1038,
                        "end": 1042
                      }
                    ],
                    "start": 1024,
                    "end": 1052
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1087,
                          "end": 1088
                        },
                        "start": 1080,
                        "end": 1089
                      }
                    ],
                    "start": 1066,
                    "end": 1099
                  },
                  "start": 1014,
                  "end": 1099
                }
              ],
              "start": 1004,
              "end": 1105
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1117,
                "end": 1118
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1137,
                      "end": 1138
                    },
                    "start": 1130,
                    "end": 1139
                  }
                ],
                "start": 1120,
                "end": 1145
              },
              "start": 1110,
              "end": 1145
            },
            "finalizer": null,
            "start": 1000,
            "end": 1145
          }
        ],
        "start": 994,
        "end": 1147
      },
      "expression": false,
      "start": 971,
      "end": 1147
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1158,
        "end": 1160
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
          "typeAnnotation": null,
          "start": 1161,
          "end": 1162
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1165,
          "end": 1171
        },
        "start": 1163,
        "end": 1171
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1199,
                    "end": 1204
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1227,
                          "end": 1228
                        },
                        "start": 1220,
                        "end": 1229
                      }
                    ],
                    "start": 1206,
                    "end": 1239
                  },
                  "start": 1192,
                  "end": 1239
                }
              ],
              "start": 1182,
              "end": 1245
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1258
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1277,
                      "end": 1278
                    },
                    "start": 1270,
                    "end": 1279
                  }
                ],
                "start": 1260,
                "end": 1285
              },
              "start": 1250,
              "end": 1285
            },
            "finalizer": null,
            "start": 1178,
            "end": 1285
          }
        ],
        "start": 1172,
        "end": 1287
      },
      "expression": false,
      "start": 1149,
      "end": 1287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1298,
        "end": 1301
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
          "typeAnnotation": null,
          "start": 1302,
          "end": 1303
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1306,
          "end": 1312
        },
        "start": 1304,
        "end": 1312
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "DoWhileStatement",
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UpdateExpression",
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1350,
                            "end": 1351
                          },
                          "start": 1350,
                          "end": 1353
                        },
                        "directive": null,
                        "start": 1350,
                        "end": 1354
                      }
                    ],
                    "start": 1336,
                    "end": 1364
                  },
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1372,
                    "end": 1376
                  },
                  "start": 1333,
                  "end": 1378
                }
              ],
              "start": 1323,
              "end": 1384
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1396,
                "end": 1397
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1416,
                      "end": 1417
                    },
                    "start": 1409,
                    "end": 1418
                  }
                ],
                "start": 1399,
                "end": 1424
              },
              "start": 1389,
              "end": 1424
            },
            "finalizer": null,
            "start": 1319,
            "end": 1424
          }
        ],
        "start": 1313,
        "end": 1426
      },
      "expression": false,
      "start": 1289,
      "end": 1426
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1437,
        "end": 1440
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
          "typeAnnotation": null,
          "start": 1441,
          "end": 1442
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1445,
          "end": 1451
        },
        "start": 1443,
        "end": 1451
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 1458,
              "end": 1462
            },
            "body": {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "DoWhileStatement",
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "DoWhileStatement",
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1526,
                                  "end": 1530
                                },
                                "start": 1520,
                                "end": 1531
                              }
                            ],
                            "start": 1502,
                            "end": 1545
                          },
                          "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1553,
                            "end": 1557
                          },
                          "start": 1499,
                          "end": 1559
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1572,
                              "end": 1573
                            },
                            "start": 1572,
                            "end": 1575
                          },
                          "directive": null,
                          "start": 1572,
                          "end": 1576
                        }
                      ],
                      "start": 1485,
                      "end": 1586
                    },
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1594,
                      "end": 1598
                    },
                    "start": 1482,
                    "end": 1600
                  }
                ],
                "start": 1472,
                "end": 1606
              },
              "handler": {
                "type": "CatchClause",
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1618,
                  "end": 1619
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1638,
                        "end": 1639
                      },
                      "start": 1631,
                      "end": 1640
                    }
                  ],
                  "start": 1621,
                  "end": 1646
                },
                "start": 1611,
                "end": 1646
              },
              "finalizer": null,
              "start": 1468,
              "end": 1646
            },
            "start": 1458,
            "end": 1646
          }
        ],
        "start": 1452,
        "end": 1648
      },
      "expression": false,
      "start": 1428,
      "end": 1648
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1648
}
```
