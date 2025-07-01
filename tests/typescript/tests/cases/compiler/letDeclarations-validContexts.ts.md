__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 43,
        "end": 47
      },
      "consequent": {
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
                  "name": "l1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 62
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 65,
                  "end": 66
                },
                "definite": false,
                "start": 60,
                "end": 66
              }
            ],
            "declare": false,
            "start": 56,
            "end": 67
          }
        ],
        "start": 49,
        "end": 69
      },
      "alternate": {
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
                  "name": "l2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 88
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 91,
                  "end": 92
                },
                "definite": false,
                "start": 86,
                "end": 92
              }
            ],
            "declare": false,
            "start": 82,
            "end": 93
          }
        ],
        "start": 75,
        "end": 95
      },
      "start": 39,
      "end": 95
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 104,
        "end": 108
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
                  "name": "l3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 123
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 126,
                  "end": 127
                },
                "definite": false,
                "start": 121,
                "end": 127
              }
            ],
            "declare": false,
            "start": 117,
            "end": 128
          }
        ],
        "start": 110,
        "end": 130
      },
      "start": 97,
      "end": 130
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
                  "name": "l4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 148
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 151,
                  "end": 152
                },
                "definite": false,
                "start": 146,
                "end": 152
              }
            ],
            "declare": false,
            "start": 142,
            "end": 153
          }
        ],
        "start": 135,
        "end": 155
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 163,
        "end": 167
      },
      "start": 132,
      "end": 169
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 178
          },
          "init": null,
          "definite": false,
          "start": 175,
          "end": 178
        }
      ],
      "declare": false,
      "start": 171,
      "end": 179
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 186,
        "end": 189
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
                  "name": "l5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 203
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 206,
                  "end": 207
                },
                "definite": false,
                "start": 201,
                "end": 207
              }
            ],
            "declare": false,
            "start": 197,
            "end": 208
          }
        ],
        "start": 191,
        "end": 210
      },
      "start": 180,
      "end": 210
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
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 225,
              "end": 226
            },
            "definite": false,
            "start": 221,
            "end": 226
          }
        ],
        "declare": false,
        "start": 217,
        "end": 226
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 228,
          "end": 229
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 232,
          "end": 234
        },
        "start": 228,
        "end": 234
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
          "start": 236,
          "end": 237
        },
        "start": 236,
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
                  "name": "l6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 253
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 256,
                  "end": 257
                },
                "definite": false,
                "start": 251,
                "end": 257
              }
            ],
            "declare": false,
            "start": 247,
            "end": 258
          }
        ],
        "start": 241,
        "end": 260
      },
      "start": 212,
      "end": 260
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i2",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 273
            },
            "init": null,
            "definite": false,
            "start": 271,
            "end": 273
          }
        ],
        "declare": false,
        "start": 267,
        "end": 273
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 277,
        "end": 279
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
                  "name": "l7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 293
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 296,
                  "end": 297
                },
                "definite": false,
                "start": 291,
                "end": 297
              }
            ],
            "declare": false,
            "start": 287,
            "end": 298
          }
        ],
        "start": 281,
        "end": 300
      },
      "start": 262,
      "end": 300
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 306,
        "end": 310
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 323
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 329,
                    "end": 331
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 334,
                    "end": 335
                  },
                  "definite": false,
                  "start": 329,
                  "end": 335
                }
              ],
              "declare": false,
              "start": 325,
              "end": 336
            },
            "start": 318,
            "end": 336
          }
        ],
        "start": 312,
        "end": 338
      },
      "alternate": null,
      "start": 302,
      "end": 338
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 347,
        "end": 352
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label2",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 366
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 374
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 382
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 390
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 393,
                        "end": 394
                      },
                      "definite": false,
                      "start": 388,
                      "end": 394
                    }
                  ],
                  "declare": false,
                  "start": 384,
                  "end": 395
                },
                "start": 376,
                "end": 395
              },
              "start": 368,
              "end": 395
            },
            "start": 360,
            "end": 395
          }
        ],
        "start": 354,
        "end": 397
      },
      "start": 340,
      "end": 397
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "l10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 437
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 440,
                  "end": 441
                },
                "definite": false,
                "start": 434,
                "end": 441
              }
            ],
            "declare": false,
            "start": 430,
            "end": 442
          }
        ],
        "start": 424,
        "end": 444
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 452,
          "end": 453
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
                    "name": "l11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 465,
                    "end": 468
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 471,
                    "end": 472
                  },
                  "definite": false,
                  "start": 465,
                  "end": 472
                }
              ],
              "declare": false,
              "start": 461,
              "end": 473
            }
          ],
          "start": 455,
          "end": 475
        },
        "start": 445,
        "end": 475
      },
      "finalizer": {
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
                  "name": "l12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 497
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 500,
                  "end": 501
                },
                "definite": false,
                "start": 494,
                "end": 501
              }
            ],
            "declare": false,
            "start": 490,
            "end": 502
          }
        ],
        "start": 484,
        "end": 504
      },
      "start": 420,
      "end": 504
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 524,
        "end": 525
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 538,
            "end": 539
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 556
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 559,
                    "end": 560
                  },
                  "definite": false,
                  "start": 553,
                  "end": 560
                }
              ],
              "declare": false,
              "start": 549,
              "end": 561
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 570,
              "end": 576
            }
          ],
          "start": 533,
          "end": 576
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l14",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 602,
                    "end": 605
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 608,
                    "end": 609
                  },
                  "definite": false,
                  "start": 602,
                  "end": 609
                }
              ],
              "declare": false,
              "start": 598,
              "end": 610
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 619,
              "end": 625
            }
          ],
          "start": 581,
          "end": 625
        }
      ],
      "start": 516,
      "end": 627
    },
    {
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
                "name": "l15",
                "optional": false,
                "typeAnnotation": null,
                "start": 649,
                "end": 652
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 655,
                "end": 656
              },
              "definite": false,
              "start": 649,
              "end": 656
            }
          ],
          "declare": false,
          "start": 645,
          "end": 657
        },
        {
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
                    "name": "l16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 679
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 682,
                    "end": 683
                  },
                  "definite": false,
                  "start": 676,
                  "end": 683
                }
              ],
              "declare": false,
              "start": 672,
              "end": 683
            },
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label17",
                "optional": false,
                "typeAnnotation": null,
                "start": 692,
                "end": 699
              },
              "body": {
                "type": "VariableDeclaration",
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 705,
                      "end": 708
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 711,
                      "end": 712
                    },
                    "definite": false,
                    "start": 705,
                    "end": 712
                  }
                ],
                "declare": false,
                "start": 701,
                "end": 713
              },
              "start": 692,
              "end": 713
            }
          ],
          "start": 662,
          "end": 719
        }
      ],
      "start": 639,
      "end": 721
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "l18",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 740
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 743,
            "end": 744
          },
          "definite": false,
          "start": 737,
          "end": 744
        }
      ],
      "declare": false,
      "start": 733,
      "end": 745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 770
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
                  "name": "l19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 783,
                  "end": 786
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 789,
                  "end": 790
                },
                "definite": false,
                "start": 783,
                "end": 790
              }
            ],
            "declare": false,
            "start": 779,
            "end": 791
          }
        ],
        "start": 773,
        "end": 793
      },
      "expression": false,
      "start": 760,
      "end": 793
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
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 801
          },
          "init": {
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
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l20",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 820,
                        "end": 823
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 826,
                        "end": 827
                      },
                      "definite": false,
                      "start": 820,
                      "end": 827
                    }
                  ],
                  "declare": false,
                  "start": 816,
                  "end": 828
                }
              ],
              "start": 810,
              "end": 830
            },
            "id": null,
            "generator": false,
            "start": 804,
            "end": 830
          },
          "definite": false,
          "start": 799,
          "end": 830
        }
      ],
      "declare": false,
      "start": 795,
      "end": 831
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
            "name": "F3",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
          },
          "init": {
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
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l21",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 864,
                        "end": 867
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 870,
                        "end": 871
                      },
                      "definite": false,
                      "start": 864,
                      "end": 871
                    }
                  ],
                  "declare": false,
                  "start": 860,
                  "end": 872
                }
              ],
              "start": 854,
              "end": 874
            },
            "expression": false,
            "start": 842,
            "end": 874
          },
          "definite": false,
          "start": 837,
          "end": 874
        }
      ],
      "declare": false,
      "start": 833,
      "end": 875
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 895,
        "end": 896
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "l22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 907,
                  "end": 910
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 913,
                  "end": 914
                },
                "definite": false,
                "start": 907,
                "end": 914
              }
            ],
            "declare": false,
            "start": 903,
            "end": 915
          },
          {
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
                      "name": "l23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 937,
                      "end": 940
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 943,
                      "end": 944
                    },
                    "definite": false,
                    "start": 937,
                    "end": 944
                  }
                ],
                "declare": false,
                "start": 933,
                "end": 945
              }
            ],
            "start": 921,
            "end": 951
          }
        ],
        "start": 897,
        "end": 953
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 888,
      "end": 953
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 972,
        "end": 973
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 980,
              "end": 991
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l24",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1011
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1014,
                          "end": 1015
                        },
                        "definite": false,
                        "start": 1008,
                        "end": 1015
                      }
                    ],
                    "declare": false,
                    "start": 1004,
                    "end": 1016
                  }
                ],
                "start": 994,
                "end": 1022
              },
              "expression": false,
              "start": 991,
              "end": 1022
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 980,
            "end": 1022
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 1028,
              "end": 1034
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l25",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1051,
                          "end": 1054
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1057,
                          "end": 1058
                        },
                        "definite": false,
                        "start": 1051,
                        "end": 1058
                      }
                    ],
                    "declare": false,
                    "start": 1047,
                    "end": 1059
                  }
                ],
                "start": 1037,
                "end": 1065
              },
              "expression": false,
              "start": 1034,
              "end": 1065
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1028,
            "end": 1065
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1075,
              "end": 1076
            },
            "value": {
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
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "l26",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1093,
                          "end": 1096
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1099,
                          "end": 1100
                        },
                        "definite": false,
                        "start": 1093,
                        "end": 1100
                      }
                    ],
                    "declare": false,
                    "start": 1089,
                    "end": 1101
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1117,
                      "end": 1120
                    },
                    "start": 1110,
                    "end": 1121
                  }
                ],
                "start": 1079,
                "end": 1128
              },
              "expression": false,
              "start": 1076,
              "end": 1128
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1071,
            "end": 1128
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1139
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
                  "typeAnnotation": null,
                  "start": 1140,
                  "end": 1145
                }
              ],
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
                          "name": "l27",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1161,
                          "end": 1164
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1167,
                          "end": 1172
                        },
                        "definite": false,
                        "start": 1161,
                        "end": 1172
                      }
                    ],
                    "declare": false,
                    "start": 1157,
                    "end": 1173
                  }
                ],
                "start": 1147,
                "end": 1179
              },
              "expression": false,
              "start": 1139,
              "end": 1179
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1134,
            "end": 1179
          }
        ],
        "start": 974,
        "end": 1181
      },
      "abstract": false,
      "declare": false,
      "start": 966,
      "end": 1181
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
            "start": 1206,
            "end": 1207
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1216,
                  "end": 1217
                },
                "value": {
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
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l28",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1234,
                              "end": 1237
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1240,
                              "end": 1241
                            },
                            "definite": false,
                            "start": 1234,
                            "end": 1241
                          }
                        ],
                        "declare": false,
                        "start": 1230,
                        "end": 1242
                      }
                    ],
                    "start": 1220,
                    "end": 1248
                  },
                  "expression": false,
                  "start": 1217,
                  "end": 1248
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1216,
                "end": 1248
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1254,
                  "end": 1256
                },
                "value": {
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
                        "type": "VariableDeclaration",
                        "kind": "let",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "l29",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1278,
                              "end": 1281
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1284,
                              "end": 1285
                            },
                            "definite": false,
                            "start": 1278,
                            "end": 1285
                          }
                        ],
                        "declare": false,
                        "start": 1274,
                        "end": 1286
                      }
                    ],
                    "start": 1264,
                    "end": 1292
                  },
                  "id": null,
                  "generator": false,
                  "start": 1258,
                  "end": 1292
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1254,
                "end": 1292
              }
            ],
            "start": 1210,
            "end": 1294
          },
          "definite": false,
          "start": 1206,
          "end": 1294
        }
      ],
      "declare": false,
      "start": 1202,
      "end": 1294
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 1306,
        "end": 1311
      },
      "body": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "l30",
              "optional": false,
              "typeAnnotation": null,
              "start": 1317,
              "end": 1320
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1323,
              "end": 1324
            },
            "definite": false,
            "start": 1317,
            "end": 1324
          }
        ],
        "declare": false,
        "start": 1313,
        "end": 1325
      },
      "start": 1306,
      "end": 1325
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "LabeledStatement",
          "label": {
            "type": "Identifier",
            "decorators": [],
            "name": "label2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1332,
            "end": 1338
          },
          "body": {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l31",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1344,
                  "end": 1347
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1350,
                  "end": 1351
                },
                "definite": false,
                "start": 1344,
                "end": 1351
              }
            ],
            "declare": false,
            "start": 1340,
            "end": 1352
          },
          "start": 1332,
          "end": 1352
        }
      ],
      "start": 1326,
      "end": 1354
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1365,
        "end": 1367
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
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 1376,
              "end": 1381
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l32",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1387,
                    "end": 1390
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1393,
                    "end": 1394
                  },
                  "definite": false,
                  "start": 1387,
                  "end": 1394
                }
              ],
              "declare": false,
              "start": 1383,
              "end": 1395
            },
            "start": 1376,
            "end": 1395
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1410,
                  "end": 1416
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l33",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1422,
                        "end": 1425
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1428,
                        "end": 1429
                      },
                      "definite": false,
                      "start": 1422,
                      "end": 1429
                    }
                  ],
                  "declare": false,
                  "start": 1418,
                  "end": 1430
                },
                "start": 1410,
                "end": 1430
              }
            ],
            "start": 1400,
            "end": 1436
          }
        ],
        "start": 1370,
        "end": 1438
      },
      "expression": false,
      "start": 1356,
      "end": 1438
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1447,
        "end": 1449
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "LabeledStatement",
            "label": {
              "type": "Identifier",
              "decorators": [],
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 1456,
              "end": 1461
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l34",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1467,
                    "end": 1470
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1473,
                    "end": 1474
                  },
                  "definite": false,
                  "start": 1467,
                  "end": 1474
                }
              ],
              "declare": false,
              "start": 1463,
              "end": 1475
            },
            "start": 1456,
            "end": 1475
          },
          {
            "type": "BlockStatement",
            "body": [
              {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1490,
                  "end": 1496
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "l35",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1502,
                        "end": 1505
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1508,
                        "end": 1509
                      },
                      "definite": false,
                      "start": 1502,
                      "end": 1509
                    }
                  ],
                  "declare": false,
                  "start": 1498,
                  "end": 1510
                },
                "start": 1490,
                "end": 1510
              }
            ],
            "start": 1480,
            "end": 1516
          }
        ],
        "start": 1450,
        "end": 1518
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1440,
      "end": 1518
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 1518
}
```
