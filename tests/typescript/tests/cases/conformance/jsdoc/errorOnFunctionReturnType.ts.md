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
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 138,
        "decorators": [],
        "name": "testPromise1",
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
        "start": 141,
        "end": 169,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 147,
            "end": 167,
            "expression": {
              "type": "CallExpression",
              "start": 147,
              "end": 166,
              "callee": {
                "type": "MemberExpression",
                "start": 147,
                "end": 158,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 154,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 158,
                  "decorators": [],
                  "name": "log",
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
                  "start": 159,
                  "end": 165,
                  "value": "Nope",
                  "raw": "\"Nope\""
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 211,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 238,
        "decorators": [],
        "name": "testPromise2",
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
              "value": "asd",
              "raw": "\"asd\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 361,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 361,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 334,
              "end": 361,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 340,
                  "end": 359,
                  "expression": {
                    "type": "CallExpression",
                    "start": 340,
                    "end": 359,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 340,
                      "end": 351,
                      "object": {
                        "type": "Identifier",
                        "start": 340,
                        "end": 347,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 348,
                        "end": 351,
                        "decorators": [],
                        "name": "log",
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
                        "start": 352,
                        "end": 358,
                        "value": "test",
                        "raw": "\"test\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 460,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 460,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 433,
              "end": 460,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 439,
                  "end": 458,
                  "expression": {
                    "type": "CallExpression",
                    "start": 439,
                    "end": 458,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 439,
                      "end": 450,
                      "object": {
                        "type": "Identifier",
                        "start": 439,
                        "end": 446,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 447,
                        "end": 450,
                        "decorators": [],
                        "name": "log",
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
                        "start": 451,
                        "end": 457,
                        "value": "test",
                        "raw": "\"test\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 565,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 584,
        "decorators": [],
        "name": "testNever1",
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
        "start": 587,
        "end": 591,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 631,
      "end": 680,
      "id": {
        "type": "Identifier",
        "start": 646,
        "end": 656,
        "decorators": [],
        "name": "testNever2",
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
              "value": "asd",
              "raw": "\"asd\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 775,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 775,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 748,
              "end": 775,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 754,
                  "end": 773,
                  "expression": {
                    "type": "CallExpression",
                    "start": 754,
                    "end": 773,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 754,
                      "end": 765,
                      "object": {
                        "type": "Identifier",
                        "start": 754,
                        "end": 761,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 762,
                        "end": 765,
                        "decorators": [],
                        "name": "log",
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
                        "start": 766,
                        "end": 772,
                        "value": "test",
                        "raw": "\"test\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 870,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 870,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 843,
              "end": 870,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 849,
                  "end": 868,
                  "expression": {
                    "type": "CallExpression",
                    "start": 849,
                    "end": 868,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 849,
                      "end": 860,
                      "object": {
                        "type": "Identifier",
                        "start": 849,
                        "end": 856,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 857,
                        "end": 860,
                        "decorators": [],
                        "name": "log",
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
                        "start": 861,
                        "end": 867,
                        "value": "test",
                        "raw": "\"test\""
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
