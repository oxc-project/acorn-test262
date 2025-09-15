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
