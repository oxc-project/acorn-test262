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
        "name": "UnshiftTuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 39
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
              "start": 40,
              "end": 41
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 54,
                      "end": 57
                    },
                    "start": 54,
                    "end": 59
                  },
                  "start": 51,
                  "end": 59
                }
              ],
              "start": 50,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 40,
            "end": 60
          }
        ],
        "start": 39,
        "end": 61
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
            "start": 64,
            "end": 65
          },
          "typeArguments": null,
          "start": 64,
          "end": 65
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 75,
                  "end": 76
                },
                "typeArguments": null,
                "start": 75,
                "end": 76
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 77,
                  "end": 78
                },
                "start": 77,
                "end": 78
              },
              "start": 75,
              "end": 79
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 90,
                    "end": 94
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 90,
                  "end": 94
                },
                "start": 84,
                "end": 94
              },
              "start": 81,
              "end": 94
            }
          ],
          "start": 74,
          "end": 95
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Tail",
            "optional": false,
            "typeAnnotation": null,
            "start": 98,
            "end": 102
          },
          "typeArguments": null,
          "start": 98,
          "end": 102
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 105,
          "end": 110
        },
        "start": 64,
        "end": 110
      },
      "declare": false,
      "start": 22,
      "end": 111
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExpandSmallerTuples",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 136
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
              "start": 137,
              "end": 138
            },
            "constraint": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 151,
                      "end": 154
                    },
                    "start": 151,
                    "end": 156
                  },
                  "start": 148,
                  "end": 156
                }
              ],
              "start": 147,
              "end": 157
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 137,
            "end": 157
          }
        ],
        "start": 136,
        "end": 158
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
            "start": 161,
            "end": 162
          },
          "typeArguments": null,
          "start": 161,
          "end": 162
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
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
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 174,
                  "end": 175
                },
                "start": 174,
                "end": 175
              },
              "start": 172,
              "end": 176
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Tail",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 187,
                    "end": 191
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 187,
                  "end": 191
                },
                "start": 181,
                "end": 191
              },
              "start": 178,
              "end": 191
            }
          ],
          "start": 171,
          "end": 192
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 196
              },
              "typeArguments": null,
              "start": 195,
              "end": 196
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ExpandSmallerTuples",
                "optional": false,
                "typeAnnotation": null,
                "start": 199,
                "end": 218
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tail",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 223
                    },
                    "typeArguments": null,
                    "start": 219,
                    "end": 223
                  }
                ],
                "start": 218,
                "end": 224
              },
              "start": 199,
              "end": 224
            }
          ],
          "start": 195,
          "end": 224
        },
        "falseType": {
          "type": "TSTupleType",
          "elementTypes": [],
          "start": 227,
          "end": 229
        },
        "start": 161,
        "end": 229
      },
      "declare": false,
      "start": 112,
      "end": 230
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shift",
        "optional": false,
        "typeAnnotation": null,
        "start": 236,
        "end": 241
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
              "start": 242,
              "end": 243
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 257
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 258,
                    "end": 261
                  }
                ],
                "start": 257,
                "end": 262
              },
              "start": 252,
              "end": 262
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 262
          }
        ],
        "start": 241,
        "end": 263
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
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
                "start": 271,
                "end": 275
              },
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
                    "start": 277,
                    "end": 278
                  },
                  "typeArguments": null,
                  "start": 277,
                  "end": 278
                },
                "start": 275,
                "end": 278
              },
              "value": null,
              "start": 268,
              "end": 278
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 283,
              "end": 287
            },
            "start": 280,
            "end": 287
          },
          "start": 267,
          "end": 287
        },
        "extendsType": {
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
                "start": 301,
                "end": 305
              },
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSIndexedAccessType",
                      "objectType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 308,
                          "end": 309
                        },
                        "typeArguments": null,
                        "start": 308,
                        "end": 309
                      },
                      "indexType": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 310,
                          "end": 311
                        },
                        "start": 310,
                        "end": 311
                      },
                      "start": 308,
                      "end": 312
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSInferType",
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 323,
                            "end": 324
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 323,
                          "end": 324
                        },
                        "start": 317,
                        "end": 324
                      },
                      "start": 314,
                      "end": 324
                    }
                  ],
                  "start": 307,
                  "end": 325
                },
                "start": 305,
                "end": 325
              },
              "value": null,
              "start": 298,
              "end": 325
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 330,
              "end": 334
            },
            "start": 327,
            "end": 334
          },
          "start": 297,
          "end": 334
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null,
            "start": 337,
            "end": 338
          },
          "typeArguments": null,
          "start": 337,
          "end": 338
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        },
        "start": 266,
        "end": 346
      },
      "declare": false,
      "start": 231,
      "end": 347
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrowExpRev",
        "optional": false,
        "typeAnnotation": null,
        "start": 353,
        "end": 363
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
              "start": 364,
              "end": 365
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 374,
                "end": 379
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 380,
                    "end": 383
                  }
                ],
                "start": 379,
                "end": 384
              },
              "start": 374,
              "end": 384
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 364,
            "end": 384
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 387
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 396,
              "end": 402
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 386,
            "end": 402
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 405
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 419
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 420,
                      "end": 425
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 426,
                          "end": 429
                        }
                      ],
                      "start": 425,
                      "end": 430
                    },
                    "start": 420,
                    "end": 430
                  }
                ],
                "start": 419,
                "end": 431
              },
              "start": 414,
              "end": 431
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 404,
            "end": 431
          }
        ],
        "start": 363,
        "end": 432
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeArguments": null,
            "start": 435,
            "end": 436
          },
          "indexType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "length",
              "raw": "'length'",
              "start": 437,
              "end": 445
            },
            "start": 437,
            "end": 445
          },
          "start": 435,
          "end": 446
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 455,
            "end": 456
          },
          "typeArguments": null,
          "start": 455,
          "end": 456
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 459,
            "end": 460
          },
          "typeArguments": null,
          "start": 459,
          "end": 460
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 473
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 479
                          },
                          "typeArguments": null,
                          "start": 478,
                          "end": 479
                        },
                        "start": 475,
                        "end": 479
                      },
                      {
                        "type": "TSRestType",
                        "typeAnnotation": {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "P",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 484,
                              "end": 485
                            },
                            "typeArguments": null,
                            "start": 484,
                            "end": 485
                          },
                          "indexType": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 0,
                              "raw": "0",
                              "start": 486,
                              "end": 487
                            },
                            "start": 486,
                            "end": 487
                          },
                          "start": 484,
                          "end": 488
                        },
                        "start": 481,
                        "end": 488
                      }
                    ],
                    "start": 474,
                    "end": 489
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 490,
                      "end": 491
                    },
                    "typeArguments": null,
                    "start": 490,
                    "end": 491
                  },
                  "start": 474,
                  "end": 492
                },
                "extendsType": {
                  "type": "TSUndefinedKeyword",
                  "start": 501,
                  "end": 510
                },
                "trueType": {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 517,
                          "end": 518
                        },
                        "typeArguments": null,
                        "start": 517,
                        "end": 518
                      },
                      "start": 514,
                      "end": 518
                    },
                    {
                      "type": "TSRestType",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "P",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 523,
                            "end": 524
                          },
                          "typeArguments": null,
                          "start": 523,
                          "end": 524
                        },
                        "indexType": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 525,
                            "end": 526
                          },
                          "start": 525,
                          "end": 526
                        },
                        "start": 523,
                        "end": 527
                      },
                      "start": 520,
                      "end": 527
                    }
                  ],
                  "start": 513,
                  "end": 528
                },
                "falseType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 532
                  },
                  "typeArguments": null,
                  "start": 531,
                  "end": 532
                },
                "start": 474,
                "end": 532
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 535
                },
                "typeArguments": null,
                "start": 534,
                "end": 535
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Shift",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 537,
                  "end": 542
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 543,
                        "end": 544
                      },
                      "typeArguments": null,
                      "start": 543,
                      "end": 544
                    }
                  ],
                  "start": 542,
                  "end": 545
                },
                "start": 537,
                "end": 545
              }
            ],
            "start": 473,
            "end": 546
          },
          "start": 463,
          "end": 546
        },
        "start": 435,
        "end": 546
      },
      "declare": false,
      "start": 348,
      "end": 547
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GrowExp",
        "optional": false,
        "typeAnnotation": null,
        "start": 553,
        "end": 560
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
              "start": 561,
              "end": 562
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 571,
                "end": 576
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSAnyKeyword",
                    "start": 577,
                    "end": 580
                  }
                ],
                "start": 576,
                "end": 581
              },
              "start": 571,
              "end": 581
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 561,
            "end": 581
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 584
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 593,
              "end": 599
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 583,
            "end": 599
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 601,
              "end": 602
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 616
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Array",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 617,
                      "end": 622
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 623,
                          "end": 626
                        }
                      ],
                      "start": 622,
                      "end": 627
                    },
                    "start": 617,
                    "end": 627
                  }
                ],
                "start": 616,
                "end": 628
              },
              "start": 611,
              "end": 628
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 601,
            "end": 628
          }
        ],
        "start": 560,
        "end": 629
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 636,
                    "end": 637
                  },
                  "typeArguments": null,
                  "start": 636,
                  "end": 637
                },
                "start": 633,
                "end": 637
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 642,
                    "end": 643
                  },
                  "typeArguments": null,
                  "start": 642,
                  "end": 643
                },
                "start": 639,
                "end": 643
              }
            ],
            "start": 632,
            "end": 644
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 646
            },
            "typeArguments": null,
            "start": 645,
            "end": 646
          },
          "start": 632,
          "end": 647
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 656,
          "end": 665
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExp",
            "optional": false,
            "typeAnnotation": null,
            "start": 668,
            "end": 675
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 680,
                        "end": 681
                      },
                      "typeArguments": null,
                      "start": 680,
                      "end": 681
                    },
                    "start": 677,
                    "end": 681
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 686,
                        "end": 687
                      },
                      "typeArguments": null,
                      "start": 686,
                      "end": 687
                    },
                    "start": 683,
                    "end": 687
                  }
                ],
                "start": 676,
                "end": 688
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 690,
                  "end": 691
                },
                "typeArguments": null,
                "start": 690,
                "end": 691
              },
              {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 694,
                      "end": 695
                    },
                    "typeArguments": null,
                    "start": 694,
                    "end": 695
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "P",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 700,
                        "end": 701
                      },
                      "typeArguments": null,
                      "start": 700,
                      "end": 701
                    },
                    "start": 697,
                    "end": 701
                  }
                ],
                "start": 693,
                "end": 702
              }
            ],
            "start": 675,
            "end": 703
          },
          "start": 668,
          "end": 703
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "GrowExpRev",
            "optional": false,
            "typeAnnotation": null,
            "start": 706,
            "end": 716
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
                  "start": 717,
                  "end": 718
                },
                "typeArguments": null,
                "start": 717,
                "end": 718
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "N",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 721
                },
                "typeArguments": null,
                "start": 720,
                "end": 721
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 723,
                  "end": 724
                },
                "typeArguments": null,
                "start": 723,
                "end": 724
              }
            ],
            "start": 716,
            "end": 725
          },
          "start": 706,
          "end": 725
        },
        "start": 632,
        "end": 725
      },
      "declare": false,
      "start": 548,
      "end": 726
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tuple",
        "optional": false,
        "typeAnnotation": null,
        "start": 732,
        "end": 737
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
              "start": 738,
              "end": 739
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 738,
            "end": 739
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 741,
              "end": 742
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 751,
              "end": 757
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 741,
            "end": 757
          }
        ],
        "start": 737,
        "end": 758
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSNumberKeyword",
          "start": 761,
          "end": 767
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null,
            "start": 776,
            "end": 777
          },
          "typeArguments": null,
          "start": 776,
          "end": 777
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 780,
            "end": 785
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
                  "start": 786,
                  "end": 787
                },
                "typeArguments": null,
                "start": 786,
                "end": 787
              }
            ],
            "start": 785,
            "end": 788
          },
          "start": 780,
          "end": 788
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 791,
              "end": 792
            },
            "typeArguments": null,
            "start": 791,
            "end": 792
          },
          "extendsType": {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 801,
              "end": 802
            },
            "start": 801,
            "end": 802
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [],
            "start": 805,
            "end": 807
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null,
                "start": 810,
                "end": 811
              },
              "typeArguments": null,
              "start": 810,
              "end": 811
            },
            "extendsType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 820,
                "end": 821
              },
              "start": 820,
              "end": 821
            },
            "trueType": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 825,
                    "end": 826
                  },
                  "typeArguments": null,
                  "start": 825,
                  "end": 826
                }
              ],
              "start": 824,
              "end": 827
            },
            "falseType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GrowExp",
                "optional": false,
                "typeAnnotation": null,
                "start": 830,
                "end": 837
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 839,
                          "end": 840
                        },
                        "typeArguments": null,
                        "start": 839,
                        "end": 840
                      }
                    ],
                    "start": 838,
                    "end": 841
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "N",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 843,
                      "end": 844
                    },
                    "typeArguments": null,
                    "start": 843,
                    "end": 844
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 847,
                        "end": 849
                      }
                    ],
                    "start": 846,
                    "end": 850
                  }
                ],
                "start": 837,
                "end": 851
              },
              "start": 830,
              "end": 851
            },
            "start": 810,
            "end": 851
          },
          "start": 791,
          "end": 851
        },
        "start": 761,
        "end": 851
      },
      "declare": false,
      "start": 727,
      "end": 852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrayValidator",
        "optional": false,
        "typeAnnotation": null,
        "start": 868,
        "end": 882
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
              "start": 883,
              "end": 884
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 893,
                "end": 900
              },
              "start": 893,
              "end": 902
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 883,
            "end": 902
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 905
            },
            "constraint": null,
            "default": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 908,
                  "end": 909
                },
                "typeArguments": null,
                "start": 908,
                "end": 909
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 910,
                "end": 916
              },
              "start": 908,
              "end": 917
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 904,
            "end": 917
          }
        ],
        "start": 882,
        "end": 918
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
              "name": "lengthRange",
              "optional": false,
              "typeAnnotation": null,
              "start": 925,
              "end": 936
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                      "start": 937,
                      "end": 938
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 947,
                      "end": 953
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 937,
                    "end": 953
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 955,
                      "end": 956
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 965,
                      "end": 971
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 955,
                    "end": 971
                  }
                ],
                "start": 936,
                "end": 972
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "start",
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
                        "start": 980,
                        "end": 981
                      },
                      "typeArguments": null,
                      "start": 980,
                      "end": 981
                    },
                    "start": 978,
                    "end": 981
                  },
                  "start": 973,
                  "end": 981
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "endBefore",
                  "optional": false,
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
                        "start": 994,
                        "end": 995
                      },
                      "typeArguments": null,
                      "start": 994,
                      "end": 995
                    },
                    "start": 992,
                    "end": 995
                  },
                  "start": 983,
                  "end": 995
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrayValidator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 998,
                    "end": 1012
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Exclude",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1013,
                          "end": 1020
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1021,
                                "end": 1040
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1041,
                                      "end": 1053
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSRestType",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1058,
                                                  "end": 1063
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1064,
                                                        "end": 1065
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1064,
                                                      "end": 1065
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "E",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1067,
                                                        "end": 1068
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1067,
                                                      "end": 1068
                                                    }
                                                  ],
                                                  "start": 1063,
                                                  "end": 1069
                                                },
                                                "start": 1058,
                                                "end": 1069
                                              },
                                              "start": 1055,
                                              "end": 1069
                                            }
                                          ],
                                          "start": 1054,
                                          "end": 1070
                                        }
                                      ],
                                      "start": 1053,
                                      "end": 1071
                                    },
                                    "start": 1041,
                                    "end": 1071
                                  }
                                ],
                                "start": 1040,
                                "end": 1072
                              },
                              "start": 1021,
                              "end": 1072
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ExpandSmallerTuples",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1074,
                                "end": 1093
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "UnshiftTuple",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1094,
                                      "end": 1106
                                    },
                                    "typeArguments": {
                                      "type": "TSTypeParameterInstantiation",
                                      "params": [
                                        {
                                          "type": "TSTupleType",
                                          "elementTypes": [
                                            {
                                              "type": "TSRestType",
                                              "typeAnnotation": {
                                                "type": "TSTypeReference",
                                                "typeName": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "Tuple",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1111,
                                                  "end": 1116
                                                },
                                                "typeArguments": {
                                                  "type": "TSTypeParameterInstantiation",
                                                  "params": [
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "I",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1117,
                                                        "end": 1118
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1117,
                                                      "end": 1118
                                                    },
                                                    {
                                                      "type": "TSTypeReference",
                                                      "typeName": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "S",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 1120,
                                                        "end": 1121
                                                      },
                                                      "typeArguments": null,
                                                      "start": 1120,
                                                      "end": 1121
                                                    }
                                                  ],
                                                  "start": 1116,
                                                  "end": 1122
                                                },
                                                "start": 1111,
                                                "end": 1122
                                              },
                                              "start": 1108,
                                              "end": 1122
                                            }
                                          ],
                                          "start": 1107,
                                          "end": 1123
                                        }
                                      ],
                                      "start": 1106,
                                      "end": 1124
                                    },
                                    "start": 1094,
                                    "end": 1124
                                  }
                                ],
                                "start": 1093,
                                "end": 1125
                              },
                              "start": 1074,
                              "end": 1125
                            }
                          ],
                          "start": 1020,
                          "end": 1126
                        },
                        "start": 1013,
                        "end": 1126
                      }
                    ],
                    "start": 1012,
                    "end": 1127
                  },
                  "start": 998,
                  "end": 1127
                },
                "start": 996,
                "end": 1127
              },
              "body": null,
              "expression": false,
              "start": 936,
              "end": 1128
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 925,
            "end": 1128
          }
        ],
        "start": 919,
        "end": 1130
      },
      "abstract": false,
      "declare": true,
      "start": 854,
      "end": 1130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 1130
}
```
