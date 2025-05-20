__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 649,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 91,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 91,
        "body": [
          {
            "type": "ForInStatement",
            "start": 70,
            "end": 89,
            "body": {
              "type": "BlockStatement",
              "start": 83,
              "end": 89,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 87,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "y",
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
        "start": 46,
        "end": 61,
        "decorators": [],
        "name": "forInStatement0",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 159,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 159,
        "body": [
          {
            "type": "ForInStatement",
            "start": 132,
            "end": 157,
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 155,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "AwaitExpression",
              "start": 142,
              "end": 149,
              "argument": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "y",
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
        "start": 108,
        "end": 123,
        "decorators": [],
        "name": "forInStatement1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 161,
      "end": 227,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 194,
        "end": 227,
        "body": [
          {
            "type": "ForInStatement",
            "start": 200,
            "end": 225,
            "body": {
              "type": "BlockStatement",
              "start": 213,
              "end": 225,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 223,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 215,
                    "end": 222,
                    "argument": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "decorators": [],
              "name": "y",
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
        "start": 176,
        "end": 191,
        "decorators": [],
        "name": "forInStatement2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 229,
      "end": 299,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 262,
        "end": 299,
        "body": [
          {
            "type": "ForInStatement",
            "start": 268,
            "end": 297,
            "body": {
              "type": "BlockStatement",
              "start": 291,
              "end": 297,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 293,
                  "end": 295,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "MemberExpression",
              "start": 273,
              "end": 284,
              "computed": false,
              "object": {
                "type": "AwaitExpression",
                "start": 274,
                "end": 281,
                "argument": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "y",
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
        "start": 244,
        "end": 259,
        "decorators": [],
        "name": "forInStatement3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 301,
      "end": 369,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 334,
        "end": 369,
        "body": [
          {
            "type": "ForInStatement",
            "start": 340,
            "end": 367,
            "body": {
              "type": "BlockStatement",
              "start": 361,
              "end": 367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 363,
                  "end": 365,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "MemberExpression",
              "start": 345,
              "end": 348,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "AwaitExpression",
              "start": 352,
              "end": 359,
              "argument": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "decorators": [],
                "name": "y",
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
        "start": 316,
        "end": 331,
        "decorators": [],
        "name": "forInStatement4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 371,
      "end": 439,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 404,
        "end": 439,
        "body": [
          {
            "type": "ForInStatement",
            "start": 410,
            "end": 437,
            "body": {
              "type": "BlockStatement",
              "start": 425,
              "end": 437,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 427,
                  "end": 435,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 427,
                    "end": 434,
                    "argument": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "MemberExpression",
              "start": 415,
              "end": 418,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "right": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "y",
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
        "start": 386,
        "end": 401,
        "decorators": [],
        "name": "forInStatement5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 441,
      "end": 505,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 474,
        "end": 505,
        "body": [
          {
            "type": "ForInStatement",
            "start": 480,
            "end": 503,
            "body": {
              "type": "BlockStatement",
              "start": 497,
              "end": 503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 499,
                  "end": 501,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 485,
              "end": 490,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 489,
                  "end": 490,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "decorators": [],
              "name": "y",
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
        "start": 456,
        "end": 471,
        "decorators": [],
        "name": "forInStatement6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 507,
      "end": 577,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 540,
        "end": 577,
        "body": [
          {
            "type": "ForInStatement",
            "start": 546,
            "end": 575,
            "body": {
              "type": "BlockStatement",
              "start": 569,
              "end": 575,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 571,
                  "end": 573,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 551,
              "end": 556,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 555,
                  "end": 556,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 556,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "AwaitExpression",
              "start": 560,
              "end": 567,
              "argument": {
                "type": "Identifier",
                "start": 566,
                "end": 567,
                "decorators": [],
                "name": "y",
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
        "start": 522,
        "end": 537,
        "decorators": [],
        "name": "forInStatement7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 579,
      "end": 649,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 612,
        "end": 649,
        "body": [
          {
            "type": "ForInStatement",
            "start": 618,
            "end": 647,
            "body": {
              "type": "BlockStatement",
              "start": 635,
              "end": 647,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 645,
                  "directive": null,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 637,
                    "end": 644,
                    "argument": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 623,
              "end": 628,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 627,
                  "end": 628,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "right": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "decorators": [],
              "name": "y",
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
        "start": 594,
        "end": 609,
        "decorators": [],
        "name": "forInStatement8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
