__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              },
              "start": 16,
              "end": 25
            },
            "start": 12,
            "end": 25
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 25
        }
      ],
      "declare": true,
      "start": 0,
      "end": 26
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "init": null,
                "definite": false,
                "start": 109,
                "end": 110
              }
            ],
            "declare": false,
            "start": 105,
            "end": 111
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 124
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 136,
                      "end": 137
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 140,
                      "end": 141
                    },
                    "start": 136,
                    "end": 141
                  },
                  "directive": null,
                  "start": 136,
                  "end": 142
                }
              ],
              "start": 126,
              "end": 148
            },
            "alternate": null,
            "start": 116,
            "end": 148
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 161
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 174
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 177,
                      "end": 184
                    },
                    "start": 173,
                    "end": 184
                  },
                  "directive": null,
                  "start": 173,
                  "end": 185
                }
              ],
              "start": 163,
              "end": 191
            },
            "alternate": null,
            "start": 153,
            "end": 191
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 207
                },
                "definite": false,
                "start": 202,
                "end": 207
              }
            ],
            "declare": false,
            "start": 196,
            "end": 208
          }
        ],
        "start": 99,
        "end": 242
      },
      "expression": false,
      "start": 85,
      "end": 242
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 322,
        "end": 324
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 338
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 350
                },
                "definite": false,
                "start": 337,
                "end": 350
              }
            ],
            "declare": false,
            "start": 333,
            "end": 351
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 360,
              "end": 364
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 376,
                      "end": 377
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 380,
                      "end": 381
                    },
                    "start": 376,
                    "end": 381
                  },
                  "directive": null,
                  "start": 376,
                  "end": 382
                }
              ],
              "start": 366,
              "end": 388
            },
            "alternate": null,
            "start": 356,
            "end": 388
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 401
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 414
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 417,
                      "end": 424
                    },
                    "start": 413,
                    "end": 424
                  },
                  "directive": null,
                  "start": 413,
                  "end": 425
                }
              ],
              "start": 403,
              "end": 431
            },
            "alternate": null,
            "start": 393,
            "end": 431
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 443
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 447
                },
                "definite": false,
                "start": 442,
                "end": 447
              }
            ],
            "declare": false,
            "start": 436,
            "end": 448
          }
        ],
        "start": 327,
        "end": 482
      },
      "expression": false,
      "start": 313,
      "end": 482
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 559
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 573
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 576,
                  "end": 580
                },
                "definite": false,
                "start": 572,
                "end": 580
              }
            ],
            "declare": false,
            "start": 568,
            "end": 581
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 590,
              "end": 594
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 606,
                      "end": 607
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 610,
                      "end": 611
                    },
                    "start": 606,
                    "end": 611
                  },
                  "directive": null,
                  "start": 606,
                  "end": 612
                }
              ],
              "start": 596,
              "end": 618
            },
            "alternate": null,
            "start": 586,
            "end": 618
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 631
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 643,
                      "end": 644
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 647,
                      "end": 654
                    },
                    "start": 643,
                    "end": 654
                  },
                  "directive": null,
                  "start": 643,
                  "end": 655
                }
              ],
              "start": 633,
              "end": 661
            },
            "alternate": null,
            "start": 623,
            "end": 661
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 672,
                  "end": 673
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 676,
                  "end": 677
                },
                "definite": false,
                "start": 672,
                "end": 677
              }
            ],
            "declare": false,
            "start": 666,
            "end": 678
          }
        ],
        "start": 562,
        "end": 707
      },
      "expression": false,
      "start": 548,
      "end": 707
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 764,
        "end": 766
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 782,
                      "end": 785
                    },
                    "start": 780,
                    "end": 785
                  },
                  "start": 779,
                  "end": 785
                },
                "init": null,
                "definite": false,
                "start": 779,
                "end": 785
              }
            ],
            "declare": false,
            "start": 775,
            "end": 786
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 799
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 812
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 815,
                      "end": 816
                    },
                    "start": 811,
                    "end": 816
                  },
                  "directive": null,
                  "start": 811,
                  "end": 817
                }
              ],
              "start": 801,
              "end": 823
            },
            "alternate": null,
            "start": 791,
            "end": 823
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 832,
              "end": 836
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 848,
                      "end": 849
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 852,
                      "end": 859
                    },
                    "start": 848,
                    "end": 859
                  },
                  "directive": null,
                  "start": 848,
                  "end": 860
                }
              ],
              "start": 838,
              "end": 866
            },
            "alternate": null,
            "start": 828,
            "end": 866
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 877,
                  "end": 878
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 881,
                  "end": 882
                },
                "definite": false,
                "start": 877,
                "end": 882
              }
            ],
            "declare": false,
            "start": 871,
            "end": 883
          }
        ],
        "start": 769,
        "end": 893
      },
      "expression": false,
      "start": 755,
      "end": 893
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 961,
        "end": 963
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 976,
                  "end": 977
                },
                "init": null,
                "definite": false,
                "start": 976,
                "end": 977
              }
            ],
            "declare": false,
            "start": 972,
            "end": 978
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 987,
              "end": 991
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1003,
                      "end": 1004
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1007,
                      "end": 1008
                    },
                    "start": 1003,
                    "end": 1008
                  },
                  "directive": null,
                  "start": 1003,
                  "end": 1009
                }
              ],
              "start": 993,
              "end": 1015
            },
            "alternate": null,
            "start": 983,
            "end": 1015
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1028
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1040,
                      "end": 1041
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1044,
                      "end": 1051
                    },
                    "start": 1040,
                    "end": 1051
                  },
                  "directive": null,
                  "start": 1040,
                  "end": 1052
                }
              ],
              "start": 1030,
              "end": 1058
            },
            "alternate": null,
            "start": 1020,
            "end": 1058
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1069,
                  "end": 1070
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1073,
                  "end": 1074
                },
                "definite": false,
                "start": 1069,
                "end": 1074
              }
            ],
            "declare": false,
            "start": 1063,
            "end": 1075
          }
        ],
        "start": 966,
        "end": 1109
      },
      "expression": false,
      "start": 952,
      "end": 1109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1189,
        "end": 1191
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1204,
                  "end": 1205
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1208,
                  "end": 1217
                },
                "definite": false,
                "start": 1204,
                "end": 1217
              }
            ],
            "declare": false,
            "start": 1200,
            "end": 1218
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1227,
              "end": 1231
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1243,
                      "end": 1244
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1247,
                      "end": 1248
                    },
                    "start": 1243,
                    "end": 1248
                  },
                  "directive": null,
                  "start": 1243,
                  "end": 1249
                }
              ],
              "start": 1233,
              "end": 1255
            },
            "alternate": null,
            "start": 1223,
            "end": 1255
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1264,
              "end": 1268
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1281
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1284,
                      "end": 1291
                    },
                    "start": 1280,
                    "end": 1291
                  },
                  "directive": null,
                  "start": 1280,
                  "end": 1292
                }
              ],
              "start": 1270,
              "end": 1298
            },
            "alternate": null,
            "start": 1260,
            "end": 1298
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1309,
                  "end": 1310
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1313,
                  "end": 1314
                },
                "definite": false,
                "start": 1309,
                "end": 1314
              }
            ],
            "declare": false,
            "start": 1303,
            "end": 1315
          }
        ],
        "start": 1194,
        "end": 1349
      },
      "expression": false,
      "start": 1180,
      "end": 1349
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1426
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1439,
                  "end": 1440
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 1443,
                  "end": 1447
                },
                "definite": false,
                "start": 1439,
                "end": 1447
              }
            ],
            "declare": false,
            "start": 1435,
            "end": 1448
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1457,
              "end": 1461
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1473,
                      "end": 1474
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1477,
                      "end": 1478
                    },
                    "start": 1473,
                    "end": 1478
                  },
                  "directive": null,
                  "start": 1473,
                  "end": 1479
                }
              ],
              "start": 1463,
              "end": 1485
            },
            "alternate": null,
            "start": 1453,
            "end": 1485
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1494,
              "end": 1498
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1510,
                      "end": 1511
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1514,
                      "end": 1521
                    },
                    "start": 1510,
                    "end": 1521
                  },
                  "directive": null,
                  "start": 1510,
                  "end": 1522
                }
              ],
              "start": 1500,
              "end": 1528
            },
            "alternate": null,
            "start": 1490,
            "end": 1528
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1539,
                  "end": 1540
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1543,
                  "end": 1544
                },
                "definite": false,
                "start": 1539,
                "end": 1544
              }
            ],
            "declare": false,
            "start": 1533,
            "end": 1545
          }
        ],
        "start": 1429,
        "end": 1574
      },
      "expression": false,
      "start": 1415,
      "end": 1574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1631,
        "end": 1633
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1649,
                      "end": 1652
                    },
                    "start": 1647,
                    "end": 1652
                  },
                  "start": 1646,
                  "end": 1652
                },
                "init": null,
                "definite": false,
                "start": 1646,
                "end": 1652
              }
            ],
            "declare": false,
            "start": 1642,
            "end": 1653
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1662,
              "end": 1666
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1678,
                      "end": 1679
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1682,
                      "end": 1683
                    },
                    "start": 1678,
                    "end": 1683
                  },
                  "directive": null,
                  "start": 1678,
                  "end": 1684
                }
              ],
              "start": 1668,
              "end": 1690
            },
            "alternate": null,
            "start": 1658,
            "end": 1690
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1699,
              "end": 1703
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1715,
                      "end": 1716
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1719,
                      "end": 1726
                    },
                    "start": 1715,
                    "end": 1726
                  },
                  "directive": null,
                  "start": 1715,
                  "end": 1727
                }
              ],
              "start": 1705,
              "end": 1733
            },
            "alternate": null,
            "start": 1695,
            "end": 1733
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1744,
                  "end": 1745
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1748,
                  "end": 1749
                },
                "definite": false,
                "start": 1744,
                "end": 1749
              }
            ],
            "declare": false,
            "start": 1738,
            "end": 1750
          }
        ],
        "start": 1636,
        "end": 1760
      },
      "expression": false,
      "start": 1622,
      "end": 1760
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1810,
        "end": 1812
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1825,
                  "end": 1826
                },
                "init": null,
                "definite": false,
                "start": 1825,
                "end": 1826
              }
            ],
            "declare": false,
            "start": 1821,
            "end": 1827
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1836,
              "end": 1840
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1852,
                      "end": 1853
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1856,
                      "end": 1857
                    },
                    "start": 1852,
                    "end": 1857
                  },
                  "directive": null,
                  "start": 1852,
                  "end": 1858
                }
              ],
              "start": 1842,
              "end": 1864
            },
            "alternate": null,
            "start": 1832,
            "end": 1864
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 1873,
              "end": 1877
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1889,
                      "end": 1890
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 1893,
                      "end": 1900
                    },
                    "start": 1889,
                    "end": 1900
                  },
                  "directive": null,
                  "start": 1889,
                  "end": 1901
                }
              ],
              "start": 1879,
              "end": 1907
            },
            "alternate": null,
            "start": 1869,
            "end": 1907
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1918,
                  "end": 1919
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1922,
                  "end": 1923
                },
                "definite": false,
                "start": 1918,
                "end": 1923
              }
            ],
            "declare": false,
            "start": 1912,
            "end": 1924
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 1970,
              "end": 1971
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
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1990,
                        "end": 1991
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1994,
                        "end": 1995
                      },
                      "definite": false,
                      "start": 1990,
                      "end": 1995
                    }
                  ],
                  "declare": false,
                  "start": 1984,
                  "end": 1996
                }
              ],
              "start": 1974,
              "end": 2010
            },
            "expression": false,
            "start": 1961,
            "end": 2010
          }
        ],
        "start": 1815,
        "end": 2012
      },
      "expression": false,
      "start": 1801,
      "end": 2012
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 2062,
        "end": 2065
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2078,
                  "end": 2079
                },
                "init": null,
                "definite": false,
                "start": 2078,
                "end": 2079
              }
            ],
            "declare": false,
            "start": 2074,
            "end": 2080
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 2089,
              "end": 2093
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2105,
                      "end": 2106
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2109,
                      "end": 2110
                    },
                    "start": 2105,
                    "end": 2110
                  },
                  "directive": null,
                  "start": 2105,
                  "end": 2111
                }
              ],
              "start": 2095,
              "end": 2117
            },
            "alternate": null,
            "start": 2085,
            "end": 2117
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 2126,
              "end": 2130
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2142,
                      "end": 2143
                    },
                    "right": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "\"hello\"",
                      "start": 2146,
                      "end": 2153
                    },
                    "start": 2142,
                    "end": 2153
                  },
                  "directive": null,
                  "start": 2142,
                  "end": 2154
                }
              ],
              "start": 2132,
              "end": 2160
            },
            "alternate": null,
            "start": 2122,
            "end": 2160
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2171,
                  "end": 2172
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2175,
                  "end": 2176
                },
                "definite": false,
                "start": 2171,
                "end": 2176
              }
            ],
            "declare": false,
            "start": 2165,
            "end": 2177
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2220,
                  "end": 2221
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
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2246,
                              "end": 2247
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2250,
                              "end": 2251
                            },
                            "definite": false,
                            "start": 2246,
                            "end": 2251
                          }
                        ],
                        "declare": false,
                        "start": 2240,
                        "end": 2252
                      }
                    ],
                    "start": 2230,
                    "end": 2266
                  },
                  "id": null,
                  "generator": false,
                  "start": 2224,
                  "end": 2266
                },
                "definite": false,
                "start": 2220,
                "end": 2266
              }
            ],
            "declare": false,
            "start": 2214,
            "end": 2267
          }
        ],
        "start": 2068,
        "end": 2269
      },
      "expression": false,
      "start": 2053,
      "end": 2269
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2269
}
```
