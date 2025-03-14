__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1423,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 88,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 88,
        "body": [
          {
            "type": "WhileStatement",
            "start": 70,
            "end": 86,
            "body": {
              "type": "BlockStatement",
              "start": 80,
              "end": 86,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 82,
                  "end": 84,
                  "expression": {
                    "type": "Identifier",
                    "start": 82,
                    "end": 83,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "x",
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
        "start": 46,
        "end": 61,
        "decorators": [],
        "name": "whileStatement0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 90,
      "end": 153,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 153,
        "body": [
          {
            "type": "WhileStatement",
            "start": 129,
            "end": 151,
            "body": {
              "type": "BlockStatement",
              "start": 145,
              "end": 151,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 147,
                  "end": 149,
                  "expression": {
                    "type": "Identifier",
                    "start": 147,
                    "end": 148,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 136,
              "end": 143,
              "argument": {
                "type": "Identifier",
                "start": 142,
                "end": 143,
                "decorators": [],
                "name": "x",
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
        "start": 105,
        "end": 120,
        "decorators": [],
        "name": "whileStatement1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 218,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 218,
        "body": [
          {
            "type": "WhileStatement",
            "start": 194,
            "end": 216,
            "body": {
              "type": "BlockStatement",
              "start": 204,
              "end": 216,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 206,
                  "end": 214,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 206,
                    "end": 213,
                    "argument": {
                      "type": "Identifier",
                      "start": 212,
                      "end": 213,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "x",
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
        "start": 170,
        "end": 185,
        "decorators": [],
        "name": "whileStatement2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 220,
      "end": 284,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 253,
        "end": 284,
        "body": [
          {
            "type": "WhileStatement",
            "start": 259,
            "end": 282,
            "body": {
              "type": "BlockStatement",
              "start": 269,
              "end": 282,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 271,
                  "end": 280,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 266,
              "end": 267,
              "decorators": [],
              "name": "x",
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
        "start": 235,
        "end": 250,
        "decorators": [],
        "name": "whileStatement3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 286,
      "end": 356,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 319,
        "end": 356,
        "body": [
          {
            "type": "WhileStatement",
            "start": 325,
            "end": 354,
            "body": {
              "type": "BlockStatement",
              "start": 341,
              "end": 354,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 343,
                  "end": 352,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 332,
              "end": 339,
              "argument": {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "decorators": [],
                "name": "x",
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
        "start": 301,
        "end": 316,
        "decorators": [],
        "name": "whileStatement4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 358,
      "end": 431,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 391,
        "end": 431,
        "body": [
          {
            "type": "WhileStatement",
            "start": 397,
            "end": 429,
            "body": {
              "type": "BlockStatement",
              "start": 407,
              "end": 429,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 409,
                  "end": 417,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 409,
                    "end": 416,
                    "argument": {
                      "type": "Identifier",
                      "start": 415,
                      "end": 416,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ContinueStatement",
                  "start": 418,
                  "end": 427,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 404,
              "end": 405,
              "decorators": [],
              "name": "x",
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
        "start": 373,
        "end": 388,
        "decorators": [],
        "name": "whileStatement5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 433,
      "end": 513,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 466,
        "end": 513,
        "body": [
          {
            "type": "WhileStatement",
            "start": 472,
            "end": 511,
            "body": {
              "type": "BlockStatement",
              "start": 482,
              "end": 511,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 484,
                  "end": 500,
                  "alternate": null,
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 491,
                    "end": 500,
                    "label": null
                  },
                  "test": {
                    "type": "Literal",
                    "start": 488,
                    "end": 489,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 501,
                  "end": 509,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 501,
                    "end": 508,
                    "argument": {
                      "type": "Identifier",
                      "start": 507,
                      "end": 508,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 479,
              "end": 480,
              "decorators": [],
              "name": "x",
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
        "start": 448,
        "end": 463,
        "decorators": [],
        "name": "whileStatement6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 515,
      "end": 584,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 548,
        "end": 584,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 554,
            "end": 582,
            "body": {
              "type": "WhileStatement",
              "start": 557,
              "end": 582,
              "body": {
                "type": "BlockStatement",
                "start": 567,
                "end": 582,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 569,
                    "end": 580,
                    "label": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 579,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 554,
              "end": 555,
              "decorators": [],
              "name": "A",
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
        "start": 530,
        "end": 545,
        "decorators": [],
        "name": "whileStatement7",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 586,
      "end": 661,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 619,
        "end": 661,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 625,
            "end": 659,
            "body": {
              "type": "WhileStatement",
              "start": 628,
              "end": 659,
              "body": {
                "type": "BlockStatement",
                "start": 644,
                "end": 659,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 646,
                    "end": 657,
                    "label": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 656,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "AwaitExpression",
                "start": 635,
                "end": 642,
                "argument": {
                  "type": "Identifier",
                  "start": 641,
                  "end": 642,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "label": {
              "type": "Identifier",
              "start": 625,
              "end": 626,
              "decorators": [],
              "name": "B",
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
        "start": 601,
        "end": 616,
        "decorators": [],
        "name": "whileStatement8",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 663,
      "end": 741,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 696,
        "end": 741,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 702,
            "end": 739,
            "body": {
              "type": "WhileStatement",
              "start": 705,
              "end": 739,
              "body": {
                "type": "BlockStatement",
                "start": 715,
                "end": 739,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 717,
                    "end": 725,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 717,
                      "end": 724,
                      "argument": {
                        "type": "Identifier",
                        "start": 723,
                        "end": 724,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ContinueStatement",
                    "start": 726,
                    "end": 737,
                    "label": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 736,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 712,
                "end": 713,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 702,
              "end": 703,
              "decorators": [],
              "name": "C",
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
        "start": 678,
        "end": 693,
        "decorators": [],
        "name": "whileStatement9",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 743,
      "end": 829,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 777,
        "end": 829,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 783,
            "end": 827,
            "body": {
              "type": "WhileStatement",
              "start": 786,
              "end": 827,
              "body": {
                "type": "BlockStatement",
                "start": 796,
                "end": 827,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 798,
                    "end": 816,
                    "alternate": null,
                    "consequent": {
                      "type": "ContinueStatement",
                      "start": 805,
                      "end": 816,
                      "label": {
                        "type": "Identifier",
                        "start": 814,
                        "end": 815,
                        "decorators": [],
                        "name": "D",
                        "optional": false
                      }
                    },
                    "test": {
                      "type": "Literal",
                      "start": 802,
                      "end": 803,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 817,
                    "end": 825,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 817,
                      "end": 824,
                      "argument": {
                        "type": "Identifier",
                        "start": 823,
                        "end": 824,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 783,
              "end": 784,
              "decorators": [],
              "name": "D",
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
        "start": 758,
        "end": 774,
        "decorators": [],
        "name": "whileStatement10",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 831,
      "end": 893,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 865,
        "end": 893,
        "body": [
          {
            "type": "WhileStatement",
            "start": 871,
            "end": 891,
            "body": {
              "type": "BlockStatement",
              "start": 881,
              "end": 891,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 883,
                  "end": 889,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 878,
              "end": 879,
              "decorators": [],
              "name": "x",
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
        "start": 846,
        "end": 862,
        "decorators": [],
        "name": "whileStatement11",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 895,
      "end": 963,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 929,
        "end": 963,
        "body": [
          {
            "type": "WhileStatement",
            "start": 935,
            "end": 961,
            "body": {
              "type": "BlockStatement",
              "start": 951,
              "end": 961,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 953,
                  "end": 959,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 942,
              "end": 949,
              "argument": {
                "type": "Identifier",
                "start": 948,
                "end": 949,
                "decorators": [],
                "name": "x",
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
        "start": 910,
        "end": 926,
        "decorators": [],
        "name": "whileStatement12",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 965,
      "end": 1036,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 999,
        "end": 1036,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1005,
            "end": 1034,
            "body": {
              "type": "BlockStatement",
              "start": 1015,
              "end": 1034,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1017,
                  "end": 1025,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1017,
                    "end": 1024,
                    "argument": {
                      "type": "Identifier",
                      "start": 1023,
                      "end": 1024,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 1026,
                  "end": 1032,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1012,
              "end": 1013,
              "decorators": [],
              "name": "x",
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
        "start": 980,
        "end": 996,
        "decorators": [],
        "name": "whileStatement13",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1038,
      "end": 1116,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1072,
        "end": 1116,
        "body": [
          {
            "type": "WhileStatement",
            "start": 1078,
            "end": 1114,
            "body": {
              "type": "BlockStatement",
              "start": 1088,
              "end": 1114,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1090,
                  "end": 1103,
                  "alternate": null,
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 1097,
                    "end": 1103,
                    "label": null
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1094,
                    "end": 1095,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1104,
                  "end": 1112,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1104,
                    "end": 1111,
                    "argument": {
                      "type": "Identifier",
                      "start": 1110,
                      "end": 1111,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1085,
              "end": 1086,
              "decorators": [],
              "name": "x",
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
        "start": 1053,
        "end": 1069,
        "decorators": [],
        "name": "whileStatement14",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1118,
      "end": 1185,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1152,
        "end": 1185,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1158,
            "end": 1183,
            "body": {
              "type": "WhileStatement",
              "start": 1161,
              "end": 1183,
              "body": {
                "type": "BlockStatement",
                "start": 1171,
                "end": 1183,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1173,
                    "end": 1181,
                    "label": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1168,
                "end": 1169,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1158,
              "end": 1159,
              "decorators": [],
              "name": "E",
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
        "start": 1133,
        "end": 1149,
        "decorators": [],
        "name": "whileStatement15",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1187,
      "end": 1260,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1221,
        "end": 1260,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1227,
            "end": 1258,
            "body": {
              "type": "WhileStatement",
              "start": 1230,
              "end": 1258,
              "body": {
                "type": "BlockStatement",
                "start": 1246,
                "end": 1258,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1248,
                    "end": 1256,
                    "label": {
                      "type": "Identifier",
                      "start": 1254,
                      "end": 1255,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "AwaitExpression",
                "start": 1237,
                "end": 1244,
                "argument": {
                  "type": "Identifier",
                  "start": 1243,
                  "end": 1244,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1227,
              "end": 1228,
              "decorators": [],
              "name": "F",
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
        "start": 1202,
        "end": 1218,
        "decorators": [],
        "name": "whileStatement16",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1262,
      "end": 1338,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1296,
        "end": 1338,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1302,
            "end": 1336,
            "body": {
              "type": "WhileStatement",
              "start": 1305,
              "end": 1336,
              "body": {
                "type": "BlockStatement",
                "start": 1315,
                "end": 1336,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1317,
                    "end": 1325,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1317,
                      "end": 1324,
                      "argument": {
                        "type": "Identifier",
                        "start": 1323,
                        "end": 1324,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1326,
                    "end": 1334,
                    "label": {
                      "type": "Identifier",
                      "start": 1332,
                      "end": 1333,
                      "decorators": [],
                      "name": "G",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1312,
                "end": 1313,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1302,
              "end": 1303,
              "decorators": [],
              "name": "G",
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
        "start": 1277,
        "end": 1293,
        "decorators": [],
        "name": "whileStatement17",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1340,
      "end": 1423,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1374,
        "end": 1423,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1380,
            "end": 1421,
            "body": {
              "type": "WhileStatement",
              "start": 1383,
              "end": 1421,
              "body": {
                "type": "BlockStatement",
                "start": 1393,
                "end": 1421,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1395,
                    "end": 1410,
                    "alternate": null,
                    "consequent": {
                      "type": "BreakStatement",
                      "start": 1402,
                      "end": 1410,
                      "label": {
                        "type": "Identifier",
                        "start": 1408,
                        "end": 1409,
                        "decorators": [],
                        "name": "H",
                        "optional": false
                      }
                    },
                    "test": {
                      "type": "Literal",
                      "start": 1399,
                      "end": 1400,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1411,
                    "end": 1419,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1411,
                      "end": 1418,
                      "argument": {
                        "type": "Identifier",
                        "start": 1417,
                        "end": 1418,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1390,
                "end": 1391,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1380,
              "end": 1381,
              "decorators": [],
              "name": "H",
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
        "start": 1355,
        "end": 1371,
        "decorators": [],
        "name": "whileStatement18",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
