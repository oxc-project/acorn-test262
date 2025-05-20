__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 396,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 394,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 394,
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
            "end": 394,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 394,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 79,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 35,
                    "end": 39,
                    "name": "bar"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 39,
                    "end": 79,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 42,
                      "end": 79,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 44,
                          "end": 77,
                          "argument": {
                            "type": "AwaitExpression",
                            "start": 51,
                            "end": 76,
                            "argument": {
                              "type": "CallExpression",
                              "start": 57,
                              "end": 76,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 73,
                                  "end": 75,
                                  "raw": "42",
                                  "value": 42
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 57,
                                "end": 72,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 64,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 65,
                                  "end": 72,
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
                  "start": 84,
                  "end": 241,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 100,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 100,
                    "end": 241,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 103,
                      "end": 241,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 113,
                          "end": 141,
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 119,
                              "end": 140,
                              "definite": false,
                              "id": {
                                "type": "Identifier",
                                "start": 119,
                                "end": 120,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "start": 123,
                                "end": 140,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 129,
                                  "end": 140,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 129,
                                    "end": 138,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 129,
                                      "end": 133
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 134,
                                      "end": 138,
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
                          "start": 150,
                          "end": 235,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 157,
                            "end": 234,
                            "operator": "+",
                            "left": {
                              "type": "BinaryExpression",
                              "start": 157,
                              "end": 192,
                              "operator": "+",
                              "left": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "LogicalExpression",
                                "start": 162,
                                "end": 191,
                                "operator": "||",
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 162,
                                  "end": 186,
                                  "computed": false,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 162,
                                    "end": 180,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 162,
                                      "end": 178,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 162,
                                        "end": 173,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 162,
                                          "end": 171,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 162,
                                            "end": 166
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 167,
                                            "end": 171,
                                            "name": "baz"
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 174,
                                        "end": 178,
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
                                    "start": 181,
                                    "end": 186,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Literal",
                                  "start": 190,
                                  "end": 191,
                                  "raw": "0",
                                  "value": 0
                                }
                              }
                            },
                            "right": {
                              "type": "LogicalExpression",
                              "start": 196,
                              "end": 233,
                              "operator": "||",
                              "left": {
                                "type": "MemberExpression",
                                "start": 196,
                                "end": 228,
                                "computed": false,
                                "object": {
                                  "type": "AwaitExpression",
                                  "start": 197,
                                  "end": 221,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 203,
                                    "end": 221,
                                    "arguments": [],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 203,
                                      "end": 219,
                                      "computed": false,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 203,
                                        "end": 214,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 203,
                                          "end": 212,
                                          "computed": false,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 203,
                                            "end": 207
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 208,
                                            "end": 212,
                                            "name": "qux"
                                          }
                                        },
                                        "optional": false,
                                        "typeArguments": null
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 215,
                                        "end": 219,
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
                                  "start": 223,
                                  "end": 228,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 232,
                                "end": 233,
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
                  "start": 246,
                  "end": 274,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 254,
                    "end": 258,
                    "name": "baz"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 258,
                    "end": 274,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 261,
                      "end": 274,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 263,
                          "end": 272,
                          "directive": null,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 263,
                            "end": 271,
                            "argument": {
                              "type": "Literal",
                              "start": 269,
                              "end": 271,
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
                  "start": 279,
                  "end": 350,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 293,
                    "end": 297,
                    "name": "qux"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 297,
                    "end": 350,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 300,
                      "end": 350,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 310,
                          "end": 344,
                          "directive": null,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 310,
                            "end": 343,
                            "argument": {
                              "type": "AwaitExpression",
                              "start": 317,
                              "end": 342,
                              "argument": {
                                "type": "CallExpression",
                                "start": 323,
                                "end": 342,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 339,
                                    "end": 341,
                                    "raw": "42",
                                    "value": 42
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 323,
                                  "end": 338,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 323,
                                    "end": 330,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 331,
                                    "end": 338,
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
                },
                {
                  "type": "MethodDefinition",
                  "start": 355,
                  "end": 392,
                  "accessibility": null,
                  "computed": false,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 369,
                    "end": 376,
                    "name": "bazBad"
                  },
                  "kind": "method",
                  "optional": false,
                  "override": false,
                  "static": true,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 376,
                    "end": 392,
                    "async": true,
                    "body": {
                      "type": "BlockStatement",
                      "start": 379,
                      "end": 392,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 381,
                          "end": 390,
                          "directive": null,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 381,
                            "end": 389,
                            "argument": {
                              "type": "Literal",
                              "start": 387,
                              "end": 389,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
