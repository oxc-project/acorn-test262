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
        "name": "assertNever",
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
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 24,
              "end": 29
            },
            "start": 22,
            "end": 29
          },
          "start": 21,
          "end": 29
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "start": 37,
            "end": 46
          }
        ],
        "start": 31,
        "end": 48
      },
      "expression": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 71
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
              "start": 75,
              "end": 81
            },
            "start": 73,
            "end": 81
          },
          "start": 72,
          "end": 81
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "start": 89,
            "end": 98
          }
        ],
        "start": 83,
        "end": 100
      },
      "expression": false,
      "start": 50,
      "end": 100
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertBoolean",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 124
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
              "type": "TSBooleanKeyword",
              "start": 128,
              "end": 135
            },
            "start": 126,
            "end": 135
          },
          "start": 125,
          "end": 135
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 151
            },
            "start": 143,
            "end": 152
          }
        ],
        "start": 137,
        "end": 154
      },
      "expression": false,
      "start": 102,
      "end": 154
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertString",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 177
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
              "start": 181,
              "end": 187
            },
            "start": 179,
            "end": 187
          },
          "start": 178,
          "end": 187
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 202,
              "end": 203
            },
            "start": 195,
            "end": 204
          }
        ],
        "start": 189,
        "end": 206
      },
      "expression": false,
      "start": 156,
      "end": 206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertSymbol",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
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
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 233,
              "end": 239
            },
            "start": 231,
            "end": 239
          },
          "start": 230,
          "end": 239
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 254,
              "end": 255
            },
            "start": 247,
            "end": 256
          }
        ],
        "start": 241,
        "end": 258
      },
      "expression": false,
      "start": 208,
      "end": 258
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertFunction",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 283
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 287,
                "end": 295
              },
              "typeArguments": null,
              "start": 287,
              "end": 295
            },
            "start": 285,
            "end": 295
          },
          "start": 284,
          "end": 295
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "start": 303,
            "end": 312
          }
        ],
        "start": 297,
        "end": 314
      },
      "expression": false,
      "start": 260,
      "end": 314
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 325,
        "end": 337
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
              "type": "TSObjectKeyword",
              "start": 341,
              "end": 347
            },
            "start": 339,
            "end": 347
          },
          "start": 338,
          "end": 347
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 363
            },
            "start": 355,
            "end": 364
          }
        ],
        "start": 349,
        "end": 366
      },
      "expression": false,
      "start": 316,
      "end": 366
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertObjectOrNull",
        "optional": false,
        "typeAnnotation": null,
        "start": 377,
        "end": 395
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
                  "type": "TSObjectKeyword",
                  "start": 399,
                  "end": 405
                },
                {
                  "type": "TSNullKeyword",
                  "start": 408,
                  "end": 412
                }
              ],
              "start": 399,
              "end": 412
            },
            "start": 397,
            "end": 412
          },
          "start": 396,
          "end": 412
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 428
            },
            "start": 420,
            "end": 429
          }
        ],
        "start": 414,
        "end": 431
      },
      "expression": false,
      "start": 368,
      "end": 431
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 457
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
              "type": "TSUndefinedKeyword",
              "start": 461,
              "end": 470
            },
            "start": 459,
            "end": 470
          },
          "start": 458,
          "end": 470
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 485,
              "end": 486
            },
            "start": 478,
            "end": 487
          }
        ],
        "start": 472,
        "end": 489
      },
      "expression": false,
      "start": 433,
      "end": 489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertAll",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 509
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 518
              },
              "typeArguments": null,
              "start": 513,
              "end": 518
            },
            "start": 511,
            "end": 518
          },
          "start": 510,
          "end": 518
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 533,
              "end": 534
            },
            "start": 526,
            "end": 535
          }
        ],
        "start": 520,
        "end": 537
      },
      "expression": false,
      "start": 491,
      "end": 537
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertStringOrNumber",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 568
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
                  "start": 572,
                  "end": 578
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 581,
                  "end": 587
                }
              ],
              "start": 572,
              "end": 587
            },
            "start": 570,
            "end": 587
          },
          "start": 569,
          "end": 587
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 602,
              "end": 603
            },
            "start": 595,
            "end": 604
          }
        ],
        "start": 589,
        "end": 606
      },
      "expression": false,
      "start": 539,
      "end": 606
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertBooleanOrObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 617,
        "end": 638
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
                  "type": "TSBooleanKeyword",
                  "start": 642,
                  "end": 649
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 652,
                  "end": 658
                }
              ],
              "start": 642,
              "end": 658
            },
            "start": 640,
            "end": 658
          },
          "start": 639,
          "end": 658
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 674
            },
            "start": 666,
            "end": 675
          }
        ],
        "start": 660,
        "end": 677
      },
      "expression": false,
      "start": 608,
      "end": 677
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Basic",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 689
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 692,
            "end": 698
          },
          {
            "type": "TSBooleanKeyword",
            "start": 701,
            "end": 708
          },
          {
            "type": "TSStringKeyword",
            "start": 711,
            "end": 717
          },
          {
            "type": "TSSymbolKeyword",
            "start": 720,
            "end": 726
          },
          {
            "type": "TSObjectKeyword",
            "start": 729,
            "end": 735
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null,
              "start": 738,
              "end": 746
            },
            "typeArguments": null,
            "start": 738,
            "end": 746
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 749,
            "end": 758
          }
        ],
        "start": 692,
        "end": 758
      },
      "declare": false,
      "start": 679,
      "end": 759
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 779
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 788
              },
              "typeArguments": null,
              "start": 783,
              "end": 788
            },
            "start": 781,
            "end": 788
          },
          "start": 780,
          "end": 788
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 811,
                "end": 812
              },
              "prefix": true,
              "start": 804,
              "end": 812
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 829,
                  "end": 837
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 839,
                        "end": 851
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 852,
                          "end": 853
                        }
                      ],
                      "optional": false,
                      "start": 839,
                      "end": 854
                    },
                    "directive": null,
                    "start": 839,
                    "end": 855
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 856,
                    "end": 863
                  }
                ],
                "start": 824,
                "end": 863
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 877,
                  "end": 886
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 888,
                        "end": 901
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 902,
                          "end": 903
                        }
                      ],
                      "optional": false,
                      "start": 888,
                      "end": 904
                    },
                    "directive": null,
                    "start": 888,
                    "end": 905
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 906,
                    "end": 913
                  }
                ],
                "start": 872,
                "end": 913
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 927,
                  "end": 937
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 939,
                        "end": 953
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 954,
                          "end": 955
                        }
                      ],
                      "optional": false,
                      "start": 939,
                      "end": 956
                    },
                    "directive": null,
                    "start": 939,
                    "end": 957
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 958,
                    "end": 965
                  }
                ],
                "start": 922,
                "end": 965
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 979,
                  "end": 987
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 989,
                        "end": 1001
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1002,
                          "end": 1003
                        }
                      ],
                      "optional": false,
                      "start": 989,
                      "end": 1004
                    },
                    "directive": null,
                    "start": 989,
                    "end": 1005
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1006,
                    "end": 1013
                  }
                ],
                "start": 974,
                "end": 1013
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 1027,
                  "end": 1035
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1037,
                        "end": 1049
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1050,
                          "end": 1051
                        }
                      ],
                      "optional": false,
                      "start": 1037,
                      "end": 1052
                    },
                    "directive": null,
                    "start": 1037,
                    "end": 1053
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1054,
                    "end": 1061
                  }
                ],
                "start": 1022,
                "end": 1061
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 1075,
                  "end": 1083
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1085,
                        "end": 1097
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1098,
                          "end": 1099
                        }
                      ],
                      "optional": false,
                      "start": 1085,
                      "end": 1100
                    },
                    "directive": null,
                    "start": 1085,
                    "end": 1101
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1102,
                    "end": 1109
                  }
                ],
                "start": 1070,
                "end": 1109
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "'undefined'",
                  "start": 1123,
                  "end": 1134
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1136,
                        "end": 1151
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1152,
                          "end": 1153
                        }
                      ],
                      "optional": false,
                      "start": 1136,
                      "end": 1154
                    },
                    "directive": null,
                    "start": 1136,
                    "end": 1155
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1156,
                    "end": 1163
                  }
                ],
                "start": 1118,
                "end": 1163
              }
            ],
            "start": 796,
            "end": 1169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 1174,
                "end": 1185
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1186,
                  "end": 1187
                }
              ],
              "optional": false,
              "start": 1174,
              "end": 1188
            },
            "directive": null,
            "start": 1174,
            "end": 1189
          }
        ],
        "start": 790,
        "end": 1191
      },
      "expression": false,
      "start": 761,
      "end": 1191
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testExtendsUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 1202,
        "end": 1218
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
              "start": 1219,
              "end": 1220
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 1229,
                "end": 1234
              },
              "typeArguments": null,
              "start": 1229,
              "end": 1234
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1219,
            "end": 1234
          }
        ],
        "start": 1218,
        "end": 1235
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
                "start": 1239,
                "end": 1240
              },
              "typeArguments": null,
              "start": 1239,
              "end": 1240
            },
            "start": 1237,
            "end": 1240
          },
          "start": 1236,
          "end": 1240
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1264
              },
              "prefix": true,
              "start": 1256,
              "end": 1264
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 1281,
                  "end": 1289
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1291,
                        "end": 1303
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1304,
                          "end": 1305
                        }
                      ],
                      "optional": false,
                      "start": 1291,
                      "end": 1306
                    },
                    "directive": null,
                    "start": 1291,
                    "end": 1307
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1308,
                    "end": 1315
                  }
                ],
                "start": 1276,
                "end": 1315
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 1329,
                  "end": 1338
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1340,
                        "end": 1353
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1354,
                          "end": 1355
                        }
                      ],
                      "optional": false,
                      "start": 1340,
                      "end": 1356
                    },
                    "directive": null,
                    "start": 1340,
                    "end": 1357
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1358,
                    "end": 1365
                  }
                ],
                "start": 1324,
                "end": 1365
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 1379,
                  "end": 1389
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1391,
                        "end": 1400
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1401,
                          "end": 1402
                        }
                      ],
                      "optional": false,
                      "start": 1391,
                      "end": 1403
                    },
                    "directive": null,
                    "start": 1391,
                    "end": 1404
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1405,
                    "end": 1412
                  }
                ],
                "start": 1374,
                "end": 1412
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 1426,
                  "end": 1434
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1436,
                        "end": 1448
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1449,
                          "end": 1450
                        }
                      ],
                      "optional": false,
                      "start": 1436,
                      "end": 1451
                    },
                    "directive": null,
                    "start": 1436,
                    "end": 1452
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1453,
                    "end": 1460
                  }
                ],
                "start": 1421,
                "end": 1460
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 1474,
                  "end": 1482
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1484,
                        "end": 1493
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1494,
                          "end": 1495
                        }
                      ],
                      "optional": false,
                      "start": 1484,
                      "end": 1496
                    },
                    "directive": null,
                    "start": 1484,
                    "end": 1497
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1498,
                    "end": 1505
                  }
                ],
                "start": 1469,
                "end": 1505
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 1519,
                  "end": 1527
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1529,
                        "end": 1541
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1542,
                          "end": 1543
                        }
                      ],
                      "optional": false,
                      "start": 1529,
                      "end": 1544
                    },
                    "directive": null,
                    "start": 1529,
                    "end": 1545
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1546,
                    "end": 1553
                  }
                ],
                "start": 1514,
                "end": 1553
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "'undefined'",
                  "start": 1567,
                  "end": 1578
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1580,
                        "end": 1595
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1596,
                          "end": 1597
                        }
                      ],
                      "optional": false,
                      "start": 1580,
                      "end": 1598
                    },
                    "directive": null,
                    "start": 1580,
                    "end": 1599
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1600,
                    "end": 1607
                  }
                ],
                "start": 1562,
                "end": 1607
              }
            ],
            "start": 1248,
            "end": 1613
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1618,
                "end": 1627
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1628,
                  "end": 1629
                }
              ],
              "optional": false,
              "start": 1618,
              "end": 1630
            },
            "directive": null,
            "start": 1618,
            "end": 1631
          }
        ],
        "start": 1242,
        "end": 1633
      },
      "expression": false,
      "start": 1193,
      "end": 1633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 1644,
        "end": 1651
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
              "type": "TSAnyKeyword",
              "start": 1655,
              "end": 1658
            },
            "start": 1653,
            "end": 1658
          },
          "start": 1652,
          "end": 1658
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1681,
                "end": 1682
              },
              "prefix": true,
              "start": 1674,
              "end": 1682
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 1699,
                  "end": 1707
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1709,
                        "end": 1721
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1722,
                          "end": 1723
                        }
                      ],
                      "optional": false,
                      "start": 1709,
                      "end": 1724
                    },
                    "directive": null,
                    "start": 1709,
                    "end": 1725
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1726,
                    "end": 1733
                  }
                ],
                "start": 1694,
                "end": 1733
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 1747,
                  "end": 1756
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1758,
                        "end": 1771
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1772,
                          "end": 1773
                        }
                      ],
                      "optional": false,
                      "start": 1758,
                      "end": 1774
                    },
                    "directive": null,
                    "start": 1758,
                    "end": 1775
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1776,
                    "end": 1783
                  }
                ],
                "start": 1742,
                "end": 1783
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 1797,
                  "end": 1807
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1809,
                        "end": 1823
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1824,
                          "end": 1825
                        }
                      ],
                      "optional": false,
                      "start": 1809,
                      "end": 1826
                    },
                    "directive": null,
                    "start": 1809,
                    "end": 1827
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1828,
                    "end": 1835
                  }
                ],
                "start": 1792,
                "end": 1835
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 1849,
                  "end": 1857
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1859,
                        "end": 1871
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1872,
                          "end": 1873
                        }
                      ],
                      "optional": false,
                      "start": 1859,
                      "end": 1874
                    },
                    "directive": null,
                    "start": 1859,
                    "end": 1875
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1876,
                    "end": 1883
                  }
                ],
                "start": 1844,
                "end": 1883
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 1897,
                  "end": 1905
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1907,
                        "end": 1919
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1920,
                          "end": 1921
                        }
                      ],
                      "optional": false,
                      "start": 1907,
                      "end": 1922
                    },
                    "directive": null,
                    "start": 1907,
                    "end": 1923
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1924,
                    "end": 1931
                  }
                ],
                "start": 1892,
                "end": 1931
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 1945,
                  "end": 1953
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1955,
                        "end": 1967
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1968,
                          "end": 1969
                        }
                      ],
                      "optional": false,
                      "start": 1955,
                      "end": 1970
                    },
                    "directive": null,
                    "start": 1955,
                    "end": 1971
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 1972,
                    "end": 1979
                  }
                ],
                "start": 1940,
                "end": 1979
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "'undefined'",
                  "start": 1993,
                  "end": 2004
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2006,
                        "end": 2021
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2022,
                          "end": 2023
                        }
                      ],
                      "optional": false,
                      "start": 2006,
                      "end": 2024
                    },
                    "directive": null,
                    "start": 2006,
                    "end": 2025
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2026,
                    "end": 2033
                  }
                ],
                "start": 1988,
                "end": 2033
              }
            ],
            "start": 1666,
            "end": 2039
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 2044,
                "end": 2053
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2054,
                  "end": 2055
                }
              ],
              "optional": false,
              "start": 2044,
              "end": 2056
            },
            "directive": null,
            "start": 2044,
            "end": 2057
          }
        ],
        "start": 1660,
        "end": 2069
      },
      "expression": false,
      "start": 1635,
      "end": 2069
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2080,
        "end": 2082
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
                  "start": 2086,
                  "end": 2092
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 2095,
                  "end": 2101
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2104,
                  "end": 2113
                }
              ],
              "start": 2086,
              "end": 2113
            },
            "start": 2084,
            "end": 2113
          },
          "start": 2083,
          "end": 2113
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 2128,
              "end": 2129
            },
            "start": 2121,
            "end": 2130
          }
        ],
        "start": 2115,
        "end": 2132
      },
      "expression": false,
      "start": 2071,
      "end": 2132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testUnionExplicitDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 2143,
        "end": 2167
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 2171,
                "end": 2176
              },
              "typeArguments": null,
              "start": 2171,
              "end": 2176
            },
            "start": 2169,
            "end": 2176
          },
          "start": 2168,
          "end": 2176
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2199,
                "end": 2200
              },
              "prefix": true,
              "start": 2192,
              "end": 2200
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 2217,
                  "end": 2225
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2227,
                        "end": 2239
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2240,
                          "end": 2241
                        }
                      ],
                      "optional": false,
                      "start": 2227,
                      "end": 2242
                    },
                    "directive": null,
                    "start": 2227,
                    "end": 2243
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2244,
                    "end": 2251
                  }
                ],
                "start": 2212,
                "end": 2251
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 2265,
                  "end": 2274
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2276,
                        "end": 2289
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2290,
                          "end": 2291
                        }
                      ],
                      "optional": false,
                      "start": 2276,
                      "end": 2292
                    },
                    "directive": null,
                    "start": 2276,
                    "end": 2293
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2294,
                    "end": 2301
                  }
                ],
                "start": 2260,
                "end": 2301
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 2315,
                  "end": 2325
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2327,
                        "end": 2341
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2342,
                          "end": 2343
                        }
                      ],
                      "optional": false,
                      "start": 2327,
                      "end": 2344
                    },
                    "directive": null,
                    "start": 2327,
                    "end": 2345
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2346,
                    "end": 2353
                  }
                ],
                "start": 2310,
                "end": 2353
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 2367,
                  "end": 2375
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2377,
                        "end": 2389
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2390,
                          "end": 2391
                        }
                      ],
                      "optional": false,
                      "start": 2377,
                      "end": 2392
                    },
                    "directive": null,
                    "start": 2377,
                    "end": 2393
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2394,
                    "end": 2401
                  }
                ],
                "start": 2362,
                "end": 2401
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2419,
                        "end": 2421
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2422,
                          "end": 2423
                        }
                      ],
                      "optional": false,
                      "start": 2419,
                      "end": 2424
                    },
                    "directive": null,
                    "start": 2419,
                    "end": 2425
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2426,
                    "end": 2433
                  }
                ],
                "start": 2410,
                "end": 2433
              }
            ],
            "start": 2184,
            "end": 2439
          }
        ],
        "start": 2178,
        "end": 2441
      },
      "expression": false,
      "start": 2134,
      "end": 2441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testUnionImplicitDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 2452,
        "end": 2476
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 2480,
                "end": 2485
              },
              "typeArguments": null,
              "start": 2480,
              "end": 2485
            },
            "start": 2478,
            "end": 2485
          },
          "start": 2477,
          "end": 2485
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2508,
                "end": 2509
              },
              "prefix": true,
              "start": 2501,
              "end": 2509
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 2526,
                  "end": 2534
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2536,
                        "end": 2548
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2549,
                          "end": 2550
                        }
                      ],
                      "optional": false,
                      "start": 2536,
                      "end": 2551
                    },
                    "directive": null,
                    "start": 2536,
                    "end": 2552
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2553,
                    "end": 2560
                  }
                ],
                "start": 2521,
                "end": 2560
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 2574,
                  "end": 2583
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2585,
                        "end": 2598
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2599,
                          "end": 2600
                        }
                      ],
                      "optional": false,
                      "start": 2585,
                      "end": 2601
                    },
                    "directive": null,
                    "start": 2585,
                    "end": 2602
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2603,
                    "end": 2610
                  }
                ],
                "start": 2569,
                "end": 2610
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 2624,
                  "end": 2634
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2636,
                        "end": 2650
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2651,
                          "end": 2652
                        }
                      ],
                      "optional": false,
                      "start": 2636,
                      "end": 2653
                    },
                    "directive": null,
                    "start": 2636,
                    "end": 2654
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2655,
                    "end": 2662
                  }
                ],
                "start": 2619,
                "end": 2662
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 2676,
                  "end": 2684
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2686,
                        "end": 2698
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2699,
                          "end": 2700
                        }
                      ],
                      "optional": false,
                      "start": 2686,
                      "end": 2701
                    },
                    "directive": null,
                    "start": 2686,
                    "end": 2702
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2703,
                    "end": 2710
                  }
                ],
                "start": 2671,
                "end": 2710
              }
            ],
            "start": 2493,
            "end": 2716
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2728,
                "end": 2730
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2731,
                  "end": 2732
                }
              ],
              "optional": false,
              "start": 2728,
              "end": 2733
            },
            "start": 2721,
            "end": 2734
          }
        ],
        "start": 2487,
        "end": 2736
      },
      "expression": false,
      "start": 2443,
      "end": 2736
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testExtendsExplicitDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 2747,
        "end": 2773
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
              "start": 2774,
              "end": 2775
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 2784,
                "end": 2789
              },
              "typeArguments": null,
              "start": 2784,
              "end": 2789
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2774,
            "end": 2789
          }
        ],
        "start": 2773,
        "end": 2790
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
                "start": 2794,
                "end": 2795
              },
              "typeArguments": null,
              "start": 2794,
              "end": 2795
            },
            "start": 2792,
            "end": 2795
          },
          "start": 2791,
          "end": 2795
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2818,
                "end": 2819
              },
              "prefix": true,
              "start": 2811,
              "end": 2819
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 2836,
                  "end": 2844
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2846,
                        "end": 2858
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2859,
                          "end": 2860
                        }
                      ],
                      "optional": false,
                      "start": 2846,
                      "end": 2861
                    },
                    "directive": null,
                    "start": 2846,
                    "end": 2862
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2863,
                    "end": 2870
                  }
                ],
                "start": 2831,
                "end": 2870
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 2884,
                  "end": 2893
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2895,
                        "end": 2908
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2909,
                          "end": 2910
                        }
                      ],
                      "optional": false,
                      "start": 2895,
                      "end": 2911
                    },
                    "directive": null,
                    "start": 2895,
                    "end": 2912
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2913,
                    "end": 2920
                  }
                ],
                "start": 2879,
                "end": 2920
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 2934,
                  "end": 2944
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2946,
                        "end": 2955
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2956,
                          "end": 2957
                        }
                      ],
                      "optional": false,
                      "start": 2946,
                      "end": 2958
                    },
                    "directive": null,
                    "start": 2946,
                    "end": 2959
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 2960,
                    "end": 2967
                  }
                ],
                "start": 2929,
                "end": 2967
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 2981,
                  "end": 2989
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2991,
                        "end": 3003
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3004,
                          "end": 3005
                        }
                      ],
                      "optional": false,
                      "start": 2991,
                      "end": 3006
                    },
                    "directive": null,
                    "start": 2991,
                    "end": 3007
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 3008,
                    "end": 3015
                  }
                ],
                "start": 2976,
                "end": 3015
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3033,
                        "end": 3042
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3043,
                          "end": 3044
                        }
                      ],
                      "optional": false,
                      "start": 3033,
                      "end": 3045
                    },
                    "directive": null,
                    "start": 3033,
                    "end": 3046
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 3047,
                    "end": 3054
                  }
                ],
                "start": 3024,
                "end": 3054
              }
            ],
            "start": 2803,
            "end": 3061
          }
        ],
        "start": 2797,
        "end": 3063
      },
      "expression": false,
      "start": 2738,
      "end": 3063
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testExtendsImplicitDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3100
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
              "start": 3101,
              "end": 3102
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 3111,
                "end": 3116
              },
              "typeArguments": null,
              "start": 3111,
              "end": 3116
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3101,
            "end": 3116
          }
        ],
        "start": 3100,
        "end": 3117
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
                "start": 3121,
                "end": 3122
              },
              "typeArguments": null,
              "start": 3121,
              "end": 3122
            },
            "start": 3119,
            "end": 3122
          },
          "start": 3118,
          "end": 3122
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3145,
                "end": 3146
              },
              "prefix": true,
              "start": 3138,
              "end": 3146
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 3163,
                  "end": 3171
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3173,
                        "end": 3185
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3186,
                          "end": 3187
                        }
                      ],
                      "optional": false,
                      "start": 3173,
                      "end": 3188
                    },
                    "directive": null,
                    "start": 3173,
                    "end": 3189
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 3190,
                    "end": 3197
                  }
                ],
                "start": 3158,
                "end": 3197
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 3211,
                  "end": 3220
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3222,
                        "end": 3235
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3236,
                          "end": 3237
                        }
                      ],
                      "optional": false,
                      "start": 3222,
                      "end": 3238
                    },
                    "directive": null,
                    "start": 3222,
                    "end": 3239
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 3240,
                    "end": 3247
                  }
                ],
                "start": 3206,
                "end": 3247
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 3261,
                  "end": 3271
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3273,
                        "end": 3282
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3283,
                          "end": 3284
                        }
                      ],
                      "optional": false,
                      "start": 3273,
                      "end": 3285
                    },
                    "directive": null,
                    "start": 3273,
                    "end": 3286
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 3287,
                    "end": 3294
                  }
                ],
                "start": 3256,
                "end": 3294
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 3308,
                  "end": 3316
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3318,
                        "end": 3330
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3331,
                          "end": 3332
                        }
                      ],
                      "optional": false,
                      "start": 3318,
                      "end": 3333
                    },
                    "directive": null,
                    "start": 3318,
                    "end": 3334
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 3335,
                    "end": 3342
                  }
                ],
                "start": 3303,
                "end": 3342
              }
            ],
            "start": 3130,
            "end": 3348
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 3360,
                "end": 3369
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3370,
                  "end": 3371
                }
              ],
              "optional": false,
              "start": 3360,
              "end": 3372
            },
            "start": 3353,
            "end": 3373
          }
        ],
        "start": 3124,
        "end": 3375
      },
      "expression": false,
      "start": 3065,
      "end": 3375
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null,
        "start": 3382,
        "end": 3383
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 3390,
                "end": 3396
              },
              "start": 3388,
              "end": 3396
            },
            "start": 3387,
            "end": 3396
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3401,
            "end": 3407
          },
          "start": 3398,
          "end": 3407
        },
        "start": 3386,
        "end": 3407
      },
      "declare": false,
      "start": 3377,
      "end": 3408
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null,
        "start": 3414,
        "end": 3415
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 3420,
              "end": 3421
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3423,
                "end": 3429
              },
              "start": 3421,
              "end": 3429
            },
            "accessibility": null,
            "static": false,
            "start": 3420,
            "end": 3430
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 3431,
              "end": 3432
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3434,
                "end": 3440
              },
              "start": 3432,
              "end": 3440
            },
            "accessibility": null,
            "static": false,
            "start": 3431,
            "end": 3440
          }
        ],
        "start": 3418,
        "end": 3442
      },
      "declare": false,
      "start": 3409,
      "end": 3442
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exhaustiveChecks",
        "optional": false,
        "typeAnnotation": null,
        "start": 3453,
        "end": 3469
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
                  "start": 3473,
                  "end": 3479
                },
                {
                  "type": "TSStringKeyword",
                  "start": 3482,
                  "end": 3488
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3491,
                    "end": 3492
                  },
                  "typeArguments": null,
                  "start": 3491,
                  "end": 3492
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3495,
                    "end": 3496
                  },
                  "typeArguments": null,
                  "start": 3495,
                  "end": 3496
                }
              ],
              "start": 3473,
              "end": 3496
            },
            "start": 3471,
            "end": 3496
          },
          "start": 3470,
          "end": 3496
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3499,
          "end": 3505
        },
        "start": 3497,
        "end": 3505
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3527,
                "end": 3528
              },
              "prefix": true,
              "start": 3520,
              "end": 3528
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 3545,
                  "end": 3553
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3562,
                          "end": 3563
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3564,
                          "end": 3572
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3562,
                        "end": 3572
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 3573,
                          "end": 3574
                        }
                      ],
                      "optional": false,
                      "start": 3562,
                      "end": 3575
                    },
                    "start": 3555,
                    "end": 3576
                  }
                ],
                "start": 3540,
                "end": 3576
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 3590,
                  "end": 3598
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3607,
                      "end": 3608
                    },
                    "start": 3600,
                    "end": 3609
                  }
                ],
                "start": 3585,
                "end": 3609
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 3623,
                  "end": 3633
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3642,
                        "end": 3643
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 3644,
                          "end": 3646
                        }
                      ],
                      "optional": false,
                      "start": 3642,
                      "end": 3647
                    },
                    "start": 3635,
                    "end": 3648
                  }
                ],
                "start": 3618,
                "end": 3648
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 3662,
                  "end": 3670
                },
                "consequent": [
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
                        "start": 3679,
                        "end": 3680
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3681,
                        "end": 3682
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3679,
                      "end": 3682
                    },
                    "start": 3672,
                    "end": 3683
                  }
                ],
                "start": 3657,
                "end": 3683
              }
            ],
            "start": 3512,
            "end": 3689
          }
        ],
        "start": 3506,
        "end": 3691
      },
      "expression": false,
      "start": 3444,
      "end": 3691
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exhaustiveChecksGenerics",
        "optional": false,
        "typeAnnotation": null,
        "start": 3702,
        "end": 3726
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
              "start": 3727,
              "end": 3728
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3737,
                    "end": 3738
                  },
                  "typeArguments": null,
                  "start": 3737,
                  "end": 3738
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3741,
                    "end": 3742
                  },
                  "typeArguments": null,
                  "start": 3741,
                  "end": 3742
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3745,
                  "end": 3751
                },
                {
                  "type": "TSStringKeyword",
                  "start": 3754,
                  "end": 3760
                }
              ],
              "start": 3737,
              "end": 3760
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3727,
            "end": 3760
          }
        ],
        "start": 3726,
        "end": 3761
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
                "start": 3765,
                "end": 3766
              },
              "typeArguments": null,
              "start": 3765,
              "end": 3766
            },
            "start": 3763,
            "end": 3766
          },
          "start": 3762,
          "end": 3766
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3769,
          "end": 3775
        },
        "start": 3767,
        "end": 3775
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3797,
                "end": 3798
              },
              "prefix": true,
              "start": 3790,
              "end": 3798
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 3815,
                  "end": 3823
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3832,
                          "end": 3833
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3834,
                          "end": 3842
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3832,
                        "end": 3842
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 3843,
                          "end": 3844
                        }
                      ],
                      "optional": false,
                      "start": 3832,
                      "end": 3845
                    },
                    "start": 3825,
                    "end": 3846
                  }
                ],
                "start": 3810,
                "end": 3846
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 3860,
                  "end": 3868
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3877,
                      "end": 3878
                    },
                    "start": 3870,
                    "end": 3879
                  }
                ],
                "start": 3855,
                "end": 3879
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 3893,
                  "end": 3903
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3913,
                          "end": 3914
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "L",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3918,
                            "end": 3919
                          },
                          "typeArguments": null,
                          "start": 3918,
                          "end": 3919
                        },
                        "start": 3913,
                        "end": 3919
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 3921,
                          "end": 3923
                        }
                      ],
                      "optional": false,
                      "start": 3912,
                      "end": 3924
                    },
                    "start": 3905,
                    "end": 3925
                  }
                ],
                "start": 3888,
                "end": 3925
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 3963,
                  "end": 3971
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3981,
                          "end": 3982
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3986,
                            "end": 3987
                          },
                          "typeArguments": null,
                          "start": 3986,
                          "end": 3987
                        },
                        "start": 3981,
                        "end": 3987
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3989,
                        "end": 3990
                      },
                      "optional": false,
                      "computed": false,
                      "start": 3980,
                      "end": 3990
                    },
                    "start": 3973,
                    "end": 3991
                  }
                ],
                "start": 3958,
                "end": 3991
              }
            ],
            "start": 3782,
            "end": 4032
          }
        ],
        "start": 3776,
        "end": 4034
      },
      "expression": false,
      "start": 3693,
      "end": 4034
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleGeneric",
        "optional": false,
        "typeAnnotation": null,
        "start": 4045,
        "end": 4060
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 4061,
              "end": 4062
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 4071,
                "end": 4072
              },
              "typeArguments": null,
              "start": 4071,
              "end": 4072
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4061,
            "end": 4072
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4074,
              "end": 4075
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 4084,
                "end": 4085
              },
              "typeArguments": null,
              "start": 4084,
              "end": 4085
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4074,
            "end": 4085
          }
        ],
        "start": 4060,
        "end": 4086
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xy",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4091,
                    "end": 4092
                  },
                  "typeArguments": null,
                  "start": 4091,
                  "end": 4092
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4095,
                    "end": 4096
                  },
                  "typeArguments": null,
                  "start": 4095,
                  "end": 4096
                }
              ],
              "start": 4091,
              "end": 4096
            },
            "start": 4089,
            "end": 4096
          },
          "start": 4087,
          "end": 4096
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4100,
                    "end": 4101
                  },
                  "typeArguments": null,
                  "start": 4100,
                  "end": 4101
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4103,
                  "end": 4109
                }
              ],
              "start": 4099,
              "end": 4110
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4114,
                    "end": 4115
                  },
                  "typeArguments": null,
                  "start": 4114,
                  "end": 4115
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4117,
                  "end": 4123
                }
              ],
              "start": 4113,
              "end": 4124
            }
          ],
          "start": 4099,
          "end": 4124
        },
        "start": 4097,
        "end": 4124
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null,
                "start": 4146,
                "end": 4148
              },
              "prefix": true,
              "start": 4139,
              "end": 4148
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 4165,
                  "end": 4175
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4185,
                          "end": 4187
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4189,
                            "end": 4191
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 4192,
                              "end": 4194
                            }
                          ],
                          "optional": false,
                          "start": 4189,
                          "end": 4195
                        }
                      ],
                      "start": 4184,
                      "end": 4196
                    },
                    "start": 4177,
                    "end": 4197
                  }
                ],
                "start": 4160,
                "end": 4197
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 4211,
                  "end": 4219
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4229,
                          "end": 4231
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4233,
                            "end": 4235
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4236,
                            "end": 4237
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4233,
                          "end": 4237
                        }
                      ],
                      "start": 4228,
                      "end": 4238
                    },
                    "start": 4221,
                    "end": 4239
                  }
                ],
                "start": 4206,
                "end": 4239
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4264,
                        "end": 4275
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4276,
                          "end": 4278
                        }
                      ],
                      "optional": false,
                      "start": 4264,
                      "end": 4279
                    },
                    "start": 4257,
                    "end": 4280
                  }
                ],
                "start": 4248,
                "end": 4280
              }
            ],
            "start": 4131,
            "end": 4286
          }
        ],
        "start": 4125,
        "end": 4288
      },
      "expression": false,
      "start": 4036,
      "end": 4288
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleGenericFuse",
        "optional": false,
        "typeAnnotation": null,
        "start": 4299,
        "end": 4318
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 4319,
              "end": 4320
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4329,
                    "end": 4330
                  },
                  "typeArguments": null,
                  "start": 4329,
                  "end": 4330
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4333,
                  "end": 4339
                }
              ],
              "start": 4329,
              "end": 4339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4319,
            "end": 4339
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4341,
              "end": 4342
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4351,
                    "end": 4352
                  },
                  "typeArguments": null,
                  "start": 4351,
                  "end": 4352
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4355,
                  "end": 4361
                }
              ],
              "start": 4351,
              "end": 4361
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4341,
            "end": 4361
          }
        ],
        "start": 4318,
        "end": 4362
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xy",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4367,
                    "end": 4368
                  },
                  "typeArguments": null,
                  "start": 4367,
                  "end": 4368
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4371,
                    "end": 4372
                  },
                  "typeArguments": null,
                  "start": 4371,
                  "end": 4372
                }
              ],
              "start": 4367,
              "end": 4372
            },
            "start": 4365,
            "end": 4372
          },
          "start": 4363,
          "end": 4372
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4376,
                    "end": 4377
                  },
                  "typeArguments": null,
                  "start": 4376,
                  "end": 4377
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4379,
                  "end": 4385
                }
              ],
              "start": 4375,
              "end": 4386
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4390,
                    "end": 4391
                  },
                  "typeArguments": null,
                  "start": 4390,
                  "end": 4391
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4393,
                  "end": 4399
                }
              ],
              "start": 4389,
              "end": 4400
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4405,
                        "end": 4406
                      },
                      "typeArguments": null,
                      "start": 4405,
                      "end": 4406
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4409,
                        "end": 4410
                      },
                      "typeArguments": null,
                      "start": 4409,
                      "end": 4410
                    }
                  ],
                  "start": 4405,
                  "end": 4410
                }
              ],
              "start": 4403,
              "end": 4412
            }
          ],
          "start": 4375,
          "end": 4412
        },
        "start": 4373,
        "end": 4412
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null,
                "start": 4434,
                "end": 4436
              },
              "prefix": true,
              "start": 4427,
              "end": 4436
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 4453,
                  "end": 4463
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4473,
                          "end": 4475
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 4477,
                          "end": 4478
                        }
                      ],
                      "start": 4472,
                      "end": 4479
                    },
                    "start": 4465,
                    "end": 4480
                  }
                ],
                "start": 4448,
                "end": 4480
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 4494,
                  "end": 4502
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4512,
                          "end": 4514
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 4516,
                          "end": 4521
                        }
                      ],
                      "start": 4511,
                      "end": 4522
                    },
                    "start": 4504,
                    "end": 4523
                  }
                ],
                "start": 4489,
                "end": 4523
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 4537,
                  "end": 4545
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4555,
                          "end": 4557
                        }
                      ],
                      "start": 4554,
                      "end": 4558
                    },
                    "start": 4547,
                    "end": 4558
                  }
                ],
                "start": 4532,
                "end": 4558
              }
            ],
            "start": 4419,
            "end": 4564
          }
        ],
        "start": 4413,
        "end": 4566
      },
      "expression": false,
      "start": 4290,
      "end": 4566
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleGenericExhaustive",
        "optional": false,
        "typeAnnotation": null,
        "start": 4577,
        "end": 4602
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 4603,
              "end": 4604
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null,
                "start": 4613,
                "end": 4614
              },
              "typeArguments": null,
              "start": 4613,
              "end": 4614
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4603,
            "end": 4614
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4616,
              "end": 4617
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 4626,
                "end": 4627
              },
              "typeArguments": null,
              "start": 4626,
              "end": 4627
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4616,
            "end": 4627
          }
        ],
        "start": 4602,
        "end": 4628
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xy",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4633,
                    "end": 4634
                  },
                  "typeArguments": null,
                  "start": 4633,
                  "end": 4634
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4637,
                    "end": 4638
                  },
                  "typeArguments": null,
                  "start": 4637,
                  "end": 4638
                }
              ],
              "start": 4633,
              "end": 4638
            },
            "start": 4631,
            "end": 4638
          },
          "start": 4629,
          "end": 4638
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4642,
                    "end": 4643
                  },
                  "typeArguments": null,
                  "start": 4642,
                  "end": 4643
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4645,
                  "end": 4651
                }
              ],
              "start": 4641,
              "end": 4652
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4656,
                    "end": 4657
                  },
                  "typeArguments": null,
                  "start": 4656,
                  "end": 4657
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4659,
                  "end": 4665
                }
              ],
              "start": 4655,
              "end": 4666
            }
          ],
          "start": 4641,
          "end": 4666
        },
        "start": 4639,
        "end": 4666
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null,
                "start": 4688,
                "end": 4690
              },
              "prefix": true,
              "start": 4681,
              "end": 4690
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 4707,
                  "end": 4715
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4725,
                          "end": 4727
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4729,
                            "end": 4731
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4732,
                            "end": 4733
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4729,
                          "end": 4733
                        }
                      ],
                      "start": 4724,
                      "end": 4734
                    },
                    "start": 4717,
                    "end": 4735
                  }
                ],
                "start": 4702,
                "end": 4735
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 4749,
                  "end": 4759
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4769,
                          "end": 4771
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4773,
                            "end": 4775
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 4776,
                              "end": 4778
                            }
                          ],
                          "optional": false,
                          "start": 4773,
                          "end": 4779
                        }
                      ],
                      "start": 4768,
                      "end": 4780
                    },
                    "start": 4761,
                    "end": 4781
                  }
                ],
                "start": 4744,
                "end": 4781
              }
            ],
            "start": 4673,
            "end": 4787
          }
        ],
        "start": 4667,
        "end": 4789
      },
      "expression": false,
      "start": 4568,
      "end": 4789
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchOrdering",
        "optional": false,
        "typeAnnotation": null,
        "start": 4800,
        "end": 4814
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
                  "start": 4818,
                  "end": 4824
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4827,
                  "end": 4833
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 4836,
                  "end": 4843
                }
              ],
              "start": 4818,
              "end": 4843
            },
            "start": 4816,
            "end": 4843
          },
          "start": 4815,
          "end": 4843
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 4866,
                "end": 4867
              },
              "prefix": true,
              "start": 4859,
              "end": 4867
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 4884,
                  "end": 4892
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4901,
                        "end": 4913
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4914,
                          "end": 4915
                        }
                      ],
                      "optional": false,
                      "start": 4901,
                      "end": 4916
                    },
                    "start": 4894,
                    "end": 4917
                  }
                ],
                "start": 4879,
                "end": 4917
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 4931,
                  "end": 4939
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4948,
                        "end": 4960
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4961,
                          "end": 4962
                        }
                      ],
                      "optional": false,
                      "start": 4948,
                      "end": 4963
                    },
                    "start": 4941,
                    "end": 4964
                  }
                ],
                "start": 4926,
                "end": 4964
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 4978,
                  "end": 4987
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4996,
                        "end": 5009
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5010,
                          "end": 5011
                        }
                      ],
                      "optional": false,
                      "start": 4996,
                      "end": 5012
                    },
                    "start": 4989,
                    "end": 5013
                  }
                ],
                "start": 4973,
                "end": 5013
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5027,
                  "end": 5035
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5044,
                        "end": 5055
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5056,
                          "end": 5057
                        }
                      ],
                      "optional": false,
                      "start": 5044,
                      "end": 5058
                    },
                    "start": 5037,
                    "end": 5059
                  }
                ],
                "start": 5022,
                "end": 5059
              }
            ],
            "start": 4851,
            "end": 5065
          }
        ],
        "start": 4845,
        "end": 5067
      },
      "expression": false,
      "start": 4791,
      "end": 5067
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "switchOrderingWithDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 5078,
        "end": 5103
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
                  "start": 5107,
                  "end": 5113
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 5116,
                  "end": 5122
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 5125,
                  "end": 5132
                }
              ],
              "start": 5107,
              "end": 5132
            },
            "start": 5105,
            "end": 5132
          },
          "start": 5104,
          "end": 5132
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "local",
              "optional": false,
              "typeAnnotation": null,
              "start": 5149,
              "end": 5154
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
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
                        "start": 5158,
                        "end": 5164
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 5167,
                        "end": 5173
                      },
                      {
                        "type": "TSBooleanKeyword",
                        "start": 5176,
                        "end": 5183
                      }
                    ],
                    "start": 5158,
                    "end": 5183
                  },
                  "start": 5156,
                  "end": 5183
                },
                "start": 5155,
                "end": 5183
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5202,
                    "end": 5203
                  },
                  "start": 5195,
                  "end": 5204
                }
              ],
              "start": 5185,
              "end": 5210
            },
            "expression": false,
            "start": 5140,
            "end": 5210
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5230,
                "end": 5231
              },
              "prefix": true,
              "start": 5223,
              "end": 5231
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 5248,
                  "end": 5256
                },
                "consequent": [],
                "start": 5243,
                "end": 5257
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5271,
                  "end": 5279
                },
                "consequent": [],
                "start": 5266,
                "end": 5280
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "local",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5305,
                        "end": 5310
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5311,
                          "end": 5312
                        }
                      ],
                      "optional": false,
                      "start": 5305,
                      "end": 5313
                    },
                    "start": 5298,
                    "end": 5313
                  }
                ],
                "start": 5289,
                "end": 5313
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 5327,
                  "end": 5335
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5344,
                        "end": 5355
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5356,
                          "end": 5357
                        }
                      ],
                      "optional": false,
                      "start": 5344,
                      "end": 5358
                    },
                    "start": 5337,
                    "end": 5359
                  }
                ],
                "start": 5322,
                "end": 5359
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5373,
                  "end": 5381
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5390,
                        "end": 5401
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5402,
                          "end": 5403
                        }
                      ],
                      "optional": false,
                      "start": 5390,
                      "end": 5404
                    },
                    "start": 5383,
                    "end": 5405
                  }
                ],
                "start": 5368,
                "end": 5405
              }
            ],
            "start": 5215,
            "end": 5411
          }
        ],
        "start": 5134,
        "end": 5413
      },
      "expression": false,
      "start": 5069,
      "end": 5413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fallThroughTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 5424,
        "end": 5439
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
                  "start": 5443,
                  "end": 5449
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 5452,
                  "end": 5458
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 5461,
                  "end": 5468
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 5471,
                  "end": 5477
                }
              ],
              "start": 5443,
              "end": 5477
            },
            "start": 5441,
            "end": 5477
          },
          "start": 5440,
          "end": 5477
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5500,
                "end": 5501
              },
              "prefix": true,
              "start": 5493,
              "end": 5501
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5518,
                  "end": 5526
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5540,
                        "end": 5552
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5553,
                          "end": 5554
                        }
                      ],
                      "optional": false,
                      "start": 5540,
                      "end": 5555
                    },
                    "directive": null,
                    "start": 5540,
                    "end": 5555
                  }
                ],
                "start": 5513,
                "end": 5555
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 5569,
                  "end": 5577
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertStringOrNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5591,
                        "end": 5611
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5612,
                          "end": 5613
                        }
                      ],
                      "optional": false,
                      "start": 5591,
                      "end": 5614
                    },
                    "directive": null,
                    "start": 5591,
                    "end": 5614
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 5627,
                    "end": 5633
                  }
                ],
                "start": 5564,
                "end": 5633
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5663,
                        "end": 5675
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5676,
                          "end": 5677
                        }
                      ],
                      "optional": false,
                      "start": 5663,
                      "end": 5678
                    },
                    "directive": null,
                    "start": 5663,
                    "end": 5679
                  }
                ],
                "start": 5642,
                "end": 5679
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5693,
                  "end": 5701
                },
                "consequent": [],
                "start": 5688,
                "end": 5702
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 5716,
                  "end": 5725
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBooleanOrObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5739,
                        "end": 5760
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5761,
                          "end": 5762
                        }
                      ],
                      "optional": false,
                      "start": 5739,
                      "end": 5763
                    },
                    "directive": null,
                    "start": 5739,
                    "end": 5764
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 5777,
                    "end": 5783
                  }
                ],
                "start": 5711,
                "end": 5783
              }
            ],
            "start": 5485,
            "end": 5789
          }
        ],
        "start": 5479,
        "end": 5791
      },
      "expression": false,
      "start": 5415,
      "end": 5791
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unknownNarrowing",
        "optional": false,
        "typeAnnotation": null,
        "start": 5802,
        "end": 5818
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
              "type": "TSUnknownKeyword",
              "start": 5822,
              "end": 5829
            },
            "start": 5820,
            "end": 5829
          },
          "start": 5819,
          "end": 5829
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 5852,
                "end": 5853
              },
              "prefix": true,
              "start": 5845,
              "end": 5853
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 5870,
                  "end": 5878
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5880,
                        "end": 5892
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5893,
                          "end": 5894
                        }
                      ],
                      "optional": false,
                      "start": 5880,
                      "end": 5895
                    },
                    "directive": null,
                    "start": 5880,
                    "end": 5896
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 5897,
                    "end": 5904
                  }
                ],
                "start": 5865,
                "end": 5904
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 5918,
                  "end": 5927
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5929,
                        "end": 5942
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5943,
                          "end": 5944
                        }
                      ],
                      "optional": false,
                      "start": 5929,
                      "end": 5945
                    },
                    "directive": null,
                    "start": 5929,
                    "end": 5946
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 5947,
                    "end": 5954
                  }
                ],
                "start": 5913,
                "end": 5954
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 5968,
                  "end": 5978
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5980,
                        "end": 5994
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5995,
                          "end": 5996
                        }
                      ],
                      "optional": false,
                      "start": 5980,
                      "end": 5997
                    },
                    "directive": null,
                    "start": 5980,
                    "end": 5998
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 5999,
                    "end": 6006
                  }
                ],
                "start": 5963,
                "end": 6006
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 6020,
                  "end": 6028
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6030,
                        "end": 6042
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6043,
                          "end": 6044
                        }
                      ],
                      "optional": false,
                      "start": 6030,
                      "end": 6045
                    },
                    "directive": null,
                    "start": 6030,
                    "end": 6046
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6047,
                    "end": 6054
                  }
                ],
                "start": 6015,
                "end": 6054
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 6068,
                  "end": 6076
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertObjectOrNull",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6078,
                        "end": 6096
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6097,
                          "end": 6098
                        }
                      ],
                      "optional": false,
                      "start": 6078,
                      "end": 6099
                    },
                    "directive": null,
                    "start": 6078,
                    "end": 6100
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6101,
                    "end": 6108
                  }
                ],
                "start": 6063,
                "end": 6108
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 6122,
                  "end": 6130
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6132,
                        "end": 6144
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6145,
                          "end": 6146
                        }
                      ],
                      "optional": false,
                      "start": 6132,
                      "end": 6147
                    },
                    "directive": null,
                    "start": 6132,
                    "end": 6148
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6149,
                    "end": 6156
                  }
                ],
                "start": 6117,
                "end": 6156
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "'undefined'",
                  "start": 6170,
                  "end": 6181
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6183,
                        "end": 6198
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6199,
                          "end": 6200
                        }
                      ],
                      "optional": false,
                      "start": 6183,
                      "end": 6201
                    },
                    "directive": null,
                    "start": 6183,
                    "end": 6202
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6203,
                    "end": 6210
                  }
                ],
                "start": 6165,
                "end": 6210
              }
            ],
            "start": 5837,
            "end": 6216
          }
        ],
        "start": 5831,
        "end": 6218
      },
      "expression": false,
      "start": 5793,
      "end": 6218
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keyofNarrowing",
        "optional": false,
        "typeAnnotation": null,
        "start": 6229,
        "end": 6243
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 6244,
              "end": 6245
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 6257,
                "end": 6258
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6268,
                    "end": 6269
                  },
                  "typeArguments": null,
                  "start": 6268,
                  "end": 6269
                },
                "start": 6262,
                "end": 6269
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6272,
                "end": 6278
              },
              "optional": false,
              "readonly": null,
              "start": 6254,
              "end": 6280
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6244,
            "end": 6280
          }
        ],
        "start": 6243,
        "end": 6281
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6291,
                  "end": 6292
                },
                "typeArguments": null,
                "start": 6291,
                "end": 6292
              },
              "start": 6285,
              "end": 6292
            },
            "start": 6283,
            "end": 6292
          },
          "start": 6282,
          "end": 6292
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "assertKeyofS",
              "optional": false,
              "typeAnnotation": null,
              "start": 6309,
              "end": 6321
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6332,
                        "end": 6333
                      },
                      "typeArguments": null,
                      "start": 6332,
                      "end": 6333
                    },
                    "start": 6326,
                    "end": 6333
                  },
                  "start": 6324,
                  "end": 6333
                },
                "start": 6322,
                "end": 6333
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 6335,
              "end": 6338
            },
            "expression": false,
            "start": 6300,
            "end": 6338
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 6358,
                "end": 6359
              },
              "prefix": true,
              "start": 6351,
              "end": 6359
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 6376,
                  "end": 6384
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6386,
                        "end": 6398
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6399,
                          "end": 6400
                        }
                      ],
                      "optional": false,
                      "start": 6386,
                      "end": 6401
                    },
                    "directive": null,
                    "start": 6386,
                    "end": 6402
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6403,
                        "end": 6415
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6416,
                          "end": 6417
                        }
                      ],
                      "optional": false,
                      "start": 6403,
                      "end": 6418
                    },
                    "directive": null,
                    "start": 6403,
                    "end": 6419
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6420,
                    "end": 6427
                  }
                ],
                "start": 6371,
                "end": 6427
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 6441,
                  "end": 6449
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6451,
                        "end": 6463
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6464,
                          "end": 6465
                        }
                      ],
                      "optional": false,
                      "start": 6451,
                      "end": 6466
                    },
                    "directive": null,
                    "start": 6451,
                    "end": 6467
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6468,
                        "end": 6480
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6481,
                          "end": 6482
                        }
                      ],
                      "optional": false,
                      "start": 6468,
                      "end": 6483
                    },
                    "directive": null,
                    "start": 6468,
                    "end": 6484
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6485,
                    "end": 6492
                  }
                ],
                "start": 6436,
                "end": 6492
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 6506,
                  "end": 6514
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6516,
                        "end": 6528
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6529,
                          "end": 6530
                        }
                      ],
                      "optional": false,
                      "start": 6516,
                      "end": 6531
                    },
                    "directive": null,
                    "start": 6516,
                    "end": 6532
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6533,
                        "end": 6545
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6546,
                          "end": 6547
                        }
                      ],
                      "optional": false,
                      "start": 6533,
                      "end": 6548
                    },
                    "directive": null,
                    "start": 6533,
                    "end": 6549
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6550,
                    "end": 6557
                  }
                ],
                "start": 6501,
                "end": 6557
              }
            ],
            "start": 6343,
            "end": 6563
          }
        ],
        "start": 6294,
        "end": 6565
      },
      "expression": false,
      "start": 6220,
      "end": 6565
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrowingNarrows",
        "optional": false,
        "typeAnnotation": null,
        "start": 6576,
        "end": 6592
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
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 6596,
                  "end": 6598
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6601,
                  "end": 6610
                }
              ],
              "start": 6596,
              "end": 6610
            },
            "start": 6594,
            "end": 6610
          },
          "start": 6593,
          "end": 6610
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 6633,
                "end": 6634
              },
              "prefix": true,
              "start": 6626,
              "end": 6634
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 6651,
                  "end": 6659
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6661,
                        "end": 6673
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6674,
                          "end": 6675
                        }
                      ],
                      "optional": false,
                      "start": 6661,
                      "end": 6676
                    },
                    "directive": null,
                    "start": 6661,
                    "end": 6677
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6678,
                    "end": 6685
                  }
                ],
                "start": 6646,
                "end": 6685
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 6699,
                  "end": 6708
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6710,
                        "end": 6723
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6724,
                          "end": 6725
                        }
                      ],
                      "optional": false,
                      "start": 6710,
                      "end": 6726
                    },
                    "directive": null,
                    "start": 6710,
                    "end": 6727
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6728,
                    "end": 6735
                  }
                ],
                "start": 6694,
                "end": 6735
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 6749,
                  "end": 6759
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6761,
                        "end": 6775
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6776,
                          "end": 6777
                        }
                      ],
                      "optional": false,
                      "start": 6761,
                      "end": 6778
                    },
                    "directive": null,
                    "start": 6761,
                    "end": 6779
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6780,
                    "end": 6787
                  }
                ],
                "start": 6744,
                "end": 6787
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 6801,
                  "end": 6809
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6811,
                        "end": 6823
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6824,
                          "end": 6825
                        }
                      ],
                      "optional": false,
                      "start": 6811,
                      "end": 6826
                    },
                    "directive": null,
                    "start": 6811,
                    "end": 6827
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6828,
                    "end": 6835
                  }
                ],
                "start": 6796,
                "end": 6835
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 6849,
                  "end": 6857
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 6868,
                              "end": 6870
                            },
                            "start": 6866,
                            "end": 6870
                          },
                          "start": 6865,
                          "end": 6870
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6873,
                          "end": 6874
                        },
                        "definite": false,
                        "start": 6865,
                        "end": 6874
                      }
                    ],
                    "declare": false,
                    "start": 6859,
                    "end": 6875
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6876,
                    "end": 6883
                  }
                ],
                "start": 6844,
                "end": 6883
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 6897,
                  "end": 6905
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6907,
                        "end": 6919
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6920,
                          "end": 6921
                        }
                      ],
                      "optional": false,
                      "start": 6907,
                      "end": 6922
                    },
                    "directive": null,
                    "start": 6907,
                    "end": 6923
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6924,
                    "end": 6931
                  }
                ],
                "start": 6892,
                "end": 6931
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "'undefined'",
                  "start": 6945,
                  "end": 6956
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6958,
                        "end": 6973
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6974,
                          "end": 6975
                        }
                      ],
                      "optional": false,
                      "start": 6958,
                      "end": 6976
                    },
                    "directive": null,
                    "start": 6958,
                    "end": 6977
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 6978,
                    "end": 6985
                  }
                ],
                "start": 6940,
                "end": 6985
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 6999,
                  "end": 7007
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7009,
                        "end": 7020
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7021,
                          "end": 7022
                        }
                      ],
                      "optional": false,
                      "start": 7009,
                      "end": 7023
                    },
                    "directive": null,
                    "start": 7009,
                    "end": 7024
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7025,
                    "end": 7032
                  }
                ],
                "start": 6994,
                "end": 7032
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 7060,
                              "end": 7062
                            },
                            "start": 7058,
                            "end": 7062
                          },
                          "start": 7056,
                          "end": 7062
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7065,
                          "end": 7066
                        },
                        "definite": false,
                        "start": 7056,
                        "end": 7066
                      }
                    ],
                    "declare": false,
                    "start": 7050,
                    "end": 7067
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7068,
                    "end": 7075
                  }
                ],
                "start": 7041,
                "end": 7075
              }
            ],
            "start": 6618,
            "end": 7081
          }
        ],
        "start": 6612,
        "end": 7083
      },
      "expression": false,
      "start": 6567,
      "end": 7083
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "narrowingNarrows2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7094,
        "end": 7111
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
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 7115,
                    "end": 7119
                  },
                  "start": 7115,
                  "end": 7119
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 7122,
                    "end": 7123
                  },
                  "start": 7122,
                  "end": 7123
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "'hello'",
                    "start": 7126,
                    "end": 7133
                  },
                  "start": 7126,
                  "end": 7133
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7136,
                  "end": 7145
                }
              ],
              "start": 7115,
              "end": 7145
            },
            "start": 7113,
            "end": 7145
          },
          "start": 7112,
          "end": 7145
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 7168,
                "end": 7169
              },
              "prefix": true,
              "start": 7161,
              "end": 7169
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 7186,
                  "end": 7194
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7196,
                        "end": 7208
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7209,
                          "end": 7210
                        }
                      ],
                      "optional": false,
                      "start": 7196,
                      "end": 7211
                    },
                    "directive": null,
                    "start": 7196,
                    "end": 7212
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7213,
                    "end": 7220
                  }
                ],
                "start": 7181,
                "end": 7220
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "boolean",
                  "raw": "'boolean'",
                  "start": 7234,
                  "end": 7243
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7245,
                        "end": 7258
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7259,
                          "end": 7260
                        }
                      ],
                      "optional": false,
                      "start": 7245,
                      "end": 7261
                    },
                    "directive": null,
                    "start": 7245,
                    "end": 7262
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7263,
                    "end": 7270
                  }
                ],
                "start": 7229,
                "end": 7270
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "function",
                  "raw": "'function'",
                  "start": 7284,
                  "end": 7294
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7296,
                        "end": 7307
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7308,
                          "end": 7309
                        }
                      ],
                      "optional": false,
                      "start": 7296,
                      "end": 7310
                    },
                    "directive": null,
                    "start": 7296,
                    "end": 7311
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7312,
                    "end": 7319
                  }
                ],
                "start": 7279,
                "end": 7319
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "symbol",
                  "raw": "'symbol'",
                  "start": 7333,
                  "end": 7341
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7343,
                        "end": 7354
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7355,
                          "end": 7356
                        }
                      ],
                      "optional": false,
                      "start": 7343,
                      "end": 7357
                    },
                    "directive": null,
                    "start": 7343,
                    "end": 7358
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7359,
                    "end": 7366
                  }
                ],
                "start": 7328,
                "end": 7366
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 7380,
                  "end": 7388
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 7399,
                              "end": 7401
                            },
                            "start": 7397,
                            "end": 7401
                          },
                          "start": 7396,
                          "end": 7401
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "assertNever",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7404,
                            "end": 7415
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7416,
                              "end": 7417
                            }
                          ],
                          "optional": false,
                          "start": 7404,
                          "end": 7418
                        },
                        "definite": false,
                        "start": 7396,
                        "end": 7418
                      }
                    ],
                    "declare": false,
                    "start": 7390,
                    "end": 7419
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7420,
                    "end": 7427
                  }
                ],
                "start": 7375,
                "end": 7427
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "'string'",
                  "start": 7441,
                  "end": 7449
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7451,
                        "end": 7463
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7464,
                          "end": 7465
                        }
                      ],
                      "optional": false,
                      "start": 7451,
                      "end": 7466
                    },
                    "directive": null,
                    "start": 7451,
                    "end": 7467
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7468,
                    "end": 7475
                  }
                ],
                "start": 7436,
                "end": 7475
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "undefined",
                  "raw": "'undefined'",
                  "start": 7489,
                  "end": 7500
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7502,
                        "end": 7517
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7518,
                          "end": 7519
                        }
                      ],
                      "optional": false,
                      "start": 7502,
                      "end": 7520
                    },
                    "directive": null,
                    "start": 7502,
                    "end": 7521
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7522,
                    "end": 7529
                  }
                ],
                "start": 7484,
                "end": 7529
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "number",
                  "raw": "'number'",
                  "start": 7543,
                  "end": 7551
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7553,
                        "end": 7564
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7565,
                          "end": 7566
                        }
                      ],
                      "optional": false,
                      "start": 7553,
                      "end": 7567
                    },
                    "directive": null,
                    "start": 7553,
                    "end": 7568
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7569,
                    "end": 7576
                  }
                ],
                "start": 7538,
                "end": 7576
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [],
                              "start": 7604,
                              "end": 7606
                            },
                            "start": 7602,
                            "end": 7606
                          },
                          "start": 7600,
                          "end": 7606
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "assertNever",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7609,
                            "end": 7620
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7621,
                              "end": 7622
                            }
                          ],
                          "optional": false,
                          "start": 7609,
                          "end": 7623
                        },
                        "definite": false,
                        "start": 7600,
                        "end": 7623
                      }
                    ],
                    "declare": false,
                    "start": 7594,
                    "end": 7624
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7625,
                    "end": 7632
                  }
                ],
                "start": 7585,
                "end": 7632
              }
            ],
            "start": 7153,
            "end": 7638
          }
        ],
        "start": 7147,
        "end": 7640
      },
      "expression": false,
      "start": 7085,
      "end": 7640
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testUnionWithTempalte",
        "optional": false,
        "typeAnnotation": null,
        "start": 7676,
        "end": 7697
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null,
                "start": 7701,
                "end": 7706
              },
              "typeArguments": null,
              "start": 7701,
              "end": 7706
            },
            "start": 7699,
            "end": 7706
          },
          "start": 7698,
          "end": 7706
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 7729,
                "end": 7730
              },
              "prefix": true,
              "start": 7722,
              "end": 7730
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true,
                      "start": 7747,
                      "end": 7755
                    }
                  ],
                  "expressions": [],
                  "start": 7747,
                  "end": 7755
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7757,
                        "end": 7769
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7770,
                          "end": 7771
                        }
                      ],
                      "optional": false,
                      "start": 7757,
                      "end": 7772
                    },
                    "directive": null,
                    "start": 7757,
                    "end": 7773
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7774,
                    "end": 7781
                  }
                ],
                "start": 7742,
                "end": 7781
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "boolean",
                        "cooked": "boolean"
                      },
                      "tail": true,
                      "start": 7795,
                      "end": 7804
                    }
                  ],
                  "expressions": [],
                  "start": 7795,
                  "end": 7804
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7806,
                        "end": 7819
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7820,
                          "end": 7821
                        }
                      ],
                      "optional": false,
                      "start": 7806,
                      "end": 7822
                    },
                    "directive": null,
                    "start": 7806,
                    "end": 7823
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7824,
                    "end": 7831
                  }
                ],
                "start": 7790,
                "end": 7831
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "function",
                        "cooked": "function"
                      },
                      "tail": true,
                      "start": 7845,
                      "end": 7855
                    }
                  ],
                  "expressions": [],
                  "start": 7845,
                  "end": 7855
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7857,
                        "end": 7871
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7872,
                          "end": 7873
                        }
                      ],
                      "optional": false,
                      "start": 7857,
                      "end": 7874
                    },
                    "directive": null,
                    "start": 7857,
                    "end": 7875
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7876,
                    "end": 7883
                  }
                ],
                "start": 7840,
                "end": 7883
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "symbol",
                        "cooked": "symbol"
                      },
                      "tail": true,
                      "start": 7897,
                      "end": 7905
                    }
                  ],
                  "expressions": [],
                  "start": 7897,
                  "end": 7905
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7907,
                        "end": 7919
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7920,
                          "end": 7921
                        }
                      ],
                      "optional": false,
                      "start": 7907,
                      "end": 7922
                    },
                    "directive": null,
                    "start": 7907,
                    "end": 7923
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7924,
                    "end": 7931
                  }
                ],
                "start": 7892,
                "end": 7931
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "object",
                        "cooked": "object"
                      },
                      "tail": true,
                      "start": 7945,
                      "end": 7953
                    }
                  ],
                  "expressions": [],
                  "start": 7945,
                  "end": 7953
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7955,
                        "end": 7967
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7968,
                          "end": 7969
                        }
                      ],
                      "optional": false,
                      "start": 7955,
                      "end": 7970
                    },
                    "directive": null,
                    "start": 7955,
                    "end": 7971
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 7972,
                    "end": 7979
                  }
                ],
                "start": 7940,
                "end": 7979
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "string",
                        "cooked": "string"
                      },
                      "tail": true,
                      "start": 7993,
                      "end": 8001
                    }
                  ],
                  "expressions": [],
                  "start": 7993,
                  "end": 8001
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8003,
                        "end": 8015
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8016,
                          "end": 8017
                        }
                      ],
                      "optional": false,
                      "start": 8003,
                      "end": 8018
                    },
                    "directive": null,
                    "start": 8003,
                    "end": 8019
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 8020,
                    "end": 8027
                  }
                ],
                "start": 7988,
                "end": 8027
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "undefined",
                        "cooked": "undefined"
                      },
                      "tail": true,
                      "start": 8041,
                      "end": 8052
                    }
                  ],
                  "expressions": [],
                  "start": 8041,
                  "end": 8052
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8054,
                        "end": 8069
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8070,
                          "end": 8071
                        }
                      ],
                      "optional": false,
                      "start": 8054,
                      "end": 8072
                    },
                    "directive": null,
                    "start": 8054,
                    "end": 8073
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 8074,
                    "end": 8081
                  }
                ],
                "start": 8036,
                "end": 8081
              }
            ],
            "start": 7714,
            "end": 8087
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null,
                "start": 8092,
                "end": 8103
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8104,
                  "end": 8105
                }
              ],
              "optional": false,
              "start": 8092,
              "end": 8106
            },
            "directive": null,
            "start": 8092,
            "end": 8107
          }
        ],
        "start": 7708,
        "end": 8109
      },
      "expression": false,
      "start": 7667,
      "end": 8109
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fallThroughTestWithTempalte",
        "optional": false,
        "typeAnnotation": null,
        "start": 8120,
        "end": 8147
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
                  "start": 8151,
                  "end": 8157
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 8160,
                  "end": 8166
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 8169,
                  "end": 8176
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 8179,
                  "end": 8185
                }
              ],
              "start": 8151,
              "end": 8185
            },
            "start": 8149,
            "end": 8185
          },
          "start": 8148,
          "end": 8185
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 8208,
                "end": 8209
              },
              "prefix": true,
              "start": 8201,
              "end": 8209
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true,
                      "start": 8226,
                      "end": 8234
                    }
                  ],
                  "expressions": [],
                  "start": 8226,
                  "end": 8234
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8248,
                        "end": 8260
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8261,
                          "end": 8262
                        }
                      ],
                      "optional": false,
                      "start": 8248,
                      "end": 8263
                    },
                    "directive": null,
                    "start": 8248,
                    "end": 8263
                  }
                ],
                "start": 8221,
                "end": 8263
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "string",
                        "cooked": "string"
                      },
                      "tail": true,
                      "start": 8277,
                      "end": 8285
                    }
                  ],
                  "expressions": [],
                  "start": 8277,
                  "end": 8285
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertStringOrNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8299,
                        "end": 8319
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8320,
                          "end": 8321
                        }
                      ],
                      "optional": false,
                      "start": 8299,
                      "end": 8322
                    },
                    "directive": null,
                    "start": 8299,
                    "end": 8322
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8335,
                    "end": 8341
                  }
                ],
                "start": 8272,
                "end": 8341
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8371,
                        "end": 8383
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8384,
                          "end": 8385
                        }
                      ],
                      "optional": false,
                      "start": 8371,
                      "end": 8386
                    },
                    "directive": null,
                    "start": 8371,
                    "end": 8387
                  }
                ],
                "start": 8350,
                "end": 8387
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true,
                      "start": 8401,
                      "end": 8409
                    }
                  ],
                  "expressions": [],
                  "start": 8401,
                  "end": 8409
                },
                "consequent": [],
                "start": 8396,
                "end": 8410
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "boolean",
                        "cooked": "boolean"
                      },
                      "tail": true,
                      "start": 8424,
                      "end": 8433
                    }
                  ],
                  "expressions": [],
                  "start": 8424,
                  "end": 8433
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertBooleanOrObject",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8447,
                        "end": 8468
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8469,
                          "end": 8470
                        }
                      ],
                      "optional": false,
                      "start": 8447,
                      "end": 8471
                    },
                    "directive": null,
                    "start": 8447,
                    "end": 8472
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 8485,
                    "end": 8491
                  }
                ],
                "start": 8419,
                "end": 8491
              }
            ],
            "start": 8193,
            "end": 8497
          }
        ],
        "start": 8187,
        "end": 8499
      },
      "expression": false,
      "start": 8111,
      "end": 8499
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "keyofNarrowingWithTemplate",
        "optional": false,
        "typeAnnotation": null,
        "start": 8510,
        "end": 8536
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 8537,
              "end": 8538
            },
            "constraint": {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 8550,
                "end": 8551
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8561,
                    "end": 8562
                  },
                  "typeArguments": null,
                  "start": 8561,
                  "end": 8562
                },
                "start": 8555,
                "end": 8562
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8565,
                "end": 8571
              },
              "optional": false,
              "readonly": null,
              "start": 8547,
              "end": 8573
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8537,
            "end": 8573
          }
        ],
        "start": 8536,
        "end": 8574
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8584,
                  "end": 8585
                },
                "typeArguments": null,
                "start": 8584,
                "end": 8585
              },
              "start": 8578,
              "end": 8585
            },
            "start": 8576,
            "end": 8585
          },
          "start": 8575,
          "end": 8585
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "assertKeyofS",
              "optional": false,
              "typeAnnotation": null,
              "start": 8602,
              "end": 8614
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8625,
                        "end": 8626
                      },
                      "typeArguments": null,
                      "start": 8625,
                      "end": 8626
                    },
                    "start": 8619,
                    "end": 8626
                  },
                  "start": 8617,
                  "end": 8626
                },
                "start": 8615,
                "end": 8626
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 8628,
              "end": 8631
            },
            "expression": false,
            "start": 8593,
            "end": 8631
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null,
                "start": 8651,
                "end": 8652
              },
              "prefix": true,
              "start": 8644,
              "end": 8652
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true,
                      "start": 8669,
                      "end": 8677
                    }
                  ],
                  "expressions": [],
                  "start": 8669,
                  "end": 8677
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8679,
                        "end": 8691
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8692,
                          "end": 8693
                        }
                      ],
                      "optional": false,
                      "start": 8679,
                      "end": 8694
                    },
                    "directive": null,
                    "start": 8679,
                    "end": 8695
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8696,
                        "end": 8708
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8709,
                          "end": 8710
                        }
                      ],
                      "optional": false,
                      "start": 8696,
                      "end": 8711
                    },
                    "directive": null,
                    "start": 8696,
                    "end": 8712
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 8713,
                    "end": 8720
                  }
                ],
                "start": 8664,
                "end": 8720
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "symbol",
                        "cooked": "symbol"
                      },
                      "tail": true,
                      "start": 8734,
                      "end": 8742
                    }
                  ],
                  "expressions": [],
                  "start": 8734,
                  "end": 8742
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8744,
                        "end": 8756
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8757,
                          "end": 8758
                        }
                      ],
                      "optional": false,
                      "start": 8744,
                      "end": 8759
                    },
                    "directive": null,
                    "start": 8744,
                    "end": 8760
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8761,
                        "end": 8773
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8774,
                          "end": 8775
                        }
                      ],
                      "optional": false,
                      "start": 8761,
                      "end": 8776
                    },
                    "directive": null,
                    "start": 8761,
                    "end": 8777
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 8778,
                    "end": 8785
                  }
                ],
                "start": 8729,
                "end": 8785
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "string",
                        "cooked": "string"
                      },
                      "tail": true,
                      "start": 8799,
                      "end": 8807
                    }
                  ],
                  "expressions": [],
                  "start": 8799,
                  "end": 8807
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8809,
                        "end": 8821
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8822,
                          "end": 8823
                        }
                      ],
                      "optional": false,
                      "start": 8809,
                      "end": 8824
                    },
                    "directive": null,
                    "start": 8809,
                    "end": 8825
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8826,
                        "end": 8838
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8839,
                          "end": 8840
                        }
                      ],
                      "optional": false,
                      "start": 8826,
                      "end": 8841
                    },
                    "directive": null,
                    "start": 8826,
                    "end": 8842
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null,
                    "start": 8843,
                    "end": 8850
                  }
                ],
                "start": 8794,
                "end": 8850
              }
            ],
            "start": 8636,
            "end": 8856
          }
        ],
        "start": 8587,
        "end": 8858
      },
      "expression": false,
      "start": 8501,
      "end": 8858
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleGenericFuseWithBoth",
        "optional": false,
        "typeAnnotation": null,
        "start": 8919,
        "end": 8946
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
              "name": "X",
              "optional": false,
              "typeAnnotation": null,
              "start": 8947,
              "end": 8948
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8957,
                    "end": 8958
                  },
                  "typeArguments": null,
                  "start": 8957,
                  "end": 8958
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 8961,
                  "end": 8967
                }
              ],
              "start": 8957,
              "end": 8967
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8947,
            "end": 8967
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 8969,
              "end": 8970
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8979,
                    "end": 8980
                  },
                  "typeArguments": null,
                  "start": 8979,
                  "end": 8980
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 8983,
                  "end": 8989
                }
              ],
              "start": 8979,
              "end": 8989
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8969,
            "end": 8989
          }
        ],
        "start": 8946,
        "end": 8990
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "xy",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8995,
                    "end": 8996
                  },
                  "typeArguments": null,
                  "start": 8995,
                  "end": 8996
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8999,
                    "end": 9000
                  },
                  "typeArguments": null,
                  "start": 8999,
                  "end": 9000
                }
              ],
              "start": 8995,
              "end": 9000
            },
            "start": 8993,
            "end": 9000
          },
          "start": 8991,
          "end": 9000
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9004,
                    "end": 9005
                  },
                  "typeArguments": null,
                  "start": 9004,
                  "end": 9005
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 9007,
                  "end": 9013
                }
              ],
              "start": 9003,
              "end": 9014
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9018,
                    "end": 9019
                  },
                  "typeArguments": null,
                  "start": 9018,
                  "end": 9019
                },
                {
                  "type": "TSStringKeyword",
                  "start": 9021,
                  "end": 9027
                }
              ],
              "start": 9017,
              "end": 9028
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9033,
                        "end": 9034
                      },
                      "typeArguments": null,
                      "start": 9033,
                      "end": 9034
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9037,
                        "end": 9038
                      },
                      "typeArguments": null,
                      "start": 9037,
                      "end": 9038
                    }
                  ],
                  "start": 9033,
                  "end": 9038
                }
              ],
              "start": 9031,
              "end": 9040
            }
          ],
          "start": 9003,
          "end": 9040
        },
        "start": 9001,
        "end": 9040
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null,
                "start": 9062,
                "end": 9064
              },
              "prefix": true,
              "start": 9055,
              "end": 9064
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "function",
                        "cooked": "function"
                      },
                      "tail": true,
                      "start": 9081,
                      "end": 9091
                    }
                  ],
                  "expressions": [],
                  "start": 9081,
                  "end": 9091
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9101,
                          "end": 9103
                        },
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 9105,
                          "end": 9106
                        }
                      ],
                      "start": 9100,
                      "end": 9107
                    },
                    "start": 9093,
                    "end": 9108
                  }
                ],
                "start": 9076,
                "end": 9108
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "object",
                  "raw": "'object'",
                  "start": 9122,
                  "end": 9130
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9140,
                          "end": 9142
                        },
                        {
                          "type": "Literal",
                          "value": "two",
                          "raw": "'two'",
                          "start": 9144,
                          "end": 9149
                        }
                      ],
                      "start": 9139,
                      "end": 9150
                    },
                    "start": 9132,
                    "end": 9151
                  }
                ],
                "start": 9117,
                "end": 9151
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true,
                      "start": 9165,
                      "end": 9173
                    }
                  ],
                  "expressions": [],
                  "start": 9165,
                  "end": 9173
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9183,
                          "end": 9185
                        }
                      ],
                      "start": 9182,
                      "end": 9186
                    },
                    "start": 9175,
                    "end": 9186
                  }
                ],
                "start": 9160,
                "end": 9186
              }
            ],
            "start": 9047,
            "end": 9192
          }
        ],
        "start": 9041,
        "end": 9194
      },
      "expression": false,
      "start": 8910,
      "end": 9194
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 9194
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
    "value": "assertNever",
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
    "value": "x",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 24,
    "end": 29,
    "range": [
      24,
      29
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 50,
    "end": 58,
    "range": [
      50,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 59,
    "end": 71,
    "range": [
      59,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 89,
    "end": 95,
    "range": [
      89,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 111,
    "end": 124,
    "range": [
      111,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125,
    "range": [
      124,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 128,
    "end": 135,
    "range": [
      128,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 143,
    "end": 149,
    "range": [
      143,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 156,
    "end": 164,
    "range": [
      156,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 165,
    "end": 177,
    "range": [
      165,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 208,
    "end": 216,
    "range": [
      208,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 217,
    "end": 229,
    "range": [
      217,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 233,
    "end": 239,
    "range": [
      233,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268,
    "range": [
      260,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 269,
    "end": 283,
    "range": [
      269,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 287,
    "end": 295,
    "range": [
      287,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 303,
    "end": 309,
    "range": [
      303,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 316,
    "end": 324,
    "range": [
      316,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObject",
    "start": 325,
    "end": 337,
    "range": [
      325,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 368,
    "end": 376,
    "range": [
      368,
      376
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObjectOrNull",
    "start": 377,
    "end": 395,
    "range": [
      377,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 399,
    "end": 405,
    "range": [
      399,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 408,
    "end": 412,
    "range": [
      408,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 420,
    "end": 426,
    "range": [
      420,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 433,
    "end": 441,
    "range": [
      433,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 442,
    "end": 457,
    "range": [
      442,
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
    "type": "Identifier",
    "value": "x",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 461,
    "end": 470,
    "range": [
      461,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 478,
    "end": 484,
    "range": [
      478,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 491,
    "end": 499,
    "range": [
      491,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 500,
    "end": 509,
    "range": [
      500,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 513,
    "end": 518,
    "range": [
      513,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 526,
    "end": 532,
    "range": [
      526,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 539,
    "end": 547,
    "range": [
      539,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "assertStringOrNumber",
    "start": 548,
    "end": 568,
    "range": [
      548,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 572,
    "end": 578,
    "range": [
      572,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 581,
    "end": 587,
    "range": [
      581,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 595,
    "end": 601,
    "range": [
      595,
      601
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
    "value": ";",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 608,
    "end": 616,
    "range": [
      608,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBooleanOrObject",
    "start": 617,
    "end": 638,
    "range": [
      617,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 642,
    "end": 649,
    "range": [
      642,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 652,
    "end": 658,
    "range": [
      652,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 666,
    "end": 672,
    "range": [
      666,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 679,
    "end": 683,
    "range": [
      679,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 684,
    "end": 689,
    "range": [
      684,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 692,
    "end": 698,
    "range": [
      692,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 701,
    "end": 708,
    "range": [
      701,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 711,
    "end": 717,
    "range": [
      711,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 720,
    "end": 726,
    "range": [
      720,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 729,
    "end": 735,
    "range": [
      729,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "Function",
    "start": 738,
    "end": 746,
    "range": [
      738,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 749,
    "end": 758,
    "range": [
      749,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 761,
    "end": 769,
    "range": [
      761,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "testUnion",
    "start": 770,
    "end": 779,
    "range": [
      770,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 783,
    "end": 788,
    "range": [
      783,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 796,
    "end": 802,
    "range": [
      796,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 804,
    "end": 810,
    "range": [
      804,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 824,
    "end": 828,
    "range": [
      824,
      828
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 829,
    "end": 837,
    "range": [
      829,
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
    "value": "assertNumber",
    "start": 839,
    "end": 851,
    "range": [
      839,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 856,
    "end": 862,
    "range": [
      856,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 872,
    "end": 876,
    "range": [
      872,
      876
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 877,
    "end": 886,
    "range": [
      877,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 888,
    "end": 901,
    "range": [
      888,
      901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 906,
    "end": 912,
    "range": [
      906,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 912,
    "end": 913,
    "range": [
      912,
      913
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 922,
    "end": 926,
    "range": [
      922,
      926
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 927,
    "end": 937,
    "range": [
      927,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 939,
    "end": 953,
    "range": [
      939,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 953,
    "end": 954,
    "range": [
      953,
      954
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 958,
    "end": 964,
    "range": [
      958,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 974,
    "end": 978,
    "range": [
      974,
      978
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 979,
    "end": 987,
    "range": [
      979,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 989,
    "end": 1001,
    "range": [
      989,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1002,
    "end": 1003,
    "range": [
      1002,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1006,
    "end": 1012,
    "range": [
      1006,
      1012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1012,
    "end": 1013,
    "range": [
      1012,
      1013
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1022,
    "end": 1026,
    "range": [
      1022,
      1026
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 1027,
    "end": 1035,
    "range": [
      1027,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObject",
    "start": 1037,
    "end": 1049,
    "range": [
      1037,
      1049
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1049,
    "end": 1050,
    "range": [
      1049,
      1050
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1054,
    "end": 1060,
    "range": [
      1054,
      1060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1070,
    "end": 1074,
    "range": [
      1070,
      1074
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1075,
    "end": 1083,
    "range": [
      1075,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1083,
    "end": 1084,
    "range": [
      1083,
      1084
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 1085,
    "end": 1097,
    "range": [
      1085,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1098,
    "end": 1099,
    "range": [
      1098,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1102,
    "end": 1108,
    "range": [
      1102,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1118,
    "end": 1122,
    "range": [
      1118,
      1122
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 1123,
    "end": 1134,
    "range": [
      1123,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 1136,
    "end": 1151,
    "range": [
      1136,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1154,
    "end": 1155,
    "range": [
      1154,
      1155
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1156,
    "end": 1162,
    "range": [
      1156,
      1162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1162,
    "end": 1163,
    "range": [
      1162,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 1174,
    "end": 1185,
    "range": [
      1174,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1187,
    "end": 1188,
    "range": [
      1187,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1193,
    "end": 1201,
    "range": [
      1193,
      1201
    ]
  },
  {
    "type": "Identifier",
    "value": "testExtendsUnion",
    "start": 1202,
    "end": 1218,
    "range": [
      1202,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1221,
    "end": 1228,
    "range": [
      1221,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 1229,
    "end": 1234,
    "range": [
      1229,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1248,
    "end": 1254,
    "range": [
      1248,
      1254
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1256,
    "end": 1262,
    "range": [
      1256,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1276,
    "end": 1280,
    "range": [
      1276,
      1280
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 1281,
    "end": 1289,
    "range": [
      1281,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 1291,
    "end": 1303,
    "range": [
      1291,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1306,
    "end": 1307,
    "range": [
      1306,
      1307
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1308,
    "end": 1314,
    "range": [
      1308,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1324,
    "end": 1328,
    "range": [
      1324,
      1328
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 1329,
    "end": 1338,
    "range": [
      1329,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 1340,
    "end": 1353,
    "range": [
      1340,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1355,
    "end": 1356,
    "range": [
      1355,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1356,
    "end": 1357,
    "range": [
      1356,
      1357
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1358,
    "end": 1364,
    "range": [
      1358,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1374,
    "end": 1378,
    "range": [
      1374,
      1378
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1379,
    "end": 1389,
    "range": [
      1379,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 1391,
    "end": 1400,
    "range": [
      1391,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1405,
    "end": 1411,
    "range": [
      1405,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1421,
    "end": 1425,
    "range": [
      1421,
      1425
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 1426,
    "end": 1434,
    "range": [
      1426,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 1436,
    "end": 1448,
    "range": [
      1436,
      1448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1453,
    "end": 1459,
    "range": [
      1453,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1469,
    "end": 1473,
    "range": [
      1469,
      1473
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 1474,
    "end": 1482,
    "range": [
      1474,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 1484,
    "end": 1493,
    "range": [
      1484,
      1493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1494,
    "end": 1495,
    "range": [
      1494,
      1495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1495,
    "end": 1496,
    "range": [
      1495,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1498,
    "end": 1504,
    "range": [
      1498,
      1504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1514,
    "end": 1518,
    "range": [
      1514,
      1518
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1519,
    "end": 1527,
    "range": [
      1519,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 1529,
    "end": 1541,
    "range": [
      1529,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1546,
    "end": 1552,
    "range": [
      1546,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1552,
    "end": 1553,
    "range": [
      1552,
      1553
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1562,
    "end": 1566,
    "range": [
      1562,
      1566
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 1567,
    "end": 1578,
    "range": [
      1567,
      1578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 1580,
    "end": 1595,
    "range": [
      1580,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1598,
    "end": 1599,
    "range": [
      1598,
      1599
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1600,
    "end": 1606,
    "range": [
      1600,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 1618,
    "end": 1627,
    "range": [
      1618,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1627,
    "end": 1628,
    "range": [
      1627,
      1628
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1630,
    "end": 1631,
    "range": [
      1630,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1635,
    "end": 1643,
    "range": [
      1635,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "testAny",
    "start": 1644,
    "end": 1651,
    "range": [
      1644,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1655,
    "end": 1658,
    "range": [
      1655,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1658,
    "end": 1659,
    "range": [
      1658,
      1659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1660,
    "end": 1661,
    "range": [
      1660,
      1661
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1666,
    "end": 1672,
    "range": [
      1666,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1674,
    "end": 1680,
    "range": [
      1674,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1694,
    "end": 1698,
    "range": [
      1694,
      1698
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 1699,
    "end": 1707,
    "range": [
      1699,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 1709,
    "end": 1721,
    "range": [
      1709,
      1721
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1721,
    "end": 1722,
    "range": [
      1721,
      1722
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1722,
    "end": 1723,
    "range": [
      1722,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1726,
    "end": 1732,
    "range": [
      1726,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1742,
    "end": 1746,
    "range": [
      1742,
      1746
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 1747,
    "end": 1756,
    "range": [
      1747,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 1758,
    "end": 1771,
    "range": [
      1758,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1773,
    "end": 1774,
    "range": [
      1773,
      1774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1776,
    "end": 1782,
    "range": [
      1776,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1792,
    "end": 1796,
    "range": [
      1792,
      1796
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 1797,
    "end": 1807,
    "range": [
      1797,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1807,
    "end": 1808,
    "range": [
      1807,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 1809,
    "end": 1823,
    "range": [
      1809,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1828,
    "end": 1834,
    "range": [
      1828,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1844,
    "end": 1848,
    "range": [
      1844,
      1848
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 1849,
    "end": 1857,
    "range": [
      1849,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 1859,
    "end": 1871,
    "range": [
      1859,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1876,
    "end": 1882,
    "range": [
      1876,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1892,
    "end": 1896,
    "range": [
      1892,
      1896
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 1897,
    "end": 1905,
    "range": [
      1897,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObject",
    "start": 1907,
    "end": 1919,
    "range": [
      1907,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1924,
    "end": 1930,
    "range": [
      1924,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1940,
    "end": 1944,
    "range": [
      1940,
      1944
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 1945,
    "end": 1953,
    "range": [
      1945,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 1955,
    "end": 1967,
    "range": [
      1955,
      1967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1972,
    "end": 1978,
    "range": [
      1972,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 1988,
    "end": 1992,
    "range": [
      1988,
      1992
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 1993,
    "end": 2004,
    "range": [
      1993,
      2004
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 2006,
    "end": 2021,
    "range": [
      2006,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2024,
    "end": 2025,
    "range": [
      2024,
      2025
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2026,
    "end": 2032,
    "range": [
      2026,
      2032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2032,
    "end": 2033,
    "range": [
      2032,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 2044,
    "end": 2053,
    "range": [
      2044,
      2053
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2053,
    "end": 2054,
    "range": [
      2053,
      2054
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2071,
    "end": 2079,
    "range": [
      2071,
      2079
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2080,
    "end": 2082,
    "range": [
      2080,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2086,
    "end": 2092,
    "range": [
      2086,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2093,
    "end": 2094,
    "range": [
      2093,
      2094
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2095,
    "end": 2101,
    "range": [
      2095,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2104,
    "end": 2113,
    "range": [
      2104,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2121,
    "end": 2127,
    "range": [
      2121,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2134,
    "end": 2142,
    "range": [
      2134,
      2142
    ]
  },
  {
    "type": "Identifier",
    "value": "testUnionExplicitDefault",
    "start": 2143,
    "end": 2167,
    "range": [
      2143,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 2171,
    "end": 2176,
    "range": [
      2171,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2184,
    "end": 2190,
    "range": [
      2184,
      2190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2191,
    "end": 2192,
    "range": [
      2191,
      2192
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2192,
    "end": 2198,
    "range": [
      2192,
      2198
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2199,
    "end": 2200,
    "range": [
      2199,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2212,
    "end": 2216,
    "range": [
      2212,
      2216
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2217,
    "end": 2225,
    "range": [
      2217,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 2227,
    "end": 2239,
    "range": [
      2227,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2244,
    "end": 2250,
    "range": [
      2244,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2250,
    "end": 2251,
    "range": [
      2250,
      2251
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2260,
    "end": 2264,
    "range": [
      2260,
      2264
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 2265,
    "end": 2274,
    "range": [
      2265,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 2276,
    "end": 2289,
    "range": [
      2276,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2294,
    "end": 2300,
    "range": [
      2294,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2310,
    "end": 2314,
    "range": [
      2310,
      2314
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 2315,
    "end": 2325,
    "range": [
      2315,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 2327,
    "end": 2341,
    "range": [
      2327,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2341,
    "end": 2342,
    "range": [
      2341,
      2342
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2342,
    "end": 2343,
    "range": [
      2342,
      2343
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2343,
    "end": 2344,
    "range": [
      2343,
      2344
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2344,
    "end": 2345,
    "range": [
      2344,
      2345
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2346,
    "end": 2352,
    "range": [
      2346,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2362,
    "end": 2366,
    "range": [
      2362,
      2366
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 2367,
    "end": 2375,
    "range": [
      2367,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2375,
    "end": 2376,
    "range": [
      2375,
      2376
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 2377,
    "end": 2389,
    "range": [
      2377,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2394,
    "end": 2400,
    "range": [
      2394,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2410,
    "end": 2417,
    "range": [
      2410,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2419,
    "end": 2421,
    "range": [
      2419,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2421,
    "end": 2422,
    "range": [
      2421,
      2422
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2423,
    "end": 2424,
    "range": [
      2423,
      2424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2426,
    "end": 2432,
    "range": [
      2426,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2438,
    "end": 2439,
    "range": [
      2438,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2440,
    "end": 2441,
    "range": [
      2440,
      2441
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2443,
    "end": 2451,
    "range": [
      2443,
      2451
    ]
  },
  {
    "type": "Identifier",
    "value": "testUnionImplicitDefault",
    "start": 2452,
    "end": 2476,
    "range": [
      2452,
      2476
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2476,
    "end": 2477,
    "range": [
      2476,
      2477
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2477,
    "end": 2478,
    "range": [
      2477,
      2478
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2478,
    "end": 2479,
    "range": [
      2478,
      2479
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 2480,
    "end": 2485,
    "range": [
      2480,
      2485
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2485,
    "end": 2486,
    "range": [
      2485,
      2486
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2493,
    "end": 2499,
    "range": [
      2493,
      2499
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2501,
    "end": 2507,
    "range": [
      2501,
      2507
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2508,
    "end": 2509,
    "range": [
      2508,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2521,
    "end": 2525,
    "range": [
      2521,
      2525
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2526,
    "end": 2534,
    "range": [
      2526,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 2536,
    "end": 2548,
    "range": [
      2536,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2551,
    "end": 2552,
    "range": [
      2551,
      2552
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2553,
    "end": 2559,
    "range": [
      2553,
      2559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2559,
    "end": 2560,
    "range": [
      2559,
      2560
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2569,
    "end": 2573,
    "range": [
      2569,
      2573
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 2574,
    "end": 2583,
    "range": [
      2574,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2583,
    "end": 2584,
    "range": [
      2583,
      2584
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 2585,
    "end": 2598,
    "range": [
      2585,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599,
    "range": [
      2598,
      2599
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2599,
    "end": 2600,
    "range": [
      2599,
      2600
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2600,
    "end": 2601,
    "range": [
      2600,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2603,
    "end": 2609,
    "range": [
      2603,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2619,
    "end": 2623,
    "range": [
      2619,
      2623
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 2624,
    "end": 2634,
    "range": [
      2624,
      2634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2634,
    "end": 2635,
    "range": [
      2634,
      2635
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 2636,
    "end": 2650,
    "range": [
      2636,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2653,
    "end": 2654,
    "range": [
      2653,
      2654
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2655,
    "end": 2661,
    "range": [
      2655,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2671,
    "end": 2675,
    "range": [
      2671,
      2675
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 2676,
    "end": 2684,
    "range": [
      2676,
      2684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2684,
    "end": 2685,
    "range": [
      2684,
      2685
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 2686,
    "end": 2698,
    "range": [
      2686,
      2698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2698,
    "end": 2699,
    "range": [
      2698,
      2699
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2699,
    "end": 2700,
    "range": [
      2699,
      2700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2703,
    "end": 2709,
    "range": [
      2703,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2715,
    "end": 2716,
    "range": [
      2715,
      2716
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2721,
    "end": 2727,
    "range": [
      2721,
      2727
    ]
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 2728,
    "end": 2730,
    "range": [
      2728,
      2730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2733,
    "end": 2734,
    "range": [
      2733,
      2734
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2735,
    "end": 2736,
    "range": [
      2735,
      2736
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2738,
    "end": 2746,
    "range": [
      2738,
      2746
    ]
  },
  {
    "type": "Identifier",
    "value": "testExtendsExplicitDefault",
    "start": 2747,
    "end": 2773,
    "range": [
      2747,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2774,
    "end": 2775,
    "range": [
      2774,
      2775
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2776,
    "end": 2783,
    "range": [
      2776,
      2783
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 2784,
    "end": 2789,
    "range": [
      2784,
      2789
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2789,
    "end": 2790,
    "range": [
      2789,
      2790
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2790,
    "end": 2791,
    "range": [
      2790,
      2791
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2791,
    "end": 2792,
    "range": [
      2791,
      2792
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2792,
    "end": 2793,
    "range": [
      2792,
      2793
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2794,
    "end": 2795,
    "range": [
      2794,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2795,
    "end": 2796,
    "range": [
      2795,
      2796
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 2803,
    "end": 2809,
    "range": [
      2803,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2811,
    "end": 2817,
    "range": [
      2811,
      2817
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2818,
    "end": 2819,
    "range": [
      2818,
      2819
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2821,
    "end": 2822,
    "range": [
      2821,
      2822
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2831,
    "end": 2835,
    "range": [
      2831,
      2835
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2836,
    "end": 2844,
    "range": [
      2836,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 2846,
    "end": 2858,
    "range": [
      2846,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2863,
    "end": 2869,
    "range": [
      2863,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2879,
    "end": 2883,
    "range": [
      2879,
      2883
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 2884,
    "end": 2893,
    "range": [
      2884,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 2895,
    "end": 2908,
    "range": [
      2895,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2913,
    "end": 2919,
    "range": [
      2913,
      2919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2919,
    "end": 2920,
    "range": [
      2919,
      2920
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2929,
    "end": 2933,
    "range": [
      2929,
      2933
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 2934,
    "end": 2944,
    "range": [
      2934,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 2946,
    "end": 2955,
    "range": [
      2946,
      2955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2956,
    "end": 2957,
    "range": [
      2956,
      2957
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2960,
    "end": 2966,
    "range": [
      2960,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2966,
    "end": 2967,
    "range": [
      2966,
      2967
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2976,
    "end": 2980,
    "range": [
      2976,
      2980
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 2981,
    "end": 2989,
    "range": [
      2981,
      2989
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2989,
    "end": 2990,
    "range": [
      2989,
      2990
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 2991,
    "end": 3003,
    "range": [
      2991,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3008,
    "end": 3014,
    "range": [
      3008,
      3014
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3014,
    "end": 3015,
    "range": [
      3014,
      3015
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 3024,
    "end": 3031,
    "range": [
      3024,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 3033,
    "end": 3042,
    "range": [
      3033,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3047,
    "end": 3053,
    "range": [
      3047,
      3053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3065,
    "end": 3073,
    "range": [
      3065,
      3073
    ]
  },
  {
    "type": "Identifier",
    "value": "testExtendsImplicitDefault",
    "start": 3074,
    "end": 3100,
    "range": [
      3074,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3100,
    "end": 3101,
    "range": [
      3100,
      3101
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3103,
    "end": 3110,
    "range": [
      3103,
      3110
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 3111,
    "end": 3116,
    "range": [
      3111,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3118,
    "end": 3119,
    "range": [
      3118,
      3119
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3119,
    "end": 3120,
    "range": [
      3119,
      3120
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3121,
    "end": 3122,
    "range": [
      3121,
      3122
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3122,
    "end": 3123,
    "range": [
      3122,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3124,
    "end": 3125,
    "range": [
      3124,
      3125
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3130,
    "end": 3136,
    "range": [
      3130,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3138,
    "end": 3144,
    "range": [
      3138,
      3144
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3145,
    "end": 3146,
    "range": [
      3145,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3158,
    "end": 3162,
    "range": [
      3158,
      3162
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 3163,
    "end": 3171,
    "range": [
      3163,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 3173,
    "end": 3185,
    "range": [
      3173,
      3185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3186,
    "end": 3187,
    "range": [
      3186,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3190,
    "end": 3196,
    "range": [
      3190,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3206,
    "end": 3210,
    "range": [
      3206,
      3210
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 3211,
    "end": 3220,
    "range": [
      3211,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3220,
    "end": 3221,
    "range": [
      3220,
      3221
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 3222,
    "end": 3235,
    "range": [
      3222,
      3235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3235,
    "end": 3236,
    "range": [
      3235,
      3236
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3237,
    "end": 3238,
    "range": [
      3237,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3240,
    "end": 3246,
    "range": [
      3240,
      3246
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3246,
    "end": 3247,
    "range": [
      3246,
      3247
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3256,
    "end": 3260,
    "range": [
      3256,
      3260
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 3261,
    "end": 3271,
    "range": [
      3261,
      3271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3271,
    "end": 3272,
    "range": [
      3271,
      3272
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 3273,
    "end": 3282,
    "range": [
      3273,
      3282
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3285,
    "end": 3286,
    "range": [
      3285,
      3286
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3287,
    "end": 3293,
    "range": [
      3287,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3303,
    "end": 3307,
    "range": [
      3303,
      3307
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 3308,
    "end": 3316,
    "range": [
      3308,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 3318,
    "end": 3330,
    "range": [
      3318,
      3330
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3330,
    "end": 3331,
    "range": [
      3330,
      3331
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3331,
    "end": 3332,
    "range": [
      3331,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3333,
    "end": 3334,
    "range": [
      3333,
      3334
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3335,
    "end": 3341,
    "range": [
      3335,
      3341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3341,
    "end": 3342,
    "range": [
      3341,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3347,
    "end": 3348,
    "range": [
      3347,
      3348
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3353,
    "end": 3359,
    "range": [
      3353,
      3359
    ]
  },
  {
    "type": "Identifier",
    "value": "assertAll",
    "start": 3360,
    "end": 3369,
    "range": [
      3360,
      3369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3369,
    "end": 3370,
    "range": [
      3369,
      3370
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3370,
    "end": 3371,
    "range": [
      3370,
      3371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3371,
    "end": 3372,
    "range": [
      3371,
      3372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3372,
    "end": 3373,
    "range": [
      3372,
      3373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3374,
    "end": 3375,
    "range": [
      3374,
      3375
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3377,
    "end": 3381,
    "range": [
      3377,
      3381
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 3382,
    "end": 3383,
    "range": [
      3382,
      3383
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3384,
    "end": 3385,
    "range": [
      3384,
      3385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3386,
    "end": 3387,
    "range": [
      3386,
      3387
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3388,
    "end": 3389,
    "range": [
      3388,
      3389
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3390,
    "end": 3396,
    "range": [
      3390,
      3396
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3398,
    "end": 3400,
    "range": [
      3398,
      3400
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3401,
    "end": 3407,
    "range": [
      3401,
      3407
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3407,
    "end": 3408,
    "range": [
      3407,
      3408
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3409,
    "end": 3413,
    "range": [
      3409,
      3413
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3414,
    "end": 3415,
    "range": [
      3414,
      3415
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3416,
    "end": 3417,
    "range": [
      3416,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3420,
    "end": 3421,
    "range": [
      3420,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3421,
    "end": 3422,
    "range": [
      3421,
      3422
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3423,
    "end": 3429,
    "range": [
      3423,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3429,
    "end": 3430,
    "range": [
      3429,
      3430
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3431,
    "end": 3432,
    "range": [
      3431,
      3432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3432,
    "end": 3433,
    "range": [
      3432,
      3433
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3434,
    "end": 3440,
    "range": [
      3434,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3444,
    "end": 3452,
    "range": [
      3444,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "exhaustiveChecks",
    "start": 3453,
    "end": 3469,
    "range": [
      3453,
      3469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3470,
    "end": 3471,
    "range": [
      3470,
      3471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3471,
    "end": 3472,
    "range": [
      3471,
      3472
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3473,
    "end": 3479,
    "range": [
      3473,
      3479
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3480,
    "end": 3481,
    "range": [
      3480,
      3481
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3482,
    "end": 3488,
    "range": [
      3482,
      3488
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 3491,
    "end": 3492,
    "range": [
      3491,
      3492
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3493,
    "end": 3494,
    "range": [
      3493,
      3494
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3495,
    "end": 3496,
    "range": [
      3495,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3496,
    "end": 3497,
    "range": [
      3496,
      3497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3499,
    "end": 3505,
    "range": [
      3499,
      3505
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3506,
    "end": 3507,
    "range": [
      3506,
      3507
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3512,
    "end": 3518,
    "range": [
      3512,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3520,
    "end": 3526,
    "range": [
      3520,
      3526
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3527,
    "end": 3528,
    "range": [
      3527,
      3528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3528,
    "end": 3529,
    "range": [
      3528,
      3529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3530,
    "end": 3531,
    "range": [
      3530,
      3531
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3540,
    "end": 3544,
    "range": [
      3540,
      3544
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 3545,
    "end": 3553,
    "range": [
      3545,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3555,
    "end": 3561,
    "range": [
      3555,
      3561
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3563,
    "end": 3564,
    "range": [
      3563,
      3564
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3564,
    "end": 3572,
    "range": [
      3564,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3573,
    "end": 3574,
    "range": [
      3573,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3585,
    "end": 3589,
    "range": [
      3585,
      3589
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 3590,
    "end": 3598,
    "range": [
      3590,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3600,
    "end": 3606,
    "range": [
      3600,
      3606
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3607,
    "end": 3608,
    "range": [
      3607,
      3608
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3608,
    "end": 3609,
    "range": [
      3608,
      3609
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3618,
    "end": 3622,
    "range": [
      3618,
      3622
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 3623,
    "end": 3633,
    "range": [
      3623,
      3633
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3633,
    "end": 3634,
    "range": [
      3633,
      3634
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3635,
    "end": 3641,
    "range": [
      3635,
      3641
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3642,
    "end": 3643,
    "range": [
      3642,
      3643
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3643,
    "end": 3644,
    "range": [
      3643,
      3644
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3644,
    "end": 3646,
    "range": [
      3644,
      3646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3646,
    "end": 3647,
    "range": [
      3646,
      3647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3657,
    "end": 3661,
    "range": [
      3657,
      3661
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 3662,
    "end": 3670,
    "range": [
      3662,
      3670
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3670,
    "end": 3671,
    "range": [
      3670,
      3671
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3672,
    "end": 3678,
    "range": [
      3672,
      3678
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3680,
    "end": 3681,
    "range": [
      3680,
      3681
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3682,
    "end": 3683,
    "range": [
      3682,
      3683
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3693,
    "end": 3701,
    "range": [
      3693,
      3701
    ]
  },
  {
    "type": "Identifier",
    "value": "exhaustiveChecksGenerics",
    "start": 3702,
    "end": 3726,
    "range": [
      3702,
      3726
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3729,
    "end": 3736,
    "range": [
      3729,
      3736
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3741,
    "end": 3742,
    "range": [
      3741,
      3742
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3743,
    "end": 3744,
    "range": [
      3743,
      3744
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3745,
    "end": 3751,
    "range": [
      3745,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3752,
    "end": 3753,
    "range": [
      3752,
      3753
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3754,
    "end": 3760,
    "range": [
      3754,
      3760
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3760,
    "end": 3761,
    "range": [
      3760,
      3761
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3761,
    "end": 3762,
    "range": [
      3761,
      3762
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3762,
    "end": 3763,
    "range": [
      3762,
      3763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3763,
    "end": 3764,
    "range": [
      3763,
      3764
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3765,
    "end": 3766,
    "range": [
      3765,
      3766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3767,
    "end": 3768,
    "range": [
      3767,
      3768
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3769,
    "end": 3775,
    "range": [
      3769,
      3775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3776,
    "end": 3777,
    "range": [
      3776,
      3777
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3782,
    "end": 3788,
    "range": [
      3782,
      3788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3789,
    "end": 3790,
    "range": [
      3789,
      3790
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 3790,
    "end": 3796,
    "range": [
      3790,
      3796
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3797,
    "end": 3798,
    "range": [
      3797,
      3798
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3798,
    "end": 3799,
    "range": [
      3798,
      3799
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3800,
    "end": 3801,
    "range": [
      3800,
      3801
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3810,
    "end": 3814,
    "range": [
      3810,
      3814
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 3815,
    "end": 3823,
    "range": [
      3815,
      3823
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3823,
    "end": 3824,
    "range": [
      3823,
      3824
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3825,
    "end": 3831,
    "range": [
      3825,
      3831
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3833,
    "end": 3834,
    "range": [
      3833,
      3834
    ]
  },
  {
    "type": "Identifier",
    "value": "toString",
    "start": 3834,
    "end": 3842,
    "range": [
      3834,
      3842
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3842,
    "end": 3843,
    "range": [
      3842,
      3843
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3845,
    "end": 3846,
    "range": [
      3845,
      3846
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3855,
    "end": 3859,
    "range": [
      3855,
      3859
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 3860,
    "end": 3868,
    "range": [
      3860,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3870,
    "end": 3876,
    "range": [
      3870,
      3876
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3877,
    "end": 3878,
    "range": [
      3877,
      3878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3878,
    "end": 3879,
    "range": [
      3878,
      3879
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3888,
    "end": 3892,
    "range": [
      3888,
      3892
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 3893,
    "end": 3903,
    "range": [
      3893,
      3903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3903,
    "end": 3904,
    "range": [
      3903,
      3904
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3905,
    "end": 3911,
    "range": [
      3905,
      3911
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3912,
    "end": 3913,
    "range": [
      3912,
      3913
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3915,
    "end": 3917,
    "range": [
      3915,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 3918,
    "end": 3919,
    "range": [
      3918,
      3919
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3920,
    "end": 3921,
    "range": [
      3920,
      3921
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 3921,
    "end": 3923,
    "range": [
      3921,
      3923
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3923,
    "end": 3924,
    "range": [
      3923,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3958,
    "end": 3962,
    "range": [
      3958,
      3962
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 3963,
    "end": 3971,
    "range": [
      3963,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3971,
    "end": 3972,
    "range": [
      3971,
      3972
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3973,
    "end": 3979,
    "range": [
      3973,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3983,
    "end": 3985,
    "range": [
      3983,
      3985
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 3986,
    "end": 3987,
    "range": [
      3986,
      3987
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3989,
    "end": 3990,
    "range": [
      3989,
      3990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4033,
    "end": 4034,
    "range": [
      4033,
      4034
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4036,
    "end": 4044,
    "range": [
      4036,
      4044
    ]
  },
  {
    "type": "Identifier",
    "value": "multipleGeneric",
    "start": 4045,
    "end": 4060,
    "range": [
      4045,
      4060
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4061,
    "end": 4062,
    "range": [
      4061,
      4062
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4063,
    "end": 4070,
    "range": [
      4063,
      4070
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4071,
    "end": 4072,
    "range": [
      4071,
      4072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4072,
    "end": 4073,
    "range": [
      4072,
      4073
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4074,
    "end": 4075,
    "range": [
      4074,
      4075
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4076,
    "end": 4083,
    "range": [
      4076,
      4083
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4085,
    "end": 4086,
    "range": [
      4085,
      4086
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4086,
    "end": 4087,
    "range": [
      4086,
      4087
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4087,
    "end": 4089,
    "range": [
      4087,
      4089
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4089,
    "end": 4090,
    "range": [
      4089,
      4090
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4093,
    "end": 4094,
    "range": [
      4093,
      4094
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4095,
    "end": 4096,
    "range": [
      4095,
      4096
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4096,
    "end": 4097,
    "range": [
      4096,
      4097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4099,
    "end": 4100,
    "range": [
      4099,
      4100
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4100,
    "end": 4101,
    "range": [
      4100,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4103,
    "end": 4109,
    "range": [
      4103,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4114,
    "end": 4115,
    "range": [
      4114,
      4115
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4115,
    "end": 4116,
    "range": [
      4115,
      4116
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4117,
    "end": 4123,
    "range": [
      4117,
      4123
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4125,
    "end": 4126,
    "range": [
      4125,
      4126
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4131,
    "end": 4137,
    "range": [
      4131,
      4137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4138,
    "end": 4139,
    "range": [
      4138,
      4139
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4139,
    "end": 4145,
    "range": [
      4139,
      4145
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4146,
    "end": 4148,
    "range": [
      4146,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4150,
    "end": 4151,
    "range": [
      4150,
      4151
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4160,
    "end": 4164,
    "range": [
      4160,
      4164
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 4165,
    "end": 4175,
    "range": [
      4165,
      4175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4175,
    "end": 4176,
    "range": [
      4175,
      4176
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4177,
    "end": 4183,
    "range": [
      4177,
      4183
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4184,
    "end": 4185,
    "range": [
      4184,
      4185
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4185,
    "end": 4187,
    "range": [
      4185,
      4187
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4187,
    "end": 4188,
    "range": [
      4187,
      4188
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4189,
    "end": 4191,
    "range": [
      4189,
      4191
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4191,
    "end": 4192,
    "range": [
      4191,
      4192
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4192,
    "end": 4194,
    "range": [
      4192,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4196,
    "end": 4197,
    "range": [
      4196,
      4197
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4206,
    "end": 4210,
    "range": [
      4206,
      4210
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 4211,
    "end": 4219,
    "range": [
      4211,
      4219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4219,
    "end": 4220,
    "range": [
      4219,
      4220
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4221,
    "end": 4227,
    "range": [
      4221,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4228,
    "end": 4229,
    "range": [
      4228,
      4229
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4229,
    "end": 4231,
    "range": [
      4229,
      4231
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4231,
    "end": 4232,
    "range": [
      4231,
      4232
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4233,
    "end": 4235,
    "range": [
      4233,
      4235
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4235,
    "end": 4236,
    "range": [
      4235,
      4236
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4237,
    "end": 4238,
    "range": [
      4237,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 4248,
    "end": 4255,
    "range": [
      4248,
      4255
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4255,
    "end": 4256,
    "range": [
      4255,
      4256
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4257,
    "end": 4263,
    "range": [
      4257,
      4263
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 4264,
    "end": 4275,
    "range": [
      4264,
      4275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4275,
    "end": 4276,
    "range": [
      4275,
      4276
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4276,
    "end": 4278,
    "range": [
      4276,
      4278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4278,
    "end": 4279,
    "range": [
      4278,
      4279
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4279,
    "end": 4280,
    "range": [
      4279,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4285,
    "end": 4286,
    "range": [
      4285,
      4286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4287,
    "end": 4288,
    "range": [
      4287,
      4288
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4290,
    "end": 4298,
    "range": [
      4290,
      4298
    ]
  },
  {
    "type": "Identifier",
    "value": "multipleGenericFuse",
    "start": 4299,
    "end": 4318,
    "range": [
      4299,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4319,
    "end": 4320,
    "range": [
      4319,
      4320
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4321,
    "end": 4328,
    "range": [
      4321,
      4328
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4329,
    "end": 4330,
    "range": [
      4329,
      4330
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4331,
    "end": 4332,
    "range": [
      4331,
      4332
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4333,
    "end": 4339,
    "range": [
      4333,
      4339
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4339,
    "end": 4340,
    "range": [
      4339,
      4340
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4343,
    "end": 4350,
    "range": [
      4343,
      4350
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4351,
    "end": 4352,
    "range": [
      4351,
      4352
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4353,
    "end": 4354,
    "range": [
      4353,
      4354
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4355,
    "end": 4361,
    "range": [
      4355,
      4361
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4361,
    "end": 4362,
    "range": [
      4361,
      4362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4362,
    "end": 4363,
    "range": [
      4362,
      4363
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4363,
    "end": 4365,
    "range": [
      4363,
      4365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4369,
    "end": 4370,
    "range": [
      4369,
      4370
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4371,
    "end": 4372,
    "range": [
      4371,
      4372
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4372,
    "end": 4373,
    "range": [
      4372,
      4373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4373,
    "end": 4374,
    "range": [
      4373,
      4374
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4375,
    "end": 4376,
    "range": [
      4375,
      4376
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4377,
    "end": 4378,
    "range": [
      4377,
      4378
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4379,
    "end": 4385,
    "range": [
      4379,
      4385
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4385,
    "end": 4386,
    "range": [
      4385,
      4386
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4387,
    "end": 4388,
    "range": [
      4387,
      4388
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4389,
    "end": 4390,
    "range": [
      4389,
      4390
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4390,
    "end": 4391,
    "range": [
      4390,
      4391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4391,
    "end": 4392,
    "range": [
      4391,
      4392
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4393,
    "end": 4399,
    "range": [
      4393,
      4399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4399,
    "end": 4400,
    "range": [
      4399,
      4400
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4401,
    "end": 4402,
    "range": [
      4401,
      4402
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4403,
    "end": 4404,
    "range": [
      4403,
      4404
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4404,
    "end": 4405,
    "range": [
      4404,
      4405
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4405,
    "end": 4406,
    "range": [
      4405,
      4406
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4407,
    "end": 4408,
    "range": [
      4407,
      4408
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4409,
    "end": 4410,
    "range": [
      4409,
      4410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4410,
    "end": 4411,
    "range": [
      4410,
      4411
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4411,
    "end": 4412,
    "range": [
      4411,
      4412
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4413,
    "end": 4414,
    "range": [
      4413,
      4414
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4419,
    "end": 4425,
    "range": [
      4419,
      4425
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4426,
    "end": 4427,
    "range": [
      4426,
      4427
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4427,
    "end": 4433,
    "range": [
      4427,
      4433
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4434,
    "end": 4436,
    "range": [
      4434,
      4436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4436,
    "end": 4437,
    "range": [
      4436,
      4437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4438,
    "end": 4439,
    "range": [
      4438,
      4439
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4448,
    "end": 4452,
    "range": [
      4448,
      4452
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 4453,
    "end": 4463,
    "range": [
      4453,
      4463
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4463,
    "end": 4464,
    "range": [
      4463,
      4464
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4465,
    "end": 4471,
    "range": [
      4465,
      4471
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4472,
    "end": 4473,
    "range": [
      4472,
      4473
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4473,
    "end": 4475,
    "range": [
      4473,
      4475
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4475,
    "end": 4476,
    "range": [
      4475,
      4476
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4477,
    "end": 4478,
    "range": [
      4477,
      4478
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4478,
    "end": 4479,
    "range": [
      4478,
      4479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4479,
    "end": 4480,
    "range": [
      4479,
      4480
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4489,
    "end": 4493,
    "range": [
      4489,
      4493
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 4494,
    "end": 4502,
    "range": [
      4494,
      4502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4502,
    "end": 4503,
    "range": [
      4502,
      4503
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4504,
    "end": 4510,
    "range": [
      4504,
      4510
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4511,
    "end": 4512,
    "range": [
      4511,
      4512
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4512,
    "end": 4514,
    "range": [
      4512,
      4514
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4514,
    "end": 4515,
    "range": [
      4514,
      4515
    ]
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 4516,
    "end": 4521,
    "range": [
      4516,
      4521
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4521,
    "end": 4522,
    "range": [
      4521,
      4522
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4522,
    "end": 4523,
    "range": [
      4522,
      4523
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4532,
    "end": 4536,
    "range": [
      4532,
      4536
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 4537,
    "end": 4545,
    "range": [
      4537,
      4545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4545,
    "end": 4546,
    "range": [
      4545,
      4546
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4547,
    "end": 4553,
    "range": [
      4547,
      4553
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4554,
    "end": 4555,
    "range": [
      4554,
      4555
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4555,
    "end": 4557,
    "range": [
      4555,
      4557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4557,
    "end": 4558,
    "range": [
      4557,
      4558
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4563,
    "end": 4564,
    "range": [
      4563,
      4564
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4565,
    "end": 4566,
    "range": [
      4565,
      4566
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4568,
    "end": 4576,
    "range": [
      4568,
      4576
    ]
  },
  {
    "type": "Identifier",
    "value": "multipleGenericExhaustive",
    "start": 4577,
    "end": 4602,
    "range": [
      4577,
      4602
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4602,
    "end": 4603,
    "range": [
      4602,
      4603
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4605,
    "end": 4612,
    "range": [
      4605,
      4612
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 4613,
    "end": 4614,
    "range": [
      4613,
      4614
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4614,
    "end": 4615,
    "range": [
      4614,
      4615
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4616,
    "end": 4617,
    "range": [
      4616,
      4617
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4618,
    "end": 4625,
    "range": [
      4618,
      4625
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 4626,
    "end": 4627,
    "range": [
      4626,
      4627
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4627,
    "end": 4628,
    "range": [
      4627,
      4628
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4628,
    "end": 4629,
    "range": [
      4628,
      4629
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4629,
    "end": 4631,
    "range": [
      4629,
      4631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4631,
    "end": 4632,
    "range": [
      4631,
      4632
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4633,
    "end": 4634,
    "range": [
      4633,
      4634
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4635,
    "end": 4636,
    "range": [
      4635,
      4636
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4637,
    "end": 4638,
    "range": [
      4637,
      4638
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4638,
    "end": 4639,
    "range": [
      4638,
      4639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4639,
    "end": 4640,
    "range": [
      4639,
      4640
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4641,
    "end": 4642,
    "range": [
      4641,
      4642
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 4642,
    "end": 4643,
    "range": [
      4642,
      4643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4643,
    "end": 4644,
    "range": [
      4643,
      4644
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4645,
    "end": 4651,
    "range": [
      4645,
      4651
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4651,
    "end": 4652,
    "range": [
      4651,
      4652
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4653,
    "end": 4654,
    "range": [
      4653,
      4654
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4655,
    "end": 4656,
    "range": [
      4655,
      4656
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4657,
    "end": 4658,
    "range": [
      4657,
      4658
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4659,
    "end": 4665,
    "range": [
      4659,
      4665
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4665,
    "end": 4666,
    "range": [
      4665,
      4666
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4667,
    "end": 4668,
    "range": [
      4667,
      4668
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4673,
    "end": 4679,
    "range": [
      4673,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4680,
    "end": 4681,
    "range": [
      4680,
      4681
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4681,
    "end": 4687,
    "range": [
      4681,
      4687
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4688,
    "end": 4690,
    "range": [
      4688,
      4690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4690,
    "end": 4691,
    "range": [
      4690,
      4691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4692,
    "end": 4693,
    "range": [
      4692,
      4693
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4702,
    "end": 4706,
    "range": [
      4702,
      4706
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 4707,
    "end": 4715,
    "range": [
      4707,
      4715
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4715,
    "end": 4716,
    "range": [
      4715,
      4716
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4717,
    "end": 4723,
    "range": [
      4717,
      4723
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4724,
    "end": 4725,
    "range": [
      4724,
      4725
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4725,
    "end": 4727,
    "range": [
      4725,
      4727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4727,
    "end": 4728,
    "range": [
      4727,
      4728
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4729,
    "end": 4731,
    "range": [
      4729,
      4731
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4731,
    "end": 4732,
    "range": [
      4731,
      4732
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4732,
    "end": 4733,
    "range": [
      4732,
      4733
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4733,
    "end": 4734,
    "range": [
      4733,
      4734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4734,
    "end": 4735,
    "range": [
      4734,
      4735
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4744,
    "end": 4748,
    "range": [
      4744,
      4748
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 4749,
    "end": 4759,
    "range": [
      4749,
      4759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4759,
    "end": 4760,
    "range": [
      4759,
      4760
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4761,
    "end": 4767,
    "range": [
      4761,
      4767
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4768,
    "end": 4769,
    "range": [
      4768,
      4769
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4769,
    "end": 4771,
    "range": [
      4769,
      4771
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4771,
    "end": 4772,
    "range": [
      4771,
      4772
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 4773,
    "end": 4775,
    "range": [
      4773,
      4775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4775,
    "end": 4776,
    "range": [
      4775,
      4776
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 4776,
    "end": 4778,
    "range": [
      4776,
      4778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4778,
    "end": 4779,
    "range": [
      4778,
      4779
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4779,
    "end": 4780,
    "range": [
      4779,
      4780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4780,
    "end": 4781,
    "range": [
      4780,
      4781
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4786,
    "end": 4787,
    "range": [
      4786,
      4787
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4791,
    "end": 4799,
    "range": [
      4791,
      4799
    ]
  },
  {
    "type": "Identifier",
    "value": "switchOrdering",
    "start": 4800,
    "end": 4814,
    "range": [
      4800,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4815,
    "end": 4816,
    "range": [
      4815,
      4816
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4816,
    "end": 4817,
    "range": [
      4816,
      4817
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4818,
    "end": 4824,
    "range": [
      4818,
      4824
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4827,
    "end": 4833,
    "range": [
      4827,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4834,
    "end": 4835,
    "range": [
      4834,
      4835
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4836,
    "end": 4843,
    "range": [
      4836,
      4843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4843,
    "end": 4844,
    "range": [
      4843,
      4844
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4845,
    "end": 4846,
    "range": [
      4845,
      4846
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4851,
    "end": 4857,
    "range": [
      4851,
      4857
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4858,
    "end": 4859,
    "range": [
      4858,
      4859
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4859,
    "end": 4865,
    "range": [
      4859,
      4865
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4866,
    "end": 4867,
    "range": [
      4866,
      4867
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4867,
    "end": 4868,
    "range": [
      4867,
      4868
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4879,
    "end": 4883,
    "range": [
      4879,
      4883
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 4884,
    "end": 4892,
    "range": [
      4884,
      4892
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4892,
    "end": 4893,
    "range": [
      4892,
      4893
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4894,
    "end": 4900,
    "range": [
      4894,
      4900
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 4901,
    "end": 4913,
    "range": [
      4901,
      4913
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4913,
    "end": 4914,
    "range": [
      4913,
      4914
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4914,
    "end": 4915,
    "range": [
      4914,
      4915
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4915,
    "end": 4916,
    "range": [
      4915,
      4916
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4926,
    "end": 4930,
    "range": [
      4926,
      4930
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 4931,
    "end": 4939,
    "range": [
      4931,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4939,
    "end": 4940,
    "range": [
      4939,
      4940
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4941,
    "end": 4947,
    "range": [
      4941,
      4947
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 4948,
    "end": 4960,
    "range": [
      4948,
      4960
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4960,
    "end": 4961,
    "range": [
      4960,
      4961
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4961,
    "end": 4962,
    "range": [
      4961,
      4962
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4962,
    "end": 4963,
    "range": [
      4962,
      4963
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4963,
    "end": 4964,
    "range": [
      4963,
      4964
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4973,
    "end": 4977,
    "range": [
      4973,
      4977
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 4978,
    "end": 4987,
    "range": [
      4978,
      4987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4987,
    "end": 4988,
    "range": [
      4987,
      4988
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4989,
    "end": 4995,
    "range": [
      4989,
      4995
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 4996,
    "end": 5009,
    "range": [
      4996,
      5009
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5009,
    "end": 5010,
    "range": [
      5009,
      5010
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5010,
    "end": 5011,
    "range": [
      5010,
      5011
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5011,
    "end": 5012,
    "range": [
      5011,
      5012
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5012,
    "end": 5013,
    "range": [
      5012,
      5013
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5022,
    "end": 5026,
    "range": [
      5022,
      5026
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5027,
    "end": 5035,
    "range": [
      5027,
      5035
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5035,
    "end": 5036,
    "range": [
      5035,
      5036
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5037,
    "end": 5043,
    "range": [
      5037,
      5043
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 5044,
    "end": 5055,
    "range": [
      5044,
      5055
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5055,
    "end": 5056,
    "range": [
      5055,
      5056
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5056,
    "end": 5057,
    "range": [
      5056,
      5057
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5057,
    "end": 5058,
    "range": [
      5057,
      5058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5058,
    "end": 5059,
    "range": [
      5058,
      5059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5064,
    "end": 5065,
    "range": [
      5064,
      5065
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5066,
    "end": 5067,
    "range": [
      5066,
      5067
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5069,
    "end": 5077,
    "range": [
      5069,
      5077
    ]
  },
  {
    "type": "Identifier",
    "value": "switchOrderingWithDefault",
    "start": 5078,
    "end": 5103,
    "range": [
      5078,
      5103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5103,
    "end": 5104,
    "range": [
      5103,
      5104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5105,
    "end": 5106,
    "range": [
      5105,
      5106
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5107,
    "end": 5113,
    "range": [
      5107,
      5113
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5114,
    "end": 5115,
    "range": [
      5114,
      5115
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5116,
    "end": 5122,
    "range": [
      5116,
      5122
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5123,
    "end": 5124,
    "range": [
      5123,
      5124
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5125,
    "end": 5132,
    "range": [
      5125,
      5132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5134,
    "end": 5135,
    "range": [
      5134,
      5135
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5140,
    "end": 5148,
    "range": [
      5140,
      5148
    ]
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 5149,
    "end": 5154,
    "range": [
      5149,
      5154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5154,
    "end": 5155,
    "range": [
      5154,
      5155
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 5155,
    "end": 5156,
    "range": [
      5155,
      5156
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5158,
    "end": 5164,
    "range": [
      5158,
      5164
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5165,
    "end": 5166,
    "range": [
      5165,
      5166
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5167,
    "end": 5173,
    "range": [
      5167,
      5173
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5174,
    "end": 5175,
    "range": [
      5174,
      5175
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5176,
    "end": 5183,
    "range": [
      5176,
      5183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5183,
    "end": 5184,
    "range": [
      5183,
      5184
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5185,
    "end": 5186,
    "range": [
      5185,
      5186
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5195,
    "end": 5201,
    "range": [
      5195,
      5201
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5202,
    "end": 5203,
    "range": [
      5202,
      5203
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5203,
    "end": 5204,
    "range": [
      5203,
      5204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5209,
    "end": 5210,
    "range": [
      5209,
      5210
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 5215,
    "end": 5221,
    "range": [
      5215,
      5221
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5222,
    "end": 5223,
    "range": [
      5222,
      5223
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5223,
    "end": 5229,
    "range": [
      5223,
      5229
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5230,
    "end": 5231,
    "range": [
      5230,
      5231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5231,
    "end": 5232,
    "range": [
      5231,
      5232
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5233,
    "end": 5234,
    "range": [
      5233,
      5234
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5243,
    "end": 5247,
    "range": [
      5243,
      5247
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5248,
    "end": 5256,
    "range": [
      5248,
      5256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5256,
    "end": 5257,
    "range": [
      5256,
      5257
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5266,
    "end": 5270,
    "range": [
      5266,
      5270
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5271,
    "end": 5279,
    "range": [
      5271,
      5279
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5279,
    "end": 5280,
    "range": [
      5279,
      5280
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 5289,
    "end": 5296,
    "range": [
      5289,
      5296
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5296,
    "end": 5297,
    "range": [
      5296,
      5297
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5298,
    "end": 5304,
    "range": [
      5298,
      5304
    ]
  },
  {
    "type": "Identifier",
    "value": "local",
    "start": 5305,
    "end": 5310,
    "range": [
      5305,
      5310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5310,
    "end": 5311,
    "range": [
      5310,
      5311
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5311,
    "end": 5312,
    "range": [
      5311,
      5312
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5312,
    "end": 5313,
    "range": [
      5312,
      5313
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5322,
    "end": 5326,
    "range": [
      5322,
      5326
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5327,
    "end": 5335,
    "range": [
      5327,
      5335
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5335,
    "end": 5336,
    "range": [
      5335,
      5336
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5337,
    "end": 5343,
    "range": [
      5337,
      5343
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 5344,
    "end": 5355,
    "range": [
      5344,
      5355
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5355,
    "end": 5356,
    "range": [
      5355,
      5356
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5356,
    "end": 5357,
    "range": [
      5356,
      5357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5357,
    "end": 5358,
    "range": [
      5357,
      5358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5358,
    "end": 5359,
    "range": [
      5358,
      5359
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5368,
    "end": 5372,
    "range": [
      5368,
      5372
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5373,
    "end": 5381,
    "range": [
      5373,
      5381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5381,
    "end": 5382,
    "range": [
      5381,
      5382
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5383,
    "end": 5389,
    "range": [
      5383,
      5389
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 5390,
    "end": 5401,
    "range": [
      5390,
      5401
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5401,
    "end": 5402,
    "range": [
      5401,
      5402
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5402,
    "end": 5403,
    "range": [
      5402,
      5403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5403,
    "end": 5404,
    "range": [
      5403,
      5404
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5404,
    "end": 5405,
    "range": [
      5404,
      5405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5410,
    "end": 5411,
    "range": [
      5410,
      5411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5412,
    "end": 5413,
    "range": [
      5412,
      5413
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5415,
    "end": 5423,
    "range": [
      5415,
      5423
    ]
  },
  {
    "type": "Identifier",
    "value": "fallThroughTest",
    "start": 5424,
    "end": 5439,
    "range": [
      5424,
      5439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5439,
    "end": 5440,
    "range": [
      5439,
      5440
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5440,
    "end": 5441,
    "range": [
      5440,
      5441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5441,
    "end": 5442,
    "range": [
      5441,
      5442
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5443,
    "end": 5449,
    "range": [
      5443,
      5449
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5450,
    "end": 5451,
    "range": [
      5450,
      5451
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5452,
    "end": 5458,
    "range": [
      5452,
      5458
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5459,
    "end": 5460,
    "range": [
      5459,
      5460
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 5461,
    "end": 5468,
    "range": [
      5461,
      5468
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5469,
    "end": 5470,
    "range": [
      5469,
      5470
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 5471,
    "end": 5477,
    "range": [
      5471,
      5477
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5477,
    "end": 5478,
    "range": [
      5477,
      5478
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5479,
    "end": 5480,
    "range": [
      5479,
      5480
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 5485,
    "end": 5491,
    "range": [
      5485,
      5491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5492,
    "end": 5493,
    "range": [
      5492,
      5493
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5493,
    "end": 5499,
    "range": [
      5493,
      5499
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5500,
    "end": 5501,
    "range": [
      5500,
      5501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5501,
    "end": 5502,
    "range": [
      5501,
      5502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5503,
    "end": 5504,
    "range": [
      5503,
      5504
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5513,
    "end": 5517,
    "range": [
      5513,
      5517
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5518,
    "end": 5526,
    "range": [
      5518,
      5526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5526,
    "end": 5527,
    "range": [
      5526,
      5527
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 5540,
    "end": 5552,
    "range": [
      5540,
      5552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5552,
    "end": 5553,
    "range": [
      5552,
      5553
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5553,
    "end": 5554,
    "range": [
      5553,
      5554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5554,
    "end": 5555,
    "range": [
      5554,
      5555
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5564,
    "end": 5568,
    "range": [
      5564,
      5568
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 5569,
    "end": 5577,
    "range": [
      5569,
      5577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5577,
    "end": 5578,
    "range": [
      5577,
      5578
    ]
  },
  {
    "type": "Identifier",
    "value": "assertStringOrNumber",
    "start": 5591,
    "end": 5611,
    "range": [
      5591,
      5611
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5611,
    "end": 5612,
    "range": [
      5611,
      5612
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5612,
    "end": 5613,
    "range": [
      5612,
      5613
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5613,
    "end": 5614,
    "range": [
      5613,
      5614
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 5627,
    "end": 5632,
    "range": [
      5627,
      5632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5632,
    "end": 5633,
    "range": [
      5632,
      5633
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 5642,
    "end": 5649,
    "range": [
      5642,
      5649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5649,
    "end": 5650,
    "range": [
      5649,
      5650
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObject",
    "start": 5663,
    "end": 5675,
    "range": [
      5663,
      5675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5675,
    "end": 5676,
    "range": [
      5675,
      5676
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5676,
    "end": 5677,
    "range": [
      5676,
      5677
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5677,
    "end": 5678,
    "range": [
      5677,
      5678
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5678,
    "end": 5679,
    "range": [
      5678,
      5679
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5688,
    "end": 5692,
    "range": [
      5688,
      5692
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5693,
    "end": 5701,
    "range": [
      5693,
      5701
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5701,
    "end": 5702,
    "range": [
      5701,
      5702
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5711,
    "end": 5715,
    "range": [
      5711,
      5715
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 5716,
    "end": 5725,
    "range": [
      5716,
      5725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5725,
    "end": 5726,
    "range": [
      5725,
      5726
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBooleanOrObject",
    "start": 5739,
    "end": 5760,
    "range": [
      5739,
      5760
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5760,
    "end": 5761,
    "range": [
      5760,
      5761
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5761,
    "end": 5762,
    "range": [
      5761,
      5762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5762,
    "end": 5763,
    "range": [
      5762,
      5763
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5763,
    "end": 5764,
    "range": [
      5763,
      5764
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 5777,
    "end": 5782,
    "range": [
      5777,
      5782
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5782,
    "end": 5783,
    "range": [
      5782,
      5783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5788,
    "end": 5789,
    "range": [
      5788,
      5789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5790,
    "end": 5791,
    "range": [
      5790,
      5791
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5793,
    "end": 5801,
    "range": [
      5793,
      5801
    ]
  },
  {
    "type": "Identifier",
    "value": "unknownNarrowing",
    "start": 5802,
    "end": 5818,
    "range": [
      5802,
      5818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5818,
    "end": 5819,
    "range": [
      5818,
      5819
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5819,
    "end": 5820,
    "range": [
      5819,
      5820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5820,
    "end": 5821,
    "range": [
      5820,
      5821
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5822,
    "end": 5829,
    "range": [
      5822,
      5829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5829,
    "end": 5830,
    "range": [
      5829,
      5830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5831,
    "end": 5832,
    "range": [
      5831,
      5832
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 5837,
    "end": 5843,
    "range": [
      5837,
      5843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5844,
    "end": 5845,
    "range": [
      5844,
      5845
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 5845,
    "end": 5851,
    "range": [
      5845,
      5851
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5852,
    "end": 5853,
    "range": [
      5852,
      5853
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5853,
    "end": 5854,
    "range": [
      5853,
      5854
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5855,
    "end": 5856,
    "range": [
      5855,
      5856
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5865,
    "end": 5869,
    "range": [
      5865,
      5869
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 5870,
    "end": 5878,
    "range": [
      5870,
      5878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5878,
    "end": 5879,
    "range": [
      5878,
      5879
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 5880,
    "end": 5892,
    "range": [
      5880,
      5892
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5892,
    "end": 5893,
    "range": [
      5892,
      5893
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5893,
    "end": 5894,
    "range": [
      5893,
      5894
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5894,
    "end": 5895,
    "range": [
      5894,
      5895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5895,
    "end": 5896,
    "range": [
      5895,
      5896
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5897,
    "end": 5903,
    "range": [
      5897,
      5903
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5903,
    "end": 5904,
    "range": [
      5903,
      5904
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5913,
    "end": 5917,
    "range": [
      5913,
      5917
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 5918,
    "end": 5927,
    "range": [
      5918,
      5927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5927,
    "end": 5928,
    "range": [
      5927,
      5928
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 5929,
    "end": 5942,
    "range": [
      5929,
      5942
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5942,
    "end": 5943,
    "range": [
      5942,
      5943
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5943,
    "end": 5944,
    "range": [
      5943,
      5944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5944,
    "end": 5945,
    "range": [
      5944,
      5945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5945,
    "end": 5946,
    "range": [
      5945,
      5946
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5947,
    "end": 5953,
    "range": [
      5947,
      5953
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5953,
    "end": 5954,
    "range": [
      5953,
      5954
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 5963,
    "end": 5967,
    "range": [
      5963,
      5967
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 5968,
    "end": 5978,
    "range": [
      5968,
      5978
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5978,
    "end": 5979,
    "range": [
      5978,
      5979
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 5980,
    "end": 5994,
    "range": [
      5980,
      5994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5994,
    "end": 5995,
    "range": [
      5994,
      5995
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5995,
    "end": 5996,
    "range": [
      5995,
      5996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5996,
    "end": 5997,
    "range": [
      5996,
      5997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5997,
    "end": 5998,
    "range": [
      5997,
      5998
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5999,
    "end": 6005,
    "range": [
      5999,
      6005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6005,
    "end": 6006,
    "range": [
      6005,
      6006
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6015,
    "end": 6019,
    "range": [
      6015,
      6019
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 6020,
    "end": 6028,
    "range": [
      6020,
      6028
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6028,
    "end": 6029,
    "range": [
      6028,
      6029
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 6030,
    "end": 6042,
    "range": [
      6030,
      6042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6042,
    "end": 6043,
    "range": [
      6042,
      6043
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6043,
    "end": 6044,
    "range": [
      6043,
      6044
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6044,
    "end": 6045,
    "range": [
      6044,
      6045
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6045,
    "end": 6046,
    "range": [
      6045,
      6046
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6047,
    "end": 6053,
    "range": [
      6047,
      6053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6053,
    "end": 6054,
    "range": [
      6053,
      6054
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6063,
    "end": 6067,
    "range": [
      6063,
      6067
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 6068,
    "end": 6076,
    "range": [
      6068,
      6076
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6076,
    "end": 6077,
    "range": [
      6076,
      6077
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObjectOrNull",
    "start": 6078,
    "end": 6096,
    "range": [
      6078,
      6096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6096,
    "end": 6097,
    "range": [
      6096,
      6097
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6097,
    "end": 6098,
    "range": [
      6097,
      6098
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6098,
    "end": 6099,
    "range": [
      6098,
      6099
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6099,
    "end": 6100,
    "range": [
      6099,
      6100
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6101,
    "end": 6107,
    "range": [
      6101,
      6107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6107,
    "end": 6108,
    "range": [
      6107,
      6108
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6117,
    "end": 6121,
    "range": [
      6117,
      6121
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 6122,
    "end": 6130,
    "range": [
      6122,
      6130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6130,
    "end": 6131,
    "range": [
      6130,
      6131
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 6132,
    "end": 6144,
    "range": [
      6132,
      6144
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6144,
    "end": 6145,
    "range": [
      6144,
      6145
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6145,
    "end": 6146,
    "range": [
      6145,
      6146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6146,
    "end": 6147,
    "range": [
      6146,
      6147
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6147,
    "end": 6148,
    "range": [
      6147,
      6148
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6149,
    "end": 6155,
    "range": [
      6149,
      6155
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6155,
    "end": 6156,
    "range": [
      6155,
      6156
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6165,
    "end": 6169,
    "range": [
      6165,
      6169
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 6170,
    "end": 6181,
    "range": [
      6170,
      6181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6181,
    "end": 6182,
    "range": [
      6181,
      6182
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 6183,
    "end": 6198,
    "range": [
      6183,
      6198
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6198,
    "end": 6199,
    "range": [
      6198,
      6199
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6199,
    "end": 6200,
    "range": [
      6199,
      6200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6200,
    "end": 6201,
    "range": [
      6200,
      6201
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6201,
    "end": 6202,
    "range": [
      6201,
      6202
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6203,
    "end": 6209,
    "range": [
      6203,
      6209
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6209,
    "end": 6210,
    "range": [
      6209,
      6210
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6215,
    "end": 6216,
    "range": [
      6215,
      6216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6217,
    "end": 6218,
    "range": [
      6217,
      6218
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6220,
    "end": 6228,
    "range": [
      6220,
      6228
    ]
  },
  {
    "type": "Identifier",
    "value": "keyofNarrowing",
    "start": 6229,
    "end": 6243,
    "range": [
      6229,
      6243
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6243,
    "end": 6244,
    "range": [
      6243,
      6244
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6244,
    "end": 6245,
    "range": [
      6244,
      6245
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6246,
    "end": 6253,
    "range": [
      6246,
      6253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6254,
    "end": 6255,
    "range": [
      6254,
      6255
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6256,
    "end": 6257,
    "range": [
      6256,
      6257
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 6257,
    "end": 6258,
    "range": [
      6257,
      6258
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 6259,
    "end": 6261,
    "range": [
      6259,
      6261
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6262,
    "end": 6267,
    "range": [
      6262,
      6267
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6268,
    "end": 6269,
    "range": [
      6268,
      6269
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6269,
    "end": 6270,
    "range": [
      6269,
      6270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6270,
    "end": 6271,
    "range": [
      6270,
      6271
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6272,
    "end": 6278,
    "range": [
      6272,
      6278
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6279,
    "end": 6280,
    "range": [
      6279,
      6280
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6280,
    "end": 6281,
    "range": [
      6280,
      6281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6281,
    "end": 6282,
    "range": [
      6281,
      6282
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6282,
    "end": 6283,
    "range": [
      6282,
      6283
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6283,
    "end": 6284,
    "range": [
      6283,
      6284
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6285,
    "end": 6290,
    "range": [
      6285,
      6290
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6291,
    "end": 6292,
    "range": [
      6291,
      6292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6292,
    "end": 6293,
    "range": [
      6292,
      6293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6294,
    "end": 6295,
    "range": [
      6294,
      6295
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6300,
    "end": 6308,
    "range": [
      6300,
      6308
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 6309,
    "end": 6321,
    "range": [
      6309,
      6321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6321,
    "end": 6322,
    "range": [
      6321,
      6322
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 6322,
    "end": 6324,
    "range": [
      6322,
      6324
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6324,
    "end": 6325,
    "range": [
      6324,
      6325
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 6326,
    "end": 6331,
    "range": [
      6326,
      6331
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 6332,
    "end": 6333,
    "range": [
      6332,
      6333
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6333,
    "end": 6334,
    "range": [
      6333,
      6334
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6335,
    "end": 6336,
    "range": [
      6335,
      6336
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6337,
    "end": 6338,
    "range": [
      6337,
      6338
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 6343,
    "end": 6349,
    "range": [
      6343,
      6349
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6350,
    "end": 6351,
    "range": [
      6350,
      6351
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6351,
    "end": 6357,
    "range": [
      6351,
      6357
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6358,
    "end": 6359,
    "range": [
      6358,
      6359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6359,
    "end": 6360,
    "range": [
      6359,
      6360
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6361,
    "end": 6362,
    "range": [
      6361,
      6362
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6371,
    "end": 6375,
    "range": [
      6371,
      6375
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 6376,
    "end": 6384,
    "range": [
      6376,
      6384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6384,
    "end": 6385,
    "range": [
      6384,
      6385
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 6386,
    "end": 6398,
    "range": [
      6386,
      6398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6398,
    "end": 6399,
    "range": [
      6398,
      6399
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6399,
    "end": 6400,
    "range": [
      6399,
      6400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6400,
    "end": 6401,
    "range": [
      6400,
      6401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6401,
    "end": 6402,
    "range": [
      6401,
      6402
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 6403,
    "end": 6415,
    "range": [
      6403,
      6415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6415,
    "end": 6416,
    "range": [
      6415,
      6416
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6416,
    "end": 6417,
    "range": [
      6416,
      6417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6417,
    "end": 6418,
    "range": [
      6417,
      6418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6418,
    "end": 6419,
    "range": [
      6418,
      6419
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6420,
    "end": 6426,
    "range": [
      6420,
      6426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6426,
    "end": 6427,
    "range": [
      6426,
      6427
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6436,
    "end": 6440,
    "range": [
      6436,
      6440
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 6441,
    "end": 6449,
    "range": [
      6441,
      6449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6449,
    "end": 6450,
    "range": [
      6449,
      6450
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 6451,
    "end": 6463,
    "range": [
      6451,
      6463
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6463,
    "end": 6464,
    "range": [
      6463,
      6464
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6464,
    "end": 6465,
    "range": [
      6464,
      6465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6465,
    "end": 6466,
    "range": [
      6465,
      6466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6466,
    "end": 6467,
    "range": [
      6466,
      6467
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 6468,
    "end": 6480,
    "range": [
      6468,
      6480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6480,
    "end": 6481,
    "range": [
      6480,
      6481
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6481,
    "end": 6482,
    "range": [
      6481,
      6482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6482,
    "end": 6483,
    "range": [
      6482,
      6483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6483,
    "end": 6484,
    "range": [
      6483,
      6484
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6485,
    "end": 6491,
    "range": [
      6485,
      6491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6491,
    "end": 6492,
    "range": [
      6491,
      6492
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6501,
    "end": 6505,
    "range": [
      6501,
      6505
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 6506,
    "end": 6514,
    "range": [
      6506,
      6514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6514,
    "end": 6515,
    "range": [
      6514,
      6515
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 6516,
    "end": 6528,
    "range": [
      6516,
      6528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6528,
    "end": 6529,
    "range": [
      6528,
      6529
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6529,
    "end": 6530,
    "range": [
      6529,
      6530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6530,
    "end": 6531,
    "range": [
      6530,
      6531
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6531,
    "end": 6532,
    "range": [
      6531,
      6532
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 6533,
    "end": 6545,
    "range": [
      6533,
      6545
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6545,
    "end": 6546,
    "range": [
      6545,
      6546
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 6546,
    "end": 6547,
    "range": [
      6546,
      6547
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6547,
    "end": 6548,
    "range": [
      6547,
      6548
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6548,
    "end": 6549,
    "range": [
      6548,
      6549
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6550,
    "end": 6556,
    "range": [
      6550,
      6556
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6556,
    "end": 6557,
    "range": [
      6556,
      6557
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6562,
    "end": 6563,
    "range": [
      6562,
      6563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6564,
    "end": 6565,
    "range": [
      6564,
      6565
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6567,
    "end": 6575,
    "range": [
      6567,
      6575
    ]
  },
  {
    "type": "Identifier",
    "value": "narrowingNarrows",
    "start": 6576,
    "end": 6592,
    "range": [
      6576,
      6592
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6592,
    "end": 6593,
    "range": [
      6592,
      6593
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6593,
    "end": 6594,
    "range": [
      6593,
      6594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6594,
    "end": 6595,
    "range": [
      6594,
      6595
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6596,
    "end": 6597,
    "range": [
      6596,
      6597
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6597,
    "end": 6598,
    "range": [
      6597,
      6598
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6599,
    "end": 6600,
    "range": [
      6599,
      6600
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 6601,
    "end": 6610,
    "range": [
      6601,
      6610
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6610,
    "end": 6611,
    "range": [
      6610,
      6611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6612,
    "end": 6613,
    "range": [
      6612,
      6613
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 6618,
    "end": 6624,
    "range": [
      6618,
      6624
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6625,
    "end": 6626,
    "range": [
      6625,
      6626
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 6626,
    "end": 6632,
    "range": [
      6626,
      6632
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6633,
    "end": 6634,
    "range": [
      6633,
      6634
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6634,
    "end": 6635,
    "range": [
      6634,
      6635
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6636,
    "end": 6637,
    "range": [
      6636,
      6637
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6646,
    "end": 6650,
    "range": [
      6646,
      6650
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 6651,
    "end": 6659,
    "range": [
      6651,
      6659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6659,
    "end": 6660,
    "range": [
      6659,
      6660
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 6661,
    "end": 6673,
    "range": [
      6661,
      6673
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6673,
    "end": 6674,
    "range": [
      6673,
      6674
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6674,
    "end": 6675,
    "range": [
      6674,
      6675
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6675,
    "end": 6676,
    "range": [
      6675,
      6676
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6676,
    "end": 6677,
    "range": [
      6676,
      6677
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6678,
    "end": 6684,
    "range": [
      6678,
      6684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6684,
    "end": 6685,
    "range": [
      6684,
      6685
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6694,
    "end": 6698,
    "range": [
      6694,
      6698
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 6699,
    "end": 6708,
    "range": [
      6699,
      6708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6708,
    "end": 6709,
    "range": [
      6708,
      6709
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 6710,
    "end": 6723,
    "range": [
      6710,
      6723
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6723,
    "end": 6724,
    "range": [
      6723,
      6724
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6724,
    "end": 6725,
    "range": [
      6724,
      6725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6725,
    "end": 6726,
    "range": [
      6725,
      6726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6726,
    "end": 6727,
    "range": [
      6726,
      6727
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6728,
    "end": 6734,
    "range": [
      6728,
      6734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6734,
    "end": 6735,
    "range": [
      6734,
      6735
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6744,
    "end": 6748,
    "range": [
      6744,
      6748
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 6749,
    "end": 6759,
    "range": [
      6749,
      6759
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6759,
    "end": 6760,
    "range": [
      6759,
      6760
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 6761,
    "end": 6775,
    "range": [
      6761,
      6775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6775,
    "end": 6776,
    "range": [
      6775,
      6776
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6776,
    "end": 6777,
    "range": [
      6776,
      6777
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6777,
    "end": 6778,
    "range": [
      6777,
      6778
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6778,
    "end": 6779,
    "range": [
      6778,
      6779
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6780,
    "end": 6786,
    "range": [
      6780,
      6786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6786,
    "end": 6787,
    "range": [
      6786,
      6787
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6796,
    "end": 6800,
    "range": [
      6796,
      6800
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 6801,
    "end": 6809,
    "range": [
      6801,
      6809
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6809,
    "end": 6810,
    "range": [
      6809,
      6810
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 6811,
    "end": 6823,
    "range": [
      6811,
      6823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6823,
    "end": 6824,
    "range": [
      6823,
      6824
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6824,
    "end": 6825,
    "range": [
      6824,
      6825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6825,
    "end": 6826,
    "range": [
      6825,
      6826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6826,
    "end": 6827,
    "range": [
      6826,
      6827
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6828,
    "end": 6834,
    "range": [
      6828,
      6834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6834,
    "end": 6835,
    "range": [
      6834,
      6835
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6844,
    "end": 6848,
    "range": [
      6844,
      6848
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 6849,
    "end": 6857,
    "range": [
      6849,
      6857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6857,
    "end": 6858,
    "range": [
      6857,
      6858
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6859,
    "end": 6864,
    "range": [
      6859,
      6864
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 6865,
    "end": 6866,
    "range": [
      6865,
      6866
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6866,
    "end": 6867,
    "range": [
      6866,
      6867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6868,
    "end": 6869,
    "range": [
      6868,
      6869
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6869,
    "end": 6870,
    "range": [
      6869,
      6870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6871,
    "end": 6872,
    "range": [
      6871,
      6872
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6873,
    "end": 6874,
    "range": [
      6873,
      6874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6874,
    "end": 6875,
    "range": [
      6874,
      6875
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6876,
    "end": 6882,
    "range": [
      6876,
      6882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6882,
    "end": 6883,
    "range": [
      6882,
      6883
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6892,
    "end": 6896,
    "range": [
      6892,
      6896
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 6897,
    "end": 6905,
    "range": [
      6897,
      6905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6905,
    "end": 6906,
    "range": [
      6905,
      6906
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 6907,
    "end": 6919,
    "range": [
      6907,
      6919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6919,
    "end": 6920,
    "range": [
      6919,
      6920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6920,
    "end": 6921,
    "range": [
      6920,
      6921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6921,
    "end": 6922,
    "range": [
      6921,
      6922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6922,
    "end": 6923,
    "range": [
      6922,
      6923
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6924,
    "end": 6930,
    "range": [
      6924,
      6930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6930,
    "end": 6931,
    "range": [
      6930,
      6931
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6940,
    "end": 6944,
    "range": [
      6940,
      6944
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 6945,
    "end": 6956,
    "range": [
      6945,
      6956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6956,
    "end": 6957,
    "range": [
      6956,
      6957
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 6958,
    "end": 6973,
    "range": [
      6958,
      6973
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6973,
    "end": 6974,
    "range": [
      6973,
      6974
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6974,
    "end": 6975,
    "range": [
      6974,
      6975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6975,
    "end": 6976,
    "range": [
      6975,
      6976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6976,
    "end": 6977,
    "range": [
      6976,
      6977
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6978,
    "end": 6984,
    "range": [
      6978,
      6984
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6984,
    "end": 6985,
    "range": [
      6984,
      6985
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 6994,
    "end": 6998,
    "range": [
      6994,
      6998
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 6999,
    "end": 7007,
    "range": [
      6999,
      7007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7007,
    "end": 7008,
    "range": [
      7007,
      7008
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 7009,
    "end": 7020,
    "range": [
      7009,
      7020
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7020,
    "end": 7021,
    "range": [
      7020,
      7021
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7021,
    "end": 7022,
    "range": [
      7021,
      7022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7022,
    "end": 7023,
    "range": [
      7022,
      7023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7023,
    "end": 7024,
    "range": [
      7023,
      7024
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7025,
    "end": 7031,
    "range": [
      7025,
      7031
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7031,
    "end": 7032,
    "range": [
      7031,
      7032
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7041,
    "end": 7048,
    "range": [
      7041,
      7048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7048,
    "end": 7049,
    "range": [
      7048,
      7049
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7050,
    "end": 7055,
    "range": [
      7050,
      7055
    ]
  },
  {
    "type": "Identifier",
    "value": "_y",
    "start": 7056,
    "end": 7058,
    "range": [
      7056,
      7058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7058,
    "end": 7059,
    "range": [
      7058,
      7059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7060,
    "end": 7061,
    "range": [
      7060,
      7061
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7061,
    "end": 7062,
    "range": [
      7061,
      7062
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7063,
    "end": 7064,
    "range": [
      7063,
      7064
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7065,
    "end": 7066,
    "range": [
      7065,
      7066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7066,
    "end": 7067,
    "range": [
      7066,
      7067
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7068,
    "end": 7074,
    "range": [
      7068,
      7074
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7074,
    "end": 7075,
    "range": [
      7074,
      7075
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7080,
    "end": 7081,
    "range": [
      7080,
      7081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7082,
    "end": 7083,
    "range": [
      7082,
      7083
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7085,
    "end": 7093,
    "range": [
      7085,
      7093
    ]
  },
  {
    "type": "Identifier",
    "value": "narrowingNarrows2",
    "start": 7094,
    "end": 7111,
    "range": [
      7094,
      7111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7111,
    "end": 7112,
    "range": [
      7111,
      7112
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7112,
    "end": 7113,
    "range": [
      7112,
      7113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7113,
    "end": 7114,
    "range": [
      7113,
      7114
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7115,
    "end": 7119,
    "range": [
      7115,
      7119
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7120,
    "end": 7121,
    "range": [
      7120,
      7121
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 7122,
    "end": 7123,
    "range": [
      7122,
      7123
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7124,
    "end": 7125,
    "range": [
      7124,
      7125
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 7126,
    "end": 7133,
    "range": [
      7126,
      7133
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7134,
    "end": 7135,
    "range": [
      7134,
      7135
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 7136,
    "end": 7145,
    "range": [
      7136,
      7145
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7145,
    "end": 7146,
    "range": [
      7145,
      7146
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7147,
    "end": 7148,
    "range": [
      7147,
      7148
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 7153,
    "end": 7159,
    "range": [
      7153,
      7159
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7160,
    "end": 7161,
    "range": [
      7160,
      7161
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7161,
    "end": 7167,
    "range": [
      7161,
      7167
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7168,
    "end": 7169,
    "range": [
      7168,
      7169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7169,
    "end": 7170,
    "range": [
      7169,
      7170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7171,
    "end": 7172,
    "range": [
      7171,
      7172
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7181,
    "end": 7185,
    "range": [
      7181,
      7185
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 7186,
    "end": 7194,
    "range": [
      7186,
      7194
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7194,
    "end": 7195,
    "range": [
      7194,
      7195
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 7196,
    "end": 7208,
    "range": [
      7196,
      7208
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7208,
    "end": 7209,
    "range": [
      7208,
      7209
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7209,
    "end": 7210,
    "range": [
      7209,
      7210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7210,
    "end": 7211,
    "range": [
      7210,
      7211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7211,
    "end": 7212,
    "range": [
      7211,
      7212
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7213,
    "end": 7219,
    "range": [
      7213,
      7219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7219,
    "end": 7220,
    "range": [
      7219,
      7220
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7229,
    "end": 7233,
    "range": [
      7229,
      7233
    ]
  },
  {
    "type": "String",
    "value": "'boolean'",
    "start": 7234,
    "end": 7243,
    "range": [
      7234,
      7243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7243,
    "end": 7244,
    "range": [
      7243,
      7244
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 7245,
    "end": 7258,
    "range": [
      7245,
      7258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7258,
    "end": 7259,
    "range": [
      7258,
      7259
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7259,
    "end": 7260,
    "range": [
      7259,
      7260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7260,
    "end": 7261,
    "range": [
      7260,
      7261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7261,
    "end": 7262,
    "range": [
      7261,
      7262
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7263,
    "end": 7269,
    "range": [
      7263,
      7269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7269,
    "end": 7270,
    "range": [
      7269,
      7270
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7279,
    "end": 7283,
    "range": [
      7279,
      7283
    ]
  },
  {
    "type": "String",
    "value": "'function'",
    "start": 7284,
    "end": 7294,
    "range": [
      7284,
      7294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7294,
    "end": 7295,
    "range": [
      7294,
      7295
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 7296,
    "end": 7307,
    "range": [
      7296,
      7307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7307,
    "end": 7308,
    "range": [
      7307,
      7308
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7308,
    "end": 7309,
    "range": [
      7308,
      7309
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7309,
    "end": 7310,
    "range": [
      7309,
      7310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7310,
    "end": 7311,
    "range": [
      7310,
      7311
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7312,
    "end": 7318,
    "range": [
      7312,
      7318
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7318,
    "end": 7319,
    "range": [
      7318,
      7319
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7328,
    "end": 7332,
    "range": [
      7328,
      7332
    ]
  },
  {
    "type": "String",
    "value": "'symbol'",
    "start": 7333,
    "end": 7341,
    "range": [
      7333,
      7341
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7341,
    "end": 7342,
    "range": [
      7341,
      7342
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 7343,
    "end": 7354,
    "range": [
      7343,
      7354
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7354,
    "end": 7355,
    "range": [
      7354,
      7355
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7355,
    "end": 7356,
    "range": [
      7355,
      7356
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7356,
    "end": 7357,
    "range": [
      7356,
      7357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7357,
    "end": 7358,
    "range": [
      7357,
      7358
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7359,
    "end": 7365,
    "range": [
      7359,
      7365
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7365,
    "end": 7366,
    "range": [
      7365,
      7366
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7375,
    "end": 7379,
    "range": [
      7375,
      7379
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 7380,
    "end": 7388,
    "range": [
      7380,
      7388
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7388,
    "end": 7389,
    "range": [
      7388,
      7389
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7390,
    "end": 7395,
    "range": [
      7390,
      7395
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 7396,
    "end": 7397,
    "range": [
      7396,
      7397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7397,
    "end": 7398,
    "range": [
      7397,
      7398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7399,
    "end": 7400,
    "range": [
      7399,
      7400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7400,
    "end": 7401,
    "range": [
      7400,
      7401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7402,
    "end": 7403,
    "range": [
      7402,
      7403
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 7404,
    "end": 7415,
    "range": [
      7404,
      7415
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7415,
    "end": 7416,
    "range": [
      7415,
      7416
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7416,
    "end": 7417,
    "range": [
      7416,
      7417
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7417,
    "end": 7418,
    "range": [
      7417,
      7418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7418,
    "end": 7419,
    "range": [
      7418,
      7419
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7420,
    "end": 7426,
    "range": [
      7420,
      7426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7426,
    "end": 7427,
    "range": [
      7426,
      7427
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7436,
    "end": 7440,
    "range": [
      7436,
      7440
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 7441,
    "end": 7449,
    "range": [
      7441,
      7449
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7449,
    "end": 7450,
    "range": [
      7449,
      7450
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 7451,
    "end": 7463,
    "range": [
      7451,
      7463
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7463,
    "end": 7464,
    "range": [
      7463,
      7464
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7464,
    "end": 7465,
    "range": [
      7464,
      7465
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7465,
    "end": 7466,
    "range": [
      7465,
      7466
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7466,
    "end": 7467,
    "range": [
      7466,
      7467
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7468,
    "end": 7474,
    "range": [
      7468,
      7474
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7474,
    "end": 7475,
    "range": [
      7474,
      7475
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7484,
    "end": 7488,
    "range": [
      7484,
      7488
    ]
  },
  {
    "type": "String",
    "value": "'undefined'",
    "start": 7489,
    "end": 7500,
    "range": [
      7489,
      7500
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7500,
    "end": 7501,
    "range": [
      7500,
      7501
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 7502,
    "end": 7517,
    "range": [
      7502,
      7517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7517,
    "end": 7518,
    "range": [
      7517,
      7518
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7518,
    "end": 7519,
    "range": [
      7518,
      7519
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7519,
    "end": 7520,
    "range": [
      7519,
      7520
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7520,
    "end": 7521,
    "range": [
      7520,
      7521
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7522,
    "end": 7528,
    "range": [
      7522,
      7528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7528,
    "end": 7529,
    "range": [
      7528,
      7529
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7538,
    "end": 7542,
    "range": [
      7538,
      7542
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 7543,
    "end": 7551,
    "range": [
      7543,
      7551
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7551,
    "end": 7552,
    "range": [
      7551,
      7552
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 7553,
    "end": 7564,
    "range": [
      7553,
      7564
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7564,
    "end": 7565,
    "range": [
      7564,
      7565
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7565,
    "end": 7566,
    "range": [
      7565,
      7566
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7566,
    "end": 7567,
    "range": [
      7566,
      7567
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7567,
    "end": 7568,
    "range": [
      7567,
      7568
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7569,
    "end": 7575,
    "range": [
      7569,
      7575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7575,
    "end": 7576,
    "range": [
      7575,
      7576
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 7585,
    "end": 7592,
    "range": [
      7585,
      7592
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7592,
    "end": 7593,
    "range": [
      7592,
      7593
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7594,
    "end": 7599,
    "range": [
      7594,
      7599
    ]
  },
  {
    "type": "Identifier",
    "value": "_y",
    "start": 7600,
    "end": 7602,
    "range": [
      7600,
      7602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7602,
    "end": 7603,
    "range": [
      7602,
      7603
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7604,
    "end": 7605,
    "range": [
      7604,
      7605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7605,
    "end": 7606,
    "range": [
      7605,
      7606
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7607,
    "end": 7608,
    "range": [
      7607,
      7608
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 7609,
    "end": 7620,
    "range": [
      7609,
      7620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7620,
    "end": 7621,
    "range": [
      7620,
      7621
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7621,
    "end": 7622,
    "range": [
      7621,
      7622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7622,
    "end": 7623,
    "range": [
      7622,
      7623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7623,
    "end": 7624,
    "range": [
      7623,
      7624
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7625,
    "end": 7631,
    "range": [
      7625,
      7631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7631,
    "end": 7632,
    "range": [
      7631,
      7632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7637,
    "end": 7638,
    "range": [
      7637,
      7638
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7639,
    "end": 7640,
    "range": [
      7639,
      7640
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7667,
    "end": 7675,
    "range": [
      7667,
      7675
    ]
  },
  {
    "type": "Identifier",
    "value": "testUnionWithTempalte",
    "start": 7676,
    "end": 7697,
    "range": [
      7676,
      7697
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7697,
    "end": 7698,
    "range": [
      7697,
      7698
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7698,
    "end": 7699,
    "range": [
      7698,
      7699
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7699,
    "end": 7700,
    "range": [
      7699,
      7700
    ]
  },
  {
    "type": "Identifier",
    "value": "Basic",
    "start": 7701,
    "end": 7706,
    "range": [
      7701,
      7706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7706,
    "end": 7707,
    "range": [
      7706,
      7707
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7708,
    "end": 7709,
    "range": [
      7708,
      7709
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 7714,
    "end": 7720,
    "range": [
      7714,
      7720
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7721,
    "end": 7722,
    "range": [
      7721,
      7722
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 7722,
    "end": 7728,
    "range": [
      7722,
      7728
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7729,
    "end": 7730,
    "range": [
      7729,
      7730
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7730,
    "end": 7731,
    "range": [
      7730,
      7731
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7732,
    "end": 7733,
    "range": [
      7732,
      7733
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7742,
    "end": 7746,
    "range": [
      7742,
      7746
    ]
  },
  {
    "type": "Template",
    "value": "`number`",
    "start": 7747,
    "end": 7755,
    "range": [
      7747,
      7755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7755,
    "end": 7756,
    "range": [
      7755,
      7756
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 7757,
    "end": 7769,
    "range": [
      7757,
      7769
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7769,
    "end": 7770,
    "range": [
      7769,
      7770
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7770,
    "end": 7771,
    "range": [
      7770,
      7771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7771,
    "end": 7772,
    "range": [
      7771,
      7772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7772,
    "end": 7773,
    "range": [
      7772,
      7773
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7774,
    "end": 7780,
    "range": [
      7774,
      7780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7780,
    "end": 7781,
    "range": [
      7780,
      7781
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7790,
    "end": 7794,
    "range": [
      7790,
      7794
    ]
  },
  {
    "type": "Template",
    "value": "`boolean`",
    "start": 7795,
    "end": 7804,
    "range": [
      7795,
      7804
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7804,
    "end": 7805,
    "range": [
      7804,
      7805
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBoolean",
    "start": 7806,
    "end": 7819,
    "range": [
      7806,
      7819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7819,
    "end": 7820,
    "range": [
      7819,
      7820
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7820,
    "end": 7821,
    "range": [
      7820,
      7821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7821,
    "end": 7822,
    "range": [
      7821,
      7822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7822,
    "end": 7823,
    "range": [
      7822,
      7823
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7824,
    "end": 7830,
    "range": [
      7824,
      7830
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7830,
    "end": 7831,
    "range": [
      7830,
      7831
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7840,
    "end": 7844,
    "range": [
      7840,
      7844
    ]
  },
  {
    "type": "Template",
    "value": "`function`",
    "start": 7845,
    "end": 7855,
    "range": [
      7845,
      7855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7855,
    "end": 7856,
    "range": [
      7855,
      7856
    ]
  },
  {
    "type": "Identifier",
    "value": "assertFunction",
    "start": 7857,
    "end": 7871,
    "range": [
      7857,
      7871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7871,
    "end": 7872,
    "range": [
      7871,
      7872
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7872,
    "end": 7873,
    "range": [
      7872,
      7873
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7873,
    "end": 7874,
    "range": [
      7873,
      7874
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7874,
    "end": 7875,
    "range": [
      7874,
      7875
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7876,
    "end": 7882,
    "range": [
      7876,
      7882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7882,
    "end": 7883,
    "range": [
      7882,
      7883
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7892,
    "end": 7896,
    "range": [
      7892,
      7896
    ]
  },
  {
    "type": "Template",
    "value": "`symbol`",
    "start": 7897,
    "end": 7905,
    "range": [
      7897,
      7905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7905,
    "end": 7906,
    "range": [
      7905,
      7906
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 7907,
    "end": 7919,
    "range": [
      7907,
      7919
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7919,
    "end": 7920,
    "range": [
      7919,
      7920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7920,
    "end": 7921,
    "range": [
      7920,
      7921
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7921,
    "end": 7922,
    "range": [
      7921,
      7922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7922,
    "end": 7923,
    "range": [
      7922,
      7923
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7924,
    "end": 7930,
    "range": [
      7924,
      7930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7930,
    "end": 7931,
    "range": [
      7930,
      7931
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7940,
    "end": 7944,
    "range": [
      7940,
      7944
    ]
  },
  {
    "type": "Template",
    "value": "`object`",
    "start": 7945,
    "end": 7953,
    "range": [
      7945,
      7953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7953,
    "end": 7954,
    "range": [
      7953,
      7954
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObject",
    "start": 7955,
    "end": 7967,
    "range": [
      7955,
      7967
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7967,
    "end": 7968,
    "range": [
      7967,
      7968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7968,
    "end": 7969,
    "range": [
      7968,
      7969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7969,
    "end": 7970,
    "range": [
      7969,
      7970
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7970,
    "end": 7971,
    "range": [
      7970,
      7971
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 7972,
    "end": 7978,
    "range": [
      7972,
      7978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7978,
    "end": 7979,
    "range": [
      7978,
      7979
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 7988,
    "end": 7992,
    "range": [
      7988,
      7992
    ]
  },
  {
    "type": "Template",
    "value": "`string`",
    "start": 7993,
    "end": 8001,
    "range": [
      7993,
      8001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8001,
    "end": 8002,
    "range": [
      8001,
      8002
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 8003,
    "end": 8015,
    "range": [
      8003,
      8015
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8015,
    "end": 8016,
    "range": [
      8015,
      8016
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8016,
    "end": 8017,
    "range": [
      8016,
      8017
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8017,
    "end": 8018,
    "range": [
      8017,
      8018
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8018,
    "end": 8019,
    "range": [
      8018,
      8019
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8020,
    "end": 8026,
    "range": [
      8020,
      8026
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8026,
    "end": 8027,
    "range": [
      8026,
      8027
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8036,
    "end": 8040,
    "range": [
      8036,
      8040
    ]
  },
  {
    "type": "Template",
    "value": "`undefined`",
    "start": 8041,
    "end": 8052,
    "range": [
      8041,
      8052
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8052,
    "end": 8053,
    "range": [
      8052,
      8053
    ]
  },
  {
    "type": "Identifier",
    "value": "assertUndefined",
    "start": 8054,
    "end": 8069,
    "range": [
      8054,
      8069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8069,
    "end": 8070,
    "range": [
      8069,
      8070
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8070,
    "end": 8071,
    "range": [
      8070,
      8071
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8071,
    "end": 8072,
    "range": [
      8071,
      8072
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8072,
    "end": 8073,
    "range": [
      8072,
      8073
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8074,
    "end": 8080,
    "range": [
      8074,
      8080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8080,
    "end": 8081,
    "range": [
      8080,
      8081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8086,
    "end": 8087,
    "range": [
      8086,
      8087
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNever",
    "start": 8092,
    "end": 8103,
    "range": [
      8092,
      8103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8103,
    "end": 8104,
    "range": [
      8103,
      8104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8104,
    "end": 8105,
    "range": [
      8104,
      8105
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8105,
    "end": 8106,
    "range": [
      8105,
      8106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8106,
    "end": 8107,
    "range": [
      8106,
      8107
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8108,
    "end": 8109,
    "range": [
      8108,
      8109
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8111,
    "end": 8119,
    "range": [
      8111,
      8119
    ]
  },
  {
    "type": "Identifier",
    "value": "fallThroughTestWithTempalte",
    "start": 8120,
    "end": 8147,
    "range": [
      8120,
      8147
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8147,
    "end": 8148,
    "range": [
      8147,
      8148
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8148,
    "end": 8149,
    "range": [
      8148,
      8149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8149,
    "end": 8150,
    "range": [
      8149,
      8150
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8151,
    "end": 8157,
    "range": [
      8151,
      8157
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8158,
    "end": 8159,
    "range": [
      8158,
      8159
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8160,
    "end": 8166,
    "range": [
      8160,
      8166
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8167,
    "end": 8168,
    "range": [
      8167,
      8168
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 8169,
    "end": 8176,
    "range": [
      8169,
      8176
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8177,
    "end": 8178,
    "range": [
      8177,
      8178
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 8179,
    "end": 8185,
    "range": [
      8179,
      8185
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8185,
    "end": 8186,
    "range": [
      8185,
      8186
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8187,
    "end": 8188,
    "range": [
      8187,
      8188
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 8193,
    "end": 8199,
    "range": [
      8193,
      8199
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8200,
    "end": 8201,
    "range": [
      8200,
      8201
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8201,
    "end": 8207,
    "range": [
      8201,
      8207
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8208,
    "end": 8209,
    "range": [
      8208,
      8209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8209,
    "end": 8210,
    "range": [
      8209,
      8210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8211,
    "end": 8212,
    "range": [
      8211,
      8212
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8221,
    "end": 8225,
    "range": [
      8221,
      8225
    ]
  },
  {
    "type": "Template",
    "value": "`number`",
    "start": 8226,
    "end": 8234,
    "range": [
      8226,
      8234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8234,
    "end": 8235,
    "range": [
      8234,
      8235
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 8248,
    "end": 8260,
    "range": [
      8248,
      8260
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8260,
    "end": 8261,
    "range": [
      8260,
      8261
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8261,
    "end": 8262,
    "range": [
      8261,
      8262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8262,
    "end": 8263,
    "range": [
      8262,
      8263
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8272,
    "end": 8276,
    "range": [
      8272,
      8276
    ]
  },
  {
    "type": "Template",
    "value": "`string`",
    "start": 8277,
    "end": 8285,
    "range": [
      8277,
      8285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8285,
    "end": 8286,
    "range": [
      8285,
      8286
    ]
  },
  {
    "type": "Identifier",
    "value": "assertStringOrNumber",
    "start": 8299,
    "end": 8319,
    "range": [
      8299,
      8319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8319,
    "end": 8320,
    "range": [
      8319,
      8320
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8320,
    "end": 8321,
    "range": [
      8320,
      8321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8321,
    "end": 8322,
    "range": [
      8321,
      8322
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8335,
    "end": 8340,
    "range": [
      8335,
      8340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8340,
    "end": 8341,
    "range": [
      8340,
      8341
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 8350,
    "end": 8357,
    "range": [
      8350,
      8357
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8357,
    "end": 8358,
    "range": [
      8357,
      8358
    ]
  },
  {
    "type": "Identifier",
    "value": "assertObject",
    "start": 8371,
    "end": 8383,
    "range": [
      8371,
      8383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8383,
    "end": 8384,
    "range": [
      8383,
      8384
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8384,
    "end": 8385,
    "range": [
      8384,
      8385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8385,
    "end": 8386,
    "range": [
      8385,
      8386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8386,
    "end": 8387,
    "range": [
      8386,
      8387
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8396,
    "end": 8400,
    "range": [
      8396,
      8400
    ]
  },
  {
    "type": "Template",
    "value": "`number`",
    "start": 8401,
    "end": 8409,
    "range": [
      8401,
      8409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8409,
    "end": 8410,
    "range": [
      8409,
      8410
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8419,
    "end": 8423,
    "range": [
      8419,
      8423
    ]
  },
  {
    "type": "Template",
    "value": "`boolean`",
    "start": 8424,
    "end": 8433,
    "range": [
      8424,
      8433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8433,
    "end": 8434,
    "range": [
      8433,
      8434
    ]
  },
  {
    "type": "Identifier",
    "value": "assertBooleanOrObject",
    "start": 8447,
    "end": 8468,
    "range": [
      8447,
      8468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8468,
    "end": 8469,
    "range": [
      8468,
      8469
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8469,
    "end": 8470,
    "range": [
      8469,
      8470
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8470,
    "end": 8471,
    "range": [
      8470,
      8471
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8471,
    "end": 8472,
    "range": [
      8471,
      8472
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 8485,
    "end": 8490,
    "range": [
      8485,
      8490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8490,
    "end": 8491,
    "range": [
      8490,
      8491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8496,
    "end": 8497,
    "range": [
      8496,
      8497
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8498,
    "end": 8499,
    "range": [
      8498,
      8499
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8501,
    "end": 8509,
    "range": [
      8501,
      8509
    ]
  },
  {
    "type": "Identifier",
    "value": "keyofNarrowingWithTemplate",
    "start": 8510,
    "end": 8536,
    "range": [
      8510,
      8536
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8536,
    "end": 8537,
    "range": [
      8536,
      8537
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 8537,
    "end": 8538,
    "range": [
      8537,
      8538
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8539,
    "end": 8546,
    "range": [
      8539,
      8546
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8547,
    "end": 8548,
    "range": [
      8547,
      8548
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8549,
    "end": 8550,
    "range": [
      8549,
      8550
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 8550,
    "end": 8551,
    "range": [
      8550,
      8551
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 8552,
    "end": 8554,
    "range": [
      8552,
      8554
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8555,
    "end": 8560,
    "range": [
      8555,
      8560
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 8561,
    "end": 8562,
    "range": [
      8561,
      8562
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8562,
    "end": 8563,
    "range": [
      8562,
      8563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8563,
    "end": 8564,
    "range": [
      8563,
      8564
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 8565,
    "end": 8571,
    "range": [
      8565,
      8571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8572,
    "end": 8573,
    "range": [
      8572,
      8573
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8573,
    "end": 8574,
    "range": [
      8573,
      8574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8574,
    "end": 8575,
    "range": [
      8574,
      8575
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8575,
    "end": 8576,
    "range": [
      8575,
      8576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8576,
    "end": 8577,
    "range": [
      8576,
      8577
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8578,
    "end": 8583,
    "range": [
      8578,
      8583
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 8584,
    "end": 8585,
    "range": [
      8584,
      8585
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8585,
    "end": 8586,
    "range": [
      8585,
      8586
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8587,
    "end": 8588,
    "range": [
      8587,
      8588
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8593,
    "end": 8601,
    "range": [
      8593,
      8601
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 8602,
    "end": 8614,
    "range": [
      8602,
      8614
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8614,
    "end": 8615,
    "range": [
      8614,
      8615
    ]
  },
  {
    "type": "Identifier",
    "value": "k1",
    "start": 8615,
    "end": 8617,
    "range": [
      8615,
      8617
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8617,
    "end": 8618,
    "range": [
      8617,
      8618
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 8619,
    "end": 8624,
    "range": [
      8619,
      8624
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 8625,
    "end": 8626,
    "range": [
      8625,
      8626
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8626,
    "end": 8627,
    "range": [
      8626,
      8627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8628,
    "end": 8629,
    "range": [
      8628,
      8629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8630,
    "end": 8631,
    "range": [
      8630,
      8631
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 8636,
    "end": 8642,
    "range": [
      8636,
      8642
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8643,
    "end": 8644,
    "range": [
      8643,
      8644
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 8644,
    "end": 8650,
    "range": [
      8644,
      8650
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8651,
    "end": 8652,
    "range": [
      8651,
      8652
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8652,
    "end": 8653,
    "range": [
      8652,
      8653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8654,
    "end": 8655,
    "range": [
      8654,
      8655
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8664,
    "end": 8668,
    "range": [
      8664,
      8668
    ]
  },
  {
    "type": "Template",
    "value": "`number`",
    "start": 8669,
    "end": 8677,
    "range": [
      8669,
      8677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8677,
    "end": 8678,
    "range": [
      8677,
      8678
    ]
  },
  {
    "type": "Identifier",
    "value": "assertNumber",
    "start": 8679,
    "end": 8691,
    "range": [
      8679,
      8691
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8691,
    "end": 8692,
    "range": [
      8691,
      8692
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8692,
    "end": 8693,
    "range": [
      8692,
      8693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8693,
    "end": 8694,
    "range": [
      8693,
      8694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8694,
    "end": 8695,
    "range": [
      8694,
      8695
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 8696,
    "end": 8708,
    "range": [
      8696,
      8708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8708,
    "end": 8709,
    "range": [
      8708,
      8709
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8709,
    "end": 8710,
    "range": [
      8709,
      8710
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8710,
    "end": 8711,
    "range": [
      8710,
      8711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8711,
    "end": 8712,
    "range": [
      8711,
      8712
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8713,
    "end": 8719,
    "range": [
      8713,
      8719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8719,
    "end": 8720,
    "range": [
      8719,
      8720
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8729,
    "end": 8733,
    "range": [
      8729,
      8733
    ]
  },
  {
    "type": "Template",
    "value": "`symbol`",
    "start": 8734,
    "end": 8742,
    "range": [
      8734,
      8742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8742,
    "end": 8743,
    "range": [
      8742,
      8743
    ]
  },
  {
    "type": "Identifier",
    "value": "assertSymbol",
    "start": 8744,
    "end": 8756,
    "range": [
      8744,
      8756
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8756,
    "end": 8757,
    "range": [
      8756,
      8757
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8757,
    "end": 8758,
    "range": [
      8757,
      8758
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8758,
    "end": 8759,
    "range": [
      8758,
      8759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8759,
    "end": 8760,
    "range": [
      8759,
      8760
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 8761,
    "end": 8773,
    "range": [
      8761,
      8773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8773,
    "end": 8774,
    "range": [
      8773,
      8774
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8774,
    "end": 8775,
    "range": [
      8774,
      8775
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8775,
    "end": 8776,
    "range": [
      8775,
      8776
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8776,
    "end": 8777,
    "range": [
      8776,
      8777
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8778,
    "end": 8784,
    "range": [
      8778,
      8784
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8784,
    "end": 8785,
    "range": [
      8784,
      8785
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 8794,
    "end": 8798,
    "range": [
      8794,
      8798
    ]
  },
  {
    "type": "Template",
    "value": "`string`",
    "start": 8799,
    "end": 8807,
    "range": [
      8799,
      8807
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8807,
    "end": 8808,
    "range": [
      8807,
      8808
    ]
  },
  {
    "type": "Identifier",
    "value": "assertString",
    "start": 8809,
    "end": 8821,
    "range": [
      8809,
      8821
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8821,
    "end": 8822,
    "range": [
      8821,
      8822
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8822,
    "end": 8823,
    "range": [
      8822,
      8823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8823,
    "end": 8824,
    "range": [
      8823,
      8824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8824,
    "end": 8825,
    "range": [
      8824,
      8825
    ]
  },
  {
    "type": "Identifier",
    "value": "assertKeyofS",
    "start": 8826,
    "end": 8838,
    "range": [
      8826,
      8838
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8838,
    "end": 8839,
    "range": [
      8838,
      8839
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 8839,
    "end": 8840,
    "range": [
      8839,
      8840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8840,
    "end": 8841,
    "range": [
      8840,
      8841
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8841,
    "end": 8842,
    "range": [
      8841,
      8842
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 8843,
    "end": 8849,
    "range": [
      8843,
      8849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8849,
    "end": 8850,
    "range": [
      8849,
      8850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8855,
    "end": 8856,
    "range": [
      8855,
      8856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8857,
    "end": 8858,
    "range": [
      8857,
      8858
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8910,
    "end": 8918,
    "range": [
      8910,
      8918
    ]
  },
  {
    "type": "Identifier",
    "value": "multipleGenericFuseWithBoth",
    "start": 8919,
    "end": 8946,
    "range": [
      8919,
      8946
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 8946,
    "end": 8947,
    "range": [
      8946,
      8947
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 8947,
    "end": 8948,
    "range": [
      8947,
      8948
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8949,
    "end": 8956,
    "range": [
      8949,
      8956
    ]
  },
  {
    "type": "Identifier",
    "value": "L",
    "start": 8957,
    "end": 8958,
    "range": [
      8957,
      8958
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8959,
    "end": 8960,
    "range": [
      8959,
      8960
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8961,
    "end": 8967,
    "range": [
      8961,
      8967
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8967,
    "end": 8968,
    "range": [
      8967,
      8968
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 8969,
    "end": 8970,
    "range": [
      8969,
      8970
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 8971,
    "end": 8978,
    "range": [
      8971,
      8978
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 8979,
    "end": 8980,
    "range": [
      8979,
      8980
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8981,
    "end": 8982,
    "range": [
      8981,
      8982
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 8983,
    "end": 8989,
    "range": [
      8983,
      8989
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 8989,
    "end": 8990,
    "range": [
      8989,
      8990
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8990,
    "end": 8991,
    "range": [
      8990,
      8991
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 8991,
    "end": 8993,
    "range": [
      8991,
      8993
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8993,
    "end": 8994,
    "range": [
      8993,
      8994
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 8995,
    "end": 8996,
    "range": [
      8995,
      8996
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8997,
    "end": 8998,
    "range": [
      8997,
      8998
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 8999,
    "end": 9000,
    "range": [
      8999,
      9000
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9000,
    "end": 9001,
    "range": [
      9000,
      9001
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9001,
    "end": 9002,
    "range": [
      9001,
      9002
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9003,
    "end": 9004,
    "range": [
      9003,
      9004
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 9004,
    "end": 9005,
    "range": [
      9004,
      9005
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9005,
    "end": 9006,
    "range": [
      9005,
      9006
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9007,
    "end": 9013,
    "range": [
      9007,
      9013
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9013,
    "end": 9014,
    "range": [
      9013,
      9014
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9015,
    "end": 9016,
    "range": [
      9015,
      9016
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9017,
    "end": 9018,
    "range": [
      9017,
      9018
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 9018,
    "end": 9019,
    "range": [
      9018,
      9019
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9019,
    "end": 9020,
    "range": [
      9019,
      9020
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 9021,
    "end": 9027,
    "range": [
      9021,
      9027
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9027,
    "end": 9028,
    "range": [
      9027,
      9028
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9029,
    "end": 9030,
    "range": [
      9029,
      9030
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9031,
    "end": 9032,
    "range": [
      9031,
      9032
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9032,
    "end": 9033,
    "range": [
      9032,
      9033
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 9033,
    "end": 9034,
    "range": [
      9033,
      9034
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9035,
    "end": 9036,
    "range": [
      9035,
      9036
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 9037,
    "end": 9038,
    "range": [
      9037,
      9038
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9038,
    "end": 9039,
    "range": [
      9038,
      9039
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9039,
    "end": 9040,
    "range": [
      9039,
      9040
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9041,
    "end": 9042,
    "range": [
      9041,
      9042
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 9047,
    "end": 9053,
    "range": [
      9047,
      9053
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9054,
    "end": 9055,
    "range": [
      9054,
      9055
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 9055,
    "end": 9061,
    "range": [
      9055,
      9061
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 9062,
    "end": 9064,
    "range": [
      9062,
      9064
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9064,
    "end": 9065,
    "range": [
      9064,
      9065
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9066,
    "end": 9067,
    "range": [
      9066,
      9067
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 9076,
    "end": 9080,
    "range": [
      9076,
      9080
    ]
  },
  {
    "type": "Template",
    "value": "`function`",
    "start": 9081,
    "end": 9091,
    "range": [
      9081,
      9091
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9091,
    "end": 9092,
    "range": [
      9091,
      9092
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9093,
    "end": 9099,
    "range": [
      9093,
      9099
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9100,
    "end": 9101,
    "range": [
      9100,
      9101
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 9101,
    "end": 9103,
    "range": [
      9101,
      9103
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9103,
    "end": 9104,
    "range": [
      9103,
      9104
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 9105,
    "end": 9106,
    "range": [
      9105,
      9106
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9106,
    "end": 9107,
    "range": [
      9106,
      9107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9107,
    "end": 9108,
    "range": [
      9107,
      9108
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 9117,
    "end": 9121,
    "range": [
      9117,
      9121
    ]
  },
  {
    "type": "String",
    "value": "'object'",
    "start": 9122,
    "end": 9130,
    "range": [
      9122,
      9130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9130,
    "end": 9131,
    "range": [
      9130,
      9131
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9132,
    "end": 9138,
    "range": [
      9132,
      9138
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9139,
    "end": 9140,
    "range": [
      9139,
      9140
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 9140,
    "end": 9142,
    "range": [
      9140,
      9142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9142,
    "end": 9143,
    "range": [
      9142,
      9143
    ]
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 9144,
    "end": 9149,
    "range": [
      9144,
      9149
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9149,
    "end": 9150,
    "range": [
      9149,
      9150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9150,
    "end": 9151,
    "range": [
      9150,
      9151
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 9160,
    "end": 9164,
    "range": [
      9160,
      9164
    ]
  },
  {
    "type": "Template",
    "value": "`number`",
    "start": 9165,
    "end": 9173,
    "range": [
      9165,
      9173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9173,
    "end": 9174,
    "range": [
      9173,
      9174
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 9175,
    "end": 9181,
    "range": [
      9175,
      9181
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9182,
    "end": 9183,
    "range": [
      9182,
      9183
    ]
  },
  {
    "type": "Identifier",
    "value": "xy",
    "start": 9183,
    "end": 9185,
    "range": [
      9183,
      9185
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9185,
    "end": 9186,
    "range": [
      9185,
      9186
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9191,
    "end": 9192,
    "range": [
      9191,
      9192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9193,
    "end": 9194,
    "range": [
      9193,
      9194
    ]
  }
]
```
