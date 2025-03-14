__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1442,
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
      "end": 89,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 89,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 67,
            "end": 87,
            "body": {
              "type": "BlockStatement",
              "start": 70,
              "end": 76,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 72,
                  "end": 74,
                  "expression": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 84,
              "end": 85,
              "decorators": [],
              "name": "y",
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
        "end": 58,
        "decorators": [],
        "name": "doStatement0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 155,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 155,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 127,
            "end": 153,
            "body": {
              "type": "BlockStatement",
              "start": 130,
              "end": 142,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 132,
                  "end": 140,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 132,
                    "end": 139,
                    "argument": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "y",
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
        "start": 106,
        "end": 118,
        "decorators": [],
        "name": "doStatement1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 157,
      "end": 221,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 187,
        "end": 221,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 193,
            "end": 219,
            "body": {
              "type": "BlockStatement",
              "start": 196,
              "end": 202,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 198,
                  "end": 200,
                  "expression": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 210,
              "end": 217,
              "argument": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "y",
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
        "start": 172,
        "end": 184,
        "decorators": [],
        "name": "doStatement2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 223,
      "end": 288,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 253,
        "end": 288,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 259,
            "end": 286,
            "body": {
              "type": "BlockStatement",
              "start": 262,
              "end": 275,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 264,
                  "end": 273,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "y",
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
        "start": 238,
        "end": 250,
        "decorators": [],
        "name": "doStatement3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 290,
      "end": 364,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 364,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 326,
            "end": 362,
            "body": {
              "type": "BlockStatement",
              "start": 329,
              "end": 351,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 331,
                  "end": 339,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 331,
                    "end": 338,
                    "argument": {
                      "type": "Identifier",
                      "start": 337,
                      "end": 338,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ContinueStatement",
                  "start": 340,
                  "end": 349,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "decorators": [],
              "name": "y",
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
        "start": 305,
        "end": 317,
        "decorators": [],
        "name": "doStatement4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 366,
      "end": 447,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 396,
        "end": 447,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 402,
            "end": 445,
            "body": {
              "type": "BlockStatement",
              "start": 405,
              "end": 434,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 407,
                  "end": 423,
                  "alternate": null,
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 414,
                    "end": 423,
                    "label": null
                  },
                  "test": {
                    "type": "Literal",
                    "start": 411,
                    "end": 412,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 424,
                  "end": 432,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 424,
                    "end": 431,
                    "argument": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 431,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "decorators": [],
              "name": "y",
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
        "start": 381,
        "end": 393,
        "decorators": [],
        "name": "doStatement5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 520,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 479,
        "end": 520,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 485,
            "end": 518,
            "body": {
              "type": "BlockStatement",
              "start": 488,
              "end": 501,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 490,
                  "end": 499,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 509,
              "end": 516,
              "argument": {
                "type": "Identifier",
                "start": 515,
                "end": 516,
                "decorators": [],
                "name": "y",
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
        "start": 464,
        "end": 476,
        "decorators": [],
        "name": "doStatement6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 522,
      "end": 592,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 552,
        "end": 592,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 558,
            "end": 590,
            "body": {
              "type": "DoWhileStatement",
              "start": 561,
              "end": 590,
              "body": {
                "type": "BlockStatement",
                "start": 564,
                "end": 579,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 566,
                    "end": 577,
                    "label": {
                      "type": "Identifier",
                      "start": 575,
                      "end": 576,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 587,
                "end": 588,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
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
        "start": 537,
        "end": 549,
        "decorators": [],
        "name": "doStatement7",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 594,
      "end": 673,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 624,
        "end": 673,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 630,
            "end": 671,
            "body": {
              "type": "DoWhileStatement",
              "start": 633,
              "end": 671,
              "body": {
                "type": "BlockStatement",
                "start": 636,
                "end": 660,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 638,
                    "end": 646,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 638,
                      "end": 645,
                      "argument": {
                        "type": "Identifier",
                        "start": 644,
                        "end": 645,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ContinueStatement",
                    "start": 647,
                    "end": 658,
                    "label": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 657,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 668,
                "end": 669,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 630,
              "end": 631,
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
        "start": 609,
        "end": 621,
        "decorators": [],
        "name": "doStatement8",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 675,
      "end": 761,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 705,
        "end": 761,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 711,
            "end": 759,
            "body": {
              "type": "DoWhileStatement",
              "start": 714,
              "end": 759,
              "body": {
                "type": "BlockStatement",
                "start": 717,
                "end": 748,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 719,
                    "end": 737,
                    "alternate": null,
                    "consequent": {
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
                    },
                    "test": {
                      "type": "Literal",
                      "start": 723,
                      "end": 724,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 738,
                    "end": 746,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 738,
                      "end": 745,
                      "argument": {
                        "type": "Identifier",
                        "start": 744,
                        "end": 745,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 756,
                "end": 757,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 711,
              "end": 712,
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
        "start": 690,
        "end": 702,
        "decorators": [],
        "name": "doStatement9",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 763,
      "end": 840,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 794,
        "end": 840,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 800,
            "end": 838,
            "body": {
              "type": "DoWhileStatement",
              "start": 803,
              "end": 838,
              "body": {
                "type": "BlockStatement",
                "start": 806,
                "end": 821,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 808,
                    "end": 819,
                    "label": {
                      "type": "Identifier",
                      "start": 817,
                      "end": 818,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "AwaitExpression",
                "start": 829,
                "end": 836,
                "argument": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            },
            "label": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
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
        "start": 778,
        "end": 791,
        "decorators": [],
        "name": "doStatement10",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 842,
      "end": 905,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 873,
        "end": 905,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 879,
            "end": 903,
            "body": {
              "type": "BlockStatement",
              "start": 882,
              "end": 892,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 884,
                  "end": 890,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 900,
              "end": 901,
              "decorators": [],
              "name": "y",
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
        "start": 857,
        "end": 870,
        "decorators": [],
        "name": "doStatement11",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 907,
      "end": 979,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 938,
        "end": 979,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 944,
            "end": 977,
            "body": {
              "type": "BlockStatement",
              "start": 947,
              "end": 966,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 949,
                  "end": 957,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 949,
                    "end": 956,
                    "argument": {
                      "type": "Identifier",
                      "start": 955,
                      "end": 956,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "BreakStatement",
                  "start": 958,
                  "end": 964,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 974,
              "end": 975,
              "decorators": [],
              "name": "y",
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
        "start": 922,
        "end": 935,
        "decorators": [],
        "name": "doStatement12",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 981,
      "end": 1060,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1012,
        "end": 1060,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 1018,
            "end": 1058,
            "body": {
              "type": "BlockStatement",
              "start": 1021,
              "end": 1047,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1023,
                  "end": 1036,
                  "alternate": null,
                  "consequent": {
                    "type": "BreakStatement",
                    "start": 1030,
                    "end": 1036,
                    "label": null
                  },
                  "test": {
                    "type": "Literal",
                    "start": 1027,
                    "end": 1028,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1037,
                  "end": 1045,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1037,
                    "end": 1044,
                    "argument": {
                      "type": "Identifier",
                      "start": 1043,
                      "end": 1044,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 1055,
              "end": 1056,
              "decorators": [],
              "name": "y",
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
        "start": 996,
        "end": 1009,
        "decorators": [],
        "name": "doStatement13",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1062,
      "end": 1131,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1093,
        "end": 1131,
        "body": [
          {
            "type": "DoWhileStatement",
            "start": 1099,
            "end": 1129,
            "body": {
              "type": "BlockStatement",
              "start": 1102,
              "end": 1112,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1104,
                  "end": 1110,
                  "label": null
                }
              ]
            },
            "test": {
              "type": "AwaitExpression",
              "start": 1120,
              "end": 1127,
              "argument": {
                "type": "Identifier",
                "start": 1126,
                "end": 1127,
                "decorators": [],
                "name": "y",
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
        "start": 1077,
        "end": 1090,
        "decorators": [],
        "name": "doStatement14",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1133,
      "end": 1201,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1164,
        "end": 1201,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1170,
            "end": 1199,
            "body": {
              "type": "DoWhileStatement",
              "start": 1173,
              "end": 1199,
              "body": {
                "type": "BlockStatement",
                "start": 1176,
                "end": 1188,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1178,
                    "end": 1186,
                    "label": {
                      "type": "Identifier",
                      "start": 1184,
                      "end": 1185,
                      "decorators": [],
                      "name": "E",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1196,
                "end": 1197,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1170,
              "end": 1171,
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
        "start": 1148,
        "end": 1161,
        "decorators": [],
        "name": "doStatement15",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1203,
      "end": 1280,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1234,
        "end": 1280,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1240,
            "end": 1278,
            "body": {
              "type": "DoWhileStatement",
              "start": 1243,
              "end": 1278,
              "body": {
                "type": "BlockStatement",
                "start": 1246,
                "end": 1267,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1248,
                    "end": 1256,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1248,
                      "end": 1255,
                      "argument": {
                        "type": "Identifier",
                        "start": 1254,
                        "end": 1255,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1257,
                    "end": 1265,
                    "label": {
                      "type": "Identifier",
                      "start": 1263,
                      "end": 1264,
                      "decorators": [],
                      "name": "F",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1275,
                "end": 1276,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1240,
              "end": 1241,
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
        "start": 1218,
        "end": 1231,
        "decorators": [],
        "name": "doStatement16",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1282,
      "end": 1366,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1313,
        "end": 1366,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1319,
            "end": 1364,
            "body": {
              "type": "DoWhileStatement",
              "start": 1322,
              "end": 1364,
              "body": {
                "type": "BlockStatement",
                "start": 1325,
                "end": 1353,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1327,
                    "end": 1342,
                    "alternate": null,
                    "consequent": {
                      "type": "BreakStatement",
                      "start": 1334,
                      "end": 1342,
                      "label": {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1341,
                        "decorators": [],
                        "name": "G",
                        "optional": false
                      }
                    },
                    "test": {
                      "type": "Literal",
                      "start": 1331,
                      "end": 1332,
                      "raw": "1",
                      "value": 1
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1343,
                    "end": 1351,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1343,
                      "end": 1350,
                      "argument": {
                        "type": "Identifier",
                        "start": 1349,
                        "end": 1350,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "test": {
                "type": "Identifier",
                "start": 1361,
                "end": 1362,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1319,
              "end": 1320,
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
        "start": 1297,
        "end": 1310,
        "decorators": [],
        "name": "doStatement17",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1368,
      "end": 1442,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1399,
        "end": 1442,
        "body": [
          {
            "type": "LabeledStatement",
            "start": 1405,
            "end": 1440,
            "body": {
              "type": "DoWhileStatement",
              "start": 1408,
              "end": 1440,
              "body": {
                "type": "BlockStatement",
                "start": 1411,
                "end": 1423,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1413,
                    "end": 1421,
                    "label": {
                      "type": "Identifier",
                      "start": 1419,
                      "end": 1420,
                      "decorators": [],
                      "name": "H",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "AwaitExpression",
                "start": 1431,
                "end": 1438,
                "argument": {
                  "type": "Identifier",
                  "start": 1437,
                  "end": 1438,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              }
            },
            "label": {
              "type": "Identifier",
              "start": 1405,
              "end": 1406,
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
        "start": 1383,
        "end": 1396,
        "decorators": [],
        "name": "doStatement18",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
