__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              },
              "start": 8,
              "end": 17
            },
            "start": 4,
            "end": 17
          },
          "init": null,
          "definite": false,
          "start": 4,
          "end": 17
        }
      ],
      "declare": false,
      "start": 0,
      "end": 18
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 29
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        }
                      ],
                      "start": 45,
                      "end": 60
                    },
                    "start": 43,
                    "end": 60
                  },
                  "start": 42,
                  "end": 60
                },
                "init": null,
                "definite": false,
                "start": 42,
                "end": 60
              }
            ],
            "declare": false,
            "start": 38,
            "end": 61
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 66,
                "end": 67
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 70,
                "end": 72
              },
              "start": 66,
              "end": 72
            },
            "directive": null,
            "start": 66,
            "end": 73
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 92
                  },
                  "directive": null,
                  "start": 91,
                  "end": 93
                }
              ],
              "start": 81,
              "end": 109
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 121
            },
            "start": 78,
            "end": 122
          }
        ],
        "start": 32,
        "end": 124
      },
      "expression": false,
      "start": 19,
      "end": 124
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 134,
        "end": 135
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 151,
                          "end": 157
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 160,
                          "end": 166
                        }
                      ],
                      "start": 151,
                      "end": 166
                    },
                    "start": 149,
                    "end": 166
                  },
                  "start": 148,
                  "end": 166
                },
                "init": null,
                "definite": false,
                "start": 148,
                "end": 166
              }
            ],
            "declare": false,
            "start": 144,
            "end": 167
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 176,
                "end": 178
              },
              "start": 172,
              "end": 178
            },
            "directive": null,
            "start": 172,
            "end": 179
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 198
                  },
                  "directive": null,
                  "start": 197,
                  "end": 199
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 218,
                      "end": 219
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 222,
                      "end": 224
                    },
                    "start": 218,
                    "end": 224
                  },
                  "directive": null,
                  "start": 218,
                  "end": 225
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 234,
                  "end": 240
                }
              ],
              "start": 187,
              "end": 246
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 258
            },
            "start": 184,
            "end": 259
          }
        ],
        "start": 138,
        "end": 261
      },
      "expression": false,
      "start": 125,
      "end": 261
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 272
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 288,
                          "end": 294
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 297,
                          "end": 303
                        }
                      ],
                      "start": 288,
                      "end": 303
                    },
                    "start": 286,
                    "end": 303
                  },
                  "start": 285,
                  "end": 303
                },
                "init": null,
                "definite": false,
                "start": 285,
                "end": 303
              }
            ],
            "declare": false,
            "start": 281,
            "end": 304
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 309,
                "end": 310
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 313,
                "end": 315
              },
              "start": 309,
              "end": 315
            },
            "directive": null,
            "start": 309,
            "end": 316
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 335
                  },
                  "directive": null,
                  "start": 334,
                  "end": 336
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 355,
                      "end": 356
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 359,
                      "end": 368
                    },
                    "start": 355,
                    "end": 368
                  },
                  "directive": null,
                  "start": 355,
                  "end": 369
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 390
                      },
                      "prefix": true,
                      "start": 382,
                      "end": 390
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 395,
                      "end": 403
                    },
                    "start": 382,
                    "end": 403
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 405,
                    "end": 414
                  },
                  "alternate": null,
                  "start": 378,
                  "end": 414
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 423,
                  "end": 429
                }
              ],
              "start": 324,
              "end": 435
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 447
            },
            "start": 321,
            "end": 448
          }
        ],
        "start": 275,
        "end": 450
      },
      "expression": false,
      "start": 262,
      "end": 450
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 461
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 477,
                          "end": 483
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 486,
                          "end": 492
                        }
                      ],
                      "start": 477,
                      "end": 492
                    },
                    "start": 475,
                    "end": 492
                  },
                  "start": 474,
                  "end": 492
                },
                "init": null,
                "definite": false,
                "start": 474,
                "end": 492
              }
            ],
            "declare": false,
            "start": 470,
            "end": 493
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 498,
                "end": 499
              },
              "right": {
                "type": "Literal",
                "value": 1000,
                "raw": "1000",
                "start": 502,
                "end": 506
              },
              "start": 498,
              "end": 506
            },
            "directive": null,
            "start": 498,
            "end": 507
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 525,
                    "end": 526
                  },
                  "directive": null,
                  "start": 525,
                  "end": 527
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 546,
                      "end": 547
                    },
                    "right": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 550,
                      "end": 552
                    },
                    "start": 546,
                    "end": 552
                  },
                  "directive": null,
                  "start": 546,
                  "end": 553
                }
              ],
              "start": 515,
              "end": 559
            },
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 567,
                "end": 568
              },
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 572
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 579
                },
                "optional": false,
                "computed": false,
                "start": 571,
                "end": 579
              },
              "start": 567,
              "end": 579
            },
            "start": 512,
            "end": 580
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 586
            },
            "directive": null,
            "start": 585,
            "end": 587
          }
        ],
        "start": 464,
        "end": 599
      },
      "expression": false,
      "start": 451,
      "end": 599
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 610
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 626,
                          "end": 632
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 635,
                          "end": 641
                        }
                      ],
                      "start": 626,
                      "end": 641
                    },
                    "start": 624,
                    "end": 641
                  },
                  "start": 623,
                  "end": 641
                },
                "init": null,
                "definite": false,
                "start": 623,
                "end": 641
              }
            ],
            "declare": false,
            "start": 619,
            "end": 642
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 647,
                "end": 648
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 651,
                "end": 653
              },
              "start": 647,
              "end": 653
            },
            "directive": null,
            "start": 647,
            "end": 654
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    },
                    "right": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 676,
                      "end": 678
                    },
                    "start": 672,
                    "end": 678
                  },
                  "directive": null,
                  "start": 672,
                  "end": 679
                }
              ],
              "start": 662,
              "end": 685
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 697
            },
            "start": 659,
            "end": 698
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 704
            },
            "directive": null,
            "start": 703,
            "end": 705
          }
        ],
        "start": 613,
        "end": 717
      },
      "expression": false,
      "start": 600,
      "end": 717
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 728
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 744,
                          "end": 750
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 753,
                          "end": 759
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 762,
                          "end": 769
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 772,
                            "end": 778
                          },
                          "typeArguments": null,
                          "start": 772,
                          "end": 778
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 781,
                            "end": 789
                          },
                          "typeArguments": null,
                          "start": 781,
                          "end": 789
                        }
                      ],
                      "start": 744,
                      "end": 789
                    },
                    "start": 742,
                    "end": 789
                  },
                  "start": 741,
                  "end": 789
                },
                "init": null,
                "definite": false,
                "start": 741,
                "end": 789
              }
            ],
            "declare": false,
            "start": 737,
            "end": 790
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 795,
                "end": 796
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 799,
                "end": 801
              },
              "start": 795,
              "end": 801
            },
            "directive": null,
            "start": 795,
            "end": 802
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 824,
                    "end": 828
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 844,
                            "end": 845
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 848,
                            "end": 850
                          },
                          "start": 844,
                          "end": 850
                        },
                        "directive": null,
                        "start": 844,
                        "end": 851
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 864,
                        "end": 870
                      }
                    ],
                    "start": 830,
                    "end": 880
                  },
                  "alternate": null,
                  "start": 820,
                  "end": 880
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 893,
                    "end": 897
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 913,
                            "end": 914
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 917,
                            "end": 921
                          },
                          "start": 913,
                          "end": 921
                        },
                        "directive": null,
                        "start": 913,
                        "end": 922
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 935,
                        "end": 944
                      }
                    ],
                    "start": 899,
                    "end": 954
                  },
                  "alternate": null,
                  "start": 889,
                  "end": 954
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 963,
                      "end": 964
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "pattern": "a",
                        "flags": ""
                      },
                      "start": 967,
                      "end": 970
                    },
                    "start": 963,
                    "end": 970
                  },
                  "directive": null,
                  "start": 963,
                  "end": 971
                }
              ],
              "start": 810,
              "end": 977
            },
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 989
            },
            "start": 807,
            "end": 990
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 995,
              "end": 996
            },
            "directive": null,
            "start": 995,
            "end": 997
          }
        ],
        "start": 731,
        "end": 1028
      },
      "expression": false,
      "start": 718,
      "end": 1028
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1038,
        "end": 1039
      },
      "generator": false,
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1055,
                          "end": 1061
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1064,
                          "end": 1070
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1073,
                          "end": 1080
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "RegExp",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1083,
                            "end": 1089
                          },
                          "typeArguments": null,
                          "start": 1083,
                          "end": 1089
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Function",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1092,
                            "end": 1100
                          },
                          "typeArguments": null,
                          "start": 1092,
                          "end": 1100
                        }
                      ],
                      "start": 1055,
                      "end": 1100
                    },
                    "start": 1053,
                    "end": 1100
                  },
                  "start": 1052,
                  "end": 1100
                },
                "init": null,
                "definite": false,
                "start": 1052,
                "end": 1100
              }
            ],
            "declare": false,
            "start": 1048,
            "end": 1101
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1107
              },
              "right": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 1110,
                "end": 1112
              },
              "start": 1106,
              "end": 1112
            },
            "directive": null,
            "start": 1106,
            "end": 1113
          },
          {
            "type": "DoWhileStatement",
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1135,
                    "end": 1139
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1155,
                            "end": 1156
                          },
                          "right": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 1159,
                            "end": 1161
                          },
                          "start": 1155,
                          "end": 1161
                        },
                        "directive": null,
                        "start": 1155,
                        "end": 1162
                      },
                      {
                        "type": "BreakStatement",
                        "label": null,
                        "start": 1175,
                        "end": 1181
                      }
                    ],
                    "start": 1141,
                    "end": 1191
                  },
                  "alternate": null,
                  "start": 1131,
                  "end": 1191
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1208
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1224,
                            "end": 1225
                          },
                          "right": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 1228,
                            "end": 1232
                          },
                          "start": 1224,
                          "end": 1232
                        },
                        "directive": null,
                        "start": 1224,
                        "end": 1233
                      },
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 1246,
                        "end": 1255
                      }
                    ],
                    "start": 1210,
                    "end": 1265
                  },
                  "alternate": null,
                  "start": 1200,
                  "end": 1265
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1274,
                      "end": 1275
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "pattern": "a",
                        "flags": ""
                      },
                      "start": 1278,
                      "end": 1281
                    },
                    "start": 1274,
                    "end": 1281
                  },
                  "directive": null,
                  "start": 1274,
                  "end": 1282
                }
              ],
              "start": 1121,
              "end": 1288
            },
            "test": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 1296,
              "end": 1300
            },
            "start": 1118,
            "end": 1301
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1306,
              "end": 1307
            },
            "directive": null,
            "start": 1306,
            "end": 1308
          }
        ],
        "start": 1042,
        "end": 1320
      },
      "expression": false,
      "start": 1029,
      "end": 1320
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1320
}
```
