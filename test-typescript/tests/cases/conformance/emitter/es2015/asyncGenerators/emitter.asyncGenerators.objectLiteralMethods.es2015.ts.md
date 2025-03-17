__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 38,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o1",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 36,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 36,
                    "body": []
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
  "end": 63,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 63,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 63,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 61,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 61,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 61,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 39,
                        "end": 55,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 45,
                            "end": 54,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 54,
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
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 65,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 63,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 63,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 63,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 39,
                        "end": 57,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 45,
                            "end": 56,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 56,
                              "delegate": false,
                              "argument": {
                                "type": "Literal",
                                "start": 55,
                                "end": 56,
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
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "end": 68,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 68,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 66,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 66,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 66,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 39,
                        "end": 60,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 45,
                            "end": 59,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 59,
                              "delegate": true,
                              "argument": {
                                "type": "ArrayExpression",
                                "start": 56,
                                "end": 59,
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "start": 57,
                                    "end": 58,
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
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
  "end": 99,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 99,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 99,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 99,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 97,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 97,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 97,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 39,
                        "end": 91,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 45,
                            "end": 90,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 90,
                              "delegate": true,
                              "argument": {
                                "type": "CallExpression",
                                "start": 56,
                                "end": 90,
                                "callee": {
                                  "type": "FunctionExpression",
                                  "start": 57,
                                  "end": 87,
                                  "id": null,
                                  "expression": false,
                                  "generator": true,
                                  "async": true,
                                  "params": [],
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 75,
                                    "end": 87,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 77,
                                        "end": 85,
                                        "expression": {
                                          "type": "YieldExpression",
                                          "start": 77,
                                          "end": 84,
                                          "delegate": false,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 83,
                                            "end": 84,
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
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "end": 65,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 65,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 63,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 63,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 63,
                    "body": [
                      {
                        "type": "VariableDeclaration",
                        "start": 39,
                        "end": 57,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 45,
                            "end": 56,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "start": 49,
                              "end": 56,
                              "argument": {
                                "type": "Literal",
                                "start": 55,
                                "end": 56,
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
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
  "end": 57,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "name": "o7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 11,
            "end": 56,
            "properties": [
              {
                "type": "Property",
                "start": 17,
                "end": 54,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 54,
                  "id": null,
                  "expression": false,
                  "generator": true,
                  "async": true,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 29,
                    "end": 54,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 39,
                        "end": 48,
                        "argument": {
                          "type": "Literal",
                          "start": 46,
                          "end": 47,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
