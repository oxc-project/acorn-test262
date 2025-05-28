__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 12,
        "decorators": [],
        "name": "T1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 23,
              "decorators": [],
              "name": "__t1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 36,
      "end": 70,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 48,
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 59,
              "decorators": [],
              "name": "__t2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 67,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 61,
                "end": 67
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 72,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 84,
        "decorators": [],
        "name": "T3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "__t3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 108,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 119,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 121,
        "end": 134,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 123,
          "end": 134,
          "typeName": {
            "type": "Identifier",
            "start": 123,
            "end": 130,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      },
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
              "callee": {
                "type": "MemberExpression",
                "start": 148,
                "end": 163,
                "object": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 155,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 163,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 170,
                        "decorators": [],
                        "name": "__t1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 172,
                        "end": 180,
                        "value": "foo_t1",
                        "raw": "\"foo_t1\""
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 230,
                    "decorators": [],
                    "name": "__t2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "BinaryExpression",
                    "start": 232,
                    "end": 250,
                    "left": {
                      "type": "MemberExpression",
                      "start": 232,
                      "end": 238,
                      "object": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 238,
                        "decorators": [],
                        "name": "__t1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "start": 241,
                      "end": 250,
                      "value": ":foo_21",
                      "raw": "\":foo_21\""
                    }
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 257,
      "end": 380,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 266,
            "end": 379,
            "callee": {
              "type": "MemberExpression",
              "start": 266,
              "end": 326,
              "object": {
                "type": "CallExpression",
                "start": 266,
                "end": 316,
                "callee": {
                  "type": "MemberExpression",
                  "start": 266,
                  "end": 280,
                  "object": {
                    "type": "CallExpression",
                    "start": 266,
                    "end": 270,
                    "callee": {
                      "type": "Identifier",
                      "start": 266,
                      "end": 268,
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 280,
                    "decorators": [],
                    "name": "then",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 281,
                    "end": 283,
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 285,
                    "end": 315,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  }
                ],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 326,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 327,
                "end": 378,
                "expression": false,
                "async": false,
                "typeParameters": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": null,
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
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 357,
                              "decorators": [],
                              "name": "__t3",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "BinaryExpression",
                              "start": 359,
                              "end": 373,
                              "left": {
                                "type": "MemberExpression",
                                "start": 359,
                                "end": 365,
                                "object": {
                                  "type": "Identifier",
                                  "start": 359,
                                  "end": 360,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 365,
                                  "decorators": [],
                                  "name": "__t2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "+",
                              "right": {
                                "type": "Literal",
                                "start": 368,
                                "end": 373,
                                "value": "bar",
                                "raw": "\"bar\""
                              }
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
