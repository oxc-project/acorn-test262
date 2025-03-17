__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 359,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 324,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 324,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 324,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 72,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 28,
                    "end": 32,
                    "name": "bar"
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 32,
                    "end": 72,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 35,
                      "end": 72,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 37,
                          "end": 70,
                          "argument": {
                            "type": "AwaitExpression",
                            "start": 44,
                            "end": 69,
                            "argument": {
                              "type": "CallExpression",
                              "start": 50,
                              "end": 69,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 50,
                                "end": 65,
                                "object": {
                                  "type": "Identifier",
                                  "start": 50,
                                  "end": 57,
                                  "name": "Promise",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 58,
                                  "end": 65,
                                  "name": "resolve",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 66,
                                  "end": 68,
                                  "value": 42,
                                  "raw": "42"
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 77,
                  "end": 227,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 86,
                    "end": 227,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 89,
                      "end": 227,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 99,
                          "end": 127,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 105,
                              "end": 126,
                              "id": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "start": 109,
                                "end": 126,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 115,
                                  "end": 126,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 115,
                                    "end": 124,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 115,
                                      "end": 119
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 120,
                                      "end": 124,
                                      "name": "bar"
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "arguments": [],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              },
                              "definite": false
                            }
                          ],
                          "kind": "const",
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 136,
                          "end": 221,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 143,
                            "end": 220,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 143,
                              "end": 178,
                              "left": {
                                "type": "Identifier",
                                "start": 143,
                                "end": 144,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "LogicalExpression",
                                "start": 148,
                                "end": 177,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 148,
                                  "end": 172,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 148,
                                    "end": 166,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 148,
                                      "end": 164,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 148,
                                        "end": 159,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 148,
                                          "end": 157,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 148,
                                            "end": 152
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 153,
                                            "end": 157,
                                            "name": "baz"
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 160,
                                        "end": 164,
                                        "name": "next",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 167,
                                    "end": 172,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Literal",
                                  "start": 176,
                                  "end": 177,
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "LogicalExpression",
                              "start": 182,
                              "end": 219,
                              "left": {
                                "type": "MemberExpression",
                                "start": 182,
                                "end": 214,
                                "object": {
                                  "type": "AwaitExpression",
                                  "start": 183,
                                  "end": 207,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 189,
                                    "end": 207,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 189,
                                      "end": 205,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 189,
                                        "end": 200,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 189,
                                          "end": 198,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 189,
                                            "end": 193
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 194,
                                            "end": 198,
                                            "name": "qux"
                                          },
                                          "computed": false,
                                          "optional": false
                                        },
                                        "arguments": [],
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 201,
                                        "end": 205,
                                        "name": "next",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "computed": false,
                                      "optional": false
                                    },
                                    "arguments": [],
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 209,
                                  "end": 214,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "Literal",
                                "start": 218,
                                "end": 219,
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 232,
                  "end": 253,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 233,
                    "end": 237,
                    "name": "baz"
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 237,
                    "end": 253,
                    "id": null,
                    "expression": false,
                    "generator": true,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 240,
                      "end": 253,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 242,
                          "end": 251,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 242,
                            "end": 250,
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "start": 248,
                              "end": 250,
                              "value": 42,
                              "raw": "42"
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
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 258,
                  "end": 322,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 265,
                    "end": 269,
                    "name": "qux"
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 269,
                    "end": 322,
                    "id": null,
                    "expression": false,
                    "generator": true,
                    "async": true,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 272,
                      "end": 322,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 282,
                          "end": 316,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 282,
                            "end": 315,
                            "delegate": false,
                            "argument": {
                              "type": "AwaitExpression",
                              "start": 289,
                              "end": 314,
                              "argument": {
                                "type": "CallExpression",
                                "start": 295,
                                "end": 314,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 295,
                                  "end": 310,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 302,
                                    "name": "Promise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 310,
                                    "name": "resolve",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 311,
                                    "end": 313,
                                    "value": 42,
                                    "raw": "42"
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
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
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 358,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 357,
        "callee": {
          "type": "MemberExpression",
          "start": 326,
          "end": 344,
          "object": {
            "type": "CallExpression",
            "start": 326,
            "end": 339,
            "callee": {
              "type": "MemberExpression",
              "start": 326,
              "end": 337,
              "object": {
                "type": "NewExpression",
                "start": 326,
                "end": 333,
                "callee": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 334,
                "end": 337,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "property": {
            "type": "Identifier",
            "start": 340,
            "end": 344,
            "name": "then",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 345,
            "end": 356,
            "object": {
              "type": "Identifier",
              "start": 345,
              "end": 352,
              "name": "console",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 353,
              "end": 356,
              "name": "log",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ],
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
