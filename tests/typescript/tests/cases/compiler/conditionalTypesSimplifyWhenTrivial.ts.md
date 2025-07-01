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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 13,
                    "end": 19
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 13,
                  "end": 19
                }
              ],
              "start": 12,
              "end": 20
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 38
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 39,
                            "end": 45
                          },
                          "typeArguments": null,
                          "start": 39,
                          "end": 45
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Exclude",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 47,
                            "end": 54
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 61,
                                    "end": 67
                                  },
                                  "typeArguments": null,
                                  "start": 61,
                                  "end": 67
                                },
                                "start": 55,
                                "end": 67
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 69,
                                "end": 74
                              }
                            ],
                            "start": 54,
                            "end": 75
                          },
                          "start": 47,
                          "end": 75
                        }
                      ],
                      "start": 38,
                      "end": 76
                    },
                    "start": 34,
                    "end": 76
                  },
                  "start": 32,
                  "end": 76
                },
                "start": 26,
                "end": 76
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 87
                },
                "typeArguments": null,
                "start": 81,
                "end": 87
              },
              "start": 79,
              "end": 87
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 97
            },
            "id": null,
            "generator": false,
            "start": 12,
            "end": 97
          },
          "definite": false,
          "start": 6,
          "end": 97
        }
      ],
      "declare": false,
      "start": 0,
      "end": 98
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 112
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 114
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 113,
            "end": 114
          }
        ],
        "start": 112,
        "end": 115
      },
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
                "name": "Exclude",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 126
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
                      "start": 127,
                      "end": 128
                    },
                    "typeArguments": null,
                    "start": 127,
                    "end": 128
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 130,
                    "end": 135
                  }
                ],
                "start": 126,
                "end": 136
              },
              "start": 119,
              "end": 136
            },
            "start": 117,
            "end": 136
          },
          "start": 116,
          "end": 136
        }
      ],
      "returnType": null,
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
                  "name": "y",
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
                        "start": 151,
                        "end": 152
                      },
                      "typeArguments": null,
                      "start": 151,
                      "end": 152
                    },
                    "start": 149,
                    "end": 152
                  },
                  "start": 148,
                  "end": 152
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 155,
                  "end": 156
                },
                "definite": false,
                "start": 148,
                "end": 156
              }
            ],
            "declare": false,
            "start": 144,
            "end": 157
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 166,
                "end": 167
              },
              "start": 162,
              "end": 167
            },
            "directive": null,
            "start": 162,
            "end": 168
          }
        ],
        "start": 138,
        "end": 170
      },
      "expression": false,
      "start": 100,
      "end": 170
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
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 181
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 185,
                    "end": 191
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 185,
                  "end": 191
                }
              ],
              "start": 184,
              "end": 192
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 206,
                      "end": 210
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 211,
                            "end": 217
                          },
                          "typeArguments": null,
                          "start": 211,
                          "end": 217
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Extract",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 226
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 233,
                                    "end": 239
                                  },
                                  "typeArguments": null,
                                  "start": 233,
                                  "end": 239
                                },
                                "start": 227,
                                "end": 239
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 247,
                                    "end": 253
                                  },
                                  "typeArguments": null,
                                  "start": 247,
                                  "end": 253
                                },
                                "start": 241,
                                "end": 253
                              }
                            ],
                            "start": 226,
                            "end": 254
                          },
                          "start": 219,
                          "end": 254
                        }
                      ],
                      "start": 210,
                      "end": 255
                    },
                    "start": 206,
                    "end": 255
                  },
                  "start": 204,
                  "end": 255
                },
                "start": 198,
                "end": 255
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 266
                },
                "typeArguments": null,
                "start": 260,
                "end": 266
              },
              "start": 258,
              "end": 266
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 276
            },
            "id": null,
            "generator": false,
            "start": 184,
            "end": 276
          },
          "definite": false,
          "start": 178,
          "end": 276
        }
      ],
      "declare": false,
      "start": 172,
      "end": 277
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 288,
        "end": 291
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
      },
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
                "name": "Extract",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 305
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
                      "start": 306,
                      "end": 307
                    },
                    "typeArguments": null,
                    "start": 306,
                    "end": 307
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 310
                    },
                    "typeArguments": null,
                    "start": 309,
                    "end": 310
                  }
                ],
                "start": 305,
                "end": 311
              },
              "start": 298,
              "end": 311
            },
            "start": 296,
            "end": 311
          },
          "start": 295,
          "end": 311
        }
      ],
      "returnType": null,
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
                  "name": "y",
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
                        "start": 326,
                        "end": 327
                      },
                      "typeArguments": null,
                      "start": 326,
                      "end": 327
                    },
                    "start": 324,
                    "end": 327
                  },
                  "start": 323,
                  "end": 327
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 331
                },
                "definite": false,
                "start": 323,
                "end": 331
              }
            ],
            "declare": false,
            "start": 319,
            "end": 332
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 338
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 342
              },
              "start": 337,
              "end": 342
            },
            "directive": null,
            "start": 337,
            "end": 343
          }
        ],
        "start": 313,
        "end": 345
      },
      "expression": false,
      "start": 279,
      "end": 345
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Extract",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 362,
                  "end": 369
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 370,
                          "end": 376
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 379,
                          "end": 385
                        }
                      ],
                      "start": 370,
                      "end": 385
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 387,
                      "end": 390
                    }
                  ],
                  "start": 369,
                  "end": 391
                },
                "start": 362,
                "end": 391
              },
              "start": 360,
              "end": 391
            },
            "start": 359,
            "end": 391
          },
          "init": null,
          "definite": false,
          "start": 359,
          "end": 391
        }
      ],
      "declare": true,
      "start": 347,
      "end": 392
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtractWithDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 444,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 466,
              "end": 467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 466,
            "end": 467
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 470
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 473,
              "end": 478
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 469,
            "end": 478
          }
        ],
        "start": 462,
        "end": 479
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 482,
            "end": 483
          },
          "typeArguments": null,
          "start": 482,
          "end": 483
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 492,
            "end": 493
          },
          "typeArguments": null,
          "start": 492,
          "end": 493
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 496,
            "end": 497
          },
          "typeArguments": null,
          "start": 496,
          "end": 497
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 500,
            "end": 501
          },
          "typeArguments": null,
          "start": 500,
          "end": 501
        },
        "start": 482,
        "end": 501
      },
      "declare": false,
      "start": 439,
      "end": 502
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExcludeWithDefault",
        "optional": false,
        "typeAnnotation": null,
        "start": 509,
        "end": 527
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
              "start": 528,
              "end": 529
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 528,
            "end": 529
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 531,
              "end": 532
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 531,
            "end": 532
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 534,
              "end": 535
            },
            "constraint": null,
            "default": {
              "type": "TSNeverKeyword",
              "start": 538,
              "end": 543
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 534,
            "end": 543
          }
        ],
        "start": 527,
        "end": 544
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 547,
            "end": 548
          },
          "typeArguments": null,
          "start": 547,
          "end": 548
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null,
            "start": 557,
            "end": 558
          },
          "typeArguments": null,
          "start": 557,
          "end": 558
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "D",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "typeArguments": null,
          "start": 561,
          "end": 562
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 566
          },
          "typeArguments": null,
          "start": 565,
          "end": 566
        },
        "start": 547,
        "end": 566
      },
      "declare": false,
      "start": 504,
      "end": 567
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
            "name": "fn5",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 582,
                    "end": 588
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 582,
                  "end": 588
                }
              ],
              "start": 581,
              "end": 589
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 603,
                      "end": 607
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 614
                          },
                          "typeArguments": null,
                          "start": 608,
                          "end": 614
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExcludeWithDefault",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 616,
                            "end": 634
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 641,
                                    "end": 647
                                  },
                                  "typeArguments": null,
                                  "start": 641,
                                  "end": 647
                                },
                                "start": 635,
                                "end": 647
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 649,
                                "end": 654
                              }
                            ],
                            "start": 634,
                            "end": 655
                          },
                          "start": 616,
                          "end": 655
                        }
                      ],
                      "start": 607,
                      "end": 656
                    },
                    "start": 603,
                    "end": 656
                  },
                  "start": 601,
                  "end": 656
                },
                "start": 595,
                "end": 656
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 661,
                  "end": 667
                },
                "typeArguments": null,
                "start": 661,
                "end": 667
              },
              "start": 659,
              "end": 667
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 671,
              "end": 677
            },
            "id": null,
            "generator": false,
            "start": 581,
            "end": 677
          },
          "definite": false,
          "start": 575,
          "end": 677
        }
      ],
      "declare": false,
      "start": 569,
      "end": 678
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 689,
        "end": 692
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 693,
              "end": 694
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 693,
            "end": 694
          }
        ],
        "start": 692,
        "end": 695
      },
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
                "name": "ExcludeWithDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 699,
                "end": 717
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
                      "start": 718,
                      "end": 719
                    },
                    "typeArguments": null,
                    "start": 718,
                    "end": 719
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 721,
                    "end": 726
                  }
                ],
                "start": 717,
                "end": 727
              },
              "start": 699,
              "end": 727
            },
            "start": 697,
            "end": 727
          },
          "start": 696,
          "end": 727
        }
      ],
      "returnType": null,
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
                  "name": "y",
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
                        "start": 742,
                        "end": 743
                      },
                      "typeArguments": null,
                      "start": 742,
                      "end": 743
                    },
                    "start": 740,
                    "end": 743
                  },
                  "start": 739,
                  "end": 743
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 747
                },
                "definite": false,
                "start": 739,
                "end": 747
              }
            ],
            "declare": false,
            "start": 735,
            "end": 748
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 758
              },
              "start": 753,
              "end": 758
            },
            "directive": null,
            "start": 753,
            "end": 759
          }
        ],
        "start": 729,
        "end": 761
      },
      "expression": false,
      "start": 680,
      "end": 761
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
            "name": "fn7",
            "optional": false,
            "typeAnnotation": null,
            "start": 769,
            "end": 772
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 776,
                    "end": 782
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 776,
                  "end": 782
                }
              ],
              "start": 775,
              "end": 783
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 801
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 802,
                            "end": 808
                          },
                          "typeArguments": null,
                          "start": 802,
                          "end": 808
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "ExtractWithDefault",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 810,
                            "end": 828
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 835,
                                    "end": 841
                                  },
                                  "typeArguments": null,
                                  "start": 835,
                                  "end": 841
                                },
                                "start": 829,
                                "end": 841
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 849,
                                    "end": 855
                                  },
                                  "typeArguments": null,
                                  "start": 849,
                                  "end": 855
                                },
                                "start": 843,
                                "end": 855
                              }
                            ],
                            "start": 828,
                            "end": 856
                          },
                          "start": 810,
                          "end": 856
                        }
                      ],
                      "start": 801,
                      "end": 857
                    },
                    "start": 797,
                    "end": 857
                  },
                  "start": 795,
                  "end": 857
                },
                "start": 789,
                "end": 857
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 862,
                  "end": 868
                },
                "typeArguments": null,
                "start": 862,
                "end": 868
              },
              "start": 860,
              "end": 868
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 872,
              "end": 878
            },
            "id": null,
            "generator": false,
            "start": 775,
            "end": 878
          },
          "definite": false,
          "start": 769,
          "end": 878
        }
      ],
      "declare": false,
      "start": 763,
      "end": 879
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn8",
        "optional": false,
        "typeAnnotation": null,
        "start": 890,
        "end": 893
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 894,
              "end": 895
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 894,
            "end": 895
          }
        ],
        "start": 893,
        "end": 896
      },
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
                "name": "ExtractWithDefault",
                "optional": false,
                "typeAnnotation": null,
                "start": 900,
                "end": 918
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
                      "start": 919,
                      "end": 920
                    },
                    "typeArguments": null,
                    "start": 919,
                    "end": 920
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 923
                    },
                    "typeArguments": null,
                    "start": 922,
                    "end": 923
                  }
                ],
                "start": 918,
                "end": 924
              },
              "start": 900,
              "end": 924
            },
            "start": 898,
            "end": 924
          },
          "start": 897,
          "end": 924
        }
      ],
      "returnType": null,
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
                  "name": "y",
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
                        "start": 939,
                        "end": 940
                      },
                      "typeArguments": null,
                      "start": 939,
                      "end": 940
                    },
                    "start": 937,
                    "end": 940
                  },
                  "start": 936,
                  "end": 940
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 944
                },
                "definite": false,
                "start": 936,
                "end": 944
              }
            ],
            "declare": false,
            "start": 932,
            "end": 945
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 950,
                "end": 951
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 954,
                "end": 955
              },
              "start": 950,
              "end": 955
            },
            "directive": null,
            "start": 950,
            "end": 956
          }
        ],
        "start": 926,
        "end": 958
      },
      "expression": false,
      "start": 881,
      "end": 958
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TemplatedConditional",
        "optional": false,
        "typeAnnotation": null,
        "start": 965,
        "end": 985
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TCheck",
              "optional": false,
              "typeAnnotation": null,
              "start": 986,
              "end": 992
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 986,
            "end": 992
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TExtends",
              "optional": false,
              "typeAnnotation": null,
              "start": 994,
              "end": 1002
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 994,
            "end": 1002
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TTrue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1004,
              "end": 1009
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1004,
            "end": 1009
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TFalse",
              "optional": false,
              "typeAnnotation": null,
              "start": 1011,
              "end": 1017
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1011,
            "end": 1017
          }
        ],
        "start": 985,
        "end": 1018
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TCheck",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1027
          },
          "typeArguments": null,
          "start": 1021,
          "end": 1027
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TExtends",
            "optional": false,
            "typeAnnotation": null,
            "start": 1036,
            "end": 1044
          },
          "typeArguments": null,
          "start": 1036,
          "end": 1044
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TTrue",
            "optional": false,
            "typeAnnotation": null,
            "start": 1047,
            "end": 1052
          },
          "typeArguments": null,
          "start": 1047,
          "end": 1052
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "TFalse",
            "optional": false,
            "typeAnnotation": null,
            "start": 1055,
            "end": 1061
          },
          "typeArguments": null,
          "start": 1055,
          "end": 1061
        },
        "start": 1021,
        "end": 1061
      },
      "declare": false,
      "start": 960,
      "end": 1062
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
            "name": "fn9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1070,
            "end": 1073
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1077,
                    "end": 1083
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1077,
                  "end": 1083
                }
              ],
              "start": 1076,
              "end": 1084
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1098,
                      "end": 1102
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1103,
                            "end": 1109
                          },
                          "typeArguments": null,
                          "start": 1103,
                          "end": 1109
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1111,
                            "end": 1131
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1138,
                                    "end": 1144
                                  },
                                  "typeArguments": null,
                                  "start": 1138,
                                  "end": 1144
                                },
                                "start": 1132,
                                "end": 1144
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1146,
                                "end": 1151
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1153,
                                "end": 1158
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1166,
                                    "end": 1172
                                  },
                                  "typeArguments": null,
                                  "start": 1166,
                                  "end": 1172
                                },
                                "start": 1160,
                                "end": 1172
                              }
                            ],
                            "start": 1131,
                            "end": 1173
                          },
                          "start": 1111,
                          "end": 1173
                        }
                      ],
                      "start": 1102,
                      "end": 1174
                    },
                    "start": 1098,
                    "end": 1174
                  },
                  "start": 1096,
                  "end": 1174
                },
                "start": 1090,
                "end": 1174
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1179,
                  "end": 1185
                },
                "typeArguments": null,
                "start": 1179,
                "end": 1185
              },
              "start": 1177,
              "end": 1185
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 1189,
              "end": 1195
            },
            "id": null,
            "generator": false,
            "start": 1076,
            "end": 1195
          },
          "definite": false,
          "start": 1070,
          "end": 1195
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1196
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1207,
        "end": 1211
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1212,
              "end": 1213
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1212,
            "end": 1213
          }
        ],
        "start": 1211,
        "end": 1214
      },
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
                "name": "TemplatedConditional",
                "optional": false,
                "typeAnnotation": null,
                "start": 1218,
                "end": 1238
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
                      "start": 1239,
                      "end": 1240
                    },
                    "typeArguments": null,
                    "start": 1239,
                    "end": 1240
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1242,
                    "end": 1247
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1249,
                    "end": 1254
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1256,
                      "end": 1257
                    },
                    "typeArguments": null,
                    "start": 1256,
                    "end": 1257
                  }
                ],
                "start": 1238,
                "end": 1258
              },
              "start": 1218,
              "end": 1258
            },
            "start": 1216,
            "end": 1258
          },
          "start": 1215,
          "end": 1258
        }
      ],
      "returnType": null,
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
                  "name": "y",
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
                        "start": 1273,
                        "end": 1274
                      },
                      "typeArguments": null,
                      "start": 1273,
                      "end": 1274
                    },
                    "start": 1271,
                    "end": 1274
                  },
                  "start": 1270,
                  "end": 1274
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1277,
                  "end": 1278
                },
                "definite": false,
                "start": 1270,
                "end": 1278
              }
            ],
            "declare": false,
            "start": 1266,
            "end": 1279
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1284,
                "end": 1285
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1288,
                "end": 1289
              },
              "start": 1284,
              "end": 1289
            },
            "directive": null,
            "start": 1284,
            "end": 1290
          }
        ],
        "start": 1260,
        "end": 1292
      },
      "expression": false,
      "start": 1198,
      "end": 1292
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
            "name": "fn11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1300,
            "end": 1304
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Params",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1308,
                    "end": 1314
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1308,
                  "end": 1314
                }
              ],
              "start": 1307,
              "end": 1315
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "params",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Pick",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1329,
                      "end": 1333
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1334,
                            "end": 1340
                          },
                          "typeArguments": null,
                          "start": 1334,
                          "end": 1340
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TemplatedConditional",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1342,
                            "end": 1362
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
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1369,
                                    "end": 1375
                                  },
                                  "typeArguments": null,
                                  "start": 1369,
                                  "end": 1375
                                },
                                "start": 1363,
                                "end": 1375
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1383,
                                    "end": 1389
                                  },
                                  "typeArguments": null,
                                  "start": 1383,
                                  "end": 1389
                                },
                                "start": 1377,
                                "end": 1389
                              },
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Params",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1397,
                                    "end": 1403
                                  },
                                  "typeArguments": null,
                                  "start": 1397,
                                  "end": 1403
                                },
                                "start": 1391,
                                "end": 1403
                              },
                              {
                                "type": "TSNeverKeyword",
                                "start": 1405,
                                "end": 1410
                              }
                            ],
                            "start": 1362,
                            "end": 1411
                          },
                          "start": 1342,
                          "end": 1411
                        }
                      ],
                      "start": 1333,
                      "end": 1412
                    },
                    "start": 1329,
                    "end": 1412
                  },
                  "start": 1327,
                  "end": 1412
                },
                "start": 1321,
                "end": 1412
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1417,
                  "end": 1423
                },
                "typeArguments": null,
                "start": 1417,
                "end": 1423
              },
              "start": 1415,
              "end": 1423
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "params",
              "optional": false,
              "typeAnnotation": null,
              "start": 1427,
              "end": 1433
            },
            "id": null,
            "generator": false,
            "start": 1307,
            "end": 1433
          },
          "definite": false,
          "start": 1300,
          "end": 1433
        }
      ],
      "declare": false,
      "start": 1294,
      "end": 1434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1445,
        "end": 1449
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1450,
              "end": 1451
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1450,
            "end": 1451
          }
        ],
        "start": 1449,
        "end": 1452
      },
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
                "name": "TemplatedConditional",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1476
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
                      "start": 1477,
                      "end": 1478
                    },
                    "typeArguments": null,
                    "start": 1477,
                    "end": 1478
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1480,
                      "end": 1481
                    },
                    "typeArguments": null,
                    "start": 1480,
                    "end": 1481
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1483,
                      "end": 1484
                    },
                    "typeArguments": null,
                    "start": 1483,
                    "end": 1484
                  },
                  {
                    "type": "TSNeverKeyword",
                    "start": 1486,
                    "end": 1491
                  }
                ],
                "start": 1476,
                "end": 1492
              },
              "start": 1456,
              "end": 1492
            },
            "start": 1454,
            "end": 1492
          },
          "start": 1453,
          "end": 1492
        }
      ],
      "returnType": null,
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
                  "name": "y",
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
                        "start": 1507,
                        "end": 1508
                      },
                      "typeArguments": null,
                      "start": 1507,
                      "end": 1508
                    },
                    "start": 1505,
                    "end": 1508
                  },
                  "start": 1504,
                  "end": 1508
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1511,
                  "end": 1512
                },
                "definite": false,
                "start": 1504,
                "end": 1512
              }
            ],
            "declare": false,
            "start": 1500,
            "end": 1513
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 1518,
                "end": 1519
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 1522,
                "end": 1523
              },
              "start": 1518,
              "end": 1523
            },
            "directive": null,
            "start": 1518,
            "end": 1524
          }
        ],
        "start": 1494,
        "end": 1526
      },
      "expression": false,
      "start": 1436,
      "end": 1526
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1543,
                "end": 1546
              },
              "start": 1541,
              "end": 1546
            },
            "start": 1540,
            "end": 1546
          },
          "init": null,
          "definite": false,
          "start": 1540,
          "end": 1546
        }
      ],
      "declare": true,
      "start": 1528,
      "end": 1547
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
            "name": "zee",
            "optional": false,
            "typeAnnotation": null,
            "start": 1554,
            "end": 1557
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1560,
                  "end": 1561
                },
                "start": 1560,
                "end": 1562
              },
              "start": 1560,
              "end": 1563
            },
            "start": 1560,
            "end": 1564
          },
          "definite": false,
          "start": 1554,
          "end": 1564
        }
      ],
      "declare": false,
      "start": 1548,
      "end": 1565
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1669
}
```
