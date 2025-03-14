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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 57,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 57,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 16,
                "end": 57,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 17,
                    "end": 48,
                    "argument": {
                      "type": "Identifier",
                      "start": 20,
                      "end": 21,
                      "decorators": [],
                      "name": "x",
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
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 120,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 120,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 75,
                "end": 120,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 86,
                    "decorators": [],
                    "name": "x0",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 86,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 80,
                        "end": 86
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 88,
                    "end": 98,
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 90,
                      "end": 98,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 92,
                        "end": 98
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 100,
                    "end": 111,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 102,
                      "end": 111,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 104,
                        "end": 111
                      }
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "let"
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
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 128,
          "end": 130,
          "decorators": [],
          "name": "f2",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 137,
          "end": 139,
          "decorators": [],
          "name": "f1",
          "optional": false
        }
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 156,
            "end": 185,
            "decorators": [],
            "name": "t3",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 222,
            "decorators": [],
            "name": "t2",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 251,
            "decorators": [],
            "name": "t1",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 273,
            "decorators": [],
            "name": "t0",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 310,
            "decorators": [],
            "name": "ns",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 346,
            "decorators": [],
            "name": "sn",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 371,
      "expression": {
        "type": "CallExpression",
        "start": 349,
        "end": 370,
        "arguments": [
          {
            "type": "Literal",
            "start": 352,
            "end": 354,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 356,
            "end": 363,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 365,
            "end": 369,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 349,
          "end": 351,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 372,
      "end": 396,
      "expression": {
        "type": "CallExpression",
        "start": 372,
        "end": 395,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 375,
            "end": 380,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 375,
              "end": 377,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 378,
              "end": 379,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MemberExpression",
            "start": 382,
            "end": 387,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 382,
              "end": 384,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 385,
              "end": 386,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MemberExpression",
            "start": 389,
            "end": 394,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 389,
              "end": 391,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 392,
              "end": 393,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 372,
          "end": 374,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 397,
      "end": 407,
      "expression": {
        "type": "CallExpression",
        "start": 397,
        "end": 406,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 400,
            "end": 405,
            "argument": {
              "type": "Identifier",
              "start": 403,
              "end": 405,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 397,
          "end": 399,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 408,
      "end": 422,
      "expression": {
        "type": "CallExpression",
        "start": 408,
        "end": 421,
        "arguments": [
          {
            "type": "Literal",
            "start": 411,
            "end": 413,
            "raw": "42",
            "value": 42
          },
          {
            "type": "SpreadElement",
            "start": 415,
            "end": 420,
            "argument": {
              "type": "Identifier",
              "start": 418,
              "end": 420,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 408,
          "end": 410,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 446,
      "expression": {
        "type": "CallExpression",
        "start": 423,
        "end": 445,
        "arguments": [
          {
            "type": "Literal",
            "start": 426,
            "end": 428,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 430,
            "end": 437,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "SpreadElement",
            "start": 439,
            "end": 444,
            "argument": {
              "type": "Identifier",
              "start": 442,
              "end": 444,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 423,
          "end": 425,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 476,
      "expression": {
        "type": "CallExpression",
        "start": 447,
        "end": 475,
        "arguments": [
          {
            "type": "Literal",
            "start": 450,
            "end": 452,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 454,
            "end": 461,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 463,
            "end": 467,
            "raw": "true",
            "value": true
          },
          {
            "type": "SpreadElement",
            "start": 469,
            "end": 474,
            "argument": {
              "type": "Identifier",
              "start": 472,
              "end": 474,
              "decorators": [],
              "name": "t0",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 447,
          "end": 449,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 477,
      "end": 500,
      "expression": {
        "type": "CallExpression",
        "start": 477,
        "end": 499,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 480,
            "end": 485,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 480,
              "end": 482,
              "decorators": [],
              "name": "ns",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 483,
              "end": 484,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MemberExpression",
            "start": 487,
            "end": 492,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 487,
              "end": 489,
              "decorators": [],
              "name": "ns",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 490,
              "end": 491,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "Literal",
            "start": 494,
            "end": 498,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 477,
          "end": 479,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 501,
      "end": 517,
      "expression": {
        "type": "CallExpression",
        "start": 501,
        "end": 516,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 504,
            "end": 509,
            "argument": {
              "type": "Identifier",
              "start": 507,
              "end": 509,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 511,
            "end": 515,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 501,
          "end": 503,
          "decorators": [],
          "name": "f1",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 585,
      "end": 607,
      "expression": {
        "type": "CallExpression",
        "start": 585,
        "end": 606,
        "arguments": [
          {
            "type": "Literal",
            "start": 588,
            "end": 590,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 592,
            "end": 599,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 601,
            "end": 605,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 585,
          "end": 587,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 608,
      "end": 632,
      "expression": {
        "type": "CallExpression",
        "start": 608,
        "end": 631,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 611,
            "end": 616,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 611,
              "end": 613,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 614,
              "end": 615,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MemberExpression",
            "start": 618,
            "end": 623,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 618,
              "end": 620,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 621,
              "end": 622,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MemberExpression",
            "start": 625,
            "end": 630,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 625,
              "end": 627,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 628,
              "end": 629,
              "raw": "2",
              "value": 2
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 608,
          "end": 610,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 633,
      "end": 643,
      "expression": {
        "type": "CallExpression",
        "start": 633,
        "end": 642,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 636,
            "end": 641,
            "argument": {
              "type": "Identifier",
              "start": 639,
              "end": 641,
              "decorators": [],
              "name": "t3",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 633,
          "end": 635,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 644,
      "end": 658,
      "expression": {
        "type": "CallExpression",
        "start": 644,
        "end": 657,
        "arguments": [
          {
            "type": "Literal",
            "start": 647,
            "end": 649,
            "raw": "42",
            "value": 42
          },
          {
            "type": "SpreadElement",
            "start": 651,
            "end": 656,
            "argument": {
              "type": "Identifier",
              "start": 654,
              "end": 656,
              "decorators": [],
              "name": "t2",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 644,
          "end": 646,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 682,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 681,
        "arguments": [
          {
            "type": "Literal",
            "start": 662,
            "end": 664,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 666,
            "end": 673,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "SpreadElement",
            "start": 675,
            "end": 680,
            "argument": {
              "type": "Identifier",
              "start": 678,
              "end": 680,
              "decorators": [],
              "name": "t1",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 659,
          "end": 661,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 683,
      "end": 712,
      "expression": {
        "type": "CallExpression",
        "start": 683,
        "end": 711,
        "arguments": [
          {
            "type": "Literal",
            "start": 686,
            "end": 688,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 690,
            "end": 697,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 699,
            "end": 703,
            "raw": "true",
            "value": true
          },
          {
            "type": "SpreadElement",
            "start": 705,
            "end": 710,
            "argument": {
              "type": "Identifier",
              "start": 708,
              "end": 710,
              "decorators": [],
              "name": "t0",
              "optional": false
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 683,
          "end": 685,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 713,
      "end": 736,
      "expression": {
        "type": "CallExpression",
        "start": 713,
        "end": 735,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 716,
            "end": 721,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 716,
              "end": 718,
              "decorators": [],
              "name": "ns",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 719,
              "end": 720,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MemberExpression",
            "start": 723,
            "end": 728,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 723,
              "end": 725,
              "decorators": [],
              "name": "ns",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 726,
              "end": 727,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "Literal",
            "start": 730,
            "end": 734,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 713,
          "end": 715,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 737,
      "end": 753,
      "expression": {
        "type": "CallExpression",
        "start": 737,
        "end": 752,
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 740,
            "end": 745,
            "argument": {
              "type": "Identifier",
              "start": 743,
              "end": 745,
              "decorators": [],
              "name": "ns",
              "optional": false
            }
          },
          {
            "type": "Literal",
            "start": 747,
            "end": 751,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 737,
          "end": 739,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 821,
      "end": 878,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 841,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 863,
          "end": 873,
          "argument": {
            "type": "Identifier",
            "start": 866,
            "end": 870,
            "decorators": [],
            "name": "args",
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 841,
        "end": 862,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 842,
            "end": 861,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 842,
              "end": 843,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 886,
            "end": 889,
            "decorators": [],
            "name": "x10",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 892,
            "end": 914,
            "arguments": [
              {
                "type": "Literal",
                "start": 896,
                "end": 898,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 900,
                "end": 907,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 909,
                "end": 913,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 892,
              "end": 895,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 952,
            "end": 955,
            "decorators": [],
            "name": "x11",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 958,
            "end": 974,
            "arguments": [
              {
                "type": "Literal",
                "start": 962,
                "end": 964,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 966,
                "end": 973,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 958,
              "end": 961,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1003,
            "end": 1006,
            "decorators": [],
            "name": "x12",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1009,
            "end": 1016,
            "arguments": [
              {
                "type": "Literal",
                "start": 1013,
                "end": 1015,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1009,
              "end": 1012,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1037,
            "end": 1040,
            "decorators": [],
            "name": "x13",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1043,
            "end": 1048,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1043,
              "end": 1046,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "decorators": [],
            "name": "x14",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1069,
            "end": 1079,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 1073,
                "end": 1078,
                "argument": {
                  "type": "Identifier",
                  "start": 1076,
                  "end": 1078,
                  "decorators": [],
                  "name": "t3",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1069,
              "end": 1072,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1117,
            "end": 1120,
            "decorators": [],
            "name": "x15",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1123,
            "end": 1137,
            "arguments": [
              {
                "type": "Literal",
                "start": 1127,
                "end": 1129,
                "raw": "42",
                "value": 42
              },
              {
                "type": "SpreadElement",
                "start": 1131,
                "end": 1136,
                "argument": {
                  "type": "Identifier",
                  "start": 1134,
                  "end": 1136,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1123,
              "end": 1126,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1175,
            "end": 1178,
            "decorators": [],
            "name": "x16",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1181,
            "end": 1204,
            "arguments": [
              {
                "type": "Literal",
                "start": 1185,
                "end": 1187,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 1189,
                "end": 1196,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "SpreadElement",
                "start": 1198,
                "end": 1203,
                "argument": {
                  "type": "Identifier",
                  "start": 1201,
                  "end": 1203,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1181,
              "end": 1184,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1242,
            "end": 1245,
            "decorators": [],
            "name": "x17",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1248,
            "end": 1277,
            "arguments": [
              {
                "type": "Literal",
                "start": 1252,
                "end": 1254,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 1256,
                "end": 1263,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 1265,
                "end": 1269,
                "raw": "true",
                "value": true
              },
              {
                "type": "SpreadElement",
                "start": 1271,
                "end": 1276,
                "argument": {
                  "type": "Identifier",
                  "start": 1274,
                  "end": 1276,
                  "decorators": [],
                  "name": "t0",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1248,
              "end": 1251,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1315,
            "end": 1318,
            "decorators": [],
            "name": "x18",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1321,
            "end": 1337,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 1325,
                "end": 1330,
                "argument": {
                  "type": "Identifier",
                  "start": 1328,
                  "end": 1330,
                  "decorators": [],
                  "name": "ns",
                  "optional": false
                }
              },
              {
                "type": "Literal",
                "start": 1332,
                "end": 1336,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1321,
              "end": 1324,
              "decorators": [],
              "name": "f10",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1374,
      "end": 1617,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1457,
                  "end": 1459,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1462,
                  "end": 1471,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 1466,
                      "end": 1470,
                      "argument": {
                        "type": "Identifier",
                        "start": 1469,
                        "end": 1470,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1462,
                    "end": 1465,
                    "decorators": [],
                    "name": "f10",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1487,
                  "end": 1489,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1492,
                  "end": 1501,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 1496,
                      "end": 1500,
                      "argument": {
                        "type": "Identifier",
                        "start": 1499,
                        "end": 1500,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1492,
                    "end": 1495,
                    "decorators": [],
                    "name": "f10",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1517,
                  "end": 1519,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1522,
                  "end": 1534,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1526,
                      "end": 1527,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "SpreadElement",
                      "start": 1529,
                      "end": 1533,
                      "argument": {
                        "type": "Identifier",
                        "start": 1532,
                        "end": 1533,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1522,
                    "end": 1525,
                    "decorators": [],
                    "name": "f10",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1570,
                  "end": 1572,
                  "decorators": [],
                  "name": "x4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1575,
                  "end": 1590,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 1579,
                      "end": 1583,
                      "argument": {
                        "type": "Identifier",
                        "start": 1582,
                        "end": 1583,
                        "decorators": [],
                        "name": "u",
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
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1575,
                    "end": 1578,
                    "decorators": [],
                    "name": "f10",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1383,
        "end": 1386,
        "decorators": [],
        "name": "g10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1435,
          "end": 1439,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1441,
          "end": 1445,
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1386,
        "end": 1434,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1387,
            "end": 1405,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1387,
              "end": 1388,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1407,
            "end": 1433,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1407,
              "end": 1408,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1619,
      "end": 1696,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1636,
        "end": 1639,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": [
        {
          "type": "RestElement",
          "start": 1681,
          "end": 1691,
          "argument": {
            "type": "Identifier",
            "start": 1684,
            "end": 1688,
            "decorators": [],
            "name": "args",
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1639,
        "end": 1680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1640,
            "end": 1679,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1640,
              "end": 1641,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1704,
            "end": 1707,
            "decorators": [],
            "name": "z10",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1710,
            "end": 1732,
            "arguments": [
              {
                "type": "Literal",
                "start": 1714,
                "end": 1716,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 1718,
                "end": 1725,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 1727,
                "end": 1731,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1710,
              "end": 1713,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1764,
            "end": 1767,
            "decorators": [],
            "name": "z11",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1770,
            "end": 1786,
            "arguments": [
              {
                "type": "Literal",
                "start": 1774,
                "end": 1776,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 1778,
                "end": 1785,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1770,
              "end": 1773,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1812,
            "end": 1815,
            "decorators": [],
            "name": "z12",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1818,
            "end": 1825,
            "arguments": [
              {
                "type": "Literal",
                "start": 1822,
                "end": 1824,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1818,
              "end": 1821,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1842,
            "end": 1845,
            "decorators": [],
            "name": "z13",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1848,
            "end": 1853,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1848,
              "end": 1851,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1868,
            "end": 1871,
            "decorators": [],
            "name": "z14",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1874,
            "end": 1884,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 1878,
                "end": 1883,
                "argument": {
                  "type": "Identifier",
                  "start": 1881,
                  "end": 1883,
                  "decorators": [],
                  "name": "t3",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1874,
              "end": 1877,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1922,
            "end": 1925,
            "decorators": [],
            "name": "z15",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1928,
            "end": 1942,
            "arguments": [
              {
                "type": "Literal",
                "start": 1932,
                "end": 1934,
                "raw": "42",
                "value": 42
              },
              {
                "type": "SpreadElement",
                "start": 1936,
                "end": 1941,
                "argument": {
                  "type": "Identifier",
                  "start": 1939,
                  "end": 1941,
                  "decorators": [],
                  "name": "t2",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1928,
              "end": 1931,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1976,
            "end": 1979,
            "decorators": [],
            "name": "z16",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1982,
            "end": 2005,
            "arguments": [
              {
                "type": "Literal",
                "start": 1986,
                "end": 1988,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 1990,
                "end": 1997,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "SpreadElement",
                "start": 1999,
                "end": 2004,
                "argument": {
                  "type": "Identifier",
                  "start": 2002,
                  "end": 2004,
                  "decorators": [],
                  "name": "t1",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1982,
              "end": 1985,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2040,
            "end": 2043,
            "decorators": [],
            "name": "z17",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2046,
            "end": 2075,
            "arguments": [
              {
                "type": "Literal",
                "start": 2050,
                "end": 2052,
                "raw": "42",
                "value": 42
              },
              {
                "type": "Literal",
                "start": 2054,
                "end": 2061,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 2063,
                "end": 2067,
                "raw": "true",
                "value": true
              },
              {
                "type": "SpreadElement",
                "start": 2069,
                "end": 2074,
                "argument": {
                  "type": "Identifier",
                  "start": 2072,
                  "end": 2074,
                  "decorators": [],
                  "name": "t0",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2046,
              "end": 2049,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2107,
            "end": 2110,
            "decorators": [],
            "name": "z18",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2113,
            "end": 2129,
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 2117,
                "end": 2122,
                "argument": {
                  "type": "Identifier",
                  "start": 2120,
                  "end": 2122,
                  "decorators": [],
                  "name": "ns",
                  "optional": false
                }
              },
              {
                "type": "Literal",
                "start": 2124,
                "end": 2128,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2113,
              "end": 2116,
              "decorators": [],
              "name": "f11",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2163,
      "end": 2401,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2246,
                  "end": 2248,
                  "decorators": [],
                  "name": "x1",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2251,
                  "end": 2260,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 2255,
                      "end": 2259,
                      "argument": {
                        "type": "Identifier",
                        "start": 2258,
                        "end": 2259,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2251,
                    "end": 2254,
                    "decorators": [],
                    "name": "f11",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2276,
                  "end": 2278,
                  "decorators": [],
                  "name": "x2",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2281,
                  "end": 2290,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 2285,
                      "end": 2289,
                      "argument": {
                        "type": "Identifier",
                        "start": 2288,
                        "end": 2289,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2281,
                    "end": 2284,
                    "decorators": [],
                    "name": "f11",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2306,
                  "end": 2308,
                  "decorators": [],
                  "name": "x3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2311,
                  "end": 2323,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 2315,
                      "end": 2316,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "SpreadElement",
                      "start": 2318,
                      "end": 2322,
                      "argument": {
                        "type": "Identifier",
                        "start": 2321,
                        "end": 2322,
                        "decorators": [],
                        "name": "u",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2311,
                    "end": 2314,
                    "decorators": [],
                    "name": "f11",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2354,
                  "end": 2356,
                  "decorators": [],
                  "name": "x4",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2359,
                  "end": 2374,
                  "arguments": [
                    {
                      "type": "SpreadElement",
                      "start": 2363,
                      "end": 2367,
                      "argument": {
                        "type": "Identifier",
                        "start": 2366,
                        "end": 2367,
                        "decorators": [],
                        "name": "u",
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
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 2359,
                    "end": 2362,
                    "decorators": [],
                    "name": "f11",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2172,
        "end": 2175,
        "decorators": [],
        "name": "g11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2224,
          "end": 2228,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2230,
          "end": 2234,
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2175,
        "end": 2223,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2176,
            "end": 2194,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2176,
              "end": 2177,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2196,
            "end": 2222,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2196,
              "end": 2197,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2403,
      "end": 2501,
      "async": false,
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
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 2490,
                  "end": 2497,
                  "argument": {
                    "type": "Identifier",
                    "start": 2493,
                    "end": 2497,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2488,
                "end": 2489,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2412,
        "end": 2416,
        "decorators": [],
        "name": "call",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2441,
          "end": 2461,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2442,
            "end": 2461,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2444,
              "end": 2461,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2445,
                  "end": 2455,
                  "argument": {
                    "type": "Identifier",
                    "start": 2448,
                    "end": 2452,
                    "decorators": [],
                    "name": "args",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 2463,
          "end": 2473,
          "argument": {
            "type": "Identifier",
            "start": 2466,
            "end": 2470,
            "decorators": [],
            "name": "args",
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2416,
        "end": 2440,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2417,
            "end": 2436,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2417,
              "end": 2418,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2438,
            "end": 2439,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2438,
              "end": 2439,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2503,
      "end": 2599,
      "async": false,
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
              "arguments": [
                {
                  "type": "SpreadElement",
                  "start": 2588,
                  "end": 2595,
                  "argument": {
                    "type": "Identifier",
                    "start": 2591,
                    "end": 2595,
                    "decorators": [],
                    "name": "args",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2586,
                "end": 2587,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2512,
        "end": 2517,
        "decorators": [],
        "name": "callr",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2542,
          "end": 2549,
          "decorators": [],
          "name": "args",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2551,
          "end": 2571,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2552,
            "end": 2571,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 2554,
              "end": 2571,
              "params": [
                {
                  "type": "RestElement",
                  "start": 2555,
                  "end": 2565,
                  "argument": {
                    "type": "Identifier",
                    "start": 2558,
                    "end": 2562,
                    "decorators": [],
                    "name": "args",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "U",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2517,
        "end": 2541,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2518,
            "end": 2537,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2518,
              "end": 2519,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2539,
            "end": 2540,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2539,
              "end": 2540,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 2601,
      "end": 2661,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2618,
        "end": 2621,
        "decorators": [],
        "name": "f15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2622,
          "end": 2631,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2623,
            "end": 2631,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2625,
              "end": 2631
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2633,
          "end": 2642,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2634,
            "end": 2642,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2636,
              "end": 2642
            }
          }
        }
      ],
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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2679,
        "end": 2682,
        "decorators": [],
        "name": "f16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2689,
          "end": 2693,
          "decorators": [],
          "name": "a",
          "optional": false,
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2695,
          "end": 2699,
          "decorators": [],
          "name": "b",
          "optional": false,
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
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ],
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
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 2706,
              "end": 2707,
              "typeName": {
                "type": "Identifier",
                "start": 2706,
                "end": 2707,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2682,
        "end": 2688,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2683,
            "end": 2684,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2683,
              "end": 2684,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2686,
            "end": 2687,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2686,
              "end": 2687,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2714,
            "end": 2717,
            "decorators": [],
            "name": "x20",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2720,
            "end": 2749,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2725,
                "end": 2740,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 2735,
                  "end": 2740,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 2735,
                    "end": 2736,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2739,
                    "end": 2740,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2726,
                    "end": 2727,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2729,
                    "end": 2730,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2742,
                "end": 2744,
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 2746,
                "end": 2748,
                "raw": "20",
                "value": 20
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2720,
              "end": 2724,
              "decorators": [],
              "name": "call",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2766,
            "end": 2769,
            "decorators": [],
            "name": "x21",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2772,
            "end": 2806,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 2777,
                "end": 2792,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 2787,
                  "end": 2792,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 2787,
                    "end": 2788,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2791,
                    "end": 2792,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2778,
                    "end": 2779,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 2781,
                    "end": 2782,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 2794,
                "end": 2796,
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 2798,
                "end": 2805,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2772,
              "end": 2776,
              "decorators": [],
              "name": "call",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2823,
            "end": 2826,
            "decorators": [],
            "name": "x22",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2829,
            "end": 2851,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2834,
                "end": 2837,
                "decorators": [],
                "name": "f15",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2839,
                "end": 2846,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 2848,
                "end": 2850,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2829,
              "end": 2833,
              "decorators": [],
              "name": "call",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2877,
            "end": 2880,
            "decorators": [],
            "name": "x23",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2883,
            "end": 2905,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2888,
                "end": 2891,
                "decorators": [],
                "name": "f16",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2893,
                "end": 2900,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 2902,
                "end": 2904,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2883,
              "end": 2887,
              "decorators": [],
              "name": "call",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2923,
            "end": 2926,
            "decorators": [],
            "name": "x24",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2929,
            "end": 2986,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2969,
                "end": 2972,
                "decorators": [],
                "name": "f16",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 2974,
                "end": 2981,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 2983,
                "end": 2985,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 2929,
              "end": 2933,
              "decorators": [],
              "name": "call",
              "optional": false
            },
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
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3013,
            "end": 3016,
            "decorators": [],
            "name": "x30",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3019,
            "end": 3045,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3025,
                "end": 3027,
                "decorators": [],
                "name": "sn",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 3029,
                "end": 3044,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 3039,
                  "end": 3044,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 3039,
                    "end": 3040,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 3043,
                    "end": 3044,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3030,
                    "end": 3031,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 3033,
                    "end": 3034,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3019,
              "end": 3024,
              "decorators": [],
              "name": "callr",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3062,
            "end": 3065,
            "decorators": [],
            "name": "x31",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3068,
            "end": 3082,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3074,
                "end": 3076,
                "decorators": [],
                "name": "sn",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3078,
                "end": 3081,
                "decorators": [],
                "name": "f15",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3068,
              "end": 3073,
              "decorators": [],
              "name": "callr",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3108,
            "end": 3111,
            "decorators": [],
            "name": "x32",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3114,
            "end": 3128,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3120,
                "end": 3122,
                "decorators": [],
                "name": "sn",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3124,
                "end": 3127,
                "decorators": [],
                "name": "f16",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3114,
              "end": 3119,
              "decorators": [],
              "name": "callr",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 3151,
      "end": 3271,
      "async": false,
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
              "async": false,
              "body": {
                "type": "CallExpression",
                "start": 3255,
                "end": 3268,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 3257,
                    "end": 3258,
                    "decorators": [],
                    "name": "x",
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
                      "decorators": [],
                      "name": "rest",
                      "optional": false
                    }
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 3255,
                  "end": 3256,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 3240,
                  "end": 3250,
                  "argument": {
                    "type": "Identifier",
                    "start": 3243,
                    "end": 3247,
                    "decorators": [],
                    "name": "rest",
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3160,
        "end": 3164,
        "decorators": [],
        "name": "bind",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3192,
          "end": 3218,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3193,
            "end": 3218,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 3195,
              "end": 3218,
              "params": [
                {
                  "type": "Identifier",
                  "start": 3196,
                  "end": 3200,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 3202,
                  "end": 3212,
                  "argument": {
                    "type": "Identifier",
                    "start": 3205,
                    "end": 3209,
                    "decorators": [],
                    "name": "rest",
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
                        "decorators": [],
                        "name": "U",
                        "optional": false
                      }
                    }
                  }
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
                    "decorators": [],
                    "name": "V",
                    "optional": false
                  }
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3220,
          "end": 3224,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3164,
        "end": 3191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3165,
            "end": 3166,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3165,
              "end": 3166,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3168,
            "end": 3187,
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3168,
              "end": 3169,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3189,
            "end": 3190,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3189,
              "end": 3190,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3287,
            "end": 3338,
            "decorators": [],
            "name": "f20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3290,
              "end": 3338,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3292,
                "end": 3338,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3293,
                    "end": 3302,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3294,
                      "end": 3302,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3296,
                        "end": 3302
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3304,
                    "end": 3313,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3305,
                      "end": 3313,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3307,
                        "end": 3313
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3315,
                    "end": 3325,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3316,
                      "end": 3325,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3318,
                        "end": 3325
                      }
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3347,
            "end": 3350,
            "decorators": [],
            "name": "f21",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3353,
            "end": 3366,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3358,
                "end": 3361,
                "decorators": [],
                "name": "f20",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3363,
                "end": 3365,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3353,
              "end": 3357,
              "decorators": [],
              "name": "bind",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3414,
            "end": 3417,
            "decorators": [],
            "name": "f22",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3420,
            "end": 3438,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3425,
                "end": 3428,
                "decorators": [],
                "name": "f21",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3430,
                "end": 3437,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3420,
              "end": 3424,
              "decorators": [],
              "name": "bind",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3475,
            "end": 3478,
            "decorators": [],
            "name": "f23",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3481,
            "end": 3496,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3486,
                "end": 3489,
                "decorators": [],
                "name": "f22",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3491,
                "end": 3495,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3481,
              "end": 3485,
              "decorators": [],
              "name": "bind",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 3518,
      "end": 3541,
      "expression": {
        "type": "CallExpression",
        "start": 3518,
        "end": 3540,
        "arguments": [
          {
            "type": "Literal",
            "start": 3522,
            "end": 3524,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 3526,
            "end": 3533,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 3535,
            "end": 3539,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3518,
          "end": 3521,
          "decorators": [],
          "name": "f20",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3542,
      "end": 3561,
      "expression": {
        "type": "CallExpression",
        "start": 3542,
        "end": 3560,
        "arguments": [
          {
            "type": "Literal",
            "start": 3546,
            "end": 3553,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 3555,
            "end": 3559,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3542,
          "end": 3545,
          "decorators": [],
          "name": "f21",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3562,
      "end": 3572,
      "expression": {
        "type": "CallExpression",
        "start": 3562,
        "end": 3571,
        "arguments": [
          {
            "type": "Literal",
            "start": 3566,
            "end": 3570,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3562,
          "end": 3565,
          "decorators": [],
          "name": "f22",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3573,
      "end": 3579,
      "expression": {
        "type": "CallExpression",
        "start": 3573,
        "end": 3578,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 3573,
          "end": 3576,
          "decorators": [],
          "name": "f23",
          "optional": false
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3595,
            "end": 3648,
            "decorators": [],
            "name": "g20",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3598,
              "end": 3648,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 3600,
                "end": 3648,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3601,
                    "end": 3610,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3602,
                      "end": 3610,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3604,
                        "end": 3610
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3612,
                    "end": 3622,
                    "decorators": [],
                    "name": "y",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3614,
                      "end": 3622,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3616,
                        "end": 3622
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 3624,
                    "end": 3635,
                    "decorators": [],
                    "name": "z",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3626,
                      "end": 3635,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3628,
                        "end": 3635
                      }
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3657,
            "end": 3660,
            "decorators": [],
            "name": "g21",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3663,
            "end": 3676,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3668,
                "end": 3671,
                "decorators": [],
                "name": "g20",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3673,
                "end": 3675,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3663,
              "end": 3667,
              "decorators": [],
              "name": "bind",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3724,
            "end": 3727,
            "decorators": [],
            "name": "g22",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3730,
            "end": 3748,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3735,
                "end": 3738,
                "decorators": [],
                "name": "g21",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3740,
                "end": 3747,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3730,
              "end": 3734,
              "decorators": [],
              "name": "bind",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3785,
            "end": 3788,
            "decorators": [],
            "name": "g23",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3791,
            "end": 3806,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3796,
                "end": 3799,
                "decorators": [],
                "name": "g22",
                "optional": false
              },
              {
                "type": "Literal",
                "start": 3801,
                "end": 3805,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 3791,
              "end": 3795,
              "decorators": [],
              "name": "bind",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 3828,
      "end": 3851,
      "expression": {
        "type": "CallExpression",
        "start": 3828,
        "end": 3850,
        "arguments": [
          {
            "type": "Literal",
            "start": 3832,
            "end": 3834,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 3836,
            "end": 3843,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 3845,
            "end": 3849,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3828,
          "end": 3831,
          "decorators": [],
          "name": "g20",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3852,
      "end": 3869,
      "expression": {
        "type": "CallExpression",
        "start": 3852,
        "end": 3868,
        "arguments": [
          {
            "type": "Literal",
            "start": 3856,
            "end": 3858,
            "raw": "42",
            "value": 42
          },
          {
            "type": "Literal",
            "start": 3860,
            "end": 3867,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3852,
          "end": 3855,
          "decorators": [],
          "name": "g20",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3870,
      "end": 3878,
      "expression": {
        "type": "CallExpression",
        "start": 3870,
        "end": 3877,
        "arguments": [
          {
            "type": "Literal",
            "start": 3874,
            "end": 3876,
            "raw": "42",
            "value": 42
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3870,
          "end": 3873,
          "decorators": [],
          "name": "g20",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3879,
      "end": 3898,
      "expression": {
        "type": "CallExpression",
        "start": 3879,
        "end": 3897,
        "arguments": [
          {
            "type": "Literal",
            "start": 3883,
            "end": 3890,
            "raw": "\"hello\"",
            "value": "hello"
          },
          {
            "type": "Literal",
            "start": 3892,
            "end": 3896,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3879,
          "end": 3882,
          "decorators": [],
          "name": "g21",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3899,
      "end": 3912,
      "expression": {
        "type": "CallExpression",
        "start": 3899,
        "end": 3911,
        "arguments": [
          {
            "type": "Literal",
            "start": 3903,
            "end": 3910,
            "raw": "\"hello\"",
            "value": "hello"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3899,
          "end": 3902,
          "decorators": [],
          "name": "g21",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3913,
      "end": 3919,
      "expression": {
        "type": "CallExpression",
        "start": 3913,
        "end": 3918,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 3913,
          "end": 3916,
          "decorators": [],
          "name": "g21",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3920,
      "end": 3930,
      "expression": {
        "type": "CallExpression",
        "start": 3920,
        "end": 3929,
        "arguments": [
          {
            "type": "Literal",
            "start": 3924,
            "end": 3928,
            "raw": "true",
            "value": true
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 3920,
          "end": 3923,
          "decorators": [],
          "name": "g22",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3931,
      "end": 3937,
      "expression": {
        "type": "CallExpression",
        "start": 3931,
        "end": 3936,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 3931,
          "end": 3934,
          "decorators": [],
          "name": "g22",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3938,
      "end": 3944,
      "expression": {
        "type": "CallExpression",
        "start": 3938,
        "end": 3943,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 3938,
          "end": 3941,
          "decorators": [],
          "name": "g23",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 3946,
      "end": 4020,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 3963,
        "end": 3966,
        "decorators": [],
        "name": "f30",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3999,
          "end": 4003,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "RestElement",
          "start": 4005,
          "end": 4015,
          "argument": {
            "type": "Identifier",
            "start": 4008,
            "end": 4012,
            "decorators": [],
            "name": "args",
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3966,
        "end": 3998,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3967,
            "end": 3968,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3967,
              "end": 3968,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3970,
            "end": 3997,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 3980,
              "end": 3997,
              "elementType": {
                "type": "TSFunctionType",
                "start": 3981,
                "end": 3994,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3982,
                    "end": 3986,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3970,
              "end": 3971,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4028,
            "end": 4031,
            "decorators": [],
            "name": "c30",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 4034,
            "end": 4066,
            "arguments": [
              {
                "type": "Literal",
                "start": 4038,
                "end": 4040,
                "raw": "42",
                "value": 42
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4042,
                "end": 4053,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 4047,
                  "end": 4053,
                  "operator": "+",
                  "left": {
                    "type": "Literal",
                    "start": 4047,
                    "end": 4049,
                    "raw": "\"\"",
                    "value": ""
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 4052,
                    "end": 4053,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4042,
                    "end": 4043,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 4055,
                "end": 4065,
                "async": false,
                "body": {
                  "type": "BinaryExpression",
                  "start": 4060,
                  "end": 4065,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 4060,
                    "end": 4061,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 4064,
                    "end": 4065,
                    "raw": "1",
                    "value": 1
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4055,
                    "end": 4056,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 4034,
              "end": 4037,
              "decorators": [],
              "name": "f30",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4120,
      "end": 4186,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4125,
        "end": 4128,
        "decorators": [],
        "name": "T01",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4131,
        "end": 4185,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4141,
          "end": 4185,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4142,
              "end": 4184,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4143,
                  "end": 4152,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4144,
                    "end": 4152,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4146,
                      "end": 4152
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4154,
                  "end": 4163,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4155,
                    "end": 4163,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4157,
                      "end": 4163
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4165,
                  "end": 4175,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4166,
                    "end": 4175,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4168,
                      "end": 4175
                    }
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4131,
          "end": 4141,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4187,
      "end": 4255,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4192,
        "end": 4195,
        "decorators": [],
        "name": "T02",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4198,
        "end": 4254,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4208,
          "end": 4254,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4209,
              "end": 4253,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4210,
                  "end": 4244,
                  "argument": {
                    "type": "Identifier",
                    "start": 4213,
                    "end": 4217,
                    "decorators": [],
                    "name": "args",
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
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4198,
          "end": 4208,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4256,
      "end": 4337,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4261,
        "end": 4264,
        "decorators": [],
        "name": "T03",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4267,
        "end": 4336,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 4294,
                  "end": 4303,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4295,
                    "end": 4303,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 4297,
                      "end": 4303
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4305,
                  "end": 4314,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4306,
                    "end": 4314,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4308,
                      "end": 4314
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 4316,
                  "end": 4326,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4317,
                    "end": 4326,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 4319,
                      "end": 4326
                    }
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4267,
          "end": 4288,
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4338,
      "end": 4421,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4343,
        "end": 4346,
        "decorators": [],
        "name": "T04",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4349,
        "end": 4420,
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 4376,
                  "end": 4410,
                  "argument": {
                    "type": "Identifier",
                    "start": 4379,
                    "end": 4383,
                    "decorators": [],
                    "name": "args",
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
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4349,
          "end": 4370,
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4422,
      "end": 4471,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4427,
        "end": 4430,
        "decorators": [],
        "name": "T05",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4436,
        "end": 4470,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4446,
          "end": 4470,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4447,
              "end": 4469,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4448,
                  "end": 4460,
                  "argument": {
                    "type": "Identifier",
                    "start": 4451,
                    "end": 4455,
                    "decorators": [],
                    "name": "args",
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
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4436,
          "end": 4446,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4431,
              "end": 4432,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4472,
      "end": 4535,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4477,
        "end": 4480,
        "decorators": [],
        "name": "T06",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4486,
        "end": 4534,
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 4513,
                  "end": 4524,
                  "argument": {
                    "type": "Identifier",
                    "start": 4516,
                    "end": 4520,
                    "decorators": [],
                    "name": "args",
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
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4486,
          "end": 4507,
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4481,
              "end": 4482,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4536,
      "end": 4597,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4541,
        "end": 4544,
        "decorators": [],
        "name": "T07",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4564,
        "end": 4596,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4574,
          "end": 4596,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 4575,
              "end": 4595,
              "params": [
                {
                  "type": "RestElement",
                  "start": 4576,
                  "end": 4586,
                  "argument": {
                    "type": "Identifier",
                    "start": 4579,
                    "end": 4583,
                    "decorators": [],
                    "name": "args",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4564,
          "end": 4574,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
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
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4545,
              "end": 4546,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4598,
      "end": 4674,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4603,
        "end": 4606,
        "decorators": [],
        "name": "T08",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4626,
        "end": 4673,
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 4653,
                  "end": 4663,
                  "argument": {
                    "type": "Identifier",
                    "start": 4656,
                    "end": 4660,
                    "decorators": [],
                    "name": "args",
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
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
        },
        "typeName": {
          "type": "Identifier",
          "start": 4626,
          "end": 4647,
          "decorators": [],
          "name": "ConstructorParameters",
          "optional": false
        }
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
            "const": false,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4607,
              "end": 4608,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4675,
      "end": 4707,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4680,
        "end": 4683,
        "decorators": [],
        "name": "T09",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4686,
        "end": 4706,
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
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4686,
          "end": 4696,
          "decorators": [],
          "name": "Parameters",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4709,
      "end": 4824,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4714,
        "end": 4721,
        "decorators": [],
        "name": "Record1",
        "optional": false
      },
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
            "key": {
              "type": "Identifier",
              "start": 4728,
              "end": 4732,
              "decorators": [],
              "name": "move",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                          "raw": "'left'",
                          "value": "left"
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
                          "raw": "'right'",
                          "value": "right"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4764,
            "end": 4794,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4764,
              "end": 4768,
              "decorators": [],
              "name": "jump",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                          "raw": "'up'",
                          "value": "up"
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
                          "raw": "'down'",
                          "value": "down"
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4797,
            "end": 4810,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4797,
              "end": 4801,
              "decorators": [],
              "name": "stop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4801,
              "end": 4809,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4803,
                "end": 4809
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 4813,
            "end": 4822,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4813,
              "end": 4817,
              "decorators": [],
              "name": "done",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4826,
      "end": 4947,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4831,
        "end": 4840,
        "decorators": [],
        "name": "EventType",
        "optional": false
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
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 4850,
              "end": 4854,
              "decorators": [],
              "name": "emit",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 4884,
                "end": 4888,
                "decorators": [],
                "name": "e",
                "optional": false,
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
                      "decorators": [],
                      "name": "K",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 4890,
                "end": 4936,
                "argument": {
                  "type": "Identifier",
                  "start": 4893,
                  "end": 4900,
                  "decorators": [],
                  "name": "payload",
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
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 4904,
                        "end": 4905,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4904,
                          "end": 4905,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 4902,
                        "end": 4903,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4902,
                          "end": 4903,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
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
                    "falseType": {
                      "type": "TSTupleType",
                      "start": 4930,
                      "end": 4936,
                      "elementTypes": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 4931,
                          "end": 4935,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 4933,
                            "end": 4934,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4933,
                              "end": 4934,
                              "decorators": [],
                              "name": "K",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 4931,
                            "end": 4932,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4931,
                              "end": 4932,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "trueType": {
                      "type": "TSIndexedAccessType",
                      "start": 4923,
                      "end": 4927,
                      "indexType": {
                        "type": "TSTypeReference",
                        "start": 4925,
                        "end": 4926,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4925,
                          "end": 4926,
                          "decorators": [],
                          "name": "K",
                          "optional": false
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 4923,
                        "end": 4924,
                        "typeName": {
                          "type": "Identifier",
                          "start": 4923,
                          "end": 4924,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 4854,
              "end": 4883,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 4855,
                  "end": 4882,
                  "const": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 4855,
                    "end": 4856,
                    "decorators": [],
                    "name": "K",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4841,
              "end": 4842,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4961,
            "end": 4987,
            "decorators": [],
            "name": "events",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4967,
              "end": 4987,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4969,
                "end": 4987,
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
                        "decorators": [],
                        "name": "Record1",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 4969,
                  "end": 4978,
                  "decorators": [],
                  "name": "EventType",
                  "optional": false
                }
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
      "start": 4989,
      "end": 5021,
      "expression": {
        "type": "CallExpression",
        "start": 4989,
        "end": 5020,
        "arguments": [
          {
            "type": "Literal",
            "start": 5001,
            "end": 5007,
            "raw": "'move'",
            "value": "move"
          },
          {
            "type": "Literal",
            "start": 5009,
            "end": 5011,
            "raw": "10",
            "value": 10
          },
          {
            "type": "Literal",
            "start": 5013,
            "end": 5019,
            "raw": "'left'",
            "value": "left"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 4989,
          "end": 5000,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 4989,
            "end": 4995,
            "decorators": [],
            "name": "events",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 4996,
            "end": 5000,
            "decorators": [],
            "name": "emit",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5022,
      "end": 5052,
      "expression": {
        "type": "CallExpression",
        "start": 5022,
        "end": 5051,
        "arguments": [
          {
            "type": "Literal",
            "start": 5034,
            "end": 5040,
            "raw": "'jump'",
            "value": "jump"
          },
          {
            "type": "Literal",
            "start": 5042,
            "end": 5044,
            "raw": "20",
            "value": 20
          },
          {
            "type": "Literal",
            "start": 5046,
            "end": 5050,
            "raw": "'up'",
            "value": "up"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 5022,
          "end": 5033,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5022,
            "end": 5028,
            "decorators": [],
            "name": "events",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5029,
            "end": 5033,
            "decorators": [],
            "name": "emit",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5053,
      "end": 5081,
      "expression": {
        "type": "CallExpression",
        "start": 5053,
        "end": 5080,
        "arguments": [
          {
            "type": "Literal",
            "start": 5065,
            "end": 5071,
            "raw": "'stop'",
            "value": "stop"
          },
          {
            "type": "Literal",
            "start": 5073,
            "end": 5079,
            "raw": "'Bye!'",
            "value": "Bye!"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 5053,
          "end": 5064,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5053,
            "end": 5059,
            "decorators": [],
            "name": "events",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5060,
            "end": 5064,
            "decorators": [],
            "name": "emit",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5082,
      "end": 5102,
      "expression": {
        "type": "CallExpression",
        "start": 5082,
        "end": 5101,
        "arguments": [
          {
            "type": "Literal",
            "start": 5094,
            "end": 5100,
            "raw": "'done'",
            "value": "done"
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 5082,
          "end": 5093,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 5082,
            "end": 5088,
            "decorators": [],
            "name": "events",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 5089,
            "end": 5093,
            "decorators": [],
            "name": "emit",
            "optional": false
          }
        },
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5138,
            "end": 5168,
            "decorators": [],
            "name": "ff1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5141,
              "end": 5168,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5143,
                "end": 5168,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 5144,
                    "end": 5159,
                    "argument": {
                      "type": "Identifier",
                      "start": 5148,
                      "end": 5152,
                      "decorators": [],
                      "name": "args",
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
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5183,
            "end": 5198,
            "decorators": [],
            "name": "ff2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5186,
              "end": 5198,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5188,
                "end": 5198,
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5212,
            "end": 5238,
            "decorators": [],
            "name": "ff3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5215,
              "end": 5238,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5217,
                "end": 5238,
                "params": [
                  {
                    "type": "RestElement",
                    "start": 5218,
                    "end": 5229,
                    "argument": {
                      "type": "Identifier",
                      "start": 5221,
                      "end": 5225,
                      "decorators": [],
                      "name": "args",
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
                    }
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
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 5252,
            "end": 5275,
            "decorators": [],
            "name": "ff4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5255,
              "end": 5275,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 5257,
                "end": 5275,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 5258,
                    "end": 5266,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 5259,
                      "end": 5266,
                      "typeAnnotation": {
                        "type": "TSNeverKeyword",
                        "start": 5261,
                        "end": 5266
                      }
                    }
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
          "decorators": [],
          "name": "ff1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 5284,
          "end": 5287,
          "decorators": [],
          "name": "ff2",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "ff1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 5295,
          "end": 5298,
          "decorators": [],
          "name": "ff3",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "ff1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 5306,
          "end": 5309,
          "decorators": [],
          "name": "ff4",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
