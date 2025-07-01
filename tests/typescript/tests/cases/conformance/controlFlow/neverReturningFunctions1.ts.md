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
        "name": "fail",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 13
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            },
            "start": 22,
            "end": 30
          },
          "start": 14,
          "end": 30
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        },
        "start": 31,
        "end": 38
      },
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
                "start": 55,
                "end": 60
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 68
                }
              ],
              "start": 51,
              "end": 69
            },
            "start": 45,
            "end": 70
          }
        ],
        "start": 39,
        "end": 72
      },
      "expression": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f01",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 86
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
                  "start": 90,
                  "end": 96
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 99,
                  "end": 108
                }
              ],
              "start": 90,
              "end": 108
            },
            "start": 88,
            "end": 108
          },
          "start": 87,
          "end": 108
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 121
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 135
              },
              "start": 120,
              "end": 135
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 141
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "undefined argument",
                    "raw": "\"undefined argument\"",
                    "start": 142,
                    "end": 162
                  }
                ],
                "optional": false,
                "start": 137,
                "end": 163
              },
              "directive": null,
              "start": 137,
              "end": 164
            },
            "alternate": null,
            "start": 116,
            "end": 164
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
                "start": 169,
                "end": 170
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 177
              },
              "optional": false,
              "computed": false,
              "start": 169,
              "end": 177
            },
            "directive": null,
            "start": 169,
            "end": 178
          }
        ],
        "start": 110,
        "end": 191
      },
      "expression": false,
      "start": 74,
      "end": 191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f02",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 205
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
              "start": 209,
              "end": 215
            },
            "start": 207,
            "end": 215
          },
          "start": 206,
          "end": 215
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 218,
          "end": 224
        },
        "start": 216,
        "end": 224
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 235,
                "end": 236
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 240,
                "end": 241
              },
              "start": 235,
              "end": 241
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 250,
                "end": 251
              },
              "start": 243,
              "end": 252
            },
            "alternate": null,
            "start": 231,
            "end": 252
          },
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
                "start": 257,
                "end": 261
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "negative number",
                  "raw": "\"negative number\"",
                  "start": 262,
                  "end": 279
                }
              ],
              "optional": false,
              "start": 257,
              "end": 280
            },
            "directive": null,
            "start": 257,
            "end": 281
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 287
            },
            "directive": null,
            "start": 286,
            "end": 288
          }
        ],
        "start": 225,
        "end": 306
      },
      "expression": false,
      "start": 193,
      "end": 306
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f03",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 320
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
              "type": "TSStringKeyword",
              "start": 324,
              "end": 330
            },
            "start": 322,
            "end": 330
          },
          "start": 321,
          "end": 330
        }
      ],
      "returnType": null,
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
              "start": 338,
              "end": 339
            },
            "directive": null,
            "start": 338,
            "end": 340
          },
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
                "start": 356,
                "end": 360
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 356,
              "end": 362
            },
            "directive": null,
            "start": 356,
            "end": 363
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "directive": null,
            "start": 368,
            "end": 370
          }
        ],
        "start": 332,
        "end": 388
      },
      "expression": false,
      "start": 308,
      "end": 388
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 402
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
                  "start": 406,
                  "end": 412
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 415,
                  "end": 424
                }
              ],
              "start": 406,
              "end": 424
            },
            "start": 404,
            "end": 424
          },
          "start": 403,
          "end": 424
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
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
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 443,
                      "end": 449
                    },
                    "start": 441,
                    "end": 449
                  },
                  "start": 433,
                  "end": 449
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 454,
                  "end": 459
                },
                "start": 451,
                "end": 459
              },
              "start": 432,
              "end": 459
            },
            "start": 430,
            "end": 459
          },
          "start": 426,
          "end": 459
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 472
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 477,
                "end": 486
              },
              "start": 471,
              "end": 486
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 488,
                  "end": 492
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "undefined argument",
                    "raw": "\"undefined argument\"",
                    "start": 493,
                    "end": 513
                  }
                ],
                "optional": false,
                "start": 488,
                "end": 514
              },
              "directive": null,
              "start": 488,
              "end": 515
            },
            "alternate": null,
            "start": 467,
            "end": 515
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
                "start": 520,
                "end": 521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 528
              },
              "optional": false,
              "computed": false,
              "start": 520,
              "end": 528
            },
            "directive": null,
            "start": 520,
            "end": 529
          }
        ],
        "start": 461,
        "end": 542
      },
      "expression": false,
      "start": 390,
      "end": 542
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 556
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
              "start": 560,
              "end": 566
            },
            "start": 558,
            "end": 566
          },
          "start": 557,
          "end": 566
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
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
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 585,
                      "end": 591
                    },
                    "start": 583,
                    "end": 591
                  },
                  "start": 575,
                  "end": 591
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 596,
                  "end": 601
                },
                "start": 593,
                "end": 601
              },
              "start": 574,
              "end": 601
            },
            "start": 572,
            "end": 601
          },
          "start": 568,
          "end": 601
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 604,
          "end": 610
        },
        "start": 602,
        "end": 610
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 621,
                "end": 622
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 626,
                "end": 627
              },
              "start": 621,
              "end": 627
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 636,
                "end": 637
              },
              "start": 629,
              "end": 638
            },
            "alternate": null,
            "start": 617,
            "end": 638
          },
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
                "start": 643,
                "end": 647
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "negative number",
                  "raw": "\"negative number\"",
                  "start": 648,
                  "end": 665
                }
              ],
              "optional": false,
              "start": 643,
              "end": 666
            },
            "directive": null,
            "start": 643,
            "end": 667
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 672,
              "end": 673
            },
            "directive": null,
            "start": 672,
            "end": 674
          }
        ],
        "start": 611,
        "end": 692
      },
      "expression": false,
      "start": 544,
      "end": 692
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 706
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
              "type": "TSStringKeyword",
              "start": 710,
              "end": 716
            },
            "start": 708,
            "end": 716
          },
          "start": 707,
          "end": 716
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fail",
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
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 735,
                      "end": 741
                    },
                    "start": 733,
                    "end": 741
                  },
                  "start": 725,
                  "end": 741
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 746,
                  "end": 751
                },
                "start": 743,
                "end": 751
              },
              "start": 724,
              "end": 751
            },
            "start": 722,
            "end": 751
          },
          "start": 718,
          "end": 751
        }
      ],
      "returnType": null,
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
              "start": 759,
              "end": 760
            },
            "directive": null,
            "start": 759,
            "end": 761
          },
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
                "start": 777,
                "end": 781
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 777,
              "end": 783
            },
            "directive": null,
            "start": 777,
            "end": 784
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 790
            },
            "directive": null,
            "start": 789,
            "end": 791
          }
        ],
        "start": 753,
        "end": 809
      },
      "expression": false,
      "start": 694,
      "end": 809
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Debug",
        "optional": false,
        "typeAnnotation": null,
        "start": 821,
        "end": 826
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 861
              },
              "generator": false,
              "async": false,
              "declare": true,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    },
                    "start": 870,
                    "end": 878
                  },
                  "start": 862,
                  "end": 878
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 881,
                  "end": 886
                },
                "start": 879,
                "end": 886
              },
              "body": null,
              "expression": false,
              "start": 840,
              "end": 887
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 833,
            "end": 887
          }
        ],
        "start": 827,
        "end": 889
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 811,
      "end": 889
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 900,
        "end": 903
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
                  "start": 907,
                  "end": 913
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 916,
                  "end": 925
                }
              ],
              "start": 907,
              "end": 925
            },
            "start": 905,
            "end": 925
          },
          "start": 904,
          "end": 925
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
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 937,
                "end": 938
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 943,
                "end": 952
              },
              "start": 937,
              "end": 952
            },
            "consequent": {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Debug",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 954,
                    "end": 959
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 960,
                    "end": 964
                  },
                  "optional": false,
                  "computed": false,
                  "start": 954,
                  "end": 964
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "undefined argument",
                    "raw": "\"undefined argument\"",
                    "start": 965,
                    "end": 985
                  }
                ],
                "optional": false,
                "start": 954,
                "end": 986
              },
              "directive": null,
              "start": 954,
              "end": 987
            },
            "alternate": null,
            "start": 933,
            "end": 987
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
                "start": 992,
                "end": 993
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 994,
                "end": 1000
              },
              "optional": false,
              "computed": false,
              "start": 992,
              "end": 1000
            },
            "directive": null,
            "start": 992,
            "end": 1001
          }
        ],
        "start": 927,
        "end": 1014
      },
      "expression": false,
      "start": 891,
      "end": 1014
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1025,
        "end": 1028
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
              "start": 1032,
              "end": 1038
            },
            "start": 1030,
            "end": 1038
          },
          "start": 1029,
          "end": 1038
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1041,
          "end": 1047
        },
        "start": 1039,
        "end": 1047
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1058,
                "end": 1059
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1063,
                "end": 1064
              },
              "start": 1058,
              "end": 1064
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1073,
                "end": 1074
              },
              "start": 1066,
              "end": 1075
            },
            "alternate": null,
            "start": 1054,
            "end": 1075
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
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1080,
                  "end": 1085
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1086,
                  "end": 1090
                },
                "optional": false,
                "computed": false,
                "start": 1080,
                "end": 1090
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "negative number",
                  "raw": "\"negative number\"",
                  "start": 1091,
                  "end": 1108
                }
              ],
              "optional": false,
              "start": 1080,
              "end": 1109
            },
            "directive": null,
            "start": 1080,
            "end": 1110
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1116
            },
            "directive": null,
            "start": 1115,
            "end": 1117
          }
        ],
        "start": 1048,
        "end": 1135
      },
      "expression": false,
      "start": 1016,
      "end": 1135
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1146,
        "end": 1149
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
              "type": "TSStringKeyword",
              "start": 1153,
              "end": 1159
            },
            "start": 1151,
            "end": 1159
          },
          "start": 1150,
          "end": 1159
        }
      ],
      "returnType": null,
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
              "start": 1167,
              "end": 1168
            },
            "directive": null,
            "start": 1167,
            "end": 1169
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
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1185,
                  "end": 1190
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1191,
                  "end": 1195
                },
                "optional": false,
                "computed": false,
                "start": 1185,
                "end": 1195
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1185,
              "end": 1197
            },
            "directive": null,
            "start": 1185,
            "end": 1198
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1203,
              "end": 1204
            },
            "directive": null,
            "start": 1203,
            "end": 1205
          }
        ],
        "start": 1161,
        "end": 1223
      },
      "expression": false,
      "start": 1137,
      "end": 1223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null,
        "start": 1234,
        "end": 1237
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
              "type": "TSStringKeyword",
              "start": 1241,
              "end": 1247
            },
            "start": 1239,
            "end": 1247
          },
          "start": 1238,
          "end": 1247
        }
      ],
      "returnType": null,
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
              "start": 1255,
              "end": 1256
            },
            "directive": null,
            "start": 1255,
            "end": 1257
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
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1275,
                  "end": 1280
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1282,
                  "end": 1286
                },
                "optional": false,
                "computed": false,
                "start": 1274,
                "end": 1286
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 1273,
              "end": 1289
            },
            "directive": null,
            "start": 1273,
            "end": 1290
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1295,
              "end": 1296
            },
            "directive": null,
            "start": 1295,
            "end": 1297
          }
        ],
        "start": 1249,
        "end": 1315
      },
      "expression": false,
      "start": 1225,
      "end": 1315
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1323,
        "end": 1327
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fail",
              "optional": false,
              "typeAnnotation": null,
              "start": 1334,
              "end": 1338
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1349,
                      "end": 1355
                    },
                    "start": 1347,
                    "end": 1355
                  },
                  "start": 1339,
                  "end": 1355
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1358,
                  "end": 1363
                },
                "start": 1356,
                "end": 1363
              },
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
                        "start": 1384,
                        "end": 1389
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1390,
                          "end": 1397
                        }
                      ],
                      "start": 1380,
                      "end": 1398
                    },
                    "start": 1374,
                    "end": 1399
                  }
                ],
                "start": 1364,
                "end": 1405
              },
              "expression": false,
              "start": 1338,
              "end": 1405
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1334,
            "end": 1405
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1410,
              "end": 1412
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "start": 1416,
                          "end": 1422
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 1425,
                          "end": 1434
                        }
                      ],
                      "start": 1416,
                      "end": 1434
                    },
                    "start": 1414,
                    "end": 1434
                  },
                  "start": 1413,
                  "end": 1434
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1450,
                        "end": 1451
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1456,
                        "end": 1465
                      },
                      "start": 1450,
                      "end": 1465
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1467,
                            "end": 1471
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1472,
                            "end": 1476
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1467,
                          "end": 1476
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "undefined argument",
                            "raw": "\"undefined argument\"",
                            "start": 1477,
                            "end": 1497
                          }
                        ],
                        "optional": false,
                        "start": 1467,
                        "end": 1498
                      },
                      "directive": null,
                      "start": 1467,
                      "end": 1499
                    },
                    "alternate": null,
                    "start": 1446,
                    "end": 1499
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
                        "start": 1508,
                        "end": 1509
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1510,
                        "end": 1516
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1508,
                      "end": 1516
                    },
                    "directive": null,
                    "start": 1508,
                    "end": 1517
                  }
                ],
                "start": 1436,
                "end": 1534
              },
              "expression": false,
              "start": 1412,
              "end": 1534
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1410,
            "end": 1534
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1539,
              "end": 1541
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "start": 1545,
                      "end": 1551
                    },
                    "start": 1543,
                    "end": 1551
                  },
                  "start": 1542,
                  "end": 1551
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1554,
                  "end": 1560
                },
                "start": 1552,
                "end": 1560
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1575,
                        "end": 1576
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1580,
                        "end": 1581
                      },
                      "start": 1575,
                      "end": 1581
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1590,
                        "end": 1591
                      },
                      "start": 1583,
                      "end": 1592
                    },
                    "alternate": null,
                    "start": 1571,
                    "end": 1592
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1601,
                          "end": 1605
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1606,
                          "end": 1610
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1601,
                        "end": 1610
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "negative number",
                          "raw": "\"negative number\"",
                          "start": 1611,
                          "end": 1628
                        }
                      ],
                      "optional": false,
                      "start": 1601,
                      "end": 1629
                    },
                    "directive": null,
                    "start": 1601,
                    "end": 1630
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1639,
                      "end": 1640
                    },
                    "directive": null,
                    "start": 1639,
                    "end": 1641
                  }
                ],
                "start": 1561,
                "end": 1663
              },
              "expression": false,
              "start": 1541,
              "end": 1663
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1539,
            "end": 1663
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null,
              "start": 1668,
              "end": 1670
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 1674,
                      "end": 1680
                    },
                    "start": 1672,
                    "end": 1680
                  },
                  "start": 1671,
                  "end": 1680
                }
              ],
              "returnType": null,
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
                      "start": 1692,
                      "end": 1693
                    },
                    "directive": null,
                    "start": 1692,
                    "end": 1694
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1714,
                          "end": 1718
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1719,
                          "end": 1723
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1714,
                        "end": 1723
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1714,
                      "end": 1725
                    },
                    "directive": null,
                    "start": 1714,
                    "end": 1726
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1735,
                      "end": 1736
                    },
                    "directive": null,
                    "start": 1735,
                    "end": 1737
                  }
                ],
                "start": 1682,
                "end": 1759
              },
              "expression": false,
              "start": 1670,
              "end": 1759
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 1668,
            "end": 1759
          }
        ],
        "start": 1328,
        "end": 1761
      },
      "abstract": false,
      "declare": false,
      "start": 1317,
      "end": 1761
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 1772,
        "end": 1775
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
                  "start": 1779,
                  "end": 1785
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1788,
                  "end": 1794
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1797,
                  "end": 1806
                }
              ],
              "start": 1779,
              "end": 1806
            },
            "start": 1777,
            "end": 1806
          },
          "start": 1776,
          "end": 1806
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
                  "start": 1825,
                  "end": 1826
                },
                "prefix": true,
                "start": 1818,
                "end": 1826
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 1831,
                "end": 1839
              },
              "start": 1818,
              "end": 1839
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
                      "start": 1851,
                      "end": 1855
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1851,
                    "end": 1857
                  },
                  "directive": null,
                  "start": 1851,
                  "end": 1858
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1867,
                    "end": 1868
                  },
                  "directive": null,
                  "start": 1867,
                  "end": 1869
                }
              ],
              "start": 1841,
              "end": 1891
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
                    "start": 1911,
                    "end": 1912
                  },
                  "directive": null,
                  "start": 1911,
                  "end": 1913
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1949,
                      "end": 1950
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1955,
                      "end": 1964
                    },
                    "start": 1949,
                    "end": 1964
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
                          "start": 1980,
                          "end": 1981
                        },
                        "directive": null,
                        "start": 1980,
                        "end": 1982
                      },
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
                            "start": 2006,
                            "end": 2010
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2006,
                          "end": 2012
                        },
                        "directive": null,
                        "start": 2006,
                        "end": 2013
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2026,
                          "end": 2027
                        },
                        "directive": null,
                        "start": 2026,
                        "end": 2028
                      }
                    ],
                    "start": 1966,
                    "end": 2054
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
                          "start": 2082,
                          "end": 2083
                        },
                        "directive": null,
                        "start": 2082,
                        "end": 2084
                      },
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
                            "start": 2111,
                            "end": 2115
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 2111,
                          "end": 2117
                        },
                        "directive": null,
                        "start": 2111,
                        "end": 2118
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2131,
                          "end": 2132
                        },
                        "directive": null,
                        "start": 2131,
                        "end": 2133
                      }
                    ],
                    "start": 2068,
                    "end": 2159
                  },
                  "start": 1945,
                  "end": 2159
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2168,
                    "end": 2169
                  },
                  "directive": null,
                  "start": 2168,
                  "end": 2170
                }
              ],
              "start": 1901,
              "end": 2192
            },
            "start": 1814,
            "end": 2192
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2197,
              "end": 2198
            },
            "directive": null,
            "start": 2197,
            "end": 2199
          }
        ],
        "start": 1808,
        "end": 2217
      },
      "expression": false,
      "start": 1763,
      "end": 2217
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null,
        "start": 2228,
        "end": 2231
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
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2237,
                    "end": 2238
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 2240,
                          "end": 2246
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 2249,
                          "end": 2255
                        }
                      ],
                      "start": 2240,
                      "end": 2255
                    },
                    "start": 2238,
                    "end": 2255
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2237,
                  "end": 2255
                }
              ],
              "start": 2235,
              "end": 2257
            },
            "start": 2233,
            "end": 2257
          },
          "start": 2232,
          "end": 2257
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2276,
                    "end": 2277
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2278,
                    "end": 2279
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2276,
                  "end": 2279
                },
                "prefix": true,
                "start": 2269,
                "end": 2279
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "string",
                "raw": "\"string\"",
                "start": 2284,
                "end": 2292
              },
              "start": 2269,
              "end": 2292
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
                      "start": 2304,
                      "end": 2308
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2304,
                    "end": 2310
                  },
                  "directive": null,
                  "start": 2304,
                  "end": 2311
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2320,
                    "end": 2321
                  },
                  "directive": null,
                  "start": 2320,
                  "end": 2322
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
                      "start": 2349,
                      "end": 2350
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2351,
                      "end": 2352
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2349,
                    "end": 2352
                  },
                  "directive": null,
                  "start": 2349,
                  "end": 2353
                }
              ],
              "start": 2294,
              "end": 2375
            },
            "alternate": null,
            "start": 2265,
            "end": 2375
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2380,
              "end": 2381
            },
            "directive": null,
            "start": 2380,
            "end": 2382
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
                "start": 2416,
                "end": 2417
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2418,
                "end": 2419
              },
              "optional": false,
              "computed": false,
              "start": 2416,
              "end": 2419
            },
            "directive": null,
            "start": 2416,
            "end": 2420
          }
        ],
        "start": 2259,
        "end": 2433
      },
      "expression": false,
      "start": 2219,
      "end": 2433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 2444,
        "end": 2447
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
              "start": 2451,
              "end": 2457
            },
            "start": 2449,
            "end": 2457
          },
          "start": 2448,
          "end": 2457
        }
      ],
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2479,
                    "end": 2480
                  },
                  "directive": null,
                  "start": 2479,
                  "end": 2481
                },
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
                      "start": 2490,
                      "end": 2494
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2490,
                    "end": 2496
                  },
                  "directive": null,
                  "start": 2490,
                  "end": 2497
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2506,
                    "end": 2507
                  },
                  "directive": null,
                  "start": 2506,
                  "end": 2508
                }
              ],
              "start": 2469,
              "end": 2530
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
                    "start": 2553,
                    "end": 2554
                  },
                  "directive": null,
                  "start": 2553,
                  "end": 2555
                },
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
                      "start": 2564,
                      "end": 2568
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2564,
                    "end": 2570
                  },
                  "directive": null,
                  "start": 2564,
                  "end": 2571
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2580,
                    "end": 2581
                  },
                  "directive": null,
                  "start": 2580,
                  "end": 2582
                }
              ],
              "start": 2543,
              "end": 2604
            },
            "start": 2465,
            "end": 2604
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2609,
              "end": 2610
            },
            "directive": null,
            "start": 2609,
            "end": 2611
          }
        ],
        "start": 2459,
        "end": 2629
      },
      "expression": false,
      "start": 2435,
      "end": 2629
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null,
        "start": 2640,
        "end": 2643
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
              "start": 2647,
              "end": 2653
            },
            "start": 2645,
            "end": 2653
          },
          "start": 2644,
          "end": 2653
        }
      ],
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
                }
              ],
              "start": 2665,
              "end": 2683
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
                    "start": 2706,
                    "end": 2707
                  },
                  "directive": null,
                  "start": 2706,
                  "end": 2708
                },
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
                      "start": 2717,
                      "end": 2721
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2717,
                    "end": 2723
                  },
                  "directive": null,
                  "start": 2717,
                  "end": 2724
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2733,
                    "end": 2734
                  },
                  "directive": null,
                  "start": 2733,
                  "end": 2735
                }
              ],
              "start": 2696,
              "end": 2757
            },
            "start": 2661,
            "end": 2757
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2762,
              "end": 2763
            },
            "directive": null,
            "start": 2762,
            "end": 2764
          }
        ],
        "start": 2655,
        "end": 2782
      },
      "expression": false,
      "start": 2631,
      "end": 2782
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null,
        "start": 2793,
        "end": 2796
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
              "start": 2800,
              "end": 2806
            },
            "start": 2798,
            "end": 2806
          },
          "start": 2797,
          "end": 2806
        }
      ],
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
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2828,
                    "end": 2829
                  },
                  "directive": null,
                  "start": 2828,
                  "end": 2830
                },
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
                      "start": 2839,
                      "end": 2843
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2839,
                    "end": 2845
                  },
                  "directive": null,
                  "start": 2839,
                  "end": 2846
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2855,
                    "end": 2856
                  },
                  "directive": null,
                  "start": 2855,
                  "end": 2857
                }
              ],
              "start": 2818,
              "end": 2879
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
                    "start": 2902,
                    "end": 2903
                  },
                  "directive": null,
                  "start": 2902,
                  "end": 2904
                }
              ],
              "start": 2892,
              "end": 2910
            },
            "start": 2814,
            "end": 2910
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2915,
              "end": 2916
            },
            "directive": null,
            "start": 2915,
            "end": 2917
          }
        ],
        "start": 2808,
        "end": 2935
      },
      "expression": false,
      "start": 2784,
      "end": 2935
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f43",
        "optional": false,
        "typeAnnotation": null,
        "start": 2946,
        "end": 2949
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
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2964,
                  "end": 2968
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 2975,
                      "end": 2980
                    },
                    "start": 2973,
                    "end": 2980
                  },
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
                            "start": 2996,
                            "end": 3001
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 2992,
                          "end": 3003
                        },
                        "start": 2986,
                        "end": 3004
                      }
                    ],
                    "start": 2984,
                    "end": 3006
                  },
                  "id": null,
                  "generator": false,
                  "start": 2971,
                  "end": 3006
                },
                "definite": false,
                "start": 2964,
                "end": 3006
              }
            ],
            "declare": false,
            "start": 2958,
            "end": 3007
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3018,
                  "end": 3019
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3023,
                      "end": 3027
                    }
                  ],
                  "start": 3022,
                  "end": 3028
                },
                "definite": false,
                "start": 3018,
                "end": 3028
              }
            ],
            "declare": false,
            "start": 3012,
            "end": 3029
          },
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
                "start": 3034,
                "end": 3038
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3034,
              "end": 3040
            },
            "directive": null,
            "start": 3034,
            "end": 3041
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
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3086,
                  "end": 3087
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 3088,
                  "end": 3089
                },
                "optional": false,
                "computed": true,
                "start": 3086,
                "end": 3090
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 3086,
              "end": 3092
            },
            "directive": null,
            "start": 3086,
            "end": 3093
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 3132,
              "end": 3133
            },
            "directive": null,
            "start": 3132,
            "end": 3134
          }
        ],
        "start": 2952,
        "end": 3136
      },
      "expression": false,
      "start": 2937,
      "end": 3136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null,
          "start": 3177,
          "end": 3186
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
                "start": 3187,
                "end": 3188
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3197,
                "end": 3203
              },
              "default": {
                "type": "TSAnyKeyword",
                "start": 3206,
                "end": 3209
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3187,
              "end": 3209
            }
          ],
          "start": 3186,
          "end": 3210
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attrName",
                "optional": false,
                "typeAnnotation": null,
                "start": 3214,
                "end": 3222
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3225,
                  "end": 3231
                },
                "start": 3223,
                "end": 3231
              },
              "accessibility": null,
              "static": false,
              "start": 3214,
              "end": 3232
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 3234,
                "end": 3238
              },
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
                    "start": 3240,
                    "end": 3241
                  },
                  "typeArguments": null,
                  "start": 3240,
                  "end": 3241
                },
                "start": 3238,
                "end": 3241
              },
              "accessibility": null,
              "static": false,
              "start": 3234,
              "end": 3242
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "dependencies",
                "optional": false,
                "typeAnnotation": null,
                "start": 3244,
                "end": 3256
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 3259,
                    "end": 3265
                  },
                  "start": 3259,
                  "end": 3267
                },
                "start": 3257,
                "end": 3267
              },
              "accessibility": null,
              "static": false,
              "start": 3244,
              "end": 3268
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null,
                "start": 3270,
                "end": 3272
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3274,
                  "end": 3277
                },
                "start": 3272,
                "end": 3277
              },
              "accessibility": null,
              "static": false,
              "start": 3270,
              "end": 3278
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null,
                "start": 3280,
                "end": 3282
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3284,
                  "end": 3290
                },
                "start": 3282,
                "end": 3290
              },
              "accessibility": null,
              "static": false,
              "start": 3280,
              "end": 3291
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "multiple",
                "optional": false,
                "typeAnnotation": null,
                "start": 3293,
                "end": 3301
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3304,
                  "end": 3311
                },
                "start": 3302,
                "end": 3311
              },
              "accessibility": null,
              "static": false,
              "start": 3293,
              "end": 3312
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 3314,
                "end": 3318
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3320,
                  "end": 3326
                },
                "start": 3318,
                "end": 3326
              },
              "accessibility": null,
              "static": false,
              "start": 3314,
              "end": 3327
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "schema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3329,
                "end": 3335
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 3337,
                  "end": 3344
                },
                "start": 3335,
                "end": 3344
              },
              "accessibility": null,
              "static": false,
              "start": 3329,
              "end": 3345
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "system",
                "optional": false,
                "typeAnnotation": null,
                "start": 3347,
                "end": 3353
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3355,
                  "end": 3358
                },
                "start": 3353,
                "end": 3358
              },
              "accessibility": null,
              "static": false,
              "start": 3347,
              "end": 3359
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "init",
                "optional": false,
                "typeAnnotation": null,
                "start": 3362,
                "end": 3366
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": true,
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
                        "start": 3374,
                        "end": 3375
                      },
                      "typeArguments": null,
                      "start": 3374,
                      "end": 3375
                    },
                    "start": 3372,
                    "end": 3375
                  },
                  "start": 3367,
                  "end": 3375
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3378,
                  "end": 3382
                },
                "start": 3376,
                "end": 3382
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3362,
              "end": 3383
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "pause",
                "optional": false,
                "typeAnnotation": null,
                "start": 3385,
                "end": 3390
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3394,
                  "end": 3398
                },
                "start": 3392,
                "end": 3398
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3385,
              "end": 3399
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "play",
                "optional": false,
                "typeAnnotation": null,
                "start": 3401,
                "end": 3405
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3409,
                  "end": 3413
                },
                "start": 3407,
                "end": 3413
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3401,
              "end": 3414
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "remove",
                "optional": false,
                "typeAnnotation": null,
                "start": 3416,
                "end": 3422
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3426,
                  "end": 3430
                },
                "start": 3424,
                "end": 3430
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3416,
              "end": 3431
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "tick",
                "optional": false,
                "typeAnnotation": null,
                "start": 3433,
                "end": 3437
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3445,
                      "end": 3451
                    },
                    "start": 3443,
                    "end": 3451
                  },
                  "start": 3439,
                  "end": 3451
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "timeDelta",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3464,
                      "end": 3470
                    },
                    "start": 3462,
                    "end": 3470
                  },
                  "start": 3453,
                  "end": 3470
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3473,
                  "end": 3477
                },
                "start": 3471,
                "end": 3477
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3433,
              "end": 3478
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "update",
                "optional": false,
                "typeAnnotation": null,
                "start": 3480,
                "end": 3486
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "oldData",
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
                        "start": 3496,
                        "end": 3497
                      },
                      "typeArguments": null,
                      "start": 3496,
                      "end": 3497
                    },
                    "start": 3494,
                    "end": 3497
                  },
                  "start": 3487,
                  "end": 3497
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3500,
                  "end": 3504
                },
                "start": 3498,
                "end": 3504
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3480,
              "end": 3505
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "updateSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3507,
                "end": 3519
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3524,
                  "end": 3528
                },
                "start": 3522,
                "end": 3528
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3507,
              "end": 3529
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "extendSchema",
                "optional": false,
                "typeAnnotation": null,
                "start": 3532,
                "end": 3544
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "update",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3553,
                      "end": 3560
                    },
                    "start": 3551,
                    "end": 3560
                  },
                  "start": 3545,
                  "end": 3560
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3563,
                  "end": 3567
                },
                "start": 3561,
                "end": 3567
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3532,
              "end": 3568
            },
            {
              "type": "TSMethodSignature",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "flushToDOM",
                "optional": false,
                "typeAnnotation": null,
                "start": 3570,
                "end": 3580
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3584,
                  "end": 3588
                },
                "start": 3582,
                "end": 3588
              },
              "accessibility": null,
              "readonly": false,
              "static": false,
              "start": 3570,
              "end": 3589
            }
          ],
          "start": 3211,
          "end": 3591
        },
        "declare": false,
        "start": 3167,
        "end": 3591
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3160,
      "end": 3591
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentConstructor",
          "optional": false,
          "typeAnnotation": null,
          "start": 3610,
          "end": 3630
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
                "start": 3631,
                "end": 3632
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3641,
                "end": 3647
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 3631,
              "end": 3647
            }
          ],
          "start": 3630,
          "end": 3648
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3661,
                      "end": 3668
                    },
                    "start": 3659,
                    "end": 3668
                  },
                  "start": 3657,
                  "end": 3668
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "attrValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3681,
                      "end": 3687
                    },
                    "start": 3679,
                    "end": 3687
                  },
                  "start": 3670,
                  "end": 3687
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3693,
                      "end": 3699
                    },
                    "start": 3691,
                    "end": 3699
                  },
                  "start": 3689,
                  "end": 3699
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3702,
                        "end": 3703
                      },
                      "typeArguments": null,
                      "start": 3702,
                      "end": 3703
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3706,
                        "end": 3715
                      },
                      "typeArguments": null,
                      "start": 3706,
                      "end": 3715
                    }
                  ],
                  "start": 3702,
                  "end": 3715
                },
                "start": 3700,
                "end": 3715
              },
              "start": 3652,
              "end": 3716
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null,
                "start": 3718,
                "end": 3727
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3729,
                        "end": 3730
                      },
                      "typeArguments": null,
                      "start": 3729,
                      "end": 3730
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
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3737,
                            "end": 3741
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3743,
                              "end": 3749
                            },
                            "start": 3741,
                            "end": 3749
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3737,
                          "end": 3750
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "system",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3753,
                            "end": 3759
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 3761,
                              "end": 3768
                            },
                            "start": 3759,
                            "end": 3768
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 3753,
                          "end": 3769
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "play",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3772,
                            "end": 3776
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3780,
                              "end": 3784
                            },
                            "start": 3778,
                            "end": 3784
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 3772,
                          "end": 3785
                        },
                        {
                          "type": "TSMethodSignature",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "pause",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3788,
                            "end": 3793
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3797,
                              "end": 3801
                            },
                            "start": 3795,
                            "end": 3801
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 3788,
                          "end": 3802
                        }
                      ],
                      "start": 3733,
                      "end": 3805
                    }
                  ],
                  "start": 3729,
                  "end": 3805
                },
                "start": 3727,
                "end": 3805
              },
              "accessibility": null,
              "static": false,
              "start": 3718,
              "end": 3806
            }
          ],
          "start": 3649,
          "end": 3808
        },
        "declare": false,
        "start": 3600,
        "end": 3808
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3593,
      "end": 3808
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "registerComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 3827,
        "end": 3844
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3845,
              "end": 3846
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 3855,
              "end": 3861
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3845,
            "end": 3861
          }
        ],
        "start": 3844,
        "end": 3862
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3874,
              "end": 3880
            },
            "start": 3872,
            "end": 3880
          },
          "start": 3868,
          "end": 3880
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ComponentDefinition",
                "optional": false,
                "typeAnnotation": null,
                "start": 3897,
                "end": 3916
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
                      "start": 3917,
                      "end": 3918
                    },
                    "typeArguments": null,
                    "start": 3917,
                    "end": 3918
                  }
                ],
                "start": 3916,
                "end": 3919
              },
              "start": 3897,
              "end": 3919
            },
            "start": 3895,
            "end": 3919
          },
          "start": 3886,
          "end": 3919
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "ComponentConstructor",
            "optional": false,
            "typeAnnotation": null,
            "start": 3923,
            "end": 3943
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
                  "start": 3944,
                  "end": 3945
                },
                "typeArguments": null,
                "start": 3944,
                "end": 3945
              }
            ],
            "start": 3943,
            "end": 3946
          },
          "start": 3923,
          "end": 3946
        },
        "start": 3921,
        "end": 3946
      },
      "body": null,
      "expression": false,
      "start": 3810,
      "end": 3947
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ComponentDefinition",
          "optional": false,
          "typeAnnotation": null,
          "start": 3961,
          "end": 3980
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
                "start": 3981,
                "end": 3982
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3991,
                "end": 3997
              },
              "default": {
                "type": "TSObjectKeyword",
                "start": 4000,
                "end": 4006
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 3981,
              "end": 4006
            }
          ],
          "start": 3980,
          "end": 4007
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 4010,
                "end": 4011
              },
              "typeArguments": null,
              "start": 4010,
              "end": 4011
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 4014,
                "end": 4021
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4022,
                      "end": 4031
                    },
                    "typeArguments": null,
                    "start": 4022,
                    "end": 4031
                  }
                ],
                "start": 4021,
                "end": 4032
              },
              "start": 4014,
              "end": 4032
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ThisType",
                "optional": false,
                "typeAnnotation": null,
                "start": 4035,
                "end": 4043
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4044,
                          "end": 4045
                        },
                        "typeArguments": null,
                        "start": 4044,
                        "end": 4045
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4048,
                          "end": 4057
                        },
                        "typeArguments": null,
                        "start": 4048,
                        "end": 4057
                      }
                    ],
                    "start": 4044,
                    "end": 4057
                  }
                ],
                "start": 4043,
                "end": 4058
              },
              "start": 4035,
              "end": 4058
            }
          ],
          "start": 4010,
          "end": 4058
        },
        "declare": false,
        "start": 3956,
        "end": 4059
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 3949,
      "end": 4059
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
            "name": "Component",
            "optional": false,
            "typeAnnotation": null,
            "start": 4067,
            "end": 4076
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "registerComponent",
              "optional": false,
              "typeAnnotation": null,
              "start": 4079,
              "end": 4096
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "test-component",
                "raw": "'test-component'",
                "start": 4097,
                "end": 4113
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "schema",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4118,
                      "end": 4124
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4130,
                            "end": 4140
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "default",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4147,
                                  "end": 4154
                                },
                                "value": {
                                  "type": "ArrayExpression",
                                  "elements": [],
                                  "start": 4156,
                                  "end": 4158
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4147,
                                "end": 4158
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "parse",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4163,
                                  "end": 4168
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
                                          "type": "ArrayExpression",
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "value": true,
                                              "raw": "true",
                                              "start": 4185,
                                              "end": 4189
                                            }
                                          ],
                                          "start": 4184,
                                          "end": 4190
                                        },
                                        "start": 4177,
                                        "end": 4191
                                      }
                                    ],
                                    "start": 4171,
                                    "end": 4196
                                  },
                                  "expression": false,
                                  "start": 4168,
                                  "end": 4196
                                },
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4163,
                                "end": 4196
                              }
                            ],
                            "start": 4142,
                            "end": 4200
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4130,
                          "end": 4200
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4204,
                            "end": 4210
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4214,
                                  "end": 4218
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "string",
                                  "raw": "'string'",
                                  "start": 4220,
                                  "end": 4228
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 4214,
                                "end": 4228
                              }
                            ],
                            "start": 4212,
                            "end": 4230
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4204,
                          "end": 4230
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4234,
                            "end": 4237
                          },
                          "value": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 4239,
                            "end": 4240
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4234,
                          "end": 4240
                        }
                      ],
                      "start": 4126,
                      "end": 4243
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4118,
                    "end": 4243
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "init",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4246,
                      "end": 4250
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
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4257,
                                    "end": 4261
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4262,
                                    "end": 4266
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4257,
                                  "end": 4266
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4267,
                                  "end": 4270
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4257,
                                "end": 4270
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 4273,
                                "end": 4274
                              },
                              "start": 4257,
                              "end": 4274
                            },
                            "directive": null,
                            "start": 4257,
                            "end": 4275
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4278,
                                    "end": 4282
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4283,
                                    "end": 4285
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4278,
                                  "end": 4285
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "setAttribute",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4286,
                                  "end": 4298
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4278,
                                "end": 4298
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "custom-attribute",
                                  "raw": "'custom-attribute'",
                                  "start": 4299,
                                  "end": 4317
                                },
                                {
                                  "type": "Literal",
                                  "value": "custom-value",
                                  "raw": "'custom-value'",
                                  "start": 4319,
                                  "end": 4333
                                }
                              ],
                              "optional": false,
                              "start": 4278,
                              "end": 4334
                            },
                            "directive": null,
                            "start": 4278,
                            "end": 4335
                          }
                        ],
                        "start": 4253,
                        "end": 4338
                      },
                      "expression": false,
                      "start": 4250,
                      "end": 4338
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4246,
                    "end": 4338
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "update",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4341,
                      "end": 4347
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
                        "body": [],
                        "start": 4350,
                        "end": 4352
                      },
                      "expression": false,
                      "start": 4347,
                      "end": 4352
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4341,
                    "end": 4352
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4355,
                      "end": 4359
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
                        "body": [],
                        "start": 4362,
                        "end": 4364
                      },
                      "expression": false,
                      "start": 4359,
                      "end": 4364
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4355,
                    "end": 4364
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "remove",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4367,
                      "end": 4373
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
                        "body": [],
                        "start": 4376,
                        "end": 4378
                      },
                      "expression": false,
                      "start": 4373,
                      "end": 4378
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4367,
                    "end": 4378
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pause",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4381,
                      "end": 4386
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
                        "body": [],
                        "start": 4389,
                        "end": 4391
                      },
                      "expression": false,
                      "start": 4386,
                      "end": 4391
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4381,
                    "end": 4391
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "play",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4394,
                      "end": 4398
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
                        "body": [],
                        "start": 4401,
                        "end": 4403
                      },
                      "expression": false,
                      "start": 4398,
                      "end": 4403
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4394,
                    "end": 4403
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "multiply",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4407,
                      "end": 4415
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 4419,
                              "end": 4425
                            },
                            "start": 4417,
                            "end": 4425
                          },
                          "start": 4416,
                          "end": 4425
                        }
                      ],
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4512,
                                  "end": 4513
                                },
                                "operator": "*",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4516,
                                      "end": 4520
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4521,
                                      "end": 4525
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4516,
                                    "end": 4525
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "num",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4526,
                                    "end": 4529
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4516,
                                  "end": 4529
                                },
                                "start": 4512,
                                "end": 4529
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "TSNonNullExpression",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 4532,
                                        "end": 4536
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "system",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4537,
                                        "end": 4543
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4532,
                                      "end": 4543
                                    },
                                    "start": 4532,
                                    "end": 4544
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4545,
                                    "end": 4549
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4532,
                                  "end": 4549
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "counter",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4550,
                                  "end": 4557
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4532,
                                "end": 4557
                              },
                              "start": 4512,
                              "end": 4557
                            },
                            "start": 4505,
                            "end": 4558
                          }
                        ],
                        "start": 4427,
                        "end": 4561
                      },
                      "expression": false,
                      "start": 4415,
                      "end": 4561
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4407,
                    "end": 4561
                  }
                ],
                "start": 4115,
                "end": 4563
              }
            ],
            "optional": false,
            "start": 4079,
            "end": 4564
          },
          "definite": false,
          "start": 4067,
          "end": 4564
        }
      ],
      "declare": false,
      "start": 4061,
      "end": 4565
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4595,
        "end": 4606
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "throw",
              "optional": false,
              "typeAnnotation": null,
              "start": 4613,
              "end": 4618
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4622,
                  "end": 4627
                },
                "start": 4620,
                "end": 4627
              },
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
                        "start": 4648,
                        "end": 4653
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "start": 4644,
                      "end": 4655
                    },
                    "start": 4638,
                    "end": 4656
                  }
                ],
                "start": 4628,
                "end": 4662
              },
              "expression": false,
              "start": 4618,
              "end": 4662
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4613,
            "end": 4662
          }
        ],
        "start": 4607,
        "end": 4664
      },
      "abstract": false,
      "declare": false,
      "start": 4589,
      "end": 4664
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SuperThrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4672,
        "end": 4686
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4695,
        "end": 4706
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null,
              "start": 4713,
              "end": 4716
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4722,
                      "end": 4728
                    },
                    "start": 4720,
                    "end": 4728
                  },
                  "start": 4717,
                  "end": 4728
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4731,
                  "end": 4736
                },
                "start": 4729,
                "end": 4736
              },
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
                          "type": "Super",
                          "start": 4747,
                          "end": 4752
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4753,
                          "end": 4758
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4747,
                        "end": 4758
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4747,
                      "end": 4760
                    },
                    "directive": null,
                    "start": 4747,
                    "end": 4760
                  }
                ],
                "start": 4737,
                "end": 4766
              },
              "expression": false,
              "start": 4716,
              "end": 4766
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4713,
            "end": 4766
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null,
              "start": 4771,
              "end": 4773
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4777,
                  "end": 4782
                },
                "start": 4775,
                "end": 4782
              },
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
                          "type": "ThisExpression",
                          "start": 4793,
                          "end": 4797
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4798,
                          "end": 4803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4793,
                        "end": 4803
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 4793,
                      "end": 4805
                    },
                    "directive": null,
                    "start": 4793,
                    "end": 4805
                  }
                ],
                "start": 4783,
                "end": 4811
              },
              "expression": false,
              "start": 4773,
              "end": 4811
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4771,
            "end": 4811
          }
        ],
        "start": 4707,
        "end": 4813
      },
      "abstract": false,
      "declare": false,
      "start": 4666,
      "end": 4813
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null,
        "start": 4847,
        "end": 4855
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "panic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4862,
              "end": 4867
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4877,
                    "end": 4883
                  },
                  "start": 4875,
                  "end": 4883
                },
                "start": 4868,
                "end": 4883
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 4886,
                "end": 4891
              },
              "start": 4884,
              "end": 4891
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 4862,
            "end": 4892
          }
        ],
        "start": 4856,
        "end": 4894
      },
      "declare": false,
      "start": 4837,
      "end": 4894
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 4905,
        "end": 4908
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "services",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null,
                "start": 4919,
                "end": 4927
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4928,
                      "end": 4936
                    },
                    "typeArguments": null,
                    "start": 4928,
                    "end": 4936
                  }
                ],
                "start": 4927,
                "end": 4937
              },
              "start": 4919,
              "end": 4937
            },
            "start": 4917,
            "end": 4937
          },
          "start": 4909,
          "end": 4937
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4942,
                  "end": 4948
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4951,
                  "end": 4955
                }
              ],
              "start": 4942,
              "end": 4955
            },
            "start": 4940,
            "end": 4955
          },
          "start": 4939,
          "end": 4955
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 4958,
          "end": 4964
        },
        "start": 4956,
        "end": 4964
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 4975,
                "end": 4976
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4981,
                "end": 4985
              },
              "start": 4975,
              "end": 4985
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
                        "name": "services",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4997,
                        "end": 5005
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "panic",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5006,
                        "end": 5011
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4997,
                      "end": 5011
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "ouch",
                        "raw": "\"ouch\"",
                        "start": 5012,
                        "end": 5018
                      }
                    ],
                    "optional": false,
                    "start": 4997,
                    "end": 5019
                  },
                  "directive": null,
                  "start": 4997,
                  "end": 5020
                }
              ],
              "start": 4987,
              "end": 5026
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5049,
                    "end": 5050
                  },
                  "start": 5042,
                  "end": 5051
                }
              ],
              "start": 5032,
              "end": 5057
            },
            "start": 4971,
            "end": 5057
          }
        ],
        "start": 4965,
        "end": 5059
      },
      "expression": false,
      "start": 4896,
      "end": 5059
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 5059
}
```
