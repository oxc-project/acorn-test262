functionExpressionIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f1",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 35,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 35,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "params": []
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
awaitNameIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 39,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 39,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
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
  ],
  "sourceType": "module"
}
```
yieldNameIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f3",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 39,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 39,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 33,
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
  ],
  "sourceType": "module"
}
```
awaitParameterIsError.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f4",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 39,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 39,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "await",
                "optional": false
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
  "end": 40,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f5",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 39,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 36,
              "end": 39,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "yield",
                "optional": false
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
  "end": 46,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f6",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 45,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 42,
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
                "start": 29,
                "end": 40,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "AwaitExpression",
                  "start": 33,
                  "end": 40,
                  "argument": {
                    "type": "Literal",
                    "start": 39,
                    "end": 40,
                    "raw": "1",
                    "value": 1
                  }
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
            "name": "f7",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 43,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 40,
              "end": 43,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 29,
                "end": 38,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "YieldExpression",
                  "start": 33,
                  "end": 38,
                  "argument": null,
                  "delegate": false
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
  "end": 68,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 68,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 67,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f8",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 67,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 67,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 37,
                  "end": 65,
                  "async": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 58,
                    "end": 65,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 55,
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
  "end": 64,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 64,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 63,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "f9",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 11,
            "end": 63,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 63,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 37,
                  "end": 61,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 54,
                    "end": 61,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 51,
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
            "end": 9,
            "decorators": [],
            "name": "f10",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 75,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 75,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 38,
                  "end": 73,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 44,
                      "end": 72,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 48,
                        "end": 72,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 65,
                          "end": 72,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 62,
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
  "end": 65,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "f11",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 64,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 64,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 38,
                  "end": 62,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 55,
                    "end": 62,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 52,
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
            "end": 9,
            "decorators": [],
            "name": "f12",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 75,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 75,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 38,
                  "end": 73,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 44,
                      "end": 72,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 48,
                        "end": 72,
                        "async": false,
                        "body": {
                          "type": "BlockStatement",
                          "start": 65,
                          "end": 72,
                          "body": []
                        },
                        "declare": false,
                        "expression": false,
                        "generator": false,
                        "id": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 62,
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
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 46,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "f13",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 46,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 46,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 38,
                  "end": 44,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 38,
                    "end": 43,
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
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "f14",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 48,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 48,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 38,
                  "end": 46,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 38,
                    "end": 45,
                    "argument": {
                      "type": "Literal",
                      "start": 44,
                      "end": 45,
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
  "end": 52,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 51,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "f16",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 51,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 51,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 38,
                  "end": 49,
                  "expression": {
                    "type": "YieldExpression",
                    "start": 38,
                    "end": 48,
                    "argument": {
                      "type": "ArrayExpression",
                      "start": 46,
                      "end": 48,
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
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 49,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 48,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "f17",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 48,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 32,
              "end": 48,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 38,
                  "end": 46,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 38,
                    "end": 45,
                    "argument": {
                      "type": "Literal",
                      "start": 44,
                      "end": 45,
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
  "end": 73,
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
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "f19",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 31,
            "end": 72,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 51,
              "end": 72,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 57,
                  "end": 70,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 61,
                      "end": 69,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 69,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 69,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 69,
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
  "end": 73,
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
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "f20",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 31,
            "end": 72,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 51,
              "end": 72,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 57,
                  "end": 70,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 61,
                      "end": 69,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 61,
                        "end": 69,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 62,
                          "end": 69,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 64,
                            "end": 69,
                            "typeName": {
                              "type": "Identifier",
                              "start": 64,
                              "end": 69,
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
  "end": 66,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 9,
            "decorators": [],
            "name": "f21",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 12,
            "end": 64,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 64,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 37,
                  "end": 62,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 43,
                      "end": 61,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 43,
                        "end": 44,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "ObjectExpression",
                        "start": 47,
                        "end": 61,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 49,
                            "end": 59,
                            "computed": true,
                            "key": {
                              "type": "YieldExpression",
                              "start": 50,
                              "end": 55,
                              "argument": null,
                              "delegate": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 58,
                              "end": 59,
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
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "module"
}
```
