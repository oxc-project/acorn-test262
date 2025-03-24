__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5059,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 72,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 61,
                  "end": 68,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 55,
                "end": 60,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "fail",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 30,
          "decorators": [],
          "name": "message",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 30,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 24,
              "end": 30
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 31,
        "end": 38,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 33,
          "end": 38
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 191,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 191,
        "body": [
          {
            "type": "IfStatement",
            "start": 116,
            "end": 164,
            "alternate": null,
            "consequent": {
              "type": "ExpressionStatement",
              "start": 137,
              "end": 164,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 137,
                "end": 163,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 142,
                    "end": 162,
                    "raw": "\"undefined argument\"",
                    "value": "undefined argument"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 137,
                  "end": 141,
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 120,
              "end": 135,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 126,
                "end": 135,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 178,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 169,
              "end": 177,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 171,
                "end": 177,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 86,
        "decorators": [],
        "name": "f01",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 108,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 193,
      "end": 306,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 225,
        "end": 306,
        "body": [
          {
            "type": "IfStatement",
            "start": 231,
            "end": 252,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 243,
              "end": 252,
              "argument": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 235,
              "end": 241,
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 240,
                "end": 241,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 281,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 257,
              "end": 280,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 262,
                  "end": 279,
                  "raw": "\"negative number\"",
                  "value": "negative number"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 257,
                "end": 261,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 286,
            "end": 288,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 286,
              "end": 287,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 205,
        "decorators": [],
        "name": "f02",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 206,
          "end": 215,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 207,
            "end": 215,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 209,
              "end": 215
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 216,
        "end": 224,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 218,
          "end": 224
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 308,
      "end": 388,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 332,
        "end": 388,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 338,
            "end": 340,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 356,
            "end": 363,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 356,
              "end": 362,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 356,
                "end": 360,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 368,
            "end": 370,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 317,
        "end": 320,
        "decorators": [],
        "name": "f03",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 321,
          "end": 330,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 330,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 324,
              "end": 330
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 542,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 461,
        "end": 542,
        "body": [
          {
            "type": "IfStatement",
            "start": 467,
            "end": 515,
            "alternate": null,
            "consequent": {
              "type": "ExpressionStatement",
              "start": 488,
              "end": 515,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 488,
                "end": 514,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 493,
                    "end": 513,
                    "raw": "\"undefined argument\"",
                    "value": "undefined argument"
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 492,
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 471,
              "end": 486,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 477,
                "end": 486,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 520,
            "end": 529,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 520,
              "end": 528,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 520,
                "end": 521,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 522,
                "end": 528,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 402,
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 403,
          "end": 424,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        },
        {
          "type": "Identifier",
          "start": 426,
          "end": 459,
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 430,
            "end": 459,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 432,
              "end": 459,
              "params": [
                {
                  "type": "Identifier",
                  "start": 433,
                  "end": 449,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 441,
                    "end": 449,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 443,
                      "end": 449
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 544,
      "end": 692,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 611,
        "end": 692,
        "body": [
          {
            "type": "IfStatement",
            "start": 617,
            "end": 638,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 629,
              "end": 638,
              "argument": {
                "type": "Identifier",
                "start": 636,
                "end": 637,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 621,
              "end": 627,
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 626,
                "end": 627,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 643,
            "end": 667,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 643,
              "end": 666,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 648,
                  "end": 665,
                  "raw": "\"negative number\"",
                  "value": "negative number"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 643,
                "end": 647,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 672,
            "end": 674,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 672,
              "end": 673,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 556,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 557,
          "end": 566,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 558,
            "end": 566,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 560,
              "end": 566
            }
          }
        },
        {
          "type": "Identifier",
          "start": 568,
          "end": 601,
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 572,
            "end": 601,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 574,
              "end": 601,
              "params": [
                {
                  "type": "Identifier",
                  "start": 575,
                  "end": 591,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 583,
                    "end": 591,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 585,
                      "end": 591
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 602,
        "end": 610,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 604,
          "end": 610
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 694,
      "end": 809,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 753,
        "end": 809,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 759,
            "end": 761,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 759,
              "end": 760,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 777,
            "end": 784,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 777,
              "end": 783,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 777,
                "end": 781,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 789,
            "end": 791,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 706,
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 707,
          "end": 716,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 716,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 710,
              "end": 716
            }
          }
        },
        {
          "type": "Identifier",
          "start": 718,
          "end": 751,
          "decorators": [],
          "name": "fail",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 722,
            "end": 751,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 724,
              "end": 751,
              "params": [
                {
                  "type": "Identifier",
                  "start": 725,
                  "end": 741,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 733,
                    "end": 741,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 735,
                      "end": 741
                    }
                  }
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
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 811,
      "end": 889,
      "body": {
        "type": "TSModuleBlock",
        "start": 827,
        "end": 889,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 833,
            "end": 887,
            "attributes": [],
            "declaration": {
              "type": "TSDeclareFunction",
              "start": 840,
              "end": 887,
              "async": false,
              "body": null,
              "declare": true,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 857,
                "end": 861,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 862,
                  "end": 878,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 870,
                    "end": 878,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 879,
                "end": 886,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 881,
                  "end": 886
                }
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 821,
        "end": 826,
        "decorators": [],
        "name": "Debug",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "FunctionDeclaration",
      "start": 891,
      "end": 1014,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 927,
        "end": 1014,
        "body": [
          {
            "type": "IfStatement",
            "start": 933,
            "end": 987,
            "alternate": null,
            "consequent": {
              "type": "ExpressionStatement",
              "start": 954,
              "end": 987,
              "directive": null,
              "expression": {
                "type": "CallExpression",
                "start": 954,
                "end": 986,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 965,
                    "end": 985,
                    "raw": "\"undefined argument\"",
                    "value": "undefined argument"
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 954,
                  "end": 964,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 954,
                    "end": 959,
                    "decorators": [],
                    "name": "Debug",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 964,
                    "decorators": [],
                    "name": "fail",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 937,
              "end": 952,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 943,
                "end": 952,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 992,
            "end": 1001,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 992,
              "end": 1000,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 994,
                "end": 1000,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 903,
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 904,
          "end": 925,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1016,
      "end": 1135,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1048,
        "end": 1135,
        "body": [
          {
            "type": "IfStatement",
            "start": 1054,
            "end": 1075,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 1066,
              "end": 1075,
              "argument": {
                "type": "Identifier",
                "start": 1073,
                "end": 1074,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1058,
              "end": 1064,
              "operator": ">=",
              "left": {
                "type": "Identifier",
                "start": 1058,
                "end": 1059,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1063,
                "end": 1064,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1080,
            "end": 1110,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1080,
              "end": 1109,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 1091,
                  "end": 1108,
                  "raw": "\"negative number\"",
                  "value": "negative number"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1080,
                "end": 1090,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1080,
                  "end": 1085,
                  "decorators": [],
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1086,
                  "end": 1090,
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1115,
            "end": 1117,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1025,
        "end": 1028,
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1029,
          "end": 1038,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1030,
            "end": 1038,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1032,
              "end": 1038
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1039,
        "end": 1047,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1041,
          "end": 1047
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1137,
      "end": 1223,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1161,
        "end": 1223,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1167,
            "end": 1169,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1167,
              "end": 1168,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1185,
            "end": 1198,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1185,
              "end": 1197,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1185,
                "end": 1195,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1185,
                  "end": 1190,
                  "decorators": [],
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1191,
                  "end": 1195,
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1203,
            "end": 1205,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1203,
              "end": 1204,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1146,
        "end": 1149,
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1150,
          "end": 1159,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1151,
            "end": 1159,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1153,
              "end": 1159
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1225,
      "end": 1315,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1249,
        "end": 1315,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1255,
            "end": 1257,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1255,
              "end": 1256,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1273,
            "end": 1290,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 1273,
              "end": 1289,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 1274,
                "end": 1286,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1275,
                  "end": 1280,
                  "decorators": [],
                  "name": "Debug",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1282,
                  "end": 1286,
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1295,
            "end": 1297,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 1295,
              "end": 1296,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1237,
        "decorators": [],
        "name": "f24",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1238,
          "end": 1247,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1239,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1241,
              "end": 1247
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 1317,
      "end": 1761,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1328,
        "end": 1761,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1334,
            "end": 1405,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1334,
              "end": 1338,
              "decorators": [],
              "name": "fail",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1338,
              "end": 1405,
              "async": false,
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1390,
                          "end": 1397,
                          "decorators": [],
                          "name": "message",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 1384,
                        "end": 1389,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1339,
                  "end": 1355,
                  "decorators": [],
                  "name": "message",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1347,
                    "end": 1355,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1349,
                      "end": 1355
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1356,
                "end": 1363,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 1358,
                  "end": 1363
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1410,
            "end": 1534,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1410,
              "end": 1412,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1412,
              "end": 1534,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1436,
                "end": 1534,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1446,
                    "end": 1499,
                    "alternate": null,
                    "consequent": {
                      "type": "ExpressionStatement",
                      "start": 1467,
                      "end": 1499,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1467,
                        "end": 1498,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1477,
                            "end": 1497,
                            "raw": "\"undefined argument\"",
                            "value": "undefined argument"
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1467,
                          "end": 1476,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 1467,
                            "end": 1471
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1472,
                            "end": 1476,
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1450,
                      "end": 1465,
                      "operator": "===",
                      "left": {
                        "type": "Identifier",
                        "start": 1450,
                        "end": 1451,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 1456,
                        "end": 1465,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1508,
                    "end": 1517,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 1508,
                      "end": 1516,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1508,
                        "end": 1509,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1510,
                        "end": 1516,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1434,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1539,
            "end": 1663,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1539,
              "end": 1541,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1541,
              "end": 1663,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1561,
                "end": 1663,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1571,
                    "end": 1592,
                    "alternate": null,
                    "consequent": {
                      "type": "ReturnStatement",
                      "start": 1583,
                      "end": 1592,
                      "argument": {
                        "type": "Identifier",
                        "start": 1590,
                        "end": 1591,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1575,
                      "end": 1581,
                      "operator": ">=",
                      "left": {
                        "type": "Identifier",
                        "start": 1575,
                        "end": 1576,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1580,
                        "end": 1581,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1601,
                    "end": 1630,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1601,
                      "end": 1629,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 1611,
                          "end": 1628,
                          "raw": "\"negative number\"",
                          "value": "negative number"
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1601,
                        "end": 1610,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1601,
                          "end": 1605
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1606,
                          "end": 1610,
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1639,
                    "end": 1641,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 1639,
                      "end": 1640,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1542,
                  "end": 1551,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1543,
                    "end": 1551,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1545,
                      "end": 1551
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1552,
                "end": 1560,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 1554,
                  "end": 1560
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1668,
            "end": 1759,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1668,
              "end": 1670,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1670,
              "end": 1759,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1682,
                "end": 1759,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1692,
                    "end": 1694,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 1692,
                      "end": 1693,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1714,
                    "end": 1726,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1714,
                      "end": 1725,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1714,
                        "end": 1723,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1714,
                          "end": 1718
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1719,
                          "end": 1723,
                          "decorators": [],
                          "name": "fail",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1735,
                    "end": 1737,
                    "directive": null,
                    "expression": {
                      "type": "Identifier",
                      "start": 1735,
                      "end": 1736,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1671,
                  "end": 1680,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1672,
                    "end": 1680,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1674,
                      "end": 1680
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1323,
        "end": 1327,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1763,
      "end": 2217,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1808,
        "end": 2217,
        "body": [
          {
            "type": "IfStatement",
            "start": 1814,
            "end": 2192,
            "alternate": {
              "type": "BlockStatement",
              "start": 1901,
              "end": 2192,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1911,
                  "end": 1913,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1911,
                    "end": 1912,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "IfStatement",
                  "start": 1945,
                  "end": 2159,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 2068,
                    "end": 2159,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 2082,
                        "end": 2084,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2082,
                          "end": 2083,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2111,
                        "end": 2118,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2111,
                          "end": 2117,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 2111,
                            "end": 2115,
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2131,
                        "end": 2133,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2131,
                          "end": 2132,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
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
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 1980,
                          "end": 1981,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2006,
                        "end": 2013,
                        "directive": null,
                        "expression": {
                          "type": "CallExpression",
                          "start": 2006,
                          "end": 2012,
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 2006,
                            "end": 2010,
                            "decorators": [],
                            "name": "fail",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "ExpressionStatement",
                        "start": 2026,
                        "end": 2028,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 2026,
                          "end": 2027,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1949,
                    "end": 1964,
                    "operator": "!==",
                    "left": {
                      "type": "Identifier",
                      "start": 1949,
                      "end": 1950,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1955,
                      "end": 1964,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2168,
                  "end": 2170,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2168,
                    "end": 2169,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1851,
                    "end": 1857,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 1851,
                      "end": 1855,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1867,
                  "end": 1869,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 1867,
                    "end": 1868,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1818,
              "end": 1839,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 1818,
                "end": 1826,
                "argument": {
                  "type": "Identifier",
                  "start": 1825,
                  "end": 1826,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 1831,
                "end": 1839,
                "raw": "\"string\"",
                "value": "string"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2197,
            "end": 2199,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2197,
              "end": 2198,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1772,
        "end": 1775,
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1776,
          "end": 1806,
          "decorators": [],
          "name": "x",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2219,
      "end": 2433,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2259,
        "end": 2433,
        "body": [
          {
            "type": "IfStatement",
            "start": 2265,
            "end": 2375,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 2294,
              "end": 2375,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2304,
                  "end": 2311,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2304,
                    "end": 2310,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2304,
                      "end": 2308,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2320,
                  "end": 2322,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2320,
                    "end": 2321,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2349,
                  "end": 2353,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2349,
                    "end": 2352,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2349,
                      "end": 2350,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2351,
                      "end": 2352,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 2269,
              "end": 2292,
              "operator": "===",
              "left": {
                "type": "UnaryExpression",
                "start": 2269,
                "end": 2279,
                "argument": {
                  "type": "MemberExpression",
                  "start": 2276,
                  "end": 2279,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2276,
                    "end": 2277,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2278,
                    "end": 2279,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "right": {
                "type": "Literal",
                "start": 2284,
                "end": 2292,
                "raw": "\"string\"",
                "value": "string"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2380,
            "end": 2382,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2380,
              "end": 2381,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 2416,
            "end": 2420,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 2416,
              "end": 2419,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2416,
                "end": 2417,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2418,
                "end": 2419,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2228,
        "end": 2231,
        "decorators": [],
        "name": "f31",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2232,
          "end": 2257,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 2237,
                    "end": 2238,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2435,
      "end": 2629,
      "async": false,
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2479,
                    "end": 2480,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2490,
                  "end": 2497,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2490,
                    "end": 2496,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2490,
                      "end": 2494,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2506,
                  "end": 2508,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2506,
                    "end": 2507,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 2543,
              "end": 2604,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2553,
                  "end": 2555,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2553,
                    "end": 2554,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2564,
                  "end": 2571,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2564,
                    "end": 2570,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2564,
                      "end": 2568,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2580,
                  "end": 2582,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2580,
                    "end": 2581,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2609,
            "end": 2611,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2609,
              "end": 2610,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2444,
        "end": 2447,
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2448,
          "end": 2457,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2449,
            "end": 2457,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2451,
              "end": 2457
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2631,
      "end": 2782,
      "async": false,
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2675,
                    "end": 2676,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 2696,
              "end": 2757,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2706,
                  "end": 2708,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2706,
                    "end": 2707,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2717,
                  "end": 2724,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2717,
                    "end": 2723,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2717,
                      "end": 2721,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2733,
                  "end": 2735,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2733,
                    "end": 2734,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2762,
            "end": 2764,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2762,
              "end": 2763,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2640,
        "end": 2643,
        "decorators": [],
        "name": "f41",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2644,
          "end": 2653,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2645,
            "end": 2653,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2647,
              "end": 2653
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2784,
      "end": 2935,
      "async": false,
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
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2828,
                    "end": 2829,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2839,
                  "end": 2846,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2839,
                    "end": 2845,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 2839,
                      "end": 2843,
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2855,
                  "end": 2857,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2855,
                    "end": 2856,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 2892,
              "end": 2910,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2902,
                  "end": 2904,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 2902,
                    "end": 2903,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "handler": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2915,
            "end": 2917,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 2915,
              "end": 2916,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2793,
        "end": 2796,
        "decorators": [],
        "name": "f42",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2797,
          "end": 2806,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2798,
            "end": 2806,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2800,
              "end": 2806
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2937,
      "end": 3136,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2964,
                  "end": 2968,
                  "decorators": [],
                  "name": "fail",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 2971,
                  "end": 3006,
                  "async": false,
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
                          "arguments": [],
                          "callee": {
                            "type": "Identifier",
                            "start": 2996,
                            "end": 3001,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2973,
                    "end": 2980,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 2975,
                      "end": 2980
                    }
                  },
                  "typeParameters": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 3018,
                  "end": 3019,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "fail",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 3034,
            "end": 3041,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 3034,
              "end": 3040,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 3034,
                "end": 3038,
                "decorators": [],
                "name": "fail",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3086,
            "end": 3093,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 3086,
              "end": 3092,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 3086,
                "end": 3090,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 3086,
                  "end": 3087,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 3088,
                  "end": 3089,
                  "raw": "0",
                  "value": 0
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 3132,
            "end": 3134,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 3132,
              "end": 3133,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2946,
        "end": 2949,
        "decorators": [],
        "name": "f43",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3160,
      "end": 3591,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3167,
        "end": 3591,
        "body": {
          "type": "TSInterfaceBody",
          "start": 3211,
          "end": 3591,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 3214,
              "end": 3232,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3214,
                "end": 3222,
                "decorators": [],
                "name": "attrName",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3223,
                "end": 3231,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3225,
                  "end": 3231
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3234,
              "end": 3242,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3234,
                "end": 3238,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3238,
                "end": 3241,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3240,
                  "end": 3241,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3240,
                    "end": 3241,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3244,
              "end": 3268,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3244,
                "end": 3256,
                "decorators": [],
                "name": "dependencies",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
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
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3270,
              "end": 3278,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3270,
                "end": 3272,
                "decorators": [],
                "name": "el",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3272,
                "end": 3277,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3274,
                  "end": 3277
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3280,
              "end": 3291,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3280,
                "end": 3282,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3282,
                "end": 3290,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3284,
                  "end": 3290
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3293,
              "end": 3312,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3293,
                "end": 3301,
                "decorators": [],
                "name": "multiple",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3302,
                "end": 3311,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 3304,
                  "end": 3311
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3314,
              "end": 3327,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3314,
                "end": 3318,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3318,
                "end": 3326,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 3320,
                  "end": 3326
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3329,
              "end": 3345,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3329,
                "end": 3335,
                "decorators": [],
                "name": "schema",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3335,
                "end": 3344,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 3337,
                  "end": 3344
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 3347,
              "end": 3359,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3347,
                "end": 3353,
                "decorators": [],
                "name": "system",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 3353,
                "end": 3358,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 3355,
                  "end": 3358
                }
              }
            },
            {
              "type": "TSMethodSignature",
              "start": 3362,
              "end": 3383,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3362,
                "end": 3366,
                "decorators": [],
                "name": "init",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3367,
                  "end": 3375,
                  "decorators": [],
                  "name": "data",
                  "optional": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3372,
                    "end": 3375,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3374,
                      "end": 3375,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3374,
                        "end": 3375,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3385,
              "end": 3399,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3385,
                "end": 3390,
                "decorators": [],
                "name": "pause",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3401,
              "end": 3414,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3401,
                "end": 3405,
                "decorators": [],
                "name": "play",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3416,
              "end": 3431,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3416,
                "end": 3422,
                "decorators": [],
                "name": "remove",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3433,
              "end": 3478,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3433,
                "end": 3437,
                "decorators": [],
                "name": "tick",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": true,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3439,
                  "end": 3451,
                  "decorators": [],
                  "name": "time",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3443,
                    "end": 3451,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3445,
                      "end": 3451
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3453,
                  "end": 3470,
                  "decorators": [],
                  "name": "timeDelta",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3462,
                    "end": 3470,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 3464,
                      "end": 3470
                    }
                  }
                }
              ],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3480,
              "end": 3505,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3480,
                "end": 3486,
                "decorators": [],
                "name": "update",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3487,
                  "end": 3497,
                  "decorators": [],
                  "name": "oldData",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3494,
                    "end": 3497,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3496,
                      "end": 3497,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3496,
                        "end": 3497,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3507,
              "end": 3529,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3507,
                "end": 3519,
                "decorators": [],
                "name": "updateSchema",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": true,
              "params": [],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3532,
              "end": 3568,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3532,
                "end": 3544,
                "decorators": [],
                "name": "extendSchema",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3545,
                  "end": 3560,
                  "decorators": [],
                  "name": "update",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3551,
                    "end": 3560,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3553,
                      "end": 3560
                    }
                  }
                }
              ],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            },
            {
              "type": "TSMethodSignature",
              "start": 3570,
              "end": 3589,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3570,
                "end": 3580,
                "decorators": [],
                "name": "flushToDOM",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [],
              "readonly": false,
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
              "static": false,
              "typeParameters": null
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 3177,
          "end": 3186,
          "decorators": [],
          "name": "Component",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3186,
          "end": 3210,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3187,
              "end": 3209,
              "const": false,
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
              "name": {
                "type": "Identifier",
                "start": 3187,
                "end": 3188,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3593,
      "end": 3808,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 3600,
        "end": 3808,
        "body": {
          "type": "TSInterfaceBody",
          "start": 3649,
          "end": 3808,
          "body": [
            {
              "type": "TSConstructSignatureDeclaration",
              "start": 3652,
              "end": 3716,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3657,
                  "end": 3668,
                  "decorators": [],
                  "name": "el",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3659,
                    "end": 3668,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 3661,
                      "end": 3668
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3670,
                  "end": 3687,
                  "decorators": [],
                  "name": "attrValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3679,
                    "end": 3687,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3681,
                      "end": 3687
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 3689,
                  "end": 3699,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3691,
                    "end": 3699,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 3693,
                      "end": 3699
                    }
                  }
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3702,
                        "end": 3703,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3706,
                      "end": 3715,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3706,
                        "end": 3715,
                        "decorators": [],
                        "name": "Component",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSPropertySignature",
              "start": 3718,
              "end": 3806,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 3718,
                "end": 3727,
                "decorators": [],
                "name": "prototype",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3729,
                        "end": 3730,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3737,
                            "end": 3741,
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3741,
                            "end": 3749,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 3743,
                              "end": 3749
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 3753,
                          "end": 3769,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3753,
                            "end": 3759,
                            "decorators": [],
                            "name": "system",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 3759,
                            "end": 3768,
                            "typeAnnotation": {
                              "type": "TSUnknownKeyword",
                              "start": 3761,
                              "end": 3768
                            }
                          }
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 3772,
                          "end": 3785,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3772,
                            "end": 3776,
                            "decorators": [],
                            "name": "play",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [],
                          "readonly": false,
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
                          "static": false,
                          "typeParameters": null
                        },
                        {
                          "type": "TSMethodSignature",
                          "start": 3788,
                          "end": 3802,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 3788,
                            "end": 3793,
                            "decorators": [],
                            "name": "pause",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "method",
                          "optional": false,
                          "params": [],
                          "readonly": false,
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
                          "static": false,
                          "typeParameters": null
                        }
                      ]
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 3610,
          "end": 3630,
          "decorators": [],
          "name": "ComponentConstructor",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 3630,
          "end": 3648,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 3631,
              "end": 3647,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 3641,
                "end": 3647
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 3631,
                "end": 3632,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSDeclareFunction",
      "start": 3810,
      "end": 3947,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3827,
        "end": 3844,
        "decorators": [],
        "name": "registerComponent",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3868,
          "end": 3880,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3872,
            "end": 3880,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 3874,
              "end": 3880
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3886,
          "end": 3919,
          "decorators": [],
          "name": "component",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3895,
            "end": 3919,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3897,
              "end": 3919,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3916,
                "end": 3919,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3917,
                    "end": 3918,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3917,
                      "end": 3918,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3897,
                "end": 3916,
                "decorators": [],
                "name": "ComponentDefinition",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3921,
        "end": 3946,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 3923,
          "end": 3946,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 3943,
            "end": 3946,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 3944,
                "end": 3945,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 3944,
                  "end": 3945,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 3923,
            "end": 3943,
            "decorators": [],
            "name": "ComponentConstructor",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3844,
        "end": 3862,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3845,
            "end": 3861,
            "const": false,
            "constraint": {
              "type": "TSObjectKeyword",
              "start": 3855,
              "end": 3861
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3845,
              "end": 3846,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 3949,
      "end": 4059,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 3956,
        "end": 4059,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 3961,
          "end": 3980,
          "decorators": [],
          "name": "ComponentDefinition",
          "optional": false,
          "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 4010,
                "end": 4011,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4014,
              "end": 4032,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4021,
                "end": 4032,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4022,
                    "end": 4031,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4022,
                      "end": 4031,
                      "decorators": [],
                      "name": "Component",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4014,
                "end": 4021,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4035,
              "end": 4058,
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4044,
                          "end": 4045,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 4048,
                        "end": 4057,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4048,
                          "end": 4057,
                          "decorators": [],
                          "name": "Component",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4035,
                "end": 4043,
                "decorators": [],
                "name": "ThisType",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
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
              "const": false,
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
              "name": {
                "type": "Identifier",
                "start": 3981,
                "end": 3982,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4067,
            "end": 4076,
            "decorators": [],
            "name": "Component",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 4079,
            "end": 4564,
            "arguments": [
              {
                "type": "Literal",
                "start": 4097,
                "end": 4113,
                "raw": "'test-component'",
                "value": "test-component"
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4118,
                      "end": 4124,
                      "decorators": [],
                      "name": "schema",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "ObjectExpression",
                      "start": 4126,
                      "end": 4243,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 4130,
                          "end": 4200,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4130,
                            "end": 4140,
                            "decorators": [],
                            "name": "myProperty",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 4142,
                            "end": 4200,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4147,
                                "end": 4158,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4147,
                                  "end": 4154,
                                  "decorators": [],
                                  "name": "default",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "ArrayExpression",
                                  "start": 4156,
                                  "end": 4158,
                                  "elements": []
                                }
                              },
                              {
                                "type": "Property",
                                "start": 4163,
                                "end": 4196,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4163,
                                  "end": 4168,
                                  "decorators": [],
                                  "name": "parse",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": true,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "FunctionExpression",
                                  "start": 4168,
                                  "end": 4196,
                                  "async": false,
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
                                              "raw": "true",
                                              "value": true
                                            }
                                          ]
                                        }
                                      }
                                    ]
                                  },
                                  "declare": false,
                                  "expression": false,
                                  "generator": false,
                                  "id": null,
                                  "params": [],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 4204,
                          "end": 4230,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4204,
                            "end": 4210,
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ObjectExpression",
                            "start": 4212,
                            "end": 4230,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 4214,
                                "end": 4228,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 4214,
                                  "end": 4218,
                                  "decorators": [],
                                  "name": "type",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": false,
                                "value": {
                                  "type": "Literal",
                                  "start": 4220,
                                  "end": 4228,
                                  "raw": "'string'",
                                  "value": "string"
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "Property",
                          "start": 4234,
                          "end": 4240,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 4234,
                            "end": 4237,
                            "decorators": [],
                            "name": "num",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 4239,
                            "end": 4240,
                            "raw": "0",
                            "value": 0
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4246,
                    "end": 4338,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4246,
                      "end": 4250,
                      "decorators": [],
                      "name": "init",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4250,
                      "end": 4338,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4253,
                        "end": 4338,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 4257,
                            "end": 4275,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 4257,
                              "end": 4274,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 4257,
                                "end": 4270,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4257,
                                  "end": 4266,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4257,
                                    "end": 4261
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4262,
                                    "end": 4266,
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4267,
                                  "end": 4270,
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 4273,
                                "end": 4274,
                                "raw": "0",
                                "value": 0
                              }
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 4278,
                            "end": 4335,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 4278,
                              "end": 4334,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 4299,
                                  "end": 4317,
                                  "raw": "'custom-attribute'",
                                  "value": "custom-attribute"
                                },
                                {
                                  "type": "Literal",
                                  "start": 4319,
                                  "end": 4333,
                                  "raw": "'custom-value'",
                                  "value": "custom-value"
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 4278,
                                "end": 4298,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4278,
                                  "end": 4285,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 4278,
                                    "end": 4282
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4283,
                                    "end": 4285,
                                    "decorators": [],
                                    "name": "el",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4286,
                                  "end": 4298,
                                  "decorators": [],
                                  "name": "setAttribute",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4341,
                    "end": 4352,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4341,
                      "end": 4347,
                      "decorators": [],
                      "name": "update",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4347,
                      "end": 4352,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4350,
                        "end": 4352,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4355,
                    "end": 4364,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4355,
                      "end": 4359,
                      "decorators": [],
                      "name": "tick",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4359,
                      "end": 4364,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4362,
                        "end": 4364,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4367,
                    "end": 4378,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4367,
                      "end": 4373,
                      "decorators": [],
                      "name": "remove",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4373,
                      "end": 4378,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4376,
                        "end": 4378,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4381,
                    "end": 4391,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4381,
                      "end": 4386,
                      "decorators": [],
                      "name": "pause",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4386,
                      "end": 4391,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4389,
                        "end": 4391,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4394,
                    "end": 4403,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4394,
                      "end": 4398,
                      "decorators": [],
                      "name": "play",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4398,
                      "end": 4403,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 4401,
                        "end": 4403,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [],
                      "returnType": null,
                      "typeParameters": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 4407,
                    "end": 4561,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 4407,
                      "end": 4415,
                      "decorators": [],
                      "name": "multiply",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": true,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 4415,
                      "end": 4561,
                      "async": false,
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
                              "operator": "*",
                              "left": {
                                "type": "BinaryExpression",
                                "start": 4512,
                                "end": 4529,
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "start": 4512,
                                  "end": 4513,
                                  "decorators": [],
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "start": 4516,
                                  "end": 4529,
                                  "computed": false,
                                  "object": {
                                    "type": "MemberExpression",
                                    "start": 4516,
                                    "end": 4525,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 4516,
                                      "end": 4520
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 4521,
                                      "end": 4525,
                                      "decorators": [],
                                      "name": "data",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4526,
                                    "end": 4529,
                                    "decorators": [],
                                    "name": "num",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              },
                              "right": {
                                "type": "MemberExpression",
                                "start": 4532,
                                "end": 4557,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 4532,
                                  "end": 4549,
                                  "computed": false,
                                  "object": {
                                    "type": "TSNonNullExpression",
                                    "start": 4532,
                                    "end": 4544,
                                    "expression": {
                                      "type": "MemberExpression",
                                      "start": 4532,
                                      "end": 4543,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 4532,
                                        "end": 4536
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 4537,
                                        "end": 4543,
                                        "decorators": [],
                                        "name": "system",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 4545,
                                    "end": 4549,
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 4550,
                                  "end": 4557,
                                  "decorators": [],
                                  "name": "counter",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          }
                        ]
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 4416,
                          "end": 4425,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 4417,
                            "end": 4425,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 4419,
                              "end": 4425
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4079,
              "end": 4096,
              "decorators": [],
              "name": "registerComponent",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 4589,
      "end": 4664,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4607,
        "end": 4664,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4613,
            "end": 4662,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4613,
              "end": 4618,
              "decorators": [],
              "name": "throw",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4618,
              "end": 4662,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 4648,
                        "end": 4653,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4620,
                "end": 4627,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4622,
                  "end": 4627
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4595,
        "end": 4606,
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 4666,
      "end": 4813,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 4707,
        "end": 4813,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4713,
            "end": 4766,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4713,
              "end": 4716,
              "decorators": [],
              "name": "err",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4716,
              "end": 4766,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4737,
                "end": 4766,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4747,
                    "end": 4760,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4747,
                      "end": 4760,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4747,
                        "end": 4758,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 4747,
                          "end": 4752
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4753,
                          "end": 4758,
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4717,
                  "end": 4728,
                  "decorators": [],
                  "name": "msg",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4720,
                    "end": 4728,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4722,
                      "end": 4728
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4729,
                "end": 4736,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4731,
                  "end": 4736
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 4771,
            "end": 4811,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4771,
              "end": 4773,
              "decorators": [],
              "name": "ok",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 4773,
              "end": 4811,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 4783,
                "end": 4811,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4793,
                    "end": 4805,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4793,
                      "end": 4805,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4793,
                        "end": 4803,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 4793,
                          "end": 4797
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 4798,
                          "end": 4803,
                          "decorators": [],
                          "name": "throw",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4775,
                "end": 4782,
                "typeAnnotation": {
                  "type": "TSNeverKeyword",
                  "start": 4777,
                  "end": 4782
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4672,
        "end": 4686,
        "decorators": [],
        "name": "SuperThrowable",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 4695,
        "end": 4706,
        "decorators": [],
        "name": "MyThrowable",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4837,
      "end": 4894,
      "body": {
        "type": "TSInterfaceBody",
        "start": 4856,
        "end": 4894,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 4862,
            "end": 4892,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4862,
              "end": 4867,
              "decorators": [],
              "name": "panic",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4868,
                "end": 4883,
                "decorators": [],
                "name": "message",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4875,
                  "end": 4883,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4877,
                    "end": 4883
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 4847,
        "end": 4855,
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4896,
      "end": 5059,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4965,
        "end": 5059,
        "body": [
          {
            "type": "IfStatement",
            "start": 4971,
            "end": 5057,
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
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
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
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 4997,
                    "end": 5019,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 5012,
                        "end": 5018,
                        "raw": "\"ouch\"",
                        "value": "ouch"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 4997,
                      "end": 5011,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 4997,
                        "end": 5005,
                        "decorators": [],
                        "name": "services",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 5006,
                        "end": 5011,
                        "decorators": [],
                        "name": "panic",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 4975,
              "end": 4985,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 4975,
                "end": 4976,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 4981,
                "end": 4985,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4905,
        "end": 4908,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4909,
          "end": 4937,
          "decorators": [],
          "name": "services",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4917,
            "end": 4937,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4919,
              "end": 4937,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4927,
                "end": 4937,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4928,
                    "end": 4936,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4928,
                      "end": 4936,
                      "decorators": [],
                      "name": "Services",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 4919,
                "end": 4927,
                "decorators": [],
                "name": "Readonly",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4939,
          "end": 4955,
          "decorators": [],
          "name": "s",
          "optional": false,
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
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4956,
        "end": 4964,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 4958,
          "end": 4964
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
