propagationOfPromiseInitialization.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 339,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 152,
      "body": {
        "type": "TSInterfaceBody",
        "start": 22,
        "end": 152,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 28,
            "end": 150,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 32,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 42,
                "end": 87,
                "decorators": [],
                "name": "successCallback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 87,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 59,
                    "end": 87,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 60,
                        "end": 75,
                        "decorators": [],
                        "name": "promiseValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 72,
                          "end": 75,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 74,
                            "end": 75,
                            "typeName": {
                              "type": "Identifier",
                              "start": 74,
                              "end": 75,
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 77,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 87,
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 87,
                          "decorators": [],
                          "name": "TResult",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 89,
                "end": 129,
                "decorators": [],
                "name": "errorCallback",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 103,
                  "end": 129,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 105,
                    "end": 129,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 106,
                        "end": 117,
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 112,
                          "end": 117,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 114,
                            "end": 117
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 119,
                      "end": 129,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 122,
                        "end": 129,
                        "typeName": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 129,
                          "decorators": [],
                          "name": "TResult",
                          "optional": false
                        }
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 149,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 132,
                "end": 149,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 140,
                  "end": 149,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 141,
                      "end": 148,
                      "typeName": {
                        "type": "Identifier",
                        "start": 141,
                        "end": 148,
                        "decorators": [],
                        "name": "TResult",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 132,
                  "end": 140,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 32,
              "end": 41,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 33,
                  "end": 40,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 40,
                    "decorators": [],
                    "name": "TResult",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 18,
        "decorators": [],
        "name": "IPromise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "start": 154,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 158,
            "end": 179,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 179,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 179,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 171,
                  "end": 179,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 172,
                      "end": 178
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 171,
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false
                }
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
      "type": "ExpressionStatement",
      "start": 181,
      "end": 338,
      "expression": {
        "type": "CallExpression",
        "start": 181,
        "end": 337,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 262,
            "end": 336,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 269,
              "end": 336,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 309,
                  "end": 318,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 309,
                    "end": 317,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 309,
                      "end": 310,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 317,
                      "decorators": [],
                      "name": "length",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "start": 323,
                  "end": 334,
                  "argument": {
                    "type": "Literal",
                    "start": 330,
                    "end": 333,
                    "raw": "123",
                    "value": 123
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 263,
                "end": 264,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 181,
          "end": 261,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 181,
            "end": 256,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 190,
                "end": 255,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 197,
                  "end": 255,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 239,
                      "end": 253,
                      "argument": {
                        "type": "Literal",
                        "start": 246,
                        "end": 252,
                        "raw": "\"asdf\"",
                        "value": "asdf"
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 191,
                    "end": 192,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 181,
              "end": 189,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 181,
                "end": 184,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 185,
                "end": 189,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 257,
            "end": 261,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
