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
        "start": 33,
        "end": 36
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
              "start": 40,
              "end": 43
            },
            "start": 38,
            "end": 43
          },
          "start": 37,
          "end": 43
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 16,
      "end": 45
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 59
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
          "start": 60,
          "end": 61
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
                    "start": 78,
                    "end": 79
                  },
                  "init": null,
                  "definite": false,
                  "start": 78,
                  "end": 79
                }
              ],
              "declare": false,
              "start": 74,
              "end": 79
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 83,
              "end": 85
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
                        "start": 101,
                        "end": 102
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 105,
                        "end": 106
                      },
                      "definite": false,
                      "start": 101,
                      "end": 106
                    }
                  ],
                  "declare": false,
                  "start": 97,
                  "end": 107
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
                              "start": 137,
                              "end": 138
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 142
                            },
                            "start": 137,
                            "end": 142
                          },
                          "start": 130,
                          "end": 142
                        }
                      ],
                      "start": 128,
                      "end": 144
                    },
                    "expression": false,
                    "start": 117,
                    "end": 144
                  },
                  "directive": null,
                  "start": 116,
                  "end": 146
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
                        "start": 162,
                        "end": 163
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 166,
                        "end": 167
                      },
                      "start": 162,
                      "end": 167
                    },
                    "id": null,
                    "generator": false,
                    "start": 156,
                    "end": 167
                  },
                  "directive": null,
                  "start": 155,
                  "end": 169
                }
              ],
              "start": 87,
              "end": 175
            },
            "start": 69,
            "end": 175
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
                "start": 181,
                "end": 184
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 186
                }
              ],
              "optional": false,
              "start": 181,
              "end": 187
            },
            "directive": null,
            "start": 181,
            "end": 188
          }
        ],
        "start": 63,
        "end": 190
      },
      "expression": false,
      "start": 46,
      "end": 190
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1",
        "optional": false,
        "typeAnnotation": null,
        "start": 201,
        "end": 207
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
          "start": 208,
          "end": 209
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
                    "start": 226,
                    "end": 227
                  },
                  "init": null,
                  "definite": false,
                  "start": 226,
                  "end": 227
                }
              ],
              "declare": false,
              "start": 222,
              "end": 227
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 231,
              "end": 233
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
                        "start": 249,
                        "end": 250
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 253,
                        "end": 254
                      },
                      "definite": false,
                      "start": 249,
                      "end": 254
                    }
                  ],
                  "declare": false,
                  "start": 245,
                  "end": 255
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
                              "start": 285,
                              "end": 286
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 289,
                              "end": 290
                            },
                            "start": 285,
                            "end": 290
                          },
                          "start": 278,
                          "end": 290
                        }
                      ],
                      "start": 276,
                      "end": 292
                    },
                    "expression": false,
                    "start": 265,
                    "end": 292
                  },
                  "directive": null,
                  "start": 264,
                  "end": 294
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
                        "start": 310,
                        "end": 311
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "start": 310,
                      "end": 315
                    },
                    "id": null,
                    "generator": false,
                    "start": 304,
                    "end": 315
                  },
                  "directive": null,
                  "start": 303,
                  "end": 317
                }
              ],
              "start": 235,
              "end": 323
            },
            "start": 217,
            "end": 323
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
                "start": 329,
                "end": 332
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                }
              ],
              "optional": false,
              "start": 329,
              "end": 335
            },
            "directive": null,
            "start": 329,
            "end": 336
          }
        ],
        "start": 211,
        "end": 338
      },
      "expression": false,
      "start": 192,
      "end": 338
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 349,
        "end": 353
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
          "start": 354,
          "end": 355
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
                    "start": 372,
                    "end": 373
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 376,
                    "end": 377
                  },
                  "definite": false,
                  "start": 372,
                  "end": 377
                }
              ],
              "declare": false,
              "start": 368,
              "end": 377
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 379,
                "end": 380
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 383,
                "end": 384
              },
              "start": 379,
              "end": 384
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
                "start": 388,
                "end": 389
              },
              "start": 386,
              "end": 389
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
                        "start": 405,
                        "end": 406
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 409,
                        "end": 410
                      },
                      "definite": false,
                      "start": 405,
                      "end": 410
                    }
                  ],
                  "declare": false,
                  "start": 401,
                  "end": 411
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
                              "start": 441,
                              "end": 442
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 445,
                              "end": 446
                            },
                            "start": 441,
                            "end": 446
                          },
                          "start": 434,
                          "end": 446
                        }
                      ],
                      "start": 432,
                      "end": 448
                    },
                    "expression": false,
                    "start": 421,
                    "end": 448
                  },
                  "directive": null,
                  "start": 420,
                  "end": 450
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
                        "start": 466,
                        "end": 467
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 470,
                        "end": 471
                      },
                      "start": 466,
                      "end": 471
                    },
                    "id": null,
                    "generator": false,
                    "start": 460,
                    "end": 471
                  },
                  "directive": null,
                  "start": 459,
                  "end": 473
                }
              ],
              "start": 391,
              "end": 479
            },
            "start": 363,
            "end": 479
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
                "start": 485,
                "end": 488
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                }
              ],
              "optional": false,
              "start": 485,
              "end": 491
            },
            "directive": null,
            "start": 485,
            "end": 492
          }
        ],
        "start": 357,
        "end": 494
      },
      "expression": false,
      "start": 340,
      "end": 494
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 505,
        "end": 509
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
          "start": 510,
          "end": 511
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
                "start": 526,
                "end": 527
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 532,
                "end": 533
              },
              "start": 526,
              "end": 533
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
                        "start": 549,
                        "end": 550
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 553,
                        "end": 554
                      },
                      "definite": false,
                      "start": 549,
                      "end": 554
                    }
                  ],
                  "declare": false,
                  "start": 545,
                  "end": 555
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
                        "start": 568,
                        "end": 569
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 572,
                        "end": 573
                      },
                      "definite": false,
                      "start": 568,
                      "end": 573
                    }
                  ],
                  "declare": false,
                  "start": 564,
                  "end": 574
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
                              "start": 604,
                              "end": 605
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 608,
                              "end": 609
                            },
                            "start": 604,
                            "end": 609
                          },
                          "start": 597,
                          "end": 609
                        }
                      ],
                      "start": 595,
                      "end": 611
                    },
                    "expression": false,
                    "start": 584,
                    "end": 611
                  },
                  "directive": null,
                  "start": 583,
                  "end": 613
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
                        "start": 629,
                        "end": 630
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 633,
                        "end": 634
                      },
                      "start": 629,
                      "end": 634
                    },
                    "id": null,
                    "generator": false,
                    "start": 623,
                    "end": 634
                  },
                  "directive": null,
                  "start": 622,
                  "end": 636
                }
              ],
              "start": 535,
              "end": 642
            },
            "start": 519,
            "end": 642
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
                "start": 652,
                "end": 655
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 656,
                  "end": 657
                }
              ],
              "optional": false,
              "start": 652,
              "end": 658
            },
            "directive": null,
            "start": 652,
            "end": 659
          }
        ],
        "start": 513,
        "end": 661
      },
      "expression": false,
      "start": 496,
      "end": 661
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 676
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
          "start": 677,
          "end": 678
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
                        "start": 703,
                        "end": 704
                      },
                      "init": null,
                      "definite": false,
                      "start": 703,
                      "end": 704
                    }
                  ],
                  "declare": false,
                  "start": 699,
                  "end": 705
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
                        "start": 718,
                        "end": 719
                      },
                      "init": null,
                      "definite": false,
                      "start": 718,
                      "end": 719
                    }
                  ],
                  "declare": false,
                  "start": 714,
                  "end": 720
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
                              "start": 750,
                              "end": 751
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 754,
                              "end": 755
                            },
                            "start": 750,
                            "end": 755
                          },
                          "start": 743,
                          "end": 755
                        }
                      ],
                      "start": 741,
                      "end": 757
                    },
                    "expression": false,
                    "start": 730,
                    "end": 757
                  },
                  "directive": null,
                  "start": 729,
                  "end": 759
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
                        "start": 775,
                        "end": 776
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 779,
                        "end": 780
                      },
                      "start": 775,
                      "end": 780
                    },
                    "id": null,
                    "generator": false,
                    "start": 769,
                    "end": 780
                  },
                  "directive": null,
                  "start": 768,
                  "end": 782
                }
              ],
              "start": 689,
              "end": 788
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 796,
                "end": 797
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 802,
                "end": 803
              },
              "start": 796,
              "end": 803
            },
            "start": 686,
            "end": 805
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
                "start": 815,
                "end": 818
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 819,
                  "end": 820
                }
              ],
              "optional": false,
              "start": 815,
              "end": 821
            },
            "directive": null,
            "start": 815,
            "end": 822
          }
        ],
        "start": 680,
        "end": 824
      },
      "expression": false,
      "start": 663,
      "end": 824
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 835,
        "end": 839
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
          "start": 840,
          "end": 841
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
                    "start": 858,
                    "end": 859
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 862,
                    "end": 863
                  },
                  "definite": false,
                  "start": 858,
                  "end": 863
                }
              ],
              "declare": false,
              "start": 854,
              "end": 863
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 866
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 869,
                "end": 870
              },
              "start": 865,
              "end": 870
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
                "start": 874,
                "end": 875
              },
              "start": 872,
              "end": 875
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
                        "start": 891,
                        "end": 892
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 895,
                        "end": 896
                      },
                      "definite": false,
                      "start": 891,
                      "end": 896
                    }
                  ],
                  "declare": false,
                  "start": 887,
                  "end": 897
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
                        "start": 910,
                        "end": 911
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 914,
                        "end": 915
                      },
                      "definite": false,
                      "start": 910,
                      "end": 915
                    }
                  ],
                  "declare": false,
                  "start": 906,
                  "end": 916
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
                              "start": 946,
                              "end": 947
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 950,
                              "end": 951
                            },
                            "start": 946,
                            "end": 951
                          },
                          "start": 939,
                          "end": 951
                        }
                      ],
                      "start": 937,
                      "end": 953
                    },
                    "expression": false,
                    "start": 926,
                    "end": 953
                  },
                  "directive": null,
                  "start": 925,
                  "end": 955
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
                        "start": 971,
                        "end": 972
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 975,
                        "end": 976
                      },
                      "start": 971,
                      "end": 976
                    },
                    "id": null,
                    "generator": false,
                    "start": 965,
                    "end": 976
                  },
                  "directive": null,
                  "start": 964,
                  "end": 978
                }
              ],
              "start": 877,
              "end": 984
            },
            "start": 849,
            "end": 984
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
                "start": 994,
                "end": 997
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 998,
                  "end": 999
                }
              ],
              "optional": false,
              "start": 994,
              "end": 1000
            },
            "directive": null,
            "start": 994,
            "end": 1001
          }
        ],
        "start": 843,
        "end": 1003
      },
      "expression": false,
      "start": 826,
      "end": 1003
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1014,
        "end": 1018
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
          "start": 1019,
          "end": 1020
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
                    "start": 1037,
                    "end": 1038
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1041,
                    "end": 1042
                  },
                  "definite": false,
                  "start": 1037,
                  "end": 1042
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1044,
                    "end": 1045
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1048,
                    "end": 1049
                  },
                  "definite": false,
                  "start": 1044,
                  "end": 1049
                }
              ],
              "declare": false,
              "start": 1033,
              "end": 1049
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1051,
                "end": 1052
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1055,
                "end": 1056
              },
              "start": 1051,
              "end": 1056
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
                "start": 1060,
                "end": 1061
              },
              "start": 1058,
              "end": 1061
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
                        "start": 1077,
                        "end": 1078
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1081,
                        "end": 1082
                      },
                      "definite": false,
                      "start": 1077,
                      "end": 1082
                    }
                  ],
                  "declare": false,
                  "start": 1073,
                  "end": 1083
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
                                "start": 1113,
                                "end": 1114
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1117,
                                "end": 1118
                              },
                              "start": 1113,
                              "end": 1118
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1121,
                              "end": 1122
                            },
                            "start": 1113,
                            "end": 1122
                          },
                          "start": 1106,
                          "end": 1122
                        }
                      ],
                      "start": 1104,
                      "end": 1124
                    },
                    "expression": false,
                    "start": 1093,
                    "end": 1124
                  },
                  "directive": null,
                  "start": 1092,
                  "end": 1126
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
                          "start": 1142,
                          "end": 1143
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1147
                        },
                        "start": 1142,
                        "end": 1147
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1150,
                        "end": 1151
                      },
                      "start": 1142,
                      "end": 1151
                    },
                    "id": null,
                    "generator": false,
                    "start": 1136,
                    "end": 1151
                  },
                  "directive": null,
                  "start": 1135,
                  "end": 1153
                }
              ],
              "start": 1063,
              "end": 1159
            },
            "start": 1028,
            "end": 1159
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
                "start": 1169,
                "end": 1172
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1174
                }
              ],
              "optional": false,
              "start": 1169,
              "end": 1175
            },
            "directive": null,
            "start": 1169,
            "end": 1176
          }
        ],
        "start": 1022,
        "end": 1178
      },
      "expression": false,
      "start": 1005,
      "end": 1178
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1190,
        "end": 1194
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
          "start": 1195,
          "end": 1196
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
                "start": 1211,
                "end": 1212
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1217,
                "end": 1218
              },
              "start": 1211,
              "end": 1218
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
                        "start": 1234,
                        "end": 1235
                      },
                      "init": null,
                      "definite": false,
                      "start": 1234,
                      "end": 1235
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1237,
                        "end": 1238
                      },
                      "init": null,
                      "definite": false,
                      "start": 1237,
                      "end": 1238
                    }
                  ],
                  "declare": false,
                  "start": 1230,
                  "end": 1239
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
                        "start": 1252,
                        "end": 1253
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1256,
                        "end": 1257
                      },
                      "definite": false,
                      "start": 1252,
                      "end": 1257
                    }
                  ],
                  "declare": false,
                  "start": 1248,
                  "end": 1258
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
                                "start": 1288,
                                "end": 1289
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1292,
                                "end": 1293
                              },
                              "start": 1288,
                              "end": 1293
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1296,
                              "end": 1297
                            },
                            "start": 1288,
                            "end": 1297
                          },
                          "start": 1281,
                          "end": 1297
                        }
                      ],
                      "start": 1279,
                      "end": 1299
                    },
                    "expression": false,
                    "start": 1268,
                    "end": 1299
                  },
                  "directive": null,
                  "start": 1267,
                  "end": 1301
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
                          "start": 1317,
                          "end": 1318
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1321,
                          "end": 1322
                        },
                        "start": 1317,
                        "end": 1322
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1325,
                        "end": 1326
                      },
                      "start": 1317,
                      "end": 1326
                    },
                    "id": null,
                    "generator": false,
                    "start": 1311,
                    "end": 1326
                  },
                  "directive": null,
                  "start": 1310,
                  "end": 1328
                }
              ],
              "start": 1220,
              "end": 1334
            },
            "start": 1204,
            "end": 1334
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
                "start": 1344,
                "end": 1347
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1348,
                  "end": 1349
                }
              ],
              "optional": false,
              "start": 1344,
              "end": 1350
            },
            "directive": null,
            "start": 1344,
            "end": 1350
          }
        ],
        "start": 1198,
        "end": 1352
      },
      "expression": false,
      "start": 1181,
      "end": 1352
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1363,
        "end": 1367
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
          "start": 1368,
          "end": 1369
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
                        "start": 1394,
                        "end": 1395
                      },
                      "init": null,
                      "definite": false,
                      "start": 1394,
                      "end": 1395
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1397,
                        "end": 1398
                      },
                      "init": null,
                      "definite": false,
                      "start": 1397,
                      "end": 1398
                    }
                  ],
                  "declare": false,
                  "start": 1390,
                  "end": 1399
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
                        "start": 1412,
                        "end": 1413
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1416,
                        "end": 1417
                      },
                      "definite": false,
                      "start": 1412,
                      "end": 1417
                    }
                  ],
                  "declare": false,
                  "start": 1408,
                  "end": 1418
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
                                "start": 1448,
                                "end": 1449
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1452,
                                "end": 1453
                              },
                              "start": 1448,
                              "end": 1453
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1456,
                              "end": 1457
                            },
                            "start": 1448,
                            "end": 1457
                          },
                          "start": 1441,
                          "end": 1457
                        }
                      ],
                      "start": 1439,
                      "end": 1459
                    },
                    "expression": false,
                    "start": 1428,
                    "end": 1459
                  },
                  "directive": null,
                  "start": 1427,
                  "end": 1461
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
                          "start": 1477,
                          "end": 1478
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1481,
                          "end": 1482
                        },
                        "start": 1477,
                        "end": 1482
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1485,
                        "end": 1486
                      },
                      "start": 1477,
                      "end": 1486
                    },
                    "id": null,
                    "generator": false,
                    "start": 1471,
                    "end": 1486
                  },
                  "directive": null,
                  "start": 1470,
                  "end": 1488
                }
              ],
              "start": 1380,
              "end": 1494
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1502,
                "end": 1503
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1508,
                "end": 1509
              },
              "start": 1502,
              "end": 1509
            },
            "start": 1377,
            "end": 1511
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
                "start": 1521,
                "end": 1524
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1525,
                  "end": 1526
                }
              ],
              "optional": false,
              "start": 1521,
              "end": 1527
            },
            "directive": null,
            "start": 1521,
            "end": 1528
          }
        ],
        "start": 1371,
        "end": 1530
      },
      "expression": false,
      "start": 1354,
      "end": 1530
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1542,
        "end": 1546
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
          "start": 1547,
          "end": 1548
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
                    "start": 1565,
                    "end": 1566
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1569,
                    "end": 1570
                  },
                  "definite": false,
                  "start": 1565,
                  "end": 1570
                }
              ],
              "declare": false,
              "start": 1561,
              "end": 1570
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1572,
                "end": 1573
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1576,
                "end": 1577
              },
              "start": 1572,
              "end": 1577
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
                "start": 1581,
                "end": 1582
              },
              "start": 1579,
              "end": 1582
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
                        "start": 1598,
                        "end": 1599
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1602,
                        "end": 1603
                      },
                      "definite": false,
                      "start": 1598,
                      "end": 1603
                    }
                  ],
                  "declare": false,
                  "start": 1594,
                  "end": 1604
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
                        "start": 1617,
                        "end": 1618
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1621,
                        "end": 1622
                      },
                      "definite": false,
                      "start": 1617,
                      "end": 1622
                    }
                  ],
                  "declare": false,
                  "start": 1613,
                  "end": 1623
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
                                "start": 1653,
                                "end": 1654
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1657,
                                "end": 1658
                              },
                              "start": 1653,
                              "end": 1658
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1661,
                              "end": 1662
                            },
                            "start": 1653,
                            "end": 1662
                          },
                          "start": 1646,
                          "end": 1662
                        }
                      ],
                      "start": 1644,
                      "end": 1664
                    },
                    "expression": false,
                    "start": 1633,
                    "end": 1664
                  },
                  "directive": null,
                  "start": 1632,
                  "end": 1666
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
                          "start": 1682,
                          "end": 1683
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1686,
                          "end": 1687
                        },
                        "start": 1682,
                        "end": 1687
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1690,
                        "end": 1691
                      },
                      "start": 1682,
                      "end": 1691
                    },
                    "id": null,
                    "generator": false,
                    "start": 1676,
                    "end": 1691
                  },
                  "directive": null,
                  "start": 1675,
                  "end": 1693
                }
              ],
              "start": 1584,
              "end": 1699
            },
            "start": 1556,
            "end": 1699
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
                "start": 1709,
                "end": 1712
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1713,
                  "end": 1714
                }
              ],
              "optional": false,
              "start": 1709,
              "end": 1715
            },
            "directive": null,
            "start": 1709,
            "end": 1716
          }
        ],
        "start": 1550,
        "end": 1718
      },
      "expression": false,
      "start": 1533,
      "end": 1718
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1739,
        "end": 1745
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
          "start": 1746,
          "end": 1747
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
                    "start": 1766,
                    "end": 1767
                  },
                  "init": null,
                  "definite": false,
                  "start": 1766,
                  "end": 1767
                }
              ],
              "declare": false,
              "start": 1760,
              "end": 1767
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1771,
              "end": 1773
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
                        "start": 1789,
                        "end": 1790
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1793,
                        "end": 1794
                      },
                      "definite": false,
                      "start": 1789,
                      "end": 1794
                    }
                  ],
                  "declare": false,
                  "start": 1785,
                  "end": 1795
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
                              "start": 1825,
                              "end": 1826
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1829,
                              "end": 1830
                            },
                            "start": 1825,
                            "end": 1830
                          },
                          "start": 1818,
                          "end": 1830
                        }
                      ],
                      "start": 1816,
                      "end": 1832
                    },
                    "expression": false,
                    "start": 1805,
                    "end": 1832
                  },
                  "directive": null,
                  "start": 1804,
                  "end": 1834
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
                        "start": 1850,
                        "end": 1851
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1854,
                        "end": 1855
                      },
                      "start": 1850,
                      "end": 1855
                    },
                    "id": null,
                    "generator": false,
                    "start": 1844,
                    "end": 1855
                  },
                  "directive": null,
                  "start": 1843,
                  "end": 1857
                }
              ],
              "start": 1775,
              "end": 1863
            },
            "start": 1755,
            "end": 1863
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
                "start": 1869,
                "end": 1872
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1873,
                  "end": 1874
                }
              ],
              "optional": false,
              "start": 1869,
              "end": 1875
            },
            "directive": null,
            "start": 1869,
            "end": 1876
          }
        ],
        "start": 1749,
        "end": 1878
      },
      "expression": false,
      "start": 1730,
      "end": 1878
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo0_1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1889,
        "end": 1897
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
          "start": 1898,
          "end": 1899
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
                    "start": 1918,
                    "end": 1919
                  },
                  "init": null,
                  "definite": false,
                  "start": 1918,
                  "end": 1919
                }
              ],
              "declare": false,
              "start": 1912,
              "end": 1919
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 1923,
              "end": 1925
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
                        "start": 1941,
                        "end": 1942
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1945,
                        "end": 1946
                      },
                      "definite": false,
                      "start": 1941,
                      "end": 1946
                    }
                  ],
                  "declare": false,
                  "start": 1937,
                  "end": 1947
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
                              "start": 1977,
                              "end": 1978
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1981,
                              "end": 1982
                            },
                            "start": 1977,
                            "end": 1982
                          },
                          "start": 1970,
                          "end": 1982
                        }
                      ],
                      "start": 1968,
                      "end": 1984
                    },
                    "expression": false,
                    "start": 1957,
                    "end": 1984
                  },
                  "directive": null,
                  "start": 1956,
                  "end": 1986
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
                        "start": 2002,
                        "end": 2003
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2006,
                        "end": 2007
                      },
                      "start": 2002,
                      "end": 2007
                    },
                    "id": null,
                    "generator": false,
                    "start": 1996,
                    "end": 2007
                  },
                  "directive": null,
                  "start": 1995,
                  "end": 2009
                }
              ],
              "start": 1927,
              "end": 2015
            },
            "start": 1907,
            "end": 2015
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
                "start": 2021,
                "end": 2024
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2025,
                  "end": 2026
                }
              ],
              "optional": false,
              "start": 2021,
              "end": 2027
            },
            "directive": null,
            "start": 2021,
            "end": 2028
          }
        ],
        "start": 1901,
        "end": 2030
      },
      "expression": false,
      "start": 1880,
      "end": 2030
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2041,
        "end": 2047
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
          "start": 2048,
          "end": 2049
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
                    "start": 2068,
                    "end": 2069
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2072,
                    "end": 2073
                  },
                  "definite": false,
                  "start": 2068,
                  "end": 2073
                }
              ],
              "declare": false,
              "start": 2062,
              "end": 2073
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2075,
                "end": 2076
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2079,
                "end": 2080
              },
              "start": 2075,
              "end": 2080
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
                        "start": 2097,
                        "end": 2098
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2101,
                        "end": 2102
                      },
                      "definite": false,
                      "start": 2097,
                      "end": 2102
                    }
                  ],
                  "declare": false,
                  "start": 2093,
                  "end": 2103
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
                              "start": 2133,
                              "end": 2134
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2137,
                              "end": 2138
                            },
                            "start": 2133,
                            "end": 2138
                          },
                          "start": 2126,
                          "end": 2138
                        }
                      ],
                      "start": 2124,
                      "end": 2140
                    },
                    "expression": false,
                    "start": 2113,
                    "end": 2140
                  },
                  "directive": null,
                  "start": 2112,
                  "end": 2142
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
                        "start": 2158,
                        "end": 2159
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2162,
                        "end": 2163
                      },
                      "start": 2158,
                      "end": 2163
                    },
                    "id": null,
                    "generator": false,
                    "start": 2152,
                    "end": 2163
                  },
                  "directive": null,
                  "start": 2151,
                  "end": 2165
                }
              ],
              "start": 2083,
              "end": 2171
            },
            "start": 2057,
            "end": 2171
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
                "start": 2177,
                "end": 2180
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2181,
                  "end": 2182
                }
              ],
              "optional": false,
              "start": 2177,
              "end": 2183
            },
            "directive": null,
            "start": 2177,
            "end": 2184
          }
        ],
        "start": 2051,
        "end": 2186
      },
      "expression": false,
      "start": 2032,
      "end": 2186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2197,
        "end": 2203
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
          "start": 2204,
          "end": 2205
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
                "start": 2220,
                "end": 2221
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2226,
                "end": 2227
              },
              "start": 2220,
              "end": 2227
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
                        "start": 2245,
                        "end": 2246
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2249,
                        "end": 2250
                      },
                      "definite": false,
                      "start": 2245,
                      "end": 2250
                    }
                  ],
                  "declare": false,
                  "start": 2239,
                  "end": 2251
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
                        "start": 2264,
                        "end": 2265
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2268,
                        "end": 2269
                      },
                      "definite": false,
                      "start": 2264,
                      "end": 2269
                    }
                  ],
                  "declare": false,
                  "start": 2260,
                  "end": 2270
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
                              "start": 2300,
                              "end": 2301
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2304,
                              "end": 2305
                            },
                            "start": 2300,
                            "end": 2305
                          },
                          "start": 2293,
                          "end": 2305
                        }
                      ],
                      "start": 2291,
                      "end": 2307
                    },
                    "expression": false,
                    "start": 2280,
                    "end": 2307
                  },
                  "directive": null,
                  "start": 2279,
                  "end": 2309
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
                        "start": 2325,
                        "end": 2326
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2329,
                        "end": 2330
                      },
                      "start": 2325,
                      "end": 2330
                    },
                    "id": null,
                    "generator": false,
                    "start": 2319,
                    "end": 2330
                  },
                  "directive": null,
                  "start": 2318,
                  "end": 2332
                }
              ],
              "start": 2229,
              "end": 2338
            },
            "start": 2213,
            "end": 2338
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
                "start": 2348,
                "end": 2351
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2352,
                  "end": 2353
                }
              ],
              "optional": false,
              "start": 2348,
              "end": 2354
            },
            "directive": null,
            "start": 2348,
            "end": 2355
          }
        ],
        "start": 2207,
        "end": 2357
      },
      "expression": false,
      "start": 2188,
      "end": 2357
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2368,
        "end": 2374
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
          "start": 2375,
          "end": 2376
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
                        "start": 2403,
                        "end": 2404
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2407,
                        "end": 2408
                      },
                      "definite": false,
                      "start": 2403,
                      "end": 2408
                    }
                  ],
                  "declare": false,
                  "start": 2397,
                  "end": 2409
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
                        "start": 2422,
                        "end": 2423
                      },
                      "init": null,
                      "definite": false,
                      "start": 2422,
                      "end": 2423
                    }
                  ],
                  "declare": false,
                  "start": 2418,
                  "end": 2424
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
                              "start": 2454,
                              "end": 2455
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2458,
                              "end": 2459
                            },
                            "start": 2454,
                            "end": 2459
                          },
                          "start": 2447,
                          "end": 2459
                        }
                      ],
                      "start": 2445,
                      "end": 2461
                    },
                    "expression": false,
                    "start": 2434,
                    "end": 2461
                  },
                  "directive": null,
                  "start": 2433,
                  "end": 2463
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
                        "start": 2479,
                        "end": 2480
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2483,
                        "end": 2484
                      },
                      "start": 2479,
                      "end": 2484
                    },
                    "id": null,
                    "generator": false,
                    "start": 2473,
                    "end": 2484
                  },
                  "directive": null,
                  "start": 2472,
                  "end": 2486
                }
              ],
              "start": 2387,
              "end": 2492
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2500,
                "end": 2501
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2506,
                "end": 2507
              },
              "start": 2500,
              "end": 2507
            },
            "start": 2384,
            "end": 2509
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
                "start": 2519,
                "end": 2522
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2523,
                  "end": 2524
                }
              ],
              "optional": false,
              "start": 2519,
              "end": 2525
            },
            "directive": null,
            "start": 2519,
            "end": 2526
          }
        ],
        "start": 2378,
        "end": 2528
      },
      "expression": false,
      "start": 2359,
      "end": 2528
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2539,
        "end": 2545
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
          "start": 2546,
          "end": 2547
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
                    "start": 2566,
                    "end": 2567
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2570,
                    "end": 2571
                  },
                  "definite": false,
                  "start": 2566,
                  "end": 2571
                }
              ],
              "declare": false,
              "start": 2560,
              "end": 2571
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 2573,
                "end": 2574
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2577,
                "end": 2578
              },
              "start": 2573,
              "end": 2578
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
                        "start": 2595,
                        "end": 2596
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2599,
                        "end": 2600
                      },
                      "definite": false,
                      "start": 2595,
                      "end": 2600
                    }
                  ],
                  "declare": false,
                  "start": 2591,
                  "end": 2601
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2616,
                        "end": 2617
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2620,
                        "end": 2621
                      },
                      "definite": false,
                      "start": 2616,
                      "end": 2621
                    }
                  ],
                  "declare": false,
                  "start": 2610,
                  "end": 2622
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
                              "start": 2652,
                              "end": 2653
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2656,
                              "end": 2657
                            },
                            "start": 2652,
                            "end": 2657
                          },
                          "start": 2645,
                          "end": 2657
                        }
                      ],
                      "start": 2643,
                      "end": 2659
                    },
                    "expression": false,
                    "start": 2632,
                    "end": 2659
                  },
                  "directive": null,
                  "start": 2631,
                  "end": 2661
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
                        "start": 2677,
                        "end": 2678
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2681,
                        "end": 2682
                      },
                      "start": 2677,
                      "end": 2682
                    },
                    "id": null,
                    "generator": false,
                    "start": 2671,
                    "end": 2682
                  },
                  "directive": null,
                  "start": 2670,
                  "end": 2684
                }
              ],
              "start": 2581,
              "end": 2690
            },
            "start": 2555,
            "end": 2690
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
                "start": 2700,
                "end": 2703
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2704,
                  "end": 2705
                }
              ],
              "optional": false,
              "start": 2700,
              "end": 2706
            },
            "directive": null,
            "start": 2700,
            "end": 2707
          }
        ],
        "start": 2549,
        "end": 2709
      },
      "expression": false,
      "start": 2530,
      "end": 2709
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2720,
        "end": 2726
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
          "start": 2727,
          "end": 2728
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
                    "start": 2747,
                    "end": 2748
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 2751,
                    "end": 2752
                  },
                  "definite": false,
                  "start": 2747,
                  "end": 2752
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2754,
                    "end": 2755
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 2758,
                    "end": 2759
                  },
                  "definite": false,
                  "start": 2754,
                  "end": 2759
                }
              ],
              "declare": false,
              "start": 2741,
              "end": 2759
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2761,
                "end": 2762
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2765,
                "end": 2766
              },
              "start": 2761,
              "end": 2766
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
                        "start": 2783,
                        "end": 2784
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2787,
                        "end": 2788
                      },
                      "definite": false,
                      "start": 2783,
                      "end": 2788
                    }
                  ],
                  "declare": false,
                  "start": 2779,
                  "end": 2789
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
                                "start": 2819,
                                "end": 2820
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2823,
                                "end": 2824
                              },
                              "start": 2819,
                              "end": 2824
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2827,
                              "end": 2828
                            },
                            "start": 2819,
                            "end": 2828
                          },
                          "start": 2812,
                          "end": 2828
                        }
                      ],
                      "start": 2810,
                      "end": 2830
                    },
                    "expression": false,
                    "start": 2799,
                    "end": 2830
                  },
                  "directive": null,
                  "start": 2798,
                  "end": 2832
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
                          "start": 2848,
                          "end": 2849
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2852,
                          "end": 2853
                        },
                        "start": 2848,
                        "end": 2853
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2856,
                        "end": 2857
                      },
                      "start": 2848,
                      "end": 2857
                    },
                    "id": null,
                    "generator": false,
                    "start": 2842,
                    "end": 2857
                  },
                  "directive": null,
                  "start": 2841,
                  "end": 2859
                }
              ],
              "start": 2769,
              "end": 2865
            },
            "start": 2736,
            "end": 2865
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
                "start": 2875,
                "end": 2878
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2879,
                  "end": 2880
                }
              ],
              "optional": false,
              "start": 2875,
              "end": 2881
            },
            "directive": null,
            "start": 2875,
            "end": 2882
          }
        ],
        "start": 2730,
        "end": 2884
      },
      "expression": false,
      "start": 2711,
      "end": 2884
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 2896,
        "end": 2902
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
          "start": 2903,
          "end": 2904
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
                "start": 2919,
                "end": 2920
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 2925,
                "end": 2926
              },
              "start": 2919,
              "end": 2926
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
                        "start": 2944,
                        "end": 2945
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2948,
                        "end": 2949
                      },
                      "definite": false,
                      "start": 2944,
                      "end": 2949
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2951,
                        "end": 2952
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 2955,
                        "end": 2956
                      },
                      "definite": false,
                      "start": 2951,
                      "end": 2956
                    }
                  ],
                  "declare": false,
                  "start": 2938,
                  "end": 2957
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
                        "start": 2970,
                        "end": 2971
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2974,
                        "end": 2975
                      },
                      "definite": false,
                      "start": 2970,
                      "end": 2975
                    }
                  ],
                  "declare": false,
                  "start": 2966,
                  "end": 2976
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
                                "start": 3006,
                                "end": 3007
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3010,
                                "end": 3011
                              },
                              "start": 3006,
                              "end": 3011
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3014,
                              "end": 3015
                            },
                            "start": 3006,
                            "end": 3015
                          },
                          "start": 2999,
                          "end": 3015
                        }
                      ],
                      "start": 2997,
                      "end": 3017
                    },
                    "expression": false,
                    "start": 2986,
                    "end": 3017
                  },
                  "directive": null,
                  "start": 2985,
                  "end": 3019
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
                          "start": 3035,
                          "end": 3036
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3039,
                          "end": 3040
                        },
                        "start": 3035,
                        "end": 3040
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3043,
                        "end": 3044
                      },
                      "start": 3035,
                      "end": 3044
                    },
                    "id": null,
                    "generator": false,
                    "start": 3029,
                    "end": 3044
                  },
                  "directive": null,
                  "start": 3028,
                  "end": 3046
                }
              ],
              "start": 2928,
              "end": 3052
            },
            "start": 2912,
            "end": 3052
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
                "start": 3062,
                "end": 3065
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3066,
                  "end": 3067
                }
              ],
              "optional": false,
              "start": 3062,
              "end": 3068
            },
            "directive": null,
            "start": 3062,
            "end": 3068
          }
        ],
        "start": 2906,
        "end": 3070
      },
      "expression": false,
      "start": 2887,
      "end": 3070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3081,
        "end": 3087
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
          "start": 3088,
          "end": 3089
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
                        "start": 3116,
                        "end": 3117
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3120,
                        "end": 3121
                      },
                      "definite": false,
                      "start": 3116,
                      "end": 3121
                    },
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3123,
                        "end": 3124
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3127,
                        "end": 3128
                      },
                      "definite": false,
                      "start": 3123,
                      "end": 3128
                    }
                  ],
                  "declare": false,
                  "start": 3110,
                  "end": 3129
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
                        "start": 3142,
                        "end": 3143
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3146,
                        "end": 3147
                      },
                      "definite": false,
                      "start": 3142,
                      "end": 3147
                    }
                  ],
                  "declare": false,
                  "start": 3138,
                  "end": 3148
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
                                "start": 3178,
                                "end": 3179
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3182,
                                "end": 3183
                              },
                              "start": 3178,
                              "end": 3183
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3186,
                              "end": 3187
                            },
                            "start": 3178,
                            "end": 3187
                          },
                          "start": 3171,
                          "end": 3187
                        }
                      ],
                      "start": 3169,
                      "end": 3189
                    },
                    "expression": false,
                    "start": 3158,
                    "end": 3189
                  },
                  "directive": null,
                  "start": 3157,
                  "end": 3191
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
                          "start": 3207,
                          "end": 3208
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3211,
                          "end": 3212
                        },
                        "start": 3207,
                        "end": 3212
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3215,
                        "end": 3216
                      },
                      "start": 3207,
                      "end": 3216
                    },
                    "id": null,
                    "generator": false,
                    "start": 3201,
                    "end": 3216
                  },
                  "directive": null,
                  "start": 3200,
                  "end": 3218
                }
              ],
              "start": 3100,
              "end": 3224
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3232,
                "end": 3233
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3238,
                "end": 3239
              },
              "start": 3232,
              "end": 3239
            },
            "start": 3097,
            "end": 3241
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
                "start": 3251,
                "end": 3254
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3255,
                  "end": 3256
                }
              ],
              "optional": false,
              "start": 3251,
              "end": 3257
            },
            "directive": null,
            "start": 3251,
            "end": 3258
          }
        ],
        "start": 3091,
        "end": 3260
      },
      "expression": false,
      "start": 3072,
      "end": 3260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8_c",
        "optional": false,
        "typeAnnotation": null,
        "start": 3272,
        "end": 3278
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
          "start": 3279,
          "end": 3280
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
                    "start": 3299,
                    "end": 3300
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 3303,
                    "end": 3304
                  },
                  "definite": false,
                  "start": 3299,
                  "end": 3304
                }
              ],
              "declare": false,
              "start": 3293,
              "end": 3304
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3306,
                "end": 3307
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3310,
                "end": 3311
              },
              "start": 3306,
              "end": 3311
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
                        "start": 3330,
                        "end": 3331
                      },
                      "init": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 3334,
                        "end": 3335
                      },
                      "definite": false,
                      "start": 3330,
                      "end": 3335
                    }
                  ],
                  "declare": false,
                  "start": 3324,
                  "end": 3336
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
                        "start": 3349,
                        "end": 3350
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3353,
                        "end": 3354
                      },
                      "definite": false,
                      "start": 3349,
                      "end": 3354
                    }
                  ],
                  "declare": false,
                  "start": 3345,
                  "end": 3355
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
                                "start": 3385,
                                "end": 3386
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3389,
                                "end": 3390
                              },
                              "start": 3385,
                              "end": 3390
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3393,
                              "end": 3394
                            },
                            "start": 3385,
                            "end": 3394
                          },
                          "start": 3378,
                          "end": 3394
                        }
                      ],
                      "start": 3376,
                      "end": 3396
                    },
                    "expression": false,
                    "start": 3365,
                    "end": 3396
                  },
                  "directive": null,
                  "start": 3364,
                  "end": 3398
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
                          "start": 3414,
                          "end": 3415
                        },
                        "operator": "+",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3418,
                          "end": 3419
                        },
                        "start": 3414,
                        "end": 3419
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3422,
                        "end": 3423
                      },
                      "start": 3414,
                      "end": 3423
                    },
                    "id": null,
                    "generator": false,
                    "start": 3408,
                    "end": 3423
                  },
                  "directive": null,
                  "start": 3407,
                  "end": 3425
                }
              ],
              "start": 3314,
              "end": 3431
            },
            "start": 3288,
            "end": 3431
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
                "start": 3441,
                "end": 3444
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3445,
                  "end": 3446
                }
              ],
              "optional": false,
              "start": 3441,
              "end": 3447
            },
            "directive": null,
            "start": 3441,
            "end": 3448
          }
        ],
        "start": 3282,
        "end": 3450
      },
      "expression": false,
      "start": 3263,
      "end": 3450
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 16,
  "end": 3450
}
```
