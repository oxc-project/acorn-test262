__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 9194,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 20,
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 29,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 24,
              "end": 29
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 48,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 37,
            "end": 46,
            "argument": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 100,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 71,
        "decorators": [],
        "name": "assertNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 81,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 73,
            "end": 81,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 75,
              "end": 81
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 100,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 89,
            "end": 98,
            "argument": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 124,
        "decorators": [],
        "name": "assertBoolean",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 125,
          "end": 135,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 126,
            "end": 135,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 128,
              "end": 135
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 137,
        "end": 154,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 143,
            "end": 152,
            "argument": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 156,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 165,
        "end": 177,
        "decorators": [],
        "name": "assertString",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 187,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 187,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 181,
              "end": 187
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 206,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 195,
            "end": 204,
            "argument": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 229,
        "decorators": [],
        "name": "assertSymbol",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 239,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 231,
            "end": 239,
            "typeAnnotation": {
              "type": "TSSymbolKeyword",
              "start": 233,
              "end": 239
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 258,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 247,
            "end": 256,
            "argument": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 283,
        "decorators": [],
        "name": "assertFunction",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 284,
          "end": 295,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 285,
            "end": 295,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 287,
              "end": 295,
              "typeName": {
                "type": "Identifier",
                "start": 287,
                "end": 295,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 297,
        "end": 314,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 303,
            "end": 312,
            "argument": {
              "type": "Identifier",
              "start": 310,
              "end": 311,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 316,
      "end": 366,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 337,
        "decorators": [],
        "name": "assertObject",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 338,
          "end": 347,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 347,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 341,
              "end": 347
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 366,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 355,
            "end": 364,
            "argument": {
              "type": "Identifier",
              "start": 362,
              "end": 363,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 368,
      "end": 431,
      "id": {
        "type": "Identifier",
        "start": 377,
        "end": 395,
        "decorators": [],
        "name": "assertObjectOrNull",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 396,
          "end": 412,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 412,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 399,
              "end": 412,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 414,
        "end": 431,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 420,
            "end": 429,
            "argument": {
              "type": "Identifier",
              "start": 427,
              "end": 428,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 433,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 442,
        "end": 457,
        "decorators": [],
        "name": "assertUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 458,
          "end": 470,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 459,
            "end": 470,
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 461,
              "end": 470
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 472,
        "end": 489,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 478,
            "end": 487,
            "argument": {
              "type": "Identifier",
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 537,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 509,
        "decorators": [],
        "name": "assertAll",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 510,
          "end": 518,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 511,
            "end": 518,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 513,
              "end": 518,
              "typeName": {
                "type": "Identifier",
                "start": 513,
                "end": 518,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 520,
        "end": 537,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 526,
            "end": 535,
            "argument": {
              "type": "Identifier",
              "start": 533,
              "end": 534,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 539,
      "end": 606,
      "id": {
        "type": "Identifier",
        "start": 548,
        "end": 568,
        "decorators": [],
        "name": "assertStringOrNumber",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 569,
          "end": 587,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 570,
            "end": 587,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 572,
              "end": 587,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 589,
        "end": 606,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 595,
            "end": 604,
            "argument": {
              "type": "Identifier",
              "start": 602,
              "end": 603,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 608,
      "end": 677,
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 638,
        "decorators": [],
        "name": "assertBooleanOrObject",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 639,
          "end": 658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 658,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 642,
              "end": 658,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 660,
        "end": 677,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 666,
            "end": 675,
            "argument": {
              "type": "Identifier",
              "start": 673,
              "end": 674,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 679,
      "end": 759,
      "id": {
        "type": "Identifier",
        "start": 684,
        "end": 689,
        "decorators": [],
        "name": "Basic",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 692,
        "end": 758,
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
            "start": 738,
            "end": 746,
            "typeName": {
              "type": "Identifier",
              "start": 738,
              "end": 746,
              "decorators": [],
              "name": "Function",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 749,
            "end": 758
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 761,
      "end": 1191,
      "id": {
        "type": "Identifier",
        "start": 770,
        "end": 779,
        "decorators": [],
        "name": "testUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 780,
          "end": 788,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 781,
            "end": 788,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 783,
              "end": 788,
              "typeName": {
                "type": "Identifier",
                "start": 783,
                "end": 788,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 790,
        "end": 1191,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 796,
            "end": 1169,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 804,
              "end": 812,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 811,
                "end": 812,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 824,
                "end": 863,
                "test": {
                  "type": "Literal",
                  "start": 829,
                  "end": 837,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 839,
                    "end": 855,
                    "expression": {
                      "type": "CallExpression",
                      "start": 839,
                      "end": 854,
                      "callee": {
                        "type": "Identifier",
                        "start": 839,
                        "end": 851,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 852,
                          "end": 853,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 856,
                    "end": 863,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 872,
                "end": 913,
                "test": {
                  "type": "Literal",
                  "start": 877,
                  "end": 886,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 888,
                    "end": 905,
                    "expression": {
                      "type": "CallExpression",
                      "start": 888,
                      "end": 904,
                      "callee": {
                        "type": "Identifier",
                        "start": 888,
                        "end": 901,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 902,
                          "end": 903,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 906,
                    "end": 913,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 922,
                "end": 965,
                "test": {
                  "type": "Literal",
                  "start": 927,
                  "end": 937,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 939,
                    "end": 957,
                    "expression": {
                      "type": "CallExpression",
                      "start": 939,
                      "end": 956,
                      "callee": {
                        "type": "Identifier",
                        "start": 939,
                        "end": 953,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 954,
                          "end": 955,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 958,
                    "end": 965,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 974,
                "end": 1013,
                "test": {
                  "type": "Literal",
                  "start": 979,
                  "end": 987,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 989,
                    "end": 1005,
                    "expression": {
                      "type": "CallExpression",
                      "start": 989,
                      "end": 1004,
                      "callee": {
                        "type": "Identifier",
                        "start": 989,
                        "end": 1001,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1002,
                          "end": 1003,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1006,
                    "end": 1013,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1022,
                "end": 1061,
                "test": {
                  "type": "Literal",
                  "start": 1027,
                  "end": 1035,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1037,
                    "end": 1053,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1037,
                      "end": 1052,
                      "callee": {
                        "type": "Identifier",
                        "start": 1037,
                        "end": 1049,
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1050,
                          "end": 1051,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1054,
                    "end": 1061,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1070,
                "end": 1109,
                "test": {
                  "type": "Literal",
                  "start": 1075,
                  "end": 1083,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1085,
                    "end": 1101,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1085,
                      "end": 1100,
                      "callee": {
                        "type": "Identifier",
                        "start": 1085,
                        "end": 1097,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1098,
                          "end": 1099,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1102,
                    "end": 1109,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1118,
                "end": 1163,
                "test": {
                  "type": "Literal",
                  "start": 1123,
                  "end": 1134,
                  "value": "undefined",
                  "raw": "'undefined'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1136,
                    "end": 1155,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1136,
                      "end": 1154,
                      "callee": {
                        "type": "Identifier",
                        "start": 1136,
                        "end": 1151,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1152,
                          "end": 1153,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1156,
                    "end": 1163,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1174,
            "end": 1189,
            "expression": {
              "type": "CallExpression",
              "start": 1174,
              "end": 1188,
              "callee": {
                "type": "Identifier",
                "start": 1174,
                "end": 1185,
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1186,
                  "end": 1187,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1193,
      "end": 1633,
      "id": {
        "type": "Identifier",
        "start": 1202,
        "end": 1218,
        "decorators": [],
        "name": "testExtendsUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1218,
        "end": 1235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1219,
            "end": 1234,
            "name": {
              "type": "Identifier",
              "start": 1219,
              "end": 1220,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1229,
              "end": 1234,
              "typeName": {
                "type": "Identifier",
                "start": 1229,
                "end": 1234,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1236,
          "end": 1240,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1237,
            "end": 1240,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1239,
              "end": 1240,
              "typeName": {
                "type": "Identifier",
                "start": 1239,
                "end": 1240,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1242,
        "end": 1633,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1248,
            "end": 1613,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 1256,
              "end": 1264,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1263,
                "end": 1264,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1276,
                "end": 1315,
                "test": {
                  "type": "Literal",
                  "start": 1281,
                  "end": 1289,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1291,
                    "end": 1307,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1291,
                      "end": 1306,
                      "callee": {
                        "type": "Identifier",
                        "start": 1291,
                        "end": 1303,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1304,
                          "end": 1305,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1308,
                    "end": 1315,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1324,
                "end": 1365,
                "test": {
                  "type": "Literal",
                  "start": 1329,
                  "end": 1338,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1340,
                    "end": 1357,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1340,
                      "end": 1356,
                      "callee": {
                        "type": "Identifier",
                        "start": 1340,
                        "end": 1353,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1354,
                          "end": 1355,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1358,
                    "end": 1365,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1374,
                "end": 1412,
                "test": {
                  "type": "Literal",
                  "start": 1379,
                  "end": 1389,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1391,
                    "end": 1404,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1391,
                      "end": 1403,
                      "callee": {
                        "type": "Identifier",
                        "start": 1391,
                        "end": 1400,
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1401,
                          "end": 1402,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1405,
                    "end": 1412,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1421,
                "end": 1460,
                "test": {
                  "type": "Literal",
                  "start": 1426,
                  "end": 1434,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1436,
                    "end": 1452,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1436,
                      "end": 1451,
                      "callee": {
                        "type": "Identifier",
                        "start": 1436,
                        "end": 1448,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1449,
                          "end": 1450,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1453,
                    "end": 1460,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1469,
                "end": 1505,
                "test": {
                  "type": "Literal",
                  "start": 1474,
                  "end": 1482,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1484,
                    "end": 1497,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1484,
                      "end": 1496,
                      "callee": {
                        "type": "Identifier",
                        "start": 1484,
                        "end": 1493,
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1494,
                          "end": 1495,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1498,
                    "end": 1505,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1514,
                "end": 1553,
                "test": {
                  "type": "Literal",
                  "start": 1519,
                  "end": 1527,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1529,
                    "end": 1545,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1529,
                      "end": 1544,
                      "callee": {
                        "type": "Identifier",
                        "start": 1529,
                        "end": 1541,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1542,
                          "end": 1543,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1546,
                    "end": 1553,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1562,
                "end": 1607,
                "test": {
                  "type": "Literal",
                  "start": 1567,
                  "end": 1578,
                  "value": "undefined",
                  "raw": "'undefined'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1580,
                    "end": 1599,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1580,
                      "end": 1598,
                      "callee": {
                        "type": "Identifier",
                        "start": 1580,
                        "end": 1595,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1596,
                          "end": 1597,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1600,
                    "end": 1607,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 1618,
            "end": 1631,
            "expression": {
              "type": "CallExpression",
              "start": 1618,
              "end": 1630,
              "callee": {
                "type": "Identifier",
                "start": 1618,
                "end": 1627,
                "decorators": [],
                "name": "assertAll",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1628,
                  "end": 1629,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1635,
      "end": 2069,
      "id": {
        "type": "Identifier",
        "start": 1644,
        "end": 1651,
        "decorators": [],
        "name": "testAny",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1652,
          "end": 1658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1653,
            "end": 1658,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1655,
              "end": 1658
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1660,
        "end": 2069,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 1666,
            "end": 2039,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 1674,
              "end": 1682,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 1681,
                "end": 1682,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1694,
                "end": 1733,
                "test": {
                  "type": "Literal",
                  "start": 1699,
                  "end": 1707,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1709,
                    "end": 1725,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1709,
                      "end": 1724,
                      "callee": {
                        "type": "Identifier",
                        "start": 1709,
                        "end": 1721,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1722,
                          "end": 1723,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1726,
                    "end": 1733,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1742,
                "end": 1783,
                "test": {
                  "type": "Literal",
                  "start": 1747,
                  "end": 1756,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1758,
                    "end": 1775,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1758,
                      "end": 1774,
                      "callee": {
                        "type": "Identifier",
                        "start": 1758,
                        "end": 1771,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1772,
                          "end": 1773,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1776,
                    "end": 1783,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1792,
                "end": 1835,
                "test": {
                  "type": "Literal",
                  "start": 1797,
                  "end": 1807,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1809,
                    "end": 1827,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1809,
                      "end": 1826,
                      "callee": {
                        "type": "Identifier",
                        "start": 1809,
                        "end": 1823,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1824,
                          "end": 1825,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1828,
                    "end": 1835,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1844,
                "end": 1883,
                "test": {
                  "type": "Literal",
                  "start": 1849,
                  "end": 1857,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1859,
                    "end": 1875,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1859,
                      "end": 1874,
                      "callee": {
                        "type": "Identifier",
                        "start": 1859,
                        "end": 1871,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1872,
                          "end": 1873,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1876,
                    "end": 1883,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1892,
                "end": 1931,
                "test": {
                  "type": "Literal",
                  "start": 1897,
                  "end": 1905,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1907,
                    "end": 1923,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1907,
                      "end": 1922,
                      "callee": {
                        "type": "Identifier",
                        "start": 1907,
                        "end": 1919,
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1920,
                          "end": 1921,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1924,
                    "end": 1931,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1940,
                "end": 1979,
                "test": {
                  "type": "Literal",
                  "start": 1945,
                  "end": 1953,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1955,
                    "end": 1971,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1955,
                      "end": 1970,
                      "callee": {
                        "type": "Identifier",
                        "start": 1955,
                        "end": 1967,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1968,
                          "end": 1969,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1972,
                    "end": 1979,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1988,
                "end": 2033,
                "test": {
                  "type": "Literal",
                  "start": 1993,
                  "end": 2004,
                  "value": "undefined",
                  "raw": "'undefined'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2006,
                    "end": 2025,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2006,
                      "end": 2024,
                      "callee": {
                        "type": "Identifier",
                        "start": 2006,
                        "end": 2021,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2022,
                          "end": 2023,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2026,
                    "end": 2033,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 2044,
            "end": 2057,
            "expression": {
              "type": "CallExpression",
              "start": 2044,
              "end": 2056,
              "callee": {
                "type": "Identifier",
                "start": 2044,
                "end": 2053,
                "decorators": [],
                "name": "assertAll",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2054,
                  "end": 2055,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2071,
      "end": 2132,
      "id": {
        "type": "Identifier",
        "start": 2080,
        "end": 2082,
        "decorators": [],
        "name": "a1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2083,
          "end": 2113,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2084,
            "end": 2113,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2086,
              "end": 2113,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2115,
        "end": 2132,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2121,
            "end": 2130,
            "argument": {
              "type": "Identifier",
              "start": 2128,
              "end": 2129,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2134,
      "end": 2441,
      "id": {
        "type": "Identifier",
        "start": 2143,
        "end": 2167,
        "decorators": [],
        "name": "testUnionExplicitDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2168,
          "end": 2176,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2169,
            "end": 2176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2171,
              "end": 2176,
              "typeName": {
                "type": "Identifier",
                "start": 2171,
                "end": 2176,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2178,
        "end": 2441,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2184,
            "end": 2439,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 2192,
              "end": 2200,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 2199,
                "end": 2200,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2212,
                "end": 2251,
                "test": {
                  "type": "Literal",
                  "start": 2217,
                  "end": 2225,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2227,
                    "end": 2243,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2227,
                      "end": 2242,
                      "callee": {
                        "type": "Identifier",
                        "start": 2227,
                        "end": 2239,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2240,
                          "end": 2241,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2244,
                    "end": 2251,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2260,
                "end": 2301,
                "test": {
                  "type": "Literal",
                  "start": 2265,
                  "end": 2274,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2276,
                    "end": 2293,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2276,
                      "end": 2292,
                      "callee": {
                        "type": "Identifier",
                        "start": 2276,
                        "end": 2289,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2290,
                          "end": 2291,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2294,
                    "end": 2301,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2310,
                "end": 2353,
                "test": {
                  "type": "Literal",
                  "start": 2315,
                  "end": 2325,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2327,
                    "end": 2345,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2327,
                      "end": 2344,
                      "callee": {
                        "type": "Identifier",
                        "start": 2327,
                        "end": 2341,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2342,
                          "end": 2343,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2346,
                    "end": 2353,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2362,
                "end": 2401,
                "test": {
                  "type": "Literal",
                  "start": 2367,
                  "end": 2375,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2377,
                    "end": 2393,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2377,
                      "end": 2392,
                      "callee": {
                        "type": "Identifier",
                        "start": 2377,
                        "end": 2389,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2390,
                          "end": 2391,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2394,
                    "end": 2401,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2410,
                "end": 2433,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2419,
                    "end": 2425,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2419,
                      "end": 2424,
                      "callee": {
                        "type": "Identifier",
                        "start": 2419,
                        "end": 2421,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2422,
                          "end": 2423,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2426,
                    "end": 2433,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2443,
      "end": 2736,
      "id": {
        "type": "Identifier",
        "start": 2452,
        "end": 2476,
        "decorators": [],
        "name": "testUnionImplicitDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2477,
          "end": 2485,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2478,
            "end": 2485,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2480,
              "end": 2485,
              "typeName": {
                "type": "Identifier",
                "start": 2480,
                "end": 2485,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2487,
        "end": 2736,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2493,
            "end": 2716,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 2501,
              "end": 2509,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 2508,
                "end": 2509,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2521,
                "end": 2560,
                "test": {
                  "type": "Literal",
                  "start": 2526,
                  "end": 2534,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2536,
                    "end": 2552,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2536,
                      "end": 2551,
                      "callee": {
                        "type": "Identifier",
                        "start": 2536,
                        "end": 2548,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2549,
                          "end": 2550,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2553,
                    "end": 2560,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2569,
                "end": 2610,
                "test": {
                  "type": "Literal",
                  "start": 2574,
                  "end": 2583,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2585,
                    "end": 2602,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2585,
                      "end": 2601,
                      "callee": {
                        "type": "Identifier",
                        "start": 2585,
                        "end": 2598,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2599,
                          "end": 2600,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2603,
                    "end": 2610,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2619,
                "end": 2662,
                "test": {
                  "type": "Literal",
                  "start": 2624,
                  "end": 2634,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2636,
                    "end": 2654,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2636,
                      "end": 2653,
                      "callee": {
                        "type": "Identifier",
                        "start": 2636,
                        "end": 2650,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2651,
                          "end": 2652,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2655,
                    "end": 2662,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2671,
                "end": 2710,
                "test": {
                  "type": "Literal",
                  "start": 2676,
                  "end": 2684,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2686,
                    "end": 2702,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2686,
                      "end": 2701,
                      "callee": {
                        "type": "Identifier",
                        "start": 2686,
                        "end": 2698,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2699,
                          "end": 2700,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2703,
                    "end": 2710,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 2721,
            "end": 2734,
            "argument": {
              "type": "CallExpression",
              "start": 2728,
              "end": 2733,
              "callee": {
                "type": "Identifier",
                "start": 2728,
                "end": 2730,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2731,
                  "end": 2732,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2738,
      "end": 3063,
      "id": {
        "type": "Identifier",
        "start": 2747,
        "end": 2773,
        "decorators": [],
        "name": "testExtendsExplicitDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2773,
        "end": 2790,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2774,
            "end": 2789,
            "name": {
              "type": "Identifier",
              "start": 2774,
              "end": 2775,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2784,
              "end": 2789,
              "typeName": {
                "type": "Identifier",
                "start": 2784,
                "end": 2789,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2791,
          "end": 2795,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2792,
            "end": 2795,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2794,
              "end": 2795,
              "typeName": {
                "type": "Identifier",
                "start": 2794,
                "end": 2795,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2797,
        "end": 3063,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 2803,
            "end": 3061,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 2811,
              "end": 2819,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 2818,
                "end": 2819,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 2831,
                "end": 2870,
                "test": {
                  "type": "Literal",
                  "start": 2836,
                  "end": 2844,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2846,
                    "end": 2862,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2846,
                      "end": 2861,
                      "callee": {
                        "type": "Identifier",
                        "start": 2846,
                        "end": 2858,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2859,
                          "end": 2860,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2863,
                    "end": 2870,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2879,
                "end": 2920,
                "test": {
                  "type": "Literal",
                  "start": 2884,
                  "end": 2893,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2895,
                    "end": 2912,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2895,
                      "end": 2911,
                      "callee": {
                        "type": "Identifier",
                        "start": 2895,
                        "end": 2908,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2909,
                          "end": 2910,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2913,
                    "end": 2920,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2929,
                "end": 2967,
                "test": {
                  "type": "Literal",
                  "start": 2934,
                  "end": 2944,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2946,
                    "end": 2959,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2946,
                      "end": 2958,
                      "callee": {
                        "type": "Identifier",
                        "start": 2946,
                        "end": 2955,
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2956,
                          "end": 2957,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2960,
                    "end": 2967,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 2976,
                "end": 3015,
                "test": {
                  "type": "Literal",
                  "start": 2981,
                  "end": 2989,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 2991,
                    "end": 3007,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2991,
                      "end": 3006,
                      "callee": {
                        "type": "Identifier",
                        "start": 2991,
                        "end": 3003,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3004,
                          "end": 3005,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3008,
                    "end": 3015,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3024,
                "end": 3054,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3033,
                    "end": 3046,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3033,
                      "end": 3045,
                      "callee": {
                        "type": "Identifier",
                        "start": 3033,
                        "end": 3042,
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3043,
                          "end": 3044,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3047,
                    "end": 3054,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3065,
      "end": 3375,
      "id": {
        "type": "Identifier",
        "start": 3074,
        "end": 3100,
        "decorators": [],
        "name": "testExtendsImplicitDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3100,
        "end": 3117,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3101,
            "end": 3116,
            "name": {
              "type": "Identifier",
              "start": 3101,
              "end": 3102,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3111,
              "end": 3116,
              "typeName": {
                "type": "Identifier",
                "start": 3111,
                "end": 3116,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3118,
          "end": 3122,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3119,
            "end": 3122,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3121,
              "end": 3122,
              "typeName": {
                "type": "Identifier",
                "start": 3121,
                "end": 3122,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3124,
        "end": 3375,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 3130,
            "end": 3348,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 3138,
              "end": 3146,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 3145,
                "end": 3146,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 3158,
                "end": 3197,
                "test": {
                  "type": "Literal",
                  "start": 3163,
                  "end": 3171,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3173,
                    "end": 3189,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3173,
                      "end": 3188,
                      "callee": {
                        "type": "Identifier",
                        "start": 3173,
                        "end": 3185,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3186,
                          "end": 3187,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3190,
                    "end": 3197,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3206,
                "end": 3247,
                "test": {
                  "type": "Literal",
                  "start": 3211,
                  "end": 3220,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3222,
                    "end": 3239,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3222,
                      "end": 3238,
                      "callee": {
                        "type": "Identifier",
                        "start": 3222,
                        "end": 3235,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3236,
                          "end": 3237,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3240,
                    "end": 3247,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3256,
                "end": 3294,
                "test": {
                  "type": "Literal",
                  "start": 3261,
                  "end": 3271,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3273,
                    "end": 3286,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3273,
                      "end": 3285,
                      "callee": {
                        "type": "Identifier",
                        "start": 3273,
                        "end": 3282,
                        "decorators": [],
                        "name": "assertAll",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3283,
                          "end": 3284,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3287,
                    "end": 3294,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3303,
                "end": 3342,
                "test": {
                  "type": "Literal",
                  "start": 3308,
                  "end": 3316,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 3318,
                    "end": 3334,
                    "expression": {
                      "type": "CallExpression",
                      "start": 3318,
                      "end": 3333,
                      "callee": {
                        "type": "Identifier",
                        "start": 3318,
                        "end": 3330,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 3331,
                          "end": 3332,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 3335,
                    "end": 3342,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ReturnStatement",
            "start": 3353,
            "end": 3373,
            "argument": {
              "type": "CallExpression",
              "start": 3360,
              "end": 3372,
              "callee": {
                "type": "Identifier",
                "start": 3360,
                "end": 3369,
                "decorators": [],
                "name": "assertAll",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 3370,
                  "end": 3371,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3377,
      "end": 3408,
      "id": {
        "type": "Identifier",
        "start": 3382,
        "end": 3383,
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 3386,
        "end": 3407,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "start": 3387,
            "end": 3396,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3388,
              "end": 3396,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3390,
                "end": 3396
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 3398,
          "end": 3407,
          "typeAnnotation": {
            "type": "TSStringKeyword",
            "start": 3401,
            "end": 3407
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3409,
      "end": 3442,
      "id": {
        "type": "Identifier",
        "start": 3414,
        "end": 3415,
        "decorators": [],
        "name": "R",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3418,
        "end": 3442,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3420,
            "end": 3430,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3420,
              "end": 3421,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3421,
              "end": 3429,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3423,
                "end": 3429
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 3431,
            "end": 3440,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3431,
              "end": 3432,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3432,
              "end": 3440,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3434,
                "end": 3440
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3444,
      "end": 3691,
      "id": {
        "type": "Identifier",
        "start": 3453,
        "end": 3469,
        "decorators": [],
        "name": "exhaustiveChecks",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3470,
          "end": 3496,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3471,
            "end": 3496,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3473,
              "end": 3496,
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
                  "start": 3491,
                  "end": 3492,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3491,
                    "end": 3492,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 3495,
                  "end": 3496,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3495,
                    "end": 3496,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3497,
        "end": 3505,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3499,
          "end": 3505
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3506,
        "end": 3691,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 3512,
            "end": 3689,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 3520,
              "end": 3528,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 3527,
                "end": 3528,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 3540,
                "end": 3576,
                "test": {
                  "type": "Literal",
                  "start": 3545,
                  "end": 3553,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3555,
                    "end": 3576,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3562,
                      "end": 3575,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3562,
                        "end": 3572,
                        "object": {
                          "type": "Identifier",
                          "start": 3562,
                          "end": 3563,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3564,
                          "end": 3572,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 3573,
                          "end": 3574,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3585,
                "end": 3609,
                "test": {
                  "type": "Literal",
                  "start": 3590,
                  "end": 3598,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3600,
                    "end": 3609,
                    "argument": {
                      "type": "Identifier",
                      "start": 3607,
                      "end": 3608,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3618,
                "end": 3648,
                "test": {
                  "type": "Literal",
                  "start": 3623,
                  "end": 3633,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3635,
                    "end": 3648,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3642,
                      "end": 3647,
                      "callee": {
                        "type": "Identifier",
                        "start": 3642,
                        "end": 3643,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 3644,
                          "end": 3646,
                          "value": 42,
                          "raw": "42"
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3657,
                "end": 3683,
                "test": {
                  "type": "Literal",
                  "start": 3662,
                  "end": 3670,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3672,
                    "end": 3683,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 3679,
                      "end": 3682,
                      "object": {
                        "type": "Identifier",
                        "start": 3679,
                        "end": 3680,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3681,
                        "end": 3682,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3693,
      "end": 4034,
      "id": {
        "type": "Identifier",
        "start": 3702,
        "end": 3726,
        "decorators": [],
        "name": "exhaustiveChecksGenerics",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3726,
        "end": 3761,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3727,
            "end": 3760,
            "name": {
              "type": "Identifier",
              "start": 3727,
              "end": 3728,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 3737,
              "end": 3760,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3737,
                  "end": 3738,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3737,
                    "end": 3738,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 3741,
                  "end": 3742,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3741,
                    "end": 3742,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
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
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3762,
          "end": 3766,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3763,
            "end": 3766,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3765,
              "end": 3766,
              "typeName": {
                "type": "Identifier",
                "start": 3765,
                "end": 3766,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3767,
        "end": 3775,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 3769,
          "end": 3775
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 3776,
        "end": 4034,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 3782,
            "end": 4032,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 3790,
              "end": 3798,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 3797,
                "end": 3798,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 3810,
                "end": 3846,
                "test": {
                  "type": "Literal",
                  "start": 3815,
                  "end": 3823,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3825,
                    "end": 3846,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3832,
                      "end": 3845,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 3832,
                        "end": 3842,
                        "object": {
                          "type": "Identifier",
                          "start": 3832,
                          "end": 3833,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3834,
                          "end": 3842,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 3843,
                          "end": 3844,
                          "value": 2,
                          "raw": "2"
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3855,
                "end": 3879,
                "test": {
                  "type": "Literal",
                  "start": 3860,
                  "end": 3868,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3870,
                    "end": 3879,
                    "argument": {
                      "type": "Identifier",
                      "start": 3877,
                      "end": 3878,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3888,
                "end": 3925,
                "test": {
                  "type": "Literal",
                  "start": 3893,
                  "end": 3903,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3905,
                    "end": 3925,
                    "argument": {
                      "type": "CallExpression",
                      "start": 3912,
                      "end": 3924,
                      "callee": {
                        "type": "TSAsExpression",
                        "start": 3913,
                        "end": 3919,
                        "expression": {
                          "type": "Identifier",
                          "start": 3913,
                          "end": 3914,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3918,
                          "end": 3919,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3918,
                            "end": 3919,
                            "decorators": [],
                            "name": "L",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 3921,
                          "end": 3923,
                          "value": 42,
                          "raw": "42"
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 3958,
                "end": 3991,
                "test": {
                  "type": "Literal",
                  "start": 3963,
                  "end": 3971,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 3973,
                    "end": 3991,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 3980,
                      "end": 3990,
                      "object": {
                        "type": "TSAsExpression",
                        "start": 3981,
                        "end": 3987,
                        "expression": {
                          "type": "Identifier",
                          "start": 3981,
                          "end": 3982,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3986,
                          "end": 3987,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3986,
                            "end": 3987,
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3989,
                        "end": 3990,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4036,
      "end": 4288,
      "id": {
        "type": "Identifier",
        "start": 4045,
        "end": 4060,
        "decorators": [],
        "name": "multipleGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4060,
        "end": 4086,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4061,
            "end": 4072,
            "name": {
              "type": "Identifier",
              "start": 4061,
              "end": 4062,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4071,
              "end": 4072,
              "typeName": {
                "type": "Identifier",
                "start": 4071,
                "end": 4072,
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4074,
            "end": 4085,
            "name": {
              "type": "Identifier",
              "start": 4074,
              "end": 4075,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4084,
              "end": 4085,
              "typeName": {
                "type": "Identifier",
                "start": 4084,
                "end": 4085,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4087,
          "end": 4096,
          "decorators": [],
          "name": "xy",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4089,
            "end": 4096,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4091,
              "end": 4096,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4091,
                  "end": 4092,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4091,
                    "end": 4092,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 4095,
                  "end": 4096,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4095,
                    "end": 4096,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4097,
        "end": 4124,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4099,
          "end": 4124,
          "types": [
            {
              "type": "TSTupleType",
              "start": 4099,
              "end": 4110,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4100,
                  "end": 4101,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4100,
                    "end": 4101,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4103,
                  "end": 4109
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 4113,
              "end": 4124,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4114,
                  "end": 4115,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4114,
                    "end": 4115,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4117,
                  "end": 4123
                }
              ]
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4125,
        "end": 4288,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4131,
            "end": 4286,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 4139,
              "end": 4148,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 4146,
                "end": 4148,
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4160,
                "end": 4197,
                "test": {
                  "type": "Literal",
                  "start": 4165,
                  "end": 4175,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4177,
                    "end": 4197,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4184,
                      "end": 4196,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4185,
                          "end": 4187,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "CallExpression",
                          "start": 4189,
                          "end": 4195,
                          "callee": {
                            "type": "Identifier",
                            "start": 4189,
                            "end": 4191,
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 4192,
                              "end": 4194,
                              "value": 42,
                              "raw": "42"
                            }
                          ],
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4206,
                "end": 4239,
                "test": {
                  "type": "Literal",
                  "start": 4211,
                  "end": 4219,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4221,
                    "end": 4239,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4228,
                      "end": 4238,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4229,
                          "end": 4231,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "MemberExpression",
                          "start": 4233,
                          "end": 4237,
                          "object": {
                            "type": "Identifier",
                            "start": 4233,
                            "end": 4235,
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4236,
                            "end": 4237,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4248,
                "end": 4280,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4257,
                    "end": 4280,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4264,
                      "end": 4279,
                      "callee": {
                        "type": "Identifier",
                        "start": 4264,
                        "end": 4275,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4276,
                          "end": 4278,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4290,
      "end": 4566,
      "id": {
        "type": "Identifier",
        "start": 4299,
        "end": 4318,
        "decorators": [],
        "name": "multipleGenericFuse",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4318,
        "end": 4362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4319,
            "end": 4339,
            "name": {
              "type": "Identifier",
              "start": 4319,
              "end": 4320,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 4329,
              "end": 4339,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4329,
                  "end": 4330,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4329,
                    "end": 4330,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4333,
                  "end": 4339
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4341,
            "end": 4361,
            "name": {
              "type": "Identifier",
              "start": 4341,
              "end": 4342,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 4351,
              "end": 4361,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4351,
                  "end": 4352,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4351,
                    "end": 4352,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4355,
                  "end": 4361
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4363,
          "end": 4372,
          "decorators": [],
          "name": "xy",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4365,
            "end": 4372,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4367,
              "end": 4372,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4367,
                  "end": 4368,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4367,
                    "end": 4368,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 4371,
                  "end": 4372,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4371,
                    "end": 4372,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4373,
        "end": 4412,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4375,
          "end": 4412,
          "types": [
            {
              "type": "TSTupleType",
              "start": 4375,
              "end": 4386,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4376,
                  "end": 4377,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4376,
                    "end": 4377,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4379,
                  "end": 4385
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 4389,
              "end": 4400,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4390,
                  "end": 4391,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4390,
                    "end": 4391,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4393,
                  "end": 4399
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 4403,
              "end": 4412,
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "start": 4405,
                  "end": 4410,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 4405,
                      "end": 4406,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4405,
                        "end": 4406,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 4409,
                      "end": 4410,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4409,
                        "end": 4410,
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4413,
        "end": 4566,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4419,
            "end": 4564,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 4427,
              "end": 4436,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 4434,
                "end": 4436,
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4448,
                "end": 4480,
                "test": {
                  "type": "Literal",
                  "start": 4453,
                  "end": 4463,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4465,
                    "end": 4480,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4472,
                      "end": 4479,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4473,
                          "end": 4475,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 4477,
                          "end": 4478,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4489,
                "end": 4523,
                "test": {
                  "type": "Literal",
                  "start": 4494,
                  "end": 4502,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4504,
                    "end": 4523,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4511,
                      "end": 4522,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4512,
                          "end": 4514,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 4516,
                          "end": 4521,
                          "value": "two",
                          "raw": "'two'"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4532,
                "end": 4558,
                "test": {
                  "type": "Literal",
                  "start": 4537,
                  "end": 4545,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4547,
                    "end": 4558,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4554,
                      "end": 4558,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4555,
                          "end": 4557,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4568,
      "end": 4789,
      "id": {
        "type": "Identifier",
        "start": 4577,
        "end": 4602,
        "decorators": [],
        "name": "multipleGenericExhaustive",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4602,
        "end": 4628,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4603,
            "end": 4614,
            "name": {
              "type": "Identifier",
              "start": 4603,
              "end": 4604,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4613,
              "end": 4614,
              "typeName": {
                "type": "Identifier",
                "start": 4613,
                "end": 4614,
                "decorators": [],
                "name": "L",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4616,
            "end": 4627,
            "name": {
              "type": "Identifier",
              "start": 4616,
              "end": 4617,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4626,
              "end": 4627,
              "typeName": {
                "type": "Identifier",
                "start": 4626,
                "end": 4627,
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4629,
          "end": 4638,
          "decorators": [],
          "name": "xy",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4631,
            "end": 4638,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4633,
              "end": 4638,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4633,
                  "end": 4634,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4633,
                    "end": 4634,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 4637,
                  "end": 4638,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4637,
                    "end": 4638,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4639,
        "end": 4666,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 4641,
          "end": 4666,
          "types": [
            {
              "type": "TSTupleType",
              "start": 4641,
              "end": 4652,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4642,
                  "end": 4643,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4642,
                    "end": 4643,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4645,
                  "end": 4651
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 4655,
              "end": 4666,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 4656,
                  "end": 4657,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4656,
                    "end": 4657,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 4659,
                  "end": 4665
                }
              ]
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4667,
        "end": 4789,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4673,
            "end": 4787,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 4681,
              "end": 4690,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 4688,
                "end": 4690,
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4702,
                "end": 4735,
                "test": {
                  "type": "Literal",
                  "start": 4707,
                  "end": 4715,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4717,
                    "end": 4735,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4724,
                      "end": 4734,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4725,
                          "end": 4727,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "MemberExpression",
                          "start": 4729,
                          "end": 4733,
                          "object": {
                            "type": "Identifier",
                            "start": 4729,
                            "end": 4731,
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 4732,
                            "end": 4733,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4744,
                "end": 4781,
                "test": {
                  "type": "Literal",
                  "start": 4749,
                  "end": 4759,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4761,
                    "end": 4781,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 4768,
                      "end": 4780,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 4769,
                          "end": 4771,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "CallExpression",
                          "start": 4773,
                          "end": 4779,
                          "callee": {
                            "type": "Identifier",
                            "start": 4773,
                            "end": 4775,
                            "decorators": [],
                            "name": "xy",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 4776,
                              "end": 4778,
                              "value": 42,
                              "raw": "42"
                            }
                          ],
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4791,
      "end": 5067,
      "id": {
        "type": "Identifier",
        "start": 4800,
        "end": 4814,
        "decorators": [],
        "name": "switchOrdering",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4815,
          "end": 4843,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4816,
            "end": 4843,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4818,
              "end": 4843,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4845,
        "end": 5067,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 4851,
            "end": 5065,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 4859,
              "end": 4867,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 4866,
                "end": 4867,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 4879,
                "end": 4917,
                "test": {
                  "type": "Literal",
                  "start": 4884,
                  "end": 4892,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4894,
                    "end": 4917,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4901,
                      "end": 4916,
                      "callee": {
                        "type": "Identifier",
                        "start": 4901,
                        "end": 4913,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4914,
                          "end": 4915,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4926,
                "end": 4964,
                "test": {
                  "type": "Literal",
                  "start": 4931,
                  "end": 4939,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4941,
                    "end": 4964,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4948,
                      "end": 4963,
                      "callee": {
                        "type": "Identifier",
                        "start": 4948,
                        "end": 4960,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4961,
                          "end": 4962,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 4973,
                "end": 5013,
                "test": {
                  "type": "Literal",
                  "start": 4978,
                  "end": 4987,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 4989,
                    "end": 5013,
                    "argument": {
                      "type": "CallExpression",
                      "start": 4996,
                      "end": 5012,
                      "callee": {
                        "type": "Identifier",
                        "start": 4996,
                        "end": 5009,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5010,
                          "end": 5011,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5022,
                "end": 5059,
                "test": {
                  "type": "Literal",
                  "start": 5027,
                  "end": 5035,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 5037,
                    "end": 5059,
                    "argument": {
                      "type": "CallExpression",
                      "start": 5044,
                      "end": 5058,
                      "callee": {
                        "type": "Identifier",
                        "start": 5044,
                        "end": 5055,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5056,
                          "end": 5057,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5069,
      "end": 5413,
      "id": {
        "type": "Identifier",
        "start": 5078,
        "end": 5103,
        "decorators": [],
        "name": "switchOrderingWithDefault",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5104,
          "end": 5132,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5105,
            "end": 5132,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5107,
              "end": 5132,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5134,
        "end": 5413,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 5140,
            "end": 5210,
            "id": {
              "type": "Identifier",
              "start": 5149,
              "end": 5154,
              "decorators": [],
              "name": "local",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 5155,
                "end": 5183,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 5156,
                  "end": 5183,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 5158,
                    "end": 5183,
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
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 5185,
              "end": 5210,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5195,
                  "end": 5204,
                  "argument": {
                    "type": "Identifier",
                    "start": 5202,
                    "end": 5203,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "SwitchStatement",
            "start": 5215,
            "end": 5411,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 5223,
              "end": 5231,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 5230,
                "end": 5231,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 5243,
                "end": 5257,
                "test": {
                  "type": "Literal",
                  "start": 5248,
                  "end": 5256,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 5266,
                "end": 5280,
                "test": {
                  "type": "Literal",
                  "start": 5271,
                  "end": 5279,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 5289,
                "end": 5313,
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 5298,
                    "end": 5313,
                    "argument": {
                      "type": "CallExpression",
                      "start": 5305,
                      "end": 5313,
                      "callee": {
                        "type": "Identifier",
                        "start": 5305,
                        "end": 5310,
                        "decorators": [],
                        "name": "local",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5311,
                          "end": 5312,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5322,
                "end": 5359,
                "test": {
                  "type": "Literal",
                  "start": 5327,
                  "end": 5335,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 5337,
                    "end": 5359,
                    "argument": {
                      "type": "CallExpression",
                      "start": 5344,
                      "end": 5358,
                      "callee": {
                        "type": "Identifier",
                        "start": 5344,
                        "end": 5355,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5356,
                          "end": 5357,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5368,
                "end": 5405,
                "test": {
                  "type": "Literal",
                  "start": 5373,
                  "end": 5381,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 5383,
                    "end": 5405,
                    "argument": {
                      "type": "CallExpression",
                      "start": 5390,
                      "end": 5404,
                      "callee": {
                        "type": "Identifier",
                        "start": 5390,
                        "end": 5401,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5402,
                          "end": 5403,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5415,
      "end": 5791,
      "id": {
        "type": "Identifier",
        "start": 5424,
        "end": 5439,
        "decorators": [],
        "name": "fallThroughTest",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5440,
          "end": 5477,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5441,
            "end": 5477,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5443,
              "end": 5477,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5479,
        "end": 5791,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 5485,
            "end": 5789,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 5493,
              "end": 5501,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 5500,
                "end": 5501,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 5513,
                "end": 5555,
                "test": {
                  "type": "Literal",
                  "start": 5518,
                  "end": 5526,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5540,
                    "end": 5555,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5540,
                      "end": 5555,
                      "callee": {
                        "type": "Identifier",
                        "start": 5540,
                        "end": 5552,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5553,
                          "end": 5554,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5564,
                "end": 5633,
                "test": {
                  "type": "Literal",
                  "start": 5569,
                  "end": 5577,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5591,
                    "end": 5614,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5591,
                      "end": 5614,
                      "callee": {
                        "type": "Identifier",
                        "start": 5591,
                        "end": 5611,
                        "decorators": [],
                        "name": "assertStringOrNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5612,
                          "end": 5613,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 5627,
                    "end": 5633,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5642,
                "end": 5679,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5663,
                    "end": 5679,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5663,
                      "end": 5678,
                      "callee": {
                        "type": "Identifier",
                        "start": 5663,
                        "end": 5675,
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5676,
                          "end": 5677,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5688,
                "end": 5702,
                "test": {
                  "type": "Literal",
                  "start": 5693,
                  "end": 5701,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 5711,
                "end": 5783,
                "test": {
                  "type": "Literal",
                  "start": 5716,
                  "end": 5725,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5739,
                    "end": 5764,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5739,
                      "end": 5763,
                      "callee": {
                        "type": "Identifier",
                        "start": 5739,
                        "end": 5760,
                        "decorators": [],
                        "name": "assertBooleanOrObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5761,
                          "end": 5762,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 5777,
                    "end": 5783,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5793,
      "end": 6218,
      "id": {
        "type": "Identifier",
        "start": 5802,
        "end": 5818,
        "decorators": [],
        "name": "unknownNarrowing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 5819,
          "end": 5829,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5820,
            "end": 5829,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 5822,
              "end": 5829
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5831,
        "end": 6218,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 5837,
            "end": 6216,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 5845,
              "end": 5853,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 5852,
                "end": 5853,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 5865,
                "end": 5904,
                "test": {
                  "type": "Literal",
                  "start": 5870,
                  "end": 5878,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5880,
                    "end": 5896,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5880,
                      "end": 5895,
                      "callee": {
                        "type": "Identifier",
                        "start": 5880,
                        "end": 5892,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5893,
                          "end": 5894,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 5897,
                    "end": 5904,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5913,
                "end": 5954,
                "test": {
                  "type": "Literal",
                  "start": 5918,
                  "end": 5927,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5929,
                    "end": 5946,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5929,
                      "end": 5945,
                      "callee": {
                        "type": "Identifier",
                        "start": 5929,
                        "end": 5942,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5943,
                          "end": 5944,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 5947,
                    "end": 5954,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 5963,
                "end": 6006,
                "test": {
                  "type": "Literal",
                  "start": 5968,
                  "end": 5978,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 5980,
                    "end": 5998,
                    "expression": {
                      "type": "CallExpression",
                      "start": 5980,
                      "end": 5997,
                      "callee": {
                        "type": "Identifier",
                        "start": 5980,
                        "end": 5994,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 5995,
                          "end": 5996,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 5999,
                    "end": 6006,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6015,
                "end": 6054,
                "test": {
                  "type": "Literal",
                  "start": 6020,
                  "end": 6028,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6030,
                    "end": 6046,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6030,
                      "end": 6045,
                      "callee": {
                        "type": "Identifier",
                        "start": 6030,
                        "end": 6042,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6043,
                          "end": 6044,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6047,
                    "end": 6054,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6063,
                "end": 6108,
                "test": {
                  "type": "Literal",
                  "start": 6068,
                  "end": 6076,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6078,
                    "end": 6100,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6078,
                      "end": 6099,
                      "callee": {
                        "type": "Identifier",
                        "start": 6078,
                        "end": 6096,
                        "decorators": [],
                        "name": "assertObjectOrNull",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6097,
                          "end": 6098,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6101,
                    "end": 6108,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6117,
                "end": 6156,
                "test": {
                  "type": "Literal",
                  "start": 6122,
                  "end": 6130,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6132,
                    "end": 6148,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6132,
                      "end": 6147,
                      "callee": {
                        "type": "Identifier",
                        "start": 6132,
                        "end": 6144,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6145,
                          "end": 6146,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6149,
                    "end": 6156,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6165,
                "end": 6210,
                "test": {
                  "type": "Literal",
                  "start": 6170,
                  "end": 6181,
                  "value": "undefined",
                  "raw": "'undefined'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6183,
                    "end": 6202,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6183,
                      "end": 6201,
                      "callee": {
                        "type": "Identifier",
                        "start": 6183,
                        "end": 6198,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6199,
                          "end": 6200,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6203,
                    "end": 6210,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6220,
      "end": 6565,
      "id": {
        "type": "Identifier",
        "start": 6229,
        "end": 6243,
        "decorators": [],
        "name": "keyofNarrowing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 6243,
        "end": 6281,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 6244,
            "end": 6280,
            "name": {
              "type": "Identifier",
              "start": 6244,
              "end": 6245,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 6254,
              "end": 6280,
              "key": {
                "type": "Identifier",
                "start": 6257,
                "end": 6258,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 6262,
                "end": 6269,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 6268,
                  "end": 6269,
                  "typeName": {
                    "type": "Identifier",
                    "start": 6268,
                    "end": 6269,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 6272,
                "end": 6278
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 6282,
          "end": 6292,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6283,
            "end": 6292,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 6285,
              "end": 6292,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 6291,
                "end": 6292,
                "typeName": {
                  "type": "Identifier",
                  "start": 6291,
                  "end": 6292,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6294,
        "end": 6565,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 6300,
            "end": 6338,
            "id": {
              "type": "Identifier",
              "start": 6309,
              "end": 6321,
              "decorators": [],
              "name": "assertKeyofS",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 6322,
                "end": 6333,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 6324,
                  "end": 6333,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 6326,
                    "end": 6333,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 6332,
                      "end": 6333,
                      "typeName": {
                        "type": "Identifier",
                        "start": 6332,
                        "end": 6333,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 6335,
              "end": 6338,
              "body": []
            },
            "expression": false
          },
          {
            "type": "SwitchStatement",
            "start": 6343,
            "end": 6563,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 6351,
              "end": 6359,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 6358,
                "end": 6359,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 6371,
                "end": 6427,
                "test": {
                  "type": "Literal",
                  "start": 6376,
                  "end": 6384,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6386,
                    "end": 6402,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6386,
                      "end": 6401,
                      "callee": {
                        "type": "Identifier",
                        "start": 6386,
                        "end": 6398,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6399,
                          "end": 6400,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6403,
                    "end": 6419,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6403,
                      "end": 6418,
                      "callee": {
                        "type": "Identifier",
                        "start": 6403,
                        "end": 6415,
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6416,
                          "end": 6417,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6420,
                    "end": 6427,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6436,
                "end": 6492,
                "test": {
                  "type": "Literal",
                  "start": 6441,
                  "end": 6449,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6451,
                    "end": 6467,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6451,
                      "end": 6466,
                      "callee": {
                        "type": "Identifier",
                        "start": 6451,
                        "end": 6463,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6464,
                          "end": 6465,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6468,
                    "end": 6484,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6468,
                      "end": 6483,
                      "callee": {
                        "type": "Identifier",
                        "start": 6468,
                        "end": 6480,
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6481,
                          "end": 6482,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6485,
                    "end": 6492,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6501,
                "end": 6557,
                "test": {
                  "type": "Literal",
                  "start": 6506,
                  "end": 6514,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6516,
                    "end": 6532,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6516,
                      "end": 6531,
                      "callee": {
                        "type": "Identifier",
                        "start": 6516,
                        "end": 6528,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6529,
                          "end": 6530,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 6533,
                    "end": 6549,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6533,
                      "end": 6548,
                      "callee": {
                        "type": "Identifier",
                        "start": 6533,
                        "end": 6545,
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6546,
                          "end": 6547,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6550,
                    "end": 6557,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 6567,
      "end": 7083,
      "id": {
        "type": "Identifier",
        "start": 6576,
        "end": 6592,
        "decorators": [],
        "name": "narrowingNarrows",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 6593,
          "end": 6610,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 6594,
            "end": 6610,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 6596,
              "end": 6610,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 6596,
                  "end": 6598,
                  "members": []
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 6601,
                  "end": 6610
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 6612,
        "end": 7083,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 6618,
            "end": 7081,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 6626,
              "end": 6634,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 6633,
                "end": 6634,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 6646,
                "end": 6685,
                "test": {
                  "type": "Literal",
                  "start": 6651,
                  "end": 6659,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6661,
                    "end": 6677,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6661,
                      "end": 6676,
                      "callee": {
                        "type": "Identifier",
                        "start": 6661,
                        "end": 6673,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6674,
                          "end": 6675,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6678,
                    "end": 6685,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6694,
                "end": 6735,
                "test": {
                  "type": "Literal",
                  "start": 6699,
                  "end": 6708,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6710,
                    "end": 6727,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6710,
                      "end": 6726,
                      "callee": {
                        "type": "Identifier",
                        "start": 6710,
                        "end": 6723,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6724,
                          "end": 6725,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6728,
                    "end": 6735,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6744,
                "end": 6787,
                "test": {
                  "type": "Literal",
                  "start": 6749,
                  "end": 6759,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6761,
                    "end": 6779,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6761,
                      "end": 6778,
                      "callee": {
                        "type": "Identifier",
                        "start": 6761,
                        "end": 6775,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6776,
                          "end": 6777,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6780,
                    "end": 6787,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6796,
                "end": 6835,
                "test": {
                  "type": "Literal",
                  "start": 6801,
                  "end": 6809,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6811,
                    "end": 6827,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6811,
                      "end": 6826,
                      "callee": {
                        "type": "Identifier",
                        "start": 6811,
                        "end": 6823,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6824,
                          "end": 6825,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6828,
                    "end": 6835,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6844,
                "end": 6883,
                "test": {
                  "type": "Literal",
                  "start": 6849,
                  "end": 6857,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 6859,
                    "end": 6875,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 6865,
                        "end": 6874,
                        "id": {
                          "type": "Identifier",
                          "start": 6865,
                          "end": 6870,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 6866,
                            "end": 6870,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 6868,
                              "end": 6870,
                              "members": []
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 6873,
                          "end": 6874,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6876,
                    "end": 6883,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6892,
                "end": 6931,
                "test": {
                  "type": "Literal",
                  "start": 6897,
                  "end": 6905,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6907,
                    "end": 6923,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6907,
                      "end": 6922,
                      "callee": {
                        "type": "Identifier",
                        "start": 6907,
                        "end": 6919,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6920,
                          "end": 6921,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6924,
                    "end": 6931,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6940,
                "end": 6985,
                "test": {
                  "type": "Literal",
                  "start": 6945,
                  "end": 6956,
                  "value": "undefined",
                  "raw": "'undefined'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 6958,
                    "end": 6977,
                    "expression": {
                      "type": "CallExpression",
                      "start": 6958,
                      "end": 6976,
                      "callee": {
                        "type": "Identifier",
                        "start": 6958,
                        "end": 6973,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 6974,
                          "end": 6975,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 6978,
                    "end": 6985,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 6994,
                "end": 7032,
                "test": {
                  "type": "Literal",
                  "start": 6999,
                  "end": 7007,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7009,
                    "end": 7024,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7009,
                      "end": 7023,
                      "callee": {
                        "type": "Identifier",
                        "start": 7009,
                        "end": 7020,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7021,
                          "end": 7022,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7025,
                    "end": 7032,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7041,
                "end": 7075,
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 7050,
                    "end": 7067,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 7056,
                        "end": 7066,
                        "id": {
                          "type": "Identifier",
                          "start": 7056,
                          "end": 7062,
                          "decorators": [],
                          "name": "_y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7058,
                            "end": 7062,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 7060,
                              "end": 7062,
                              "members": []
                            }
                          }
                        },
                        "init": {
                          "type": "Identifier",
                          "start": 7065,
                          "end": 7066,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7068,
                    "end": 7075,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7085,
      "end": 7640,
      "id": {
        "type": "Identifier",
        "start": 7094,
        "end": 7111,
        "decorators": [],
        "name": "narrowingNarrows2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 7112,
          "end": 7145,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7113,
            "end": 7145,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 7115,
              "end": 7145,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 7115,
                  "end": 7119,
                  "literal": {
                    "type": "Literal",
                    "start": 7115,
                    "end": 7119,
                    "value": true,
                    "raw": "true"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 7122,
                  "end": 7123,
                  "literal": {
                    "type": "Literal",
                    "start": 7122,
                    "end": 7123,
                    "value": 3,
                    "raw": "3"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 7126,
                  "end": 7133,
                  "literal": {
                    "type": "Literal",
                    "start": 7126,
                    "end": 7133,
                    "value": "hello",
                    "raw": "'hello'"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 7136,
                  "end": 7145
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 7147,
        "end": 7640,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 7153,
            "end": 7638,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 7161,
              "end": 7169,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 7168,
                "end": 7169,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 7181,
                "end": 7220,
                "test": {
                  "type": "Literal",
                  "start": 7186,
                  "end": 7194,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7196,
                    "end": 7212,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7196,
                      "end": 7211,
                      "callee": {
                        "type": "Identifier",
                        "start": 7196,
                        "end": 7208,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7209,
                          "end": 7210,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7213,
                    "end": 7220,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7229,
                "end": 7270,
                "test": {
                  "type": "Literal",
                  "start": 7234,
                  "end": 7243,
                  "value": "boolean",
                  "raw": "'boolean'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7245,
                    "end": 7262,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7245,
                      "end": 7261,
                      "callee": {
                        "type": "Identifier",
                        "start": 7245,
                        "end": 7258,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7259,
                          "end": 7260,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7263,
                    "end": 7270,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7279,
                "end": 7319,
                "test": {
                  "type": "Literal",
                  "start": 7284,
                  "end": 7294,
                  "value": "function",
                  "raw": "'function'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7296,
                    "end": 7311,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7296,
                      "end": 7310,
                      "callee": {
                        "type": "Identifier",
                        "start": 7296,
                        "end": 7307,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7308,
                          "end": 7309,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7312,
                    "end": 7319,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7328,
                "end": 7366,
                "test": {
                  "type": "Literal",
                  "start": 7333,
                  "end": 7341,
                  "value": "symbol",
                  "raw": "'symbol'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7343,
                    "end": 7358,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7343,
                      "end": 7357,
                      "callee": {
                        "type": "Identifier",
                        "start": 7343,
                        "end": 7354,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7355,
                          "end": 7356,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7359,
                    "end": 7366,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7375,
                "end": 7427,
                "test": {
                  "type": "Literal",
                  "start": 7380,
                  "end": 7388,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 7390,
                    "end": 7419,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 7396,
                        "end": 7418,
                        "id": {
                          "type": "Identifier",
                          "start": 7396,
                          "end": 7401,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7397,
                            "end": 7401,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 7399,
                              "end": 7401,
                              "members": []
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 7404,
                          "end": 7418,
                          "callee": {
                            "type": "Identifier",
                            "start": 7404,
                            "end": 7415,
                            "decorators": [],
                            "name": "assertNever",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 7416,
                              "end": 7417,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7420,
                    "end": 7427,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7436,
                "end": 7475,
                "test": {
                  "type": "Literal",
                  "start": 7441,
                  "end": 7449,
                  "value": "string",
                  "raw": "'string'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7451,
                    "end": 7467,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7451,
                      "end": 7466,
                      "callee": {
                        "type": "Identifier",
                        "start": 7451,
                        "end": 7463,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7464,
                          "end": 7465,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7468,
                    "end": 7475,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7484,
                "end": 7529,
                "test": {
                  "type": "Literal",
                  "start": 7489,
                  "end": 7500,
                  "value": "undefined",
                  "raw": "'undefined'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7502,
                    "end": 7521,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7502,
                      "end": 7520,
                      "callee": {
                        "type": "Identifier",
                        "start": 7502,
                        "end": 7517,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7518,
                          "end": 7519,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7522,
                    "end": 7529,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7538,
                "end": 7576,
                "test": {
                  "type": "Literal",
                  "start": 7543,
                  "end": 7551,
                  "value": "number",
                  "raw": "'number'"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7553,
                    "end": 7568,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7553,
                      "end": 7567,
                      "callee": {
                        "type": "Identifier",
                        "start": 7553,
                        "end": 7564,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7565,
                          "end": 7566,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7569,
                    "end": 7576,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7585,
                "end": 7632,
                "test": null,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 7594,
                    "end": 7624,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 7600,
                        "end": 7623,
                        "id": {
                          "type": "Identifier",
                          "start": 7600,
                          "end": 7606,
                          "decorators": [],
                          "name": "_y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 7602,
                            "end": 7606,
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "start": 7604,
                              "end": 7606,
                              "members": []
                            }
                          }
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 7609,
                          "end": 7623,
                          "callee": {
                            "type": "Identifier",
                            "start": 7609,
                            "end": 7620,
                            "decorators": [],
                            "name": "assertNever",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 7621,
                              "end": 7622,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7625,
                    "end": 7632,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 7667,
      "end": 8109,
      "id": {
        "type": "Identifier",
        "start": 7676,
        "end": 7697,
        "decorators": [],
        "name": "testUnionWithTempalte",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 7698,
          "end": 7706,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 7699,
            "end": 7706,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 7701,
              "end": 7706,
              "typeName": {
                "type": "Identifier",
                "start": 7701,
                "end": 7706,
                "decorators": [],
                "name": "Basic",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 7708,
        "end": 8109,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 7714,
            "end": 8087,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 7722,
              "end": 7730,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 7729,
                "end": 7730,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 7742,
                "end": 7781,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 7747,
                  "end": 7755,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 7747,
                      "end": 7755,
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7757,
                    "end": 7773,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7757,
                      "end": 7772,
                      "callee": {
                        "type": "Identifier",
                        "start": 7757,
                        "end": 7769,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7770,
                          "end": 7771,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7774,
                    "end": 7781,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7790,
                "end": 7831,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 7795,
                  "end": 7804,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 7795,
                      "end": 7804,
                      "value": {
                        "raw": "boolean",
                        "cooked": "boolean"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7806,
                    "end": 7823,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7806,
                      "end": 7822,
                      "callee": {
                        "type": "Identifier",
                        "start": 7806,
                        "end": 7819,
                        "decorators": [],
                        "name": "assertBoolean",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7820,
                          "end": 7821,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7824,
                    "end": 7831,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7840,
                "end": 7883,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 7845,
                  "end": 7855,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 7845,
                      "end": 7855,
                      "value": {
                        "raw": "function",
                        "cooked": "function"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7857,
                    "end": 7875,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7857,
                      "end": 7874,
                      "callee": {
                        "type": "Identifier",
                        "start": 7857,
                        "end": 7871,
                        "decorators": [],
                        "name": "assertFunction",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7872,
                          "end": 7873,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7876,
                    "end": 7883,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7892,
                "end": 7931,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 7897,
                  "end": 7905,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 7897,
                      "end": 7905,
                      "value": {
                        "raw": "symbol",
                        "cooked": "symbol"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7907,
                    "end": 7923,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7907,
                      "end": 7922,
                      "callee": {
                        "type": "Identifier",
                        "start": 7907,
                        "end": 7919,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7920,
                          "end": 7921,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7924,
                    "end": 7931,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7940,
                "end": 7979,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 7945,
                  "end": 7953,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 7945,
                      "end": 7953,
                      "value": {
                        "raw": "object",
                        "cooked": "object"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 7955,
                    "end": 7971,
                    "expression": {
                      "type": "CallExpression",
                      "start": 7955,
                      "end": 7970,
                      "callee": {
                        "type": "Identifier",
                        "start": 7955,
                        "end": 7967,
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 7968,
                          "end": 7969,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 7972,
                    "end": 7979,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 7988,
                "end": 8027,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 7993,
                  "end": 8001,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 7993,
                      "end": 8001,
                      "value": {
                        "raw": "string",
                        "cooked": "string"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8003,
                    "end": 8019,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8003,
                      "end": 8018,
                      "callee": {
                        "type": "Identifier",
                        "start": 8003,
                        "end": 8015,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8016,
                          "end": 8017,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 8020,
                    "end": 8027,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 8036,
                "end": 8081,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8041,
                  "end": 8052,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8041,
                      "end": 8052,
                      "value": {
                        "raw": "undefined",
                        "cooked": "undefined"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8054,
                    "end": 8073,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8054,
                      "end": 8072,
                      "callee": {
                        "type": "Identifier",
                        "start": 8054,
                        "end": 8069,
                        "decorators": [],
                        "name": "assertUndefined",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8070,
                          "end": 8071,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 8074,
                    "end": 8081,
                    "argument": null
                  }
                ]
              }
            ]
          },
          {
            "type": "ExpressionStatement",
            "start": 8092,
            "end": 8107,
            "expression": {
              "type": "CallExpression",
              "start": 8092,
              "end": 8106,
              "callee": {
                "type": "Identifier",
                "start": 8092,
                "end": 8103,
                "decorators": [],
                "name": "assertNever",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 8104,
                  "end": 8105,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 8111,
      "end": 8499,
      "id": {
        "type": "Identifier",
        "start": 8120,
        "end": 8147,
        "decorators": [],
        "name": "fallThroughTestWithTempalte",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 8148,
          "end": 8185,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8149,
            "end": 8185,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8151,
              "end": 8185,
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
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 8187,
        "end": 8499,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 8193,
            "end": 8497,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 8201,
              "end": 8209,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 8208,
                "end": 8209,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 8221,
                "end": 8263,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8226,
                  "end": 8234,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8226,
                      "end": 8234,
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8248,
                    "end": 8263,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8248,
                      "end": 8263,
                      "callee": {
                        "type": "Identifier",
                        "start": 8248,
                        "end": 8260,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8261,
                          "end": 8262,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 8272,
                "end": 8341,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8277,
                  "end": 8285,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8277,
                      "end": 8285,
                      "value": {
                        "raw": "string",
                        "cooked": "string"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8299,
                    "end": 8322,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8299,
                      "end": 8322,
                      "callee": {
                        "type": "Identifier",
                        "start": 8299,
                        "end": 8319,
                        "decorators": [],
                        "name": "assertStringOrNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8320,
                          "end": 8321,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8335,
                    "end": 8341,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 8350,
                "end": 8387,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8371,
                    "end": 8387,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8371,
                      "end": 8386,
                      "callee": {
                        "type": "Identifier",
                        "start": 8371,
                        "end": 8383,
                        "decorators": [],
                        "name": "assertObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8384,
                          "end": 8385,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 8396,
                "end": 8410,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8401,
                  "end": 8409,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8401,
                      "end": 8409,
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 8419,
                "end": 8491,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8424,
                  "end": 8433,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8424,
                      "end": 8433,
                      "value": {
                        "raw": "boolean",
                        "cooked": "boolean"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8447,
                    "end": 8472,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8447,
                      "end": 8471,
                      "callee": {
                        "type": "Identifier",
                        "start": 8447,
                        "end": 8468,
                        "decorators": [],
                        "name": "assertBooleanOrObject",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8469,
                          "end": 8470,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 8485,
                    "end": 8491,
                    "label": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 8501,
      "end": 8858,
      "id": {
        "type": "Identifier",
        "start": 8510,
        "end": 8536,
        "decorators": [],
        "name": "keyofNarrowingWithTemplate",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8536,
        "end": 8574,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8537,
            "end": 8573,
            "name": {
              "type": "Identifier",
              "start": 8537,
              "end": 8538,
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSMappedType",
              "start": 8547,
              "end": 8573,
              "key": {
                "type": "Identifier",
                "start": 8550,
                "end": 8551,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 8555,
                "end": 8562,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 8561,
                  "end": 8562,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8561,
                    "end": 8562,
                    "decorators": [],
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 8565,
                "end": 8571
              },
              "optional": false,
              "readonly": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 8575,
          "end": 8585,
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8576,
            "end": 8585,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 8578,
              "end": 8585,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 8584,
                "end": 8585,
                "typeName": {
                  "type": "Identifier",
                  "start": 8584,
                  "end": 8585,
                  "decorators": [],
                  "name": "S",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 8587,
        "end": 8858,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 8593,
            "end": 8631,
            "id": {
              "type": "Identifier",
              "start": 8602,
              "end": 8614,
              "decorators": [],
              "name": "assertKeyofS",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 8615,
                "end": 8626,
                "decorators": [],
                "name": "k1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 8617,
                  "end": 8626,
                  "typeAnnotation": {
                    "type": "TSTypeOperator",
                    "start": 8619,
                    "end": 8626,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 8625,
                      "end": 8626,
                      "typeName": {
                        "type": "Identifier",
                        "start": 8625,
                        "end": 8626,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 8628,
              "end": 8631,
              "body": []
            },
            "expression": false
          },
          {
            "type": "SwitchStatement",
            "start": 8636,
            "end": 8856,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 8644,
              "end": 8652,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 8651,
                "end": 8652,
                "decorators": [],
                "name": "k",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 8664,
                "end": 8720,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8669,
                  "end": 8677,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8669,
                      "end": 8677,
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8679,
                    "end": 8695,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8679,
                      "end": 8694,
                      "callee": {
                        "type": "Identifier",
                        "start": 8679,
                        "end": 8691,
                        "decorators": [],
                        "name": "assertNumber",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8692,
                          "end": 8693,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 8696,
                    "end": 8712,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8696,
                      "end": 8711,
                      "callee": {
                        "type": "Identifier",
                        "start": 8696,
                        "end": 8708,
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8709,
                          "end": 8710,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 8713,
                    "end": 8720,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 8729,
                "end": 8785,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8734,
                  "end": 8742,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8734,
                      "end": 8742,
                      "value": {
                        "raw": "symbol",
                        "cooked": "symbol"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8744,
                    "end": 8760,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8744,
                      "end": 8759,
                      "callee": {
                        "type": "Identifier",
                        "start": 8744,
                        "end": 8756,
                        "decorators": [],
                        "name": "assertSymbol",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8757,
                          "end": 8758,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 8761,
                    "end": 8777,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8761,
                      "end": 8776,
                      "callee": {
                        "type": "Identifier",
                        "start": 8761,
                        "end": 8773,
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8774,
                          "end": 8775,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 8778,
                    "end": 8785,
                    "argument": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 8794,
                "end": 8850,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 8799,
                  "end": 8807,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 8799,
                      "end": 8807,
                      "value": {
                        "raw": "string",
                        "cooked": "string"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 8809,
                    "end": 8825,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8809,
                      "end": 8824,
                      "callee": {
                        "type": "Identifier",
                        "start": 8809,
                        "end": 8821,
                        "decorators": [],
                        "name": "assertString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8822,
                          "end": 8823,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 8826,
                    "end": 8842,
                    "expression": {
                      "type": "CallExpression",
                      "start": 8826,
                      "end": 8841,
                      "callee": {
                        "type": "Identifier",
                        "start": 8826,
                        "end": 8838,
                        "decorators": [],
                        "name": "assertKeyofS",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 8839,
                          "end": 8840,
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 8843,
                    "end": 8850,
                    "argument": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 8910,
      "end": 9194,
      "id": {
        "type": "Identifier",
        "start": 8919,
        "end": 8946,
        "decorators": [],
        "name": "multipleGenericFuseWithBoth",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8946,
        "end": 8990,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 8947,
            "end": 8967,
            "name": {
              "type": "Identifier",
              "start": 8947,
              "end": 8948,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 8957,
              "end": 8967,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 8957,
                  "end": 8958,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8957,
                    "end": 8958,
                    "decorators": [],
                    "name": "L",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 8961,
                  "end": 8967
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 8969,
            "end": 8989,
            "name": {
              "type": "Identifier",
              "start": 8969,
              "end": 8970,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 8979,
              "end": 8989,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 8979,
                  "end": 8980,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8979,
                    "end": 8980,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 8983,
                  "end": 8989
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 8991,
          "end": 9000,
          "decorators": [],
          "name": "xy",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 8993,
            "end": 9000,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 8995,
              "end": 9000,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 8995,
                  "end": 8996,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8995,
                    "end": 8996,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 8999,
                  "end": 9000,
                  "typeName": {
                    "type": "Identifier",
                    "start": 8999,
                    "end": 9000,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 9001,
        "end": 9040,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 9003,
          "end": 9040,
          "types": [
            {
              "type": "TSTupleType",
              "start": 9003,
              "end": 9014,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 9004,
                  "end": 9005,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9004,
                    "end": 9005,
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 9007,
                  "end": 9013
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 9017,
              "end": 9028,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 9018,
                  "end": 9019,
                  "typeName": {
                    "type": "Identifier",
                    "start": 9018,
                    "end": 9019,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 9021,
                  "end": 9027
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 9031,
              "end": 9040,
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "start": 9033,
                  "end": 9038,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 9033,
                      "end": 9034,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9033,
                        "end": 9034,
                        "decorators": [],
                        "name": "X",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 9037,
                      "end": 9038,
                      "typeName": {
                        "type": "Identifier",
                        "start": 9037,
                        "end": 9038,
                        "decorators": [],
                        "name": "Y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 9041,
        "end": 9194,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 9047,
            "end": 9192,
            "discriminant": {
              "type": "UnaryExpression",
              "start": 9055,
              "end": 9064,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 9062,
                "end": 9064,
                "decorators": [],
                "name": "xy",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 9076,
                "end": 9108,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 9081,
                  "end": 9091,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 9081,
                      "end": 9091,
                      "value": {
                        "raw": "function",
                        "cooked": "function"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 9093,
                    "end": 9108,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 9100,
                      "end": 9107,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 9101,
                          "end": 9103,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 9105,
                          "end": 9106,
                          "value": 1,
                          "raw": "1"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 9117,
                "end": 9151,
                "test": {
                  "type": "Literal",
                  "start": 9122,
                  "end": 9130,
                  "value": "object",
                  "raw": "'object'"
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 9132,
                    "end": 9151,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 9139,
                      "end": 9150,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 9140,
                          "end": 9142,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Literal",
                          "start": 9144,
                          "end": 9149,
                          "value": "two",
                          "raw": "'two'"
                        }
                      ]
                    }
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 9160,
                "end": 9186,
                "test": {
                  "type": "TemplateLiteral",
                  "start": 9165,
                  "end": 9173,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 9165,
                      "end": 9173,
                      "value": {
                        "raw": "number",
                        "cooked": "number"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 9175,
                    "end": 9186,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 9182,
                      "end": 9186,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 9183,
                          "end": 9185,
                          "decorators": [],
                          "name": "xy",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
