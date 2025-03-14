promiseVoidErrorCallback.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 380,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSInterfaceBody",
        "start": 13,
        "end": 34,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 32,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "__t1",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "T1",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 70,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 70,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 55,
            "end": 68,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "__t2",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "decorators": [],
        "name": "T2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 106,
      "body": {
        "type": "TSInterfaceBody",
        "start": 85,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "__t3",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "T3",
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 186,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 186,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 141,
            "end": 184,
            "argument": {
              "type": "CallExpression",
              "start": 148,
              "end": 183,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 164,
                  "end": 182,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 166,
                      "end": 180,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 170,
                        "decorators": [],
                        "name": "__t1",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 172,
                        "end": 180,
                        "raw": "\"foo_t1\"",
                        "value": "foo_t1"
                      }
                    }
                  ]
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 148,
                "end": 163,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 155,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 163,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false
                }
              },
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
        "end": 119,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 121,
        "end": 134,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 134,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 130,
            "end": 134,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 131,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 131,
                  "end": 133,
                  "decorators": [],
                  "name": "T1",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 130,
            "decorators": [],
            "name": "Promise",
            "optional": false
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 255,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 211,
        "end": 255,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 217,
            "end": 253,
            "argument": {
              "type": "ObjectExpression",
              "start": 224,
              "end": 252,
              "properties": [
                {
                  "type": "Property",
                  "start": 226,
                  "end": 250,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 230,
                    "decorators": [],
                    "name": "__t2",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 232,
                    "end": 250,
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "start": 232,
                      "end": 238,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 238,
                        "decorators": [],
                        "name": "__t1",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 241,
                      "end": 250,
                      "raw": "\":foo_21\"",
                      "value": ":foo_21"
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 200,
          "end": 205,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 201,
            "end": 205,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 203,
              "end": 205,
              "typeName": {
                "type": "Identifier",
                "start": 203,
                "end": 205,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 206,
        "end": 210,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 208,
          "end": 210,
          "typeName": {
            "type": "Identifier",
            "start": 208,
            "end": 210,
            "decorators": [],
            "name": "T2",
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "x3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 379,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 327,
                "end": 378,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 338,
                  "end": 378,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 344,
                      "end": 376,
                      "argument": {
                        "type": "ObjectExpression",
                        "start": 351,
                        "end": 375,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 353,
                            "end": 373,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 357,
                              "decorators": [],
                              "name": "__t3",
                              "optional": false
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "BinaryExpression",
                              "start": 359,
                              "end": 373,
                              "operator": "+",
                              "left": {
                                "type": "MemberExpression",
                                "start": 359,
                                "end": 365,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 359,
                                  "end": 360,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 365,
                                  "decorators": [],
                                  "name": "__t2",
                                  "optional": false
                                }
                              },
                              "right": {
                                "type": "Literal",
                                "start": 368,
                                "end": 373,
                                "raw": "\"bar\"",
                                "value": "bar"
                              }
                            }
                          }
                        ]
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
                    "start": 328,
                    "end": 333,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 329,
                      "end": 333,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 331,
                        "end": 333,
                        "typeName": {
                          "type": "Identifier",
                          "start": 331,
                          "end": 333,
                          "decorators": [],
                          "name": "T2",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 266,
              "end": 326,
              "computed": false,
              "object": {
                "type": "CallExpression",
                "start": 266,
                "end": 316,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 281,
                    "end": 283,
                    "decorators": [],
                    "name": "f2",
                    "optional": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 285,
                    "end": 315,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 299,
                      "end": 315,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 305,
                          "end": 313,
                          "argument": {
                            "type": "Identifier",
                            "start": 311,
                            "end": 312,
                            "decorators": [],
                            "name": "e",
                            "optional": false
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
                        "start": 286,
                        "end": 294,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 287,
                          "end": 294,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 289,
                            "end": 294,
                            "typeName": {
                              "type": "Identifier",
                              "start": 289,
                              "end": 294,
                              "decorators": [],
                              "name": "Error",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 266,
                  "end": 280,
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "start": 266,
                    "end": 270,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 268,
                      "decorators": [],
                      "name": "f1",
                      "optional": false
                    },
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 280,
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
                "start": 322,
                "end": 326,
                "decorators": [],
                "name": "then",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
