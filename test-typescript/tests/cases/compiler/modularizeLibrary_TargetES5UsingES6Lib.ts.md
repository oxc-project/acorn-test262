__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 1239,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 63,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 69,
            "end": 98,
            "argument": {
              "type": "CallExpression",
              "start": 76,
              "end": 97,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 87,
                  "end": 96,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 76,
                "end": 86,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 81,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 82,
                  "end": 86,
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
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
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 31,
            "end": 39,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            }
          }
        },
        {
          "type": "Identifier",
          "start": 41,
          "end": 50,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 50,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 44,
              "end": 50
            }
          }
        },
        {
          "type": "Identifier",
          "start": 52,
          "end": 61,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 53,
            "end": 61,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 55,
              "end": 61
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 102,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 102,
        "end": 112,
        "arguments": [
          {
            "type": "Literal",
            "start": 104,
            "end": 105,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "raw": "2",
            "value": 2,
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 110,
            "end": 111,
            "raw": "3",
            "value": 3,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 102,
          "end": 103,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 152,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 185,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 157,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 160,
            "end": 185,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 164,
              "end": 167,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 167,
              "end": 183,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 168,
                  "end": 174
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 176,
                  "end": 182
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
      "start": 187,
      "end": 197,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 187,
        "end": 196,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 187,
          "end": 194,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 187,
            "end": 188,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 194,
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 220,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 220,
        "end": 228,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 220,
          "end": 226,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 222,
            "end": 226,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 253,
      "end": 271,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 268,
        "end": 271,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 272,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 272,
        "end": 280,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 272,
          "end": 275,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 276,
          "end": 280,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 306,
      "end": 397,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 322,
        "end": 397,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 328,
            "end": 338,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 332,
                "end": 337,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 333,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 336,
                  "end": 337,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 343,
            "end": 395,
            "body": {
              "type": "BlockStatement",
              "start": 358,
              "end": 395,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 368,
                  "end": 376,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 368,
                    "end": 375,
                    "argument": {
                      "type": "Identifier",
                      "start": 374,
                      "end": 375,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 385,
                  "end": 389,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 385,
                    "end": 388,
                    "argument": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 350,
              "end": 356,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 350,
                "end": 351,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 354,
                "end": 356,
                "raw": "10",
                "value": 10,
                "regex": null,
                "bigint": null
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
        "start": 316,
        "end": 319,
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 399,
      "end": 491,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 416,
        "end": 491,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 422,
            "end": 432,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 426,
                "end": 431,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 427,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 430,
                  "end": 431,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 437,
            "end": 489,
            "body": {
              "type": "BlockStatement",
              "start": 452,
              "end": 489,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 462,
                  "end": 470,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 462,
                    "end": 469,
                    "argument": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 479,
                  "end": 483,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 479,
                    "end": 482,
                    "argument": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 480,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 444,
              "end": 450,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 448,
                "end": 450,
                "raw": "10",
                "value": 10,
                "regex": null,
                "bigint": null
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
        "start": 409,
        "end": 413,
        "decorators": [],
        "name": "gen2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 511,
      "end": 524,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 511,
        "end": 523,
        "arguments": [
          {
            "type": "Literal",
            "start": 521,
            "end": 522,
            "raw": "1",
            "value": 1,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 511,
          "end": 520,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 511,
            "end": 515,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 516,
            "end": 520,
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 634,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 551,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 554,
            "end": 634,
            "properties": [
              {
                "type": "Property",
                "start": 560,
                "end": 564,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 560,
                  "end": 561,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 563,
                  "end": 564,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 570,
                "end": 632,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 571,
                  "end": 589,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 577,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 578,
                    "end": 589,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 590,
                  "end": 632,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 603,
                    "end": 632,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 613,
                        "end": 626,
                        "argument": {
                          "type": "Literal",
                          "start": 620,
                          "end": 625,
                          "raw": "false",
                          "value": false,
                          "regex": null,
                          "bigint": null
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
                      "start": 591,
                      "end": 601,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 596,
                        "end": 601,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 598,
                          "end": 601
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
      "start": 636,
      "end": 673,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 636,
        "end": 672,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 653,
            "end": 671,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 653,
              "end": 659,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 660,
              "end": 671,
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 636,
          "end": 652,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 636,
            "end": 637,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 638,
            "end": 652,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 696,
      "end": 775,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 717,
        "end": 775,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 723,
            "end": 773,
            "argument": {
              "type": "NewExpression",
              "start": 730,
              "end": 772,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 742,
                  "end": 771,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 769,
                    "end": 771,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 752,
                      "end": 759,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 761,
                      "end": 767,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 734,
                "end": 741,
                "decorators": [],
                "name": "Promise",
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
        "start": 711,
        "end": 714,
        "decorators": [],
        "name": "out",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 777,
      "end": 802,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 789,
          "end": 801,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 801,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 801,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 798,
                "end": 801
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
      "start": 803,
      "end": 850,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 803,
        "end": 849,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 814,
            "end": 848,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 820,
              "end": 848,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 826,
                  "end": 846,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 826,
                    "end": 845,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 838,
                        "end": 844,
                        "raw": "\"Yea!\"",
                        "value": "Yea!",
                        "regex": null,
                        "bigint": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 826,
                      "end": 837,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 826,
                        "end": 833,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 834,
                        "end": 837,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 803,
          "end": 813,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 803,
            "end": 808,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 803,
              "end": 806,
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 809,
            "end": 813,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 871,
      "end": 881,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 875,
          "end": 881,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 875,
            "end": 876,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 879,
            "end": 881,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 882,
      "end": 907,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 886,
          "end": 906,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 886,
            "end": 887,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 890,
            "end": 906,
            "arguments": [
              {
                "type": "Identifier",
                "start": 900,
                "end": 901,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 903,
                "end": 905,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 894,
              "end": 899,
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 955,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 930,
        "end": 954,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 951,
            "end": 953,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 930,
          "end": 950,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 930,
            "end": 937,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 938,
            "end": 950,
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 977,
      "end": 1004,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 981,
          "end": 1003,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 981,
            "end": 984,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 987,
            "end": 1003,
            "arguments": [
              {
                "type": "Literal",
                "start": 998,
                "end": 1002,
                "raw": "\"/s\"",
                "value": "/s",
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 991,
              "end": 997,
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1005,
      "end": 1015,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1005,
        "end": 1014,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1005,
          "end": 1008,
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1009,
          "end": 1014,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1037,
      "end": 1061,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1041,
          "end": 1060,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1041,
            "end": 1044,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1047,
            "end": 1060,
            "raw": "\"Hello world\"",
            "value": "Hello world",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1062,
      "end": 1087,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1062,
        "end": 1086,
        "arguments": [
          {
            "type": "Literal",
            "start": 1075,
            "end": 1082,
            "raw": "\"hello\"",
            "value": "hello",
            "regex": null,
            "bigint": null
          },
          {
            "type": "Literal",
            "start": 1084,
            "end": 1085,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1062,
          "end": 1074,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1062,
            "end": 1065,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1066,
            "end": 1074,
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1109,
      "end": 1126,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1113,
          "end": 1125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1113,
            "end": 1114,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1117,
            "end": 1125,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1117,
              "end": 1123,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1158,
      "end": 1239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1164,
          "end": 1239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1164,
            "end": 1166,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1169,
            "end": 1239,
            "properties": [
              {
                "type": "Property",
                "start": 1175,
                "end": 1237,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1176,
                  "end": 1194,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1176,
                    "end": 1182,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1183,
                    "end": 1194,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1195,
                  "end": 1237,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1208,
                    "end": 1237,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1218,
                        "end": 1231,
                        "argument": {
                          "type": "Literal",
                          "start": 1225,
                          "end": 1230,
                          "raw": "false",
                          "value": false,
                          "regex": null,
                          "bigint": null
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
                      "start": 1196,
                      "end": 1206,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1201,
                        "end": 1206,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1203,
                          "end": 1206
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
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
  "sourceType": "script",
  "hashbang": null
}
```
