__ESTREE_TEST__:AST:
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
        "name": "Chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
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
              "start": 21,
              "end": 32
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
                          "start": 47,
                          "end": 48
                        },
                        "typeArguments": null,
                        "start": 47,
                        "end": 48
                      },
                      "start": 45,
                      "end": 48
                    },
                    "start": 40,
                    "end": 48
                  },
                  "readonly": false,
                  "static": false,
                  "start": 33,
                  "end": 48
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 50,
                "end": 53
              },
              "expression": false,
              "start": 32,
              "end": 53
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 21,
            "end": 53
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
              "start": 58,
              "end": 62
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
                      "start": 63,
                      "end": 64
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 73,
                        "end": 74
                      },
                      "typeArguments": null,
                      "start": 73,
                      "end": 74
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 63,
                    "end": 74
                  }
                ],
                "start": 62,
                "end": 75
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
                                "start": 84,
                                "end": 85
                              },
                              "typeArguments": null,
                              "start": 84,
                              "end": 85
                            },
                            "start": 82,
                            "end": 85
                          },
                          "start": 81,
                          "end": 85
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
                            "start": 90,
                            "end": 91
                          },
                          "typeArguments": null,
                          "start": 90,
                          "end": 91
                        },
                        "start": 87,
                        "end": 91
                      },
                      "start": 80,
                      "end": 91
                    },
                    "start": 78,
                    "end": 91
                  },
                  "start": 76,
                  "end": 91
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Chain",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 99
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
                          "start": 100,
                          "end": 101
                        },
                        "typeArguments": null,
                        "start": 100,
                        "end": 101
                      }
                    ],
                    "start": 99,
                    "end": 102
                  },
                  "start": 94,
                  "end": 102
                },
                "start": 92,
                "end": 102
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
                          "name": "t",
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
                                "start": 120,
                                "end": 121
                              },
                              "typeArguments": null,
                              "start": 120,
                              "end": 121
                            },
                            "start": 118,
                            "end": 121
                          },
                          "start": 117,
                          "end": 121
                        },
                        "init": null,
                        "definite": false,
                        "start": 117,
                        "end": 121
                      }
                    ],
                    "declare": false,
                    "start": 113,
                    "end": 122
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 138,
                                "end": 139
                              },
                              "typeArguments": null,
                              "start": 138,
                              "end": 139
                            },
                            "start": 136,
                            "end": 139
                          },
                          "start": 135,
                          "end": 139
                        },
                        "init": null,
                        "definite": false,
                        "start": 135,
                        "end": 139
                      }
                    ],
                    "declare": false,
                    "start": 131,
                    "end": 140
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Chain",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 222,
                                "end": 227
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 228,
                                  "end": 229
                                }
                              ],
                              "start": 218,
                              "end": 230
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 232,
                              "end": 236
                            },
                            "optional": false,
                            "computed": false,
                            "start": 217,
                            "end": 236
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
                                  "name": "tt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 237,
                                  "end": 239
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 243,
                                "end": 244
                              },
                              "id": null,
                              "generator": false,
                              "start": 237,
                              "end": 244
                            }
                          ],
                          "optional": false,
                          "start": 217,
                          "end": 245
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 246,
                          "end": 250
                        },
                        "optional": false,
                        "computed": false,
                        "start": 217,
                        "end": 250
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
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 251,
                              "end": 253
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 258
                          },
                          "id": null,
                          "generator": false,
                          "start": 251,
                          "end": 258
                        }
                      ],
                      "optional": false,
                      "start": 217,
                      "end": 259
                    },
                    "directive": null,
                    "start": 217,
                    "end": 260
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Chain",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 325,
                            "end": 330
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "s",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 331,
                              "end": 332
                            }
                          ],
                          "start": 321,
                          "end": 333
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 339
                        },
                        "optional": false,
                        "computed": false,
                        "start": 320,
                        "end": 339
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
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 342
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 346,
                            "end": 347
                          },
                          "id": null,
                          "generator": false,
                          "start": 340,
                          "end": 347
                        }
                      ],
                      "optional": false,
                      "start": 320,
                      "end": 348
                    },
                    "directive": null,
                    "start": 320,
                    "end": 349
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 408,
                                    "end": 413
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 414,
                                      "end": 415
                                    }
                                  ],
                                  "start": 404,
                                  "end": 416
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 418,
                                  "end": 422
                                },
                                "optional": false,
                                "computed": false,
                                "start": 403,
                                "end": 422
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
                                      "name": "tt",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 423,
                                      "end": 425
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "t",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 429,
                                    "end": 430
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 423,
                                  "end": 430
                                }
                              ],
                              "optional": false,
                              "start": 403,
                              "end": 431
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 432,
                              "end": 436
                            },
                            "optional": false,
                            "computed": false,
                            "start": 403,
                            "end": 436
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
                                  "name": "tt",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 437,
                                  "end": 439
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 443,
                                "end": 444
                              },
                              "id": null,
                              "generator": false,
                              "start": 437,
                              "end": 444
                            }
                          ],
                          "optional": false,
                          "start": 403,
                          "end": 445
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 446,
                          "end": 450
                        },
                        "optional": false,
                        "computed": false,
                        "start": 403,
                        "end": 450
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
                              "name": "tt",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 451,
                              "end": 453
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 458
                          },
                          "id": null,
                          "generator": false,
                          "start": 451,
                          "end": 458
                        }
                      ],
                      "optional": false,
                      "start": 403,
                      "end": 459
                    },
                    "directive": null,
                    "start": 403,
                    "end": 460
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
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
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Chain",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 474,
                                    "end": 479
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 480,
                                      "end": 481
                                    }
                                  ],
                                  "start": 470,
                                  "end": 482
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "then",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 484,
                                  "end": 488
                                },
                                "optional": false,
                                "computed": false,
                                "start": 469,
                                "end": 488
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
                                      "name": "ss",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 489,
                                      "end": 491
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "s",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 495,
                                    "end": 496
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 489,
                                  "end": 496
                                }
                              ],
                              "optional": false,
                              "start": 469,
                              "end": 497
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 498,
                              "end": 502
                            },
                            "optional": false,
                            "computed": false,
                            "start": 469,
                            "end": 502
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
                                  "name": "ss",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 503,
                                  "end": 505
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 509,
                                "end": 510
                              },
                              "id": null,
                              "generator": false,
                              "start": 503,
                              "end": 510
                            }
                          ],
                          "optional": false,
                          "start": 469,
                          "end": 511
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 512,
                          "end": 516
                        },
                        "optional": false,
                        "computed": false,
                        "start": 469,
                        "end": 516
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
                              "name": "ss",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 517,
                              "end": 519
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 523,
                            "end": 524
                          },
                          "id": null,
                          "generator": false,
                          "start": 517,
                          "end": 524
                        }
                      ],
                      "optional": false,
                      "start": 469,
                      "end": 525
                    },
                    "directive": null,
                    "start": 469,
                    "end": 526
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 543,
                      "end": 547
                    },
                    "start": 536,
                    "end": 548
                  }
                ],
                "start": 103,
                "end": 554
              },
              "expression": false,
              "start": 62,
              "end": 554
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 554
          }
        ],
        "start": 15,
        "end": 556
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 556
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 676
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 684
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 686,
                "end": 692
              },
              "start": 684,
              "end": 692
            },
            "accessibility": null,
            "static": false,
            "start": 683,
            "end": 693
          }
        ],
        "start": 677,
        "end": 695
      },
      "declare": false,
      "start": 665,
      "end": 695
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain2",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 708
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
              "start": 709,
              "end": 710
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 719,
                "end": 720
              },
              "typeArguments": null,
              "start": 719,
              "end": 720
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 709,
            "end": 720
          }
        ],
        "start": 708,
        "end": 721
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
              "start": 728,
              "end": 739
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
                          "start": 754,
                          "end": 755
                        },
                        "typeArguments": null,
                        "start": 754,
                        "end": 755
                      },
                      "start": 752,
                      "end": 755
                    },
                    "start": 747,
                    "end": 755
                  },
                  "readonly": false,
                  "static": false,
                  "start": 740,
                  "end": 755
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 757,
                "end": 760
              },
              "expression": false,
              "start": 739,
              "end": 760
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 728,
            "end": 760
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
              "start": 765,
              "end": 769
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
                      "start": 770,
                      "end": 771
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 780,
                        "end": 781
                      },
                      "typeArguments": null,
                      "start": 780,
                      "end": 781
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 770,
                    "end": 781
                  }
                ],
                "start": 769,
                "end": 782
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
                                "start": 791,
                                "end": 792
                              },
                              "typeArguments": null,
                              "start": 791,
                              "end": 792
                            },
                            "start": 789,
                            "end": 792
                          },
                          "start": 788,
                          "end": 792
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
                            "start": 797,
                            "end": 798
                          },
                          "typeArguments": null,
                          "start": 797,
                          "end": 798
                        },
                        "start": 794,
                        "end": 798
                      },
                      "start": 787,
                      "end": 798
                    },
                    "start": 785,
                    "end": 798
                  },
                  "start": 783,
                  "end": 798
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
                    "start": 801,
                    "end": 807
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
                          "start": 808,
                          "end": 809
                        },
                        "typeArguments": null,
                        "start": 808,
                        "end": 809
                      }
                    ],
                    "start": 807,
                    "end": 810
                  },
                  "start": 801,
                  "end": 810
                },
                "start": 799,
                "end": 810
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
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 828,
                                "end": 829
                              },
                              "typeArguments": null,
                              "start": 828,
                              "end": 829
                            },
                            "start": 826,
                            "end": 829
                          },
                          "start": 825,
                          "end": 829
                        },
                        "init": null,
                        "definite": false,
                        "start": 825,
                        "end": 829
                      }
                    ],
                    "declare": false,
                    "start": 821,
                    "end": 830
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
                          "name": "t",
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
                                "start": 846,
                                "end": 847
                              },
                              "typeArguments": null,
                              "start": 846,
                              "end": 847
                            },
                            "start": 844,
                            "end": 847
                          },
                          "start": 843,
                          "end": 847
                        },
                        "init": null,
                        "definite": false,
                        "start": 843,
                        "end": 847
                      }
                    ],
                    "declare": false,
                    "start": 839,
                    "end": 848
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
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 864,
                                "end": 865
                              },
                              "typeArguments": null,
                              "start": 864,
                              "end": 865
                            },
                            "start": 862,
                            "end": 865
                          },
                          "start": 861,
                          "end": 865
                        },
                        "init": null,
                        "definite": false,
                        "start": 861,
                        "end": 865
                      }
                    ],
                    "declare": false,
                    "start": 857,
                    "end": 866
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
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
                                    "type": "NewExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Chain2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1023,
                                      "end": 1029
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "i",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1030,
                                        "end": 1031
                                      }
                                    ],
                                    "start": 1019,
                                    "end": 1032
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1034,
                                    "end": 1038
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1018,
                                  "end": 1038
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
                                        "name": "ii",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1039,
                                        "end": 1041
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1045,
                                      "end": 1046
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1039,
                                    "end": 1046
                                  }
                                ],
                                "optional": false,
                                "start": 1018,
                                "end": 1047
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1048,
                                "end": 1052
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1018,
                              "end": 1052
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
                                    "name": "tt",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1053,
                                    "end": 1055
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1059,
                                  "end": 1060
                                },
                                "id": null,
                                "generator": false,
                                "start": 1053,
                                "end": 1060
                              }
                            ],
                            "optional": false,
                            "start": 1018,
                            "end": 1061
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1062,
                            "end": 1067
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1018,
                          "end": 1067
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1068,
                          "end": 1069
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1018,
                        "end": 1069
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 1072,
                        "end": 1074
                      },
                      "start": 1018,
                      "end": 1074
                    },
                    "directive": null,
                    "start": 1018,
                    "end": 1075
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1221,
                                              "end": 1227
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1228,
                                                "end": 1229
                                              }
                                            ],
                                            "start": 1217,
                                            "end": 1230
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1232,
                                            "end": 1236
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1216,
                                          "end": 1236
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
                                                "name": "ii",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1237,
                                                "end": 1239
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "t",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1243,
                                              "end": 1244
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 1237,
                                            "end": 1244
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1216,
                                        "end": 1245
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1246,
                                        "end": 1250
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1216,
                                      "end": 1250
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
                                            "name": "tt",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1251,
                                            "end": 1253
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1257,
                                          "end": 1258
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 1251,
                                        "end": 1258
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1216,
                                    "end": 1259
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1260,
                                    "end": 1264
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1216,
                                  "end": 1264
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
                                        "name": "tt",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1265,
                                        "end": 1267
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1271,
                                      "end": 1272
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1265,
                                    "end": 1272
                                  }
                                ],
                                "optional": false,
                                "start": 1216,
                                "end": 1273
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1274,
                                "end": 1278
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1216,
                              "end": 1278
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
                                    "name": "tt",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1279,
                                    "end": 1281
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "t",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1285,
                                  "end": 1286
                                },
                                "id": null,
                                "generator": false,
                                "start": 1279,
                                "end": 1286
                              }
                            ],
                            "optional": false,
                            "start": 1216,
                            "end": 1287
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1288,
                            "end": 1293
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1216,
                          "end": 1293
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1294,
                          "end": 1295
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1216,
                        "end": 1295
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 1298,
                        "end": 1300
                      },
                      "start": 1216,
                      "end": 1300
                    },
                    "directive": null,
                    "start": 1216,
                    "end": 1301
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
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
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "NewExpression",
                                            "callee": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Chain2",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1315,
                                              "end": 1321
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "i",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1322,
                                                "end": 1323
                                              }
                                            ],
                                            "start": 1311,
                                            "end": 1324
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "then",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1326,
                                            "end": 1330
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 1310,
                                          "end": 1330
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
                                                "name": "ii",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1331,
                                                "end": 1333
                                              }
                                            ],
                                            "returnType": null,
                                            "body": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "s",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 1337,
                                              "end": 1338
                                            },
                                            "id": null,
                                            "generator": false,
                                            "start": 1331,
                                            "end": 1338
                                          }
                                        ],
                                        "optional": false,
                                        "start": 1310,
                                        "end": 1339
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "then",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1340,
                                        "end": 1344
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 1310,
                                      "end": 1344
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
                                            "name": "ss",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 1345,
                                            "end": 1347
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "s",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1351,
                                          "end": 1352
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 1345,
                                        "end": 1352
                                      }
                                    ],
                                    "optional": false,
                                    "start": 1310,
                                    "end": 1353
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "then",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1354,
                                    "end": 1358
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 1310,
                                  "end": 1358
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
                                        "name": "ss",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1359,
                                        "end": 1361
                                      }
                                    ],
                                    "returnType": null,
                                    "body": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "s",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1365,
                                      "end": 1366
                                    },
                                    "id": null,
                                    "generator": false,
                                    "start": 1359,
                                    "end": 1366
                                  }
                                ],
                                "optional": false,
                                "start": 1310,
                                "end": 1367
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "then",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1368,
                                "end": 1372
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1310,
                              "end": 1372
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
                                    "name": "ss",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1373,
                                    "end": 1375
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "s",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1379,
                                  "end": 1380
                                },
                                "id": null,
                                "generator": false,
                                "start": 1373,
                                "end": 1380
                              }
                            ],
                            "optional": false,
                            "start": 1310,
                            "end": 1381
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1382,
                            "end": 1387
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1310,
                          "end": 1387
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1388,
                          "end": 1389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1310,
                        "end": 1389
                      },
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 1392,
                        "end": 1394
                      },
                      "start": 1310,
                      "end": 1394
                    },
                    "directive": null,
                    "start": 1310,
                    "end": 1395
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1412,
                      "end": 1416
                    },
                    "start": 1405,
                    "end": 1417
                  }
                ],
                "start": 811,
                "end": 1423
              },
              "expression": false,
              "start": 769,
              "end": 1423
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 765,
            "end": 1423
          }
        ],
        "start": 722,
        "end": 1425
      },
      "abstract": false,
      "declare": false,
      "start": 696,
      "end": 1425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1425
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 6,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 21,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 33,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 58,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 65,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 76,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 81,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 94,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 121,
    "end": 122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 131,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 217,
    "end": 218
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 218,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 222,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 232,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 240,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 243,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 246,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 251,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 254,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 258,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 259,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 320,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 321,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 325,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 331,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 335,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 340,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 343,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 404,
    "end": 407
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 418,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 423,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 426,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 429,
    "end": 430
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 430,
    "end": 431
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 431,
    "end": 432
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 432,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 437,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 440,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 445,
    "end": 446
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 446,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 451,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 454,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 470,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "Chain",
    "start": 474,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 479,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 483,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 484,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 489,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 492,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 498,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 503,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 506,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 517,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 520,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 523,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 536,
    "end": 542
  },
  {
    "type": "Null",
    "value": "null",
    "start": 543,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 665,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 677,
    "end": 678
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 683,
    "end": 684
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 686,
    "end": 692
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 692,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 694,
    "end": 695
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 696,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 702,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 709,
    "end": 710
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 711,
    "end": 718
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 722,
    "end": 723
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 728,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 739,
    "end": 740
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 740,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 747,
    "end": 752
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 752,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 754,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 765,
    "end": 769
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 769,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 770,
    "end": 771
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 772,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 780,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 781,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 787,
    "end": 788
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 792,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 794,
    "end": 796
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 797,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 798,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 799,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 801,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 808,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 821,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 825,
    "end": 826
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 828,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 829,
    "end": 830
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 839,
    "end": 842
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 844,
    "end": 845
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 857,
    "end": 860
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 862,
    "end": 863
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 864,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1019,
    "end": 1022
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 1023,
    "end": 1029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1030,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1032,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1034,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1039,
    "end": 1041
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1042,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1048,
    "end": 1052
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1052,
    "end": 1053
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1053,
    "end": 1055
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1062,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1068,
    "end": 1069
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1070,
    "end": 1071
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1217,
    "end": 1220
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 1221,
    "end": 1227
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1231,
    "end": 1232
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1232,
    "end": 1236
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1236,
    "end": 1237
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1237,
    "end": 1239
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1240,
    "end": 1242
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1243,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1246,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1251,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1254,
    "end": 1256
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1260,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1265,
    "end": 1267
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1268,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1272,
    "end": 1273
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1274,
    "end": 1278
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1282,
    "end": 1284
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1286,
    "end": 1287
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1287,
    "end": 1288
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1288,
    "end": 1293
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1293,
    "end": 1294
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1298,
    "end": 1300
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1311,
    "end": 1314
  },
  {
    "type": "Identifier",
    "value": "Chain2",
    "start": 1315,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1326,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1334,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1337,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1339,
    "end": 1340
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1340,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 1345,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1348,
    "end": 1350
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1351,
    "end": 1352
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1353,
    "end": 1354
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1354,
    "end": 1358
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1358,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 1359,
    "end": 1361
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1362,
    "end": 1364
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1365,
    "end": 1366
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 1368,
    "end": 1372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1372,
    "end": 1373
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 1373,
    "end": 1375
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1376,
    "end": 1378
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1380,
    "end": 1381
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1381,
    "end": 1382
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1382,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1387,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1390,
    "end": 1391
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1392,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1405,
    "end": 1411
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1412,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1416,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1424,
    "end": 1425
  }
]
```
