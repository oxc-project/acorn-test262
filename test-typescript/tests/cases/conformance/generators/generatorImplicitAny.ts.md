__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 779,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 16,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 16,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 74,
      "end": 104,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 95,
        "decorators": [],
        "name": "noop",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 103,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 99,
          "end": 103
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 105,
      "end": 143,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 123,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 127,
          "end": 135,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 132,
            "end": 135,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 134,
              "end": 135,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 134,
                "end": 135,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 136,
        "end": 142,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 138,
          "end": 142
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 123,
        "end": 126,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 124,
            "end": 125,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 124,
              "end": 125,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 211,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 160,
        "end": 211,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 166,
            "end": 186,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 172,
                "end": 185,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 177,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 180,
                  "end": 185,
                  "argument": null,
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 155,
        "end": 157,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 213,
      "end": 302,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 228,
        "end": 302,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 234,
            "end": 262,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 240,
                "end": 261,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 240,
                  "end": 253,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 245,
                    "end": 253,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    }
                  }
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 256,
                  "end": 261,
                  "argument": null,
                  "delegate": false
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 223,
        "end": 225,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 304,
      "end": 641,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 319,
        "end": 641,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 325,
            "end": 331,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 325,
              "end": 330,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 360,
            "end": 374,
            "directive": null,
            "expression": {
              "type": "SequenceExpression",
              "start": 360,
              "end": 373,
              "expressions": [
                {
                  "type": "YieldExpression",
                  "start": 360,
                  "end": 365,
                  "argument": null,
                  "delegate": false
                },
                {
                  "type": "CallExpression",
                  "start": 367,
                  "end": 373,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 371,
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 403,
            "end": 425,
            "directive": null,
            "expression": {
              "type": "SequenceExpression",
              "start": 403,
              "end": 424,
              "expressions": [
                {
                  "type": "CallExpression",
                  "start": 403,
                  "end": 409,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 407,
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                {
                  "type": "YieldExpression",
                  "start": 411,
                  "end": 416,
                  "argument": null,
                  "delegate": false
                },
                {
                  "type": "CallExpression",
                  "start": 418,
                  "end": 424,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 422,
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 454,
            "end": 462,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 455,
              "end": 460,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 491,
            "end": 515,
            "directive": null,
            "expression": {
              "type": "SequenceExpression",
              "start": 491,
              "end": 514,
              "expressions": [
                {
                  "type": "SequenceExpression",
                  "start": 492,
                  "end": 505,
                  "expressions": [
                    {
                      "type": "YieldExpression",
                      "start": 492,
                      "end": 497,
                      "argument": null,
                      "delegate": false
                    },
                    {
                      "type": "CallExpression",
                      "start": 499,
                      "end": 505,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 499,
                        "end": 503,
                        "decorators": [],
                        "name": "noop",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  ]
                },
                {
                  "type": "CallExpression",
                  "start": 508,
                  "end": 514,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 512,
                    "decorators": [],
                    "name": "noop",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "ForStatement",
            "start": 544,
            "end": 569,
            "body": {
              "type": "EmptyStatement",
              "start": 568,
              "end": 569
            },
            "init": {
              "type": "YieldExpression",
              "start": 548,
              "end": 553,
              "argument": null,
              "delegate": false
            },
            "test": {
              "type": "Literal",
              "start": 555,
              "end": 560,
              "raw": "false",
              "value": false,
              "regex": null,
              "bigint": null
            },
            "update": {
              "type": "YieldExpression",
              "start": 562,
              "end": 567,
              "argument": null,
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 600,
            "end": 613,
            "directive": null,
            "expression": {
              "type": "UnaryExpression",
              "start": 600,
              "end": 612,
              "argument": {
                "type": "YieldExpression",
                "start": 606,
                "end": 611,
                "argument": null,
                "delegate": false
              },
              "operator": "void",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 316,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 643,
      "end": 698,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 658,
        "end": 698,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 664,
            "end": 673,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 664,
              "end": 672,
              "arguments": [
                {
                  "type": "YieldExpression",
                  "start": 666,
                  "end": 671,
                  "argument": null,
                  "delegate": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 664,
                "end": 665,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 653,
        "end": 655,
        "decorators": [],
        "name": "g5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 700,
      "end": 779,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 715,
        "end": 779,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 721,
            "end": 738,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 721,
              "end": 737,
              "arguments": [
                {
                  "type": "YieldExpression",
                  "start": 731,
                  "end": 736,
                  "argument": null,
                  "delegate": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 721,
                "end": 722,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 722,
                "end": 730,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 723,
                    "end": 729
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 710,
        "end": 712,
        "decorators": [],
        "name": "g6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
