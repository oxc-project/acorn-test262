__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 596,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 77,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "name": "sleep",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 14,
            "end": 77,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 25,
                "name": "tm",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 25,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "NewExpression",
              "start": 30,
              "end": 77,
              "callee": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 42,
                  "end": 76,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 42,
                      "end": 49,
                      "name": "resolve",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "body": {
                    "type": "CallExpression",
                    "start": 53,
                    "end": 76,
                    "callee": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 63,
                      "name": "setTimeout",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 64,
                        "end": 71,
                        "name": "resolve",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "name": "tm",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "typeParameters": null,
                  "returnType": null
                }
              ],
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 154,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "name": "gen",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 154,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 116,
            "expression": {
              "type": "YieldExpression",
              "start": 108,
              "end": 115,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 114,
                "end": 115,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 121,
            "end": 139,
            "expression": {
              "type": "AwaitExpression",
              "start": 121,
              "end": 138,
              "argument": {
                "type": "CallExpression",
                "start": 127,
                "end": 138,
                "callee": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 132,
                  "name": "sleep",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 133,
                    "end": 137,
                    "value": 1000,
                    "raw": "1000"
                  }
                ],
                "optional": false,
                "typeArguments": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 144,
            "end": 152,
            "expression": {
              "type": "YieldExpression",
              "start": 144,
              "end": 151,
              "delegate": false,
              "argument": {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "value": 2,
                "raw": "2"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 162,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "name": "log",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 179,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 596,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 595,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 183,
          "end": 592,
          "id": null,
          "expression": false,
          "generator": false,
          "async": true,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 195,
            "end": 592,
            "body": [
              {
                "type": "ForOfStatement",
                "start": 201,
                "end": 590,
                "await": true,
                "left": {
                  "type": "VariableDeclaration",
                  "start": 212,
                  "end": 223,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 218,
                      "end": 223,
                      "id": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 223,
                        "name": "outer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 227,
                  "end": 232,
                  "callee": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 230,
                    "name": "gen",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "body": {
                  "type": "BlockStatement",
                  "start": 234,
                  "end": 590,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 244,
                      "end": 269,
                      "expression": {
                        "type": "CallExpression",
                        "start": 244,
                        "end": 268,
                        "callee": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "TemplateLiteral",
                            "start": 248,
                            "end": 267,
                            "expressions": [
                              {
                                "type": "Identifier",
                                "start": 260,
                                "end": 265,
                                "name": "outer",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 248,
                                "end": 260,
                                "value": {
                                  "cooked": "I'm loop ",
                                  "raw": "I'm loop "
                                },
                                "tail": false
                              },
                              {
                                "type": "TemplateElement",
                                "start": 265,
                                "end": 267,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                },
                                "tail": true
                              }
                            ]
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 278,
                      "end": 584,
                      "expression": {
                        "type": "CallExpression",
                        "start": 278,
                        "end": 583,
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 279,
                          "end": 580,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": true,
                          "params": [],
                          "body": {
                            "type": "BlockStatement",
                            "start": 291,
                            "end": 580,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 305,
                                "end": 325,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 311,
                                    "end": 324,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 311,
                                      "end": 316,
                                      "name": "inner",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 319,
                                      "end": 324,
                                      "name": "outer",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "const",
                                "declare": false
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 338,
                                "end": 356,
                                "expression": {
                                  "type": "AwaitExpression",
                                  "start": 338,
                                  "end": 355,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 344,
                                    "end": 355,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 344,
                                      "end": 349,
                                      "name": "sleep",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 350,
                                        "end": 354,
                                        "value": 2000,
                                        "raw": "2000"
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "directive": null
                              },
                              {
                                "type": "IfStatement",
                                "start": 369,
                                "end": 570,
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 373,
                                  "end": 388,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 373,
                                    "end": 378,
                                    "name": "inner",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Identifier",
                                    "start": 383,
                                    "end": 388,
                                    "name": "outer",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "start": 390,
                                  "end": 476,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 408,
                                      "end": 462,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 408,
                                        "end": 461,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 408,
                                          "end": 411,
                                          "name": "log",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "start": 412,
                                            "end": 460,
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "start": 424,
                                                "end": 429,
                                                "name": "inner",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 453,
                                                "end": 458,
                                                "name": "outer",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "start": 412,
                                                "end": 424,
                                                "value": {
                                                  "cooked": "I'm loop ",
                                                  "raw": "I'm loop "
                                                },
                                                "tail": false
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 429,
                                                "end": 453,
                                                "value": {
                                                  "cooked": " and I know I'm loop ",
                                                  "raw": " and I know I'm loop "
                                                },
                                                "tail": false
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 458,
                                                "end": 460,
                                                "value": {
                                                  "cooked": "",
                                                  "raw": ""
                                                },
                                                "tail": true
                                              }
                                            ]
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "directive": null
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 482,
                                  "end": 570,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 500,
                                      "end": 556,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 500,
                                        "end": 555,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 500,
                                          "end": 503,
                                          "name": "log",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "start": 504,
                                            "end": 554,
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "start": 516,
                                                "end": 521,
                                                "name": "inner",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 547,
                                                "end": 552,
                                                "name": "outer",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              }
                                            ],
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "start": 504,
                                                "end": 516,
                                                "value": {
                                                  "cooked": "I'm loop ",
                                                  "raw": "I'm loop "
                                                },
                                                "tail": false
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 521,
                                                "end": 547,
                                                "value": {
                                                  "cooked": ", but I think I'm loop ",
                                                  "raw": ", but I think I'm loop "
                                                },
                                                "tail": false
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 552,
                                                "end": 554,
                                                "value": {
                                                  "cooked": "",
                                                  "raw": ""
                                                },
                                                "tail": true
                                              }
                                            ]
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "directive": null
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "typeParameters": null,
                          "returnType": null
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    }
                  ]
                }
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
