es5-asyncFunctionCallExpressions.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1300,
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
      "end": 86,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 86,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 70,
            "end": 84,
            "expression": {
              "type": "AwaitExpression",
              "start": 70,
              "end": 83,
              "argument": {
                "type": "CallExpression",
                "start": 76,
                "end": 83,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
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
        "start": 46,
        "end": 61,
        "decorators": [],
        "name": "callExpression0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 145,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 145,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 127,
            "end": 143,
            "expression": {
              "type": "CallExpression",
              "start": 127,
              "end": 142,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 137,
                  "end": 138,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 128,
                "end": 135,
                "argument": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
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
        "start": 103,
        "end": 118,
        "decorators": [],
        "name": "callExpression1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 147,
      "end": 202,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 180,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 186,
            "end": 200,
            "expression": {
              "type": "CallExpression",
              "start": 186,
              "end": 199,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 188,
                  "end": 195,
                  "argument": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 195,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "x",
                "optional": false
              },
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
        "start": 162,
        "end": 177,
        "decorators": [],
        "name": "callExpression2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 259,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 259,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 243,
            "end": 257,
            "expression": {
              "type": "CallExpression",
              "start": 243,
              "end": 256,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 245,
                  "end": 246,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "AwaitExpression",
                  "start": 248,
                  "end": 255,
                  "argument": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 243,
                "end": 244,
                "decorators": [],
                "name": "x",
                "optional": false
              },
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
        "start": 219,
        "end": 234,
        "decorators": [],
        "name": "callExpression3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 261,
      "end": 319,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 294,
        "end": 319,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 317,
            "expression": {
              "type": "AwaitExpression",
              "start": 300,
              "end": 316,
              "argument": {
                "type": "CallExpression",
                "start": 306,
                "end": 316,
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "start": 308,
                    "end": 312,
                    "argument": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 312,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 307,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
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
        "start": 276,
        "end": 291,
        "decorators": [],
        "name": "callExpression4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 321,
      "end": 381,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 354,
        "end": 381,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 360,
            "end": 379,
            "expression": {
              "type": "CallExpression",
              "start": 360,
              "end": 378,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 370,
                  "end": 374,
                  "argument": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 374,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                {
                  "type": "Identifier",
                  "start": 376,
                  "end": 377,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 361,
                "end": 368,
                "argument": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
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
        "start": 336,
        "end": 351,
        "decorators": [],
        "name": "callExpression5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 383,
      "end": 443,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 416,
        "end": 443,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 422,
            "end": 441,
            "expression": {
              "type": "CallExpression",
              "start": 422,
              "end": 440,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 424,
                  "end": 436,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 428,
                    "end": 435,
                    "argument": {
                      "type": "Identifier",
                      "start": 434,
                      "end": 435,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 438,
                  "end": 439,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "x",
                "optional": false
              },
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
        "start": 398,
        "end": 413,
        "decorators": [],
        "name": "callExpression6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 445,
      "end": 503,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 478,
        "end": 503,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 484,
            "end": 501,
            "expression": {
              "type": "CallExpression",
              "start": 484,
              "end": 500,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 486,
                  "end": 490,
                  "argument": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                {
                  "type": "AwaitExpression",
                  "start": 492,
                  "end": 499,
                  "argument": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 499,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 484,
                "end": 485,
                "decorators": [],
                "name": "x",
                "optional": false
              },
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
        "start": 460,
        "end": 475,
        "decorators": [],
        "name": "callExpression7",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 505,
      "end": 563,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 538,
        "end": 563,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 544,
            "end": 561,
            "expression": {
              "type": "CallExpression",
              "start": 544,
              "end": 560,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 546,
                  "end": 553,
                  "argument": {
                    "type": "Identifier",
                    "start": 552,
                    "end": 553,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 555,
                  "end": 559,
                  "argument": {
                    "type": "Identifier",
                    "start": 558,
                    "end": 559,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
                "decorators": [],
                "name": "x",
                "optional": false
              },
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
        "start": 520,
        "end": 535,
        "decorators": [],
        "name": "callExpression8",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 565,
      "end": 625,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 598,
        "end": 625,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 604,
            "end": 623,
            "expression": {
              "type": "CallExpression",
              "start": 604,
              "end": 622,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 606,
                  "end": 607,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "SpreadElement",
                  "start": 609,
                  "end": 621,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 613,
                    "end": 620,
                    "argument": {
                      "type": "Identifier",
                      "start": 619,
                      "end": 620,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 604,
                "end": 605,
                "decorators": [],
                "name": "x",
                "optional": false
              },
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
        "start": 580,
        "end": 595,
        "decorators": [],
        "name": "callExpression9",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 627,
      "end": 685,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 661,
        "end": 685,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 667,
            "end": 683,
            "expression": {
              "type": "AwaitExpression",
              "start": 667,
              "end": 682,
              "argument": {
                "type": "CallExpression",
                "start": 673,
                "end": 682,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 677,
                    "end": 678,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 680,
                    "end": 681,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 673,
                  "end": 676,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 674,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 675,
                    "end": 676,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
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
        "start": 642,
        "end": 658,
        "decorators": [],
        "name": "callExpression10",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 687,
      "end": 747,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 721,
        "end": 747,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 727,
            "end": 745,
            "expression": {
              "type": "CallExpression",
              "start": 727,
              "end": 744,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 742,
                  "end": 743,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 728,
                "end": 737,
                "argument": {
                  "type": "MemberExpression",
                  "start": 734,
                  "end": 737,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 734,
                    "end": 735,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 736,
                    "end": 737,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              },
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
        "start": 702,
        "end": 718,
        "decorators": [],
        "name": "callExpression11",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 749,
      "end": 809,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 783,
        "end": 809,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 789,
            "end": 807,
            "expression": {
              "type": "CallExpression",
              "start": 789,
              "end": 806,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 801,
                  "end": 802,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 804,
                  "end": 805,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 789,
                "end": 800,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 790,
                  "end": 797,
                  "argument": {
                    "type": "Identifier",
                    "start": 796,
                    "end": 797,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 799,
                  "end": 800,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
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
        "start": 764,
        "end": 780,
        "decorators": [],
        "name": "callExpression12",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 811,
      "end": 869,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 845,
        "end": 869,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 851,
            "end": 867,
            "expression": {
              "type": "CallExpression",
              "start": 851,
              "end": 866,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 855,
                  "end": 862,
                  "argument": {
                    "type": "Identifier",
                    "start": 861,
                    "end": 862,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                {
                  "type": "Identifier",
                  "start": 864,
                  "end": 865,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 851,
                "end": 854,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 852,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 853,
                  "end": 854,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
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
        "start": 826,
        "end": 842,
        "decorators": [],
        "name": "callExpression13",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 871,
      "end": 929,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 905,
        "end": 929,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 911,
            "end": 927,
            "expression": {
              "type": "CallExpression",
              "start": 911,
              "end": 926,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 915,
                  "end": 916,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "AwaitExpression",
                  "start": 918,
                  "end": 925,
                  "argument": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 925,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 911,
                "end": 914,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 912,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 913,
                  "end": 914,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
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
        "start": 886,
        "end": 902,
        "decorators": [],
        "name": "callExpression14",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 931,
      "end": 990,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 965,
        "end": 990,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 971,
            "end": 988,
            "expression": {
              "type": "AwaitExpression",
              "start": 971,
              "end": 987,
              "argument": {
                "type": "CallExpression",
                "start": 977,
                "end": 987,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 982,
                    "end": 983,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 985,
                    "end": 986,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 977,
                  "end": 981,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 977,
                    "end": 978,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 980,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                },
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
        "start": 946,
        "end": 962,
        "decorators": [],
        "name": "callExpression15",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 992,
      "end": 1053,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1026,
        "end": 1053,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1032,
            "end": 1051,
            "expression": {
              "type": "CallExpression",
              "start": 1032,
              "end": 1050,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1045,
                  "end": 1046,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1049,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 1033,
                "end": 1043,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1039,
                  "end": 1043,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1039,
                    "end": 1040,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1041,
                    "end": 1042,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              },
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
        "start": 1007,
        "end": 1023,
        "decorators": [],
        "name": "callExpression16",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1055,
      "end": 1116,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1089,
        "end": 1116,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1095,
            "end": 1114,
            "expression": {
              "type": "CallExpression",
              "start": 1095,
              "end": 1113,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1108,
                  "end": 1109,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1112,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1095,
                "end": 1107,
                "computed": true,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1096,
                  "end": 1103,
                  "argument": {
                    "type": "Identifier",
                    "start": 1102,
                    "end": 1103,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1105,
                  "end": 1106,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
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
        "start": 1070,
        "end": 1086,
        "decorators": [],
        "name": "callExpression17",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1118,
      "end": 1177,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1152,
        "end": 1177,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1158,
            "end": 1175,
            "expression": {
              "type": "CallExpression",
              "start": 1158,
              "end": 1174,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1170,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 1172,
                  "end": 1173,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1158,
                "end": 1168,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1158,
                  "end": 1159,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "AwaitExpression",
                  "start": 1160,
                  "end": 1167,
                  "argument": {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1167,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              },
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
        "name": "callExpression18",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1179,
      "end": 1238,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1213,
        "end": 1238,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1219,
            "end": 1236,
            "expression": {
              "type": "CallExpression",
              "start": 1219,
              "end": 1235,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 1224,
                  "end": 1231,
                  "argument": {
                    "type": "Identifier",
                    "start": 1230,
                    "end": 1231,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1233,
                  "end": 1234,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1219,
                "end": 1223,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1220,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1221,
                  "end": 1222,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
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
        "start": 1194,
        "end": 1210,
        "decorators": [],
        "name": "callExpression19",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1240,
      "end": 1299,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1274,
        "end": 1299,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1280,
            "end": 1297,
            "expression": {
              "type": "CallExpression",
              "start": 1280,
              "end": 1296,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1285,
                  "end": 1286,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                {
                  "type": "AwaitExpression",
                  "start": 1288,
                  "end": 1295,
                  "argument": {
                    "type": "Identifier",
                    "start": 1294,
                    "end": 1295,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1280,
                "end": 1284,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1280,
                  "end": 1281,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1282,
                  "end": 1283,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
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
        "start": 1255,
        "end": 1271,
        "decorators": [],
        "name": "callExpression20",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
