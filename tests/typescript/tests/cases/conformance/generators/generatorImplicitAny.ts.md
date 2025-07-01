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
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 14,
        "end": 16
      },
      "expression": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 99,
          "end": 103
        },
        "start": 97,
        "end": 103
      },
      "body": null,
      "expression": false,
      "start": 74,
      "end": 104
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 123
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 125
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 125
          }
        ],
        "start": 123,
        "end": 126
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 134,
                "end": 135
              },
              "typeArguments": null,
              "start": 134,
              "end": 135
            },
            "start": 132,
            "end": 135
          },
          "start": 127,
          "end": 135
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 138,
          "end": 142
        },
        "start": 136,
        "end": 142
      },
      "body": null,
      "expression": false,
      "start": 105,
      "end": 143
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 157
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 177
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 180,
                  "end": 185
                },
                "definite": false,
                "start": 172,
                "end": 185
              }
            ],
            "declare": false,
            "start": 166,
            "end": 186
          }
        ],
        "start": 160,
        "end": 211
      },
      "expression": false,
      "start": 145,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 223,
        "end": 225
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
                  },
                  "start": 240,
                  "end": 253
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 256,
                  "end": 261
                },
                "definite": false,
                "start": 240,
                "end": 261
              }
            ],
            "declare": false,
            "start": 234,
            "end": 262
          }
        ],
        "start": 228,
        "end": 302
      },
      "expression": false,
      "start": 213,
      "end": 302
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 316
      },
      "generator": true,
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
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 325,
              "end": 330
            },
            "directive": null,
            "start": 325,
            "end": 331
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 360,
                  "end": 365
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 371
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 367,
                  "end": 373
                }
              ],
              "start": 360,
              "end": 373
            },
            "directive": null,
            "start": 360,
            "end": 374
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 403,
                    "end": 407
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 403,
                  "end": 409
                },
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 411,
                  "end": 416
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 418,
                    "end": 422
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 418,
                  "end": 424
                }
              ],
              "start": 403,
              "end": 424
            },
            "directive": null,
            "start": 403,
            "end": 425
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 455,
              "end": 460
            },
            "directive": null,
            "start": 454,
            "end": 462
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "SequenceExpression",
              "expressions": [
                {
                  "type": "SequenceExpression",
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "delegate": false,
                      "argument": null,
                      "start": 492,
                      "end": 497
                    },
                    {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 499,
                        "end": 503
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 499,
                      "end": 505
                    }
                  ],
                  "start": 492,
                  "end": 505
                },
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 508,
                    "end": 512
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 508,
                  "end": 514
                }
              ],
              "start": 491,
              "end": 514
            },
            "directive": null,
            "start": 491,
            "end": 515
          },
          {
            "type": "ForStatement",
            "init": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 548,
              "end": 553
            },
            "test": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 555,
              "end": 560
            },
            "update": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": null,
              "start": 562,
              "end": 567
            },
            "body": {
              "type": "EmptyStatement",
              "start": 568,
              "end": 569
            },
            "start": 544,
            "end": 569
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "UnaryExpression",
              "operator": "void",
              "argument": {
                "type": "YieldExpression",
                "delegate": false,
                "argument": null,
                "start": 606,
                "end": 611
              },
              "prefix": true,
              "start": 600,
              "end": 612
            },
            "directive": null,
            "start": 600,
            "end": 613
          }
        ],
        "start": 319,
        "end": 641
      },
      "expression": false,
      "start": 304,
      "end": 641
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null,
        "start": 653,
        "end": 655
      },
      "generator": true,
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
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 665
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 666,
                  "end": 671
                }
              ],
              "optional": false,
              "start": 664,
              "end": 672
            },
            "directive": null,
            "start": 664,
            "end": 673
          }
        ],
        "start": 658,
        "end": 698
      },
      "expression": false,
      "start": 643,
      "end": 698
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null,
        "start": 710,
        "end": 712
      },
      "generator": true,
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
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 721,
                "end": 722
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 723,
                    "end": 729
                  }
                ],
                "start": 722,
                "end": 730
              },
              "arguments": [
                {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": null,
                  "start": 731,
                  "end": 736
                }
              ],
              "optional": false,
              "start": 721,
              "end": 737
            },
            "directive": null,
            "start": 721,
            "end": 738
          }
        ],
        "start": 715,
        "end": 779
      },
      "expression": false,
      "start": 700,
      "end": 779
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 779
}
```
