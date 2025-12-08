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
            "name": "inner3",
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
                            "start": 584,
                            "end": 585
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 584,
                          "end": 585
                        }
                      ],
                      "start": 583,
                      "end": 586
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
                              "start": 594,
                              "end": 595
                            },
                            "typeArguments": null,
                            "start": 594,
                            "end": 595
                          },
                          "start": 592,
                          "end": 595
                        },
                        "start": 587,
                        "end": 595
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
                                  "start": 608,
                                  "end": 609
                                },
                                "typeArguments": null,
                                "start": 608,
                                "end": 609
                              },
                              "start": 606,
                              "end": 609
                            },
                            "start": 604,
                            "end": 610
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
                                "start": 616,
                                "end": 622
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "iterator",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 623,
                                "end": 631
                              },
                              "optional": false,
                              "computed": false,
                              "start": 616,
                              "end": 631
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
                                      "start": 644,
                                      "end": 648
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
                                          "start": 652,
                                          "end": 656
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
                                              "start": 658,
                                              "end": 671
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSAnyKeyword",
                                                  "start": 672,
                                                  "end": 675
                                                }
                                              ],
                                              "start": 671,
                                              "end": 676
                                            },
                                            "start": 658,
                                            "end": 676
                                          },
                                          "start": 656,
                                          "end": 676
                                        },
                                        "value": null,
                                        "start": 649,
                                        "end": 676
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
                                          "start": 679,
                                          "end": 693
                                        },
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "params": [
                                            {
                                              "type": "TSNumberKeyword",
                                              "start": 694,
                                              "end": 700
                                            },
                                            {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "A",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 702,
                                                "end": 703
                                              },
                                              "typeArguments": null,
                                              "start": 702,
                                              "end": 703
                                            }
                                          ],
                                          "start": 693,
                                          "end": 704
                                        },
                                        "start": 679,
                                        "end": 704
                                      },
                                      "start": 677,
                                      "end": 704
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false,
                                    "start": 644,
                                    "end": 705
                                  }
                                ],
                                "start": 636,
                                "end": 711
                              },
                              "start": 634,
                              "end": 711
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 615,
                            "end": 712
                          }
                        ],
                        "start": 598,
                        "end": 716
                      },
                      "start": 596,
                      "end": 716
                    },
                    "start": 583,
                    "end": 717
                  }
                ],
                "start": 579,
                "end": 719
              },
              "start": 577,
              "end": 719
            },
            "start": 571,
            "end": 719
          },
          "init": null,
          "definite": false,
          "start": 571,
          "end": 719
        }
      ],
      "declare": true,
      "start": 557,
      "end": 720
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer2",
        "optional": false,
        "typeAnnotation": null,
        "start": 739,
        "end": 745
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
              "start": 746,
              "end": 747
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 746,
            "end": 747
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 750
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 749,
            "end": 750
          }
        ],
        "start": 745,
        "end": 751
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
                        "start": 766,
                        "end": 767
                      },
                      "typeArguments": null,
                      "start": 766,
                      "end": 767
                    },
                    "start": 764,
                    "end": 767
                  },
                  "start": 759,
                  "end": 767
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
                    "start": 772,
                    "end": 781
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 782,
                          "end": 783
                        },
                        "typeArguments": null,
                        "start": 782,
                        "end": 783
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 785,
                        "end": 788
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 790,
                        "end": 793
                      }
                    ],
                    "start": 781,
                    "end": 794
                  },
                  "start": 772,
                  "end": 794
                },
                "start": 769,
                "end": 794
              },
              "start": 758,
              "end": 794
            },
            "start": 756,
            "end": 794
          },
          "start": 752,
          "end": 794
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Y",
            "optional": false,
            "typeAnnotation": null,
            "start": 797,
            "end": 798
          },
          "typeArguments": null,
          "start": 797,
          "end": 798
        },
        "start": 795,
        "end": 798
      },
      "body": null,
      "expression": false,
      "start": 722,
      "end": 799
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 824
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer2",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 833
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
                        "start": 845,
                        "end": 846
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 845,
                      "end": 846
                    }
                  ],
                  "start": 844,
                  "end": 847
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
                          "start": 855,
                          "end": 856
                        },
                        "typeArguments": null,
                        "start": 855,
                        "end": 856
                      },
                      "start": 853,
                      "end": 856
                    },
                    "start": 848,
                    "end": 856
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "inner3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 869,
                            "end": 875
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 876,
                              "end": 881
                            }
                          ],
                          "optional": false,
                          "start": 869,
                          "end": 882
                        },
                        "start": 862,
                        "end": 882
                      },
                      "directive": null,
                      "start": 862,
                      "end": 883
                    }
                  ],
                  "start": 858,
                  "end": 885
                },
                "expression": false,
                "start": 834,
                "end": 885
              }
            ],
            "optional": false,
            "start": 827,
            "end": 886
          },
          "definite": false,
          "start": 817,
          "end": 886
        }
      ],
      "declare": false,
      "start": 811,
      "end": 887
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 905,
            "end": 912
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "outer2",
              "optional": false,
              "typeAnnotation": null,
              "start": 915,
              "end": 921
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
                        "start": 933,
                        "end": 934
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 933,
                      "end": 934
                    }
                  ],
                  "start": 932,
                  "end": 935
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
                          "start": 943,
                          "end": 944
                        },
                        "typeArguments": null,
                        "start": 943,
                        "end": 944
                      },
                      "start": 941,
                      "end": 944
                    },
                    "start": 936,
                    "end": 944
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
                            "start": 956,
                            "end": 957
                          },
                          "init": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 960,
                              "end": 966
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 967,
                                "end": 972
                              }
                            ],
                            "optional": false,
                            "start": 960,
                            "end": 973
                          },
                          "definite": false,
                          "start": 956,
                          "end": 973
                        }
                      ],
                      "declare": false,
                      "start": 950,
                      "end": 974
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "YieldExpression",
                        "delegate": true,
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 984,
                          "end": 985
                        },
                        "start": 977,
                        "end": 985
                      },
                      "directive": null,
                      "start": 977,
                      "end": 986
                    }
                  ],
                  "start": 946,
                  "end": 988
                },
                "expression": false,
                "start": 922,
                "end": 988
              }
            ],
            "optional": false,
            "start": 915,
            "end": 989
          },
          "definite": false,
          "start": 905,
          "end": 989
        }
      ],
      "declare": false,
      "start": 899,
      "end": 990
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "outer3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1009,
        "end": 1015
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
              "start": 1016,
              "end": 1017
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1016,
            "end": 1017
          }
        ],
        "start": 1015,
        "end": 1018
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
                        "start": 1036,
                        "end": 1037
                      },
                      "typeArguments": null,
                      "start": 1036,
                      "end": 1037
                    },
                    "start": 1034,
                    "end": 1037
                  },
                  "start": 1029,
                  "end": 1037
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
                    "start": 1042,
                    "end": 1051
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSNeverKeyword",
                        "start": 1052,
                        "end": 1057
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 1059,
                        "end": 1066
                      },
                      {
                        "type": "TSUnknownKeyword",
                        "start": 1068,
                        "end": 1075
                      }
                    ],
                    "start": 1051,
                    "end": 1076
                  },
                  "start": 1042,
                  "end": 1076
                },
                "start": 1039,
                "end": 1076
              },
              "start": 1028,
              "end": 1076
            },
            "start": 1026,
            "end": 1076
          },
          "start": 1022,
          "end": 1076
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1081,
          "end": 1085
        },
        "start": 1079,
        "end": 1085
      },
      "body": null,
      "expression": false,
      "start": 992,
      "end": 1086
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1097,
          "end": 1103
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
                    "start": 1115,
                    "end": 1116
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1115,
                  "end": 1116
                }
              ],
              "start": 1114,
              "end": 1117
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
                      "start": 1125,
                      "end": 1126
                    },
                    "typeArguments": null,
                    "start": 1125,
                    "end": 1126
                  },
                  "start": 1123,
                  "end": 1126
                },
                "start": 1118,
                "end": 1126
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "inner3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1139,
                        "end": 1145
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1146,
                          "end": 1151
                        }
                      ],
                      "optional": false,
                      "start": 1139,
                      "end": 1152
                    },
                    "start": 1132,
                    "end": 1152
                  },
                  "directive": null,
                  "start": 1132,
                  "end": 1153
                }
              ],
              "start": 1128,
              "end": 1155
            },
            "expression": false,
            "start": 1104,
            "end": 1155
          }
        ],
        "optional": false,
        "start": 1097,
        "end": 1156
      },
      "directive": null,
      "start": 1097,
      "end": 1157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "outer3",
          "optional": false,
          "typeAnnotation": null,
          "start": 1168,
          "end": 1174
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
                    "start": 1186,
                    "end": 1187
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1186,
                  "end": 1187
                }
              ],
              "start": 1185,
              "end": 1188
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
                      "start": 1196,
                      "end": 1197
                    },
                    "typeArguments": null,
                    "start": 1196,
                    "end": 1197
                  },
                  "start": 1194,
                  "end": 1197
                },
                "start": 1189,
                "end": 1197
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
                        "start": 1209,
                        "end": 1210
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "inner3",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1213,
                          "end": 1219
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1220,
                            "end": 1225
                          }
                        ],
                        "optional": false,
                        "start": 1213,
                        "end": 1226
                      },
                      "definite": false,
                      "start": 1209,
                      "end": 1226
                    }
                  ],
                  "declare": false,
                  "start": 1203,
                  "end": 1227
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "YieldExpression",
                    "delegate": true,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1237,
                      "end": 1238
                    },
                    "start": 1230,
                    "end": 1238
                  },
                  "directive": null,
                  "start": 1230,
                  "end": 1239
                }
              ],
              "start": 1199,
              "end": 1241
            },
            "expression": false,
            "start": 1175,
            "end": 1241
          }
        ],
        "optional": false,
        "start": 1168,
        "end": 1242
      },
      "directive": null,
      "start": 1168,
      "end": 1243
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1243
}
```
