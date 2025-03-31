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
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "__t1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "__t2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "T3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "__t3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 156,
                  "end": 163,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 170,
                        "name": "__t1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 172,
                        "end": 180,
                        "value": "foo_t1",
                        "raw": "\"foo_t1\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "name": "T1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 188,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 199,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 200,
          "end": 205,
          "name": "x",
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
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 230,
                    "name": "__t2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 234,
                        "end": 238,
                        "name": "__t1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
            "name": "T2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 263,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                      "name": "f1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 280,
                    "name": "then",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 281,
                    "end": 283,
                    "name": "f2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 285,
                    "end": 315,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 286,
                        "end": 294,
                        "name": "e",
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
                              "name": "Error",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "e",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 322,
                "end": 326,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 327,
                "end": 378,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 328,
                    "end": 333,
                    "name": "x",
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
                          "name": "T2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 353,
                              "end": 357,
                              "name": "__t3",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 361,
                                  "end": 365,
                                  "name": "__t2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
