__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1752,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 16,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 15,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 8,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 11,
            "end": 15,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 54,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 65,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 68,
        "end": 211,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 74,
            "end": 80,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 79,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 85,
            "end": 117,
            "test": {
              "type": "Identifier",
              "start": 89,
              "end": 93,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 95,
              "end": 117,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 105,
                  "end": 111,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 105,
                    "end": 110,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 105,
                      "end": 106,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 109,
                      "end": 110,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 122,
            "end": 160,
            "test": {
              "type": "Identifier",
              "start": 126,
              "end": 130,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 132,
              "end": 160,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 142,
                  "end": 154,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 142,
                    "end": 153,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 146,
                      "end": 153,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 165,
            "end": 177,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 171,
                "end": 176,
                "id": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 175,
                  "end": 176,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 258,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 267,
        "end": 269,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 272,
        "end": 427,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 278,
            "end": 296,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 282,
                "end": 295,
                "id": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 301,
            "end": 333,
            "test": {
              "type": "Identifier",
              "start": 305,
              "end": 309,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 311,
              "end": 333,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 321,
                  "end": 327,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 321,
                    "end": 326,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 321,
                      "end": 322,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 325,
                      "end": 326,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 338,
            "end": 376,
            "test": {
              "type": "Identifier",
              "start": 342,
              "end": 346,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 348,
              "end": 376,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 358,
                  "end": 370,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 358,
                    "end": 369,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 358,
                      "end": 359,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 362,
                      "end": 369,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 381,
            "end": 393,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 387,
                "end": 392,
                "id": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 469,
      "end": 628,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 480,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 483,
        "end": 628,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 489,
            "end": 502,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 493,
                "end": 501,
                "id": {
                  "type": "Identifier",
                  "start": 493,
                  "end": 494,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 497,
                  "end": 501,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 507,
            "end": 539,
            "test": {
              "type": "Identifier",
              "start": 511,
              "end": 515,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 517,
              "end": 539,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 527,
                  "end": 533,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 527,
                    "end": 532,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 531,
                      "end": 532,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 544,
            "end": 582,
            "test": {
              "type": "Identifier",
              "start": 548,
              "end": 552,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 554,
              "end": 582,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 564,
                  "end": 576,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 564,
                    "end": 575,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 564,
                      "end": 565,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 568,
                      "end": 575,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 587,
            "end": 599,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 593,
                "end": 598,
                "id": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 594,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 598,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 667,
      "end": 824,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 678,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 681,
        "end": 824,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 687,
            "end": 693,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 691,
                "end": 692,
                "id": {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 698,
            "end": 730,
            "test": {
              "type": "Identifier",
              "start": 702,
              "end": 706,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 708,
              "end": 730,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 718,
                  "end": 724,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 718,
                    "end": 723,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 718,
                      "end": 719,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 722,
                      "end": 723,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 735,
            "end": 773,
            "test": {
              "type": "Identifier",
              "start": 739,
              "end": 743,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 745,
              "end": 773,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 755,
                  "end": 767,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 755,
                    "end": 766,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 755,
                      "end": 756,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 759,
                      "end": 766,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 778,
            "end": 790,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 784,
                "end": 789,
                "id": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 785,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 788,
                  "end": 789,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 872,
      "end": 1041,
      "id": {
        "type": "Identifier",
        "start": 881,
        "end": 883,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 886,
        "end": 1041,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 892,
            "end": 910,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 896,
                "end": 909,
                "id": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 897,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 900,
                  "end": 909,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 915,
            "end": 947,
            "test": {
              "type": "Identifier",
              "start": 919,
              "end": 923,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 925,
              "end": 947,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 935,
                  "end": 941,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 935,
                    "end": 940,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 935,
                      "end": 936,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 939,
                      "end": 940,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 952,
            "end": 990,
            "test": {
              "type": "Identifier",
              "start": 956,
              "end": 960,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 962,
              "end": 990,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 972,
                  "end": 984,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 972,
                    "end": 983,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 972,
                      "end": 973,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 976,
                      "end": 983,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 995,
            "end": 1007,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1001,
                "end": 1006,
                "id": {
                  "type": "Identifier",
                  "start": 1001,
                  "end": 1002,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1005,
                  "end": 1006,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1084,
      "end": 1243,
      "id": {
        "type": "Identifier",
        "start": 1093,
        "end": 1095,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1098,
        "end": 1243,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1104,
            "end": 1117,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1108,
                "end": 1116,
                "id": {
                  "type": "Identifier",
                  "start": 1108,
                  "end": 1109,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1112,
                  "end": 1116,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1122,
            "end": 1154,
            "test": {
              "type": "Identifier",
              "start": 1126,
              "end": 1130,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1132,
              "end": 1154,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1142,
                  "end": 1148,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1142,
                    "end": 1147,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1142,
                      "end": 1143,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1146,
                      "end": 1147,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1159,
            "end": 1197,
            "test": {
              "type": "Identifier",
              "start": 1163,
              "end": 1167,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1169,
              "end": 1197,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1179,
                  "end": 1191,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1179,
                    "end": 1190,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1179,
                      "end": 1180,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1183,
                      "end": 1190,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1202,
            "end": 1214,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1208,
                "end": 1213,
                "id": {
                  "type": "Identifier",
                  "start": 1208,
                  "end": 1209,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1213,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1284,
      "end": 1495,
      "id": {
        "type": "Identifier",
        "start": 1293,
        "end": 1295,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1298,
        "end": 1495,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1304,
            "end": 1310,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1308,
                "end": 1309,
                "id": {
                  "type": "Identifier",
                  "start": 1308,
                  "end": 1309,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1315,
            "end": 1347,
            "test": {
              "type": "Identifier",
              "start": 1319,
              "end": 1323,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1325,
              "end": 1347,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1335,
                  "end": 1341,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1335,
                    "end": 1340,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1335,
                      "end": 1336,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1339,
                      "end": 1340,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1352,
            "end": 1390,
            "test": {
              "type": "Identifier",
              "start": 1356,
              "end": 1360,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1362,
              "end": 1390,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1372,
                  "end": 1384,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1372,
                    "end": 1383,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1372,
                      "end": 1373,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1376,
                      "end": 1383,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1395,
            "end": 1407,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1401,
                "end": 1406,
                "id": {
                  "type": "Identifier",
                  "start": 1401,
                  "end": 1402,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1405,
                  "end": 1406,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1444,
            "end": 1493,
            "id": {
              "type": "Identifier",
              "start": 1453,
              "end": 1454,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1457,
              "end": 1493,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1467,
                  "end": 1479,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1473,
                      "end": 1478,
                      "id": {
                        "type": "Identifier",
                        "start": 1473,
                        "end": 1474,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1477,
                        "end": 1478,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1536,
      "end": 1752,
      "id": {
        "type": "Identifier",
        "start": 1545,
        "end": 1548,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1551,
        "end": 1752,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1557,
            "end": 1563,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1561,
                "end": 1562,
                "id": {
                  "type": "Identifier",
                  "start": 1561,
                  "end": 1562,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1568,
            "end": 1600,
            "test": {
              "type": "Identifier",
              "start": 1572,
              "end": 1576,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1578,
              "end": 1600,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1588,
                  "end": 1594,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1588,
                    "end": 1593,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1588,
                      "end": 1589,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1592,
                      "end": 1593,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1605,
            "end": 1643,
            "test": {
              "type": "Identifier",
              "start": 1609,
              "end": 1613,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1615,
              "end": 1643,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1625,
                  "end": 1637,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1625,
                    "end": 1636,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1625,
                      "end": 1626,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1629,
                      "end": 1636,
                      "value": "hello",
                      "raw": "\"hello\""
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 1648,
            "end": 1660,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1654,
                "end": 1659,
                "id": {
                  "type": "Identifier",
                  "start": 1654,
                  "end": 1655,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 1658,
                  "end": 1659,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1697,
            "end": 1750,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1703,
                "end": 1749,
                "id": {
                  "type": "Identifier",
                  "start": 1703,
                  "end": 1704,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 1707,
                  "end": 1749,
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1713,
                    "end": 1749,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 1723,
                        "end": 1735,
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1729,
                            "end": 1734,
                            "id": {
                              "type": "Identifier",
                              "start": 1729,
                              "end": 1730,
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 1733,
                              "end": 1734,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "definite": false
                          }
                        ],
                        "declare": false
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
