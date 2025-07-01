__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "sleep",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 11
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "tm",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 19,
                    "end": 25
                  },
                  "start": 17,
                  "end": 25
                },
                "start": 15,
                "end": 25
              }
            ],
            "returnType": null,
            "body": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 41
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resolve",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 49
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "setTimeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 63
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resolve",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 64,
                        "end": 71
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tm",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 75
                      }
                    ],
                    "optional": false,
                    "start": 53,
                    "end": 76
                  },
                  "id": null,
                  "generator": false,
                  "start": 42,
                  "end": 76
                }
              ],
              "start": 30,
              "end": 77
            },
            "id": null,
            "generator": false,
            "start": 14,
            "end": 77
          },
          "definite": false,
          "start": 6,
          "end": 77
        }
      ],
      "declare": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "gen",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
      },
      "generator": true,
      "async": true,
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
              "argument": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 114,
                "end": 115
              },
              "start": 108,
              "end": 115
            },
            "directive": null,
            "start": 108,
            "end": 116
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AwaitExpression",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sleep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 132
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 1000,
                    "raw": "1000",
                    "start": 133,
                    "end": 137
                  }
                ],
                "optional": false,
                "start": 127,
                "end": 138
              },
              "start": 121,
              "end": 138
            },
            "directive": null,
            "start": 121,
            "end": 139
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "YieldExpression",
              "delegate": false,
              "argument": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 150,
                "end": 151
              },
              "start": 144,
              "end": 151
            },
            "directive": null,
            "start": 144,
            "end": 152
          }
        ],
        "start": 102,
        "end": 154
      },
      "expression": false,
      "start": 80,
      "end": 154
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "log",
            "optional": false,
            "typeAnnotation": null,
            "start": 162,
            "end": 165
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 176,
              "end": 179
            },
            "optional": false,
            "computed": false,
            "start": 168,
            "end": 179
          },
          "definite": false,
          "start": 162,
          "end": 179
        }
      ],
      "declare": false,
      "start": 156,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": true,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ForOfStatement",
                "await": true,
                "left": {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 223
                      },
                      "init": null,
                      "definite": false,
                      "start": 218,
                      "end": 223
                    }
                  ],
                  "declare": false,
                  "start": 212,
                  "end": 223
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "gen",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 230
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 227,
                  "end": 232
                },
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
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 244,
                          "end": 247
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TemplateLiteral",
                            "quasis": [
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "I'm loop ",
                                  "cooked": "I'm loop "
                                },
                                "tail": false,
                                "start": 248,
                                "end": 260
                              },
                              {
                                "type": "TemplateElement",
                                "value": {
                                  "raw": "",
                                  "cooked": ""
                                },
                                "tail": true,
                                "start": 265,
                                "end": 267
                              }
                            ],
                            "expressions": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outer",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 260,
                                "end": 265
                              }
                            ],
                            "start": 248,
                            "end": 267
                          }
                        ],
                        "optional": false,
                        "start": 244,
                        "end": 268
                      },
                      "directive": null,
                      "start": 244,
                      "end": 269
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": true,
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
                                      "name": "inner",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 311,
                                      "end": 316
                                    },
                                    "init": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "outer",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 319,
                                      "end": 324
                                    },
                                    "definite": false,
                                    "start": 311,
                                    "end": 324
                                  }
                                ],
                                "declare": false,
                                "start": 305,
                                "end": 325
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "sleep",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 344,
                                      "end": 349
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": 2000,
                                        "raw": "2000",
                                        "start": 350,
                                        "end": 354
                                      }
                                    ],
                                    "optional": false,
                                    "start": 344,
                                    "end": 355
                                  },
                                  "start": 338,
                                  "end": 355
                                },
                                "directive": null,
                                "start": 338,
                                "end": 356
                              },
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 373,
                                    "end": 378
                                  },
                                  "operator": "===",
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "outer",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 383,
                                    "end": 388
                                  },
                                  "start": 373,
                                  "end": 388
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 408,
                                          "end": 411
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "I'm loop ",
                                                  "cooked": "I'm loop "
                                                },
                                                "tail": false,
                                                "start": 412,
                                                "end": 424
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": " and I know I'm loop ",
                                                  "cooked": " and I know I'm loop "
                                                },
                                                "tail": false,
                                                "start": 429,
                                                "end": 453
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "",
                                                  "cooked": ""
                                                },
                                                "tail": true,
                                                "start": 458,
                                                "end": 460
                                              }
                                            ],
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 424,
                                                "end": 429
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 453,
                                                "end": 458
                                              }
                                            ],
                                            "start": 412,
                                            "end": 460
                                          }
                                        ],
                                        "optional": false,
                                        "start": 408,
                                        "end": 461
                                      },
                                      "directive": null,
                                      "start": 408,
                                      "end": 462
                                    }
                                  ],
                                  "start": 390,
                                  "end": 476
                                },
                                "alternate": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "log",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 500,
                                          "end": 503
                                        },
                                        "typeArguments": null,
                                        "arguments": [
                                          {
                                            "type": "TemplateLiteral",
                                            "quasis": [
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "I'm loop ",
                                                  "cooked": "I'm loop "
                                                },
                                                "tail": false,
                                                "start": 504,
                                                "end": 516
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": ", but I think I'm loop ",
                                                  "cooked": ", but I think I'm loop "
                                                },
                                                "tail": false,
                                                "start": 521,
                                                "end": 547
                                              },
                                              {
                                                "type": "TemplateElement",
                                                "value": {
                                                  "raw": "",
                                                  "cooked": ""
                                                },
                                                "tail": true,
                                                "start": 552,
                                                "end": 554
                                              }
                                            ],
                                            "expressions": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "inner",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 516,
                                                "end": 521
                                              },
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "outer",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 547,
                                                "end": 552
                                              }
                                            ],
                                            "start": 504,
                                            "end": 554
                                          }
                                        ],
                                        "optional": false,
                                        "start": 500,
                                        "end": 555
                                      },
                                      "directive": null,
                                      "start": 500,
                                      "end": 556
                                    }
                                  ],
                                  "start": 482,
                                  "end": 570
                                },
                                "start": 369,
                                "end": 570
                              }
                            ],
                            "start": 291,
                            "end": 580
                          },
                          "id": null,
                          "generator": false,
                          "start": 279,
                          "end": 580
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 278,
                        "end": 583
                      },
                      "directive": null,
                      "start": 278,
                      "end": 584
                    }
                  ],
                  "start": 234,
                  "end": 590
                },
                "start": 201,
                "end": 590
              }
            ],
            "start": 195,
            "end": 592
          },
          "id": null,
          "generator": false,
          "start": 183,
          "end": 592
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 182,
        "end": 595
      },
      "directive": null,
      "start": 182,
      "end": 596
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 596
}
```
