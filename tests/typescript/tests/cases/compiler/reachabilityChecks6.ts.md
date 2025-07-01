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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 28,
              "end": 32
            },
            "body": {
              "type": "EmptyStatement",
              "start": 33,
              "end": 34
            },
            "start": 21,
            "end": 34
          }
        ],
        "start": 15,
        "end": 36
      },
      "expression": false,
      "start": 0,
      "end": 36
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 49
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
          "start": 50,
          "end": 51
        }
      ],
      "returnType": null,
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
              "start": 63,
              "end": 64
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
                    "start": 83,
                    "end": 84
                  },
                  "start": 76,
                  "end": 84
                }
              ],
              "start": 66,
              "end": 90
            },
            "alternate": null,
            "start": 59,
            "end": 90
          }
        ],
        "start": 53,
        "end": 92
      },
      "expression": false,
      "start": 38,
      "end": 92
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 103,
        "end": 105
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
          "start": 106,
          "end": 107
        }
      ],
      "returnType": null,
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
              "start": 122,
              "end": 123
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
                      "start": 145,
                      "end": 150
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 141,
                    "end": 152
                  },
                  "start": 135,
                  "end": 153
                }
              ],
              "start": 125,
              "end": 159
            },
            "start": 115,
            "end": 159
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 171,
              "end": 172
            },
            "start": 164,
            "end": 173
          }
        ],
        "start": 109,
        "end": 175
      },
      "expression": false,
      "start": 94,
      "end": 175
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 188
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
          "start": 189,
          "end": 190
        }
      ],
      "returnType": null,
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
              "start": 205,
              "end": 206
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
                      "start": 228,
                      "end": 233
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 224,
                    "end": 235
                  },
                  "start": 218,
                  "end": 236
                }
              ],
              "start": 208,
              "end": 242
            },
            "start": 198,
            "end": 242
          }
        ],
        "start": 192,
        "end": 244
      },
      "expression": false,
      "start": 177,
      "end": 244
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 259
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
          "start": 261,
          "end": 262
        }
      ],
      "returnType": null,
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
              "start": 277,
              "end": 278
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 280,
              "end": 287
            },
            "start": 270,
            "end": 287
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
                "start": 302,
                "end": 307
              },
              "typeArguments": null,
              "arguments": [],
              "start": 298,
              "end": 309
            },
            "start": 292,
            "end": 310
          }
        ],
        "start": 264,
        "end": 312
      },
      "expression": false,
      "start": 246,
      "end": 312
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 325
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
          "start": 326,
          "end": 327
        }
      ],
      "returnType": null,
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
                    "start": 353,
                    "end": 354
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
                          "start": 377,
                          "end": 378
                        },
                        "start": 370,
                        "end": 379
                      }
                    ],
                    "start": 356,
                    "end": 389
                  },
                  "alternate": null,
                  "start": 349,
                  "end": 389
                }
              ],
              "start": 339,
              "end": 395
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 407,
                "end": 408
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 410,
                "end": 417
              },
              "start": 400,
              "end": 417
            },
            "finalizer": null,
            "start": 335,
            "end": 417
          }
        ],
        "start": 329,
        "end": 419
      },
      "expression": false,
      "start": 314,
      "end": 419
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 430,
        "end": 432
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
          "start": 433,
          "end": 434
        }
      ],
      "returnType": null,
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
                    "start": 460,
                    "end": 461
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
                          "start": 484,
                          "end": 485
                        },
                        "start": 477,
                        "end": 486
                      }
                    ],
                    "start": 463,
                    "end": 496
                  },
                  "alternate": null,
                  "start": 456,
                  "end": 496
                }
              ],
              "start": 446,
              "end": 502
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 515
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
                      "start": 534,
                      "end": 535
                    },
                    "start": 527,
                    "end": 536
                  }
                ],
                "start": 517,
                "end": 542
              },
              "start": 507,
              "end": 542
            },
            "finalizer": null,
            "start": 442,
            "end": 542
          }
        ],
        "start": 436,
        "end": 544
      },
      "expression": false,
      "start": 421,
      "end": 544
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 555,
        "end": 557
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
          "start": 558,
          "end": 559
        }
      ],
      "returnType": null,
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
                    "start": 585,
                    "end": 586
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
                          "start": 609,
                          "end": 610
                        },
                        "start": 602,
                        "end": 611
                      }
                    ],
                    "start": 588,
                    "end": 621
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
                            "start": 668,
                            "end": 673
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 664,
                          "end": 675
                        },
                        "start": 658,
                        "end": 676
                      }
                    ],
                    "start": 644,
                    "end": 686
                  },
                  "start": 581,
                  "end": 686
                }
              ],
              "start": 571,
              "end": 692
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 704,
                "end": 705
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 707,
                "end": 714
              },
              "start": 697,
              "end": 714
            },
            "finalizer": null,
            "start": 567,
            "end": 714
          }
        ],
        "start": 561,
        "end": 716
      },
      "expression": false,
      "start": 546,
      "end": 716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 729
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
          "start": 730,
          "end": 731
        }
      ],
      "returnType": null,
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
                    "start": 757,
                    "end": 758
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
                          "start": 781,
                          "end": 782
                        },
                        "start": 774,
                        "end": 783
                      }
                    ],
                    "start": 760,
                    "end": 793
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
                            "start": 831,
                            "end": 836
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 827,
                          "end": 838
                        },
                        "start": 821,
                        "end": 839
                      }
                    ],
                    "start": 807,
                    "end": 849
                  },
                  "start": 753,
                  "end": 849
                }
              ],
              "start": 743,
              "end": 855
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 867,
                "end": 868
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
                      "start": 887,
                      "end": 888
                    },
                    "start": 880,
                    "end": 889
                  }
                ],
                "start": 870,
                "end": 895
              },
              "start": 860,
              "end": 895
            },
            "finalizer": null,
            "start": 739,
            "end": 895
          }
        ],
        "start": 733,
        "end": 897
      },
      "expression": false,
      "start": 718,
      "end": 897
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 908,
        "end": 910
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
          "start": 911,
          "end": 912
        }
      ],
      "returnType": null,
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
                    "start": 938,
                    "end": 942
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
                            "start": 958,
                            "end": 959
                          },
                          "start": 958,
                          "end": 961
                        },
                        "directive": null,
                        "start": 958,
                        "end": 962
                      }
                    ],
                    "start": 944,
                    "end": 972
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
                          "start": 1007,
                          "end": 1008
                        },
                        "start": 1000,
                        "end": 1009
                      }
                    ],
                    "start": 986,
                    "end": 1019
                  },
                  "start": 934,
                  "end": 1019
                }
              ],
              "start": 924,
              "end": 1025
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1037,
                "end": 1038
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
                      "start": 1057,
                      "end": 1058
                    },
                    "start": 1050,
                    "end": 1059
                  }
                ],
                "start": 1040,
                "end": 1065
              },
              "start": 1030,
              "end": 1065
            },
            "finalizer": null,
            "start": 920,
            "end": 1065
          }
        ],
        "start": 914,
        "end": 1067
      },
      "expression": false,
      "start": 899,
      "end": 1067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1078,
        "end": 1080
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
          "start": 1081,
          "end": 1082
        }
      ],
      "returnType": null,
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
                    "start": 1111,
                    "end": 1116
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
                          "start": 1139,
                          "end": 1140
                        },
                        "start": 1132,
                        "end": 1141
                      }
                    ],
                    "start": 1118,
                    "end": 1151
                  },
                  "start": 1104,
                  "end": 1151
                }
              ],
              "start": 1094,
              "end": 1157
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1169,
                "end": 1170
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
                      "start": 1189,
                      "end": 1190
                    },
                    "start": 1182,
                    "end": 1191
                  }
                ],
                "start": 1172,
                "end": 1197
              },
              "start": 1162,
              "end": 1197
            },
            "finalizer": null,
            "start": 1090,
            "end": 1197
          }
        ],
        "start": 1084,
        "end": 1199
      },
      "expression": false,
      "start": 1069,
      "end": 1199
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1210,
        "end": 1213
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
          "start": 1214,
          "end": 1215
        }
      ],
      "returnType": null,
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
                            "start": 1254,
                            "end": 1255
                          },
                          "start": 1254,
                          "end": 1257
                        },
                        "directive": null,
                        "start": 1254,
                        "end": 1258
                      }
                    ],
                    "start": 1240,
                    "end": 1268
                  },
                  "test": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1276,
                    "end": 1280
                  },
                  "start": 1237,
                  "end": 1282
                }
              ],
              "start": 1227,
              "end": 1288
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1300,
                "end": 1301
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
                      "start": 1320,
                      "end": 1321
                    },
                    "start": 1313,
                    "end": 1322
                  }
                ],
                "start": 1303,
                "end": 1328
              },
              "start": 1293,
              "end": 1328
            },
            "finalizer": null,
            "start": 1223,
            "end": 1328
          }
        ],
        "start": 1217,
        "end": 1330
      },
      "expression": false,
      "start": 1201,
      "end": 1330
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1341,
        "end": 1344
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
          "start": 1345,
          "end": 1346
        }
      ],
      "returnType": null,
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
              "start": 1354,
              "end": 1358
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
                                  "start": 1422,
                                  "end": 1426
                                },
                                "start": 1416,
                                "end": 1427
                              }
                            ],
                            "start": 1398,
                            "end": 1441
                          },
                          "test": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1449,
                            "end": 1453
                          },
                          "start": 1395,
                          "end": 1455
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
                              "start": 1468,
                              "end": 1469
                            },
                            "start": 1468,
                            "end": 1471
                          },
                          "directive": null,
                          "start": 1468,
                          "end": 1472
                        }
                      ],
                      "start": 1381,
                      "end": 1482
                    },
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 1490,
                      "end": 1494
                    },
                    "start": 1378,
                    "end": 1496
                  }
                ],
                "start": 1368,
                "end": 1502
              },
              "handler": {
                "type": "CatchClause",
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1514,
                  "end": 1515
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
                        "start": 1534,
                        "end": 1535
                      },
                      "start": 1527,
                      "end": 1536
                    }
                  ],
                  "start": 1517,
                  "end": 1542
                },
                "start": 1507,
                "end": 1542
              },
              "finalizer": null,
              "start": 1364,
              "end": 1542
            },
            "start": 1354,
            "end": 1542
          }
        ],
        "start": 1348,
        "end": 1544
      },
      "expression": false,
      "start": 1332,
      "end": 1544
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1544
}
```
