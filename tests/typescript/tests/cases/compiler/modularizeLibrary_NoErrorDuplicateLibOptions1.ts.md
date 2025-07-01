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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 33,
              "end": 39
            },
            "start": 31,
            "end": 39
          },
          "start": 30,
          "end": 39
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 44,
              "end": 50
            },
            "start": 42,
            "end": 50
          },
          "start": 41,
          "end": 50
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 55,
              "end": 61
            },
            "start": 53,
            "end": 61
          },
          "start": 52,
          "end": 61
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 76,
                  "end": 81
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "from",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 86
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 86
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 96
                }
              ],
              "optional": false,
              "start": 76,
              "end": 97
            },
            "start": 69,
            "end": 98
          }
        ],
        "start": 63,
        "end": 100
      },
      "expression": false,
      "start": 19,
      "end": 100
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 102,
          "end": 103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 104,
            "end": 105
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 107,
            "end": 108
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 110,
            "end": 111
          }
        ],
        "optional": false,
        "start": 102,
        "end": 112
      },
      "directive": null,
      "start": 102,
      "end": 113
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 156,
            "end": 157
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 167
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
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
              ],
              "start": 167,
              "end": 183
            },
            "arguments": [],
            "start": 160,
            "end": 185
          },
          "definite": false,
          "start": 156,
          "end": 185
        }
      ],
      "declare": false,
      "start": 152,
      "end": 186
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 187,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "clear",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 194
          },
          "optional": false,
          "computed": false,
          "start": 187,
          "end": 194
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 187,
        "end": 196
      },
      "directive": null,
      "start": 187,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 226
          },
          "optional": false,
          "computed": false,
          "start": 220,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 220,
        "end": 228
      },
      "directive": null,
      "start": 220,
      "end": 229
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 268,
        "end": 271
      },
      "expression": false,
      "start": 253,
      "end": 271
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 275
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 276,
          "end": 280
        },
        "optional": false,
        "computed": false,
        "start": 272,
        "end": 280
      },
      "directive": null,
      "start": 272,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 319
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 333
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 336,
                  "end": 337
                },
                "definite": false,
                "start": 332,
                "end": 337
              }
            ],
            "declare": false,
            "start": 328,
            "end": 338
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 351
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 354,
                "end": 356
              },
              "start": 350,
              "end": 356
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 374,
                      "end": 375
                    },
                    "start": 368,
                    "end": 375
                  },
                  "directive": null,
                  "start": 368,
                  "end": 376
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
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 385,
                      "end": 386
                    },
                    "start": 385,
                    "end": 388
                  },
                  "directive": null,
                  "start": 385,
                  "end": 389
                }
              ],
              "start": 358,
              "end": 395
            },
            "start": 343,
            "end": 395
          }
        ],
        "start": 322,
        "end": 397
      },
      "expression": false,
      "start": 306,
      "end": 397
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen2",
        "optional": false,
        "typeAnnotation": null,
        "start": 409,
        "end": 413
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 426,
                  "end": 427
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 430,
                  "end": 431
                },
                "definite": false,
                "start": 426,
                "end": 431
              }
            ],
            "declare": false,
            "start": 422,
            "end": 432
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 445
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 448,
                "end": 450
              },
              "start": 444,
              "end": 450
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 468,
                      "end": 469
                    },
                    "start": 462,
                    "end": 469
                  },
                  "directive": null,
                  "start": 462,
                  "end": 470
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
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 479,
                      "end": 480
                    },
                    "start": 479,
                    "end": 482
                  },
                  "directive": null,
                  "start": 479,
                  "end": 483
                }
              ],
              "start": 452,
              "end": 489
            },
            "start": 437,
            "end": 489
          }
        ],
        "start": 416,
        "end": 491
      },
      "expression": false,
      "start": 399,
      "end": 491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 515
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 520
          },
          "optional": false,
          "computed": false,
          "start": 511,
          "end": 520
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 521,
            "end": 522
          }
        ],
        "optional": false,
        "start": 511,
        "end": 523
      },
      "directive": null,
      "start": 511,
      "end": 524
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 551
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 560,
                  "end": 561
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 563,
                  "end": 564
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 560,
                "end": 564
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 571,
                    "end": 577
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 578,
                    "end": 589
                  },
                  "optional": false,
                  "computed": false,
                  "start": 571,
                  "end": 589
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 598,
                          "end": 601
                        },
                        "start": 596,
                        "end": 601
                      },
                      "start": 591,
                      "end": 601
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 620,
                          "end": 625
                        },
                        "start": 613,
                        "end": 626
                      }
                    ],
                    "start": 603,
                    "end": 632
                  },
                  "expression": false,
                  "start": 590,
                  "end": 632
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 570,
                "end": 632
              }
            ],
            "start": 554,
            "end": 634
          },
          "definite": false,
          "start": 550,
          "end": 634
        }
      ],
      "declare": false,
      "start": 546,
      "end": 635
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 636,
            "end": 637
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 638,
            "end": 652
          },
          "optional": false,
          "computed": false,
          "start": 636,
          "end": 652
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 659
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null,
              "start": 660,
              "end": 671
            },
            "optional": false,
            "computed": false,
            "start": 653,
            "end": 671
          }
        ],
        "optional": false,
        "start": 636,
        "end": 672
      },
      "directive": null,
      "start": 636,
      "end": 673
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "out",
        "optional": false,
        "typeAnnotation": null,
        "start": 711,
        "end": 714
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 741
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 752,
                      "end": 759
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 761,
                      "end": 767
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 769,
                    "end": 771
                  },
                  "expression": false,
                  "start": 742,
                  "end": 771
                }
              ],
              "start": 730,
              "end": 772
            },
            "start": 723,
            "end": 773
          }
        ],
        "start": 717,
        "end": 775
      },
      "expression": false,
      "start": 696,
      "end": 775
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 798,
                "end": 801
              },
              "start": 796,
              "end": 801
            },
            "start": 789,
            "end": 801
          },
          "init": null,
          "definite": false,
          "start": 789,
          "end": 801
        }
      ],
      "declare": true,
      "start": 777,
      "end": 802
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null,
              "start": 803,
              "end": 806
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 803,
            "end": 808
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 809,
            "end": 813
          },
          "optional": false,
          "computed": false,
          "start": 803,
          "end": 813
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 826,
                        "end": 833
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 834,
                        "end": 837
                      },
                      "optional": false,
                      "computed": false,
                      "start": 826,
                      "end": 837
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "Yea!",
                        "raw": "\"Yea!\"",
                        "start": 838,
                        "end": 844
                      }
                    ],
                    "optional": false,
                    "start": 826,
                    "end": 845
                  },
                  "directive": null,
                  "start": 826,
                  "end": 846
                }
              ],
              "start": 820,
              "end": 848
            },
            "id": null,
            "generator": false,
            "start": 814,
            "end": 848
          }
        ],
        "optional": false,
        "start": 803,
        "end": 849
      },
      "directive": null,
      "start": 803,
      "end": 850
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 875,
            "end": 876
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 879,
            "end": 881
          },
          "definite": false,
          "start": 875,
          "end": 881
        }
      ],
      "declare": false,
      "start": 871,
      "end": 881
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 886,
            "end": 887
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 899
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 901
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 903,
                "end": 905
              }
            ],
            "start": 890,
            "end": 906
          },
          "definite": false,
          "start": 886,
          "end": 906
        }
      ],
      "declare": false,
      "start": 882,
      "end": 907
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null,
            "start": 930,
            "end": 937
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null,
            "start": 938,
            "end": 950
          },
          "optional": false,
          "computed": false,
          "start": 930,
          "end": 950
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [],
            "start": 951,
            "end": 953
          }
        ],
        "optional": false,
        "start": 930,
        "end": 954
      },
      "directive": null,
      "start": 930,
      "end": 955
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null,
            "start": 981,
            "end": 984
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null,
              "start": 991,
              "end": 997
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "/s",
                "raw": "\"/s\"",
                "start": 998,
                "end": 1002
              }
            ],
            "start": 987,
            "end": 1003
          },
          "definite": false,
          "start": 981,
          "end": 1003
        }
      ],
      "declare": false,
      "start": 977,
      "end": 1004
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null,
          "start": 1005,
          "end": 1008
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null,
          "start": 1009,
          "end": 1014
        },
        "optional": false,
        "computed": false,
        "start": 1005,
        "end": 1014
      },
      "directive": null,
      "start": 1005,
      "end": 1015
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 1041,
            "end": 1044
          },
          "init": {
            "type": "Literal",
            "value": "Hello world",
            "raw": "\"Hello world\"",
            "start": 1047,
            "end": 1060
          },
          "definite": false,
          "start": 1041,
          "end": 1060
        }
      ],
      "declare": false,
      "start": 1037,
      "end": 1061
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null,
            "start": 1062,
            "end": 1065
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1074
          },
          "optional": false,
          "computed": false,
          "start": 1062,
          "end": 1074
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 1075,
            "end": 1082
          },
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 1084,
            "end": 1085
          }
        ],
        "optional": false,
        "start": 1062,
        "end": 1086
      },
      "directive": null,
      "start": 1062,
      "end": 1087
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 1113,
            "end": 1114
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 1117,
              "end": 1123
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 1117,
            "end": 1125
          },
          "definite": false,
          "start": 1113,
          "end": 1125
        }
      ],
      "declare": false,
      "start": 1109,
      "end": 1126
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1164,
            "end": 1166
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1176,
                    "end": 1182
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1183,
                    "end": 1194
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1176,
                  "end": 1194
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1203,
                          "end": 1206
                        },
                        "start": 1201,
                        "end": 1206
                      },
                      "start": 1196,
                      "end": 1206
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": false,
                          "raw": "false",
                          "start": 1225,
                          "end": 1230
                        },
                        "start": 1218,
                        "end": 1231
                      }
                    ],
                    "start": 1208,
                    "end": 1237
                  },
                  "expression": false,
                  "start": 1195,
                  "end": 1237
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1175,
                "end": 1237
              }
            ],
            "start": 1169,
            "end": 1239
          },
          "definite": false,
          "start": 1164,
          "end": 1239
        }
      ],
      "declare": false,
      "start": 1158,
      "end": 1239
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 1239
}
```
