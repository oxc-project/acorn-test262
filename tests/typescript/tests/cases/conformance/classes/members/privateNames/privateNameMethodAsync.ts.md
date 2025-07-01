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
                    "start": 28,
                    "end": 32
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
                                  "start": 50,
                                  "end": 57
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "resolve",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 58,
                                  "end": 65
                                },
                                "optional": false,
                                "computed": false,
                                "start": 50,
                                "end": 65
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": 42,
                                  "raw": "42",
                                  "start": 66,
                                  "end": 68
                                }
                              ],
                              "optional": false,
                              "start": 50,
                              "end": 69
                            },
                            "start": 44,
                            "end": 69
                          },
                          "start": 37,
                          "end": 70
                        }
                      ],
                      "start": 35,
                      "end": 72
                    },
                    "expression": false,
                    "start": 32,
                    "end": 72
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 22,
                  "end": 72
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
                    "start": 83,
                    "end": 86
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
                                "start": 105,
                                "end": 106
                              },
                              "init": {
                                "type": "AwaitExpression",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 115,
                                      "end": 119
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "name": "bar",
                                      "start": 120,
                                      "end": 124
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 115,
                                    "end": 124
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "optional": false,
                                  "start": 115,
                                  "end": 126
                                },
                                "start": 109,
                                "end": 126
                              },
                              "definite": false,
                              "start": 105,
                              "end": 126
                            }
                          ],
                          "declare": false,
                          "start": 99,
                          "end": 127
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
                                "start": 143,
                                "end": 144
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
                                            "start": 148,
                                            "end": 152
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "baz",
                                            "start": 153,
                                            "end": 157
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 148,
                                          "end": 157
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 148,
                                        "end": 159
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 160,
                                        "end": 164
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 148,
                                      "end": 164
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 148,
                                    "end": 166
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 167,
                                    "end": 172
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 148,
                                  "end": 172
                                },
                                "operator": "||",
                                "right": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0",
                                  "start": 176,
                                  "end": 177
                                },
                                "start": 148,
                                "end": 177
                              },
                              "start": 143,
                              "end": 178
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
                                            "start": 189,
                                            "end": 193
                                          },
                                          "property": {
                                            "type": "PrivateIdentifier",
                                            "name": "qux",
                                            "start": 194,
                                            "end": 198
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 189,
                                          "end": 198
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 189,
                                        "end": 200
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "next",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 201,
                                        "end": 205
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 189,
                                      "end": 205
                                    },
                                    "typeArguments": null,
                                    "arguments": [],
                                    "optional": false,
                                    "start": 189,
                                    "end": 207
                                  },
                                  "start": 183,
                                  "end": 207
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 209,
                                  "end": 214
                                },
                                "optional": false,
                                "computed": false,
                                "start": 182,
                                "end": 214
                              },
                              "operator": "||",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 218,
                                "end": 219
                              },
                              "start": 182,
                              "end": 219
                            },
                            "start": 143,
                            "end": 220
                          },
                          "start": 136,
                          "end": 221
                        }
                      ],
                      "start": 89,
                      "end": 227
                    },
                    "expression": false,
                    "start": 86,
                    "end": 227
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 77,
                  "end": 227
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "baz",
                    "start": 233,
                    "end": 237
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
                              "start": 248,
                              "end": 250
                            },
                            "start": 242,
                            "end": 250
                          },
                          "directive": null,
                          "start": 242,
                          "end": 251
                        }
                      ],
                      "start": 240,
                      "end": 253
                    },
                    "expression": false,
                    "start": 237,
                    "end": 253
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 232,
                  "end": 253
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "PrivateIdentifier",
                    "name": "qux",
                    "start": 265,
                    "end": 269
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
                                    "start": 295,
                                    "end": 302
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 303,
                                    "end": 310
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 295,
                                  "end": 310
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 42,
                                    "raw": "42",
                                    "start": 311,
                                    "end": 313
                                  }
                                ],
                                "optional": false,
                                "start": 295,
                                "end": 314
                              },
                              "start": 289,
                              "end": 314
                            },
                            "start": 282,
                            "end": 315
                          },
                          "directive": null,
                          "start": 282,
                          "end": 316
                        }
                      ],
                      "start": 272,
                      "end": 322
                    },
                    "expression": false,
                    "start": 269,
                    "end": 322
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 258,
                  "end": 322
                }
              ],
              "start": 16,
              "end": 324
            },
            "abstract": false,
            "declare": false,
            "start": 10,
            "end": 324
          },
          "definite": false,
          "start": 6,
          "end": 324
        }
      ],
      "declare": false,
      "start": 0,
      "end": 324
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "typeArguments": null,
                "arguments": [],
                "start": 326,
                "end": 333
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 334,
                "end": 337
              },
              "optional": false,
              "computed": false,
              "start": 326,
              "end": 337
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 326,
            "end": 339
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 340,
            "end": 344
          },
          "optional": false,
          "computed": false,
          "start": 326,
          "end": 344
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "console",
              "optional": false,
              "typeAnnotation": null,
              "start": 345,
              "end": 352
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "log",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 356
            },
            "optional": false,
            "computed": false,
            "start": 345,
            "end": 356
          }
        ],
        "optional": false,
        "start": 326,
        "end": 357
      },
      "directive": null,
      "start": 326,
      "end": 358
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
