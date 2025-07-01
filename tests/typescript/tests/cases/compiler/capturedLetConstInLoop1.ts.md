__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 30,
          "end": 33
        },
        "start": 28,
        "end": 33
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 34
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
              "start": 56,
              "end": 57
            },
            "init": null,
            "definite": false,
            "start": 56,
            "end": 57
          }
        ],
        "declare": false,
        "start": 52,
        "end": 57
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 61,
        "end": 63
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
                      "start": 92,
                      "end": 93
                    },
                    "start": 85,
                    "end": 93
                  }
                ],
                "start": 83,
                "end": 94
              },
              "expression": false,
              "start": 72,
              "end": 94
            },
            "directive": null,
            "start": 71,
            "end": 96
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
                "start": 108,
                "end": 109
              },
              "id": null,
              "generator": false,
              "start": 102,
              "end": 109
            },
            "directive": null,
            "start": 101,
            "end": 111
          }
        ],
        "start": 65,
        "end": 113
      },
      "start": 47,
      "end": 113
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
              "start": 124,
              "end": 125
            },
            "init": null,
            "definite": false,
            "start": 124,
            "end": 125
          }
        ],
        "declare": false,
        "start": 120,
        "end": 125
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 129,
        "end": 131
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
                      "start": 160,
                      "end": 161
                    },
                    "start": 153,
                    "end": 161
                  }
                ],
                "start": 151,
                "end": 162
              },
              "expression": false,
              "start": 140,
              "end": 162
            },
            "directive": null,
            "start": 139,
            "end": 164
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
                "start": 176,
                "end": 177
              },
              "id": null,
              "generator": false,
              "start": 170,
              "end": 177
            },
            "directive": null,
            "start": 169,
            "end": 179
          }
        ],
        "start": 133,
        "end": 181
      },
      "start": 115,
      "end": 181
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
              "start": 192,
              "end": 193
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 196,
              "end": 197
            },
            "definite": false,
            "start": 192,
            "end": 197
          }
        ],
        "declare": false,
        "start": 188,
        "end": 197
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 199,
          "end": 200
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 203,
          "end": 204
        },
        "start": 199,
        "end": 204
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
          "start": 208,
          "end": 209
        },
        "start": 206,
        "end": 209
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
                      "start": 238,
                      "end": 239
                    },
                    "start": 231,
                    "end": 239
                  }
                ],
                "start": 229,
                "end": 240
              },
              "expression": false,
              "start": 218,
              "end": 240
            },
            "directive": null,
            "start": 217,
            "end": 242
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
                "start": 254,
                "end": 255
              },
              "id": null,
              "generator": false,
              "start": 248,
              "end": 255
            },
            "directive": null,
            "start": 247,
            "end": 257
          }
        ],
        "start": 211,
        "end": 259
      },
      "start": 183,
      "end": 259
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 268,
          "end": 269
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 274,
          "end": 275
        },
        "start": 268,
        "end": 275
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
                  "start": 287,
                  "end": 288
                },
                "init": null,
                "definite": false,
                "start": 287,
                "end": 288
              }
            ],
            "declare": false,
            "start": 283,
            "end": 289
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
                      "start": 315,
                      "end": 316
                    },
                    "start": 308,
                    "end": 316
                  }
                ],
                "start": 306,
                "end": 317
              },
              "expression": false,
              "start": 295,
              "end": 317
            },
            "directive": null,
            "start": 294,
            "end": 319
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
                "start": 331,
                "end": 332
              },
              "id": null,
              "generator": false,
              "start": 325,
              "end": 332
            },
            "directive": null,
            "start": 324,
            "end": 334
          }
        ],
        "start": 277,
        "end": 336
      },
      "start": 261,
      "end": 336
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
                  "start": 351,
                  "end": 352
                },
                "init": null,
                "definite": false,
                "start": 351,
                "end": 352
              }
            ],
            "declare": false,
            "start": 347,
            "end": 353
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
                      "start": 379,
                      "end": 380
                    },
                    "start": 372,
                    "end": 380
                  }
                ],
                "start": 370,
                "end": 381
              },
              "expression": false,
              "start": 359,
              "end": 381
            },
            "directive": null,
            "start": 358,
            "end": 383
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
                "start": 395,
                "end": 396
              },
              "id": null,
              "generator": false,
              "start": 389,
              "end": 396
            },
            "directive": null,
            "start": 388,
            "end": 398
          }
        ],
        "start": 341,
        "end": 400
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 408,
          "end": 409
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 414,
          "end": 415
        },
        "start": 408,
        "end": 415
      },
      "start": 338,
      "end": 416
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
              "start": 427,
              "end": 428
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 431,
              "end": 432
            },
            "definite": false,
            "start": 427,
            "end": 432
          }
        ],
        "declare": false,
        "start": 423,
        "end": 432
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 434,
          "end": 435
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 438,
          "end": 439
        },
        "start": 434,
        "end": 439
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
          "start": 443,
          "end": 444
        },
        "start": 441,
        "end": 444
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
                  "start": 456,
                  "end": 457
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 460,
                  "end": 461
                },
                "definite": false,
                "start": 456,
                "end": 461
              }
            ],
            "declare": false,
            "start": 452,
            "end": 462
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
                      "start": 488,
                      "end": 489
                    },
                    "start": 481,
                    "end": 489
                  }
                ],
                "start": 479,
                "end": 490
              },
              "expression": false,
              "start": 468,
              "end": 490
            },
            "directive": null,
            "start": 467,
            "end": 492
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
                "start": 504,
                "end": 505
              },
              "id": null,
              "generator": false,
              "start": 498,
              "end": 505
            },
            "directive": null,
            "start": 497,
            "end": 507
          }
        ],
        "start": 446,
        "end": 509
      },
      "start": 418,
      "end": 509
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
              "start": 520,
              "end": 521
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 524,
              "end": 525
            },
            "definite": false,
            "start": 520,
            "end": 525
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 527,
              "end": 528
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 531,
              "end": 532
            },
            "definite": false,
            "start": 527,
            "end": 532
          }
        ],
        "declare": false,
        "start": 516,
        "end": 532
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 535
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 538,
          "end": 539
        },
        "start": 534,
        "end": 539
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
          "start": 543,
          "end": 544
        },
        "start": 541,
        "end": 544
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
                        "start": 573,
                        "end": 574
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 577,
                        "end": 578
                      },
                      "start": 573,
                      "end": 578
                    },
                    "start": 566,
                    "end": 578
                  }
                ],
                "start": 564,
                "end": 579
              },
              "expression": false,
              "start": 553,
              "end": 579
            },
            "directive": null,
            "start": 552,
            "end": 581
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
                  "start": 593,
                  "end": 594
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 597,
                  "end": 598
                },
                "start": 593,
                "end": 598
              },
              "id": null,
              "generator": false,
              "start": 587,
              "end": 598
            },
            "directive": null,
            "start": 586,
            "end": 600
          }
        ],
        "start": 546,
        "end": 602
      },
      "start": 511,
      "end": 602
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 611,
          "end": 612
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 617,
          "end": 618
        },
        "start": 611,
        "end": 618
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
                  "start": 630,
                  "end": 631
                },
                "init": null,
                "definite": false,
                "start": 630,
                "end": 631
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 633,
                  "end": 634
                },
                "init": null,
                "definite": false,
                "start": 633,
                "end": 634
              }
            ],
            "declare": false,
            "start": 626,
            "end": 635
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
                        "start": 661,
                        "end": 662
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 666
                      },
                      "start": 661,
                      "end": 666
                    },
                    "start": 654,
                    "end": 666
                  }
                ],
                "start": 652,
                "end": 667
              },
              "expression": false,
              "start": 641,
              "end": 667
            },
            "directive": null,
            "start": 640,
            "end": 669
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
                  "start": 681,
                  "end": 682
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 686
                },
                "start": 681,
                "end": 686
              },
              "id": null,
              "generator": false,
              "start": 675,
              "end": 686
            },
            "directive": null,
            "start": 674,
            "end": 688
          }
        ],
        "start": 620,
        "end": 690
      },
      "start": 604,
      "end": 690
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
                  "start": 705,
                  "end": 706
                },
                "init": null,
                "definite": false,
                "start": 705,
                "end": 706
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 708,
                  "end": 709
                },
                "init": null,
                "definite": false,
                "start": 708,
                "end": 709
              }
            ],
            "declare": false,
            "start": 701,
            "end": 710
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
                        "start": 736,
                        "end": 737
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 740,
                        "end": 741
                      },
                      "start": 736,
                      "end": 741
                    },
                    "start": 729,
                    "end": 741
                  }
                ],
                "start": 727,
                "end": 742
              },
              "expression": false,
              "start": 716,
              "end": 742
            },
            "directive": null,
            "start": 715,
            "end": 744
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
                  "start": 756,
                  "end": 757
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 760,
                  "end": 761
                },
                "start": 756,
                "end": 761
              },
              "id": null,
              "generator": false,
              "start": 750,
              "end": 761
            },
            "directive": null,
            "start": 749,
            "end": 763
          }
        ],
        "start": 695,
        "end": 765
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 773,
          "end": 774
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 779,
          "end": 780
        },
        "start": 773,
        "end": 780
      },
      "start": 692,
      "end": 781
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
              "start": 792,
              "end": 793
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 796,
              "end": 797
            },
            "definite": false,
            "start": 792,
            "end": 797
          }
        ],
        "declare": false,
        "start": 788,
        "end": 797
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 799,
          "end": 800
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 803,
          "end": 804
        },
        "start": 799,
        "end": 804
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
          "start": 808,
          "end": 809
        },
        "start": 806,
        "end": 809
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
                  "start": 821,
                  "end": 822
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 825,
                  "end": 826
                },
                "definite": false,
                "start": 821,
                "end": 826
              }
            ],
            "declare": false,
            "start": 817,
            "end": 827
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
                        "start": 853,
                        "end": 854
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 858
                      },
                      "start": 853,
                      "end": 858
                    },
                    "start": 846,
                    "end": 858
                  }
                ],
                "start": 844,
                "end": 859
              },
              "expression": false,
              "start": 833,
              "end": 859
            },
            "directive": null,
            "start": 832,
            "end": 861
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
                  "start": 873,
                  "end": 874
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 878
                },
                "start": 873,
                "end": 878
              },
              "id": null,
              "generator": false,
              "start": 867,
              "end": 878
            },
            "directive": null,
            "start": 866,
            "end": 880
          }
        ],
        "start": 811,
        "end": 882
      },
      "start": 783,
      "end": 882
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
              "start": 893,
              "end": 894
            },
            "init": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 898,
                    "end": 901
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 908,
                        "end": 909
                      },
                      "id": null,
                      "generator": false,
                      "start": 902,
                      "end": 909
                    }
                  ],
                  "optional": false,
                  "start": 898,
                  "end": 910
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 912,
                  "end": 913
                }
              ],
              "start": 898,
              "end": 913
            },
            "definite": false,
            "start": 893,
            "end": 914
          }
        ],
        "declare": false,
        "start": 889,
        "end": 914
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 916,
          "end": 917
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 920,
          "end": 921
        },
        "start": 916,
        "end": 921
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
          "start": 925,
          "end": 926
        },
        "start": 923,
        "end": 926
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 928,
        "end": 931
      },
      "start": 884,
      "end": 931
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
              "start": 942,
              "end": 943
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 946,
              "end": 947
            },
            "definite": false,
            "start": 942,
            "end": 947
          }
        ],
        "declare": false,
        "start": 938,
        "end": 947
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 949,
              "end": 952
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 959,
                  "end": 960
                },
                "id": null,
                "generator": false,
                "start": 953,
                "end": 960
              }
            ],
            "optional": false,
            "start": 949,
            "end": 961
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 963,
              "end": 964
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 967,
              "end": 968
            },
            "start": 963,
            "end": 968
          }
        ],
        "start": 949,
        "end": 968
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
          "start": 972,
          "end": 973
        },
        "start": 970,
        "end": 973
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 975,
        "end": 978
      },
      "start": 933,
      "end": 978
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
              "start": 989,
              "end": 990
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 993,
              "end": 994
            },
            "definite": false,
            "start": 989,
            "end": 994
          }
        ],
        "declare": false,
        "start": 985,
        "end": 994
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 996,
          "end": 997
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1000,
          "end": 1001
        },
        "start": 996,
        "end": 1001
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 1003,
              "end": 1006
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1013,
                  "end": 1014
                },
                "id": null,
                "generator": false,
                "start": 1007,
                "end": 1014
              }
            ],
            "optional": false,
            "start": 1003,
            "end": 1015
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1019,
              "end": 1020
            },
            "start": 1017,
            "end": 1020
          }
        ],
        "start": 1003,
        "end": 1020
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1022,
        "end": 1025
      },
      "start": 980,
      "end": 1025
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
              "start": 1036,
              "end": 1037
            },
            "init": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "use",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1041,
                    "end": 1044
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1051,
                        "end": 1052
                      },
                      "id": null,
                      "generator": false,
                      "start": 1045,
                      "end": 1052
                    }
                  ],
                  "optional": false,
                  "start": 1041,
                  "end": 1053
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1055,
                  "end": 1056
                }
              ],
              "start": 1041,
              "end": 1056
            },
            "definite": false,
            "start": 1036,
            "end": 1057
          }
        ],
        "declare": false,
        "start": 1032,
        "end": 1057
      },
      "test": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 1059,
              "end": 1062
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1070
                },
                "id": null,
                "generator": false,
                "start": 1063,
                "end": 1070
              }
            ],
            "optional": false,
            "start": 1059,
            "end": 1071
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1073,
              "end": 1074
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1077,
              "end": 1078
            },
            "start": 1073,
            "end": 1078
          }
        ],
        "start": 1059,
        "end": 1078
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "use",
              "optional": false,
              "typeAnnotation": null,
              "start": 1080,
              "end": 1083
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1090,
                  "end": 1091
                },
                "id": null,
                "generator": false,
                "start": 1084,
                "end": 1091
              }
            ],
            "optional": false,
            "start": 1080,
            "end": 1092
          },
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1096,
              "end": 1097
            },
            "start": 1094,
            "end": 1097
          }
        ],
        "start": 1080,
        "end": 1097
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1105,
                "end": 1108
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1115,
                    "end": 1116
                  },
                  "id": null,
                  "generator": false,
                  "start": 1109,
                  "end": 1116
                }
              ],
              "optional": false,
              "start": 1105,
              "end": 1117
            },
            "directive": null,
            "start": 1105,
            "end": 1118
          }
        ],
        "start": 1099,
        "end": 1120
      },
      "start": 1027,
      "end": 1120
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
              "start": 1150,
              "end": 1151
            },
            "init": null,
            "definite": false,
            "start": 1150,
            "end": 1151
          }
        ],
        "declare": false,
        "start": 1144,
        "end": 1151
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1155,
        "end": 1157
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
                      "start": 1186,
                      "end": 1187
                    },
                    "start": 1179,
                    "end": 1187
                  }
                ],
                "start": 1177,
                "end": 1188
              },
              "expression": false,
              "start": 1166,
              "end": 1188
            },
            "directive": null,
            "start": 1165,
            "end": 1190
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
                "start": 1202,
                "end": 1203
              },
              "id": null,
              "generator": false,
              "start": 1196,
              "end": 1203
            },
            "directive": null,
            "start": 1195,
            "end": 1205
          }
        ],
        "start": 1159,
        "end": 1207
      },
      "start": 1139,
      "end": 1207
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
              "start": 1220,
              "end": 1221
            },
            "init": null,
            "definite": false,
            "start": 1220,
            "end": 1221
          }
        ],
        "declare": false,
        "start": 1214,
        "end": 1221
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 1225,
        "end": 1227
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
                      "start": 1256,
                      "end": 1257
                    },
                    "start": 1249,
                    "end": 1257
                  }
                ],
                "start": 1247,
                "end": 1258
              },
              "expression": false,
              "start": 1236,
              "end": 1258
            },
            "directive": null,
            "start": 1235,
            "end": 1260
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
                "start": 1272,
                "end": 1273
              },
              "id": null,
              "generator": false,
              "start": 1266,
              "end": 1273
            },
            "directive": null,
            "start": 1265,
            "end": 1275
          }
        ],
        "start": 1229,
        "end": 1277
      },
      "start": 1209,
      "end": 1277
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
              "start": 1290,
              "end": 1291
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1294,
              "end": 1295
            },
            "definite": false,
            "start": 1290,
            "end": 1295
          }
        ],
        "declare": false,
        "start": 1284,
        "end": 1295
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1297,
          "end": 1298
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1301,
          "end": 1302
        },
        "start": 1297,
        "end": 1302
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
                      "start": 1332,
                      "end": 1333
                    },
                    "start": 1325,
                    "end": 1333
                  }
                ],
                "start": 1323,
                "end": 1334
              },
              "expression": false,
              "start": 1312,
              "end": 1334
            },
            "directive": null,
            "start": 1311,
            "end": 1336
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
                "start": 1348,
                "end": 1349
              },
              "id": null,
              "generator": false,
              "start": 1342,
              "end": 1349
            },
            "directive": null,
            "start": 1341,
            "end": 1351
          }
        ],
        "start": 1305,
        "end": 1353
      },
      "start": 1279,
      "end": 1353
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1362,
          "end": 1363
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1368,
          "end": 1369
        },
        "start": 1362,
        "end": 1369
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
                  "start": 1383,
                  "end": 1384
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1387,
                  "end": 1388
                },
                "definite": false,
                "start": 1383,
                "end": 1388
              }
            ],
            "declare": false,
            "start": 1377,
            "end": 1389
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
                      "start": 1415,
                      "end": 1416
                    },
                    "start": 1408,
                    "end": 1416
                  }
                ],
                "start": 1406,
                "end": 1417
              },
              "expression": false,
              "start": 1395,
              "end": 1417
            },
            "directive": null,
            "start": 1394,
            "end": 1419
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
                "start": 1431,
                "end": 1432
              },
              "id": null,
              "generator": false,
              "start": 1425,
              "end": 1432
            },
            "directive": null,
            "start": 1424,
            "end": 1434
          }
        ],
        "start": 1371,
        "end": 1436
      },
      "start": 1355,
      "end": 1436
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
                  "start": 1453,
                  "end": 1454
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1457,
                  "end": 1458
                },
                "definite": false,
                "start": 1453,
                "end": 1458
              }
            ],
            "declare": false,
            "start": 1447,
            "end": 1459
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
                      "start": 1485,
                      "end": 1486
                    },
                    "start": 1478,
                    "end": 1486
                  }
                ],
                "start": 1476,
                "end": 1487
              },
              "expression": false,
              "start": 1465,
              "end": 1487
            },
            "directive": null,
            "start": 1464,
            "end": 1489
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
                "start": 1501,
                "end": 1502
              },
              "id": null,
              "generator": false,
              "start": 1495,
              "end": 1502
            },
            "directive": null,
            "start": 1494,
            "end": 1504
          }
        ],
        "start": 1441,
        "end": 1506
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1514,
          "end": 1515
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1520,
          "end": 1521
        },
        "start": 1514,
        "end": 1521
      },
      "start": 1438,
      "end": 1522
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
              "start": 1535,
              "end": 1536
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1539,
              "end": 1540
            },
            "definite": false,
            "start": 1535,
            "end": 1540
          }
        ],
        "declare": false,
        "start": 1529,
        "end": 1540
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1542,
          "end": 1543
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1546,
          "end": 1547
        },
        "start": 1542,
        "end": 1547
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
                  "start": 1562,
                  "end": 1563
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1566,
                  "end": 1567
                },
                "definite": false,
                "start": 1562,
                "end": 1567
              }
            ],
            "declare": false,
            "start": 1556,
            "end": 1568
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
                      "start": 1594,
                      "end": 1595
                    },
                    "start": 1587,
                    "end": 1595
                  }
                ],
                "start": 1585,
                "end": 1596
              },
              "expression": false,
              "start": 1574,
              "end": 1596
            },
            "directive": null,
            "start": 1573,
            "end": 1598
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
                "start": 1610,
                "end": 1611
              },
              "id": null,
              "generator": false,
              "start": 1604,
              "end": 1611
            },
            "directive": null,
            "start": 1603,
            "end": 1613
          }
        ],
        "start": 1550,
        "end": 1615
      },
      "start": 1524,
      "end": 1615
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
              "start": 1628,
              "end": 1629
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1632,
              "end": 1633
            },
            "definite": false,
            "start": 1628,
            "end": 1633
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1635,
              "end": 1636
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1639,
              "end": 1640
            },
            "definite": false,
            "start": 1635,
            "end": 1640
          }
        ],
        "declare": false,
        "start": 1622,
        "end": 1640
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 1642,
          "end": 1643
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1646,
          "end": 1647
        },
        "start": 1642,
        "end": 1647
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
                        "start": 1677,
                        "end": 1678
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1681,
                        "end": 1682
                      },
                      "start": 1677,
                      "end": 1682
                    },
                    "start": 1670,
                    "end": 1682
                  }
                ],
                "start": 1668,
                "end": 1683
              },
              "expression": false,
              "start": 1657,
              "end": 1683
            },
            "directive": null,
            "start": 1656,
            "end": 1685
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
                  "start": 1697,
                  "end": 1698
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1701,
                  "end": 1702
                },
                "start": 1697,
                "end": 1702
              },
              "id": null,
              "generator": false,
              "start": 1691,
              "end": 1702
            },
            "directive": null,
            "start": 1690,
            "end": 1704
          }
        ],
        "start": 1650,
        "end": 1706
      },
      "start": 1617,
      "end": 1706
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1715,
          "end": 1716
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1721,
          "end": 1722
        },
        "start": 1715,
        "end": 1722
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
                  "start": 1736,
                  "end": 1737
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1740,
                  "end": 1741
                },
                "definite": false,
                "start": 1736,
                "end": 1741
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1743,
                  "end": 1744
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1747,
                  "end": 1748
                },
                "definite": false,
                "start": 1743,
                "end": 1748
              }
            ],
            "declare": false,
            "start": 1730,
            "end": 1749
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
                        "start": 1775,
                        "end": 1776
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1779,
                        "end": 1780
                      },
                      "start": 1775,
                      "end": 1780
                    },
                    "start": 1768,
                    "end": 1780
                  }
                ],
                "start": 1766,
                "end": 1781
              },
              "expression": false,
              "start": 1755,
              "end": 1781
            },
            "directive": null,
            "start": 1754,
            "end": 1783
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
                  "start": 1795,
                  "end": 1796
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1799,
                  "end": 1800
                },
                "start": 1795,
                "end": 1800
              },
              "id": null,
              "generator": false,
              "start": 1789,
              "end": 1800
            },
            "directive": null,
            "start": 1788,
            "end": 1802
          }
        ],
        "start": 1724,
        "end": 1804
      },
      "start": 1708,
      "end": 1804
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
                  "start": 1821,
                  "end": 1822
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1825,
                  "end": 1826
                },
                "definite": false,
                "start": 1821,
                "end": 1826
              },
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1828,
                  "end": 1829
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1832,
                  "end": 1833
                },
                "definite": false,
                "start": 1828,
                "end": 1833
              }
            ],
            "declare": false,
            "start": 1815,
            "end": 1834
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
                        "start": 1860,
                        "end": 1861
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1864,
                        "end": 1865
                      },
                      "start": 1860,
                      "end": 1865
                    },
                    "start": 1853,
                    "end": 1865
                  }
                ],
                "start": 1851,
                "end": 1866
              },
              "expression": false,
              "start": 1840,
              "end": 1866
            },
            "directive": null,
            "start": 1839,
            "end": 1868
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
                  "start": 1880,
                  "end": 1881
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1884,
                  "end": 1885
                },
                "start": 1880,
                "end": 1885
              },
              "id": null,
              "generator": false,
              "start": 1874,
              "end": 1885
            },
            "directive": null,
            "start": 1873,
            "end": 1887
          }
        ],
        "start": 1809,
        "end": 1889
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1897,
          "end": 1898
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1903,
          "end": 1904
        },
        "start": 1897,
        "end": 1904
      },
      "start": 1806,
      "end": 1905
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
              "start": 1918,
              "end": 1919
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1922,
              "end": 1923
            },
            "definite": false,
            "start": 1918,
            "end": 1923
          }
        ],
        "declare": false,
        "start": 1912,
        "end": 1923
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 1925,
          "end": 1926
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 1929,
          "end": 1930
        },
        "start": 1925,
        "end": 1930
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
                  "start": 1945,
                  "end": 1946
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1949,
                  "end": 1950
                },
                "definite": false,
                "start": 1945,
                "end": 1950
              }
            ],
            "declare": false,
            "start": 1939,
            "end": 1951
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
                        "start": 1977,
                        "end": 1978
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1981,
                        "end": 1982
                      },
                      "start": 1977,
                      "end": 1982
                    },
                    "start": 1970,
                    "end": 1982
                  }
                ],
                "start": 1968,
                "end": 1983
              },
              "expression": false,
              "start": 1957,
              "end": 1983
            },
            "directive": null,
            "start": 1956,
            "end": 1985
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
                  "start": 1997,
                  "end": 1998
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2001,
                  "end": 2002
                },
                "start": 1997,
                "end": 2002
              },
              "id": null,
              "generator": false,
              "start": 1991,
              "end": 2002
            },
            "directive": null,
            "start": 1990,
            "end": 2004
          }
        ],
        "start": 1933,
        "end": 2006
      },
      "start": 1907,
      "end": 2006
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
            "name": "sobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2090,
                            "end": 2096
                          },
                          "start": 2088,
                          "end": 2096
                        },
                        "start": 2087,
                        "end": 2096
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2099,
                        "end": 2102
                      },
                      "start": 2097,
                      "end": 2102
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2086,
                    "end": 2102
                  }
                ],
                "start": 2084,
                "end": 2104
              },
              "start": 2082,
              "end": 2104
            },
            "start": 2078,
            "end": 2104
          },
          "init": null,
          "definite": false,
          "start": 2078,
          "end": 2104
        }
      ],
      "declare": true,
      "start": 2064,
      "end": 2105
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
              "name": "sx",
              "optional": false,
              "typeAnnotation": null,
              "start": 2115,
              "end": 2117
            },
            "init": null,
            "definite": false,
            "start": 2115,
            "end": 2117
          }
        ],
        "declare": false,
        "start": 2111,
        "end": 2117
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "sobj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2121,
        "end": 2125
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sobj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2140,
                  "end": 2144
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sx",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2145,
                  "end": 2147
                },
                "optional": false,
                "computed": true,
                "start": 2140,
                "end": 2148
              },
              "id": null,
              "generator": false,
              "start": 2134,
              "end": 2148
            },
            "directive": null,
            "start": 2133,
            "end": 2150
          }
        ],
        "start": 2127,
        "end": 2152
      },
      "start": 2106,
      "end": 2152
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
            "name": "iobj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2179,
                            "end": 2185
                          },
                          "start": 2177,
                          "end": 2185
                        },
                        "start": 2176,
                        "end": 2185
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2188,
                        "end": 2191
                      },
                      "start": 2186,
                      "end": 2191
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 2175,
                    "end": 2191
                  }
                ],
                "start": 2173,
                "end": 2193
              },
              "start": 2171,
              "end": 2193
            },
            "start": 2167,
            "end": 2193
          },
          "init": null,
          "definite": false,
          "start": 2167,
          "end": 2193
        }
      ],
      "declare": true,
      "start": 2153,
      "end": 2194
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
              "name": "ix",
              "optional": false,
              "typeAnnotation": null,
              "start": 2204,
              "end": 2206
            },
            "init": null,
            "definite": false,
            "start": 2204,
            "end": 2206
          }
        ],
        "declare": false,
        "start": 2200,
        "end": 2206
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "iobj",
        "optional": false,
        "typeAnnotation": null,
        "start": 2210,
        "end": 2214
      },
      "body": {
        "type": "BlockStatement",
        "body": [
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iobj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2229,
                  "end": 2233
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ix",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2234,
                  "end": 2236
                },
                "optional": false,
                "computed": true,
                "start": 2229,
                "end": 2237
              },
              "id": null,
              "generator": false,
              "start": 2223,
              "end": 2237
            },
            "directive": null,
            "start": 2222,
            "end": 2239
          }
        ],
        "start": 2216,
        "end": 2241
      },
      "start": 2195,
      "end": 2241
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2241
}
```
