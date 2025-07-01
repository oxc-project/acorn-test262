__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PromiseOrValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 100
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 101,
            "end": 102
          }
        ],
        "start": 100,
        "end": 103
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 115
                  },
                  "typeArguments": null,
                  "start": 114,
                  "end": 115
                }
              ],
              "start": 113,
              "end": 116
            },
            "start": 106,
            "end": 116
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 120
            },
            "typeArguments": null,
            "start": 119,
            "end": 120
          }
        ],
        "start": 106,
        "end": 120
      },
      "declare": false,
      "start": 81,
      "end": 121
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapAsyncIterable",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 148
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 150
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 149,
            "end": 150
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 156
            },
            "constraint": null,
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 159,
              "end": 168
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 155,
            "end": 168
          }
        ],
        "start": 148,
        "end": 169
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "iterable",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncGenerator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 183,
                    "end": 197
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "typeArguments": null,
                        "start": 198,
                        "end": 199
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 201,
                          "end": 202
                        },
                        "typeArguments": null,
                        "start": 201,
                        "end": 202
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 204,
                        "end": 213
                      }
                    ],
                    "start": 197,
                    "end": 214
                  },
                  "start": 183,
                  "end": 214
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AsyncIterable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 217,
                    "end": 230
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 232
                        },
                        "typeArguments": null,
                        "start": 231,
                        "end": 232
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 234,
                          "end": 235
                        },
                        "typeArguments": null,
                        "start": 234,
                        "end": 235
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 237,
                        "end": 246
                      }
                    ],
                    "start": 230,
                    "end": 247
                  },
                  "start": 217,
                  "end": 247
                }
              ],
              "start": 183,
              "end": 247
            },
            "start": 181,
            "end": 247
          },
          "start": 173,
          "end": 247
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 270
                      },
                      "typeArguments": null,
                      "start": 269,
                      "end": 270
                    },
                    "start": 267,
                    "end": 270
                  },
                  "start": 262,
                  "end": 270
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PromiseOrValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 289
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 290,
                          "end": 291
                        },
                        "typeArguments": null,
                        "start": 290,
                        "end": 291
                      }
                    ],
                    "start": 289,
                    "end": 292
                  },
                  "start": 275,
                  "end": 292
                },
                "start": 272,
                "end": 292
              },
              "start": 261,
              "end": 292
            },
            "start": 259,
            "end": 292
          },
          "start": 251,
          "end": 292
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 311
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 312,
                  "end": 313
                },
                "typeArguments": null,
                "start": 312,
                "end": 313
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 316
                },
                "typeArguments": null,
                "start": 315,
                "end": 316
              },
              {
                "type": "TSVoidKeyword",
                "start": 318,
                "end": 322
              }
            ],
            "start": 311,
            "end": 323
          },
          "start": 297,
          "end": 323
        },
        "start": 295,
        "end": 323
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
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 342
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 345,
                      "end": 353
                    },
                    "property": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 360
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asyncIterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 361,
                        "end": 374
                      },
                      "optional": false,
                      "computed": false,
                      "start": 354,
                      "end": 374
                    },
                    "optional": false,
                    "computed": true,
                    "start": 345,
                    "end": 375
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 345,
                  "end": 377
                },
                "definite": false,
                "start": 334,
                "end": 377
              }
            ],
            "declare": false,
            "start": 328,
            "end": 378
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapResult",
              "optional": false,
              "typeAnnotation": null,
              "start": 397,
              "end": 406
            },
            "generator": false,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IteratorResult",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 434
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 435,
                            "end": 436
                          },
                          "typeArguments": null,
                          "start": 435,
                          "end": 436
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 438,
                            "end": 439
                          },
                          "typeArguments": null,
                          "start": 438,
                          "end": 439
                        }
                      ],
                      "start": 434,
                      "end": 440
                    },
                    "start": 420,
                    "end": 440
                  },
                  "start": 418,
                  "end": 440
                },
                "start": 412,
                "end": 440
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 447,
                  "end": 454
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IteratorResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 469
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 470,
                              "end": 471
                            },
                            "typeArguments": null,
                            "start": 470,
                            "end": 471
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 473,
                              "end": 474
                            },
                            "typeArguments": null,
                            "start": 473,
                            "end": 474
                          }
                        ],
                        "start": 469,
                        "end": 475
                      },
                      "start": 455,
                      "end": 475
                    }
                  ],
                  "start": 454,
                  "end": 476
                },
                "start": 447,
                "end": 476
              },
              "start": 445,
              "end": 476
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 487,
                      "end": 493
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 498
                    },
                    "optional": false,
                    "computed": false,
                    "start": 487,
                    "end": 498
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 521
                        },
                        "start": 508,
                        "end": 522
                      }
                    ],
                    "start": 500,
                    "end": 528
                  },
                  "alternate": null,
                  "start": 483,
                  "end": 528
                },
                {
                  "type": "TryStatement",
                  "block": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 555,
                                "end": 560
                              },
                              "value": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "callback",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 568,
                                    "end": 576
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 577,
                                        "end": 583
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 584,
                                        "end": 589
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 577,
                                      "end": 589
                                    }
                                  ],
                                  "optional": false,
                                  "start": 568,
                                  "end": 590
                                },
                                "start": 562,
                                "end": 590
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 555,
                              "end": 590
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "done",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 592,
                                "end": 596
                              },
                              "value": {
                                "type": "Literal",
                                "value": false,
                                "raw": "false",
                                "start": 598,
                                "end": 603
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 592,
                              "end": 603
                            }
                          ],
                          "start": 553,
                          "end": 605
                        },
                        "start": 546,
                        "end": 606
                      }
                    ],
                    "start": 538,
                    "end": 612
                  },
                  "handler": {
                    "type": "CatchClause",
                    "param": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 620,
                      "end": 625
                    },
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 646,
                                  "end": 654
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 655,
                                  "end": 661
                                },
                                "optional": false,
                                "computed": false,
                                "start": 646,
                                "end": 661
                              },
                              "prefix": true,
                              "start": 639,
                              "end": 661
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "\"function\"",
                              "start": 666,
                              "end": 676
                            },
                            "start": 639,
                            "end": 676
                          },
                          "consequent": {
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
                                        "type": "AwaitExpression",
                                        "argument": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "MemberExpression",
                                            "object": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "iterator",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 710,
                                              "end": 718
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "return",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 719,
                                              "end": 725
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 710,
                                            "end": 725
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 710,
                                          "end": 727
                                        },
                                        "start": 704,
                                        "end": 727
                                      },
                                      "directive": null,
                                      "start": 704,
                                      "end": 728
                                    }
                                  ],
                                  "start": 692,
                                  "end": 738
                                },
                                "handler": {
                                  "type": "CatchClause",
                                  "param": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_e",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 746,
                                    "end": 748
                                  },
                                  "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 750,
                                    "end": 752
                                  },
                                  "start": 739,
                                  "end": 752
                                },
                                "finalizer": null,
                                "start": 688,
                                "end": 752
                              }
                            ],
                            "start": 678,
                            "end": 760
                          },
                          "alternate": null,
                          "start": 635,
                          "end": 760
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 773,
                            "end": 778
                          },
                          "start": 767,
                          "end": 779
                        }
                      ],
                      "start": 627,
                      "end": 785
                    },
                    "start": 613,
                    "end": 785
                  },
                  "finalizer": null,
                  "start": 534,
                  "end": 785
                }
              ],
              "start": 477,
              "end": 789
            },
            "expression": false,
            "start": 382,
            "end": 789
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "next",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 812,
                    "end": 816
                  },
                  "value": {
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mapResult",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 843
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "iterator",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 850,
                                      "end": 858
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 859,
                                      "end": 863
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 850,
                                    "end": 863
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 850,
                                  "end": 865
                                },
                                "start": 844,
                                "end": 865
                              }
                            ],
                            "optional": false,
                            "start": 834,
                            "end": 866
                          },
                          "start": 827,
                          "end": 867
                        }
                      ],
                      "start": 819,
                      "end": 873
                    },
                    "expression": false,
                    "start": 816,
                    "end": 873
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 806,
                  "end": 873
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "return",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 885,
                    "end": 891
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 899,
                              "end": 900
                            },
                            "typeArguments": null,
                            "start": 899,
                            "end": 900
                          },
                          "start": 897,
                          "end": 900
                        },
                        "start": 892,
                        "end": 900
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 903,
                          "end": 910
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IteratorResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 911,
                                "end": 925
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 926,
                                      "end": 927
                                    },
                                    "typeArguments": null,
                                    "start": 926,
                                    "end": 927
                                  },
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "R",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 929,
                                      "end": 930
                                    },
                                    "typeArguments": null,
                                    "start": 929,
                                    "end": 930
                                  }
                                ],
                                "start": 925,
                                "end": 931
                              },
                              "start": 911,
                              "end": 931
                            }
                          ],
                          "start": 910,
                          "end": 932
                        },
                        "start": 903,
                        "end": 932
                      },
                      "start": 901,
                      "end": 932
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "UnaryExpression",
                                "operator": "typeof",
                                "argument": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "iterator",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 955,
                                    "end": 963
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "return",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 964,
                                    "end": 970
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 955,
                                  "end": 970
                                },
                                "prefix": true,
                                "start": 948,
                                "end": 970
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": "function",
                                "raw": "\"function\"",
                                "start": 975,
                                "end": 985
                              },
                              "start": 948,
                              "end": 985
                            },
                            "consequent": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mapResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 996,
                                "end": 1005
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "iterator",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1012,
                                        "end": 1020
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "return",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1021,
                                        "end": 1027
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1012,
                                      "end": 1027
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1028,
                                        "end": 1033
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1012,
                                    "end": 1034
                                  },
                                  "start": 1006,
                                  "end": 1034
                                }
                              ],
                              "optional": false,
                              "start": 996,
                              "end": 1035
                            },
                            "alternate": {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1048,
                                    "end": 1053
                                  },
                                  "value": {
                                    "type": "TSAsExpression",
                                    "expression": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "undefined",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1055,
                                      "end": 1064
                                    },
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1068,
                                      "end": 1071
                                    },
                                    "start": 1055,
                                    "end": 1071
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1048,
                                  "end": 1071
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1073,
                                    "end": 1077
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": true,
                                    "raw": "true",
                                    "start": 1079,
                                    "end": 1083
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1073,
                                  "end": 1083
                                }
                              ],
                              "start": 1046,
                              "end": 1085
                            },
                            "start": 948,
                            "end": 1085
                          },
                          "start": 941,
                          "end": 1086
                        }
                      ],
                      "start": 933,
                      "end": 1092
                    },
                    "expression": false,
                    "start": 891,
                    "end": 1092
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 879,
                  "end": 1092
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "throw",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1104,
                    "end": 1109
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "error",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 1118,
                            "end": 1125
                          },
                          "start": 1116,
                          "end": 1125
                        },
                        "start": 1110,
                        "end": 1125
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
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "iterator",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1146,
                                  "end": 1154
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "throw",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1155,
                                  "end": 1160
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1146,
                                "end": 1160
                              },
                              "prefix": true,
                              "start": 1139,
                              "end": 1160
                            },
                            "operator": "===",
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "\"function\"",
                              "start": 1165,
                              "end": 1175
                            },
                            "start": 1139,
                            "end": 1175
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "mapResult",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1194,
                                    "end": 1203
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "iterator",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1210,
                                            "end": 1218
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "throw",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1219,
                                            "end": 1224
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1210,
                                          "end": 1224
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "error",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1225,
                                            "end": 1230
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1210,
                                        "end": 1231
                                      },
                                      "start": 1204,
                                      "end": 1231
                                    }
                                  ],
                                  "optional": false,
                                  "start": 1194,
                                  "end": 1232
                                },
                                "start": 1187,
                                "end": 1233
                              }
                            ],
                            "start": 1177,
                            "end": 1241
                          },
                          "alternate": null,
                          "start": 1135,
                          "end": 1241
                        },
                        {
                          "type": "ThrowStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1254,
                            "end": 1259
                          },
                          "start": 1248,
                          "end": 1260
                        }
                      ],
                      "start": 1127,
                      "end": 1266
                    },
                    "expression": false,
                    "start": 1109,
                    "end": 1266
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1098,
                  "end": 1266
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1279
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asyncIterator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1280,
                      "end": 1293
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1273,
                    "end": 1293
                  },
                  "value": {
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
                            "type": "ThisExpression",
                            "start": 1312,
                            "end": 1316
                          },
                          "start": 1305,
                          "end": 1317
                        }
                      ],
                      "start": 1297,
                      "end": 1323
                    },
                    "expression": false,
                    "start": 1294,
                    "end": 1323
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1272,
                  "end": 1323
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1336,
                      "end": 1342
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "asyncDispose",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1343,
                      "end": 1355
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1336,
                    "end": 1355
                  },
                  "value": {
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
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1373,
                                  "end": 1377
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "return",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1378,
                                  "end": 1384
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1373,
                                "end": 1384
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "TSNonNullExpression",
                                  "expression": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "undefined",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1385,
                                    "end": 1394
                                  },
                                  "start": 1385,
                                  "end": 1395
                                }
                              ],
                              "optional": false,
                              "start": 1373,
                              "end": 1396
                            },
                            "start": 1367,
                            "end": 1396
                          },
                          "directive": null,
                          "start": 1367,
                          "end": 1397
                        }
                      ],
                      "start": 1359,
                      "end": 1403
                    },
                    "expression": false,
                    "start": 1356,
                    "end": 1403
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": true,
                  "optional": false,
                  "start": 1329,
                  "end": 1403
                }
              ],
              "start": 800,
              "end": 1407
            },
            "start": 793,
            "end": 1408
          }
        ],
        "start": 324,
        "end": 1410
      },
      "expression": false,
      "start": 123,
      "end": 1410
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
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 1418,
            "end": 1423
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1427,
                "end": 1428
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1430,
                "end": 1431
              },
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 1433,
                "end": 1434
              }
            ],
            "start": 1426,
            "end": 1435
          },
          "definite": false,
          "start": 1418,
          "end": 1435
        }
      ],
      "declare": false,
      "start": 1412,
      "end": 1436
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
            "name": "iterable",
            "optional": false,
            "typeAnnotation": null,
            "start": 1444,
            "end": 1452
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1460,
                    "end": 1466
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "asyncIterator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1467,
                    "end": 1480
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1460,
                  "end": 1480
                },
                "value": {
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
                          "type": "ThisExpression",
                          "start": 1497,
                          "end": 1501
                        },
                        "start": 1490,
                        "end": 1502
                      }
                    ],
                    "start": 1484,
                    "end": 1506
                  },
                  "expression": false,
                  "start": 1481,
                  "end": 1506
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 1459,
                "end": 1506
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1510,
                  "end": 1514
                },
                "value": {
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1529,
                              "end": 1534
                            },
                            "init": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "items",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1537,
                                "end": 1542
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1543,
                                "end": 1544
                              },
                              "optional": false,
                              "computed": true,
                              "start": 1537,
                              "end": 1545
                            },
                            "definite": false,
                            "start": 1529,
                            "end": 1545
                          }
                        ],
                        "declare": false,
                        "start": 1523,
                        "end": 1546
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "items",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1551,
                              "end": 1556
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "shift",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1557,
                              "end": 1562
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1551,
                            "end": 1562
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1551,
                          "end": 1564
                        },
                        "directive": null,
                        "start": 1551,
                        "end": 1565
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1577,
                              "end": 1584
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "resolve",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1585,
                              "end": 1592
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1577,
                            "end": 1592
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "done",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1601,
                                    "end": 1605
                                  },
                                  "value": {
                                    "type": "BinaryExpression",
                                    "left": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "items",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1607,
                                        "end": 1612
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "length",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1613,
                                        "end": 1619
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1607,
                                      "end": 1619
                                    },
                                    "operator": "===",
                                    "right": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 1624,
                                      "end": 1625
                                    },
                                    "start": 1607,
                                    "end": 1625
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1601,
                                  "end": 1625
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1633,
                                    "end": 1638
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1633,
                                    "end": 1638
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 1633,
                                  "end": 1638
                                }
                              ],
                              "start": 1593,
                              "end": 1645
                            }
                          ],
                          "optional": false,
                          "start": 1577,
                          "end": 1646
                        },
                        "start": 1570,
                        "end": 1647
                      }
                    ],
                    "start": 1517,
                    "end": 1651
                  },
                  "expression": false,
                  "start": 1514,
                  "end": 1651
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1510,
                "end": 1651
              }
            ],
            "start": 1455,
            "end": 1654
          },
          "definite": false,
          "start": 1444,
          "end": 1654
        }
      ],
      "declare": false,
      "start": 1438,
      "end": 1655
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
            "name": "doubles",
            "optional": false,
            "typeAnnotation": null,
            "start": 1663,
            "end": 1670
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "mapAsyncIterable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1689
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "iterable",
                "optional": false,
                "typeAnnotation": null,
                "start": 1690,
                "end": 1698
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1701,
                    "end": 1702
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1707,
                    "end": 1708
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1711,
                    "end": 1712
                  },
                  "start": 1707,
                  "end": 1712
                },
                "id": null,
                "generator": false,
                "start": 1700,
                "end": 1712
              }
            ],
            "optional": false,
            "start": 1673,
            "end": 1713
          },
          "definite": false,
          "start": 1663,
          "end": 1713
        }
      ],
      "declare": false,
      "start": 1657,
      "end": 1714
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 81,
  "end": 1714
}
```
