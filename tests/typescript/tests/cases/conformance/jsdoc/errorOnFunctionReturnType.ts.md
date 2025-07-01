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
        "name": "testPromise1",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 138
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
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 147,
                  "end": 154
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 158
                },
                "optional": false,
                "computed": false,
                "start": 147,
                "end": 158
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Nope",
                  "raw": "\"Nope\"",
                  "start": 159,
                  "end": 165
                }
              ],
              "optional": false,
              "start": 147,
              "end": 166
            },
            "directive": null,
            "start": 147,
            "end": 167
          }
        ],
        "start": 141,
        "end": 169
      },
      "expression": false,
      "start": 117,
      "end": 169
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testPromise2",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 238
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 254,
              "end": 259
            },
            "start": 247,
            "end": 260
          }
        ],
        "start": 241,
        "end": 262
      },
      "expression": false,
      "start": 211,
      "end": 262
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
            "name": "testPromise3",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 280
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 340,
                        "end": 347
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 348,
                        "end": 351
                      },
                      "optional": false,
                      "computed": false,
                      "start": 340,
                      "end": 351
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 352,
                        "end": 358
                      }
                    ],
                    "optional": false,
                    "start": 340,
                    "end": 359
                  },
                  "directive": null,
                  "start": 340,
                  "end": 359
                }
              ],
              "start": 334,
              "end": 361
            },
            "expression": false,
            "start": 323,
            "end": 361
          },
          "definite": false,
          "start": 268,
          "end": 361
        }
      ],
      "declare": false,
      "start": 264,
      "end": 361
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
            "name": "testPromise4",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 419
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 439,
                        "end": 446
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 450
                      },
                      "optional": false,
                      "computed": false,
                      "start": 439,
                      "end": 450
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 451,
                        "end": 457
                      }
                    ],
                    "optional": false,
                    "start": 439,
                    "end": 458
                  },
                  "directive": null,
                  "start": 439,
                  "end": 458
                }
              ],
              "start": 433,
              "end": 460
            },
            "expression": false,
            "start": 422,
            "end": 460
          },
          "definite": false,
          "start": 407,
          "end": 460
        }
      ],
      "declare": false,
      "start": 403,
      "end": 460
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNever1",
        "optional": false,
        "typeAnnotation": null,
        "start": 574,
        "end": 584
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 587,
        "end": 591
      },
      "expression": false,
      "start": 565,
      "end": 591
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "testNever2",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 656
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "asd",
              "raw": "\"asd\"",
              "start": 672,
              "end": 677
            },
            "start": 665,
            "end": 678
          }
        ],
        "start": 659,
        "end": 680
      },
      "expression": false,
      "start": 631,
      "end": 680
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
            "name": "testNever3",
            "optional": false,
            "typeAnnotation": null,
            "start": 686,
            "end": 696
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 754,
                        "end": 761
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 762,
                        "end": 765
                      },
                      "optional": false,
                      "computed": false,
                      "start": 754,
                      "end": 765
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 766,
                        "end": 772
                      }
                    ],
                    "optional": false,
                    "start": 754,
                    "end": 773
                  },
                  "directive": null,
                  "start": 754,
                  "end": 773
                }
              ],
              "start": 748,
              "end": 775
            },
            "expression": false,
            "start": 737,
            "end": 775
          },
          "definite": false,
          "start": 686,
          "end": 775
        }
      ],
      "declare": false,
      "start": 682,
      "end": 775
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
            "name": "testNever4",
            "optional": false,
            "typeAnnotation": null,
            "start": 819,
            "end": 829
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
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
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 849,
                        "end": 856
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 857,
                        "end": 860
                      },
                      "optional": false,
                      "computed": false,
                      "start": 849,
                      "end": 860
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "test",
                        "raw": "\"test\"",
                        "start": 861,
                        "end": 867
                      }
                    ],
                    "optional": false,
                    "start": 849,
                    "end": 868
                  },
                  "directive": null,
                  "start": 849,
                  "end": 868
                }
              ],
              "start": 843,
              "end": 870
            },
            "expression": false,
            "start": 832,
            "end": 870
          },
          "definite": false,
          "start": 819,
          "end": 870
        }
      ],
      "declare": false,
      "start": 815,
      "end": 870
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 117,
  "end": 870
}
```
