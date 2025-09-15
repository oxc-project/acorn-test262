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
        "start": 898,
        "end": 899
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
                  "start": 910,
                  "end": 913
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 916,
                  "end": 917
                },
                "definite": false,
                "start": 910,
                "end": 917
              }
            ],
            "declare": false,
            "start": 906,
            "end": 918
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
                      "start": 940,
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
                    "start": 940,
                    "end": 947
                  }
                ],
                "declare": false,
                "start": 936,
                "end": 948
              }
            ],
            "start": 924,
            "end": 954
          }
        ],
        "start": 900,
        "end": 956
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 888,
      "end": 956
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
        "start": 975,
        "end": 976
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
              "start": 983,
              "end": 994
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
                          "start": 1011,
                          "end": 1014
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1017,
                          "end": 1018
                        },
                        "definite": false,
                        "start": 1011,
                        "end": 1018
                      }
                    ],
                    "declare": false,
                    "start": 1007,
                    "end": 1019
                  }
                ],
                "start": 997,
                "end": 1025
              },
              "expression": false,
              "start": 994,
              "end": 1025
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 983,
            "end": 1025
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
              "start": 1031,
              "end": 1037
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
                          "start": 1054,
                          "end": 1057
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1060,
                          "end": 1061
                        },
                        "definite": false,
                        "start": 1054,
                        "end": 1061
                      }
                    ],
                    "declare": false,
                    "start": 1050,
                    "end": 1062
                  }
                ],
                "start": 1040,
                "end": 1068
              },
              "expression": false,
              "start": 1037,
              "end": 1068
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1031,
            "end": 1068
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
              "start": 1078,
              "end": 1079
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
                          "start": 1096,
                          "end": 1099
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1102,
                          "end": 1103
                        },
                        "definite": false,
                        "start": 1096,
                        "end": 1103
                      }
                    ],
                    "declare": false,
                    "start": 1092,
                    "end": 1104
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "l26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1120,
                      "end": 1123
                    },
                    "start": 1113,
                    "end": 1124
                  }
                ],
                "start": 1082,
                "end": 1131
              },
              "expression": false,
              "start": 1079,
              "end": 1131
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1074,
            "end": 1131
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
              "start": 1141,
              "end": 1142
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
                  "start": 1143,
                  "end": 1148
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
                          "start": 1164,
                          "end": 1167
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1170,
                          "end": 1175
                        },
                        "definite": false,
                        "start": 1164,
                        "end": 1175
                      }
                    ],
                    "declare": false,
                    "start": 1160,
                    "end": 1176
                  }
                ],
                "start": 1150,
                "end": 1182
              },
              "expression": false,
              "start": 1142,
              "end": 1182
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1137,
            "end": 1182
          }
        ],
        "start": 977,
        "end": 1184
      },
      "abstract": false,
      "declare": false,
      "start": 969,
      "end": 1184
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
            "start": 1209,
            "end": 1210
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
                  "start": 1219,
                  "end": 1220
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
                              "start": 1237,
                              "end": 1240
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1243,
                              "end": 1244
                            },
                            "definite": false,
                            "start": 1237,
                            "end": 1244
                          }
                        ],
                        "declare": false,
                        "start": 1233,
                        "end": 1245
                      }
                    ],
                    "start": 1223,
                    "end": 1251
                  },
                  "expression": false,
                  "start": 1220,
                  "end": 1251
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1219,
                "end": 1251
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
                  "start": 1257,
                  "end": 1259
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
                              "start": 1281,
                              "end": 1284
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1287,
                              "end": 1288
                            },
                            "definite": false,
                            "start": 1281,
                            "end": 1288
                          }
                        ],
                        "declare": false,
                        "start": 1277,
                        "end": 1289
                      }
                    ],
                    "start": 1267,
                    "end": 1295
                  },
                  "id": null,
                  "generator": false,
                  "start": 1261,
                  "end": 1295
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1257,
                "end": 1295
              }
            ],
            "start": 1213,
            "end": 1297
          },
          "definite": false,
          "start": 1209,
          "end": 1297
        }
      ],
      "declare": false,
      "start": 1205,
      "end": 1297
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "label",
        "optional": false,
        "typeAnnotation": null,
        "start": 1309,
        "end": 1314
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
              "start": 1320,
              "end": 1323
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1326,
              "end": 1327
            },
            "definite": false,
            "start": 1320,
            "end": 1327
          }
        ],
        "declare": false,
        "start": 1316,
        "end": 1328
      },
      "start": 1309,
      "end": 1328
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
            "start": 1335,
            "end": 1341
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
                  "start": 1347,
                  "end": 1350
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1353,
                  "end": 1354
                },
                "definite": false,
                "start": 1347,
                "end": 1354
              }
            ],
            "declare": false,
            "start": 1343,
            "end": 1355
          },
          "start": 1335,
          "end": 1355
        }
      ],
      "start": 1329,
      "end": 1357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1368,
        "end": 1370
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
              "start": 1379,
              "end": 1384
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
                    "start": 1390,
                    "end": 1393
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1396,
                    "end": 1397
                  },
                  "definite": false,
                  "start": 1390,
                  "end": 1397
                }
              ],
              "declare": false,
              "start": 1386,
              "end": 1398
            },
            "start": 1379,
            "end": 1398
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
                  "start": 1413,
                  "end": 1419
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
                        "start": 1425,
                        "end": 1428
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1431,
                        "end": 1432
                      },
                      "definite": false,
                      "start": 1425,
                      "end": 1432
                    }
                  ],
                  "declare": false,
                  "start": 1421,
                  "end": 1433
                },
                "start": 1413,
                "end": 1433
              }
            ],
            "start": 1403,
            "end": 1439
          }
        ],
        "start": 1373,
        "end": 1441
      },
      "expression": false,
      "start": 1359,
      "end": 1441
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1453,
        "end": 1455
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
              "start": 1462,
              "end": 1467
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
                    "start": 1473,
                    "end": 1476
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1479,
                    "end": 1480
                  },
                  "definite": false,
                  "start": 1473,
                  "end": 1480
                }
              ],
              "declare": false,
              "start": 1469,
              "end": 1481
            },
            "start": 1462,
            "end": 1481
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
                  "start": 1496,
                  "end": 1502
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
                        "start": 1508,
                        "end": 1511
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1514,
                        "end": 1515
                      },
                      "definite": false,
                      "start": 1508,
                      "end": 1515
                    }
                  ],
                  "declare": false,
                  "start": 1504,
                  "end": 1516
                },
                "start": 1496,
                "end": 1516
              }
            ],
            "start": 1486,
            "end": 1522
          }
        ],
        "start": 1456,
        "end": 1524
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1443,
      "end": 1524
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 1524
}
```
