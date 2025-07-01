__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 13
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 16
          },
          "init": null,
          "definite": false,
          "start": 15,
          "end": 16
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 18,
            "end": 19
          },
          "init": null,
          "definite": false,
          "start": 18,
          "end": 19
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 21,
            "end": 22
          },
          "init": null,
          "definite": false,
          "start": 21,
          "end": 22
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 24,
          "end": 25
        },
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement0",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 61
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 83
                  },
                  "directive": null,
                  "start": 82,
                  "end": 84
                }
              ],
              "start": 80,
              "end": 86
            },
            "start": 70,
            "end": 86
          }
        ],
        "start": 64,
        "end": 88
      },
      "expression": false,
      "start": 31,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement1",
        "optional": false,
        "typeAnnotation": null,
        "start": 105,
        "end": 120
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 142,
                "end": 143
              },
              "start": 136,
              "end": 143
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 147,
                    "end": 148
                  },
                  "directive": null,
                  "start": 147,
                  "end": 149
                }
              ],
              "start": 145,
              "end": 151
            },
            "start": 129,
            "end": 151
          }
        ],
        "start": 123,
        "end": 153
      },
      "expression": false,
      "start": 90,
      "end": 153
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement2",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 185
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 201,
              "end": 202
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 212,
                      "end": 213
                    },
                    "start": 206,
                    "end": 213
                  },
                  "directive": null,
                  "start": 206,
                  "end": 214
                }
              ],
              "start": 204,
              "end": 216
            },
            "start": 194,
            "end": 216
          }
        ],
        "start": 188,
        "end": 218
      },
      "expression": false,
      "start": 155,
      "end": 218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement3",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 250
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 267
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 271,
                  "end": 280
                }
              ],
              "start": 269,
              "end": 282
            },
            "start": 259,
            "end": 282
          }
        ],
        "start": 253,
        "end": 284
      },
      "expression": false,
      "start": 220,
      "end": 284
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement4",
        "optional": false,
        "typeAnnotation": null,
        "start": 301,
        "end": 316
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 338,
                "end": 339
              },
              "start": 332,
              "end": 339
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 343,
                  "end": 352
                }
              ],
              "start": 341,
              "end": 354
            },
            "start": 325,
            "end": 354
          }
        ],
        "start": 319,
        "end": 356
      },
      "expression": false,
      "start": 286,
      "end": 356
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement5",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 388
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 416
                    },
                    "start": 409,
                    "end": 416
                  },
                  "directive": null,
                  "start": 409,
                  "end": 417
                },
                {
                  "type": "ContinueStatement",
                  "label": null,
                  "start": 418,
                  "end": 427
                }
              ],
              "start": 407,
              "end": 429
            },
            "start": 397,
            "end": 429
          }
        ],
        "start": 391,
        "end": 431
      },
      "expression": false,
      "start": 358,
      "end": 431
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement6",
        "optional": false,
        "typeAnnotation": null,
        "start": 448,
        "end": 463
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 479,
              "end": 480
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 488,
                    "end": 489
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "label": null,
                    "start": 491,
                    "end": 500
                  },
                  "alternate": null,
                  "start": 484,
                  "end": 500
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 507,
                      "end": 508
                    },
                    "start": 501,
                    "end": 508
                  },
                  "directive": null,
                  "start": 501,
                  "end": 509
                }
              ],
              "start": 482,
              "end": 511
            },
            "start": 472,
            "end": 511
          }
        ],
        "start": 466,
        "end": 513
      },
      "expression": false,
      "start": 433,
      "end": 513
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement7",
        "optional": false,
        "typeAnnotation": null,
        "start": 530,
        "end": 545
      },
      "generator": false,
      "async": true,
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 555
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 564,
                "end": 565
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "start": 569,
                    "end": 580
                  }
                ],
                "start": 567,
                "end": 582
              },
              "start": 557,
              "end": 582
            },
            "start": 554,
            "end": 582
          }
        ],
        "start": 548,
        "end": 584
      },
      "expression": false,
      "start": 515,
      "end": 584
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement8",
        "optional": false,
        "typeAnnotation": null,
        "start": 601,
        "end": 616
      },
      "generator": false,
      "async": true,
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
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 626
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                },
                "start": 635,
                "end": 642
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 655,
                      "end": 656
                    },
                    "start": 646,
                    "end": 657
                  }
                ],
                "start": 644,
                "end": 659
              },
              "start": 628,
              "end": 659
            },
            "start": 625,
            "end": 659
          }
        ],
        "start": 619,
        "end": 661
      },
      "expression": false,
      "start": 586,
      "end": 661
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement9",
        "optional": false,
        "typeAnnotation": null,
        "start": 678,
        "end": 693
      },
      "generator": false,
      "async": true,
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 702,
              "end": 703
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 723,
                        "end": 724
                      },
                      "start": 717,
                      "end": 724
                    },
                    "directive": null,
                    "start": 717,
                    "end": 725
                  },
                  {
                    "type": "ContinueStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 735,
                      "end": 736
                    },
                    "start": 726,
                    "end": 737
                  }
                ],
                "start": 715,
                "end": 739
              },
              "start": 705,
              "end": 739
            },
            "start": 702,
            "end": 739
          }
        ],
        "start": 696,
        "end": 741
      },
      "expression": false,
      "start": 663,
      "end": 741
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement10",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 774
      },
      "generator": false,
      "async": true,
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
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 783,
              "end": 784
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 794
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 802,
                      "end": 803
                    },
                    "consequent": {
                      "type": "ContinueStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 814,
                        "end": 815
                      },
                      "start": 805,
                      "end": 816
                    },
                    "alternate": null,
                    "start": 798,
                    "end": 816
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 824
                      },
                      "start": 817,
                      "end": 824
                    },
                    "directive": null,
                    "start": 817,
                    "end": 825
                  }
                ],
                "start": 796,
                "end": 827
              },
              "start": 786,
              "end": 827
            },
            "start": 783,
            "end": 827
          }
        ],
        "start": 777,
        "end": 829
      },
      "expression": false,
      "start": 743,
      "end": 829
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement11",
        "optional": false,
        "typeAnnotation": null,
        "start": 846,
        "end": 862
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 879
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 883,
                  "end": 889
                }
              ],
              "start": 881,
              "end": 891
            },
            "start": 871,
            "end": 891
          }
        ],
        "start": 865,
        "end": 893
      },
      "expression": false,
      "start": 831,
      "end": 893
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement12",
        "optional": false,
        "typeAnnotation": null,
        "start": 910,
        "end": 926
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 948,
                "end": 949
              },
              "start": 942,
              "end": 949
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 953,
                  "end": 959
                }
              ],
              "start": 951,
              "end": 961
            },
            "start": 935,
            "end": 961
          }
        ],
        "start": 929,
        "end": 963
      },
      "expression": false,
      "start": 895,
      "end": 963
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement13",
        "optional": false,
        "typeAnnotation": null,
        "start": 980,
        "end": 996
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1013
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1023,
                      "end": 1024
                    },
                    "start": 1017,
                    "end": 1024
                  },
                  "directive": null,
                  "start": 1017,
                  "end": 1025
                },
                {
                  "type": "BreakStatement",
                  "label": null,
                  "start": 1026,
                  "end": 1032
                }
              ],
              "start": 1015,
              "end": 1034
            },
            "start": 1005,
            "end": 1034
          }
        ],
        "start": 999,
        "end": 1036
      },
      "expression": false,
      "start": 965,
      "end": 1036
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1053,
        "end": 1069
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1085,
              "end": 1086
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1094,
                    "end": 1095
                  },
                  "consequent": {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1097,
                    "end": 1103
                  },
                  "alternate": null,
                  "start": 1090,
                  "end": 1103
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1110,
                      "end": 1111
                    },
                    "start": 1104,
                    "end": 1111
                  },
                  "directive": null,
                  "start": 1104,
                  "end": 1112
                }
              ],
              "start": 1088,
              "end": 1114
            },
            "start": 1078,
            "end": 1114
          }
        ],
        "start": 1072,
        "end": 1116
      },
      "expression": false,
      "start": 1038,
      "end": 1116
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1133,
        "end": 1149
      },
      "generator": false,
      "async": true,
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
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 1158,
              "end": 1159
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1168,
                "end": 1169
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1179,
                      "end": 1180
                    },
                    "start": 1173,
                    "end": 1181
                  }
                ],
                "start": 1171,
                "end": 1183
              },
              "start": 1161,
              "end": 1183
            },
            "start": 1158,
            "end": 1183
          }
        ],
        "start": 1152,
        "end": 1185
      },
      "expression": false,
      "start": 1118,
      "end": 1185
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement16",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1218
      },
      "generator": false,
      "async": true,
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
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1228
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "AwaitExpression",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1243,
                  "end": 1244
                },
                "start": 1237,
                "end": 1244
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "F",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1254,
                      "end": 1255
                    },
                    "start": 1248,
                    "end": 1256
                  }
                ],
                "start": 1246,
                "end": 1258
              },
              "start": 1230,
              "end": 1258
            },
            "start": 1227,
            "end": 1258
          }
        ],
        "start": 1221,
        "end": 1260
      },
      "expression": false,
      "start": 1187,
      "end": 1260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement17",
        "optional": false,
        "typeAnnotation": null,
        "start": 1277,
        "end": 1293
      },
      "generator": false,
      "async": true,
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
              "name": "G",
              "optional": false,
              "typeAnnotation": null,
              "start": 1302,
              "end": 1303
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1312,
                "end": 1313
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1323,
                        "end": 1324
                      },
                      "start": 1317,
                      "end": 1324
                    },
                    "directive": null,
                    "start": 1317,
                    "end": 1325
                  },
                  {
                    "type": "BreakStatement",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "G",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1332,
                      "end": 1333
                    },
                    "start": 1326,
                    "end": 1334
                  }
                ],
                "start": 1315,
                "end": 1336
              },
              "start": 1305,
              "end": 1336
            },
            "start": 1302,
            "end": 1336
          }
        ],
        "start": 1296,
        "end": 1338
      },
      "expression": false,
      "start": 1262,
      "end": 1338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whileStatement18",
        "optional": false,
        "typeAnnotation": null,
        "start": 1355,
        "end": 1371
      },
      "generator": false,
      "async": true,
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
              "name": "H",
              "optional": false,
              "typeAnnotation": null,
              "start": 1380,
              "end": 1381
            },
            "body": {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1390,
                "end": 1391
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1399,
                      "end": 1400
                    },
                    "consequent": {
                      "type": "BreakStatement",
                      "label": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "H",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1408,
                        "end": 1409
                      },
                      "start": 1402,
                      "end": 1410
                    },
                    "alternate": null,
                    "start": 1395,
                    "end": 1410
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1417,
                        "end": 1418
                      },
                      "start": 1411,
                      "end": 1418
                    },
                    "directive": null,
                    "start": 1411,
                    "end": 1419
                  }
                ],
                "start": 1393,
                "end": 1421
              },
              "start": 1383,
              "end": 1421
            },
            "start": 1380,
            "end": 1421
          }
        ],
        "start": 1374,
        "end": 1423
      },
      "expression": false,
      "start": 1340,
      "end": 1423
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1423
}
```
