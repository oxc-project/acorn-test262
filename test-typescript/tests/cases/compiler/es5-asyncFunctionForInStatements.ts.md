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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "c",
            "typeAnnotation": null,
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
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 61,
        "name": "forInStatement0",
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
        "start": 64,
        "end": 91,
        "body": [
          {
            "type": "ForInStatement",
            "start": 70,
            "end": 89,
            "left": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 83,
              "end": 89,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 85,
                  "end": 87,
                  "expression": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 86,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 93,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 123,
        "name": "forInStatement1",
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
        "start": 126,
        "end": 159,
        "body": [
          {
            "type": "ForInStatement",
            "start": 132,
            "end": 157,
            "left": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "AwaitExpression",
              "start": 142,
              "end": 149,
              "argument": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 151,
              "end": 157,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 153,
                  "end": 155,
                  "expression": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 154,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 161,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 176,
        "end": 191,
        "name": "forInStatement2",
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
        "start": 194,
        "end": 227,
        "body": [
          {
            "type": "ForInStatement",
            "start": 200,
            "end": 225,
            "left": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 210,
              "end": 211,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 213,
              "end": 225,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 215,
                  "end": 223,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 215,
                    "end": 222,
                    "argument": {
                      "type": "Identifier",
                      "start": 221,
                      "end": 222,
                      "name": "z",
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
      "start": 229,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 259,
        "name": "forInStatement3",
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
        "start": 262,
        "end": 299,
        "body": [
          {
            "type": "ForInStatement",
            "start": 268,
            "end": 297,
            "left": {
              "type": "MemberExpression",
              "start": 273,
              "end": 284,
              "object": {
                "type": "AwaitExpression",
                "start": 274,
                "end": 281,
                "argument": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "property": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 291,
              "end": 297,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 293,
                  "end": 295,
                  "expression": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 294,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 301,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 316,
        "end": 331,
        "name": "forInStatement4",
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
        "start": 334,
        "end": 369,
        "body": [
          {
            "type": "ForInStatement",
            "start": 340,
            "end": 367,
            "left": {
              "type": "MemberExpression",
              "start": 345,
              "end": 348,
              "object": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "AwaitExpression",
              "start": 352,
              "end": 359,
              "argument": {
                "type": "Identifier",
                "start": 358,
                "end": 359,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 361,
              "end": 367,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 363,
                  "end": 365,
                  "expression": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 371,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 386,
        "end": 401,
        "name": "forInStatement5",
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
        "start": 404,
        "end": 439,
        "body": [
          {
            "type": "ForInStatement",
            "start": 410,
            "end": 437,
            "left": {
              "type": "MemberExpression",
              "start": 415,
              "end": 418,
              "object": {
                "type": "Identifier",
                "start": 415,
                "end": 416,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 417,
                "end": 418,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 425,
              "end": 437,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 427,
                  "end": 435,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 427,
                    "end": 434,
                    "argument": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "name": "z",
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
      "start": 441,
      "end": 505,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 471,
        "name": "forInStatement6",
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
        "start": 474,
        "end": 505,
        "body": [
          {
            "type": "ForInStatement",
            "start": 480,
            "end": 503,
            "left": {
              "type": "VariableDeclaration",
              "start": 485,
              "end": 490,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 489,
                  "end": 490,
                  "id": {
                    "type": "Identifier",
                    "start": 489,
                    "end": 490,
                    "name": "a",
                    "typeAnnotation": null,
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
            "right": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 497,
              "end": 503,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 499,
                  "end": 501,
                  "expression": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 507,
      "end": 577,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 537,
        "name": "forInStatement7",
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
        "start": 540,
        "end": 577,
        "body": [
          {
            "type": "ForInStatement",
            "start": 546,
            "end": 575,
            "left": {
              "type": "VariableDeclaration",
              "start": 551,
              "end": 556,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 555,
                  "end": 556,
                  "id": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 556,
                    "name": "b",
                    "typeAnnotation": null,
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
            "right": {
              "type": "AwaitExpression",
              "start": 560,
              "end": 567,
              "argument": {
                "type": "Identifier",
                "start": 566,
                "end": 567,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 569,
              "end": 575,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 571,
                  "end": 573,
                  "expression": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 572,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "start": 579,
      "end": 649,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 609,
        "name": "forInStatement8",
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
        "start": 612,
        "end": 649,
        "body": [
          {
            "type": "ForInStatement",
            "start": 618,
            "end": 647,
            "left": {
              "type": "VariableDeclaration",
              "start": 623,
              "end": 628,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 627,
                  "end": 628,
                  "id": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 628,
                    "name": "c",
                    "typeAnnotation": null,
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
            "right": {
              "type": "Identifier",
              "start": 632,
              "end": 633,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 635,
              "end": 647,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 645,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 637,
                    "end": 644,
                    "argument": {
                      "type": "Identifier",
                      "start": 643,
                      "end": 644,
                      "name": "z",
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
