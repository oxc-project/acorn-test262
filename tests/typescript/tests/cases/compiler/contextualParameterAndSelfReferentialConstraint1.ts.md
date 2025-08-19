__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoExcessProperties",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 23
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
              "start": 24,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 24,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 28
          }
        ],
        "start": 23,
        "end": 29
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeArguments": null,
            "start": 32,
            "end": 33
          },
          {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 51
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 62
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 69,
                        "end": 70
                      },
                      "typeArguments": null,
                      "start": 69,
                      "end": 70
                    },
                    "start": 63,
                    "end": 70
                  },
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 78,
                        "end": 79
                      },
                      "typeArguments": null,
                      "start": 78,
                      "end": 79
                    },
                    "start": 72,
                    "end": 79
                  }
                ],
                "start": 62,
                "end": 80
              },
              "start": 55,
              "end": 80
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 83,
              "end": 88
            },
            "optional": false,
            "readonly": true,
            "start": 36,
            "end": 91
          }
        ],
        "start": 32,
        "end": 91
      },
      "declare": false,
      "start": 0,
      "end": 92
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Effect",
        "optional": false,
        "typeAnnotation": null,
        "start": 104,
        "end": 110
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
              "start": 115,
              "end": 116
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 111,
            "end": 116
          }
        ],
        "start": 110,
        "end": 117
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "EffectTypeId",
              "optional": false,
              "typeAnnotation": null,
              "start": 131,
              "end": 143
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 162
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
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNeverKeyword",
                                "start": 168,
                                "end": 173
                              },
                              "start": 166,
                              "end": 173
                            },
                            "start": 165,
                            "end": 173
                          }
                        ],
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
                              "start": 178,
                              "end": 179
                            },
                            "typeArguments": null,
                            "start": 178,
                            "end": 179
                          },
                          "start": 175,
                          "end": 179
                        },
                        "start": 164,
                        "end": 179
                      },
                      "start": 162,
                      "end": 179
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 151,
                    "end": 180
                  }
                ],
                "start": 145,
                "end": 184
              },
              "start": 143,
              "end": 184
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 185
          }
        ],
        "start": 118,
        "end": 187
      },
      "declare": false,
      "start": 94,
      "end": 187
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 206,
        "end": 210
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
              "start": 211,
              "end": 212
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 211,
            "end": 212
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 215
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 214,
            "end": 215
          }
        ],
        "start": 210,
        "end": 216
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 220,
                "end": 221
              },
              "typeArguments": null,
              "start": 220,
              "end": 221
            },
            "start": 218,
            "end": 221
          },
          "start": 217,
          "end": 221
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
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
                  "name": "a",
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
                        "start": 231,
                        "end": 232
                      },
                      "typeArguments": null,
                      "start": 231,
                      "end": 232
                    },
                    "start": 229,
                    "end": 232
                  },
                  "start": 228,
                  "end": 232
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 238
                  },
                  "typeArguments": null,
                  "start": 237,
                  "end": 238
                },
                "start": 234,
                "end": 238
              },
              "start": 227,
              "end": 238
            },
            "start": 225,
            "end": 238
          },
          "start": 223,
          "end": 238
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 241,
            "end": 242
          },
          "typeArguments": null,
          "start": 241,
          "end": 242
        },
        "start": 239,
        "end": 242
      },
      "body": null,
      "expression": false,
      "start": 189,
      "end": 243
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RepeatOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 255,
        "end": 268
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
              "start": 269,
              "end": 270
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 269,
            "end": 270
          }
        ],
        "start": 268,
        "end": 271
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "until",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 281
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
                    "name": "_",
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
                          "start": 288,
                          "end": 289
                        },
                        "typeArguments": null,
                        "start": 288,
                        "end": 289
                      },
                      "start": 286,
                      "end": 289
                    },
                    "start": 285,
                    "end": 289
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 294,
                    "end": 301
                  },
                  "start": 291,
                  "end": 301
                },
                "start": 284,
                "end": 301
              },
              "start": 282,
              "end": 301
            },
            "accessibility": null,
            "static": false,
            "start": 276,
            "end": 302
          }
        ],
        "start": 272,
        "end": 304
      },
      "declare": false,
      "start": 245,
      "end": 304
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
            "name": "repeat",
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
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 333,
                            "end": 334
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NoExcessProperties",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 343,
                              "end": 361
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "RepeatOptions",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 362,
                                    "end": 375
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
                                          "start": 376,
                                          "end": 377
                                        },
                                        "typeArguments": null,
                                        "start": 376,
                                        "end": 377
                                      }
                                    ],
                                    "start": 375,
                                    "end": 378
                                  },
                                  "start": 362,
                                  "end": 378
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "O",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 380,
                                    "end": 381
                                  },
                                  "typeArguments": null,
                                  "start": 380,
                                  "end": 381
                                }
                              ],
                              "start": 361,
                              "end": 382
                            },
                            "start": 343,
                            "end": 382
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 333,
                          "end": 382
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 384,
                            "end": 385
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 384,
                          "end": 385
                        }
                      ],
                      "start": 332,
                      "end": 386
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "O",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 401,
                              "end": 402
                            },
                            "typeArguments": null,
                            "start": 401,
                            "end": 402
                          },
                          "start": 399,
                          "end": 402
                        },
                        "start": 392,
                        "end": 402
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
                                  "name": "Effect",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 416,
                                  "end": 422
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
                                        "start": 423,
                                        "end": 424
                                      },
                                      "typeArguments": null,
                                      "start": 423,
                                      "end": 424
                                    }
                                  ],
                                  "start": 422,
                                  "end": 425
                                },
                                "start": 416,
                                "end": 425
                              },
                              "start": 414,
                              "end": 425
                            },
                            "start": 410,
                            "end": 425
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
                              "start": 430,
                              "end": 436
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
                                    "start": 437,
                                    "end": 438
                                  },
                                  "typeArguments": null,
                                  "start": 437,
                                  "end": 438
                                }
                              ],
                              "start": 436,
                              "end": 439
                            },
                            "start": 430,
                            "end": 439
                          },
                          "start": 427,
                          "end": 439
                        },
                        "start": 409,
                        "end": 439
                      },
                      "start": 407,
                      "end": 439
                    },
                    "start": 332,
                    "end": 440
                  }
                ],
                "start": 328,
                "end": 442
              },
              "start": 326,
              "end": 442
            },
            "start": 320,
            "end": 442
          },
          "init": null,
          "definite": false,
          "start": 320,
          "end": 442
        }
      ],
      "declare": true,
      "start": 306,
      "end": 443
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "pipe",
          "optional": false,
          "typeAnnotation": null,
          "start": 445,
          "end": 449
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 453,
              "end": 455
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Effect",
                "optional": false,
                "typeAnnotation": null,
                "start": 459,
                "end": 465
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 466,
                    "end": 473
                  }
                ],
                "start": 465,
                "end": 474
              },
              "start": 459,
              "end": 474
            },
            "start": 453,
            "end": 474
          },
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "repeat",
              "optional": false,
              "typeAnnotation": null,
              "start": 478,
              "end": 484
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "until",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 491,
                      "end": 496
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 500
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 520,
                              "end": 521
                            },
                            "start": 513,
                            "end": 522
                          }
                        ],
                        "start": 505,
                        "end": 539
                      },
                      "id": null,
                      "generator": false,
                      "start": 498,
                      "end": 539
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 491,
                    "end": 539
                  }
                ],
                "start": 485,
                "end": 544
              }
            ],
            "optional": false,
            "start": 478,
            "end": 545
          }
        ],
        "optional": false,
        "start": 445,
        "end": 548
      },
      "directive": null,
      "start": 445,
      "end": 549
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 549
}
```
