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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null
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
                  "optional": false,
                  "typeAnnotation": null
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 61,
                  "async": true,
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
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 54,
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 63,
                  "async": true,
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
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 56,
                              "argument": {
                                "type": "Literal",
                                "start": 55,
                                "end": 56,
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o4",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 66,
                  "async": true,
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
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 59,
                              "argument": {
                                "type": "ArrayExpression",
                                "start": 56,
                                "end": 59,
                                "elements": [
                                  {
                                    "type": "Literal",
                                    "start": 57,
                                    "end": 58,
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o5",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 97,
                  "async": true,
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
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "YieldExpression",
                              "start": 49,
                              "end": 90,
                              "argument": {
                                "type": "CallExpression",
                                "start": 56,
                                "end": 90,
                                "arguments": [],
                                "callee": {
                                  "type": "FunctionExpression",
                                  "start": 57,
                                  "end": 87,
                                  "async": true,
                                  "body": {
                                    "type": "BlockStatement",
                                    "start": 75,
                                    "end": 87,
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "start": 77,
                                        "end": 85,
                                        "directive": null,
                                        "expression": {
                                          "type": "YieldExpression",
                                          "start": 77,
                                          "end": 84,
                                          "argument": {
                                            "type": "Literal",
                                            "start": 83,
                                            "end": 84,
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
                                  "params": [],
                                  "returnType": null,
                                  "typeParameters": null
                                },
                                "optional": false,
                                "typeArguments": null
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o6",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 63,
                  "async": true,
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
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 45,
                              "end": 46,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": {
                              "type": "AwaitExpression",
                              "start": 49,
                              "end": 56,
                              "argument": {
                                "type": "Literal",
                                "start": 55,
                                "end": 56,
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "o7",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 26,
                  "end": 54,
                  "async": true,
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
                  "params": [],
                  "returnType": null,
                  "typeParameters": null
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
  "sourceType": "module",
  "hashbang": null
}
```
