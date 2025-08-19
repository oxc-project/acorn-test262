__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inner",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 26,
                            "end": 27
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 26,
                          "end": 27
                        }
                      ],
                      "start": 25,
                      "end": 28
                    },
                    "params": [
                      {
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 36,
                              "end": 37
                            },
                            "typeArguments": null,
                            "start": 36,
                            "end": 37
                          },
                          "start": 34,
                          "end": 37
                        },
                        "start": 29,
                        "end": 37
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 50,
                                  "end": 51
                                },
                                "typeArguments": null,
                                "start": 50,
                                "end": 51
                              },
                              "start": 48,
                              "end": 51
                            },
                            "start": 46,
                            "end": 52
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Symbol",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 58,
                                "end": 64
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 65,
                                "end": 73
                              },
                              "optional": false,
                              "computed": false,
                              "start": 58,
                              "end": 73
                            },
                            "computed": true,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSMethodSignature",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "next",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 86,
                                      "end": 90
                                    },
                                    "computed": false,
                                    "optional": false,
                                    "kind": "method",
                                    "typeParameters": null,
                                    "params": [
                                      {
                                        "type": "RestElement",
                                        "decorators": [],
                                        "argument": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "args",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 94,
                                          "end": 98
                                        },
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "ReadonlyArray",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 100,
                                              "end": 113
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSAnyKeyword",
                                                  "start": 114,
                                                  "end": 117
                                                }
                                              ],
                                              "start": 113,
                                              "end": 118
                                            },
                                            "start": 100,
                                            "end": 118
                                          },
                                          "start": 98,
                                          "end": 118
                                        },
                                        "value": null,
                                        "start": 91,
                                        "end": 118
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IteratorResult",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 121,
                                          "end": 135
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSAnyKeyword",
                                              "start": 136,
                                              "end": 139
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 141,
                                                "end": 142
                                              },
                                              "typeArguments": null,
                                              "start": 141,
                                              "end": 142
                                            }
                                          ],
                                          "start": 135,
                                          "end": 143
                                        },
                                        "start": 121,
                                        "end": 143
                                      },
                                      "start": 119,
                                      "end": 143
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false,
                                    "start": 86,
                                    "end": 144
                                  }
                                ],
                                "start": 78,
                                "end": 150
                              },
                              "start": 76,
                              "end": 150
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 57,
                            "end": 151
                          }
                        ],
                        "start": 40,
                        "end": 155
                      },
                      "start": 38,
                      "end": 155
                    },
                    "start": 25,
                    "end": 156
                  }
                ],
                "start": 21,
                "end": 158
              },
              "start": 19,
              "end": 158
            },
            "start": 14,
            "end": 158
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 158
        }
      ],
      "declare": true,
      "start": 0,
      "end": 159
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 178,
        "end": 183
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 185
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 184,
            "end": 185
          }
        ],
        "start": 183,
        "end": 186
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "body",
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 202
                      },
                      "typeArguments": null,
                      "start": 201,
                      "end": 202
                    },
                    "start": 199,
                    "end": 202
                  },
                  "start": 194,
                  "end": 202
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 216
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 217,
                        "end": 220
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 222,
                        "end": 225
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 227,
                        "end": 230
                      }
                    ],
                    "start": 216,
                    "end": 231
                  },
                  "start": 207,
                  "end": 231
                },
                "start": 204,
                "end": 231
              },
              "start": 193,
              "end": 231
            },
            "start": 191,
            "end": 231
          },
          "start": 187,
          "end": 231
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 234,
          "end": 238
        },
        "start": 232,
        "end": 238
      },
      "body": null,
      "expression": false,
      "start": 161,
      "end": 239
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 246
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 258,
                    "end": 259
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 258,
                  "end": 259
                }
              ],
              "start": 257,
              "end": 260
            },
            "params": [
              {
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
                      "start": 268,
                      "end": 269
                    },
                    "typeArguments": null,
                    "start": 268,
                    "end": 269
                  },
                  "start": 266,
                  "end": 269
                },
                "start": 261,
                "end": 269
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 281,
                        "end": 287
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "inner",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 297,
                            "end": 302
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 303,
                              "end": 308
                            }
                          ],
                          "optional": false,
                          "start": 297,
                          "end": 309
                        },
                        "start": 290,
                        "end": 309
                      },
                      "definite": false,
                      "start": 281,
                      "end": 309
                    }
                  ],
                  "declare": false,
                  "start": 275,
                  "end": 310
                }
              ],
              "start": 271,
              "end": 318
            },
            "expression": false,
            "start": 247,
            "end": 318
          }
        ],
        "optional": false,
        "start": 241,
        "end": 319
      },
      "directive": null,
      "start": 241,
      "end": 320
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 322,
          "end": 327
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 339,
                    "end": 340
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 339,
                  "end": 340
                }
              ],
              "start": 338,
              "end": 341
            },
            "params": [
              {
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
                      "start": 349,
                      "end": 350
                    },
                    "typeArguments": null,
                    "start": 349,
                    "end": 350
                  },
                  "start": 347,
                  "end": 350
                },
                "start": 342,
                "end": 350
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 363
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inner",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 366,
                          "end": 371
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 372,
                            "end": 377
                          }
                        ],
                        "optional": false,
                        "start": 366,
                        "end": 378
                      },
                      "definite": false,
                      "start": 362,
                      "end": 378
                    }
                  ],
                  "declare": false,
                  "start": 356,
                  "end": 379
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 394
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 404,
                          "end": 405
                        },
                        "start": 397,
                        "end": 405
                      },
                      "definite": false,
                      "start": 388,
                      "end": 405
                    }
                  ],
                  "declare": false,
                  "start": 382,
                  "end": 406
                }
              ],
              "start": 352,
              "end": 414
            },
            "expression": false,
            "start": 328,
            "end": 414
          }
        ],
        "optional": false,
        "start": 322,
        "end": 415
      },
      "directive": null,
      "start": 322,
      "end": 416
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "inner2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 445,
                            "end": 446
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 445,
                          "end": 446
                        }
                      ],
                      "start": 444,
                      "end": 447
                    },
                    "params": [
                      {
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
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 455,
                              "end": 456
                            },
                            "typeArguments": null,
                            "start": 455,
                            "end": 456
                          },
                          "start": 453,
                          "end": 456
                        },
                        "start": 448,
                        "end": 456
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 465,
                              "end": 466
                            },
                            "typeArguments": null,
                            "start": 465,
                            "end": 466
                          },
                          "start": 462,
                          "end": 466
                        },
                        "start": 459,
                        "end": 466
                      },
                      "start": 457,
                      "end": 466
                    },
                    "start": 444,
                    "end": 467
                  }
                ],
                "start": 440,
                "end": 469
              },
              "start": 438,
              "end": 469
            },
            "start": 432,
            "end": 469
          },
          "init": null,
          "definite": false,
          "start": 432,
          "end": 469
        }
      ],
      "declare": true,
      "start": 418,
      "end": 470
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 477
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 490
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 489,
                  "end": 490
                }
              ],
              "start": 488,
              "end": 491
            },
            "params": [
              {
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
                      "start": 499,
                      "end": 500
                    },
                    "typeArguments": null,
                    "start": 499,
                    "end": 500
                  },
                  "start": 497,
                  "end": 500
                },
                "start": 492,
                "end": 500
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 518
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "inner2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 534
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 535,
                              "end": 540
                            }
                          ],
                          "optional": false,
                          "start": 528,
                          "end": 541
                        },
                        "start": 521,
                        "end": 541
                      },
                      "definite": false,
                      "start": 512,
                      "end": 541
                    }
                  ],
                  "declare": false,
                  "start": 506,
                  "end": 542
                }
              ],
              "start": 502,
              "end": 553
            },
            "expression": false,
            "start": 478,
            "end": 553
          }
        ],
        "optional": false,
        "start": 472,
        "end": 554
      },
      "directive": null,
      "start": 472,
      "end": 555
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 555
}
```
