__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doSomething",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 31,
                  "end": 35
                },
                "start": 28,
                "end": 35
              },
              "start": 25,
              "end": 35
            },
            "start": 23,
            "end": 35
          },
          "start": 21,
          "end": 35
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 45
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 43,
              "end": 47
            },
            "directive": null,
            "start": 43,
            "end": 48
          }
        ],
        "start": 37,
        "end": 50
      },
      "expression": false,
      "start": 0,
      "end": 50
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 63
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 67,
                  "end": 73
                },
                {
                  "type": "TSStringKeyword",
                  "start": 76,
                  "end": 82
                }
              ],
              "start": 67,
              "end": 82
            },
            "start": 65,
            "end": 82
          },
          "start": 64,
          "end": 82
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
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 99,
                  "end": 100
                },
                "prefix": true,
                "start": 92,
                "end": 100
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 105,
                "end": 113
              },
              "start": 92,
              "end": 113
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
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 123,
                      "end": 134
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 141,
                              "end": 142
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 143,
                              "end": 150
                            },
                            "optional": false,
                            "computed": false,
                            "start": 141,
                            "end": 150
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 141,
                          "end": 152
                        },
                        "id": null,
                        "generator": false,
                        "start": 135,
                        "end": 152
                      }
                    ],
                    "optional": false,
                    "start": 123,
                    "end": 153
                  },
                  "directive": null,
                  "start": 123,
                  "end": 154
                }
              ],
              "start": 115,
              "end": 158
            },
            "alternate": null,
            "start": 88,
            "end": 158
          }
        ],
        "start": 84,
        "end": 160
      },
      "expression": false,
      "start": 52,
      "end": 160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 173
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 177,
                  "end": 183
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 186,
                  "end": 195
                }
              ],
              "start": 177,
              "end": 195
            },
            "start": 175,
            "end": 195
          },
          "start": 174,
          "end": 195
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
                "start": 208,
                "end": 209
              },
              "prefix": true,
              "start": 207,
              "end": 209
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": null,
                  "start": 221,
                  "end": 228
                }
              ],
              "start": 211,
              "end": 234
            },
            "alternate": null,
            "start": 203,
            "end": 234
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "doSomething",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 250
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 258
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 265
                    },
                    "optional": false,
                    "computed": false,
                    "start": 257,
                    "end": 265
                  },
                  "id": null,
                  "generator": false,
                  "start": 251,
                  "end": 265
                }
              ],
              "optional": false,
              "start": 239,
              "end": 266
            },
            "directive": null,
            "start": 239,
            "end": 267
          }
        ],
        "start": 197,
        "end": 269
      },
      "expression": false,
      "start": 162,
      "end": 269
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 282
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 286,
                  "end": 292
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 295,
                  "end": 304
                }
              ],
              "start": 286,
              "end": 304
            },
            "start": 284,
            "end": 304
          },
          "start": 283,
          "end": 304
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 316,
              "end": 317
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
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 329,
                      "end": 340
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
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
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "doSomething",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 361,
                                  "end": 372
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "ArrowFunctionExpression",
                                    "expression": true,
                                    "async": false,
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": null,
                                    "body": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "x",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 379,
                                        "end": 380
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 381,
                                        "end": 387
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 379,
                                      "end": 387
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 373,
                                    "end": 387
                                  }
                                ],
                                "optional": false,
                                "start": 361,
                                "end": 388
                              },
                              "directive": null,
                              "start": 361,
                              "end": 389
                            }
                          ],
                          "start": 347,
                          "end": 399
                        },
                        "id": null,
                        "generator": false,
                        "start": 341,
                        "end": 399
                      }
                    ],
                    "optional": false,
                    "start": 329,
                    "end": 400
                  },
                  "directive": null,
                  "start": 329,
                  "end": 401
                }
              ],
              "start": 319,
              "end": 407
            },
            "alternate": null,
            "start": 312,
            "end": 407
          }
        ],
        "start": 306,
        "end": 409
      },
      "expression": false,
      "start": 271,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 422
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 426,
                  "end": 432
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 435,
                  "end": 444
                }
              ],
              "start": 426,
              "end": 444
            },
            "start": 424,
            "end": 444
          },
          "start": 423,
          "end": 444
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 457
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 452,
              "end": 459
            },
            "directive": null,
            "start": 452,
            "end": 460
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "inner",
              "optional": false,
              "typeAnnotation": null,
              "start": 474,
              "end": 479
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
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 496,
                    "end": 497
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
                            "name": "doSomething",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 513,
                            "end": 524
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [],
                              "returnType": null,
                              "body": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 531,
                                  "end": 532
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 533,
                                  "end": 539
                                },
                                "optional": false,
                                "computed": false,
                                "start": 531,
                                "end": 539
                              },
                              "id": null,
                              "generator": false,
                              "start": 525,
                              "end": 539
                            }
                          ],
                          "optional": false,
                          "start": 513,
                          "end": 540
                        },
                        "directive": null,
                        "start": 513,
                        "end": 541
                      }
                    ],
                    "start": 499,
                    "end": 551
                  },
                  "alternate": null,
                  "start": 492,
                  "end": 551
                }
              ],
              "start": 482,
              "end": 557
            },
            "expression": false,
            "start": 465,
            "end": 557
          }
        ],
        "start": 446,
        "end": 559
      },
      "expression": false,
      "start": 411,
      "end": 559
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 572
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 576,
                  "end": 582
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 585,
                  "end": 594
                }
              ],
              "start": 576,
              "end": 594
            },
            "start": 574,
            "end": 594
          },
          "start": 573,
          "end": 594
        }
      ],
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 603
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 606,
                "end": 611
              },
              "start": 602,
              "end": 611
            },
            "directive": null,
            "start": 602,
            "end": 612
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 621,
              "end": 622
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
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 634,
                      "end": 645
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 652,
                            "end": 653
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 654,
                            "end": 660
                          },
                          "optional": false,
                          "computed": false,
                          "start": 652,
                          "end": 660
                        },
                        "id": null,
                        "generator": false,
                        "start": 646,
                        "end": 660
                      }
                    ],
                    "optional": false,
                    "start": 634,
                    "end": 661
                  },
                  "directive": null,
                  "start": 634,
                  "end": 662
                }
              ],
              "start": 624,
              "end": 668
            },
            "alternate": null,
            "start": 617,
            "end": 668
          }
        ],
        "start": 596,
        "end": 670
      },
      "expression": false,
      "start": 561,
      "end": 670
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 681,
        "end": 683
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 687,
                  "end": 693
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 696,
                  "end": 705
                }
              ],
              "start": 687,
              "end": 705
            },
            "start": 685,
            "end": 705
          },
          "start": 684,
          "end": 705
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 718
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
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 730,
                      "end": 741
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 748,
                            "end": 749
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 750,
                            "end": 756
                          },
                          "optional": false,
                          "computed": false,
                          "start": 748,
                          "end": 756
                        },
                        "id": null,
                        "generator": false,
                        "start": 742,
                        "end": 756
                      }
                    ],
                    "optional": false,
                    "start": 730,
                    "end": 757
                  },
                  "directive": null,
                  "start": 730,
                  "end": 758
                }
              ],
              "start": 720,
              "end": 764
            },
            "alternate": null,
            "start": 713,
            "end": 764
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
                "start": 769,
                "end": 770
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 773,
                "end": 778
              },
              "start": 769,
              "end": 778
            },
            "directive": null,
            "start": 769,
            "end": 779
          }
        ],
        "start": 707,
        "end": 821
      },
      "expression": false,
      "start": 672,
      "end": 821
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 835
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 839,
                  "end": 845
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 848,
                  "end": 857
                }
              ],
              "start": 839,
              "end": 857
            },
            "start": 837,
            "end": 857
          },
          "start": 836,
          "end": 857
        }
      ],
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 871,
                  "end": 872
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 875,
                    "end": 876
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 880,
                    "end": 882
                  },
                  "start": 875,
                  "end": 882
                },
                "definite": false,
                "start": 871,
                "end": 882
              }
            ],
            "declare": false,
            "start": 865,
            "end": 883
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 893
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
                      "name": "doSomething",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 905,
                      "end": 916
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": null,
                        "body": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 923,
                            "end": 924
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 925,
                            "end": 931
                          },
                          "optional": false,
                          "computed": false,
                          "start": 923,
                          "end": 931
                        },
                        "id": null,
                        "generator": false,
                        "start": 917,
                        "end": 931
                      }
                    ],
                    "optional": false,
                    "start": 905,
                    "end": 932
                  },
                  "directive": null,
                  "start": 905,
                  "end": 933
                }
              ],
              "start": 895,
              "end": 939
            },
            "alternate": null,
            "start": 888,
            "end": 939
          }
        ],
        "start": 859,
        "end": 941
      },
      "expression": false,
      "start": 824,
      "end": 941
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 941
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 9,
    "end": 20,
    "range": [
      9,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 21,
    "end": 23,
    "range": [
      21,
      23
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 28,
    "end": 30,
    "range": [
      28,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 31,
    "end": 35,
    "range": [
      31,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 43,
    "end": 45,
    "range": [
      43,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 52,
    "end": 60,
    "range": [
      52,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 61,
    "end": 63,
    "range": [
      61,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 67,
    "end": 73,
    "range": [
      67,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 76,
    "end": 82,
    "range": [
      76,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 92,
    "end": 98,
    "range": [
      92,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 101,
    "end": 104,
    "range": [
      101,
      104
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 105,
    "end": 113,
    "range": [
      105,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 123,
    "end": 134,
    "range": [
      123,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 138,
    "end": 140,
    "range": [
      138,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 143,
    "end": 150,
    "range": [
      143,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 162,
    "end": 170,
    "range": [
      162,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 171,
    "end": 173,
    "range": [
      171,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183,
    "range": [
      177,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 186,
    "end": 195,
    "range": [
      186,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 203,
    "end": 205,
    "range": [
      203,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 239,
    "end": 250,
    "range": [
      239,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 254,
    "end": 256,
    "range": [
      254,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 259,
    "end": 265,
    "range": [
      259,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 271,
    "end": 279,
    "range": [
      271,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 286,
    "end": 292,
    "range": [
      286,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 295,
    "end": 304,
    "range": [
      295,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 312,
    "end": 314,
    "range": [
      312,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 329,
    "end": 340,
    "range": [
      329,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 344,
    "end": 346,
    "range": [
      344,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 361,
    "end": 372,
    "range": [
      361,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 376,
    "end": 378,
    "range": [
      376,
      378
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 381,
    "end": 387,
    "range": [
      381,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419,
    "range": [
      411,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "f3",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 426,
    "end": 432,
    "range": [
      426,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 435,
    "end": 444,
    "range": [
      435,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 452,
    "end": 457,
    "range": [
      452,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 457,
    "end": 458,
    "range": [
      457,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 465,
    "end": 473,
    "range": [
      465,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 474,
    "end": 479,
    "range": [
      474,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 492,
    "end": 494,
    "range": [
      492,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 513,
    "end": 524,
    "range": [
      513,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 526,
    "end": 527,
    "range": [
      526,
      527
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 528,
    "end": 530,
    "range": [
      528,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 533,
    "end": 539,
    "range": [
      533,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 561,
    "end": 569,
    "range": [
      561,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "f4",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 576,
    "end": 582,
    "range": [
      576,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 585,
    "end": 594,
    "range": [
      585,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 606,
    "end": 611,
    "range": [
      606,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 617,
    "end": 619,
    "range": [
      617,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 634,
    "end": 645,
    "range": [
      634,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 649,
    "end": 651,
    "range": [
      649,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 654,
    "end": 660,
    "range": [
      654,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 672,
    "end": 680,
    "range": [
      672,
      680
    ]
  },
  {
    "type": "Identifier",
    "value": "f5",
    "start": 681,
    "end": 683,
    "range": [
      681,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 687,
    "end": 693,
    "range": [
      687,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 696,
    "end": 705,
    "range": [
      696,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 713,
    "end": 715,
    "range": [
      713,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 717,
    "end": 718,
    "range": [
      717,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 730,
    "end": 741,
    "range": [
      730,
      741
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 745,
    "end": 747,
    "range": [
      745,
      747
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 750,
    "end": 756,
    "range": [
      750,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 763,
    "end": 764,
    "range": [
      763,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 773,
    "end": 778,
    "range": [
      773,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 824,
    "end": 832,
    "range": [
      824,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "f6",
    "start": 833,
    "end": 835,
    "range": [
      833,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 839,
    "end": 845,
    "range": [
      839,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 848,
    "end": 857,
    "range": [
      848,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 865,
    "end": 870,
    "range": [
      865,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 875,
    "end": 876,
    "range": [
      875,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 880,
    "end": 882,
    "range": [
      880,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 888,
    "end": 890,
    "range": [
      888,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  },
  {
    "type": "Identifier",
    "value": "doSomething",
    "start": 905,
    "end": 916,
    "range": [
      905,
      916
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 920,
    "end": 922,
    "range": [
      920,
      922
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 925,
    "end": 931,
    "range": [
      925,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  }
]
```
