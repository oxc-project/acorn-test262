cyclicGenericTypeInstantiationInference.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 310,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 105,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 105,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 24,
            "end": 48,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 47,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 29,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 32,
                  "end": 47,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 35,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 35,
                    "end": 45,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 36,
                        "end": 44,
                        "exprName": {
                          "type": "Identifier",
                          "start": 43,
                          "end": 44,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 53,
            "end": 89,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 57,
                "end": 88,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 57,
                  "end": 88,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 58,
                    "end": 88,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 60,
                      "end": 88,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 70,
                          "end": 82,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 70,
                            "end": 72,
                            "decorators": [],
                            "name": "y2",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 72,
                            "end": 82,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 74,
                              "end": 82,
                              "exprName": {
                                "type": "Identifier",
                                "start": 81,
                                "end": 82,
                                "decorators": [],
                                "name": "z",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 94,
            "end": 103,
            "argument": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 213,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 126,
        "end": 213,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 132,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 136,
                "end": 155,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 140,
                  "end": 155,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 143,
                    "decorators": [],
                    "name": "bar",
                    "optional": false
                  },
                  "optional": false,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 143,
                    "end": 153,
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "start": 144,
                        "end": 152,
                        "exprName": {
                          "type": "Identifier",
                          "start": 151,
                          "end": 152,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "VariableDeclaration",
            "start": 161,
            "end": 197,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 165,
                "end": 197,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 197,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 197,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 168,
                      "end": 197,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 178,
                          "end": 191,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 180,
                            "decorators": [],
                            "name": "y2",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 180,
                            "end": 190,
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "start": 182,
                              "end": 190,
                              "exprName": {
                                "type": "Identifier",
                                "start": 189,
                                "end": 190,
                                "decorators": [],
                                "name": "z",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 202,
            "end": 211,
            "argument": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 120,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 123,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 122,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 215,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 220,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 223,
            "end": 236,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 223,
              "end": 226,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 226,
              "end": 234,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 227,
                  "end": 233
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 238,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 242,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 242,
            "end": 243,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 246,
            "end": 259,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 246,
              "end": 249,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 249,
              "end": 257,
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 262,
      "end": 301,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 298,
        "end": 301,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 275,
        "decorators": [],
        "name": "test",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 279,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 280,
            "end": 290,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 282,
              "end": 290,
              "exprName": {
                "type": "Identifier",
                "start": 289,
                "end": 290,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 291,
        "end": 297,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 293,
          "end": 297
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 275,
        "end": 278,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 276,
            "end": 277,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 310,
      "expression": {
        "type": "CallExpression",
        "start": 302,
        "end": 309,
        "arguments": [
          {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 302,
          "end": 306,
          "decorators": [],
          "name": "test",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
