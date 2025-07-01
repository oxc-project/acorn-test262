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
        "name": "UnNullify",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 36
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
              "start": 37,
              "end": 38
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 38
          }
        ],
        "start": 36,
        "end": 39
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 45,
          "end": 46
        },
        "constraint": {
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
              "start": 56,
              "end": 57
            },
            "typeArguments": null,
            "start": 56,
            "end": 57
          },
          "start": 50,
          "end": 57
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "NonNullable",
            "optional": false,
            "typeAnnotation": null,
            "start": 60,
            "end": 71
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 73
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 75
                  },
                  "typeArguments": null,
                  "start": 74,
                  "end": 75
                },
                "start": 72,
                "end": 76
              }
            ],
            "start": 71,
            "end": 77
          },
          "start": 60,
          "end": 77
        },
        "optional": false,
        "readonly": null,
        "start": 42,
        "end": 79
      },
      "declare": false,
      "start": 22,
      "end": 80
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 87,
        "end": 90
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "UnNullify",
          "optional": false,
          "typeAnnotation": null,
          "start": 93,
          "end": 102
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 105
                  },
                  "elementType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 107,
                      "end": 108
                    },
                    "start": 107,
                    "end": 108
                  },
                  "optional": false,
                  "start": 104,
                  "end": 108
                },
                {
                  "type": "TSNamedTupleMember",
                  "label": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 114,
                          "end": 115
                        },
                        "start": 114,
                        "end": 115
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 118,
                        "end": 127
                      }
                    ],
                    "start": 114,
                    "end": 127
                  },
                  "optional": true,
                  "start": 110,
                  "end": 127
                }
              ],
              "start": 103,
              "end": 128
            }
          ],
          "start": 102,
          "end": 129
        },
        "start": 93,
        "end": 129
      },
      "declare": false,
      "start": 82,
      "end": 130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 141
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "elementType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 148,
                  "end": 149
                },
                "start": 148,
                "end": 149
              },
              "optional": false,
              "start": 145,
              "end": 149
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 152
              },
              "elementType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 155,
                  "end": 156
                },
                "start": 155,
                "end": 156
              },
              "optional": true,
              "start": 151,
              "end": 156
            }
          ],
          "start": 144,
          "end": 157
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 166,
            "end": 169
          },
          "typeArguments": null,
          "start": 166,
          "end": 169
        },
        "trueType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 172,
            "end": 176
          },
          "start": 172,
          "end": 176
        },
        "falseType": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 179,
            "end": 184
          },
          "start": 179,
          "end": 184
        },
        "start": 144,
        "end": 184
      },
      "declare": false,
      "start": 132,
      "end": 185
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 264,
                      "end": 265
                    },
                    "start": 264,
                    "end": 265
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 267,
                        "end": 268
                      },
                      "start": 267,
                      "end": 268
                    },
                    "start": 267,
                    "end": 269
                  }
                ],
                "start": 263,
                "end": 270
              },
              "start": 261,
              "end": 270
            },
            "start": 260,
            "end": 270
          },
          "init": null,
          "definite": false,
          "start": 260,
          "end": 270
        }
      ],
      "declare": false,
      "start": 256,
      "end": 271
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 280,
                      "end": 281
                    },
                    "start": 280,
                    "end": 281
                  },
                  {
                    "type": "TSOptionalType",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 284,
                            "end": 285
                          },
                          "start": 284,
                          "end": 285
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 288,
                          "end": 297
                        }
                      ],
                      "start": 284,
                      "end": 297
                    },
                    "start": 283,
                    "end": 299
                  }
                ],
                "start": 279,
                "end": 300
              },
              "start": 277,
              "end": 300
            },
            "start": 276,
            "end": 300
          },
          "init": null,
          "definite": false,
          "start": 276,
          "end": 300
        }
      ],
      "declare": false,
      "start": 272,
      "end": 301
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 310,
                      "end": 311
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 313,
                        "end": 314
                      },
                      "start": 313,
                      "end": 314
                    },
                    "optional": false,
                    "start": 310,
                    "end": 314
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 316,
                      "end": 317
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 320,
                        "end": 321
                      },
                      "start": 320,
                      "end": 321
                    },
                    "optional": true,
                    "start": 316,
                    "end": 321
                  }
                ],
                "start": 309,
                "end": 322
              },
              "start": 307,
              "end": 322
            },
            "start": 306,
            "end": 322
          },
          "init": null,
          "definite": false,
          "start": 306,
          "end": 322
        }
      ],
      "declare": false,
      "start": 302,
      "end": 323
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 332,
                      "end": 333
                    },
                    "elementType": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 335,
                        "end": 336
                      },
                      "start": 335,
                      "end": 336
                    },
                    "optional": false,
                    "start": 332,
                    "end": 336
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 339
                    },
                    "elementType": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 342,
                            "end": 343
                          },
                          "start": 342,
                          "end": 343
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 346,
                          "end": 355
                        }
                      ],
                      "start": 342,
                      "end": 355
                    },
                    "optional": true,
                    "start": 338,
                    "end": 355
                  }
                ],
                "start": 331,
                "end": 356
              },
              "start": 329,
              "end": 356
            },
            "start": 328,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 328,
          "end": 356
        }
      ],
      "declare": false,
      "start": 324,
      "end": 357
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 374
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 376,
                            "end": 377
                          },
                          "start": 376,
                          "end": 377
                        },
                        {
                          "type": "TSOptionalType",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 379,
                              "end": 380
                            },
                            "start": 379,
                            "end": 380
                          },
                          "start": 379,
                          "end": 381
                        }
                      ],
                      "start": 375,
                      "end": 382
                    }
                  ],
                  "start": 374,
                  "end": 383
                },
                "start": 365,
                "end": 383
              },
              "start": 363,
              "end": 383
            },
            "start": 362,
            "end": 383
          },
          "init": null,
          "definite": false,
          "start": 362,
          "end": 383
        }
      ],
      "declare": false,
      "start": 358,
      "end": 384
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 401
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 403,
                            "end": 404
                          },
                          "start": 403,
                          "end": 404
                        },
                        {
                          "type": "TSOptionalType",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 407,
                                  "end": 408
                                },
                                "start": 407,
                                "end": 408
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 411,
                                "end": 420
                              }
                            ],
                            "start": 407,
                            "end": 420
                          },
                          "start": 406,
                          "end": 422
                        }
                      ],
                      "start": 402,
                      "end": 423
                    }
                  ],
                  "start": 401,
                  "end": 424
                },
                "start": 392,
                "end": 424
              },
              "start": 390,
              "end": 424
            },
            "start": 389,
            "end": 424
          },
          "init": null,
          "definite": false,
          "start": 389,
          "end": 424
        }
      ],
      "declare": false,
      "start": 385,
      "end": 425
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 433,
                  "end": 442
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 444,
                            "end": 445
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 447,
                              "end": 448
                            },
                            "start": 447,
                            "end": 448
                          },
                          "optional": false,
                          "start": 444,
                          "end": 448
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 451
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 454,
                              "end": 455
                            },
                            "start": 454,
                            "end": 455
                          },
                          "optional": true,
                          "start": 450,
                          "end": 455
                        }
                      ],
                      "start": 443,
                      "end": 456
                    }
                  ],
                  "start": 442,
                  "end": 457
                },
                "start": 433,
                "end": 457
              },
              "start": 431,
              "end": 457
            },
            "start": 430,
            "end": 457
          },
          "init": null,
          "definite": false,
          "start": 430,
          "end": 457
        }
      ],
      "declare": false,
      "start": 426,
      "end": 458
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UnNullify",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 466,
                  "end": 475
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 478
                          },
                          "elementType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 480,
                              "end": 481
                            },
                            "start": 480,
                            "end": 481
                          },
                          "optional": false,
                          "start": 477,
                          "end": 481
                        },
                        {
                          "type": "TSNamedTupleMember",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 483,
                            "end": 484
                          },
                          "elementType": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 487,
                                  "end": 488
                                },
                                "start": 487,
                                "end": 488
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 491,
                                "end": 500
                              }
                            ],
                            "start": 487,
                            "end": 500
                          },
                          "optional": true,
                          "start": 483,
                          "end": 500
                        }
                      ],
                      "start": 476,
                      "end": 501
                    }
                  ],
                  "start": 475,
                  "end": 502
                },
                "start": 466,
                "end": 502
              },
              "start": 464,
              "end": 502
            },
            "start": 463,
            "end": 502
          },
          "init": null,
          "definite": false,
          "start": 463,
          "end": 502
        }
      ],
      "declare": false,
      "start": 459,
      "end": 503
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 503
}
```
