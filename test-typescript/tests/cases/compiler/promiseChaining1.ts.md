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
      "id": {
        "type": "Identifier",
        "start": 66,
        "end": 72,
        "name": "Chain2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 103,
        "end": 504,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 109,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 120,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 120,
              "end": 141,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "value",
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
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 141,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 146,
            "end": 502,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 502,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 171,
                  "end": 186,
                  "name": "cb",
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
                          "name": "x",
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
                                "name": "T",
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
                            "name": "S",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 222,
                          "end": 236,
                          "callee": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 224,
                            "name": "cb",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 316,
                          "end": 317,
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                      "start": 330,
                                      "end": 341,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 330,
                                          "end": 331,
                                          "name": "x",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "body": {
                                        "type": "Identifier",
                                        "start": 335,
                                        "end": 341,
                                        "name": "result",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                  "start": 348,
                                  "end": 352,
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
                                  "start": 353,
                                  "end": 363,
                                  "id": null,
                                  "expression": true,
                                  "generator": false,
                                  "async": false,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 353,
                                      "end": 354,
                                      "name": "x",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "body": {
                                    "type": "Literal",
                                    "start": 358,
                                    "end": 363,
                                    "value": "abc",
                                    "raw": "\"abc\""
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
                              "start": 377,
                              "end": 381,
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
                              "start": 382,
                              "end": 395,
                              "id": null,
                              "expression": true,
                              "generator": false,
                              "async": false,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 382,
                                  "end": 383,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "body": {
                                "type": "MemberExpression",
                                "start": 387,
                                "end": 395,
                                "object": {
                                  "type": "Identifier",
                                  "start": 387,
                                  "end": 388,
                                  "name": "x",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 389,
                                  "end": 395,
                                  "name": "length",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
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
                        "name": "Chain2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 488,
                          "end": 494,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "typeArguments": null
                    }
                  }
                ]
              },
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
                      "name": "S",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 161,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 169,
                        "name": "Function",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                    "name": "Chain2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "S",
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
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
