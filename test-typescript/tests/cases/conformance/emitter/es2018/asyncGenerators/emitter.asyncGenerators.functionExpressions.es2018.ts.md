F1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 34,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 34,
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
F2.ts
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
          "end": 55,
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
            "end": 55,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 55,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 37,
                  "end": 53,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 43,
                      "end": 52,
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
                        "type": "YieldExpression",
                        "start": 47,
                        "end": 52,
                        "argument": null,
                        "delegate": false
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
F3.ts
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
          "end": 57,
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
            "end": 57,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 57,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 37,
                  "end": 55,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 43,
                      "end": 54,
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
                        "type": "YieldExpression",
                        "start": 47,
                        "end": 54,
                        "argument": {
                          "type": "Literal",
                          "start": 53,
                          "end": 54,
                          "raw": "1",
                          "value": 1
                        },
                        "delegate": false
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
F4.ts
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
          "end": 60,
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
            "end": 60,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 60,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 37,
                  "end": 58,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 43,
                      "end": 57,
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
                        "type": "YieldExpression",
                        "start": 47,
                        "end": 57,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 54,
                          "end": 57,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 55,
                              "end": 56,
                              "raw": "1",
                              "value": 1
                            }
                          ]
                        },
                        "delegate": true
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
F5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 91,
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
            "end": 91,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 91,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 37,
                  "end": 89,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 43,
                      "end": 88,
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
                        "type": "YieldExpression",
                        "start": 47,
                        "end": 88,
                        "argument": {
                          "type": "CallExpression",
                          "start": 54,
                          "end": 88,
                          "arguments": [],
                          "callee": {
                            "type": "FunctionExpression",
                            "start": 55,
                            "end": 85,
                            "async": true,
                            "body": {
                              "type": "BlockStatement",
                              "start": 73,
                              "end": 85,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 75,
                                  "end": 83,
                                  "expression": {
                                    "type": "YieldExpression",
                                    "start": 75,
                                    "end": 82,
                                    "argument": {
                                      "type": "Literal",
                                      "start": 81,
                                      "end": 82,
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
                          },
                          "optional": false
                        },
                        "delegate": true
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
F6.ts
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
          "end": 57,
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
            "end": 57,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 57,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 37,
                  "end": 55,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 43,
                      "end": 54,
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
                        "type": "AwaitExpression",
                        "start": 47,
                        "end": 54,
                        "argument": {
                          "type": "Literal",
                          "start": 53,
                          "end": 54,
                          "raw": "1",
                          "value": 1
                        }
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
F7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 48,
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
            "end": 48,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 31,
              "end": 48,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 37,
                  "end": 46,
                  "argument": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "raw": "1",
                    "value": 1
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
