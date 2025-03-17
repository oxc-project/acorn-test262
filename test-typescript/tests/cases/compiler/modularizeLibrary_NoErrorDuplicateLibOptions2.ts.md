__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 1297,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 158,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 121,
        "end": 158,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 127,
            "end": 156,
            "argument": {
              "type": "CallExpression",
              "start": 134,
              "end": 155,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "decorators": [],
                  "name": "arguments",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 134,
                "end": 144,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 139,
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 144,
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
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 88,
          "end": 97,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 91,
              "end": 97
            }
          }
        },
        {
          "type": "Identifier",
          "start": 99,
          "end": 108,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 108,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 102,
              "end": 108
            }
          }
        },
        {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 119,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 113,
              "end": 119
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 160,
      "end": 171,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 160,
        "end": 170,
        "arguments": [
          {
            "type": "Literal",
            "start": 162,
            "end": 163,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 165,
            "end": 166,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 168,
            "end": 169,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
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
      "start": 210,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 218,
            "end": 243,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "decorators": [],
              "name": "Map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 225,
              "end": 241,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 226,
                  "end": 232
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 234,
                  "end": 240
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
      "start": 245,
      "end": 255,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 245,
        "end": 254,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 245,
          "end": 252,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 252,
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
      "start": 278,
      "end": 287,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 286,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 278,
          "end": 284,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 280,
            "end": 284,
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
      "start": 311,
      "end": 329,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 326,
        "end": 329,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 323,
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
      "start": 330,
      "end": 339,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 330,
        "end": 338,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 330,
          "end": 333,
          "decorators": [],
          "name": "Baz",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 334,
          "end": 338,
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 455,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 380,
        "end": 455,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 386,
            "end": 396,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 390,
                "end": 395,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 394,
                  "end": 395,
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
            "start": 401,
            "end": 453,
            "body": {
              "type": "BlockStatement",
              "start": 416,
              "end": 453,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 426,
                  "end": 434,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 426,
                    "end": 433,
                    "argument": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 433,
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
                  "start": 443,
                  "end": 447,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 443,
                    "end": 446,
                    "argument": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
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
              "start": 408,
              "end": 414,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 412,
                "end": 414,
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
        "start": 374,
        "end": 377,
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
      "start": 457,
      "end": 549,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 474,
        "end": 549,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 480,
            "end": 490,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 484,
                "end": 489,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 488,
                  "end": 489,
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
            "start": 495,
            "end": 547,
            "body": {
              "type": "BlockStatement",
              "start": 510,
              "end": 547,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 520,
                  "end": 528,
                  "directive": null,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 520,
                    "end": 527,
                    "argument": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 527,
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
                  "start": 537,
                  "end": 541,
                  "directive": null,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 537,
                    "end": 540,
                    "argument": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 538,
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
              "start": 502,
              "end": 508,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 502,
                "end": 503,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 506,
                "end": 508,
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
        "start": 467,
        "end": 471,
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
      "start": 569,
      "end": 582,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 569,
        "end": 581,
        "arguments": [
          {
            "type": "Literal",
            "start": 579,
            "end": 580,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 569,
          "end": 578,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 569,
            "end": 573,
            "decorators": [],
            "name": "Math",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 574,
            "end": 578,
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
      "start": 604,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 692,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 612,
            "end": 692,
            "properties": [
              {
                "type": "Property",
                "start": 618,
                "end": 622,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
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
                  "start": 621,
                  "end": 622,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 628,
                "end": 690,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 629,
                  "end": 647,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 635,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 647,
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
                  "start": 648,
                  "end": 690,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 661,
                    "end": 690,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 671,
                        "end": 684,
                        "argument": {
                          "type": "Literal",
                          "start": 678,
                          "end": 683,
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
                      "start": 649,
                      "end": 659,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 654,
                        "end": 659,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 656,
                          "end": 659
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
      "start": 694,
      "end": 731,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 730,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 711,
            "end": 729,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 711,
              "end": 717,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 718,
              "end": 729,
              "decorators": [],
              "name": "hasInstance",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 694,
          "end": 710,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 694,
            "end": 695,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 696,
            "end": 710,
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
      "start": 754,
      "end": 833,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 775,
        "end": 833,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 781,
            "end": 831,
            "argument": {
              "type": "NewExpression",
              "start": 788,
              "end": 830,
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 800,
                  "end": 829,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 827,
                    "end": 829,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 810,
                      "end": 817,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 819,
                      "end": 825,
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
                "start": 792,
                "end": 799,
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
        "start": 769,
        "end": 772,
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
      "start": 835,
      "end": 860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 859,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 859,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 854,
              "end": 859,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 856,
                "end": 859
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
      "start": 861,
      "end": 908,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 861,
        "end": 907,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 872,
            "end": 906,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 878,
              "end": 906,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 884,
                  "end": 904,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 884,
                    "end": 903,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 896,
                        "end": 902,
                        "raw": "\"Yea!\"",
                        "value": "Yea!"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 884,
                      "end": 895,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 891,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 892,
                        "end": 895,
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
          "start": 861,
          "end": 871,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 861,
            "end": 866,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 861,
              "end": 864,
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
            "start": 867,
            "end": 871,
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
      "start": 929,
      "end": 939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 933,
          "end": 939,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 933,
            "end": 934,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 937,
            "end": 939,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 940,
      "end": 965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 944,
          "end": 964,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 944,
            "end": 945,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 948,
            "end": 964,
            "arguments": [
              {
                "type": "Identifier",
                "start": 958,
                "end": 959,
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ObjectExpression",
                "start": 961,
                "end": 963,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 952,
              "end": 957,
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
      "start": 988,
      "end": 1013,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 988,
        "end": 1012,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 1009,
            "end": 1011,
            "properties": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 988,
          "end": 1008,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 988,
            "end": 995,
            "decorators": [],
            "name": "Reflect",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 996,
            "end": 1008,
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
      "start": 1035,
      "end": 1062,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1039,
          "end": 1061,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1039,
            "end": 1042,
            "decorators": [],
            "name": "reg",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 1045,
            "end": 1061,
            "arguments": [
              {
                "type": "Literal",
                "start": 1056,
                "end": 1060,
                "raw": "\"/s\"",
                "value": "/s"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1049,
              "end": 1055,
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
      "start": 1063,
      "end": 1073,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 1063,
        "end": 1072,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 1063,
          "end": 1066,
          "decorators": [],
          "name": "reg",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1067,
          "end": 1072,
          "decorators": [],
          "name": "flags",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1095,
      "end": 1119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1099,
          "end": 1118,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1099,
            "end": 1102,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 1105,
            "end": 1118,
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
      "start": 1120,
      "end": 1145,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1120,
        "end": 1144,
        "arguments": [
          {
            "type": "Literal",
            "start": 1133,
            "end": 1140,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 1142,
            "end": 1143,
            "raw": "0",
            "value": 0
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1120,
          "end": 1132,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1120,
            "end": 1123,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1124,
            "end": 1132,
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
      "start": 1167,
      "end": 1184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1171,
          "end": 1183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1171,
            "end": 1172,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1175,
            "end": 1183,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1175,
              "end": 1181,
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
      "start": 1216,
      "end": 1297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1222,
          "end": 1297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1222,
            "end": 1224,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1227,
            "end": 1297,
            "properties": [
              {
                "type": "Property",
                "start": 1233,
                "end": 1295,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1234,
                  "end": 1252,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 1234,
                    "end": 1240,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1252,
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
                  "start": 1253,
                  "end": 1295,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 1266,
                    "end": 1295,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 1276,
                        "end": 1289,
                        "argument": {
                          "type": "Literal",
                          "start": 1283,
                          "end": 1288,
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
                      "start": 1254,
                      "end": 1264,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1259,
                        "end": 1264,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1261,
                          "end": 1264
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
