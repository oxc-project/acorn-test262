modularizeLibrary_TargetES5UsingES6Lib.ts
```json
{
  "type": "Program",
  "start": 38,
  "end": 1258,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 119,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 119,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 88,
            "end": 117,
            "argument": {
              "type": "CallExpression",
              "start": 95,
              "end": 116,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 115,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 95,
                "end": 105,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "decorators": [],
                  "name": "Array",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "from",
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
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 58,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            }
          }
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 69,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 69,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            }
          }
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 80,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 80,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 74,
              "end": 80
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 131,
        "arguments": [
          {
            "type": "Literal",
            "start": 123,
            "end": 124,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 126,
            "end": 127,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 129,
            "end": 130,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 204,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 179,
            "end": 204,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 183,
              "end": 186,
              "decorators": [],
              "name": "Map",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 186,
              "end": 202,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 187,
                  "end": 193
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 195,
                  "end": 201
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 216,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 215,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 206,
          "end": 213,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 208,
            "end": 213,
            "decorators": [],
            "name": "clear",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 239,
        "end": 247,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 239,
          "end": 245,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "decorators": [],
            "name": "m",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "decorators": [],
            "name": "keys",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 290,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 287,
        "end": 290,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 284,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 300,
      "expression": {
        "type": "MemberExpression",
        "start": 291,
        "end": 299,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 291,
          "end": 294,
          "decorators": [],
          "name": "Baz",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 295,
          "end": 299,
          "decorators": [],
          "name": "name",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 416,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 416,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 357,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 356,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 355,
                  "end": 356,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 362,
            "end": 414,
            "body": {
              "type": "BlockStatement",
              "start": 377,
              "end": 414,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 387,
                  "end": 395,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 387,
                    "end": 394,
                    "argument": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 404,
                  "end": 408,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 404,
                    "end": 407,
                    "argument": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 369,
              "end": 375,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 373,
                "end": 375,
                "raw": "10",
                "value": 10
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 338,
        "decorators": [],
        "name": "gen",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 418,
      "end": 510,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 510,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 445,
                "end": 450,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 446,
                  "decorators": [],
                  "name": "i",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 449,
                  "end": 450,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 456,
            "end": 508,
            "body": {
              "type": "BlockStatement",
              "start": 471,
              "end": 508,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 481,
                  "end": 489,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 481,
                    "end": 488,
                    "argument": {
                      "type": "Identifier",
                      "start": 487,
                      "end": 488,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 498,
                  "end": 502,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 498,
                    "end": 501,
                    "argument": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "decorators": [],
                      "name": "i",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 463,
              "end": 469,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 467,
                "end": 469,
                "raw": "10",
                "value": 10
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 432,
        "decorators": [],
        "name": "gen2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 543,
      "expression": {
        "type": "CallExpression",
        "start": 530,
        "end": 542,
        "arguments": [
          {
            "type": "Literal",
            "start": 540,
            "end": 541,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 530,
          "end": 539,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 530,
            "end": 534,
            "decorators": [],
            "name": "Math",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 535,
            "end": 539,
            "decorators": [],
            "name": "sign",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 653,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 570,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 573,
            "end": 653,
            "properties": [
              {
                "type": "Property",
                "start": 579,
                "end": 583,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 580,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 582,
                  "end": 583,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 589,
                "end": 651,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 590,
                  "end": 608,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 590,
                    "end": 596,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 608,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 609,
                  "end": 651,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 622,
                    "end": 651,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 632,
                        "end": 645,
                        "argument": {
                          "type": "Literal",
                          "start": 639,
                          "end": 644,
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 610,
                      "end": 620,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 615,
                        "end": 620,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 617,
                          "end": 620
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 655,
      "end": 692,
      "expression": {
        "type": "CallExpression",
        "start": 655,
        "end": 691,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 672,
            "end": 690,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 672,
              "end": 678,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 679,
              "end": 690,
              "decorators": [],
              "name": "hasInstance",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 655,
          "end": 671,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 655,
            "end": 656,
            "decorators": [],
            "name": "o",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 657,
            "end": 671,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 715,
      "end": 794,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 736,
        "end": 794,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 742,
            "end": 792,
            "argument": {
              "type": "NewExpression",
              "start": 749,
              "end": 791,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 761,
                  "end": 790,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 788,
                    "end": 790,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 771,
                      "end": 778,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 780,
                      "end": 786,
                      "decorators": [],
                      "name": "reject",
                      "optional": false
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 753,
                "end": 760,
                "decorators": [],
                "name": "Promise",
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
        "start": 730,
        "end": 733,
        "decorators": [],
        "name": "out",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 796,
      "end": 821,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 820,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 820,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 815,
              "end": 820,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 817,
                "end": 820
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 822,
      "end": 869,
      "expression": {
        "type": "CallExpression",
        "start": 822,
        "end": 868,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 833,
            "end": 867,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 839,
              "end": 867,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 845,
                  "end": 865,
                  "expression": {
                    "type": "CallExpression",
                    "start": 845,
                    "end": 864,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 857,
                        "end": 863,
                        "raw": "\"Yea!\"",
                        "value": "Yea!"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 845,
                      "end": 856,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 852,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 853,
                        "end": 856,
                        "decorators": [],
                        "name": "log",
                        "optional": false
                      }
                    },
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 822,
          "end": 832,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 822,
            "end": 827,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 822,
              "end": 825,
              "decorators": [],
              "name": "out",
              "optional": false
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 828,
            "end": 832,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 890,
      "end": 900,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 894,
          "end": 900,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 894,
            "end": 895,
            "decorators": [],
            "name": "t",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 898,
            "end": 900,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 926,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 925,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 906,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 909,
            "end": 925,
            "arguments": [
              {
                "type": "Identifier",
                "start": 919,
                "end": 920,
                "decorators": [],
                "name": "t",
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 922,
                "end": 924,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 913,
              "end": 918,
              "decorators": [],
              "name": "Proxy",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 949,
      "end": 974,
      "expression": {
        "type": "CallExpression",
        "start": 949,
        "end": 973,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 970,
            "end": 972,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 949,
          "end": 969,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 949,
            "end": 956,
            "decorators": [],
            "name": "Reflect",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 957,
            "end": 969,
            "decorators": [],
            "name": "isExtensible",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 996,
      "end": 1023,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1000,
          "end": 1022,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1003,
            "decorators": [],
            "name": "reg",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1006,
            "end": 1022,
            "arguments": [
              {
                "type": "Literal",
                "start": 1017,
                "end": 1021,
                "raw": "\"/s\"",
                "value": "/s"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1010,
              "end": 1016,
              "decorators": [],
              "name": "RegExp",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1024,
      "end": 1034,
      "expression": {
        "type": "MemberExpression",
        "start": 1024,
        "end": 1033,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1024,
          "end": 1027,
          "decorators": [],
          "name": "reg",
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1028,
          "end": 1033,
          "decorators": [],
          "name": "flags",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1056,
      "end": 1080,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1079,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1060,
            "end": 1063,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1066,
            "end": 1079,
            "raw": "\"Hello world\"",
            "value": "Hello world"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1081,
      "end": 1106,
      "expression": {
        "type": "CallExpression",
        "start": 1081,
        "end": 1105,
        "arguments": [
          {
            "type": "Literal",
            "start": 1094,
            "end": 1101,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1103,
            "end": 1104,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1081,
          "end": 1093,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1081,
            "end": 1084,
            "decorators": [],
            "name": "str",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1085,
            "end": 1093,
            "decorators": [],
            "name": "includes",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1128,
      "end": 1145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1132,
          "end": 1144,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1132,
            "end": 1133,
            "decorators": [],
            "name": "s",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1136,
            "end": 1144,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1136,
              "end": 1142,
              "decorators": [],
              "name": "Symbol",
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
      "start": 1177,
      "end": 1258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1183,
          "end": 1258,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1185,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1188,
            "end": 1258,
            "properties": [
              {
                "type": "Property",
                "start": 1194,
                "end": 1256,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1195,
                  "end": 1213,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1201,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1202,
                    "end": 1213,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1214,
                  "end": 1256,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1227,
                    "end": 1256,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1237,
                        "end": 1250,
                        "argument": {
                          "type": "Literal",
                          "start": 1244,
                          "end": 1249,
                          "raw": "false",
                          "value": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1215,
                      "end": 1225,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1220,
                        "end": 1225,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1222,
                          "end": 1225
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
