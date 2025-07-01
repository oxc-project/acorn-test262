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
        "start": 9,
        "end": 10
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
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 23,
                  "end": 24
                },
                "init": null,
                "definite": false,
                "start": 23,
                "end": 24
              }
            ],
            "declare": false,
            "start": 19,
            "end": 25
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 35
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 36,
                  "end": 38
                },
                "definite": false,
                "start": 34,
                "end": 38
              }
            ],
            "declare": false,
            "start": 30,
            "end": 39
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 48,
                  "end": 49
                },
                "init": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 50,
                  "end": 51
                },
                "definite": false,
                "start": 48,
                "end": 51
              }
            ],
            "declare": false,
            "start": 44,
            "end": 52
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
            "body": {
              "type": "ForStatement",
              "init": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 72
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 73,
                      "end": 74
                    },
                    "definite": false,
                    "start": 71,
                    "end": 74
                  }
                ],
                "declare": false,
                "start": 67,
                "end": 74
              },
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 75,
                  "end": 76
                },
                "operator": "<",
                "right": {
                  "type": "Literal",
                  "value": 19,
                  "raw": "19",
                  "start": 77,
                  "end": 79
                },
                "start": 75,
                "end": 79
              },
              "update": {
                "type": "UpdateExpression",
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 81
                },
                "start": 80,
                "end": 83
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 99,
                        "end": 100
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 7,
                        "raw": "7",
                        "start": 102,
                        "end": 103
                      },
                      "start": 99,
                      "end": 103
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "L1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 128,
                            "end": 130
                          },
                          "start": 119,
                          "end": 131
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
                              "start": 144,
                              "end": 145
                            },
                            "right": {
                              "type": "Literal",
                              "value": 11,
                              "raw": "11",
                              "start": 146,
                              "end": 148
                            },
                            "start": 144,
                            "end": 148
                          },
                          "directive": null,
                          "start": 144,
                          "end": 149
                        }
                      ],
                      "start": 105,
                      "end": 159
                    },
                    "alternate": null,
                    "start": 95,
                    "end": 159
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 173
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 175,
                        "end": 176
                      },
                      "start": 172,
                      "end": 176
                    },
                    "consequent": {
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
                              "start": 192,
                              "end": 193
                            },
                            "start": 192,
                            "end": 195
                          },
                          "directive": null,
                          "start": 192,
                          "end": 196
                        }
                      ],
                      "start": 178,
                      "end": 206
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "UpdateExpression",
                            "operator": "--",
                            "prefix": false,
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 234,
                              "end": 235
                            },
                            "start": 234,
                            "end": 237
                          },
                          "directive": null,
                          "start": 234,
                          "end": 238
                        }
                      ],
                      "start": 220,
                      "end": 248
                    },
                    "start": 168,
                    "end": 248
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
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 274,
                              "end": 275
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 277,
                              "end": 278
                            },
                            "start": 274,
                            "end": 278
                          },
                          "directive": null,
                          "start": 274,
                          "end": 279
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 296,
                              "end": 297
                            },
                            "operator": "==",
                            "right": {
                              "type": "Literal",
                              "value": 20,
                              "raw": "20",
                              "start": 299,
                              "end": 301
                            },
                            "start": 296,
                            "end": 301
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "BreakStatement",
                                "label": null,
                                "start": 321,
                                "end": 327
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
                                    "start": 344,
                                    "end": 345
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 12,
                                    "raw": "12",
                                    "start": 346,
                                    "end": 348
                                  },
                                  "start": 344,
                                  "end": 348
                                },
                                "directive": null,
                                "start": 344,
                                "end": 349
                              }
                            ],
                            "start": 303,
                            "end": 363
                          },
                          "alternate": null,
                          "start": 292,
                          "end": 363
                        }
                      ],
                      "start": 260,
                      "end": 373
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 382
                      },
                      "operator": "<",
                      "right": {
                        "type": "Literal",
                        "value": 41,
                        "raw": "41",
                        "start": 383,
                        "end": 385
                      },
                      "start": 381,
                      "end": 385
                    },
                    "start": 257,
                    "end": 387
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
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 397
                      },
                      "start": 396,
                      "end": 399
                    },
                    "directive": null,
                    "start": 396,
                    "end": 400
                  }
                ],
                "start": 85,
                "end": 406
              },
              "start": 62,
              "end": 406
            },
            "start": 58,
            "end": 406
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 418,
                "end": 419
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 420,
                "end": 421
              },
              "start": 418,
              "end": 421
            },
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 434
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 435,
                        "end": 436
                      },
                      "operator": ">>",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 438,
                        "end": 439
                      },
                      "start": 435,
                      "end": 439
                    },
                    "start": 433,
                    "end": 439
                  },
                  "directive": null,
                  "start": 433,
                  "end": 440
                }
              ],
              "start": 423,
              "end": 446
            },
            "start": 411,
            "end": 446
          },
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "L2",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 453
            },
            "body": {
              "type": "TryStatement",
              "block": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "LabeledStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "L3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 471
                    },
                    "body": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 477,
                          "end": 478
                        },
                        "operator": "<",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 479,
                          "end": 480
                        },
                        "start": 477,
                        "end": 480
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "BreakStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 502,
                              "end": 504
                            },
                            "start": 496,
                            "end": 505
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
                                "start": 518,
                                "end": 519
                              },
                              "right": {
                                "type": "Literal",
                                "value": 13,
                                "raw": "13",
                                "start": 520,
                                "end": 522
                              },
                              "start": 518,
                              "end": 522
                            },
                            "directive": null,
                            "start": 518,
                            "end": 523
                          }
                        ],
                        "start": 482,
                        "end": 533
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "BreakStatement",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "L3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 567,
                              "end": 569
                            },
                            "start": 561,
                            "end": 570
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
                                "start": 583,
                                "end": 584
                              },
                              "right": {
                                "type": "Literal",
                                "value": 14,
                                "raw": "14",
                                "start": 585,
                                "end": 587
                              },
                              "start": 583,
                              "end": 587
                            },
                            "directive": null,
                            "start": 583,
                            "end": 588
                          }
                        ],
                        "start": 547,
                        "end": 598
                      },
                      "start": 473,
                      "end": 598
                    },
                    "start": 469,
                    "end": 598
                  }
                ],
                "start": 459,
                "end": 604
              },
              "handler": {
                "type": "CatchClause",
                "param": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 616,
                  "end": 617
                },
                "body": {
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 630
                        },
                        "start": 629,
                        "end": 632
                      },
                      "directive": null,
                      "start": 629,
                      "end": 633
                    }
                  ],
                  "start": 619,
                  "end": 639
                },
                "start": 609,
                "end": 639
              },
              "finalizer": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "+=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 662,
                        "end": 663
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 665,
                        "end": 666
                      },
                      "start": 662,
                      "end": 666
                    },
                    "directive": null,
                    "start": 662,
                    "end": 667
                  }
                ],
                "start": 652,
                "end": 673
              },
              "start": 455,
              "end": 673
            },
            "start": 451,
            "end": 673
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 678,
                "end": 679
              },
              "start": 678,
              "end": 681
            },
            "directive": null,
            "start": 678,
            "end": 682
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "k",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 696,
                    "end": 697
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 698,
                    "end": 699
                  },
                  "definite": false,
                  "start": 696,
                  "end": 699
                }
              ],
              "declare": false,
              "start": 692,
              "end": 699
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 700,
                "end": 701
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 702,
                "end": 704
              },
              "start": 700,
              "end": 704
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 706
              },
              "start": 705,
              "end": 708
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 720,
                    "end": 721
                  },
                  "directive": null,
                  "start": 720,
                  "end": 722
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 731,
                  "end": 737
                }
              ],
              "start": 710,
              "end": 743
            },
            "start": 687,
            "end": 743
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 755,
                "end": 756
              },
              "start": 753,
              "end": 756
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 759,
                "end": 761
              },
              "start": 757,
              "end": 761
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "start": 762,
              "end": 765
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 781,
                      "end": 782
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 6,
                      "raw": "6",
                      "start": 784,
                      "end": 785
                    },
                    "start": 781,
                    "end": 785
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ContinueStatement",
                        "label": null,
                        "start": 801,
                        "end": 810
                      }
                    ],
                    "start": 787,
                    "end": 820
                  },
                  "alternate": null,
                  "start": 777,
                  "end": 820
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 829,
                  "end": 835
                }
              ],
              "start": 767,
              "end": 841
            },
            "start": 748,
            "end": 841
          }
        ],
        "start": 13,
        "end": 843
      },
      "expression": false,
      "start": 0,
      "end": 843
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 843
}
```
