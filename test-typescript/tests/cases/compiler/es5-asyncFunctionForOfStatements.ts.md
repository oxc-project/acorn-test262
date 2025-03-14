__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1392,
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
      "end": 91,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 91,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 70,
            "end": 89,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 83,
              "end": 89,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 87,
                  "expression": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
        "end": 61,
        "decorators": [],
        "name": "forOfStatement0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 159,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 159,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 132,
            "end": 157,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 155,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "AwaitExpression",
              "start": 142,
              "end": 149,
              "argument": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
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
        "start": 108,
        "end": 123,
        "decorators": [],
        "name": "forOfStatement1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 227,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 227,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 200,
            "end": 225,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 213,
              "end": 225,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 223,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 215,
                    "end": 222,
                    "argument": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
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
        "start": 176,
        "end": 191,
        "decorators": [],
        "name": "forOfStatement2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 299,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 262,
        "end": 299,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 268,
            "end": 297,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 291,
              "end": 297,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 293,
                  "end": 295,
                  "expression": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "MemberExpression",
              "start": 273,
              "end": 284,
              "computed": false,
              "object": {
                "type": "AwaitExpression",
                "start": 274,
                "end": 281,
                "argument": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
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
        "start": 244,
        "end": 259,
        "decorators": [],
        "name": "forOfStatement3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 301,
      "end": 369,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 334,
        "end": 369,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 340,
            "end": 367,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 361,
              "end": 367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 363,
                  "end": 365,
                  "expression": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "MemberExpression",
              "start": 345,
              "end": 348,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "AwaitExpression",
              "start": 352,
              "end": 359,
              "argument": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
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
        "start": 316,
        "end": 331,
        "decorators": [],
        "name": "forOfStatement4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 371,
      "end": 439,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 439,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 410,
            "end": 437,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 425,
              "end": 437,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 427,
                  "end": 435,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 427,
                    "end": 434,
                    "argument": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "MemberExpression",
              "start": 415,
              "end": 418,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
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
        "start": 386,
        "end": 401,
        "decorators": [],
        "name": "forOfStatement5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 505,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 474,
        "end": 505,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 480,
            "end": 503,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 497,
              "end": 503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 499,
                  "end": 501,
                  "expression": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 485,
              "end": 490,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 489,
                  "end": 490,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
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
        "start": 456,
        "end": 471,
        "decorators": [],
        "name": "forOfStatement6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 577,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 540,
        "end": 577,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 546,
            "end": 575,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 569,
              "end": 575,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 571,
                  "end": 573,
                  "expression": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 551,
              "end": 556,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 555,
                  "end": 556,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 556,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "AwaitExpression",
              "start": 560,
              "end": 567,
              "argument": {
                "type": "Identifier",
                "start": 566,
                "end": 567,
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
        "start": 522,
        "end": 537,
        "decorators": [],
        "name": "forOfStatement7",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 579,
      "end": 649,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 612,
        "end": 649,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 618,
            "end": 647,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 635,
              "end": 647,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 645,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 637,
                    "end": 644,
                    "argument": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 623,
              "end": 628,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 627,
                  "end": 628,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
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
        "start": 594,
        "end": 609,
        "decorators": [],
        "name": "forOfStatement8",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 651,
      "end": 719,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 684,
        "end": 719,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 690,
            "end": 717,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 711,
              "end": 717,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 713,
                  "end": 715,
                  "expression": {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "ArrayPattern",
              "start": 695,
              "end": 698,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 696,
                  "end": 697,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "AwaitExpression",
              "start": 702,
              "end": 709,
              "argument": {
                "type": "Identifier",
                "start": 708,
                "end": 709,
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
        "start": 666,
        "end": 681,
        "decorators": [],
        "name": "forOfStatement9",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 721,
      "end": 790,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 755,
        "end": 790,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 761,
            "end": 788,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 776,
              "end": 788,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 778,
                  "end": 786,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 778,
                    "end": 785,
                    "argument": {
                      "type": "Identifier",
                      "start": 784,
                      "end": 785,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "ArrayPattern",
              "start": 766,
              "end": 769,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 773,
              "end": 774,
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
        "start": 736,
        "end": 752,
        "decorators": [],
        "name": "forOfStatement10",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 792,
      "end": 865,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 826,
        "end": 865,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 832,
            "end": 863,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 857,
              "end": 863,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 859,
                  "end": 861,
                  "expression": {
                    "type": "Identifier",
                    "start": 859,
                    "end": 860,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "ArrayPattern",
              "start": 837,
              "end": 850,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 838,
                  "end": 849,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 838,
                    "end": 839,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "AwaitExpression",
                    "start": 842,
                    "end": 849,
                    "argument": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 849,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 854,
              "end": 855,
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
        "start": 807,
        "end": 823,
        "decorators": [],
        "name": "forOfStatement11",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 867,
      "end": 940,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 901,
        "end": 940,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 907,
            "end": 938,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 932,
              "end": 938,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 934,
                  "end": 936,
                  "expression": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 935,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "ArrayPattern",
              "start": 912,
              "end": 919,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 913,
                  "end": 918,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 913,
                    "end": 914,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 917,
                    "end": 918,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "AwaitExpression",
              "start": 923,
              "end": 930,
              "argument": {
                "type": "Identifier",
                "start": 929,
                "end": 930,
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
        "start": 882,
        "end": 898,
        "decorators": [],
        "name": "forOfStatement12",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 942,
      "end": 1015,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 976,
        "end": 1015,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 982,
            "end": 1013,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1001,
              "end": 1013,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1003,
                  "end": 1011,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1003,
                    "end": 1010,
                    "argument": {
                      "type": "Identifier",
                      "start": 1009,
                      "end": 1010,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "ArrayPattern",
              "start": 987,
              "end": 994,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 988,
                  "end": 993,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 988,
                    "end": 989,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 992,
                    "end": 993,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              ],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 998,
              "end": 999,
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
        "start": 957,
        "end": 973,
        "decorators": [],
        "name": "forOfStatement13",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1017,
      "end": 1088,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1051,
        "end": 1088,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1057,
            "end": 1086,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1080,
              "end": 1086,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1082,
                  "end": 1084,
                  "expression": {
                    "type": "Identifier",
                    "start": 1082,
                    "end": 1083,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "ObjectPattern",
              "start": 1062,
              "end": 1067,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1064,
                  "end": 1065,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1064,
                    "end": 1065,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 1064,
                    "end": 1065,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "right": {
              "type": "AwaitExpression",
              "start": 1071,
              "end": 1078,
              "argument": {
                "type": "Identifier",
                "start": 1077,
                "end": 1078,
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
        "start": 1032,
        "end": 1048,
        "decorators": [],
        "name": "forOfStatement14",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1090,
      "end": 1161,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1124,
        "end": 1161,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1130,
            "end": 1159,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1147,
              "end": 1159,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1149,
                  "end": 1157,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1149,
                    "end": 1156,
                    "argument": {
                      "type": "Identifier",
                      "start": 1155,
                      "end": 1156,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "ObjectPattern",
              "start": 1135,
              "end": 1140,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1137,
                  "end": 1138,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1138,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "Identifier",
                    "start": 1137,
                    "end": 1138,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "right": {
              "type": "Identifier",
              "start": 1144,
              "end": 1145,
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
        "start": 1105,
        "end": 1121,
        "decorators": [],
        "name": "forOfStatement15",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1163,
      "end": 1238,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1197,
        "end": 1238,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1203,
            "end": 1236,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1230,
              "end": 1236,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1232,
                  "end": 1234,
                  "expression": {
                    "type": "Identifier",
                    "start": 1232,
                    "end": 1233,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "ObjectPattern",
              "start": 1208,
              "end": 1223,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1210,
                  "end": 1221,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1210,
                    "end": 1211,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1210,
                    "end": 1221,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1210,
                      "end": 1211,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "AwaitExpression",
                      "start": 1214,
                      "end": 1221,
                      "argument": {
                        "type": "Identifier",
                        "start": 1220,
                        "end": 1221,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "right": {
              "type": "Identifier",
              "start": 1227,
              "end": 1228,
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
        "start": 1178,
        "end": 1194,
        "decorators": [],
        "name": "forOfStatement16",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1240,
      "end": 1315,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1274,
        "end": 1315,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1280,
            "end": 1313,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1307,
              "end": 1313,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1309,
                  "end": 1311,
                  "expression": {
                    "type": "Identifier",
                    "start": 1309,
                    "end": 1310,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ]
            },
            "left": {
              "type": "ObjectPattern",
              "start": 1285,
              "end": 1294,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1287,
                  "end": 1292,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1287,
                    "end": 1288,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1287,
                    "end": 1292,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1287,
                      "end": 1288,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 1291,
                      "end": 1292,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "right": {
              "type": "AwaitExpression",
              "start": 1298,
              "end": 1305,
              "argument": {
                "type": "Identifier",
                "start": 1304,
                "end": 1305,
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
        "start": 1255,
        "end": 1271,
        "decorators": [],
        "name": "forOfStatement17",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1317,
      "end": 1392,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1351,
        "end": 1392,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 1357,
            "end": 1390,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1378,
              "end": 1390,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1380,
                  "end": 1388,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 1380,
                    "end": 1387,
                    "argument": {
                      "type": "Identifier",
                      "start": 1386,
                      "end": 1387,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "ObjectPattern",
              "start": 1362,
              "end": 1371,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 1364,
                  "end": 1369,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1364,
                    "end": 1365,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": true,
                  "value": {
                    "type": "AssignmentPattern",
                    "start": 1364,
                    "end": 1369,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1364,
                      "end": 1365,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Identifier",
                      "start": 1368,
                      "end": 1369,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "right": {
              "type": "Identifier",
              "start": 1375,
              "end": 1376,
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
        "start": 1332,
        "end": 1348,
        "decorators": [],
        "name": "forOfStatement18",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
