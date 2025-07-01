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
        "name": "use",
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
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 54
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
          "typeAnnotation": null,
          "start": 55,
          "end": 56
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
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
                    "start": 73,
                    "end": 74
                  },
                  "init": null,
                  "definite": false,
                  "start": 73,
                  "end": 74
                }
              ],
              "declare": false,
              "start": 69,
              "end": 74
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 78,
              "end": 80
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 96,
                        "end": 97
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 101
                      },
                      "definite": false,
                      "start": 96,
                      "end": 101
                    }
                  ],
                  "declare": false,
                  "start": 92,
                  "end": 102
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 132,
                              "end": 133
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 136,
                              "end": 137
                            },
                            "start": 132,
                            "end": 137
                          },
                          "start": 125,
                          "end": 137
                        }
                      ],
                      "start": 123,
                      "end": 139
                    },
                    "expression": false,
                    "start": 112,
                    "end": 139
                  },
                  "directive": null,
                  "start": 111,
                  "end": 141
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 158
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 162
                      },
                      "start": 157,
                      "end": 162
                    },
                    "id": null,
                    "generator": false,
                    "start": 151,
                    "end": 162
                  },
                  "directive": null,
                  "start": 150,
                  "end": 164
                },
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
                      "start": 177,
                      "end": 178
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 182,
                      "end": 183
                    },
                    "start": 177,
                    "end": 183
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 199,
                        "end": 206
                      }
                    ],
                    "start": 185,
                    "end": 216
                  },
                  "alternate": null,
                  "start": 173,
                  "end": 216
                }
              ],
              "start": 82,
              "end": 222
            },
            "start": 64,
            "end": 222
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 228,
                "end": 231
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 233
                }
              ],
              "optional": false,
              "start": 228,
              "end": 234
            },
            "directive": null,
            "start": 228,
            "end": 235
          }
        ],
        "start": 58,
        "end": 237
      },
      "expression": false,
      "start": 41,
      "end": 237
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo00",
        "optional": false,
        "typeAnnotation": null,
        "start": 248,
        "end": 253
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
          "typeAnnotation": null,
          "start": 254,
          "end": 255
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
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
                    "start": 272,
                    "end": 273
                  },
                  "init": null,
                  "definite": false,
                  "start": 272,
                  "end": 273
                }
              ],
              "declare": false,
              "start": 268,
              "end": 273
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 277,
              "end": 279
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 300
                      },
                      "definite": false,
                      "start": 295,
                      "end": 300
                    }
                  ],
                  "declare": false,
                  "start": 291,
                  "end": 301
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 332
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 335,
                              "end": 336
                            },
                            "start": 331,
                            "end": 336
                          },
                          "start": 324,
                          "end": 336
                        }
                      ],
                      "start": 322,
                      "end": 338
                    },
                    "expression": false,
                    "start": 311,
                    "end": 338
                  },
                  "directive": null,
                  "start": 310,
                  "end": 340
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 356,
                        "end": 357
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 360,
                        "end": 361
                      },
                      "start": 356,
                      "end": 361
                    },
                    "id": null,
                    "generator": false,
                    "start": 350,
                    "end": 361
                  },
                  "directive": null,
                  "start": 349,
                  "end": 363
                },
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
                      "start": 376,
                      "end": 377
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 381,
                      "end": 384
                    },
                    "start": 376,
                    "end": 384
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 400,
                        "end": 407
                      }
                    ],
                    "start": 386,
                    "end": 417
                  },
                  "alternate": null,
                  "start": 372,
                  "end": 417
                }
              ],
              "start": 281,
              "end": 423
            },
            "start": 263,
            "end": 423
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 429,
                "end": 432
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 434
                }
              ],
              "optional": false,
              "start": 429,
              "end": 435
            },
            "directive": null,
            "start": 429,
            "end": 436
          }
        ],
        "start": 257,
        "end": 438
      },
      "expression": false,
      "start": 239,
      "end": 438
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 453
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
          "typeAnnotation": null,
          "start": 454,
          "end": 455
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "start": 472,
                    "end": 473
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 476,
                    "end": 477
                  },
                  "definite": false,
                  "start": 472,
                  "end": 477
                }
              ],
              "declare": false,
              "start": 468,
              "end": 477
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 480
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 483,
                "end": 484
              },
              "start": 479,
              "end": 484
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 488,
                "end": 489
              },
              "start": 486,
              "end": 489
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 505,
                        "end": 506
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 510
                      },
                      "definite": false,
                      "start": 505,
                      "end": 510
                    }
                  ],
                  "declare": false,
                  "start": 501,
                  "end": 511
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 541,
                              "end": 542
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 545,
                              "end": 546
                            },
                            "start": 541,
                            "end": 546
                          },
                          "start": 534,
                          "end": 546
                        }
                      ],
                      "start": 532,
                      "end": 548
                    },
                    "expression": false,
                    "start": 521,
                    "end": 548
                  },
                  "directive": null,
                  "start": 520,
                  "end": 550
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 566,
                        "end": 567
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 570,
                        "end": 571
                      },
                      "start": 566,
                      "end": 571
                    },
                    "id": null,
                    "generator": false,
                    "start": 560,
                    "end": 571
                  },
                  "directive": null,
                  "start": 559,
                  "end": 573
                },
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
                      "start": 586,
                      "end": 587
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 591,
                      "end": 592
                    },
                    "start": 586,
                    "end": 592
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 608,
                        "end": 615
                      }
                    ],
                    "start": 594,
                    "end": 625
                  },
                  "alternate": null,
                  "start": 582,
                  "end": 625
                }
              ],
              "start": 491,
              "end": 631
            },
            "start": 463,
            "end": 631
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 640
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 641,
                  "end": 642
                }
              ],
              "optional": false,
              "start": 637,
              "end": 643
            },
            "directive": null,
            "start": 637,
            "end": 644
          }
        ],
        "start": 457,
        "end": 646
      },
      "expression": false,
      "start": 440,
      "end": 646
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 657,
        "end": 661
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
          "typeAnnotation": null,
          "start": 662,
          "end": 663
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 678,
                "end": 679
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 684,
                "end": 685
              },
              "start": 678,
              "end": 685
            },
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
                        "start": 701,
                        "end": 702
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 705,
                        "end": 706
                      },
                      "definite": false,
                      "start": 701,
                      "end": 706
                    }
                  ],
                  "declare": false,
                  "start": 697,
                  "end": 707
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 720,
                        "end": 721
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 724,
                        "end": 725
                      },
                      "definite": false,
                      "start": 720,
                      "end": 725
                    }
                  ],
                  "declare": false,
                  "start": 716,
                  "end": 726
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 756,
                              "end": 757
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 760,
                              "end": 761
                            },
                            "start": 756,
                            "end": 761
                          },
                          "start": 749,
                          "end": 761
                        }
                      ],
                      "start": 747,
                      "end": 763
                    },
                    "expression": false,
                    "start": 736,
                    "end": 763
                  },
                  "directive": null,
                  "start": 735,
                  "end": 765
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 781,
                        "end": 782
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 785,
                        "end": 786
                      },
                      "start": 781,
                      "end": 786
                    },
                    "id": null,
                    "generator": false,
                    "start": 775,
                    "end": 786
                  },
                  "directive": null,
                  "start": 774,
                  "end": 788
                },
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
                      "start": 801,
                      "end": 802
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 806,
                      "end": 807
                    },
                    "start": 801,
                    "end": 807
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 823,
                        "end": 830
                      }
                    ],
                    "start": 809,
                    "end": 840
                  },
                  "alternate": null,
                  "start": 797,
                  "end": 840
                }
              ],
              "start": 687,
              "end": 846
            },
            "start": 671,
            "end": 846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 856,
                "end": 859
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 860,
                  "end": 861
                }
              ],
              "optional": false,
              "start": 856,
              "end": 862
            },
            "directive": null,
            "start": 856,
            "end": 863
          }
        ],
        "start": 665,
        "end": 865
      },
      "expression": false,
      "start": 648,
      "end": 865
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 880
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
          "typeAnnotation": null,
          "start": 881,
          "end": 882
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                        "start": 907,
                        "end": 908
                      },
                      "init": null,
                      "definite": false,
                      "start": 907,
                      "end": 908
                    }
                  ],
                  "declare": false,
                  "start": 903,
                  "end": 909
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 922,
                        "end": 923
                      },
                      "init": null,
                      "definite": false,
                      "start": 922,
                      "end": 923
                    }
                  ],
                  "declare": false,
                  "start": 918,
                  "end": 924
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 954,
                              "end": 955
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 958,
                              "end": 959
                            },
                            "start": 954,
                            "end": 959
                          },
                          "start": 947,
                          "end": 959
                        }
                      ],
                      "start": 945,
                      "end": 961
                    },
                    "expression": false,
                    "start": 934,
                    "end": 961
                  },
                  "directive": null,
                  "start": 933,
                  "end": 963
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 979,
                        "end": 980
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 983,
                        "end": 984
                      },
                      "start": 979,
                      "end": 984
                    },
                    "id": null,
                    "generator": false,
                    "start": 973,
                    "end": 984
                  },
                  "directive": null,
                  "start": 972,
                  "end": 986
                },
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
                      "start": 999,
                      "end": 1000
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1004,
                      "end": 1005
                    },
                    "start": 999,
                    "end": 1005
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1021,
                        "end": 1028
                      }
                    ],
                    "start": 1007,
                    "end": 1038
                  },
                  "alternate": null,
                  "start": 995,
                  "end": 1038
                }
              ],
              "start": 893,
              "end": 1044
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1052,
                "end": 1053
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1058,
                "end": 1059
              },
              "start": 1052,
              "end": 1059
            },
            "start": 890,
            "end": 1060
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1070,
                "end": 1073
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1074,
                  "end": 1075
                }
              ],
              "optional": false,
              "start": 1070,
              "end": 1076
            },
            "directive": null,
            "start": 1070,
            "end": 1077
          }
        ],
        "start": 884,
        "end": 1079
      },
      "expression": false,
      "start": 867,
      "end": 1079
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1090,
        "end": 1094
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
          "typeAnnotation": null,
          "start": 1095,
          "end": 1096
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1113,
                    "end": 1114
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1117,
                    "end": 1118
                  },
                  "definite": false,
                  "start": 1113,
                  "end": 1118
                }
              ],
              "declare": false,
              "start": 1109,
              "end": 1118
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1120,
                "end": 1121
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1124,
                "end": 1125
              },
              "start": 1120,
              "end": 1125
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1130
              },
              "start": 1127,
              "end": 1130
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1146,
                        "end": 1147
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1151
                      },
                      "definite": false,
                      "start": 1146,
                      "end": 1151
                    }
                  ],
                  "declare": false,
                  "start": 1142,
                  "end": 1152
                },
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
                        "start": 1165,
                        "end": 1166
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1169,
                        "end": 1170
                      },
                      "definite": false,
                      "start": 1165,
                      "end": 1170
                    }
                  ],
                  "declare": false,
                  "start": 1161,
                  "end": 1171
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1201,
                              "end": 1202
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1205,
                              "end": 1206
                            },
                            "start": 1201,
                            "end": 1206
                          },
                          "start": 1194,
                          "end": 1206
                        }
                      ],
                      "start": 1192,
                      "end": 1208
                    },
                    "expression": false,
                    "start": 1181,
                    "end": 1208
                  },
                  "directive": null,
                  "start": 1180,
                  "end": 1210
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1226,
                        "end": 1227
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1230,
                        "end": 1231
                      },
                      "start": 1226,
                      "end": 1231
                    },
                    "id": null,
                    "generator": false,
                    "start": 1220,
                    "end": 1231
                  },
                  "directive": null,
                  "start": 1219,
                  "end": 1233
                },
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
                      "start": 1246,
                      "end": 1247
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1251,
                      "end": 1252
                    },
                    "start": 1246,
                    "end": 1252
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1268,
                        "end": 1275
                      }
                    ],
                    "start": 1254,
                    "end": 1285
                  },
                  "alternate": null,
                  "start": 1242,
                  "end": 1285
                }
              ],
              "start": 1132,
              "end": 1291
            },
            "start": 1104,
            "end": 1291
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1301,
                "end": 1304
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1305,
                  "end": 1306
                }
              ],
              "optional": false,
              "start": 1301,
              "end": 1307
            },
            "directive": null,
            "start": 1301,
            "end": 1308
          }
        ],
        "start": 1098,
        "end": 1310
      },
      "expression": false,
      "start": 1081,
      "end": 1310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1325
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
          "typeAnnotation": null,
          "start": 1326,
          "end": 1327
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "start": 1344,
                    "end": 1345
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1348,
                    "end": 1349
                  },
                  "definite": false,
                  "start": 1344,
                  "end": 1349
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1351,
                    "end": 1352
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1355,
                    "end": 1356
                  },
                  "definite": false,
                  "start": 1351,
                  "end": 1356
                }
              ],
              "declare": false,
              "start": 1340,
              "end": 1356
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1359
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1362,
                "end": 1363
              },
              "start": 1358,
              "end": 1363
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1367,
                "end": 1368
              },
              "start": 1365,
              "end": 1368
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1384,
                        "end": 1385
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1388,
                        "end": 1389
                      },
                      "definite": false,
                      "start": 1384,
                      "end": 1389
                    }
                  ],
                  "declare": false,
                  "start": 1380,
                  "end": 1390
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1420,
                                "end": 1421
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1424,
                                "end": 1425
                              },
                              "start": 1420,
                              "end": 1425
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1428,
                              "end": 1429
                            },
                            "start": 1420,
                            "end": 1429
                          },
                          "start": 1413,
                          "end": 1429
                        }
                      ],
                      "start": 1411,
                      "end": 1431
                    },
                    "expression": false,
                    "start": 1400,
                    "end": 1431
                  },
                  "directive": null,
                  "start": 1399,
                  "end": 1433
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1449,
                          "end": 1450
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1453,
                          "end": 1454
                        },
                        "start": 1449,
                        "end": 1454
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1457,
                        "end": 1458
                      },
                      "start": 1449,
                      "end": 1458
                    },
                    "id": null,
                    "generator": false,
                    "start": 1443,
                    "end": 1458
                  },
                  "directive": null,
                  "start": 1442,
                  "end": 1460
                },
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
                      "start": 1473,
                      "end": 1474
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1478,
                      "end": 1479
                    },
                    "start": 1473,
                    "end": 1479
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1495,
                        "end": 1502
                      }
                    ],
                    "start": 1481,
                    "end": 1512
                  },
                  "alternate": null,
                  "start": 1469,
                  "end": 1512
                }
              ],
              "start": 1370,
              "end": 1518
            },
            "start": 1335,
            "end": 1518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1528,
                "end": 1531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1532,
                  "end": 1533
                }
              ],
              "optional": false,
              "start": 1528,
              "end": 1534
            },
            "directive": null,
            "start": 1528,
            "end": 1535
          }
        ],
        "start": 1329,
        "end": 1537
      },
      "expression": false,
      "start": 1312,
      "end": 1537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1553
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
          "typeAnnotation": null,
          "start": 1554,
          "end": 1555
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1570,
                "end": 1571
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1576,
                "end": 1577
              },
              "start": 1570,
              "end": 1577
            },
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
                        "start": 1593,
                        "end": 1594
                      },
                      "init": null,
                      "definite": false,
                      "start": 1593,
                      "end": 1594
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1596,
                        "end": 1597
                      },
                      "init": null,
                      "definite": false,
                      "start": 1596,
                      "end": 1597
                    }
                  ],
                  "declare": false,
                  "start": 1589,
                  "end": 1598
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1611,
                        "end": 1612
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1615,
                        "end": 1616
                      },
                      "definite": false,
                      "start": 1611,
                      "end": 1616
                    }
                  ],
                  "declare": false,
                  "start": 1607,
                  "end": 1617
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1647,
                                "end": 1648
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1651,
                                "end": 1652
                              },
                              "start": 1647,
                              "end": 1652
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1655,
                              "end": 1656
                            },
                            "start": 1647,
                            "end": 1656
                          },
                          "start": 1640,
                          "end": 1656
                        }
                      ],
                      "start": 1638,
                      "end": 1658
                    },
                    "expression": false,
                    "start": 1627,
                    "end": 1658
                  },
                  "directive": null,
                  "start": 1626,
                  "end": 1660
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1676,
                          "end": 1677
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1680,
                          "end": 1681
                        },
                        "start": 1676,
                        "end": 1681
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1684,
                        "end": 1685
                      },
                      "start": 1676,
                      "end": 1685
                    },
                    "id": null,
                    "generator": false,
                    "start": 1670,
                    "end": 1685
                  },
                  "directive": null,
                  "start": 1669,
                  "end": 1687
                },
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
                      "start": 1700,
                      "end": 1701
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1705,
                      "end": 1706
                    },
                    "start": 1700,
                    "end": 1706
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1722,
                        "end": 1729
                      }
                    ],
                    "start": 1708,
                    "end": 1739
                  },
                  "alternate": null,
                  "start": 1696,
                  "end": 1739
                }
              ],
              "start": 1579,
              "end": 1745
            },
            "start": 1563,
            "end": 1745
          },
          {
            "type": "EmptyStatement",
            "start": 1745,
            "end": 1746
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1756,
                "end": 1759
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1760,
                  "end": 1761
                }
              ],
              "optional": false,
              "start": 1756,
              "end": 1762
            },
            "directive": null,
            "start": 1756,
            "end": 1762
          }
        ],
        "start": 1557,
        "end": 1764
      },
      "expression": false,
      "start": 1540,
      "end": 1764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1775,
        "end": 1779
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
          "typeAnnotation": null,
          "start": 1780,
          "end": 1781
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "DoWhileStatement",
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
                        "start": 1806,
                        "end": 1807
                      },
                      "init": null,
                      "definite": false,
                      "start": 1806,
                      "end": 1807
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1809,
                        "end": 1810
                      },
                      "init": null,
                      "definite": false,
                      "start": 1809,
                      "end": 1810
                    }
                  ],
                  "declare": false,
                  "start": 1802,
                  "end": 1811
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1824,
                        "end": 1825
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1828,
                        "end": 1829
                      },
                      "definite": false,
                      "start": 1824,
                      "end": 1829
                    }
                  ],
                  "declare": false,
                  "start": 1820,
                  "end": 1830
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1860,
                                "end": 1861
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1864,
                                "end": 1865
                              },
                              "start": 1860,
                              "end": 1865
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1868,
                              "end": 1869
                            },
                            "start": 1860,
                            "end": 1869
                          },
                          "start": 1853,
                          "end": 1869
                        }
                      ],
                      "start": 1851,
                      "end": 1871
                    },
                    "expression": false,
                    "start": 1840,
                    "end": 1871
                  },
                  "directive": null,
                  "start": 1839,
                  "end": 1873
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1889,
                          "end": 1890
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1893,
                          "end": 1894
                        },
                        "start": 1889,
                        "end": 1894
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1897,
                        "end": 1898
                      },
                      "start": 1889,
                      "end": 1898
                    },
                    "id": null,
                    "generator": false,
                    "start": 1883,
                    "end": 1898
                  },
                  "directive": null,
                  "start": 1882,
                  "end": 1900
                },
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
                      "start": 1913,
                      "end": 1914
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1918,
                      "end": 1919
                    },
                    "start": 1913,
                    "end": 1919
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 1935,
                        "end": 1942
                      }
                    ],
                    "start": 1921,
                    "end": 1952
                  },
                  "alternate": null,
                  "start": 1909,
                  "end": 1952
                }
              ],
              "start": 1792,
              "end": 1958
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1966,
                "end": 1967
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1972,
                "end": 1973
              },
              "start": 1966,
              "end": 1973
            },
            "start": 1789,
            "end": 1975
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 1985,
                "end": 1988
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1989,
                  "end": 1990
                }
              ],
              "optional": false,
              "start": 1985,
              "end": 1991
            },
            "directive": null,
            "start": 1985,
            "end": 1992
          }
        ],
        "start": 1783,
        "end": 1994
      },
      "expression": false,
      "start": 1766,
      "end": 1994
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 2006,
        "end": 2010
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
          "typeAnnotation": null,
          "start": 2011,
          "end": 2012
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2029,
                    "end": 2030
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2033,
                    "end": 2034
                  },
                  "definite": false,
                  "start": 2029,
                  "end": 2034
                }
              ],
              "declare": false,
              "start": 2025,
              "end": 2034
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2036,
                "end": 2037
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2040,
                "end": 2041
              },
              "start": 2036,
              "end": 2041
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2045,
                "end": 2046
              },
              "start": 2043,
              "end": 2046
            },
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
                        "start": 2062,
                        "end": 2063
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2066,
                        "end": 2067
                      },
                      "definite": false,
                      "start": 2062,
                      "end": 2067
                    }
                  ],
                  "declare": false,
                  "start": 2058,
                  "end": 2068
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2081,
                        "end": 2082
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2085,
                        "end": 2086
                      },
                      "definite": false,
                      "start": 2081,
                      "end": 2086
                    }
                  ],
                  "declare": false,
                  "start": 2077,
                  "end": 2087
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2117,
                                "end": 2118
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2121,
                                "end": 2122
                              },
                              "start": 2117,
                              "end": 2122
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2125,
                              "end": 2126
                            },
                            "start": 2117,
                            "end": 2126
                          },
                          "start": 2110,
                          "end": 2126
                        }
                      ],
                      "start": 2108,
                      "end": 2128
                    },
                    "expression": false,
                    "start": 2097,
                    "end": 2128
                  },
                  "directive": null,
                  "start": 2096,
                  "end": 2130
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2146,
                          "end": 2147
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2150,
                          "end": 2151
                        },
                        "start": 2146,
                        "end": 2151
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2154,
                        "end": 2155
                      },
                      "start": 2146,
                      "end": 2155
                    },
                    "id": null,
                    "generator": false,
                    "start": 2140,
                    "end": 2155
                  },
                  "directive": null,
                  "start": 2139,
                  "end": 2157
                },
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
                      "start": 2170,
                      "end": 2171
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2175,
                      "end": 2176
                    },
                    "start": 2170,
                    "end": 2176
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2192,
                        "end": 2199
                      }
                    ],
                    "start": 2178,
                    "end": 2209
                  },
                  "alternate": null,
                  "start": 2166,
                  "end": 2209
                }
              ],
              "start": 2048,
              "end": 2215
            },
            "start": 2020,
            "end": 2215
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2225,
                "end": 2228
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2229,
                  "end": 2230
                }
              ],
              "optional": false,
              "start": 2225,
              "end": 2231
            },
            "directive": null,
            "start": 2225,
            "end": 2232
          }
        ],
        "start": 2014,
        "end": 2234
      },
      "expression": false,
      "start": 1997,
      "end": 2234
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2257,
        "end": 2263
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
          "typeAnnotation": null,
          "start": 2264,
          "end": 2265
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2284,
                    "end": 2285
                  },
                  "init": null,
                  "definite": false,
                  "start": 2284,
                  "end": 2285
                }
              ],
              "declare": false,
              "start": 2278,
              "end": 2285
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2289,
              "end": 2291
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2307,
                        "end": 2308
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2311,
                        "end": 2312
                      },
                      "definite": false,
                      "start": 2307,
                      "end": 2312
                    }
                  ],
                  "declare": false,
                  "start": 2303,
                  "end": 2313
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2343,
                              "end": 2344
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2347,
                              "end": 2348
                            },
                            "start": 2343,
                            "end": 2348
                          },
                          "start": 2336,
                          "end": 2348
                        }
                      ],
                      "start": 2334,
                      "end": 2350
                    },
                    "expression": false,
                    "start": 2323,
                    "end": 2350
                  },
                  "directive": null,
                  "start": 2322,
                  "end": 2352
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2368,
                        "end": 2369
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2372,
                        "end": 2373
                      },
                      "start": 2368,
                      "end": 2373
                    },
                    "id": null,
                    "generator": false,
                    "start": 2362,
                    "end": 2373
                  },
                  "directive": null,
                  "start": 2361,
                  "end": 2375
                },
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
                      "start": 2388,
                      "end": 2389
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2393,
                      "end": 2394
                    },
                    "start": 2388,
                    "end": 2394
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2410,
                        "end": 2417
                      }
                    ],
                    "start": 2396,
                    "end": 2427
                  },
                  "alternate": null,
                  "start": 2384,
                  "end": 2427
                }
              ],
              "start": 2293,
              "end": 2433
            },
            "start": 2273,
            "end": 2433
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2439,
                "end": 2442
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2443,
                  "end": 2444
                }
              ],
              "optional": false,
              "start": 2439,
              "end": 2445
            },
            "directive": null,
            "start": 2439,
            "end": 2446
          }
        ],
        "start": 2267,
        "end": 2448
      },
      "expression": false,
      "start": 2248,
      "end": 2448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo00_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2459,
        "end": 2466
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
          "typeAnnotation": null,
          "start": 2467,
          "end": 2468
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForInStatement",
            "left": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2487,
                    "end": 2488
                  },
                  "init": null,
                  "definite": false,
                  "start": 2487,
                  "end": 2488
                }
              ],
              "declare": false,
              "start": 2481,
              "end": 2488
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 2492,
              "end": 2494
            },
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2510,
                        "end": 2511
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2514,
                        "end": 2515
                      },
                      "definite": false,
                      "start": 2510,
                      "end": 2515
                    }
                  ],
                  "declare": false,
                  "start": 2506,
                  "end": 2516
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2546,
                              "end": 2547
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2550,
                              "end": 2551
                            },
                            "start": 2546,
                            "end": 2551
                          },
                          "start": 2539,
                          "end": 2551
                        }
                      ],
                      "start": 2537,
                      "end": 2553
                    },
                    "expression": false,
                    "start": 2526,
                    "end": 2553
                  },
                  "directive": null,
                  "start": 2525,
                  "end": 2555
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2571,
                        "end": 2572
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2575,
                        "end": 2576
                      },
                      "start": 2571,
                      "end": 2576
                    },
                    "id": null,
                    "generator": false,
                    "start": 2565,
                    "end": 2576
                  },
                  "directive": null,
                  "start": 2564,
                  "end": 2578
                },
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
                      "start": 2591,
                      "end": 2592
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": "1",
                      "raw": "\"1\"",
                      "start": 2596,
                      "end": 2599
                    },
                    "start": 2591,
                    "end": 2599
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2615,
                        "end": 2622
                      }
                    ],
                    "start": 2601,
                    "end": 2632
                  },
                  "alternate": null,
                  "start": 2587,
                  "end": 2632
                }
              ],
              "start": 2496,
              "end": 2638
            },
            "start": 2476,
            "end": 2638
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2644,
                "end": 2647
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2648,
                  "end": 2649
                }
              ],
              "optional": false,
              "start": 2644,
              "end": 2650
            },
            "directive": null,
            "start": 2644,
            "end": 2651
          }
        ],
        "start": 2470,
        "end": 2653
      },
      "expression": false,
      "start": 2450,
      "end": 2653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2664,
        "end": 2670
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
          "typeAnnotation": null,
          "start": 2671,
          "end": 2672
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2691,
                    "end": 2692
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2695,
                    "end": 2696
                  },
                  "definite": false,
                  "start": 2691,
                  "end": 2696
                }
              ],
              "declare": false,
              "start": 2685,
              "end": 2696
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2698,
                "end": 2699
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2702,
                "end": 2703
              },
              "start": 2698,
              "end": 2703
            },
            "update": null,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2720,
                        "end": 2721
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2724,
                        "end": 2725
                      },
                      "definite": false,
                      "start": 2720,
                      "end": 2725
                    }
                  ],
                  "declare": false,
                  "start": 2716,
                  "end": 2726
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2756,
                              "end": 2757
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2760,
                              "end": 2761
                            },
                            "start": 2756,
                            "end": 2761
                          },
                          "start": 2749,
                          "end": 2761
                        }
                      ],
                      "start": 2747,
                      "end": 2763
                    },
                    "expression": false,
                    "start": 2736,
                    "end": 2763
                  },
                  "directive": null,
                  "start": 2735,
                  "end": 2765
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2781,
                        "end": 2782
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2785,
                        "end": 2786
                      },
                      "start": 2781,
                      "end": 2786
                    },
                    "id": null,
                    "generator": false,
                    "start": 2775,
                    "end": 2786
                  },
                  "directive": null,
                  "start": 2774,
                  "end": 2788
                },
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
                      "start": 2801,
                      "end": 2802
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2806,
                      "end": 2807
                    },
                    "start": 2801,
                    "end": 2807
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 2823,
                        "end": 2830
                      }
                    ],
                    "start": 2809,
                    "end": 2840
                  },
                  "alternate": null,
                  "start": 2797,
                  "end": 2840
                }
              ],
              "start": 2706,
              "end": 2846
            },
            "start": 2680,
            "end": 2846
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 2852,
                "end": 2855
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2856,
                  "end": 2857
                }
              ],
              "optional": false,
              "start": 2852,
              "end": 2858
            },
            "directive": null,
            "start": 2852,
            "end": 2859
          }
        ],
        "start": 2674,
        "end": 2861
      },
      "expression": false,
      "start": 2655,
      "end": 2861
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2872,
        "end": 2878
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
          "typeAnnotation": null,
          "start": 2879,
          "end": 2880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2895,
                "end": 2896
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2901,
                "end": 2902
              },
              "start": 2895,
              "end": 2902
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2920,
                        "end": 2921
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2924,
                        "end": 2925
                      },
                      "definite": false,
                      "start": 2920,
                      "end": 2925
                    }
                  ],
                  "declare": false,
                  "start": 2914,
                  "end": 2926
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2939,
                        "end": 2940
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2943,
                        "end": 2944
                      },
                      "definite": false,
                      "start": 2939,
                      "end": 2944
                    }
                  ],
                  "declare": false,
                  "start": 2935,
                  "end": 2945
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2975,
                              "end": 2976
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2979,
                              "end": 2980
                            },
                            "start": 2975,
                            "end": 2980
                          },
                          "start": 2968,
                          "end": 2980
                        }
                      ],
                      "start": 2966,
                      "end": 2982
                    },
                    "expression": false,
                    "start": 2955,
                    "end": 2982
                  },
                  "directive": null,
                  "start": 2954,
                  "end": 2984
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3000,
                        "end": 3001
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3004,
                        "end": 3005
                      },
                      "start": 3000,
                      "end": 3005
                    },
                    "id": null,
                    "generator": false,
                    "start": 2994,
                    "end": 3005
                  },
                  "directive": null,
                  "start": 2993,
                  "end": 3007
                },
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
                      "start": 3020,
                      "end": 3021
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3025,
                      "end": 3026
                    },
                    "start": 3020,
                    "end": 3026
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3042,
                        "end": 3049
                      }
                    ],
                    "start": 3028,
                    "end": 3059
                  },
                  "alternate": null,
                  "start": 3016,
                  "end": 3059
                }
              ],
              "start": 2904,
              "end": 3065
            },
            "start": 2888,
            "end": 3065
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3075,
                "end": 3078
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3079,
                  "end": 3080
                }
              ],
              "optional": false,
              "start": 3075,
              "end": 3081
            },
            "directive": null,
            "start": 3075,
            "end": 3082
          }
        ],
        "start": 2882,
        "end": 3084
      },
      "expression": false,
      "start": 2863,
      "end": 3084
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3095,
        "end": 3101
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
          "typeAnnotation": null,
          "start": 3102,
          "end": 3103
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3130,
                        "end": 3131
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3134,
                        "end": 3135
                      },
                      "definite": false,
                      "start": 3130,
                      "end": 3135
                    }
                  ],
                  "declare": false,
                  "start": 3124,
                  "end": 3136
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3149,
                        "end": 3150
                      },
                      "init": null,
                      "definite": false,
                      "start": 3149,
                      "end": 3150
                    }
                  ],
                  "declare": false,
                  "start": 3145,
                  "end": 3151
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3181,
                              "end": 3182
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3185,
                              "end": 3186
                            },
                            "start": 3181,
                            "end": 3186
                          },
                          "start": 3174,
                          "end": 3186
                        }
                      ],
                      "start": 3172,
                      "end": 3188
                    },
                    "expression": false,
                    "start": 3161,
                    "end": 3188
                  },
                  "directive": null,
                  "start": 3160,
                  "end": 3190
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3206,
                        "end": 3207
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3210,
                        "end": 3211
                      },
                      "start": 3206,
                      "end": 3211
                    },
                    "id": null,
                    "generator": false,
                    "start": 3200,
                    "end": 3211
                  },
                  "directive": null,
                  "start": 3199,
                  "end": 3213
                },
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
                      "start": 3226,
                      "end": 3227
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3231,
                      "end": 3232
                    },
                    "start": 3226,
                    "end": 3232
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3248,
                        "end": 3255
                      }
                    ],
                    "start": 3234,
                    "end": 3265
                  },
                  "alternate": null,
                  "start": 3222,
                  "end": 3265
                }
              ],
              "start": 3114,
              "end": 3271
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3279,
                "end": 3280
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3285,
                "end": 3286
              },
              "start": 3279,
              "end": 3286
            },
            "start": 3111,
            "end": 3287
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3297,
                "end": 3300
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3301,
                  "end": 3302
                }
              ],
              "optional": false,
              "start": 3297,
              "end": 3303
            },
            "directive": null,
            "start": 3297,
            "end": 3304
          }
        ],
        "start": 3105,
        "end": 3306
      },
      "expression": false,
      "start": 3086,
      "end": 3306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3317,
        "end": 3323
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
          "typeAnnotation": null,
          "start": 3324,
          "end": 3325
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "start": 3344,
                    "end": 3345
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3348,
                    "end": 3349
                  },
                  "definite": false,
                  "start": 3344,
                  "end": 3349
                }
              ],
              "declare": false,
              "start": 3338,
              "end": 3349
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3351,
                "end": 3352
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3355,
                "end": 3356
              },
              "start": 3351,
              "end": 3356
            },
            "update": null,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3373,
                        "end": 3374
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3377,
                        "end": 3378
                      },
                      "definite": false,
                      "start": 3373,
                      "end": 3378
                    }
                  ],
                  "declare": false,
                  "start": 3369,
                  "end": 3379
                },
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
                        "start": 3392,
                        "end": 3393
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3396,
                        "end": 3397
                      },
                      "definite": false,
                      "start": 3392,
                      "end": 3397
                    }
                  ],
                  "declare": false,
                  "start": 3388,
                  "end": 3398
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3428,
                              "end": 3429
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3432,
                              "end": 3433
                            },
                            "start": 3428,
                            "end": 3433
                          },
                          "start": 3421,
                          "end": 3433
                        }
                      ],
                      "start": 3419,
                      "end": 3435
                    },
                    "expression": false,
                    "start": 3408,
                    "end": 3435
                  },
                  "directive": null,
                  "start": 3407,
                  "end": 3437
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3453,
                        "end": 3454
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3457,
                        "end": 3458
                      },
                      "start": 3453,
                      "end": 3458
                    },
                    "id": null,
                    "generator": false,
                    "start": 3447,
                    "end": 3458
                  },
                  "directive": null,
                  "start": 3446,
                  "end": 3460
                },
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
                      "start": 3473,
                      "end": 3474
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3478,
                      "end": 3479
                    },
                    "start": 3473,
                    "end": 3479
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3495,
                        "end": 3502
                      }
                    ],
                    "start": 3481,
                    "end": 3512
                  },
                  "alternate": null,
                  "start": 3469,
                  "end": 3512
                }
              ],
              "start": 3359,
              "end": 3518
            },
            "start": 3333,
            "end": 3518
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3528,
                "end": 3531
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3532,
                  "end": 3533
                }
              ],
              "optional": false,
              "start": 3528,
              "end": 3534
            },
            "directive": null,
            "start": 3528,
            "end": 3535
          }
        ],
        "start": 3327,
        "end": 3537
      },
      "expression": false,
      "start": 3308,
      "end": 3537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3548,
        "end": 3554
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
          "typeAnnotation": null,
          "start": 3555,
          "end": 3556
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3575,
                    "end": 3576
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3579,
                    "end": 3580
                  },
                  "definite": false,
                  "start": 3575,
                  "end": 3580
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3582,
                    "end": 3583
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 3586,
                    "end": 3587
                  },
                  "definite": false,
                  "start": 3582,
                  "end": 3587
                }
              ],
              "declare": false,
              "start": 3569,
              "end": 3587
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3589,
                "end": 3590
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3593,
                "end": 3594
              },
              "start": 3589,
              "end": 3594
            },
            "update": null,
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3611,
                        "end": 3612
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3615,
                        "end": 3616
                      },
                      "definite": false,
                      "start": 3611,
                      "end": 3616
                    }
                  ],
                  "declare": false,
                  "start": 3607,
                  "end": 3617
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3647,
                                "end": 3648
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3651,
                                "end": 3652
                              },
                              "start": 3647,
                              "end": 3652
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3655,
                              "end": 3656
                            },
                            "start": 3647,
                            "end": 3656
                          },
                          "start": 3640,
                          "end": 3656
                        }
                      ],
                      "start": 3638,
                      "end": 3658
                    },
                    "expression": false,
                    "start": 3627,
                    "end": 3658
                  },
                  "directive": null,
                  "start": 3626,
                  "end": 3660
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3676,
                          "end": 3677
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3680,
                          "end": 3681
                        },
                        "start": 3676,
                        "end": 3681
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3684,
                        "end": 3685
                      },
                      "start": 3676,
                      "end": 3685
                    },
                    "id": null,
                    "generator": false,
                    "start": 3670,
                    "end": 3685
                  },
                  "directive": null,
                  "start": 3669,
                  "end": 3687
                },
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
                      "start": 3700,
                      "end": 3701
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3705,
                      "end": 3706
                    },
                    "start": 3700,
                    "end": 3706
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3722,
                        "end": 3729
                      }
                    ],
                    "start": 3708,
                    "end": 3739
                  },
                  "alternate": null,
                  "start": 3696,
                  "end": 3739
                }
              ],
              "start": 3597,
              "end": 3745
            },
            "start": 3564,
            "end": 3745
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3755,
                "end": 3758
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3759,
                  "end": 3760
                }
              ],
              "optional": false,
              "start": 3755,
              "end": 3761
            },
            "directive": null,
            "start": 3755,
            "end": 3762
          }
        ],
        "start": 3558,
        "end": 3764
      },
      "expression": false,
      "start": 3539,
      "end": 3764
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3776,
        "end": 3782
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
          "typeAnnotation": null,
          "start": 3783,
          "end": 3784
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "WhileStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3799,
                "end": 3800
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3805,
                "end": 3806
              },
              "start": 3799,
              "end": 3806
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3824,
                        "end": 3825
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3828,
                        "end": 3829
                      },
                      "definite": false,
                      "start": 3824,
                      "end": 3829
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3831,
                        "end": 3832
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3835,
                        "end": 3836
                      },
                      "definite": false,
                      "start": 3831,
                      "end": 3836
                    }
                  ],
                  "declare": false,
                  "start": 3818,
                  "end": 3837
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3850,
                        "end": 3851
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3854,
                        "end": 3855
                      },
                      "definite": false,
                      "start": 3850,
                      "end": 3855
                    }
                  ],
                  "declare": false,
                  "start": 3846,
                  "end": 3856
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3886,
                                "end": 3887
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3890,
                                "end": 3891
                              },
                              "start": 3886,
                              "end": 3891
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3894,
                              "end": 3895
                            },
                            "start": 3886,
                            "end": 3895
                          },
                          "start": 3879,
                          "end": 3895
                        }
                      ],
                      "start": 3877,
                      "end": 3897
                    },
                    "expression": false,
                    "start": 3866,
                    "end": 3897
                  },
                  "directive": null,
                  "start": 3865,
                  "end": 3899
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3915,
                          "end": 3916
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3919,
                          "end": 3920
                        },
                        "start": 3915,
                        "end": 3920
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3923,
                        "end": 3924
                      },
                      "start": 3915,
                      "end": 3924
                    },
                    "id": null,
                    "generator": false,
                    "start": 3909,
                    "end": 3924
                  },
                  "directive": null,
                  "start": 3908,
                  "end": 3926
                },
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
                      "start": 3939,
                      "end": 3940
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3944,
                      "end": 3945
                    },
                    "start": 3939,
                    "end": 3945
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3961,
                        "end": 3968
                      }
                    ],
                    "start": 3947,
                    "end": 3978
                  },
                  "alternate": null,
                  "start": 3935,
                  "end": 3978
                }
              ],
              "start": 3808,
              "end": 3984
            },
            "start": 3792,
            "end": 3984
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 3994,
                "end": 3997
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3998,
                  "end": 3999
                }
              ],
              "optional": false,
              "start": 3994,
              "end": 4000
            },
            "directive": null,
            "start": 3994,
            "end": 4000
          }
        ],
        "start": 3786,
        "end": 4002
      },
      "expression": false,
      "start": 3767,
      "end": 4002
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4013,
        "end": 4019
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
          "typeAnnotation": null,
          "start": 4020,
          "end": 4021
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4048,
                        "end": 4049
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4052,
                        "end": 4053
                      },
                      "definite": false,
                      "start": 4048,
                      "end": 4053
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4055,
                        "end": 4056
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4059,
                        "end": 4060
                      },
                      "definite": false,
                      "start": 4055,
                      "end": 4060
                    }
                  ],
                  "declare": false,
                  "start": 4042,
                  "end": 4061
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4074,
                        "end": 4075
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4078,
                        "end": 4079
                      },
                      "definite": false,
                      "start": 4074,
                      "end": 4079
                    }
                  ],
                  "declare": false,
                  "start": 4070,
                  "end": 4080
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4110,
                                "end": 4111
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4114,
                                "end": 4115
                              },
                              "start": 4110,
                              "end": 4115
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4118,
                              "end": 4119
                            },
                            "start": 4110,
                            "end": 4119
                          },
                          "start": 4103,
                          "end": 4119
                        }
                      ],
                      "start": 4101,
                      "end": 4121
                    },
                    "expression": false,
                    "start": 4090,
                    "end": 4121
                  },
                  "directive": null,
                  "start": 4089,
                  "end": 4123
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4139,
                          "end": 4140
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4143,
                          "end": 4144
                        },
                        "start": 4139,
                        "end": 4144
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4147,
                        "end": 4148
                      },
                      "start": 4139,
                      "end": 4148
                    },
                    "id": null,
                    "generator": false,
                    "start": 4133,
                    "end": 4148
                  },
                  "directive": null,
                  "start": 4132,
                  "end": 4150
                },
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
                      "start": 4163,
                      "end": 4164
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4168,
                      "end": 4169
                    },
                    "start": 4163,
                    "end": 4169
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 4185,
                        "end": 4192
                      }
                    ],
                    "start": 4171,
                    "end": 4202
                  },
                  "alternate": null,
                  "start": 4159,
                  "end": 4202
                }
              ],
              "start": 4032,
              "end": 4208
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4216,
                "end": 4217
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4222,
                "end": 4223
              },
              "start": 4216,
              "end": 4223
            },
            "start": 4029,
            "end": 4224
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 4234,
                "end": 4237
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4238,
                  "end": 4239
                }
              ],
              "optional": false,
              "start": 4234,
              "end": 4240
            },
            "directive": null,
            "start": 4234,
            "end": 4241
          }
        ],
        "start": 4023,
        "end": 4243
      },
      "expression": false,
      "start": 4004,
      "end": 4243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 4255,
        "end": 4261
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
          "typeAnnotation": null,
          "start": 4262,
          "end": 4263
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ForStatement",
            "init": {
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
                    "start": 4282,
                    "end": 4283
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4286,
                    "end": 4287
                  },
                  "definite": false,
                  "start": 4282,
                  "end": 4287
                }
              ],
              "declare": false,
              "start": 4276,
              "end": 4287
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 4289,
                "end": 4290
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 4293,
                "end": 4294
              },
              "start": 4289,
              "end": 4294
            },
            "update": null,
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4313,
                        "end": 4314
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4317,
                        "end": 4318
                      },
                      "definite": false,
                      "start": 4313,
                      "end": 4318
                    }
                  ],
                  "declare": false,
                  "start": 4307,
                  "end": 4319
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4332,
                        "end": 4333
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4336,
                        "end": 4337
                      },
                      "definite": false,
                      "start": 4332,
                      "end": 4337
                    }
                  ],
                  "declare": false,
                  "start": 4328,
                  "end": 4338
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4368,
                                "end": 4369
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4372,
                                "end": 4373
                              },
                              "start": 4368,
                              "end": 4373
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4376,
                              "end": 4377
                            },
                            "start": 4368,
                            "end": 4377
                          },
                          "start": 4361,
                          "end": 4377
                        }
                      ],
                      "start": 4359,
                      "end": 4379
                    },
                    "expression": false,
                    "start": 4348,
                    "end": 4379
                  },
                  "directive": null,
                  "start": 4347,
                  "end": 4381
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4397,
                          "end": 4398
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4401,
                          "end": 4402
                        },
                        "start": 4397,
                        "end": 4402
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4405,
                        "end": 4406
                      },
                      "start": 4397,
                      "end": 4406
                    },
                    "id": null,
                    "generator": false,
                    "start": 4391,
                    "end": 4406
                  },
                  "directive": null,
                  "start": 4390,
                  "end": 4408
                },
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
                      "start": 4421,
                      "end": 4422
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4426,
                      "end": 4427
                    },
                    "start": 4421,
                    "end": 4427
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 4443,
                        "end": 4450
                      }
                    ],
                    "start": 4429,
                    "end": 4460
                  },
                  "alternate": null,
                  "start": 4417,
                  "end": 4460
                }
              ],
              "start": 4297,
              "end": 4466
            },
            "start": 4271,
            "end": 4466
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "use",
                "optional": false,
                "typeAnnotation": null,
                "start": 4476,
                "end": 4479
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4480,
                  "end": 4481
                }
              ],
              "optional": false,
              "start": 4476,
              "end": 4482
            },
            "directive": null,
            "start": 4476,
            "end": 4483
          }
        ],
        "start": 4265,
        "end": 4485
      },
      "expression": false,
      "start": 4246,
      "end": 4485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4485
}
```
