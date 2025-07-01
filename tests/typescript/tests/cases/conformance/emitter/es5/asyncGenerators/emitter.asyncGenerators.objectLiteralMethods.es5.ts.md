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
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                    "body": [],
                    "start": 29,
                    "end": 36
                  },
                  "expression": false,
                  "start": 26,
                  "end": 36
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 36
              }
            ],
            "start": 11,
            "end": 38
          },
          "definite": false,
          "start": 6,
          "end": 38
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 38
}
```
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 45,
                              "end": 46
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": null,
                              "start": 49,
                              "end": 54
                            },
                            "definite": false,
                            "start": 45,
                            "end": 54
                          }
                        ],
                        "declare": false,
                        "start": 39,
                        "end": 55
                      }
                    ],
                    "start": 29,
                    "end": 61
                  },
                  "expression": false,
                  "start": 26,
                  "end": 61
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 61
              }
            ],
            "start": 11,
            "end": 63
          },
          "definite": false,
          "start": 6,
          "end": 63
        }
      ],
      "declare": false,
      "start": 0,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
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
            "name": "o3",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 45,
                              "end": 46
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": false,
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 55,
                                "end": 56
                              },
                              "start": 49,
                              "end": 56
                            },
                            "definite": false,
                            "start": 45,
                            "end": 56
                          }
                        ],
                        "declare": false,
                        "start": 39,
                        "end": 57
                      }
                    ],
                    "start": 29,
                    "end": 63
                  },
                  "expression": false,
                  "start": 26,
                  "end": 63
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 63
              }
            ],
            "start": 11,
            "end": 65
          },
          "definite": false,
          "start": 6,
          "end": 65
        }
      ],
      "declare": false,
      "start": 0,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
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
            "name": "o4",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 45,
                              "end": 46
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": true,
                              "argument": {
                                "type": "ArrayExpression",
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1",
                                    "start": 57,
                                    "end": 58
                                  }
                                ],
                                "start": 56,
                                "end": 59
                              },
                              "start": 49,
                              "end": 59
                            },
                            "definite": false,
                            "start": 45,
                            "end": 59
                          }
                        ],
                        "declare": false,
                        "start": 39,
                        "end": 60
                      }
                    ],
                    "start": 29,
                    "end": 66
                  },
                  "expression": false,
                  "start": 26,
                  "end": 66
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 66
              }
            ],
            "start": 11,
            "end": 68
          },
          "definite": false,
          "start": 6,
          "end": 68
        }
      ],
      "declare": false,
      "start": 0,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 68
}
```
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
            "name": "o5",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 45,
                              "end": 46
                            },
                            "init": {
                              "type": "YieldExpression",
                              "delegate": true,
                              "argument": {
                                "type": "CallExpression",
                                "callee": {
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
                                            "type": "Literal",
                                            "value": 1,
                                            "raw": "1",
                                            "start": 83,
                                            "end": 84
                                          },
                                          "start": 77,
                                          "end": 84
                                        },
                                        "directive": null,
                                        "start": 77,
                                        "end": 85
                                      }
                                    ],
                                    "start": 75,
                                    "end": 87
                                  },
                                  "expression": false,
                                  "start": 57,
                                  "end": 87
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 56,
                                "end": 90
                              },
                              "start": 49,
                              "end": 90
                            },
                            "definite": false,
                            "start": 45,
                            "end": 90
                          }
                        ],
                        "declare": false,
                        "start": 39,
                        "end": 91
                      }
                    ],
                    "start": 29,
                    "end": 97
                  },
                  "expression": false,
                  "start": 26,
                  "end": 97
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 97
              }
            ],
            "start": 11,
            "end": 99
          },
          "definite": false,
          "start": 6,
          "end": 99
        }
      ],
      "declare": false,
      "start": 0,
      "end": 99
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 99
}
```
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
            "name": "o6",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                        "type": "VariableDeclaration",
                        "kind": "const",
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 45,
                              "end": 46
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "argument": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 55,
                                "end": 56
                              },
                              "start": 49,
                              "end": 56
                            },
                            "definite": false,
                            "start": 45,
                            "end": 56
                          }
                        ],
                        "declare": false,
                        "start": 39,
                        "end": 57
                      }
                    ],
                    "start": 29,
                    "end": 63
                  },
                  "expression": false,
                  "start": 26,
                  "end": 63
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 63
              }
            ],
            "start": 11,
            "end": 65
          },
          "definite": false,
          "start": 6,
          "end": 65
        }
      ],
      "declare": false,
      "start": 0,
      "end": 65
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 65
}
```
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
            "name": "o7",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 8
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 25,
                  "end": 26
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 46,
                          "end": 47
                        },
                        "start": 39,
                        "end": 48
                      }
                    ],
                    "start": 29,
                    "end": 54
                  },
                  "expression": false,
                  "start": 26,
                  "end": 54
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 17,
                "end": 54
              }
            ],
            "start": 11,
            "end": 56
          },
          "definite": false,
          "start": 6,
          "end": 56
        }
      ],
      "declare": false,
      "start": 0,
      "end": 56
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
