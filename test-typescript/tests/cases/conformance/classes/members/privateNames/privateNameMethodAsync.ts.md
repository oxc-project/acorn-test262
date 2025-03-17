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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "C",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ClassExpression",
            "start": 10,
            "end": 324,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 324,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 72,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 28,
                    "end": 32,
                    "name": "bar"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 32,
                    "end": 72,
                    "async": true,
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
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 66,
                                  "end": 68,
                                  "raw": "42",
                                  "value": 42
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 50,
                                "end": 65,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 50,
                                  "end": 57,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 58,
                                  "end": 65,
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 77,
                  "end": 227,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 86,
                    "end": 227,
                    "async": true,
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
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 105,
                                "end": 106,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "start": 109,
                                "end": 126,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 115,
                                  "end": 126,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 115,
                                    "end": 124,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 115,
                                      "end": 119
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 120,
                                      "end": 124,
                                      "name": "bar"
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "declare": false,
                          "kind": "const"
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 136,
                          "end": 221,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 143,
                            "end": 220,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 143,
                              "end": 178,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 143,
                                "end": 144,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "start": 148,
                                "end": 177,
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 148,
                                  "end": 172,
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 148,
                                    "end": 166,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 148,
                                      "end": 164,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 148,
                                        "end": 159,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 148,
                                          "end": 157,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 148,
                                            "end": 152
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 153,
                                            "end": 157,
                                            "name": "baz"
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 160,
                                        "end": 164,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 167,
                                    "end": 172,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 176,
                                  "end": 177,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 182,
                              "end": 219,
                              "operator": "||",
                              "left": {
                                "type": "MemberExpression",
                                "start": 182,
                                "end": 214,
                                "computed": false,
                                "object": {
                                  "type": "AwaitExpression",
                                  "start": 183,
                                  "end": 207,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 189,
                                    "end": 207,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 189,
                                      "end": 205,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 189,
                                        "end": 200,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 189,
                                          "end": 198,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 189,
                                            "end": 193
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 194,
                                            "end": 198,
                                            "name": "qux"
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 201,
                                        "end": 205,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "optional": false,
                                    "typeArguments": null
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 209,
                                  "end": 214,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 218,
                                "end": 219,
                                "raw": "0",
                                "value": 0
                              }
                            }
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 232,
                  "end": 253,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 233,
                    "end": 237,
                    "name": "baz"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 237,
                    "end": 253,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 240,
                      "end": 253,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 242,
                          "end": 251,
                          "directive": null,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 242,
                            "end": 250,
                            "argument": {
                              "type": "Literal",
                              "start": 248,
                              "end": 250,
                              "raw": "42",
                              "value": 42
                            },
                            "delegate": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                },
                {
                  "type": "MethodDefinition",
                  "start": 258,
                  "end": 322,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 265,
                    "end": 269,
                    "name": "qux"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 269,
                    "end": 322,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 272,
                      "end": 322,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 282,
                          "end": 316,
                          "directive": null,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 282,
                            "end": 315,
                            "argument": {
                              "type": "AwaitExpression",
                              "start": 289,
                              "end": 314,
                              "argument": {
                                "type": "CallExpression",
                                "start": 295,
                                "end": 314,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 311,
                                    "end": 313,
                                    "raw": "42",
                                    "value": 42
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 295,
                                  "end": 310,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 295,
                                    "end": 302,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 310,
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            },
                            "delegate": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": true,
                    "id": null,
                    "params": [],
                    "returnType": null,
                    "typeParameters": null
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null,
            "superTypeArguments": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 326,
      "end": 358,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 326,
        "end": 357,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 345,
            "end": 356,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 345,
              "end": 352,
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 353,
              "end": 356,
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 326,
          "end": 344,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 326,
            "end": 339,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 326,
              "end": 337,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 326,
                "end": 333,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 331,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 334,
                "end": 337,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 340,
            "end": 344,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
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
