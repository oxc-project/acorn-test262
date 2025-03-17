__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 3361,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 11,
      "end": 158,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 20,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "right": {
        "type": "ArrayExpression",
        "start": 25,
        "end": 27,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 158,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 35,
            "end": 60,
            "expression": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 58,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 58,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 49,
                    "end": 57,
                    "argument": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 57,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 75,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 66,
              "end": 73,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 80,
            "end": 114,
            "test": {
              "type": "BinaryExpression",
              "start": 84,
              "end": 90,
              "left": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 92,
              "end": 114,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 102,
                  "end": 108,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 119,
            "end": 156,
            "test": {
              "type": "BinaryExpression",
              "start": 123,
              "end": 129,
              "left": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 131,
              "end": 156,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 141,
                  "end": 150,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 160,
      "end": 311,
      "left": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 170,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 169,
            "end": 170,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
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
      "right": {
        "type": "ArrayExpression",
        "start": 174,
        "end": 176,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 184,
            "end": 209,
            "expression": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 207,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 196,
                "end": 207,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 198,
                    "end": 206,
                    "argument": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 224,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 215,
              "end": 222,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 229,
            "end": 265,
            "test": {
              "type": "BinaryExpression",
              "start": 233,
              "end": 241,
              "left": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 241,
                "value": "1",
                "raw": "\"1\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 243,
              "end": 265,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 253,
                  "end": 259,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 270,
            "end": 309,
            "test": {
              "type": "BinaryExpression",
              "start": 274,
              "end": 282,
              "left": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 279,
                "end": 282,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 284,
              "end": 309,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 294,
                  "end": 303,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 314,
      "end": 471,
      "init": {
        "type": "VariableDeclaration",
        "start": 319,
        "end": 328,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 323,
            "end": 328,
            "id": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 327,
              "end": 328,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 330,
        "end": 335,
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 334,
          "end": 335,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 337,
        "end": 340,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 471,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 348,
            "end": 373,
            "expression": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 371,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 360,
                "end": 371,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 362,
                    "end": 370,
                    "argument": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 388,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 379,
              "end": 386,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 393,
            "end": 427,
            "test": {
              "type": "BinaryExpression",
              "start": 397,
              "end": 403,
              "left": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 402,
                "end": 403,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 405,
              "end": 427,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 415,
                  "end": 421,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 432,
            "end": 469,
            "test": {
              "type": "BinaryExpression",
              "start": 436,
              "end": 442,
              "left": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 441,
                "end": 442,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 444,
              "end": 469,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 454,
                  "end": 463,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 473,
      "end": 629,
      "test": {
        "type": "BinaryExpression",
        "start": 480,
        "end": 487,
        "left": {
          "type": "Literal",
          "start": 480,
          "end": 481,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 486,
          "end": 487,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 489,
        "end": 629,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 495,
            "end": 501,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 499,
                "end": 500,
                "id": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
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
            "type": "ExpressionStatement",
            "start": 506,
            "end": 531,
            "expression": {
              "type": "FunctionExpression",
              "start": 507,
              "end": 529,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 518,
                "end": 529,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 520,
                    "end": 528,
                    "argument": {
                      "type": "Identifier",
                      "start": 527,
                      "end": 528,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 536,
            "end": 546,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 537,
              "end": 544,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 551,
            "end": 585,
            "test": {
              "type": "BinaryExpression",
              "start": 555,
              "end": 561,
              "left": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 560,
                "end": 561,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 563,
              "end": 585,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 573,
                  "end": 579,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 590,
            "end": 627,
            "test": {
              "type": "BinaryExpression",
              "start": 594,
              "end": 600,
              "left": {
                "type": "Identifier",
                "start": 594,
                "end": 595,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 599,
                "end": 600,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 602,
              "end": 627,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 612,
                  "end": 621,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 631,
      "end": 790,
      "body": {
        "type": "BlockStatement",
        "start": 634,
        "end": 774,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 640,
            "end": 646,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 644,
                "end": 645,
                "id": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
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
            "type": "ExpressionStatement",
            "start": 651,
            "end": 676,
            "expression": {
              "type": "FunctionExpression",
              "start": 652,
              "end": 674,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 663,
                "end": 674,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 665,
                    "end": 673,
                    "argument": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 681,
            "end": 691,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 682,
              "end": 689,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 696,
            "end": 730,
            "test": {
              "type": "BinaryExpression",
              "start": 700,
              "end": 706,
              "left": {
                "type": "Identifier",
                "start": 700,
                "end": 701,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 705,
                "end": 706,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 708,
              "end": 730,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 718,
                  "end": 724,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 735,
            "end": 772,
            "test": {
              "type": "BinaryExpression",
              "start": 739,
              "end": 745,
              "left": {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 744,
                "end": 745,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 747,
              "end": 772,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 757,
                  "end": 766,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 782,
        "end": 789,
        "left": {
          "type": "Literal",
          "start": 782,
          "end": 783,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 788,
          "end": 789,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 792,
      "end": 964,
      "init": {
        "type": "VariableDeclaration",
        "start": 797,
        "end": 806,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 801,
            "end": 806,
            "id": {
              "type": "Identifier",
              "start": 801,
              "end": 802,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 805,
              "end": 806,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 808,
        "end": 813,
        "left": {
          "type": "Identifier",
          "start": 808,
          "end": 809,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 812,
          "end": 813,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 815,
        "end": 818,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 817,
          "end": 818,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 820,
        "end": 964,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 826,
            "end": 836,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 830,
                "end": 835,
                "id": {
                  "type": "Identifier",
                  "start": 830,
                  "end": 831,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 834,
                  "end": 835,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 841,
            "end": 866,
            "expression": {
              "type": "FunctionExpression",
              "start": 842,
              "end": 864,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 853,
                "end": 864,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 855,
                    "end": 863,
                    "argument": {
                      "type": "Identifier",
                      "start": 862,
                      "end": 863,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 871,
            "end": 881,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 872,
              "end": 879,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 878,
                "end": 879,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 886,
            "end": 920,
            "test": {
              "type": "BinaryExpression",
              "start": 890,
              "end": 896,
              "left": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 895,
                "end": 896,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 898,
              "end": 920,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 908,
                  "end": 914,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 925,
            "end": 962,
            "test": {
              "type": "BinaryExpression",
              "start": 929,
              "end": 935,
              "left": {
                "type": "Identifier",
                "start": 929,
                "end": 930,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 934,
                "end": 935,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 937,
              "end": 962,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 947,
                  "end": 956,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 966,
      "end": 1138,
      "init": {
        "type": "VariableDeclaration",
        "start": 971,
        "end": 987,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 975,
            "end": 980,
            "id": {
              "type": "Identifier",
              "start": 975,
              "end": 976,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 979,
              "end": 980,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 982,
            "end": 987,
            "id": {
              "type": "Identifier",
              "start": 982,
              "end": 983,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 986,
              "end": 987,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 989,
        "end": 994,
        "left": {
          "type": "Identifier",
          "start": 989,
          "end": 990,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 993,
          "end": 994,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 996,
        "end": 999,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 998,
          "end": 999,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1001,
        "end": 1138,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1007,
            "end": 1036,
            "expression": {
              "type": "FunctionExpression",
              "start": 1008,
              "end": 1034,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1019,
                "end": 1034,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1021,
                    "end": 1033,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1028,
                      "end": 1033,
                      "left": {
                        "type": "Identifier",
                        "start": 1028,
                        "end": 1029,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1032,
                        "end": 1033,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1041,
            "end": 1055,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1042,
              "end": 1053,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1048,
                "end": 1053,
                "left": {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1049,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1052,
                  "end": 1053,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1060,
            "end": 1094,
            "test": {
              "type": "BinaryExpression",
              "start": 1064,
              "end": 1070,
              "left": {
                "type": "Identifier",
                "start": 1064,
                "end": 1065,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1069,
                "end": 1070,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1072,
              "end": 1094,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1082,
                  "end": 1088,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1099,
            "end": 1136,
            "test": {
              "type": "BinaryExpression",
              "start": 1103,
              "end": 1109,
              "left": {
                "type": "Identifier",
                "start": 1103,
                "end": 1104,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1108,
                "end": 1109,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1111,
              "end": 1136,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 1121,
                  "end": 1130,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 1140,
      "end": 1307,
      "test": {
        "type": "BinaryExpression",
        "start": 1147,
        "end": 1154,
        "left": {
          "type": "Literal",
          "start": 1147,
          "end": 1148,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1153,
          "end": 1154,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1156,
        "end": 1307,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1162,
            "end": 1171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1166,
                "end": 1167,
                "id": {
                  "type": "Identifier",
                  "start": 1166,
                  "end": 1167,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1169,
                "end": 1170,
                "id": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1170,
                  "name": "y",
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
            "type": "ExpressionStatement",
            "start": 1176,
            "end": 1205,
            "expression": {
              "type": "FunctionExpression",
              "start": 1177,
              "end": 1203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1188,
                "end": 1203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1190,
                    "end": 1202,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1197,
                      "end": 1202,
                      "left": {
                        "type": "Identifier",
                        "start": 1197,
                        "end": 1198,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1202,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1210,
            "end": 1224,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1211,
              "end": 1222,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1217,
                "end": 1222,
                "left": {
                  "type": "Identifier",
                  "start": 1217,
                  "end": 1218,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1221,
                  "end": 1222,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1229,
            "end": 1263,
            "test": {
              "type": "BinaryExpression",
              "start": 1233,
              "end": 1239,
              "left": {
                "type": "Identifier",
                "start": 1233,
                "end": 1234,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1238,
                "end": 1239,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1241,
              "end": 1263,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1251,
                  "end": 1257,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1268,
            "end": 1305,
            "test": {
              "type": "BinaryExpression",
              "start": 1272,
              "end": 1278,
              "left": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1277,
                "end": 1278,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1280,
              "end": 1305,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 1290,
                  "end": 1299,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 1309,
      "end": 1479,
      "body": {
        "type": "BlockStatement",
        "start": 1312,
        "end": 1463,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1318,
            "end": 1327,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1322,
                "end": 1323,
                "id": {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1323,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 1325,
                "end": 1326,
                "id": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1326,
                  "name": "y",
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
            "type": "ExpressionStatement",
            "start": 1332,
            "end": 1361,
            "expression": {
              "type": "FunctionExpression",
              "start": 1333,
              "end": 1359,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1344,
                "end": 1359,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1346,
                    "end": 1358,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1353,
                      "end": 1358,
                      "left": {
                        "type": "Identifier",
                        "start": 1353,
                        "end": 1354,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1358,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1366,
            "end": 1380,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1367,
              "end": 1378,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1373,
                "end": 1378,
                "left": {
                  "type": "Identifier",
                  "start": 1373,
                  "end": 1374,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1377,
                  "end": 1378,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1385,
            "end": 1419,
            "test": {
              "type": "BinaryExpression",
              "start": 1389,
              "end": 1395,
              "left": {
                "type": "Identifier",
                "start": 1389,
                "end": 1390,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1394,
                "end": 1395,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1397,
              "end": 1419,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1407,
                  "end": 1413,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1424,
            "end": 1461,
            "test": {
              "type": "BinaryExpression",
              "start": 1428,
              "end": 1434,
              "left": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1433,
                "end": 1434,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1436,
              "end": 1461,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 1446,
                  "end": 1455,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1471,
        "end": 1478,
        "left": {
          "type": "Literal",
          "start": 1471,
          "end": 1472,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 1477,
          "end": 1478,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1481,
      "end": 1661,
      "init": {
        "type": "VariableDeclaration",
        "start": 1486,
        "end": 1495,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1490,
            "end": 1495,
            "id": {
              "type": "Identifier",
              "start": 1490,
              "end": 1491,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1494,
              "end": 1495,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1497,
        "end": 1502,
        "left": {
          "type": "Identifier",
          "start": 1497,
          "end": 1498,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 1501,
          "end": 1502,
          "value": 1,
          "raw": "1"
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1504,
        "end": 1507,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 1506,
          "end": 1507,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1509,
        "end": 1661,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1515,
            "end": 1525,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1519,
                "end": 1524,
                "id": {
                  "type": "Identifier",
                  "start": 1519,
                  "end": 1520,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 1523,
                  "end": 1524,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1530,
            "end": 1559,
            "expression": {
              "type": "FunctionExpression",
              "start": 1531,
              "end": 1557,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1542,
                "end": 1557,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1544,
                    "end": 1556,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 1551,
                      "end": 1556,
                      "left": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1552,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 1555,
                        "end": 1556,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1564,
            "end": 1578,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1565,
              "end": 1576,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 1571,
                "end": 1576,
                "left": {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1572,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 1575,
                  "end": 1576,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1583,
            "end": 1617,
            "test": {
              "type": "BinaryExpression",
              "start": 1587,
              "end": 1593,
              "left": {
                "type": "Identifier",
                "start": 1587,
                "end": 1588,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1592,
                "end": 1593,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1595,
              "end": 1617,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1605,
                  "end": 1611,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1622,
            "end": 1659,
            "test": {
              "type": "BinaryExpression",
              "start": 1626,
              "end": 1632,
              "left": {
                "type": "Identifier",
                "start": 1626,
                "end": 1627,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1631,
                "end": 1632,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1634,
              "end": 1659,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 1644,
                  "end": 1653,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1677,
      "end": 1826,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 1682,
        "end": 1689,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1688,
            "end": 1689,
            "id": {
              "type": "Identifier",
              "start": 1688,
              "end": 1689,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1693,
        "end": 1695,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 1697,
        "end": 1826,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1703,
            "end": 1728,
            "expression": {
              "type": "FunctionExpression",
              "start": 1704,
              "end": 1726,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1715,
                "end": 1726,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1717,
                    "end": 1725,
                    "argument": {
                      "type": "Identifier",
                      "start": 1724,
                      "end": 1725,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1733,
            "end": 1743,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1734,
              "end": 1741,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1740,
                "end": 1741,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1748,
            "end": 1782,
            "test": {
              "type": "BinaryExpression",
              "start": 1752,
              "end": 1758,
              "left": {
                "type": "Identifier",
                "start": 1752,
                "end": 1753,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1757,
                "end": 1758,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1760,
              "end": 1782,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1770,
                  "end": 1776,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1787,
            "end": 1824,
            "test": {
              "type": "BinaryExpression",
              "start": 1791,
              "end": 1797,
              "left": {
                "type": "Identifier",
                "start": 1791,
                "end": 1792,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1796,
                "end": 1797,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1799,
              "end": 1824,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 1809,
                  "end": 1818,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForInStatement",
      "start": 1828,
      "end": 1981,
      "left": {
        "type": "VariableDeclaration",
        "start": 1833,
        "end": 1840,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1839,
            "end": 1840,
            "id": {
              "type": "Identifier",
              "start": 1839,
              "end": 1840,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1844,
        "end": 1846,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 1848,
        "end": 1981,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1854,
            "end": 1879,
            "expression": {
              "type": "FunctionExpression",
              "start": 1855,
              "end": 1877,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1866,
                "end": 1877,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1868,
                    "end": 1876,
                    "argument": {
                      "type": "Identifier",
                      "start": 1875,
                      "end": 1876,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1884,
            "end": 1894,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1885,
              "end": 1892,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 1891,
                "end": 1892,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 1899,
            "end": 1935,
            "test": {
              "type": "BinaryExpression",
              "start": 1903,
              "end": 1911,
              "left": {
                "type": "Identifier",
                "start": 1903,
                "end": 1904,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1908,
                "end": 1911,
                "value": "1",
                "raw": "\"1\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1913,
              "end": 1935,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 1923,
                  "end": 1929,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 1940,
            "end": 1979,
            "test": {
              "type": "BinaryExpression",
              "start": 1944,
              "end": 1952,
              "left": {
                "type": "Identifier",
                "start": 1944,
                "end": 1945,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 1949,
                "end": 1952,
                "value": "2",
                "raw": "\"2\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1954,
              "end": 1979,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 1964,
                  "end": 1973,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 1984,
      "end": 2139,
      "init": {
        "type": "VariableDeclaration",
        "start": 1989,
        "end": 2000,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1995,
            "end": 2000,
            "id": {
              "type": "Identifier",
              "start": 1995,
              "end": 1996,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 1999,
              "end": 2000,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2002,
        "end": 2007,
        "left": {
          "type": "Identifier",
          "start": 2002,
          "end": 2003,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2006,
          "end": 2007,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 2010,
        "end": 2139,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2016,
            "end": 2041,
            "expression": {
              "type": "FunctionExpression",
              "start": 2017,
              "end": 2039,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2028,
                "end": 2039,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2030,
                    "end": 2038,
                    "argument": {
                      "type": "Identifier",
                      "start": 2037,
                      "end": 2038,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2046,
            "end": 2056,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2047,
              "end": 2054,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 2053,
                "end": 2054,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2061,
            "end": 2095,
            "test": {
              "type": "BinaryExpression",
              "start": 2065,
              "end": 2071,
              "left": {
                "type": "Identifier",
                "start": 2065,
                "end": 2066,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2070,
                "end": 2071,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2073,
              "end": 2095,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 2083,
                  "end": 2089,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2100,
            "end": 2137,
            "test": {
              "type": "BinaryExpression",
              "start": 2104,
              "end": 2110,
              "left": {
                "type": "Identifier",
                "start": 2104,
                "end": 2105,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2109,
                "end": 2110,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2112,
              "end": 2137,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 2122,
                  "end": 2131,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 2141,
      "end": 2303,
      "test": {
        "type": "BinaryExpression",
        "start": 2148,
        "end": 2155,
        "left": {
          "type": "Literal",
          "start": 2148,
          "end": 2149,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 2154,
          "end": 2155,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2157,
        "end": 2303,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2163,
            "end": 2175,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2169,
                "end": 2174,
                "id": {
                  "type": "Identifier",
                  "start": 2169,
                  "end": 2170,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2173,
                  "end": 2174,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2180,
            "end": 2205,
            "expression": {
              "type": "FunctionExpression",
              "start": 2181,
              "end": 2203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2192,
                "end": 2203,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2194,
                    "end": 2202,
                    "argument": {
                      "type": "Identifier",
                      "start": 2201,
                      "end": 2202,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2210,
            "end": 2220,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2211,
              "end": 2218,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 2217,
                "end": 2218,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2225,
            "end": 2259,
            "test": {
              "type": "BinaryExpression",
              "start": 2229,
              "end": 2235,
              "left": {
                "type": "Identifier",
                "start": 2229,
                "end": 2230,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2234,
                "end": 2235,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2237,
              "end": 2259,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 2247,
                  "end": 2253,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2264,
            "end": 2301,
            "test": {
              "type": "BinaryExpression",
              "start": 2268,
              "end": 2274,
              "left": {
                "type": "Identifier",
                "start": 2268,
                "end": 2269,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2273,
                "end": 2274,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2276,
              "end": 2301,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 2286,
                  "end": 2295,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2305,
      "end": 2470,
      "body": {
        "type": "BlockStatement",
        "start": 2308,
        "end": 2454,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2314,
            "end": 2326,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2320,
                "end": 2325,
                "id": {
                  "type": "Identifier",
                  "start": 2320,
                  "end": 2321,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2324,
                  "end": 2325,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2331,
            "end": 2356,
            "expression": {
              "type": "FunctionExpression",
              "start": 2332,
              "end": 2354,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2343,
                "end": 2354,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2345,
                    "end": 2353,
                    "argument": {
                      "type": "Identifier",
                      "start": 2352,
                      "end": 2353,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2361,
            "end": 2371,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2362,
              "end": 2369,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 2368,
                "end": 2369,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2376,
            "end": 2410,
            "test": {
              "type": "BinaryExpression",
              "start": 2380,
              "end": 2386,
              "left": {
                "type": "Identifier",
                "start": 2380,
                "end": 2381,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2385,
                "end": 2386,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2388,
              "end": 2410,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 2398,
                  "end": 2404,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2415,
            "end": 2452,
            "test": {
              "type": "BinaryExpression",
              "start": 2419,
              "end": 2425,
              "left": {
                "type": "Identifier",
                "start": 2419,
                "end": 2420,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2424,
                "end": 2425,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2427,
              "end": 2452,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 2437,
                  "end": 2446,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2462,
        "end": 2469,
        "left": {
          "type": "Literal",
          "start": 2462,
          "end": 2463,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 2468,
          "end": 2469,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 2472,
      "end": 2644,
      "init": {
        "type": "VariableDeclaration",
        "start": 2477,
        "end": 2488,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2483,
            "end": 2488,
            "id": {
              "type": "Identifier",
              "start": 2483,
              "end": 2484,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2487,
              "end": 2488,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2490,
        "end": 2495,
        "left": {
          "type": "Identifier",
          "start": 2490,
          "end": 2491,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2494,
          "end": 2495,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 2498,
        "end": 2644,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2504,
            "end": 2516,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2510,
                "end": 2515,
                "id": {
                  "type": "Identifier",
                  "start": 2510,
                  "end": 2511,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2514,
                  "end": 2515,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2521,
            "end": 2546,
            "expression": {
              "type": "FunctionExpression",
              "start": 2522,
              "end": 2544,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2533,
                "end": 2544,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2535,
                    "end": 2543,
                    "argument": {
                      "type": "Identifier",
                      "start": 2542,
                      "end": 2543,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2551,
            "end": 2561,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2552,
              "end": 2559,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 2558,
                "end": 2559,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2566,
            "end": 2600,
            "test": {
              "type": "BinaryExpression",
              "start": 2570,
              "end": 2576,
              "left": {
                "type": "Identifier",
                "start": 2570,
                "end": 2571,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2575,
                "end": 2576,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2578,
              "end": 2600,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 2588,
                  "end": 2594,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2605,
            "end": 2642,
            "test": {
              "type": "BinaryExpression",
              "start": 2609,
              "end": 2615,
              "left": {
                "type": "Identifier",
                "start": 2609,
                "end": 2610,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2614,
                "end": 2615,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2617,
              "end": 2642,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 2627,
                  "end": 2636,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 2646,
      "end": 2816,
      "init": {
        "type": "VariableDeclaration",
        "start": 2651,
        "end": 2669,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2657,
            "end": 2662,
            "id": {
              "type": "Identifier",
              "start": 2657,
              "end": 2658,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2661,
              "end": 2662,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          },
          {
            "type": "VariableDeclarator",
            "start": 2664,
            "end": 2669,
            "id": {
              "type": "Identifier",
              "start": 2664,
              "end": 2665,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 2668,
              "end": 2669,
              "value": 1,
              "raw": "1"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2671,
        "end": 2676,
        "left": {
          "type": "Identifier",
          "start": 2671,
          "end": 2672,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 2675,
          "end": 2676,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 2679,
        "end": 2816,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2685,
            "end": 2714,
            "expression": {
              "type": "FunctionExpression",
              "start": 2686,
              "end": 2712,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2697,
                "end": 2712,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2699,
                    "end": 2711,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2706,
                      "end": 2711,
                      "left": {
                        "type": "Identifier",
                        "start": 2706,
                        "end": 2707,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2710,
                        "end": 2711,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2719,
            "end": 2733,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2720,
              "end": 2731,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 2726,
                "end": 2731,
                "left": {
                  "type": "Identifier",
                  "start": 2726,
                  "end": 2727,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 2730,
                  "end": 2731,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2738,
            "end": 2772,
            "test": {
              "type": "BinaryExpression",
              "start": 2742,
              "end": 2748,
              "left": {
                "type": "Identifier",
                "start": 2742,
                "end": 2743,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2747,
                "end": 2748,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2750,
              "end": 2772,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 2760,
                  "end": 2766,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2777,
            "end": 2814,
            "test": {
              "type": "BinaryExpression",
              "start": 2781,
              "end": 2787,
              "left": {
                "type": "Identifier",
                "start": 2781,
                "end": 2782,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2786,
                "end": 2787,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2789,
              "end": 2814,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 2799,
                  "end": 2808,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "WhileStatement",
      "start": 2818,
      "end": 2995,
      "test": {
        "type": "BinaryExpression",
        "start": 2825,
        "end": 2832,
        "left": {
          "type": "Literal",
          "start": 2825,
          "end": 2826,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 2831,
          "end": 2832,
          "value": 1,
          "raw": "1"
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2834,
        "end": 2995,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2840,
            "end": 2859,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2846,
                "end": 2851,
                "id": {
                  "type": "Identifier",
                  "start": 2846,
                  "end": 2847,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2850,
                  "end": 2851,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 2853,
                "end": 2858,
                "id": {
                  "type": "Identifier",
                  "start": 2853,
                  "end": 2854,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 2857,
                  "end": 2858,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2864,
            "end": 2893,
            "expression": {
              "type": "FunctionExpression",
              "start": 2865,
              "end": 2891,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 2876,
                "end": 2891,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 2878,
                    "end": 2890,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 2885,
                      "end": 2890,
                      "left": {
                        "type": "Identifier",
                        "start": 2885,
                        "end": 2886,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 2889,
                        "end": 2890,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2898,
            "end": 2912,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2899,
              "end": 2910,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 2905,
                "end": 2910,
                "left": {
                  "type": "Identifier",
                  "start": 2905,
                  "end": 2906,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 2909,
                  "end": 2910,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 2917,
            "end": 2951,
            "test": {
              "type": "BinaryExpression",
              "start": 2921,
              "end": 2927,
              "left": {
                "type": "Identifier",
                "start": 2921,
                "end": 2922,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2926,
                "end": 2927,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2929,
              "end": 2951,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 2939,
                  "end": 2945,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 2956,
            "end": 2993,
            "test": {
              "type": "BinaryExpression",
              "start": 2960,
              "end": 2966,
              "left": {
                "type": "Identifier",
                "start": 2960,
                "end": 2961,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 2965,
                "end": 2966,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2968,
              "end": 2993,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 2978,
                  "end": 2987,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 2997,
      "end": 3177,
      "body": {
        "type": "BlockStatement",
        "start": 3000,
        "end": 3161,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3006,
            "end": 3025,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3012,
                "end": 3017,
                "id": {
                  "type": "Identifier",
                  "start": 3012,
                  "end": 3013,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 3016,
                  "end": 3017,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              },
              {
                "type": "VariableDeclarator",
                "start": 3019,
                "end": 3024,
                "id": {
                  "type": "Identifier",
                  "start": 3019,
                  "end": 3020,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 3023,
                  "end": 3024,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3030,
            "end": 3059,
            "expression": {
              "type": "FunctionExpression",
              "start": 3031,
              "end": 3057,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3042,
                "end": 3057,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3044,
                    "end": 3056,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 3051,
                      "end": 3056,
                      "left": {
                        "type": "Identifier",
                        "start": 3051,
                        "end": 3052,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3055,
                        "end": 3056,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3064,
            "end": 3078,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 3065,
              "end": 3076,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 3071,
                "end": 3076,
                "left": {
                  "type": "Identifier",
                  "start": 3071,
                  "end": 3072,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 3075,
                  "end": 3076,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 3083,
            "end": 3117,
            "test": {
              "type": "BinaryExpression",
              "start": 3087,
              "end": 3093,
              "left": {
                "type": "Identifier",
                "start": 3087,
                "end": 3088,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 3092,
                "end": 3093,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3095,
              "end": 3117,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 3105,
                  "end": 3111,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3122,
            "end": 3159,
            "test": {
              "type": "BinaryExpression",
              "start": 3126,
              "end": 3132,
              "left": {
                "type": "Identifier",
                "start": 3126,
                "end": 3127,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 3131,
                "end": 3132,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3134,
              "end": 3159,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 3144,
                  "end": 3153,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3169,
        "end": 3176,
        "left": {
          "type": "Literal",
          "start": 3169,
          "end": 3170,
          "value": 1,
          "raw": "1"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 3175,
          "end": 3176,
          "value": 1,
          "raw": "1"
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 3179,
      "end": 3359,
      "init": {
        "type": "VariableDeclaration",
        "start": 3184,
        "end": 3195,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3190,
            "end": 3195,
            "id": {
              "type": "Identifier",
              "start": 3190,
              "end": 3191,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 3194,
              "end": 3195,
              "value": 0,
              "raw": "0"
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3197,
        "end": 3202,
        "left": {
          "type": "Identifier",
          "start": 3197,
          "end": 3198,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<",
        "right": {
          "type": "Literal",
          "start": 3201,
          "end": 3202,
          "value": 1,
          "raw": "1"
        }
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 3205,
        "end": 3359,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3211,
            "end": 3223,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3217,
                "end": 3222,
                "id": {
                  "type": "Identifier",
                  "start": 3217,
                  "end": 3218,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 3221,
                  "end": 3222,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3228,
            "end": 3257,
            "expression": {
              "type": "FunctionExpression",
              "start": 3229,
              "end": 3255,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 3240,
                "end": 3255,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 3242,
                    "end": 3254,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 3249,
                      "end": 3254,
                      "left": {
                        "type": "Identifier",
                        "start": 3249,
                        "end": 3250,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "start": 3253,
                        "end": 3254,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3262,
            "end": 3276,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 3263,
              "end": 3274,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BinaryExpression",
                "start": 3269,
                "end": 3274,
                "left": {
                  "type": "Identifier",
                  "start": 3269,
                  "end": 3270,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "start": 3273,
                  "end": 3274,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeParameters": null,
              "returnType": null
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 3281,
            "end": 3315,
            "test": {
              "type": "BinaryExpression",
              "start": 3285,
              "end": 3291,
              "left": {
                "type": "Identifier",
                "start": 3285,
                "end": 3286,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 3290,
                "end": 3291,
                "value": 1,
                "raw": "1"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3293,
              "end": 3315,
              "body": [
                {
                  "type": "BreakStatement",
                  "start": 3303,
                  "end": 3309,
                  "label": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3320,
            "end": 3357,
            "test": {
              "type": "BinaryExpression",
              "start": 3324,
              "end": 3330,
              "left": {
                "type": "Identifier",
                "start": 3324,
                "end": 3325,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "start": 3329,
                "end": 3330,
                "value": 2,
                "raw": "2"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3332,
              "end": 3357,
              "body": [
                {
                  "type": "ContinueStatement",
                  "start": 3342,
                  "end": 3351,
                  "label": null
                }
              ]
            },
            "alternate": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
