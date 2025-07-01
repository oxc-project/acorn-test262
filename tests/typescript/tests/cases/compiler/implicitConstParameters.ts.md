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
