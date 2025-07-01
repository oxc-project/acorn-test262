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
        "name": "getStringOrNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 34
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 38,
              "end": 44
            },
            {
              "type": "TSNumberKeyword",
              "start": 47,
              "end": 53
            }
          ],
          "start": 38,
          "end": 53
        },
        "start": 36,
        "end": 53
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 54
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 67
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
                  "start": 80,
                  "end": 81
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 101
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 84,
                  "end": 103
                },
                "definite": false,
                "start": 80,
                "end": 103
              }
            ],
            "declare": false,
            "start": 76,
            "end": 104
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
                  "start": 120,
                  "end": 121
                },
                "prefix": true,
                "start": 113,
                "end": 121
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 126,
                "end": 134
              },
              "start": 113,
              "end": 134
            },
            "consequent": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 151
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 186,
                                    "end": 187
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 188,
                                    "end": 194
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 186,
                                  "end": 194
                                },
                                "start": 179,
                                "end": 195
                              }
                            ],
                            "start": 165,
                            "end": 205
                          },
                          "expression": false,
                          "start": 154,
                          "end": 205
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 154,
                        "end": 207
                      },
                      "definite": false,
                      "start": 150,
                      "end": 207
                    }
                  ],
                  "declare": false,
                  "start": 146,
                  "end": 208
                }
              ],
              "start": 136,
              "end": 214
            },
            "alternate": null,
            "start": 109,
            "end": 214
          }
        ],
        "start": 70,
        "end": 216
      },
      "expression": false,
      "start": 56,
      "end": 216
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 227,
        "end": 229
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
                  "start": 242,
                  "end": 243
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 246,
                    "end": 263
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 246,
                  "end": 265
                },
                "definite": false,
                "start": 242,
                "end": 265
              }
            ],
            "declare": false,
            "start": 238,
            "end": 266
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
                  "start": 282,
                  "end": 283
                },
                "prefix": true,
                "start": 275,
                "end": 283
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 288,
                "end": 296
              },
              "start": 275,
              "end": 296
            },
            "consequent": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 312,
                        "end": 313
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
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
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 349,
                                    "end": 350
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "length",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 351,
                                    "end": 357
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 349,
                                  "end": 357
                                },
                                "start": 342,
                                "end": 358
                              }
                            ],
                            "start": 328,
                            "end": 368
                          },
                          "expression": false,
                          "start": 317,
                          "end": 368
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 316,
                        "end": 371
                      },
                      "definite": false,
                      "start": 312,
                      "end": 371
                    }
                  ],
                  "declare": false,
                  "start": 308,
                  "end": 372
                }
              ],
              "start": 298,
              "end": 378
            },
            "alternate": null,
            "start": 271,
            "end": 378
          }
        ],
        "start": 232,
        "end": 380
      },
      "expression": false,
      "start": 218,
      "end": 380
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 391,
        "end": 393
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
                  "start": 406,
                  "end": 407
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "getStringOrNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 410,
                    "end": 427
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 410,
                  "end": 429
                },
                "definite": false,
                "start": 406,
                "end": 429
              }
            ],
            "declare": false,
            "start": 402,
            "end": 430
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 442,
                      "end": 448
                    },
                    "start": 440,
                    "end": 448
                  },
                  "start": 439,
                  "end": 448
                },
                "init": null,
                "definite": false,
                "start": 439,
                "end": 448
              }
            ],
            "declare": false,
            "start": 435,
            "end": 449
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
                  "start": 465,
                  "end": 466
                },
                "prefix": true,
                "start": 458,
                "end": 466
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 471,
                "end": 479
              },
              "start": 458,
              "end": 479
            },
            "consequent": {
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 496
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 500,
                              "end": 501
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 505,
                                  "end": 506
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 507,
                                  "end": 513
                                },
                                "optional": false,
                                "computed": false,
                                "start": 505,
                                "end": 513
                              },
                              "operator": "+",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 517
                              },
                              "start": 505,
                              "end": 517
                            },
                            "operator": "+",
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "z",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 520,
                              "end": 521
                            },
                            "start": 505,
                            "end": 521
                          },
                          "id": null,
                          "generator": false,
                          "start": 500,
                          "end": 521
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 523,
                              "end": 524
                            },
                            "right": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 527,
                              "end": 528
                            },
                            "start": 523,
                            "end": 528
                          }
                        ],
                        "optional": false,
                        "start": 499,
                        "end": 529
                      },
                      "definite": false,
                      "start": 495,
                      "end": 529
                    }
                  ],
                  "declare": false,
                  "start": 491,
                  "end": 530
                }
              ],
              "start": 481,
              "end": 536
            },
            "alternate": null,
            "start": 454,
            "end": 536
          }
        ],
        "start": 396,
        "end": 538
      },
      "expression": false,
      "start": 382,
      "end": 538
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
            "name": "maybeNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 579,
                    "end": 585
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 588,
                    "end": 597
                  }
                ],
                "start": 579,
                "end": 597
              },
              "start": 577,
              "end": 597
            },
            "start": 566,
            "end": 597
          },
          "init": null,
          "definite": false,
          "start": 566,
          "end": 597
        }
      ],
      "declare": false,
      "start": 562,
      "end": 598
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "maybeNumber",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 618,
                    "end": 629
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 632,
                    "end": 633
                  },
                  "start": 618,
                  "end": 633
                },
                "directive": null,
                "start": 618,
                "end": 634
              }
            ],
            "start": 612,
            "end": 636
          },
          "expression": false,
          "start": 600,
          "end": 636
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 599,
        "end": 639
      },
      "directive": null,
      "start": 599,
      "end": 640
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": false,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 641,
          "end": 652
        },
        "start": 641,
        "end": 654
      },
      "directive": null,
      "start": 641,
      "end": 655
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "maybeNumber",
          "optional": false,
          "typeAnnotation": null,
          "start": 660,
          "end": 671
        },
        "operator": "!==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null,
          "start": 676,
          "end": 685
        },
        "start": 660,
        "end": 685
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "maybeNumber",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 704
              },
              "start": 693,
              "end": 706
            },
            "directive": null,
            "start": 693,
            "end": 707
          }
        ],
        "start": 687,
        "end": 709
      },
      "alternate": null,
      "start": 656,
      "end": 709
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
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 721,
                    "end": 727
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 730,
                    "end": 739
                  }
                ],
                "start": 721,
                "end": 739
              },
              "start": 719,
              "end": 739
            },
            "start": 715,
            "end": 739
          },
          "init": null,
          "definite": false,
          "start": 715,
          "end": 739
        }
      ],
      "declare": false,
      "start": 711,
      "end": 740
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 746,
          "end": 750
        },
        "prefix": true,
        "start": 745,
        "end": 750
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 773
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Test is not defined",
                  "raw": "'Test is not defined'",
                  "start": 774,
                  "end": 795
                }
              ],
              "start": 764,
              "end": 796
            },
            "start": 758,
            "end": 797
          }
        ],
        "start": 752,
        "end": 799
      },
      "alternate": null,
      "start": 741,
      "end": 799
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "test",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 813,
                      "end": 817
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "slice",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 818,
                      "end": 823
                    },
                    "optional": false,
                    "computed": false,
                    "start": 813,
                    "end": 823
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 824,
                      "end": 825
                    }
                  ],
                  "optional": false,
                  "start": 813,
                  "end": 826
                },
                "directive": null,
                "start": 813,
                "end": 827
              }
            ],
            "start": 807,
            "end": 841
          },
          "id": null,
          "generator": false,
          "start": 801,
          "end": 841
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 800,
        "end": 844
      },
      "directive": null,
      "start": 800,
      "end": 845
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 878,
        "end": 880
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 896,
                      "end": 902
                    },
                    "start": 894,
                    "end": 902
                  },
                  "start": 893,
                  "end": 902
                },
                "init": null,
                "definite": false,
                "start": 893,
                "end": 902
              }
            ],
            "declare": false,
            "start": 889,
            "end": 903
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 930,
                          "end": 931
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 934,
                          "end": 935
                        },
                        "start": 930,
                        "end": 935
                      },
                      "directive": null,
                      "start": 930,
                      "end": 936
                    }
                  ],
                  "start": 920,
                  "end": 942
                },
                "expression": false,
                "start": 909,
                "end": 942
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 908,
              "end": 945
            },
            "directive": null,
            "start": 908,
            "end": 946
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 951,
              "end": 952
            },
            "directive": null,
            "start": 951,
            "end": 953
          }
        ],
        "start": 883,
        "end": 955
      },
      "expression": false,
      "start": 869,
      "end": 955
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 966,
        "end": 968
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 984,
                      "end": 990
                    },
                    "start": 982,
                    "end": 990
                  },
                  "start": 981,
                  "end": 990
                },
                "init": null,
                "definite": false,
                "start": 981,
                "end": 990
              }
            ],
            "declare": false,
            "start": 977,
            "end": 991
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
                "generator": true,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1025,
                          "end": 1026
                        },
                        "start": 1019,
                        "end": 1026
                      },
                      "directive": null,
                      "start": 1019,
                      "end": 1027
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1036,
                          "end": 1037
                        },
                        "right": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1040,
                          "end": 1041
                        },
                        "start": 1036,
                        "end": 1041
                      },
                      "directive": null,
                      "start": 1036,
                      "end": 1042
                    }
                  ],
                  "start": 1009,
                  "end": 1048
                },
                "expression": false,
                "start": 997,
                "end": 1048
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 996,
              "end": 1051
            },
            "directive": null,
            "start": 996,
            "end": 1052
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1057,
              "end": 1058
            },
            "directive": null,
            "start": 1057,
            "end": 1059
          }
        ],
        "start": 971,
        "end": 1080
      },
      "expression": false,
      "start": 957,
      "end": 1080
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1093
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1109,
                      "end": 1115
                    },
                    "start": 1107,
                    "end": 1115
                  },
                  "start": 1106,
                  "end": 1115
                },
                "init": null,
                "definite": false,
                "start": 1106,
                "end": 1115
              }
            ],
            "declare": false,
            "start": 1102,
            "end": 1116
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "FunctionExpression",
                "id": null,
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1149,
                          "end": 1150
                        },
                        "right": {
                          "type": "AwaitExpression",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1159,
                            "end": 1160
                          },
                          "start": 1153,
                          "end": 1160
                        },
                        "start": 1149,
                        "end": 1160
                      },
                      "directive": null,
                      "start": 1149,
                      "end": 1161
                    }
                  ],
                  "start": 1139,
                  "end": 1167
                },
                "expression": false,
                "start": 1122,
                "end": 1167
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1121,
              "end": 1170
            },
            "directive": null,
            "start": 1121,
            "end": 1171
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 1176,
              "end": 1177
            },
            "directive": null,
            "start": 1176,
            "end": 1178
          }
        ],
        "start": 1096,
        "end": 1199
      },
      "expression": false,
      "start": 1082,
      "end": 1199
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1199
}
```
