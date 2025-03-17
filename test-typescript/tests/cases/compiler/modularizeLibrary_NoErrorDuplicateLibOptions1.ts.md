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
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 110,
                  "end": 119,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 99,
                "end": 109,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 104,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 109,
                  "decorators": [],
                  "name": "from",
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
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 53,
          "end": 62,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 62,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 56,
              "end": 62
            }
          }
        },
        {
          "type": "Identifier",
          "start": 64,
          "end": 73,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 73,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            }
          }
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 84,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 136,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 125,
        "end": 135,
        "arguments": [
          {
            "type": "Literal",
            "start": 127,
            "end": 128,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 130,
            "end": 131,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 133,
            "end": 134,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 125,
          "end": 126,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 180,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 183,
            "end": 208,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 187,
              "end": 190,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 210,
      "end": 220,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 210,
        "end": 219,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 210,
          "end": 217,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 210,
            "end": 211,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 212,
            "end": 217,
            "decorators": [],
            "name": "clear",
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
      "start": 243,
      "end": 252,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 251,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 243,
          "end": 249,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 243,
            "end": 244,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 245,
            "end": 249,
            "decorators": [],
            "name": "keys",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 276,
      "end": 294,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 291,
        "end": 294,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 285,
        "end": 288,
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 295,
      "end": 304,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 295,
        "end": 303,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 295,
          "end": 298,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 299,
          "end": 303,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 329,
      "end": 420,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 356,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 359,
                  "end": 360,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 366,
            "end": 418,
            "body": {
              "type": "BlockStatement",
              "start": 381,
              "end": 418,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 391,
                  "end": 399,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 391,
                    "end": 398,
                    "argument": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 398,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 408,
                  "end": 412,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 408,
                    "end": 411,
                    "argument": {
                      "type": "Identifier",
                      "start": 408,
                      "end": 409,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 373,
              "end": 379,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 373,
                "end": 374,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 377,
                "end": 379,
                "raw": "10",
                "value": 10
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 339,
        "end": 342,
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 422,
      "end": 514,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 453,
                  "end": 454,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 460,
            "end": 512,
            "body": {
              "type": "BlockStatement",
              "start": 475,
              "end": 512,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 485,
                  "end": 493,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 485,
                    "end": 492,
                    "argument": {
                      "type": "Identifier",
                      "start": 491,
                      "end": 492,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "delegate": false
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 502,
                  "end": 506,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 502,
                    "end": 505,
                    "argument": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 503,
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 467,
              "end": 473,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 471,
                "end": 473,
                "raw": "10",
                "value": 10
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
        "decorators": [],
        "name": "gen2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 547,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 546,
        "arguments": [
          {
            "type": "Literal",
            "start": 544,
            "end": 545,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 534,
          "end": 543,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 534,
            "end": 538,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 539,
            "end": 543,
            "decorators": [],
            "name": "sign",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 574,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 584,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 586,
                  "end": 587,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 593,
                "end": 655,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 594,
                  "end": 612,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 600,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 612,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 613,
                  "end": 655,
                  "async": false,
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
                          "raw": "false",
                          "value": false
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
                      "start": 614,
                      "end": 624,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 619,
                        "end": 624,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 621,
                          "end": 624
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
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 696,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 695,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 676,
            "end": 694,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 676,
              "end": 682,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 683,
              "end": 694,
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 659,
          "end": 675,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 659,
            "end": 660,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 661,
            "end": 675,
            "decorators": [],
            "name": "hasOwnProperty",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 719,
      "end": 798,
      "async": true,
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
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 765,
                  "end": 794,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 792,
                    "end": 794,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 775,
                      "end": 782,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 784,
                      "end": 790,
                      "decorators": [],
                      "name": "reject",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 757,
                "end": 764,
                "decorators": [],
                "name": "Promise",
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
        "start": 734,
        "end": 737,
        "decorators": [],
        "name": "out",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 824,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 819,
              "end": 824,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 821,
                "end": 824
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 826,
      "end": 873,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 826,
        "end": 872,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 837,
            "end": 871,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 843,
              "end": 871,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 849,
                  "end": 869,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 849,
                    "end": 868,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 861,
                        "end": 867,
                        "raw": "\"Yea!\"",
                        "value": "Yea!"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 849,
                      "end": 860,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 856,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 860,
                        "decorators": [],
                        "name": "log",
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
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 826,
          "end": 836,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 826,
            "end": 831,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 826,
              "end": 829,
              "decorators": [],
              "name": "out",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 832,
            "end": 836,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 898,
            "end": 899,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 902,
            "end": 904,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 909,
            "end": 910,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 913,
            "end": 929,
            "arguments": [
              {
                "type": "Identifier",
                "start": 923,
                "end": 924,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 926,
                "end": 928,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 917,
              "end": 922,
              "decorators": [],
              "name": "Proxy",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 953,
      "end": 978,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 953,
        "end": 977,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 974,
            "end": 976,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 953,
          "end": 973,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 953,
            "end": 960,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 961,
            "end": 973,
            "decorators": [],
            "name": "isExtensible",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1004,
            "end": 1007,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1010,
            "end": 1026,
            "arguments": [
              {
                "type": "Literal",
                "start": 1021,
                "end": 1025,
                "raw": "\"/s\"",
                "value": "/s"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1014,
              "end": 1020,
              "decorators": [],
              "name": "RegExp",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1028,
      "end": 1038,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1028,
        "end": 1037,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1028,
          "end": 1031,
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1032,
          "end": 1037,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1064,
            "end": 1067,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1070,
            "end": 1083,
            "raw": "\"Hello world\"",
            "value": "Hello world"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 1085,
      "end": 1110,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1085,
        "end": 1109,
        "arguments": [
          {
            "type": "Literal",
            "start": 1098,
            "end": 1105,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1107,
            "end": 1108,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1085,
          "end": 1097,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1085,
            "end": 1088,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1089,
            "end": 1097,
            "decorators": [],
            "name": "includes",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1136,
            "end": 1137,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1140,
            "end": 1148,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1140,
              "end": 1146,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1187,
            "end": 1189,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
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
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1199,
                  "end": 1217,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1199,
                    "end": 1205,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1206,
                    "end": 1217,
                    "decorators": [],
                    "name": "hasInstance",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 1218,
                  "end": 1260,
                  "async": false,
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
                          "raw": "false",
                          "value": false
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
                      "start": 1219,
                      "end": 1229,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1224,
                        "end": 1229,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1226,
                          "end": 1229
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
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
