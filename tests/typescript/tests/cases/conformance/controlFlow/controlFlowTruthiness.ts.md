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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
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
              "start": 24,
              "end": 30
            },
            {
              "type": "TSUndefinedKeyword",
              "start": 33,
              "end": 42
            }
          ],
          "start": 24,
          "end": 42
        },
        "start": 22,
        "end": 42
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 43
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 56
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
                  "start": 69,
                  "end": 70
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 76
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 73,
                  "end": 78
                },
                "definite": false,
                "start": 69,
                "end": 78
              }
            ],
            "declare": false,
            "start": 65,
            "end": 79
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 89
            },
            "consequent": {
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
                    "start": 101,
                    "end": 102
                  },
                  "directive": null,
                  "start": 101,
                  "end": 103
                }
              ],
              "start": 91,
              "end": 119
            },
            "alternate": {
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
                    "start": 139,
                    "end": 140
                  },
                  "directive": null,
                  "start": 139,
                  "end": 141
                }
              ],
              "start": 129,
              "end": 169
            },
            "start": 84,
            "end": 169
          }
        ],
        "start": 59,
        "end": 171
      },
      "expression": false,
      "start": 45,
      "end": 171
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 182,
        "end": 184
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
                          "type": "TSStringKeyword",
                          "start": 200,
                          "end": 206
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 209,
                          "end": 218
                        }
                      ],
                      "start": 200,
                      "end": 218
                    },
                    "start": 198,
                    "end": 218
                  },
                  "start": 197,
                  "end": 218
                },
                "init": null,
                "definite": false,
                "start": 197,
                "end": 218
              }
            ],
            "declare": false,
            "start": 193,
            "end": 219
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
                "start": 224,
                "end": 225
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 231
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 228,
                "end": 233
              },
              "start": 224,
              "end": 233
            },
            "directive": null,
            "start": 224,
            "end": 234
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 244
            },
            "consequent": {
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
                    "start": 256,
                    "end": 257
                  },
                  "directive": null,
                  "start": 256,
                  "end": 258
                }
              ],
              "start": 246,
              "end": 274
            },
            "alternate": {
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
                    "start": 294,
                    "end": 295
                  },
                  "directive": null,
                  "start": 294,
                  "end": 296
                }
              ],
              "start": 284,
              "end": 324
            },
            "start": 239,
            "end": 324
          }
        ],
        "start": 187,
        "end": 326
      },
      "expression": false,
      "start": 173,
      "end": 326
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 339
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
                          "type": "TSStringKeyword",
                          "start": 355,
                          "end": 361
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 364,
                          "end": 373
                        }
                      ],
                      "start": 355,
                      "end": 373
                    },
                    "start": 353,
                    "end": 373
                  },
                  "start": 352,
                  "end": 373
                },
                "init": null,
                "definite": false,
                "start": 352,
                "end": 373
              }
            ],
            "declare": false,
            "start": 348,
            "end": 374
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 384
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 387,
                  "end": 390
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 387,
                "end": 392
              },
              "start": 383,
              "end": 392
            },
            "consequent": {
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
                    "start": 404,
                    "end": 405
                  },
                  "directive": null,
                  "start": 404,
                  "end": 406
                }
              ],
              "start": 394,
              "end": 422
            },
            "alternate": {
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
                    "start": 442,
                    "end": 443
                  },
                  "directive": null,
                  "start": 442,
                  "end": 444
                }
              ],
              "start": 432,
              "end": 472
            },
            "start": 379,
            "end": 472
          }
        ],
        "start": 342,
        "end": 474
      },
      "expression": false,
      "start": 328,
      "end": 474
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 487
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
                          "type": "TSStringKeyword",
                          "start": 503,
                          "end": 509
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 512,
                          "end": 521
                        }
                      ],
                      "start": 503,
                      "end": 521
                    },
                    "start": 501,
                    "end": 521
                  },
                  "start": 500,
                  "end": 521
                },
                "init": null,
                "definite": false,
                "start": 500,
                "end": 521
              }
            ],
            "declare": false,
            "start": 496,
            "end": 522
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 533,
                  "end": 534
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 537,
                    "end": 540
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 537,
                  "end": 542
                },
                "start": 533,
                "end": 542
              },
              "prefix": true,
              "start": 531,
              "end": 543
            },
            "consequent": {
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
                    "start": 555,
                    "end": 556
                  },
                  "directive": null,
                  "start": 555,
                  "end": 557
                }
              ],
              "start": 545,
              "end": 585
            },
            "alternate": {
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
                    "start": 605,
                    "end": 606
                  },
                  "directive": null,
                  "start": 605,
                  "end": 607
                }
              ],
              "start": 595,
              "end": 623
            },
            "start": 527,
            "end": 623
          }
        ],
        "start": 490,
        "end": 625
      },
      "expression": false,
      "start": 476,
      "end": 625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 636,
        "end": 638
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
                          "type": "TSStringKeyword",
                          "start": 654,
                          "end": 660
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 663,
                          "end": 672
                        }
                      ],
                      "start": 654,
                      "end": 672
                    },
                    "start": 652,
                    "end": 672
                  },
                  "start": 651,
                  "end": 672
                },
                "init": null,
                "definite": false,
                "start": 651,
                "end": 672
              }
            ],
            "declare": false,
            "start": 647,
            "end": 673
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 685,
                          "end": 691
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 694,
                          "end": 703
                        }
                      ],
                      "start": 685,
                      "end": 703
                    },
                    "start": 683,
                    "end": 703
                  },
                  "start": 682,
                  "end": 703
                },
                "init": null,
                "definite": false,
                "start": 682,
                "end": 703
              }
            ],
            "declare": false,
            "start": 678,
            "end": 704
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 714
              },
              "right": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 717,
                  "end": 718
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 721,
                    "end": 724
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 721,
                  "end": 726
                },
                "start": 717,
                "end": 726
              },
              "start": 713,
              "end": 726
            },
            "consequent": {
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
                    "start": 738,
                    "end": 739
                  },
                  "directive": null,
                  "start": 738,
                  "end": 740
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 760
                  },
                  "directive": null,
                  "start": 759,
                  "end": 761
                }
              ],
              "start": 728,
              "end": 789
            },
            "alternate": {
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
                    "start": 809,
                    "end": 810
                  },
                  "directive": null,
                  "start": 809,
                  "end": 811
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 842,
                    "end": 843
                  },
                  "directive": null,
                  "start": 842,
                  "end": 844
                }
              ],
              "start": 799,
              "end": 872
            },
            "start": 709,
            "end": 872
          }
        ],
        "start": 641,
        "end": 874
      },
      "expression": false,
      "start": 627,
      "end": 874
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 885,
        "end": 887
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
                          "type": "TSStringKeyword",
                          "start": 903,
                          "end": 909
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 912,
                          "end": 921
                        }
                      ],
                      "start": 903,
                      "end": 921
                    },
                    "start": 901,
                    "end": 921
                  },
                  "start": 900,
                  "end": 921
                },
                "init": null,
                "definite": false,
                "start": 900,
                "end": 921
              }
            ],
            "declare": false,
            "start": 896,
            "end": 922
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
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 934,
                          "end": 940
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 943,
                          "end": 952
                        }
                      ],
                      "start": 934,
                      "end": 952
                    },
                    "start": 932,
                    "end": 952
                  },
                  "start": 931,
                  "end": 952
                },
                "init": null,
                "definite": false,
                "start": 931,
                "end": 952
              }
            ],
            "declare": false,
            "start": 927,
            "end": 953
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 962,
                    "end": 963
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 966,
                      "end": 969
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 966,
                    "end": 971
                  },
                  "start": 962,
                  "end": 971
                },
                {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 973,
                    "end": 974
                  },
                  "right": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 980
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 977,
                    "end": 982
                  },
                  "start": 973,
                  "end": 982
                }
              ],
              "start": 962,
              "end": 982
            },
            "consequent": {
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
                    "start": 994,
                    "end": 995
                  },
                  "directive": null,
                  "start": 994,
                  "end": 996
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1027,
                    "end": 1028
                  },
                  "directive": null,
                  "start": 1027,
                  "end": 1029
                }
              ],
              "start": 984,
              "end": 1045
            },
            "alternate": {
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
                    "start": 1065,
                    "end": 1066
                  },
                  "directive": null,
                  "start": 1065,
                  "end": 1067
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1098,
                    "end": 1099
                  },
                  "directive": null,
                  "start": 1098,
                  "end": 1100
                }
              ],
              "start": 1055,
              "end": 1128
            },
            "start": 958,
            "end": 1128
          }
        ],
        "start": 890,
        "end": 1130
      },
      "expression": false,
      "start": 876,
      "end": 1130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1141,
        "end": 1143
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
              "type": "TSTypeLiteral",
              "members": [],
              "start": 1147,
              "end": 1149
            },
            "start": 1145,
            "end": 1149
          },
          "start": 1144,
          "end": 1149
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
              "start": 1161,
              "end": 1162
            },
            "consequent": {
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
                    "start": 1174,
                    "end": 1175
                  },
                  "directive": null,
                  "start": 1174,
                  "end": 1176
                }
              ],
              "start": 1164,
              "end": 1188
            },
            "alternate": {
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
                    "start": 1208,
                    "end": 1209
                  },
                  "directive": null,
                  "start": 1208,
                  "end": 1210
                }
              ],
              "start": 1198,
              "end": 1222
            },
            "start": 1157,
            "end": 1222
          }
        ],
        "start": 1151,
        "end": 1224
      },
      "expression": false,
      "start": 1132,
      "end": 1224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1235,
        "end": 1237
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
              "start": 1238,
              "end": 1239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1238,
            "end": 1239
          }
        ],
        "start": 1237,
        "end": 1240
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1244,
                "end": 1245
              },
              "typeArguments": null,
              "start": 1244,
              "end": 1245
            },
            "start": 1242,
            "end": 1245
          },
          "start": 1241,
          "end": 1245
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
              "start": 1257,
              "end": 1258
            },
            "consequent": {
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
                    "start": 1270,
                    "end": 1271
                  },
                  "directive": null,
                  "start": 1270,
                  "end": 1272
                }
              ],
              "start": 1260,
              "end": 1284
            },
            "alternate": {
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
                    "start": 1304,
                    "end": 1305
                  },
                  "directive": null,
                  "start": 1304,
                  "end": 1306
                }
              ],
              "start": 1294,
              "end": 1318
            },
            "start": 1253,
            "end": 1318
          }
        ],
        "start": 1247,
        "end": 1320
      },
      "expression": false,
      "start": 1226,
      "end": 1320
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1331,
        "end": 1333
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
              "start": 1334,
              "end": 1335
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 1344,
              "end": 1350
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1334,
            "end": 1350
          }
        ],
        "start": 1333,
        "end": 1351
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                "start": 1355,
                "end": 1356
              },
              "typeArguments": null,
              "start": 1355,
              "end": 1356
            },
            "start": 1353,
            "end": 1356
          },
          "start": 1352,
          "end": 1356
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
              "start": 1368,
              "end": 1369
            },
            "consequent": {
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
                    "start": 1381,
                    "end": 1382
                  },
                  "directive": null,
                  "start": 1381,
                  "end": 1383
                }
              ],
              "start": 1371,
              "end": 1395
            },
            "alternate": {
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
                    "start": 1415,
                    "end": 1416
                  },
                  "directive": null,
                  "start": 1415,
                  "end": 1417
                }
              ],
              "start": 1405,
              "end": 1432
            },
            "start": 1364,
            "end": 1432
          }
        ],
        "start": 1358,
        "end": 1434
      },
      "expression": false,
      "start": 1322,
      "end": 1434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1434
}
```
