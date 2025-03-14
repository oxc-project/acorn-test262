functionDeclarationIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
awaitNameIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 28,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 28,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "await",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
yieldNameIsOk.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 28,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 28,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 28,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "yield",
        "optional": false
      },
      "params": []
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
  "end": 30,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "decorators": [],
          "name": "await",
          "optional": false
        }
      ]
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
  "end": 30,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 30,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 27,
        "end": 30,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 25,
          "decorators": [],
          "name": "yield",
          "optional": false
        }
      ]
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
  "end": 36,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 36,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 36,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 20,
          "end": 31,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "AwaitExpression",
            "start": 24,
            "end": 31,
            "argument": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "1",
              "value": 1
            }
          }
        }
      ]
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
  "end": 34,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 34,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 34,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 20,
          "end": 29,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "YieldExpression",
            "start": 24,
            "end": 29,
            "argument": null,
            "delegate": false
          }
        }
      ]
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
  "end": 58,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 58,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 58,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 28,
            "end": 56,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 49,
              "end": 56,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": true,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f8",
        "optional": false
      },
      "params": []
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
  "end": 54,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 54,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 54,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 28,
            "end": 52,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 45,
              "end": 52,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 42,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f9",
        "optional": false
      },
      "params": []
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
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 66,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 63,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 39,
                  "end": 63,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 56,
                    "end": 63,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f10",
        "optional": false
      },
      "params": []
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
  "end": 55,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 55,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 55,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 29,
            "end": 53,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 46,
              "end": 53,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 43,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f11",
        "optional": false
      },
      "params": []
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
  "end": 66,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 66,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 66,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 64,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 63,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "FunctionExpression",
                  "start": 39,
                  "end": 63,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 56,
                    "end": 63,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f12",
        "optional": false
      },
      "params": []
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
  "end": 37,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 37,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 37,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 35,
            "expression": {
              "type": "YieldExpression",
              "start": 29,
              "end": 34,
              "argument": null,
              "delegate": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f13",
        "optional": false
      },
      "params": []
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
  "end": 39,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 39,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 37,
            "expression": {
              "type": "YieldExpression",
              "start": 29,
              "end": 36,
              "argument": {
                "type": "Literal",
                "start": 35,
                "end": 36,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f14",
        "optional": false
      },
      "params": []
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
  "end": 42,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 42,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 42,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 40,
            "expression": {
              "type": "YieldExpression",
              "start": 29,
              "end": 39,
              "argument": {
                "type": "ArrayExpression",
                "start": 37,
                "end": 39,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f16",
        "optional": false
      },
      "params": []
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
  "end": 39,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 39,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 29,
            "end": 37,
            "expression": {
              "type": "AwaitExpression",
              "start": 29,
              "end": 36,
              "argument": {
                "type": "Literal",
                "start": 35,
                "end": 36,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f17",
        "optional": false
      },
      "params": []
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
  "end": 63,
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
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 63,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 63,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 48,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 52,
                "end": 60,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 60,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 60,
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
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "f19",
        "optional": false
      },
      "params": []
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
  "end": 63,
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
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 63,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 63,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 48,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 52,
                "end": 60,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 60,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 53,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 55,
                      "end": 60,
                      "typeName": {
                        "type": "Identifier",
                        "start": 55,
                        "end": 60,
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
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "f20",
        "optional": false
      },
      "params": []
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
  "end": 57,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 56,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 56,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 29,
            "end": 54,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 35,
                "end": 53,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 39,
                  "end": 53,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 41,
                      "end": 51,
                      "computed": true,
                      "key": {
                        "type": "YieldExpression",
                        "start": 42,
                        "end": 47,
                        "argument": null,
                        "delegate": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 50,
                        "end": 51,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "f21",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module"
}
```
