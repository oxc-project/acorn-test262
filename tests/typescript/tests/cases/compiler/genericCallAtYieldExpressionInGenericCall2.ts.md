__ESTREE_TEST__:PASS:
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
