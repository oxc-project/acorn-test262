__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "assert",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 102
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "check",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 110
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
                      "name": "check",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 130
                    },
                    "prefix": true,
                    "start": 124,
                    "end": 130
                  },
                  "consequent": {
                    "type": "ThrowStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 142,
                        "end": 147
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 138,
                      "end": 149
                    },
                    "start": 132,
                    "end": 150
                  },
                  "alternate": null,
                  "start": 120,
                  "end": 150
                }
              ],
              "start": 114,
              "end": 152
            },
            "id": null,
            "generator": false,
            "start": 105,
            "end": 152
          },
          "definite": false,
          "start": 96,
          "end": 152
        }
      ],
      "declare": false,
      "start": 90,
      "end": 152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertIsString",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 229
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
          "start": 230,
          "end": 231
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
                    "start": 252,
                    "end": 253
                  },
                  "prefix": true,
                  "start": 245,
                  "end": 253
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 258,
                  "end": 266
                },
                "start": 245,
                "end": 266
              },
              "prefix": true,
              "start": 243,
              "end": 267
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 279,
                  "end": 284
                },
                "typeArguments": null,
                "arguments": [],
                "start": 275,
                "end": 286
              },
              "start": 269,
              "end": 287
            },
            "alternate": null,
            "start": 239,
            "end": 287
          }
        ],
        "start": 233,
        "end": 289
      },
      "expression": false,
      "start": 206,
      "end": 289
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert2",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 368
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "check",
          "optional": false,
          "typeAnnotation": null,
          "start": 369,
          "end": 374
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
                "name": "check",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 392
              },
              "prefix": true,
              "start": 386,
              "end": 392
            },
            "consequent": {
              "type": "ThrowStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Error",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 404,
                  "end": 409
                },
                "typeArguments": null,
                "arguments": [],
                "start": 400,
                "end": 411
              },
              "start": 394,
              "end": 412
            },
            "alternate": null,
            "start": 382,
            "end": 412
          }
        ],
        "start": 376,
        "end": 414
      },
      "expression": false,
      "start": 352,
      "end": 414
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 453,
        "end": 457
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
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 481
              },
              "typeArguments": null,
              "arguments": [],
              "start": 472,
              "end": 483
            },
            "start": 466,
            "end": 484
          }
        ],
        "start": 460,
        "end": 486
      },
      "expression": false,
      "start": 444,
      "end": 486
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 522,
        "end": 524
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
          "start": 525,
          "end": 526
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
                  "start": 540,
                  "end": 544
                },
                "prefix": true,
                "start": 539,
                "end": 544
              },
              "prefix": true,
              "start": 538,
              "end": 544
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
                      "name": "assert",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 556,
                      "end": 562
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
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
                            "start": 570,
                            "end": 571
                          },
                          "prefix": true,
                          "start": 563,
                          "end": 571
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 576,
                          "end": 584
                        },
                        "start": 563,
                        "end": 584
                      }
                    ],
                    "optional": false,
                    "start": 556,
                    "end": 585
                  },
                  "directive": null,
                  "start": 556,
                  "end": 586
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 595,
                      "end": 596
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 597,
                      "end": 603
                    },
                    "optional": false,
                    "computed": false,
                    "start": 595,
                    "end": 603
                  },
                  "directive": null,
                  "start": 595,
                  "end": 604
                }
              ],
              "start": 546,
              "end": 610
            },
            "alternate": null,
            "start": 534,
            "end": 610
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
                  "start": 621,
                  "end": 625
                },
                "prefix": true,
                "start": 620,
                "end": 625
              },
              "prefix": true,
              "start": 619,
              "end": 625
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
                      "name": "assert2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 637,
                      "end": 644
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
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
                            "start": 652,
                            "end": 653
                          },
                          "prefix": true,
                          "start": 645,
                          "end": 653
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "string",
                          "raw": "\"string\"",
                          "start": 658,
                          "end": 666
                        },
                        "start": 645,
                        "end": 666
                      }
                    ],
                    "optional": false,
                    "start": 637,
                    "end": 667
                  },
                  "directive": null,
                  "start": 637,
                  "end": 668
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 677,
                      "end": 678
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 679,
                      "end": 685
                    },
                    "optional": false,
                    "computed": false,
                    "start": 677,
                    "end": 685
                  },
                  "directive": null,
                  "start": 677,
                  "end": 686
                }
              ],
              "start": 627,
              "end": 692
            },
            "alternate": null,
            "start": 615,
            "end": 692
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
                  "start": 703,
                  "end": 707
                },
                "prefix": true,
                "start": 702,
                "end": 707
              },
              "prefix": true,
              "start": 701,
              "end": 707
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
                      "name": "assertIsString",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 733
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 735
                      }
                    ],
                    "optional": false,
                    "start": 719,
                    "end": 736
                  },
                  "directive": null,
                  "start": 719,
                  "end": 737
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 746,
                      "end": 747
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 748,
                      "end": 754
                    },
                    "optional": false,
                    "computed": false,
                    "start": 746,
                    "end": 754
                  },
                  "directive": null,
                  "start": 746,
                  "end": 755
                }
              ],
              "start": 709,
              "end": 761
            },
            "alternate": null,
            "start": 697,
            "end": 761
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
                  "start": 772,
                  "end": 776
                },
                "prefix": true,
                "start": 771,
                "end": 776
              },
              "prefix": true,
              "start": 770,
              "end": 776
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
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 788,
                      "end": 792
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 788,
                    "end": 794
                  },
                  "directive": null,
                  "start": 788,
                  "end": 795
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 804,
                    "end": 805
                  },
                  "directive": null,
                  "start": 804,
                  "end": 806
                }
              ],
              "start": 778,
              "end": 828
            },
            "alternate": null,
            "start": 766,
            "end": 828
          }
        ],
        "start": 528,
        "end": 830
      },
      "expression": false,
      "start": 513,
      "end": 830
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 872,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 875,
          "end": 876
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 892,
              "end": 893
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 910,
                  "end": 914
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 923,
                      "end": 924
                    },
                    "start": 916,
                    "end": 925
                  }
                ],
                "start": 905,
                "end": 925
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 939,
                  "end": 944
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 953,
                      "end": 954
                    },
                    "start": 946,
                    "end": 955
                  }
                ],
                "start": 934,
                "end": 955
              }
            ],
            "start": 884,
            "end": 961
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "directive": null,
            "start": 966,
            "end": 968
          }
        ],
        "start": 878,
        "end": 986
      },
      "expression": false,
      "start": 863,
      "end": 986
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 90,
  "end": 986
}
```
