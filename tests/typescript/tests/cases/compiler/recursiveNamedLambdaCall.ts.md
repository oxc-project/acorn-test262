__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 11
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 27
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "top",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 41,
                      "end": 44
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "top",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 48,
                        "end": 51
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "doScroll",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 52,
                        "end": 60
                      },
                      "optional": false,
                      "computed": false,
                      "start": 48,
                      "end": 60
                    },
                    "start": 41,
                    "end": 60
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "FunctionExpression",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "doScrollCheck",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 78,
                              "end": 91
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "Literal",
                                    "value": false,
                                    "raw": "false",
                                    "start": 105,
                                    "end": 110
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "TryStatement",
                                        "block": {
                                          "type": "BlockStatement",
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "expression": {
                                                "type": "CallExpression",
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "object": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "top",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 133,
                                                    "end": 136
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "doScroll",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 137,
                                                    "end": 145
                                                  },
                                                  "optional": false,
                                                  "computed": false,
                                                  "start": 133,
                                                  "end": 145
                                                },
                                                "typeArguments": null,
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "value": "left",
                                                    "raw": "\"left\"",
                                                    "start": 146,
                                                    "end": 152
                                                  }
                                                ],
                                                "optional": false,
                                                "start": 133,
                                                "end": 153
                                              },
                                              "directive": null,
                                              "start": 133,
                                              "end": 154
                                            }
                                          ],
                                          "start": 125,
                                          "end": 161
                                        },
                                        "handler": {
                                          "type": "CatchClause",
                                          "param": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 168,
                                            "end": 169
                                          },
                                          "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "CallExpression",
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "setTimeout",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 186,
                                                    "end": 196
                                                  },
                                                  "typeArguments": null,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "decorators": [],
                                                      "name": "doScrollCheck",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 198,
                                                      "end": 211
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "value": 50,
                                                      "raw": "50",
                                                      "start": 213,
                                                      "end": 215
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "start": 186,
                                                  "end": 217
                                                },
                                                "start": 179,
                                                "end": 218
                                              }
                                            ],
                                            "start": 171,
                                            "end": 225
                                          },
                                          "start": 162,
                                          "end": 225
                                        },
                                        "finalizer": null,
                                        "start": 121,
                                        "end": 225
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "detach",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 268,
                                            "end": 274
                                          },
                                          "typeArguments": null,
                                          "arguments": [],
                                          "optional": false,
                                          "start": 268,
                                          "end": 276
                                        },
                                        "directive": null,
                                        "start": 268,
                                        "end": 277
                                      }
                                    ],
                                    "start": 113,
                                    "end": 284
                                  },
                                  "alternate": null,
                                  "start": 100,
                                  "end": 284
                                }
                              ],
                              "start": 94,
                              "end": 289
                            },
                            "expression": false,
                            "start": 69,
                            "end": 289
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 68,
                          "end": 292
                        },
                        "directive": null,
                        "start": 68,
                        "end": 293
                      }
                    ],
                    "start": 63,
                    "end": 297
                  },
                  "alternate": null,
                  "start": 36,
                  "end": 297
                }
              ],
              "start": 30,
              "end": 299
            },
            "expression": false,
            "start": 14,
            "end": 299
          },
          "definite": false,
          "start": 4,
          "end": 299
        }
      ],
      "declare": false,
      "start": 0,
      "end": 300
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 300
}
```
