__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 36,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 36,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 34,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 34,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 34,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 61,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 61,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 61,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 59,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 59,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 59,
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
                          "optional": false,
                          "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
      "type": "ClassDeclaration",
      "start": 0,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 63,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 61,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 61,
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
                          "optional": false,
                          "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 66,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 66,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 64,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 64,
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
                          "optional": false,
                          "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 97,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 97,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 97,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 95,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 95,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 95,
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
                          "optional": false,
                          "typeAnnotation": null
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
                                    "directive": null,
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C5",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
      "type": "ClassDeclaration",
      "start": 0,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 63,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 61,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 61,
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
                          "optional": false,
                          "typeAnnotation": null
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C6",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 54,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 54,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 54,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 52,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 24,
              "end": 52,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 27,
                "end": 52,
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
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C7",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 70,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 70,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 26,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 26,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 31,
            "end": 68,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 40,
              "end": 68,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 43,
                "end": 68,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 53,
                    "end": 62,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 53,
                      "end": 61,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 53,
                        "end": 59,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 53,
                          "end": 57
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 58,
                          "end": 59,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "C8",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
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
  "end": 90,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 23,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 21,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "g",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 16,
              "end": 21,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 19,
                "end": 21,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "B9",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 90,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 44,
        "end": 90,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 50,
            "end": 88,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 59,
              "end": 88,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 88,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 72,
                    "end": 82,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 72,
                      "end": 81,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 72,
                        "end": 79,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 72,
                          "end": 77
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 78,
                          "end": 79,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
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
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 32,
        "decorators": [],
        "name": "C9",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 41,
        "end": 43,
        "decorators": [],
        "name": "B9",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
