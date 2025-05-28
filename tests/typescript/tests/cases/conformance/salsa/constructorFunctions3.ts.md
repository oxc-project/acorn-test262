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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 17,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 20,
        "end": 45,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 26,
            "end": 43,
            "expression": {
              "type": "AssignmentExpression",
              "start": 26,
              "end": 43,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 26,
                "end": 32,
                "object": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "property": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 32,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 35,
                "end": 43,
                "value": "simple",
                "raw": "'simple'"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 46,
      "end": 69,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 50,
          "end": 68,
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
            "callee": {
              "type": "Identifier",
              "start": 58,
              "end": 66,
              "decorators": [],
              "name": "Instance",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 79,
      "expression": {
        "type": "Identifier",
        "start": 70,
        "end": 78,
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 82,
      "expression": {
        "type": "Identifier",
        "start": 80,
        "end": 81,
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 84,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 93,
        "end": 102,
        "decorators": [],
        "name": "StaticToo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 136,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 134,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 134,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 111,
                "end": 117,
                "object": {
                  "type": "ThisExpression",
                  "start": 111,
                  "end": 115
                },
                "property": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 120,
                "end": 134,
                "value": "more complex",
                "raw": "'more complex'"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 137,
      "end": 163,
      "expression": {
        "type": "AssignmentExpression",
        "start": 137,
        "end": 163,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 137,
          "end": 155,
          "object": {
            "type": "Identifier",
            "start": 137,
            "end": 146,
            "decorators": [],
            "name": "StaticToo",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 147,
            "end": 155,
            "decorators": [],
            "name": "property",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 158,
          "end": 163,
          "value": "yep",
          "raw": "'yep'"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 188,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 187,
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
            "callee": {
              "type": "Identifier",
              "start": 176,
              "end": 185,
              "decorators": [],
              "name": "StaticToo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 189,
      "end": 191,
      "expression": {
        "type": "Identifier",
        "start": 189,
        "end": 190,
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 202,
      "expression": {
        "type": "Identifier",
        "start": 192,
        "end": 201,
        "decorators": [],
        "name": "StaticToo",
        "optional": false,
        "typeAnnotation": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 286,
      "id": {
        "type": "Identifier",
        "start": 222,
        "end": 223,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 286,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 233,
            "end": 243,
            "expression": {
              "type": "AssignmentExpression",
              "start": 233,
              "end": 243,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 233,
                "end": 239,
                "object": {
                  "type": "ThisExpression",
                  "start": 233,
                  "end": 237
                },
                "property": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 239,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 242,
                "end": 243,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 269,
            "end": 284,
            "expression": {
              "type": "AssignmentExpression",
              "start": 269,
              "end": 284,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 269,
                "end": 280,
                "object": {
                  "type": "ThisExpression",
                  "start": 269,
                  "end": 273
                },
                "property": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 280,
                  "decorators": [],
                  "name": "second",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 283,
                "end": 284,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 367,
      "expression": {
        "type": "AssignmentExpression",
        "start": 312,
        "end": 367,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 312,
          "end": 325,
          "object": {
            "type": "MemberExpression",
            "start": 312,
            "end": 323,
            "object": {
              "type": "Identifier",
              "start": 312,
              "end": 313,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 314,
              "end": 323,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 328,
          "end": 367,
          "id": {
            "type": "Identifier",
            "start": 337,
            "end": 338,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 356,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 359,
                    "end": 365,
                    "object": {
                      "type": "ThisExpression",
                      "start": 359,
                      "end": 363
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 393,
      "end": 433,
      "expression": {
        "type": "AssignmentExpression",
        "start": 393,
        "end": 433,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 393,
          "end": 396,
          "object": {
            "type": "Identifier",
            "start": 393,
            "end": 394,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 395,
            "end": 396,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 399,
          "end": 433,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 409,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
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
                  "left": {
                    "type": "Identifier",
                    "start": 426,
                    "end": 427,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "start": 430,
                    "end": 431,
                    "value": 1,
                    "raw": "1"
                  }
                }
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 449,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 449,
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
            "callee": {
              "type": "Identifier",
              "start": 446,
              "end": 447,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 456,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 456,
        "callee": {
          "type": "MemberExpression",
          "start": 450,
          "end": 453,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 451,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 452,
            "end": 453,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 454,
            "end": 455,
            "value": 3,
            "raw": "3"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 457,
      "end": 463,
      "expression": {
        "type": "CallExpression",
        "start": 457,
        "end": 463,
        "callee": {
          "type": "MemberExpression",
          "start": 457,
          "end": 460,
          "object": {
            "type": "Identifier",
            "start": 457,
            "end": 458,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 459,
            "end": 460,
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 461,
            "end": 462,
            "value": 2,
            "raw": "2"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 476,
      "expression": {
        "type": "AssignmentExpression",
        "start": 464,
        "end": 476,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 464,
          "end": 472,
          "object": {
            "type": "Identifier",
            "start": 464,
            "end": 465,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 472,
            "decorators": [],
            "name": "second",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 475,
          "end": 476,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
