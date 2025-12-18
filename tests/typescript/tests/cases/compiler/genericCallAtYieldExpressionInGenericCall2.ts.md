__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
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
                "start": 22,
                "end": 28
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 37
              },
              "optional": false,
              "computed": false,
              "start": 22,
              "end": 37
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
                      "start": 48,
                      "end": 52
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
                          "start": 56,
                          "end": 60
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
                              "start": 62,
                              "end": 75
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSAnyKeyword",
                                  "start": 76,
                                  "end": 79
                                }
                              ],
                              "start": 75,
                              "end": 80
                            },
                            "start": 62,
                            "end": 80
                          },
                          "start": 60,
                          "end": 80
                        },
                        "value": null,
                        "start": 53,
                        "end": 80
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
                          "start": 83,
                          "end": 97
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 98,
                              "end": 101
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 103,
                              "end": 106
                            }
                          ],
                          "start": 97,
                          "end": 107
                        },
                        "start": 83,
                        "end": 107
                      },
                      "start": 81,
                      "end": 107
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 48,
                    "end": 108
                  }
                ],
                "start": 42,
                "end": 112
              },
              "start": 40,
              "end": 112
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 21,
            "end": 113
          }
        ],
        "start": 17,
        "end": 115
      },
      "declare": false,
      "start": 0,
      "end": 115
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Enqueue",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 134
      },
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
              "start": 135,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 136
          }
        ],
        "start": 134,
        "end": 137
      },
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
              "name": "offer",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
            },
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
                          "start": 157,
                          "end": 158
                        },
                        "typeArguments": null,
                        "start": 157,
                        "end": 158
                      },
                      "start": 155,
                      "end": 158
                    },
                    "start": 150,
                    "end": 158
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Effect",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 169
                    },
                    "typeArguments": null,
                    "start": 163,
                    "end": 169
                  },
                  "start": 160,
                  "end": 169
                },
                "start": 149,
                "end": 169
              },
              "start": 147,
              "end": 169
            },
            "accessibility": null,
            "static": false,
            "start": 142,
            "end": 170
          }
        ],
        "start": 138,
        "end": 172
      },
      "declare": false,
      "start": 117,
      "end": 172
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
            "name": "offer",
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
                            "start": 200,
                            "end": 201
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 200,
                          "end": 201
                        }
                      ],
                      "start": 199,
                      "end": 202
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
                              "start": 210,
                              "end": 211
                            },
                            "typeArguments": null,
                            "start": 210,
                            "end": 211
                          },
                          "start": 208,
                          "end": 211
                        },
                        "start": 203,
                        "end": 211
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "self",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Enqueue",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 221,
                                  "end": 228
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "A",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 229,
                                        "end": 230
                                      },
                                      "typeArguments": null,
                                      "start": 229,
                                      "end": 230
                                    }
                                  ],
                                  "start": 228,
                                  "end": 231
                                },
                                "start": 221,
                                "end": 231
                              },
                              "start": 219,
                              "end": 231
                            },
                            "start": 215,
                            "end": 231
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Effect",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 236,
                              "end": 242
                            },
                            "typeArguments": null,
                            "start": 236,
                            "end": 242
                          },
                          "start": 233,
                          "end": 242
                        },
                        "start": 214,
                        "end": 242
                      },
                      "start": 212,
                      "end": 242
                    },
                    "start": 199,
                    "end": 243
                  },
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
                            "start": 247,
                            "end": 248
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 247,
                          "end": 248
                        }
                      ],
                      "start": 246,
                      "end": 249
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "self",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Enqueue",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 256,
                              "end": 263
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 264,
                                    "end": 265
                                  },
                                  "typeArguments": null,
                                  "start": 264,
                                  "end": 265
                                }
                              ],
                              "start": 263,
                              "end": 266
                            },
                            "start": 256,
                            "end": 266
                          },
                          "start": 254,
                          "end": 266
                        },
                        "start": 250,
                        "end": 266
                      },
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
                              "start": 275,
                              "end": 276
                            },
                            "typeArguments": null,
                            "start": 275,
                            "end": 276
                          },
                          "start": 273,
                          "end": 276
                        },
                        "start": 268,
                        "end": 276
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Effect",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 285
                        },
                        "typeArguments": null,
                        "start": 279,
                        "end": 285
                      },
                      "start": 277,
                      "end": 285
                    },
                    "start": 246,
                    "end": 286
                  }
                ],
                "start": 195,
                "end": 288
              },
              "start": 193,
              "end": 288
            },
            "start": 188,
            "end": 288
          },
          "init": null,
          "definite": false,
          "start": 188,
          "end": 288
        }
      ],
      "declare": true,
      "start": 174,
      "end": 289
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 308,
        "end": 310
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
              "name": "Eff",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 314
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 323,
                "end": 329
              },
              "typeArguments": null,
              "start": 323,
              "end": 329
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 311,
            "end": 329
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "AEff",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 331,
            "end": 335
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 341
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 355
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 356,
                    "end": 359
                  }
                ],
                "start": 355,
                "end": 360
              },
              "start": 350,
              "end": 360
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 337,
            "end": 360
          }
        ],
        "start": 310,
        "end": 361
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 375,
                    "end": 379
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 381,
                        "end": 385
                      },
                      "typeArguments": null,
                      "start": 381,
                      "end": 385
                    },
                    "start": 379,
                    "end": 385
                  },
                  "value": null,
                  "start": 372,
                  "end": 385
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
                    "start": 390,
                    "end": 399
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Eff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 400,
                          "end": 403
                        },
                        "typeArguments": null,
                        "start": 400,
                        "end": 403
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AEff",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 409
                        },
                        "typeArguments": null,
                        "start": 405,
                        "end": 409
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 411,
                        "end": 414
                      }
                    ],
                    "start": 399,
                    "end": 415
                  },
                  "start": 390,
                  "end": 415
                },
                "start": 387,
                "end": 415
              },
              "start": 371,
              "end": 415
            },
            "start": 369,
            "end": 415
          },
          "start": 365,
          "end": 415
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
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
                "start": 424,
                "end": 428
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 430,
                    "end": 434
                  },
                  "typeArguments": null,
                  "start": 430,
                  "end": 434
                },
                "start": 428,
                "end": 434
              },
              "value": null,
              "start": 421,
              "end": 434
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 439,
              "end": 442
            },
            "start": 436,
            "end": 442
          },
          "start": 420,
          "end": 442
        },
        "start": 418,
        "end": 442
      },
      "body": null,
      "expression": false,
      "start": 291,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 447
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
                    "start": 459,
                    "end": 460
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 459,
                  "end": 460
                }
              ],
              "start": 458,
              "end": 461
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "queue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Enqueue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 476
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 478
                          },
                          "typeArguments": null,
                          "start": 477,
                          "end": 478
                        }
                      ],
                      "start": 476,
                      "end": 479
                    },
                    "start": 469,
                    "end": 479
                  },
                  "start": 467,
                  "end": 479
                },
                "start": 462,
                "end": 479
              },
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
                      "start": 488,
                      "end": 489
                    },
                    "typeArguments": null,
                    "start": 488,
                    "end": 489
                  },
                  "start": 486,
                  "end": 489
                },
                "start": 481,
                "end": 489
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
                        "name": "offer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 502,
                        "end": 507
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "queue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 513
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 515,
                          "end": 520
                        }
                      ],
                      "optional": false,
                      "start": 502,
                      "end": 521
                    },
                    "start": 495,
                    "end": 521
                  },
                  "directive": null,
                  "start": 495,
                  "end": 522
                }
              ],
              "start": 491,
              "end": 524
            },
            "expression": false,
            "start": 448,
            "end": 524
          }
        ],
        "optional": false,
        "start": 445,
        "end": 525
      },
      "directive": null,
      "start": 445,
      "end": 526
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 530
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
                    "start": 542,
                    "end": 543
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 542,
                  "end": 543
                }
              ],
              "start": 541,
              "end": 544
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "queue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Enqueue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 559
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 560,
                            "end": 561
                          },
                          "typeArguments": null,
                          "start": 560,
                          "end": 561
                        }
                      ],
                      "start": 559,
                      "end": 562
                    },
                    "start": 552,
                    "end": 562
                  },
                  "start": 550,
                  "end": 562
                },
                "start": 545,
                "end": 562
              },
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
                      "start": 571,
                      "end": 572
                    },
                    "typeArguments": null,
                    "start": 571,
                    "end": 572
                  },
                  "start": 569,
                  "end": 572
                },
                "start": 564,
                "end": 572
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
                        "start": 584,
                        "end": 585
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "offer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 588,
                          "end": 593
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "queue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 594,
                            "end": 599
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 601,
                            "end": 606
                          }
                        ],
                        "optional": false,
                        "start": 588,
                        "end": 607
                      },
                      "definite": false,
                      "start": 584,
                      "end": 607
                    }
                  ],
                  "declare": false,
                  "start": 578,
                  "end": 608
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
                      "start": 618,
                      "end": 619
                    },
                    "start": 611,
                    "end": 619
                  },
                  "directive": null,
                  "start": 611,
                  "end": 620
                }
              ],
              "start": 574,
              "end": 622
            },
            "expression": false,
            "start": 531,
            "end": 622
          }
        ],
        "optional": false,
        "start": 528,
        "end": 623
      },
      "directive": null,
      "start": 528,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 10,
    "end": 16,
    "range": [
      10,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "iterator",
    "start": 29,
    "end": 37,
    "range": [
      29,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 48,
    "end": 52,
    "range": [
      48,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 53,
    "end": 56,
    "range": [
      53,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 62,
    "end": 75,
    "range": [
      62,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 76,
    "end": 79,
    "range": [
      76,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "IteratorResult",
    "start": 83,
    "end": 97,
    "range": [
      83,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 98,
    "end": 101,
    "range": [
      98,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 103,
    "end": 106,
    "range": [
      103,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 117,
    "end": 126,
    "range": [
      117,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "Enqueue",
    "start": 127,
    "end": 134,
    "range": [
      127,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "offer",
    "start": 142,
    "end": 147,
    "range": [
      142,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 150,
    "end": 155,
    "range": [
      150,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 160,
    "end": 162,
    "range": [
      160,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 174,
    "end": 181,
    "range": [
      174,
      181
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 182,
    "end": 187,
    "range": [
      182,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "offer",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 203,
    "end": 208,
    "range": [
      203,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 215,
    "end": 219,
    "range": [
      215,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Identifier",
    "value": "Enqueue",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 233,
    "end": 235,
    "range": [
      233,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 236,
    "end": 242,
    "range": [
      236,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Enqueue",
    "start": 256,
    "end": 263,
    "range": [
      256,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 268,
    "end": 273,
    "range": [
      268,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 279,
    "end": 285,
    "range": [
      279,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 291,
    "end": 298,
    "range": [
      291,
      298
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 299,
    "end": 307,
    "range": [
      299,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 308,
    "end": 310,
    "range": [
      308,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 315,
    "end": 322,
    "range": [
      315,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "Effect",
    "start": 323,
    "end": 329,
    "range": [
      323,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 331,
    "end": 335,
    "range": [
      331,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 337,
    "end": 341,
    "range": [
      337,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 342,
    "end": 349,
    "range": [
      342,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 350,
    "end": 355,
    "range": [
      350,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 356,
    "end": 359,
    "range": [
      356,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "body",
    "start": 365,
    "end": 369,
    "range": [
      365,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 372,
    "end": 375,
    "range": [
      372,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 375,
    "end": 379,
    "range": [
      375,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 381,
    "end": 385,
    "range": [
      381,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 387,
    "end": 389,
    "range": [
      387,
      389
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 390,
    "end": 399,
    "range": [
      390,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Identifier",
    "value": "Eff",
    "start": 400,
    "end": 403,
    "range": [
      400,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "AEff",
    "start": 405,
    "end": 409,
    "range": [
      405,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 411,
    "end": 414,
    "range": [
      411,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 421,
    "end": 424,
    "range": [
      421,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 424,
    "end": 428,
    "range": [
      424,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 430,
    "end": 434,
    "range": [
      430,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 436,
    "end": 438,
    "range": [
      436,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 439,
    "end": 442,
    "range": [
      439,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 445,
    "end": 447,
    "range": [
      445,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 448,
    "end": 456,
    "range": [
      448,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "queue",
    "start": 462,
    "end": 467,
    "range": [
      462,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Identifier",
    "value": "Enqueue",
    "start": 469,
    "end": 476,
    "range": [
      469,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 481,
    "end": 486,
    "range": [
      481,
      486
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 495,
    "end": 500,
    "range": [
      495,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "offer",
    "start": 502,
    "end": 507,
    "range": [
      502,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "queue",
    "start": 508,
    "end": 513,
    "range": [
      508,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 515,
    "end": 520,
    "range": [
      515,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 528,
    "end": 530,
    "range": [
      528,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 531,
    "end": 539,
    "range": [
      531,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "queue",
    "start": 545,
    "end": 550,
    "range": [
      545,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "Enqueue",
    "start": 552,
    "end": 559,
    "range": [
      552,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 564,
    "end": 569,
    "range": [
      564,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 578,
    "end": 583,
    "range": [
      578,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "offer",
    "start": 588,
    "end": 593,
    "range": [
      588,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "queue",
    "start": 594,
    "end": 599,
    "range": [
      594,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 601,
    "end": 606,
    "range": [
      601,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 611,
    "end": 616,
    "range": [
      611,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  }
]
```
