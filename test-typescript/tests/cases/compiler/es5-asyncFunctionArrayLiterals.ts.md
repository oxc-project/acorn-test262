__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 515,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 23,
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
            "optional": false
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
            "optional": false
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
            "optional": false
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
            "optional": false
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 25,
      "end": 81,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 56,
        "end": 81,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 62,
            "end": 79,
            "expression": {
              "type": "AssignmentExpression",
              "start": 62,
              "end": 78,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 62,
                "end": 63,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 66,
                "end": 78,
                "elements": [
                  {
                    "type": "AwaitExpression",
                    "start": 67,
                    "end": 74,
                    "argument": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 74,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ]
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
        "start": 40,
        "end": 53,
        "decorators": [],
        "name": "arrayLiteral0",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 139,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 114,
        "end": 139,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 120,
            "end": 137,
            "expression": {
              "type": "AssignmentExpression",
              "start": 120,
              "end": 136,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 124,
                "end": 136,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 125,
                    "end": 126,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "AwaitExpression",
                    "start": 128,
                    "end": 135,
                    "argument": {
                      "type": "Identifier",
                      "start": 134,
                      "end": 135,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                ]
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
        "start": 98,
        "end": 111,
        "decorators": [],
        "name": "arrayLiteral1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 141,
      "end": 202,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 172,
        "end": 202,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 178,
            "end": 200,
            "expression": {
              "type": "AssignmentExpression",
              "start": 178,
              "end": 199,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 182,
                "end": 199,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 183,
                    "end": 195,
                    "argument": {
                      "type": "AwaitExpression",
                      "start": 187,
                      "end": 194,
                      "argument": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 197,
                    "end": 198,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                ]
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
        "start": 156,
        "end": 169,
        "decorators": [],
        "name": "arrayLiteral2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 263,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 235,
        "end": 263,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 241,
            "end": 261,
            "expression": {
              "type": "AssignmentExpression",
              "start": 241,
              "end": 260,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 245,
                "end": 260,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 246,
                    "end": 250,
                    "argument": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 250,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  },
                  {
                    "type": "AwaitExpression",
                    "start": 252,
                    "end": 259,
                    "argument": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                ]
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
        "start": 219,
        "end": 232,
        "decorators": [],
        "name": "arrayLiteral3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 265,
      "end": 324,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 296,
        "end": 324,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 302,
            "end": 322,
            "expression": {
              "type": "AssignmentExpression",
              "start": 302,
              "end": 321,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 306,
                "end": 321,
                "elements": [
                  {
                    "type": "AwaitExpression",
                    "start": 307,
                    "end": 314,
                    "argument": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 314,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  },
                  {
                    "type": "SpreadElement",
                    "start": 316,
                    "end": 320,
                    "argument": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 320,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                ]
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
        "start": 280,
        "end": 293,
        "decorators": [],
        "name": "arrayLiteral4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 326,
      "end": 387,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 357,
        "end": 387,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 363,
            "end": 385,
            "expression": {
              "type": "AssignmentExpression",
              "start": 363,
              "end": 384,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 363,
                "end": 364,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 367,
                "end": 384,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "SpreadElement",
                    "start": 371,
                    "end": 383,
                    "argument": {
                      "type": "AwaitExpression",
                      "start": 375,
                      "end": 382,
                      "argument": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      }
                    }
                  }
                ]
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
        "start": 341,
        "end": 354,
        "decorators": [],
        "name": "arrayLiteral5",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 389,
      "end": 448,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 420,
        "end": 448,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 426,
            "end": 446,
            "expression": {
              "type": "AssignmentExpression",
              "start": 426,
              "end": 445,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 426,
                "end": 427,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 430,
                "end": 445,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 431,
                    "end": 432,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  {
                    "type": "AwaitExpression",
                    "start": 434,
                    "end": 441,
                    "argument": {
                      "type": "Identifier",
                      "start": 440,
                      "end": 441,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                ]
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
        "start": 404,
        "end": 417,
        "decorators": [],
        "name": "arrayLiteral6",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 450,
      "end": 515,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 481,
        "end": 515,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 487,
            "end": 513,
            "expression": {
              "type": "AssignmentExpression",
              "start": 487,
              "end": 512,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 491,
                "end": 512,
                "elements": [
                  {
                    "type": "AwaitExpression",
                    "start": 492,
                    "end": 499,
                    "argument": {
                      "type": "Identifier",
                      "start": 498,
                      "end": 499,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 501,
                    "end": 502,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  },
                  {
                    "type": "AwaitExpression",
                    "start": 504,
                    "end": 511,
                    "argument": {
                      "type": "Identifier",
                      "start": 510,
                      "end": 511,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ]
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
        "start": 465,
        "end": 478,
        "decorators": [],
        "name": "arrayLiteral7",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
