__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain2",
        "optional": false,
        "typeAnnotation": null,
        "start": 66,
        "end": 72
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 73,
              "end": 74
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 91
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 93,
                      "end": 99
                    },
                    "start": 91,
                    "end": 99
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 85,
                  "end": 99
                }
              ],
              "start": 83,
              "end": 101
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 73,
            "end": 101
          }
        ],
        "start": 72,
        "end": 102
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 109,
              "end": 120
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 135,
                          "end": 136
                        },
                        "typeArguments": null,
                        "start": 135,
                        "end": 136
                      },
                      "start": 133,
                      "end": 136
                    },
                    "start": 128,
                    "end": 136
                  },
                  "readonly": false,
                  "static": false,
                  "start": 121,
                  "end": 136
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 138,
                "end": 141
              },
              "expression": false,
              "start": 120,
              "end": 141
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 109,
            "end": 141
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 146,
              "end": 150
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 151,
                      "end": 152
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Function",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 169
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 169
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 151,
                    "end": 169
                  }
                ],
                "start": 150,
                "end": 170
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 179,
                                "end": 180
                              },
                              "typeArguments": null,
                              "start": 179,
                              "end": 180
                            },
                            "start": 177,
                            "end": 180
                          },
                          "start": 176,
                          "end": 180
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "S",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 185,
                            "end": 186
                          },
                          "typeArguments": null,
                          "start": 185,
                          "end": 186
                        },
                        "start": 182,
                        "end": 186
                      },
                      "start": 175,
                      "end": 186
                    },
                    "start": 173,
                    "end": 186
                  },
                  "start": 171,
                  "end": 186
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 195
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 196,
                          "end": 197
                        },
                        "typeArguments": null,
                        "start": 196,
                        "end": 197
                      }
                    ],
                    "start": 195,
                    "end": 198
                  },
                  "start": 189,
                  "end": 198
                },
                "start": 187,
                "end": 198
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 219
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "cb",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 222,
                            "end": 224
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 225,
                                "end": 229
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 230,
                                "end": 235
                              },
                              "optional": false,
                              "computed": false,
                              "start": 225,
                              "end": 235
                            }
                          ],
                          "optional": false,
                          "start": 222,
                          "end": 236
                        },
                        "definite": false,
                        "start": 213,
                        "end": 236
                      }
                    ],
                    "declare": false,
                    "start": 209,
                    "end": 237
                  },
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 317
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 320,
                                      "end": 324
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "then",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 325,
                                      "end": 329
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 320,
                                    "end": 329
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "expression": true,
                                      "async": false,
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 330,
                                          "end": 331
                                        }
                                      ],
                                      "returnType": null,
                                      "body": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "result",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 335,
                                        "end": 341
                                      },
                                      "id": null,
                                      "generator": false,
                                      "start": 330,
                                      "end": 341
                                    }
                                  ],
                                  "optional": false,
                                  "start": 320,
                                  "end": 342
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 348,
                                  "end": 352
                                },
                                "optional": false,
                                "computed": false,
                                "start": 320,
                                "end": 352
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "x",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 353,
                                      "end": 354
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 358,
                                    "end": 363
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 353,
                                  "end": 363
                                }
                              ],
                              "optional": false,
                              "start": 320,
                              "end": 364
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 377,
                              "end": 381
                            },
                            "optional": false,
                            "computed": false,
                            "start": 320,
                            "end": 381
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 382,
                                  "end": 383
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 387,
                                  "end": 388
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 389,
                                  "end": 395
                                },
                                "optional": false,
                                "computed": false,
                                "start": 387,
                                "end": 395
                              },
                              "id": null,
                              "generator": false,
                              "start": 382,
                              "end": 395
                            }
                          ],
                          "optional": false,
                          "start": 320,
                          "end": 396
                        },
                        "definite": false,
                        "start": 316,
                        "end": 396
                      }
                    ],
                    "declare": false,
                    "start": 312,
                    "end": 407
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Chain2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 481,
                        "end": 487
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 494
                        }
                      ],
                      "start": 477,
                      "end": 495
                    },
                    "start": 470,
                    "end": 496
                  }
                ],
                "start": 199,
                "end": 502
              },
              "expression": false,
              "start": 150,
              "end": 502
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 146,
            "end": 502
          }
        ],
        "start": 103,
        "end": 504
      },
      "abstract": false,
      "declare": false,
      "start": 60,
      "end": 504
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 60,
  "end": 504
}
```
