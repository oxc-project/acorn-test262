__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 1027,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 40,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 33,
            "name": "arg0",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 36,
            "end": 40,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 62,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 74,
            "name": "anyArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 77,
            "end": 94,
            "elements": [
              {
                "type": "Literal",
                "start": 78,
                "end": 82,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 84,
                "end": 93,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 123,
      "end": 142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 127,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 127,
            "end": 142,
            "name": "objL",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 131,
              "end": 142,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 133,
                "end": 142,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 135,
                    "end": 137,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 135,
                      "end": 136,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 138,
                    "end": 140,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "w",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": null,
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 173,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 177,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 177,
            "end": 198,
            "name": "funcL",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 198,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 184,
                "end": 198,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 185,
                    "end": 187,
                    "name": "y2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 189,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 192,
                    "end": 198
                  }
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 200,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 214,
        "name": "temp1",
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
          "start": 215,
          "end": 219,
          "name": "arg1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 221,
        "end": 224,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 246,
      "end": 326,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 272,
        "name": "testFunctionExprC",
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
          "start": 273,
          "end": 321,
          "name": "subReplace",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 283,
            "end": 321,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 285,
              "end": 321,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 286,
                  "end": 295,
                  "name": "s",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 295,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 289,
                      "end": 295
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "RestElement",
                  "start": 297,
                  "end": 310,
                  "argument": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 303,
                    "name": "arg",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 310,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 305,
                      "end": 310,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 305,
                        "end": 308
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 312,
                "end": 321,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 315,
                  "end": 321
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
        "start": 323,
        "end": 326,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 392,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 354,
        "name": "testFunctionExprC2",
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
          "start": 355,
          "end": 387,
          "name": "eq",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 357,
            "end": 387,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 359,
              "end": 387,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 360,
                  "end": 367,
                  "name": "v1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 367,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 364,
                      "end": 367
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 369,
                  "end": 376,
                  "name": "v2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 376,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 373,
                      "end": 376
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 378,
                "end": 387,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 381,
                  "end": 387
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
        "start": 389,
        "end": 392,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 392,
      "end": 393
    },
    {
      "type": "FunctionDeclaration",
      "start": 394,
      "end": 449,
      "id": {
        "type": "Identifier",
        "start": 403,
        "end": 417,
        "name": "testObjLiteral",
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
          "start": 418,
          "end": 444,
          "name": "objLit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 424,
            "end": 444,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 426,
              "end": 444,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 428,
                  "end": 435,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 428,
                    "end": 429,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 429,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 431,
                      "end": 434
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 436,
                  "end": 442,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "name": "w",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 437,
                    "end": 442,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 439,
                      "end": 442
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
        "start": 446,
        "end": 449,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 449,
      "end": 450
    },
    {
      "type": "FunctionDeclaration",
      "start": 452,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 461,
        "end": 476,
        "name": "testFuncLiteral",
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
          "start": 477,
          "end": 500,
          "name": "funcLit",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 484,
            "end": 500,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 486,
              "end": 500,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 487,
                  "end": 489,
                  "name": "y2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 491,
                "end": 500,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 494,
                  "end": 500
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
        "start": 502,
        "end": 505,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "EmptyStatement",
      "start": 505,
      "end": 506
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 573,
      "expression": {
        "type": "CallExpression",
        "start": 539,
        "end": 572,
        "callee": {
          "type": "Identifier",
          "start": 539,
          "end": 557,
          "name": "testFunctionExprC2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 558,
            "end": 571,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 559,
                "end": 561,
                "name": "v1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 563,
                "end": 565,
                "name": "v2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 570,
              "end": 571,
              "value": 1,
              "raw": "1"
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 595,
      "expression": {
        "type": "CallExpression",
        "start": 574,
        "end": 594,
        "callee": {
          "type": "Identifier",
          "start": 574,
          "end": 588,
          "name": "testObjLiteral",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 589,
            "end": 593,
            "name": "objL",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 619,
      "expression": {
        "type": "CallExpression",
        "start": 596,
        "end": 618,
        "callee": {
          "type": "Identifier",
          "start": 596,
          "end": 611,
          "name": "testFuncLiteral",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 612,
            "end": 617,
            "name": "funcL",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 621,
      "end": 641,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "name": "k",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 629,
            "end": 640,
            "callee": {
              "type": "Identifier",
              "start": 629,
              "end": 634,
              "name": "temp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 635,
                "end": 639,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 667,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 646,
          "end": 666,
          "id": {
            "type": "Identifier",
            "start": 646,
            "end": 652,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 655,
            "end": 666,
            "callee": {
              "type": "Identifier",
              "start": 655,
              "end": 660,
              "name": "temp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 661,
                "end": 665,
                "name": "arg0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 668,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 672,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 672,
            "end": 679,
            "name": "result1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 682,
            "end": 697,
            "callee": {
              "type": "Identifier",
              "start": 682,
              "end": 687,
              "name": "temp1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 688,
                "end": 696,
                "name": "anyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 700,
      "end": 748,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 716,
        "name": "noError",
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
          "start": 717,
          "end": 730,
          "name": "variable",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 725,
            "end": 730,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 727,
              "end": 730
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 732,
          "end": 743,
          "name": "array",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 738,
            "end": 743,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 740,
              "end": 743
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 745,
        "end": 748,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 749,
      "end": 767,
      "expression": {
        "type": "CallExpression",
        "start": 749,
        "end": 766,
        "callee": {
          "type": "Identifier",
          "start": 749,
          "end": 756,
          "name": "noError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 757,
            "end": 761,
            "value": null,
            "raw": "null"
          },
          {
            "type": "ArrayExpression",
            "start": 763,
            "end": 765,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 768,
      "end": 796,
      "expression": {
        "type": "CallExpression",
        "start": 768,
        "end": 795,
        "callee": {
          "type": "Identifier",
          "start": 768,
          "end": 775,
          "name": "noError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 776,
            "end": 785,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "TSTypeAssertion",
            "start": 787,
            "end": 794,
            "expression": {
              "type": "ArrayExpression",
              "start": 792,
              "end": 794,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 788,
              "end": 791
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 830,
      "expression": {
        "type": "CallExpression",
        "start": 797,
        "end": 829,
        "callee": {
          "type": "Identifier",
          "start": 797,
          "end": 804,
          "name": "noError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 805,
            "end": 809,
            "value": null,
            "raw": "null"
          },
          {
            "type": "ArrayExpression",
            "start": 811,
            "end": 828,
            "elements": [
              {
                "type": "Literal",
                "start": 812,
                "end": 816,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Identifier",
                "start": 818,
                "end": 827,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 831,
      "end": 860,
      "expression": {
        "type": "CallExpression",
        "start": 831,
        "end": 859,
        "callee": {
          "type": "Identifier",
          "start": 831,
          "end": 838,
          "name": "noError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 839,
            "end": 848,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 850,
            "end": 858,
            "name": "anyArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 862,
      "end": 929,
      "id": {
        "type": "Identifier",
        "start": 868,
        "end": 869,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 870,
        "end": 929,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 876,
            "end": 927,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 876,
              "end": 887,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 887,
              "end": 927,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 888,
                  "end": 903,
                  "name": "emtpyArray",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 898,
                    "end": 903,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 900,
                      "end": 903
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 905,
                  "end": 918,
                  "name": "variable",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 913,
                    "end": 918,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 915,
                      "end": 918
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 920,
                "end": 927,
                "body": []
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
      "type": "VariableDeclaration",
      "start": 931,
      "end": 963,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 935,
          "end": 962,
          "id": {
            "type": "Identifier",
            "start": 935,
            "end": 939,
            "name": "newC",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 942,
            "end": 962,
            "callee": {
              "type": "Identifier",
              "start": 946,
              "end": 947,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 948,
                "end": 950,
                "elements": []
              },
              {
                "type": "Identifier",
                "start": 952,
                "end": 961,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 964,
      "end": 992,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 968,
          "end": 991,
          "id": {
            "type": "Identifier",
            "start": 968,
            "end": 973,
            "name": "newC1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 976,
            "end": 991,
            "callee": {
              "type": "Identifier",
              "start": 980,
              "end": 981,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 982,
                "end": 984,
                "elements": []
              },
              {
                "type": "Identifier",
                "start": 986,
                "end": 990,
                "name": "arg0",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 993,
      "end": 1025,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 997,
          "end": 1025,
          "id": {
            "type": "Identifier",
            "start": 997,
            "end": 1002,
            "name": "newC2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1005,
            "end": 1025,
            "callee": {
              "type": "Identifier",
              "start": 1009,
              "end": 1010,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "start": 1011,
                "end": 1018,
                "expression": {
                  "type": "ArrayExpression",
                  "start": 1016,
                  "end": 1018,
                  "elements": []
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 1012,
                  "end": 1015
                }
              },
              {
                "type": "Literal",
                "start": 1020,
                "end": 1024,
                "value": null,
                "raw": "null"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
