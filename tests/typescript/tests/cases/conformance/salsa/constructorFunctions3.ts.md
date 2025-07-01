__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 17
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 26,
                  "end": 30
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 32
                },
                "optional": false,
                "computed": false,
                "start": 26,
                "end": 32
              },
              "right": {
                "type": "Literal",
                "value": "simple",
                "raw": "'simple'",
                "start": 35,
                "end": 43
              },
              "start": 26,
              "end": 43
            },
            "directive": null,
            "start": 26,
            "end": 43
          }
        ],
        "start": 20,
        "end": 45
      },
      "expression": false,
      "start": 0,
      "end": 45
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Instance",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 66
            },
            "typeArguments": null,
            "arguments": [],
            "start": 54,
            "end": 68
          },
          "definite": false,
          "start": 50,
          "end": 68
        }
      ],
      "declare": false,
      "start": 46,
      "end": 69
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "Instance",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 78
      },
      "directive": null,
      "start": 70,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 81
      },
      "directive": null,
      "start": 80,
      "end": 82
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticToo",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 111,
                  "end": 115
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 117
                },
                "optional": false,
                "computed": false,
                "start": 111,
                "end": 117
              },
              "right": {
                "type": "Literal",
                "value": "more complex",
                "raw": "'more complex'",
                "start": 120,
                "end": 134
              },
              "start": 111,
              "end": 134
            },
            "directive": null,
            "start": 111,
            "end": 134
          }
        ],
        "start": 105,
        "end": 136
      },
      "expression": false,
      "start": 84,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "StaticToo",
            "optional": false,
            "typeAnnotation": null,
            "start": 137,
            "end": 146
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "property",
            "optional": false,
            "typeAnnotation": null,
            "start": 147,
            "end": 155
          },
          "optional": false,
          "computed": false,
          "start": 137,
          "end": 155
        },
        "right": {
          "type": "Literal",
          "value": "yep",
          "raw": "'yep'",
          "start": 158,
          "end": 163
        },
        "start": 137,
        "end": 163
      },
      "directive": null,
      "start": 137,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 168,
            "end": 169
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "StaticToo",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 185
            },
            "typeArguments": null,
            "arguments": [],
            "start": 172,
            "end": 187
          },
          "definite": false,
          "start": 168,
          "end": 187
        }
      ],
      "declare": false,
      "start": 164,
      "end": 188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "s",
        "optional": false,
        "typeAnnotation": null,
        "start": 189,
        "end": 190
      },
      "directive": null,
      "start": 189,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "StaticToo",
        "optional": false,
        "typeAnnotation": null,
        "start": 192,
        "end": 201
      },
      "directive": null,
      "start": 192,
      "end": 202
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 222,
        "end": 223
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 233,
                  "end": 237
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 239
                },
                "optional": false,
                "computed": false,
                "start": 233,
                "end": 239
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 242,
                "end": 243
              },
              "start": 233,
              "end": 243
            },
            "directive": null,
            "start": 233,
            "end": 243
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 269,
                  "end": 273
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "second",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 280
                },
                "optional": false,
                "computed": false,
                "start": 269,
                "end": 280
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 283,
                "end": 284
              },
              "start": 269,
              "end": 284
            },
            "directive": null,
            "start": 269,
            "end": 284
          }
        ],
        "start": 227,
        "end": 286
      },
      "expression": false,
      "start": 213,
      "end": 286
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 312,
              "end": 313
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 323
            },
            "optional": false,
            "computed": false,
            "start": 312,
            "end": 323
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 324,
            "end": 325
          },
          "optional": false,
          "computed": false,
          "start": 312,
          "end": 325
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 340
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 355,
                    "end": 356
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 359,
                      "end": 363
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 365
                    },
                    "optional": false,
                    "computed": false,
                    "start": 359,
                    "end": 365
                  },
                  "start": 355,
                  "end": 365
                },
                "start": 348,
                "end": 365
              }
            ],
            "start": 342,
            "end": 367
          },
          "expression": false,
          "start": 328,
          "end": 367
        },
        "start": 312,
        "end": 367
      },
      "directive": null,
      "start": 312,
      "end": 367
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 393,
            "end": 394
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 396
          },
          "optional": false,
          "computed": false,
          "start": 393,
          "end": 396
        },
        "right": {
          "type": "FunctionExpression",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 409
          },
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 411
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 427
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 430,
                    "end": 431
                  },
                  "start": 426,
                  "end": 431
                },
                "start": 419,
                "end": 431
              }
            ],
            "start": 413,
            "end": 433
          },
          "expression": false,
          "start": 399,
          "end": 433
        },
        "start": 393,
        "end": 433
      },
      "directive": null,
      "start": 393,
      "end": 433
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 438,
            "end": 439
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 446,
              "end": 447
            },
            "typeArguments": null,
            "arguments": [],
            "start": 442,
            "end": 449
          },
          "definite": false,
          "start": 438,
          "end": 449
        }
      ],
      "declare": false,
      "start": 434,
      "end": 449
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 451
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 452,
            "end": 453
          },
          "optional": false,
          "computed": false,
          "start": 450,
          "end": 453
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 454,
            "end": 455
          }
        ],
        "optional": false,
        "start": 450,
        "end": 456
      },
      "directive": null,
      "start": 450,
      "end": 456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 457,
            "end": 458
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 460
          },
          "optional": false,
          "computed": false,
          "start": 457,
          "end": 460
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 461,
            "end": 462
          }
        ],
        "optional": false,
        "start": 457,
        "end": 463
      },
      "directive": null,
      "start": 457,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 465
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "second",
            "optional": false,
            "typeAnnotation": null,
            "start": 466,
            "end": 472
          },
          "optional": false,
          "computed": false,
          "start": 464,
          "end": 472
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 475,
          "end": 476
        },
        "start": 464,
        "end": 476
      },
      "directive": null,
      "start": 464,
      "end": 476
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
