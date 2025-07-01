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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 138,
                          "end": 139
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 142,
                          "end": 143
                        },
                        "definite": false,
                        "start": 138,
                        "end": 143
                      }
                    ],
                    "declare": false,
                    "start": 134,
                    "end": 143
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 149,
                      "end": 150
                    },
                    "start": 145,
                    "end": 150
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 154,
                      "end": 155
                    },
                    "start": 152,
                    "end": 155
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
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 175,
                              "end": 176
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 185,
                                "end": 186
                              },
                              "id": null,
                              "generator": false,
                              "start": 179,
                              "end": 186
                            },
                            "definite": false,
                            "start": 175,
                            "end": 186
                          }
                        ],
                        "declare": false,
                        "start": 171,
                        "end": 187
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 204,
                          "end": 205
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 225,
                                  "end": 226
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 229,
                                  "end": 230
                                },
                                "start": 225,
                                "end": 230
                              },
                              "directive": null,
                              "start": 225,
                              "end": 231
                            },
                            {
                              "type": "BreakStatement",
                              "label": null,
                              "start": 248,
                              "end": 254
                            }
                          ],
                          "start": 207,
                          "end": 268
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 304,
                                  "end": 305
                                },
                                "start": 304,
                                "end": 307
                              },
                              "directive": null,
                              "start": 304,
                              "end": 308
                            }
                          ],
                          "start": 286,
                          "end": 322
                        },
                        "start": 200,
                        "end": 322
                      }
                    ],
                    "start": 157,
                    "end": 332
                  },
                  "start": 129,
                  "end": 332
                },
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
                      "start": 350,
                      "end": 351
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 354,
                      "end": 355
                    },
                    "start": 350,
                    "end": 355
                  },
                  "directive": null,
                  "start": 350,
                  "end": 356
                }
              ],
              "start": 119,
              "end": 362
            },
            "start": 75,
            "end": 362
          }
        ],
        "start": 40,
        "end": 364
      },
      "start": 0,
      "end": 364
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
              "start": 376,
              "end": 377
            },
            "init": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 380,
              "end": 381
            },
            "definite": false,
            "start": 376,
            "end": 381
          },
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 383,
              "end": 384
            },
            "init": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 387,
              "end": 388
            },
            "definite": false,
            "start": 383,
            "end": 388
          }
        ],
        "declare": false,
        "start": 372,
        "end": 388
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 390,
          "end": 391
        },
        "operator": "<",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 395
        },
        "start": 390,
        "end": 395
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
              "start": 399,
              "end": 400
            },
            "start": 397,
            "end": 400
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
              "start": 404,
              "end": 405
            },
            "start": 402,
            "end": 405
          }
        ],
        "start": 397,
        "end": 405
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
                  "start": 417,
                  "end": 418
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
                        "start": 427,
                        "end": 428
                      },
                      "start": 427,
                      "end": 430
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
                        "start": 433,
                        "end": 434
                      },
                      "start": 433,
                      "end": 436
                    },
                    "start": 427,
                    "end": 436
                  },
                  "id": null,
                  "generator": false,
                  "start": 421,
                  "end": 436
                },
                "definite": false,
                "start": 417,
                "end": 436
              }
            ],
            "declare": false,
            "start": 413,
            "end": 437
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
                "start": 446,
                "end": 447
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 451,
                "end": 452
              },
              "start": 446,
              "end": 452
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 464,
                  "end": 473
                }
              ],
              "start": 454,
              "end": 479
            },
            "alternate": {
              "type": "BlockStatement",
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 509
                        },
                        "init": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 512,
                          "end": 513
                        },
                        "definite": false,
                        "start": 508,
                        "end": 513
                      }
                    ],
                    "declare": false,
                    "start": 504,
                    "end": 513
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 515,
                      "end": 516
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 519,
                      "end": 520
                    },
                    "start": 515,
                    "end": 520
                  },
                  "update": {
                    "type": "UpdateExpression",
                    "operator": "--",
                    "prefix": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 524,
                      "end": 525
                    },
                    "start": 522,
                    "end": 525
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
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 546
                            },
                            "init": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 555,
                                "end": 556
                              },
                              "id": null,
                              "generator": false,
                              "start": 549,
                              "end": 556
                            },
                            "definite": false,
                            "start": 545,
                            "end": 556
                          }
                        ],
                        "declare": false,
                        "start": 541,
                        "end": 557
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 574,
                          "end": 575
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
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 595,
                                  "end": 596
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 599,
                                  "end": 600
                                },
                                "start": 595,
                                "end": 600
                              },
                              "directive": null,
                              "start": 595,
                              "end": 601
                            },
                            {
                              "type": "ContinueStatement",
                              "label": null,
                              "start": 618,
                              "end": 627
                            }
                          ],
                          "start": 577,
                          "end": 641
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "UpdateExpression",
                                "operator": "++",
                                "prefix": false,
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 677,
                                  "end": 678
                                },
                                "start": 677,
                                "end": 680
                              },
                              "directive": null,
                              "start": 677,
                              "end": 681
                            }
                          ],
                          "start": 659,
                          "end": 695
                        },
                        "start": 570,
                        "end": 695
                      }
                    ],
                    "start": 527,
                    "end": 705
                  },
                  "start": 499,
                  "end": 705
                },
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
                      "start": 723,
                      "end": 724
                    },
                    "right": {
                      "type": "Literal",
                      "value": 5,
                      "raw": "5",
                      "start": 727,
                      "end": 728
                    },
                    "start": 723,
                    "end": 728
                  },
                  "directive": null,
                  "start": 723,
                  "end": 729
                }
              ],
              "start": 489,
              "end": 735
            },
            "start": 442,
            "end": 735
          }
        ],
        "start": 407,
        "end": 737
      },
      "start": 367,
      "end": 737
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 744
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
                "start": 755,
                "end": 756
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 759,
                "end": 760
              },
              "definite": false,
              "start": 755,
              "end": 760
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 766,
                "end": 767
              },
              "definite": false,
              "start": 762,
              "end": 767
            }
          ],
          "declare": false,
          "start": 751,
          "end": 767
        },
        "test": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 770
          },
          "operator": "<",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 774
          },
          "start": 769,
          "end": 774
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
                "start": 778,
                "end": 779
              },
              "start": 776,
              "end": 779
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
                "start": 783,
                "end": 784
              },
              "start": 781,
              "end": 784
            }
          ],
          "start": 776,
          "end": 784
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
                    "start": 796,
                    "end": 797
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
                          "start": 806,
                          "end": 807
                        },
                        "start": 806,
                        "end": 809
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
                          "start": 812,
                          "end": 813
                        },
                        "start": 812,
                        "end": 815
                      },
                      "start": 806,
                      "end": 815
                    },
                    "id": null,
                    "generator": false,
                    "start": 800,
                    "end": 815
                  },
                  "definite": false,
                  "start": 796,
                  "end": 815
                }
              ],
              "declare": false,
              "start": 792,
              "end": 816
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
                  "start": 825,
                  "end": 826
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 830,
                  "end": 831
                },
                "start": 825,
                "end": 831
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 849,
                      "end": 854
                    },
                    "start": 843,
                    "end": 855
                  }
                ],
                "start": 833,
                "end": 861
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 881,
                      "end": 886
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 905,
                              "end": 906
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 909,
                              "end": 910
                            },
                            "definite": false,
                            "start": 905,
                            "end": 910
                          }
                        ],
                        "declare": false,
                        "start": 901,
                        "end": 910
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 912,
                          "end": 913
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 916,
                          "end": 917
                        },
                        "start": 912,
                        "end": 917
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 921,
                          "end": 922
                        },
                        "start": 919,
                        "end": 922
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 942,
                                  "end": 943
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 952,
                                    "end": 953
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 946,
                                  "end": 953
                                },
                                "definite": false,
                                "start": 942,
                                "end": 953
                              }
                            ],
                            "declare": false,
                            "start": 938,
                            "end": 954
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 971,
                              "end": 972
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 992,
                                      "end": 993
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 996,
                                      "end": 997
                                    },
                                    "start": 992,
                                    "end": 997
                                  },
                                  "directive": null,
                                  "start": 992,
                                  "end": 998
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1021,
                                    "end": 1026
                                  },
                                  "start": 1015,
                                  "end": 1027
                                }
                              ],
                              "start": 974,
                              "end": 1041
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1077,
                                      "end": 1078
                                    },
                                    "start": 1077,
                                    "end": 1080
                                  },
                                  "directive": null,
                                  "start": 1077,
                                  "end": 1081
                                },
                                {
                                  "type": "BreakStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1104,
                                    "end": 1109
                                  },
                                  "start": 1098,
                                  "end": 1109
                                }
                              ],
                              "start": 1059,
                              "end": 1123
                            },
                            "start": 967,
                            "end": 1123
                          }
                        ],
                        "start": 924,
                        "end": 1133
                      },
                      "start": 896,
                      "end": 1133
                    },
                    "start": 881,
                    "end": 1133
                  },
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
                        "start": 1151,
                        "end": 1152
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1155,
                        "end": 1156
                      },
                      "start": 1151,
                      "end": 1156
                    },
                    "directive": null,
                    "start": 1151,
                    "end": 1157
                  }
                ],
                "start": 871,
                "end": 1163
              },
              "start": 821,
              "end": 1163
            }
          ],
          "start": 786,
          "end": 1165
        },
        "start": 746,
        "end": 1165
      },
      "start": 739,
      "end": 1165
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "loop2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1167,
        "end": 1172
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
                "start": 1183,
                "end": 1184
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1187,
                "end": 1188
              },
              "definite": false,
              "start": 1183,
              "end": 1188
            },
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1190,
                "end": 1191
              },
              "init": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1194,
                "end": 1195
              },
              "definite": false,
              "start": 1190,
              "end": 1195
            }
          ],
          "declare": false,
          "start": 1179,
          "end": 1195
        },
        "test": {
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
          "operator": "<",
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
                "start": 1206,
                "end": 1207
              },
              "start": 1204,
              "end": 1207
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
                "start": 1211,
                "end": 1212
              },
              "start": 1209,
              "end": 1212
            }
          ],
          "start": 1204,
          "end": 1212
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
                    "start": 1224,
                    "end": 1225
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
                          "start": 1234,
                          "end": 1235
                        },
                        "start": 1234,
                        "end": 1237
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
                          "start": 1240,
                          "end": 1241
                        },
                        "start": 1240,
                        "end": 1243
                      },
                      "start": 1234,
                      "end": 1243
                    },
                    "id": null,
                    "generator": false,
                    "start": 1228,
                    "end": 1243
                  },
                  "definite": false,
                  "start": 1224,
                  "end": 1243
                }
              ],
              "declare": false,
              "start": 1220,
              "end": 1244
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
                  "start": 1253,
                  "end": 1254
                },
                "operator": "==",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1258,
                  "end": 1259
                },
                "start": 1253,
                "end": 1259
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1285
                    },
                    "start": 1271,
                    "end": 1286
                  }
                ],
                "start": 1261,
                "end": 1292
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "loop1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1312,
                      "end": 1317
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1336,
                              "end": 1337
                            },
                            "init": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 1340,
                              "end": 1341
                            },
                            "definite": false,
                            "start": 1336,
                            "end": 1341
                          }
                        ],
                        "declare": false,
                        "start": 1332,
                        "end": 1341
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1343,
                          "end": 1344
                        },
                        "operator": "<",
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 1347,
                          "end": 1348
                        },
                        "start": 1343,
                        "end": 1348
                      },
                      "update": {
                        "type": "UpdateExpression",
                        "operator": "--",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1352,
                          "end": 1353
                        },
                        "start": 1350,
                        "end": 1353
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1373,
                                  "end": 1374
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1383,
                                    "end": 1384
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1377,
                                  "end": 1384
                                },
                                "definite": false,
                                "start": 1373,
                                "end": 1384
                              }
                            ],
                            "declare": false,
                            "start": 1369,
                            "end": 1385
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1402,
                              "end": 1403
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
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1423,
                                      "end": 1424
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1427,
                                      "end": 1428
                                    },
                                    "start": 1423,
                                    "end": 1428
                                  },
                                  "directive": null,
                                  "start": 1423,
                                  "end": 1429
                                },
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1455,
                                    "end": 1460
                                  },
                                  "start": 1446,
                                  "end": 1461
                                }
                              ],
                              "start": 1405,
                              "end": 1475
                            },
                            "alternate": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "UpdateExpression",
                                    "operator": "++",
                                    "prefix": false,
                                    "argument": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1511,
                                      "end": 1512
                                    },
                                    "start": 1511,
                                    "end": 1514
                                  },
                                  "directive": null,
                                  "start": 1511,
                                  "end": 1515
                                },
                                {
                                  "type": "ContinueStatement",
                                  "label": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "loop2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1541,
                                    "end": 1546
                                  },
                                  "start": 1532,
                                  "end": 1546
                                }
                              ],
                              "start": 1493,
                              "end": 1560
                            },
                            "start": 1398,
                            "end": 1560
                          }
                        ],
                        "start": 1355,
                        "end": 1570
                      },
                      "start": 1327,
                      "end": 1570
                    },
                    "start": 1312,
                    "end": 1570
                  },
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
                        "start": 1588,
                        "end": 1589
                      },
                      "right": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 1592,
                        "end": 1593
                      },
                      "start": 1588,
                      "end": 1593
                    },
                    "directive": null,
                    "start": 1588,
                    "end": 1594
                  }
                ],
                "start": 1302,
                "end": 1600
              },
              "start": 1249,
              "end": 1600
            }
          ],
          "start": 1214,
          "end": 1602
        },
        "start": 1174,
        "end": 1602
      },
      "start": 1167,
      "end": 1602
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1602
}
```
