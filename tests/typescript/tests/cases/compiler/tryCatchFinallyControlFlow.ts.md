__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 33
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 49,
                          "end": 55
                        },
                        {
                          "type": "TSNullKeyword",
                          "start": 58,
                          "end": 62
                        }
                      ],
                      "start": 49,
                      "end": 62
                    },
                    "start": 47,
                    "end": 62
                  },
                  "start": 46,
                  "end": 62
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 65,
                  "end": 69
                },
                "definite": false,
                "start": 46,
                "end": 69
              }
            ],
            "declare": false,
            "start": 42,
            "end": 70
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 89,
                      "end": 90
                    },
                    "right": {
                      "type": "Literal",
                      "value": 123,
                      "raw": "123",
                      "start": 93,
                      "end": 96
                    },
                    "start": 89,
                    "end": 96
                  },
                  "directive": null,
                  "start": 89,
                  "end": 97
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 114
                  },
                  "start": 106,
                  "end": 115
                }
              ],
              "start": 79,
              "end": 121
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 153
                    },
                    "start": 146,
                    "end": 154
                  }
                ],
                "start": 136,
                "end": 160
              },
              "start": 126,
              "end": 160
            },
            "finalizer": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 187,
                        "end": 188
                      },
                      "operator": "!=",
                      "right": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null",
                        "start": 192,
                        "end": 196
                      },
                      "start": 187,
                      "end": 196
                    },
                    "operator": "&&",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 200,
                            "end": 201
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 209
                          },
                          "optional": false,
                          "computed": false,
                          "start": 200,
                          "end": 209
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 210,
                            "end": 211
                          }
                        ],
                        "optional": false,
                        "start": 200,
                        "end": 212
                      },
                      "operator": "==",
                      "right": {
                        "type": "Literal",
                        "value": "123",
                        "raw": "\"123\"",
                        "start": 216,
                        "end": 221
                      },
                      "start": 200,
                      "end": 221
                    },
                    "start": 187,
                    "end": 221
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 223,
                    "end": 235
                  },
                  "alternate": null,
                  "start": 183,
                  "end": 235
                }
              ],
              "start": 173,
              "end": 241
            },
            "start": 75,
            "end": 241
          }
        ],
        "start": 36,
        "end": 243
      },
      "expression": false,
      "start": 22,
      "end": 243
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 254,
        "end": 256
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 272,
                            "end": 273
                          },
                          "start": 272,
                          "end": 273
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 276,
                            "end": 277
                          },
                          "start": 276,
                          "end": 277
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 280,
                            "end": 281
                          },
                          "start": 280,
                          "end": 281
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 284,
                            "end": 285
                          },
                          "start": 284,
                          "end": 285
                        }
                      ],
                      "start": 272,
                      "end": 285
                    },
                    "start": 270,
                    "end": 285
                  },
                  "start": 269,
                  "end": 285
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 288,
                  "end": 289
                },
                "definite": false,
                "start": 269,
                "end": 289
              }
            ],
            "declare": false,
            "start": 265,
            "end": 290
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 309,
                      "end": 310
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 313,
                      "end": 314
                    },
                    "start": 309,
                    "end": 314
                  },
                  "directive": null,
                  "start": 309,
                  "end": 315
                }
              ],
              "start": 299,
              "end": 321
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 333,
                "end": 334
              },
              "body": {
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
                        "start": 346,
                        "end": 347
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 350,
                        "end": 351
                      },
                      "start": 346,
                      "end": 351
                    },
                    "directive": null,
                    "start": 346,
                    "end": 352
                  },
                  {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 367,
                      "end": 368
                    },
                    "start": 361,
                    "end": 369
                  }
                ],
                "start": 336,
                "end": 375
              },
              "start": 326,
              "end": 375
            },
            "finalizer": {
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
                    "start": 398,
                    "end": 399
                  },
                  "directive": null,
                  "start": 398,
                  "end": 400
                }
              ],
              "start": 388,
              "end": 420
            },
            "start": 295,
            "end": 420
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 426
            },
            "directive": null,
            "start": 425,
            "end": 427
          }
        ],
        "start": 259,
        "end": 435
      },
      "expression": false,
      "start": 245,
      "end": 435
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 446,
        "end": 448
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 464,
                            "end": 465
                          },
                          "start": 464,
                          "end": 465
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 468,
                            "end": 469
                          },
                          "start": 468,
                          "end": 469
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 472,
                            "end": 473
                          },
                          "start": 472,
                          "end": 473
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 476,
                            "end": 477
                          },
                          "start": 476,
                          "end": 477
                        }
                      ],
                      "start": 464,
                      "end": 477
                    },
                    "start": 462,
                    "end": 477
                  },
                  "start": 461,
                  "end": 477
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 480,
                  "end": 481
                },
                "definite": false,
                "start": 461,
                "end": 481
              }
            ],
            "declare": false,
            "start": 457,
            "end": 482
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 501,
                      "end": 502
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 505,
                      "end": 506
                    },
                    "start": 501,
                    "end": 506
                  },
                  "directive": null,
                  "start": 501,
                  "end": 507
                }
              ],
              "start": 491,
              "end": 513
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 525,
                "end": 526
              },
              "body": {
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
                        "start": 538,
                        "end": 539
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 542,
                        "end": 543
                      },
                      "start": 538,
                      "end": 543
                    },
                    "directive": null,
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 553,
                    "end": 560
                  }
                ],
                "start": 528,
                "end": 566
              },
              "start": 518,
              "end": 566
            },
            "finalizer": {
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
                    "start": 589,
                    "end": 590
                  },
                  "directive": null,
                  "start": 589,
                  "end": 591
                }
              ],
              "start": 579,
              "end": 611
            },
            "start": 487,
            "end": 611
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 616,
              "end": 617
            },
            "directive": null,
            "start": 616,
            "end": 618
          }
        ],
        "start": 451,
        "end": 626
      },
      "expression": false,
      "start": 437,
      "end": 626
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 637,
        "end": 639
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 655,
                            "end": 656
                          },
                          "start": 655,
                          "end": 656
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 659,
                            "end": 660
                          },
                          "start": 659,
                          "end": 660
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 663,
                            "end": 664
                          },
                          "start": 663,
                          "end": 664
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 667,
                            "end": 668
                          },
                          "start": 667,
                          "end": 668
                        }
                      ],
                      "start": 655,
                      "end": 668
                    },
                    "start": 653,
                    "end": 668
                  },
                  "start": 652,
                  "end": 668
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 671,
                  "end": 672
                },
                "definite": false,
                "start": 652,
                "end": 672
              }
            ],
            "declare": false,
            "start": 648,
            "end": 673
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 692,
                      "end": 693
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 696,
                      "end": 697
                    },
                    "start": 692,
                    "end": 697
                  },
                  "directive": null,
                  "start": 692,
                  "end": 698
                }
              ],
              "start": 682,
              "end": 704
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 716,
                "end": 717
              },
              "body": {
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
                        "start": 729,
                        "end": 730
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 733,
                        "end": 734
                      },
                      "start": 729,
                      "end": 734
                    },
                    "directive": null,
                    "start": 729,
                    "end": 735
                  }
                ],
                "start": 719,
                "end": 741
              },
              "start": 709,
              "end": 741
            },
            "finalizer": {
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
                    "start": 764,
                    "end": 765
                  },
                  "directive": null,
                  "start": 764,
                  "end": 766
                }
              ],
              "start": 754,
              "end": 786
            },
            "start": 678,
            "end": 786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 792
            },
            "directive": null,
            "start": 791,
            "end": 793
          }
        ],
        "start": 642,
        "end": 805
      },
      "expression": false,
      "start": 628,
      "end": 805
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 816,
        "end": 818
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 834,
                            "end": 835
                          },
                          "start": 834,
                          "end": 835
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 838,
                            "end": 839
                          },
                          "start": 838,
                          "end": 839
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 842,
                            "end": 843
                          },
                          "start": 842,
                          "end": 843
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 846,
                            "end": 847
                          },
                          "start": 846,
                          "end": 847
                        }
                      ],
                      "start": 834,
                      "end": 847
                    },
                    "start": 832,
                    "end": 847
                  },
                  "start": 831,
                  "end": 847
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 850,
                  "end": 851
                },
                "definite": false,
                "start": 831,
                "end": 851
              }
            ],
            "declare": false,
            "start": 827,
            "end": 852
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 871,
                      "end": 872
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 875,
                      "end": 876
                    },
                    "start": 871,
                    "end": 876
                  },
                  "directive": null,
                  "start": 871,
                  "end": 877
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 886,
                  "end": 893
                }
              ],
              "start": 861,
              "end": 899
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
              "body": {
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
                        "start": 924,
                        "end": 925
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 928,
                        "end": 929
                      },
                      "start": 924,
                      "end": 929
                    },
                    "directive": null,
                    "start": 924,
                    "end": 930
                  }
                ],
                "start": 914,
                "end": 936
              },
              "start": 904,
              "end": 936
            },
            "finalizer": {
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
                    "start": 959,
                    "end": 960
                  },
                  "directive": null,
                  "start": 959,
                  "end": 961
                }
              ],
              "start": 949,
              "end": 981
            },
            "start": 857,
            "end": 981
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 987
            },
            "directive": null,
            "start": 986,
            "end": 988
          }
        ],
        "start": 821,
        "end": 996
      },
      "expression": false,
      "start": 807,
      "end": 996
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1007,
        "end": 1009
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1025,
                            "end": 1026
                          },
                          "start": 1025,
                          "end": 1026
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1029,
                            "end": 1030
                          },
                          "start": 1029,
                          "end": 1030
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1033,
                            "end": 1034
                          },
                          "start": 1033,
                          "end": 1034
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1037,
                            "end": 1038
                          },
                          "start": 1037,
                          "end": 1038
                        }
                      ],
                      "start": 1025,
                      "end": 1038
                    },
                    "start": 1023,
                    "end": 1038
                  },
                  "start": 1022,
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
                "start": 1022,
                "end": 1042
              }
            ],
            "declare": false,
            "start": 1018,
            "end": 1043
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 1062,
                      "end": 1063
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1066,
                      "end": 1067
                    },
                    "start": 1062,
                    "end": 1067
                  },
                  "directive": null,
                  "start": 1062,
                  "end": 1068
                }
              ],
              "start": 1052,
              "end": 1074
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1086,
                "end": 1087
              },
              "body": {
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
                        "start": 1099,
                        "end": 1100
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1103,
                        "end": 1104
                      },
                      "start": 1099,
                      "end": 1104
                    },
                    "directive": null,
                    "start": 1099,
                    "end": 1105
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1114,
                    "end": 1121
                  }
                ],
                "start": 1089,
                "end": 1127
              },
              "start": 1079,
              "end": 1127
            },
            "finalizer": {
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
                    "start": 1150,
                    "end": 1151
                  },
                  "directive": null,
                  "start": 1150,
                  "end": 1152
                }
              ],
              "start": 1140,
              "end": 1172
            },
            "start": 1048,
            "end": 1172
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1178
            },
            "directive": null,
            "start": 1177,
            "end": 1179
          }
        ],
        "start": 1012,
        "end": 1187
      },
      "expression": false,
      "start": 998,
      "end": 1187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1198,
        "end": 1200
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1216,
                            "end": 1217
                          },
                          "start": 1216,
                          "end": 1217
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1220,
                            "end": 1221
                          },
                          "start": 1220,
                          "end": 1221
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1224,
                            "end": 1225
                          },
                          "start": 1224,
                          "end": 1225
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1228,
                            "end": 1229
                          },
                          "start": 1228,
                          "end": 1229
                        }
                      ],
                      "start": 1216,
                      "end": 1229
                    },
                    "start": 1214,
                    "end": 1229
                  },
                  "start": 1213,
                  "end": 1229
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1232,
                  "end": 1233
                },
                "definite": false,
                "start": 1213,
                "end": 1233
              }
            ],
            "declare": false,
            "start": 1209,
            "end": 1234
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 1253,
                      "end": 1254
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 1257,
                      "end": 1258
                    },
                    "start": 1253,
                    "end": 1258
                  },
                  "directive": null,
                  "start": 1253,
                  "end": 1259
                },
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 1268,
                  "end": 1275
                }
              ],
              "start": 1243,
              "end": 1281
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 1293,
                "end": 1294
              },
              "body": {
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
                        "start": 1306,
                        "end": 1307
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 1310,
                        "end": 1311
                      },
                      "start": 1306,
                      "end": 1311
                    },
                    "directive": null,
                    "start": 1306,
                    "end": 1312
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1321,
                    "end": 1328
                  }
                ],
                "start": 1296,
                "end": 1334
              },
              "start": 1286,
              "end": 1334
            },
            "finalizer": {
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
                    "start": 1357,
                    "end": 1358
                  },
                  "directive": null,
                  "start": 1357,
                  "end": 1359
                }
              ],
              "start": 1347,
              "end": 1379
            },
            "start": 1239,
            "end": 1379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1384,
              "end": 1385
            },
            "directive": null,
            "start": 1384,
            "end": 1386
          }
        ],
        "start": 1203,
        "end": 1404
      },
      "expression": false,
      "start": 1189,
      "end": 1404
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1415,
        "end": 1417
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1433,
                            "end": 1434
                          },
                          "start": 1433,
                          "end": 1434
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1437,
                            "end": 1438
                          },
                          "start": 1437,
                          "end": 1438
                        }
                      ],
                      "start": 1433,
                      "end": 1438
                    },
                    "start": 1431,
                    "end": 1438
                  },
                  "start": 1430,
                  "end": 1438
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1441,
                  "end": 1442
                },
                "definite": false,
                "start": 1430,
                "end": 1442
              }
            ],
            "declare": false,
            "start": 1426,
            "end": 1443
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                "start": 1483,
                                "end": 1484
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1487,
                                "end": 1488
                              },
                              "start": 1483,
                              "end": 1488
                            },
                            "directive": null,
                            "start": 1483,
                            "end": 1489
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 1502,
                            "end": 1509
                          }
                        ],
                        "start": 1469,
                        "end": 1519
                      },
                      "handler": null,
                      "finalizer": {
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
                              "start": 1550,
                              "end": 1551
                            },
                            "directive": null,
                            "start": 1550,
                            "end": 1552
                          }
                        ],
                        "start": 1536,
                        "end": 1572
                      },
                      "start": 1465,
                      "end": 1572
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1581,
                        "end": 1582
                      },
                      "directive": null,
                      "start": 1581,
                      "end": 1583
                    }
                  ],
                  "start": 1455,
                  "end": 1605
                },
                "id": null,
                "generator": false,
                "start": 1449,
                "end": 1605
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1448,
              "end": 1608
            },
            "directive": null,
            "start": 1448,
            "end": 1609
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1614,
              "end": 1615
            },
            "directive": null,
            "start": 1614,
            "end": 1616
          }
        ],
        "start": 1420,
        "end": 1624
      },
      "expression": false,
      "start": 1406,
      "end": 1624
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1637
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1653,
                            "end": 1654
                          },
                          "start": 1653,
                          "end": 1654
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1657,
                            "end": 1658
                          },
                          "start": 1657,
                          "end": 1658
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1661,
                            "end": 1662
                          },
                          "start": 1661,
                          "end": 1662
                        }
                      ],
                      "start": 1653,
                      "end": 1662
                    },
                    "start": 1651,
                    "end": 1662
                  },
                  "start": 1650,
                  "end": 1662
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1665,
                  "end": 1666
                },
                "definite": false,
                "start": 1650,
                "end": 1666
              }
            ],
            "declare": false,
            "start": 1646,
            "end": 1667
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                  "start": 1713,
                                  "end": 1717
                                },
                                "prefix": true,
                                "start": 1712,
                                "end": 1717
                              },
                              "prefix": true,
                              "start": 1711,
                              "end": 1717
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
                                      "start": 1737,
                                      "end": 1738
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 1741,
                                      "end": 1742
                                    },
                                    "start": 1737,
                                    "end": 1742
                                  },
                                  "directive": null,
                                  "start": 1737,
                                  "end": 1743
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 1760,
                                  "end": 1767
                                }
                              ],
                              "start": 1719,
                              "end": 1781
                            },
                            "alternate": null,
                            "start": 1707,
                            "end": 1781
                          }
                        ],
                        "start": 1693,
                        "end": 1791
                      },
                      "handler": null,
                      "finalizer": {
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
                              "start": 1822,
                              "end": 1823
                            },
                            "directive": null,
                            "start": 1822,
                            "end": 1824
                          }
                        ],
                        "start": 1808,
                        "end": 1844
                      },
                      "start": 1689,
                      "end": 1844
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1853,
                        "end": 1854
                      },
                      "directive": null,
                      "start": 1853,
                      "end": 1855
                    },
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
                          "start": 1870,
                          "end": 1871
                        },
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 1874,
                          "end": 1875
                        },
                        "start": 1870,
                        "end": 1875
                      },
                      "directive": null,
                      "start": 1870,
                      "end": 1876
                    }
                  ],
                  "start": 1679,
                  "end": 1882
                },
                "id": null,
                "generator": false,
                "start": 1673,
                "end": 1882
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1672,
              "end": 1885
            },
            "directive": null,
            "start": 1672,
            "end": 1886
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1891,
              "end": 1892
            },
            "directive": null,
            "start": 1891,
            "end": 1893
          }
        ],
        "start": 1640,
        "end": 1905
      },
      "expression": false,
      "start": 1626,
      "end": 1905
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1916,
        "end": 1919
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1935,
                            "end": 1936
                          },
                          "start": 1935,
                          "end": 1936
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1939,
                            "end": 1940
                          },
                          "start": 1939,
                          "end": 1940
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1943,
                            "end": 1944
                          },
                          "start": 1943,
                          "end": 1944
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1947,
                            "end": 1948
                          },
                          "start": 1947,
                          "end": 1948
                        }
                      ],
                      "start": 1935,
                      "end": 1948
                    },
                    "start": 1933,
                    "end": 1948
                  },
                  "start": 1932,
                  "end": 1948
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1951,
                  "end": 1952
                },
                "definite": false,
                "start": 1932,
                "end": 1952
              }
            ],
            "declare": false,
            "start": 1928,
            "end": 1953
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                "start": 1993,
                                "end": 1994
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1997,
                                "end": 1998
                              },
                              "start": 1993,
                              "end": 1998
                            },
                            "directive": null,
                            "start": 1993,
                            "end": 1999
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 2012,
                            "end": 2019
                          }
                        ],
                        "start": 1979,
                        "end": 2029
                      },
                      "handler": {
                        "type": "CatchClause",
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2045,
                          "end": 2046
                        },
                        "body": {
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
                                  "start": 2062,
                                  "end": 2063
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 2066,
                                  "end": 2067
                                },
                                "start": 2062,
                                "end": 2067
                              },
                              "directive": null,
                              "start": 2062,
                              "end": 2068
                            }
                          ],
                          "start": 2048,
                          "end": 2078
                        },
                        "start": 2038,
                        "end": 2078
                      },
                      "finalizer": {
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
                              "start": 2109,
                              "end": 2110
                            },
                            "directive": null,
                            "start": 2109,
                            "end": 2111
                          }
                        ],
                        "start": 2095,
                        "end": 2135
                      },
                      "start": 1975,
                      "end": 2135
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2144,
                        "end": 2145
                      },
                      "directive": null,
                      "start": 2144,
                      "end": 2146
                    },
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
                          "start": 2161,
                          "end": 2162
                        },
                        "right": {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 2165,
                          "end": 2166
                        },
                        "start": 2161,
                        "end": 2166
                      },
                      "directive": null,
                      "start": 2161,
                      "end": 2167
                    }
                  ],
                  "start": 1965,
                  "end": 2173
                },
                "id": null,
                "generator": false,
                "start": 1959,
                "end": 2173
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1958,
              "end": 2176
            },
            "directive": null,
            "start": 1958,
            "end": 2177
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2182,
              "end": 2183
            },
            "directive": null,
            "start": 2182,
            "end": 2184
          }
        ],
        "start": 1922,
        "end": 2196
      },
      "expression": false,
      "start": 1907,
      "end": 2196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 2207,
        "end": 2210
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2226,
                            "end": 2227
                          },
                          "start": 2226,
                          "end": 2227
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2230,
                            "end": 2231
                          },
                          "start": 2230,
                          "end": 2231
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2234,
                            "end": 2235
                          },
                          "start": 2234,
                          "end": 2235
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 2238,
                            "end": 2239
                          },
                          "start": 2238,
                          "end": 2239
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 2242,
                            "end": 2243
                          },
                          "start": 2242,
                          "end": 2243
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 2246,
                            "end": 2247
                          },
                          "start": 2246,
                          "end": 2247
                        }
                      ],
                      "start": 2226,
                      "end": 2247
                    },
                    "start": 2224,
                    "end": 2247
                  },
                  "start": 2223,
                  "end": 2247
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2250,
                  "end": 2251
                },
                "definite": false,
                "start": 2223,
                "end": 2251
              }
            ],
            "declare": false,
            "start": 2219,
            "end": 2252
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                  "start": 2298,
                                  "end": 2302
                                },
                                "prefix": true,
                                "start": 2297,
                                "end": 2302
                              },
                              "prefix": true,
                              "start": 2296,
                              "end": 2302
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
                                      "start": 2322,
                                      "end": 2323
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 2326,
                                      "end": 2327
                                    },
                                    "start": 2322,
                                    "end": 2327
                                  },
                                  "directive": null,
                                  "start": 2322,
                                  "end": 2328
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 2345,
                                  "end": 2352
                                }
                              ],
                              "start": 2304,
                              "end": 2366
                            },
                            "alternate": null,
                            "start": 2292,
                            "end": 2366
                          },
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
                                  "start": 2385,
                                  "end": 2389
                                },
                                "prefix": true,
                                "start": 2384,
                                "end": 2389
                              },
                              "prefix": true,
                              "start": 2383,
                              "end": 2389
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
                                      "start": 2409,
                                      "end": 2410
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 2413,
                                      "end": 2414
                                    },
                                    "start": 2409,
                                    "end": 2414
                                  },
                                  "directive": null,
                                  "start": 2409,
                                  "end": 2415
                                },
                                {
                                  "type": "ThrowStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2438,
                                    "end": 2439
                                  },
                                  "start": 2432,
                                  "end": 2440
                                }
                              ],
                              "start": 2391,
                              "end": 2454
                            },
                            "alternate": null,
                            "start": 2379,
                            "end": 2454
                          }
                        ],
                        "start": 2278,
                        "end": 2464
                      },
                      "handler": {
                        "type": "CatchClause",
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2480,
                          "end": 2481
                        },
                        "body": {
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
                                "start": 2497,
                                "end": 2498
                              },
                              "directive": null,
                              "start": 2497,
                              "end": 2499
                            },
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
                                  "start": 2526,
                                  "end": 2527
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 2530,
                                  "end": 2531
                                },
                                "start": 2526,
                                "end": 2531
                              },
                              "directive": null,
                              "start": 2526,
                              "end": 2532
                            }
                          ],
                          "start": 2483,
                          "end": 2542
                        },
                        "start": 2473,
                        "end": 2542
                      },
                      "finalizer": {
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
                              "start": 2573,
                              "end": 2574
                            },
                            "directive": null,
                            "start": 2573,
                            "end": 2575
                          },
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
                                  "start": 2612,
                                  "end": 2616
                                },
                                "prefix": true,
                                "start": 2611,
                                "end": 2616
                              },
                              "prefix": true,
                              "start": 2610,
                              "end": 2616
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
                                      "start": 2636,
                                      "end": 2637
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 4,
                                      "raw": "4",
                                      "start": 2640,
                                      "end": 2641
                                    },
                                    "start": 2636,
                                    "end": 2641
                                  },
                                  "directive": null,
                                  "start": 2636,
                                  "end": 2642
                                }
                              ],
                              "start": 2618,
                              "end": 2656
                            },
                            "alternate": null,
                            "start": 2606,
                            "end": 2656
                          }
                        ],
                        "start": 2559,
                        "end": 2666
                      },
                      "start": 2274,
                      "end": 2666
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2675,
                        "end": 2676
                      },
                      "directive": null,
                      "start": 2675,
                      "end": 2677
                    },
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
                          "start": 2700,
                          "end": 2701
                        },
                        "right": {
                          "type": "Literal",
                          "value": 5,
                          "raw": "5",
                          "start": 2704,
                          "end": 2705
                        },
                        "start": 2700,
                        "end": 2705
                      },
                      "directive": null,
                      "start": 2700,
                      "end": 2706
                    }
                  ],
                  "start": 2264,
                  "end": 2712
                },
                "id": null,
                "generator": false,
                "start": 2258,
                "end": 2712
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2257,
              "end": 2715
            },
            "directive": null,
            "start": 2257,
            "end": 2716
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2721,
              "end": 2722
            },
            "directive": null,
            "start": 2721,
            "end": 2723
          }
        ],
        "start": 2213,
        "end": 2739
      },
      "expression": false,
      "start": 2198,
      "end": 2739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 2750,
        "end": 2753
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2769,
                            "end": 2770
                          },
                          "start": 2769,
                          "end": 2770
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2773,
                            "end": 2774
                          },
                          "start": 2773,
                          "end": 2774
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2777,
                            "end": 2778
                          },
                          "start": 2777,
                          "end": 2778
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 2781,
                            "end": 2782
                          },
                          "start": 2781,
                          "end": 2782
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 2785,
                            "end": 2786
                          },
                          "start": 2785,
                          "end": 2786
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 2789,
                            "end": 2790
                          },
                          "start": 2789,
                          "end": 2790
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 2793,
                            "end": 2794
                          },
                          "start": 2793,
                          "end": 2794
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 2797,
                            "end": 2798
                          },
                          "start": 2797,
                          "end": 2798
                        }
                      ],
                      "start": 2769,
                      "end": 2798
                    },
                    "start": 2767,
                    "end": 2798
                  },
                  "start": 2766,
                  "end": 2798
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2801,
                  "end": 2802
                },
                "definite": false,
                "start": 2766,
                "end": 2802
              }
            ],
            "declare": false,
            "start": 2762,
            "end": 2803
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "TryStatement",
                      "block": {
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
                                  "start": 2849,
                                  "end": 2853
                                },
                                "prefix": true,
                                "start": 2848,
                                "end": 2853
                              },
                              "prefix": true,
                              "start": 2847,
                              "end": 2853
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
                                      "start": 2873,
                                      "end": 2874
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1",
                                      "start": 2877,
                                      "end": 2878
                                    },
                                    "start": 2873,
                                    "end": 2878
                                  },
                                  "directive": null,
                                  "start": 2873,
                                  "end": 2879
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 2896,
                                  "end": 2903
                                }
                              ],
                              "start": 2855,
                              "end": 2917
                            },
                            "alternate": null,
                            "start": 2843,
                            "end": 2917
                          },
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
                                  "start": 2936,
                                  "end": 2940
                                },
                                "prefix": true,
                                "start": 2935,
                                "end": 2940
                              },
                              "prefix": true,
                              "start": 2934,
                              "end": 2940
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
                                      "start": 2960,
                                      "end": 2961
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 2,
                                      "raw": "2",
                                      "start": 2964,
                                      "end": 2965
                                    },
                                    "start": 2960,
                                    "end": 2965
                                  },
                                  "directive": null,
                                  "start": 2960,
                                  "end": 2966
                                },
                                {
                                  "type": "ThrowStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 2989,
                                    "end": 2990
                                  },
                                  "start": 2983,
                                  "end": 2991
                                }
                              ],
                              "start": 2942,
                              "end": 3005
                            },
                            "alternate": null,
                            "start": 2930,
                            "end": 3005
                          }
                        ],
                        "start": 2829,
                        "end": 3015
                      },
                      "handler": {
                        "type": "CatchClause",
                        "param": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3031,
                          "end": 3032
                        },
                        "body": {
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
                                "start": 3048,
                                "end": 3049
                              },
                              "directive": null,
                              "start": 3048,
                              "end": 3050
                            },
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
                                  "start": 3077,
                                  "end": 3078
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 3081,
                                  "end": 3082
                                },
                                "start": 3077,
                                "end": 3082
                              },
                              "directive": null,
                              "start": 3077,
                              "end": 3083
                            }
                          ],
                          "start": 3034,
                          "end": 3093
                        },
                        "start": 3024,
                        "end": 3093
                      },
                      "finalizer": {
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
                              "start": 3124,
                              "end": 3125
                            },
                            "directive": null,
                            "start": 3124,
                            "end": 3126
                          },
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
                                  "start": 3163,
                                  "end": 3167
                                },
                                "prefix": true,
                                "start": 3162,
                                "end": 3167
                              },
                              "prefix": true,
                              "start": 3161,
                              "end": 3167
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
                                      "start": 3187,
                                      "end": 3188
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 4,
                                      "raw": "4",
                                      "start": 3191,
                                      "end": 3192
                                    },
                                    "start": 3187,
                                    "end": 3192
                                  },
                                  "directive": null,
                                  "start": 3187,
                                  "end": 3193
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 3210,
                                  "end": 3217
                                }
                              ],
                              "start": 3169,
                              "end": 3231
                            },
                            "alternate": null,
                            "start": 3157,
                            "end": 3231
                          },
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
                                  "start": 3250,
                                  "end": 3254
                                },
                                "prefix": true,
                                "start": 3249,
                                "end": 3254
                              },
                              "prefix": true,
                              "start": 3248,
                              "end": 3254
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
                                      "start": 3274,
                                      "end": 3275
                                    },
                                    "right": {
                                      "type": "Literal",
                                      "value": 5,
                                      "raw": "5",
                                      "start": 3278,
                                      "end": 3279
                                    },
                                    "start": 3274,
                                    "end": 3279
                                  },
                                  "directive": null,
                                  "start": 3274,
                                  "end": 3280
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": null,
                                  "start": 3297,
                                  "end": 3304
                                }
                              ],
                              "start": 3256,
                              "end": 3318
                            },
                            "alternate": null,
                            "start": 3244,
                            "end": 3318
                          },
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
                                "start": 3331,
                                "end": 3332
                              },
                              "right": {
                                "type": "Literal",
                                "value": 6,
                                "raw": "6",
                                "start": 3335,
                                "end": 3336
                              },
                              "start": 3331,
                              "end": 3336
                            },
                            "directive": null,
                            "start": 3331,
                            "end": 3337
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": null,
                            "start": 3350,
                            "end": 3357
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3370,
                              "end": 3371
                            },
                            "directive": null,
                            "start": 3370,
                            "end": 3372
                          }
                        ],
                        "start": 3110,
                        "end": 3397
                      },
                      "start": 2825,
                      "end": 3397
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3406,
                        "end": 3407
                      },
                      "directive": null,
                      "start": 3406,
                      "end": 3408
                    },
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
                          "start": 3432,
                          "end": 3433
                        },
                        "right": {
                          "type": "Literal",
                          "value": 7,
                          "raw": "7",
                          "start": 3436,
                          "end": 3437
                        },
                        "start": 3432,
                        "end": 3437
                      },
                      "directive": null,
                      "start": 3432,
                      "end": 3438
                    }
                  ],
                  "start": 2815,
                  "end": 3457
                },
                "id": null,
                "generator": false,
                "start": 2809,
                "end": 3457
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2808,
              "end": 3460
            },
            "directive": null,
            "start": 2808,
            "end": 3461
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3466,
              "end": 3467
            },
            "directive": null,
            "start": 3466,
            "end": 3468
          }
        ],
        "start": 2756,
        "end": 3484
      },
      "expression": false,
      "start": 2741,
      "end": 3484
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
            "name": "main",
            "optional": false,
            "typeAnnotation": null,
            "start": 3514,
            "end": 3518
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
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "hoge",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 3543,
                                "end": 3549
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 3552,
                                "end": 3561
                              }
                            ],
                            "start": 3543,
                            "end": 3561
                          },
                          "start": 3541,
                          "end": 3561
                        },
                        "start": 3537,
                        "end": 3561
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3564,
                        "end": 3573
                      },
                      "definite": false,
                      "start": 3537,
                      "end": 3573
                    }
                  ],
                  "declare": false,
                  "start": 3533,
                  "end": 3574
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "hoge",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3593,
                            "end": 3597
                          },
                          "right": {
                            "type": "Literal",
                            "value": "hoge!",
                            "raw": "'hoge!'",
                            "start": 3600,
                            "end": 3607
                          },
                          "start": 3593,
                          "end": 3607
                        },
                        "directive": null,
                        "start": 3593,
                        "end": 3608
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3617,
                        "end": 3624
                      }
                    ],
                    "start": 3583,
                    "end": 3630
                  },
                  "handler": {
                    "type": "CatchClause",
                    "param": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 3651,
                          "end": 3658
                        }
                      ],
                      "start": 3641,
                      "end": 3664
                    },
                    "start": 3635,
                    "end": 3664
                  },
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hoge",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3691,
                          "end": 3695
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "hoge",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3711,
                                  "end": 3715
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3716,
                                  "end": 3722
                                },
                                "optional": false,
                                "computed": false,
                                "start": 3711,
                                "end": 3722
                              },
                              "directive": null,
                              "start": 3711,
                              "end": 3723
                            }
                          ],
                          "start": 3697,
                          "end": 3733
                        },
                        "alternate": null,
                        "start": 3687,
                        "end": 3733
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": null,
                        "start": 3742,
                        "end": 3749
                      }
                    ],
                    "start": 3677,
                    "end": 3755
                  },
                  "start": 3579,
                  "end": 3755
                }
              ],
              "start": 3527,
              "end": 3757
            },
            "id": null,
            "generator": false,
            "start": 3521,
            "end": 3757
          },
          "definite": false,
          "start": 3514,
          "end": 3757
        }
      ],
      "declare": false,
      "start": 3508,
      "end": 3757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3790,
        "end": 3792
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3807,
                  "end": 3808
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
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
                          "type": "TryStatement",
                          "block": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "Literal",
                                  "value": "x",
                                  "raw": "'x'",
                                  "start": 3853,
                                  "end": 3856
                                },
                                "start": 3846,
                                "end": 3857
                              }
                            ],
                            "start": 3832,
                            "end": 3867
                          },
                          "handler": {
                            "type": "CatchClause",
                            "param": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "e",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3883,
                              "end": 3884
                            },
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "raw": "null",
                                    "start": 3907,
                                    "end": 3911
                                  },
                                  "start": 3900,
                                  "end": 3912
                                }
                              ],
                              "start": 3886,
                              "end": 3922
                            },
                            "start": 3876,
                            "end": 3922
                          },
                          "finalizer": null,
                          "start": 3828,
                          "end": 3922
                        },
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3931,
                            "end": 3932
                          },
                          "directive": null,
                          "start": 3931,
                          "end": 3933
                        }
                      ],
                      "start": 3818,
                      "end": 3955
                    },
                    "id": null,
                    "generator": false,
                    "start": 3812,
                    "end": 3955
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 3811,
                  "end": 3958
                },
                "definite": false,
                "start": 3807,
                "end": 3958
              }
            ],
            "declare": false,
            "start": 3801,
            "end": 3959
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3964,
              "end": 3965
            },
            "directive": null,
            "start": 3964,
            "end": 3966
          }
        ],
        "start": 3795,
        "end": 3982
      },
      "expression": false,
      "start": 3781,
      "end": 3982
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "State",
        "optional": false,
        "typeAnnotation": null,
        "start": 4011,
        "end": 4016
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4021,
                  "end": 4024
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "one",
                      "raw": "\"one\"",
                      "start": 4026,
                      "end": 4031
                    },
                    "start": 4026,
                    "end": 4031
                  },
                  "start": 4024,
                  "end": 4031
                },
                "accessibility": null,
                "static": false,
                "start": 4021,
                "end": 4031
              }
            ],
            "start": 4019,
            "end": 4033
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4038,
                  "end": 4041
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "two",
                      "raw": "\"two\"",
                      "start": 4043,
                      "end": 4048
                    },
                    "start": 4043,
                    "end": 4048
                  },
                  "start": 4041,
                  "end": 4048
                },
                "accessibility": null,
                "static": false,
                "start": 4038,
                "end": 4048
              }
            ],
            "start": 4036,
            "end": 4050
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "tag",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4055,
                  "end": 4058
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "three",
                      "raw": "\"three\"",
                      "start": 4060,
                      "end": 4067
                    },
                    "start": 4060,
                    "end": 4067
                  },
                  "start": 4058,
                  "end": 4067
                },
                "accessibility": null,
                "static": false,
                "start": 4055,
                "end": 4067
              }
            ],
            "start": 4053,
            "end": 4069
          }
        ],
        "start": 4019,
        "end": 4069
      },
      "declare": false,
      "start": 4006,
      "end": 4070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notallowed",
        "optional": false,
        "typeAnnotation": null,
        "start": 4081,
        "end": 4091
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 4097,
              "end": 4103
            },
            "start": 4095,
            "end": 4103
          },
          "start": 4092,
          "end": 4103
        }
      ],
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
                  "name": "state",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "State",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4122,
                        "end": 4127
                      },
                      "typeArguments": null,
                      "start": 4122,
                      "end": 4127
                    },
                    "start": 4120,
                    "end": 4127
                  },
                  "start": 4115,
                  "end": 4127
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4132,
                        "end": 4135
                      },
                      "value": {
                        "type": "Literal",
                        "value": "one",
                        "raw": "\"one\"",
                        "start": 4137,
                        "end": 4142
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4132,
                      "end": 4142
                    }
                  ],
                  "start": 4130,
                  "end": 4144
                },
                "definite": false,
                "start": 4115,
                "end": 4144
              }
            ],
            "declare": false,
            "start": 4111,
            "end": 4145
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4164,
                      "end": 4169
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4174,
                            "end": 4177
                          },
                          "value": {
                            "type": "Literal",
                            "value": "two",
                            "raw": "\"two\"",
                            "start": 4179,
                            "end": 4184
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4174,
                          "end": 4184
                        }
                      ],
                      "start": 4172,
                      "end": 4186
                    },
                    "start": 4164,
                    "end": 4186
                  },
                  "directive": null,
                  "start": 4164,
                  "end": 4187
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4214,
                            "end": 4219
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4224,
                                  "end": 4227
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "three",
                                  "raw": "\"three\"",
                                  "start": 4229,
                                  "end": 4236
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4224,
                                "end": 4236
                              }
                            ],
                            "start": 4222,
                            "end": 4238
                          },
                          "start": 4214,
                          "end": 4238
                        },
                        "directive": null,
                        "start": 4214,
                        "end": 4239
                      }
                    ],
                    "start": 4200,
                    "end": 4249
                  },
                  "handler": null,
                  "finalizer": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 4266,
                    "end": 4269
                  },
                  "start": 4196,
                  "end": 4269
                }
              ],
              "start": 4154,
              "end": 4275
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 4287,
                "end": 4290
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "state",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4302,
                        "end": 4307
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4308,
                        "end": 4311
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4302,
                      "end": 4311
                    },
                    "directive": null,
                    "start": 4302,
                    "end": 4312
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4325,
                            "end": 4330
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4331,
                            "end": 4334
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4325,
                          "end": 4334
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "one",
                          "raw": "\"one\"",
                          "start": 4339,
                          "end": 4344
                        },
                        "start": 4325,
                        "end": 4344
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "state",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4348,
                            "end": 4353
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4354,
                            "end": 4357
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4348,
                          "end": 4357
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "value": "two",
                          "raw": "\"two\"",
                          "start": 4362,
                          "end": 4367
                        },
                        "start": 4348,
                        "end": 4367
                      },
                      "start": 4325,
                      "end": 4367
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4383,
                                "end": 4390
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4391,
                                "end": 4394
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4383,
                              "end": 4394
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "state",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4395,
                                  "end": 4400
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tag",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4401,
                                  "end": 4404
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4395,
                                "end": 4404
                              }
                            ],
                            "optional": false,
                            "start": 4383,
                            "end": 4405
                          },
                          "directive": null,
                          "start": 4383,
                          "end": 4406
                        }
                      ],
                      "start": 4369,
                      "end": 4416
                    },
                    "alternate": null,
                    "start": 4321,
                    "end": 4416
                  }
                ],
                "start": 4292,
                "end": 4422
              },
              "start": 4280,
              "end": 4422
            },
            "finalizer": null,
            "start": 4150,
            "end": 4422
          }
        ],
        "start": 4105,
        "end": 4424
      },
      "expression": false,
      "start": 4072,
      "end": 4424
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 4435,
        "end": 4438
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4454,
                            "end": 4455
                          },
                          "start": 4454,
                          "end": 4455
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 4458,
                            "end": 4459
                          },
                          "start": 4458,
                          "end": 4459
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4462,
                            "end": 4463
                          },
                          "start": 4462,
                          "end": 4463
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 4466,
                            "end": 4467
                          },
                          "start": 4466,
                          "end": 4467
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 4470,
                            "end": 4471
                          },
                          "start": 4470,
                          "end": 4471
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 4474,
                            "end": 4475
                          },
                          "start": 4474,
                          "end": 4475
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 4478,
                            "end": 4479
                          },
                          "start": 4478,
                          "end": 4479
                        }
                      ],
                      "start": 4454,
                      "end": 4479
                    },
                    "start": 4452,
                    "end": 4479
                  },
                  "start": 4451,
                  "end": 4479
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4482,
                  "end": 4483
                },
                "definite": false,
                "start": 4451,
                "end": 4483
              }
            ],
            "declare": false,
            "start": 4447,
            "end": 4484
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 4503,
                      "end": 4504
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4507,
                      "end": 4508
                    },
                    "start": 4503,
                    "end": 4508
                  },
                  "directive": null,
                  "start": 4503,
                  "end": 4509
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "start": 4536,
                            "end": 4537
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4540,
                            "end": 4541
                          },
                          "start": 4536,
                          "end": 4541
                        },
                        "directive": null,
                        "start": 4536,
                        "end": 4542
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                  "start": 4577,
                                  "end": 4578
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 4581,
                                  "end": 4582
                                },
                                "start": 4577,
                                "end": 4582
                              },
                              "directive": null,
                              "start": 4577,
                              "end": 4583
                            }
                          ],
                          "start": 4559,
                          "end": 4597
                        },
                        "handler": null,
                        "finalizer": {
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
                                    "start": 4642,
                                    "end": 4646
                                  },
                                  "prefix": true,
                                  "start": 4641,
                                  "end": 4646
                                },
                                "prefix": true,
                                "start": 4640,
                                "end": 4646
                              },
                              "consequent": {
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
                                    "start": 4648,
                                    "end": 4649
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4",
                                    "start": 4652,
                                    "end": 4653
                                  },
                                  "start": 4648,
                                  "end": 4653
                                },
                                "directive": null,
                                "start": 4648,
                                "end": 4654
                              },
                              "alternate": null,
                              "start": 4636,
                              "end": 4654
                            }
                          ],
                          "start": 4618,
                          "end": 4668
                        },
                        "start": 4555,
                        "end": 4668
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4681,
                          "end": 4682
                        },
                        "directive": null,
                        "start": 4681,
                        "end": 4683
                      }
                    ],
                    "start": 4522,
                    "end": 4703
                  },
                  "handler": null,
                  "finalizer": {
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
                              "start": 4740,
                              "end": 4744
                            },
                            "prefix": true,
                            "start": 4739,
                            "end": 4744
                          },
                          "prefix": true,
                          "start": 4738,
                          "end": 4744
                        },
                        "consequent": {
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
                              "start": 4746,
                              "end": 4747
                            },
                            "right": {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 4750,
                              "end": 4751
                            },
                            "start": 4746,
                            "end": 4751
                          },
                          "directive": null,
                          "start": 4746,
                          "end": 4752
                        },
                        "alternate": null,
                        "start": 4734,
                        "end": 4752
                      }
                    ],
                    "start": 4720,
                    "end": 4762
                  },
                  "start": 4518,
                  "end": 4762
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4771,
                    "end": 4772
                  },
                  "directive": null,
                  "start": 4771,
                  "end": 4773
                }
              ],
              "start": 4493,
              "end": 4793
            },
            "handler": null,
            "finalizer": {
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
                        "start": 4822,
                        "end": 4826
                      },
                      "prefix": true,
                      "start": 4821,
                      "end": 4826
                    },
                    "prefix": true,
                    "start": 4820,
                    "end": 4826
                  },
                  "consequent": {
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
                        "start": 4828,
                        "end": 4829
                      },
                      "right": {
                        "type": "Literal",
                        "value": 6,
                        "raw": "6",
                        "start": 4832,
                        "end": 4833
                      },
                      "start": 4828,
                      "end": 4833
                    },
                    "directive": null,
                    "start": 4828,
                    "end": 4834
                  },
                  "alternate": null,
                  "start": 4816,
                  "end": 4834
                }
              ],
              "start": 4806,
              "end": 4840
            },
            "start": 4489,
            "end": 4840
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 4845,
              "end": 4846
            },
            "directive": null,
            "start": 4845,
            "end": 4847
          }
        ],
        "start": 4441,
        "end": 4867
      },
      "expression": false,
      "start": 4426,
      "end": 4867
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 4878,
        "end": 4881
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4897,
                            "end": 4898
                          },
                          "start": 4897,
                          "end": 4898
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 4901,
                            "end": 4902
                          },
                          "start": 4901,
                          "end": 4902
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4905,
                            "end": 4906
                          },
                          "start": 4905,
                          "end": 4906
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 4909,
                            "end": 4910
                          },
                          "start": 4909,
                          "end": 4910
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 4913,
                            "end": 4914
                          },
                          "start": 4913,
                          "end": 4914
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 4917,
                            "end": 4918
                          },
                          "start": 4917,
                          "end": 4918
                        }
                      ],
                      "start": 4897,
                      "end": 4918
                    },
                    "start": 4895,
                    "end": 4918
                  },
                  "start": 4894,
                  "end": 4918
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4921,
                  "end": 4922
                },
                "definite": false,
                "start": 4894,
                "end": 4922
              }
            ],
            "declare": false,
            "start": 4890,
            "end": 4923
          },
          {
            "type": "TryStatement",
            "block": {
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
                      "start": 4942,
                      "end": 4943
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 4946,
                      "end": 4947
                    },
                    "start": 4942,
                    "end": 4947
                  },
                  "directive": null,
                  "start": 4942,
                  "end": 4948
                },
                {
                  "type": "TryStatement",
                  "block": {
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
                            "start": 4975,
                            "end": 4976
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 4979,
                            "end": 4980
                          },
                          "start": 4975,
                          "end": 4980
                        },
                        "directive": null,
                        "start": 4975,
                        "end": 4981
                      },
                      {
                        "type": "TryStatement",
                        "block": {
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
                                  "start": 5016,
                                  "end": 5017
                                },
                                "right": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 5020,
                                  "end": 5021
                                },
                                "start": 5016,
                                "end": 5021
                              },
                              "directive": null,
                              "start": 5016,
                              "end": 5022
                            }
                          ],
                          "start": 4998,
                          "end": 5036
                        },
                        "handler": null,
                        "finalizer": {
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
                                    "start": 5081,
                                    "end": 5085
                                  },
                                  "prefix": true,
                                  "start": 5080,
                                  "end": 5085
                                },
                                "prefix": true,
                                "start": 5079,
                                "end": 5085
                              },
                              "consequent": {
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
                                    "start": 5087,
                                    "end": 5088
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4",
                                    "start": 5091,
                                    "end": 5092
                                  },
                                  "start": 5087,
                                  "end": 5092
                                },
                                "directive": null,
                                "start": 5087,
                                "end": 5093
                              },
                              "alternate": null,
                              "start": 5075,
                              "end": 5093
                            }
                          ],
                          "start": 5057,
                          "end": 5107
                        },
                        "start": 4994,
                        "end": 5107
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5120,
                          "end": 5121
                        },
                        "directive": null,
                        "start": 5120,
                        "end": 5122
                      }
                    ],
                    "start": 4961,
                    "end": 5142
                  },
                  "handler": null,
                  "finalizer": {
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
                              "start": 5179,
                              "end": 5183
                            },
                            "prefix": true,
                            "start": 5178,
                            "end": 5183
                          },
                          "prefix": true,
                          "start": 5177,
                          "end": 5183
                        },
                        "consequent": {
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
                              "start": 5185,
                              "end": 5186
                            },
                            "right": {
                              "type": "Literal",
                              "value": 5,
                              "raw": "5",
                              "start": 5189,
                              "end": 5190
                            },
                            "start": 5185,
                            "end": 5190
                          },
                          "directive": null,
                          "start": 5185,
                          "end": 5191
                        },
                        "alternate": null,
                        "start": 5173,
                        "end": 5191
                      }
                    ],
                    "start": 5159,
                    "end": 5201
                  },
                  "start": 4957,
                  "end": 5201
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5210,
                    "end": 5211
                  },
                  "directive": null,
                  "start": 5210,
                  "end": 5212
                }
              ],
              "start": 4932,
              "end": 5232
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 5244,
                "end": 5245
              },
              "body": {
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
                      "start": 5257,
                      "end": 5258
                    },
                    "directive": null,
                    "start": 5257,
                    "end": 5259
                  }
                ],
                "start": 5247,
                "end": 5291
              },
              "start": 5237,
              "end": 5291
            },
            "finalizer": null,
            "start": 4928,
            "end": 5291
          }
        ],
        "start": 4884,
        "end": 5293
      },
      "expression": false,
      "start": 4869,
      "end": 5293
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 5293
}
```
