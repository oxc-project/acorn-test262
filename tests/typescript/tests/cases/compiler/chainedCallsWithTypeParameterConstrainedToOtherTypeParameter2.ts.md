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
