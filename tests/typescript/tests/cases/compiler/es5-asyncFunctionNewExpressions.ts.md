__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1362,
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
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
        "start": 63,
        "end": 89,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 69,
            "end": 87,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 69,
              "end": 86,
              "argument": {
                "type": "NewExpression",
                "start": 75,
                "end": 86,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 80,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
        "end": 60,
        "decorators": [],
        "name": "newExpression0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 91,
      "end": 151,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 151,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 149,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 129,
              "end": 148,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 143,
                  "end": 144,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 134,
                "end": 141,
                "argument": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
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
        "end": 120,
        "decorators": [],
        "name": "newExpression1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 211,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 185,
        "end": 211,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 191,
            "end": 209,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 191,
              "end": 208,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 197,
                  "end": 204,
                  "argument": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 195,
                "end": 196,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 182,
        "decorators": [],
        "name": "newExpression2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 271,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 245,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 251,
            "end": 269,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 251,
              "end": 268,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AwaitExpression",
                  "start": 260,
                  "end": 267,
                  "argument": {
                    "type": "Identifier",
                    "start": 266,
                    "end": 267,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 242,
        "decorators": [],
        "name": "newExpression3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 273,
      "end": 334,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 305,
        "end": 334,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 311,
            "end": 332,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 311,
              "end": 331,
              "argument": {
                "type": "NewExpression",
                "start": 317,
                "end": 331,
                "arguments": [
                  {
                    "type": "SpreadElement",
                    "start": 323,
                    "end": 327,
                    "argument": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 329,
                    "end": 330,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 322,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
        "start": 288,
        "end": 302,
        "decorators": [],
        "name": "newExpression4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 399,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 368,
        "end": 399,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 374,
            "end": 397,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 374,
              "end": 396,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 388,
                  "end": 392,
                  "argument": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 392,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Identifier",
                  "start": 394,
                  "end": 395,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 379,
                "end": 386,
                "argument": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 386,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 351,
        "end": 365,
        "decorators": [],
        "name": "newExpression5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 401,
      "end": 464,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 433,
        "end": 464,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 439,
            "end": 462,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 439,
              "end": 461,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 445,
                  "end": 457,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 449,
                    "end": 456,
                    "argument": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 459,
                  "end": 460,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 443,
                "end": 444,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 416,
        "end": 430,
        "decorators": [],
        "name": "newExpression6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 466,
      "end": 527,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 527,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 504,
            "end": 525,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 504,
              "end": 524,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 510,
                  "end": 514,
                  "argument": {
                    "type": "Identifier",
                    "start": 513,
                    "end": 514,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "AwaitExpression",
                  "start": 516,
                  "end": 523,
                  "argument": {
                    "type": "Identifier",
                    "start": 522,
                    "end": 523,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 508,
                "end": 509,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 481,
        "end": 495,
        "decorators": [],
        "name": "newExpression7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 529,
      "end": 590,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 561,
        "end": 590,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 567,
            "end": 588,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 567,
              "end": 587,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 573,
                  "end": 580,
                  "argument": {
                    "type": "Identifier",
                    "start": 579,
                    "end": 580,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 582,
                  "end": 586,
                  "argument": {
                    "type": "Identifier",
                    "start": 585,
                    "end": 586,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 544,
        "end": 558,
        "decorators": [],
        "name": "newExpression8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 592,
      "end": 655,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 624,
        "end": 655,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 630,
            "end": 653,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 630,
              "end": 652,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "SpreadElement",
                  "start": 639,
                  "end": 651,
                  "argument": {
                    "type": "AwaitExpression",
                    "start": 643,
                    "end": 650,
                    "argument": {
                      "type": "Identifier",
                      "start": 649,
                      "end": 650,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 634,
                "end": 635,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 621,
        "decorators": [],
        "name": "newExpression9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 657,
      "end": 718,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 690,
        "end": 718,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 696,
            "end": 716,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 696,
              "end": 715,
              "argument": {
                "type": "NewExpression",
                "start": 702,
                "end": 715,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 710,
                    "end": 711,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 713,
                    "end": 714,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 706,
                  "end": 709,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 706,
                    "end": 707,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 708,
                    "end": 709,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
        "start": 672,
        "end": 687,
        "decorators": [],
        "name": "newExpression10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 720,
      "end": 783,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 753,
        "end": 783,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 781,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 759,
              "end": 780,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 775,
                  "end": 776,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 778,
                  "end": 779,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 764,
                "end": 773,
                "argument": {
                  "type": "MemberExpression",
                  "start": 770,
                  "end": 773,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 771,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 772,
                    "end": 773,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 735,
        "end": 750,
        "decorators": [],
        "name": "newExpression11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 785,
      "end": 848,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 818,
        "end": 848,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 824,
            "end": 846,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 824,
              "end": 845,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 843,
                  "end": 844,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 828,
                "end": 839,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 829,
                  "end": 836,
                  "argument": {
                    "type": "Identifier",
                    "start": 835,
                    "end": 836,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 839,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 800,
        "end": 815,
        "decorators": [],
        "name": "newExpression12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 850,
      "end": 911,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 883,
        "end": 911,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 889,
            "end": 909,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 889,
              "end": 908,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 897,
                  "end": 904,
                  "argument": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 904,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Identifier",
                  "start": 906,
                  "end": 907,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 893,
                "end": 896,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 893,
                  "end": 894,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 895,
                  "end": 896,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 865,
        "end": 880,
        "decorators": [],
        "name": "newExpression13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 913,
      "end": 974,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 946,
        "end": 974,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 952,
            "end": 972,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 952,
              "end": 971,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 960,
                  "end": 961,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AwaitExpression",
                  "start": 963,
                  "end": 970,
                  "argument": {
                    "type": "Identifier",
                    "start": 969,
                    "end": 970,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 956,
                "end": 959,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 956,
                  "end": 957,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 959,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 928,
        "end": 943,
        "decorators": [],
        "name": "newExpression14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 976,
      "end": 1038,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1009,
        "end": 1038,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1015,
            "end": 1036,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 1015,
              "end": 1035,
              "argument": {
                "type": "NewExpression",
                "start": 1021,
                "end": 1035,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1030,
                    "end": 1031,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1033,
                    "end": 1034,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 1025,
                  "end": 1029,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1026,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1027,
                    "end": 1028,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
        "start": 991,
        "end": 1006,
        "decorators": [],
        "name": "newExpression15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1040,
      "end": 1104,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1073,
        "end": 1104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1079,
            "end": 1102,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 1079,
              "end": 1101,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1096,
                  "end": 1097,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1100,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "AwaitExpression",
                "start": 1084,
                "end": 1094,
                "argument": {
                  "type": "MemberExpression",
                  "start": 1090,
                  "end": 1094,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 1090,
                    "end": 1091,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1092,
                    "end": 1093,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1055,
        "end": 1070,
        "decorators": [],
        "name": "newExpression16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1106,
      "end": 1170,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1139,
        "end": 1170,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1145,
            "end": 1168,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 1145,
              "end": 1167,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1162,
                  "end": 1163,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1165,
                  "end": 1166,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1149,
                "end": 1161,
                "computed": true,
                "object": {
                  "type": "AwaitExpression",
                  "start": 1150,
                  "end": 1157,
                  "argument": {
                    "type": "Identifier",
                    "start": 1156,
                    "end": 1157,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1159,
                  "end": 1160,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1121,
        "end": 1136,
        "decorators": [],
        "name": "newExpression17",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1172,
      "end": 1234,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1205,
        "end": 1234,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1211,
            "end": 1232,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 1211,
              "end": 1231,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1226,
                  "end": 1227,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1229,
                  "end": 1230,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1215,
                "end": 1225,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1215,
                  "end": 1216,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "AwaitExpression",
                  "start": 1217,
                  "end": 1224,
                  "argument": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1187,
        "end": 1202,
        "decorators": [],
        "name": "newExpression18",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1236,
      "end": 1298,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1269,
        "end": 1298,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1275,
            "end": 1296,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 1275,
              "end": 1295,
              "arguments": [
                {
                  "type": "AwaitExpression",
                  "start": 1284,
                  "end": 1291,
                  "argument": {
                    "type": "Identifier",
                    "start": 1290,
                    "end": 1291,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1293,
                  "end": 1294,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1279,
                "end": 1283,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1279,
                  "end": 1280,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1281,
                  "end": 1282,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1251,
        "end": 1266,
        "decorators": [],
        "name": "newExpression19",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1300,
      "end": 1362,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1333,
        "end": 1362,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1339,
            "end": 1360,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 1339,
              "end": 1359,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1348,
                  "end": 1349,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "AwaitExpression",
                  "start": 1351,
                  "end": 1358,
                  "argument": {
                    "type": "Identifier",
                    "start": 1357,
                    "end": 1358,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1343,
                "end": 1347,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 1343,
                  "end": 1344,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1345,
                  "end": 1346,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1315,
        "end": 1330,
        "decorators": [],
        "name": "newExpression20",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
