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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 72,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 73,
            "end": 101,
            "name": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 91,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 91,
                    "end": 99,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 504,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 141,
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
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 141,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 141,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 502,
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
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 502,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 150,
                "end": 170,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 151,
                    "end": 169,
                    "name": {
                      "type": "Identifier",
                      "start": 151,
                      "end": 152,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
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
                      "typeParameters": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 189,
                    "end": 195,
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                "start": 199,
                "end": 502,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 209,
                    "end": 237,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 213,
                        "end": 236,
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
                          "callee": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 224,
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "start": 225,
                              "end": 235,
                              "object": {
                                "type": "ThisExpression",
                                "start": 225,
                                "end": 229
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 230,
                                "end": 235,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          ],
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 312,
                    "end": 407,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 316,
                        "end": 396,
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
                          "callee": {
                            "type": "MemberExpression",
                            "start": 320,
                            "end": 381,
                            "object": {
                              "type": "CallExpression",
                              "start": 320,
                              "end": 364,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 320,
                                "end": 352,
                                "object": {
                                  "type": "CallExpression",
                                  "start": 320,
                                  "end": 342,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 320,
                                    "end": 329,
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 320,
                                      "end": 324
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 325,
                                      "end": 329,
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
                                      "start": 330,
                                      "end": 341,
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
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
                                      "body": {
                                        "type": "Identifier",
                                        "start": 335,
                                        "end": 341,
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "id": null,
                                      "generator": false
                                    }
                                  ],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 348,
                                  "end": 352,
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
                                  "start": 353,
                                  "end": 363,
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
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
                                  "body": {
                                    "type": "Literal",
                                    "start": 358,
                                    "end": 363,
                                    "value": "abc",
                                    "raw": "\"abc\""
                                  },
                                  "id": null,
                                  "generator": false
                                }
                              ],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 381,
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
                              "start": 382,
                              "end": 395,
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
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
                              "body": {
                                "type": "MemberExpression",
                                "start": 387,
                                "end": 395,
                                "object": {
                                  "type": "Identifier",
                                  "start": 387,
                                  "end": 388,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 389,
                                  "end": 395,
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
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
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 470,
                    "end": 496,
                    "argument": {
                      "type": "NewExpression",
                      "start": 477,
                      "end": 495,
                      "callee": {
                        "type": "Identifier",
                        "start": 481,
                        "end": 487,
                        "decorators": [],
                        "name": "Chain2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
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
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
