__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 1258,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 38,
      "end": 119,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "name": "f",
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
          "start": 49,
          "end": 58,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 58,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 52,
              "end": 58
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 69,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 69,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 63,
              "end": 69
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 71,
          "end": 80,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 72,
            "end": 80,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 74,
              "end": 80
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 82,
        "end": 119,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 88,
            "end": 117,
            "argument": {
              "type": "CallExpression",
              "start": 95,
              "end": 116,
              "callee": {
                "type": "MemberExpression",
                "start": 95,
                "end": 105,
                "object": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 100,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "name": "from",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 106,
                  "end": 115,
                  "name": "arguments",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 132,
      "expression": {
        "type": "CallExpression",
        "start": 121,
        "end": 131,
        "callee": {
          "type": "Identifier",
          "start": 121,
          "end": 122,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 123,
            "end": 124,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 126,
            "end": 127,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 129,
            "end": 130,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 204,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 176,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 179,
            "end": 204,
            "callee": {
              "type": "Identifier",
              "start": 183,
              "end": 186,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 186,
              "end": 202,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 187,
                  "end": 193
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 195,
                  "end": 201
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 216,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 215,
        "callee": {
          "type": "MemberExpression",
          "start": 206,
          "end": 213,
          "object": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 208,
            "end": 213,
            "name": "clear",
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
      "start": 239,
      "end": 248,
      "expression": {
        "type": "CallExpression",
        "start": 239,
        "end": 247,
        "callee": {
          "type": "MemberExpression",
          "start": 239,
          "end": 245,
          "object": {
            "type": "Identifier",
            "start": 239,
            "end": 240,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 241,
            "end": 245,
            "name": "keys",
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
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 290,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 284,
        "name": "Baz",
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
        "start": 287,
        "end": 290,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 291,
      "end": 300,
      "expression": {
        "type": "MemberExpression",
        "start": 291,
        "end": 299,
        "object": {
          "type": "Identifier",
          "start": 291,
          "end": 294,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 295,
          "end": 299,
          "name": "name",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 325,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 335,
        "end": 338,
        "name": "gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 341,
        "end": 416,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 357,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 356,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 352,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 355,
                  "end": 356,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 362,
            "end": 414,
            "test": {
              "type": "BinaryExpression",
              "start": 369,
              "end": 375,
              "left": {
                "type": "Identifier",
                "start": 369,
                "end": 370,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 373,
                "end": 375,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 377,
              "end": 414,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 387,
                  "end": 395,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 387,
                    "end": 394,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 393,
                      "end": 394,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 404,
                  "end": 408,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 404,
                    "end": 407,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
    {
      "type": "FunctionDeclaration",
      "start": 418,
      "end": 510,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 432,
        "name": "gen2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 510,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 441,
            "end": 451,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 445,
                "end": 450,
                "id": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 446,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 449,
                  "end": 450,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 456,
            "end": 508,
            "test": {
              "type": "BinaryExpression",
              "start": 463,
              "end": 469,
              "left": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 467,
                "end": 469,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 471,
              "end": 508,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 481,
                  "end": 489,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 481,
                    "end": 488,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 487,
                      "end": 488,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 498,
                  "end": 502,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 498,
                    "end": 501,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "name": "i",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
    {
      "type": "ExpressionStatement",
      "start": 530,
      "end": 543,
      "expression": {
        "type": "CallExpression",
        "start": 530,
        "end": 542,
        "callee": {
          "type": "MemberExpression",
          "start": 530,
          "end": 539,
          "object": {
            "type": "Identifier",
            "start": 530,
            "end": 534,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 535,
            "end": 539,
            "name": "sign",
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
            "start": 540,
            "end": 541,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 653,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 570,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 573,
            "end": 653,
            "properties": [
              {
                "type": "Property",
                "start": 579,
                "end": 583,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 580,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 582,
                  "end": 583,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 589,
                "end": 651,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 590,
                  "end": 608,
                  "object": {
                    "type": "Identifier",
                    "start": 590,
                    "end": 596,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 608,
                    "name": "hasInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 609,
                  "end": 651,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 610,
                      "end": 620,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 615,
                        "end": 620,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 617,
                          "end": 620
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 622,
                    "end": 651,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 632,
                        "end": 645,
                        "argument": {
                          "type": "Literal",
                          "start": 639,
                          "end": 644,
                          "value": false,
                          "raw": "false"
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
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 655,
      "end": 692,
      "expression": {
        "type": "CallExpression",
        "start": 655,
        "end": 691,
        "callee": {
          "type": "MemberExpression",
          "start": 655,
          "end": 671,
          "object": {
            "type": "Identifier",
            "start": 655,
            "end": 656,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 657,
            "end": 671,
            "name": "hasOwnProperty",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 672,
            "end": 690,
            "object": {
              "type": "Identifier",
              "start": 672,
              "end": 678,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 679,
              "end": 690,
              "name": "hasInstance",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 715,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 733,
        "name": "out",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 736,
        "end": 794,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 742,
            "end": 792,
            "argument": {
              "type": "NewExpression",
              "start": 749,
              "end": 791,
              "callee": {
                "type": "Identifier",
                "start": 753,
                "end": 760,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 761,
                  "end": 790,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 771,
                      "end": 778,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 780,
                      "end": 786,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 788,
                    "end": 790,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 796,
      "end": 821,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 808,
          "end": 820,
          "id": {
            "type": "Identifier",
            "start": 808,
            "end": 820,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 815,
              "end": 820,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 817,
                "end": 820
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 822,
      "end": 869,
      "expression": {
        "type": "CallExpression",
        "start": 822,
        "end": 868,
        "callee": {
          "type": "MemberExpression",
          "start": 822,
          "end": 832,
          "object": {
            "type": "CallExpression",
            "start": 822,
            "end": 827,
            "callee": {
              "type": "Identifier",
              "start": 822,
              "end": 825,
              "name": "out",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 828,
            "end": 832,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 833,
            "end": 867,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 839,
              "end": 867,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 845,
                  "end": 865,
                  "expression": {
                    "type": "CallExpression",
                    "start": 845,
                    "end": 864,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 845,
                      "end": 856,
                      "object": {
                        "type": "Identifier",
                        "start": 845,
                        "end": 852,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 853,
                        "end": 856,
                        "name": "log",
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
                        "start": 857,
                        "end": 863,
                        "value": "Yea!",
                        "raw": "\"Yea!\""
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
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
      "type": "VariableDeclaration",
      "start": 890,
      "end": 900,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 894,
          "end": 900,
          "id": {
            "type": "Identifier",
            "start": 894,
            "end": 895,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 898,
            "end": 900,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 926,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 925,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 906,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 909,
            "end": 925,
            "callee": {
              "type": "Identifier",
              "start": 913,
              "end": 918,
              "name": "Proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 919,
                "end": 920,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 922,
                "end": 924,
                "properties": []
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
      "type": "ExpressionStatement",
      "start": 949,
      "end": 974,
      "expression": {
        "type": "CallExpression",
        "start": 949,
        "end": 973,
        "callee": {
          "type": "MemberExpression",
          "start": 949,
          "end": 969,
          "object": {
            "type": "Identifier",
            "start": 949,
            "end": 956,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 957,
            "end": 969,
            "name": "isExtensible",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 970,
            "end": 972,
            "properties": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 996,
      "end": 1023,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1000,
          "end": 1022,
          "id": {
            "type": "Identifier",
            "start": 1000,
            "end": 1003,
            "name": "reg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1006,
            "end": 1022,
            "callee": {
              "type": "Identifier",
              "start": 1010,
              "end": 1016,
              "name": "RegExp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1017,
                "end": 1021,
                "value": "/s",
                "raw": "\"/s\""
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
      "type": "ExpressionStatement",
      "start": 1024,
      "end": 1034,
      "expression": {
        "type": "MemberExpression",
        "start": 1024,
        "end": 1033,
        "object": {
          "type": "Identifier",
          "start": 1024,
          "end": 1027,
          "name": "reg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1028,
          "end": 1033,
          "name": "flags",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1056,
      "end": 1080,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1060,
          "end": 1079,
          "id": {
            "type": "Identifier",
            "start": 1060,
            "end": 1063,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1066,
            "end": 1079,
            "value": "Hello world",
            "raw": "\"Hello world\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1081,
      "end": 1106,
      "expression": {
        "type": "CallExpression",
        "start": 1081,
        "end": 1105,
        "callee": {
          "type": "MemberExpression",
          "start": 1081,
          "end": 1093,
          "object": {
            "type": "Identifier",
            "start": 1081,
            "end": 1084,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1085,
            "end": 1093,
            "name": "includes",
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
            "start": 1094,
            "end": 1101,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1103,
            "end": 1104,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1128,
      "end": 1145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1132,
          "end": 1144,
          "id": {
            "type": "Identifier",
            "start": 1132,
            "end": 1133,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1136,
            "end": 1144,
            "callee": {
              "type": "Identifier",
              "start": 1136,
              "end": 1142,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "start": 1177,
      "end": 1258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1183,
          "end": 1258,
          "id": {
            "type": "Identifier",
            "start": 1183,
            "end": 1185,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1188,
            "end": 1258,
            "properties": [
              {
                "type": "Property",
                "start": 1194,
                "end": 1256,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1195,
                  "end": 1213,
                  "object": {
                    "type": "Identifier",
                    "start": 1195,
                    "end": 1201,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1202,
                    "end": 1213,
                    "name": "hasInstance",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 1214,
                  "end": 1256,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1215,
                      "end": 1225,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1220,
                        "end": 1225,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1222,
                          "end": 1225
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1227,
                    "end": 1256,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1237,
                        "end": 1250,
                        "argument": {
                          "type": "Literal",
                          "start": 1244,
                          "end": 1249,
                          "value": false,
                          "raw": "false"
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
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
