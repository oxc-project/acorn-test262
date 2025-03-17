__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5321,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 57,
            "name": "f1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 57,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 16,
                "end": 57,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 17,
                    "end": 48,
                    "argument": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 48,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 23,
                        "end": 48,
                        "elementTypes": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 24,
                            "end": 30
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 32,
                            "end": 38
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 40,
                            "end": 47
                          }
                        ]
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 50,
                  "end": 57,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 53,
                    "end": 57
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 121,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 120,
            "name": "f2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 120,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 75,
                "end": 120,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 86,
                    "name": "x0",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 80,
                        "end": 86
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 88,
                    "end": 98,
                    "name": "x1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 111,
                    "name": "x2",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 104,
                        "end": 111
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 113,
                  "end": 120,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 116,
                    "end": 120
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
      "kind": "let",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 123,
      "end": 131,
      "expression": {
        "type": "AssignmentExpression",
        "start": 123,
        "end": 130,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 123,
          "end": 125,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 128,
          "end": 130,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 132,
      "end": 140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 132,
        "end": 139,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 132,
          "end": 134,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 137,
          "end": 139,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 142,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 156,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 185,
            "name": "t3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 158,
              "end": 185,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 160,
                "end": 185,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 161,
                    "end": 167
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 169,
                    "end": 175
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 177,
                    "end": 184
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 222,
            "name": "t2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 203,
              "end": 222,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 205,
                "end": 222,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 214,
                    "end": 221
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 251,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 251,
            "name": "t1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 251,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 242,
                "end": 251,
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 243,
                    "end": 250
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 253,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "name": "t0",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 269,
              "end": 273,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 271,
                "end": 273,
                "elementTypes": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 310,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 310,
            "name": "ns",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 292,
              "end": 310,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 294,
                "end": 310,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 295,
                    "end": 301
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 303,
                    "end": 309
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 346,
            "name": "sn",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 328,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 330,
                "end": 346,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 331,
                    "end": 337
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 371,
      "expression": {
        "type": "CallExpression",
        "start": 349,
        "end": 370,
        "callee": {
          "type": "Identifier",
          "start": 349,
          "end": 351,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 352,
            "end": 354,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 356,
            "end": 363,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 365,
            "end": 369,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 396,
      "expression": {
        "type": "CallExpression",
        "start": 372,
        "end": 395,
        "callee": {
          "type": "Identifier",
          "start": 372,
          "end": 374,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 375,
            "end": 380,
            "object": {
              "type": "Identifier",
              "start": 375,
              "end": 377,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 378,
              "end": 379,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 382,
            "end": 387,
            "object": {
              "type": "Identifier",
              "start": 382,
              "end": 384,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 385,
              "end": 386,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 389,
            "end": 394,
            "object": {
              "type": "Identifier",
              "start": 389,
              "end": 391,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 392,
              "end": 393,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 397,
      "end": 407,
      "expression": {
        "type": "CallExpression",
        "start": 397,
        "end": 406,
        "callee": {
          "type": "Identifier",
          "start": 397,
          "end": 399,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 400,
            "end": 405,
            "argument": {
              "type": "Identifier",
              "start": 403,
              "end": 405,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 408,
      "end": 422,
      "expression": {
        "type": "CallExpression",
        "start": 408,
        "end": 421,
        "callee": {
          "type": "Identifier",
          "start": 408,
          "end": 410,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 411,
            "end": 413,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "SpreadElement",
            "start": 415,
            "end": 420,
            "argument": {
              "type": "Identifier",
              "start": 418,
              "end": 420,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 423,
      "end": 446,
      "expression": {
        "type": "CallExpression",
        "start": 423,
        "end": 445,
        "callee": {
          "type": "Identifier",
          "start": 423,
          "end": 425,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 426,
            "end": 428,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 430,
            "end": 437,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "SpreadElement",
            "start": 439,
            "end": 444,
            "argument": {
              "type": "Identifier",
              "start": 442,
              "end": 444,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 447,
      "end": 476,
      "expression": {
        "type": "CallExpression",
        "start": 447,
        "end": 475,
        "callee": {
          "type": "Identifier",
          "start": 447,
          "end": 449,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 450,
            "end": 452,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 454,
            "end": 461,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 463,
            "end": 467,
            "value": true,
            "raw": "true"
          },
          {
            "type": "SpreadElement",
            "start": 469,
            "end": 474,
            "argument": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "name": "t0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 477,
      "end": 500,
      "expression": {
        "type": "CallExpression",
        "start": 477,
        "end": 499,
        "callee": {
          "type": "Identifier",
          "start": 477,
          "end": 479,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 480,
            "end": 485,
            "object": {
              "type": "Identifier",
              "start": 480,
              "end": 482,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 483,
              "end": 484,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 487,
            "end": 492,
            "object": {
              "type": "Identifier",
              "start": 487,
              "end": 489,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 490,
              "end": 491,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "Literal",
            "start": 494,
            "end": 498,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 501,
      "end": 517,
      "expression": {
        "type": "CallExpression",
        "start": 501,
        "end": 516,
        "callee": {
          "type": "Identifier",
          "start": 501,
          "end": 503,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 504,
            "end": 509,
            "argument": {
              "type": "Identifier",
              "start": 507,
              "end": 509,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 511,
            "end": 515,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 607,
      "expression": {
        "type": "CallExpression",
        "start": 585,
        "end": 606,
        "callee": {
          "type": "Identifier",
          "start": 585,
          "end": 587,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 588,
            "end": 590,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 592,
            "end": 599,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 601,
            "end": 605,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 608,
      "end": 632,
      "expression": {
        "type": "CallExpression",
        "start": 608,
        "end": 631,
        "callee": {
          "type": "Identifier",
          "start": 608,
          "end": 610,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 611,
            "end": 616,
            "object": {
              "type": "Identifier",
              "start": 611,
              "end": 613,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 614,
              "end": 615,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 618,
            "end": 623,
            "object": {
              "type": "Identifier",
              "start": 618,
              "end": 620,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 621,
              "end": 622,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 625,
            "end": 630,
            "object": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 628,
              "end": 629,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
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
      "start": 633,
      "end": 643,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 642,
        "callee": {
          "type": "Identifier",
          "start": 633,
          "end": 635,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 636,
            "end": 641,
            "argument": {
              "type": "Identifier",
              "start": 639,
              "end": 641,
              "name": "t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 644,
      "end": 658,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 657,
        "callee": {
          "type": "Identifier",
          "start": 644,
          "end": 646,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 647,
            "end": 649,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "SpreadElement",
            "start": 651,
            "end": 656,
            "argument": {
              "type": "Identifier",
              "start": 654,
              "end": 656,
              "name": "t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 659,
      "end": 682,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 681,
        "callee": {
          "type": "Identifier",
          "start": 659,
          "end": 661,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 664,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 666,
            "end": 673,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "SpreadElement",
            "start": 675,
            "end": 680,
            "argument": {
              "type": "Identifier",
              "start": 678,
              "end": 680,
              "name": "t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 683,
      "end": 712,
      "expression": {
        "type": "CallExpression",
        "start": 683,
        "end": 711,
        "callee": {
          "type": "Identifier",
          "start": 683,
          "end": 685,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 686,
            "end": 688,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 690,
            "end": 697,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 699,
            "end": 703,
            "value": true,
            "raw": "true"
          },
          {
            "type": "SpreadElement",
            "start": 705,
            "end": 710,
            "argument": {
              "type": "Identifier",
              "start": 708,
              "end": 710,
              "name": "t0",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "start": 713,
      "end": 736,
      "expression": {
        "type": "CallExpression",
        "start": 713,
        "end": 735,
        "callee": {
          "type": "Identifier",
          "start": 713,
          "end": 715,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 716,
            "end": 721,
            "object": {
              "type": "Identifier",
              "start": 716,
              "end": 718,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 719,
              "end": 720,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "MemberExpression",
            "start": 723,
            "end": 728,
            "object": {
              "type": "Identifier",
              "start": 723,
              "end": 725,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 726,
              "end": 727,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          {
            "type": "Literal",
            "start": 730,
            "end": 734,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 737,
      "end": 753,
      "expression": {
        "type": "CallExpression",
        "start": 737,
        "end": 752,
        "callee": {
          "type": "Identifier",
          "start": 737,
          "end": 739,
          "name": "f2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 740,
            "end": 745,
            "argument": {
              "type": "Identifier",
              "start": 743,
              "end": 745,
              "name": "ns",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 747,
            "end": 751,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 821,
      "end": 878,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 841,
        "name": "f10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 863,
          "end": 873,
          "argument": {
            "type": "Identifier",
            "start": 866,
            "end": 870,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 870,
            "end": 873,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 872,
              "end": 873,
              "typeName": {
                "type": "Identifier",
                "start": 872,
                "end": 873,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 841,
        "end": 862,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 842,
            "end": 861,
            "name": {
              "type": "Identifier",
              "start": 842,
              "end": 843,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 852,
              "end": 861,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 852,
                "end": 859
              }
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
        "start": 874,
        "end": 877,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 876,
          "end": 877,
          "typeName": {
            "type": "Identifier",
            "start": 876,
            "end": 877,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 880,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 886,
          "end": 914,
          "id": {
            "type": "Identifier",
            "start": 886,
            "end": 889,
            "name": "x10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 892,
            "end": 914,
            "callee": {
              "type": "Identifier",
              "start": 892,
              "end": 895,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 896,
                "end": 898,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 900,
                "end": 907,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 909,
                "end": 913,
                "value": true,
                "raw": "true"
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
      "type": "VariableDeclaration",
      "start": 946,
      "end": 975,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 952,
          "end": 974,
          "id": {
            "type": "Identifier",
            "start": 952,
            "end": 955,
            "name": "x11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 958,
            "end": 974,
            "callee": {
              "type": "Identifier",
              "start": 958,
              "end": 961,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 962,
                "end": 964,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 966,
                "end": 973,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 997,
      "end": 1017,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1003,
          "end": 1016,
          "id": {
            "type": "Identifier",
            "start": 1003,
            "end": 1006,
            "name": "x12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1009,
            "end": 1016,
            "callee": {
              "type": "Identifier",
              "start": 1009,
              "end": 1012,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1013,
                "end": 1015,
                "value": 42,
                "raw": "42"
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
      "type": "VariableDeclaration",
      "start": 1031,
      "end": 1049,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1037,
          "end": 1048,
          "id": {
            "type": "Identifier",
            "start": 1037,
            "end": 1040,
            "name": "x13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1043,
            "end": 1048,
            "callee": {
              "type": "Identifier",
              "start": 1043,
              "end": 1046,
              "name": "f10",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1057,
      "end": 1080,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1063,
          "end": 1079,
          "id": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "name": "x14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1069,
            "end": 1079,
            "callee": {
              "type": "Identifier",
              "start": 1069,
              "end": 1072,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 1073,
                "end": 1078,
                "argument": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1078,
                  "name": "t3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1111,
      "end": 1138,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1117,
          "end": 1137,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1120,
            "name": "x15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1123,
            "end": 1137,
            "callee": {
              "type": "Identifier",
              "start": 1123,
              "end": 1126,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1127,
                "end": 1129,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "SpreadElement",
                "start": 1131,
                "end": 1136,
                "argument": {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1136,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1169,
      "end": 1205,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1175,
          "end": 1204,
          "id": {
            "type": "Identifier",
            "start": 1175,
            "end": 1178,
            "name": "x16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1181,
            "end": 1204,
            "callee": {
              "type": "Identifier",
              "start": 1181,
              "end": 1184,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1185,
                "end": 1187,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 1189,
                "end": 1196,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "SpreadElement",
                "start": 1198,
                "end": 1203,
                "argument": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1203,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1236,
      "end": 1278,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1242,
          "end": 1277,
          "id": {
            "type": "Identifier",
            "start": 1242,
            "end": 1245,
            "name": "x17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1248,
            "end": 1277,
            "callee": {
              "type": "Identifier",
              "start": 1248,
              "end": 1251,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1252,
                "end": 1254,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 1256,
                "end": 1263,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 1265,
                "end": 1269,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 1271,
                "end": 1276,
                "argument": {
                  "type": "Identifier",
                  "start": 1274,
                  "end": 1276,
                  "name": "t0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1309,
      "end": 1338,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1315,
          "end": 1337,
          "id": {
            "type": "Identifier",
            "start": 1315,
            "end": 1318,
            "name": "x18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1321,
            "end": 1337,
            "callee": {
              "type": "Identifier",
              "start": 1321,
              "end": 1324,
              "name": "f10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 1325,
                "end": 1330,
                "argument": {
                  "type": "Identifier",
                  "start": 1328,
                  "end": 1330,
                  "name": "ns",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Literal",
                "start": 1332,
                "end": 1336,
                "value": true,
                "raw": "true"
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
      "type": "FunctionDeclaration",
      "start": 1374,
      "end": 1617,
      "id": {
        "type": "Identifier",
        "start": 1383,
        "end": 1386,
        "name": "g10",
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
          "start": 1435,
          "end": 1439,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1436,
            "end": 1439,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1438,
              "end": 1439,
              "typeName": {
                "type": "Identifier",
                "start": 1438,
                "end": 1439,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 1441,
          "end": 1445,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1442,
            "end": 1445,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1444,
              "end": 1445,
              "typeName": {
                "type": "Identifier",
                "start": 1444,
                "end": 1445,
                "name": "V",
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
      "body": {
        "type": "BlockStatement",
        "start": 1447,
        "end": 1617,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1453,
            "end": 1472,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1457,
                "end": 1471,
                "id": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1459,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1462,
                  "end": 1471,
                  "callee": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1465,
                    "name": "f10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 1466,
                      "end": 1470,
                      "argument": {
                        "type": "Identifier",
                        "start": 1469,
                        "end": 1470,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1483,
            "end": 1502,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1487,
                "end": 1501,
                "id": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1489,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1492,
                  "end": 1501,
                  "callee": {
                    "type": "Identifier",
                    "start": 1492,
                    "end": 1495,
                    "name": "f10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 1496,
                      "end": 1500,
                      "argument": {
                        "type": "Identifier",
                        "start": 1499,
                        "end": 1500,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1513,
            "end": 1535,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1517,
                "end": 1534,
                "id": {
                  "type": "Identifier",
                  "start": 1517,
                  "end": 1519,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1522,
                  "end": 1534,
                  "callee": {
                    "type": "Identifier",
                    "start": 1522,
                    "end": 1525,
                    "name": "f10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1526,
                      "end": 1527,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "SpreadElement",
                      "start": 1529,
                      "end": 1533,
                      "argument": {
                        "type": "Identifier",
                        "start": 1532,
                        "end": 1533,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 1566,
            "end": 1591,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1570,
                "end": 1590,
                "id": {
                  "type": "Identifier",
                  "start": 1570,
                  "end": 1572,
                  "name": "x4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1575,
                  "end": 1590,
                  "callee": {
                    "type": "Identifier",
                    "start": 1575,
                    "end": 1578,
                    "name": "f10",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 1579,
                      "end": 1583,
                      "argument": {
                        "type": "Identifier",
                        "start": 1582,
                        "end": 1583,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 1585,
                      "end": 1589,
                      "argument": {
                        "type": "Identifier",
                        "start": 1588,
                        "end": 1589,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1386,
        "end": 1434,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1387,
            "end": 1405,
            "name": {
              "type": "Identifier",
              "start": 1387,
              "end": 1388,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1397,
              "end": 1405,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 1397,
                "end": 1403
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1407,
            "end": 1433,
            "name": {
              "type": "Identifier",
              "start": 1407,
              "end": 1408,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 1417,
              "end": 1433,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1418,
                  "end": 1424
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1426,
                  "end": 1432
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
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1619,
      "end": 1696,
      "id": {
        "type": "Identifier",
        "start": 1636,
        "end": 1639,
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
          "type": "RestElement",
          "start": 1681,
          "end": 1691,
          "argument": {
            "type": "Identifier",
            "start": 1684,
            "end": 1688,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1688,
            "end": 1691,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1690,
              "end": 1691,
              "typeName": {
                "type": "Identifier",
                "start": 1690,
                "end": 1691,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1639,
        "end": 1680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1640,
            "end": 1679,
            "name": {
              "type": "Identifier",
              "start": 1640,
              "end": 1641,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 1650,
              "end": 1679,
              "elementType": {
                "type": "TSUnionType",
                "start": 1651,
                "end": 1676,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1651,
                    "end": 1657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1660,
                    "end": 1666
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1669,
                    "end": 1676
                  }
                ]
              }
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
        "start": 1692,
        "end": 1695,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1694,
          "end": 1695,
          "typeName": {
            "type": "Identifier",
            "start": 1694,
            "end": 1695,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1698,
      "end": 1733,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1704,
          "end": 1732,
          "id": {
            "type": "Identifier",
            "start": 1704,
            "end": 1707,
            "name": "z10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1710,
            "end": 1732,
            "callee": {
              "type": "Identifier",
              "start": 1710,
              "end": 1713,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1714,
                "end": 1716,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 1718,
                "end": 1725,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 1727,
                "end": 1731,
                "value": true,
                "raw": "true"
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
      "type": "VariableDeclaration",
      "start": 1758,
      "end": 1787,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1764,
          "end": 1786,
          "id": {
            "type": "Identifier",
            "start": 1764,
            "end": 1767,
            "name": "z11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1770,
            "end": 1786,
            "callee": {
              "type": "Identifier",
              "start": 1770,
              "end": 1773,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1774,
                "end": 1776,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 1778,
                "end": 1785,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 1806,
      "end": 1826,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1812,
          "end": 1825,
          "id": {
            "type": "Identifier",
            "start": 1812,
            "end": 1815,
            "name": "z12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1818,
            "end": 1825,
            "callee": {
              "type": "Identifier",
              "start": 1818,
              "end": 1821,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1822,
                "end": 1824,
                "value": 42,
                "raw": "42"
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
      "type": "VariableDeclaration",
      "start": 1836,
      "end": 1854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1842,
          "end": 1853,
          "id": {
            "type": "Identifier",
            "start": 1842,
            "end": 1845,
            "name": "z13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1848,
            "end": 1853,
            "callee": {
              "type": "Identifier",
              "start": 1848,
              "end": 1851,
              "name": "f11",
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
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1862,
      "end": 1885,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1868,
          "end": 1884,
          "id": {
            "type": "Identifier",
            "start": 1868,
            "end": 1871,
            "name": "z14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1874,
            "end": 1884,
            "callee": {
              "type": "Identifier",
              "start": 1874,
              "end": 1877,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 1878,
                "end": 1883,
                "argument": {
                  "type": "Identifier",
                  "start": 1881,
                  "end": 1883,
                  "name": "t3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1916,
      "end": 1943,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1922,
          "end": 1942,
          "id": {
            "type": "Identifier",
            "start": 1922,
            "end": 1925,
            "name": "z15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1928,
            "end": 1942,
            "callee": {
              "type": "Identifier",
              "start": 1928,
              "end": 1931,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1932,
                "end": 1934,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "SpreadElement",
                "start": 1936,
                "end": 1941,
                "argument": {
                  "type": "Identifier",
                  "start": 1939,
                  "end": 1941,
                  "name": "t2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 1970,
      "end": 2006,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1976,
          "end": 2005,
          "id": {
            "type": "Identifier",
            "start": 1976,
            "end": 1979,
            "name": "z16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1982,
            "end": 2005,
            "callee": {
              "type": "Identifier",
              "start": 1982,
              "end": 1985,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1986,
                "end": 1988,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 1990,
                "end": 1997,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "SpreadElement",
                "start": 1999,
                "end": 2004,
                "argument": {
                  "type": "Identifier",
                  "start": 2002,
                  "end": 2004,
                  "name": "t1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 2034,
      "end": 2076,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2040,
          "end": 2075,
          "id": {
            "type": "Identifier",
            "start": 2040,
            "end": 2043,
            "name": "z17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2046,
            "end": 2075,
            "callee": {
              "type": "Identifier",
              "start": 2046,
              "end": 2049,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 2050,
                "end": 2052,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "Literal",
                "start": 2054,
                "end": 2061,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 2063,
                "end": 2067,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 2069,
                "end": 2074,
                "argument": {
                  "type": "Identifier",
                  "start": 2072,
                  "end": 2074,
                  "name": "t0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
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
      "type": "VariableDeclaration",
      "start": 2101,
      "end": 2130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2107,
          "end": 2129,
          "id": {
            "type": "Identifier",
            "start": 2107,
            "end": 2110,
            "name": "z18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2113,
            "end": 2129,
            "callee": {
              "type": "Identifier",
              "start": 2113,
              "end": 2116,
              "name": "f11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 2117,
                "end": 2122,
                "argument": {
                  "type": "Identifier",
                  "start": 2120,
                  "end": 2122,
                  "name": "ns",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "Literal",
                "start": 2124,
                "end": 2128,
                "value": true,
                "raw": "true"
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
      "type": "FunctionDeclaration",
      "start": 2163,
      "end": 2401,
      "id": {
        "type": "Identifier",
        "start": 2172,
        "end": 2175,
        "name": "g11",
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
          "start": 2224,
          "end": 2228,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2225,
            "end": 2228,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2227,
              "end": 2228,
              "typeName": {
                "type": "Identifier",
                "start": 2227,
                "end": 2228,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2230,
          "end": 2234,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2231,
            "end": 2234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2233,
              "end": 2234,
              "typeName": {
                "type": "Identifier",
                "start": 2233,
                "end": 2234,
                "name": "V",
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
      "body": {
        "type": "BlockStatement",
        "start": 2236,
        "end": 2401,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2242,
            "end": 2261,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2246,
                "end": 2260,
                "id": {
                  "type": "Identifier",
                  "start": 2246,
                  "end": 2248,
                  "name": "x1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2251,
                  "end": 2260,
                  "callee": {
                    "type": "Identifier",
                    "start": 2251,
                    "end": 2254,
                    "name": "f11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 2255,
                      "end": 2259,
                      "argument": {
                        "type": "Identifier",
                        "start": 2258,
                        "end": 2259,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2272,
            "end": 2291,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2276,
                "end": 2290,
                "id": {
                  "type": "Identifier",
                  "start": 2276,
                  "end": 2278,
                  "name": "x2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2281,
                  "end": 2290,
                  "callee": {
                    "type": "Identifier",
                    "start": 2281,
                    "end": 2284,
                    "name": "f11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 2285,
                      "end": 2289,
                      "argument": {
                        "type": "Identifier",
                        "start": 2288,
                        "end": 2289,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2302,
            "end": 2324,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2306,
                "end": 2323,
                "id": {
                  "type": "Identifier",
                  "start": 2306,
                  "end": 2308,
                  "name": "x3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2311,
                  "end": 2323,
                  "callee": {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2314,
                    "name": "f11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2315,
                      "end": 2316,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2318,
                      "end": 2322,
                      "argument": {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2322,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2350,
            "end": 2375,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2354,
                "end": 2374,
                "id": {
                  "type": "Identifier",
                  "start": 2354,
                  "end": 2356,
                  "name": "x4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2359,
                  "end": 2374,
                  "callee": {
                    "type": "Identifier",
                    "start": 2359,
                    "end": 2362,
                    "name": "f11",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 2363,
                      "end": 2367,
                      "argument": {
                        "type": "Identifier",
                        "start": 2366,
                        "end": 2367,
                        "name": "u",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2369,
                      "end": 2373,
                      "argument": {
                        "type": "Identifier",
                        "start": 2372,
                        "end": 2373,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2175,
        "end": 2223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2176,
            "end": 2194,
            "name": {
              "type": "Identifier",
              "start": 2176,
              "end": 2177,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 2186,
              "end": 2194,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 2186,
                "end": 2192
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2196,
            "end": 2222,
            "name": {
              "type": "Identifier",
              "start": 2196,
              "end": 2197,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 2206,
              "end": 2222,
              "elementTypes": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2207,
                  "end": 2213
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 2215,
                  "end": 2221
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2403,
      "end": 2501,
      "id": {
        "type": "Identifier",
        "start": 2412,
        "end": 2416,
        "name": "call",
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
          "start": 2441,
          "end": 2461,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2442,
            "end": 2461,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2444,
              "end": 2461,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2445,
                  "end": 2455,
                  "argument": {
                    "type": "Identifier",
                    "start": 2448,
                    "end": 2452,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2452,
                    "end": 2455,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2454,
                      "end": 2455,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2454,
                        "end": 2455,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2457,
                "end": 2461,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2460,
                  "end": 2461,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2460,
                    "end": 2461,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "RestElement",
          "start": 2463,
          "end": 2473,
          "argument": {
            "type": "Identifier",
            "start": 2466,
            "end": 2470,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2470,
            "end": 2473,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2472,
              "end": 2473,
              "typeName": {
                "type": "Identifier",
                "start": 2472,
                "end": 2473,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2475,
        "end": 2501,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2481,
            "end": 2499,
            "argument": {
              "type": "CallExpression",
              "start": 2488,
              "end": 2498,
              "callee": {
                "type": "Identifier",
                "start": 2488,
                "end": 2489,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 2490,
                  "end": 2497,
                  "argument": {
                    "type": "Identifier",
                    "start": 2493,
                    "end": 2497,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2416,
        "end": 2440,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2417,
            "end": 2436,
            "name": {
              "type": "Identifier",
              "start": 2417,
              "end": 2418,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 2427,
              "end": 2436,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2427,
                "end": 2434
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2438,
            "end": 2439,
            "name": {
              "type": "Identifier",
              "start": 2438,
              "end": 2439,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2503,
      "end": 2599,
      "id": {
        "type": "Identifier",
        "start": 2512,
        "end": 2517,
        "name": "callr",
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
          "start": 2542,
          "end": 2549,
          "name": "args",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2546,
            "end": 2549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2548,
              "end": 2549,
              "typeName": {
                "type": "Identifier",
                "start": 2548,
                "end": 2549,
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
        },
        {
          "type": "Identifier",
          "start": 2551,
          "end": 2571,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2552,
            "end": 2571,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2554,
              "end": 2571,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2555,
                  "end": 2565,
                  "argument": {
                    "type": "Identifier",
                    "start": 2558,
                    "end": 2562,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2562,
                    "end": 2565,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2564,
                      "end": 2565,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2564,
                        "end": 2565,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2567,
                "end": 2571,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2570,
                  "end": 2571,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2570,
                    "end": 2571,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
        "start": 2573,
        "end": 2599,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2579,
            "end": 2597,
            "argument": {
              "type": "CallExpression",
              "start": 2586,
              "end": 2596,
              "callee": {
                "type": "Identifier",
                "start": 2586,
                "end": 2587,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 2588,
                  "end": 2595,
                  "argument": {
                    "type": "Identifier",
                    "start": 2591,
                    "end": 2595,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2517,
        "end": 2541,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2518,
            "end": 2537,
            "name": {
              "type": "Identifier",
              "start": 2518,
              "end": 2519,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 2528,
              "end": 2537,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 2528,
                "end": 2535
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2539,
            "end": 2540,
            "name": {
              "type": "Identifier",
              "start": 2539,
              "end": 2540,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2601,
      "end": 2661,
      "id": {
        "type": "Identifier",
        "start": 2618,
        "end": 2621,
        "name": "f15",
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
          "start": 2622,
          "end": 2631,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2623,
            "end": 2631,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2625,
              "end": 2631
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2633,
          "end": 2642,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2634,
            "end": 2642,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2636,
              "end": 2642
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2643,
        "end": 2660,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 2645,
          "end": 2660,
          "types": [
            {
              "type": "TSStringKeyword",
              "start": 2645,
              "end": 2651
            },
            {
              "type": "TSNumberKeyword",
              "start": 2654,
              "end": 2660
            }
          ]
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2662,
      "end": 2708,
      "id": {
        "type": "Identifier",
        "start": 2679,
        "end": 2682,
        "name": "f16",
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
          "start": 2689,
          "end": 2693,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2690,
            "end": 2693,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2692,
              "end": 2693,
              "typeName": {
                "type": "Identifier",
                "start": 2692,
                "end": 2693,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2695,
          "end": 2699,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2696,
            "end": 2699,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2698,
              "end": 2699,
              "typeName": {
                "type": "Identifier",
                "start": 2698,
                "end": 2699,
                "name": "B",
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
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2682,
        "end": 2688,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2683,
            "end": 2684,
            "name": {
              "type": "Identifier",
              "start": 2683,
              "end": 2684,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2686,
            "end": 2687,
            "name": {
              "type": "Identifier",
              "start": 2686,
              "end": 2687,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2700,
        "end": 2707,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 2702,
          "end": 2707,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2702,
              "end": 2703,
              "typeName": {
                "type": "Identifier",
                "start": 2702,
                "end": 2703,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2706,
              "end": 2707,
              "typeName": {
                "type": "Identifier",
                "start": 2706,
                "end": 2707,
                "name": "B",
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
      "type": "VariableDeclaration",
      "start": 2710,
      "end": 2750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2714,
          "end": 2749,
          "id": {
            "type": "Identifier",
            "start": 2714,
            "end": 2717,
            "name": "x20",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2720,
            "end": 2749,
            "callee": {
              "type": "Identifier",
              "start": 2720,
              "end": 2724,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2725,
                "end": 2740,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2726,
                    "end": 2727,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2729,
                    "end": 2730,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 2735,
                  "end": 2740,
                  "left": {
                    "type": "Identifier",
                    "start": 2735,
                    "end": 2736,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 2739,
                    "end": 2740,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 2742,
                "end": 2744,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2746,
                "end": 2748,
                "value": 20,
                "raw": "20"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2762,
      "end": 2807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2766,
          "end": 2806,
          "id": {
            "type": "Identifier",
            "start": 2766,
            "end": 2769,
            "name": "x21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2772,
            "end": 2806,
            "callee": {
              "type": "Identifier",
              "start": 2772,
              "end": 2776,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2777,
                "end": 2792,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2778,
                    "end": 2779,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2781,
                    "end": 2782,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 2787,
                  "end": 2792,
                  "left": {
                    "type": "Identifier",
                    "start": 2787,
                    "end": 2788,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 2791,
                    "end": 2792,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "Literal",
                "start": 2794,
                "end": 2796,
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 2798,
                "end": 2805,
                "value": "hello",
                "raw": "\"hello\""
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2819,
      "end": 2852,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2823,
          "end": 2851,
          "id": {
            "type": "Identifier",
            "start": 2823,
            "end": 2826,
            "name": "x22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2829,
            "end": 2851,
            "callee": {
              "type": "Identifier",
              "start": 2829,
              "end": 2833,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2834,
                "end": 2837,
                "name": "f15",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2839,
                "end": 2846,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 2848,
                "end": 2850,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2873,
      "end": 2906,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2877,
          "end": 2905,
          "id": {
            "type": "Identifier",
            "start": 2877,
            "end": 2880,
            "name": "x23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2883,
            "end": 2905,
            "callee": {
              "type": "Identifier",
              "start": 2883,
              "end": 2887,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2888,
                "end": 2891,
                "name": "f16",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2893,
                "end": 2900,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 2902,
                "end": 2904,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2919,
      "end": 2987,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2923,
          "end": 2986,
          "id": {
            "type": "Identifier",
            "start": 2923,
            "end": 2926,
            "name": "x24",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2929,
            "end": 2986,
            "callee": {
              "type": "Identifier",
              "start": 2929,
              "end": 2933,
              "name": "call",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2969,
                "end": 2972,
                "name": "f16",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2974,
                "end": 2981,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 2983,
                "end": 2985,
                "value": 42,
                "raw": "42"
              }
            ],
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 2933,
              "end": 2968,
              "params": [
                {
                  "type": "TSTupleType",
                  "start": 2934,
                  "end": 2950,
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2935,
                      "end": 2941
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2943,
                      "end": 2949
                    }
                  ]
                },
                {
                  "type": "TSUnionType",
                  "start": 2952,
                  "end": 2967,
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2952,
                      "end": 2958
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 2961,
                      "end": 2967
                    }
                  ]
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3009,
      "end": 3046,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3013,
          "end": 3045,
          "id": {
            "type": "Identifier",
            "start": 3013,
            "end": 3016,
            "name": "x30",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3019,
            "end": 3045,
            "callee": {
              "type": "Identifier",
              "start": 3019,
              "end": 3024,
              "name": "callr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3025,
                "end": 3027,
                "name": "sn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3029,
                "end": 3044,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3030,
                    "end": 3031,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3033,
                    "end": 3034,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 3039,
                  "end": 3044,
                  "left": {
                    "type": "Identifier",
                    "start": 3039,
                    "end": 3040,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 3043,
                    "end": 3044,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3058,
      "end": 3083,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3062,
          "end": 3082,
          "id": {
            "type": "Identifier",
            "start": 3062,
            "end": 3065,
            "name": "x31",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3068,
            "end": 3082,
            "callee": {
              "type": "Identifier",
              "start": 3068,
              "end": 3073,
              "name": "callr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3074,
                "end": 3076,
                "name": "sn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3078,
                "end": 3081,
                "name": "f15",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3104,
      "end": 3129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3108,
          "end": 3128,
          "id": {
            "type": "Identifier",
            "start": 3108,
            "end": 3111,
            "name": "x32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3114,
            "end": 3128,
            "callee": {
              "type": "Identifier",
              "start": 3114,
              "end": 3119,
              "name": "callr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3120,
                "end": 3122,
                "name": "sn",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3124,
                "end": 3127,
                "name": "f16",
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3151,
      "end": 3271,
      "id": {
        "type": "Identifier",
        "start": 3160,
        "end": 3164,
        "name": "bind",
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
          "start": 3192,
          "end": 3218,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3193,
            "end": 3218,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3195,
              "end": 3218,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3196,
                  "end": 3200,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3197,
                    "end": 3200,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3199,
                      "end": 3200,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3199,
                        "end": 3200,
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
                },
                {
                  "type": "RestElement",
                  "start": 3202,
                  "end": 3212,
                  "argument": {
                    "type": "Identifier",
                    "start": 3205,
                    "end": 3209,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3209,
                    "end": 3212,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3211,
                      "end": 3212,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3211,
                        "end": 3212,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 3214,
                "end": 3218,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 3217,
                  "end": 3218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3217,
                    "end": 3218,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 3220,
          "end": 3224,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3221,
            "end": 3224,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3223,
              "end": 3224,
              "typeName": {
                "type": "Identifier",
                "start": 3223,
                "end": 3224,
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
      "body": {
        "type": "BlockStatement",
        "start": 3226,
        "end": 3271,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 3232,
            "end": 3269,
            "argument": {
              "type": "ArrowFunctionExpression",
              "start": 3239,
              "end": 3268,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3240,
                  "end": 3250,
                  "argument": {
                    "type": "Identifier",
                    "start": 3243,
                    "end": 3247,
                    "name": "rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 3247,
                    "end": 3250,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3249,
                      "end": 3250,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3249,
                        "end": 3250,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "body": {
                "type": "CallExpression",
                "start": 3255,
                "end": 3268,
                "callee": {
                  "type": "Identifier",
                  "start": 3255,
                  "end": 3256,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3257,
                    "end": 3258,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "SpreadElement",
                    "start": 3260,
                    "end": 3267,
                    "argument": {
                      "type": "Identifier",
                      "start": 3263,
                      "end": 3267,
                      "name": "rest",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3164,
        "end": 3191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3165,
            "end": 3166,
            "name": {
              "type": "Identifier",
              "start": 3165,
              "end": 3166,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3168,
            "end": 3187,
            "name": {
              "type": "Identifier",
              "start": 3168,
              "end": 3169,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 3178,
              "end": 3187,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 3178,
                "end": 3185
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3189,
            "end": 3190,
            "name": {
              "type": "Identifier",
              "start": 3189,
              "end": 3190,
              "name": "V",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 3273,
      "end": 3339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3287,
          "end": 3338,
          "id": {
            "type": "Identifier",
            "start": 3287,
            "end": 3338,
            "name": "f20",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3290,
              "end": 3338,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3292,
                "end": 3338,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3293,
                    "end": 3302,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3294,
                      "end": 3302,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3296,
                        "end": 3302
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3304,
                    "end": 3313,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3305,
                      "end": 3313,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3307,
                        "end": 3313
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3315,
                    "end": 3325,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3316,
                      "end": 3325,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3318,
                        "end": 3325
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3327,
                  "end": 3338,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3330,
                    "end": 3338,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3330,
                      "end": 3336
                    }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3341,
      "end": 3367,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3347,
          "end": 3366,
          "id": {
            "type": "Identifier",
            "start": 3347,
            "end": 3350,
            "name": "f21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3353,
            "end": 3366,
            "callee": {
              "type": "Identifier",
              "start": 3353,
              "end": 3357,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3358,
                "end": 3361,
                "name": "f20",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3363,
                "end": 3365,
                "value": 42,
                "raw": "42"
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
      "type": "VariableDeclaration",
      "start": 3408,
      "end": 3439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3414,
          "end": 3438,
          "id": {
            "type": "Identifier",
            "start": 3414,
            "end": 3417,
            "name": "f22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3420,
            "end": 3438,
            "callee": {
              "type": "Identifier",
              "start": 3420,
              "end": 3424,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3425,
                "end": 3428,
                "name": "f21",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3430,
                "end": 3437,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 3469,
      "end": 3497,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3475,
          "end": 3496,
          "id": {
            "type": "Identifier",
            "start": 3475,
            "end": 3478,
            "name": "f23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3481,
            "end": 3496,
            "callee": {
              "type": "Identifier",
              "start": 3481,
              "end": 3485,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3486,
                "end": 3489,
                "name": "f22",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3491,
                "end": 3495,
                "value": true,
                "raw": "true"
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
      "type": "ExpressionStatement",
      "start": 3518,
      "end": 3541,
      "expression": {
        "type": "CallExpression",
        "start": 3518,
        "end": 3540,
        "callee": {
          "type": "Identifier",
          "start": 3518,
          "end": 3521,
          "name": "f20",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3522,
            "end": 3524,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 3526,
            "end": 3533,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 3535,
            "end": 3539,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3542,
      "end": 3561,
      "expression": {
        "type": "CallExpression",
        "start": 3542,
        "end": 3560,
        "callee": {
          "type": "Identifier",
          "start": 3542,
          "end": 3545,
          "name": "f21",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3546,
            "end": 3553,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 3555,
            "end": 3559,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3562,
      "end": 3572,
      "expression": {
        "type": "CallExpression",
        "start": 3562,
        "end": 3571,
        "callee": {
          "type": "Identifier",
          "start": 3562,
          "end": 3565,
          "name": "f22",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3566,
            "end": 3570,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3573,
      "end": 3579,
      "expression": {
        "type": "CallExpression",
        "start": 3573,
        "end": 3578,
        "callee": {
          "type": "Identifier",
          "start": 3573,
          "end": 3576,
          "name": "f23",
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
      "type": "VariableDeclaration",
      "start": 3581,
      "end": 3649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3595,
          "end": 3648,
          "id": {
            "type": "Identifier",
            "start": 3595,
            "end": 3648,
            "name": "g20",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3598,
              "end": 3648,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3600,
                "end": 3648,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3601,
                    "end": 3610,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3602,
                      "end": 3610,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3604,
                        "end": 3610
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3612,
                    "end": 3622,
                    "name": "y",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3614,
                      "end": 3622,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3616,
                        "end": 3622
                      }
                    },
                    "decorators": [],
                    "optional": true
                  },
                  {
                    "type": "Identifier",
                    "start": 3624,
                    "end": 3635,
                    "name": "z",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3626,
                      "end": 3635,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3628,
                        "end": 3635
                      }
                    },
                    "decorators": [],
                    "optional": true
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3637,
                  "end": 3648,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3640,
                    "end": 3648,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 3640,
                      "end": 3646
                    }
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3651,
      "end": 3677,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3657,
          "end": 3676,
          "id": {
            "type": "Identifier",
            "start": 3657,
            "end": 3660,
            "name": "g21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3663,
            "end": 3676,
            "callee": {
              "type": "Identifier",
              "start": 3663,
              "end": 3667,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3668,
                "end": 3671,
                "name": "g20",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3673,
                "end": 3675,
                "value": 42,
                "raw": "42"
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
      "type": "VariableDeclaration",
      "start": 3718,
      "end": 3749,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3724,
          "end": 3748,
          "id": {
            "type": "Identifier",
            "start": 3724,
            "end": 3727,
            "name": "g22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3730,
            "end": 3748,
            "callee": {
              "type": "Identifier",
              "start": 3730,
              "end": 3734,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3735,
                "end": 3738,
                "name": "g21",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3740,
                "end": 3747,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 3779,
      "end": 3807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3785,
          "end": 3806,
          "id": {
            "type": "Identifier",
            "start": 3785,
            "end": 3788,
            "name": "g23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3791,
            "end": 3806,
            "callee": {
              "type": "Identifier",
              "start": 3791,
              "end": 3795,
              "name": "bind",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3796,
                "end": 3799,
                "name": "g22",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3801,
                "end": 3805,
                "value": true,
                "raw": "true"
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
      "type": "ExpressionStatement",
      "start": 3828,
      "end": 3851,
      "expression": {
        "type": "CallExpression",
        "start": 3828,
        "end": 3850,
        "callee": {
          "type": "Identifier",
          "start": 3828,
          "end": 3831,
          "name": "g20",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3832,
            "end": 3834,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 3836,
            "end": 3843,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 3845,
            "end": 3849,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3852,
      "end": 3869,
      "expression": {
        "type": "CallExpression",
        "start": 3852,
        "end": 3868,
        "callee": {
          "type": "Identifier",
          "start": 3852,
          "end": 3855,
          "name": "g20",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3856,
            "end": 3858,
            "value": 42,
            "raw": "42"
          },
          {
            "type": "Literal",
            "start": 3860,
            "end": 3867,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3870,
      "end": 3878,
      "expression": {
        "type": "CallExpression",
        "start": 3870,
        "end": 3877,
        "callee": {
          "type": "Identifier",
          "start": 3870,
          "end": 3873,
          "name": "g20",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3874,
            "end": 3876,
            "value": 42,
            "raw": "42"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3879,
      "end": 3898,
      "expression": {
        "type": "CallExpression",
        "start": 3879,
        "end": 3897,
        "callee": {
          "type": "Identifier",
          "start": 3879,
          "end": 3882,
          "name": "g21",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3883,
            "end": 3890,
            "value": "hello",
            "raw": "\"hello\""
          },
          {
            "type": "Literal",
            "start": 3892,
            "end": 3896,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3899,
      "end": 3912,
      "expression": {
        "type": "CallExpression",
        "start": 3899,
        "end": 3911,
        "callee": {
          "type": "Identifier",
          "start": 3899,
          "end": 3902,
          "name": "g21",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3903,
            "end": 3910,
            "value": "hello",
            "raw": "\"hello\""
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3913,
      "end": 3919,
      "expression": {
        "type": "CallExpression",
        "start": 3913,
        "end": 3918,
        "callee": {
          "type": "Identifier",
          "start": 3913,
          "end": 3916,
          "name": "g21",
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
      "start": 3920,
      "end": 3930,
      "expression": {
        "type": "CallExpression",
        "start": 3920,
        "end": 3929,
        "callee": {
          "type": "Identifier",
          "start": 3920,
          "end": 3923,
          "name": "g22",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 3924,
            "end": 3928,
            "value": true,
            "raw": "true"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 3931,
      "end": 3937,
      "expression": {
        "type": "CallExpression",
        "start": 3931,
        "end": 3936,
        "callee": {
          "type": "Identifier",
          "start": 3931,
          "end": 3934,
          "name": "g22",
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
      "start": 3938,
      "end": 3944,
      "expression": {
        "type": "CallExpression",
        "start": 3938,
        "end": 3943,
        "callee": {
          "type": "Identifier",
          "start": 3938,
          "end": 3941,
          "name": "g23",
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
      "type": "TSDeclareFunction",
      "start": 3946,
      "end": 4020,
      "id": {
        "type": "Identifier",
        "start": 3963,
        "end": 3966,
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
          "start": 3999,
          "end": 4003,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4000,
            "end": 4003,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4002,
              "end": 4003,
              "typeName": {
                "type": "Identifier",
                "start": 4002,
                "end": 4003,
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
        },
        {
          "type": "RestElement",
          "start": 4005,
          "end": 4015,
          "argument": {
            "type": "Identifier",
            "start": 4008,
            "end": 4012,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4012,
            "end": 4015,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4014,
              "end": 4015,
              "typeName": {
                "type": "Identifier",
                "start": 4014,
                "end": 4015,
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3966,
        "end": 3998,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3967,
            "end": 3968,
            "name": {
              "type": "Identifier",
              "start": 3967,
              "end": 3968,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3970,
            "end": 3997,
            "name": {
              "type": "Identifier",
              "start": 3970,
              "end": 3971,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 3980,
              "end": 3997,
              "elementType": {
                "type": "TSFunctionType",
                "start": 3981,
                "end": 3994,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3982,
                    "end": 3986,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3983,
                      "end": 3986,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3985,
                        "end": 3986,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3985,
                          "end": 3986,
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
                  "start": 3988,
                  "end": 3994,
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 3991,
                    "end": 3994
                  }
                }
              }
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
        "start": 4016,
        "end": 4019,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4018,
          "end": 4019,
          "typeName": {
            "type": "Identifier",
            "start": 4018,
            "end": 4019,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 4022,
      "end": 4067,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4028,
          "end": 4066,
          "id": {
            "type": "Identifier",
            "start": 4028,
            "end": 4031,
            "name": "c30",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4034,
            "end": 4066,
            "callee": {
              "type": "Identifier",
              "start": 4034,
              "end": 4037,
              "name": "f30",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 4038,
                "end": 4040,
                "value": 42,
                "raw": "42"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4042,
                "end": 4053,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4042,
                    "end": 4043,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 4047,
                  "end": 4053,
                  "left": {
                    "type": "Literal",
                    "start": 4047,
                    "end": 4049,
                    "value": "",
                    "raw": "\"\""
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 4052,
                    "end": 4053,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4055,
                "end": 4065,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4055,
                    "end": 4056,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 4060,
                  "end": 4065,
                  "left": {
                    "type": "Identifier",
                    "start": 4060,
                    "end": 4061,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 4064,
                    "end": 4065,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "typeParameters": null,
                "returnType": null
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
      "type": "TSTypeAliasDeclaration",
      "start": 4120,
      "end": 4186,
      "id": {
        "type": "Identifier",
        "start": 4125,
        "end": 4128,
        "name": "T01",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4131,
        "end": 4185,
        "typeName": {
          "type": "Identifier",
          "start": 4131,
          "end": 4141,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4141,
          "end": 4185,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4142,
              "end": 4184,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4143,
                  "end": 4152,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4144,
                    "end": 4152,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4146,
                      "end": 4152
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 4154,
                  "end": 4163,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4155,
                    "end": 4163,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4157,
                      "end": 4163
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 4165,
                  "end": 4175,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4166,
                    "end": 4175,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4168,
                      "end": 4175
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4177,
                "end": 4184,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4180,
                  "end": 4184
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4187,
      "end": 4255,
      "id": {
        "type": "Identifier",
        "start": 4192,
        "end": 4195,
        "name": "T02",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4198,
        "end": 4254,
        "typeName": {
          "type": "Identifier",
          "start": 4198,
          "end": 4208,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4208,
          "end": 4254,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4209,
              "end": 4253,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4210,
                  "end": 4244,
                  "argument": {
                    "type": "Identifier",
                    "start": 4213,
                    "end": 4217,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4217,
                    "end": 4244,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 4219,
                      "end": 4244,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4220,
                          "end": 4226
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4228,
                          "end": 4234
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 4236,
                          "end": 4243
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4246,
                "end": 4253,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4249,
                  "end": 4253
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4256,
      "end": 4337,
      "id": {
        "type": "Identifier",
        "start": 4261,
        "end": 4264,
        "name": "T03",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4267,
        "end": 4336,
        "typeName": {
          "type": "Identifier",
          "start": 4267,
          "end": 4288,
          "name": "ConstructorParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4288,
          "end": 4336,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 4289,
              "end": 4335,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4294,
                  "end": 4303,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4295,
                    "end": 4303,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4297,
                      "end": 4303
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 4305,
                  "end": 4314,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4306,
                    "end": 4314,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4308,
                      "end": 4314
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 4316,
                  "end": 4326,
                  "name": "z",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4317,
                    "end": 4326,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4319,
                      "end": 4326
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4328,
                "end": 4335,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4331,
                  "end": 4335
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4338,
      "end": 4421,
      "id": {
        "type": "Identifier",
        "start": 4343,
        "end": 4346,
        "name": "T04",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4349,
        "end": 4420,
        "typeName": {
          "type": "Identifier",
          "start": 4349,
          "end": 4370,
          "name": "ConstructorParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4370,
          "end": 4420,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 4371,
              "end": 4419,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4376,
                  "end": 4410,
                  "argument": {
                    "type": "Identifier",
                    "start": 4379,
                    "end": 4383,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4383,
                    "end": 4410,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 4385,
                      "end": 4410,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4386,
                          "end": 4392
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4394,
                          "end": 4400
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 4402,
                          "end": 4409
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4412,
                "end": 4419,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4415,
                  "end": 4419
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4422,
      "end": 4471,
      "id": {
        "type": "Identifier",
        "start": 4427,
        "end": 4430,
        "name": "T05",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4430,
        "end": 4433,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4431,
            "end": 4432,
            "name": {
              "type": "Identifier",
              "start": 4431,
              "end": 4432,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4436,
        "end": 4470,
        "typeName": {
          "type": "Identifier",
          "start": 4436,
          "end": 4446,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4446,
          "end": 4470,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4447,
              "end": 4469,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4448,
                  "end": 4460,
                  "argument": {
                    "type": "Identifier",
                    "start": 4451,
                    "end": 4455,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4455,
                    "end": 4460,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 4457,
                      "end": 4460,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 4457,
                        "end": 4458,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4457,
                          "end": 4458,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4462,
                "end": 4469,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4465,
                  "end": 4469
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4472,
      "end": 4535,
      "id": {
        "type": "Identifier",
        "start": 4477,
        "end": 4480,
        "name": "T06",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4480,
        "end": 4483,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4481,
            "end": 4482,
            "name": {
              "type": "Identifier",
              "start": 4481,
              "end": 4482,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4486,
        "end": 4534,
        "typeName": {
          "type": "Identifier",
          "start": 4486,
          "end": 4507,
          "name": "ConstructorParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4507,
          "end": 4534,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 4508,
              "end": 4533,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4513,
                  "end": 4524,
                  "argument": {
                    "type": "Identifier",
                    "start": 4516,
                    "end": 4520,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4520,
                    "end": 4524,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 4522,
                      "end": 4524,
                      "elementTypes": []
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4526,
                "end": 4533,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4529,
                  "end": 4533
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4536,
      "end": 4597,
      "id": {
        "type": "Identifier",
        "start": 4541,
        "end": 4544,
        "name": "T07",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4544,
        "end": 4561,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4545,
            "end": 4560,
            "name": {
              "type": "Identifier",
              "start": 4545,
              "end": 4546,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 4555,
              "end": 4560,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 4555,
                "end": 4558
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4564,
        "end": 4596,
        "typeName": {
          "type": "Identifier",
          "start": 4564,
          "end": 4574,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4574,
          "end": 4596,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4575,
              "end": 4595,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4576,
                  "end": 4586,
                  "argument": {
                    "type": "Identifier",
                    "start": 4579,
                    "end": 4583,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4583,
                    "end": 4586,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4585,
                      "end": 4586,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4585,
                        "end": 4586,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4588,
                "end": 4595,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4591,
                  "end": 4595
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4598,
      "end": 4674,
      "id": {
        "type": "Identifier",
        "start": 4603,
        "end": 4606,
        "name": "T08",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4606,
        "end": 4623,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4607,
            "end": 4622,
            "name": {
              "type": "Identifier",
              "start": 4607,
              "end": 4608,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 4617,
              "end": 4622,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 4617,
                "end": 4620
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4626,
        "end": 4673,
        "typeName": {
          "type": "Identifier",
          "start": 4626,
          "end": 4647,
          "name": "ConstructorParameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4647,
          "end": 4673,
          "params": [
            {
              "type": "TSConstructorType",
              "start": 4648,
              "end": 4672,
              "abstract": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4653,
                  "end": 4663,
                  "argument": {
                    "type": "Identifier",
                    "start": 4656,
                    "end": 4660,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4660,
                    "end": 4663,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4662,
                      "end": 4663,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4662,
                        "end": 4663,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4665,
                "end": 4672,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4668,
                  "end": 4672
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4675,
      "end": 4707,
      "id": {
        "type": "Identifier",
        "start": 4680,
        "end": 4683,
        "name": "T09",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4686,
        "end": 4706,
        "typeName": {
          "type": "Identifier",
          "start": 4686,
          "end": 4696,
          "name": "Parameters",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4696,
          "end": 4706,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 4697,
              "end": 4705,
              "typeName": {
                "type": "Identifier",
                "start": 4697,
                "end": 4705,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4709,
      "end": 4824,
      "id": {
        "type": "Identifier",
        "start": 4714,
        "end": 4721,
        "name": "Record1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 4724,
        "end": 4824,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 4728,
            "end": 4761,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4728,
              "end": 4732,
              "name": "move",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4732,
              "end": 4760,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 4734,
                "end": 4760,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4735,
                    "end": 4741
                  },
                  {
                    "type": "TSUnionType",
                    "start": 4743,
                    "end": 4759,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 4743,
                        "end": 4749,
                        "literal": {
                          "type": "Literal",
                          "start": 4743,
                          "end": 4749,
                          "value": "left",
                          "raw": "'left'"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 4752,
                        "end": 4759,
                        "literal": {
                          "type": "Literal",
                          "start": 4752,
                          "end": 4759,
                          "value": "right",
                          "raw": "'right'"
                        }
                      }
                    ]
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4764,
            "end": 4794,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4764,
              "end": 4768,
              "name": "jump",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4768,
              "end": 4793,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 4770,
                "end": 4793,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4771,
                    "end": 4777
                  },
                  {
                    "type": "TSUnionType",
                    "start": 4779,
                    "end": 4792,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 4779,
                        "end": 4783,
                        "literal": {
                          "type": "Literal",
                          "start": 4779,
                          "end": 4783,
                          "value": "up",
                          "raw": "'up'"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 4786,
                        "end": 4792,
                        "literal": {
                          "type": "Literal",
                          "start": 4786,
                          "end": 4792,
                          "value": "down",
                          "raw": "'down'"
                        }
                      }
                    ]
                  }
                ]
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4797,
            "end": 4810,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4797,
              "end": 4801,
              "name": "stop",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4801,
              "end": 4809,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4803,
                "end": 4809
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4813,
            "end": 4822,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4813,
              "end": 4817,
              "name": "done",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4817,
              "end": 4821,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 4819,
                "end": 4821,
                "elementTypes": []
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
      "type": "TSTypeAliasDeclaration",
      "start": 4826,
      "end": 4947,
      "id": {
        "type": "Identifier",
        "start": 4831,
        "end": 4840,
        "name": "EventType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4840,
        "end": 4843,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4841,
            "end": 4842,
            "name": {
              "type": "Identifier",
              "start": 4841,
              "end": 4842,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 4846,
        "end": 4947,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 4850,
            "end": 4944,
            "key": {
              "type": "Identifier",
              "start": 4850,
              "end": 4854,
              "name": "emit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4854,
              "end": 4883,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4855,
                  "end": 4882,
                  "name": {
                    "type": "Identifier",
                    "start": 4855,
                    "end": 4856,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 4865,
                    "end": 4872,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4871,
                      "end": 4872,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4871,
                        "end": 4872,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": {
                    "type": "TSTypeOperator",
                    "start": 4875,
                    "end": 4882,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4881,
                      "end": 4882,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4881,
                        "end": 4882,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 4884,
                "end": 4888,
                "name": "e",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4885,
                  "end": 4888,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 4887,
                    "end": 4888,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4887,
                      "end": 4888,
                      "name": "K",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 4890,
                "end": 4936,
                "argument": {
                  "type": "Identifier",
                  "start": 4893,
                  "end": 4900,
                  "name": "payload",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4900,
                  "end": 4936,
                  "typeAnnotation": {
                    "type": "TSConditionalType",
                    "start": 4902,
                    "end": 4936,
                    "checkType": {
                      "type": "TSIndexedAccessType",
                      "start": 4902,
                      "end": 4906,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 4902,
                        "end": 4903,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4902,
                          "end": 4903,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 4904,
                        "end": 4905,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4904,
                          "end": 4905,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "extendsType": {
                      "type": "TSArrayType",
                      "start": 4915,
                      "end": 4920,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 4915,
                        "end": 4918
                      }
                    },
                    "trueType": {
                      "type": "TSIndexedAccessType",
                      "start": 4923,
                      "end": 4927,
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 4923,
                        "end": 4924,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4923,
                          "end": 4924,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 4925,
                        "end": 4926,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4925,
                          "end": 4926,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "falseType": {
                      "type": "TSTupleType",
                      "start": 4930,
                      "end": 4936,
                      "elementTypes": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 4931,
                          "end": 4935,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 4931,
                            "end": 4932,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4931,
                              "end": 4932,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 4933,
                            "end": 4934,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4933,
                              "end": 4934,
                              "name": "K",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 4937,
              "end": 4943,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4939,
                "end": 4943
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
      "type": "VariableDeclaration",
      "start": 4949,
      "end": 4988,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4961,
          "end": 4987,
          "id": {
            "type": "Identifier",
            "start": 4961,
            "end": 4987,
            "name": "events",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4967,
              "end": 4987,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4969,
                "end": 4987,
                "typeName": {
                  "type": "Identifier",
                  "start": 4969,
                  "end": 4978,
                  "name": "EventType",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4978,
                  "end": 4987,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4979,
                      "end": 4986,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4979,
                        "end": 4986,
                        "name": "Record1",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 4989,
      "end": 5021,
      "expression": {
        "type": "CallExpression",
        "start": 4989,
        "end": 5020,
        "callee": {
          "type": "MemberExpression",
          "start": 4989,
          "end": 5000,
          "object": {
            "type": "Identifier",
            "start": 4989,
            "end": 4995,
            "name": "events",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 4996,
            "end": 5000,
            "name": "emit",
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
            "start": 5001,
            "end": 5007,
            "value": "move",
            "raw": "'move'"
          },
          {
            "type": "Literal",
            "start": 5009,
            "end": 5011,
            "value": 10,
            "raw": "10"
          },
          {
            "type": "Literal",
            "start": 5013,
            "end": 5019,
            "value": "left",
            "raw": "'left'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5022,
      "end": 5052,
      "expression": {
        "type": "CallExpression",
        "start": 5022,
        "end": 5051,
        "callee": {
          "type": "MemberExpression",
          "start": 5022,
          "end": 5033,
          "object": {
            "type": "Identifier",
            "start": 5022,
            "end": 5028,
            "name": "events",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5029,
            "end": 5033,
            "name": "emit",
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
            "start": 5034,
            "end": 5040,
            "value": "jump",
            "raw": "'jump'"
          },
          {
            "type": "Literal",
            "start": 5042,
            "end": 5044,
            "value": 20,
            "raw": "20"
          },
          {
            "type": "Literal",
            "start": 5046,
            "end": 5050,
            "value": "up",
            "raw": "'up'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5053,
      "end": 5081,
      "expression": {
        "type": "CallExpression",
        "start": 5053,
        "end": 5080,
        "callee": {
          "type": "MemberExpression",
          "start": 5053,
          "end": 5064,
          "object": {
            "type": "Identifier",
            "start": 5053,
            "end": 5059,
            "name": "events",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5060,
            "end": 5064,
            "name": "emit",
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
            "start": 5065,
            "end": 5071,
            "value": "stop",
            "raw": "'stop'"
          },
          {
            "type": "Literal",
            "start": 5073,
            "end": 5079,
            "value": "Bye!",
            "raw": "'Bye!'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5082,
      "end": 5102,
      "expression": {
        "type": "CallExpression",
        "start": 5082,
        "end": 5101,
        "callee": {
          "type": "MemberExpression",
          "start": 5082,
          "end": 5093,
          "object": {
            "type": "Identifier",
            "start": 5082,
            "end": 5088,
            "name": "events",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 5089,
            "end": 5093,
            "name": "emit",
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
            "start": 5094,
            "end": 5100,
            "value": "done",
            "raw": "'done'"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 5126,
      "end": 5169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5138,
          "end": 5168,
          "id": {
            "type": "Identifier",
            "start": 5138,
            "end": 5168,
            "name": "ff1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5141,
              "end": 5168,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5143,
                "end": 5168,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 5144,
                    "end": 5159,
                    "argument": {
                      "type": "Identifier",
                      "start": 5148,
                      "end": 5152,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5152,
                      "end": 5159,
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 5154,
                        "end": 5159,
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 5154,
                          "end": 5157
                        }
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5161,
                  "end": 5168,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5164,
                    "end": 5168
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 5171,
      "end": 5199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5183,
          "end": 5198,
          "id": {
            "type": "Identifier",
            "start": 5183,
            "end": 5198,
            "name": "ff2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5186,
              "end": 5198,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5188,
                "end": 5198,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5191,
                  "end": 5198,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5194,
                    "end": 5198
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 5200,
      "end": 5239,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5212,
          "end": 5238,
          "id": {
            "type": "Identifier",
            "start": 5212,
            "end": 5238,
            "name": "ff3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5215,
              "end": 5238,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5217,
                "end": 5238,
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 5218,
                    "end": 5229,
                    "argument": {
                      "type": "Identifier",
                      "start": 5221,
                      "end": 5225,
                      "name": "args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5225,
                      "end": 5229,
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "start": 5227,
                        "end": 5229,
                        "elementTypes": []
                      }
                    },
                    "value": null
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5231,
                  "end": 5238,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5234,
                    "end": 5238
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 5240,
      "end": 5276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 5252,
          "end": 5275,
          "id": {
            "type": "Identifier",
            "start": 5252,
            "end": 5275,
            "name": "ff4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5255,
              "end": 5275,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5257,
                "end": 5275,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5258,
                    "end": 5266,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5259,
                      "end": 5266,
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 5261,
                        "end": 5266
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 5268,
                  "end": 5275,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 5271,
                    "end": 5275
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 5278,
      "end": 5288,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5278,
        "end": 5287,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 5278,
          "end": 5281,
          "name": "ff1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 5284,
          "end": 5287,
          "name": "ff2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5289,
      "end": 5299,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5289,
        "end": 5298,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 5289,
          "end": 5292,
          "name": "ff1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 5295,
          "end": 5298,
          "name": "ff3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 5300,
      "end": 5310,
      "expression": {
        "type": "AssignmentExpression",
        "start": 5300,
        "end": 5309,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 5300,
          "end": 5303,
          "name": "ff1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 5306,
          "end": 5309,
          "name": "ff4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
