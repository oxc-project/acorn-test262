__ESTREE_TEST__:PASS:
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 46,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 44,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 43,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 43,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 48,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 46,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 45,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
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
        "end": 19,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 51,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 51,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 49,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 48,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 48,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 45,
                    "end": 48,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 46,
                        "end": 47,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f4",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 82,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 82,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 79,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 79,
                  "argument": {
                    "type": "CallExpression",
                    "start": 45,
                    "end": 79,
                    "arguments": [],
                    "callee": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 76,
                      "async": true,
                      "body": {
                        "type": "BlockStatement",
                        "start": 64,
                        "end": 76,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 66,
                            "end": 74,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 66,
                              "end": 73,
                              "argument": {
                                "type": "Literal",
                                "start": 72,
                                "end": 73,
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f5",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 48,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 48,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 28,
            "end": 46,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 34,
                "end": 45,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
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
        "end": 19,
        "decorators": [],
        "name": "f6",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 39,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 39,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 28,
            "end": 37,
            "argument": {
              "type": "Literal",
              "start": 35,
              "end": 36,
              "raw": "1",
              "value": 1
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
        "end": 19,
        "decorators": [],
        "name": "f7",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
