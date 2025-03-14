capturedLetConstInLoop7_ES6.ts
```json
{
  "type": "Program",
  "start": 9,
  "end": 5248,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 9,
      "end": 247,
      "body": {
        "type": "ForOfStatement",
        "start": 13,
        "end": 247,
        "await": false,
        "body": {
          "type": "BlockStatement",
          "start": 31,
          "end": 247,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 37,
              "end": 62,
              "expression": {
                "type": "FunctionExpression",
                "start": 38,
                "end": 60,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 49,
                  "end": 60,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 51,
                      "end": 59,
                      "argument": {
                        "type": "Identifier",
                        "start": 58,
                        "end": 59,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 67,
              "end": 77,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 68,
                "end": 75,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 82,
              "end": 116,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 94,
                "end": 116,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 104,
                    "end": 110,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 86,
                "end": 92,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 91,
                  "end": 92,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 121,
              "end": 158,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 133,
                "end": 158,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 143,
                    "end": 152,
                    "label": {
                      "type": "Identifier",
                      "start": 149,
                      "end": 151,
                      "decorators": [],
                      "name": "l0",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 125,
                "end": 131,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 130,
                  "end": 131,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 163,
              "end": 200,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 175,
                "end": 200,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 185,
                    "end": 194,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 167,
                "end": 173,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 168,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 172,
                  "end": 173,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 205,
              "end": 245,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 217,
                "end": 245,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 227,
                    "end": 239,
                    "label": {
                      "type": "Identifier",
                      "start": 236,
                      "end": 238,
                      "decorators": [],
                      "name": "l0",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 209,
                "end": 215,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 214,
                  "end": 215,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 18,
          "end": 23,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 22,
              "end": 23,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 22,
                "end": 23,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "right": {
          "type": "ArrayExpression",
          "start": 27,
          "end": 29,
          "elements": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "l0",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 249,
      "end": 498,
      "body": {
        "type": "ForInStatement",
        "start": 254,
        "end": 498,
        "body": {
          "type": "BlockStatement",
          "start": 272,
          "end": 498,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 278,
              "end": 303,
              "expression": {
                "type": "FunctionExpression",
                "start": 279,
                "end": 301,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 290,
                  "end": 301,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 292,
                      "end": 300,
                      "argument": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 300,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 308,
              "end": 318,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 309,
                "end": 316,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 323,
              "end": 359,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 337,
                "end": 359,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 347,
                    "end": 353,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 327,
                "end": 335,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 327,
                  "end": 328,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 332,
                  "end": 335,
                  "raw": "\"1\"",
                  "value": "1"
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 364,
              "end": 404,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 378,
                "end": 404,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 388,
                    "end": 398,
                    "label": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 397,
                      "decorators": [],
                      "name": "l00",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 368,
                "end": 376,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 373,
                  "end": 376,
                  "raw": "\"1\"",
                  "value": "1"
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 409,
              "end": 448,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 423,
                "end": 448,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 433,
                    "end": 442,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 413,
                "end": 421,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 413,
                  "end": 414,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 418,
                  "end": 421,
                  "raw": "\"2\"",
                  "value": "2"
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 453,
              "end": 496,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 467,
                "end": 496,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 477,
                    "end": 490,
                    "label": {
                      "type": "Identifier",
                      "start": 486,
                      "end": 489,
                      "decorators": [],
                      "name": "l00",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 457,
                "end": 465,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 457,
                  "end": 458,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 462,
                  "end": 465,
                  "raw": "\"2\"",
                  "value": "2"
                }
              }
            }
          ]
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 259,
          "end": 264,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 263,
              "end": 264,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "right": {
          "type": "ArrayExpression",
          "start": 268,
          "end": 270,
          "elements": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 249,
        "end": 252,
        "decorators": [],
        "name": "l00",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 500,
      "end": 748,
      "body": {
        "type": "ForStatement",
        "start": 504,
        "end": 748,
        "body": {
          "type": "BlockStatement",
          "start": 532,
          "end": 748,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 538,
              "end": 563,
              "expression": {
                "type": "FunctionExpression",
                "start": 539,
                "end": 561,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 550,
                  "end": 561,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 552,
                      "end": 560,
                      "argument": {
                        "type": "Identifier",
                        "start": 559,
                        "end": 560,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 568,
              "end": 578,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 569,
                "end": 576,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 576,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 583,
              "end": 617,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 595,
                "end": 617,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 605,
                    "end": 611,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 587,
                "end": 593,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 587,
                  "end": 588,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 592,
                  "end": 593,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 622,
              "end": 659,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 634,
                "end": 659,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 644,
                    "end": 653,
                    "label": {
                      "type": "Identifier",
                      "start": 650,
                      "end": 652,
                      "decorators": [],
                      "name": "l1",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 626,
                "end": 632,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 627,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 631,
                  "end": 632,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 664,
              "end": 701,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 676,
                "end": 701,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 686,
                    "end": 695,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 668,
                "end": 674,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 669,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 673,
                  "end": 674,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 706,
              "end": 746,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 718,
                "end": 746,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 728,
                    "end": 740,
                    "label": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 739,
                      "decorators": [],
                      "name": "l1",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 710,
                "end": 716,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 710,
                  "end": 711,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 715,
                  "end": 716,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 509,
          "end": 518,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 513,
              "end": 518,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 513,
                "end": 514,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 517,
                "end": 518,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 520,
          "end": 525,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 520,
            "end": 521,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 524,
            "end": 525,
            "raw": "1",
            "value": 1
          }
        },
        "update": {
          "type": "UpdateExpression",
          "start": 527,
          "end": 530,
          "argument": {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 500,
        "end": 502,
        "decorators": [],
        "name": "l1",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 750,
      "end": 997,
      "body": {
        "type": "WhileStatement",
        "start": 754,
        "end": 997,
        "body": {
          "type": "BlockStatement",
          "start": 770,
          "end": 997,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 776,
              "end": 782,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 780,
                  "end": 781,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 781,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 787,
              "end": 812,
              "expression": {
                "type": "FunctionExpression",
                "start": 788,
                "end": 810,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 799,
                  "end": 810,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 801,
                      "end": 809,
                      "argument": {
                        "type": "Identifier",
                        "start": 808,
                        "end": 809,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 817,
              "end": 827,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 818,
                "end": 825,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 824,
                  "end": 825,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 832,
              "end": 866,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 844,
                "end": 866,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 854,
                    "end": 860,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 836,
                "end": 842,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 836,
                  "end": 837,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 841,
                  "end": 842,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 871,
              "end": 908,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 883,
                "end": 908,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 893,
                    "end": 902,
                    "label": {
                      "type": "Identifier",
                      "start": 899,
                      "end": 901,
                      "decorators": [],
                      "name": "l2",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 875,
                "end": 881,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 875,
                  "end": 876,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 880,
                  "end": 881,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 913,
              "end": 950,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 925,
                "end": 950,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 935,
                    "end": 944,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 917,
                "end": 923,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 918,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 922,
                  "end": 923,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 955,
              "end": 995,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 967,
                "end": 995,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 977,
                    "end": 989,
                    "label": {
                      "type": "Identifier",
                      "start": 986,
                      "end": 988,
                      "decorators": [],
                      "name": "l2",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 959,
                "end": 965,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 959,
                  "end": 960,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 964,
                  "end": 965,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 761,
          "end": 768,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 761,
            "end": 762,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 767,
            "end": 768,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "decorators": [],
        "name": "l2",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 999,
      "end": 1249,
      "body": {
        "type": "DoWhileStatement",
        "start": 1003,
        "end": 1249,
        "body": {
          "type": "BlockStatement",
          "start": 1006,
          "end": 1233,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1012,
              "end": 1018,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1016,
                  "end": 1017,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1016,
                    "end": 1017,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 1023,
              "end": 1048,
              "expression": {
                "type": "FunctionExpression",
                "start": 1024,
                "end": 1046,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1035,
                  "end": 1046,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1037,
                      "end": 1045,
                      "argument": {
                        "type": "Identifier",
                        "start": 1044,
                        "end": 1045,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 1053,
              "end": 1063,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 1054,
                "end": 1061,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1060,
                  "end": 1061,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 1068,
              "end": 1102,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1080,
                "end": 1102,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1090,
                    "end": 1096,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1072,
                "end": 1078,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1072,
                  "end": 1073,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1077,
                  "end": 1078,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1107,
              "end": 1144,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1119,
                "end": 1144,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1129,
                    "end": 1138,
                    "label": {
                      "type": "Identifier",
                      "start": 1135,
                      "end": 1137,
                      "decorators": [],
                      "name": "l3",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1111,
                "end": 1117,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1111,
                  "end": 1112,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1116,
                  "end": 1117,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1149,
              "end": 1186,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1161,
                "end": 1186,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1171,
                    "end": 1180,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1153,
                "end": 1159,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1153,
                  "end": 1154,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1158,
                  "end": 1159,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1191,
              "end": 1231,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1203,
                "end": 1231,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1213,
                    "end": 1225,
                    "label": {
                      "type": "Identifier",
                      "start": 1222,
                      "end": 1224,
                      "decorators": [],
                      "name": "l3",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1195,
                "end": 1201,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1195,
                  "end": 1196,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1200,
                  "end": 1201,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 1241,
          "end": 1248,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 1241,
            "end": 1242,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 1247,
            "end": 1248,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 999,
        "end": 1001,
        "decorators": [],
        "name": "l3",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1251,
      "end": 1514,
      "body": {
        "type": "ForStatement",
        "start": 1255,
        "end": 1514,
        "body": {
          "type": "BlockStatement",
          "start": 1283,
          "end": 1514,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1289,
              "end": 1299,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1293,
                  "end": 1298,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1294,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1297,
                    "end": 1298,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 1304,
              "end": 1329,
              "expression": {
                "type": "FunctionExpression",
                "start": 1305,
                "end": 1327,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1316,
                  "end": 1327,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1318,
                      "end": 1326,
                      "argument": {
                        "type": "Identifier",
                        "start": 1325,
                        "end": 1326,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 1334,
              "end": 1344,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 1335,
                "end": 1342,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 1341,
                  "end": 1342,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 1349,
              "end": 1383,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1361,
                "end": 1383,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1371,
                    "end": 1377,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1353,
                "end": 1359,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1353,
                  "end": 1354,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1358,
                  "end": 1359,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1388,
              "end": 1425,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1400,
                "end": 1425,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1410,
                    "end": 1419,
                    "label": {
                      "type": "Identifier",
                      "start": 1416,
                      "end": 1418,
                      "decorators": [],
                      "name": "l4",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1392,
                "end": 1398,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1392,
                  "end": 1393,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1397,
                  "end": 1398,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1430,
              "end": 1467,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1442,
                "end": 1467,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1452,
                    "end": 1461,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1434,
                "end": 1440,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1434,
                  "end": 1435,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1439,
                  "end": 1440,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1472,
              "end": 1512,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1484,
                "end": 1512,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1494,
                    "end": 1506,
                    "label": {
                      "type": "Identifier",
                      "start": 1503,
                      "end": 1505,
                      "decorators": [],
                      "name": "l4",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1476,
                "end": 1482,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1476,
                  "end": 1477,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1481,
                  "end": 1482,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 1260,
          "end": 1269,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1264,
              "end": 1269,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1264,
                "end": 1265,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 1268,
                "end": 1269,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 1271,
          "end": 1276,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 1271,
            "end": 1272,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 1275,
            "end": 1276,
            "raw": "1",
            "value": 1
          }
        },
        "update": {
          "type": "UpdateExpression",
          "start": 1278,
          "end": 1281,
          "argument": {
            "type": "Identifier",
            "start": 1280,
            "end": 1281,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1251,
        "end": 1253,
        "decorators": [],
        "name": "l4",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1516,
      "end": 1779,
      "body": {
        "type": "ForStatement",
        "start": 1520,
        "end": 1779,
        "body": {
          "type": "BlockStatement",
          "start": 1555,
          "end": 1779,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 1561,
              "end": 1590,
              "expression": {
                "type": "FunctionExpression",
                "start": 1562,
                "end": 1588,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1573,
                  "end": 1588,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1575,
                      "end": 1587,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 1582,
                        "end": 1587,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1582,
                          "end": 1583,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1586,
                          "end": 1587,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 1595,
              "end": 1609,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 1596,
                "end": 1607,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1602,
                  "end": 1607,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1602,
                    "end": 1603,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1606,
                    "end": 1607,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 1614,
              "end": 1648,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1626,
                "end": 1648,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1636,
                    "end": 1642,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1618,
                "end": 1624,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1618,
                  "end": 1619,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1623,
                  "end": 1624,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1653,
              "end": 1690,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1665,
                "end": 1690,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1675,
                    "end": 1684,
                    "label": {
                      "type": "Identifier",
                      "start": 1681,
                      "end": 1683,
                      "decorators": [],
                      "name": "l5",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1657,
                "end": 1663,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1657,
                  "end": 1658,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1662,
                  "end": 1663,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1695,
              "end": 1732,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1707,
                "end": 1732,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1717,
                    "end": 1726,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1699,
                "end": 1705,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1699,
                  "end": 1700,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1704,
                  "end": 1705,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1737,
              "end": 1777,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1749,
                "end": 1777,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1759,
                    "end": 1771,
                    "label": {
                      "type": "Identifier",
                      "start": 1768,
                      "end": 1770,
                      "decorators": [],
                      "name": "l5",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1741,
                "end": 1747,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1741,
                  "end": 1742,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1746,
                  "end": 1747,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 1525,
          "end": 1541,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1529,
              "end": 1534,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1529,
                "end": 1530,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 1533,
                "end": 1534,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "VariableDeclarator",
              "start": 1536,
              "end": 1541,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 1536,
                "end": 1537,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 1540,
                "end": 1541,
                "raw": "1",
                "value": 1
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 1543,
          "end": 1548,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 1543,
            "end": 1544,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 1547,
            "end": 1548,
            "raw": "1",
            "value": 1
          }
        },
        "update": {
          "type": "UpdateExpression",
          "start": 1550,
          "end": 1553,
          "argument": {
            "type": "Identifier",
            "start": 1552,
            "end": 1553,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1516,
        "end": 1518,
        "decorators": [],
        "name": "l5",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1781,
      "end": 2040,
      "body": {
        "type": "WhileStatement",
        "start": 1785,
        "end": 2040,
        "body": {
          "type": "BlockStatement",
          "start": 1801,
          "end": 2040,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 1807,
              "end": 1816,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1811,
                  "end": 1812,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1811,
                    "end": 1812,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "start": 1814,
                  "end": 1815,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1814,
                    "end": 1815,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 1821,
              "end": 1850,
              "expression": {
                "type": "FunctionExpression",
                "start": 1822,
                "end": 1848,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1833,
                  "end": 1848,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1835,
                      "end": 1847,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 1842,
                        "end": 1847,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 1842,
                          "end": 1843,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1846,
                          "end": 1847,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 1855,
              "end": 1869,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 1856,
                "end": 1867,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 1862,
                  "end": 1867,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 1862,
                    "end": 1863,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1867,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 1874,
              "end": 1908,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1886,
                "end": 1908,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1896,
                    "end": 1902,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1878,
                "end": 1884,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1878,
                  "end": 1879,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1883,
                  "end": 1884,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1913,
              "end": 1950,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1925,
                "end": 1950,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 1935,
                    "end": 1944,
                    "label": {
                      "type": "Identifier",
                      "start": 1941,
                      "end": 1943,
                      "decorators": [],
                      "name": "l6",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1917,
                "end": 1923,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1917,
                  "end": 1918,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1922,
                  "end": 1923,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1955,
              "end": 1992,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 1967,
                "end": 1992,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 1977,
                    "end": 1986,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1959,
                "end": 1965,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 1959,
                  "end": 1960,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1964,
                  "end": 1965,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 1997,
              "end": 2037,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2009,
                "end": 2037,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2019,
                    "end": 2031,
                    "label": {
                      "type": "Identifier",
                      "start": 2028,
                      "end": 2030,
                      "decorators": [],
                      "name": "l6",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2001,
                "end": 2007,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2001,
                  "end": 2002,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2006,
                  "end": 2007,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 1792,
          "end": 1799,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 1792,
            "end": 1793,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 1798,
            "end": 1799,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 1781,
        "end": 1783,
        "decorators": [],
        "name": "l6",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2042,
      "end": 2303,
      "body": {
        "type": "DoWhileStatement",
        "start": 2046,
        "end": 2303,
        "body": {
          "type": "BlockStatement",
          "start": 2049,
          "end": 2287,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 2055,
              "end": 2064,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2059,
                  "end": 2060,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2059,
                    "end": 2060,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "start": 2062,
                  "end": 2063,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2062,
                    "end": 2063,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 2069,
              "end": 2098,
              "expression": {
                "type": "FunctionExpression",
                "start": 2070,
                "end": 2096,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2081,
                  "end": 2096,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2083,
                      "end": 2095,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 2090,
                        "end": 2095,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2090,
                          "end": 2091,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2094,
                          "end": 2095,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 2103,
              "end": 2117,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 2104,
                "end": 2115,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 2110,
                  "end": 2115,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 2110,
                    "end": 2111,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2114,
                    "end": 2115,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 2122,
              "end": 2156,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2134,
                "end": 2156,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2144,
                    "end": 2150,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2126,
                "end": 2132,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2126,
                  "end": 2127,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2131,
                  "end": 2132,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2161,
              "end": 2198,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2173,
                "end": 2198,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2183,
                    "end": 2192,
                    "label": {
                      "type": "Identifier",
                      "start": 2189,
                      "end": 2191,
                      "decorators": [],
                      "name": "l7",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2165,
                "end": 2171,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2165,
                  "end": 2166,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2170,
                  "end": 2171,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2203,
              "end": 2240,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2215,
                "end": 2240,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2225,
                    "end": 2234,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2207,
                "end": 2213,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2207,
                  "end": 2208,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2212,
                  "end": 2213,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2245,
              "end": 2285,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2257,
                "end": 2285,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2267,
                    "end": 2279,
                    "label": {
                      "type": "Identifier",
                      "start": 2276,
                      "end": 2278,
                      "decorators": [],
                      "name": "l7",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2249,
                "end": 2255,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2249,
                  "end": 2250,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2254,
                  "end": 2255,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 2295,
          "end": 2302,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 2295,
            "end": 2296,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 2301,
            "end": 2302,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2042,
        "end": 2044,
        "decorators": [],
        "name": "l7",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2305,
      "end": 2576,
      "body": {
        "type": "ForStatement",
        "start": 2309,
        "end": 2576,
        "body": {
          "type": "BlockStatement",
          "start": 2337,
          "end": 2576,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 2343,
              "end": 2353,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2347,
                  "end": 2352,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 2347,
                    "end": 2348,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 2351,
                    "end": 2352,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            {
              "type": "ExpressionStatement",
              "start": 2358,
              "end": 2387,
              "expression": {
                "type": "FunctionExpression",
                "start": 2359,
                "end": 2385,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2370,
                  "end": 2385,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2372,
                      "end": 2384,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 2379,
                        "end": 2384,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 2379,
                          "end": 2380,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 2383,
                          "end": 2384,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 2392,
              "end": 2406,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 2393,
                "end": 2404,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 2399,
                  "end": 2404,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 2399,
                    "end": 2400,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2403,
                    "end": 2404,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 2411,
              "end": 2445,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2423,
                "end": 2445,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2433,
                    "end": 2439,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2415,
                "end": 2421,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2415,
                  "end": 2416,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2420,
                  "end": 2421,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2450,
              "end": 2487,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2462,
                "end": 2487,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2472,
                    "end": 2481,
                    "label": {
                      "type": "Identifier",
                      "start": 2478,
                      "end": 2480,
                      "decorators": [],
                      "name": "l8",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2454,
                "end": 2460,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2454,
                  "end": 2455,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2459,
                  "end": 2460,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2492,
              "end": 2529,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2504,
                "end": 2529,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2514,
                    "end": 2523,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2496,
                "end": 2502,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2496,
                  "end": 2497,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2501,
                  "end": 2502,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2534,
              "end": 2574,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2546,
                "end": 2574,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2556,
                    "end": 2568,
                    "label": {
                      "type": "Identifier",
                      "start": 2565,
                      "end": 2567,
                      "decorators": [],
                      "name": "l8",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2538,
                "end": 2544,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2538,
                  "end": 2539,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2543,
                  "end": 2544,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 2314,
          "end": 2323,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2318,
              "end": 2323,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 2318,
                "end": 2319,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 2322,
                "end": 2323,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "let"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 2325,
          "end": 2330,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 2325,
            "end": 2326,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 2329,
            "end": 2330,
            "raw": "1",
            "value": 1
          }
        },
        "update": {
          "type": "UpdateExpression",
          "start": 2332,
          "end": 2335,
          "argument": {
            "type": "Identifier",
            "start": 2334,
            "end": 2335,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "operator": "++",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2305,
        "end": 2307,
        "decorators": [],
        "name": "l8",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2589,
      "end": 2835,
      "body": {
        "type": "ForOfStatement",
        "start": 2595,
        "end": 2835,
        "await": false,
        "body": {
          "type": "BlockStatement",
          "start": 2615,
          "end": 2835,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 2621,
              "end": 2646,
              "expression": {
                "type": "FunctionExpression",
                "start": 2622,
                "end": 2644,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2633,
                  "end": 2644,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2635,
                      "end": 2643,
                      "argument": {
                        "type": "Identifier",
                        "start": 2642,
                        "end": 2643,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 2651,
              "end": 2661,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 2652,
                "end": 2659,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2658,
                  "end": 2659,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 2666,
              "end": 2700,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2678,
                "end": 2700,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2688,
                    "end": 2694,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2670,
                "end": 2676,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2670,
                  "end": 2671,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2675,
                  "end": 2676,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2705,
              "end": 2744,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2717,
                "end": 2744,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2727,
                    "end": 2738,
                    "label": {
                      "type": "Identifier",
                      "start": 2733,
                      "end": 2737,
                      "decorators": [],
                      "name": "l0_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2709,
                "end": 2715,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2709,
                  "end": 2710,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2714,
                  "end": 2715,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2749,
              "end": 2786,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2761,
                "end": 2786,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2771,
                    "end": 2780,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2753,
                "end": 2759,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2753,
                  "end": 2754,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2758,
                  "end": 2759,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2791,
              "end": 2833,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2803,
                "end": 2833,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 2813,
                    "end": 2827,
                    "label": {
                      "type": "Identifier",
                      "start": 2822,
                      "end": 2826,
                      "decorators": [],
                      "name": "l0_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2795,
                "end": 2801,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2795,
                  "end": 2796,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2800,
                  "end": 2801,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 2600,
          "end": 2607,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2606,
              "end": 2607,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 2606,
                "end": 2607,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "right": {
          "type": "ArrayExpression",
          "start": 2611,
          "end": 2613,
          "elements": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2589,
        "end": 2593,
        "decorators": [],
        "name": "l0_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 2837,
      "end": 3094,
      "body": {
        "type": "ForInStatement",
        "start": 2844,
        "end": 3094,
        "body": {
          "type": "BlockStatement",
          "start": 2864,
          "end": 3094,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 2870,
              "end": 2895,
              "expression": {
                "type": "FunctionExpression",
                "start": 2871,
                "end": 2893,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2882,
                  "end": 2893,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 2884,
                      "end": 2892,
                      "argument": {
                        "type": "Identifier",
                        "start": 2891,
                        "end": 2892,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 2900,
              "end": 2910,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 2901,
                "end": 2908,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 2907,
                  "end": 2908,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 2915,
              "end": 2951,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2929,
                "end": 2951,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2939,
                    "end": 2945,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2919,
                "end": 2927,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2919,
                  "end": 2920,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2924,
                  "end": 2927,
                  "raw": "\"1\"",
                  "value": "1"
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 2956,
              "end": 2998,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 2970,
                "end": 2998,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 2980,
                    "end": 2992,
                    "label": {
                      "type": "Identifier",
                      "start": 2986,
                      "end": 2991,
                      "decorators": [],
                      "name": "l00_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 2960,
                "end": 2968,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 2960,
                  "end": 2961,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 2965,
                  "end": 2968,
                  "raw": "\"1\"",
                  "value": "1"
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3003,
              "end": 3042,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3017,
                "end": 3042,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3027,
                    "end": 3036,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3007,
                "end": 3015,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3007,
                  "end": 3008,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3012,
                  "end": 3015,
                  "raw": "\"2\"",
                  "value": "2"
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3047,
              "end": 3092,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3061,
                "end": 3092,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3071,
                    "end": 3086,
                    "label": {
                      "type": "Identifier",
                      "start": 3080,
                      "end": 3085,
                      "decorators": [],
                      "name": "l00_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3051,
                "end": 3059,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3051,
                  "end": 3052,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3056,
                  "end": 3059,
                  "raw": "\"2\"",
                  "value": "2"
                }
              }
            }
          ]
        },
        "left": {
          "type": "VariableDeclaration",
          "start": 2849,
          "end": 2856,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2855,
              "end": 2856,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 2855,
                "end": 2856,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "right": {
          "type": "ArrayExpression",
          "start": 2860,
          "end": 2862,
          "elements": []
        }
      },
      "label": {
        "type": "Identifier",
        "start": 2837,
        "end": 2842,
        "decorators": [],
        "name": "l00_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 3096,
      "end": 3348,
      "body": {
        "type": "ForStatement",
        "start": 3102,
        "end": 3348,
        "body": {
          "type": "BlockStatement",
          "start": 3128,
          "end": 3348,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 3134,
              "end": 3159,
              "expression": {
                "type": "FunctionExpression",
                "start": 3135,
                "end": 3157,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3146,
                  "end": 3157,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3148,
                      "end": 3156,
                      "argument": {
                        "type": "Identifier",
                        "start": 3155,
                        "end": 3156,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 3164,
              "end": 3174,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 3165,
                "end": 3172,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3171,
                  "end": 3172,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 3179,
              "end": 3213,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3191,
                "end": 3213,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3201,
                    "end": 3207,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3183,
                "end": 3189,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3183,
                  "end": 3184,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3188,
                  "end": 3189,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3218,
              "end": 3257,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3230,
                "end": 3257,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3240,
                    "end": 3251,
                    "label": {
                      "type": "Identifier",
                      "start": 3246,
                      "end": 3250,
                      "decorators": [],
                      "name": "l1_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3222,
                "end": 3228,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3222,
                  "end": 3223,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3227,
                  "end": 3228,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3262,
              "end": 3299,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3274,
                "end": 3299,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3284,
                    "end": 3293,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3266,
                "end": 3272,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3266,
                  "end": 3267,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3271,
                  "end": 3272,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3304,
              "end": 3346,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3316,
                "end": 3346,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3326,
                    "end": 3340,
                    "label": {
                      "type": "Identifier",
                      "start": 3335,
                      "end": 3339,
                      "decorators": [],
                      "name": "l1_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3308,
                "end": 3314,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3308,
                  "end": 3309,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3313,
                  "end": 3314,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 3107,
          "end": 3118,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 3113,
              "end": 3118,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 3113,
                "end": 3114,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 3117,
                "end": 3118,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 3120,
          "end": 3125,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 3120,
            "end": 3121,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 3124,
            "end": 3125,
            "raw": "1",
            "value": 1
          }
        },
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 3096,
        "end": 3100,
        "decorators": [],
        "name": "l1_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 3350,
      "end": 3609,
      "body": {
        "type": "WhileStatement",
        "start": 3356,
        "end": 3609,
        "body": {
          "type": "BlockStatement",
          "start": 3372,
          "end": 3609,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 3378,
              "end": 3390,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3384,
                  "end": 3389,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3384,
                    "end": 3385,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3388,
                    "end": 3389,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 3395,
              "end": 3420,
              "expression": {
                "type": "FunctionExpression",
                "start": 3396,
                "end": 3418,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3407,
                  "end": 3418,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3409,
                      "end": 3417,
                      "argument": {
                        "type": "Identifier",
                        "start": 3416,
                        "end": 3417,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 3425,
              "end": 3435,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 3426,
                "end": 3433,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3432,
                  "end": 3433,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 3440,
              "end": 3474,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3452,
                "end": 3474,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3462,
                    "end": 3468,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3444,
                "end": 3450,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3444,
                  "end": 3445,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3449,
                  "end": 3450,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3479,
              "end": 3518,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3491,
                "end": 3518,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3501,
                    "end": 3512,
                    "label": {
                      "type": "Identifier",
                      "start": 3507,
                      "end": 3511,
                      "decorators": [],
                      "name": "l2_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3483,
                "end": 3489,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3483,
                  "end": 3484,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3488,
                  "end": 3489,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3523,
              "end": 3560,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3535,
                "end": 3560,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3545,
                    "end": 3554,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3527,
                "end": 3533,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3527,
                  "end": 3528,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3532,
                  "end": 3533,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3565,
              "end": 3607,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3577,
                "end": 3607,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3587,
                    "end": 3601,
                    "label": {
                      "type": "Identifier",
                      "start": 3596,
                      "end": 3600,
                      "decorators": [],
                      "name": "l2_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3569,
                "end": 3575,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3569,
                  "end": 3570,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3574,
                  "end": 3575,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 3363,
          "end": 3370,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 3363,
            "end": 3364,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 3369,
            "end": 3370,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 3350,
        "end": 3354,
        "decorators": [],
        "name": "l2_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 3611,
      "end": 3873,
      "body": {
        "type": "DoWhileStatement",
        "start": 3617,
        "end": 3873,
        "body": {
          "type": "BlockStatement",
          "start": 3620,
          "end": 3857,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 3626,
              "end": 3638,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3632,
                  "end": 3637,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3632,
                    "end": 3633,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3636,
                    "end": 3637,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 3643,
              "end": 3668,
              "expression": {
                "type": "FunctionExpression",
                "start": 3644,
                "end": 3666,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3655,
                  "end": 3666,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3657,
                      "end": 3665,
                      "argument": {
                        "type": "Identifier",
                        "start": 3664,
                        "end": 3665,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 3673,
              "end": 3683,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 3674,
                "end": 3681,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3680,
                  "end": 3681,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 3688,
              "end": 3722,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3700,
                "end": 3722,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3710,
                    "end": 3716,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3692,
                "end": 3698,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3692,
                  "end": 3693,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3697,
                  "end": 3698,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3727,
              "end": 3766,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3739,
                "end": 3766,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3749,
                    "end": 3760,
                    "label": {
                      "type": "Identifier",
                      "start": 3755,
                      "end": 3759,
                      "decorators": [],
                      "name": "l3_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3731,
                "end": 3737,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3731,
                  "end": 3732,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3736,
                  "end": 3737,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3771,
              "end": 3808,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3783,
                "end": 3808,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3793,
                    "end": 3802,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3775,
                "end": 3781,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3775,
                  "end": 3776,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3780,
                  "end": 3781,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 3813,
              "end": 3855,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3825,
                "end": 3855,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 3835,
                    "end": 3849,
                    "label": {
                      "type": "Identifier",
                      "start": 3844,
                      "end": 3848,
                      "decorators": [],
                      "name": "l3_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3817,
                "end": 3823,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3817,
                  "end": 3818,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3822,
                  "end": 3823,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 3865,
          "end": 3872,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 3865,
            "end": 3866,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 3871,
            "end": 3872,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 3611,
        "end": 3615,
        "decorators": [],
        "name": "l3_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 3875,
      "end": 4144,
      "body": {
        "type": "ForStatement",
        "start": 3881,
        "end": 4144,
        "body": {
          "type": "BlockStatement",
          "start": 3907,
          "end": 4144,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 3913,
              "end": 3925,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 3919,
                  "end": 3924,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 3919,
                    "end": 3920,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 3923,
                    "end": 3924,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 3930,
              "end": 3955,
              "expression": {
                "type": "FunctionExpression",
                "start": 3931,
                "end": 3953,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 3942,
                  "end": 3953,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 3944,
                      "end": 3952,
                      "argument": {
                        "type": "Identifier",
                        "start": 3951,
                        "end": 3952,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 3960,
              "end": 3970,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 3961,
                "end": 3968,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 3967,
                  "end": 3968,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 3975,
              "end": 4009,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 3987,
                "end": 4009,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 3997,
                    "end": 4003,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 3979,
                "end": 3985,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 3979,
                  "end": 3980,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 3984,
                  "end": 3985,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4014,
              "end": 4053,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4026,
                "end": 4053,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4036,
                    "end": 4047,
                    "label": {
                      "type": "Identifier",
                      "start": 4042,
                      "end": 4046,
                      "decorators": [],
                      "name": "l4_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4018,
                "end": 4024,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4018,
                  "end": 4019,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4023,
                  "end": 4024,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4058,
              "end": 4095,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4070,
                "end": 4095,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4080,
                    "end": 4089,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4062,
                "end": 4068,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4062,
                  "end": 4063,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4067,
                  "end": 4068,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4100,
              "end": 4142,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4112,
                "end": 4142,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4122,
                    "end": 4136,
                    "label": {
                      "type": "Identifier",
                      "start": 4131,
                      "end": 4135,
                      "decorators": [],
                      "name": "l4_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4104,
                "end": 4110,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4104,
                  "end": 4105,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4109,
                  "end": 4110,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 3886,
          "end": 3897,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 3892,
              "end": 3897,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 3892,
                "end": 3893,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 3896,
                "end": 3897,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 3899,
          "end": 3904,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 3899,
            "end": 3900,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 3903,
            "end": 3904,
            "raw": "1",
            "value": 1
          }
        },
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 3875,
        "end": 3879,
        "decorators": [],
        "name": "l4_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 4146,
      "end": 4413,
      "body": {
        "type": "ForStatement",
        "start": 4152,
        "end": 4413,
        "body": {
          "type": "BlockStatement",
          "start": 4185,
          "end": 4413,
          "body": [
            {
              "type": "ExpressionStatement",
              "start": 4191,
              "end": 4220,
              "expression": {
                "type": "FunctionExpression",
                "start": 4192,
                "end": 4218,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4203,
                  "end": 4218,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4205,
                      "end": 4217,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 4212,
                        "end": 4217,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 4212,
                          "end": 4213,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4216,
                          "end": 4217,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 4225,
              "end": 4239,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 4226,
                "end": 4237,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 4232,
                  "end": 4237,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 4232,
                    "end": 4233,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4236,
                    "end": 4237,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 4244,
              "end": 4278,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4256,
                "end": 4278,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4266,
                    "end": 4272,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4248,
                "end": 4254,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4248,
                  "end": 4249,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4253,
                  "end": 4254,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4283,
              "end": 4322,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4295,
                "end": 4322,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4305,
                    "end": 4316,
                    "label": {
                      "type": "Identifier",
                      "start": 4311,
                      "end": 4315,
                      "decorators": [],
                      "name": "l5_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4287,
                "end": 4293,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4287,
                  "end": 4288,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4292,
                  "end": 4293,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4327,
              "end": 4364,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4339,
                "end": 4364,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4349,
                    "end": 4358,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4331,
                "end": 4337,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4331,
                  "end": 4332,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4336,
                  "end": 4337,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4369,
              "end": 4411,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4381,
                "end": 4411,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4391,
                    "end": 4405,
                    "label": {
                      "type": "Identifier",
                      "start": 4400,
                      "end": 4404,
                      "decorators": [],
                      "name": "l5_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4373,
                "end": 4379,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4373,
                  "end": 4374,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4378,
                  "end": 4379,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 4157,
          "end": 4175,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 4163,
              "end": 4168,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 4163,
                "end": 4164,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 4167,
                "end": 4168,
                "raw": "0",
                "value": 0
              }
            },
            {
              "type": "VariableDeclarator",
              "start": 4170,
              "end": 4175,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 4170,
                "end": 4171,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 4174,
                "end": 4175,
                "raw": "1",
                "value": 1
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 4177,
          "end": 4182,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 4177,
            "end": 4178,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 4181,
            "end": 4182,
            "raw": "1",
            "value": 1
          }
        },
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 4146,
        "end": 4150,
        "decorators": [],
        "name": "l5_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 4415,
      "end": 4690,
      "body": {
        "type": "WhileStatement",
        "start": 4421,
        "end": 4690,
        "body": {
          "type": "BlockStatement",
          "start": 4437,
          "end": 4690,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 4443,
              "end": 4462,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4449,
                  "end": 4454,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 4449,
                    "end": 4450,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 4453,
                    "end": 4454,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 4456,
                  "end": 4461,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 4456,
                    "end": 4457,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 4460,
                    "end": 4461,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 4467,
              "end": 4496,
              "expression": {
                "type": "FunctionExpression",
                "start": 4468,
                "end": 4494,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4479,
                  "end": 4494,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4481,
                      "end": 4493,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 4488,
                        "end": 4493,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 4488,
                          "end": 4489,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4492,
                          "end": 4493,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 4501,
              "end": 4515,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 4502,
                "end": 4513,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 4508,
                  "end": 4513,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 4508,
                    "end": 4509,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4512,
                    "end": 4513,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 4520,
              "end": 4554,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4532,
                "end": 4554,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4542,
                    "end": 4548,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4524,
                "end": 4530,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4524,
                  "end": 4525,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4529,
                  "end": 4530,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4559,
              "end": 4598,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4571,
                "end": 4598,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4581,
                    "end": 4592,
                    "label": {
                      "type": "Identifier",
                      "start": 4587,
                      "end": 4591,
                      "decorators": [],
                      "name": "l6_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4563,
                "end": 4569,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4563,
                  "end": 4564,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4568,
                  "end": 4569,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4603,
              "end": 4640,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4615,
                "end": 4640,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4625,
                    "end": 4634,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4607,
                "end": 4613,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4607,
                  "end": 4608,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4612,
                  "end": 4613,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4645,
              "end": 4687,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4657,
                "end": 4687,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4667,
                    "end": 4681,
                    "label": {
                      "type": "Identifier",
                      "start": 4676,
                      "end": 4680,
                      "decorators": [],
                      "name": "l6_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4649,
                "end": 4655,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4649,
                  "end": 4650,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4654,
                  "end": 4655,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 4428,
          "end": 4435,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 4428,
            "end": 4429,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 4434,
            "end": 4435,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 4415,
        "end": 4419,
        "decorators": [],
        "name": "l6_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 4692,
      "end": 4969,
      "body": {
        "type": "DoWhileStatement",
        "start": 4698,
        "end": 4969,
        "body": {
          "type": "BlockStatement",
          "start": 4701,
          "end": 4953,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 4707,
              "end": 4726,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 4713,
                  "end": 4718,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 4713,
                    "end": 4714,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 4717,
                    "end": 4718,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "start": 4720,
                  "end": 4725,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 4720,
                    "end": 4721,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 4724,
                    "end": 4725,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 4731,
              "end": 4760,
              "expression": {
                "type": "FunctionExpression",
                "start": 4732,
                "end": 4758,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4743,
                  "end": 4758,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 4745,
                      "end": 4757,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 4752,
                        "end": 4757,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 4752,
                          "end": 4753,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 4756,
                          "end": 4757,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 4765,
              "end": 4779,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 4766,
                "end": 4777,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 4772,
                  "end": 4777,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 4772,
                    "end": 4773,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4776,
                    "end": 4777,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 4784,
              "end": 4818,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4796,
                "end": 4818,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4806,
                    "end": 4812,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4788,
                "end": 4794,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4788,
                  "end": 4789,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4793,
                  "end": 4794,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4823,
              "end": 4862,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4835,
                "end": 4862,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 4845,
                    "end": 4856,
                    "label": {
                      "type": "Identifier",
                      "start": 4851,
                      "end": 4855,
                      "decorators": [],
                      "name": "l7_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4827,
                "end": 4833,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4827,
                  "end": 4828,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4832,
                  "end": 4833,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4867,
              "end": 4904,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4879,
                "end": 4904,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4889,
                    "end": 4898,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4871,
                "end": 4877,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4871,
                  "end": 4872,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4876,
                  "end": 4877,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 4909,
              "end": 4951,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 4921,
                "end": 4951,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 4931,
                    "end": 4945,
                    "label": {
                      "type": "Identifier",
                      "start": 4940,
                      "end": 4944,
                      "decorators": [],
                      "name": "l7_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 4913,
                "end": 4919,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 4913,
                  "end": 4914,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 4918,
                  "end": 4919,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "test": {
          "type": "BinaryExpression",
          "start": 4961,
          "end": 4968,
          "operator": "===",
          "left": {
            "type": "Literal",
            "start": 4961,
            "end": 4962,
            "raw": "1",
            "value": 1
          },
          "right": {
            "type": "Literal",
            "start": 4967,
            "end": 4968,
            "raw": "1",
            "value": 1
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 4692,
        "end": 4696,
        "decorators": [],
        "name": "l7_c",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 4971,
      "end": 5248,
      "body": {
        "type": "ForStatement",
        "start": 4977,
        "end": 5248,
        "body": {
          "type": "BlockStatement",
          "start": 5003,
          "end": 5248,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 5009,
              "end": 5021,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 5015,
                  "end": 5020,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 5015,
                    "end": 5016,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 5019,
                    "end": 5020,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            {
              "type": "ExpressionStatement",
              "start": 5026,
              "end": 5055,
              "expression": {
                "type": "FunctionExpression",
                "start": 5027,
                "end": 5053,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 5038,
                  "end": 5053,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 5040,
                      "end": 5052,
                      "argument": {
                        "type": "BinaryExpression",
                        "start": 5047,
                        "end": 5052,
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "start": 5047,
                          "end": 5048,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 5051,
                          "end": 5052,
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
                "id": null,
                "params": []
              }
            },
            {
              "type": "ExpressionStatement",
              "start": 5060,
              "end": 5074,
              "expression": {
                "type": "ArrowFunctionExpression",
                "start": 5061,
                "end": 5072,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 5067,
                  "end": 5072,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 5067,
                    "end": 5068,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 5071,
                    "end": 5072,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              }
            },
            {
              "type": "IfStatement",
              "start": 5079,
              "end": 5113,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 5091,
                "end": 5113,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 5101,
                    "end": 5107,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 5083,
                "end": 5089,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 5083,
                  "end": 5084,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 5088,
                  "end": 5089,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 5118,
              "end": 5157,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 5130,
                "end": 5157,
                "body": [
                  {
                    "type": "BreakStatement",
                    "start": 5140,
                    "end": 5151,
                    "label": {
                      "type": "Identifier",
                      "start": 5146,
                      "end": 5150,
                      "decorators": [],
                      "name": "l8_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 5122,
                "end": 5128,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 5122,
                  "end": 5123,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 5127,
                  "end": 5128,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 5162,
              "end": 5199,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 5174,
                "end": 5199,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 5184,
                    "end": 5193,
                    "label": null
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 5166,
                "end": 5172,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 5166,
                  "end": 5167,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 5171,
                  "end": 5172,
                  "raw": "2",
                  "value": 2
                }
              }
            },
            {
              "type": "IfStatement",
              "start": 5204,
              "end": 5246,
              "alternate": null,
              "consequent": {
                "type": "BlockStatement",
                "start": 5216,
                "end": 5246,
                "body": [
                  {
                    "type": "ContinueStatement",
                    "start": 5226,
                    "end": 5240,
                    "label": {
                      "type": "Identifier",
                      "start": 5235,
                      "end": 5239,
                      "decorators": [],
                      "name": "l8_c",
                      "optional": false
                    }
                  }
                ]
              },
              "test": {
                "type": "BinaryExpression",
                "start": 5208,
                "end": 5214,
                "operator": "==",
                "left": {
                  "type": "Identifier",
                  "start": 5208,
                  "end": 5209,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 5213,
                  "end": 5214,
                  "raw": "2",
                  "value": 2
                }
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 4982,
          "end": 4993,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 4988,
              "end": 4993,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 4988,
                "end": 4989,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 4992,
                "end": 4993,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "const"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 4995,
          "end": 5000,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 4995,
            "end": 4996,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 4999,
            "end": 5000,
            "raw": "1",
            "value": 1
          }
        },
        "update": null
      },
      "label": {
        "type": "Identifier",
        "start": 4971,
        "end": 4975,
        "decorators": [],
        "name": "l8_c",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
