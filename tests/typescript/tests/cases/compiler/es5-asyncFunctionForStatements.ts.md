__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 492,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
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
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 90,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 59,
        "decorators": [],
        "name": "forStatement0",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 90,
        "body": [
          {
            "type": "ForStatement",
            "start": 68,
            "end": 88,
            "init": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "test": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "Identifier",
              "start": 79,
              "end": 80,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 88,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 84,
                  "end": 86,
                  "expression": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 120,
        "decorators": [],
        "name": "forStatement1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 157,
        "body": [
          {
            "type": "ForStatement",
            "start": 129,
            "end": 155,
            "init": {
              "type": "AwaitExpression",
              "start": 134,
              "end": 141,
              "argument": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "test": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 149,
              "end": 155,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 151,
                  "end": 153,
                  "expression": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 159,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 187,
        "decorators": [],
        "name": "forStatement2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 190,
        "end": 224,
        "body": [
          {
            "type": "ForStatement",
            "start": 196,
            "end": 222,
            "init": {
              "type": "Identifier",
              "start": 201,
              "end": 202,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "test": {
              "type": "AwaitExpression",
              "start": 204,
              "end": 211,
              "argument": {
                "type": "Identifier",
                "start": 210,
                "end": 211,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "update": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 216,
              "end": 222,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 218,
                  "end": 220,
                  "expression": {
                    "type": "Identifier",
                    "start": 218,
                    "end": 219,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 226,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 254,
        "decorators": [],
        "name": "forStatement3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 291,
        "body": [
          {
            "type": "ForStatement",
            "start": 263,
            "end": 289,
            "init": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "test": {
              "type": "Identifier",
              "start": 271,
              "end": 272,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "AwaitExpression",
              "start": 274,
              "end": 281,
              "argument": {
                "type": "Identifier",
                "start": 280,
                "end": 281,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 283,
              "end": 289,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 285,
                  "end": 287,
                  "expression": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 286,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 293,
      "end": 358,
      "id": {
        "type": "Identifier",
        "start": 308,
        "end": 321,
        "decorators": [],
        "name": "forStatement4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 324,
        "end": 358,
        "body": [
          {
            "type": "ForStatement",
            "start": 330,
            "end": 356,
            "init": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "test": {
              "type": "Identifier",
              "start": 338,
              "end": 339,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "Identifier",
              "start": 341,
              "end": 342,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 344,
              "end": 356,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 346,
                  "end": 354,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 346,
                    "end": 353,
                    "argument": {
                      "type": "Identifier",
                      "start": 352,
                      "end": 353,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 360,
      "end": 423,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 388,
        "decorators": [],
        "name": "forStatement5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 391,
        "end": 423,
        "body": [
          {
            "type": "ForStatement",
            "start": 397,
            "end": 421,
            "init": {
              "type": "VariableDeclaration",
              "start": 402,
              "end": 407,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 406,
                  "end": 407,
                  "id": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "Identifier",
              "start": 412,
              "end": 413,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 415,
              "end": 421,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 417,
                  "end": 419,
                  "expression": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 425,
      "end": 492,
      "id": {
        "type": "Identifier",
        "start": 440,
        "end": 453,
        "decorators": [],
        "name": "forStatement6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 456,
        "end": 492,
        "body": [
          {
            "type": "ForStatement",
            "start": 462,
            "end": 490,
            "init": {
              "type": "VariableDeclaration",
              "start": 467,
              "end": 476,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 471,
                  "end": 476,
                  "id": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 476,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "Identifier",
              "start": 478,
              "end": 479,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "update": {
              "type": "Identifier",
              "start": 481,
              "end": 482,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "BlockStatement",
              "start": 484,
              "end": 490,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 486,
                  "end": 488,
                  "expression": {
                    "type": "Identifier",
                    "start": 486,
                    "end": 487,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
