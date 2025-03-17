__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 300,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 14,
            "end": 299,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 27,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 30,
              "end": 299,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 36,
                  "end": 297,
                  "test": {
                    "type": "LogicalExpression",
                    "start": 41,
                    "end": 60,
                    "left": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 44,
                      "name": "top",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "&&",
                    "right": {
                      "type": "MemberExpression",
                      "start": 48,
                      "end": 60,
                      "object": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 51,
                        "name": "top",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 60,
                        "name": "doScroll",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 63,
                    "end": 297,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 68,
                        "end": 293,
                        "expression": {
                          "type": "CallExpression",
                          "start": 68,
                          "end": 292,
                          "callee": {
                            "type": "FunctionExpression",
                            "start": 69,
                            "end": 289,
                            "id": {
                              "type": "Identifier",
                              "start": 78,
                              "end": 91,
                              "name": "doScrollCheck",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "expression": false,
                            "generator": false,
                            "async": false,
                            "params": [],
                            "body": {
                              "type": "BlockStatement",
                              "start": 94,
                              "end": 289,
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "start": 100,
                                  "end": 284,
                                  "test": {
                                    "type": "Literal",
                                    "start": 105,
                                    "end": 110,
                                    "value": false,
                                    "raw": "false"
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "start": 113,
                                    "end": 284,
                                    "body": [
                                      {
                                        "type": "TryStatement",
                                        "start": 121,
                                        "end": 225,
                                        "block": {
                                          "type": "BlockStatement",
                                          "start": 125,
                                          "end": 161,
                                          "body": [
                                            {
                                              "type": "ExpressionStatement",
                                              "start": 133,
                                              "end": 154,
                                              "expression": {
                                                "type": "CallExpression",
                                                "start": 133,
                                                "end": 153,
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 133,
                                                  "end": 145,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 133,
                                                    "end": 136,
                                                    "name": "top",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 137,
                                                    "end": 145,
                                                    "name": "doScroll",
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
                                                    "start": 146,
                                                    "end": 152,
                                                    "value": "left",
                                                    "raw": "\"left\""
                                                  }
                                                ],
                                                "optional": false,
                                                "typeArguments": null
                                              },
                                              "directive": null
                                            }
                                          ]
                                        },
                                        "handler": {
                                          "type": "CatchClause",
                                          "start": 162,
                                          "end": 225,
                                          "param": {
                                            "type": "Identifier",
                                            "start": 168,
                                            "end": 169,
                                            "name": "e",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "body": {
                                            "type": "BlockStatement",
                                            "start": 171,
                                            "end": 225,
                                            "body": [
                                              {
                                                "type": "ReturnStatement",
                                                "start": 179,
                                                "end": 218,
                                                "argument": {
                                                  "type": "CallExpression",
                                                  "start": 186,
                                                  "end": 217,
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 186,
                                                    "end": 196,
                                                    "name": "setTimeout",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "start": 198,
                                                      "end": 211,
                                                      "name": "doScrollCheck",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "start": 213,
                                                      "end": 215,
                                                      "value": 50,
                                                      "raw": "50"
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "typeArguments": null
                                                }
                                              }
                                            ]
                                          }
                                        },
                                        "finalizer": null
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 268,
                                        "end": 277,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 268,
                                          "end": 276,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 268,
                                            "end": 274,
                                            "name": "detach",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [],
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "directive": null
                                      }
                                    ]
                                  },
                                  "alternate": null
                                }
                              ]
                            },
                            "declare": false,
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
                  },
                  "alternate": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
