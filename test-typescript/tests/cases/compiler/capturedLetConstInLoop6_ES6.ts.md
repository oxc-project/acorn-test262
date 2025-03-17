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
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 158,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 35,
            "end": 60,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 36,
              "end": 58,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 65,
            "end": 75,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 66,
              "end": 73,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 72,
                "end": 73,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 80,
            "end": 114,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 84,
              "end": 90,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 84,
                "end": 85,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 89,
                "end": 90,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 119,
            "end": 156,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 123,
              "end": 129,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 123,
                "end": 124,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 128,
                "end": 129,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 16,
        "end": 21,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 20,
            "end": 21,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 25,
        "end": 27,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 160,
      "end": 311,
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 311,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 184,
            "end": 209,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 207,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 214,
            "end": 224,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 215,
              "end": 222,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 221,
                "end": 222,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 229,
            "end": 265,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 233,
              "end": 241,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 238,
                "end": 241,
                "raw": "\"1\"",
                "value": "1"
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 270,
            "end": 309,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 274,
              "end": 282,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 274,
                "end": 275,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 279,
                "end": 282,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 165,
        "end": 170,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 169,
            "end": 170,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 169,
              "end": 170,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 174,
        "end": 176,
        "elements": []
      }
    },
    {
      "type": "ForStatement",
      "start": 314,
      "end": 471,
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 471,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 348,
            "end": 373,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 349,
              "end": 371,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 378,
            "end": 388,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 379,
              "end": 386,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 393,
            "end": 427,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 397,
              "end": 403,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 402,
                "end": 403,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 432,
            "end": 469,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 436,
              "end": 442,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 441,
                "end": 442,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 319,
        "end": 328,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 323,
            "end": 328,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 327,
              "end": 328,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 330,
        "end": 335,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 331,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 334,
          "end": 335,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 337,
        "end": 340,
        "argument": {
          "type": "Identifier",
          "start": 339,
          "end": 340,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 473,
      "end": 629,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 499,
                  "end": 500,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 506,
            "end": 531,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 507,
              "end": 529,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 536,
            "end": 546,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 537,
              "end": 544,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 551,
            "end": 585,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 555,
              "end": 561,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 555,
                "end": 556,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 560,
                "end": 561,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 590,
            "end": 627,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 594,
              "end": 600,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 594,
                "end": 595,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 599,
                "end": 600,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 480,
        "end": 487,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 480,
          "end": 481,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 486,
          "end": 487,
          "raw": "1",
          "value": 1
        }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 644,
                  "end": 645,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 651,
            "end": 676,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 652,
              "end": 674,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 681,
            "end": 691,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 682,
              "end": 689,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 688,
                "end": 689,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 696,
            "end": 730,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 700,
              "end": 706,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 700,
                "end": 701,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 705,
                "end": 706,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 735,
            "end": 772,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 739,
              "end": 745,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 739,
                "end": 740,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 744,
                "end": 745,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 782,
        "end": 789,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 782,
          "end": 783,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 788,
          "end": 789,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 792,
      "end": 964,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 830,
                  "end": 831,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 834,
                  "end": 835,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 841,
            "end": 866,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 842,
              "end": 864,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 871,
            "end": 881,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 872,
              "end": 879,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 878,
                "end": 879,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 886,
            "end": 920,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 890,
              "end": 896,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 890,
                "end": 891,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 895,
                "end": 896,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 925,
            "end": 962,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 929,
              "end": 935,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 929,
                "end": 930,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 934,
                "end": 935,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 797,
        "end": 806,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 801,
            "end": 806,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 801,
              "end": 802,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 805,
              "end": 806,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 808,
        "end": 813,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 808,
          "end": 809,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 812,
          "end": 813,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 815,
        "end": 818,
        "argument": {
          "type": "Identifier",
          "start": 817,
          "end": 818,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ForStatement",
      "start": 966,
      "end": 1138,
      "body": {
        "type": "BlockStatement",
        "start": 1001,
        "end": 1138,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1007,
            "end": 1036,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 1008,
              "end": 1034,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1028,
                        "end": 1029,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1032,
                        "end": 1033,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1041,
            "end": 1055,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1042,
              "end": 1053,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 1048,
                "end": 1053,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 1048,
                  "end": 1049,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1052,
                  "end": 1053,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1060,
            "end": 1094,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1064,
              "end": 1070,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1064,
                "end": 1065,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1069,
                "end": 1070,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1099,
            "end": 1136,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1103,
              "end": 1109,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1103,
                "end": 1104,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1108,
                "end": 1109,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 971,
        "end": 987,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 975,
            "end": 980,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 975,
              "end": 976,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 979,
              "end": 980,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 982,
            "end": 987,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 982,
              "end": 983,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 986,
              "end": 987,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 989,
        "end": 994,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 989,
          "end": 990,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 993,
          "end": 994,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 996,
        "end": 999,
        "argument": {
          "type": "Identifier",
          "start": 998,
          "end": 999,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "WhileStatement",
      "start": 1140,
      "end": 1307,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1166,
                  "end": 1167,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1169,
                "end": 1170,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1169,
                  "end": 1170,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1176,
            "end": 1205,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 1177,
              "end": 1203,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1197,
                        "end": 1198,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1201,
                        "end": 1202,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1210,
            "end": 1224,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1211,
              "end": 1222,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 1217,
                "end": 1222,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 1217,
                  "end": 1218,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1221,
                  "end": 1222,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1229,
            "end": 1263,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1233,
              "end": 1239,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1233,
                "end": 1234,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1238,
                "end": 1239,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1268,
            "end": 1305,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1272,
              "end": 1278,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1277,
                "end": 1278,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1147,
        "end": 1154,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 1147,
          "end": 1148,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 1153,
          "end": 1154,
          "raw": "1",
          "value": 1
        }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1322,
                  "end": 1323,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              },
              {
                "type": "VariableDeclarator",
                "start": 1325,
                "end": 1326,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1326,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1332,
            "end": 1361,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 1333,
              "end": 1359,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1353,
                        "end": 1354,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1357,
                        "end": 1358,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1366,
            "end": 1380,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1367,
              "end": 1378,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 1373,
                "end": 1378,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 1373,
                  "end": 1374,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1377,
                  "end": 1378,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1385,
            "end": 1419,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1389,
              "end": 1395,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1389,
                "end": 1390,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1394,
                "end": 1395,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1424,
            "end": 1461,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1428,
              "end": 1434,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1433,
                "end": 1434,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1471,
        "end": 1478,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 1471,
          "end": 1472,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 1477,
          "end": 1478,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 1481,
      "end": 1661,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1519,
                  "end": 1520,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 1523,
                  "end": 1524,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 1530,
            "end": 1559,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 1531,
              "end": 1557,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 1551,
                        "end": 1552,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1555,
                        "end": 1556,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1564,
            "end": 1578,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1565,
              "end": 1576,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 1571,
                "end": 1576,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 1571,
                  "end": 1572,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 1575,
                  "end": 1576,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1583,
            "end": 1617,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1587,
              "end": 1593,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1587,
                "end": 1588,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1592,
                "end": 1593,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1622,
            "end": 1659,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1626,
              "end": 1632,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1626,
                "end": 1627,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1631,
                "end": 1632,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1486,
        "end": 1495,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1490,
            "end": 1495,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1490,
              "end": 1491,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1494,
              "end": 1495,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 1497,
        "end": 1502,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 1497,
          "end": 1498,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 1501,
          "end": 1502,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "UpdateExpression",
        "start": 1504,
        "end": 1507,
        "argument": {
          "type": "Identifier",
          "start": 1506,
          "end": 1507,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "++",
        "prefix": true
      }
    },
    {
      "type": "ForOfStatement",
      "start": 1677,
      "end": 1826,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 1697,
        "end": 1826,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1703,
            "end": 1728,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 1704,
              "end": 1726,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1733,
            "end": 1743,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1734,
              "end": 1741,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 1740,
                "end": 1741,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1748,
            "end": 1782,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1752,
              "end": 1758,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1752,
                "end": 1753,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1757,
                "end": 1758,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1787,
            "end": 1824,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1791,
              "end": 1797,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1791,
                "end": 1792,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1796,
                "end": 1797,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 1682,
        "end": 1689,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1688,
            "end": 1689,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1688,
              "end": 1689,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1693,
        "end": 1695,
        "elements": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 1828,
      "end": 1981,
      "body": {
        "type": "BlockStatement",
        "start": 1848,
        "end": 1981,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1854,
            "end": 1879,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 1855,
              "end": 1877,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1884,
            "end": 1894,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 1885,
              "end": 1892,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 1891,
                "end": 1892,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 1899,
            "end": 1935,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1903,
              "end": 1911,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1903,
                "end": 1904,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1908,
                "end": 1911,
                "raw": "\"1\"",
                "value": "1"
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1940,
            "end": 1979,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 1944,
              "end": 1952,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 1944,
                "end": 1945,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1949,
                "end": 1952,
                "raw": "\"2\"",
                "value": "2"
              }
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 1833,
        "end": 1840,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1839,
            "end": 1840,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1839,
              "end": 1840,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 1844,
        "end": 1846,
        "elements": []
      }
    },
    {
      "type": "ForStatement",
      "start": 1984,
      "end": 2139,
      "body": {
        "type": "BlockStatement",
        "start": 2010,
        "end": 2139,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2016,
            "end": 2041,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 2017,
              "end": 2039,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2046,
            "end": 2056,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2047,
              "end": 2054,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 2053,
                "end": 2054,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 2061,
            "end": 2095,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2065,
              "end": 2071,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2065,
                "end": 2066,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2070,
                "end": 2071,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2100,
            "end": 2137,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2104,
              "end": 2110,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2104,
                "end": 2105,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2109,
                "end": 2110,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 1989,
        "end": 2000,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1995,
            "end": 2000,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1995,
              "end": 1996,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 1999,
              "end": 2000,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2002,
        "end": 2007,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2002,
          "end": 2003,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 2006,
          "end": 2007,
          "raw": "1",
          "value": 1
        }
      },
      "update": null
    },
    {
      "type": "WhileStatement",
      "start": 2141,
      "end": 2303,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2169,
                  "end": 2170,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 2173,
                  "end": 2174,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2180,
            "end": 2205,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 2181,
              "end": 2203,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2210,
            "end": 2220,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2211,
              "end": 2218,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 2217,
                "end": 2218,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 2225,
            "end": 2259,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2229,
              "end": 2235,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2229,
                "end": 2230,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2234,
                "end": 2235,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2264,
            "end": 2301,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2268,
              "end": 2274,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2268,
                "end": 2269,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2273,
                "end": 2274,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2148,
        "end": 2155,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 2148,
          "end": 2149,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 2154,
          "end": 2155,
          "raw": "1",
          "value": 1
        }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2320,
                  "end": 2321,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 2324,
                  "end": 2325,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2331,
            "end": 2356,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 2332,
              "end": 2354,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2361,
            "end": 2371,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2362,
              "end": 2369,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 2368,
                "end": 2369,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 2376,
            "end": 2410,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2380,
              "end": 2386,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2380,
                "end": 2381,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2385,
                "end": 2386,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2415,
            "end": 2452,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2419,
              "end": 2425,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2419,
                "end": 2420,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2424,
                "end": 2425,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2462,
        "end": 2469,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 2462,
          "end": 2463,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 2468,
          "end": 2469,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 2472,
      "end": 2644,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2510,
                  "end": 2511,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 2514,
                  "end": 2515,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2521,
            "end": 2546,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 2522,
              "end": 2544,
              "async": false,
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2551,
            "end": 2561,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2552,
              "end": 2559,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 2558,
                "end": 2559,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 2566,
            "end": 2600,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2570,
              "end": 2576,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2570,
                "end": 2571,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2575,
                "end": 2576,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2605,
            "end": 2642,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2609,
              "end": 2615,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2609,
                "end": 2610,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2614,
                "end": 2615,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 2477,
        "end": 2488,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2483,
            "end": 2488,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 2483,
              "end": 2484,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2487,
              "end": 2488,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2490,
        "end": 2495,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2490,
          "end": 2491,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 2494,
          "end": 2495,
          "raw": "1",
          "value": 1
        }
      },
      "update": null
    },
    {
      "type": "ForStatement",
      "start": 2646,
      "end": 2816,
      "body": {
        "type": "BlockStatement",
        "start": 2679,
        "end": 2816,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2685,
            "end": 2714,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 2686,
              "end": 2712,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2706,
                        "end": 2707,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2710,
                        "end": 2711,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2719,
            "end": 2733,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2720,
              "end": 2731,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 2726,
                "end": 2731,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 2726,
                  "end": 2727,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2730,
                  "end": 2731,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 2738,
            "end": 2772,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2742,
              "end": 2748,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2742,
                "end": 2743,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2747,
                "end": 2748,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2777,
            "end": 2814,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2781,
              "end": 2787,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2781,
                "end": 2782,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2786,
                "end": 2787,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 2651,
        "end": 2669,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 2657,
            "end": 2662,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 2657,
              "end": 2658,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2661,
              "end": 2662,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "VariableDeclarator",
            "start": 2664,
            "end": 2669,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 2664,
              "end": 2665,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 2668,
              "end": 2669,
              "raw": "1",
              "value": 1
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2671,
        "end": 2676,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 2671,
          "end": 2672,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 2675,
          "end": 2676,
          "raw": "1",
          "value": 1
        }
      },
      "update": null
    },
    {
      "type": "WhileStatement",
      "start": 2818,
      "end": 2995,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2846,
                  "end": 2847,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 2850,
                  "end": 2851,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 2853,
                "end": 2858,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2853,
                  "end": 2854,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 2857,
                  "end": 2858,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 2864,
            "end": 2893,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 2865,
              "end": 2891,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 2885,
                        "end": 2886,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 2889,
                        "end": 2890,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2898,
            "end": 2912,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 2899,
              "end": 2910,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 2905,
                "end": 2910,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 2905,
                  "end": 2906,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 2909,
                  "end": 2910,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 2917,
            "end": 2951,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2921,
              "end": 2927,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2921,
                "end": 2922,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2926,
                "end": 2927,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 2956,
            "end": 2993,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 2960,
              "end": 2966,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 2960,
                "end": 2961,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2965,
                "end": 2966,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 2825,
        "end": 2832,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 2825,
          "end": 2826,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 2831,
          "end": 2832,
          "raw": "1",
          "value": 1
        }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3012,
                  "end": 3013,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 3016,
                  "end": 3017,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "VariableDeclarator",
                "start": 3019,
                "end": 3024,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3019,
                  "end": 3020,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 3023,
                  "end": 3024,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 3030,
            "end": 3059,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 3031,
              "end": 3057,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 3051,
                        "end": 3052,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3055,
                        "end": 3056,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3064,
            "end": 3078,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 3065,
              "end": 3076,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 3071,
                "end": 3076,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 3071,
                  "end": 3072,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3075,
                  "end": 3076,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 3083,
            "end": 3117,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 3087,
              "end": 3093,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 3087,
                "end": 3088,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3092,
                "end": 3093,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3122,
            "end": 3159,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 3126,
              "end": 3132,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 3126,
                "end": 3127,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3131,
                "end": 3132,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3169,
        "end": 3176,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 3169,
          "end": 3170,
          "raw": "1",
          "value": 1
        },
        "right": {
          "type": "Literal",
          "start": 3175,
          "end": 3176,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 3179,
      "end": 3359,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3217,
                  "end": 3218,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 3221,
                  "end": 3222,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 3228,
            "end": 3257,
            "directive": null,
            "expression": {
              "type": "FunctionExpression",
              "start": 3229,
              "end": 3255,
              "async": false,
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
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 3249,
                        "end": 3250,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 3253,
                        "end": 3254,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3262,
            "end": 3276,
            "directive": null,
            "expression": {
              "type": "ArrowFunctionExpression",
              "start": 3263,
              "end": 3274,
              "async": false,
              "body": {
                "type": "BinaryExpression",
                "start": 3269,
                "end": 3274,
                "operator": "+",
                "left": {
                  "type": "Identifier",
                  "start": 3269,
                  "end": 3270,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "right": {
                  "type": "Identifier",
                  "start": 3273,
                  "end": 3274,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "IfStatement",
            "start": 3281,
            "end": 3315,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 3285,
              "end": 3291,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 3285,
                "end": 3286,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3290,
                "end": 3291,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 3320,
            "end": 3357,
            "alternate": null,
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
            "test": {
              "type": "BinaryExpression",
              "start": 3324,
              "end": 3330,
              "operator": "==",
              "left": {
                "type": "Identifier",
                "start": 3324,
                "end": 3325,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 3329,
                "end": 3330,
                "raw": "2",
                "value": 2
              }
            }
          }
        ]
      },
      "init": {
        "type": "VariableDeclaration",
        "start": 3184,
        "end": 3195,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 3190,
            "end": 3195,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 3190,
              "end": 3191,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 3194,
              "end": 3195,
              "raw": "0",
              "value": 0
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "test": {
        "type": "BinaryExpression",
        "start": 3197,
        "end": 3202,
        "operator": "<",
        "left": {
          "type": "Identifier",
          "start": 3197,
          "end": 3198,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 3201,
          "end": 3202,
          "raw": "1",
          "value": 1
        }
      },
      "update": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
