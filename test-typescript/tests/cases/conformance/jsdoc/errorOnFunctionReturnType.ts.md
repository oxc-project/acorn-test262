__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 117,
  "end": 870,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 117,
      "end": 169,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 167,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 147,
              "end": 166,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 159,
                  "end": 165,
                  "raw": "\"Nope\"",
                  "value": "Nope"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 158,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 154,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 158,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 138,
        "decorators": [],
        "name": "testPromise1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 262,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 241,
        "end": 262,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 247,
            "end": 260,
            "argument": {
              "type": "Literal",
              "start": 254,
              "end": 259,
              "raw": "\"asd\"",
              "value": "asd"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 238,
        "decorators": [],
        "name": "testPromise2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 280,
            "decorators": [],
            "name": "testPromise3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 323,
            "end": 361,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 334,
              "end": 361,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 340,
                  "end": 359,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 340,
                    "end": 359,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 352,
                        "end": 358,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 340,
                      "end": 351,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 347,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 351,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 460,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 419,
            "decorators": [],
            "name": "testPromise4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 422,
            "end": 460,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 433,
              "end": 460,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 439,
                  "end": 458,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 439,
                    "end": 458,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 451,
                        "end": 457,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 439,
                      "end": 450,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 446,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 447,
                        "end": 450,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 565,
      "end": 591,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 587,
        "end": 591,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 584,
        "decorators": [],
        "name": "testNever1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 631,
      "end": 680,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 659,
        "end": 680,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 665,
            "end": 678,
            "argument": {
              "type": "Literal",
              "start": 672,
              "end": 677,
              "raw": "\"asd\"",
              "value": "asd"
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 646,
        "end": 656,
        "decorators": [],
        "name": "testNever2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 775,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 775,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 696,
            "decorators": [],
            "name": "testNever3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 737,
            "end": 775,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 748,
              "end": 775,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 754,
                  "end": 773,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 754,
                    "end": 773,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 766,
                        "end": 772,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 754,
                      "end": 765,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 754,
                        "end": 761,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 762,
                        "end": 765,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 870,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 870,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 829,
            "decorators": [],
            "name": "testNever4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 832,
            "end": 870,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 843,
              "end": 870,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 849,
                  "end": 868,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 849,
                    "end": 868,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 861,
                        "end": 867,
                        "raw": "\"test\"",
                        "value": "test"
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 849,
                      "end": 860,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 856,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 860,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
