__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
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
              "start": 9,
              "end": 10
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 13,
              "end": 14
            },
            "definite": false,
            "start": 9,
            "end": 14
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 16,
              "end": 17
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 20,
              "end": 21
            },
            "definite": false,
            "start": 16,
            "end": 21
          }
        ],
        "declare": false,
        "start": 5,
        "end": 21
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 23,
          "end": 24
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 27,
          "end": 28
        },
        "start": 23,
        "end": 28
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "start": 30,
            "end": 33
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "start": 35,
            "end": 38
          }
        ],
        "start": 30,
        "end": 38
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 50,
                  "end": 51
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "start": 60,
                      "end": 63
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 67
                      },
                      "start": 66,
                      "end": 69
                    },
                    "start": 60,
                    "end": 69
                  },
                  "id": null,
                  "generator": false,
                  "start": 54,
                  "end": 69
                },
                "definite": false,
                "start": 50,
                "end": 69
              }
            ],
            "declare": false,
            "start": 46,
            "end": 70
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
                "start": 79,
                "end": 80
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 84,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 97,
                  "end": 103
                }
              ],
              "start": 87,
              "end": 109
            },
            "alternate": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 129,
                      "end": 130
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 133,
                      "end": 134
                    },
                    "start": 129,
                    "end": 134
                  },
                  "directive": null,
                  "start": 129,
                  "end": 135
                }
              ],
              "start": 119,
              "end": 141
            },
            "start": 75,
            "end": 141
          }
        ],
        "start": 40,
        "end": 143
      },
      "start": 0,
      "end": 143
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
              "start": 154,
              "end": 155
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 158,
              "end": 159
            },
            "definite": false,
            "start": 154,
            "end": 159
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 165,
              "end": 166
            },
            "definite": false,
            "start": 161,
            "end": 166
          }
        ],
        "declare": false,
        "start": 150,
        "end": 166
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 169
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 172,
          "end": 173
        },
        "start": 168,
        "end": 173
      },
      "update": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "start": 175,
            "end": 178
          },
          {
            "type": "UpdateExpression",
            "operator": "--",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "start": 180,
            "end": 183
          }
        ],
        "start": 175,
        "end": 183
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 195,
                  "end": 196
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 205,
                        "end": 206
                      },
                      "start": 205,
                      "end": 208
                    },
                    "operator": "+",
                    "right": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 212
                      },
                      "start": 211,
                      "end": 214
                    },
                    "start": 205,
                    "end": 214
                  },
                  "id": null,
                  "generator": false,
                  "start": 199,
                  "end": 214
                },
                "definite": false,
                "start": 195,
                "end": 214
              }
            ],
            "declare": false,
            "start": 191,
            "end": 215
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
                "start": 224,
                "end": 225
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 229,
                "end": 230
              },
              "start": 224,
              "end": 230
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 242,
                  "end": 251
                }
              ],
              "start": 232,
              "end": 257
            },
            "alternate": {
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 277,
                      "end": 278
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 281,
                      "end": 282
                    },
                    "start": 277,
                    "end": 282
                  },
                  "directive": null,
                  "start": 277,
                  "end": 283
                }
              ],
              "start": 267,
              "end": 289
            },
            "start": 220,
            "end": 289
          }
        ],
        "start": 185,
        "end": 291
      },
      "start": 145,
      "end": 291
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop",
        "optional": false,
        "typeAnnotation": null,
        "start": 293,
        "end": 297
      },
      "body": {
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
                "start": 308,
                "end": 309
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 312,
                "end": 313
              },
              "definite": false,
              "start": 308,
              "end": 313
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 315,
                "end": 316
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 319,
                "end": 320
              },
              "definite": false,
              "start": 315,
              "end": 320
            }
          ],
          "declare": false,
          "start": 304,
          "end": 320
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 322,
            "end": 323
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 327
          },
          "start": 322,
          "end": 327
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 332
              },
              "start": 329,
              "end": 332
            },
            {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 337
              },
              "start": 334,
              "end": 337
            }
          ],
          "start": 329,
          "end": 337
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 350
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 359,
                          "end": 360
                        },
                        "start": 359,
                        "end": 362
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 365,
                          "end": 366
                        },
                        "start": 365,
                        "end": 368
                      },
                      "start": 359,
                      "end": 368
                    },
                    "id": null,
                    "generator": false,
                    "start": 353,
                    "end": 368
                  },
                  "definite": false,
                  "start": 349,
                  "end": 368
                }
              ],
              "declare": false,
              "start": 345,
              "end": 369
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
                  "start": 378,
                  "end": 379
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 383,
                  "end": 384
                },
                "start": 378,
                "end": 384
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 406
                    },
                    "start": 396,
                    "end": 407
                  }
                ],
                "start": 386,
                "end": 413
              },
              "alternate": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 433,
                        "end": 434
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 437,
                        "end": 438
                      },
                      "start": 433,
                      "end": 438
                    },
                    "directive": null,
                    "start": 433,
                    "end": 439
                  }
                ],
                "start": 423,
                "end": 445
              },
              "start": 374,
              "end": 445
            }
          ],
          "start": 339,
          "end": 447
        },
        "start": 299,
        "end": 447
      },
      "start": 293,
      "end": 447
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
      },
      "body": {
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
                "start": 464,
                "end": 465
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 468,
                "end": 469
              },
              "definite": false,
              "start": 464,
              "end": 469
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 472
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 475,
                "end": 476
              },
              "definite": false,
              "start": 471,
              "end": 476
            }
          ],
          "declare": false,
          "start": 460,
          "end": 476
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 479
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 483
          },
          "start": 478,
          "end": 483
        },
        "update": {
          "type": "SequenceExpression",
          "expressions": [
            {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 487,
                "end": 488
              },
              "start": 485,
              "end": 488
            },
            {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "start": 490,
              "end": 493
            }
          ],
          "start": 485,
          "end": 493
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 505,
                    "end": 506
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 516
                        },
                        "start": 515,
                        "end": 518
                      },
                      "operator": "+",
                      "right": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "prefix": false,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 521,
                          "end": 522
                        },
                        "start": 521,
                        "end": 524
                      },
                      "start": 515,
                      "end": 524
                    },
                    "id": null,
                    "generator": false,
                    "start": 509,
                    "end": 524
                  },
                  "definite": false,
                  "start": 505,
                  "end": 524
                }
              ],
              "declare": false,
              "start": 501,
              "end": 525
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
                  "start": 534,
                  "end": 535
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 539,
                  "end": 540
                },
                "start": 534,
                "end": 540
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 561,
                      "end": 565
                    },
                    "start": 552,
                    "end": 566
                  }
                ],
                "start": 542,
                "end": 572
              },
              "alternate": {
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 593
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 596,
                        "end": 597
                      },
                      "start": 592,
                      "end": 597
                    },
                    "directive": null,
                    "start": 592,
                    "end": 598
                  }
                ],
                "start": 582,
                "end": 604
              },
              "start": 530,
              "end": 604
            }
          ],
          "start": 495,
          "end": 606
        },
        "start": 455,
        "end": 606
      },
      "start": 449,
      "end": 606
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 606
}
```
