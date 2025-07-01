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
            "name": "C",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ClassExpression",
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bar",
                    "start": 35,
                    "end": 39
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "type": "AwaitExpression",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 57,
                                  "end": 64
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 65,
                                  "end": 72
                                },
                                "optional": false,
                                "computed": false,
                                "start": 57,
                                "end": 72
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42",
                                  "start": 73,
                                  "end": 75
                                }
                              ],
                              "optional": false,
                              "start": 57,
                              "end": 76
                            },
                            "start": 51,
                            "end": 76
                          },
                          "start": 44,
                          "end": 77
                        }
                      ],
                      "start": 42,
                      "end": 79
                    },
                    "expression": false,
                    "start": 39,
                    "end": 79
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 22,
                  "end": 79
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 100
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                          "type": "VariableDeclaration",
                          "kind": "const",
                          "declarations": [
                            {
                              "type": "VariableDeclarator",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 119,
                                "end": 120
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 129,
                                      "end": 133
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "bar",
                                      "start": 134,
                                      "end": 138
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 129,
                                    "end": 138
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 129,
                                  "end": 140
                                },
                                "start": 123,
                                "end": 140
                              },
                              "definite": false,
                              "start": 119,
                              "end": 140
                            }
                          ],
                          "declare": false,
                          "start": 113,
                          "end": 141
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 157,
                                "end": 158
                              },
                              "operator": "+",
                              "right": {
                                "type": "LogicalExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 162,
                                            "end": 166
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "baz",
                                            "start": 167,
                                            "end": 171
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 162,
                                          "end": 171
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 162,
                                        "end": 173
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 174,
                                        "end": 178
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 162,
                                      "end": 178
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 162,
                                    "end": 180
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 181,
                                    "end": 186
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 162,
                                  "end": 186
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 190,
                                  "end": 191
                                },
                                "start": 162,
                                "end": 191
                              },
                              "start": 157,
                              "end": 192
                            },
                            "operator": "+",
                            "right": {
                              "type": "LogicalExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 203,
                                            "end": 207
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "qux",
                                            "start": 208,
                                            "end": 212
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 203,
                                          "end": 212
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 203,
                                        "end": 214
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 215,
                                        "end": 219
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 203,
                                      "end": 219
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 203,
                                    "end": 221
                                  },
                                  "start": 197,
                                  "end": 221
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 223,
                                  "end": 228
                                },
                                "optional": false,
                                "computed": false,
                                "start": 196,
                                "end": 228
                              },
                              "operator": "||",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 232,
                                "end": 233
                              },
                              "start": 196,
                              "end": 233
                            },
                            "start": 157,
                            "end": 234
                          },
                          "start": 150,
                          "end": 235
                        }
                      ],
                      "start": 103,
                      "end": 241
                    },
                    "expression": false,
                    "start": 100,
                    "end": 241
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 84,
                  "end": 241
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "baz",
                    "start": 254,
                    "end": 258
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                            "argument": {
                              "type": "Literal",
                              "value": 42,
                              "raw": "42",
                              "start": 269,
                              "end": 271
                            },
                            "start": 263,
                            "end": 271
                          },
                          "directive": null,
                          "start": 263,
                          "end": 272
                        }
                      ],
                      "start": 261,
                      "end": 274
                    },
                    "expression": false,
                    "start": 258,
                    "end": 274
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 246,
                  "end": 274
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "qux",
                    "start": 293,
                    "end": 297
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 323,
                                    "end": 330
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 331,
                                    "end": 338
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 323,
                                  "end": 338
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 339,
                                    "end": 341
                                  }
                                ],
                                "optional": false,
                                "start": 323,
                                "end": 342
                              },
                              "start": 317,
                              "end": 342
                            },
                            "start": 310,
                            "end": 343
                          },
                          "directive": null,
                          "start": 310,
                          "end": 344
                        }
                      ],
                      "start": 300,
                      "end": 350
                    },
                    "expression": false,
                    "start": 297,
                    "end": 350
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 279,
                  "end": 350
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "bazBad",
                    "start": 369,
                    "end": 376
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
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
                              "value": 42,
                              "raw": "42",
                              "start": 387,
                              "end": 389
                            },
                            "start": 381,
                            "end": 389
                          },
                          "directive": null,
                          "start": 381,
                          "end": 390
                        }
                      ],
                      "start": 379,
                      "end": 392
                    },
                    "expression": false,
                    "start": 376,
                    "end": 392
                  },
                  "kind": "method",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 355,
                  "end": 392
                }
              ],
              "start": 16,
              "end": 394
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 394
          },
          "definite": false,
          "start": 6,
          "end": 394
        }
      ],
      "declare": false,
      "start": 0,
      "end": 394
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 396
}
```
