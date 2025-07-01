__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
        "type": "ObjectExpression",
        "properties": [],
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
          }
        ],
        "start": 29,
        "end": 77
      },
      "start": 11,
      "end": 77
    },
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
              "start": 88,
              "end": 89
            },
            "init": null,
            "definite": false,
            "start": 88,
            "end": 89
          }
        ],
        "declare": false,
        "start": 84,
        "end": 89
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 93,
        "end": 95
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
                      "start": 124,
                      "end": 125
                    },
                    "start": 117,
                    "end": 125
                  }
                ],
                "start": 115,
                "end": 126
              },
              "expression": false,
              "start": 104,
              "end": 126
            },
            "directive": null,
            "start": 103,
            "end": 128
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
                "start": 140,
                "end": 141
              },
              "id": null,
              "generator": false,
              "start": 134,
              "end": 141
            },
            "directive": null,
            "start": 133,
            "end": 143
          }
        ],
        "start": 97,
        "end": 145
      },
      "start": 79,
      "end": 145
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
              "start": 156,
              "end": 157
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 160,
              "end": 161
            },
            "definite": false,
            "start": 156,
            "end": 161
          }
        ],
        "declare": false,
        "start": 152,
        "end": 161
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 163,
          "end": 164
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 167,
          "end": 168
        },
        "start": 163,
        "end": 168
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
          "start": 172,
          "end": 173
        },
        "start": 170,
        "end": 173
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
                      "start": 202,
                      "end": 203
                    },
                    "start": 195,
                    "end": 203
                  }
                ],
                "start": 193,
                "end": 204
              },
              "expression": false,
              "start": 182,
              "end": 204
            },
            "directive": null,
            "start": 181,
            "end": 206
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
                "start": 218,
                "end": 219
              },
              "id": null,
              "generator": false,
              "start": 212,
              "end": 219
            },
            "directive": null,
            "start": 211,
            "end": 221
          }
        ],
        "start": 175,
        "end": 223
      },
      "start": 147,
      "end": 223
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 232,
          "end": 233
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 238,
          "end": 239
        },
        "start": 232,
        "end": 239
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
                  "start": 251,
                  "end": 252
                },
                "init": null,
                "definite": false,
                "start": 251,
                "end": 252
              }
            ],
            "declare": false,
            "start": 247,
            "end": 253
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
                      "start": 279,
                      "end": 280
                    },
                    "start": 272,
                    "end": 280
                  }
                ],
                "start": 270,
                "end": 281
              },
              "expression": false,
              "start": 259,
              "end": 281
            },
            "directive": null,
            "start": 258,
            "end": 283
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
                "start": 295,
                "end": 296
              },
              "id": null,
              "generator": false,
              "start": 289,
              "end": 296
            },
            "directive": null,
            "start": 288,
            "end": 298
          }
        ],
        "start": 241,
        "end": 300
      },
      "start": 225,
      "end": 300
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
                  "start": 315,
                  "end": 316
                },
                "init": null,
                "definite": false,
                "start": 315,
                "end": 316
              }
            ],
            "declare": false,
            "start": 311,
            "end": 317
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
                      "start": 343,
                      "end": 344
                    },
                    "start": 336,
                    "end": 344
                  }
                ],
                "start": 334,
                "end": 345
              },
              "expression": false,
              "start": 323,
              "end": 345
            },
            "directive": null,
            "start": 322,
            "end": 347
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
                "start": 359,
                "end": 360
              },
              "id": null,
              "generator": false,
              "start": 353,
              "end": 360
            },
            "directive": null,
            "start": 352,
            "end": 362
          }
        ],
        "start": 305,
        "end": 364
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 372,
          "end": 373
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 378,
          "end": 379
        },
        "start": 372,
        "end": 379
      },
      "start": 302,
      "end": 380
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
              "start": 391,
              "end": 392
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 395,
              "end": 396
            },
            "definite": false,
            "start": 391,
            "end": 396
          }
        ],
        "declare": false,
        "start": 387,
        "end": 396
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 399
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 402,
          "end": 403
        },
        "start": 398,
        "end": 403
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
          "start": 407,
          "end": 408
        },
        "start": 405,
        "end": 408
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
                  "start": 420,
                  "end": 421
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 424,
                  "end": 425
                },
                "definite": false,
                "start": 420,
                "end": 425
              }
            ],
            "declare": false,
            "start": 416,
            "end": 426
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
                      "start": 452,
                      "end": 453
                    },
                    "start": 445,
                    "end": 453
                  }
                ],
                "start": 443,
                "end": 454
              },
              "expression": false,
              "start": 432,
              "end": 454
            },
            "directive": null,
            "start": 431,
            "end": 456
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
                "start": 468,
                "end": 469
              },
              "id": null,
              "generator": false,
              "start": 462,
              "end": 469
            },
            "directive": null,
            "start": 461,
            "end": 471
          }
        ],
        "start": 410,
        "end": 473
      },
      "start": 382,
      "end": 473
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
              "start": 484,
              "end": 485
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 488,
              "end": 489
            },
            "definite": false,
            "start": 484,
            "end": 489
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 492
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 495,
              "end": 496
            },
            "definite": false,
            "start": 491,
            "end": 496
          }
        ],
        "declare": false,
        "start": 480,
        "end": 496
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 498,
          "end": 499
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 502,
          "end": 503
        },
        "start": 498,
        "end": 503
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
          "start": 507,
          "end": 508
        },
        "start": 505,
        "end": 508
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
                        "start": 537,
                        "end": 538
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 541,
                        "end": 542
                      },
                      "start": 537,
                      "end": 542
                    },
                    "start": 530,
                    "end": 542
                  }
                ],
                "start": 528,
                "end": 543
              },
              "expression": false,
              "start": 517,
              "end": 543
            },
            "directive": null,
            "start": 516,
            "end": 545
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
                  "start": 557,
                  "end": 558
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 561,
                  "end": 562
                },
                "start": 557,
                "end": 562
              },
              "id": null,
              "generator": false,
              "start": 551,
              "end": 562
            },
            "directive": null,
            "start": 550,
            "end": 564
          }
        ],
        "start": 510,
        "end": 566
      },
      "start": 475,
      "end": 566
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 575,
          "end": 576
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 581,
          "end": 582
        },
        "start": 575,
        "end": 582
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
                  "start": 594,
                  "end": 595
                },
                "init": null,
                "definite": false,
                "start": 594,
                "end": 595
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "init": null,
                "definite": false,
                "start": 597,
                "end": 598
              }
            ],
            "declare": false,
            "start": 590,
            "end": 599
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
                        "start": 625,
                        "end": 626
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 629,
                        "end": 630
                      },
                      "start": 625,
                      "end": 630
                    },
                    "start": 618,
                    "end": 630
                  }
                ],
                "start": 616,
                "end": 631
              },
              "expression": false,
              "start": 605,
              "end": 631
            },
            "directive": null,
            "start": 604,
            "end": 633
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
                  "start": 645,
                  "end": 646
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 650
                },
                "start": 645,
                "end": 650
              },
              "id": null,
              "generator": false,
              "start": 639,
              "end": 650
            },
            "directive": null,
            "start": 638,
            "end": 652
          }
        ],
        "start": 584,
        "end": 654
      },
      "start": 568,
      "end": 654
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
                  "start": 669,
                  "end": 670
                },
                "init": null,
                "definite": false,
                "start": 669,
                "end": 670
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "init": null,
                "definite": false,
                "start": 672,
                "end": 673
              }
            ],
            "declare": false,
            "start": 665,
            "end": 674
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
                        "start": 700,
                        "end": 701
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 704,
                        "end": 705
                      },
                      "start": 700,
                      "end": 705
                    },
                    "start": 693,
                    "end": 705
                  }
                ],
                "start": 691,
                "end": 706
              },
              "expression": false,
              "start": 680,
              "end": 706
            },
            "directive": null,
            "start": 679,
            "end": 708
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
                  "start": 720,
                  "end": 721
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 725
                },
                "start": 720,
                "end": 725
              },
              "id": null,
              "generator": false,
              "start": 714,
              "end": 725
            },
            "directive": null,
            "start": 713,
            "end": 727
          }
        ],
        "start": 659,
        "end": 729
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 737,
          "end": 738
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 743,
          "end": 744
        },
        "start": 737,
        "end": 744
      },
      "start": 656,
      "end": 745
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
              "start": 756,
              "end": 757
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 760,
              "end": 761
            },
            "definite": false,
            "start": 756,
            "end": 761
          }
        ],
        "declare": false,
        "start": 752,
        "end": 761
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 763,
          "end": 764
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 767,
          "end": 768
        },
        "start": 763,
        "end": 768
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
          "start": 772,
          "end": 773
        },
        "start": 770,
        "end": 773
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
                  "start": 785,
                  "end": 786
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 789,
                  "end": 790
                },
                "definite": false,
                "start": 785,
                "end": 790
              }
            ],
            "declare": false,
            "start": 781,
            "end": 791
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
                        "start": 817,
                        "end": 818
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 822
                      },
                      "start": 817,
                      "end": 822
                    },
                    "start": 810,
                    "end": 822
                  }
                ],
                "start": 808,
                "end": 823
              },
              "expression": false,
              "start": 797,
              "end": 823
            },
            "directive": null,
            "start": 796,
            "end": 825
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
                  "start": 837,
                  "end": 838
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "start": 837,
                "end": 842
              },
              "id": null,
              "generator": false,
              "start": 831,
              "end": 842
            },
            "directive": null,
            "start": 830,
            "end": 844
          }
        ],
        "start": 775,
        "end": 846
      },
      "start": 747,
      "end": 846
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
              "start": 876,
              "end": 877
            },
            "init": null,
            "definite": false,
            "start": 876,
            "end": 877
          }
        ],
        "declare": false,
        "start": 870,
        "end": 877
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 881,
        "end": 883
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
                      "start": 912,
                      "end": 913
                    },
                    "start": 905,
                    "end": 913
                  }
                ],
                "start": 903,
                "end": 914
              },
              "expression": false,
              "start": 892,
              "end": 914
            },
            "directive": null,
            "start": 891,
            "end": 916
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
                "start": 928,
                "end": 929
              },
              "id": null,
              "generator": false,
              "start": 922,
              "end": 929
            },
            "directive": null,
            "start": 921,
            "end": 931
          }
        ],
        "start": 885,
        "end": 933
      },
      "start": 865,
      "end": 933
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
              "start": 946,
              "end": 947
            },
            "init": null,
            "definite": false,
            "start": 946,
            "end": 947
          }
        ],
        "declare": false,
        "start": 940,
        "end": 947
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 951,
        "end": 953
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
                      "start": 982,
                      "end": 983
                    },
                    "start": 975,
                    "end": 983
                  }
                ],
                "start": 973,
                "end": 984
              },
              "expression": false,
              "start": 962,
              "end": 984
            },
            "directive": null,
            "start": 961,
            "end": 986
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
                "start": 998,
                "end": 999
              },
              "id": null,
              "generator": false,
              "start": 992,
              "end": 999
            },
            "directive": null,
            "start": 991,
            "end": 1001
          }
        ],
        "start": 955,
        "end": 1003
      },
      "start": 935,
      "end": 1003
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
              "start": 1016,
              "end": 1017
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1020,
              "end": 1021
            },
            "definite": false,
            "start": 1016,
            "end": 1021
          }
        ],
        "declare": false,
        "start": 1010,
        "end": 1021
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1023,
          "end": 1024
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1027,
          "end": 1028
        },
        "start": 1023,
        "end": 1028
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
                      "start": 1058,
                      "end": 1059
                    },
                    "start": 1051,
                    "end": 1059
                  }
                ],
                "start": 1049,
                "end": 1060
              },
              "expression": false,
              "start": 1038,
              "end": 1060
            },
            "directive": null,
            "start": 1037,
            "end": 1062
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
                "start": 1074,
                "end": 1075
              },
              "id": null,
              "generator": false,
              "start": 1068,
              "end": 1075
            },
            "directive": null,
            "start": 1067,
            "end": 1077
          }
        ],
        "start": 1031,
        "end": 1079
      },
      "start": 1005,
      "end": 1079
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1088,
          "end": 1089
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1094,
          "end": 1095
        },
        "start": 1088,
        "end": 1095
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
                  "start": 1109,
                  "end": 1110
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1113,
                  "end": 1114
                },
                "definite": false,
                "start": 1109,
                "end": 1114
              }
            ],
            "declare": false,
            "start": 1103,
            "end": 1115
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
                      "start": 1141,
                      "end": 1142
                    },
                    "start": 1134,
                    "end": 1142
                  }
                ],
                "start": 1132,
                "end": 1143
              },
              "expression": false,
              "start": 1121,
              "end": 1143
            },
            "directive": null,
            "start": 1120,
            "end": 1145
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
                "start": 1157,
                "end": 1158
              },
              "id": null,
              "generator": false,
              "start": 1151,
              "end": 1158
            },
            "directive": null,
            "start": 1150,
            "end": 1160
          }
        ],
        "start": 1097,
        "end": 1162
      },
      "start": 1081,
      "end": 1162
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
                  "start": 1179,
                  "end": 1180
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1183,
                  "end": 1184
                },
                "definite": false,
                "start": 1179,
                "end": 1184
              }
            ],
            "declare": false,
            "start": 1173,
            "end": 1185
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
                      "start": 1211,
                      "end": 1212
                    },
                    "start": 1204,
                    "end": 1212
                  }
                ],
                "start": 1202,
                "end": 1213
              },
              "expression": false,
              "start": 1191,
              "end": 1213
            },
            "directive": null,
            "start": 1190,
            "end": 1215
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
                "start": 1227,
                "end": 1228
              },
              "id": null,
              "generator": false,
              "start": 1221,
              "end": 1228
            },
            "directive": null,
            "start": 1220,
            "end": 1230
          }
        ],
        "start": 1167,
        "end": 1232
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1240,
          "end": 1241
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1246,
          "end": 1247
        },
        "start": 1240,
        "end": 1247
      },
      "start": 1164,
      "end": 1248
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
              "start": 1261,
              "end": 1262
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1265,
              "end": 1266
            },
            "definite": false,
            "start": 1261,
            "end": 1266
          }
        ],
        "declare": false,
        "start": 1255,
        "end": 1266
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1268,
          "end": 1269
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1272,
          "end": 1273
        },
        "start": 1268,
        "end": 1273
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
                  "start": 1288,
                  "end": 1289
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1292,
                  "end": 1293
                },
                "definite": false,
                "start": 1288,
                "end": 1293
              }
            ],
            "declare": false,
            "start": 1282,
            "end": 1294
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
                      "start": 1320,
                      "end": 1321
                    },
                    "start": 1313,
                    "end": 1321
                  }
                ],
                "start": 1311,
                "end": 1322
              },
              "expression": false,
              "start": 1300,
              "end": 1322
            },
            "directive": null,
            "start": 1299,
            "end": 1324
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
                "start": 1336,
                "end": 1337
              },
              "id": null,
              "generator": false,
              "start": 1330,
              "end": 1337
            },
            "directive": null,
            "start": 1329,
            "end": 1339
          }
        ],
        "start": 1276,
        "end": 1341
      },
      "start": 1250,
      "end": 1341
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
              "start": 1354,
              "end": 1355
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1358,
              "end": 1359
            },
            "definite": false,
            "start": 1354,
            "end": 1359
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1361,
              "end": 1362
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1365,
              "end": 1366
            },
            "definite": false,
            "start": 1361,
            "end": 1366
          }
        ],
        "declare": false,
        "start": 1348,
        "end": 1366
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1368,
          "end": 1369
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1372,
          "end": 1373
        },
        "start": 1368,
        "end": 1373
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
                        "start": 1403,
                        "end": 1404
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1407,
                        "end": 1408
                      },
                      "start": 1403,
                      "end": 1408
                    },
                    "start": 1396,
                    "end": 1408
                  }
                ],
                "start": 1394,
                "end": 1409
              },
              "expression": false,
              "start": 1383,
              "end": 1409
            },
            "directive": null,
            "start": 1382,
            "end": 1411
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
                  "start": 1423,
                  "end": 1424
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1427,
                  "end": 1428
                },
                "start": 1423,
                "end": 1428
              },
              "id": null,
              "generator": false,
              "start": 1417,
              "end": 1428
            },
            "directive": null,
            "start": 1416,
            "end": 1430
          }
        ],
        "start": 1376,
        "end": 1432
      },
      "start": 1343,
      "end": 1432
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1441,
          "end": 1442
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1447,
          "end": 1448
        },
        "start": 1441,
        "end": 1448
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
                  "start": 1462,
                  "end": 1463
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1466,
                  "end": 1467
                },
                "definite": false,
                "start": 1462,
                "end": 1467
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1469,
                  "end": 1470
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1473,
                  "end": 1474
                },
                "definite": false,
                "start": 1469,
                "end": 1474
              }
            ],
            "declare": false,
            "start": 1456,
            "end": 1475
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
                        "start": 1501,
                        "end": 1502
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1505,
                        "end": 1506
                      },
                      "start": 1501,
                      "end": 1506
                    },
                    "start": 1494,
                    "end": 1506
                  }
                ],
                "start": 1492,
                "end": 1507
              },
              "expression": false,
              "start": 1481,
              "end": 1507
            },
            "directive": null,
            "start": 1480,
            "end": 1509
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
                  "start": 1521,
                  "end": 1522
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1526
                },
                "start": 1521,
                "end": 1526
              },
              "id": null,
              "generator": false,
              "start": 1515,
              "end": 1526
            },
            "directive": null,
            "start": 1514,
            "end": 1528
          }
        ],
        "start": 1450,
        "end": 1530
      },
      "start": 1434,
      "end": 1530
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
                  "start": 1547,
                  "end": 1548
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1551,
                  "end": 1552
                },
                "definite": false,
                "start": 1547,
                "end": 1552
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1554,
                  "end": 1555
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1558,
                  "end": 1559
                },
                "definite": false,
                "start": 1554,
                "end": 1559
              }
            ],
            "declare": false,
            "start": 1541,
            "end": 1560
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
                        "start": 1586,
                        "end": 1587
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "start": 1586,
                      "end": 1591
                    },
                    "start": 1579,
                    "end": 1591
                  }
                ],
                "start": 1577,
                "end": 1592
              },
              "expression": false,
              "start": 1566,
              "end": 1592
            },
            "directive": null,
            "start": 1565,
            "end": 1594
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
                  "start": 1606,
                  "end": 1607
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1610,
                  "end": 1611
                },
                "start": 1606,
                "end": 1611
              },
              "id": null,
              "generator": false,
              "start": 1600,
              "end": 1611
            },
            "directive": null,
            "start": 1599,
            "end": 1613
          }
        ],
        "start": 1535,
        "end": 1615
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1623,
          "end": 1624
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1629,
          "end": 1630
        },
        "start": 1623,
        "end": 1630
      },
      "start": 1532,
      "end": 1631
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
              "start": 1644,
              "end": 1645
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1648,
              "end": 1649
            },
            "definite": false,
            "start": 1644,
            "end": 1649
          }
        ],
        "declare": false,
        "start": 1638,
        "end": 1649
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1651,
          "end": 1652
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1655,
          "end": 1656
        },
        "start": 1651,
        "end": 1656
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
                  "start": 1671,
                  "end": 1672
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1675,
                  "end": 1676
                },
                "definite": false,
                "start": 1671,
                "end": 1676
              }
            ],
            "declare": false,
            "start": 1665,
            "end": 1677
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
                        "start": 1703,
                        "end": 1704
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1707,
                        "end": 1708
                      },
                      "start": 1703,
                      "end": 1708
                    },
                    "start": 1696,
                    "end": 1708
                  }
                ],
                "start": 1694,
                "end": 1709
              },
              "expression": false,
              "start": 1683,
              "end": 1709
            },
            "directive": null,
            "start": 1682,
            "end": 1711
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
                  "start": 1723,
                  "end": 1724
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1727,
                  "end": 1728
                },
                "start": 1723,
                "end": 1728
              },
              "id": null,
              "generator": false,
              "start": 1717,
              "end": 1728
            },
            "directive": null,
            "start": 1716,
            "end": 1730
          }
        ],
        "start": 1659,
        "end": 1732
      },
      "start": 1633,
      "end": 1732
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 11,
  "end": 1732
}
```
