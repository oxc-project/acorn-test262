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
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
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
          "start": 88,
          "end": 97,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 97,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 91,
              "end": 97
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 99,
          "end": 108,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 100,
            "end": 108,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 102,
              "end": 108
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 110,
          "end": 119,
          "name": "z",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 119,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 113,
              "end": 119
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "MemberExpression",
                "start": 134,
                "end": 144,
                "object": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 139,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 144,
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
                  "start": 145,
                  "end": 154,
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
      "start": 160,
      "end": 171,
      "expression": {
        "type": "CallExpression",
        "start": 160,
        "end": 170,
        "callee": {
          "type": "Identifier",
          "start": 160,
          "end": 161,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 162,
            "end": 163,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 165,
            "end": 166,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 168,
            "end": 169,
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
      "start": 210,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 214,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 214,
            "end": 215,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 218,
            "end": 243,
            "callee": {
              "type": "Identifier",
              "start": 222,
              "end": 225,
              "name": "Map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 245,
      "end": 255,
      "expression": {
        "type": "CallExpression",
        "start": 245,
        "end": 254,
        "callee": {
          "type": "MemberExpression",
          "start": 245,
          "end": 252,
          "object": {
            "type": "Identifier",
            "start": 245,
            "end": 246,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 247,
            "end": 252,
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
      "start": 278,
      "end": 287,
      "expression": {
        "type": "CallExpression",
        "start": 278,
        "end": 286,
        "callee": {
          "type": "MemberExpression",
          "start": 278,
          "end": 284,
          "object": {
            "type": "Identifier",
            "start": 278,
            "end": 279,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 280,
            "end": 284,
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
      "start": 311,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 320,
        "end": 323,
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
        "start": 326,
        "end": 329,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 339,
      "expression": {
        "type": "MemberExpression",
        "start": 330,
        "end": 338,
        "object": {
          "type": "Identifier",
          "start": 330,
          "end": 333,
          "name": "Baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 334,
          "end": 338,
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
      "start": 364,
      "end": 455,
      "id": {
        "type": "Identifier",
        "start": 374,
        "end": 377,
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
                "id": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 394,
                  "end": 395,
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
            "start": 401,
            "end": 453,
            "test": {
              "type": "BinaryExpression",
              "start": 408,
              "end": 414,
              "left": {
                "type": "Identifier",
                "start": 408,
                "end": 409,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 412,
                "end": 414,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 416,
              "end": 453,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 426,
                  "end": 434,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 426,
                    "end": 433,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 432,
                      "end": 433,
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
                  "start": 443,
                  "end": 447,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 443,
                    "end": 446,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 444,
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
      "start": 457,
      "end": 549,
      "id": {
        "type": "Identifier",
        "start": 467,
        "end": 471,
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
                "id": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "name": "i",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 488,
                  "end": 489,
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
            "start": 495,
            "end": 547,
            "test": {
              "type": "BinaryExpression",
              "start": 502,
              "end": 508,
              "left": {
                "type": "Identifier",
                "start": 502,
                "end": 503,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 506,
                "end": 508,
                "value": 10,
                "raw": "10"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 510,
              "end": 547,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 520,
                  "end": 528,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 520,
                    "end": 527,
                    "delegate": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 526,
                      "end": 527,
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
                  "start": 537,
                  "end": 541,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 537,
                    "end": 540,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 538,
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
      "start": 569,
      "end": 582,
      "expression": {
        "type": "CallExpression",
        "start": 569,
        "end": 581,
        "callee": {
          "type": "MemberExpression",
          "start": 569,
          "end": 578,
          "object": {
            "type": "Identifier",
            "start": 569,
            "end": 573,
            "name": "Math",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 574,
            "end": 578,
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
            "start": 579,
            "end": 580,
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
      "start": 604,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 692,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 619,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 621,
                  "end": 622,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 628,
                "end": 690,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 629,
                  "end": 647,
                  "object": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 635,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 636,
                    "end": 647,
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
                  "start": 648,
                  "end": 690,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 649,
                      "end": 659,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 654,
                        "end": 659,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 656,
                          "end": 659
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
      "start": 694,
      "end": 731,
      "expression": {
        "type": "CallExpression",
        "start": 694,
        "end": 730,
        "callee": {
          "type": "MemberExpression",
          "start": 694,
          "end": 710,
          "object": {
            "type": "Identifier",
            "start": 694,
            "end": 695,
            "name": "o",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 696,
            "end": 710,
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
            "start": 711,
            "end": 729,
            "object": {
              "type": "Identifier",
              "start": 711,
              "end": 717,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 718,
              "end": 729,
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
      "start": 754,
      "end": 833,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 772,
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
              "callee": {
                "type": "Identifier",
                "start": 792,
                "end": 799,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "FunctionExpression",
                  "start": 800,
                  "end": 829,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 810,
                      "end": 817,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 819,
                      "end": 825,
                      "name": "reject",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "BlockStatement",
                    "start": 827,
                    "end": 829,
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
      "start": 835,
      "end": 860,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 859,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 859,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 854,
              "end": 859,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 856,
                "end": 859
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
      "start": 861,
      "end": 908,
      "expression": {
        "type": "CallExpression",
        "start": 861,
        "end": 907,
        "callee": {
          "type": "MemberExpression",
          "start": 861,
          "end": 871,
          "object": {
            "type": "CallExpression",
            "start": 861,
            "end": 866,
            "callee": {
              "type": "Identifier",
              "start": 861,
              "end": 864,
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
            "start": 867,
            "end": 871,
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
            "start": 872,
            "end": 906,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 878,
              "end": 906,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 884,
                  "end": 904,
                  "expression": {
                    "type": "CallExpression",
                    "start": 884,
                    "end": 903,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 884,
                      "end": 895,
                      "object": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 891,
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 892,
                        "end": 895,
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
                        "start": 896,
                        "end": 902,
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
      "start": 929,
      "end": 939,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 933,
          "end": 939,
          "id": {
            "type": "Identifier",
            "start": 933,
            "end": 934,
            "name": "t",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 937,
            "end": 939,
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
      "start": 940,
      "end": 965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 944,
          "end": 964,
          "id": {
            "type": "Identifier",
            "start": 944,
            "end": 945,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 948,
            "end": 964,
            "callee": {
              "type": "Identifier",
              "start": 952,
              "end": 957,
              "name": "Proxy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 958,
                "end": 959,
                "name": "t",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ObjectExpression",
                "start": 961,
                "end": 963,
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
      "start": 988,
      "end": 1013,
      "expression": {
        "type": "CallExpression",
        "start": 988,
        "end": 1012,
        "callee": {
          "type": "MemberExpression",
          "start": 988,
          "end": 1008,
          "object": {
            "type": "Identifier",
            "start": 988,
            "end": 995,
            "name": "Reflect",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 996,
            "end": 1008,
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
            "start": 1009,
            "end": 1011,
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
      "start": 1035,
      "end": 1062,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1039,
          "end": 1061,
          "id": {
            "type": "Identifier",
            "start": 1039,
            "end": 1042,
            "name": "reg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 1045,
            "end": 1061,
            "callee": {
              "type": "Identifier",
              "start": 1049,
              "end": 1055,
              "name": "RegExp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1056,
                "end": 1060,
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
      "start": 1063,
      "end": 1073,
      "expression": {
        "type": "MemberExpression",
        "start": 1063,
        "end": 1072,
        "object": {
          "type": "Identifier",
          "start": 1063,
          "end": 1066,
          "name": "reg",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1067,
          "end": 1072,
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
      "start": 1095,
      "end": 1119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1099,
          "end": 1118,
          "id": {
            "type": "Identifier",
            "start": 1099,
            "end": 1102,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 1105,
            "end": 1118,
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
      "start": 1120,
      "end": 1145,
      "expression": {
        "type": "CallExpression",
        "start": 1120,
        "end": 1144,
        "callee": {
          "type": "MemberExpression",
          "start": 1120,
          "end": 1132,
          "object": {
            "type": "Identifier",
            "start": 1120,
            "end": 1123,
            "name": "str",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1124,
            "end": 1132,
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
            "start": 1133,
            "end": 1140,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 1142,
            "end": 1143,
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
      "start": 1167,
      "end": 1184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1171,
          "end": 1183,
          "id": {
            "type": "Identifier",
            "start": 1171,
            "end": 1172,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1175,
            "end": 1183,
            "callee": {
              "type": "Identifier",
              "start": 1175,
              "end": 1181,
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
      "start": 1216,
      "end": 1297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1222,
          "end": 1297,
          "id": {
            "type": "Identifier",
            "start": 1222,
            "end": 1224,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 1234,
                  "end": 1252,
                  "object": {
                    "type": "Identifier",
                    "start": 1234,
                    "end": 1240,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1241,
                    "end": 1252,
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
                  "start": 1253,
                  "end": 1295,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1254,
                      "end": 1264,
                      "name": "value",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1259,
                        "end": 1264,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 1261,
                          "end": 1264
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
