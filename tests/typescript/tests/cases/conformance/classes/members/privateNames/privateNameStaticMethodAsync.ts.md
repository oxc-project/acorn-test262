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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 394,
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
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 394,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 22,
                  "end": 79,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 35,
                    "end": 39,
                    "name": "bar"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 39,
                    "end": 79,
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                              "callee": {
                                "type": "MemberExpression",
                                "start": 57,
                                "end": 72,
                                "object": {
                                  "type": "Identifier",
                                  "start": 57,
                                  "end": 64,
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 65,
                                  "end": 72,
                                  "decorators": [],
                                  "name": "resolve",
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
                                  "start": 73,
                                  "end": 75,
                                  "value": 42,
                                  "raw": "42"
                                }
                              ],
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 84,
                  "end": 241,
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
                  "value": {
                    "type": "FunctionExpression",
                    "start": 100,
                    "end": 241,
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 103,
                      "end": 241,
                      "body": [
                        {
                          "type": "VariableDeclaration",
                          "start": 113,
                          "end": 141,
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "start": 119,
                              "end": 140,
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
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 129,
                                    "end": 138,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 129,
                                      "end": 133
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 134,
                                      "end": 138,
                                      "name": "bar"
                                    },
                                    "optional": false,
                                    "computed": false
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false
                                }
                              },
                              "definite": false
                            }
                          ],
                          "declare": false
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 150,
                          "end": 235,
                          "argument": {
                            "type": "BinaryExpression",
                            "start": 157,
                            "end": 234,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 157,
                              "end": 192,
                              "left": {
                                "type": "Identifier",
                                "start": 157,
                                "end": 158,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "operator": "+",
                              "right": {
                                "type": "LogicalExpression",
                                "start": 162,
                                "end": 191,
                                "left": {
                                  "type": "MemberExpression",
                                  "start": 162,
                                  "end": 186,
                                  "object": {
                                    "type": "CallExpression",
                                    "start": 162,
                                    "end": 180,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 162,
                                      "end": 178,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 162,
                                        "end": 173,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 162,
                                          "end": 171,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 162,
                                            "end": 166
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 167,
                                            "end": 171,
                                            "name": "baz"
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 174,
                                        "end": 178,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 181,
                                    "end": 186,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "computed": false
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Literal",
                                  "start": 190,
                                  "end": 191,
                                  "value": 0,
                                  "raw": "0"
                                }
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "LogicalExpression",
                              "start": 196,
                              "end": 233,
                              "left": {
                                "type": "MemberExpression",
                                "start": 196,
                                "end": 228,
                                "object": {
                                  "type": "AwaitExpression",
                                  "start": 197,
                                  "end": 221,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 203,
                                    "end": 221,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 203,
                                      "end": 219,
                                      "object": {
                                        "type": "CallExpression",
                                        "start": 203,
                                        "end": 214,
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 203,
                                          "end": 212,
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 203,
                                            "end": 207
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "start": 208,
                                            "end": 212,
                                            "name": "qux"
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 215,
                                        "end": 219,
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "optional": false,
                                      "computed": false
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false
                                  }
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 223,
                                  "end": 228,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "||",
                              "right": {
                                "type": "Literal",
                                "start": 232,
                                "end": 233,
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 246,
                  "end": 274,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 254,
                    "end": 258,
                    "name": "baz"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 258,
                    "end": 274,
                    "id": null,
                    "generator": true,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 261,
                      "end": 274,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 263,
                          "end": 272,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 263,
                            "end": 271,
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "start": 269,
                              "end": 271,
                              "value": 42,
                              "raw": "42"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 279,
                  "end": 350,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 293,
                    "end": 297,
                    "name": "qux"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 297,
                    "end": 350,
                    "id": null,
                    "generator": true,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 300,
                      "end": 350,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 310,
                          "end": 344,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 310,
                            "end": 343,
                            "delegate": false,
                            "argument": {
                              "type": "AwaitExpression",
                              "start": 317,
                              "end": 342,
                              "argument": {
                                "type": "CallExpression",
                                "start": 323,
                                "end": 342,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 323,
                                  "end": 338,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 323,
                                    "end": 330,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 331,
                                    "end": 338,
                                    "decorators": [],
                                    "name": "resolve",
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
                                    "start": 339,
                                    "end": 341,
                                    "value": 42,
                                    "raw": "42"
                                  }
                                ],
                                "optional": false
                              }
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 355,
                  "end": 392,
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "start": 369,
                    "end": 376,
                    "name": "bazBad"
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 376,
                    "end": 392,
                    "id": null,
                    "generator": true,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 379,
                      "end": 392,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 381,
                          "end": 390,
                          "expression": {
                            "type": "YieldExpression",
                            "start": 381,
                            "end": 389,
                            "delegate": false,
                            "argument": {
                              "type": "Literal",
                              "start": 387,
                              "end": 389,
                              "value": 42,
                              "raw": "42"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
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
