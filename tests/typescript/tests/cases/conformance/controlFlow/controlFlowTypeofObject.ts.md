__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "obj",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 21,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 33,
          "end": 37
        },
        "start": 31,
        "end": 37
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 38
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 49,
        "end": 51
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 55,
              "end": 62
            },
            "start": 53,
            "end": 62
          },
          "start": 52,
          "end": 62
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 76
              },
              "prefix": true,
              "start": 74,
              "end": 76
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 88,
                  "end": 95
                }
              ],
              "start": 78,
              "end": 101
            },
            "alternate": null,
            "start": 70,
            "end": 101
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 118
                },
                "prefix": true,
                "start": 110,
                "end": 118
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 123,
                "end": 131
              },
              "start": 110,
              "end": 131
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 143,
                      "end": 146
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 148
                      }
                    ],
                    "optional": false,
                    "start": 143,
                    "end": 149
                  },
                  "directive": null,
                  "start": 143,
                  "end": 150
                }
              ],
              "start": 133,
              "end": 156
            },
            "alternate": null,
            "start": 106,
            "end": 156
          }
        ],
        "start": 64,
        "end": 158
      },
      "expression": false,
      "start": 40,
      "end": 158
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 175,
              "end": 182
            },
            "start": 173,
            "end": 182
          },
          "start": 172,
          "end": 182
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 195
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 200,
                "end": 204
              },
              "start": 194,
              "end": 204
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 216,
                  "end": 223
                }
              ],
              "start": 206,
              "end": 229
            },
            "alternate": null,
            "start": 190,
            "end": 229
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "prefix": true,
                "start": 238,
                "end": 246
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 251,
                "end": 259
              },
              "start": 238,
              "end": 259
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 274
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      }
                    ],
                    "optional": false,
                    "start": 271,
                    "end": 277
                  },
                  "directive": null,
                  "start": 271,
                  "end": 278
                }
              ],
              "start": 261,
              "end": 284
            },
            "alternate": null,
            "start": 234,
            "end": 284
          }
        ],
        "start": 184,
        "end": 286
      },
      "expression": false,
      "start": 160,
      "end": 286
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 297,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 303,
              "end": 310
            },
            "start": 301,
            "end": 310
          },
          "start": 300,
          "end": 310
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 323
              },
              "operator": "==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 327,
                "end": 331
              },
              "start": 322,
              "end": 331
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 343,
                  "end": 350
                }
              ],
              "start": 333,
              "end": 356
            },
            "alternate": null,
            "start": 318,
            "end": 356
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 373
                },
                "prefix": true,
                "start": 365,
                "end": 373
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 378,
                "end": 386
              },
              "start": 365,
              "end": 386
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 401
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 402,
                        "end": 403
                      }
                    ],
                    "optional": false,
                    "start": 398,
                    "end": 404
                  },
                  "directive": null,
                  "start": 398,
                  "end": 405
                }
              ],
              "start": 388,
              "end": 411
            },
            "alternate": null,
            "start": 361,
            "end": 411
          }
        ],
        "start": 312,
        "end": 413
      },
      "expression": false,
      "start": 288,
      "end": 413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 424,
        "end": 426
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 430,
              "end": 437
            },
            "start": 428,
            "end": 437
          },
          "start": 427,
          "end": 437
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 450
              },
              "operator": "==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 463
              },
              "start": 449,
              "end": 463
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 475,
                  "end": 482
                }
              ],
              "start": 465,
              "end": 488
            },
            "alternate": null,
            "start": 445,
            "end": 488
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 505
                },
                "prefix": true,
                "start": 497,
                "end": 505
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 510,
                "end": 518
              },
              "start": 497,
              "end": 518
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 530,
                      "end": 533
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 534,
                        "end": 535
                      }
                    ],
                    "optional": false,
                    "start": 530,
                    "end": 536
                  },
                  "directive": null,
                  "start": 530,
                  "end": 537
                }
              ],
              "start": 520,
              "end": 543
            },
            "alternate": null,
            "start": 493,
            "end": 543
          }
        ],
        "start": 439,
        "end": 545
      },
      "expression": false,
      "start": 415,
      "end": 545
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 556,
        "end": 558
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 562,
              "end": 569
            },
            "start": 560,
            "end": 569
          },
          "start": 559,
          "end": 569
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 583,
                  "end": 587
                },
                "prefix": true,
                "start": 582,
                "end": 587
              },
              "prefix": true,
              "start": 581,
              "end": 587
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 605
                    },
                    "prefix": true,
                    "start": 603,
                    "end": 605
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 621,
                        "end": 628
                      }
                    ],
                    "start": 607,
                    "end": 638
                  },
                  "alternate": null,
                  "start": 599,
                  "end": 638
                }
              ],
              "start": 589,
              "end": 644
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 668,
                      "end": 669
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 674,
                      "end": 678
                    },
                    "start": 668,
                    "end": 678
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 694,
                        "end": 701
                      }
                    ],
                    "start": 680,
                    "end": 711
                  },
                  "alternate": null,
                  "start": 664,
                  "end": 711
                }
              ],
              "start": 654,
              "end": 717
            },
            "start": 577,
            "end": 717
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 733,
                  "end": 734
                },
                "prefix": true,
                "start": 726,
                "end": 734
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 739,
                "end": 747
              },
              "start": 726,
              "end": 747
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 759,
                      "end": 762
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 763,
                        "end": 764
                      }
                    ],
                    "optional": false,
                    "start": 759,
                    "end": 765
                  },
                  "directive": null,
                  "start": 759,
                  "end": 766
                }
              ],
              "start": 749,
              "end": 772
            },
            "alternate": null,
            "start": 722,
            "end": 772
          }
        ],
        "start": 571,
        "end": 774
      },
      "expression": false,
      "start": 547,
      "end": 774
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 787
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 791,
              "end": 798
            },
            "start": 789,
            "end": 798
          },
          "start": 788,
          "end": 798
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 811
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 816,
                "end": 820
              },
              "start": 810,
              "end": 820
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 832,
                    "end": 833
                  },
                  "directive": null,
                  "start": 832,
                  "end": 834
                }
              ],
              "start": 822,
              "end": 840
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 861
                  },
                  "directive": null,
                  "start": 860,
                  "end": 862
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 883
                      },
                      "prefix": true,
                      "start": 875,
                      "end": 883
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "object",
                      "raw": "'object'",
                      "start": 888,
                      "end": 896
                    },
                    "start": 875,
                    "end": 896
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "obj",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 912,
                            "end": 915
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 916,
                              "end": 917
                            }
                          ],
                          "optional": false,
                          "start": 912,
                          "end": 918
                        },
                        "directive": null,
                        "start": 912,
                        "end": 919
                      }
                    ],
                    "start": 898,
                    "end": 929
                  },
                  "alternate": null,
                  "start": 871,
                  "end": 929
                }
              ],
              "start": 850,
              "end": 935
            },
            "start": 806,
            "end": 935
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 951,
                  "end": 952
                },
                "prefix": true,
                "start": 944,
                "end": 952
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "object",
                "raw": "'object'",
                "start": 957,
                "end": 965
              },
              "start": 944,
              "end": 965
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 980
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 981,
                        "end": 982
                      }
                    ],
                    "optional": false,
                    "start": 977,
                    "end": 983
                  },
                  "directive": null,
                  "start": 977,
                  "end": 984
                }
              ],
              "start": 967,
              "end": 1000
            },
            "alternate": null,
            "start": 940,
            "end": 1000
          }
        ],
        "start": 800,
        "end": 1002
      },
      "expression": false,
      "start": 776,
      "end": 1002
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1002
}
```
