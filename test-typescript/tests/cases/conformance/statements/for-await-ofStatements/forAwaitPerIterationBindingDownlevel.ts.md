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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "sleep",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 14,
            "end": 77,
            "async": false,
            "body": {
              "type": "NewExpression",
              "start": 30,
              "end": 77,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 42,
                  "end": 76,
                  "async": false,
                  "body": {
                    "type": "CallExpression",
                    "start": 53,
                    "end": 76,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 64,
                        "end": 71,
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 73,
                        "end": 75,
                        "decorators": [],
                        "name": "tm",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 53,
                      "end": 63,
                      "decorators": [],
                      "name": "setTimeout",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 42,
                      "end": 49,
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 34,
                "end": 41,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 15,
                "end": 25,
                "decorators": [],
                "name": "tm",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 17,
                  "end": 25,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 80,
      "end": 154,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 102,
        "end": 154,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 108,
            "end": 116,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 108,
              "end": 115,
              "argument": {
                "type": "Literal",
                "start": 114,
                "end": 115,
                "raw": "1",
                "value": 1
              },
              "delegate": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 121,
            "end": 139,
            "directive": null,
            "expression": {
              "type": "AwaitExpression",
              "start": 121,
              "end": 138,
              "argument": {
                "type": "CallExpression",
                "start": 127,
                "end": 138,
                "arguments": [
                  {
                    "type": "Literal",
                    "start": 133,
                    "end": 137,
                    "raw": "1000",
                    "value": 1000
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 132,
                  "decorators": [],
                  "name": "sleep",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 144,
            "end": 152,
            "directive": null,
            "expression": {
              "type": "YieldExpression",
              "start": 144,
              "end": 151,
              "argument": {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "raw": "2",
                "value": 2
              },
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 162,
            "end": 165,
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 168,
            "end": 179,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 168,
              "end": 175,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 176,
              "end": 179,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 182,
      "end": 596,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 182,
        "end": 595,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 183,
          "end": 592,
          "async": true,
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
                "body": {
                  "type": "BlockStatement",
                  "start": 234,
                  "end": 590,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 244,
                      "end": 269,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 244,
                        "end": 268,
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
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "start": 248,
                                "end": 260,
                                "tail": false,
                                "value": {
                                  "cooked": "I'm loop ",
                                  "raw": "I'm loop "
                                }
                              },
                              {
                                "type": "TemplateElement",
                                "start": 265,
                                "end": 267,
                                "tail": true,
                                "value": {
                                  "cooked": "",
                                  "raw": ""
                                }
                              }
                            ]
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 244,
                          "end": 247,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 278,
                      "end": 584,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 278,
                        "end": 583,
                        "arguments": [],
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "start": 279,
                          "end": 580,
                          "async": true,
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 311,
                                      "end": 316,
                                      "decorators": [],
                                      "name": "inner",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "start": 319,
                                      "end": 324,
                                      "decorators": [],
                                      "name": "outer",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const"
                              },
                              {
                                "type": "ExpressionStatement",
                                "start": 338,
                                "end": 356,
                                "directive": null,
                                "expression": {
                                  "type": "AwaitExpression",
                                  "start": 338,
                                  "end": 355,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 344,
                                    "end": 355,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "start": 350,
                                        "end": 354,
                                        "raw": "2000",
                                        "value": 2000
                                      }
                                    ],
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 344,
                                      "end": 349,
                                      "decorators": [],
                                      "name": "sleep",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                }
                              },
                              {
                                "type": "IfStatement",
                                "start": 369,
                                "end": 570,
                                "alternate": {
                                  "type": "BlockStatement",
                                  "start": 482,
                                  "end": 570,
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "start": 500,
                                      "end": 556,
                                      "directive": null,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 500,
                                        "end": 555,
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
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 547,
                                                "end": 552,
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "start": 504,
                                                "end": 516,
                                                "tail": false,
                                                "value": {
                                                  "cooked": "I'm loop ",
                                                  "raw": "I'm loop "
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 521,
                                                "end": 547,
                                                "tail": false,
                                                "value": {
                                                  "cooked": ", but I think I'm loop ",
                                                  "raw": ", but I think I'm loop "
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 552,
                                                "end": 554,
                                                "tail": true,
                                                "value": {
                                                  "cooked": "",
                                                  "raw": ""
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 500,
                                          "end": 503,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ]
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
                                      "directive": null,
                                      "expression": {
                                        "type": "CallExpression",
                                        "start": 408,
                                        "end": 461,
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
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              {
                                                "type": "Identifier",
                                                "start": 453,
                                                "end": 458,
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            ],
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "start": 412,
                                                "end": 424,
                                                "tail": false,
                                                "value": {
                                                  "cooked": "I'm loop ",
                                                  "raw": "I'm loop "
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 429,
                                                "end": 453,
                                                "tail": false,
                                                "value": {
                                                  "cooked": " and I know I'm loop ",
                                                  "raw": " and I know I'm loop "
                                                }
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "start": 458,
                                                "end": 460,
                                                "tail": true,
                                                "value": {
                                                  "cooked": "",
                                                  "raw": ""
                                                }
                                              }
                                            ]
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 408,
                                          "end": 411,
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      }
                                    }
                                  ]
                                },
                                "test": {
                                  "type": "BinaryExpression",
                                  "start": 373,
                                  "end": 388,
                                  "operator": "===",
                                  "left": {
                                    "type": "Identifier",
                                    "start": 373,
                                    "end": 378,
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 383,
                                    "end": 388,
                                    "decorators": [],
                                    "name": "outer",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [],
                          "returnType": null,
                          "typeParameters": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "left": {
                  "type": "VariableDeclaration",
                  "start": 212,
                  "end": 223,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 218,
                      "end": 223,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 223,
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                "right": {
                  "type": "CallExpression",
                  "start": 227,
                  "end": 232,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 230,
                    "decorators": [],
                    "name": "gen",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": null,
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
