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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 43,
                  "delegate": false,
                  "argument": null
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 45,
                  "delegate": false,
                  "argument": {
                    "type": "Literal",
                    "start": 44,
                    "end": 45,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 48,
                  "delegate": true,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 45,
                    "end": 48,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 46,
                        "end": 47,
                        "value": 1,
                        "raw": "1"
                      }
                    ]
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "YieldExpression",
                  "start": 38,
                  "end": 79,
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "start": 45,
                    "end": 79,
                    "callee": {
                      "type": "FunctionExpression",
                      "start": 46,
                      "end": 76,
                      "id": null,
                      "expression": false,
                      "generator": true,
                      "async": true,
                      "params": [],
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
                              "delegate": false,
                              "argument": {
                                "type": "Literal",
                                "start": 72,
                                "end": 73,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "directive": null
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
                "id": {
                  "type": "Identifier",
                  "start": 34,
                  "end": 35,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
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
                    "value": 1,
                    "raw": "1"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "name": "f7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": true,
      "params": [],
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
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
