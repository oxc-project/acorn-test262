__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 1262,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 42,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
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
          "start": 53,
          "end": 62,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 62,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 56,
              "end": 62
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 64,
          "end": 73,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 73,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 84,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 86,
        "end": 123,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 92,
            "end": 121,
            "argument": {
              "type": "CallExpression",
              "start": 99,
              "end": 120,
              "callee": {
                "type": "MemberExpression",
                "start": 99,
                "end": 109,
                "object": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
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
                  "start": 110,
                  "end": 119,
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
      "start": 125,
      "end": 136,
      "expression": {
        "type": "CallExpression",
        "start": 125,
        "end": 135,
        "callee": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 133,
            "end": 134,
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
      "start": 175,
      "end": 209,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 208,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 183,
            "end": 208,
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 190,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 190,
              "end": 206,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 191,
                  "end": 197
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 199,
                  "end": 205
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
      "start": 210,
      "end": 220,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 219,
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 217,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 217,
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
      "start": 243,
      "end": 252,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 251,
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 249,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
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
      "start": 276,
      "end": 294,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 288,
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
        "start": 291,
        "end": 294,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 304,
      "expression": {
        "type": "MemberExpression",
        "start": 295,
        "end": 303,
        "object": {
          "type": "Identifier",
          "start": 295,
          "end": 298,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 299,
          "end": 303,
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
      "start": 329,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 342,
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
        "start": 345,
        "end": 420,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 351,
            "end": 361,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 355,
                "end": 360,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 359,
                  "end": 360,
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
            "start": 366,
            "end": 418,
            "test": {
              "type": "BinaryExpression",
              "start": 373,
              "end": 379,
              "left": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 377,
                "end": 379,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 381,
              "end": 418,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 391,
                  "end": 399,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 391,
                    "end": 398,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 398,
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
                  "start": 408,
                  "end": 412,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 408,
                    "end": 411,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 409,
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
      "start": 422,
      "end": 514,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
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
        "start": 439,
        "end": 514,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 445,
            "end": 455,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 454,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 453,
                  "end": 454,
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
            "start": 460,
            "end": 512,
            "test": {
              "type": "BinaryExpression",
              "start": 467,
              "end": 473,
              "left": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 471,
                "end": 473,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 475,
              "end": 512,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 485,
                  "end": 493,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 485,
                    "end": 492,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 492,
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
                  "start": 502,
                  "end": 506,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 502,
                    "end": 505,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 503,
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
      "start": 534,
      "end": 547,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 546,
        "callee": {
          "type": "MemberExpression",
          "start": 534,
          "end": 543,
          "object": {
            "type": "Identifier",
            "start": 534,
            "end": 538,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 539,
            "end": 543,
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
            "start": 544,
            "end": 545,
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
      "start": 569,
      "end": 658,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 657,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 577,
            "end": 657,
            "properties": [
              {
                "type": "Property",
                "start": 583,
                "end": 587,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 584,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 586,
                  "end": 587,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 593,
                "end": 655,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 594,
                  "end": 612,
                  "object": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 600,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 612,
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
                  "start": 613,
                  "end": 655,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 614,
                      "end": 624,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 619,
                        "end": 624,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 621,
                          "end": 624
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 626,
                    "end": 655,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 636,
                        "end": 649,
                        "argument": {
                          "type": "Literal",
                          "start": 643,
                          "end": 648,
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
      "start": 659,
      "end": 696,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 695,
        "callee": {
          "type": "MemberExpression",
          "start": 659,
          "end": 675,
          "object": {
            "type": "Identifier",
            "start": 659,
            "end": 660,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 661,
            "end": 675,
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
            "start": 676,
            "end": 694,
            "object": {
              "type": "Identifier",
              "start": 676,
              "end": 682,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 683,
              "end": 694,
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
      "start": 719,
      "end": 798,
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 737,
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
        "start": 740,
        "end": 798,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 746,
            "end": 796,
            "argument": {
              "type": "NewExpression",
              "start": 753,
              "end": 795,
              "callee": {
                "type": "Identifier",
                "start": 757,
                "end": 764,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 765,
                  "end": 794,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 775,
                      "end": 782,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 784,
                      "end": 790,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 792,
                    "end": 794,
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
      "start": 800,
      "end": 825,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 824,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 824,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 819,
              "end": 824,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 821,
                "end": 824
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
      "start": 826,
      "end": 873,
      "expression": {
        "type": "CallExpression",
        "start": 826,
        "end": 872,
        "callee": {
          "type": "MemberExpression",
          "start": 826,
          "end": 836,
          "object": {
            "type": "CallExpression",
            "start": 826,
            "end": 831,
            "callee": {
              "type": "Identifier",
              "start": 826,
              "end": 829,
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
            "start": 832,
            "end": 836,
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
            "start": 837,
            "end": 871,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 843,
              "end": 871,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 849,
                  "end": 869,
                  "expression": {
                    "type": "CallExpression",
                    "start": 849,
                    "end": 868,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 849,
                      "end": 860,
                      "object": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 856,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 860,
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
                        "start": 861,
                        "end": 867,
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
      "start": 894,
      "end": 904,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 898,
          "end": 904,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 899,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 902,
            "end": 904,
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
      "start": 905,
      "end": 930,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 909,
          "end": 929,
          "id": {
            "type": "Identifier",
            "start": 909,
            "end": 910,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 913,
            "end": 929,
            "callee": {
              "type": "Identifier",
              "start": 917,
              "end": 922,
              "name": "Proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 923,
                "end": 924,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 926,
                "end": 928,
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
      "start": 953,
      "end": 978,
      "expression": {
        "type": "CallExpression",
        "start": 953,
        "end": 977,
        "callee": {
          "type": "MemberExpression",
          "start": 953,
          "end": 973,
          "object": {
            "type": "Identifier",
            "start": 953,
            "end": 960,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 961,
            "end": 973,
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
            "start": 974,
            "end": 976,
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
      "start": 1000,
      "end": 1027,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1004,
          "end": 1026,
          "id": {
            "type": "Identifier",
            "start": 1004,
            "end": 1007,
            "name": "reg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1010,
            "end": 1026,
            "callee": {
              "type": "Identifier",
              "start": 1014,
              "end": 1020,
              "name": "RegExp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1021,
                "end": 1025,
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
      "start": 1028,
      "end": 1038,
      "expression": {
        "type": "MemberExpression",
        "start": 1028,
        "end": 1037,
        "object": {
          "type": "Identifier",
          "start": 1028,
          "end": 1031,
          "name": "reg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1032,
          "end": 1037,
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
      "start": 1060,
      "end": 1084,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1064,
          "end": 1083,
          "id": {
            "type": "Identifier",
            "start": 1064,
            "end": 1067,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1070,
            "end": 1083,
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
      "start": 1085,
      "end": 1110,
      "expression": {
        "type": "CallExpression",
        "start": 1085,
        "end": 1109,
        "callee": {
          "type": "MemberExpression",
          "start": 1085,
          "end": 1097,
          "object": {
            "type": "Identifier",
            "start": 1085,
            "end": 1088,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1089,
            "end": 1097,
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
            "start": 1098,
            "end": 1105,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1107,
            "end": 1108,
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
      "start": 1132,
      "end": 1149,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1136,
          "end": 1148,
          "id": {
            "type": "Identifier",
            "start": 1136,
            "end": 1137,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1140,
            "end": 1148,
            "callee": {
              "type": "Identifier",
              "start": 1140,
              "end": 1146,
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
      "start": 1181,
      "end": 1262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1187,
          "end": 1262,
          "id": {
            "type": "Identifier",
            "start": 1187,
            "end": 1189,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1192,
            "end": 1262,
            "properties": [
              {
                "type": "Property",
                "start": 1198,
                "end": 1260,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1199,
                  "end": 1217,
                  "object": {
                    "type": "Identifier",
                    "start": 1199,
                    "end": 1205,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1217,
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
                  "start": 1218,
                  "end": 1260,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1219,
                      "end": 1229,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1224,
                        "end": 1229,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1226,
                          "end": 1229
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 1231,
                    "end": 1260,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1241,
                        "end": 1254,
                        "argument": {
                          "type": "Literal",
                          "start": 1248,
                          "end": 1253,
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
