__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "init": null,
            "definite": false,
            "start": 20,
            "end": 21
          }
        ],
        "declare": false,
        "start": 16,
        "end": 21
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 25,
        "end": 27
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 49,
                    "end": 57
                  }
                ],
                "start": 47,
                "end": 58
              },
              "expression": false,
              "start": 36,
              "end": 58
            },
            "directive": null,
            "start": 35,
            "end": 60
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 72,
                "end": 73
              },
              "id": null,
              "generator": false,
              "start": 66,
              "end": 73
            },
            "directive": null,
            "start": 65,
            "end": 75
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 84,
                "end": 85
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 89,
                "end": 90
              },
              "start": 84,
              "end": 90
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 102,
                  "end": 108
                }
              ],
              "start": 92,
              "end": 114
            },
            "alternate": null,
            "start": 80,
            "end": 114
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 128,
                "end": 129
              },
              "start": 123,
              "end": 129
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 141,
                  "end": 150
                }
              ],
              "start": 131,
              "end": 156
            },
            "alternate": null,
            "start": 119,
            "end": 156
          }
        ],
        "start": 29,
        "end": 158
      },
      "start": 11,
      "end": 158
    },
    {
      "type": "ForInStatement",
      "left": {
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
              "typeAnnotation": null,
              "start": 169,
              "end": 170
            },
            "init": null,
            "definite": false,
            "start": 169,
            "end": 170
          }
        ],
        "declare": false,
        "start": 165,
        "end": 170
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 174,
        "end": 176
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 206
                    },
                    "start": 198,
                    "end": 206
                  }
                ],
                "start": 196,
                "end": 207
              },
              "expression": false,
              "start": 185,
              "end": 207
            },
            "directive": null,
            "start": 184,
            "end": 209
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 221,
                "end": 222
              },
              "id": null,
              "generator": false,
              "start": 215,
              "end": 222
            },
            "directive": null,
            "start": 214,
            "end": 224
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 233,
                "end": 234
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 238,
                "end": 241
              },
              "start": 233,
              "end": 241
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 253,
                  "end": 259
                }
              ],
              "start": 243,
              "end": 265
            },
            "alternate": null,
            "start": 229,
            "end": 265
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 275
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 279,
                "end": 282
              },
              "start": 274,
              "end": 282
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 294,
                  "end": 303
                }
              ],
              "start": 284,
              "end": 309
            },
            "alternate": null,
            "start": 270,
            "end": 309
          }
        ],
        "start": 178,
        "end": 311
      },
      "start": 160,
      "end": 311
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 323,
              "end": 324
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 327,
              "end": 328
            },
            "definite": false,
            "start": 323,
            "end": 328
          }
        ],
        "declare": false,
        "start": 319,
        "end": 328
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 331
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 334,
          "end": 335
        },
        "start": 330,
        "end": 335
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 339,
          "end": 340
        },
        "start": 337,
        "end": 340
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  }
                ],
                "start": 360,
                "end": 371
              },
              "expression": false,
              "start": 349,
              "end": 371
            },
            "directive": null,
            "start": 348,
            "end": 373
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 386
              },
              "id": null,
              "generator": false,
              "start": 379,
              "end": 386
            },
            "directive": null,
            "start": 378,
            "end": 388
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 398
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 402,
                "end": 403
              },
              "start": 397,
              "end": 403
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 415,
                  "end": 421
                }
              ],
              "start": 405,
              "end": 427
            },
            "alternate": null,
            "start": 393,
            "end": 427
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 436,
                "end": 437
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 441,
                "end": 442
              },
              "start": 436,
              "end": 442
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 454,
                  "end": 463
                }
              ],
              "start": 444,
              "end": 469
            },
            "alternate": null,
            "start": 432,
            "end": 469
          }
        ],
        "start": 342,
        "end": 471
      },
      "start": 314,
      "end": 471
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 480,
          "end": 481
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 486,
          "end": 487
        },
        "start": 480,
        "end": 487
      },
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
                  "typeAnnotation": null,
                  "start": 499,
                  "end": 500
                },
                "init": null,
                "definite": false,
                "start": 499,
                "end": 500
              }
            ],
            "declare": false,
            "start": 495,
            "end": 501
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 528
                    },
                    "start": 520,
                    "end": 528
                  }
                ],
                "start": 518,
                "end": 529
              },
              "expression": false,
              "start": 507,
              "end": 529
            },
            "directive": null,
            "start": 506,
            "end": 531
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "id": null,
              "generator": false,
              "start": 537,
              "end": 544
            },
            "directive": null,
            "start": 536,
            "end": 546
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 555,
                "end": 556
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 560,
                "end": 561
              },
              "start": 555,
              "end": 561
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 573,
                  "end": 579
                }
              ],
              "start": 563,
              "end": 585
            },
            "alternate": null,
            "start": 551,
            "end": 585
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 595
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 599,
                "end": 600
              },
              "start": 594,
              "end": 600
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 612,
                  "end": 621
                }
              ],
              "start": 602,
              "end": 627
            },
            "alternate": null,
            "start": 590,
            "end": 627
          }
        ],
        "start": 489,
        "end": 629
      },
      "start": 473,
      "end": 629
    },
    {
      "type": "DoWhileStatement",
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
                  "typeAnnotation": null,
                  "start": 644,
                  "end": 645
                },
                "init": null,
                "definite": false,
                "start": 644,
                "end": 645
              }
            ],
            "declare": false,
            "start": 640,
            "end": 646
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    },
                    "start": 665,
                    "end": 673
                  }
                ],
                "start": 663,
                "end": 674
              },
              "expression": false,
              "start": 652,
              "end": 674
            },
            "directive": null,
            "start": 651,
            "end": 676
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 689
              },
              "id": null,
              "generator": false,
              "start": 682,
              "end": 689
            },
            "directive": null,
            "start": 681,
            "end": 691
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 701
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 705,
                "end": 706
              },
              "start": 700,
              "end": 706
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 718,
                  "end": 724
                }
              ],
              "start": 708,
              "end": 730
            },
            "alternate": null,
            "start": 696,
            "end": 730
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 739,
                "end": 740
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 744,
                "end": 745
              },
              "start": 739,
              "end": 745
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 757,
                  "end": 766
                }
              ],
              "start": 747,
              "end": 772
            },
            "alternate": null,
            "start": 735,
            "end": 772
          }
        ],
        "start": 634,
        "end": 774
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 782,
          "end": 783
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 788,
          "end": 789
        },
        "start": 782,
        "end": 789
      },
      "start": 631,
      "end": 790
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 801,
              "end": 802
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 805,
              "end": 806
            },
            "definite": false,
            "start": 801,
            "end": 806
          }
        ],
        "declare": false,
        "start": 797,
        "end": 806
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 808,
          "end": 809
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 812,
          "end": 813
        },
        "start": 808,
        "end": 813
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 817,
          "end": 818
        },
        "start": 815,
        "end": 818
      },
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
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 831
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 834,
                  "end": 835
                },
                "definite": false,
                "start": 830,
                "end": 835
              }
            ],
            "declare": false,
            "start": 826,
            "end": 836
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 862,
                      "end": 863
                    },
                    "start": 855,
                    "end": 863
                  }
                ],
                "start": 853,
                "end": 864
              },
              "expression": false,
              "start": 842,
              "end": 864
            },
            "directive": null,
            "start": 841,
            "end": 866
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 878,
                "end": 879
              },
              "id": null,
              "generator": false,
              "start": 872,
              "end": 879
            },
            "directive": null,
            "start": 871,
            "end": 881
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 890,
                "end": 891
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 895,
                "end": 896
              },
              "start": 890,
              "end": 896
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 908,
                  "end": 914
                }
              ],
              "start": 898,
              "end": 920
            },
            "alternate": null,
            "start": 886,
            "end": 920
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 929,
                "end": 930
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 934,
                "end": 935
              },
              "start": 929,
              "end": 935
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 947,
                  "end": 956
                }
              ],
              "start": 937,
              "end": 962
            },
            "alternate": null,
            "start": 925,
            "end": 962
          }
        ],
        "start": 820,
        "end": 964
      },
      "start": 792,
      "end": 964
    },
    {
      "type": "ForStatement",
      "init": {
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
              "typeAnnotation": null,
              "start": 975,
              "end": 976
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 979,
              "end": 980
            },
            "definite": false,
            "start": 975,
            "end": 980
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 982,
              "end": 983
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 986,
              "end": 987
            },
            "definite": false,
            "start": 982,
            "end": 987
          }
        ],
        "declare": false,
        "start": 971,
        "end": 987
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 989,
          "end": 990
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 993,
          "end": 994
        },
        "start": 989,
        "end": 994
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 998,
          "end": 999
        },
        "start": 996,
        "end": 999
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1028,
                        "end": 1029
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1032,
                        "end": 1033
                      },
                      "start": 1028,
                      "end": 1033
                    },
                    "start": 1021,
                    "end": 1033
                  }
                ],
                "start": 1019,
                "end": 1034
              },
              "expression": false,
              "start": 1008,
              "end": 1034
            },
            "directive": null,
            "start": 1007,
            "end": 1036
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1048,
                  "end": 1049
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1052,
                  "end": 1053
                },
                "start": 1048,
                "end": 1053
              },
              "id": null,
              "generator": false,
              "start": 1042,
              "end": 1053
            },
            "directive": null,
            "start": 1041,
            "end": 1055
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1064,
                "end": 1065
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1069,
                "end": 1070
              },
              "start": 1064,
              "end": 1070
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1082,
                  "end": 1088
                }
              ],
              "start": 1072,
              "end": 1094
            },
            "alternate": null,
            "start": 1060,
            "end": 1094
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1103,
                "end": 1104
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1108,
                "end": 1109
              },
              "start": 1103,
              "end": 1109
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1121,
                  "end": 1130
                }
              ],
              "start": 1111,
              "end": 1136
            },
            "alternate": null,
            "start": 1099,
            "end": 1136
          }
        ],
        "start": 1001,
        "end": 1138
      },
      "start": 966,
      "end": 1138
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1147,
          "end": 1148
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1153,
          "end": 1154
        },
        "start": 1147,
        "end": 1154
      },
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
                  "typeAnnotation": null,
                  "start": 1166,
                  "end": 1167
                },
                "init": null,
                "definite": false,
                "start": 1166,
                "end": 1167
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1169,
                  "end": 1170
                },
                "init": null,
                "definite": false,
                "start": 1169,
                "end": 1170
              }
            ],
            "declare": false,
            "start": 1162,
            "end": 1171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1197,
                        "end": 1198
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1201,
                        "end": 1202
                      },
                      "start": 1197,
                      "end": 1202
                    },
                    "start": 1190,
                    "end": 1202
                  }
                ],
                "start": 1188,
                "end": 1203
              },
              "expression": false,
              "start": 1177,
              "end": 1203
            },
            "directive": null,
            "start": 1176,
            "end": 1205
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1217,
                  "end": 1218
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1221,
                  "end": 1222
                },
                "start": 1217,
                "end": 1222
              },
              "id": null,
              "generator": false,
              "start": 1211,
              "end": 1222
            },
            "directive": null,
            "start": 1210,
            "end": 1224
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1233,
                "end": 1234
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1238,
                "end": 1239
              },
              "start": 1233,
              "end": 1239
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1251,
                  "end": 1257
                }
              ],
              "start": 1241,
              "end": 1263
            },
            "alternate": null,
            "start": 1229,
            "end": 1263
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1272,
                "end": 1273
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1277,
                "end": 1278
              },
              "start": 1272,
              "end": 1278
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1290,
                  "end": 1299
                }
              ],
              "start": 1280,
              "end": 1305
            },
            "alternate": null,
            "start": 1268,
            "end": 1305
          }
        ],
        "start": 1156,
        "end": 1307
      },
      "start": 1140,
      "end": 1307
    },
    {
      "type": "DoWhileStatement",
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
                  "typeAnnotation": null,
                  "start": 1322,
                  "end": 1323
                },
                "init": null,
                "definite": false,
                "start": 1322,
                "end": 1323
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1325,
                  "end": 1326
                },
                "init": null,
                "definite": false,
                "start": 1325,
                "end": 1326
              }
            ],
            "declare": false,
            "start": 1318,
            "end": 1327
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1353,
                        "end": 1354
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1357,
                        "end": 1358
                      },
                      "start": 1353,
                      "end": 1358
                    },
                    "start": 1346,
                    "end": 1358
                  }
                ],
                "start": 1344,
                "end": 1359
              },
              "expression": false,
              "start": 1333,
              "end": 1359
            },
            "directive": null,
            "start": 1332,
            "end": 1361
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1373,
                  "end": 1374
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1377,
                  "end": 1378
                },
                "start": 1373,
                "end": 1378
              },
              "id": null,
              "generator": false,
              "start": 1367,
              "end": 1378
            },
            "directive": null,
            "start": 1366,
            "end": 1380
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1389,
                "end": 1390
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1394,
                "end": 1395
              },
              "start": 1389,
              "end": 1395
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1407,
                  "end": 1413
                }
              ],
              "start": 1397,
              "end": 1419
            },
            "alternate": null,
            "start": 1385,
            "end": 1419
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1428,
                "end": 1429
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1433,
                "end": 1434
              },
              "start": 1428,
              "end": 1434
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1446,
                  "end": 1455
                }
              ],
              "start": 1436,
              "end": 1461
            },
            "alternate": null,
            "start": 1424,
            "end": 1461
          }
        ],
        "start": 1312,
        "end": 1463
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1471,
          "end": 1472
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1477,
          "end": 1478
        },
        "start": 1471,
        "end": 1478
      },
      "start": 1309,
      "end": 1479
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1490,
              "end": 1491
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1494,
              "end": 1495
            },
            "definite": false,
            "start": 1490,
            "end": 1495
          }
        ],
        "declare": false,
        "start": 1486,
        "end": 1495
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1497,
          "end": 1498
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1501,
          "end": 1502
        },
        "start": 1497,
        "end": 1502
      },
      "update": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1506,
          "end": 1507
        },
        "start": 1504,
        "end": 1507
      },
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
                  "typeAnnotation": null,
                  "start": 1519,
                  "end": 1520
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1523,
                  "end": 1524
                },
                "definite": false,
                "start": 1519,
                "end": 1524
              }
            ],
            "declare": false,
            "start": 1515,
            "end": 1525
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1551,
                        "end": 1552
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1555,
                        "end": 1556
                      },
                      "start": 1551,
                      "end": 1556
                    },
                    "start": 1544,
                    "end": 1556
                  }
                ],
                "start": 1542,
                "end": 1557
              },
              "expression": false,
              "start": 1531,
              "end": 1557
            },
            "directive": null,
            "start": 1530,
            "end": 1559
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1571,
                  "end": 1572
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1575,
                  "end": 1576
                },
                "start": 1571,
                "end": 1576
              },
              "id": null,
              "generator": false,
              "start": 1565,
              "end": 1576
            },
            "directive": null,
            "start": 1564,
            "end": 1578
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1587,
                "end": 1588
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1592,
                "end": 1593
              },
              "start": 1587,
              "end": 1593
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1605,
                  "end": 1611
                }
              ],
              "start": 1595,
              "end": 1617
            },
            "alternate": null,
            "start": 1583,
            "end": 1617
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1626,
                "end": 1627
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1631,
                "end": 1632
              },
              "start": 1626,
              "end": 1632
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1644,
                  "end": 1653
                }
              ],
              "start": 1634,
              "end": 1659
            },
            "alternate": null,
            "start": 1622,
            "end": 1659
          }
        ],
        "start": 1509,
        "end": 1661
      },
      "start": 1481,
      "end": 1661
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1688,
              "end": 1689
            },
            "init": null,
            "definite": false,
            "start": 1688,
            "end": 1689
          }
        ],
        "declare": false,
        "start": 1682,
        "end": 1689
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1693,
        "end": 1695
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1724,
                      "end": 1725
                    },
                    "start": 1717,
                    "end": 1725
                  }
                ],
                "start": 1715,
                "end": 1726
              },
              "expression": false,
              "start": 1704,
              "end": 1726
            },
            "directive": null,
            "start": 1703,
            "end": 1728
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1740,
                "end": 1741
              },
              "id": null,
              "generator": false,
              "start": 1734,
              "end": 1741
            },
            "directive": null,
            "start": 1733,
            "end": 1743
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1753
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1757,
                "end": 1758
              },
              "start": 1752,
              "end": 1758
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1770,
                  "end": 1776
                }
              ],
              "start": 1760,
              "end": 1782
            },
            "alternate": null,
            "start": 1748,
            "end": 1782
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1791,
                "end": 1792
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1796,
                "end": 1797
              },
              "start": 1791,
              "end": 1797
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1809,
                  "end": 1818
                }
              ],
              "start": 1799,
              "end": 1824
            },
            "alternate": null,
            "start": 1787,
            "end": 1824
          }
        ],
        "start": 1697,
        "end": 1826
      },
      "start": 1677,
      "end": 1826
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1839,
              "end": 1840
            },
            "init": null,
            "definite": false,
            "start": 1839,
            "end": 1840
          }
        ],
        "declare": false,
        "start": 1833,
        "end": 1840
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1844,
        "end": 1846
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1875,
                      "end": 1876
                    },
                    "start": 1868,
                    "end": 1876
                  }
                ],
                "start": 1866,
                "end": 1877
              },
              "expression": false,
              "start": 1855,
              "end": 1877
            },
            "directive": null,
            "start": 1854,
            "end": 1879
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1891,
                "end": 1892
              },
              "id": null,
              "generator": false,
              "start": 1885,
              "end": 1892
            },
            "directive": null,
            "start": 1884,
            "end": 1894
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1903,
                "end": 1904
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "1",
                "raw": "\"1\"",
                "start": 1908,
                "end": 1911
              },
              "start": 1903,
              "end": 1911
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1923,
                  "end": 1929
                }
              ],
              "start": 1913,
              "end": 1935
            },
            "alternate": null,
            "start": 1899,
            "end": 1935
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1944,
                "end": 1945
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": "2",
                "raw": "\"2\"",
                "start": 1949,
                "end": 1952
              },
              "start": 1944,
              "end": 1952
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 1964,
                  "end": 1973
                }
              ],
              "start": 1954,
              "end": 1979
            },
            "alternate": null,
            "start": 1940,
            "end": 1979
          }
        ],
        "start": 1848,
        "end": 1981
      },
      "start": 1828,
      "end": 1981
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1995,
              "end": 1996
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1999,
              "end": 2000
            },
            "definite": false,
            "start": 1995,
            "end": 2000
          }
        ],
        "declare": false,
        "start": 1989,
        "end": 2000
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2002,
          "end": 2003
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2006,
          "end": 2007
        },
        "start": 2002,
        "end": 2007
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2037,
                      "end": 2038
                    },
                    "start": 2030,
                    "end": 2038
                  }
                ],
                "start": 2028,
                "end": 2039
              },
              "expression": false,
              "start": 2017,
              "end": 2039
            },
            "directive": null,
            "start": 2016,
            "end": 2041
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2053,
                "end": 2054
              },
              "id": null,
              "generator": false,
              "start": 2047,
              "end": 2054
            },
            "directive": null,
            "start": 2046,
            "end": 2056
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2065,
                "end": 2066
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2070,
                "end": 2071
              },
              "start": 2065,
              "end": 2071
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2083,
                  "end": 2089
                }
              ],
              "start": 2073,
              "end": 2095
            },
            "alternate": null,
            "start": 2061,
            "end": 2095
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2104,
                "end": 2105
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2109,
                "end": 2110
              },
              "start": 2104,
              "end": 2110
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2122,
                  "end": 2131
                }
              ],
              "start": 2112,
              "end": 2137
            },
            "alternate": null,
            "start": 2100,
            "end": 2137
          }
        ],
        "start": 2010,
        "end": 2139
      },
      "start": 1984,
      "end": 2139
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2148,
          "end": 2149
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2154,
          "end": 2155
        },
        "start": 2148,
        "end": 2155
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2169,
                  "end": 2170
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2173,
                  "end": 2174
                },
                "definite": false,
                "start": 2169,
                "end": 2174
              }
            ],
            "declare": false,
            "start": 2163,
            "end": 2175
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2201,
                      "end": 2202
                    },
                    "start": 2194,
                    "end": 2202
                  }
                ],
                "start": 2192,
                "end": 2203
              },
              "expression": false,
              "start": 2181,
              "end": 2203
            },
            "directive": null,
            "start": 2180,
            "end": 2205
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2217,
                "end": 2218
              },
              "id": null,
              "generator": false,
              "start": 2211,
              "end": 2218
            },
            "directive": null,
            "start": 2210,
            "end": 2220
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2229,
                "end": 2230
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2234,
                "end": 2235
              },
              "start": 2229,
              "end": 2235
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2247,
                  "end": 2253
                }
              ],
              "start": 2237,
              "end": 2259
            },
            "alternate": null,
            "start": 2225,
            "end": 2259
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2268,
                "end": 2269
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2273,
                "end": 2274
              },
              "start": 2268,
              "end": 2274
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2286,
                  "end": 2295
                }
              ],
              "start": 2276,
              "end": 2301
            },
            "alternate": null,
            "start": 2264,
            "end": 2301
          }
        ],
        "start": 2157,
        "end": 2303
      },
      "start": 2141,
      "end": 2303
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2320,
                  "end": 2321
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2324,
                  "end": 2325
                },
                "definite": false,
                "start": 2320,
                "end": 2325
              }
            ],
            "declare": false,
            "start": 2314,
            "end": 2326
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2352,
                      "end": 2353
                    },
                    "start": 2345,
                    "end": 2353
                  }
                ],
                "start": 2343,
                "end": 2354
              },
              "expression": false,
              "start": 2332,
              "end": 2354
            },
            "directive": null,
            "start": 2331,
            "end": 2356
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2368,
                "end": 2369
              },
              "id": null,
              "generator": false,
              "start": 2362,
              "end": 2369
            },
            "directive": null,
            "start": 2361,
            "end": 2371
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2380,
                "end": 2381
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2385,
                "end": 2386
              },
              "start": 2380,
              "end": 2386
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2398,
                  "end": 2404
                }
              ],
              "start": 2388,
              "end": 2410
            },
            "alternate": null,
            "start": 2376,
            "end": 2410
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2419,
                "end": 2420
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2424,
                "end": 2425
              },
              "start": 2419,
              "end": 2425
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2437,
                  "end": 2446
                }
              ],
              "start": 2427,
              "end": 2452
            },
            "alternate": null,
            "start": 2415,
            "end": 2452
          }
        ],
        "start": 2308,
        "end": 2454
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2462,
          "end": 2463
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2468,
          "end": 2469
        },
        "start": 2462,
        "end": 2469
      },
      "start": 2305,
      "end": 2470
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2483,
              "end": 2484
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2487,
              "end": 2488
            },
            "definite": false,
            "start": 2483,
            "end": 2488
          }
        ],
        "declare": false,
        "start": 2477,
        "end": 2488
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 2490,
          "end": 2491
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2494,
          "end": 2495
        },
        "start": 2490,
        "end": 2495
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2510,
                  "end": 2511
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2514,
                  "end": 2515
                },
                "definite": false,
                "start": 2510,
                "end": 2515
              }
            ],
            "declare": false,
            "start": 2504,
            "end": 2516
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2542,
                      "end": 2543
                    },
                    "start": 2535,
                    "end": 2543
                  }
                ],
                "start": 2533,
                "end": 2544
              },
              "expression": false,
              "start": 2522,
              "end": 2544
            },
            "directive": null,
            "start": 2521,
            "end": 2546
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2558,
                "end": 2559
              },
              "id": null,
              "generator": false,
              "start": 2552,
              "end": 2559
            },
            "directive": null,
            "start": 2551,
            "end": 2561
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2570,
                "end": 2571
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2575,
                "end": 2576
              },
              "start": 2570,
              "end": 2576
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2588,
                  "end": 2594
                }
              ],
              "start": 2578,
              "end": 2600
            },
            "alternate": null,
            "start": 2566,
            "end": 2600
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2609,
                "end": 2610
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2614,
                "end": 2615
              },
              "start": 2609,
              "end": 2615
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2627,
                  "end": 2636
                }
              ],
              "start": 2617,
              "end": 2642
            },
            "alternate": null,
            "start": 2605,
            "end": 2642
          }
        ],
        "start": 2498,
        "end": 2644
      },
      "start": 2472,
      "end": 2644
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2657,
              "end": 2658
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2661,
              "end": 2662
            },
            "definite": false,
            "start": 2657,
            "end": 2662
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 2664,
              "end": 2665
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 2668,
              "end": 2669
            },
            "definite": false,
            "start": 2664,
            "end": 2669
          }
        ],
        "declare": false,
        "start": 2651,
        "end": 2669
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 2671,
          "end": 2672
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2675,
          "end": 2676
        },
        "start": 2671,
        "end": 2676
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2706,
                        "end": 2707
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2710,
                        "end": 2711
                      },
                      "start": 2706,
                      "end": 2711
                    },
                    "start": 2699,
                    "end": 2711
                  }
                ],
                "start": 2697,
                "end": 2712
              },
              "expression": false,
              "start": 2686,
              "end": 2712
            },
            "directive": null,
            "start": 2685,
            "end": 2714
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2726,
                  "end": 2727
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2730,
                  "end": 2731
                },
                "start": 2726,
                "end": 2731
              },
              "id": null,
              "generator": false,
              "start": 2720,
              "end": 2731
            },
            "directive": null,
            "start": 2719,
            "end": 2733
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2742,
                "end": 2743
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2747,
                "end": 2748
              },
              "start": 2742,
              "end": 2748
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2760,
                  "end": 2766
                }
              ],
              "start": 2750,
              "end": 2772
            },
            "alternate": null,
            "start": 2738,
            "end": 2772
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2781,
                "end": 2782
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2786,
                "end": 2787
              },
              "start": 2781,
              "end": 2787
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2799,
                  "end": 2808
                }
              ],
              "start": 2789,
              "end": 2814
            },
            "alternate": null,
            "start": 2777,
            "end": 2814
          }
        ],
        "start": 2679,
        "end": 2816
      },
      "start": 2646,
      "end": 2816
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2825,
          "end": 2826
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 2831,
          "end": 2832
        },
        "start": 2825,
        "end": 2832
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2846,
                  "end": 2847
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2850,
                  "end": 2851
                },
                "definite": false,
                "start": 2846,
                "end": 2851
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2853,
                  "end": 2854
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 2857,
                  "end": 2858
                },
                "definite": false,
                "start": 2853,
                "end": 2858
              }
            ],
            "declare": false,
            "start": 2840,
            "end": 2859
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2885,
                        "end": 2886
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2889,
                        "end": 2890
                      },
                      "start": 2885,
                      "end": 2890
                    },
                    "start": 2878,
                    "end": 2890
                  }
                ],
                "start": 2876,
                "end": 2891
              },
              "expression": false,
              "start": 2865,
              "end": 2891
            },
            "directive": null,
            "start": 2864,
            "end": 2893
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2905,
                  "end": 2906
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2909,
                  "end": 2910
                },
                "start": 2905,
                "end": 2910
              },
              "id": null,
              "generator": false,
              "start": 2899,
              "end": 2910
            },
            "directive": null,
            "start": 2898,
            "end": 2912
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2921,
                "end": 2922
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2926,
                "end": 2927
              },
              "start": 2921,
              "end": 2927
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 2939,
                  "end": 2945
                }
              ],
              "start": 2929,
              "end": 2951
            },
            "alternate": null,
            "start": 2917,
            "end": 2951
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2960,
                "end": 2961
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 2965,
                "end": 2966
              },
              "start": 2960,
              "end": 2966
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 2978,
                  "end": 2987
                }
              ],
              "start": 2968,
              "end": 2993
            },
            "alternate": null,
            "start": 2956,
            "end": 2993
          }
        ],
        "start": 2834,
        "end": 2995
      },
      "start": 2818,
      "end": 2995
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3012,
                  "end": 3013
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3016,
                  "end": 3017
                },
                "definite": false,
                "start": 3012,
                "end": 3017
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3019,
                  "end": 3020
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3023,
                  "end": 3024
                },
                "definite": false,
                "start": 3019,
                "end": 3024
              }
            ],
            "declare": false,
            "start": 3006,
            "end": 3025
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3051,
                        "end": 3052
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3055,
                        "end": 3056
                      },
                      "start": 3051,
                      "end": 3056
                    },
                    "start": 3044,
                    "end": 3056
                  }
                ],
                "start": 3042,
                "end": 3057
              },
              "expression": false,
              "start": 3031,
              "end": 3057
            },
            "directive": null,
            "start": 3030,
            "end": 3059
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3071,
                  "end": 3072
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3075,
                  "end": 3076
                },
                "start": 3071,
                "end": 3076
              },
              "id": null,
              "generator": false,
              "start": 3065,
              "end": 3076
            },
            "directive": null,
            "start": 3064,
            "end": 3078
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3087,
                "end": 3088
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3092,
                "end": 3093
              },
              "start": 3087,
              "end": 3093
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 3105,
                  "end": 3111
                }
              ],
              "start": 3095,
              "end": 3117
            },
            "alternate": null,
            "start": 3083,
            "end": 3117
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3126,
                "end": 3127
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3131,
                "end": 3132
              },
              "start": 3126,
              "end": 3132
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 3144,
                  "end": 3153
                }
              ],
              "start": 3134,
              "end": 3159
            },
            "alternate": null,
            "start": 3122,
            "end": 3159
          }
        ],
        "start": 3000,
        "end": 3161
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3169,
          "end": 3170
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3175,
          "end": 3176
        },
        "start": 3169,
        "end": 3176
      },
      "start": 2997,
      "end": 3177
    },
    {
      "type": "ForStatement",
      "init": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3190,
              "end": 3191
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 3194,
              "end": 3195
            },
            "definite": false,
            "start": 3190,
            "end": 3195
          }
        ],
        "declare": false,
        "start": 3184,
        "end": 3195
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 3197,
          "end": 3198
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 3201,
          "end": 3202
        },
        "start": 3197,
        "end": 3202
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3217,
                  "end": 3218
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 3221,
                  "end": 3222
                },
                "definite": false,
                "start": 3217,
                "end": 3222
              }
            ],
            "declare": false,
            "start": 3211,
            "end": 3223
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "FunctionExpression",
              "id": null,
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3249,
                        "end": 3250
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3253,
                        "end": 3254
                      },
                      "start": 3249,
                      "end": 3254
                    },
                    "start": 3242,
                    "end": 3254
                  }
                ],
                "start": 3240,
                "end": 3255
              },
              "expression": false,
              "start": 3229,
              "end": 3255
            },
            "directive": null,
            "start": 3228,
            "end": 3257
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3269,
                  "end": 3270
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3273,
                  "end": 3274
                },
                "start": 3269,
                "end": 3274
              },
              "id": null,
              "generator": false,
              "start": 3263,
              "end": 3274
            },
            "directive": null,
            "start": 3262,
            "end": 3276
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3285,
                "end": 3286
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3290,
                "end": 3291
              },
              "start": 3285,
              "end": 3291
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 3303,
                  "end": 3309
                }
              ],
              "start": 3293,
              "end": 3315
            },
            "alternate": null,
            "start": 3281,
            "end": 3315
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3324,
                "end": 3325
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3329,
                "end": 3330
              },
              "start": 3324,
              "end": 3330
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 3342,
                  "end": 3351
                }
              ],
              "start": 3332,
              "end": 3357
            },
            "alternate": null,
            "start": 3320,
            "end": 3357
          }
        ],
        "start": 3205,
        "end": 3359
      },
      "start": 3179,
      "end": 3359
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 3360
}
```
