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
        "name": "switchStatement0",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 62
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 80
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 97,
                  "end": 98
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 101
                    },
                    "directive": null,
                    "start": 100,
                    "end": 102
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 103,
                    "end": 109
                  }
                ],
                "start": 92,
                "end": 109
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 127,
                      "end": 128
                    },
                    "directive": null,
                    "start": 127,
                    "end": 129
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 130,
                    "end": 136
                  }
                ],
                "start": 118,
                "end": 136
              }
            ],
            "start": 71,
            "end": 142
          }
        ],
        "start": 65,
        "end": 144
      },
      "expression": false,
      "start": 31,
      "end": 144
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement1",
        "optional": false,
        "typeAnnotation": null,
        "start": 161,
        "end": 177
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 200,
                "end": 201
              },
              "start": 194,
              "end": 201
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 219
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 222
                    },
                    "directive": null,
                    "start": 221,
                    "end": 223
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 224,
                    "end": 230
                  }
                ],
                "start": 213,
                "end": 230
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "directive": null,
                    "start": 248,
                    "end": 250
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 251,
                    "end": 257
                  }
                ],
                "start": 239,
                "end": 257
              }
            ],
            "start": 186,
            "end": 263
          }
        ],
        "start": 180,
        "end": 265
      },
      "expression": false,
      "start": 146,
      "end": 265
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement2",
        "optional": false,
        "typeAnnotation": null,
        "start": 282,
        "end": 298
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 316
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 340
                  },
                  "start": 333,
                  "end": 340
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 343
                    },
                    "directive": null,
                    "start": 342,
                    "end": 344
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 345,
                    "end": 351
                  }
                ],
                "start": 328,
                "end": 351
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 369,
                      "end": 370
                    },
                    "directive": null,
                    "start": 369,
                    "end": 371
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 372,
                    "end": 378
                  }
                ],
                "start": 360,
                "end": 378
              }
            ],
            "start": 307,
            "end": 384
          }
        ],
        "start": 301,
        "end": 386
      },
      "expression": false,
      "start": 267,
      "end": 386
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement3",
        "optional": false,
        "typeAnnotation": null,
        "start": 403,
        "end": 419
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 437
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 454,
                  "end": 455
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 463,
                        "end": 464
                      },
                      "start": 457,
                      "end": 464
                    },
                    "directive": null,
                    "start": 457,
                    "end": 465
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 466,
                    "end": 472
                  }
                ],
                "start": 449,
                "end": 472
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 490,
                      "end": 491
                    },
                    "directive": null,
                    "start": 490,
                    "end": 492
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 493,
                    "end": 499
                  }
                ],
                "start": 481,
                "end": 499
              }
            ],
            "start": 428,
            "end": 505
          }
        ],
        "start": 422,
        "end": 507
      },
      "expression": false,
      "start": 388,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement4",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 540
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 557,
              "end": 558
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 576
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 578,
                      "end": 579
                    },
                    "directive": null,
                    "start": 578,
                    "end": 580
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 581,
                    "end": 587
                  }
                ],
                "start": 570,
                "end": 587
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AwaitExpression",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 611,
                        "end": 612
                      },
                      "start": 605,
                      "end": 612
                    },
                    "directive": null,
                    "start": 605,
                    "end": 613
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 614,
                    "end": 620
                  }
                ],
                "start": 596,
                "end": 620
              }
            ],
            "start": 549,
            "end": 626
          }
        ],
        "start": 543,
        "end": 628
      },
      "expression": false,
      "start": 509,
      "end": 628
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement5",
        "optional": false,
        "typeAnnotation": null,
        "start": 645,
        "end": 661
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 678,
              "end": 679
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 696,
                  "end": 697
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 700
                    },
                    "directive": null,
                    "start": 699,
                    "end": 701
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 702,
                    "end": 708
                  }
                ],
                "start": 691,
                "end": 708
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 728,
                    "end": 729
                  },
                  "start": 722,
                  "end": 729
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 731,
                      "end": 732
                    },
                    "directive": null,
                    "start": 731,
                    "end": 733
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 734,
                    "end": 740
                  }
                ],
                "start": 717,
                "end": 740
              }
            ],
            "start": 670,
            "end": 746
          }
        ],
        "start": 664,
        "end": 748
      },
      "expression": false,
      "start": 630,
      "end": 748
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement6",
        "optional": false,
        "typeAnnotation": null,
        "start": 765,
        "end": 781
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 798,
              "end": 799
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 820,
                      "end": 821
                    },
                    "directive": null,
                    "start": 820,
                    "end": 822
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 823,
                    "end": 829
                  }
                ],
                "start": 811,
                "end": 829
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 849,
                    "end": 850
                  },
                  "start": 843,
                  "end": 850
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 852,
                      "end": 853
                    },
                    "directive": null,
                    "start": 852,
                    "end": 854
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 855,
                    "end": 861
                  }
                ],
                "start": 838,
                "end": 861
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 876
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 878,
                      "end": 879
                    },
                    "directive": null,
                    "start": 878,
                    "end": 880
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 881,
                    "end": 887
                  }
                ],
                "start": 870,
                "end": 887
              }
            ],
            "start": 790,
            "end": 893
          }
        ],
        "start": 784,
        "end": 895
      },
      "expression": false,
      "start": 750,
      "end": 895
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement7",
        "optional": false,
        "typeAnnotation": null,
        "start": 912,
        "end": 928
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 946
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 967,
                      "end": 968
                    },
                    "directive": null,
                    "start": 967,
                    "end": 969
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 970,
                    "end": 976
                  }
                ],
                "start": 958,
                "end": 976
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 990,
                  "end": 991
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 993,
                      "end": 994
                    },
                    "directive": null,
                    "start": 993,
                    "end": 995
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 996,
                    "end": 1002
                  }
                ],
                "start": 985,
                "end": 1002
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1022,
                    "end": 1023
                  },
                  "start": 1016,
                  "end": 1023
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1025,
                      "end": 1026
                    },
                    "directive": null,
                    "start": 1025,
                    "end": 1027
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1028,
                    "end": 1034
                  }
                ],
                "start": 1011,
                "end": 1034
              }
            ],
            "start": 937,
            "end": 1040
          }
        ],
        "start": 931,
        "end": 1042
      },
      "expression": false,
      "start": 897,
      "end": 1042
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchStatement8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1059,
        "end": 1075
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
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1092,
              "end": 1093
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1114,
                      "end": 1115
                    },
                    "directive": null,
                    "start": 1114,
                    "end": 1116
                  }
                ],
                "start": 1105,
                "end": 1116
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1130,
                  "end": 1131
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1133,
                      "end": 1134
                    },
                    "directive": null,
                    "start": 1133,
                    "end": 1135
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1136,
                    "end": 1142
                  }
                ],
                "start": 1125,
                "end": 1142
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1162,
                    "end": 1163
                  },
                  "start": 1156,
                  "end": 1163
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1165,
                      "end": 1166
                    },
                    "directive": null,
                    "start": 1165,
                    "end": 1167
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 1168,
                    "end": 1174
                  }
                ],
                "start": 1151,
                "end": 1174
              }
            ],
            "start": 1084,
            "end": 1180
          }
        ],
        "start": 1078,
        "end": 1182
      },
      "expression": false,
      "start": 1044,
      "end": 1182
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1182
}
```
