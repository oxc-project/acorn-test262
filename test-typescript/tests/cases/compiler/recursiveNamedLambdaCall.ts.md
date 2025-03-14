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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "decorators": [],
            "name": "promise",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 14,
            "end": 299,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 30,
              "end": 299,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 36,
                  "end": 297,
                  "alternate": null,
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
                          "arguments": [],
                          "callee": {
                            "type": "FunctionExpression",
                            "start": 69,
                            "end": 289,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 94,
                              "end": 289,
                              "body": [
                                {
                                  "type": "IfStatement",
                                  "start": 100,
                                  "end": 284,
                                  "alternate": null,
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
                                                "arguments": [
                                                  {
                                                    "type": "Literal",
                                                    "start": 146,
                                                    "end": 152,
                                                    "raw": "\"left\"",
                                                    "value": "left"
                                                  }
                                                ],
                                                "callee": {
                                                  "type": "MemberExpression",
                                                  "start": 133,
                                                  "end": 145,
                                                  "computed": false,
                                                  "object": {
                                                    "type": "Identifier",
                                                    "start": 133,
                                                    "end": 136,
                                                    "decorators": [],
                                                    "name": "top",
                                                    "optional": false
                                                  },
                                                  "optional": false,
                                                  "property": {
                                                    "type": "Identifier",
                                                    "start": 137,
                                                    "end": 145,
                                                    "decorators": [],
                                                    "name": "doScroll",
                                                    "optional": false
                                                  }
                                                },
                                                "optional": false
                                              }
                                            }
                                          ]
                                        },
                                        "finalizer": null,
                                        "handler": {
                                          "type": "CatchClause",
                                          "start": 162,
                                          "end": 225,
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
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "start": 198,
                                                      "end": 211,
                                                      "decorators": [],
                                                      "name": "doScrollCheck",
                                                      "optional": false
                                                    },
                                                    {
                                                      "type": "Literal",
                                                      "start": 213,
                                                      "end": 215,
                                                      "raw": "50",
                                                      "value": 50
                                                    }
                                                  ],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 186,
                                                    "end": 196,
                                                    "decorators": [],
                                                    "name": "setTimeout",
                                                    "optional": false
                                                  },
                                                  "optional": false
                                                }
                                              }
                                            ]
                                          },
                                          "param": {
                                            "type": "Identifier",
                                            "start": 168,
                                            "end": 169,
                                            "decorators": [],
                                            "name": "e",
                                            "optional": false
                                          }
                                        }
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 268,
                                        "end": 277,
                                        "expression": {
                                          "type": "CallExpression",
                                          "start": 268,
                                          "end": 276,
                                          "arguments": [],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 268,
                                            "end": 274,
                                            "decorators": [],
                                            "name": "detach",
                                            "optional": false
                                          },
                                          "optional": false
                                        }
                                      }
                                    ]
                                  },
                                  "test": {
                                    "type": "Literal",
                                    "start": 105,
                                    "end": 110,
                                    "raw": "false",
                                    "value": false
                                  }
                                }
                              ]
                            },
                            "declare": false,
                            "expression": false,
                            "generator": false,
                            "id": {
                              "type": "Identifier",
                              "start": 78,
                              "end": 91,
                              "decorators": [],
                              "name": "doScrollCheck",
                              "optional": false
                            },
                            "params": []
                          },
                          "optional": false
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "start": 41,
                    "end": 60,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 44,
                      "decorators": [],
                      "name": "top",
                      "optional": false
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 48,
                      "end": 60,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 48,
                        "end": 51,
                        "decorators": [],
                        "name": "top",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 52,
                        "end": 60,
                        "decorators": [],
                        "name": "doScroll",
                        "optional": false
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
            "params": [
              {
                "type": "Identifier",
                "start": 24,
                "end": 27,
                "decorators": [],
                "name": "obj",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
