__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1544,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 13,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 36,
        "body": [
          {
            "type": "WhileStatement",
            "start": 21,
            "end": 34,
            "test": {
              "type": "Literal",
              "start": 28,
              "end": 32,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "EmptyStatement",
              "start": 33,
              "end": 34
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 49,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 50,
          "end": 51,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 53,
        "end": 92,
        "body": [
          {
            "type": "IfStatement",
            "start": 59,
            "end": 90,
            "test": {
              "type": "Identifier",
              "start": 63,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 66,
              "end": 90,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 76,
                  "end": 84,
                  "argument": {
                    "type": "Literal",
                    "start": 83,
                    "end": 84,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 105,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 106,
          "end": 107,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 175,
        "body": [
          {
            "type": "WhileStatement",
            "start": 115,
            "end": 159,
            "test": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 125,
              "end": 159,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 135,
                  "end": 153,
                  "argument": {
                    "type": "NewExpression",
                    "start": 141,
                    "end": 152,
                    "callee": {
                      "type": "Identifier",
                      "start": 145,
                      "end": 150,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 164,
            "end": 173,
            "argument": {
              "type": "Literal",
              "start": 171,
              "end": 172,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 177,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 188,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 190,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 192,
        "end": 244,
        "body": [
          {
            "type": "WhileStatement",
            "start": 198,
            "end": 242,
            "test": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 208,
              "end": 242,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 218,
                  "end": 236,
                  "argument": {
                    "type": "NewExpression",
                    "start": 224,
                    "end": 235,
                    "callee": {
                      "type": "Identifier",
                      "start": 228,
                      "end": 233,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": []
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 246,
      "end": 312,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 259,
        "decorators": [],
        "name": "f3_1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 261,
          "end": 262,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 312,
        "body": [
          {
            "type": "WhileStatement",
            "start": 270,
            "end": 287,
            "test": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 280,
              "end": 287,
              "body": []
            }
          },
          {
            "type": "ThrowStatement",
            "start": 292,
            "end": 310,
            "argument": {
              "type": "NewExpression",
              "start": 298,
              "end": 309,
              "callee": {
                "type": "Identifier",
                "start": 302,
                "end": 307,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 314,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 323,
        "end": 325,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 326,
          "end": 327,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 329,
        "end": 419,
        "body": [
          {
            "type": "TryStatement",
            "start": 335,
            "end": 417,
            "block": {
              "type": "BlockStatement",
              "start": 339,
              "end": 395,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 349,
                  "end": 389,
                  "test": {
                    "type": "Identifier",
                    "start": 353,
                    "end": 354,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 356,
                    "end": 389,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 370,
                        "end": 379,
                        "argument": {
                          "type": "Literal",
                          "start": 377,
                          "end": 378,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 400,
              "end": 417,
              "param": {
                "type": "Identifier",
                "start": 407,
                "end": 408,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 410,
                "end": 417,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 421,
      "end": 544,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 432,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 433,
          "end": 434,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 436,
        "end": 544,
        "body": [
          {
            "type": "TryStatement",
            "start": 442,
            "end": 542,
            "block": {
              "type": "BlockStatement",
              "start": 446,
              "end": 502,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 456,
                  "end": 496,
                  "test": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 463,
                    "end": 496,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 477,
                        "end": 486,
                        "argument": {
                          "type": "Literal",
                          "start": 484,
                          "end": 485,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 507,
              "end": 542,
              "param": {
                "type": "Identifier",
                "start": 514,
                "end": 515,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 517,
                "end": 542,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 527,
                    "end": 536,
                    "argument": {
                      "type": "Literal",
                      "start": 534,
                      "end": 535,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 546,
      "end": 716,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 557,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 558,
          "end": 559,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 561,
        "end": 716,
        "body": [
          {
            "type": "TryStatement",
            "start": 567,
            "end": 714,
            "block": {
              "type": "BlockStatement",
              "start": 571,
              "end": 692,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 581,
                  "end": 686,
                  "test": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 588,
                    "end": 621,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 602,
                        "end": 611,
                        "argument": {
                          "type": "Literal",
                          "start": 609,
                          "end": 610,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 644,
                    "end": 686,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 658,
                        "end": 676,
                        "argument": {
                          "type": "NewExpression",
                          "start": 664,
                          "end": 675,
                          "callee": {
                            "type": "Identifier",
                            "start": 668,
                            "end": 673,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 697,
              "end": 714,
              "param": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 707,
                "end": 714,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 897,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 729,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 730,
          "end": 731,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 733,
        "end": 897,
        "body": [
          {
            "type": "TryStatement",
            "start": 739,
            "end": 895,
            "block": {
              "type": "BlockStatement",
              "start": 743,
              "end": 855,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 753,
                  "end": 849,
                  "test": {
                    "type": "Identifier",
                    "start": 757,
                    "end": 758,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 760,
                    "end": 793,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 774,
                        "end": 783,
                        "argument": {
                          "type": "Literal",
                          "start": 781,
                          "end": 782,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 807,
                    "end": 849,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 821,
                        "end": 839,
                        "argument": {
                          "type": "NewExpression",
                          "start": 827,
                          "end": 838,
                          "callee": {
                            "type": "Identifier",
                            "start": 831,
                            "end": 836,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": []
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 860,
              "end": 895,
              "param": {
                "type": "Identifier",
                "start": 867,
                "end": 868,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 870,
                "end": 895,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 880,
                    "end": 889,
                    "argument": {
                      "type": "Literal",
                      "start": 887,
                      "end": 888,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 899,
      "end": 1067,
      "id": {
        "type": "Identifier",
        "start": 908,
        "end": 910,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 911,
          "end": 912,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 914,
        "end": 1067,
        "body": [
          {
            "type": "TryStatement",
            "start": 920,
            "end": 1065,
            "block": {
              "type": "BlockStatement",
              "start": 924,
              "end": 1025,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 934,
                  "end": 1019,
                  "test": {
                    "type": "Literal",
                    "start": 938,
                    "end": 942,
                    "value": true,
                    "raw": "true"
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 944,
                    "end": 972,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 958,
                        "end": 962,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 958,
                          "end": 961,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 958,
                            "end": 959,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 986,
                    "end": 1019,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1000,
                        "end": 1009,
                        "argument": {
                          "type": "Literal",
                          "start": 1007,
                          "end": 1008,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1030,
              "end": 1065,
              "param": {
                "type": "Identifier",
                "start": 1037,
                "end": 1038,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1040,
                "end": 1065,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1050,
                    "end": 1059,
                    "argument": {
                      "type": "Literal",
                      "start": 1057,
                      "end": 1058,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1069,
      "end": 1199,
      "id": {
        "type": "Identifier",
        "start": 1078,
        "end": 1080,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1081,
          "end": 1082,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1084,
        "end": 1199,
        "body": [
          {
            "type": "TryStatement",
            "start": 1090,
            "end": 1197,
            "block": {
              "type": "BlockStatement",
              "start": 1094,
              "end": 1157,
              "body": [
                {
                  "type": "WhileStatement",
                  "start": 1104,
                  "end": 1151,
                  "test": {
                    "type": "Literal",
                    "start": 1111,
                    "end": 1116,
                    "value": false,
                    "raw": "false"
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 1118,
                    "end": 1151,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1132,
                        "end": 1141,
                        "argument": {
                          "type": "Literal",
                          "start": 1139,
                          "end": 1140,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1162,
              "end": 1197,
              "param": {
                "type": "Identifier",
                "start": 1169,
                "end": 1170,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1172,
                "end": 1197,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1182,
                    "end": 1191,
                    "argument": {
                      "type": "Literal",
                      "start": 1189,
                      "end": 1190,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1201,
      "end": 1330,
      "id": {
        "type": "Identifier",
        "start": 1210,
        "end": 1213,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1214,
          "end": 1215,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1217,
        "end": 1330,
        "body": [
          {
            "type": "TryStatement",
            "start": 1223,
            "end": 1328,
            "block": {
              "type": "BlockStatement",
              "start": 1227,
              "end": 1288,
              "body": [
                {
                  "type": "DoWhileStatement",
                  "start": 1237,
                  "end": 1282,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1240,
                    "end": 1268,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1254,
                        "end": 1258,
                        "expression": {
                          "type": "UpdateExpression",
                          "start": 1254,
                          "end": 1257,
                          "operator": "++",
                          "prefix": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 1254,
                            "end": 1255,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1276,
                    "end": 1280,
                    "value": true,
                    "raw": "true"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 1293,
              "end": 1328,
              "param": {
                "type": "Identifier",
                "start": 1300,
                "end": 1301,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 1303,
                "end": 1328,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1313,
                    "end": 1322,
                    "argument": {
                      "type": "Literal",
                      "start": 1320,
                      "end": 1321,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1332,
      "end": 1544,
      "id": {
        "type": "Identifier",
        "start": 1341,
        "end": 1344,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1345,
          "end": 1346,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1348,
        "end": 1544,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1354,
            "end": 1542,
            "label": {
              "type": "Identifier",
              "start": 1354,
              "end": 1358,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TryStatement",
              "start": 1364,
              "end": 1542,
              "block": {
                "type": "BlockStatement",
                "start": 1368,
                "end": 1502,
                "body": [
                  {
                    "type": "DoWhileStatement",
                    "start": 1378,
                    "end": 1496,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1381,
                      "end": 1482,
                      "body": [
                        {
                          "type": "DoWhileStatement",
                          "start": 1395,
                          "end": 1455,
                          "body": {
                            "type": "BlockStatement",
                            "start": 1398,
                            "end": 1441,
                            "body": [
                              {
                                "type": "BreakStatement",
                                "start": 1416,
                                "end": 1427,
                                "label": {
                                  "type": "Identifier",
                                  "start": 1422,
                                  "end": 1426,
                                  "decorators": [],
                                  "name": "test",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "test": {
                            "type": "Literal",
                            "start": 1449,
                            "end": 1453,
                            "value": true,
                            "raw": "true"
                          }
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 1468,
                          "end": 1472,
                          "expression": {
                            "type": "UpdateExpression",
                            "start": 1468,
                            "end": 1471,
                            "operator": "++",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "start": 1468,
                              "end": 1469,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "test": {
                      "type": "Literal",
                      "start": 1490,
                      "end": 1494,
                      "value": true,
                      "raw": "true"
                    }
                  }
                ]
              },
              "handler": {
                "type": "CatchClause",
                "start": 1507,
                "end": 1542,
                "param": {
                  "type": "Identifier",
                  "start": 1514,
                  "end": 1515,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 1517,
                  "end": 1542,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1527,
                      "end": 1536,
                      "argument": {
                        "type": "Literal",
                        "start": 1534,
                        "end": 1535,
                        "value": 1,
                        "raw": "1"
                      }
                    }
                  ]
                }
              },
              "finalizer": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
