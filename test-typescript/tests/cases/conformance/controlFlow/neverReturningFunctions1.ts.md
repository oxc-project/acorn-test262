__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5060,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "fail",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 30,
          "name": "message",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 39,
        "end": 72,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 45,
            "end": 70,
            "argument": {
              "type": "NewExpression",
              "start": 51,
              "end": 69,
              "callee": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 68,
                  "name": "message",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "name": "f01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 108,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 108,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 90,
              "end": 108,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 191,
        "body": [
          {
            "type": "IfStatement",
            "start": 116,
            "end": 164,
            "test": {
              "type": "BinaryExpression",
              "start": 120,
              "end": 135,
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 126,
                "end": 135,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "start": 137,
              "end": 164,
              "expression": {
                "type": "CallExpression",
                "start": 137,
                "end": 163,
                "callee": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "name": "fail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 142,
                    "end": 162,
                    "value": "undefined argument",
                    "raw": "\"undefined argument\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 178,
            "expression": {
              "type": "MemberExpression",
              "start": 169,
              "end": 177,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 177,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 306,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 205,
        "name": "f02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 206,
          "end": 215,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 215,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 209,
              "end": 215
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 306,
        "body": [
          {
            "type": "IfStatement",
            "start": 231,
            "end": 252,
            "test": {
              "type": "BinaryExpression",
              "start": 235,
              "end": 241,
              "left": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "start": 240,
                "end": 241,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 243,
              "end": 252,
              "argument": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 281,
            "expression": {
              "type": "CallExpression",
              "start": 257,
              "end": 280,
              "callee": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 262,
                  "end": 279,
                  "value": "negative number",
                  "raw": "\"negative number\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 286,
            "end": 288,
            "expression": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 216,
        "end": 224,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 218,
          "end": 224
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 308,
      "end": 388,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 320,
        "name": "f03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 330,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 330,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 324,
              "end": 330
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 332,
        "end": 388,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 338,
            "end": 340,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 363,
            "expression": {
              "type": "CallExpression",
              "start": 356,
              "end": 362,
              "callee": {
                "type": "Identifier",
                "start": 356,
                "end": 360,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 368,
            "end": 370,
            "expression": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 542,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 402,
        "name": "f11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 403,
          "end": 424,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 404,
            "end": 424,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 406,
              "end": 424,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 426,
          "end": 459,
          "name": "fail",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 430,
            "end": 459,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 432,
              "end": 459,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 433,
                  "end": 449,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 441,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 443,
                      "end": 449
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 451,
                "end": 459,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 454,
                  "end": 459
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 461,
        "end": 542,
        "body": [
          {
            "type": "IfStatement",
            "start": 467,
            "end": 515,
            "test": {
              "type": "BinaryExpression",
              "start": 471,
              "end": 486,
              "left": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 477,
                "end": 486,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "start": 488,
              "end": 515,
              "expression": {
                "type": "CallExpression",
                "start": 488,
                "end": 514,
                "callee": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 492,
                  "name": "fail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 493,
                    "end": 513,
                    "value": "undefined argument",
                    "raw": "\"undefined argument\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 529,
            "expression": {
              "type": "MemberExpression",
              "start": 520,
              "end": 528,
              "object": {
                "type": "Identifier",
                "start": 520,
                "end": 521,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 522,
                "end": 528,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 544,
      "end": 692,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 556,
        "name": "f12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 557,
          "end": 566,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 558,
            "end": 566,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 560,
              "end": 566
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 568,
          "end": 601,
          "name": "fail",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 601,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 574,
              "end": 601,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 575,
                  "end": 591,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 591,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 585,
                      "end": 591
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 593,
                "end": 601,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 596,
                  "end": 601
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 611,
        "end": 692,
        "body": [
          {
            "type": "IfStatement",
            "start": 617,
            "end": 638,
            "test": {
              "type": "BinaryExpression",
              "start": 621,
              "end": 627,
              "left": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "start": 626,
                "end": 627,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 629,
              "end": 638,
              "argument": {
                "type": "Identifier",
                "start": 636,
                "end": 637,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 643,
            "end": 667,
            "expression": {
              "type": "CallExpression",
              "start": 643,
              "end": 666,
              "callee": {
                "type": "Identifier",
                "start": 643,
                "end": 647,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 648,
                  "end": 665,
                  "value": "negative number",
                  "raw": "\"negative number\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 672,
            "end": 674,
            "expression": {
              "type": "Identifier",
              "start": 672,
              "end": 673,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 602,
        "end": 610,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 604,
          "end": 610
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 694,
      "end": 809,
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 706,
        "name": "f13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 707,
          "end": 716,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 716,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 710,
              "end": 716
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 718,
          "end": 751,
          "name": "fail",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 722,
            "end": 751,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 724,
              "end": 751,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 725,
                  "end": 741,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 733,
                    "end": 741,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 735,
                      "end": 741
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 743,
                "end": 751,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 746,
                  "end": 751
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 753,
        "end": 809,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 761,
            "expression": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 777,
            "end": 784,
            "expression": {
              "type": "CallExpression",
              "start": 777,
              "end": 783,
              "callee": {
                "type": "Identifier",
                "start": 777,
                "end": 781,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 789,
            "end": 791,
            "expression": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 811,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 821,
        "end": 826,
        "name": "Debug",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 827,
        "end": 889,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 833,
            "end": 887,
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 840,
              "end": 887,
              "id": {
                "type": "Identifier",
                "start": 857,
                "end": 861,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 862,
                  "end": 878,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 870,
                    "end": 878,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": null,
              "declare": true,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 879,
                "end": 886,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 881,
                  "end": 886
                }
              }
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 891,
      "end": 1014,
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 903,
        "name": "f21",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 904,
          "end": 925,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 905,
            "end": 925,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 907,
              "end": 925,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 927,
        "end": 1014,
        "body": [
          {
            "type": "IfStatement",
            "start": 933,
            "end": 987,
            "test": {
              "type": "BinaryExpression",
              "start": 937,
              "end": 952,
              "left": {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 943,
                "end": 952,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "ExpressionStatement",
              "start": 954,
              "end": 987,
              "expression": {
                "type": "CallExpression",
                "start": 954,
                "end": 986,
                "callee": {
                  "type": "MemberExpression",
                  "start": 954,
                  "end": 964,
                  "object": {
                    "type": "Identifier",
                    "start": 954,
                    "end": 959,
                    "name": "Debug",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 964,
                    "name": "fail",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 965,
                    "end": 985,
                    "value": "undefined argument",
                    "raw": "\"undefined argument\""
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "directive": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 992,
            "end": 1001,
            "expression": {
              "type": "MemberExpression",
              "start": 992,
              "end": 1000,
              "object": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 994,
                "end": 1000,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1016,
      "end": 1135,
      "id": {
        "type": "Identifier",
        "start": 1025,
        "end": 1028,
        "name": "f22",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1029,
          "end": 1038,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1030,
            "end": 1038,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1032,
              "end": 1038
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1048,
        "end": 1135,
        "body": [
          {
            "type": "IfStatement",
            "start": 1054,
            "end": 1075,
            "test": {
              "type": "BinaryExpression",
              "start": 1058,
              "end": 1064,
              "left": {
                "type": "Identifier",
                "start": 1058,
                "end": 1059,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">=",
              "right": {
                "type": "Literal",
                "start": 1063,
                "end": 1064,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 1066,
              "end": 1075,
              "argument": {
                "type": "Identifier",
                "start": 1073,
                "end": 1074,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1080,
            "end": 1110,
            "expression": {
              "type": "CallExpression",
              "start": 1080,
              "end": 1109,
              "callee": {
                "type": "MemberExpression",
                "start": 1080,
                "end": 1090,
                "object": {
                  "type": "Identifier",
                  "start": 1080,
                  "end": 1085,
                  "name": "Debug",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1090,
                  "name": "fail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1091,
                  "end": 1108,
                  "value": "negative number",
                  "raw": "\"negative number\""
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1115,
            "end": 1117,
            "expression": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1039,
        "end": 1047,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1041,
          "end": 1047
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1137,
      "end": 1223,
      "id": {
        "type": "Identifier",
        "start": 1146,
        "end": 1149,
        "name": "f23",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1150,
          "end": 1159,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1151,
            "end": 1159,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1153,
              "end": 1159
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1161,
        "end": 1223,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1167,
            "end": 1169,
            "expression": {
              "type": "Identifier",
              "start": 1167,
              "end": 1168,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1185,
            "end": 1198,
            "expression": {
              "type": "CallExpression",
              "start": 1185,
              "end": 1197,
              "callee": {
                "type": "MemberExpression",
                "start": 1185,
                "end": 1195,
                "object": {
                  "type": "Identifier",
                  "start": 1185,
                  "end": 1190,
                  "name": "Debug",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1195,
                  "name": "fail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1203,
            "end": 1205,
            "expression": {
              "type": "Identifier",
              "start": 1203,
              "end": 1204,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1225,
      "end": 1315,
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1237,
        "name": "f24",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1238,
          "end": 1247,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1239,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1241,
              "end": 1247
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1249,
        "end": 1315,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1255,
            "end": 1257,
            "expression": {
              "type": "Identifier",
              "start": 1255,
              "end": 1256,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1273,
            "end": 1290,
            "expression": {
              "type": "CallExpression",
              "start": 1273,
              "end": 1289,
              "callee": {
                "type": "MemberExpression",
                "start": 1274,
                "end": 1286,
                "object": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1280,
                  "name": "Debug",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1282,
                  "end": 1286,
                  "name": "fail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1295,
            "end": 1297,
            "expression": {
              "type": "Identifier",
              "start": 1295,
              "end": 1296,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1317,
      "end": 1761,
      "id": {
        "type": "Identifier",
        "start": 1323,
        "end": 1327,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1328,
        "end": 1761,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1334,
            "end": 1405,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1334,
              "end": 1338,
              "name": "fail",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1338,
              "end": 1405,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1355,
                  "name": "message",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1347,
                    "end": 1355,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1349,
                      "end": 1355
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1364,
                "end": 1405,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 1374,
                    "end": 1399,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1380,
                      "end": 1398,
                      "callee": {
                        "type": "Identifier",
                        "start": 1384,
                        "end": 1389,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1390,
                          "end": 1397,
                          "name": "message",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1356,
                "end": 1363,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1358,
                  "end": 1363
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1410,
            "end": 1534,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1410,
              "end": 1412,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1412,
              "end": 1534,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1434,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1414,
                    "end": 1434,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1416,
                      "end": 1434,
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
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1436,
                "end": 1534,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1446,
                    "end": 1499,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1450,
                      "end": 1465,
                      "left": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1451,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "start": 1456,
                        "end": 1465,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 1467,
                      "end": 1499,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1467,
                        "end": 1498,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1467,
                          "end": 1476,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1467,
                            "end": 1471
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1472,
                            "end": 1476,
                            "name": "fail",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1477,
                            "end": 1497,
                            "value": "undefined argument",
                            "raw": "\"undefined argument\""
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1508,
                    "end": 1517,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1508,
                      "end": 1516,
                      "object": {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1509,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1510,
                        "end": 1516,
                        "name": "length",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1539,
            "end": 1663,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1539,
              "end": 1541,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1541,
              "end": 1663,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1542,
                  "end": 1551,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1543,
                    "end": 1551,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1545,
                      "end": 1551
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1561,
                "end": 1663,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1571,
                    "end": 1592,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1575,
                      "end": 1581,
                      "left": {
                        "type": "Identifier",
                        "start": 1575,
                        "end": 1576,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "operator": ">=",
                      "right": {
                        "type": "Literal",
                        "start": 1580,
                        "end": 1581,
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 1583,
                      "end": 1592,
                      "argument": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1591,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1601,
                    "end": 1630,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1601,
                      "end": 1629,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1601,
                        "end": 1610,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1601,
                          "end": 1605
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1606,
                          "end": 1610,
                          "name": "fail",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1611,
                          "end": 1628,
                          "value": "negative number",
                          "raw": "\"negative number\""
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1639,
                    "end": 1641,
                    "expression": {
                      "type": "Identifier",
                      "start": 1639,
                      "end": 1640,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1552,
                "end": 1560,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1554,
                  "end": 1560
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 1668,
            "end": 1759,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1668,
              "end": 1670,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1670,
              "end": 1759,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1671,
                  "end": 1680,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1672,
                    "end": 1680,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1674,
                      "end": 1680
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1682,
                "end": 1759,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1692,
                    "end": 1694,
                    "expression": {
                      "type": "Identifier",
                      "start": 1692,
                      "end": 1693,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1714,
                    "end": 1726,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1714,
                      "end": 1725,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1714,
                        "end": 1723,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1714,
                          "end": 1718
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1719,
                          "end": 1723,
                          "name": "fail",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1735,
                    "end": 1737,
                    "expression": {
                      "type": "Identifier",
                      "start": 1735,
                      "end": 1736,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1763,
      "end": 2217,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1775,
        "name": "f30",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1776,
          "end": 1806,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1777,
            "end": 1806,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1779,
              "end": 1806,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1808,
        "end": 2217,
        "body": [
          {
            "type": "IfStatement",
            "start": 1814,
            "end": 2192,
            "test": {
              "type": "BinaryExpression",
              "start": 1818,
              "end": 1839,
              "left": {
                "type": "UnaryExpression",
                "start": 1818,
                "end": 1826,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1826,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 1831,
                "end": 1839,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1841,
              "end": 1891,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1851,
                  "end": 1858,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1851,
                    "end": 1857,
                    "callee": {
                      "type": "Identifier",
                      "start": 1851,
                      "end": 1855,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1867,
                  "end": 1869,
                  "expression": {
                    "type": "Identifier",
                    "start": 1867,
                    "end": 1868,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1901,
              "end": 2192,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1911,
                  "end": 1913,
                  "expression": {
                    "type": "Identifier",
                    "start": 1911,
                    "end": 1912,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1945,
                  "end": 2159,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1949,
                    "end": 1964,
                    "left": {
                      "type": "Identifier",
                      "start": 1949,
                      "end": 1950,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Identifier",
                      "start": 1955,
                      "end": 1964,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1966,
                    "end": 2054,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1980,
                        "end": 1982,
                        "expression": {
                          "type": "Identifier",
                          "start": 1980,
                          "end": 1981,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2006,
                        "end": 2013,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2006,
                          "end": 2012,
                          "callee": {
                            "type": "Identifier",
                            "start": 2006,
                            "end": 2010,
                            "name": "fail",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2026,
                        "end": 2028,
                        "expression": {
                          "type": "Identifier",
                          "start": 2026,
                          "end": 2027,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 2068,
                    "end": 2159,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2082,
                        "end": 2084,
                        "expression": {
                          "type": "Identifier",
                          "start": 2082,
                          "end": 2083,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2111,
                        "end": 2118,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2111,
                          "end": 2117,
                          "callee": {
                            "type": "Identifier",
                            "start": 2111,
                            "end": 2115,
                            "name": "fail",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "optional": false,
                          "typeArguments": null
                        },
                        "directive": null
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2131,
                        "end": 2133,
                        "expression": {
                          "type": "Identifier",
                          "start": 2131,
                          "end": 2132,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2168,
                  "end": 2170,
                  "expression": {
                    "type": "Identifier",
                    "start": 2168,
                    "end": 2169,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2197,
            "end": 2199,
            "expression": {
              "type": "Identifier",
              "start": 2197,
              "end": 2198,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2219,
      "end": 2433,
      "id": {
        "type": "Identifier",
        "start": 2228,
        "end": 2231,
        "name": "f31",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2232,
          "end": 2257,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2233,
            "end": 2257,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 2235,
              "end": 2257,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 2237,
                  "end": 2255,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2237,
                    "end": 2238,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2238,
                    "end": 2255,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2240,
                      "end": 2255,
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
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2259,
        "end": 2433,
        "body": [
          {
            "type": "IfStatement",
            "start": 2265,
            "end": 2375,
            "test": {
              "type": "BinaryExpression",
              "start": 2269,
              "end": 2292,
              "left": {
                "type": "UnaryExpression",
                "start": 2269,
                "end": 2279,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 2276,
                  "end": 2279,
                  "object": {
                    "type": "Identifier",
                    "start": 2276,
                    "end": 2277,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2278,
                    "end": 2279,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 2284,
                "end": 2292,
                "value": "string",
                "raw": "\"string\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2294,
              "end": 2375,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2304,
                  "end": 2311,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2304,
                    "end": 2310,
                    "callee": {
                      "type": "Identifier",
                      "start": 2304,
                      "end": 2308,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2320,
                  "end": 2322,
                  "expression": {
                    "type": "Identifier",
                    "start": 2320,
                    "end": 2321,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2349,
                  "end": 2353,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2349,
                    "end": 2352,
                    "object": {
                      "type": "Identifier",
                      "start": 2349,
                      "end": 2350,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2351,
                      "end": 2352,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2380,
            "end": 2382,
            "expression": {
              "type": "Identifier",
              "start": 2380,
              "end": 2381,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2416,
            "end": 2420,
            "expression": {
              "type": "MemberExpression",
              "start": 2416,
              "end": 2419,
              "object": {
                "type": "Identifier",
                "start": 2416,
                "end": 2417,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2418,
                "end": 2419,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2435,
      "end": 2629,
      "id": {
        "type": "Identifier",
        "start": 2444,
        "end": 2447,
        "name": "f40",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2448,
          "end": 2457,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2449,
            "end": 2457,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2451,
              "end": 2457
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2459,
        "end": 2629,
        "body": [
          {
            "type": "TryStatement",
            "start": 2465,
            "end": 2604,
            "block": {
              "type": "BlockStatement",
              "start": 2469,
              "end": 2530,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2479,
                  "end": 2481,
                  "expression": {
                    "type": "Identifier",
                    "start": 2479,
                    "end": 2480,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2490,
                  "end": 2497,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2490,
                    "end": 2496,
                    "callee": {
                      "type": "Identifier",
                      "start": 2490,
                      "end": 2494,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2506,
                  "end": 2508,
                  "expression": {
                    "type": "Identifier",
                    "start": 2506,
                    "end": 2507,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "start": 2543,
              "end": 2604,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2553,
                  "end": 2555,
                  "expression": {
                    "type": "Identifier",
                    "start": 2553,
                    "end": 2554,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2564,
                  "end": 2571,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2564,
                    "end": 2570,
                    "callee": {
                      "type": "Identifier",
                      "start": 2564,
                      "end": 2568,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2580,
                  "end": 2582,
                  "expression": {
                    "type": "Identifier",
                    "start": 2580,
                    "end": 2581,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2609,
            "end": 2611,
            "expression": {
              "type": "Identifier",
              "start": 2609,
              "end": 2610,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2631,
      "end": 2782,
      "id": {
        "type": "Identifier",
        "start": 2640,
        "end": 2643,
        "name": "f41",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2644,
          "end": 2653,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2645,
            "end": 2653,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2647,
              "end": 2653
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2655,
        "end": 2782,
        "body": [
          {
            "type": "TryStatement",
            "start": 2661,
            "end": 2757,
            "block": {
              "type": "BlockStatement",
              "start": 2665,
              "end": 2683,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2675,
                  "end": 2677,
                  "expression": {
                    "type": "Identifier",
                    "start": 2675,
                    "end": 2676,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "start": 2696,
              "end": 2757,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2706,
                  "end": 2708,
                  "expression": {
                    "type": "Identifier",
                    "start": 2706,
                    "end": 2707,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2717,
                  "end": 2724,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2717,
                    "end": 2723,
                    "callee": {
                      "type": "Identifier",
                      "start": 2717,
                      "end": 2721,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2733,
                  "end": 2735,
                  "expression": {
                    "type": "Identifier",
                    "start": 2733,
                    "end": 2734,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2762,
            "end": 2764,
            "expression": {
              "type": "Identifier",
              "start": 2762,
              "end": 2763,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2784,
      "end": 2935,
      "id": {
        "type": "Identifier",
        "start": 2793,
        "end": 2796,
        "name": "f42",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2797,
          "end": 2806,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2798,
            "end": 2806,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2800,
              "end": 2806
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2808,
        "end": 2935,
        "body": [
          {
            "type": "TryStatement",
            "start": 2814,
            "end": 2910,
            "block": {
              "type": "BlockStatement",
              "start": 2818,
              "end": 2879,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2828,
                  "end": 2830,
                  "expression": {
                    "type": "Identifier",
                    "start": 2828,
                    "end": 2829,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2839,
                  "end": 2846,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2839,
                    "end": 2845,
                    "callee": {
                      "type": "Identifier",
                      "start": 2839,
                      "end": 2843,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2855,
                  "end": 2857,
                  "expression": {
                    "type": "Identifier",
                    "start": 2855,
                    "end": 2856,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "handler": null,
            "finalizer": {
              "type": "BlockStatement",
              "start": 2892,
              "end": 2910,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2902,
                  "end": 2904,
                  "expression": {
                    "type": "Identifier",
                    "start": 2902,
                    "end": 2903,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2915,
            "end": 2917,
            "expression": {
              "type": "Identifier",
              "start": 2915,
              "end": 2916,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2937,
      "end": 3136,
      "id": {
        "type": "Identifier",
        "start": 2946,
        "end": 2949,
        "name": "f43",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 2952,
        "end": 3136,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2958,
            "end": 3007,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2964,
                "end": 3006,
                "id": {
                  "type": "Identifier",
                  "start": 2964,
                  "end": 2968,
                  "name": "fail",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2971,
                  "end": 3006,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 2984,
                    "end": 3006,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 2986,
                        "end": 3004,
                        "argument": {
                          "type": "NewExpression",
                          "start": 2992,
                          "end": 3003,
                          "callee": {
                            "type": "Identifier",
                            "start": 2996,
                            "end": 3001,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "typeParameters": null,
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2973,
                    "end": 2980,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 2975,
                      "end": 2980
                    }
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3012,
            "end": 3029,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3018,
                "end": 3028,
                "id": {
                  "type": "Identifier",
                  "start": 3018,
                  "end": 3019,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 3022,
                  "end": 3028,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 3023,
                      "end": 3027,
                      "name": "fail",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 3034,
            "end": 3041,
            "expression": {
              "type": "CallExpression",
              "start": 3034,
              "end": 3040,
              "callee": {
                "type": "Identifier",
                "start": 3034,
                "end": 3038,
                "name": "fail",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3086,
            "end": 3093,
            "expression": {
              "type": "CallExpression",
              "start": 3086,
              "end": 3092,
              "callee": {
                "type": "MemberExpression",
                "start": 3086,
                "end": 3090,
                "object": {
                  "type": "Identifier",
                  "start": 3086,
                  "end": 3087,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 3088,
                  "end": 3089,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 3132,
            "end": 3134,
            "expression": {
              "type": "Identifier",
              "start": 3132,
              "end": 3133,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3160,
      "end": 3591,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3167,
        "end": 3591,
        "id": {
          "type": "Identifier",
          "start": 3177,
          "end": 3186,
          "name": "Component",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3186,
          "end": 3210,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3187,
              "end": 3209,
              "name": {
                "type": "Identifier",
                "start": 3187,
                "end": 3188,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 3211,
          "end": 3591,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 3214,
              "end": 3232,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3214,
                "end": 3222,
                "name": "attrName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3223,
                "end": 3231,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3225,
                  "end": 3231
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3234,
              "end": 3242,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3234,
                "end": 3238,
                "name": "data",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3238,
                "end": 3241,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3240,
                  "end": 3241,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3240,
                    "end": 3241,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3244,
              "end": 3268,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3244,
                "end": 3256,
                "name": "dependencies",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3257,
                "end": 3267,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 3259,
                  "end": 3267,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 3259,
                    "end": 3265
                  }
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3270,
              "end": 3278,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3270,
                "end": 3272,
                "name": "el",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3272,
                "end": 3277,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3274,
                  "end": 3277
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3280,
              "end": 3291,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3280,
                "end": 3282,
                "name": "id",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3282,
                "end": 3290,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3284,
                  "end": 3290
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3293,
              "end": 3312,
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3293,
                "end": 3301,
                "name": "multiple",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3302,
                "end": 3311,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3304,
                  "end": 3311
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3314,
              "end": 3327,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3314,
                "end": 3318,
                "name": "name",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3318,
                "end": 3326,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3320,
                  "end": 3326
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3329,
              "end": 3345,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3329,
                "end": 3335,
                "name": "schema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3335,
                "end": 3344,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 3337,
                  "end": 3344
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 3347,
              "end": 3359,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3347,
                "end": 3353,
                "name": "system",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3353,
                "end": 3358,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3355,
                  "end": 3358
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3362,
              "end": 3383,
              "key": {
                "type": "Identifier",
                "start": 3362,
                "end": 3366,
                "name": "init",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3367,
                  "end": 3375,
                  "name": "data",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3372,
                    "end": 3375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3374,
                      "end": 3375,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3374,
                        "end": 3375,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": true
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3376,
                "end": 3382,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3378,
                  "end": 3382
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3385,
              "end": 3399,
              "key": {
                "type": "Identifier",
                "start": 3385,
                "end": 3390,
                "name": "pause",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3392,
                "end": 3398,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3394,
                  "end": 3398
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3401,
              "end": 3414,
              "key": {
                "type": "Identifier",
                "start": 3401,
                "end": 3405,
                "name": "play",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3407,
                "end": 3413,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3409,
                  "end": 3413
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3416,
              "end": 3431,
              "key": {
                "type": "Identifier",
                "start": 3416,
                "end": 3422,
                "name": "remove",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3424,
                "end": 3430,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3426,
                  "end": 3430
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3433,
              "end": 3478,
              "key": {
                "type": "Identifier",
                "start": 3433,
                "end": 3437,
                "name": "tick",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3439,
                  "end": 3451,
                  "name": "time",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3443,
                    "end": 3451,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3445,
                      "end": 3451
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3453,
                  "end": 3470,
                  "name": "timeDelta",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3462,
                    "end": 3470,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3464,
                      "end": 3470
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3471,
                "end": 3477,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3473,
                  "end": 3477
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3480,
              "end": 3505,
              "key": {
                "type": "Identifier",
                "start": 3480,
                "end": 3486,
                "name": "update",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3487,
                  "end": 3497,
                  "name": "oldData",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3494,
                    "end": 3497,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3496,
                      "end": 3497,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3496,
                        "end": 3497,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3498,
                "end": 3504,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3500,
                  "end": 3504
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3507,
              "end": 3529,
              "key": {
                "type": "Identifier",
                "start": 3507,
                "end": 3519,
                "name": "updateSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": true,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3522,
                "end": 3528,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3524,
                  "end": 3528
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3532,
              "end": 3568,
              "key": {
                "type": "Identifier",
                "start": 3532,
                "end": 3544,
                "name": "extendSchema",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3545,
                  "end": 3560,
                  "name": "update",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3551,
                    "end": 3560,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3553,
                      "end": 3560
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3561,
                "end": 3567,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3563,
                  "end": 3567
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            },
            {
              "type": "TSMethodSignature",
              "start": 3570,
              "end": 3589,
              "key": {
                "type": "Identifier",
                "start": 3570,
                "end": 3580,
                "name": "flushToDOM",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3582,
                "end": 3588,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3584,
                  "end": 3588
                }
              },
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3593,
      "end": 3808,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3600,
        "end": 3808,
        "id": {
          "type": "Identifier",
          "start": 3610,
          "end": 3630,
          "name": "ComponentConstructor",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3630,
          "end": 3648,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3631,
              "end": 3647,
              "name": {
                "type": "Identifier",
                "start": 3631,
                "end": 3632,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3641,
                "end": 3647
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "body": {
          "type": "TSInterfaceBody",
          "start": 3649,
          "end": 3808,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 3652,
              "end": 3716,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3657,
                  "end": 3668,
                  "name": "el",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3659,
                    "end": 3668,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3661,
                      "end": 3668
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3670,
                  "end": 3687,
                  "name": "attrValue",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3679,
                    "end": 3687,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3681,
                      "end": 3687
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 3689,
                  "end": 3699,
                  "name": "id",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3691,
                    "end": 3699,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3693,
                      "end": 3699
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3700,
                "end": 3715,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 3702,
                  "end": 3715,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 3702,
                      "end": 3703,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3702,
                        "end": 3703,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3706,
                      "end": 3715,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3706,
                        "end": 3715,
                        "name": "Component",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3718,
              "end": 3806,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 3718,
                "end": 3727,
                "name": "prototype",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3727,
                "end": 3805,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 3729,
                  "end": 3805,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 3729,
                      "end": 3730,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3729,
                        "end": 3730,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 3733,
                      "end": 3805,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 3737,
                          "end": 3750,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3737,
                            "end": 3741,
                            "name": "name",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3741,
                            "end": 3749,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3743,
                              "end": 3749
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3753,
                          "end": 3769,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3753,
                            "end": 3759,
                            "name": "system",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3759,
                            "end": 3768,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 3761,
                              "end": 3768
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 3772,
                          "end": 3785,
                          "key": {
                            "type": "Identifier",
                            "start": 3772,
                            "end": 3776,
                            "name": "play",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3778,
                            "end": 3784,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3780,
                              "end": 3784
                            }
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 3788,
                          "end": 3802,
                          "key": {
                            "type": "Identifier",
                            "start": 3788,
                            "end": 3793,
                            "name": "pause",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false,
                          "kind": "method",
                          "typeParameters": null,
                          "params": [],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 3795,
                            "end": 3801,
                            "typeAnnotation": {
                              "type": "TSVoidKeyword",
                              "start": 3797,
                              "end": 3801
                            }
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false
                        }
                      ]
                    }
                  ]
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSDeclareFunction",
      "start": 3810,
      "end": 3947,
      "id": {
        "type": "Identifier",
        "start": 3827,
        "end": 3844,
        "name": "registerComponent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 3868,
          "end": 3880,
          "name": "name",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3872,
            "end": 3880,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3874,
              "end": 3880
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3886,
          "end": 3919,
          "name": "component",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3895,
            "end": 3919,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3897,
              "end": 3919,
              "typeName": {
                "type": "Identifier",
                "start": 3897,
                "end": 3916,
                "name": "ComponentDefinition",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3916,
                "end": 3919,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3917,
                    "end": 3918,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3917,
                      "end": 3918,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3844,
        "end": 3862,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3845,
            "end": 3861,
            "name": {
              "type": "Identifier",
              "start": 3845,
              "end": 3846,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 3855,
              "end": 3861
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3921,
        "end": 3946,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3923,
          "end": 3946,
          "typeName": {
            "type": "Identifier",
            "start": 3923,
            "end": 3943,
            "name": "ComponentConstructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3943,
            "end": 3946,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3944,
                "end": 3945,
                "typeName": {
                  "type": "Identifier",
                  "start": 3944,
                  "end": 3945,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3949,
      "end": 4059,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3956,
        "end": 4059,
        "id": {
          "type": "Identifier",
          "start": 3961,
          "end": 3980,
          "name": "ComponentDefinition",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3980,
          "end": 4007,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3981,
              "end": 4006,
              "name": {
                "type": "Identifier",
                "start": 3981,
                "end": 3982,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 4010,
          "end": 4058,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 4010,
              "end": 4011,
              "typeName": {
                "type": "Identifier",
                "start": 4010,
                "end": 4011,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 4014,
              "end": 4032,
              "typeName": {
                "type": "Identifier",
                "start": 4014,
                "end": 4021,
                "name": "Partial",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4021,
                "end": 4032,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4022,
                    "end": 4031,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4022,
                      "end": 4031,
                      "name": "Component",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4035,
              "end": 4058,
              "typeName": {
                "type": "Identifier",
                "start": 4035,
                "end": 4043,
                "name": "ThisType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4043,
                "end": 4058,
                "params": [
                  {
                    "type": "TSIntersectionType",
                    "start": 4044,
                    "end": 4057,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 4044,
                        "end": 4045,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4044,
                          "end": 4045,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4048,
                        "end": 4057,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4048,
                          "end": 4057,
                          "name": "Component",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "VariableDeclaration",
      "start": 4061,
      "end": 4565,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4067,
          "end": 4564,
          "id": {
            "type": "Identifier",
            "start": 4067,
            "end": 4076,
            "name": "Component",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4079,
            "end": 4564,
            "callee": {
              "type": "Identifier",
              "start": 4079,
              "end": 4096,
              "name": "registerComponent",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 4097,
                "end": 4113,
                "value": "test-component",
                "raw": "'test-component'"
              },
              {
                "type": "ObjectExpression",
                "start": 4115,
                "end": 4563,
                "properties": [
                  {
                    "type": "Property",
                    "start": 4118,
                    "end": 4243,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4118,
                      "end": 4124,
                      "name": "schema",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4126,
                      "end": 4243,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4130,
                          "end": 4200,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4130,
                            "end": 4140,
                            "name": "myProperty",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 4142,
                            "end": 4200,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4147,
                                "end": 4158,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4147,
                                  "end": 4154,
                                  "name": "default",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "ArrayExpression",
                                  "start": 4156,
                                  "end": 4158,
                                  "elements": []
                                },
                                "kind": "init",
                                "optional": false
                              },
                              {
                                "type": "Property",
                                "start": 4163,
                                "end": 4196,
                                "method": true,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4163,
                                  "end": 4168,
                                  "name": "parse",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4168,
                                  "end": 4196,
                                  "id": null,
                                  "expression": false,
                                  "generator": false,
                                  "async": false,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 4171,
                                    "end": 4196,
                                    "body": [
                                      {
                                        "type": "ReturnStatement",
                                        "start": 4177,
                                        "end": 4191,
                                        "argument": {
                                          "type": "ArrayExpression",
                                          "start": 4184,
                                          "end": 4190,
                                          "elements": [
                                            {
                                              "type": "Literal",
                                              "start": 4185,
                                              "end": 4189,
                                              "value": true,
                                              "raw": "true"
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  "declare": false,
                                  "typeParameters": null,
                                  "returnType": null
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4204,
                          "end": 4230,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4204,
                            "end": 4210,
                            "name": "string",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "start": 4212,
                            "end": 4230,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4214,
                                "end": 4228,
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4214,
                                  "end": 4218,
                                  "name": "type",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Literal",
                                  "start": 4220,
                                  "end": 4228,
                                  "value": "string",
                                  "raw": "'string'"
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 4234,
                          "end": 4240,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4234,
                            "end": 4237,
                            "name": "num",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 4239,
                            "end": 4240,
                            "value": 0,
                            "raw": "0"
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4246,
                    "end": 4338,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4246,
                      "end": 4250,
                      "name": "init",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4250,
                      "end": 4338,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4253,
                        "end": 4338,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 4257,
                            "end": 4275,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 4257,
                              "end": 4274,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 4257,
                                "end": 4270,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4257,
                                  "end": 4266,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4257,
                                    "end": 4261
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4262,
                                    "end": 4266,
                                    "name": "data",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4267,
                                  "end": 4270,
                                  "name": "num",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 4273,
                                "end": 4274,
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 4278,
                            "end": 4335,
                            "expression": {
                              "type": "CallExpression",
                              "start": 4278,
                              "end": 4334,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 4278,
                                "end": 4298,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4278,
                                  "end": 4285,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4278,
                                    "end": 4282
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4283,
                                    "end": 4285,
                                    "name": "el",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4286,
                                  "end": 4298,
                                  "name": "setAttribute",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 4299,
                                  "end": 4317,
                                  "value": "custom-attribute",
                                  "raw": "'custom-attribute'"
                                },
                                {
                                  "type": "Literal",
                                  "start": 4319,
                                  "end": 4333,
                                  "value": "custom-value",
                                  "raw": "'custom-value'"
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4341,
                    "end": 4352,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4341,
                      "end": 4347,
                      "name": "update",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4347,
                      "end": 4352,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4350,
                        "end": 4352,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4355,
                    "end": 4364,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4355,
                      "end": 4359,
                      "name": "tick",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4359,
                      "end": 4364,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4362,
                        "end": 4364,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4367,
                    "end": 4378,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4367,
                      "end": 4373,
                      "name": "remove",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4373,
                      "end": 4378,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4376,
                        "end": 4378,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4381,
                    "end": 4391,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4381,
                      "end": 4386,
                      "name": "pause",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4386,
                      "end": 4391,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4389,
                        "end": 4391,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4394,
                    "end": 4403,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4394,
                      "end": 4398,
                      "name": "play",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4398,
                      "end": 4403,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4401,
                        "end": 4403,
                        "body": []
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 4407,
                    "end": 4561,
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4407,
                      "end": 4415,
                      "name": "multiply",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4415,
                      "end": 4561,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4416,
                          "end": 4425,
                          "name": "f",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4417,
                            "end": 4425,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 4419,
                              "end": 4425
                            }
                          },
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 4427,
                        "end": 4561,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 4505,
                            "end": 4558,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 4512,
                              "end": 4557,
                              "left": {
                                "type": "BinaryExpression",
                                "start": 4512,
                                "end": 4529,
                                "left": {
                                  "type": "Identifier",
                                  "start": 4512,
                                  "end": 4513,
                                  "name": "f",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "operator": "*",
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 4516,
                                  "end": 4529,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 4516,
                                    "end": 4525,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4516,
                                      "end": 4520
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4521,
                                      "end": 4525,
                                      "name": "data",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4526,
                                    "end": 4529,
                                    "name": "num",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "start": 4532,
                                "end": 4557,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4532,
                                  "end": 4549,
                                  "object": {
                                    "type": "TSNonNullExpression",
                                    "start": 4532,
                                    "end": 4544,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 4532,
                                      "end": 4543,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 4532,
                                        "end": 4536
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 4537,
                                        "end": 4543,
                                        "name": "system",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    }
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4545,
                                    "end": 4549,
                                    "name": "data",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 4550,
                                  "end": 4557,
                                  "name": "counter",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "typeParameters": null,
                      "returnType": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 4589,
      "end": 4664,
      "id": {
        "type": "Identifier",
        "start": 4595,
        "end": 4606,
        "name": "MyThrowable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 4607,
        "end": 4664,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4613,
            "end": 4662,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4613,
              "end": 4618,
              "name": "throw",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4618,
              "end": 4662,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4628,
                "end": 4662,
                "body": [
                  {
                    "type": "ThrowStatement",
                    "start": 4638,
                    "end": 4656,
                    "argument": {
                      "type": "NewExpression",
                      "start": 4644,
                      "end": 4655,
                      "callee": {
                        "type": "Identifier",
                        "start": 4648,
                        "end": 4653,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4620,
                "end": 4627,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4622,
                  "end": 4627
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4666,
      "end": 4813,
      "id": {
        "type": "Identifier",
        "start": 4672,
        "end": 4686,
        "name": "SuperThrowable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 4695,
        "end": 4706,
        "name": "MyThrowable",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 4707,
        "end": 4813,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4713,
            "end": 4766,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4713,
              "end": 4716,
              "name": "err",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4716,
              "end": 4766,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4717,
                  "end": 4728,
                  "name": "msg",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4720,
                    "end": 4728,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4722,
                      "end": 4728
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 4737,
                "end": 4766,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4747,
                    "end": 4760,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4747,
                      "end": 4760,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4747,
                        "end": 4758,
                        "object": {
                          "type": "Super",
                          "start": 4747,
                          "end": 4752
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4753,
                          "end": 4758,
                          "name": "throw",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4729,
                "end": 4736,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4731,
                  "end": 4736
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 4771,
            "end": 4811,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4771,
              "end": 4773,
              "name": "ok",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 4773,
              "end": 4811,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 4783,
                "end": 4811,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4793,
                    "end": 4805,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4793,
                      "end": 4805,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4793,
                        "end": 4803,
                        "object": {
                          "type": "ThisExpression",
                          "start": 4793,
                          "end": 4797
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4798,
                          "end": 4803,
                          "name": "throw",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4775,
                "end": 4782,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4777,
                  "end": 4782
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4837,
      "end": 4894,
      "id": {
        "type": "Identifier",
        "start": 4847,
        "end": 4855,
        "name": "Services",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4856,
        "end": 4894,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4862,
            "end": 4892,
            "key": {
              "type": "Identifier",
              "start": 4862,
              "end": 4867,
              "name": "panic",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 4868,
                "end": 4883,
                "name": "message",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4875,
                  "end": 4883,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4877,
                    "end": 4883
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4884,
              "end": 4891,
              "typeAnnotation": {
                "type": "TSNeverKeyword",
                "start": 4886,
                "end": 4891
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4896,
      "end": 5059,
      "id": {
        "type": "Identifier",
        "start": 4905,
        "end": 4908,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 4909,
          "end": 4937,
          "name": "services",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4917,
            "end": 4937,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4919,
              "end": 4937,
              "typeName": {
                "type": "Identifier",
                "start": 4919,
                "end": 4927,
                "name": "Readonly",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4927,
                "end": 4937,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4928,
                    "end": 4936,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4928,
                      "end": 4936,
                      "name": "Services",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 4939,
          "end": 4955,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4940,
            "end": 4955,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4942,
              "end": 4955,
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
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 4965,
        "end": 5059,
        "body": [
          {
            "type": "IfStatement",
            "start": 4971,
            "end": 5057,
            "test": {
              "type": "BinaryExpression",
              "start": 4975,
              "end": 4985,
              "left": {
                "type": "Identifier",
                "start": 4975,
                "end": 4976,
                "name": "s",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4981,
                "end": 4985,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4987,
              "end": 5026,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4997,
                  "end": 5020,
                  "expression": {
                    "type": "CallExpression",
                    "start": 4997,
                    "end": 5019,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4997,
                      "end": 5011,
                      "object": {
                        "type": "Identifier",
                        "start": 4997,
                        "end": 5005,
                        "name": "services",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 5006,
                        "end": 5011,
                        "name": "panic",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 5012,
                        "end": 5018,
                        "value": "ouch",
                        "raw": "\"ouch\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 5032,
              "end": 5057,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 5042,
                  "end": 5051,
                  "argument": {
                    "type": "Identifier",
                    "start": 5049,
                    "end": 5050,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4956,
        "end": 4964,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 4958,
          "end": 4964
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
