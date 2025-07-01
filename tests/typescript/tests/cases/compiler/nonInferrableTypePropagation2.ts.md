__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Predicate",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 26
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
          "start": 26,
          "end": 29
        },
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
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
                        "start": 40,
                        "end": 41
                      },
                      "typeArguments": null,
                      "start": 40,
                      "end": 41
                    },
                    "start": 38,
                    "end": 41
                  },
                  "start": 37,
                  "end": 41
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 44,
                  "end": 51
                },
                "start": 42,
                "end": 51
              },
              "start": 36,
              "end": 51
            }
          ],
          "start": 30,
          "end": 53
        },
        "declare": false,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 53
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Left",
        "optional": false,
        "typeAnnotation": null,
        "start": 65,
        "end": 69
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 71
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 70,
            "end": 71
          }
        ],
        "start": 69,
        "end": 72
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
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 88,
              "end": 92
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Left",
                  "raw": "'Left'",
                  "start": 94,
                  "end": 100
                },
                "start": 94,
                "end": 100
              },
              "start": 92,
              "end": 100
            },
            "accessibility": null,
            "static": false,
            "start": 79,
            "end": 100
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "left",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 118
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
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
            "accessibility": null,
            "static": false,
            "start": 105,
            "end": 121
          }
        ],
        "start": 73,
        "end": 123
      },
      "declare": false,
      "start": 55,
      "end": 123
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Right",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 142
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
              "start": 143,
              "end": 144
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 143,
            "end": 144
          }
        ],
        "start": 142,
        "end": 145
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
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 165
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "Right",
                  "raw": "'Right'",
                  "start": 167,
                  "end": 174
                },
                "start": 167,
                "end": 174
              },
              "start": 165,
              "end": 174
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 174
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "right",
              "optional": false,
              "typeAnnotation": null,
              "start": 188,
              "end": 193
            },
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
                  "start": 195,
                  "end": 196
                },
                "typeArguments": null,
                "start": 195,
                "end": 196
              },
              "start": 193,
              "end": 196
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 196
          }
        ],
        "start": 146,
        "end": 198
      },
      "declare": false,
      "start": 127,
      "end": 198
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Either",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 211
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 212,
              "end": 213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 212,
            "end": 213
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 216
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 215,
            "end": 216
          }
        ],
        "start": 211,
        "end": 217
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Left",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 224
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 225,
                    "end": 226
                  },
                  "typeArguments": null,
                  "start": 225,
                  "end": 226
                }
              ],
              "start": 224,
              "end": 227
            },
            "start": 220,
            "end": 227
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Right",
              "optional": false,
              "typeAnnotation": null,
              "start": 230,
              "end": 235
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
                    "start": 236,
                    "end": 237
                  },
                  "typeArguments": null,
                  "start": 236,
                  "end": 237
                }
              ],
              "start": 235,
              "end": 238
            },
            "start": 230,
            "end": 238
          }
        ],
        "start": 220,
        "end": 238
      },
      "declare": false,
      "start": 200,
      "end": 239
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Refinement",
        "optional": false,
        "typeAnnotation": null,
        "start": 251,
        "end": 261
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
              "start": 262,
              "end": 263
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 262,
            "end": 263
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 266
            },
            "constraint": {
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
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 265,
            "end": 276
          }
        ],
        "start": 261,
        "end": 277
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
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
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 293
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 297,
                      "end": 298
                    },
                    "typeArguments": null,
                    "start": 297,
                    "end": 298
                  },
                  "start": 297,
                  "end": 298
                },
                "start": 292,
                "end": 298
              },
              "start": 290,
              "end": 298
            },
            "start": 284,
            "end": 298
          }
        ],
        "start": 278,
        "end": 300
      },
      "declare": false,
      "start": 241,
      "end": 300
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
            "name": "filter",
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
                            "start": 331,
                            "end": 332
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 331,
                          "end": 332
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "B",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 334,
                            "end": 335
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 344,
                              "end": 345
                            },
                            "typeArguments": null,
                            "start": 344,
                            "end": 345
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 334,
                          "end": 345
                        }
                      ],
                      "start": 330,
                      "end": 346
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "refinement",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Refinement",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 359,
                              "end": 369
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
                                    "start": 370,
                                    "end": 371
                                  },
                                  "typeArguments": null,
                                  "start": 370,
                                  "end": 371
                                },
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 373,
                                    "end": 374
                                  },
                                  "typeArguments": null,
                                  "start": 373,
                                  "end": 374
                                }
                              ],
                              "start": 369,
                              "end": 375
                            },
                            "start": 359,
                            "end": 375
                          },
                          "start": 357,
                          "end": 375
                        },
                        "start": 347,
                        "end": 375
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
                            "name": "as",
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
                                  "start": 383,
                                  "end": 396
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
                                        "start": 397,
                                        "end": 398
                                      },
                                      "typeArguments": null,
                                      "start": 397,
                                      "end": 398
                                    }
                                  ],
                                  "start": 396,
                                  "end": 399
                                },
                                "start": 383,
                                "end": 399
                              },
                              "start": 381,
                              "end": 399
                            },
                            "start": 379,
                            "end": 399
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 404,
                              "end": 417
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 418,
                                    "end": 419
                                  },
                                  "typeArguments": null,
                                  "start": 418,
                                  "end": 419
                                }
                              ],
                              "start": 417,
                              "end": 420
                            },
                            "start": 404,
                            "end": 420
                          },
                          "start": 401,
                          "end": 420
                        },
                        "start": 378,
                        "end": 420
                      },
                      "start": 376,
                      "end": 420
                    },
                    "start": 330,
                    "end": 420
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
                            "start": 426,
                            "end": 427
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 426,
                          "end": 427
                        }
                      ],
                      "start": 425,
                      "end": 428
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "predicate",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Predicate",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 440,
                              "end": 449
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
                                    "start": 450,
                                    "end": 451
                                  },
                                  "typeArguments": null,
                                  "start": 450,
                                  "end": 451
                                }
                              ],
                              "start": 449,
                              "end": 452
                            },
                            "start": 440,
                            "end": 452
                          },
                          "start": 438,
                          "end": 452
                        },
                        "start": 429,
                        "end": 452
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "name": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 456,
                                "end": 457
                              },
                              "constraint": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "A",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 466,
                                  "end": 467
                                },
                                "typeArguments": null,
                                "start": 466,
                                "end": 467
                              },
                              "default": null,
                              "in": false,
                              "out": false,
                              "const": false,
                              "start": 456,
                              "end": 467
                            }
                          ],
                          "start": 455,
                          "end": 468
                        },
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bs",
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
                                  "start": 473,
                                  "end": 486
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "B",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 487,
                                        "end": 488
                                      },
                                      "typeArguments": null,
                                      "start": 487,
                                      "end": 488
                                    }
                                  ],
                                  "start": 486,
                                  "end": 489
                                },
                                "start": 473,
                                "end": 489
                              },
                              "start": 471,
                              "end": 489
                            },
                            "start": 469,
                            "end": 489
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 494,
                              "end": 507
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "B",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 508,
                                    "end": 509
                                  },
                                  "typeArguments": null,
                                  "start": 508,
                                  "end": 509
                                }
                              ],
                              "start": 507,
                              "end": 510
                            },
                            "start": 494,
                            "end": 510
                          },
                          "start": 491,
                          "end": 510
                        },
                        "start": 455,
                        "end": 510
                      },
                      "start": 453,
                      "end": 510
                    },
                    "start": 425,
                    "end": 510
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
                            "start": 516,
                            "end": 517
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 516,
                          "end": 517
                        }
                      ],
                      "start": 515,
                      "end": 518
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "predicate",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Predicate",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 530,
                              "end": 539
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
                                    "start": 540,
                                    "end": 541
                                  },
                                  "typeArguments": null,
                                  "start": 540,
                                  "end": 541
                                }
                              ],
                              "start": 539,
                              "end": 542
                            },
                            "start": 530,
                            "end": 542
                          },
                          "start": 528,
                          "end": 542
                        },
                        "start": 519,
                        "end": 542
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
                            "name": "as",
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
                                  "start": 550,
                                  "end": 563
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
                                        "start": 564,
                                        "end": 565
                                      },
                                      "typeArguments": null,
                                      "start": 564,
                                      "end": 565
                                    }
                                  ],
                                  "start": 563,
                                  "end": 566
                                },
                                "start": 550,
                                "end": 566
                              },
                              "start": 548,
                              "end": 566
                            },
                            "start": 546,
                            "end": 566
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ReadonlyArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 571,
                              "end": 584
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
                                    "start": 585,
                                    "end": 586
                                  },
                                  "typeArguments": null,
                                  "start": 585,
                                  "end": 586
                                }
                              ],
                              "start": 584,
                              "end": 587
                            },
                            "start": 571,
                            "end": 587
                          },
                          "start": 568,
                          "end": 587
                        },
                        "start": 545,
                        "end": 587
                      },
                      "start": 543,
                      "end": 587
                    },
                    "start": 515,
                    "end": 587
                  }
                ],
                "start": 324,
                "end": 589
              },
              "start": 322,
              "end": 589
            },
            "start": 316,
            "end": 589
          },
          "init": null,
          "definite": false,
          "start": 316,
          "end": 589
        }
      ],
      "declare": true,
      "start": 302,
      "end": 590
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "pipe",
        "optional": false,
        "typeAnnotation": null,
        "start": 609,
        "end": 613
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
              "start": 614,
              "end": 615
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 614,
            "end": 615
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 617,
              "end": 618
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 617,
            "end": 618
          }
        ],
        "start": 613,
        "end": 619
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
                "start": 623,
                "end": 624
              },
              "typeArguments": null,
              "start": 623,
              "end": 624
            },
            "start": 621,
            "end": 624
          },
          "start": 620,
          "end": 624
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
                        "start": 634,
                        "end": 635
                      },
                      "typeArguments": null,
                      "start": 634,
                      "end": 635
                    },
                    "start": 632,
                    "end": 635
                  },
                  "start": 631,
                  "end": 635
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
                    "start": 640,
                    "end": 641
                  },
                  "typeArguments": null,
                  "start": 640,
                  "end": 641
                },
                "start": 637,
                "end": 641
              },
              "start": 630,
              "end": 641
            },
            "start": 628,
            "end": 641
          },
          "start": 626,
          "end": 641
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
            "start": 644,
            "end": 645
          },
          "typeArguments": null,
          "start": 644,
          "end": 645
        },
        "start": 642,
        "end": 645
      },
      "body": null,
      "expression": false,
      "start": 592,
      "end": 646
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exists",
        "optional": false,
        "typeAnnotation": null,
        "start": 664,
        "end": 670
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
              "start": 671,
              "end": 672
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 671,
            "end": 672
          }
        ],
        "start": 670,
        "end": 673
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "predicate",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Predicate",
                "optional": false,
                "typeAnnotation": null,
                "start": 685,
                "end": 694
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
                      "start": 695,
                      "end": 696
                    },
                    "typeArguments": null,
                    "start": 695,
                    "end": 696
                  }
                ],
                "start": 694,
                "end": 697
              },
              "start": 685,
              "end": 697
            },
            "start": 683,
            "end": 697
          },
          "start": 674,
          "end": 697
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 702
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 701,
                "end": 702
              }
            ],
            "start": 700,
            "end": 703
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "ma",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 708,
                    "end": 714
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "E",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 715,
                          "end": 716
                        },
                        "typeArguments": null,
                        "start": 715,
                        "end": 716
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 718,
                          "end": 719
                        },
                        "typeArguments": null,
                        "start": 718,
                        "end": 719
                      }
                    ],
                    "start": 714,
                    "end": 720
                  },
                  "start": 708,
                  "end": 720
                },
                "start": 706,
                "end": 720
              },
              "start": 704,
              "end": 720
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 725,
              "end": 732
            },
            "start": 722,
            "end": 732
          },
          "start": 700,
          "end": 732
        },
        "start": 698,
        "end": 732
      },
      "body": null,
      "expression": false,
      "start": 647,
      "end": 733
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
            "name": "es",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Either",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 753,
                    "end": 759
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 760,
                        "end": 766
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 768,
                        "end": 774
                      }
                    ],
                    "start": 759,
                    "end": 775
                  },
                  "start": 753,
                  "end": 775
                },
                "start": 753,
                "end": 777
              },
              "start": 751,
              "end": 777
            },
            "start": 749,
            "end": 777
          },
          "init": null,
          "definite": false,
          "start": 749,
          "end": 777
        }
      ],
      "declare": true,
      "start": 735,
      "end": 778
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 785,
            "end": 786
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "pipe",
              "optional": false,
              "typeAnnotation": null,
              "start": 789,
              "end": 793
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "es",
                "optional": false,
                "typeAnnotation": null,
                "start": 794,
                "end": 796
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "filter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 804
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "exists",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 805,
                      "end": 811
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 813,
                            "end": 814
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 819,
                            "end": 820
                          },
                          "operator": ">",
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 823,
                            "end": 824
                          },
                          "start": 819,
                          "end": 824
                        },
                        "id": null,
                        "generator": false,
                        "start": 812,
                        "end": 824
                      }
                    ],
                    "optional": false,
                    "start": 805,
                    "end": 825
                  }
                ],
                "optional": false,
                "start": 798,
                "end": 826
              }
            ],
            "optional": false,
            "start": 789,
            "end": 827
          },
          "definite": false,
          "start": 785,
          "end": 827
        }
      ],
      "declare": false,
      "start": 779,
      "end": 827
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 827
}
```
