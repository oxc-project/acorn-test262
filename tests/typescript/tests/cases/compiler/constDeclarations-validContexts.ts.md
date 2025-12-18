__ESTREE_TEST__:AST:
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 64
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 67,
                  "end": 68
                },
                "definite": false,
                "start": 62,
                "end": 68
              }
            ],
            "declare": false,
            "start": 56,
            "end": 69
          }
        ],
        "start": 49,
        "end": 71
      },
      "alternate": {
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
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 90,
                  "end": 92
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 95,
                  "end": 96
                },
                "definite": false,
                "start": 90,
                "end": 96
              }
            ],
            "declare": false,
            "start": 84,
            "end": 97
          }
        ],
        "start": 77,
        "end": 99
      },
      "start": 39,
      "end": 99
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 108,
        "end": 112
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
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 129
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 132,
                  "end": 133
                },
                "definite": false,
                "start": 127,
                "end": 133
              }
            ],
            "declare": false,
            "start": 121,
            "end": 134
          }
        ],
        "start": 114,
        "end": 136
      },
      "start": 101,
      "end": 136
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
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 156
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 159,
                  "end": 160
                },
                "definite": false,
                "start": 154,
                "end": 160
              }
            ],
            "declare": false,
            "start": 148,
            "end": 161
          }
        ],
        "start": 141,
        "end": 163
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 171,
        "end": 175
      },
      "start": 138,
      "end": 177
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
            "start": 183,
            "end": 186
          },
          "init": null,
          "definite": false,
          "start": 183,
          "end": 186
        }
      ],
      "declare": false,
      "start": 179,
      "end": 187
    },
    {
      "type": "WithStatement",
      "object": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 197
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
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 213
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 216,
                  "end": 217
                },
                "definite": false,
                "start": 211,
                "end": 217
              }
            ],
            "declare": false,
            "start": 205,
            "end": 218
          }
        ],
        "start": 199,
        "end": 220
      },
      "start": 188,
      "end": 220
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
              "start": 231,
              "end": 232
            },
            "init": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 235,
              "end": 236
            },
            "definite": false,
            "start": 231,
            "end": 236
          }
        ],
        "declare": false,
        "start": 227,
        "end": 236
      },
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "i",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 239
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 242,
          "end": 244
        },
        "start": 238,
        "end": 244
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
          "start": 246,
          "end": 247
        },
        "start": 246,
        "end": 249
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
                  "name": "c6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 265
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 268,
                  "end": 269
                },
                "definite": false,
                "start": 263,
                "end": 269
              }
            ],
            "declare": false,
            "start": 257,
            "end": 270
          }
        ],
        "start": 251,
        "end": 272
      },
      "start": 222,
      "end": 272
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
              "start": 283,
              "end": 285
            },
            "init": null,
            "definite": false,
            "start": 283,
            "end": 285
          }
        ],
        "declare": false,
        "start": 279,
        "end": 285
      },
      "right": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 289,
        "end": 291
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
                  "name": "c7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 305,
                  "end": 307
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 310,
                  "end": 311
                },
                "definite": false,
                "start": 305,
                "end": 311
              }
            ],
            "declare": false,
            "start": 299,
            "end": 312
          }
        ],
        "start": 293,
        "end": 314
      },
      "start": 274,
      "end": 314
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 320,
        "end": 324
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
              "start": 332,
              "end": 337
            },
            "body": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 347
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 350,
                    "end": 351
                  },
                  "definite": false,
                  "start": 345,
                  "end": 351
                }
              ],
              "declare": false,
              "start": 339,
              "end": 352
            },
            "start": 332,
            "end": 352
          }
        ],
        "start": 326,
        "end": 354
      },
      "alternate": null,
      "start": 316,
      "end": 354
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 363,
        "end": 368
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
              "start": 376,
              "end": 382
            },
            "body": {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label3",
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 390
              },
              "body": {
                "type": "LabeledStatement",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "label4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 398
                },
                "body": {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c9",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 406,
                        "end": 408
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 411,
                        "end": 412
                      },
                      "definite": false,
                      "start": 406,
                      "end": 412
                    }
                  ],
                  "declare": false,
                  "start": 400,
                  "end": 413
                },
                "start": 392,
                "end": 413
              },
              "start": 384,
              "end": 413
            },
            "start": 376,
            "end": 413
          }
        ],
        "start": 370,
        "end": 415
      },
      "start": 356,
      "end": 415
    },
    {
      "type": "TryStatement",
      "block": {
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
                  "name": "c10",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 457
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 460,
                  "end": 461
                },
                "definite": false,
                "start": 454,
                "end": 461
              }
            ],
            "declare": false,
            "start": 448,
            "end": 462
          }
        ],
        "start": 442,
        "end": 464
      },
      "handler": {
        "type": "CatchClause",
        "param": {
          "type": "Identifier",
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 473
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
                    "name": "c11",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 490
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 493,
                    "end": 494
                  },
                  "definite": false,
                  "start": 487,
                  "end": 494
                }
              ],
              "declare": false,
              "start": 481,
              "end": 495
            }
          ],
          "start": 475,
          "end": 497
        },
        "start": 465,
        "end": 497
      },
      "finalizer": {
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
                  "name": "c12",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
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
                "start": 518,
                "end": 525
              }
            ],
            "declare": false,
            "start": 512,
            "end": 526
          }
        ],
        "start": 506,
        "end": 528
      },
      "start": 438,
      "end": 528
    },
    {
      "type": "SwitchStatement",
      "discriminant": {
        "type": "Literal",
        "value": 0,
        "raw": "0",
        "start": 548,
        "end": 549
      },
      "cases": [
        {
          "type": "SwitchCase",
          "test": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 562,
            "end": 563
          },
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c13",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 579,
                    "end": 582
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 585,
                    "end": 586
                  },
                  "definite": false,
                  "start": 579,
                  "end": 586
                }
              ],
              "declare": false,
              "start": 573,
              "end": 587
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 596,
              "end": 602
            }
          ],
          "start": 557,
          "end": 602
        },
        {
          "type": "SwitchCase",
          "test": null,
          "consequent": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c14",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 630,
                    "end": 633
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 636,
                    "end": 637
                  },
                  "definite": false,
                  "start": 630,
                  "end": 637
                }
              ],
              "declare": false,
              "start": 624,
              "end": 638
            },
            {
              "type": "BreakStatement",
              "label": null,
              "start": 647,
              "end": 653
            }
          ],
          "start": 607,
          "end": 653
        }
      ],
      "start": 540,
      "end": 655
    },
    {
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
                "name": "c15",
                "optional": false,
                "typeAnnotation": null,
                "start": 679,
                "end": 682
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 685,
                "end": 686
              },
              "definite": false,
              "start": 679,
              "end": 686
            }
          ],
          "declare": false,
          "start": 673,
          "end": 687
        },
        {
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
                    "name": "c16",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 711
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 714,
                    "end": 715
                  },
                  "definite": false,
                  "start": 708,
                  "end": 715
                }
              ],
              "declare": false,
              "start": 702,
              "end": 715
            },
            {
              "type": "LabeledStatement",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "label17",
                "optional": false,
                "typeAnnotation": null,
                "start": 724,
                "end": 731
              },
              "body": {
                "type": "VariableDeclaration",
                "kind": "const",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c17",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 742
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 745,
                      "end": 746
                    },
                    "definite": false,
                    "start": 739,
                    "end": 746
                  }
                ],
                "declare": false,
                "start": 733,
                "end": 747
              },
              "start": 724,
              "end": 747
            }
          ],
          "start": 692,
          "end": 753
        }
      ],
      "start": 667,
      "end": 755
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
            "name": "c18",
            "optional": false,
            "typeAnnotation": null,
            "start": 773,
            "end": 776
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 779,
            "end": 780
          },
          "definite": false,
          "start": 773,
          "end": 780
        }
      ],
      "declare": false,
      "start": 767,
      "end": 781
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 805,
        "end": 806
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 821,
                  "end": 824
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 827,
                  "end": 828
                },
                "definite": false,
                "start": 821,
                "end": 828
              }
            ],
            "declare": false,
            "start": 815,
            "end": 829
          }
        ],
        "start": 809,
        "end": 831
      },
      "expression": false,
      "start": 796,
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
            "name": "F2",
            "optional": false,
            "typeAnnotation": null,
            "start": 837,
            "end": 839
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c20",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 863
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 866,
                        "end": 867
                      },
                      "definite": false,
                      "start": 860,
                      "end": 867
                    }
                  ],
                  "declare": false,
                  "start": 854,
                  "end": 868
                }
              ],
              "start": 848,
              "end": 870
            },
            "id": null,
            "generator": false,
            "start": 842,
            "end": 870
          },
          "definite": false,
          "start": 837,
          "end": 870
        }
      ],
      "declare": false,
      "start": 833,
      "end": 871
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
            "start": 877,
            "end": 879
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c21",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 906,
                        "end": 909
                      },
                      "init": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 912,
                        "end": 913
                      },
                      "definite": false,
                      "start": 906,
                      "end": 913
                    }
                  ],
                  "declare": false,
                  "start": 900,
                  "end": 914
                }
              ],
              "start": 894,
              "end": 916
            },
            "expression": false,
            "start": 882,
            "end": 916
          },
          "definite": false,
          "start": 877,
          "end": 916
        }
      ],
      "declare": false,
      "start": 873,
      "end": 917
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 940,
        "end": 941
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "c22",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 954,
                  "end": 957
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 960,
                  "end": 961
                },
                "definite": false,
                "start": 954,
                "end": 961
              }
            ],
            "declare": false,
            "start": 948,
            "end": 962
          },
          {
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
                      "name": "c23",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 986,
                      "end": 989
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 992,
                      "end": 993
                    },
                    "definite": false,
                    "start": 986,
                    "end": 993
                  }
                ],
                "declare": false,
                "start": 980,
                "end": 994
              }
            ],
            "start": 968,
            "end": 1000
          }
        ],
        "start": 942,
        "end": 1002
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 930,
      "end": 1002
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
        "start": 1021,
        "end": 1022
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
              "start": 1029,
              "end": 1040
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c24",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1059,
                          "end": 1062
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1065,
                          "end": 1066
                        },
                        "definite": false,
                        "start": 1059,
                        "end": 1066
                      }
                    ],
                    "declare": false,
                    "start": 1053,
                    "end": 1067
                  }
                ],
                "start": 1043,
                "end": 1073
              },
              "expression": false,
              "start": 1040,
              "end": 1073
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1029,
            "end": 1073
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
              "start": 1079,
              "end": 1085
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c25",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1104,
                          "end": 1107
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1110,
                          "end": 1111
                        },
                        "definite": false,
                        "start": 1104,
                        "end": 1111
                      }
                    ],
                    "declare": false,
                    "start": 1098,
                    "end": 1112
                  }
                ],
                "start": 1088,
                "end": 1118
              },
              "expression": false,
              "start": 1085,
              "end": 1118
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1079,
            "end": 1118
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
              "start": 1128,
              "end": 1129
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
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c26",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1148,
                          "end": 1151
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1154,
                          "end": 1155
                        },
                        "definite": false,
                        "start": 1148,
                        "end": 1155
                      }
                    ],
                    "declare": false,
                    "start": 1142,
                    "end": 1156
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c26",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1172,
                      "end": 1175
                    },
                    "start": 1165,
                    "end": 1176
                  }
                ],
                "start": 1132,
                "end": 1183
              },
              "expression": false,
              "start": 1129,
              "end": 1183
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1124,
            "end": 1183
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
              "start": 1193,
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
                  "typeAnnotation": null,
                  "start": 1195,
                  "end": 1200
                }
              ],
              "returnType": null,
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
                          "name": "c27",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1218,
                          "end": 1221
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1224,
                          "end": 1229
                        },
                        "definite": false,
                        "start": 1218,
                        "end": 1229
                      }
                    ],
                    "declare": false,
                    "start": 1212,
                    "end": 1230
                  }
                ],
                "start": 1202,
                "end": 1236
              },
              "expression": false,
              "start": 1194,
              "end": 1236
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1189,
            "end": 1236
          }
        ],
        "start": 1023,
        "end": 1238
      },
      "abstract": false,
      "declare": false,
      "start": 1015,
      "end": 1238
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
            "start": 1263,
            "end": 1264
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
                  "start": 1273,
                  "end": 1274
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c28",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1293,
                              "end": 1296
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1299,
                              "end": 1300
                            },
                            "definite": false,
                            "start": 1293,
                            "end": 1300
                          }
                        ],
                        "declare": false,
                        "start": 1287,
                        "end": 1301
                      }
                    ],
                    "start": 1277,
                    "end": 1307
                  },
                  "expression": false,
                  "start": 1274,
                  "end": 1307
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1273,
                "end": 1307
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
                  "start": 1313,
                  "end": 1315
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
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c29",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1339,
                              "end": 1342
                            },
                            "init": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 1345,
                              "end": 1346
                            },
                            "definite": false,
                            "start": 1339,
                            "end": 1346
                          }
                        ],
                        "declare": false,
                        "start": 1333,
                        "end": 1347
                      }
                    ],
                    "start": 1323,
                    "end": 1353
                  },
                  "id": null,
                  "generator": false,
                  "start": 1317,
                  "end": 1353
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1313,
                "end": 1353
              }
            ],
            "start": 1267,
            "end": 1355
          },
          "definite": false,
          "start": 1263,
          "end": 1355
        }
      ],
      "declare": false,
      "start": 1259,
      "end": 1355
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 39,
  "end": 1355
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "if",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 43,
    "end": 47,
    "range": [
      43,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 56,
    "end": 61,
    "range": [
      56,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 62,
    "end": 64,
    "range": [
      62,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 72,
    "end": 76,
    "range": [
      72,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89,
    "range": [
      84,
      89
    ]
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 90,
    "end": 92,
    "range": [
      90,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 108,
    "end": 112,
    "range": [
      108,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 121,
    "end": 126,
    "range": [
      121,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 127,
    "end": 129,
    "range": [
      127,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "do",
    "start": 138,
    "end": 140,
    "range": [
      138,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "c4",
    "start": 154,
    "end": 156,
    "range": [
      154,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 164,
    "end": 169,
    "range": [
      164,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 171,
    "end": 175,
    "range": [
      171,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 179,
    "end": 182,
    "range": [
      179,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 183,
    "end": 186,
    "range": [
      183,
      186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Keyword",
    "value": "with",
    "start": 188,
    "end": 192,
    "range": [
      188,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 194,
    "end": 197,
    "range": [
      194,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 205,
    "end": 210,
    "range": [
      205,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "c5",
    "start": 211,
    "end": 213,
    "range": [
      211,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 227,
    "end": 230,
    "range": [
      227,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 242,
    "end": 244,
    "range": [
      242,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 247,
    "end": 249,
    "range": [
      247,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262,
    "range": [
      257,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "c6",
    "start": 263,
    "end": 265,
    "range": [
      263,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 271,
    "end": 272,
    "range": [
      271,
      272
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 274,
    "end": 277,
    "range": [
      274,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282,
    "range": [
      279,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "i2",
    "start": 283,
    "end": 285,
    "range": [
      283,
      285
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 286,
    "end": 288,
    "range": [
      286,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 299,
    "end": 304,
    "range": [
      299,
      304
    ]
  },
  {
    "type": "Identifier",
    "value": "c7",
    "start": 305,
    "end": 307,
    "range": [
      305,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 320,
    "end": 324,
    "range": [
      320,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 332,
    "end": 337,
    "range": [
      332,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 339,
    "end": 344,
    "range": [
      339,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "c8",
    "start": 345,
    "end": 347,
    "range": [
      345,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 356,
    "end": 361,
    "range": [
      356,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 363,
    "end": 368,
    "range": [
      363,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "label2",
    "start": 376,
    "end": 382,
    "range": [
      376,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "label3",
    "start": 384,
    "end": 390,
    "range": [
      384,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Identifier",
    "value": "label4",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 400,
    "end": 405,
    "range": [
      400,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "c9",
    "start": 406,
    "end": 408,
    "range": [
      406,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "try",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 448,
    "end": 453,
    "range": [
      448,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "c10",
    "start": 454,
    "end": 457,
    "range": [
      454,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "catch",
    "start": 465,
    "end": 470,
    "range": [
      465,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 481,
    "end": 486,
    "range": [
      481,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "c11",
    "start": 487,
    "end": 490,
    "range": [
      487,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "finally",
    "start": 498,
    "end": 505,
    "range": [
      498,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 512,
    "end": 517,
    "range": [
      512,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "c12",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 540,
    "end": 546,
    "range": [
      540,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 557,
    "end": 561,
    "range": [
      557,
      561
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 573,
    "end": 578,
    "range": [
      573,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "c13",
    "start": 579,
    "end": 582,
    "range": [
      579,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 596,
    "end": 601,
    "range": [
      596,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 607,
    "end": 614,
    "range": [
      607,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 624,
    "end": 629,
    "range": [
      624,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "c14",
    "start": 630,
    "end": 633,
    "range": [
      630,
      633
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638,
    "range": [
      637,
      638
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 647,
    "end": 652,
    "range": [
      647,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 673,
    "end": 678,
    "range": [
      673,
      678
    ]
  },
  {
    "type": "Identifier",
    "value": "c15",
    "start": 679,
    "end": 682,
    "range": [
      679,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 702,
    "end": 707,
    "range": [
      702,
      707
    ]
  },
  {
    "type": "Identifier",
    "value": "c16",
    "start": 708,
    "end": 711,
    "range": [
      708,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "label17",
    "start": 724,
    "end": 731,
    "range": [
      724,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 733,
    "end": 738,
    "range": [
      733,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "c17",
    "start": 739,
    "end": 742,
    "range": [
      739,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 767,
    "end": 772,
    "range": [
      767,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "c18",
    "start": 773,
    "end": 776,
    "range": [
      773,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 796,
    "end": 804,
    "range": [
      796,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 815,
    "end": 820,
    "range": [
      815,
      820
    ]
  },
  {
    "type": "Identifier",
    "value": "c19",
    "start": 821,
    "end": 824,
    "range": [
      821,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 827,
    "end": 828,
    "range": [
      827,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 833,
    "end": 836,
    "range": [
      833,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "F2",
    "start": 837,
    "end": 839,
    "range": [
      837,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 840,
    "end": 841,
    "range": [
      840,
      841
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 842,
    "end": 843,
    "range": [
      842,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 845,
    "end": 847,
    "range": [
      845,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 854,
    "end": 859,
    "range": [
      854,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "c20",
    "start": 860,
    "end": 863,
    "range": [
      860,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Identifier",
    "value": "F3",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 882,
    "end": 890,
    "range": [
      882,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 900,
    "end": 905,
    "range": [
      900,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "c21",
    "start": 906,
    "end": 909,
    "range": [
      906,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 910,
    "end": 911,
    "range": [
      910,
      911
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 930,
    "end": 939,
    "range": [
      930,
      939
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 948,
    "end": 953,
    "range": [
      948,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "c22",
    "start": 954,
    "end": 957,
    "range": [
      954,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 980,
    "end": 985,
    "range": [
      980,
      985
    ]
  },
  {
    "type": "Identifier",
    "value": "c23",
    "start": 986,
    "end": 989,
    "range": [
      986,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994,
    "range": [
      993,
      994
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1015,
    "end": 1020,
    "range": [
      1015,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1023,
    "end": 1024,
    "range": [
      1023,
      1024
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1029,
    "end": 1040,
    "range": [
      1029,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1053,
    "end": 1058,
    "range": [
      1053,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "c24",
    "start": 1059,
    "end": 1062,
    "range": [
      1059,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1066,
    "end": 1067,
    "range": [
      1066,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 1079,
    "end": 1085,
    "range": [
      1079,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1098,
    "end": 1103,
    "range": [
      1098,
      1103
    ]
  },
  {
    "type": "Identifier",
    "value": "c25",
    "start": 1104,
    "end": 1107,
    "range": [
      1104,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1124,
    "end": 1127,
    "range": [
      1124,
      1127
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1132,
    "end": 1133,
    "range": [
      1132,
      1133
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1142,
    "end": 1147,
    "range": [
      1142,
      1147
    ]
  },
  {
    "type": "Identifier",
    "value": "c26",
    "start": 1148,
    "end": 1151,
    "range": [
      1148,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1165,
    "end": 1171,
    "range": [
      1165,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "c26",
    "start": 1172,
    "end": 1175,
    "range": [
      1172,
      1175
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1175,
    "end": 1176,
    "range": [
      1175,
      1176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1189,
    "end": 1192,
    "range": [
      1189,
      1192
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1195,
    "end": 1200,
    "range": [
      1195,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1212,
    "end": 1217,
    "range": [
      1212,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "c27",
    "start": 1218,
    "end": 1221,
    "range": [
      1218,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1222,
    "end": 1223,
    "range": [
      1222,
      1223
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1224,
    "end": 1229,
    "range": [
      1224,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1259,
    "end": 1262,
    "range": [
      1259,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1287,
    "end": 1292,
    "range": [
      1287,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "c28",
    "start": 1293,
    "end": 1296,
    "range": [
      1293,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1313,
    "end": 1315,
    "range": [
      1313,
      1315
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1318,
    "end": 1319,
    "range": [
      1318,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1320,
    "end": 1322,
    "range": [
      1320,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1333,
    "end": 1338,
    "range": [
      1333,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "c29",
    "start": 1339,
    "end": 1342,
    "range": [
      1339,
      1342
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  }
]
```
