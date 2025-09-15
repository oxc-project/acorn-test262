__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 18,
                  "end": 19
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 22,
                  "end": 23
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 23
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 34,
                    "end": 35
                  },
                  "start": 27,
                  "end": 36
                }
              ],
              "start": 25,
              "end": 38
            },
            "expression": false,
            "start": 8,
            "end": 38
          },
          "definite": false,
          "start": 4,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 39
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
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 88,
                "end": 94
              },
              "start": 86,
              "end": 94
            },
            "start": 85,
            "end": 94
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 97,
              "end": 98
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 99,
                "end": 100
              }
            ],
            "optional": false,
            "start": 97,
            "end": 101
          },
          "definite": false,
          "start": 85,
          "end": 101
        }
      ],
      "declare": false,
      "start": 81,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 108
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 107,
          "end": 110
        },
        "start": 103,
        "end": 110
      },
      "directive": null,
      "start": 103,
      "end": 111
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 119,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "start": 116,
            "end": 125
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 128,
              "end": 129
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 130,
                "end": 132
              }
            ],
            "optional": false,
            "start": 128,
            "end": 133
          },
          "definite": false,
          "start": 116,
          "end": 133
        }
      ],
      "declare": false,
      "start": 112,
      "end": 134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 136
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 140
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 139,
          "end": 142
        },
        "start": 135,
        "end": 142
      },
      "directive": null,
      "start": 135,
      "end": 143
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 209,
            "end": 211
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 227,
                      "end": 233
                    },
                    "start": 225,
                    "end": 233
                  },
                  "start": 224,
                  "end": 233
                },
                "right": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 236,
                  "end": 237
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 224,
                "end": 237
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 249
                  },
                  "start": 241,
                  "end": 250
                }
              ],
              "start": 239,
              "end": 252
            },
            "expression": false,
            "start": 214,
            "end": 252
          },
          "definite": false,
          "start": 209,
          "end": 252
        }
      ],
      "declare": false,
      "start": 205,
      "end": 253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 309,
          "end": 310
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 313,
            "end": 315
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 316,
              "end": 318
            }
          ],
          "optional": false,
          "start": 313,
          "end": 319
        },
        "start": 309,
        "end": 319
      },
      "directive": null,
      "start": 309,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 322
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 327
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 325,
          "end": 329
        },
        "start": 321,
        "end": 329
      },
      "directive": null,
      "start": 321,
      "end": 330
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 331,
          "end": 332
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 337
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 335,
          "end": 339
        },
        "start": 331,
        "end": 339
      },
      "directive": null,
      "start": 331,
      "end": 340
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
            "name": "f3",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 410
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 430,
                              "end": 436
                            },
                            "start": 428,
                            "end": 436
                          },
                          "start": 427,
                          "end": 436
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 441,
                          "end": 444
                        },
                        "start": 438,
                        "end": 444
                      },
                      "start": 426,
                      "end": 444
                    },
                    "start": 424,
                    "end": 444
                  },
                  "start": 423,
                  "end": 444
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 449
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 455,
                      "end": 461
                    },
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 463
                    },
                    "start": 454,
                    "end": 463
                  },
                  "id": null,
                  "generator": false,
                  "start": 447,
                  "end": 463
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 423,
                "end": 463
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 465,
              "end": 468
            },
            "expression": false,
            "start": 413,
            "end": 468
          },
          "definite": false,
          "start": 408,
          "end": 468
        }
      ],
      "declare": false,
      "start": 404,
      "end": 469
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
            "name": "f4",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 534,
                        "end": 540
                      },
                      "start": 532,
                      "end": 540
                    },
                    "start": 531,
                    "end": 540
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 545,
                    "end": 549
                  },
                  "start": 542,
                  "end": 549
                },
                "start": 530,
                "end": 549
              },
              "start": 528,
              "end": 549
            },
            "start": 526,
            "end": 549
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 563
                },
                "right": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 566,
                  "end": 568
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 562,
                "end": 568
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 570,
              "end": 573
            },
            "expression": false,
            "start": 552,
            "end": 573
          },
          "definite": false,
          "start": 526,
          "end": 573
        }
      ],
      "declare": false,
      "start": 522,
      "end": 574
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
            "name": "f5",
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
                    "name": "a",
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
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 666,
                                "end": 672
                              },
                              "start": 664,
                              "end": 672
                            },
                            "start": 663,
                            "end": 672
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 677,
                            "end": 680
                          },
                          "start": 674,
                          "end": 680
                        },
                        "start": 662,
                        "end": 680
                      },
                      "start": 660,
                      "end": 680
                    },
                    "start": 659,
                    "end": 680
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 685,
                    "end": 689
                  },
                  "start": 682,
                  "end": 689
                },
                "start": 658,
                "end": 689
              },
              "start": 656,
              "end": 689
            },
            "start": 654,
            "end": 689
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 702,
                  "end": 703
                },
                "right": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 706,
                      "end": 707
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 712,
                      "end": 718
                    },
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 719,
                      "end": 720
                    },
                    "start": 711,
                    "end": 720
                  },
                  "id": null,
                  "generator": false,
                  "start": 706,
                  "end": 720
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 720
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 722,
              "end": 725
            },
            "expression": false,
            "start": 692,
            "end": 725
          },
          "definite": false,
          "start": 654,
          "end": 725
        }
      ],
      "declare": false,
      "start": 650,
      "end": 726
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null,
        "start": 761,
        "end": 762
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 763,
        "end": 766
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 751,
      "end": 766
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "U",
        "optional": false,
        "typeAnnotation": null,
        "start": 777,
        "end": 778
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 797
                  },
                  "init": null,
                  "definite": false,
                  "start": 796,
                  "end": 797
                }
              ],
              "declare": false,
              "start": 792,
              "end": 798
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 785,
            "end": 798
          }
        ],
        "start": 779,
        "end": 800
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 767,
      "end": 800
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
            "name": "f6",
            "optional": false,
            "typeAnnotation": null,
            "start": 806,
            "end": 808
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 812,
                  "end": 813
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 816,
                  "end": 817
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 817
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 822,
              "end": 825
            },
            "id": null,
            "generator": false,
            "start": 811,
            "end": 825
          },
          "definite": false,
          "start": 806,
          "end": 825
        }
      ],
      "declare": false,
      "start": 802,
      "end": 826
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
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 831,
            "end": 833
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 838
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 841,
                  "end": 842
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 837,
                "end": 842
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 856,
                    "end": 857
                  },
                  "start": 849,
                  "end": 858
                }
              ],
              "start": 847,
              "end": 860
            },
            "id": null,
            "generator": false,
            "start": 836,
            "end": 860
          },
          "definite": false,
          "start": 831,
          "end": 860
        }
      ],
      "declare": false,
      "start": 827,
      "end": 861
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null,
            "start": 863,
            "end": 865
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 863,
          "end": 867
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 868,
          "end": 869
        },
        "optional": false,
        "computed": false,
        "start": 863,
        "end": 869
      },
      "directive": null,
      "start": 863,
      "end": 870
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 870
}
```
