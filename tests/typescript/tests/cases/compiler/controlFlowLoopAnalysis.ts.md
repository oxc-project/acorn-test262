__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 31,
                "end": 38
              },
              "start": 29,
              "end": 38
            },
            "start": 25,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 25,
          "end": 38
        }
      ],
      "declare": false,
      "start": 21,
      "end": 39
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 53
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
              "type": "TSNumberKeyword",
              "start": 57,
              "end": 63
            },
            "start": 55,
            "end": 63
          },
          "start": 54,
          "end": 63
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 66,
          "end": 72
        },
        "start": 64,
        "end": 72
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 82,
              "end": 83
            },
            "start": 75,
            "end": 84
          }
        ],
        "start": 73,
        "end": 86
      },
      "expression": false,
      "start": 41,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 102
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
                          "type": "TSNumberKeyword",
                          "start": 118,
                          "end": 124
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 127,
                          "end": 136
                        }
                      ],
                      "start": 118,
                      "end": 136
                    },
                    "start": 116,
                    "end": 136
                  },
                  "start": 115,
                  "end": 136
                },
                "init": null,
                "definite": false,
                "start": 115,
                "end": 136
              }
            ],
            "declare": false,
            "start": 111,
            "end": 137
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 153
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 172,
                    "end": 176
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cond",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 199,
                          "end": 203
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
                                  "start": 223,
                                  "end": 224
                                },
                                "right": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 227,
                                    "end": 230
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 231,
                                      "end": 232
                                    }
                                  ],
                                  "optional": false,
                                  "start": 227,
                                  "end": 233
                                },
                                "start": 223,
                                "end": 233
                              },
                              "directive": null,
                              "start": 223,
                              "end": 234
                            }
                          ],
                          "start": 205,
                          "end": 248
                        },
                        "start": 192,
                        "end": 248
                      }
                    ],
                    "start": 178,
                    "end": 258
                  },
                  "start": 165,
                  "end": 258
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
                      "start": 267,
                      "end": 268
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 271,
                      "end": 272
                    },
                    "start": 267,
                    "end": 272
                  },
                  "directive": null,
                  "start": 267,
                  "end": 273
                }
              ],
              "start": 155,
              "end": 279
            },
            "start": 142,
            "end": 279
          }
        ],
        "start": 105,
        "end": 281
      },
      "expression": false,
      "start": 88,
      "end": 281
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 318
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
                          "type": "TSNumberKeyword",
                          "start": 334,
                          "end": 340
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 343,
                          "end": 352
                        }
                      ],
                      "start": 334,
                      "end": 352
                    },
                    "start": 332,
                    "end": 352
                  },
                  "start": 331,
                  "end": 352
                },
                "init": null,
                "definite": false,
                "start": 331,
                "end": 352
              }
            ],
            "declare": false,
            "start": 327,
            "end": 353
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
                "start": 358,
                "end": 359
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 362,
                "end": 363
              },
              "start": 358,
              "end": 363
            },
            "directive": null,
            "start": 358,
            "end": 364
          },
          {
            "type": "WhileStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 380
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cond",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 403
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
                            "start": 419,
                            "end": 420
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 423,
                              "end": 426
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 427,
                                "end": 428
                              }
                            ],
                            "optional": false,
                            "start": 423,
                            "end": 429
                          },
                          "start": 419,
                          "end": 429
                        },
                        "directive": null,
                        "start": 419,
                        "end": 430
                      }
                    ],
                    "start": 405,
                    "end": 440
                  },
                  "start": 392,
                  "end": 440
                }
              ],
              "start": 382,
              "end": 446
            },
            "start": 369,
            "end": 446
          }
        ],
        "start": 321,
        "end": 448
      },
      "expression": false,
      "start": 304,
      "end": 448
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mapUntilCant",
        "optional": false,
        "typeAnnotation": null,
        "start": 480,
        "end": 492
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 494
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 493,
            "end": 494
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 496,
              "end": 497
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 496,
            "end": 497
          }
        ],
        "start": 492,
        "end": 498
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 513
                },
                "typeArguments": null,
                "start": 512,
                "end": 513
              },
              "start": 512,
              "end": 515
            },
            "start": 510,
            "end": 515
          },
          "start": 504,
          "end": 515
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "canTake",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 538,
                        "end": 539
                      },
                      "typeArguments": null,
                      "start": 538,
                      "end": 539
                    },
                    "start": 536,
                    "end": 539
                  },
                  "start": 531,
                  "end": 539
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 548,
                      "end": 554
                    },
                    "start": 546,
                    "end": 554
                  },
                  "start": 541,
                  "end": 554
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 559,
                  "end": 566
                },
                "start": 556,
                "end": 566
              },
              "start": 530,
              "end": 566
            },
            "start": 528,
            "end": 566
          },
          "start": 521,
          "end": 566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mapping",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 589,
                      "end": 590
                    },
                    "start": 587,
                    "end": 590
                  },
                  "start": 582,
                  "end": 590
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "index",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 599,
                      "end": 605
                    },
                    "start": 597,
                    "end": 605
                  },
                  "start": 592,
                  "end": 605
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 610,
                    "end": 611
                  },
                  "typeArguments": null,
                  "start": 610,
                  "end": 611
                },
                "start": 607,
                "end": 611
              },
              "start": 581,
              "end": 611
            },
            "start": 579,
            "end": 611
          },
          "start": 572,
          "end": 611
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeArguments": null,
            "start": 615,
            "end": 616
          },
          "start": 615,
          "end": 618
        },
        "start": 613,
        "end": 618
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
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 637,
                          "end": 638
                        },
                        "typeArguments": null,
                        "start": 637,
                        "end": 638
                      },
                      "start": 637,
                      "end": 640
                    },
                    "start": 635,
                    "end": 640
                  },
                  "start": 629,
                  "end": 640
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 643,
                  "end": 645
                },
                "definite": false,
                "start": 629,
                "end": 645
              }
            ],
            "declare": false,
            "start": 625,
            "end": 646
          },
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
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 660,
                    "end": 665
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 668,
                    "end": 669
                  },
                  "definite": false,
                  "start": 660,
                  "end": 669
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 671,
                    "end": 677
                  },
                  "init": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 680,
                      "end": 686
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 687,
                      "end": 693
                    },
                    "optional": false,
                    "computed": false,
                    "start": 680,
                    "end": 693
                  },
                  "definite": false,
                  "start": 671,
                  "end": 693
                }
              ],
              "declare": false,
              "start": 656,
              "end": 693
            },
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 700
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 703,
                "end": 709
              },
              "start": 695,
              "end": 709
            },
            "update": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 716
              },
              "start": 711,
              "end": 718
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 739
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "values",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 748
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "index",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 749,
                          "end": 754
                        },
                        "optional": false,
                        "computed": true,
                        "start": 742,
                        "end": 755
                      },
                      "definite": false,
                      "start": 734,
                      "end": 755
                    }
                  ],
                  "declare": false,
                  "start": 730,
                  "end": 756
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "canTake",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 769,
                      "end": 776
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 777,
                        "end": 782
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 784,
                        "end": 789
                      }
                    ],
                    "optional": false,
                    "start": 769,
                    "end": 790
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
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 806,
                              "end": 812
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "push",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 813,
                              "end": 817
                            },
                            "optional": false,
                            "computed": false,
                            "start": 806,
                            "end": 817
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "mapping",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 818,
                                "end": 825
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 826,
                                  "end": 831
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "index",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 833,
                                  "end": 838
                                }
                              ],
                              "optional": false,
                              "start": 818,
                              "end": 839
                            }
                          ],
                          "optional": false,
                          "start": 806,
                          "end": 840
                        },
                        "directive": null,
                        "start": 806,
                        "end": 841
                      }
                    ],
                    "start": 792,
                    "end": 851
                  },
                  "alternate": {
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
                          "start": 878,
                          "end": 884
                        },
                        "start": 871,
                        "end": 885
                      }
                    ],
                    "start": 857,
                    "end": 895
                  },
                  "start": 765,
                  "end": 895
                }
              ],
              "start": 720,
              "end": 901
            },
            "start": 651,
            "end": 901
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 919
            },
            "start": 906,
            "end": 920
          }
        ],
        "start": 619,
        "end": 922
      },
      "expression": false,
      "start": 471,
      "end": 922
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 922
}
```
