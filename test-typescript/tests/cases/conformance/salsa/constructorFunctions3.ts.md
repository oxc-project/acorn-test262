__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 476,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 45,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 45,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 26,
            "end": 43,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 26,
              "end": 43,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 26,
                "end": 32,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 35,
                "end": 43,
                "raw": "'simple'",
                "value": "simple"
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
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 50,
            "end": 51,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 54,
            "end": 68,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "decorators": [],
              "name": "Instance",
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
      "start": 70,
      "end": 79,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 82,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 136,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 136,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 134,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 117,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 111,
                  "end": 115
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 120,
                "end": 134,
                "raw": "'more complex'",
                "value": "more complex"
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
        "start": 93,
        "end": 102,
        "decorators": [],
        "name": "StaticToo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 163,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 137,
          "end": 155,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 146,
            "decorators": [],
            "name": "StaticToo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 155,
            "decorators": [],
            "name": "property",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 158,
          "end": 163,
          "raw": "'yep'",
          "value": "yep"
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 172,
            "end": 187,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 185,
              "decorators": [],
              "name": "StaticToo",
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
      "start": 189,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 189,
        "end": 190,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 202,
      "directive": null,
      "expression": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "decorators": [],
        "name": "StaticToo",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 286,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 286,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 243,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 233,
              "end": 243,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 233,
                "end": 239,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 233,
                  "end": 237
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 242,
                "end": 243,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 269,
            "end": 284,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 269,
              "end": 284,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 269,
                "end": 280,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 269,
                  "end": 273
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 280,
                  "decorators": [],
                  "name": "second",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 283,
                "end": 284,
                "raw": "1",
                "value": 1
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
        "start": 222,
        "end": 223,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 367,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 367,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 312,
          "end": 325,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 312,
            "end": 323,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 314,
              "end": 323,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 328,
          "end": 367,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 342,
            "end": 367,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 348,
                "end": 365,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 355,
                  "end": 365,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 359,
                    "end": 365,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 359,
                      "end": 363
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "params": [
            {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 433,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 433,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 393,
          "end": 396,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 393,
            "end": 394,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 399,
          "end": 433,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 413,
            "end": 433,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 419,
                "end": 431,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 426,
                  "end": 431,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 430,
                    "end": 431,
                    "raw": "1",
                    "value": 1
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
            "start": 408,
            "end": 409,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "params": [
            {
              "type": "Identifier",
              "start": 410,
              "end": 411,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 449,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 439,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 442,
            "end": 449,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "A",
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
      "start": 450,
      "end": 456,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 456,
        "arguments": [
          {
            "type": "Literal",
            "start": 454,
            "end": 455,
            "raw": "3",
            "value": 3
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 450,
          "end": 453,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 451,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 452,
            "end": 453,
            "decorators": [],
            "name": "z",
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
      "start": 457,
      "end": 463,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 457,
        "end": 463,
        "arguments": [
          {
            "type": "Literal",
            "start": 461,
            "end": 462,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 457,
          "end": 460,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 459,
            "end": 460,
            "decorators": [],
            "name": "t",
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
      "start": 464,
      "end": 476,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 464,
        "end": 476,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 464,
          "end": 472,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 472,
            "decorators": [],
            "name": "second",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 475,
          "end": 476,
          "raw": "1",
          "value": 1
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
