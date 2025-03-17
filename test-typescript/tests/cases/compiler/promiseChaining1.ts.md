__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 60,
  "end": 504,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 60,
      "end": 504,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 504,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 120,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 136,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 502,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 502,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 199,
                "end": 502,
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
                          "optional": false,
                          "typeAnnotation": null
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
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ],
                          "callee": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 224,
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 312,
                    "end": 407,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 316,
                        "end": 396,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 320,
                          "end": 396,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "start": 382,
                              "end": 395,
                              "async": false,
                              "body": {
                                "type": "MemberExpression",
                                "start": 387,
                                "end": 395,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 387,
                                  "end": 388,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 389,
                                  "end": 395,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "expression": true,
                              "generator": false,
                              "id": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 382,
                                  "end": 383,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "returnType": null,
                              "typeParameters": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 320,
                            "end": 381,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 320,
                              "end": 364,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "start": 353,
                                  "end": 363,
                                  "async": false,
                                  "body": {
                                    "type": "Literal",
                                    "start": 358,
                                    "end": 363,
                                    "raw": "\"abc\"",
                                    "value": "abc"
                                  },
                                  "expression": true,
                                  "generator": false,
                                  "id": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 353,
                                      "end": 354,
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "returnType": null,
                                  "typeParameters": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 320,
                                "end": 352,
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
                                        "optional": false,
                                        "typeAnnotation": null
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
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      ],
                                      "returnType": null,
                                      "typeParameters": null
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
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 348,
                                  "end": 352,
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 381,
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 470,
                    "end": 496,
                    "argument": {
                      "type": "NewExpression",
                      "start": 477,
                      "end": 495,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 488,
                          "end": 494,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 487,
                        "decorators": [],
                        "name": "Chain2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
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
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 179,
                                "end": 180,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 185,
                            "end": 186,
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "typeParameters": null
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
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 196,
                          "end": 197,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 169,
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 91,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
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
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
