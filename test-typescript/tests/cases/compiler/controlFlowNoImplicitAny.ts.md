__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2269,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 25,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 16,
              "end": 25,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 18,
                "end": 25
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 242,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 96,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 242,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 105,
            "end": 111,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 109,
                "end": 110,
                "id": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 116,
            "end": 148,
            "test": {
              "type": "Identifier",
              "start": 120,
              "end": 124,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 126,
              "end": 148,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 136,
                  "end": 142,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 136,
                    "end": 141,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 137,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 140,
                      "end": 141,
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
            "start": 153,
            "end": 191,
            "test": {
              "type": "Identifier",
              "start": 157,
              "end": 161,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 163,
              "end": 191,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 173,
                  "end": 185,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 173,
                    "end": 184,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 173,
                      "end": 174,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 177,
                      "end": 184,
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
            "start": 196,
            "end": 208,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 202,
                "end": 207,
                "id": {
                  "type": "Identifier",
                  "start": 202,
                  "end": 203,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 206,
                  "end": 207,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 313,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 322,
        "end": 324,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 327,
        "end": 482,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 333,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 350,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 338,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 350,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 356,
            "end": 388,
            "test": {
              "type": "Identifier",
              "start": 360,
              "end": 364,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 366,
              "end": 388,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 376,
                  "end": 382,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 376,
                    "end": 381,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 376,
                      "end": 377,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 380,
                      "end": 381,
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
            "start": 393,
            "end": 431,
            "test": {
              "type": "Identifier",
              "start": 397,
              "end": 401,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 403,
              "end": 431,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 413,
                  "end": 425,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 413,
                    "end": 424,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 414,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 417,
                      "end": 424,
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
            "start": 436,
            "end": 448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 442,
                "end": 447,
                "id": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 443,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 548,
      "end": 707,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 559,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 562,
        "end": 707,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 568,
            "end": 581,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 572,
                "end": 580,
                "id": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 573,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 576,
                  "end": 580,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 586,
            "end": 618,
            "test": {
              "type": "Identifier",
              "start": 590,
              "end": 594,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 596,
              "end": 618,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 606,
                  "end": 612,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 606,
                    "end": 611,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 606,
                      "end": 607,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 610,
                      "end": 611,
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
            "start": 623,
            "end": 661,
            "test": {
              "type": "Identifier",
              "start": 627,
              "end": 631,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 633,
              "end": 661,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 643,
                  "end": 655,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 643,
                    "end": 654,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 647,
                      "end": 654,
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
            "start": 666,
            "end": 678,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 672,
                "end": 677,
                "id": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 676,
                  "end": 677,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 755,
      "end": 893,
      "id": {
        "type": "Identifier",
        "start": 764,
        "end": 766,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 769,
        "end": 893,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 775,
            "end": 786,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 779,
                "end": 785,
                "id": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 785,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 780,
                    "end": 785,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 782,
                      "end": 785
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 791,
            "end": 823,
            "test": {
              "type": "Identifier",
              "start": 795,
              "end": 799,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 801,
              "end": 823,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 811,
                  "end": 817,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 811,
                    "end": 816,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 812,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 815,
                      "end": 816,
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
            "start": 828,
            "end": 866,
            "test": {
              "type": "Identifier",
              "start": 832,
              "end": 836,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 838,
              "end": 866,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 848,
                  "end": 860,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 848,
                    "end": 859,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 848,
                      "end": 849,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 852,
                      "end": 859,
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
            "start": 871,
            "end": 883,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 877,
                "end": 882,
                "id": {
                  "type": "Identifier",
                  "start": 877,
                  "end": 878,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 882,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 952,
      "end": 1109,
      "id": {
        "type": "Identifier",
        "start": 961,
        "end": 963,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 966,
        "end": 1109,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 972,
            "end": 978,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 976,
                "end": 977,
                "id": {
                  "type": "Identifier",
                  "start": 976,
                  "end": 977,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 983,
            "end": 1015,
            "test": {
              "type": "Identifier",
              "start": 987,
              "end": 991,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 993,
              "end": 1015,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1003,
                  "end": 1009,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1003,
                    "end": 1008,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1003,
                      "end": 1004,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1007,
                      "end": 1008,
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
            "start": 1020,
            "end": 1058,
            "test": {
              "type": "Identifier",
              "start": 1024,
              "end": 1028,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1030,
              "end": 1058,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1040,
                  "end": 1052,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1040,
                    "end": 1051,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1040,
                      "end": 1041,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1044,
                      "end": 1051,
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
            "start": 1063,
            "end": 1075,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1069,
                "end": 1074,
                "id": {
                  "type": "Identifier",
                  "start": 1069,
                  "end": 1070,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1073,
                  "end": 1074,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1180,
      "end": 1349,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1191,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1194,
        "end": 1349,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1200,
            "end": 1218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1204,
                "end": 1217,
                "id": {
                  "type": "Identifier",
                  "start": 1204,
                  "end": 1205,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1208,
                  "end": 1217,
                  "name": "undefined",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1223,
            "end": 1255,
            "test": {
              "type": "Identifier",
              "start": 1227,
              "end": 1231,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1233,
              "end": 1255,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1243,
                  "end": 1249,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1243,
                    "end": 1248,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1243,
                      "end": 1244,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1247,
                      "end": 1248,
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
            "start": 1260,
            "end": 1298,
            "test": {
              "type": "Identifier",
              "start": 1264,
              "end": 1268,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1270,
              "end": 1298,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1280,
                  "end": 1292,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1280,
                    "end": 1291,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1280,
                      "end": 1281,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1284,
                      "end": 1291,
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
            "start": 1303,
            "end": 1315,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1309,
                "end": 1314,
                "id": {
                  "type": "Identifier",
                  "start": 1309,
                  "end": 1310,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1314,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1415,
      "end": 1574,
      "id": {
        "type": "Identifier",
        "start": 1424,
        "end": 1426,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1429,
        "end": 1574,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1435,
            "end": 1448,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1439,
                "end": 1447,
                "id": {
                  "type": "Identifier",
                  "start": 1439,
                  "end": 1440,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1443,
                  "end": 1447,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1453,
            "end": 1485,
            "test": {
              "type": "Identifier",
              "start": 1457,
              "end": 1461,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1463,
              "end": 1485,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1473,
                  "end": 1479,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1473,
                    "end": 1478,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1473,
                      "end": 1474,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1477,
                      "end": 1478,
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
            "start": 1490,
            "end": 1528,
            "test": {
              "type": "Identifier",
              "start": 1494,
              "end": 1498,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1500,
              "end": 1528,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1510,
                  "end": 1522,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1510,
                    "end": 1521,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1510,
                      "end": 1511,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1514,
                      "end": 1521,
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
            "start": 1533,
            "end": 1545,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1539,
                "end": 1544,
                "id": {
                  "type": "Identifier",
                  "start": 1539,
                  "end": 1540,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1543,
                  "end": 1544,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1622,
      "end": 1760,
      "id": {
        "type": "Identifier",
        "start": 1631,
        "end": 1633,
        "name": "f8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1636,
        "end": 1760,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1642,
            "end": 1653,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1646,
                "end": 1652,
                "id": {
                  "type": "Identifier",
                  "start": 1646,
                  "end": 1652,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1647,
                    "end": 1652,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1649,
                      "end": 1652
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1658,
            "end": 1690,
            "test": {
              "type": "Identifier",
              "start": 1662,
              "end": 1666,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1668,
              "end": 1690,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1678,
                  "end": 1684,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1678,
                    "end": 1683,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1678,
                      "end": 1679,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1682,
                      "end": 1683,
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
            "start": 1695,
            "end": 1733,
            "test": {
              "type": "Identifier",
              "start": 1699,
              "end": 1703,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1705,
              "end": 1733,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1715,
                  "end": 1727,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1715,
                    "end": 1726,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1715,
                      "end": 1716,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1719,
                      "end": 1726,
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
            "start": 1738,
            "end": 1750,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1744,
                "end": 1749,
                "id": {
                  "type": "Identifier",
                  "start": 1744,
                  "end": 1745,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1748,
                  "end": 1749,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1801,
      "end": 2012,
      "id": {
        "type": "Identifier",
        "start": 1810,
        "end": 1812,
        "name": "f9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1815,
        "end": 2012,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1821,
            "end": 1827,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1825,
                "end": 1826,
                "id": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1826,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 1832,
            "end": 1864,
            "test": {
              "type": "Identifier",
              "start": 1836,
              "end": 1840,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1842,
              "end": 1864,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1852,
                  "end": 1858,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1852,
                    "end": 1857,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1852,
                      "end": 1853,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1856,
                      "end": 1857,
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
            "start": 1869,
            "end": 1907,
            "test": {
              "type": "Identifier",
              "start": 1873,
              "end": 1877,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1879,
              "end": 1907,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1889,
                  "end": 1901,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1889,
                    "end": 1900,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1889,
                      "end": 1890,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1893,
                      "end": 1900,
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
            "start": 1912,
            "end": 1924,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1918,
                "end": 1923,
                "id": {
                  "type": "Identifier",
                  "start": 1918,
                  "end": 1919,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 1922,
                  "end": 1923,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 1961,
            "end": 2010,
            "id": {
              "type": "Identifier",
              "start": 1970,
              "end": 1971,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 1974,
              "end": 2010,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1984,
                  "end": 1996,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1990,
                      "end": 1995,
                      "id": {
                        "type": "Identifier",
                        "start": 1990,
                        "end": 1991,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1994,
                        "end": 1995,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2053,
      "end": 2269,
      "id": {
        "type": "Identifier",
        "start": 2062,
        "end": 2065,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2068,
        "end": 2269,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2074,
            "end": 2080,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2078,
                "end": 2079,
                "id": {
                  "type": "Identifier",
                  "start": 2078,
                  "end": 2079,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 2085,
            "end": 2117,
            "test": {
              "type": "Identifier",
              "start": 2089,
              "end": 2093,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2095,
              "end": 2117,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2105,
                  "end": 2111,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2105,
                    "end": 2110,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2105,
                      "end": 2106,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2109,
                      "end": 2110,
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
            "start": 2122,
            "end": 2160,
            "test": {
              "type": "Identifier",
              "start": 2126,
              "end": 2130,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2132,
              "end": 2160,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2142,
                  "end": 2154,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 2142,
                    "end": 2153,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 2142,
                      "end": 2143,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 2146,
                      "end": 2153,
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
            "start": 2165,
            "end": 2177,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2171,
                "end": 2176,
                "id": {
                  "type": "Identifier",
                  "start": 2171,
                  "end": 2172,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Identifier",
                  "start": 2175,
                  "end": 2176,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2214,
            "end": 2267,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2220,
                "end": 2266,
                "id": {
                  "type": "Identifier",
                  "start": 2220,
                  "end": 2221,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2224,
                  "end": 2266,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2230,
                    "end": 2266,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 2240,
                        "end": 2252,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2246,
                            "end": 2251,
                            "id": {
                              "type": "Identifier",
                              "start": 2246,
                              "end": 2247,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "Identifier",
                              "start": 2250,
                              "end": 2251,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
