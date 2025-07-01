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
        "name": "IEnumerable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 21
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
              "start": 22,
              "end": 23
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 22,
            "end": 23
          }
        ],
        "start": 21,
        "end": 24
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 43
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 36,
                  "end": 43
                }
              ],
              "start": 35,
              "end": 44
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 64
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
                            "start": 65,
                            "end": 66
                          },
                          "typeArguments": null,
                          "start": 65,
                          "end": 66
                        }
                      ],
                      "start": 64,
                      "end": 67
                    },
                    "start": 53,
                    "end": 67
                  },
                  "start": 51,
                  "end": 67
                },
                "start": 45,
                "end": 67
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resultSelector",
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
                        "name": "first",
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
                              "start": 93,
                              "end": 94
                            },
                            "typeArguments": null,
                            "start": 93,
                            "end": 94
                          },
                          "start": 91,
                          "end": 94
                        },
                        "start": 86,
                        "end": 94
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "second",
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
                              "start": 104,
                              "end": 105
                            },
                            "typeArguments": null,
                            "start": 104,
                            "end": 105
                          },
                          "start": 102,
                          "end": 105
                        },
                        "start": 96,
                        "end": 105
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 114,
                            "end": 120
                          },
                          "start": 112,
                          "end": 120
                        },
                        "start": 107,
                        "end": 120
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 125,
                          "end": 132
                        },
                        "typeArguments": null,
                        "start": 125,
                        "end": 132
                      },
                      "start": 122,
                      "end": 132
                    },
                    "start": 85,
                    "end": 132
                  },
                  "start": 83,
                  "end": 132
                },
                "start": 69,
                "end": 132
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 135,
                  "end": 146
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 147,
                        "end": 154
                      },
                      "typeArguments": null,
                      "start": 147,
                      "end": 154
                    }
                  ],
                  "start": 146,
                  "end": 155
                },
                "start": 135,
                "end": 155
              },
              "start": 133,
              "end": 155
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 32,
            "end": 156
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 164
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 172
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 165,
                  "end": 172
                }
              ],
              "start": 164,
              "end": 173
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 182,
                        "end": 183
                      },
                      "typeArguments": null,
                      "start": 182,
                      "end": 183
                    },
                    "start": 182,
                    "end": 185
                  },
                  "start": 180,
                  "end": 185
                },
                "start": 174,
                "end": 185
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "resultSelector",
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
                        "name": "first",
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
                              "start": 211,
                              "end": 212
                            },
                            "typeArguments": null,
                            "start": 211,
                            "end": 212
                          },
                          "start": 209,
                          "end": 212
                        },
                        "start": 204,
                        "end": 212
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "second",
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
                              "start": 222,
                              "end": 223
                            },
                            "typeArguments": null,
                            "start": 222,
                            "end": 223
                          },
                          "start": 220,
                          "end": 223
                        },
                        "start": 214,
                        "end": 223
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 232,
                            "end": 238
                          },
                          "start": 230,
                          "end": 238
                        },
                        "start": 225,
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
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 243,
                          "end": 250
                        },
                        "typeArguments": null,
                        "start": 243,
                        "end": 250
                      },
                      "start": 240,
                      "end": 250
                    },
                    "start": 203,
                    "end": 250
                  },
                  "start": 201,
                  "end": 250
                },
                "start": 187,
                "end": 250
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 264
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 265,
                        "end": 272
                      },
                      "typeArguments": null,
                      "start": 265,
                      "end": 272
                    }
                  ],
                  "start": 264,
                  "end": 273
                },
                "start": 253,
                "end": 273
              },
              "start": 251,
              "end": 273
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 161,
            "end": 274
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null,
              "start": 279,
              "end": 282
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 283,
                    "end": 290
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 283,
                  "end": 290
                }
              ],
              "start": 282,
              "end": 291
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 295,
                  "end": 301
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 303,
                      "end": 306
                    },
                    "start": 303,
                    "end": 308
                  },
                  "start": 301,
                  "end": 308
                },
                "value": null,
                "start": 292,
                "end": 308
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 311,
                  "end": 322
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 330
                      },
                      "typeArguments": null,
                      "start": 323,
                      "end": 330
                    }
                  ],
                  "start": 322,
                  "end": 331
                },
                "start": 311,
                "end": 331
              },
              "start": 309,
              "end": 331
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 279,
            "end": 332
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "merge",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 367
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 368,
                    "end": 375
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 368,
                  "end": 375
                }
              ],
              "start": 367,
              "end": 376
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 386
                },
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
                        "name": "IEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 400,
                              "end": 401
                            },
                            "typeArguments": null,
                            "start": 400,
                            "end": 401
                          }
                        ],
                        "start": 399,
                        "end": 402
                      },
                      "start": 388,
                      "end": 402
                    },
                    "start": 388,
                    "end": 404
                  },
                  "start": 386,
                  "end": 404
                },
                "value": null,
                "start": 377,
                "end": 404
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 407,
                  "end": 418
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
                        "start": 419,
                        "end": 420
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 420
                    }
                  ],
                  "start": 418,
                  "end": 421
                },
                "start": 407,
                "end": 421
              },
              "start": 405,
              "end": 421
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 362,
            "end": 422
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "merge",
              "optional": false,
              "typeAnnotation": null,
              "start": 427,
              "end": 432
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 440
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 433,
                  "end": 440
                }
              ],
              "start": 432,
              "end": 441
            },
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 451
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 453,
                          "end": 454
                        },
                        "typeArguments": null,
                        "start": 453,
                        "end": 454
                      },
                      "start": 453,
                      "end": 456
                    },
                    "start": 453,
                    "end": 458
                  },
                  "start": 451,
                  "end": 458
                },
                "value": null,
                "start": 442,
                "end": 458
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 472
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
                        "start": 473,
                        "end": 474
                      },
                      "typeArguments": null,
                      "start": 473,
                      "end": 474
                    }
                  ],
                  "start": 472,
                  "end": 475
                },
                "start": 461,
                "end": 475
              },
              "start": 459,
              "end": 475
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 427,
            "end": 476
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 489
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
                  "name": "sequences",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 493,
                  "end": 502
                },
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
                        "name": "IEnumerable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 504,
                        "end": 515
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
                              "start": 516,
                              "end": 517
                            },
                            "typeArguments": null,
                            "start": 516,
                            "end": 517
                          }
                        ],
                        "start": 515,
                        "end": 518
                      },
                      "start": 504,
                      "end": 518
                    },
                    "start": 504,
                    "end": 520
                  },
                  "start": 502,
                  "end": 520
                },
                "value": null,
                "start": 490,
                "end": 520
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 523,
                  "end": 534
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
                        "start": 535,
                        "end": 536
                      },
                      "typeArguments": null,
                      "start": 535,
                      "end": 536
                    }
                  ],
                  "start": 534,
                  "end": 537
                },
                "start": 523,
                "end": 537
              },
              "start": 521,
              "end": 537
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 483,
            "end": 538
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "concat",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 549
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
                  "name": "sequences",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 553,
                  "end": 562
                },
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 564,
                        "end": 565
                      },
                      "typeArguments": null,
                      "start": 564,
                      "end": 565
                    },
                    "start": 564,
                    "end": 567
                  },
                  "start": 562,
                  "end": 567
                },
                "value": null,
                "start": 550,
                "end": 567
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 570,
                  "end": 581
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
                        "start": 582,
                        "end": 583
                      },
                      "typeArguments": null,
                      "start": 582,
                      "end": 583
                    }
                  ],
                  "start": 581,
                  "end": 584
                },
                "start": 570,
                "end": 584
              },
              "start": 568,
              "end": 584
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 543,
            "end": 585
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insert",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 597
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 605,
                    "end": 611
                  },
                  "start": 603,
                  "end": 611
                },
                "start": 598,
                "end": 611
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 621,
                      "end": 632
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
                            "start": 633,
                            "end": 634
                          },
                          "typeArguments": null,
                          "start": 633,
                          "end": 634
                        }
                      ],
                      "start": 632,
                      "end": 635
                    },
                    "start": 621,
                    "end": 635
                  },
                  "start": 619,
                  "end": 635
                },
                "start": 613,
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
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 638,
                  "end": 649
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
                        "start": 650,
                        "end": 651
                      },
                      "typeArguments": null,
                      "start": 650,
                      "end": 651
                    }
                  ],
                  "start": 649,
                  "end": 652
                },
                "start": 638,
                "end": 652
              },
              "start": 636,
              "end": 652
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 591,
            "end": 653
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 659,
              "end": 672
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 681,
                      "end": 692
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
                            "start": 693,
                            "end": 694
                          },
                          "typeArguments": null,
                          "start": 693,
                          "end": 694
                        }
                      ],
                      "start": 692,
                      "end": 695
                    },
                    "start": 681,
                    "end": 695
                  },
                  "start": 679,
                  "end": 695
                },
                "start": 673,
                "end": 695
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 698,
                "end": 705
              },
              "start": 696,
              "end": 705
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 659,
            "end": 706
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 711,
              "end": 724
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 725,
                    "end": 733
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 725,
                  "end": 733
                }
              ],
              "start": 724,
              "end": 734
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IEnumerable",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 754
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
                            "start": 755,
                            "end": 756
                          },
                          "typeArguments": null,
                          "start": 755,
                          "end": 756
                        }
                      ],
                      "start": 754,
                      "end": 757
                    },
                    "start": 743,
                    "end": 757
                  },
                  "start": 741,
                  "end": 757
                },
                "start": 735,
                "end": 757
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareSelector",
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
                        "name": "element",
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
                              "start": 786,
                              "end": 787
                            },
                            "typeArguments": null,
                            "start": 786,
                            "end": 787
                          },
                          "start": 784,
                          "end": 787
                        },
                        "start": 777,
                        "end": 787
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 792,
                          "end": 800
                        },
                        "typeArguments": null,
                        "start": 792,
                        "end": 800
                      },
                      "start": 789,
                      "end": 800
                    },
                    "start": 776,
                    "end": 800
                  },
                  "start": 774,
                  "end": 800
                },
                "start": 759,
                "end": 800
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 803,
                "end": 810
              },
              "start": 801,
              "end": 810
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 711,
            "end": 811
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 816,
              "end": 829
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 838,
                        "end": 839
                      },
                      "typeArguments": null,
                      "start": 838,
                      "end": 839
                    },
                    "start": 838,
                    "end": 841
                  },
                  "start": 836,
                  "end": 841
                },
                "start": 830,
                "end": 841
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 844,
                "end": 851
              },
              "start": 842,
              "end": 851
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 816,
            "end": 852
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sequenceEqual",
              "optional": false,
              "typeAnnotation": null,
              "start": 857,
              "end": 870
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 871,
                    "end": 879
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 871,
                  "end": 879
                }
              ],
              "start": 870,
              "end": 880
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "second",
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 889,
                        "end": 890
                      },
                      "typeArguments": null,
                      "start": 889,
                      "end": 890
                    },
                    "start": 889,
                    "end": 892
                  },
                  "start": 887,
                  "end": 892
                },
                "start": 881,
                "end": 892
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareSelector",
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
                        "name": "element",
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
                              "start": 921,
                              "end": 922
                            },
                            "typeArguments": null,
                            "start": 921,
                            "end": 922
                          },
                          "start": 919,
                          "end": 922
                        },
                        "start": 912,
                        "end": 922
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 927,
                          "end": 935
                        },
                        "typeArguments": null,
                        "start": 927,
                        "end": 935
                      },
                      "start": 924,
                      "end": 935
                    },
                    "start": 911,
                    "end": 935
                  },
                  "start": 909,
                  "end": 935
                },
                "start": 894,
                "end": 935
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 938,
                "end": 945
              },
              "start": 936,
              "end": 945
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 857,
            "end": 946
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toDictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 959,
              "end": 971
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 972,
                    "end": 976
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 972,
                  "end": 976
                }
              ],
              "start": 971,
              "end": 977
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
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
                        "name": "element",
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
                              "start": 1001,
                              "end": 1002
                            },
                            "typeArguments": null,
                            "start": 1001,
                            "end": 1002
                          },
                          "start": 999,
                          "end": 1002
                        },
                        "start": 992,
                        "end": 1002
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1011
                        },
                        "typeArguments": null,
                        "start": 1007,
                        "end": 1011
                      },
                      "start": 1004,
                      "end": 1011
                    },
                    "start": 991,
                    "end": 1011
                  },
                  "start": 989,
                  "end": 1011
                },
                "start": 978,
                "end": 1011
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1025
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1026,
                        "end": 1030
                      },
                      "typeArguments": null,
                      "start": 1026,
                      "end": 1030
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 1032,
                      "end": 1035
                    }
                  ],
                  "start": 1025,
                  "end": 1036
                },
                "start": 1014,
                "end": 1036
              },
              "start": 1012,
              "end": 1036
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 959,
            "end": 1037
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toDictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1042,
              "end": 1054
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1055,
                    "end": 1059
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1055,
                  "end": 1059
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1061,
                    "end": 1067
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1061,
                  "end": 1067
                }
              ],
              "start": 1054,
              "end": 1068
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
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
                        "name": "element",
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
                              "start": 1092,
                              "end": 1093
                            },
                            "typeArguments": null,
                            "start": 1092,
                            "end": 1093
                          },
                          "start": 1090,
                          "end": 1093
                        },
                        "start": 1083,
                        "end": 1093
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1098,
                          "end": 1102
                        },
                        "typeArguments": null,
                        "start": 1098,
                        "end": 1102
                      },
                      "start": 1095,
                      "end": 1102
                    },
                    "start": 1082,
                    "end": 1102
                  },
                  "start": 1080,
                  "end": 1102
                },
                "start": 1069,
                "end": 1102
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "elementSelector",
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
                        "name": "element",
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
                              "start": 1131,
                              "end": 1132
                            },
                            "typeArguments": null,
                            "start": 1131,
                            "end": 1132
                          },
                          "start": 1129,
                          "end": 1132
                        },
                        "start": 1122,
                        "end": 1132
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1137,
                          "end": 1143
                        },
                        "typeArguments": null,
                        "start": 1137,
                        "end": 1143
                      },
                      "start": 1134,
                      "end": 1143
                    },
                    "start": 1121,
                    "end": 1143
                  },
                  "start": 1119,
                  "end": 1143
                },
                "start": 1104,
                "end": 1143
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1146,
                  "end": 1157
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1158,
                        "end": 1162
                      },
                      "typeArguments": null,
                      "start": 1158,
                      "end": 1162
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1164,
                        "end": 1170
                      },
                      "typeArguments": null,
                      "start": 1164,
                      "end": 1170
                    }
                  ],
                  "start": 1157,
                  "end": 1171
                },
                "start": 1146,
                "end": 1171
              },
              "start": 1144,
              "end": 1171
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1042,
            "end": 1172
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toDictionary",
              "optional": false,
              "typeAnnotation": null,
              "start": 1177,
              "end": 1189
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1190,
                    "end": 1194
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1190,
                  "end": 1194
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1196,
                    "end": 1202
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1196,
                  "end": 1202
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TCompare",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1204,
                    "end": 1212
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1204,
                  "end": 1212
                }
              ],
              "start": 1189,
              "end": 1213
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "keySelector",
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
                        "name": "element",
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
                              "start": 1237,
                              "end": 1238
                            },
                            "typeArguments": null,
                            "start": 1237,
                            "end": 1238
                          },
                          "start": 1235,
                          "end": 1238
                        },
                        "start": 1228,
                        "end": 1238
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TKey",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1243,
                          "end": 1247
                        },
                        "typeArguments": null,
                        "start": 1243,
                        "end": 1247
                      },
                      "start": 1240,
                      "end": 1247
                    },
                    "start": 1227,
                    "end": 1247
                  },
                  "start": 1225,
                  "end": 1247
                },
                "start": 1214,
                "end": 1247
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "elementSelector",
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
                        "name": "element",
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
                              "start": 1276,
                              "end": 1277
                            },
                            "typeArguments": null,
                            "start": 1276,
                            "end": 1277
                          },
                          "start": 1274,
                          "end": 1277
                        },
                        "start": 1267,
                        "end": 1277
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1282,
                          "end": 1288
                        },
                        "typeArguments": null,
                        "start": 1282,
                        "end": 1288
                      },
                      "start": 1279,
                      "end": 1288
                    },
                    "start": 1266,
                    "end": 1288
                  },
                  "start": 1264,
                  "end": 1288
                },
                "start": 1249,
                "end": 1288
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "compareSelector",
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TKey",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1313,
                              "end": 1317
                            },
                            "typeArguments": null,
                            "start": 1313,
                            "end": 1317
                          },
                          "start": 1311,
                          "end": 1317
                        },
                        "start": 1308,
                        "end": 1317
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TCompare",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1322,
                          "end": 1330
                        },
                        "typeArguments": null,
                        "start": 1322,
                        "end": 1330
                      },
                      "start": 1319,
                      "end": 1330
                    },
                    "start": 1307,
                    "end": 1330
                  },
                  "start": 1305,
                  "end": 1330
                },
                "start": 1290,
                "end": 1330
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IDictionary",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1333,
                  "end": 1344
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1345,
                        "end": 1349
                      },
                      "typeArguments": null,
                      "start": 1345,
                      "end": 1349
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TValue",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1351,
                        "end": 1357
                      },
                      "typeArguments": null,
                      "start": 1351,
                      "end": 1357
                    }
                  ],
                  "start": 1344,
                  "end": 1358
                },
                "start": 1333,
                "end": 1358
              },
              "start": 1331,
              "end": 1358
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1177,
            "end": 1359
          }
        ],
        "start": 25,
        "end": 1361
      },
      "declare": false,
      "start": 0,
      "end": 1361
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IDictionary",
        "optional": false,
        "typeAnnotation": null,
        "start": 1373,
        "end": 1384
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null,
              "start": 1385,
              "end": 1389
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1385,
            "end": 1389
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1391,
              "end": 1397
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1391,
            "end": 1397
          }
        ],
        "start": 1384,
        "end": 1398
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "toEnumerable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1405,
              "end": 1417
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IEnumerable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1421,
                  "end": 1432
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
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
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1435,
                            "end": 1438
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TKey",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1440,
                                "end": 1444
                              },
                              "typeArguments": null,
                              "start": 1440,
                              "end": 1444
                            },
                            "start": 1438,
                            "end": 1444
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1435,
                          "end": 1445
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1446,
                            "end": 1451
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "TValue",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1453,
                                "end": 1459
                              },
                              "typeArguments": null,
                              "start": 1453,
                              "end": 1459
                            },
                            "start": 1451,
                            "end": 1459
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1446,
                          "end": 1459
                        }
                      ],
                      "start": 1433,
                      "end": 1461
                    }
                  ],
                  "start": 1432,
                  "end": 1462
                },
                "start": 1421,
                "end": 1462
              },
              "start": 1419,
              "end": 1462
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1405,
            "end": 1463
          }
        ],
        "start": 1399,
        "end": 1465
      },
      "declare": false,
      "start": 1363,
      "end": 1465
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1465
}
```
