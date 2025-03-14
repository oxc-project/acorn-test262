__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 423,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 423,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 423,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 141,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 120,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 141,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 121,
                  "end": 136,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 136,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 133,
                      "end": 136,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 135,
                        "end": 136,
                        "typeName": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 136,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 421,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 421,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 421,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 209,
                    "end": 237,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 213,
                        "end": 236,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 222,
                          "end": 236,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 225,
                              "end": 235,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 225,
                                "end": 229
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 230,
                                "end": 235,
                                "decorators": [],
                                "name": "value",
                                "optional": false
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 224,
                            "decorators": [],
                            "name": "cb",
                            "optional": false
                          },
                          "optional": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 312,
                    "end": 380,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 316,
                        "end": 379,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 320,
                          "end": 379,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 365,
                              "end": 378,
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "start": 370,
                                "end": 378,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 370,
                                  "end": 371,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 372,
                                  "end": 378,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 365,
                                  "end": 366,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 320,
                            "end": 364,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 320,
                              "end": 359,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 348,
                                  "end": 358,
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "start": 353,
                                    "end": 358,
                                    "raw": "\"abc\"",
                                    "value": "abc"
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 348,
                                      "end": 349,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 320,
                                "end": 347,
                                "computed": false,
                                "object": {
                                  "type": "CallExpression",
                                  "start": 320,
                                  "end": 342,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 330,
                                      "end": 341,
                                      "async": false,
                                      "body": {
                                        "type": "Identifier",
                                        "start": 335,
                                        "end": 341,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false
                                      },
                                      "expression": true,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 330,
                                          "end": 331,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 320,
                                    "end": 329,
                                    "computed": false,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 320,
                                      "end": 324
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 325,
                                      "end": 329,
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
                                  "start": 343,
                                  "end": 347,
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
                              "start": 360,
                              "end": 364,
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
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 389,
                    "end": 415,
                    "argument": {
                      "type": "NewExpression",
                      "start": 396,
                      "end": 414,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 407,
                          "end": 413,
                          "decorators": [],
                          "name": "result",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 400,
                        "end": 406,
                        "decorators": [],
                        "name": "Chain2",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 171,
                  "end": 186,
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 173,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 175,
                      "end": 186,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 176,
                          "end": 180,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 177,
                            "end": 180,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 179,
                              "end": 180,
                              "typeName": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 180,
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
                        "start": 182,
                        "end": 186,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 185,
                          "end": 186,
                          "typeName": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 186,
                            "decorators": [],
                            "name": "S",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 187,
                "end": 198,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 189,
                  "end": 198,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 195,
                    "end": 198,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 196,
                        "end": 197,
                        "typeName": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
                          "decorators": [],
                          "name": "S",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 195,
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 150,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 151,
                    "end": 169,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 169,
                        "decorators": [],
                        "name": "Function",
                        "optional": false
                      }
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "S",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "decorators": [],
        "name": "Chain2",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 101,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 83,
              "end": 101,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 85,
                  "end": 99,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 91,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
