methodIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 39,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 38,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 36,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 36,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 36,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
awaitMethodNameIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "await",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 30,
                  "end": 40,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 33,
                    "end": 40,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldMethodNameIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 43,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 42,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o3",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 42,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 40,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "yield",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 30,
                  "end": 40,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 33,
                    "end": 40,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
awaitParameterIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o4",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 43,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 41,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 41,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 34,
                    "end": 41,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 27,
                      "end": 32,
                      "decorators": [],
                      "name": "await",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldParameterIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o5",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 43,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 41,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 41,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 34,
                    "end": 41,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 27,
                      "end": 32,
                      "decorators": [],
                      "name": "yield",
                      "optional": false
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
awaitInParameterInitializerIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 50,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o6",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 49,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 47,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 47,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 40,
                    "end": 47,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 27,
                      "end": 38,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "AwaitExpression",
                        "start": 31,
                        "end": 38,
                        "argument": {
                          "type": "Literal",
                          "start": 37,
                          "end": 38,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldInParameterInitializerIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o7",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 47,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 45,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 45,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 38,
                    "end": 45,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 27,
                      "end": 36,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 27,
                        "end": 28,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "YieldExpression",
                        "start": 31,
                        "end": 36,
                        "argument": null,
                        "delegate": false
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
nestedAsyncGeneratorIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 80,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o8",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 79,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 77,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 77,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 77,
                    "body": [
                      {
                        "type": "FunctionDeclaration",
                        "start": 39,
                        "end": 71,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 60,
                          "end": 71,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": true,
                        "id": {
                          "type": "Identifier",
                          "start": 56,
                          "end": 57,
                          "decorators": [],
                          "name": "g",
                          "optional": false
                        },
                        "params": []
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
nestedFunctionDeclarationNamedYieldIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 76,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o9",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 75,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 73,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 73,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 73,
                    "body": [
                      {
                        "type": "FunctionDeclaration",
                        "start": 39,
                        "end": 67,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 56,
                          "end": 67,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "start": 48,
                          "end": 53,
                          "decorators": [],
                          "name": "yield",
                          "optional": false
                        },
                        "params": []
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
nestedFunctionExpressionNamedYieldIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o10",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 85,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 85,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 40,
                        "end": 79,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 46,
                            "end": 78,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 46,
                              "end": 47,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "init": {
                              "type": "FunctionExpression",
                              "start": 50,
                              "end": 78,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 67,
                                "end": 78,
                                "body": []
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": {
                                "type": "Identifier",
                                "start": 59,
                                "end": 64,
                                "decorators": [],
                                "name": "yield",
                                "optional": false
                              },
                              "params": []
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
nestedFunctionDeclarationNamedAwaitIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 77,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 77,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 76,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o11",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 76,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 74,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 74,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 74,
                    "body": [
                      {
                        "type": "FunctionDeclaration",
                        "start": 40,
                        "end": 68,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 57,
                          "end": 68,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "start": 49,
                          "end": 54,
                          "decorators": [],
                          "name": "await",
                          "optional": false
                        },
                        "params": []
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
nestedFunctionExpressionNamedAwaitIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o12",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 87,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 85,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 85,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 85,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 40,
                        "end": 79,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 46,
                            "end": 78,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 46,
                              "end": 47,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "init": {
                              "type": "FunctionExpression",
                              "start": 50,
                              "end": 78,
                              "async": false,
                              "body": {
                                "type": "BlockStatement",
                                "start": 67,
                                "end": 78,
                                "body": []
                              },
                              "declare": false,
                              "expression": false,
                              "generator": false,
                              "id": {
                                "type": "Identifier",
                                "start": 59,
                                "end": 64,
                                "decorators": [],
                                "name": "await",
                                "optional": false
                              },
                              "params": []
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 54,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o13",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 54,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 52,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 52,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 52,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 40,
                        "end": 46,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 40,
                          "end": 45,
                          "argument": null,
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldWithValueIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o14",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 54,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 54,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 40,
                        "end": 48,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 40,
                          "end": 47,
                          "argument": {
                            "type": "Literal",
                            "start": 46,
                            "end": 47,
                            "raw": "1",
                            "value": 1
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
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldStarMissingValueIsError.ts
```json
Expression expected.
```
yieldStarWithValueIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 60,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 59,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o16",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 59,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 57,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 57,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 57,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 40,
                        "end": 51,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 40,
                          "end": 50,
                          "argument": {
                            "type": "ArrayExpression",
                            "start": 48,
                            "end": 50,
                            "elements": []
                          },
                          "delegate": true
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
awaitWithValueIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 57,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o17",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 54,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 54,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 54,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 40,
                        "end": 48,
                        "expression": {
                          "type": "AwaitExpression",
                          "start": 40,
                          "end": 47,
                          "argument": {
                            "type": "Literal",
                            "start": 46,
                            "end": 47,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
awaitMissingValueIsError.ts
```json
Expression expected.
```
awaitAsTypeIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "await",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "o19",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 46,
                  "end": 78,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 49,
                    "end": 78,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 59,
                        "end": 72,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 63,
                            "end": 71,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 71,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 64,
                                "end": 71,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 66,
                                  "end": 71,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 66,
                                    "end": 71,
                                    "decorators": [],
                                    "name": "await",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldAsTypeIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 81,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 18,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "yield",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 81,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 80,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "o20",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 31,
            "end": 80,
            "properties": [
              {
                "type": "Property",
                "start": 37,
                "end": 78,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 46,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 46,
                  "end": 78,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 49,
                    "end": 78,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 59,
                        "end": 72,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 63,
                            "end": 71,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 63,
                              "end": 71,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 64,
                                "end": 71,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 66,
                                  "end": 71,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 66,
                                    "end": 71,
                                    "decorators": [],
                                    "name": "yield",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "let"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
yieldInNestedComputedPropertyIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 74,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 74,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "o21",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 12,
            "end": 73,
            "properties": [
              {
                "type": "Property",
                "start": 18,
                "end": 71,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 27,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 27,
                  "end": 71,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 30,
                    "end": 71,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 40,
                        "end": 65,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 46,
                            "end": 64,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 46,
                              "end": 47,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "init": {
                              "type": "ObjectExpression",
                              "start": 50,
                              "end": 64,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 52,
                                  "end": 62,
                                  "computed": true,
                                  "key": {
                                    "type": "YieldExpression",
                                    "start": 53,
                                    "end": 58,
                                    "argument": null,
                                    "delegate": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 61,
                                    "end": 62,
                                    "raw": "1",
                                    "value": 1
                                  }
                                }
                              ]
                            }
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
asyncGeneratorGetAccessorIsError.ts
```json
'(' expected.
```
asyncGeneratorSetAccessorIsError.ts
```json
'(' expected.
```
asyncGeneratorPropertyIsError.ts
```json
'(' expected.
```
